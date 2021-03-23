let tmp = `
<div class="form-profile">
<div class="conteinerData">
    <div class="conteinerData__logo"></div>
    <div class="conteinerData__head">Профиль</div>

    <div class="conteinerData__email">
        <div class="text">Почта</div>
        <div class="value">sdfsdfsdf</div>
    </div>
    <div class="conteinerData__login">
        <div class="text">Логин</div>
        <div class="value">{{loginInput}}</div>
    </div>
    <div class="conteinerData__firstName">
        <div class="text">Имя</div>
        <div class="value">{{firstNameInput}}</div>
    </div>
    <div class="conteinerData__lastName">
        <div class="text">Фамилия</div>
        <div class="value">{{lastNameInput}}</div>
    </div>
    <div class="conteinerData__nameInChat">
        <div class="text">Имя в чате</div>
        <div class="value">{{nameInChat}}</div>
    </div>
    <div class="conteinerData__phone">
        <div class="text">Телефон</div>
        <div class="value">{{ phoneInput }}</div>
    </div>

    <div class="conteinerData__changeData">
        <a href="">
            <span>Изменить данные</span>
        </a>
    </div>
    <div class="conteinerData__changePass">
        <a href="">
            <span>Изменить пароль</span>
        </a>
    </div>
    <div class="conteinerData__goOut">
        <a href="./mainChatPage.html">
            <span>Выйти</span>
        </a>
    </div>
</div>
</div>`;

module.exports = tmp;