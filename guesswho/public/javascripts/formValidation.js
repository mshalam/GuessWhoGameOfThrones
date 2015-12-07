//create client side fom validation for email



function validateForm() {
    var x = document.forms["myForm"]["femail"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
    //check if its a valid email adress
    var atpos = x.indexOf("@");
    if (atpos<1) {
        alert("Not a valid e-mail address");
        return false;
    }
}


