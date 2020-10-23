const total = 100;
const ordered = [20, 50, 130, 80];
for (let i = 0; i < 4; i += 1){
// if (ordered[i] > total) {
//     console.log("На складе недостаточно товаров!");
// } else {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
//     };

ordered[i] > total ? console.log("На складе недостаточно товаров!") :  console.log("Заказ оформлен, с вами свяжется менеджер")
};