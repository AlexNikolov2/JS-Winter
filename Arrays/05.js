let people = ["Greg", "Mary", "Devon", "James"];

function getAll(){
    for (const iterator of people) {
        console.log(iterator);
    }
}


function removeFirst(){
    people.shift();
    console.log(people);
}
removeFirst();