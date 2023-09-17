import { generatePassword } from '../module/aggregator.js';


const button = document.getElementById('generate');
button.addEventListener('click', () => {
    const length = parseInt(document.getElementById('password-length').value);
    const includeLetters = document.getElementById('include-letters').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    const password = generatePassword(length, includeLetters, includeNumbers, includeSymbols);

    document.getElementById('generated-password').textContent = password;
});