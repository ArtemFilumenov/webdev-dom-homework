import { authUser, regUser, setToken, token } from "./api.js";
import { renderApp, setUser } from "./main.js";

export const renderLoginForm = () => {
    const addLoginForm = document.querySelector(".container");
    const loginFormHtml = `
    <div class="add-form" id="authForm">
        <h2>Форма входа</h2>
        <input
            type="text" 
            class="input-form auth-input-form"
            placeholder="Введите логин"
            id="authInputName" 
            required
        />
        <input
            type="text"
            class="text-area-form"
            placeholder="Введите пароль"
            rows="4"
            id="authInputPassword"
        />
        <div class="add-form-row">
            <button class="add-form-button" id="authButton">Войти</button>
        </div>
        <button onclick="renderRegForm();">Зарегестрироваться</button>
    </div>`;

    addLoginForm.innerHTML = loginFormHtml;

    const authButtonElement = document.getElementById("authButton");
    const loginInputElement = document.getElementById("authInputName");
    const passwordInputElement = document.getElementById("authInputPassword");
    authButtonElement.addEventListener('click', () => {
        authUser({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responseData) => {
            setToken(responseData.user.token);
            setUser(responseData.user);
            renderApp();
            console.log(token);
        });
    });
};

export const renderRegForm = () => {
    const addRegForm = document.getElementById("addRegForm");
    const regFormHtml = `
    <div class="add-form" id="regForm">
        <h2>Форма регистрации</h2>
        <input
            type="text" 
            class="input-form auth-input-form"
            placeholder="Введите имя"
            id="regInputName" 
            required
        />
        <input
            type="text" 
            class="input-form auth-input-form"
            placeholder="Введите логин"
            id="regInputLogin" 
            required
        />
            <input
            type="text" 
            class="input-form auth-input-form"
            placeholder="Введите пароль"
            id="regInputPassword" 
            required
        />
        <div class="add-form-row">
            <button class="add-form-button" id="regButton">Зарегестрироваться</button>
        </div>
        <div href="#" onclick="renderLoginForm():">Войти</div>
    </div>`;
    addRegForm.innerHTML = regFormHtml;
    const regButtonElement = document.getElementById("regButton");
    const nameInputElement = document.getElementById("regInputName");
    const loginInputElement = document.getElementById("regInputLogin");
    const passwordInputElement = document.getElementById("regInputPassword");
    regButtonElement.addEventListener('click', () => {
        regUser({
            name: nameInputElement.value,
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responseData) => {
            console.log(token);
            setToken(responseData.user.token);
            setUser(responseData.user);
            renderApp();
            console.log(token);
        })
    });
};