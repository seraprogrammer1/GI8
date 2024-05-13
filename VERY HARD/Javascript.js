// exercise object with a method to generate random exercises in the exercises array
const exercise = {
  exercises: ["running", "jumping jacks", "pushups"],
  generateExercise: function () {
    return this.exercises[Math.floor(Math.random() * this.exercises.length)];
  },
};

// job object with a method to generate random jobs in the jobs array
const job = {
  jobs: ["back-end developer", " front-end developer", "project manager"],
  generateJob: function () {
    return this.jobs[Math.floor(Math.random() * this.jobs.length)];
  },
};

class Person {
  // person class constructor
  constructor(Name, Job, Age, Exercise) {
      (this.Name = Name),
      (this.Job = Job),
      (this.Age = Age),
      (this.Exercise = Exercise);
  }
  // returns name
  getName() {
    return this.Name;
  }
  // returns age
  getAge() {
    return this.Age;
  }
  // returns exercise
  exercise() {
    return `${this.Exercise} is fun! - said no one ever`;
  }
  // returns job
  fetchJob() {
    return `${this.Name} is a ${this.Job}`;
  }
}

class Programmer extends Person {
  // programmer class constructor
  constructor(Name, Job, Age, Exercise, Languages) {
    super(Name, Job, Age, Exercise);
    this.Languages = Languages;
    this.Busy = false;
    this.Task = null;
  }

  // removes task and busy
  completeTask() {
    this.Busy = false;
    this.Task = null;
  }
  // adds tasks and busy
  acceptNewTask(task) {
    this.Busy = true;
    this.Task = task;
  }
  // allow programmer to accept and decline task base on if they are busy
  offerNewTask(task) {
    if (this.Busy) {
      return `${this.Name} can't accept any new tasks right now. Busy working on ${this.Task}`;
    } else {
      this.acceptNewTask(task);
      return `${this.Name} would love to take on a new responsibility`;
    }
  }
  // add new language the programmer learn
  // can take a sting or an array
  learnLanguage(value) {
    if (typeof value === "string") {
      this.Languages.push(value);
    } else if (Array.isArray(value)) {
      value.forEach((Language) => {
        this.Languages.push(Language);
      });
    } else {
      console.error("Invalid entry");
    }
  }
  // gets the languages of the programmer
  listLanguage() {
    return this.Languages;
  }
}
//create people
const person1 = new Person(
  "Harold",
  "Backend Engineer",
  20,
  exercise.generateExercise()
);
const Person2 = new Person(
  "John",
  job.generateJob(),
  23,
  exercise.generateExercise()
);

//create programmer
const c1 = new Programmer("Liana", "DevOps", 35, exercise.generateExercise(), [
  "HTML",
  "C#",
  "LUA",
]);

const c2 = new Programmer("Edwin", "janitor", 55, exercise.generateExercise(), [
  "HTML",
  "SASS”, ”Ruby",
]);

const c3 = new Programmer("Manny", "SysOps", 31, exercise.generateExercise(), [
  "HTML",
  "CSS",
  "JS",
  "R",
]);

//learn new programming language
c1.learnLanguage("CSS");

c2.learnLanguage("C++");

c3.learnLanguage(["JAVA", "C#"]);

//console log information that is returned
console.log(c1.listLanguage());

console.log(c2.listLanguage());

console.log(c3.listLanguage());

console.log(c1.offerNewTask("Recreating google home page"));

console.log(c1.offerNewTask("Create a calculator"));

console.log(person1);

console.log(c1);

console.log(c2);

console.log(c3);

console.log(person1.exercise());

console.log(person1.fetchJob());
