'use strict';

/* JSON ARRAY*/


let rightAnswers = 0;


let currentQuestion = 0;


let myQuestions = {
    "quizTitle": "My JavaScript Quiz",
    "questions": [
        {
            "question": "Which company developed JavaScript?",
            "answer_1": "Microsoft",
            "answer_2": "Netscape",
            "answer_3": "Google",
            "answer_4": "IBM",
            "correct_answer": "answer_2"
        },
        {
            "question": "Which of the following is a primitive data type in JavaScript?",
            "answer_1": "Array",
            "answer_2": "Object",
            "answer_3": "String",
            "answer_4": "Function",
            "correct_answer": "answer_3"
        },
        {
            "question": "What will the following expression return: `typeof NaN`?",
            "answer_1": "'number'",
            "answer_2": "'NaN'",
            "answer_3": "'undefined'",
            "answer_4": "'object'",
            "correct_answer": "answer_1"
        },
        {
            "question": "Which method is used to add an element to the end of an array in JavaScript?",
            "answer_1": "push()",
            "answer_2": "pop()",
            "answer_3": "shift()",
            "answer_4": "unshift()",
            "correct_answer": "answer_1"
        },
        {
            "question": "Which of the following is a valid way to declare a variable in JavaScript?",
            "answer_1": "var myVar = 5;",
            "answer_2": "let myVar = 5;",
            "answer_3": "const myVar = 5;",
            "answer_4": "All of the above",
            "correct_answer": "answer_4"
        },
        {
            "question": "What is the result of `2 + '2'` in JavaScript?",
            "answer_1": "4",
            "answer_2": "'22'",
            "answer_3": "NaN",
            "answer_4": "undefined",
            "correct_answer": "answer_2"
        },
        {
            "question": "Which of the following is NOT a JavaScript framework or library?",
            "answer_1": "React",
            "answer_2": "Angular",
            "answer_3": "Django",
            "answer_4": "Vue",
            "correct_answer": "answer_3"
        }
    ]
};