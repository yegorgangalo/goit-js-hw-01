const ADMIN_PASSWORD = 'jqueryismyjam';
// let message = prompt("Введите пароль администратора");

if (message === null) {
    message = 'Отменено пользователем!';
}
else if (message === 'jqueryismyjam') {
    message = 'Добро пожаловать!';
}
else {
    message = 'Доступ запрещен, неверный пароль!';
};

alert(message);