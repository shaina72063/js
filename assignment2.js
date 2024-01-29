const person ={
    fullName: "Rohit Sharma",
    age : 36,
    occupation: "Cricket Player",
    Nickname:"Hitman",
};

function personDetails(person){
    for (const details in person) {
        console.log(`${details} : ${person[details]}`);
    }
}

personDetails(person);