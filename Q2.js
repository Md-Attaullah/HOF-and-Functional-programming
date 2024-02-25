/**
 * 2. In this challenge, your task is to create a function that generates a random number and prints it to the console every 2 seconds
 * The program should keep printing new random numbers indefinitely, with a 2-second delay between each number.
 */

const GenerateRandomNumber = ()=> {
    const RandomNumber = Math.floor(Math.random()*100);
    console.log(RandomNumber);
}


const PrintWithInterval = () => {
    GenerateRandomNumber();
    setInterval(GenerateRandomNumber,2000);
}

PrintWithInterval();