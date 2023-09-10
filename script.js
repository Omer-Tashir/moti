const targetNumber = Math.floor(Math.random() * 10) + 1; // 6

let guess;
let attempts = 0;

do {
    guess = Number(prompt("Guess the number between 1 and 10:")); // 5
    attempts++;

    if (guess == targetNumber) {
        console.log(
            `Congratulations! you guessed the correct number, and it took you ${attempts} attempts`
        );
    } else {
        console.log("Incorrect! Try a different number!");
    }
} while (guess != targetNumber);
