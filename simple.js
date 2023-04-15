// console.log('hello')
const  simpleColor = ["red","#eff44d","aqua","pink","rgb(34,44,255)","hsl(200%,23%,23%)"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");
let h2 = document.querySelector(".h2")

btn.addEventListener("click",()=>{
    let randomNumber = getRandomNumber();
    document.body.style.background=simpleColor[randomNumber];
    color.textContent=simpleColor[randomNumber];
    h2.style.color=simpleColor[randomNumber];
})

const getRandomNumber = ()=>{
  return Math.floor(Math.random()*simpleColor.length);
}

// console.log(Math.floor(Math.random()*10));