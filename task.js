const taks = {
    "Actividad 1": "Crear un objecto",
    "Actividad 2": "Utilzar el objecto",
    "Actividad 3": "Modificar un objecto",
    "Actividad 4": "Crear un objecto a partir de un objecto inicial"
}

class Person { constructor(fname, lname){
    this.firstName = fname;
    this.lastName = lname;
}};

let person = new Person('Daniel', 'Soto');

console.log('person', person.lastName);

person["age"] = 26;


console.log('people', person);

const newPeople = {
    ...person,
    "location": "Lima"
}

console.log('newPeople', newPeople);
