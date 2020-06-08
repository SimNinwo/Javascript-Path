// Functions

// function getSecretCode(value) {
//     let code = value * 84;
//     return code;
// }

// showMessage(getSecretCode(2));

// // function scope
// let key = 42;

// function getCode(value) {
//     let keyGenerator = function() {
//         let key = 12;
//         console.log('in keyGenerator: ', key);
//         return key;
//     }

//     let code = value * keyGenerator();
//     console.log(' in getCode: ', key);
//     return code;
// }

// let secretCode = getCode(2);
// showMessage(secretCode);

const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    } else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
});