const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

const findKey = (object, position) => {
  Object.values(object)[position];
};

console.log(findKey(school, 2));

let sum = 0;

const totalStudents = (object) => {
  for (let i = 0; i < object.lessons.length; i += 1){
    sum += object.lessons[i].students;
  };
  return sum;
}

console.log(totalStudents(school));

const existKey = (object, keyArray) => {
  for (let i = 0; i < object.lessons.length; i += 1) {
    (object.lessons[i][keyArray] === undefined) ? console.log(false) : console.log(true)
  };
};

console.log(existKey(school, 'professor'));

const changeShift = (object, course, value) => {

  let findCourse;
  for (let i = 0; i < object.lessons.length; i += 1){
    let condition = object.lessons[i];
    if(condition.course === course){
      findCourse = condition;
      break;
    };
  }
  if(findCourse !== undefined){
    findCourse.shift = value;
    return findCourse;
  }else{
    return 'O horário está incorreto!';
  };
}

console.log(changeShift(school, 'MongoDB', 'manhã'));