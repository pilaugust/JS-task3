console.log("EASY");

//  .-') _      ('-.      .-')   .-. .-')                     
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                    
// /     '._   / . --. /(_)---\_),--. ,--.              .---. 
// |'--...__)  | \-.  \ /    _ | |  .'   /             /_   | 
// '--.  .--'.-'-'  |  |\  :` `. |      /,              |   | 
//    |  |    \| |_.'  | '..`''.)|     ' _)             |   | 
//    |  |     |  .-.  |.-._)   \|  .   \               |   | 
//    |  |     |  | |  |\       /|  |\   \              |   | 
//    `--'     `--' `--' `-----' `--' '--'              `---' 
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 1");

let firstName = "Pil August";
let lastName = "Ekanger"

console.log(`${firstName} ${lastName}`);


function myFunction1(numb1, numb2){
    let sum = numb1 + numb2;

    return sum;
}

console.log(myFunction1(28, 41));
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                        
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                       
// /     '._   / . --. /(_)---\_),--. ,--.              .-----.  
// |'--...__)  | \-.  \ /    _ | |  .'   /             / ,-.   \ 
// '--.  .--'.-'-'  |  |\  :` `. |      /,             '-'  |  | 
//    |  |    \| |_.'  | '..`''.)|     ' _)               .'  /  
//    |  |     |  .-.  |.-._)   \|  .   \               .'  /__  
//    |  |     |  | |  |\       /|  |\   \             |       | 
//    `--'     `--' `--' `-----' `--' '--'             `-------' 
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 2");

function myFunction2(){
    let birthYear = 1998;
    let age = 2024 - birthYear;

    return age;
}

console.log(`My age is ${myFunction2()} years old.`);
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                        
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                       
// /     '._   / . --. /(_)---\_),--. ,--.              .-----.  
// |'--...__)  | \-.  \ /    _ | |  .'   /             /  -.   \ 
// '--.  .--'.-'-'  |  |\  :` `. |      /,             '-' _'  | 
//    |  |    \| |_.'  | '..`''.)|     ' _)               |_  <  
//    |  |     |  .-.  |.-._)   \|  .   \              .-.  |  | 
//    |  |     |  | |  |\       /|  |\   \             \ `-'   / 
//    `--'     `--' `--' `-----' `--' '--'              `----''  
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 3");

function myFunction3(numb1){
    if(numb1 < 1){
        return "The number is 0."
    } else if(numb1 % 2 != 0){
        return "It's an uneven number."
    } else if(numb1 % 2 === 0){
        return "It's an even number."
    } else{
        return "Please input a number."
    }
}

console.log(myFunction3(48));
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                          
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                         
// /     '._   / . --. /(_)---\_),--. ,--.                 .---.   
// |'--...__)  | \-.  \ /    _ | |  .'   /                / .  |   
// '--.  .--'.-'-'  |  |\  :` `. |      /,               / /|  |   
//    |  |    \| |_.'  | '..`''.)|     ' _)             / / |  |_  
//    |  |     |  .-.  |.-._)   \|  .   \              /  '-'    | 
//    |  |     |  | |  |\       /|  |\   \             `----|  |-' 
//    `--'     `--' `--' `-----' `--' '--'                  `--'   
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 4");

for(i = 1; i < 21; i++){
    console.log(i);
}


let totalSum = 0;
for(i = 2; i < 101; i += 2){
    totalSum += i;
}

console.log(totalSum);
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                        
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                       
// /     '._   / . --. /(_)---\_),--. ,--.             .------.  
// |'--...__)  | \-.  \ /    _ | |  .'   /             |   ___|  
// '--.  .--'.-'-'  |  |\  :` `. |      /,             |  '--.   
//    |  |    \| |_.'  | '..`''.)|     ' _)            `---.  '. 
//    |  |     |  .-.  |.-._)   \|  .   \              .-   |  | 
//    |  |     |  | |  |\       /|  |\   \             | `-'   / 
//    `--'     `--' `--' `-----' `--' '--'              `----''  
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 5");

function myFunction4(){
    let text = "That's a whole bakery back there!";
    let reverseText = text.split('').reverse('').join('');

    return reverseText;
}

console.log(myFunction4());


function myFunction5(){
    let text = "Homofobi";
    let textArray = text.split('');

    let temp = textArray[2];
    textArray[2] = textArray[4];
    textArray[4] = textArray[6];
    textArray[6] = temp;

    let changedText = textArray.join('');

    return changedText;
}

console.log(myFunction5());
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                        
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                       
// /     '._   / . --. /(_)---\_),--. ,--.               ,--.    
// |'--...__)  | \-.  \ /    _ | |  .'   /              /  .'    
// '--.  .--'.-'-'  |  |\  :` `. |      /,             .  / -.   
//    |  |    \| |_.'  | '..`''.)|     ' _)            | .-.  '  
//    |  |     |  .-.  |.-._)   \|  .   \              ' \  |  | 
//    |  |     |  | |  |\       /|  |\   \             \  `'  /  
//    `--'     `--' `--' `-----' `--' '--'              `----'   
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 6");

function myFunction6(){
    let numbList = [1, 2, 4, 5, 5, 5, 7, 8, 8, 11];
    let medianNum = numbList.length / 2;

    return medianNum;
}

console.log(myFunction6());


function uniqueValues(){
    let listFrequency = [6, 2, 7, 3, 7, 2, 2, 5, 5, 9];
    let frequency = {};

    for(i = 0; i < listFrequency.length; i++){
        let num = listFrequency[i];

        if (frequency[num]){
            frequency[num]++;
        } else{
            frequency[num] = 1;
        }
    }

    let uniqueNum = 0;
    for (let key in frequency){
        if (frequency[key] === 1){
            uniqueNum++;
        }
    }

    return uniqueNum;

}

console.log(uniqueValues());


console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                         
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                        
// /     '._   / . --. /(_)---\_),--. ,--.             .--------. 
// |'--...__)  | \-.  \ /    _ | |  .'   /             |   __   ' 
// '--.  .--'.-'-'  |  |\  :` `. |      /,             `--' .  /  
//    |  |    \| |_.'  | '..`''.)|     ' _)                /  /   
//    |  |     |  .-.  |.-._)   \|  .   \                 .  /    
//    |  |     |  | |  |\       /|  |\   \               /  /     
//    `--'     `--' `--' `-----' `--' '--'              `--'      
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 7");

function myFunction8(tall){
    if(tall % 4 === 0){
        return "The year is a leap year."
    } else{
        return "The year is not a leap year."
    }
}

console.log(myFunction8(1998));

function myFunction9(){
    let text = "^<>v^v^<v>^"

    let up = "^";
    let right = ">";
    let left = "<";
    let down = "v";

    for(i = 0; i < text.length; i++){
        let direction = text[i];
    
    if (direction === up){
        console.log(`${up} points upwards.`)
    } else if (direction === right){
        console.log(`${right} points to the right.`)
    } else if (direction === left){
        console.log(`${left} points to the left.`)
    } else{
        console.log(`${down} points downwards.`)
    }
    }
}

myFunction9();


console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                          
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                         
// /     '._   / . --. /(_)---\_),--. ,--.               .-----.   
// |'--...__)  | \-.  \ /    _ | |  .'   /              /  .-.  \  
// '--.  .--'.-'-'  |  |\  :` `. |      /,             |   \_.' /  
//    |  |    \| |_.'  | '..`''.)|     ' _)             /  .-. '.  
//    |  |     |  .-.  |.-._)   \|  .   \              |  |   |  | 
//    |  |     |  | |  |\       /|  |\   \              \  '-'  /  
//    `--'     `--' `--' `-----' `--' '--'               `----''   
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 8");

function findFactor(num){
    let factor = [];

    for(i = 1; i <= num; i++){
        if (num % i === 0){
            factor.push(i);
        }
    }
    return factor
}

console.log(findFactor(214));

console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                         
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                        
// /     '._   / . --. /(_)---\_),--. ,--.               .----.   
// |'--...__)  | \-.  \ /    _ | |  .'   /              /  ,.  \  
// '--.  .--'.-'-'  |  |\  :` `. |      /,             |  |  \  | 
//    |  |    \| |_.'  | '..`''.)|     ' _)             '  `-'  ' 
//    |  |     |  .-.  |.-._)   \|  .   \                `- /  '  
//    |  |     |  | |  |\       /|  |\   \                ,'  /   
//    `--'     `--' `--' `-----' `--' '--'               `---'    
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 9");

function calculateAge(birthDateString){
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    const day = today.getDate() - birthDate.getDate();

    if(month < 0 || (month === 0 && day < 0)){
        age--;
    }

    if(month < 0){
        month += 12;
    }

    if(day < 0){
        const prevMonth = new Date(today.getFullYear(), today.getMonth() -1, 0);
        day += prevMonth.getDate();
    }

    return{age, month, day}
}

const birthDate = "1998-05-02"
const ageData = calculateAge(birthDate);
console.log(`You are ${ageData.age} years, ${ageData.month} months, and ${ageData.day} days old.`);

console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                               
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                              
// /     '._   / . --. /(_)---\_),--. ,--.              .---.  .----.   
// |'--...__)  | \-.  \ /    _ | |  .'   /             /_   | /  ..  \  
// '--.  .--'.-'-'  |  |\  :` `. |      /,              |   |.  /  \  . 
//    |  |    \| |_.'  | '..`''.)|     ' _)             |   ||  |  '  | 
//    |  |     |  .-.  |.-._)   \|  .   \               |   |'  \  /  ' 
//    |  |     |  | |  |\       /|  |\   \              |   | \  `'  /  
//    `--'     `--' `--' `-----' `--' '--'              `---'  `---''   
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 10");

console.log("Guess the amount of dark type Pokémon.")

function findDarkTypes(guessNum){
    let answers = [16, 91];

    if(guessNum === 16){
        return true;
    }else if(guessNum === 91){
        return true;
    } else{
        return false;
    }
}

console.log(findDarkTypes(16));

console.log(" ");
console.log(" ");



// ---------------------------------------------------------------------------------------------------------------------------------------------
console.log("MEDIUM");
// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                     
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                    
// /     '._   / . --. /(_)---\_),--. ,--.              .---. 
// |'--...__)  | \-.  \ /    _ | |  .'   /             /_   | 
// '--.  .--'.-'-'  |  |\  :` `. |      /,              |   | 
//    |  |    \| |_.'  | '..`''.)|     ' _)             |   | 
//    |  |     |  .-.  |.-._)   \|  .   \               |   | 
//    |  |     |  | |  |\       /|  |\   \              |   | 
//    `--'     `--' `--' `-----' `--' '--'              `---' 
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 1");

function fibonacciSequence(){
    let sequence = [x, x + 1];

    for(i = 2; i < 10; i++){
        let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

let x = 1;
console.log(fibonacciSequence(x));

console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                        
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                       
// /     '._   / . --. /(_)---\_),--. ,--.              .-----.  
// |'--...__)  | \-.  \ /    _ | |  .'   /             / ,-.   \ 
// '--.  .--'.-'-'  |  |\  :` `. |      /,             '-'  |  | 
//    |  |    \| |_.'  | '..`''.)|     ' _)               .'  /  
//    |  |     |  .-.  |.-._)   \|  .   \               .'  /__  
//    |  |     |  | |  |\       /|  |\   \             |       | 
//    `--'     `--' `--' `-----' `--' '--'             `-------' 
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 2");

function isPalindrome(text){
    let cleanText = text.toLowerCase();
    let reversedText = cleanText.split('').reverse().join('');

    return reversedText === cleanText;
}

console.log(isPalindrome("Agnes i sENga"));
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                        
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                       
// /     '._   / . --. /(_)---\_),--. ,--.              .-----.  
// |'--...__)  | \-.  \ /    _ | |  .'   /             /  -.   \ 
// '--.  .--'.-'-'  |  |\  :` `. |      /,             '-' _'  | 
//    |  |    \| |_.'  | '..`''.)|     ' _)               |_  <  
//    |  |     |  .-.  |.-._)   \|  .   \              .-.  |  | 
//    |  |     |  | |  |\       /|  |\   \             \ `-'   / 
//    `--'     `--' `--' `-----' `--' '--'              `----''  
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 3");

function arrayAddition(){
    let arrayArray = [
        [3, 6, 2],
        [3, 8, 9],
        [9, 2, 1]
    ];

    let totalSum = 0;

    for(let i = 0; i < arrayArray.length; i++){
        for(let j = 0; j < arrayArray[i].length; j++) {
            totalSum += arrayArray[i][j];
        }
    }

    return totalSum;
}

console.log(arrayAddition());
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                          
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                         
// /     '._   / . --. /(_)---\_),--. ,--.                 .---.   
// |'--...__)  | \-.  \ /    _ | |  .'   /                / .  |   
// '--.  .--'.-'-'  |  |\  :` `. |      /,               / /|  |   
//    |  |    \| |_.'  | '..`''.)|     ' _)             / / |  |_  
//    |  |     |  .-.  |.-._)   \|  .   \              /  '-'    | 
//    |  |     |  | |  |\       /|  |\   \             `----|  |-' 
//    `--'     `--' `--' `-----' `--' '--'                  `--'   
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 4");

function sortArray(arr){
    let arraySort = arr.length;

    for(i = 0; i < arraySort - 1; i++){
        for(let j = 0; j < arraySort - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+ 1] = temp;
            }
        }
    }
    return arr;    
}

let arrayToSort = [3, 7, 2, 8, 0, 23, 26, 15, 1];
console.log(sortArray(arrayToSort));
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                        
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                       
// /     '._   / . --. /(_)---\_),--. ,--.             .------.  
// |'--...__)  | \-.  \ /    _ | |  .'   /             |   ___|  
// '--.  .--'.-'-'  |  |\  :` `. |      /,             |  '--.   
//    |  |    \| |_.'  | '..`''.)|     ' _)            `---.  '. 
//    |  |     |  .-.  |.-._)   \|  .   \              .-   |  | 
//    |  |     |  | |  |\       /|  |\   \             | `-'   / 
//    `--'     `--' `--' `-----' `--' '--'              `----''  
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 5");

function filterPokemon(pokemon){
    return pokemon.filter(pokemon => pokemon.type === "Grass");
}
    
let pokemon = [
    {name: "Bulbasaur", type: "Grass", generation: 1}, 
    {name: "Squirtle", type: "Water", generation: 1}, 
    {name: "Charmander", type: "Fire", generation: 1}, 
    {name: "Chikorita", type: "Grass", generation: 2}, 
    {name: "Totodile", type: "Water", generation: 2}, 
    {name: "Cyndaquil", type: "Fire", generation: 2}, 
    {name: "Treeko", type: "Grass", generation: 3}, 
    {name: "Torchic", type: "Fire", generation: 3}, 
    {name: "Mudkip", type: "Water", generation: 3}
]

let grassTypes = filterPokemon(pokemon);
console.log(grassTypes);

console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                        
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                       
// /     '._   / . --. /(_)---\_),--. ,--.               ,--.    
// |'--...__)  | \-.  \ /    _ | |  .'   /              /  .'    
// '--.  .--'.-'-'  |  |\  :` `. |      /,             .  / -.   
//    |  |    \| |_.'  | '..`''.)|     ' _)            | .-.  '  
//    |  |     |  .-.  |.-._)   \|  .   \              ' \  |  | 
//    |  |     |  | |  |\       /|  |\   \             \  `'  /  
//    `--'     `--' `--' `-----' `--' '--'              `----'   
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 6");

function countCharacters(str){
    let charCount = {};

    for(let char of str){
        if (charCount[char]){
            charCount[char]++;
        } else{
            charCount[char] = 1;
        }
    }

    return charCount;
}

let testString = countCharacters("Is this even working? I don't know, coding is hard man");
console.log(testString);
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                         
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                        
// /     '._   / . --. /(_)---\_),--. ,--.             .--------. 
// |'--...__)  | \-.  \ /    _ | |  .'   /             |   __   ' 
// '--.  .--'.-'-'  |  |\  :` `. |      /,             `--' .  /  
//    |  |    \| |_.'  | '..`''.)|     ' _)                /  /   
//    |  |     |  .-.  |.-._)   \|  .   \                 .  /    
//    |  |     |  | |  |\       /|  |\   \               /  /     
//    `--'     `--' `--' `-----' `--' '--'              `--'      
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 7");

function groupSimilarValues(arr) {
    let result = [];
    let group = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (group.length === 0 || arr[i] === group[group.length - 1]) {
            group.push(arr[i]);
        } else {
            result.push(group);
            group = [arr[i]];
        }
    }
    
    if (group.length > 0) {
        result.push(group);
    }

    return result;
}

let result = groupSimilarValues([1, 2, 2, 3, 3, 3]);
console.log(result);
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                          
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                         
// /     '._   / . --. /(_)---\_),--. ,--.               .-----.   
// |'--...__)  | \-.  \ /    _ | |  .'   /              /  .-.  \  
// '--.  .--'.-'-'  |  |\  :` `. |      /,             |   \_.' /  
//    |  |    \| |_.'  | '..`''.)|     ' _)             /  .-. '.  
//    |  |     |  .-.  |.-._)   \|  .   \              |  |   |  | 
//    |  |     |  | |  |\       /|  |\   \              \  '-'  /  
//    `--'     `--' `--' `-----' `--' '--'               `----''   
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 8");

function sumNumbersInString(str) {
    let total = 0;

    for (let char of str) {
        if (char >= '0' && char <= '9') {
            total += parseInt(char);
        }
    }

    return total;
}

let resultNumbers = sumNumbersInString("I went to the store and I bought 9 chocolates, 4 ice creams and 6 cookies. I am sad.");
console.log(resultNumbers);
console.log(" ");


// ---------------------------------------------------------------------------------------------------------------------------------------------
//  .-') _      ('-.      .-')   .-. .-')                         
// (  OO) )    ( OO ).-. ( OO ). \  ( OO )                        
// /     '._   / . --. /(_)---\_),--. ,--.               .----.   
// |'--...__)  | \-.  \ /    _ | |  .'   /              /  ,.  \  
// '--.  .--'.-'-'  |  |\  :` `. |      /,             |  |  \  | 
//    |  |    \| |_.'  | '..`''.)|     ' _)             '  `-'  ' 
//    |  |     |  .-.  |.-._)   \|  .   \                `- /  '  
//    |  |     |  | |  |\       /|  |\   \                ,'  /   
//    `--'     `--' `--' `-----' `--' '--'               `---'    
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log("TASK 9");
function convertTemperature(value, fromUnit, toUnit) {
    let resultTemperature;

    if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            resultTemperature = (value * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            resultTemperature = value + 273.15;
        } else {
            resultTemperature = value;
        }
    } else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
            resultTemperature = (value - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
            resultTemperature = (value - 32) * 5/9 + 273.15;
        } else {
            resultTemperature = value;
        }
    } else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
            resultTemperature = value - 273.15;
        } else if (toUnit === 'Fahrenheit') {
            resultTemperature = (value - 273.15) * 9/5 + 32;
        } else {
            resultTemperature = value;
        }
    } else {
        return "Invalid unit";
    }

    return resultTemperature;
}

console.log(convertTemperature(25, 'Celsius', 'Fahrenheit'));
console.log(convertTemperature(77, 'Fahrenheit', 'Celsius'));
console.log(convertTemperature(0, 'Celsius', 'Kelvin'));
console.log(convertTemperature(320, 'Kelvin', 'Celsius'));