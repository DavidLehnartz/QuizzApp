'use strict';

/* LOCAL STORAGE */


// Save Data From Local Storage
function saveToLocalStorage() {
    localStorage.setItem('myQuestions', JSON.stringify(myQuestions));
    localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
    localStorage.setItem('rightAnswers', JSON.stringify(rightAnswers));

}


// Initialize From Local Storage
function getFromLocalStorage() {
    let savedQuestions = JSON.parse(localStorage.getItem('myQuestions'));
    let savedCurrentQuestion = JSON.parse(localStorage.getItem('currentQuestion'));
    let savedRightAnswers = JSON.parse(localStorage.getItem('rightAnswers'));

    if (savedQuestions || savedCurrentQuestion || savedRightAnswers) {
        myQuestions = savedQuestions
        currentQuestion = savedCurrentQuestion
        rightAnswers = savedRightAnswers
    }
}