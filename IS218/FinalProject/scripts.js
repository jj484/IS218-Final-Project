function checkUsername() {
    var x = document.getElementById("username").value;
    document.getElementById("demo").innerHTML = "Username is: " + x;
}

function checkPassword() 
{ 
  var valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
  var x = document.getElementById("password").value;

  if(!valid.test(x)) 
  { 
  document.getElementById("pwText").innerHTML = "Password must be 8-30 characters with 1 upper case letter, 1 lower case letter, and 1 number"; 
  }
  else
  { 
    document.getElementById("pwText").innerHTML = "good";
  }
}


function checkConfirmPassword() {
    var x = document.getElementById("password").value;
    var y = document.getElementById("confirmPassword").value;
    if(x==y){
        document.getElementById("cpwText").innerHTML = "Passwords match!";
    } else {
        document.getElementById("cpwText").innerHTML = "Passwords DO NOT match!";        
    }
}

function checkEmail(){
    var valid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var x = document.getElementById("email").value;
    if(!valid.test(x)){
        document.getElementById("emText").innerHTML = "Email Invalid!";
    } else {
        document.getElementById("emText").innerHTML = "";
    }
}

function checkName(){
    var letters = /^[A-Za-z]+$/;
    var x = document.getElementById("fname").value;
    var y = document.getElementById("lname").value;
    
    if(!letters.test(x))
        document.getElementById("fnText").innerHTML = "Not Valid: can only contain letters";
    else 
        document.getElementById("fnText").innerHTML = "";
    
        
    if(!letters.test(y))
        document.getElementById("lnText").innerHTML = "Not Valid: can only contain letters";
    else 
        document.getElementById("lnText").innerHTML = "";
    
}

function validateNav(){
    window.location.replace('registeraction.php')
}