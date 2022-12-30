export {};

function fizzBuzz(start: number, end: number) {
    for (let i = start; i <= end; i ++) {
        if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(1, 20);

function checkPalindrome(str: string) {
    let clearStr = str.replace(" ", "").toLowerCase();
    let reversedStr = clearStr.split("").reverse().join("");
    
    if (reversedStr == clearStr) {
        console.log(str+" is palindrome")
    } else {
        console.log(str+" isn't palindrome")
    }
}

checkPalindrome("My gym");

