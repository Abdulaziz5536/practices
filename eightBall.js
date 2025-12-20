let userName;

if(userName){
  console.log(`Hello ${userName}`);
  
}
else{
  console.log('Hello');
  
}
let userQuestion = 'whats your name? '
console.log(userQuestion);

let randomNumber = Math.floor(Math.random()*7);


let eightBall;

switch(randomNumber){
  case 1:
    eightBall = 1;
    console.log(eightBall);
    
    break;
    case 2:
    eightBall = 2;
    console.log(eightBall);
    
    break;
    case 3:
    eightBall = 3;
    console.log(eightBall);
    
    break;
    case 4:
    eightBall = 4;
    console.log(eightBall);
    
    break;
    case 5:
    eightBall = 5;
    console.log(eightBall);
    
    break;
    case 6:
    eightBall = 6;
    console.log(eightBall);
    
    break;
    case 7:
    eightBall = 7;
    console.log(eightBall);
    
    break;
    default:
      console.log("invalid");
      break;    
}