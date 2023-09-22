// Code your solutions in this file


// 1. Write a function called `writeCards()` that accepts two arguments: an array of string names, and an event name. Create a `for` loop with a counter that starts at `0` and increments at the end of each loop. The condition should halt the `for` loop after the last name in the array is printed out in the loop body.
// 2. Inside the loop, create a custom message for each name from the provided array, thanking that person for their gift. Collect the messages in an array and return this array.
// 3. Write a function called `countDown` that accepts one argument, a positive number, and logs a countdown from that number (the argument) to `0`. Use `window.setTimeout()` to space out each count by 1 second (1000ms).

function writeCards(names, event) {

    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}











