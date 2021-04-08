package com.example.demo.pfe.service;

import java.io.File;
import java.io.Reader;
import java.io.StringReader;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.soap.MessageFactory;
import javax.xml.soap.MimeHeaders;
import javax.xml.soap.SOAPConnection;
import javax.xml.soap.SOAPConnectionFactory;
import javax.xml.soap.SOAPConstants;
import javax.xml.soap.SOAPElement;
import javax.xml.soap.SOAPEnvelope;
import javax.xml.soap.SOAPHeader;
import javax.xml.soap.SOAPMessage;
import javax.xml.soap.SOAPPart;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamReader;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;

import org.springframework.boot.web.servlet.server.Session;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;

import com.example.demo.pfe.dto.GdsSessionModel;


@Service
public class SendRequest {
   
	public <E, S> S send (E request, S res, GdsSessionModel gds,String service) {
		try {
			SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmssS");
			// checking log folders
			File folderRs = new File(System.getProperty("user.dir") + File.separator + "HotelRS");
			File folderRq = new File(System.getProperty("user.dir") + File.separator + "HotelRQ");
			if (!folderRs.exists()) {
				folderRs.mkdir();
			}
			if (!folderRq.exists()) {
				folderRq.mkdir();
			}

			SOAPConnectionFactory soapConnectionFactory = SOAPConnectionFactory.newInstance();
			SOAPConnection soapConnection = soapConnectionFactory.createConnection();

			MessageFactory messageFactory = MessageFactory.newInstance(SOAPConstants.SOAP_1_2_PROTOCOL);
			SOAPMessage soapMessage = messageFactory.createMessage();

			Document document = (Document) DocumentBuilderFactory.newInstance().newDocumentBuilder().newDocument();
			Marshaller marshaller = JAXBContext.newInstance(request.getClass()).createMarshaller();
			marshaller.marshal(request, document);

			soapMessage.getSOAPBody().addDocument((org.w3c.dom.Document) document);

			SOAPPart sp = soapMessage.getSOAPPart();
			SOAPEnvelope se = sp.getEnvelope();
			SOAPHeader header = soapMessage.getSOAPHeader();

			se.addNamespaceDeclaration("hot", "http://TekTravel/HotelBookingApi");
			se.addNamespaceDeclaration("soap", "http://www.w3.org/2003/05/soap-envelope");

			header.addNamespaceDeclaration("wsa", "http://www.w3.org/2005/08/addressing");

			SOAPElement credentials = header.addChildElement("Credentials", "hot");
			credentials.setAttribute("UserName", gds.getLogin());
			credentials.setAttribute("Password", gds.getPassword());

			SOAPElement action = header.addChildElement("Action", "wsa");
			action.setTextContent("http://TekTravel/HotelBookingApi/"+service);

			SOAPElement to = header.addChildElement("To", "wsa");
			to.setTextContent(gds.getUrl());

			MimeHeaders headers = soapMessage.getMimeHeaders();
			headers.addHeader("Content-Type", "application/soap+xml; charset=utf-8");
			soapMessage.saveChanges();

			try {
				TransformerFactory transformerFactory = TransformerFactory.newInstance();
				Transformer transformer = transformerFactory.newTransformer();
				Source sourceContent = soapMessage.getSOAPPart().getContent();

				java.io.StringWriter sw = new java.io.StringWriter();
				StreamResult result = new StreamResult(sw);
				transformer.transform(sourceContent, result);

				File reqFile = new File(System.getProperty("user.dir") + File.separator + "HotelRQ" + File.separator
						+ format.format(new Date()) + service + ".xml");
				StreamResult result1 = new StreamResult(reqFile);
				transformer.transform(sourceContent, result1);
			} catch (Exception e) {
				e.printStackTrace();
			}

			SOAPMessage soapResponse = null;
			soapResponse = soapConnection.call(soapMessage, gds.getUrl());
			TransformerFactory transformerFactory = TransformerFactory.newInstance();
			Transformer transformer = transformerFactory.newTransformer();
			Source sourceContent = soapResponse.getSOAPPart().getContent();

			java.io.StringWriter sw = new java.io.StringWriter();
			StreamResult result = new StreamResult(sw);
			transformer.transform(sourceContent, result);

			File resFile = new File(System.getProperty("user.dir") + File.separator + "HotelRS" + File.separator
					+ format.format(new Date()) + service + ".xml");
			StreamResult result2 = new StreamResult(resFile);
			transformer.transform(sourceContent, result2);

			// Parse XML To Object
			try {

				Reader reader = new StringReader(sw.toString());
				XMLInputFactory factory = XMLInputFactory.newInstance();
				XMLStreamReader xsr = factory.createXMLStreamReader(reader);

				Session s = null;
				xsr.nextTag();
				while (!xsr.getLocalName().equals("Body")) {
					if (xsr.getLocalName().equals("Session")) {
						JAXBContext jc = JAXBContext.newInstance(Session.class);
						Unmarshaller unmarshaller = jc.createUnmarshaller();
						s = (Session) unmarshaller.unmarshal(xsr, Session.class).getValue();
					}

					try {
						xsr.nextTag();
					} catch (Exception e) {
						try {
							xsr.nextTag();

						} catch (Exception e2) {
							xsr.nextTag();
						}
					}
				}
				xsr.nextTag();
				if (xsr.getLocalName().equals("Fault")) {
					xsr.nextTag();
					System.err.println("Fatal Error");
					if (xsr.getLocalName().equals("faultcode")) {
						System.err.println(xsr.getElementText());
						xsr.nextTag();
					}
					if (xsr.getLocalName().equals("faultstring")) {
						String fault = xsr.getElementText().toString();
//						AmadeusFault.setError(fault);
					}
					return null;
				}

				JAXBContext jc = JAXBContext.newInstance(res.getClass());
				Unmarshaller unmarshaller = jc.createUnmarshaller();
				res = (S) unmarshaller.unmarshal(xsr, res.getClass()).getValue();

				return (res);

			} catch (Exception e) {
				System.err.println(e.getMessage());
				e.printStackTrace();
			}

			soapConnection.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
