/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */


//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  //Initialize a function search() that takes an animals array and "str" as parameters  
    function search(animals, str) {
        var result = null;
        for (var i = 0; i < animals.length; i++) {
            if (animals[i].name === str) {
                result = animals[i];
            }
        }
        return result;
    }


///////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i] = replacement;
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals,name){
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(animals[i])
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) { // initializing add function with animals (array) and animals (object) parameters
    var counter = 0;
// using for-loop, checking that animal object has name and species properties that are both longer than 0
for (var i = 0; i < animals.length; i++){
    if (animal.name === animals[i].name) { // if the name already exists counter = 1
        counter = 1;
    } 
}
if (counter === 0 &&  animal.name.length > 0 && animal.species.length > 0) {
    animals.push(animal)
}
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
