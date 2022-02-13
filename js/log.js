// LOGIN //

var localStorage = window.localStorage;
var logginForm = document.getElementById("myform");
 
logginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hi");
    var email = document.getElementById("email").value;
    var psw = document.getElementById("psw").value;

    var ListOfUsers = localStorage.getItem("storedUsers") ? JSON.parse(localStorage.getItem("storedUsers")) : [];
    if (ListOfUsers.length > 0) {
       
        var machingUsers = ListOfUsers.filter(element => element.email == email && element.password == psw);
        if (machingUsers.length > 0) {
            var loggedInUser = machingUsers[0]
            var listOfLoggeIn = localStorage.getItem("listOfLoggedIn") ? JSON.parse(localStorage.getItem("listOfLoggedIn")) : [];
            listOfLoggeIn.push(loggedInUser);
            window.localStorage.setItem("listOfLoggedIn", JSON.stringify(listOfLoggeIn));
            window.location.pathname = "/home.html";
        }
        else {
            alert('wrong user');
        }
    } else {
        alert("User does not exist, please signup");
        window.location.pathname = "/signup.html";
    }
})
    

   
//     console.log(email, psw);
    
//      let loggedInUser = storedUsers.filter(u => u.email == email && u.psw == psw);
//     if (email === storedUsers.email && psw === storedUsers.psw) {
//         console.log('Login successful');
//         document.location = '/home.html';
//     }
//     else {
//         console.log('Wrong credentials')
    

// })


