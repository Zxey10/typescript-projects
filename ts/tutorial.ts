let age: number = 23;

let isSaved: boolean = false;

let username: string = "Max";

let hobbies: string[] = ["Lol", "1", "Programming"];

type Person = {
    name: string;
    age: number;
}

let person: Person;

person = {
  name: "Max",
  age: 32,
};

hobbies.forEach((element) => {
  console.log(element);
});

let people: {
    name: string;
    age: number;
}[];


let course: string | number = 'React Type Inference'

course = Math.random()


function add(a: number,b: number): number{
    return a + b;
}

console.log(add(2.6,6))

function print(value: any): void{
    console.log(value)
}


//! Generics

function insertAtBeginning<T>(arr: T[], value: T){
    const newArr = [value, ...arr]
    return newArr
}

const demoArr = [1,2,3]

const updatedArr = insertAtBeginning(demoArr, 43)
console.log(updatedArr)

export {};
