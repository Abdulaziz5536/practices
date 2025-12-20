const scan = require('prompt-sync')();

const getUserChoice = (choice) =>{
  if(choice === 'rock' || choice ==='paper' || choice==='scissor'){
    return choice;
  }
  else{
    return 'invalid choice';
    
  }
}

const getComputerChoice = () =>{
  const random = Math.floor(Math.random()*3);
  if(random===0){
    return 'rock';
  }
  else if(random===1){
    return 'paper';
  }
  else if(random===2){
    return 'scissor';
  }
  
}
const determineWinner = (userChoice,computerChoice) =>{
  
  if(userChoice==='rock'&&computerChoice==='rock'|| userChoice==='paper'&&computerChoice==='paper'||userChoice==='scissor'&&computerChoice==='scissor'){
    return 'Its a tie!'
  }
  else if(userChoice==='rock' && computerChoice==='paper'){
    return 'The computer won!'
  }
  else if(userChoice==='paper'&&computerChoice==='rock'){
    return 'You won!'
  }
  else if(userChoice==='paper' && computerChoice==='scissor'){
    return 'The computer won!'
  }
  else if(userChoice==='scissor' && computerChoice==='rock'){
    return 'The computer won!'
  }
  else if(userChoice==='scissor' && computerChoice==='paper'){
    return 'You won!'
  }
  else if(userChoice==='rock' && computerChoice==='scissor'){
    return 'You won!'
  }

}
const playGame = () => {
  let scannedChoice = scan('enter your choice: ');
  
  const user = getUserChoice(scannedChoice);
  const computer = getComputerChoice();
  const winner = determineWinner(user,computer);
  console.log('you:'+user+ ' computer:'+computer+ ': '+winner);
  
}

playGame()