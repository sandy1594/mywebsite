    const message =document.querySelector(".message");
    const score = document.querySelector(".score");
    const buttons= document.querySelectorAll("button");
    let winner=[0 ,0];
    console.log(buttons);
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",playgame);
}
function playgame (e){
    let playerselection = (e.target.innerText)
    let computerSelection = Math.random();
    console.log(computerSelection);
    if(computerSelection<0.34){
        computerSelection="rock";
}
    else if(computerSelection<=0.67){
        computerSelection="paper";
    }
    else{
        computerSelection="scissors";
    }
    console.log(playerselection,computerSelection); 
    let result=checkwinner(playerselection,computerSelection );
  console.log(result)
    if(result=="player"){
        result += "wins";
        winner[0]++;
    }
    else if(result=="computer"){
        result += "wins";
        winner[1]++;
    }
         score.innerHTML= "player1[" + winner[0] +"]   computer [ "+winner[1]+"]";
    messager(playerselection + "  vs  "  +  computerSelection +" <break><break>"+  result  +"</b>");
   
    }
      
   
     function messager(mes   ){
         message.innerHTML= mes;
     }
    function checkwinner(pl,co){
        if(pl===co){
            return"Draw";
        }
        if(pl==="rock" ) {
            if(co==="paper"){
                return "computer";
                }else{
                return"player";
            }
        }
            if(pl==="paper"){
                if(co==="scissors"){
                    return "computer";
                    
                    }else{
                        return "player";
                    }
                }
        if (pl === "scissors") {
                if (co === "rock") {
                    return "computer";
                }
                else {
                    return "Player";
                }
        }
        }
    