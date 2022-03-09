//this function turns all fileds to yellow when the user focuses on it 
function myFunction1(x) {
    x.style.background = "#fffcba"
}
//function myFunction2(x) {
 //   x.value = x.value.toUpperCase();
//}
function myFunction2(x) {
    x.value = x.value;
}

function blurFunction1(x) {
    // No focus = Changes the background color of input to white
    x.style.background = ""

}
//this function turns all fileds to its original color white when the user gets out of the fileds 
function blurFunction2(x) {
    // No focus = Changes the background color of input to white
    x.value = x.value;

}

/* Check that message input field is not empty - 
After these tests and if there are no errors, the form data is submitted successfully to the server as expected. */

function redmsg() {
    var msg = document.getElementById("textarea").value;
    if (msg == "") {
        var str = "the message field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("demo").innerHTML = result;

    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("demo").innerHTML = result;
    }
}


/* Check that name input field is not empty - 
After these tests and if there are no errors, the form data is submitted successfully to the server as expected. */
function redmsg3() {
    var msg = document.forms["myForm"]["fname"].value;
    if (msg == "" || msg == null) {
        var str = "first name field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("demo3").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("demo3").innerHTML = result;
    }
}


/* Check that username input field is not empty - 
After these tests and if there are no errors, the form data is submitted successfully to the server as expected. */

function redmsg33() {
    var msg = document.forms["myForm"]["uname"].value;
    if (msg == "" || msg == null) {
        var str = "username field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("demouser").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("demouser").innerHTML = result;
    }
}


/* Check that password input field is not empty - 
After these tests and if there are no errors, the form data is submitted successfully to the server as expected. */

function redmsg333() {
    var msg = document.forms["myForm"]["psw"].value;
    if (msg == "" || msg == null) {
        var str = "password field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("demopas").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("demopas").innerHTML = result;
    }
}

function redmsg2() {
    var msg = document.forms["myForm"]["lname"].value;
    if (msg == "") {
        var str = "last name field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("demo2").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("demo2").innerHTML = result;
    }
}

function redmsg1() {
    var msg = document.forms["myForm"]["email"].value;;
    if (msg == "") {
        var str = "email field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("demo1").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("demo1").innerHTML = result;
    }
}
/* Check that the name field is not empty. Check that the email address field is not empty and that the email address follows the correct email format. Hint: Make use of regular expressions. Check that message input field is not empty - After these tests and if there are no errors, the form data is submitted successfully to the server as expected.
        If there are any error in the user’s input data, display an error section that dynamically describes the exact error(s) (in red) and make sure that the form data is then not submitted to the server in this case */

function check() {
    var y = document.forms["myForm"]["email"].value;
    var x = document.forms["myForm"]["fname"].value;
    var x2 = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["textarea"].value;

    // var Mytest = new RegExp();
    // Mytest = /[a-z0-9_\.\-]+@+[a-z0-9_\.\-]+\.+[a-z0-9_\.\-]/i;
    // if (Mytest.test(email) == false) {
    //     return false;
    // }

    // if (x == null || x == "") {
    //     alert("First name must be filled out");
    //     return false;
    // } else if (x2 == null || x2 == "") {
    //     alert("Last name must be filled out");
    //     return false;
    // } else if (y == "") {
    //     alert("Email must be filled out");
    //     return false;
    // }
    // if (!ValidEmail()) {
    //     alert("Not a valid e-mail address");

    // }

    if (x == null || x == "" || x2 == null || x2 == "" || y == "" || z == "") {

        if (x == null || x == "") {

            var str = "first name field should not be empty!!";
            var result = str.fontcolor("red");
            document.getElementById("demo3").innerHTML = result;
        } else {
            var str = "";
            var result = str.fontcolor("red");
            document.getElementById("demo3").innerHTML = result;
        }

        if (x2 == null || x2 == "") {
            var str = "last name field should not be empty!!";
            var result = str.fontcolor("red");
            document.getElementById("demo2").innerHTML = result;
        } else {
            var str = "";
            var result = str.fontcolor("red");
            document.getElementById("demo2").innerHTML = result;
        }

    
       

        if (y == "") {

            var str = "email field should not be empty!!";
            var result = str.fontcolor("red");
            document.getElementById("demo1").innerHTML = result;
        } else {
            var str = "";
            var result = str.fontcolor("red");
            document.getElementById("demo1").innerHTML = result;
        }


        if (z == "") {

            var str = "the message field should not be empty!!";
            var result = str.fontcolor("red");
            document.getElementById("demo").innerHTML = result;
        } else {
            var str = "";
            var result = str.fontcolor("red");
            document.getElementById("demo").innerHTML = result;
        }
        alert('form was NOT SUBMITTED');
        return false;
    } else {
        alert('form was sumbitted succefully');
        return true;
    }
}

/* function ValidEmail222() {
    var email = document.getElementById('email')
    var Mytest = new RegExp();

    Mytest = /[a-z0-9_\.\-]+@+[a-z0-9_\.\-]+\.+[a-z0-9_\.\-]/i;
    if (Mytest.test(email) == false) {
        return false;
    }
    return true;
}
function ValidateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
} */
function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}


//to check ewether there is data entered by user or not
//if so the submission will be succeful othewse it will fail

function checkLogin() {
    var msguser = document.forms["myForm"]["uname"].value;
    var pasw = document.forms["myForm"]["psw"].value;
    if (msguser == null || msguser == "" || pasw == null || pasw == "") {

        if (msguser == "" || msguser == null) {
            var str = "Username field should not be empty!!";
            var result = str.fontcolor("red");
            document.getElementById("demouser").innerHTML = result;
        } else {
            var str = "";
            var result = str.fontcolor("red");
            document.getElementById("demouser").innerHTML = result;
        }

        if (pasw == "" || pasw == null) {
            var str = "Password field should not be empty!!";
            var result = str.fontcolor("red");
            document.getElementById("demopas").innerHTML = result;
        } else {
            var str = "";
            var result = str.fontcolor("red");
            document.getElementById("demopas").innerHTML = result;
        }
        alert('login failed');
        return false;
    } else {
        if (msguser == "Lubaba" || msguser == "sara" || msguser == "faiza") {
            if (pasw == "0000") {
                document.getElementById("avatarlog").src = "img/avatar3.jpg";
                alert('logged in succefully');
                window.location.href = "index1.html";
                return false;
            } else {
                var str = "Sorry, your password was incorrect. Please recheck your password.";
                var result = str.fontcolor("red");
                document.getElementById("demopas").innerHTML = result;
                return false;
            }
        } else {

            alert('Sorry, Usename was incorrect.');
            return false;
        }
    }
}


function checksignup() {
    var y = document.forms["myForm"]["email"].value;
    var x = document.forms["myForm"]["fname"].value;
    var x2 = document.forms["myForm"]["address"].value;
    var z = document.forms["myForm"]["city"].value;
    var z1 = document.forms["myForm"]["state"].value;
    var z2= document.forms["myForm"]["zip"].value;
    var c1= document.forms["myForm"]["cname"].value;
    var c2= document.forms["myForm"]["ccnum"].value;
    var c3= document.forms["myForm"]["expmonth"].value;
    var c4= document.forms["myForm"]["expyear"].value;
    var c5= document.forms["myForm"]["cvv"].value;

if (x == null || x == "" || x2 == null || x2 == "" || y == "" || z == ""|| z1 == ""|| z2 == ""|| c1 == ""|| c2 == ""|| c3 == ""|| c4 == ""|| c5 == "") {

    if (x == null || x == "") {

        var str = "name field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("namedemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("namedemo").innerHTML = result;
    }

    if (x2 == null || x2 == "") {
        var str = "address field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("addressdemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("addressdemo").innerHTML = result;
    }


   

    if (y == "") {

        var str = "email field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("emaildemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("emaildemo").innerHTML = result;
    }


    if (z == "") {

        var str = "city field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("citydemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("citydemo").innerHTML = result;
    }

    
    if (z1 == "") {

        var str = "state field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("statedemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("statedemo").innerHTML = result;
    }


    
    if (z2 == "") {

        var str = "zip field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("zipdemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("zipdemo").innerHTML = result;
    }


    if (c1 == "") {

        var str = "name field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("cnamedemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("cnamedemo").innerHTML = result;
    }

    
    if (c2 == "") {

        var str = "number field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("ccnumdemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("ccnumdemo").innerHTML = result;
    }

    
    if (c3 == "") {

        var str = "exp month field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("expmonthdemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("expmonthdemo").innerHTML = result;
    }

    if (c4 == "") {

        var str = "exp year field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("expyeardemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("expyeardemo").innerHTML = result;
    }

    if (c5 == "") {

        var str = "cvv field should not be empty!!";
        var result = str.fontcolor("red");
        document.getElementById("cvvdemo").innerHTML = result;
    } else {
        var str = "";
        var result = str.fontcolor("red");
        document.getElementById("cvvdemo").innerHTML = result;
    }


    alert('check out failed');
    return false;
} else {
    alert('checked out succefully');
    return true;
}
}

//index3 sign up validation form 
function checkindex3() {
    var y = document.forms["myForm"]["email"].value;
    var x = document.forms["myForm"]["username"].value;
    var x2 = document.forms["myForm"]["password"].value;
    var z = document.forms["myForm"]["password2"].value;
    if (x == null || x == "" || x2 == null || x2 == "" || y == "" || z == "") {

        if (x == null || x == "") {

            var str = "enter username!!";
            var result = str.fontcolor("red");
            document.getElementById("usernamedemo").innerHTML = result;
        } else {
            var str = "";
            var result = str.fontcolor("red");
            document.getElementById("usernamedemo").innerHTML = result;
        }

        if (x2 == null || x2 == "") {
            var str = "enter password!!";
            var result = str.fontcolor("red");
            document.getElementById("passdemo").innerHTML = result;
        } else {
            var str = "";
            var result = str.fontcolor("red");
            document.getElementById("passdemo").innerHTML = result;
        }


        if (y == "") {

            var str = "enter an email!!";
            var result = str.fontcolor("red");
            document.getElementById("emaildemo").innerHTML = result;
        } else {
            var str = "";
            var result = str.fontcolor("red");
            document.getElementById("emaildemo").innerHTML = result;
        }

        var atpos = y.indexOf("@");
        var dotpos = y.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            alert("not a valid email!!")}

        if (z == "") {

            var str = "retype your password!!";
            var result = str.fontcolor("red");
            document.getElementById("pass2demo").innerHTML = result;
        } else {
            var str = "";
            var result = str.fontcolor("red");
            document.getElementById("pass2demo").innerHTML = result;
        }
        alert('sign up failed');
        return false;
    } else {

        alert('welcome to treasure bookstore');
        return true;
    }
}