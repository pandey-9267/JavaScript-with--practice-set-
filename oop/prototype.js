function Student(name, age) {
    this.name = name;
    this.age = age ;
}

// put method on prototype 

Student.prototype.introduce = function () {
    console.log(`Hi, I am ${this.name}`);
    console.log(`My age is ${this.age}`);
};

const student1 = new Student("Abhishek", 21);
const student2 = new Student ("Rahul", 23);

student1.introduce();
student2.introduce();

/*
Prototype relationship:

Student.prototype
       |
       +-- introduce()
       |
   +---+---+
   |       |
   v       v
student1 student2
   |       |
name:     name:
Abhishek  Rahul
age: 21   age: 23

Both objects share introduce() through Student.prototype.
*/