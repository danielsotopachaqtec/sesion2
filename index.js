var listaDeCompras = ["Agua", "Gaseosa", "Papel", "Lavaplatos"];

const newArray = listaDeCompras.push("Carne");

console.log('newArray', listaDeCompras);


var partyList = [
    {
        "id": 1,
        "name": "Water",
        "description": "to drink"
    },
    {
        "id": 2,
        "name": "Coke",
        "description": "to drink"
    },
];

const newPartyList = partyList.push({"id": 3, "name": "Sushi", "description": "to eat"});

const priorityList = partyList.unshift({"id": 0, "name": "Beer", "description": "to drink"})

console.log('UpdatePartyList', partyList);

var Cars = function(name,age,location,owner){
    this.name = name;
    this.age = age;
    this.location = location;
    this.owner = owner;
}

var newCar = new Cars('Ford','1960','Lima','Daniel Soto');

console.log('newCar', newCar);
