"use strict";

var button = document.getElementsByClassName('hidenger-show-hide');
console.log(button.length)
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        showHideInput(this);
    });
}

function showHideInput(action) {
    console.log(action)
    var inputElem = action.previousElementSibling;

    if (inputElem.getAttribute('type') === 'password') {
        inputElem.removeAttribute('type');
        inputElem.setAttribute('type', 'text');
    } else {
        inputElem.removeAttribute('type');
        inputElem.setAttribute('type', 'password');
    }
}
