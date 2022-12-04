let people = ["Greg", "Mary", "Devon", "James"];

function getAll() {
  for (const iterator of people) {
    console.log(iterator);
  }
}

function removeFirst() {
  people.shift();
  console.log(people);
}

function removeLast() {
  people.pop();
  console.log(people);
}

function addFirst() {
  people.unshift("Matt");
  console.log(people);
}

function addMe() {
  people.push("Me");
  console.log(people);
}

function exitMary() {
  for (const iterator of people) {
    console.log(iterator);
    if (iterator == "Mary") {
      break;
    }
  }
}

// 07 I have no idea

function indexOfMary() {
  console.log(people.indexOf("Mary"));
}

function indexOfFoo() {
  console.log(people.indexOf("Foo"));
}

function addPeople() {
  people.splice(2, 1, "Elizabeth", "Artie");
  console.log(people);
}

function bob() {
  let withBob = "Bob";
  console.log(people.concat(withBob));
}
bob();
