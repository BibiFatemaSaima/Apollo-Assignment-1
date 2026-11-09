Type Narrowing in TypeScript

Introduction

TypeScript is a strongly type programming language that helps developers write safer code. Sometimes, a variable can have more than one possible type. Type narrowing helps TypeScript identify the specifics type of a value before using it.

What is Type Narrowing?

Type narrowing is the process of reducing a variable's possible types within a particular blocks of code. We can use conditions and JavaScript operators to check the actual type of a value.

Using typeof

The typeof operator is one of the most common ways to narrow types in TypeScript.

Example:

    function processInput(value: string | number): string | number {
      if (typeof value === "string") {
        return value.toUpperCase();
      }

      return value * 10;
    }

In this example, the parameters value can be either a string or a number. TypeScript checks its type using typeof.

If the value is a string, it convert the text to uppercase. Otherwise, it multiplies the number by 10.

Using Type Guards

We can also use conditions such as instanceof to check whether an object belongs to a particular class.

Example:

    class Dog {
      bark(): string {
        return "Woof!";
      }
    }

    function makeSound(animal: Dog | string): string {
      if (animal instanceof Dog) {
        return animal.bark();
      }

      return animal.toUpperCase();
    }

Here, instanceof helps TypeScript identify whether the value is a Dog object or a string.

Conclusion

Type narrowing makes TypeScript code safer and easier to manage. By using typeof, instanceof, and conditional checks, developers can work confidently with union types and avoid many type-related errors.
