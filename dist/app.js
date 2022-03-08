"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const a = 20;
const b = 30;
const name = "Nguyen xuan hiep"; // union
const age = 20;
const status = true;
const info = {};
const stringArr = ["a", "b", "c"];
const numberArr = [1, 2, 3];
const objectArr = [{ id: 1 }, { id: 2 }];
function sum(numA, numB) {
    return numA + numB;
}
sum(a, b);
console.log(sum(a, b));
console.log(name);
