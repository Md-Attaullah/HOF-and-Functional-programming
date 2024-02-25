/**
 * 8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a new array.
 */

let originalNumbers = [2,5,8,10,3];

let evenNumbers=[];

originalNumbers.forEach(num =>
    {
        if(num%2===0){
            evenNumbers.push(num)
        }
    })

    console.log("Even Number : ",evenNumbers);