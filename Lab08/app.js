console.log("Here is the file")
// Exercise 1: 
String.prototype.filter = function (word) {
  const idx = this.indexOf(word);
  if (idx == -1) {
    return this;
  }

  return this.replace(word, "");
}
console.log("This house is not nice!".filter('not'));

// Exercise 2: 
function bubleSort() {
  let arr = this;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr;
}

Array.prototype.bubbleSort = bubleSort
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

// Exercise 3:
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Teacher extends Person {
  teach(subject) {
    if (subject == "") {
      throw Error("Please enter teahcers subject")
    }
    return this.name + " is now teaching " + subject + "."
  }
}

T = new Teacher("Sami Taha");
console.log(T.teach("Web Application Development"))

function createTeacher(name) {
  return {
    name: name,
    teach: function (subject) {
      if (subject == "") {
        throw Error("Please enter teahcers subject")
      }
      return this.name + " is now teaching " + subject + "."
    }
  };
}

const NewTeacher = Object.create(createTeacher("Sami Taha"));
console.log(NewTeacher.teach("Web Application Development"))

// Exercise 4:
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.")
  }
  salute() {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
  }
}

class Student extends Person1 {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  greetings() {
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major + ".")
  }
}

class Professor extends Person1 {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }
  salute() {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.")
  }
}

const Prof = new Professor("Rene", 50, "Compro");
const Stud = new Student("Tomi", 30, "WAP");
Prof.salute();
Prof.greetings();
Stud.salute();
Stud.greetings();


let Person2 = {
  name: "Einstein",
  age: "12",
  greetings: () => {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`)
  },
  salute: () => {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
  }
};

let Student2 = {
  __proto__: Person2,
  major: "Psychology",
  greetings: () => {
    return `${this.name} and I major in ${this.major}`
  }
};

let Professor2 = {
  __proto__: Person2,
  name: "Darwin",
  department: "Life Sciences",
  greetings: () => {
    return `Good day, my name is ${this.name} and I am in the ${this.department} department `
  }
};

Professor2.salute()
Professor2.greetings()

Student2.salute()
Student2.greetings()

