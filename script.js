const questions = [
    {
        question: "Jorden är den största planeten i vårt solsystem.",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: true},
        ]
    },
    {
        question: "Människokroppen består av ungefär 60 % vatten.",
        answers: [
            {text: "Sant", correct: true},
            {text: "Falskt", correct: false},
        ]
    },
    {
        question: "Den första människan som gick på månen var Neil Armstrong.",
        answers: [
            {text: "Sant", correct: true},
            {text: "Falskt", correct: false},
        ]
    },
    {
        question: "Stockholm är Sveriges största stad.",
        answers: [
            {text: "Sant", correct: true},
            {text: "Falskt", correct: false},
        ]
    },
    {
        question: "Hajen är ett däggdjur.",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: true},
        ]
    },
    {
        question: "Kameleonter byter färg för att smälta in i sin omgivning.",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: true},
        ]
    },
    {
        question: "Månen har sin egen atmosfär.",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: true},
        ]
    },
    {
        question: "Alla fåglar kan flyga.",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: true},
        ]
    },
    {
        question: "Vulkaner finns bara på land.",
        answers: [
            {text: "Sant", correct: false},
            {text: "Falskt", correct: true},
        ]
    },
    {
        question: "Ljus färdas snabbare än ljud.",
        answers: [
            {text: "Sant", correct: true},
            {text: "Falskt", correct: false},
        ]
    }
];
const questionElement = document.getElementById("frågor");
const answerButtons = document.getElementById("svara-knapp");
const nextButton = document.getElementById("nästa-knapp");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Nästa fråga";
    questionElement.style.color = "var(--text-color)";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("knapp");
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
function selectAnswer(x){
    const selectedBtn = x.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    let scoreColor;
    let feedBackMessage;
    if(score > 7.5 / 10 * questions.length){
        scoreColor = "green";
        feedBackMessage = "vad duktig du är!";
    }else if(score > 4 / 10 * questions.length){
        scoreColor = "orange";
        feedBackMessage = "helt ok men du kan bättre";
    }else if(score < 5 / 10 * questions.length){
        scoreColor = "red";
        feedBackMessage = "det är bara att försöka igen polarn...";
    }
    questionElement.innerHTML = `Du fick ${score} av ${questions.length} ${feedBackMessage}`;
    questionElement.style.color = scoreColor;
    nextButton.innerHTML = "Testa igen!";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();