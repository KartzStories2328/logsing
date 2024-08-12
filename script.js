const nambox = document.getElementById("nambox");
const screen = document.getElementById("screen");
const eye = document.getElementById("eye");
const pswrd = document.getElementById("pswrd");
const inpt= document.querySelectorAll("input");
const logi= document.getElementById("logi");
const signu= document.getElementById("signu");
const subm= document.getElementById("subm");
const subm2= document.getElementById("subm2");
const mail= document.getElementById("mail");
const mainbox= document.getElementById("mainbox");
const bgcontentstrip= document.getElementById("bgcontentstrip");
const welcome = document.getElementById("welcome");

let eyestat="close";


let arr=["Ob01", "Ob02"]
let Obj={
  "kartz@gmail.com":12345678,
  "kartzie@gmail.com":11223344
}



function crt(){
  Obj[mail.value]=Number(pswrd.value);
  console.log(Obj);
  logingin();
  
}


function chk(){
let pas = Number(pswrd.value);
 for(let v in Obj){
  if(v==mail.value && pas==Obj[v] ){
    mainbox.style.display="none";
    signu.style.display="none";
    logi.style.display="none";
    subm.style.display="none";
    subm2.style.display="none";
    bgcontentstrip.style.display="flex";
    welcome.style.display="block";
    console.log(screen.src);
    console.log("yess")
    screen.src="videos/passed.mp4";
    screen.play();
    break;
  }

  else{
    screen.src="videos/failed.mp4";
    screen.play();
    break;
  }
}
}


function logingin(){

    screen.src="videos/checking.mp4";
    screen.play();
    screen.style.backgroundColor="black";
    nambox.style.display="none";
    for(let i of inpt){
      i.value="";
    }
    signu.style.display="block";
    logi.style.display="none";
    subm.style.display="block";
    subm2.style.display="none";
}

function signingin(){
    nambox.style.display="flex";
    screen.src="videos/askingg.mp4";
    screen.play();
    for(let i of inpt){
      i.value=""
    }
    logi.style.display="block";
    signu.style.display="none";
    subm.style.display="none";
    subm2.style.display="block";

}


function show(){

  if(eyestat=="close"){
    pswrd.type="text";
    eye.src="images/eye-alt.svg";
    eyestat="open";
    console.log("clicked");
  }

  else{
    pswrd.type="password";
    eye.src="images/eye-close.svg";
    eyestat="close"; 
  }
}

eye.addEventListener("click", show)