'use strict'

const buttonUnblock = document.querySelector('.unblock');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const wrapper = document.querySelector('#wrapper');
const cancel = document.querySelector('#cancel');

body.addEventListener('click', (e) => {
    if(e.target === buttonUnblock) {
        modal.classList.add("is-open");
        wrapper.classList.add('for-modal');
    }
    if(e.target === cancel) {
        modal.classList.remove("is-open");
        wrapper.classList.remove('for-modal');
    }
    if(e.target === modal) {
        modal.classList.remove("is-open");
        wrapper.classList.remove('for-modal');
    }
})