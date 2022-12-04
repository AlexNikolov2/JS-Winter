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
addMe();

function exitMary() {
  for (const iterator of people) {
    console.log(iterator);
    if (iterator == "Mary") {
      break;
    }
  }
}

// 07 I have no idea
