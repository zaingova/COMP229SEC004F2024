/*const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
    };
    const { bread, meat } = sandwich;
    console.log(bread, meat); // dutch crunch tuna
    */

////////////////////////////////////////////

    //The code pulls bread and meat out of the object and creates local variables for them. Also, since we declared these destructed variables using let the bread and meat variables can be changed without changing the original sandwich:
/*
    const sandwich = {
        bread: "dutch crunch",
        meat: "tuna",
        cheese: "swiss",
        toppings: ["lettuce", "tomato", "mustard"]
        };
        
        let { bread, meat } = sandwich;
        
        bread = "garlic";
        meat = "turkey";
        
        console.log(bread); // garlic
        console.log(meat); // turkey
        
        console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna
        */
        //We can also destructure incoming function arguments. Consider this function that would log a person’s name as a lord:
/*
const lordify = regularPerson => {
console.log(`${regularPerson.firstname} of Canterbury`);
};
const regularPerson = {
firstname: "Bill",
lastname: "Wilson"
};
lordify(regularPerson); // Bill of Canterbury
*/
    
//Instead of using dot notation syntax to dig into objects, we can destructure the values that we need out of regularPerson:
/*
const lordify = ({ firstname }) => {
console.log(`${firstname} of Canterbury`);
};
const regularPerson = {
firstname: "Bill",
lastname: "Wilson"
};
lordify(regularPerson); // Bill of Canterbury
*/

///////////////////////////////////////////////////////
//Lets take this one level farther to reflect a data change. Now the regularPerson object has a new nested object on the spouse key:
/*
const regularPerson = {
firstname: "Bill",
lastname: "Wilson",
spouse: {
firstname: "Phil",
lastname: "Wilson"
}
};
*/
/////////////////////////////////////////////////
//If we wanted to lordify the spouses first name, we will adjust the function’s destructured arguments slightly:
/
const regularPerson = {
firstname: "Bill",
lastname: "Wilson",
spouse: {
firstname: "Phil",
lastname: "Wilson"
}
};

const lordify = ({ spouse: { firstname } }) => {
console.log(`${firstname} of Canterbury`);
};
lordify(regularPerson); // Phil of Canterbury


//Using the colon and nested curly braces, we can destructure the firstname from the spouse object.
