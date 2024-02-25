/**
 * 3. You are given an array of expense objects representing monthly expenses. Each object has properties,amount and category.
 * Use the map method to create a new array that includes the calculated tax for each expense. Assume a tax rate of 10%.
 */

let expenses = [
    { amount : 100, category : "Utilities" },
    { amount : 200, category : "Groceries" },
    { amount : 50, category : "Enterainment" },
];

let expensesWithTax = expenses.map((expenses)=>{
    let tax =expenses.amount*0.10;
    return {...expenses, tax : tax};
})

console.log("Expenses With Tax :",expensesWithTax);