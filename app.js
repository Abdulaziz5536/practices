const scan = require('prompt-sync')();
const sumArray = (arr = []) => {
  let sum = 0;
  while(true){
  arr = scan('can you enter numbers: write stop to stop ');
  if(arr === 'stop') break;
  sum = sum + Number(arr);
  
  }  
  return sum;
}

console.log(sumArray());




