const hexColor = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
console.log(hexColor);
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const  h2= document.querySelector(".h2");


btn.addEventListener("click",()=>{
 let  hex = "#";
 for (let i = 0; i <6; i++) {
    hex +=hexColor[getRandomNumber()];
 }
    document.body.style.background=hex;
    color.textContent=hex;
    h2.style.color=hex;
})

const getRandomNumber=()=>{
    return Math.floor(Math.random()*hexColor.length);
}