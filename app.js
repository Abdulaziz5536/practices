const students = [{name:'ab',grade:70},
           {name:'ke',grade:50},
    
];

       const average = () => {
  
  let sum = 0,avg = 0;
  for(let i=0;i<students.length;i++){
    sum += students[i].grade;
  }
  avg = sum/students.length;
  return avg;
}


console.log(average());
