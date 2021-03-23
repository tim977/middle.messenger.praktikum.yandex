import tml from '../templates/index.tmp'
import getHtmlFromTml from '../utils/getHtmlFromTml';
const loginPage = document.getElementsByClassName('login-page')[0];

const objData = {
    input: 'Вход',
    authorization: 'Авторизоваться',
    noAccount: 'Нет аккаунта?'
}

loginPage.appendChild(getHtmlFromTml(tml, objData));