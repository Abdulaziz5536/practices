const sentence = 'my name is abdulaziz';
const vowels = ['a','e','i','o','u'];
const match = [];
let i,j;
for(i=0;i<sentence.length;i++){
  for(j=0;j<vowels.length;j++){

    if(sentence[i]==='e'||sentence[i]==='u'){
      match.push(sentence[i]);
    }
    if(sentence[i] === vowels[j]){
      match.push(sentence[i])
    }

  }
}
console.log(match.join('').toUpperCase());











