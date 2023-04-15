const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const h2 = document.querySelector(".h2");
btn.addEventListener("click",()=>{
    let randomNumber=`rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    document.body.style.background=randomNumber;  
    color.textContent=randomNumber;
    h2.style.color=randomNumber;
})

const getRandomNumber = ()=>{
    return Math.floor(Math.random()*256);
}