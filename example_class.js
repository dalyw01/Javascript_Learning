class Person
{
    constructor(name, surname) 
    {
        this.name = name;
        this.surname = surname;
    }

    get latest() 
    {
        return this.name;
    }

    set current(name)
    {
        this.name = name;
    }
}

const person_1 = new Person( "Adam" , "Arnold" );

console.log(person_1);
console.log(person_1.name);
console.log(person_1.surname);

console.log("// // // // // // //");

person_1.name = "Bob";
console.log(person_1.name);
console.log(person_1.latest);

console.log("// // // // // // //");

person_1.current = "Conor";
console.log(person_1.name);
