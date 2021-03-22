let tml = `<div class="form-registration">
                <div class="form-registration__head">{{headText}}</div>
                <input type="email" placeholder="Почта" class="form-registration__emailInput">
                <input type="text" placeholder="Логин" class="form-registration__loginInput">
                <input type="text" placeholder="Имя" class="form-registration__firstNameInput">
                <input type="text" placeholder="Фамилия" class="form-registration__lastNameInput">
                <input type="tel" placeholder="Фамилия" class="form-registration__phoneInput">
                <input type="password" placeholder="Пароль" class="form-registration__passCheckInput">
                <input type="password" placeholder="Пароль(еще раз)" class="form-registration__passCheck2Input">
                <div class="form-registration__button">
                    <span>Зарегистрироваться</span>
                </div>
                <div class="form-registration__input">
                    <a href="./mainChatPage.html">
                        <span>Войти</span>
                    </a>
                </div>
            </div>`;

module.exports = tml;