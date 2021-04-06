//Function Declaration

function checkDriverAge() {
    var age = prompt("How old are you?");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else {
        alert("Go Home")
    }
}

checkDriverAge();

//Function Expression

var checkDriverAge2 = function() {
    var age = prompt("How old are you?");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else {
        alert("Go Home")
    }
}

checkDriverAge2();

//Bonus using console.log

function checkDriverAge(age) {
    if (Number(age) < 18) {
        return "Sorry, you are too young to drive this car. Powering off";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    } else if (Number(age) > 18) {
       return "Powering On. Enjoy the ride!";
    } else {
        return "Go Home";
    }
}

checkDriverAge(92);

function rideOrDie(biker) {
    var biker = prompt("Do you like Motorcycles?");
    if ( biker === "yes") {
        return "Live Free Ride Hard";
    } else if ( biker === "no") {
        return "It's ok, go and drive your little cage";
    } else {
        return "Answer \"yes\" or \"no\" using only lowercase or this script won't work";
    }

}

rideOrDie();
