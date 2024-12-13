  // Constructor function to define Dog objects
  function Dog(name, breed, age, canTalk) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.canTalk = canTalk;

    // Method to display a greeting based on the 'canTalk' property
    this.myGreeting = function() {
        return `Hi! My name is ${this.name}. ${
            this.canTalk ? "I can talk!" : "I cannot talk."
        }`;
    };
}

// Creating two fictional dog objects
const dog1 = new Dog("Snoopy", "Beagle", 7, false);
const dog2 = new Dog("Brian", "Labrador Retriever", 8, true);

// List all properties of the objects using a for...in loop
const dogs = [dog1, dog2];
dogs.forEach(dog => {
    console.log(`Properties of ${dog.name}:`);
    for (let key in dog) {
        if (typeof dog[key] !== "function") {
            console.log(`${key}: ${dog[key]}`);
        }
    }
});

// Prompt the user to select a dog by name
const userSelection = prompt("Please select a dog by typing its name (Snoopy or Brian):");
const selectedDog = dogs.find(dog => dog.name.toLowerCase() === userSelection?.toLowerCase());

const displayElement = document.getElementById("dogInfo");

if (selectedDog) {
    // Display all information about the selected dog
    let info = `You selected ${selectedDog.name}:<br>`;
    for (let key in selectedDog) {
        if (typeof selectedDog[key] !== "function") {
            info += `<strong>${key}:</strong> ${selectedDog[key]}<br>`;
        }
    }
    info += `<br>${selectedDog.myGreeting()}`;
    displayElement.innerHTML = info;
} else {
    // Error message if dog not found
    displayElement.innerHTML = "Error: The dog you selected does not exist.";
}