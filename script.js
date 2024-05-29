let userscore=0;
let compscore=0;
// here we have start the code with the userscore as 0 and the compscore as 0 ;

// now we will get the choices by DOM 

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#message");
const userscoreboard= document.querySelector("#user-score");
const compscoreboard= document.querySelector("#comp-score");



const getComputerChoice= () =>{
    const options = ["rock","paper","scissor"];

  const  index_at_random= Math.floor((Math.random()*3));
  return options[index_at_random];

}

const drawgame =() =>{
   console.log("Game was draw");
   msg.innerText = "game draw. try again!";
   msg.style.backgroundColor="yellow";
        }

const showWinner =(userwin,userchoice,compchoice)=>{
    if(userwin)
        {
                userscore++;
                userscoreboard.innerText = userscore;
                msg.innerText = `You win! ${userchoice} beats ${compchoice}`;
                msg.style.backgroundColor="green";
        }
    else
    {
        compscore++;
        compscoreboard.innerText = compscore;
        
        msg.innerText =  `You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (userchoice) =>{
    console.log("user choice=",userchoice);
    // here we have generated the user choice 
        const compchoice= getComputerChoice();
        console.log("compchoice=",compchoice);

        if(userchoice=== compchoice)
            {
                drawgame();
        
            }
      else
      {
        let userwin=true;
        if(userchoice=== "rock")
            {
                userwin = compchoice==="paper" ?  false : true;
               
            }
        else if(userchoice==="paper")
        {
            userwin = compchoice==="scissor" ? false : true;
        }
        else{
            userwin =compchoice==="rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
      }


};

choices.forEach((choice) => {
   console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        
//   console.log(  "choice was clicked ",userchoice);
  playGame(userchoice);
    });

});

