// PART ONE: 
// const question = "What is Superman's real name?"
// const answer = prompt(question);
// alert(`You answered ${answer}`);

// const quiz = [
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
// ];

// let score = 0 // initialize score

// for(const [question,answer] of quiz){
//     const response = prompt(question);
//     if(response === answer){
//         alert('Correct!');
//         score++;
//     } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//     }
// }

// // At the end of the game, report the player's score
// alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);


// PART TWO: 

const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz){
    let score = 0;

    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop

    gameOver();

    // function declarations
    function ask(question){
        return prompt(question);
    }

    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);


// Extra Practice with dates: 

const day = new Date().toLocaleDateString("en", { weekday: "long" });
console.log(`Today is: ${day}`);

const time = new Date().toLocaleTimeString("en");
console.log(`Current time is: ${time}`);