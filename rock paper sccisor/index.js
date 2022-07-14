let com=document.querySelector("#com");
let pla=document.querySelector("#pla");
let res=document.querySelector("#res");
let bot=document.querySelectorAll(".btn");

let player;
let computer;
let result;

bot.forEach(button => button.addEventListener("click",()=>{
player=button.textContent;
computer_res();
pla.textContent=`Player : ${player}`;
com.textContent=`Computer : ${computer}`;
res.textContent=final_res();
}));

function computer_res()
{
    const num=Math.floor(Math.random()*3)+1;
    switch(num)
    {
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCCISSOR";
            break;
    }
}
function final_res()
{
    if(player==computer)
    {
        return "Draw!";
    }
    else if(player=="ROCK")
    {
        return (computer=="SCCISSOR")? "YOu WON :)" : "You LOSE :(";
    }
    else if(player=="SCCISSOR")
    {
        return (computer=="PAPER")? "YOu WON :)" : "You LOSE :(";
    }
    else if(player=="PAPER")
    {
        return (computer=="ROCK")? "YOu WON :)" : "You LOSE :(";
    }
}