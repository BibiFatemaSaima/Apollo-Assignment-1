// function multiplyValue(value: number, multiplier: number = 2): number {
//   return value * multiplier;
// }

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}

console.log(processInput("  JAVASCRIPT  "));
console.log(processInput(8));
console.log(processInput(true));
console.log(processInput(false));
