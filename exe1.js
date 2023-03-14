// Example transaction amounts for the month
const transactions = [40, 40, 40, 40, 40];

// Calculate the total transaction amount
const transactionTotal = transactions.reduce((acc, val) => acc + val);

// Calculate the total fee amount
let feeTotal = transactions.length * 3;

// Calculate the total interest amount
const interestTotal = transactionTotal * 0.0001;

// Calculate the total cost
const totalCost = feeTotal + interestTotal;

// Calculate the total payment amount
const paymentAmount = transactionTotal + totalCost;

console.log("Maria's total payment amount for the month is $" + paymentAmount.toFixed(2));




