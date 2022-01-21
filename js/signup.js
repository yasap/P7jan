/* SIGNUP*/

function signup(e) {
    event.preventDefault();

    var fname = document.getElementById("fname").value;
    var sname = document.getElementById("sname").value;
    var email = document.getElementById("email").value;
    var psw = document.getElementById("psw").value;
   
    var user = {
        fname: fname,
        sname: sname,
        email: email,
        psw: psw,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(fname, json);
    console.log("user added");
}

/* SIGNIN */

function signin(e) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var psw = document.getElementById("psw").value;
   
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    console.log(data);

    email.addEvenListener("input", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Enter your Email!");
        }
        else {
            email.setCustomValidity("");
        }
    });


    psw.addEvenListener("input", function (event) { 
        if (psw.validity.typeMismatch) {
            psw.setCustomValidity("Enter your Password!");
        }
        else {
            pswg.setCustomValidity("");
        }
    });
}
