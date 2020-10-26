function sendEmail(){
  //get form values
  var firstName = document.getElementById('fname').value;
  var surname = document.getElementById('Sname').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var email = document.getElementById('email').value;
  var myMessage = document.getElementById('message').value;

  console.log(firstName + " " + surname);
  console.log(email);
  console.log(myMessage);

  //send email
  Email.send({
	Host: "smtp.gmail.com",
  Security: 'ssl',
	Username : "contactKudaMushunje@gmail.com",
	Password : "wordpassmus092",
	To : "mushunjek@gmail.com",
	From : "contactKudaMushunje@gmail.com",
	Subject : "CV Website Contact from: " + String(firstName) + " " + String(surname),
	Body : String(myMessage) + "<br><br>Phone Number: " + String(phoneNumber) + "<br><br>Email Address: " +  String(email),
	}).then(function(message){
    alert("mail sent successfully")
  });
}
