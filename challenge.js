//1

let breakfast = '';
let lunch = '';
let dinner = '';

breakfast = 'pancakes';
lunch = 'BLT';
dinner = 'steak and chips';


let mealsOfDay = `Breakfast: ${breakfast}, Lunch: ${lunch}, Dinner: ${dinner}`;
console.log(mealsOfDay);

// 2 

let num = 20
//help with datatype
if (num == " " || num <= 0){
    console.log("Needs to be  positive number")
}else if (num % 3 == 0 && num % 5 == 0){  
    console.log("fizzbuzz")
} else if (num % 3 == 0){  
    console.log("fizz")
}else if (num % 5 == 0){  
    console.log("buzz")

}else {
    console.log(num)
}

// 3

function returnResult(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Make sure you enter 2 numbers";
    }
    const sum = num1 + num2;

    if (sum % 2 === 0) {
        return sum;
    } else {
        return "Make sure the sum is even";
    }
}
const result = returnResult(3, 4);
console.log(result);

const validResult = returnResult(5, 9);
console.log(validResult);


// 4

function randomNumbers() {
    const randomNum = [];

    for (let i = 0; i < 6; i++) {
        const randomNumb = Math.floor(Math.random() * 50) + 1;
        randomNum.push(randomNumb);
    }

    return randomNum;
}
const randomArray = randomNumbers();
console.log(randomArray);


// 5

function countDownArray() {
    const resultArray = [];

    for (let i = 9; i >= 0; i--) {
        resultArray.push(i);
    }

    return resultArray;
}

const descendingArray = countDownArray();
console.log(descendingArray);