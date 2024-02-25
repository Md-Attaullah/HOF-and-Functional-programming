/**
 * 4. Using the same array of expense objects,
 * use the filter method to create a new array that includes only the expenses related to the category "Groceries."
 */

let expenses = [
    { amount : 100, category : "Utilities" },
    { amount : 200, category : "Groceries" },
    { amount : 50, category : "Enterainment" },
];

let GroceriesData = expenses.filter((expense)=>
    expense.category === "Groceries"
);

console.log("GroceriesData :", GroceriesData);