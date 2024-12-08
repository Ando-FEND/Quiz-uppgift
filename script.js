const question = [
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Malmö", correct: false},
            {text: "Göteborg", correct: false},
            {text: "Stockholm", correct: true},
            {text: "Borås", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Malmö", correct: false},
            {text: "Göteborg", correct: false},
            {text: "Stockholm", correct: true},
            {text: "Borås", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Malmö", correct: false},
            {text: "Göteborg", correct: false},
            {text: "Stockholm", correct: true},
            {text: "Borås", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Malmö", correct: false},
            {text: "Göteborg", correct: false},
            {text: "Stockholm", correct: true},
            {text: "Borås", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Malmö", correct: false},
            {text: "Göteborg", correct: false},
            {text: "Stockholm", correct: true},
            {text: "Borås", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Malmö", correct: false},
            {text: "Göteborg", correct: false},
            {text: "Stockholm", correct: true},
            {text: "Borås", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Malmö", correct: false},
            {text: "Göteborg", correct: false},
            {text: "Stockholm", correct: true},
            {text: "Borås", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Malmö", correct: false},
            {text: "Göteborg", correct: false},
            {text: "Stockholm", correct: true},
            {text: "Borås", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Malmö", correct: false},
            {text: "Göteborg", correct: false},
            {text: "Stockholm", correct: true},
            {text: "Borås", correct: false},
        ]
    },
    { 
        question: "Vilken stad är bäst i Sverige",
        answers: [
            {text: "Malmö", correct: false},
            {text: "Göteborg", correct: false},
            {text: "Stockholm", correct: true},
            {text: "Borås", correct: false},
        ]
    }
];
const frågorElement = document.getElementById("frågor");
const svarsknapp = document.getElementById("svarsknapp");
const nästaknapp = document.getElementById("nästaknapp");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nästaknapp.innerHTML = "Nästa";
    showQuestion();
}