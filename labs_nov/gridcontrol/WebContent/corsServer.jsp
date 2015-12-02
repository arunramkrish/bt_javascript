<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%
	String incomingOrigin = request.getHeader("Origin");
	response.setHeader("Access-Control-Allow-Origin", incomingOrigin);
 %>{"teamName":"India",
	"totalScore": 200,
	"wickets":3,
	"overs":23.4, 
	"scores" : [
		{
			"name" :"Shikhar Dhawan",
			"outType" : "lbw",
			"bowler" : "Steyn",
			"runs" : 50,
			"ballsFaced" : 60
		},
		{
			"name" :"Rohit Sharma",
			"outType" : "bowled",
			"bowler" : "Steyn",
			"runs" : 50,
			"ballsFaced" : 60
		},
		{
			"name" :"Virat Kholi",
			"outType" : "caught",
			"bowler" : "Steyn",
			"caughtBy" : "AB Devillers",
			"runs" : 50,
			"ballsFaced" : 60
		},
		{
			"name" :"Ajinkya Rahane",
			"outType" : "runout",
			"fielder" : "Rhodes",
			"runs" : 50,
			"ballsFaced" : 60
		}
	]
}