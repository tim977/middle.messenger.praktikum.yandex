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

const inputContainer = document.getElementsByClassName('form-registration')[0];
const inputAll = inputContainer.querySelectorAll('input');
const regExp = /__(\w+)/;


let dataObj = {};

registrationButton.addEventListener('click', () => {
    [...inputAll].forEach(el => {
        let classNameNbrStart = regExp.exec(el.className)[1];
        dataObj[classNameNbrStart] = el.value
    })
    let sObj = JSON.stringify(dataObj, null, 2);
    localStorage.setItem('authorizationData', sObj);
    console.log(dataObj);
})

