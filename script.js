'use strict';

/* MAIN SCRIPT */

/* TASKS */

// RESPONSIVE
// LOCAL STORAGE

// Initialize
function init() {
    getFromLocalStorage();
    renderQuizTitle();
    renderQuizContent();
    showQuestionCounter();
    showQuestionAndAnswers();
    renderEndScreen();
}


//Show Quiz Title (INIT)
function renderQuizTitle() {
    let quizTitleRef = document.getElementById('quiz_title');
    quizTitleRef.innerHTML = myQuestions.quizTitle;
}


// Render Quiz Content (INIT)
function renderQuizContent() {
    let quizContentRef = document.getElementById('quiz_content');
    quizContentRef.innerHTML = getQuizContentTemplate();
}


// Render  Endscreen Dialog / Overlay (INIT)
function renderEndScreen() {
    let endScreenContentRef = document.getElementById('end_screen_dialog');
    endScreenContentRef.innerHTML = getEndScreenTemplate();
}


// Show Question Number (INIT)
function showQuestionCounter() {
    let questionNumber = document.getElementById('question_counter');
    questionNumber.innerHTML = myQuestions.questions.length;
}


// Show Question (INIT)
function showQuestionAndAnswers() {
    let question = myQuestions.questions[currentQuestion];

    if (currentQuestion >= myQuestions.length) {
        document.getElementById('finish_btn').style = '';
        document.getElementById('next_btn').style = 'display:none';
    } else {
        document.getElementById('current_question_count').innerHTML = currentQuestion + 1;
        document.getElementById('question_text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

        updateProgressBar();
    }
    changeButton();
    saveToLocalStorage();
}


// Answer (ONCLICK)
function answer(selection) {
    let question = myQuestions.questions[currentQuestion];
    let selectedAnswer = selection;
    let correctAnswer = question['correct_answer'];
    let idOfRightAnswer = correctAnswer;

    if (selectedAnswer === correctAnswer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audio_right.play();
        rightAnswers++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audio_wrong.play();
    }
    ButtonsIsDisabled();
    saveToLocalStorage();
}


// Next Question (ONCLICK)
function nextQuestion() {
    currentQuestion++;
    clearForNextQuestion();
    showQuestionAndAnswers();
    saveToLocalStorage();
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


// Change Button At Last Question Run -> showQuestionAndAnswers Func.
function changeButton() {
    // Wenn es die letzte Frage ist, zeige den Finish-Button und verstecke den Next-Button
    if (currentQuestion === myQuestions.questions.length - 1) {
        document.getElementById('finish_btn').style.display = '';
        document.getElementById('next_btn').style.display = 'none';
        document.getElementById('finish_btn').disabled = true;
    } else {
        document.getElementById('finish_btn').style.display = 'none';
        document.getElementById('next_btn').style.display = '';
    }
}


// Buttons Disabled False
function ButtonsIsDisabled() {
    document.getElementById('next_btn').disabled = false;
    document.getElementById('finish_btn').disabled = false;
}


// Open End Screen (ONCLICK)
function openEndScreen() {
    document.getElementById('amount_of_right_answers').innerHTML = rightAnswers;
    document.getElementById('amount_of_questions').innerHTML = myQuestions.questions.length;
    document.getElementById('end_screen').classList.remove('d_none');
}


function resetQuiz() {
    currentQuestion = 0;  // Setze den aktuellen Frage-Index zurück auf 0
    rightAnswers = 0;

    document.getElementById('end_screen').classList.add('d_none');   // Blende den Endscreen aus, falls er angezeigt wird
    document.getElementById('finish_btn').style.display = 'none';   // Setze den Finish-Button und Next-Button auf die Standardwerte
    document.getElementById('next_btn').style.display = '';

    clearForNextQuestion();   // Setze alle Antwortfelder zurück, falls sie rot oder grün markiert sind

    showQuestionAndAnswers();  // Starte das Quiz von vorne, indem du die erste Frage zeigst
}


function updateProgressBar() {
    let totalQuestions = myQuestions.questions.length;   // Gesamtanzahl der Fragen
    let percent = (currentQuestion + 1) / totalQuestions * 100;  // Berechne Prozentsatz basierend auf currentQuestion

    percent = Math.round(percent);  // Runden des Prozentsatzes

    // Setze die Breite der Progressbar entsprechend dem Fortschritt
    document.getElementById('progress_bar').style.width = `${percent}%`;

    // Optional: Zeige den Prozentwert auch in der Progressbar
    document.getElementById('progress_bar').innerHTML = `${percent}%`;

    saveToLocalStorage();
}