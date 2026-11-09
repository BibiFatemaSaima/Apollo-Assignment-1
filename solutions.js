"use strict";
function multiplyValue(value, multiplier = 2) {
    return value * multiplier;
}
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        return value ? "Active" : "Inactive";
    }
}
console.log(processInput("  JAVASCRIPT  "));
console.log(processInput(8));
console.log(processInput(true));
console.log(processInput(false));
