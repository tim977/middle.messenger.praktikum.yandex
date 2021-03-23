const tml = `<div class="form-authorization">
                <div class="form-authorization__head">{{input}}</div>
                <input type="text" placeholder="Логин" class="form-authorization__loginInput">
                <input type="password" placeholder="Пароль" class="form-authorization__passInput">
                <div class="form-authorization__button">
                    <span>Авторизоваться</span>
                </div>
                <div class="form-authorization__reg">
                    <a href="./registration.html">
                        <span>Нет аккаунта?</span>
                    </a>
                </div>
            </div>`;

module.exports = tml;