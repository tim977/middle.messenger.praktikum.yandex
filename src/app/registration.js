import tml from '../templates/registration.tmp';
const formRegistration = document.getElementsByClassName('form-registration')[0];

const objData = {
    headText: 'Регистрация'
}

let template = Handlebars.compile(tml);
let html = template(objData);
let content = new DOMParser().parseFromString(html, "text/html").body.childNodes[0];
formRegistration.appendChild(content);