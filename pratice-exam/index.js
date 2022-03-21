// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time) {
   var fullGreeting = greeting.concat(" ", location, " ", time);
    console.log(fullGreeting);
}

// 2.
var contestants = function(dogs){
    var count = 0
    for(var i = 0; i <= dogs.length; i++){
        if(dogs[i]){
            count++;
        }
    }
    return count
};



// 3.
var filterSpecies = dogs.filter(function(pet){
      return pet.species === "dog"
    })


// 4. 
var dogContestants = [...filterSpecies];



// 5. 
var dogsWithClasses = dogContestants.map(function(element){
    let copy = {... element, };
    if (element.weight < 11) {
        copy.class = 'red';
    } else if (element.weight <= 20) {
        copy.class = 'yellow';
    } else {
        copy.class = 'green';
    }
    return copy;
});


// 6.
var firstInClass = function(array, obj={}){
    //base
    if (array.length === 0) {
        return obj
    }
    // recursion
    Object.assign(obj, array[0]); // look this up!!!!
    return firstInClass(array.slice(1), obj)
    // how do I want to add to/manipulate default parameter
        // add element to obj
    // call function again 
};



// 7.
var votes;