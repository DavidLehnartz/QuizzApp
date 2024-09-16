'use strict';

/* TEMPLATES */


// Quiz Content Template
function getQuizContentTemplate() {
    return `
            <div class="card card-wrapper">
                <img src="./assets/img/head.jpeg" class="card-img-top" alt="#">
                <div class="card-body">
                    <h5 id="question_text" class="card-title mb"></h5>
                    <div class="card card-container mb">
                        <div onclick="answer('answer_1')" id="answer_1" class="card-body">
                            Answer 1
                        </div>
                    </div>
                    <div class="card card-container mb">
                        <div onclick="answer('answer_2')" id="answer_2" class="card-body">
                            Answer 2
                        </div>
                    </div>
                    <div class="card card-container mb">
                        <div onclick="answer('answer_3')" id="answer_3" class="card-body">
                            Answer 3
                        </div>
                    </div>
                    <div class="card card-container mb">
                        <div onclick="answer('answer_4')" id="answer_4" class="card-body">
                            Answer 4
                        </div>
                    </div>
                    <span class="quiz-card-footer-left">
                        <b id="current_question_count">1</b>
                           of
                        <b id="question_counter"></b>
                    </span>
                    <div class="quiz-card-footer-right">
                        <button onclick="nextQuestion()" id="next_btn" disabled class="btn btn-primary">Next Question</button>
                    </div>
                </div>
            </div>
    `;
} 