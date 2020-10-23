const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
const quantity = prompt("введите количество дронов");
const quantityNumber = Number(quantity);
if (quantity === null) {
    message = 'Отменено пользователем!';
}
else if (quantityNumber != NaN && quantityNumber > 0) {
    totalPrice = pricePerDroid * Number(quantity);
    if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
    }
    else {
        const balance = credits - totalPrice;
        message = `Вы купили ${quantityNumber} дроидов, на счету осталось ${balance} кредитов.`;
    }
}
else {
    message = "Введите количество от 1";
}

console.log(message);
