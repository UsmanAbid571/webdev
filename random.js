/*let max=document.getElementById("maxNum").value;
let min=document.getElementById("minNum").value;
let mysubmit=document.getElementById("mySubmit");
let myh1=document.getElementById("myh1");

let RandomNum;


mysubmit.onclick = function(){
    RandomNum=Math.floor(Math.random()*max)+ min;
    myh1.textContent=RandomNum;


}*/
let mysubmit = document.getElementById("mySubmit");
let myh1 = document.getElementById("myh1");
let myReset = document.getElementById("myReset");
mysubmit.onclick = function() {
  let max = parseFloat(document.getElementById("maxNum").value);
  let min = parseFloat(document.getElementById("minNum").value);
  let RandomNum = Math.floor(Math.random() * (max - min)+min) ;
  myh1.textContent = RandomNum;
}

myReset.onclick = function(){
    myh1.textContent = " ";
    document.getElementById("maxNum").value = " ";
    document.getElementById("minNum").value = " ";
}