const passBox = document.querySelector('input[type="text"]');
let button = document.querySelector('button');
let copyBtn = document.querySelector('copy');
const length = 8;

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=-{}[]|:;"<>,.?/~`';

const allChars = upper + lower + symbols + numbers ;

function createPassword() {
    let password = '';

    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passBox.value = password;
}

function copy(){
    passBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}