package com.example.demo.pfe.dto;

public class GdsSessionModel {
    private String login;
    private String password;
    private String url;
    
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public GdsSessionModel(String login, String password, String url) {
		super();
		this.login = login;
		this.password = password;
		this.url = url;
	}

	

}
