package com.bt.ajaxserver.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class ContactServlet
 */
@WebServlet("/contacts")
public class ContactServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ContactServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if (request.getServletContext().getAttribute("contacts") == null) {
			request.getServletContext().setAttribute("contacts", new ArrayList<>());
		}
		List<Contact> contacts = (List<Contact>)request.getServletContext().getAttribute("contacts");
		
		ObjectMapper mapper = new ObjectMapper();
		Contact newContact = mapper.readValue(request.getInputStream(), Contact.class);
		
		contacts.add(newContact);
		response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
		mapper.writeValue(response.getOutputStream(), contacts);
		
	}

}
