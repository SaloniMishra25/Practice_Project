let btnSubmit = document.
getElementById("submit");
let div=document.getElementById("game");
let num=document.getElementById("num");
let result=document.getElementById("result");
let winNum=7;

console.log(btnSubmit);
console.log(num);

btnSubmit.addEventListener("click",
function(){
    let numValue = num.value;
     if(numValue === ""){
        result.innerHTML="Enter number";
    }
    else if(numValue == winNum){
    result.innerHTML="You won";
   }
   else if(numValue > winNum){
    result.innerHTML="Too high";
   }
   else if(numValue < winNum){
    result.innerHTML="Too low";
   }
   else{
    result.innerHTML="You loss";
   }
}

);