import tml from '../templates/mainChatPage.tmp';
import getTime from '../utils/getTime';
import getRandomNumber from '../utils/getRandomNumber';
import getHtmlFromTml from '../utils/getHtmlFromTml';

const mainChatPage = document.getElementsByClassName('chatMainPage')[0];

let dataChats = [
    {
        nameInterlocutor: 'Dima',
        lastMessage: 'Привет',
        lastMessageTime: getTime(),
        messageCounter: getRandomNumber(1, 9)
    },
    {
        nameInterlocutor: 'Bob',
        lastMessage: 'Hello',
        lastMessageTime: getTime(),
        messageCounter: getRandomNumber(1, 9)
    },
    {
        nameInterlocutor: 'Nik',
        lastMessage: ':-)',
        lastMessageTime: getTime(),
        messageCounter: getRandomNumber(1, 9)
    },
]

let temp = tml.tml;


let tempChat = tml.tmpCaht;
mainChatPage.appendChild(getHtmlFromTml(temp));

const chatConrainer = document.getElementsByClassName('chatConrainer')[0];

dataChats.forEach(obj => {
    chatConrainer.appendChild(getHtmlFromTml(tempChat, obj));
})
console.log(chatConrainer);

