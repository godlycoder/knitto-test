"use strict";
exports.__esModule = true;
function fizzBuzz(start, end) {
    for (var i = start; i <= end; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(1, 20);
function checkPalindrome(str) {
    var clearStr = str.replace(" ", "").toLowerCase();
    var reversedStr = clearStr.split("").reverse().join("");
    if (reversedStr == clearStr) {
        console.log(str + " is palindrome");
    }
    else {
        console.log(str + " isn't palindrome");
    }
}
checkPalindrome("My gym");
