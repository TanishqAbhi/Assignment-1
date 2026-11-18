
"use strict";

function parseAmount(input) {
    if (input === null || input === undefined) {
        throw new Error("Amount is required.");
    }

    if (typeof input !== "string" && typeof input !== "number") {
        throw new Error("Invalid input type. Enter a string or number.");
    }

    let value = input;

    if (typeof value === "string") {
        value = value.trim();
    }

    if (value === "") {
        throw new Error("Amount cannot be empty.");
    }

    const amount = Number(value);

    if (Number.isNaN(amount)) {
        throw new Error("Invalid amount. Enter a valid number.");
    }

    if (amount <= 0) {
        throw new Error("Amount must be greater than zero.");
    }

    return amount;
}

const testInputs = [
    "500",
    " 250 ",
    "",
    "abc",
    null,
    undefined,
    "12.5.3"
];

testInputs.forEach(function (input) {
    try {
        const result = parseAmount(input);
        console.log("Input:", input, "| Valid amount:", result);
    } catch (error) {
        console.log("Input:", input, "| Error:", error.message);
    }
});

console.log('"5" + 2 =', "5" + 2);
console.log('"5" - 2 =', "5" - 2);
console.log("typeof null =", typeof null);

const BANK_NAME = "JS National Bank";
let transactionCounter = 0;

console.log("Bank Name:", BANK_NAME);

transactionCounter++;
console.log("Transaction Count:", transactionCounter);

console.log("Var before declaration:", accountHolder);
var accountHolder = "Tanishq";

try {
    console.log(accountBalance);
    let accountBalance = 5000;
} catch (error) {
    console.log("Let Hoisting Error:", error.name);
}

announce();

function announce() {
    console.log("Function declaration executed before definition.");
}

try {
    notify();
    var notify = function () {
        console.log("Notification sent.");
    };
} catch (error) {
    console.log("Function Expression Error:", error.name);
}

for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("var loop:", i);
    }, 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(function () {
        console.log("let loop:", j);
    }, 100);
}
