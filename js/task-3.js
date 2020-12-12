const inputRef = document.querySelector(".task3__input");
const buttonEnterRef = document.querySelector(".task3__btn-enter");
const buttonExitRef = document.querySelector(".task3__btn-exit");

buttonExitRef.addEventListener("click", () => {
    console.log('Отменено пользователем!');
});

buttonEnterRef.addEventListener("click", () => {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message = inputRef.value;

    // if (message === ADMIN_PASSWORD) {
    //     message = 'Добро пожаловать!';
    // }
    // else {
    //     message = 'Доступ запрещен, неверный пароль!';
    // };

    message = message === ADMIN_PASSWORD
        ? 'Добро пожаловать!'
        : 'Доступ запрещен, неверный пароль!';

    console.log(message);
});




// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message = prompt("Введите пароль администратора");

// if (message === null) {
//     message = 'Отменено пользователем!';
// }
// else if (message === 'jqueryismyjam') {
//     message = 'Добро пожаловать!';
// }
// else {
//     message = 'Доступ запрещен, неверный пароль!';
// };

// alert(message);