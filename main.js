const quizQuestions = [
    {
        question: "Which of the following is a server-side Java Script object?",
        a: "Function",
        b: "File",
        c: "FileUpload",
        d: "Date",
        answer: "ans2"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "Both the head section and the body section are correct",
        b: "The head section",
        c: "The body section",
        d: "None of the above",
        answer: "ans1"
    },
    {
        question: "Is it necessary for the external script file to contain a <script> tag?",
        a: "Yes",
        b: "No",
        c: "Depends on the type of include",
        d: "None of the above",
        answer: "ans2"
    },
    {
        question: "How does Java Script store dates in objects of Date type?",
        a: "The number of days since January 1st, 1900",
        b: "The number of seconds since January 1st, 1970",
        c: "The number of milliseconds since January 1st, 1970",
        d: "The number of picoseconds since January 1st, 1970",
        answer: "ans3"
    },
    {
        question: "How many ways are there with which we can declare a variable in javascript?",
        a: "Only one",
        b: "Three",
        c: "Infinitely many",
        d: "None of the above",
        answer: "ans2"
    },
    {
        question: "Is a variable named 'apple' same as 'Apple' in javascript?",
        a: "Yes",
        b: "No",
        c: "Only when we use 'strict'",
        d: "None of these",
        answer: "ans2"
    },
    {
        question: "Which of the following variable names are correct according to javascript? (Multiple Choices may be correct)",
        a: "let 1name;",
        b: "let #name;",
        c: "let _name;",
        d: "None of the above",
        answer: "ans3"
    },
    {
        question: "Which of the following represent truthy values in javascript",
        a: "true",
        b: "{}",
        c: "[]",
        d: "All of the above",
        answer: "ans4"
    },
    {
        question: "What is the type of variable data declare below const data=[ ]",
        a: "Array",
        b: "Object",
        c: "String",
        d: "None of the above",
        answer: "ans1"
    },
    {
        question: "Which of the following represents loops in javascript",
        a: "for",
        b: "which",
        c: "foreach",
        d: "All of the above",
        answer: "ans4"
    }
];

var question = document.getElementById("question");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var submit = document.getElementById("submit");
var answers = document.querySelectorAll(".answer");
var scores = document.getElementById("scores");

let questionCount = 0;
let score = 0;

const loadQuestions = () => {

    let questionList = quizQuestions[questionCount];
    let count = questionCount + 1;

    question.innerHTML = `Q${count}. ${questionList.question}`;
    optionA.innerHTML = questionList.a;
    optionB.innerHTML = questionList.b;
    optionC.innerHTML = questionList.c;
    optionD.innerHTML = questionList.d;
};

loadQuestions();

const getSelectedAnswer = () =>{
    let answer;
    answers.forEach((currElem) => {
        if(currElem.checked){
            answer = currElem.id;
        }
    });
    return answer;
}

const deselect = () => {
    answers.forEach((currElem) => currElem.checked = false);
};

submit.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();
    
    if(selectedAnswer === quizQuestions[questionCount].answer){
        score++;
    };

    questionCount++;

    deselect();

    if(questionCount < quizQuestions.length){
        loadQuestions();
    } else {
        scores.innerHTML = `
            <h3>Your score is ${score}/${quizQuestions.length}</h3>
            <button class="btn" onclick="location.reload()">Play again</button>
        `;
        scores.classList.remove("scores");
        scores.classList.add("myscores");
    }

});