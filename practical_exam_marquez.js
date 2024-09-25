// Task 1: Variables and Operators
const age = 21;           

const currentYear = new Date().getFullYear();
const yearBorn = currentYear - age;
console.log(`Year Born: ${yearBorn}`);

const isAdult = age >= 18;
console.log(`Is Adult: ${isAdult}`);

const ageRemainder = age % 5;
console.log(`Age Remainder when divided by 5: ${ageRemainder}\n`);


// Task 2: String Manipulation
const name = "Jericko"; 
const city = "Baguio City"; 
const sentence = `${name} from ${city}`;
console.log(sentence + "");  

function toUpperCase(str) {
    return str.toUpperCase();
}

const upperCaseResult = toUpperCase("hello world");
console.log(upperCaseResult + ""); 

function findFirstA(str) {
    return str.indexOf('a');
}

const indexOfA = findFirstA("hello apple");
console.log(`First occurrence of 'a': ${indexOfA}`); 

const originalString = "I am learning JavaScript at school.";
const modifiedString = originalString.replace(/JavaScript/g, "JS");
console.log(modifiedString + "\n"); 


// Task 3: Array Manipulation
let favoriteFoods = ["Fries", "Sushi", "Burger", "Siomai", "Ice Cream"];

favoriteFoods.push("Cake");

favoriteFoods.splice(1, 1);  

favoriteFoods.sort();

function printFavoriteFoods(foods) {
    foods.forEach(food => {
        console.log(food);
    });
}

console.log("\nFavorite Foods:\n");
printFavoriteFoods(favoriteFoods);  
