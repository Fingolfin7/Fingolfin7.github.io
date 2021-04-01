function sendEmail(){
  //get form values
  var firstName = document.getElementById('fname').value;
  var surname = document.getElementById('Sname').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var email = document.getElementById('email').value;
  var myMessage = document.getElementById('message').value;
  var error_message= document.getElementById('error_message');
  var correctFormat = true;
  var text;

  error_message.style.padding= "10px";

  console.log(firstName + " " + surname);
  console.log(email);
  console.log(myMessage);

//check if form sections have been filled in properly:

if(firstName.length == 0 || surname.length == 0){
  text = " *Enter valid Name and Surname* ";
  error_message.innerHTML = text;
  correctFormat = false;
}

else if(isNaN(phoneNumber) || phoneNumber.length !=10){
  text = " *Enter valid phone number* <br> <em>*No spaces*</em> ";
  error_message.innerHTML=text;
  correctFormat = false;
}

else if(email.indexOf("@") == -1){//checking for the @ symbol on the email address
  text = " *Enter valid email address* ";
  error_message.innerHTML=text;
  correctFormat = false;
}

  //send email
  if(correctFormat){
    error_message.innerHTML = "";
    error_message.style.padding = "0px";
    Email.send({
  	Host: "smtp.gmail.com",
    	Security: 'ssl',
  	Username : "contactKudaMushunje@gmail.com",
  	Password : "contactKuda",
  	To : "mushunjek@gmail.com",
  	From : "contactKudaMushunje@gmail.com",
  	Subject : "CV Website Contact from: " + String(firstName) + " " + String(surname),
  	Body : String(myMessage) + "<br><br>Phone Number: " + String(phoneNumber) + "<br><br>Email Address: " +  String(email),
  	}).then(function(message){
      alert("mail sent successfully")
    });
  }
}
