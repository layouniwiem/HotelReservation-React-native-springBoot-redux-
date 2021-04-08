package com.example.demo.pfe.dto.SearchHotel;

import java.util.List;

public class RoomToSearch {
	private int nbAdult;
	private int nbChildren;
	private int nbInfant;
	private List<Integer> childrenAgeList;

	public int getNbAdult() {
		return nbAdult;
	}

	public RoomToSearch() {

	}

	public RoomToSearch(int nbAdult) {
		super();
		this.nbAdult = nbAdult;
		this.nbChildren = 0;
		this.nbInfant = 0;
	}

	public void setNbAdult(int nbAdult) {
		this.nbAdult = nbAdult;
	}

	public int getNbChildren() {
		return nbChildren;
	}

	public void setNbChildren(int nbChildren) {
		this.nbChildren = nbChildren;
	}

	public int getNbInfant() {
		return nbInfant;
	}

	public void setNbInfant(int nbInfant) {
		this.nbInfant = nbInfant;
	}

	public List<Integer> getChildrenAgeList() {
		return childrenAgeList;
	}

	public void setChildrenAgeList(List<Integer> childrenAgeList) {
		this.childrenAgeList = childrenAgeList;
	}
}
