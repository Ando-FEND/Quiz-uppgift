const questions = [
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "ABC", correct: true},
            {text: "DEF", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }

}

startQuiz();