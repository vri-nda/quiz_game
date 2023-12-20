// const quizData = [
//     {
//         question: "What does HTML stand for?",
//         answers: [
//             { text: "Hyper Text Markup Language", correct: true },
//             { text: "Hyperlinks and Text Markup Language", correct: false },
//             { text: "Home Tool Markup Language", correct: false },
//             { text: "Hyper Transfer Markup Language", correct: false }
//         ]
//     },
//     {
//         question: "Which programming language is often used for server-side development?",
//         answers: [
//             { text: "JavaScript", correct: false },
//             { text: "Python", correct: true },
//             { text: "CSS", correct: false },
//             { text: "Java", correct: false }
//         ]
//     },
//     {
//         question: "What is the purpose of CSS?",
//         answers: [
//             { text: "To provide interactivity on a website", correct: false },
//             { text: "To style the visual presentation of a web page", correct: true },
//             { text: "To define server-side logic", correct: false },
//             { text: "To handle database operations", correct: false }
//         ]
//     },
//     {
//         question: "What does the term 'API' stand for?",
//         answers: [
//             { text: "Advanced Programming Interface", correct: false },
//             { text: "Application Programming Interface", correct: true },
//             { text: "Automated Processing Interface", correct: false },
//             { text: "Advanced Python Integration", correct: false }
//         ]
//     },
//     {
//         question: "Which version control system is widely used in software development?",
//         answers: [
//             { text: "Git", correct: true },
//             { text: "SVN", correct: false },
//             { text: "Mercurial", correct: false },
//             { text: "Perforce", correct: false }
//         ]
//     },
//     {
//         question: "What is the purpose of the 'npm' package manager in JavaScript?",
//         answers: [
//             { text: "To manage network protocols", correct: false },
//             { text: "To manage JavaScript packages and dependencies", correct: true },
//             { text: "To create graphical user interfaces", correct: false },
//             { text: "To execute SQL queries", correct: false }
//         ]
//     },
//     {
//         question: "What is the role of a 'function' in programming?",
//         answers: [
//             { text: "To store data", correct: false },
//             { text: "To perform a specific task or calculation", correct: true },
//             { text: "To represent a database table", correct: false },
//             { text: "To define the structure of a webpage", correct: false }
//         ]
//     },
   
// ];


// let currentQuestionIndex = 0;
// let score = 0;
// let timeLeft = 30;
// let timer;

// const questionTextElement = document.getElementById('question-text');
// const answerButtonsElement = document.getElementById('answer-buttons');
// const feedbackContainer = document.getElementById('feedback-container');
// const timerElement = document.getElementById('timer');
// // const timerElement = document.getElementById('timeLeft');
// const scoreElement = document.getElementById('score');
// const homeContainer = document.getElementById('home-container');
// const quizContainer = document.getElementById('quiz-container');

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     showQuestion(quizData[currentQuestionIndex]);
//     startTimer(30); // Set the timer duration in seconds
//     homeContainer.style.display = 'none';
//     quizContainer.style.display = 'block';
    
// }

// function showQuestion(question) {
//     questionTextElement.innerText = question.question;
//     answerButtonsElement.innerHTML = '';
//     question.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.text;
//         button.classList.add('btn');
//         button.addEventListener('click', () => selectAnswer(answer));
//         answerButtonsElement.appendChild(button);
//     });
// }


// function selectAnswer(answer) {
//     const correctAnswer = quizData[currentQuestionIndex].answers.find(ans => ans.correct);
//     const selectedButton = Array.from(answerButtonsElement.children).find(child => child.innerText === answer.text);

//     if (answer.correct) {
//         score++;
//         feedbackContainer.innerText = 'Correct!';
//         selectedButton.style.backgroundColor = '#3498db'; // Change to the desired color
//         selectedButton.style.color = '#fff';
//     } else {
//         feedbackContainer.innerText = `Incorrect! The correct answer is: ${correctAnswer.text}`;
//         selectedButton.style.backgroundColor = '#e74c3c'; // Change to the desired color for incorrect answers
//         selectedButton.style.color = '#fff';

//         const correctButton = Array.from(answerButtonsElement.children).find(child => child.innerText === correctAnswer.text);
//         correctButton.style.backgroundColor = '#3498db'; // Change to the desired color for correct answers
//         correctButton.style.color = '#fff';
//     }

//     disableButtons();
//     updateScore();
//     clearInterval(timer);
//     if (currentQuestionIndex < quizData.length - 1) {
//         document.getElementById('next-button').disabled = false;
//     } else {
//         endQuiz();
//     }
// }

// function getCorrectAnswer() {
//     return quizData[currentQuestionIndex].answers.find(answer => answer.correct).text;
// }

// function highlightCorrectAnswer() {
//     const correctAnswerElement = Array.from(answerButtonsElement.children).find(child => {
//         const answer = quizData[currentQuestionIndex].answers.find(ans => ans.correct).text;
//         return child.innerText === answer;
//     });
//     correctAnswerElement.style.backgroundColor = '#3498db'; // Change to the desired color
//     correctAnswerElement.style.color = '#fff';
// }

// function disableButtons() {
//     const buttons = document.querySelectorAll('.btn');
//     buttons.forEach(button => {
//         button.disabled = true;
//     });
// }

// function updateScore() {
//     scoreElement.innerText = score;
// }

// function startTimer(seconds) {
//     let time = seconds;
//     timer = setInterval(() => {
//         timerElement.innerText = time;
//         time--;
//         if (time < 0) {
//             clearInterval(timer);
//             disableButtons();
//             feedbackContainer.innerText = 'Time is up!';
//             document.getElementById('next-button').disabled = false;
//         }
//     }, 1000);
// }

// function nextQuestion() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < quizData.length) {
//         showQuestion(quizData[currentQuestionIndex]);
//         feedbackContainer.innerText = '';
//         startTimer(30); // Reset timer for the next question
//         document.getElementById('next-button').disabled = true;
//     }
// }

// function endQuiz() {
//     questionTextElement.innerText = 'Quiz Completed!';
//     answerButtonsElement.innerHTML = '';
//     feedbackContainer.innerText = `Your final score is ${score} out of ${quizData.length}`;
//     timerElement.innerText = '';
//     document.getElementById('next-button').style.display = 'none';
// }




let timeLeft = 30;
let timerElement = document.getElementById('timeLeft');

function isTimeLeft() {
    return timeLeft > -1;
}

function runTimer(timerContainer) {
    const timerCircle = timerContainer.querySelector('svg > circle + circle');
    timerContainer.classList.add('animatable');
    timerCircle.style.strokeDashoffset = 1;

    let countdownTimer = setInterval(function() {
        if (isTimeLeft()) {
            const normalizedTime = (30 - timeLeft) / 30;
            timerCircle.style.strokeDashoffset = normalizedTime;
            timerElement.textContent = timeLeft--;
        } else {
            clearInterval(countdownTimer);
            timerContainer.classList.remove('animatable');
        }
    }, 1000);
}

runTimer(document.querySelector('.timer-container'));
