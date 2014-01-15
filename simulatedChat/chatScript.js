// JavaScript Document
$(document).ready(function(){
	
	//function to scroll for new message
	var scrollNext = function (){
$("#chatWindowDiv")[0].scrollTop = $("#chatWindowDiv")[0].scrollHeight;};

	//animation effect 
	var animateChat = function() {
		$("p.chatWindow:last").hide().fadeIn("fast");
	};

	  //set initial customer reply for array
	var i = 0;

	//on button click, prepare new message
  $("#addButton").click(function(){

	//agent reply array
	var customerName = "<u>" + $("#chatTextInput").val() + "</u>";
	var agentReplies = [
		/*0*/"Hello " + customerName + ", how may I help you?",
		/*1*/"Sorry for your inconvience. However, I see the problem, you're not a customer of Monitise - the UK's sixth fastest-growing tech company. Does that help?",
		/*2*/"I understand your frustration with the problem. Though 2013 marks the third year running that Monitise has maintained a top 15 ranking, having been named third and twelfth in 2012 and 2011 respectively. Would you like to know more?",
		/*3*/"Monitise also recently announced a major expansion of the Monitise Commerce Network. With the expansion, their team of experts is also expanding. With new hires like <u>Jason Post</u>, with dual experience in development and design, Monitise will be poised to be bring new innovation and improved experiences for all of its customers. Is there anything else I can help you with?",
		/*4*/"We at XYZ Company aplogize for your inconvenience. Our regular team to handle your request is unavailable until next week. Thank you for being a valued customer. [disconnected]",
		/*5*/"[ . . . chat terminated . . . ]"
		];
		
		//customer and agent messages
	  var newCustomerMsg = $("#chatTextInput").val();
	  var newCustomerPara = "<p class=\"chatWindow customer\">" + newCustomerMsg + "</p>";
	  var newAgentPara = "<p class=\"chatWindow agent\">" + agentReplies[i] + "</p>";
	  
	  //check if textinput has a value, animates new message
	  if (newCustomerMsg != "") {
    $("#chatWindowDiv").append(newCustomerPara);
	animateChat ();
	scrollNext();
	  } 
	  if ((newCustomerMsg != "") && (i <= 4)) {
		//automate agent replies 
			setTimeout(function(){
									$("#chatWindowDiv").append("<p class=\"chatWindow agent\">[Customer Service Agent] Steve is typing...</p>");
									animateChat ();
									scrollNext();
									},((300 + (Math.random())*1000)));

			setTimeout(function() {$("#chatWindowDiv p:last-child").remove();
									$("#chatWindowDiv").append(newAgentPara); 
									i ++;
									animateChat ();
									scrollNext();},((2500 + (Math.random())*3000)));
									//resets input for next message
									$("#chatTextInput").val("");
		
	  } // if last message do this
	  else if ((newCustomerMsg != "") && (i = 5)) { 
			$("#chatWindowDiv").append(newAgentPara); 				
			animateChat ();
			scrollNext();
			$("#chatTextInput").val("");
	  };
  });
});