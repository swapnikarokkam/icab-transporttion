$("#counter1").countMe(900,50)
    $("#counter2").countMe(1000,100)
    $("#counter3").countMe(500,30)
    $("#counter4").countMe(1000,100)
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


const Validation = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let nameStatus = false;
    let emailStatus = false;
    let phoneStatus = false;
    let alphaexp = /^[a-zA-Z]+$/;
    let emailExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let numExp = /^[0-9]+$/;
    //validation
    if( name === ""){
        document.getElementById("nameNote").innerHTML = "Enter Your Name";
           }
    else{
        if(name.match(alphaexp)){
            document.getElementById("nameNote").innerHTML = "";  
            nameStatus = true;
        }
        else{
            document.getElementById("nameNote").innerHTML = "Enter Characters Only";
             nameStatus = false;    
           }}
           if( email === ""){
            document.getElementById("mailNote").innerHTML ="Email-id cannot be empty";
           }
           else{
            if(email.match(emailExp)){
                document.getElementById("mailNote").innerHTML = "";
            emailStatus =true;
          
            }
            else{
                document.getElementById("mailNote").innerHTML ="Email-id is not valid";
                emailStatus = false;
           }}
          if( phone === ""){
            document.getElementById("mobileNote").innerHTML = "Enter phone number";
          }
          else{
            if(phone.match(numExp)){
                if(phone.length === 10){
                document.getElementById("mobileNote").innerHTML ="";
                phoneStatus =true;
                }
                else{
                document.getElementById("mobileNote").innerHTML = "Enter 10 Digits";
            phoneStatus = false;
            }}
            else{
                document.getElementById("mobileNote").innerHTML ="Enter Digits Only";
                phoneStatus = false;
                     }
                    }
//returns value
           if(nameStatus === true && emailStatus === true && phoneStatus === true){
            return true;
        }
        else{
            return false;
        }
};