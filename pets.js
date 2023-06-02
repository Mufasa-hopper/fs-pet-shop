var fs = require("fs");
var command = process.argv[2];
var globalAnimals = JSON.parse(fs.readFileSync("./pets.json"));
function read() {
  fs.readFile("./pets.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File Read Failed", err);
    } else {
      animals = JSON.parse(jsonString);
      let index = process.argv[3];
      if (index !== undefined) {
        JSON.parse(index);
        if (animals[index] === undefined) {
          console.log("Usage: node pets.js read INDEX");
          // return undefined;
        }
        console.log(animals[index]);
      } else {
        console.log(animals);
      }
    }
    // console.log(animals);
    return animals;
  });
}
function create() {
  let newPet = {
    age: Number(process.argv[3]),
    kind: process.argv[4],
    name: process.argv[5],
  };
  console.log(newPet);
  if (
    newPet.age === NaN ||
    newPet.kind === undefined ||
    newPet.name === undefined
  ) {
    console.log("Usage: node pets.js create AGE KIND NAME");
  } else {
    globalAnimals.push(newPet);
    fs.writeFile("./pets.json", JSON.stringify(globalAnimals), function (err) {
      err ? console.log(err) : console.log(globalAnimals);
    });
  }
}
switch (command) {
  case "read":
    read();
    break;
  case "create":
    create();
    break;
  default:
    console.log("Usage: node pets.js [read | create | update | destroy]");
    process.exit(1);
}