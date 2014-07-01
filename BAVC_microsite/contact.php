<?php 
 $to = "baypeace@baypeace.org"; 
 $from = $_REQUEST['Email']; 
 $name = $_REQUEST['Name'] ; 
 $headers = "From: $from"; 
 $subject = "Power of Youth Newsletter/Get Involved Contact"; 
 
 $fields = array(); 
 $fields{"Name"} = "Name"; 
 $fields{"Email"} = "Email"; 
 $fields{"list"} = "Mailing List"; 
 $fields{"Zipcode"} = "Zipcode";
 $fields{"Message"} = "Message"; 
 
 $body = "Contact details from the web form:\n\n"; foreach($fields as $a => $b){ 	$body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); } 
 
 $headers2 = "From: baypeace@baypeace.org"; 
 $subject2 = "Thank you for contacting us"; 
 $autoreply = "Thank you for contacting us and making a difference! If you have any more questions, please consult our main website at http://www.baypeace.org/ for general information and contact information";
 
 if($from == '') {print "You have not entered an email, please go back and try again";} 
 else { 
 if($name == '') {print "You have not entered a name, please go back and try again";} 
 else { 
 $send = mail($to, $subject, $body, $headers); 
 $send2 = mail($from, $subject2, $autoreply, $headers2); 
 if($send) 
 {header( "Location: thankyou.html" );} 
 else 
 {print "We encountered an error sending your mail, please notify baypeace@baypeace.org"; } 
 }
}
 ?> 