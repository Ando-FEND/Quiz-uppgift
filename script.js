
//Alla mina frågor
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

// visar frågorna och lägger även till vilken fråga man är på tex 1. 2. skulle ha gjort en som visade 1/10 tex men det hann jag inte med.
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

// Lägger till klasserna correct/incorrect som är styleade i scss för att visa vilket svar som är rätt ifall man svarar fel, gör även så att man inte kan klicka på något efter man svarat.
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

//visar olika färgerna beroende på poäng och ger ett feedback message beroende på poäng i en specifik färg
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

//hanterar nästa-knappen om de finns mer frågor ta nästa fråga om inte visa slutpoängen
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
//darkmode knappen med localstorage så att man kan refresha sidan ifall man vill ochden kommer ihåg vilket tema den va i.
let mörktläge = localStorage.getItem("mörktläge")

const ändraTema = document.getElementById("ändra-tema")

const enablemörktläge = () => {
    document.body.classList.add("mörktläge")
    localStorage.setItem("mörktläge", "active")
}

const disablemörktläge = () => {
    document.body.classList.remove("mörktläge")
    localStorage.setItem("mörktläge", null)
}

if(mörktläge === "active") enablemörktläge()

ändraTema.addEventListener("click", () => {
    mörktläge = localStorage.getItem('mörktläge')
    mörktläge !== "active" ? enablemörktläge() : disablemörktläge()
})

// saker jag skulle vilja ha hunnit med
// progress-bar 
// 1/10 fråge-räknare
// kanske roligare styling
//sparade variabler i scss 
//börjat tidigare och inte slackat som en idiot :)