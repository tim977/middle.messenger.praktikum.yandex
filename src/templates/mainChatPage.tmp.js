const tml = `<div>
                <div class="chatListWrapper">
                <div class="chatListWrapper__profileLink">
                    <a href="./profile.html">Профиль</a>
                </div>
                <input type="text" class="chatListWrapper__search" placeholder="Поиск">
                <div class="chatConrainer"></div>
                </div>
                <div class="plugLogo">
                    <span>Выберите чат чтобы отправить сообщение</span>
                </div>
            </div>`;

const tmpCaht = `
            <div class="chatConrainer__item">
                <div class="chatConrainer__item_logo"></div>
                <div class="chatConrainer__item_nameInterlocutor">{{ nameInterlocutor }}</div>
                <div class="chatConrainer__item_lastMessage">{{ lastMessage }}</div>
                <div class="chatConrainer__item_lastMessageTime">{{ lastMessageTime }}</div>
                <div class="chatConrainer__item_messageCounter">{{ messageCounter }}</div>
            </div>`;

module.exports = {
    tml,
    tmpCaht
}