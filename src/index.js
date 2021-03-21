import tml from './templates/index.tmp'
const loginPage = document.getElementsByClassName('login-page')[0];

const objData = {
    input: 'Вход',
    authorization: 'Авторизоваться',
    noAccount: 'Нет аккаунта?'
}

let template = Handlebars.compile(tml);
let html = template(objData);
let content = new DOMParser().parseFromString(html, "text/html").body.childNodes[0];
loginPage.appendChild(content);