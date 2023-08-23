let emailfield = document.getElementsByName("emailfield");

function test(){
    if (emailfield[0].value == ""){
        alert("Please enter an email");
    }
    else {
    alert(emailfield[0].value)
    }
}