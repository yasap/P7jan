//SIGNUP//
var signupsubmit = document.getElementById("signupsubmit");


 signupsubmit.addEventListener('click', (e) => {
    e.preventDefault();
     console.log("hi");
    var fname = document.getElementById("fname").value;
    var sname = document.getElementById("sname").value;
    var email = document.getElementById("email").value;
    var psw = document.getElementById("psw").value;

    var user = {
        fname: fname,
        sname: sname,
        email: email,
        psw: psw,
    }
   
     
var json = JSON.stringify(user);
    localStorage.setItem("loggedInUser",json)
     console.log("user added");
     document.location = '/home.html';
    
 })


