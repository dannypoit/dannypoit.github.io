'use strict';

window.addEventListener('load', () => {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('open');
            question.classList.toggle('open');
        });
    });
});