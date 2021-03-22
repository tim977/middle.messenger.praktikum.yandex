import tml from '../templates/registration.tmp';
const prefixClass = 'form-registration';
const formRegistration = document.getElementsByClassName('page-registration')[0];

const objData = {
    headText: 'Регистрация'
}

let template = Handlebars.compile(tml);
let html = template(objData);
let content = new DOMParser().parseFromString(html, "text/html").body.childNodes[0];
formRegistration.appendChild(content);


const registrationButton = document.getElementsByClassName(`${prefixClass}__button`)[0];

const loginInput = document.getElementsByClassName(`${prefixClass}__loginInput`)[0];
const firstNameInput = document.getElementsByClassName(`${prefixClass}__firstNameInput`)[0];
const lastNameInput = document.getElementsByClassName(`${prefixClass}__lastNameInput`)[0];
const phoneInput = document.getElementsByClassName(`${prefixClass}__phoneInput`)[0];
const passCheckInput = document.getElementsByClassName(`${prefixClass}__passCheckInput`)[0];
const passCheck2Input = document.getElementsByClassName(`${prefixClass}__passCheck2Input`)[0];


let arrInput = [loginInput, firstNameInput, lastNameInput, phoneInput, passCheckInput, passCheck2Input];
let arrInputStr = ['loginInput', 'firstNameInput', 'lastNameInput', 'phoneInput', 'passCheckInput', 'passCheck2Input'];
let dataObj = {};
registrationButton.addEventListener('click', () => {
    arrInput.forEach((el, i) => {
        dataObj[arrInputStr[i]] = el.value
    })
    let sObj = JSON.stringify(dataObj, null, 2);
    localStorage.setItem('authorizationData', sObj);
    console.log(dataObj);
})

