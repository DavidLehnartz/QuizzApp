'use strict';

/* MAIN SCRIPT */

/* TASKS */
// Render Quiz content und template
// fragen anzeigen lassen
//antworten anzeigen lassen
// richtige und falsche antworten anzeigen lassen


// Initialize
function init() {
    showQuizTitle();
    renderQuizContent();
    showQuestionCounter();
    showQuestionAndAnswers();
}


// Render Quiz Content (INIT)
function renderQuizContent() {
    let quizContentRef = document.getElementById('quiz_content');
    quizContentRef.innerHTML = getQuizContentTemplate();
}


//Show Quiz Title (INIT)
function showQuizTitle() {
    let quizTitleRef = document.getElementById('quiz_title');
    quizTitleRef.innerHTML = myQuestions.quizTitle;
}


// Show Question Number (INIT)
function showQuestionCounter() {
    let questionNumber = document.getElementById('question_counter');
    questionNumber.innerHTML = myQuestions.questions.length;
}


// Render  Endscreen Dialog / Overlay
function renderEndScreen() {

}


// Show Question (INIT)
function showQuestionAndAnswers() {
    let question = myQuestions.questions[currentQuestion];

    if (currentQuestion >= myQuestions.length) {
        // TODO Oerlay Dialog ? 
    } else {
        document.getElementById('current_question_count').innerHTML = currentQuestion + 1;
        document.getElementById('question_text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


// Answer (ONCLICK)
function answer(selection) {
    let question = myQuestions.questions[currentQuestion];
    let selectedAnswer = selection;
    let correctAnswer = question['correct_answer'];
    let idOfRightAnswer = correctAnswer;

    if (selectedAnswer === correctAnswer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next_btn').disabled = false;
}


// Next Question (ONCLICK)
function nextQuestion() {
    currentQuestion++;
    clearForNextQuestion();
    showQuestionAndAnswers();
}


// Clear Run -> nextQuestion Func.
function clearForNextQuestion() {
    document.getElementById('next_btn').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}





// Answer (ONCLICK)
/* function answer(selection) {
    let question = myQuestions.questions[currentQuestion];
    console.log('selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('current question is', question['correct_answer']);

    if (selectedQuestionNumber == question['correct_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
} */