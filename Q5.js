/**
 * 5. Using the same array of expense objects, use the reduce method to calculate the total amount of all expenses.
 */

let expenses = [
    { amount : 100, category : "Utilities" },
    { amount : 200, category : "Groceries" },
    { amount : 50, category : "Enterainment" },
];

let totalExpensive = expenses.reduce((amt,expense) =>
    amt+expense.amount,0
)

console.log("Total Expensive : ",totalExpensive);