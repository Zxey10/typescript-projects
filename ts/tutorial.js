"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var age = 23;
var isSaved = false;
var username = "Max";
var hobbies = ["Lol", "1", "Programming"];
var person;
person = {
    name: "Max",
    age: 32
};
hobbies.forEach(function (element) {
    console.log(element);
});
var people;
var course = 'React Type Inference';
course = Math.random();
function add(a, b) {
    return a + b;
}
console.log(add(2.6, 6));
function print(value) {
    console.log(value);
}
//! Generics
function insertAtBeginning(arr, value) {
    var newArr = __spreadArray([value], arr, true);
    return newArr;
}
var demoArr = [1, 2, 3];
var updatedArr = insertAtBeginning(demoArr, 43);
console.log(updatedArr);
