//SIGNUP//
var myform = document.getElementById("myform");


myform.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("hi");
    var fname = document.getElementById("fname").value;
    var sname = document.getElementById("sname").value;
    var email = document.getElementById("email").value;
    var psw = document.getElementById("psw").value;

    var ListUsers = localStorage.getItem("storedUsers") ? JSON.parse(localStorage.getItem("storedUsers")) : [];
    var user = {
        firstname: fname,
        surname: sname,
        email: email,
        password: psw,
    }

    ListUsers.push(user);
     
    localStorage.setItem("storedUsers", JSON.stringify(ListUsers));
    //  user.forEach(console.log);;
    //  document.location = '/home.html';
     
    
     
 })



