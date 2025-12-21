const student = {

  name:'Abdulaziz',
  grade:90,
  subjects:['math','english'],
  introduce() {
    console.log('hi my name is Abdulaziz');
  }
}

student.grade = 80;
student.isGraduated = false;

for(let looper in student){

  console.log(looper,student[looper]);
  
}


