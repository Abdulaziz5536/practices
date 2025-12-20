class School{
  constructor(name,level,nummberOfStudents){
    this._name = name;
    this._level = level;
    this._nummberOfStudents = nummberOfStudents;
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get nummberOfStudents(){
    return this._nummberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents){
    if (this.numberOfStudents==Number){
      this._nummberOfStudents = newNumberOfStudents;
    }
    else{
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }

  }
  quickFacts(){
    console.log(this._name + ' educates ' + this._nummberOfStudents + ' students at the ' + this._level + ' school level.');
    

  }
  static pickSubstituteTeacher(substituteTeachers){
    const randomInteger = Math.floor(Math.random() * substituteTeachers.length-1);
    return substituteTeachers[randomInteger];
  }
}
class PrimarySchool extends School{
  constructor(name,numberOfStudents,pickupPolicy){
    super(name);
    this._level = 'primary';
    this._nummberOfStudents = numberOfStudents;
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}
class MiddleSchool extends School{
  constructor(name){
    super(name);
  }
}
class HighSchool extends School{
  constructor(name,sportsTeams){
    super(name);
    this._sportsTeams = ['Manchester Untied'];
  }
  get sportsTeams(){
    return this._sportsTeams;
  }
}
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);