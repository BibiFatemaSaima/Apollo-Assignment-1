Type vs Interface in TypeScript

Introduction

TypeScript provides two important ways to define the structure of data: "type" and "interface". Both help developers describe the shape of objects and make code easier to understand. However, they have some differences.
What is Interface?

An interface is mainly used to define the structure of an object. It describes which properties and types an object should have.

Example:
interface Student {
name: string;
age: number;
}

const student: Student = {
name: "Saima",
age: 25
};

Here, the "Student" interface ensures that the object has a string "name" and a number "age".

Interfaces can also be extended using the "extends" keyword.

interface Person {
name: string;
}

interface Employee extends Person {
salary: number;
}

What is Type?

A type alias allows us to create a custom name for any type. It can define objects, primitive types, unions, and more.

Example:
type User = {
name: string;
email: string;
};

type Status = "active" | "inactive";

Unlike interfaces, type aliases can easily define union and intersection types.

Key Differences

Both "type" and "interface" can describe object structures. However, interfaces support declaration merging, while type aliases do not. Interfaces are commonly used for object structures, whereas types are useful for unions, intersections, and other complex type definitions.

Conclusion

Both "type" and "interface" are useful in TypeScript. Developers can choose either depending on their requirements. Understanding their differences helps write clean, organized, and maintainable code.
