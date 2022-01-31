// LOGIN //

var signinsubmit = document.getElementById("signinsubmit");
 
signinsubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("hi");

    var email = document.getElementById("email").value;
    var psw = document.getElementById("psw").value;
    console.log(email, psw);
    var storeUsers = localStorage.getItem("loggedInUser") ? JSON.parse(localStorage.getItem("loggedInUser")) : [];
    console.log(storeUsers);
    if (email === storeUsers.email && psw === storeUsers.psw) {
        console.log('Login successful');
        document.location = '/home.html';
    }
    else {
        console.log('Wrong credentials')
    }

})
