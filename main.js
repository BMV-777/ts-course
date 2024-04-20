// const friend = ["kkdkd", "ddddd", "mdjfdsf"];

// console.table(friend);

// const age = 27.89;

// console.log(~~age);

// let value = [32,43,34, 65, 77,78,87, 76];
// let totol = 0;

// for (let i = 0; i < value.length; i += 1){
//   console.log(value[i]);

//   if (value[i] % 2 === 0) {
//     console.log("Чётные :");

//     totol += value[i]
//   }
//   else if(value[i] % 2 !== 0){
//     console.log("Не четные! :")

//     totol += value[i]
//   }
// }

// let logins = ["treco", "fank", "tron", "terot"];
// let pasword = "tron44"
// let message = "";
// let string = logins.join(", ");

// console.log(string);
// let namber = [12, 3, 77, 44, , 55, 33, 29, 99, 78];
// let total = namber[0];

// message = logins.includes(pasword) ? `Пороль ${pasword} верен` : `Пороль ${pasword} нет такого`;

// console.log(message);

// let lener = ("To 10 polincer JavaScript Htp");

// const strit = lener.toLowerCase();

// console.log(strit);

// const fara = strit.split(" ");
// console.log(fara);

// const dert = fara.join("-");
// console.log(dert);

// const log1 = lener.toLowerCase().split(" ").join("-");

// console.log(log1);

// const fn = function (...args) {
//   console.log(args);

//   let total = 0;
//   for (let arg of args) {
//     total += arg;
//   }

//   return total;
// }

// console.log("Количиство: ",fn(1, 3, 4));
// console.log(fn(16, 37,74, 45));
// fn(14, 43, 54,99,87);

// Задача 1
// const name = "Генератор защитного поля" ;
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// Задача 2

// const total =100 ;
// const ordered = 50;

// let message ='';

// if (total > ordered) {
//   message = "Заказ оформлен, с вами свяжется менеджер";

//   console.log(message);

// } else {
//   message = "На складе недостаточно товаров!";

//   console.log(message);
// }

//  Задача 3

// const ADMIN_PASSWORD = "Maks";
// let message;

// let age = prompt("Ведите пароль",'');

// if (age === null) {
//   message = "Отмена пользователем!";

// } else if (age === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!";

// } else if (age != ADMIN_PASSWORD) {
//   message = "Доступ запрещен, неверный пароль!'";

// }

// alert(message)

//  Задача 4

// 1.Создать переменые

// 2.При отмене вернуть messeg= отмена пол зователям
// .3 Разчетать стоимать заказа при заказе и сохронить в переменой totalPrice.

// 4.Проверить сможет ли пользователь оплатить заказ если нет вывести messag =Недостаточно средств на счету!'.

// 5.Противном случии ввывести message =Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// let credit = 23580;

// const pricePerDroid = 3000;

// let prais = prompt("Цена одной штуки 3000 кридитов", " ");
// let message;
// let x = prais;
// let totalPrice = x * pricePerDroid;

// console.log(`Общая стоимость заказа: ${totalPrice} количество: ${x}.`);

// if (x === null) {
//    message ="отмена пользователем!" ;
//   console.log(message);

// } else if ( totalPrice <= credit) {
//   message = `Вы купили ${x} дроидов, на счету остаток ${credit}`;

//   credit -=totalPrice;

//  console.log(message);

// } else {

// message = "Не достаточно средств"
// console.log(message);
// }

//  Задача 5;

// let brend = "SaMsUng";

// brend = brend[0] + brend.slice(1).toLowerCase();
// console.log(brend)

// let brend = prompt("Ведити страну доставки");

// brend = brend[0] + brend.slice(1).toLowerCase();

// const strana = brend;
// let credit;

// switch (strana) {
//   case "Китай":
//     console.log("Доставка в Китай будет стоить 250 кредитов");
//     break;

//   case "Чили":
//     console.log("Доставка в Чили будет стоить 250 кредитов");
//     break;

//     case "Австралия":
//       console.log("Доставка в Австралия будет стоить 170 кредитов");
//     break;

//     case "Индия":
//       console.log("Доставка в Индия будет стоить 80 кредитов");
//     break;

//     case "Ямайка":
//       console.log("Доставка в Чилимайка будет стоить 120]кредитов");
//     break;

//   default:
//     alert("В вашей стране доставка не доступна!");
//   }

// Задача 6

// const min = 0;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1){

//   if (i % 2 !== 0) {
//     console.log(" Не Четные: ", i);
//     // continue;
//   }
//   console.log("Четные: ", i);
//   total += i;
// }

// console.log("total: ", total)

// const min = [12, 15, 60, 32, 66, 77, 88, 94, 65, 35];

// let total = 0;

// for (let key of min) {
//   // console.log(key);

//   if (key % 2 === 0) {
//     console.log(`${key}-не четные!!`);
//     total += key;
//     continue;
//   }
//   console.log(`${key}-четные!!`);
//   total += key;
// }

// console.log('Total: ', total);

// const logen = ["herow", "merov", 'trevor', "tor"];

// const logenWerd = "tor";

// let messege= `Не найден ${logenWerd} с таким именем`;

// for (let i = 0; i < logen.length; i += 1){

//   const logens = logen[i];

//   if (logens === logenWerd) {
//     messege = `Найден ${logenWerd} с таким именем`;

//       break;
//   }
// }

// console.log(messege)

// const nombers = [12, 33, 44, 23, 67, 77, 99, 7];
// let nextNomer = nombers[0];

// for (let nomer of nombers) {

//   if (nomer < nextNomer) {
//     nextNomer = nomer;
//   }
// }

// console.log("nextNomer",nextNomer)

// const fruts = ["Mango", "Gruha", "Apple", "Duna"]

// const total = fruts.join(',');
// console.log(total)

// const string = "JavaScript";

// const letters = string.split('');
// let inversitString = '';

// for (const letter of letters) {

//   console.log(letter)

//   inversitString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();

// }

// console.log(inversitString)

// const friends = [
//   { name: "Peter", online: false },
//   { name: "Moris", online: true },
//   { name: "Maks", online: false },
//   { name: "Eris", online: true },
// ];

// console.table(friends);
// const getFondFrends = function (alses) {

//   const frendOnlain = [];

//   for (const frind of alses) {
//     console.log(frind);

//     console.log(frind.online);

//     if (frind.online) {
//       alses.push(frind);
//     }

//   }
//   console.log(frendOnlain);
// };

// const getFrinds = function (allFrends) {
//    const onlineFrinds = [];

//   for (const friend of allFrends) {
//     console.log(friend);
//      console.log(friend.online);

//      if (friend.online) {
//       onlineFrinds.push(friend);
//      }
//   }
//    return onlineFrinds;
// };
//   console.log(getFrinds(friends));

// const getFindFrends = function (alses) {
//     const names = [];

//     for (const frind of alses) {
//       console.log(frind.name);

//       names.push(frind.name)
//     }
//     console.log(names);
//   };

// console.log(getFindFrends(friends))

// const findFrends = function (alses, name) {
//   for (const frend of alses) {
//     console.log(frend);
//     console.log(frend.name);

//     if (frend.name === name) {
//       return `Нашли: ${frend.name}`;
//     }
//   }
//   return `Нет такого ${name} в списке`
// };

// console.table(findFrends(frends, "Maks"));

// const a = { x: 1, y: 10 };

// const b = { x: 2, z: 22 };

// const c ={...a, y:0, ...b, z:0}

// console.log(c);

// const pleyList = {
//   name: 'Наша Украина',
//   treck: 3,
//   play: ["trek-1", "trek-2", "trek-2"],
//   phone: +380952311120,
// }

// const { name, treck, play, phone } = pleyList;

// console.log(pleyList)

// const trin = [1, 2, 3, 4, 5, 6, 7];

// const urt=[8,9,10,11,12]

// console.log(...trin, ...urt)

// const pleyList = {
//   kiw1: 3,
//   giwi: 5,
//   miri: 7,
//   gru:9
// }

// const entries = Object.entries(pleyList);

// for (const [inti, renti] of entries) {

//   console.log(inti,renti)
// }

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map(student => student.name + " "  + student.score );
// console.log(names);

// const cart = {
//   items:[],
//   getAtems() {
//     return this.items;
//    },
//   add(product) {

//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quenteti += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quenteti: 1,
//     }

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       // console.log(items[i])
//       const { name } = this.items[i];

//       if (productName === name) {
//         console.log('Нашли такой продукт:', productName);
//         console.log("индекс: ",i);

//         items.splice(i, 1);
//       }
//     }
//    },
//   clear() {
//     this.items = [];
//    },
//   countTotalPrice() {
//     const {items} = this
//     let total = 0;

//     for (let {price, quenteti} of items) {

//        total += price * quenteti;
//     }
//     return total;
//    },
//   increaseQuantity(productName) {

//     увеличивет quenteti  на 1 если есть такой продукт
//   },
//   decreaseQuantity(productName) {
//     если находит уменьшает на 1 если нет то нечего не делает
//   },
// }

// console.log(cart.getAtems());

// cart.add({ name: 'aplle', price: 50, });
// cart.add({ name: 'limon', price: 60 });
// cart.add({ name: 'limon', price: 60 });
// cart.add({ name: 'straubere', price: 70 });
// cart.add({ name: 'straubere', price: 70 });
// cart.add({ name: 'straubere', price: 70 });
// cart.add({ name: 'redis', price: 80 });

// console.table(cart.getAtems());

// console.log("Total: ", cart.countTotalPrice());

// cart.remove('redis');

// console.table(cart.getAtems());

//  cart.clear();

// console.log(cart.getAtems());

// console.log("Total: ", cart.countTotalPrice());

// let input = prompt("Ведите число");
// let input = "";
// let number = input;

// let total = 0;

// do {
//   input = prompt("Ведите число");
// } while (input += total)
//   console.log( total);

// let input = prompt("Число 0");

// while (input < total) {
//   console.log("counter: ", input);
//   input += total
// }

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// console.log(inputs);

// let credit = 23580;

// const pricePerDroid = 3000;

// let prais = prompt("Цена одной штуки 3000 кридитов", " ");
// let message;
// let x = prais;
// let totalPrice = x * pricePerDroid;

// console.log(`Общая стоимость заказа: ${totalPrice} количество: ${x}.`);

// if (x === null) {
//    message ="отмена пользователем!" ;
//   console.log(message);

// } else if ( totalPrice <= credit) {
//   message = `Вы купили ${x} дроидов, на счету остаток ${credit}`;

//   credit -=totalPrice;

//  console.log(message);

// } else {

// message = "Не достаточно средств"
// console.log(message);
// }

// const fa = function (message,callback){
//   console.log(message);

//   // console.log(callback);

//    callback("gfdd");
// }

// const fb = function (number) {
//   console.log("Привет!!", number);
// }
// fa("tere", fb);

// const doMath = function(a, b, callback){
//   const result = callback(a, b);

// console.log(result);
// };

// const ad = function (x, y) {
//   return x - y;
// }
// doMath(2, 3,  function (x, y) {
//   return x + y;
// });
// doMath(10, 3, ad);

// let ter = ("Margarita");

// const mer = ter.split("");
// console.log(mer);

// const ger = mer.join("-")

// console.log(ger);

// const onPosition = function (position) {
//   console.log("Место позиции", position);
// }

// const wonPosition = function (error) {
//   console.log("Ошибка позиции");

//   console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(
//   onPosition, wonPosition,
// );

// const callback = function () {
//   console.log("Вызов через 3 секунды");

// }

// console.log("Вызов пред");

// setTimeout(callback, 2000);

// console.log("Вызов после");

// const callback = function (respons) {
//   console.log("Вызваная функция");

//   console.log(respons)
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(res => res.json())
//   .then(callback);

// const btM = document.querySelector('.js-bootom');

// let total = 0;

// const berSt = function () {
//   console.log(`Клик по кнопке ` );

//  const value = Number(btM.value)

//   total += value;
// }

// btM.addEventListener('click', berSt);

// const filter = function (array,test) {
//   let filterAdd = [];

//   for (const fil of array) {
//     console.log(fil);

//     const spess = test(fil);

//     if (spess) {
//       filterAdd.push(fil);
//     }
//   }

//   return filterAdd;

// }

// const callback = function (value) {
//   return value <= 3;
// }

// console.log(filter([1, 2, 3, 4, 5, 6, 7], callback));

// console.log(filter([1, 2, 3, 4, 5, 6, 7], function (value) {
//   return value >= 3;
// }))

// const fruets = [
//   { name: "aplle", quantity: 100, isFresh: false },
//   { name: "grush", quantity: 120, isFresh: true },
//   { name: "pizza", quantity: 400, isFresh: false },
//   { name: "ogirik", quantity: 300, isFresh: true },
// ];

// const fresh = function (fruet) {
//   return fruet.quantity >= 150;
// }

// console.log(filter(fruets, fresh));

// const fA = function (param) {

//   const listGrent = "Привет первому fA";

//   const kreN = function () {
//     console.log(param);
//     console.log(listGrent);
//     console.log("Замкнули 2 проход");
//   }

//   return kreN;
// }

// const fB = fA(777);

// fB();

// console.log(fB);

// const sefBer = function (name) {
//   const sefGrengo = function (ferst) {
//     console.log(`${name} готовит ${ferst}`)
//   }
//   return sefGrengo;
// }

// const mango = sefBer("Mango");

// mango("Hellio");
// mango('Freh');

// const plato = function (name) {
//   return function (number) {
//     return Number(number.toFixed(name));
//   }
// }

// const r1 = plato(2);
// const r2 = plato(4);

// console.log(r1(3.122));
// console.log(r2(5.12222));

// const manIl = function (name, summa) {

//   let salary = summa;

//   return {
//     colum(value) {
//       salary += value;
//     },

//     retro(value) {
//       salary -= value;
//     },

//     conter() {
//       return console.log(`Получает ${name}-${salary}`);
//     },

//   };
// }
// const r1 = manIl("Mango", 5000);

// console.log(r1.conter());

// const user = {
//   fullName: "Mango",
//   showName() {
//     console.log("Hello: ", this);
//     console.log("Privet: ", this.fullName);

//     const inner = () =>{
//       console.log("inner:", this)
//     };
//     inner();
//   }
// }

// user.showName();

// const user = {

//   x: 5,
//   sowName() {
//     console.log("this how:", this);
//     console.log("Проверка: ", this.x);

//     const fb = {
//       y: 10,
//       showThis:() => {
//         console.log("Нет нет нет: ", this);
//       },
//     };
//     fb.showThis();
//   }
// }

// user.sowName();

//    const number1 = [5, 10, 15, 20, 25, 30];
// let total = 0;
// for (let i = 0; i < number1.length; i += 1) {
//   total  = total + number1[i];

//   console.log(total);
// }

// let user = number.reduce((numbers,all) => numbers + all, 0);
// console.log(user);

//  console.log(total)

// const players = [
//   { id: 'player-1', name: "Mngo", timePlayed: 10, points: 54, onlain: true },
//   { id: 'player-2', name: "Ben", timePlayed: 20, points: 64, onlain: false },
//   { id: 'player-3', name: "Org", timePlayed: 30, points: 34, onlain: true },
//   { id: 'player-4', name: "Dog", timePlayed: 40, points: 24, onlain: false },
//   { id: 'player-5', name: "Rio", timePlayed: 50, points: 14, onlain: true },
// ];

//  const play = players.filter(play => play.onlain)
//   .sort((playA, playB) => playB.timePlayed - playA.timePlayed );
//  console.table(play);
// const asD = players.some(plaer => plaer.onlain);
// console.log(asD);

//  const nameUser = 'player-3';

// const alDD = players.find(plaer => plaer.id === nameUser);
// console.log(alDD);

// const allDa = (all, plid) =>{
//   return all.find(plaer => plaer.id === plid);
// };

// console.log(allDa(players,"player-2"));
// console.log(allDa(players, "player-5"));

// const user = (calc, malck) => {
//   return calc.find(plaer => plaer.name === malck);

// }

// console.log(user(players,"Dog"));

// const userU = players.map(plaer => {
//   if (nameUser === plaer.id) {

//     console.log("Нашли его!!!");
//     return {
//       ...plaer,
//       timePlayed: plaer.timePlayed + 100,

//     }
//   }

//   return plaer;
// });

//   console.table(userU);

// const urtT = players.reduce((acc, plaer) => acc + plaer.timePlayed,0);
// console.log(urtT);

// const usP = players.some(plaer => plaer.onlain);
// console.log("usP ",usP);
// const usP = players.every(plaer => plaer.onlain);
// console.log(usP);
// const numbers = [5, 10, 15, 20, 25];

// const userName = 'player-3';

// const userNumber = players.find(player => player.id === userName);

// const userNumber = players.find(({id}) => id === userName);

// console.table(userNumber)

// const getAdd =(allplay, greId)=> {
//   return allplay.find(playar => playar.id === greId);
// }

// console.log(getAdd(players,'player-4'));

// const onlainee = players.filter(plaer => !plaer.onlain);
//   if (plaer.onlain === true) {
//     return plaer;
//   }
// });

// console.table(onlainee);

// const user = players.filter(plaer => plaer.timePlayed > 30);
// console.table(user);

// const usserList = players.map((plaer) => {
//   // console.log(plaer);

//   return plaer.onlain
// });

// const userId = players.map(plaer => plaer.id);

// console.log(userId);

// const playList = players.map(function (play) {
//   return {
//     ...play,
//     timePlayed: play.timePlayed + play.timePlayed * 0.1,
//     points: play.points + 10,
//   };
// });

//  console.table(playList);

// const userTop = "player-4";

// const uperSuper = players.map(function (player) {

//   if (player.id === userTop) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed  + 50,
//     };
//   }
//   return player;
// });

// console.table(uperSuper);

// const numbers = [5, 7, 8, 9, 3, 4];

// numbers.forEach(function (number) {

//   console.log(number);

//   console.log(this);
// },

//   { a: 10, b: 20 }
// );

// const numbers = [5, 10, 15, 20, 25];

// const list = numbers.map(number => {

//   console.log(number);

//   return number * 3;
// }
// );

// console.log(list);

// const user = {
//   name: "fer",
//   b: {
//     c: 10,
//     y: 20
//   },
// };

// console.log(user);

// const name = {
//   ...user,
// };

// console.log(user);

// console.log(user.b === name.b)

// const numbers = [5, 10, 15, 20, 25];

// const filter = numbers.filter(number => {
//   console.log(number);

//    return number < 15;
// });

// console.log(filter);

// const numbers = [5, 10, 15, 20, 25];

// const frinumber = numbers.reduce((acc, number) => acc + number, 0);
// console.log(frinumber);

// const user = {
//   mango: 100,
//   Jori: 150,
//   Maks: 777,
// };

// const total = Object.values(user).reduce((acc, value) => acc + value ,0);

// console.log("Всего: ",total);

// const cart = [
//   { label: "Apple", price: 100, quantity: 2 },
//   { label: "Banan", price: 200, quantity: 3 },
//   { label: "Duni", price: 150, quantity: 4 },
// ];

// const korzina = cart.reduce((total, {price,quantity}) =>
//    total + carts.price * carts.quantity,0);
//   total + price * quantity,0);

// console.log(korzina);

// const munus =function(a, b){
//   return a - b;
// }

// const plus = function (a, b){
//   return a + b;
// };

// console.log(plus(10, 20));
// console.log(munus(30, 20));

// const umn = (a, b) => a *b;

// console.log(umn(2, 2));

// const salary = {
//   mal: 100,
//   alli: 50,
//   gari: 150,
// };

// const user = Object.values(salary).reduce((total,all)=>total + all,0);

// console.log(user);

// const likes = [
//   { id: '000', likes: 5, tags: ['js', 'node.js'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 15, tags: ['html','js','node.js'] },
//   { id: '003', likes: 7, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'node.js','react'] },
// ];

// const tag = likes.flatMap(t => t.tags);
// console.log(tag);
// const userTaim = [...likes].sort((play, taim) => {
//   return taim.likes - play.likes;
// });
// const userTaim = [...likes].sort((play, taim) => taim.likes - play.likes);
// console.table(userTaim);

// Перебор и запись масива количества штук повторений
// const userTag = likes.reduce((tade, tweet) => {
//  tade.push(...tweet.tags);

// return tade;
//   return [...tade, ...tweet.tags];
// }, []);

//  console.log(userTag);

// const userName = userTag.reduce((acc, tag) => ({
//   ...acc,
//   [tag]: acc[tag] ? acc[tag] += 1 : 1,
// }), {},
// );

// const userName = userTag.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] +1 : 1,
//   }
// }, {});

// console.log(userName);
// if (acc[tag]) {
//   acc[tag] += 1;

//   return acc;
// }

// acc[tag] = 1;

// return acc;

// if (acc[tag]) {
//   return {
//     ...acc,
//     [tag]: acc[tag] + 1
//   };
// }

// return {
//   ...acc,
//   [tag]: 1,
// };

// return {
//   ...acc,
//   [tag]: acc[tag] ? acc[tag] += 1 : 1,
// }
// }, {});

// console.log(userName);

//  const number = [1, 9, [5, 7], [3, 4, [2], 6]];

// number.sort((jas, next) => {
//   return next - jas
// });

// const userNumber = [...number].sort((a, b)=> b - a);
// console.log(userNumber);

// console.log(number.flat(2));

// const number = [2, 4, 6, 7];

// const total = number.filter(num => num > 2).map(num => num * 2).sort((a, b) => b - a);

// console.log(total);
// обьекты только уникальные тоеть не повторяющие
// console.log(_.union([1, 2, 3], [3, 4, 5]));

// const number1 = [2, 8, [2, 4], 5, [9], [3, [4], 1]];

// console.log(number1.flat(2));

// const sowTeg = function () {
//   console.log("this: ", this);
//   console.log("this.tag: ", this.tag);
// }

// const user = {
//   tag: "Mango",
// };

// user.sowTeg = sowTeg;
// console.log("user: ", user);

//   user.sowTeg();

// const counter = {
//   value: 0,

//   increment() {
//     console.log(this);
//     this.value += 1;
//   },

//   dicrement(){
//     console.log(this);
//   this.value -= 1
// }

// }

// const discripBt = document.querySelector('.js-duscript');
// const uvelichBt = document.querySelector('.js-uvelich');
// const chetthBt = document.querySelector('.js-chethik');

// discripBt.addEventListener('click', function () {
//   counter.dicrement();
//   console.log(counter);
//   chetthBt.textContent = counter.value;
// });

// uvelichBt.addEventListener('click', function () {
//   counter.increment();

//    console.log(counter);
//   chetthBt.textContent = counter.value;
// })

// const Car = function({ name, model, prais } = {}){

//   this.name = name;
//     this.model = model;
//   this.prais = prais;

// this.getPrais = function (value) {
//   this.prais = value;
// };
// }

// Car.prototype.saHi = function (newModel) {
//    console.log( this);
//    console.log(":)");
//    this.model = newModel;
// }

// Car.prototype.priSe = function (newPrais) {

//   this.prais = newPrais;
// }

// const cars1 = new Car({
//   name: "x-6",
//   model: "Bmv",
//   prais: 65000,
// })

// console.log(cars1);

// cars1.saHi();

// cars1.priSe(10000);

// const User = function ({ email, password }) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.getPassword= function(newMail){
//   this.password = newMail;
// };

// const mango = new User({ email: "borenkov@gmail.com", password: "111111111" });

// mango.getPassword("7777");

// console.log(mango);

// const Otel = function ({ brend, name, zvezda } = {}) {
//   this.brend = brend;
//   this.name = name;
//   this.zvezda = zvezda;
// };

// Otel.prototype.getSer = function (newZwezda) {
//   this.zvezda = newZwezda;
// }

// const otel1 = new Otel ({
//   brend: "Zuri",
//   name: "Vostock",
//   zvezda: 5,
// });

// const otel2 = new Otel  ({ brend: "trin", name: "gren", zvezda: 3 });

//  otel1.getSer("7");
// console.log(otel1);

// otel2.getSer("7")

// console.log(otel2);

// Otel.getMet = function (obj) {
//   console.log("wellco:", obj);
//   console.log("Имя: ", obj.name);
//   console.log("Звезд: ", obj.zvezda);

// }

// Otel.getMet(otel2);

// class Car {

//   static description = "Класс описывающий автомобиль";

//   static logGe = function (obj) {
//     console.log("wellcom ", obj);
//   }

//   constructor({ brend, model, praice } = {}){
//     this.brend = brend;
//     this._modul = model;
//     this._praice = praice;

//   };

//   get modul() {
//     return this._modul;
//   }

//   set modul(newModul) {
//     return this._modul = newModul;
//   }

// };

// const auto = new Car({
//   brend: "Audi",
//   model: "Q3",
//   praice: 65000,
// });
// console.dir(Car);
//  console.log(auto.modul);

//  auto.modul = "Q4";

//  console.log(auto.modul);

// Car.logGe(auto);

// const number = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

// console.log(_.union([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]));

// class Hero {
//   constructor({ name = "hero", xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   getXet(amout) {
//     console.log(`${this.name} получает ${amout} жизни`);
//     this.xp += amout
//   }
// }

// class Water extends Hero {
//   constructor({ateck, ...rest} ={}) {
//     super(rest);

//     this.ateck = ateck;
//   }

//   getAteck() {
//     console.log(`${this.name} атакует`);
//   }
// }

// class Gnom extends Water {
//   constructor({ dolbi, ...restTre } = {}) {
//     super(restTre);

//     this.dolbi = dolbi;
//   }

//   getRec() {
//     console.log(`${this.name} херячит ${this.dolbi}`);
//   }
// }

// const mage = new Water({ name: "Tor", xp: 1000, ateck:"777" });

// const gnom = new Gnom({ name: "Raf", xp: 1000, ateck: "Супер", dolbi: "Урон 2-- йной" });
//  console.log(mage);

//  console.log(gnom);

//  gnom.getAteck();

// mage.getXet(1000);

// const obj = {
//   _a: 100,
//   get a() {
//     return this._a
//   },
//   set a(newSet) {
//     this._a = newSet
//   }
// }

// console.log(obj.a);

// obj.a =12;
// console.log(obj.a);

// class Tank extends Gnom{
//   constructor({vustrel, ...areTank} ={})  {
//     super(areTank);

//     this.vustrel = vustrel;
//   }

//   getUron() {
//     console.log(`${this.name} нанесеный урон  ${this.vustrel}`)
//   }
// };

// const tank = new Tank({ name: "Zver", xp: 2000,ateck:"2-x",dolbi:"4-x", vustrel: "Максимальный урон" });

// console.log(tank);

// tank.getAteck();

// const user = {
//   Tany: 2,
//   Geri: 4,
//   Meri: 7,
//   Maks: 77,
// }

// const entris = Object.entries(user);

// for (const entri of entris) {
//   const name = entri[0];
//   const reting = entri[1];
//   console.log(name, reting);
// }

// for (const [name,reting] of entris) {
//    console.log(name,reting)

//   }

// const user = {
//   gorod: "Ukraina",
//   emages: "smaill",
//   avotar: "htpp//kskdkdk.com",
//   status: {
//     locatio: "Zero",
//     grand: 12,
//     tur: 55,
//   }
// };

// const { gorog, emages, avotar, ...status } = user;

// const userName = Object.entries(user);
// for (const [name,rezult] of userName) {
//   console.log(name, rezult);
// }

// console.log(user);

// const car1 = {
//   trin: false,
//   goren: 'we',
//   hopi: false,
// };

// const car2 = {
//   trin: true,
//   goren: [],
//   hopi: true,
// }

// const user = Object.assign({}, car1, car2);

// const car3 = {
//   ...car1,
//   ...car2,
// }

// console.log(user);
// console.log(car3);

// const number = [1,2,3,4,5,6,7];

// const number2 = [8, 9, 10, 11, 12];

// console.log(...number, ...number2)

// const number = 28.67;

// console.log(Math.round(number));
// console.log(Math.ceil(number));
// console.log(Math.floor(number));
// console.log(~~number);

// let weight = '88,3';
// let height = '1.75';

// const bmi =Number.parseFloat(weight.replace(',','.')) / Math.pow(Number.parseFloat(height),2);

// console.log(bmi.toFixed(1));

// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }

// for (let i = 0; i < 10; i += 1){

//   if (i === 8) {
//     console.log(i);
//     break;
//   }
// }

// const userName =(message)=>{

//   const mest = ['span', 'taxi', 'grin'];

//   const str = message.toLowerCase();

//   let hasPan = false;

//   for (let i = 0; i < mest.length; i += 1){
//     const mesta = mest[i];

//     if (str.includes(mesta)) {
//       hasPan = true;
//       break
//     }
//   }

//   return hasPan
// }

// console.log(userName("kdjdj span kfkdl"));
// console.log(userName("kdjdj yuuu kfkdl"));

// const nameUser = prompt("Ведите имя",'');

// console.log("Name: ", nameUser || 'grim');

// const number = [1, 2, 3, 4, 5, 6, 7, 7, 6];

// console.log(Array.isArray(number));

// const a = 100;
// const b = 180;

// let result;

// if (a > 100 && b > 100) {

//  result= Math.max(a, b);

// } else {
//    result = b + 1;
// }

// console.log(result);

// let link = "http//hdjdjdj.ou";

// if (!link.endsWith('/')) {
//   link += "/";
// }
// for (let i = 0; i < link.length -1; i += 1){
//   if (!link.endsWith('/')) {
//       link += "/";
//     }
// }
// if (link[link.length - 1] !== "/") {
//   link += "/"
// }

// console.log(link);

// const hours = 18;

// let message;

// if (hours < 17) {
//   message = "Pending";
// } else if (hours >= 17 && hours <= 24) {
//   message = "Expires";
// } else if(hours >24) {
//   message = "Overdus";
// }

// console.log(message);

// const max = 100;

// const min = 20;

// for (let i = min; i <= max; i += 1){
//   if (i % 10 === 0) {
//     console.log(i);
//   }
// }

// const fruts = ["apple", "gret", "baban", "duny"];

// // for (let i = 0; i < fruts.length; i += 1){
// //   console.log(`${i + 1}: ${fruts[i]}`);
// // }

// fruts.forEach((value, indx, ary) => {
//   console.log(`${indx + 1} : ${value}`);
// });

// const userName = "Jeri,Maks,Hrig,Ure";

// const tel = '09455555,09778888,7777777,88888888';

// const str1 = userName.split(',');
// const str2 = tel.split(',');

// console.log(str1);
// console.log(str2);

// for (let i = 0; i < str1.length; i += 1){
//   console.log(`${str1[i]} - ${str2[i]}`);
// }

// Реверс Обратным порядком написание слов

// const string = 'Woter to go Meri';

// const str = string.split(' ');

// str.pop();
// str.shift();
// const result = str.join(' ')
// console.log(`"${result}"`);

// const string = 'Woter to go Meri';

// // const result = string.split('');

// /result.reverse();

// const str = result.join('');
// const rever = string.split('').reverse().join('');

// console.log(rever);

// const izuk = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// // izuk.sort();

// for (let i = 0; i < izuk.length; i += 1){
//   for (let j = i +1; j < izuk.length ; j += 1){

//     if (izuk[i][0] > izuk[j][0]) {
//       const tem = izuk[i];
//       izuk[i] = izuk[j];
//       izuk[j] = tem;
//     }
//   }
// }

//  console.log(izuk);

// const number = [2, 14, 66, 23, 44, 77];

// let min = number[0];
// let max = number[0];

// for (const numbers of number) {
//   if (numbers < min) {
//     min = numbers
//   } else if (numbers > max) {
//     max = numbers
//  }

// }
//  console.log(min);
// console.log(max);

// const user = [
//   { name: "Jori", phone: 89077777 },
//   { name: "Meri", phone: 89090987 },
// ];

// for (const users of user) {
//   console.log(`${users.name} - ${users.phone}`);
// }

// let a = 10;
// let b = 1;

// function sum(a,b) {
//   return a + b;
// }

// // const resul = sum(1, 2);

// console.log("result:", sum(10,10));

// const but = (argyment) => {
//   const [a, b] = argyment.split(" ");

//   return a * b;
// }

// console.log(but("8 11"));

// function bur(argum) {
//   argum.forEach((value,indx) => {
//     console.log(`${indx +1} - ${value}`)
//   });
// }

// bur(["Mango", "Reno", "Terno", "Fero"] );
// bur(["Orang","banan","Duny","Apple"]);

// const aray= function(numbers){
//   let max = numbers[0];

//   for (const countri of numbers) {
//     if (countri > max) {
//       max = countri
//     }
//   }

//   return max;
// }

// const aray = (number) => Math.min(...number);

// console.log(aray([2, 4, 7, 9, 12,]));
// console.log(aray([42, 44, 77, 99, 712,]));

// function numVer() {
//   const numbers = Array.from(arguments)
//   let sum = 0;

//   for (const count of numbers) {
//     sum += count
//   }
//   return sum / numbers.length;
// }

// console.log(numVer(1, 2, 3, 4));
// console.log(numVer(14, 8, 2));
// console.log(numVer(27, 43, 2, 8, 36));

// const curses = ['CSS', "Java", "JS", "Rubi", "HTML","Express", "Reakt"];

// function addCurses(curse) {

//      if (curses.includes(curse)) {
//       console.log("У вас есть такой курсс");
//       return;

//    }
//    curses.push(curse)
// }

// function remoVeCurse(curse) {
//    const indx = curses.indexOf(curse);

//   if (indx === -1) {
//     console.log("Курс стаким именем не найден");
//     return;
//   }

//   curses.splice(indx, 1);
// }

// function updateCourse(oldCurse, newCurse){
//   const indx = curses.indexOf(oldCurse);

//   if (indx === -1) {
//     console.log("Курс стаким именем не найден!");
//     return;
//   }

//   curses.splice(indx, 1, newCurse);
// }

// console.log(curses);
// addCurses('CAAS');
// console.log(curses);

// remoVeCurse("Reakt");
// console.log(curses);
// remoVeCurse("Vue");

// updateCourse("Express", "NestJs");
// console.log(curses);
//  updateCourse("Express", "NestJs");

// let b = 23.78;

// console.log(~~b);

// const user = {
//   name: 'Grte',
//   age: 12,
//   feri: function () {
//     console.log(this);
//   },
// };
// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key} - ${user[key]}`);
// }
// console.log(keys);

// const users = {
//   Johan: 100,
//   Gren: 160,
//   Frek: 120,
// };

// let sum = 0;

// const user = Object.values(users);
// for (const value of user) {
//   sum += value;
// }

// console.log('sum: ', sum);

// const surse = [
//   { name: 'Сапфир', prise: 1000, quntete: 7 },
//   { name: 'Изумруд', prise: 2000, quntete: 7 },
//   { name: 'Камень', prise: 100, quntete: 2 },
//   { name: 'Керпичь', prise: 200, quntete: 4 },
//   { name: 'Гравий', prise: 300, quntete: 5 },
// ];

// function logPraise(surse, sursName) {
//   for (const surs of surse) {
//     if (surs.name === sursName) {
//       return surs.prise * surs.quntete;
//     }
//   }

//   return 0;
// }

// console.log(logPraise(surse, 'Гравий'));
// console.log(logPraise(surse, 'Сапфир'));

// const Transition = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const acaunt = {
//   balance: 0,

//   transitions: [],

//   createTransition(amout, type) {
//     return {
//       id: this.transitions.length,
//       amout,
//       type,
//     };
//   },

//   deposit(amout) {
//     this.balance += amout;

//     const newTransition = this.createTransition(amout, Transition.DEPOSIT);
//     this.transitions.unshift(newTransition);
//   },

//   withdraw(amout) {
//     this.balance -= amout;
//     if (this.balance < amout) {
//       console.log('Не достаточно средств');
//       return;
//     }

//     this.transitions.unshift(this.createTransition(amout, Transition.WITHDRAW));
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransitionDetalis(id) {
//     for (const transit of this.transitions) {
//       if (transit.id === id) {
//         return transit;
//       }
//     }
//   },

//   getTransitionsTotal(type) {
//     let sum = 0;

//     for (const transit of this.transitions) {
//       if (transit.type === type) {
//         sum += transit.amout;
//       }
//     }

//     return sum;
//   },
// };

// console.log(acaunt.getBalance());
// acaunt.deposit(100);
// acaunt.deposit(200);
// acaunt.deposit(300);

// console.log(acaunt.getBalance());
// console.log(acaunt.transitions);

// acaunt.withdraw(200);
// console.log(acaunt.getBalance());
// acaunt.withdraw(200);
// console.log(acaunt.getBalance());
// acaunt.withdraw(200);
// console.log(acaunt.getBalance());

// console.log(acaunt.transitions);

// console.log(acaunt.getTransitionDetalis(4));

// console.log(acaunt.getTransitionsTotal(Transition.DEPOSIT));
// console.log(acaunt.getTransitionsTotal(Transition.WITHDRAW));

// function fn({ name = 'fre', age: frik = 0 } = {}) {
//   console.log(`my name is ${name} mne ${frik}`);
// }

// fn({ name: 'Gre', age: 23 });

// fn({});

// let a = 2;

// let b = 5;
// console.log(a, b);
// let tem = a;

// a = b;
// b = tem;
// console.log(...b, ...a);

// let x = 5;
// let y = 2;
// [x, y] = [x, y];

// console.log(x, y);
// [y, x] = [x, y];

// console.log(x, y);

// const number = [1, 2, 4, 5, 6, 7, 8, 8];

// const user = {
//   keu: 3,
//   geri: 6,
//   Meri: 9,
//   Feru: 4,
// };

// const entri = Object.entries(user);

// for (const [name, revi] of entri) {
//   console.log(name, revi);
// }

// function fa(message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback();
// }

// function fb() {
//   console.log('Hi');
// }

// fa('JKH', fb);
// fb(2, 3, add);

// const doMo = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add1 = function (x, y) {
//   return x + y;
// };

// const fb = function (x, y) {
//   return x - y;
// };

// doMo(2, 3, add1);
// doMo(10, 3, fb);

// const callback = function () {
//   console.log('Через 3 секунды');
// };

// console.log('Hi');

// setTimeout(callback, 3000);

// console.log('welcom 2');

// const callback = function () {
//   console.log('7777');
// };

// setTimeout(callback, 3000);

// console.log('Wellcom');

// const filter = function (add, test) {
//   const allMas = [];

//   for (const el of add) {
//     const result = test(el);

//     if (result) {
//       allMas.push(el);
//     }
//   }

//   return allMas;
// };

// const r1 = filter([1, 2, 3, 4, 5], function (value) {
//   return value <= 3;
// });

// console.log(r1);

// const fruit = [
//   { name: 'Dyni', quntiti: 100, isFresh: true },
//   { name: 'Banan', quntiti: 120, isFresh: false },
//   { name: 'Apple', quntiti: 150, isFresh: false },
// ];

// const r3 = filter(fruit, function (frut) {
//   return frut.isFresh === true;
// });
// console.log(r3);

// const makHeff = function (name) {
//   const add = function (bludo) {
//     console.log(`${name} готовит ${bludo}`);
//   };

//   return add;
// };

// const mango = makHeff('Maks');

// mango('код');

// const round = function (plese) {
//   return function (number) {
//     return Number(number.toFixed(plese));
//   };
// };

// const r1 = round(2);
// const r2 = round(3);

// console.log(r1(3.1223));
// console.log(r2(3.1223));
// const b = 3.9222;

// console.log(~~b);

// const zarplata = function (emploeName, baseSalare = 0) {
//   let salary = baseSalare;

//   return {
//     reset(amout) {
//       if (amout > 1000) {
//         return 'Ты не охренел!!!';
//       }
//       salary += amout;
//     },
//     lower(amout) {
//       salary -= amout;
//     },

//     curent() {
//       return `Текущая зарплата ${emploeName} - ${salary}`;
//     },
//   };
// };

// const mango = zarplata('Mango', 7000);

// console.log(mango.curent());

// console.log(mango.reset(1000888));
// console.log(mango.curent());

// const result = function (userName, total) {
//   const salary = total;

//   return {
//     plus(amout) {
//       salary += amout;
//     },
//     munus(amout) {
//       salary -= amout;
//     },
//     curent() {
//       return `Зарплата ${userName} - ${salary}`;
//     },
//   };
// };

// const mango = result('Mango', 5000);

// console.log(mango.curent());

// const callback = () => console.log('Вызов через 3 секунды');

// console.log('Hi');

// setTimeout(callback, 3000);
// console.log('wellcom');

// const user = {
//   name: 'Mango',
//   souHi() {
//     console.log('this: ', this);
//     console.log('userName: ', this.name);

//     const iner = () => {
//       console.log('this', this);
//     };

//     iner();
//   },
// };

// user.souHi();

// function Countri(name, from = 1, step = 1) {
//   let i = from;

//   return function () {
//     console.log(name, i);
//     i += step;
//   };
// }

// const mango = Countri('Jen', 10, 3);

// mango();
// mango();

// function User(pName, pAge) {
//   this.name = pName;
//   this.age = pAge;
//   this.displayInfo = function () {
//     document.write('Имя: ' + this.name + '; возраст: ' + this.age);
//   };
// }
// var tom = new User('Том', 26);
// tom.age = 34;
// console.log(tom.name + ': ' + tom.age);

const user = [
  { id: "000", likes: 4, tags: ["js", "nodejs"] },
  { id: "001", likes: 7, tags: ["js", "nodejs", "html"] },
  { id: "002", likes: 10, tags: ["js", "nodejs", "css", "ssas"] },
  { id: "003", likes: 17, tags: ["js", "nodejs", "reakt"] },
  { id: "004", likes: 2, tags: ["js", "nodejs", "noda", "anguler"] },
];

// const redus = (acc, { tags }) => [...acc, ...tags];

// const somares = (acc, item) => ({
//   ...acc,
//   [item]: acc[item] ? acc[item] + 1 : 1,
// });

// const add = user.reduce(redus, []).reduce(somares, {});

// console.log(add);

// const sum = function (a, b) {
//   console.log(a + b);
// };

// sum(5, 3);

// const str = 'Hello World Js super';

// const add = str
//   .split(' ')
//   .map((word) => word.split('').reverse().join(''))
//   .join(' ');
// console.log(add);

// const addRevers = (text) =>
//   text
//     .split(' ')
//     .map((word) => word.split('').reverse().join(''))
//     .join(' ');

// console.log(addRevers(str));

// const number = [5, 10, 15, 20, 25];

// number.forEach(
//   function (nu, index, arrey) {
//     console.log(nu);
//     console.log(this);
//   },
//   { a: 5, b: 10 }
// );

// console.log(number);

// const add = number.map((numbers) => {
//   console.log(numbers);

//   return numbers * 2;
// });
// console.log(number);
// console.log(add);

// const players = [
//   { id: 'player-1', name: 'Mngo', timePlayed: 10, points: 54, onLain: true },
//   { id: 'player-2', name: 'Ben', timePlayed: 20, points: 64, onLain: false },
//   { id: 'player-3', name: 'Org', timePlayed: 30, points: 34, onLain: true },
//   { id: 'player-4', name: 'Dog', timePlayed: 40, points: 24, onLain: false },
//   { id: 'player-5', name: 'Retr', timePlayed: 40, points: 21, onLain: true },
// ];

// const tegs = user
//   .flatMap((play) => play.tags)
//   .reduce(
//     (all, add) => ({
//       ...all,
//       [add]: all[add] ? all[add] + 1 : 1,
//     }),
//     {}
//   );

// console.log(tegs);
// const playY = players
//   .filter((plaer) => plaer.onLain)
//   .sort((plao, plaeri) => plao.points + plaeri.points);

// console.table(playY);

// const taim = players.reduce((acc, { timePlayed }) => acc + timePlayed, 0);

// console.log(taim);
// const fer = 'Dog';

// const number = players.find((play) => play.name === fer);
// console.log(number);

// const playIt = (allPlay, allId) => {
//   return allPlay.find((play) => play.id === allId);
// };

// console.log(playIt(players, 'player-1'));
// console.log(playIt(players, 'player-4'));

// const add = players
//   .filter((play) => play.onLain)
//   .sort((playA, playB) => playA.points + playB.points);
// console.table(add);

// const add = players.map((pleer) => pleer.name + '-$');
// const a = players.map((pleer) => pleer.id);

// const b = players.map((pleer) => {
//   return {
//     ...pleer,
//     points: pleer.points * 1.1,
//   };
// });
// console.log(add);
// console.log(a);
// console.table(b);

// const gare1 = 'Dog';

// const gare = 'player-3';
// const add = players.map((plaer) => {
//   console.log(plaer.id);
//   if (gare === plaer.id) {
//     console.log('Вот мы нашли его player-3');
//   }
//   return 'Старый обьект';
// });

// console.log(add);
// console.table(add);

// const add1 = players.map((play) => {
//   console.log(play.name);
//   if (gare1 === play.name) {
//     console.log('Нашли');

//     return { ...play, name: play.name + '-$' };
//   }

//   return play;
// });
// console.log(add1);
// console.table(add1);

// const salary = {
//   Jon: 150,
//   Gnom: 100,
//   Ben: 200,
//   Hren: 300,
// };

// const user = Object.values(salary).reduce((acc, total) => acc + total, 0);

// console.log(user);

// const strin = 'Wellcome hentor true';

// const fr = (word) =>
//   word
//     .split(' ')
//     .map((text) => text.split('').reverse().join(''))
//     .join(' ');

// console.log(fr(strin));
// const grit = strin
//   .split('')
//   .reverse()
//   .join('')
//   .split(' ')
//   .reverse('')
//   .join(' ');
// console.log(grit);

// const number = [1, 6, 9, 7, 3, 4, 2];

// const user = number.filter((col) => col < 5);
// console.log(user);

// number.sort((curSe, nexTe) => nexTe - curSe);
// console.log(number);

// const fa = [...number].sort((a, b) => b - a);

// fa.sort((curSe, nexTe) => nexTe - curSe);

// console.log(fa);

// const obj = {
//   name: 'Jon',

//   soHi() {
//     console.log(this);
//   },
// };

// obj.soHi();
// const fn = obj.soHi.bind(obj);
// const fn = obj.soHi;

// fn();

// function soyHi() {
//   console.log(this);
// }

// const obj1 = { name: 'Joni' };

// const obj2 = { name: 'Geri' };

// const fa = soyHi.bind(obj1);
// const fb = soyHi.bind(obj2);

// fa();
// fb();

// function sayHi(a, b) {
//   console.log(this, a + b);
// }

// function byAnd(contex, callback) {
//   return function () {
//     callback.call(contex);
//   };
// }

// const fa = byAnd(obj2, sayHi);
// fa(1, 1);

// function sayHi(a, b) {
//   console.log(this, a + b);
// }

// function myBind(contex, callback) {
//   return function () {
//     // callback.call(contex);
//     callback.apply(contex, arguments);
//   };
// }

// const fa = myBind(obj1, sayHi);

// fa(1, 1);
// setTimeout(fa, 2000);

// const saHi = function () {
//   console.log(this);
// };

// const obj1 = { name: 'Jon' };
// const obj2 = { name: 'Geri' };

// saHi.call(obj1);

// setTimeout(saHi.bind(obj2), 2000);

// const colculator = {
//   red(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   plus() {
//     return this.a + this.b;
//   },

//   umnog() {
//     return this.a * this.b;
//   },
// };
// colculator.red(20, 2);
// console.log(colculator.plus());
// console.log(colculator.umnog());
// console.log(colculator);

// const arey = [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5];

// const newArey = Array.from(new Set(arey));
// const tru = arey.filter(
//   (value, index, cente) => cente.indexOf(value) === index
// );

// console.log(newArey);
// console.log(tru);

// class Car {
//   #model;
//   #speed;
//   constructor(model, speed = 0) {
//     this.#model = model;
//     this.#speed = speed;
//   }

//   get model() {
//     return this.#model;
//   }

//   get speed() {
//     return this.#speed;
//   }

//   set speed(value) {
//     if (value < 120) {
//       this.#speed = value;
//     } else {
//       this.#speed = 120;
//     }
//   }
// }

// const ziha = new Car('2101');
// ziha.speed = 90;
// // ziha.#model = 'BMV';
// console.group('Tratat');
// console.log(ziha.speed);
// console.groupEnd('Tratat-99');
// console.log(ziha.model);
// console.log(ziha.speed);

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.paswword = password;
// };

// const mango = new User({ email: 'ekjdjdj', password: '2222222' });

// console.log(mango);

// User.prototype.grenGo = function (newEmail) {
//   this.email = newEmail;
// };

// mango.grenGo('@trt@');

// console.log(mango);

// class Car {
//   static geri = 'Wellcom';

//   static france = function (objCar) {
//     console.log(objCar);
//   };
//   constructor({ name, model, price } = {}) {
//     this.name = name;
//     this._model = model;
//     this._price = price;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrise) {
//     this._price = newPrise;
//   }

//   get model() {
//     return this._model;
//   }

//   set model(newUser) {
//     this._model = newUser;
//   }
// }

// const car1 = new Car({ name: 'BMV', model: 'x-6', price: 30000 });

// Car.france(car1);
// car1.model = 'Q4';
// console.log(car1.model);
// // car1.model = 'Q4';
// console.log(car1);

// car1.price = 50000;
// console.log(car1.price);
// console.log(car1);

// class Hero {
//   constructor({ name = 'hero', xp = 0 }) {
//     this.name = name;
//     this.xp = xp;
//   }

//   getExspert(amout) {
//     console.log(`${this.name} получает ${amout}`);

//     this.xp += amout;
//   }
// }

// class Mag extends Hero {
//   constructor({ wraper, ...rest }) {
//     super(rest);

//     this.wraper = wraper;
//   }
// }

// const mango = new Mag({ name: 'Gri', xp: 1000, wraper: 'super' });

// console.log(mango);
// console.log(Object.getPrototypeOf(mango) === Mag.prototype);
// console.log(Mag.prototype.__proto__ === Hero.prototype);
// console.log(Hero.prototype.__proto__ === Object.prototype);

// const tegis = ['tode-1', 'tode-2', 'tode-3'];

// const muDegi = tegis.map((el) => `<div>${el}</div>`).join(' ');

// for (const el of tegis) {
//   muDegi += `<div>${el}</div>`;
// }

// console.log(muDegi);

// for (var i = 1; i < 5; i += 1) {
//   (function fa(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 100);
//   })(i); //  Вызов функции здесь и сейчас IIFE
//
// }

// for (var i = 1; i < 5; i += 1) {
//   (function fa(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 1000);
//   })(i);
// }

// function factarial(x) {
//   return x === 1 ? 1 : x * factarial(x - 1);
// }

// console.log(factarial(1));
// console.log(factarial(2));
// console.log(factarial(3));
// console.log(factarial(4));
// console.log(factarial(5));
// console.log(factarial(6));

// const arry1 = [{ name: 'Ceri' }, { name: 'Meri' }];

// const arry2 = _.cloneDeep(arry1);

// arry2[0].name = 'Gry';

// console.log(arry1);
// console.log(arry2);

// const btn = document.querySelector('.btn-id');

// btn.addEventListener('click', () => {
//   const navEl = document.querySelector('.fari__grup');
//   console.log(navEl);

//   const navRev = document.querySelectorAll('.fari__grup .feri');

//   console.log(navRev);
// });

// const navEl = document.querySelector('.fari__grup');
// console.log(navEl);

// const navRev = document.querySelectorAll('.fari__grup .feri');

// console.log(navRev);

// const textLorem = document.querySelector('.text__lorem');

// textLorem.textContent = 'Hello';

// console.log('textLorem', textLorem.textContent);

// const btmAtribut = document.querySelectorAll('.js-action button');

// console.log(btmAtribut[0].dataset);

// const btnList = document.querySelector('.fari__grup');
// btnList.classList.add('Hello', 'Gry');
// // btnList.classList.remove('Gry', 'Hello');
// console.log(btnList);

// const tegsEl = document.createElement('h1');
// tegsEl.classList.add('set-get');
// tegsEl.textContent = 'hello';
// // document.body.appendChild(tegsEl);
// console.log(document.body);
// console.log(tegsEl);

// const imagEl = document.createElement('img');

// imagEl.src =
//   'https://img1.akspic.ru/previews/3/1/1/9/6/169113/169113-oblako-priroda-art-risovanie-zakat-x750.jpg';
// imagEl.alt = 'New img';
// imagEl.height = 520;
// imagEl.width = 640;

// document.body.appendChild(imagEl);

// console.log(imagEl);

// const colorObj = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'tandigo', color: '#3F51B5' },
// ];

// const colareEl = document.querySelector('.js-bottom1');

// const elemEl = colorObj.map((option) => {
//   const buttonEl = document.createElement('button');

//   buttonEl.type = 'button';
//   buttonEl.classList.add('gren-my');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });
// console.log(elemEl);

// colareEl.append(...elemEl);
// heig;

// const productEl = document.querySelector('.js-content');

// const makseCard = ({ name, descript, price }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const productHel = document.createElement('h2');
//   productHel.classList.add('product__name');
//   productHel.textContent = `Название ${name}`;

//   const productParEl = document.createElement('p');
//   productParEl.classList.add('product__descr');
//   productParEl.textContent = `Описание ${descript}`;

//   const cenaEl = document.createElement('p');
//   cenaEl.classList.add('product__price');
//   cenaEl.textContent = `Цена: ${price}`;

//   productEl.append(productHel, productParEl, productParEl, cenaEl);
// };

// const bendEl = product.map(makseCard);

// console.log(productEl);

// productEl.append(...bendEl);

// const tegEl = document.querySelector('.feri');

// tegEl.innerHTML = '<a  href = "#" > Hello</a>';

// console.log(tegEl);

// const refs = {
//   text: document.getElementById('text'),
//   checkbox: document.getElementById('checkbox'),
// };

// refs.checkbox.addEventListener('click', (e) => {
//   const isClick = e.target.checked;

//   if (isClick) {
//     refs.text.classList.add('red');
//     refs.text.classList.remove('green');
//   } else {
//     refs.text.classList.add('green');
//     refs.text.classList.remove('red');
//   }
// });

// const userName = ['Boby', 'Snobi', 'Gnobi'];

// const ul = document.createElement('ul');

// const li = userName.map((name) => `<li>${name}</li>`);

// ul.insertAdjacentHTML('beforeend', li.join(''));

// document.body.appendChild(ul);

// const user = docre;
// for (var i = 1; i < 5; i += 1) {
//   (function fa(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 100);
//   })(i);
// }
// const cotegEl = document.querySelector('#categories');

// const tagEl = cotegEl.querySelectorAll('.item');

// console.log('Number of categories:', tagEl.length);

// const textEl = '/about';

// const razdelEl = document.querySelector(`.naw__link[href ="${textEl}"]`);

// console.log(razdelEl);

// const textEl = 'Products';

// const raEl = document.querySelector(`.wer `);

// console.log(raEl);
// // if (razdelEl.h2 === `${textEl}`) {
// //   console.log(h2);
// // } else {
// // }
// // razdelEl.h2;

// const liEl = document.querySelectorAll('li.item');
// // liEl.firstElementChild;
// console.log(razdelEl);
// console.log(liEl);
// const items = document.querySelectorAll('.item');
// Array.prototype.forEach.call(items, (element) => {
//   const title = element.querySelector('h2').innerHTML;
//   const itemsLength = element.querySelectorAll('li').length;
//   console.log(`Category: ${title}: Elements: ${itemsLength}`);
// });

// import product from './main1.js';
// console.log(product);
// const product = {
//   name: 'Серваприводы',
//   description: 'lorem prace to go plise',

//   price: 2000,
//   available: true,
//   onSale: true,
// };

// const productEL = document.createElement('article');
// productEL.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product');

// const menuEl = document.createElement('p');
// menuEl.textContent = product.description;
// menuEl.classList.add('product');

// const priseEl = document.createElement('p');
// priseEl.textContent = `Цена: ${product.price} гривень`;
// priseEl.classList.add('product__prise');

// productEL.append(nameEl, menuEl, priseEl);

// const treh1 = document.querySelector('.js-product');

// treh.appendChild(productEL);

// document.body.lastChild(productEL);

// console.log(priseEl);

// const makeProductCards = ({ name, description, price }) => {
//   const productEL = document.createElement('article');
//   productEL.classList.add('product');

//   const nameEl = document.createElement('h2');
//   nameEl.textContent = name;
//   nameEl.classList.add('product');

//   const menuEl = document.createElement('p');
//   menuEl.textContent = description;
//   menuEl.classList.add('product');

//   const priseEl = document.createElement('p');
//   priseEl.textContent = `Цена: ${price} гривень`;
//   priseEl.classList.add('product__prise');

//   productEL.append(nameEl, menuEl, priseEl);

//   return productEL;
// };

// console.log(makeProductCards(product[1]));

// const elements = product.map(makeProductCards);

// const treh = document.querySelector('.js-product');

// treh.append(...elements);

// console.log(makeProductAll);
// import transitionHistori from './main2.js';

// const makePosition = ({ id, amount, business, date, name, type, account }) => {
//   return `
//   <tr>
//   <th>${id}</th>
//   <th>${amount}</th>
//   <th>${date}</th>
//   <th>${business}</th>
//   <th>${name}</th>
//   <th>${type}</th>
//   <th>${account}</th>
// </tr>`;
// };

// console.log(transitionHistori);
// console.log(makePosition(transitionHistori[0]));
// const servesEl = document.querySelector('.js-transitein-table');
// const mapEl = transitionHistori.map(makePosition).join('');
// servesEl.insertAdjacentHTML('beforeend', mapEl);
// console.log(mapEl);

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const ingredientEl = document.createElement('li');
// ingredientEl.classList.add('item');
// ingredientEl.textContent = `${ingredients[0]}`;

// const ingreEl = document.createElement('li');
// ingreEl.classList.add('item');
// ingreEl.textContent = `${ingredients[1]}`;

// const ingredEl = document.createElement('li');
// ingredEl.classList.add('item');
// ingredEl.textContent = `${ingredients[2]}`;

// const ingdEl = document.createElement('li');
// ingdEl.classList.add('item');
// ingdEl.textContent = `${ingredients[4]}`;

// const inEl = document.createElement('li');
// inEl.classList.add('item');
// inEl.textContent = `${ingredients[5]}`;

// ingredientEl.append(ingreEl, ingredEl, ingdEl, inEl);

// console.log(ingredientEl);

// const posteEl = document.querySelector('#ingredients');

// posteEl.append(ingredientEl);

// console.log(posteEl);

// const ingridListRef = document.querySelector('#ingredients');

// const elements = ingredients.map((options) => {
//   const liRef = document.createElement('li');

//   liRef.classList.add('item');

//   liRef.textContent = options;

//   return liRef;
// });

// ingridListRef.append(...elements);

// console.log(ingredients);

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const liEl = document.createElement('li');
// // liEl.url = `${images.url}`;

// const imgEl = document.createElement('img');
// liEl.textContent = `${images.url}`;
// console.log(imgEl);

// const imgEl = ({ url, alt }) => {
//   return `
//   <li>
//   <img ${url}, ${alt}>
//   </li>`;
// };

// console.log(images);

// console.log(imgEl(images[0]));
// const serverEl = document.querySelector('.gallery');
// const mapEl = images.map(imgEl).join('');
// serverEl.insertAdjacentHTML('beforeend', mapEl);
// console.log(serverEl);
// const servesEl = document.querySelector('.js-transitein-table');
// const mapEl = transitionHistori.map(makePosition).join('');
// servesEl.insertAdjacentHTML('beforeend', mapEl);
// console.log(mapEl);
// const ulEl = document.querySelector('.gallery');

// ulEl.classList.add('gallery--current');

// const elements = images
//   .map(
//     (img) =>
//       ` <li class = "galary-item"><img src = ${img.url} alt =' ${img.alt}' width = '280'></li>`
//   )
//   .join(' ');

// ulEl.insertAdjacentHTML('afterbegin', elements);

// const btn = document.querySelector('.btn-id');

// btn.addEventListener('click', () => {
//   const navEl = document.querySelector('.fari__grup');
//   console.log(navEl);

//   const navRev = document.querySelectorAll('.fari__grup .feri');

//   console.log(navRev);
// });

// const my__bottom = {
//   sub: document.querySelector('[data-action="increment"]'),
//   add: document.querySelector('[data-action="decrement"]'),
//   span: document.querySelector('#value'),
//   wrap: document.querySelector('#counter'),
// };

// let counterValue = 0;
// const increment = () => {
//   counterValue += 1;

//   document.getElementById('value').textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;

//   document.getElementById('value').textContent = counterValue;
// };

// my__bottom.sub.addEventListener('click', increment);
// my__bottom.add.addEventListener('click', decrement);

// const elemSlu = document.querySelector('.js-inner');

// const addEl = document.querySelector('.js-inner__add');

// const remuvEl = document.querySelector('.js-inner__remuv');

// addEl.addEventListener('click', () => {
//   console.log('Hello');

//   elemSlu.addEventListener('click', onClic);
// });
// remuvEl.addEventListener('click', () => {
//   // console.log('Сняли слушателя');

//   elemSlu.removeEventListener('click', onClic);
// });

// function onClic() {
//   console.log('Клик по целевой кнопки');
// }

// const form = document.querySelector('.js-registor-form');

// form.addEventListener('submit', oneFormSubmit);

// function oneFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     console.log(name);
//     console.log(value);
//   });
// }

// const refs = {
//   input: document.querySelector('.js-input'),
//   nameLabel: document.querySelector('.js-button > span'),
//   license: document.querySelector('.js-license'),
//   btn: document.querySelector('.js-button'),
// };

// // refs.input.addEventListener('focus', focusEl);
// // refs.input.addEventListener('blur', revsFocus);
// refs.input.addEventListener('input', onInputCenge);
// refs.license.addEventListener('change', deseblEl);
// function focusEl() {
//   console.log('Получили фокус');
// }

// function revsFocus() {
//   console.log('Нет фокуса');
// }

// function onInputCenge(event) {
//   // console.log(event.currentTarget.value);
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

// function deseblEl(event) {
//   refs.btn.disabled = !event.currentTarget.checked;
// }

// const refs = {
//   outpet: document.querySelector('.js-output'),
//   clearBotton: document.querySelector('.js-clear'),
// };

// window.addEventListener('keydown', onKeypress);
// refs.clearBotton.addEventListener('click', onclearOutput);

// function onKeypress(event) {
//   refs.outpet.textContent += event.key;
// }

// function onclearOutput() {
//   refs.outpet.textContent = '';
// }

// const refs = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   clasModalBtm: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// };

// refs.openModalBtn.addEventListener('click', onClicOpen);
// refs.clasModalBtm.addEventListener('click', closedModal);
// refs.backdrop.addEventListener('click', onBeckdrob);

// function onClicOpen() {
//   window.addEventListener('keydown', onEscOpen);
//   document.body.classList.add('show-modal');
// }

// function closedModal() {
//   window.removeEventListener('keydown', onEscOpen);
//   document.body.classList.remove('show-modal');
// }

// function onBeckdrob(event) {
//   if (event.currentTarget === event.target) {
//     closedModal();
//   }
// }

// function onEscOpen(event) {
//   const COPY_ESC = 'Escape';
//   const isEscKey = event.code === COPY_ESC;
//   if (isEscKey) {
//     closedModal();
//   }
// }

// console.log(faker.phone.phoneNumber());

// const contEl = document.querySelector('.js-content');
// // let selected = null;
// contEl.addEventListener('click', onClik);

// function onClik(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   console.log(e.target);
//   e.target.classList.toggle('js-color');

// const onElenClick = document.querySelector('.js-color');
// // console.log(e.target);
// // if (onElenClick) {
// onElenClick?.classList.remove('js-color');
// // }
// const nextActiv = e.target;

// nextActiv.classList.add('js-color');
// selected = nextActiv.dataset.value;
// console.log(selected);
// }

// const day = 24;
// const month = 8;

// if (day === day || month === month) {
//   console.log('Одевает вішиванку');
// } else {
//   console.log('Одевает футболку');
// }

// let value = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31,
// ];
// let value1 = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 30,
// ];
// let totol = 0;

// for (let i = 0; i < value.length; i += 1) {
//   console.log(value[i]);

//   if (value[i] % 2 === 0) {
//     console.log('Чётные: Оденит синию футболку');

//     totol += value[i];
//   } else if (value[i] % 2 !== 0) {
//     console.log('Не четные!: Оденит жолтую футболку');

//     totol += value[i];
//   }
// }

// // value1 = value;

// if (value.length === value1 || value.Number !== value1.Number) {
//   console.log('Оденит повторно одну и тоже футболку на протяжение 2 месяцев!');
// } else {
//   console.log(
//     'Не оденит повторно одну и тоже футболку на протяжение 2 месяцев!'
//   );
// }
// console.log(value.length === value.length);

// const colors = [
//   { hex: '#E2BADE', rgb: '244,67,54' },
//   { hex: '#E2C9A0', rgb: '233,30,99' },
//   { hex: '#61E2D5', rgb: '156,39,176' },
//   { hex: '#FF78C4', rgb: '103,58,183' },
//   { hex: '#50FFAA', rgb: '63,81,181' },
//   { hex: '#87ABFF', rgb: '33,150,243' },
//   { hex: '#A7FF3C', rgb: '0,188,212' },
//   { hex: '#91FFE2', rgb: '0,150,136' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
//   { hex: '#ff9800', rgb: '255,152,0' },
//   { hex: '#795548', rgb: '121,85,72' },
//   { hex: '#ECFF1E', rgb: '96,125,139' },
// ];

// const palletConter = document.querySelector('.js-palette');
// const cardMakap = mapeColor(colors);

// palletConter.insertAdjacentHTML('beforeend', cardMakap);
// palletConter.addEventListener('click', onLeterClick);

// function mapeColor(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//     <div class="color-card">
//       <div
//       class="color-swatch"
//       data-hex ="${hex}"
//       data-rgb ="${rgb}"
//       style="background-color: ${hex}">

//       </div>
//       <div class="color-meta">
//         <p>HEX: ${hex}</p>
//         <p>RGB: ${rgb}</p>
//       </div>
//     </div>`;
//     })
//     .join('');
// }

// function onLeterClick(e) {
//   const isColorSwatch = e.target.classList.contains('color-swatch');

//   if (!isColorSwatch) {
//     return;
//   }

//   const curentActiv = document.querySelector('.color-card.is-active');

//   if (curentActiv) {
//     curentActiv.classList.remove('is-active');
//   }

//   const swathEl = e.target;

//   const parentColor = swathEl.closest('.color-card');

//   parentColor.classList.add('is-active');

//   document.body.style.backgroundColor = swathEl.dataset.hex;
// }

// const coordsOutputRef = document.querySelector('.js-coords');

// let mouseMoveCounter = 0;

// window.addEventListener('mousemove', _.throttle(onMouseMove, 500));

// function onMouseMove(e) {
//   mouseMoveCounter += 1;

//   coordsOutputRef.textContent = `
//   Кол-во вызовов onMouseMove: ${mouseMoveCounter},
//   X: ${e.clientX},
//   Y: ${e.clientY}`;
// }

// const mouseRef = document.querySelector('.js-input');

// const inputRer = document.querySelector('.js-output');

// mouseRef.addEventListener('input', _.debounce(onRef, 2000));

// function onRef(e) {
//   mouseMoveCounter += 1;

//   inputRer.textContent = `
//   Кол-во вызовов onMouseMove: ${mouseMoveCounter},
//   Значение: ${e.target.value}`;
// }

// const tehn = [
//   { label: 'HTML' },
//   { label: 'CSS' },
//   { label: 'JawaScript' },
//   { label: 'Node.js' },
//   { label: 'React' },
//   { label: 'Vue' },
//   { label: 'Next.js' },
//   { label: 'Mobx' },
//   { label: 'React Router' },
//   { label: 'GraphOl' },
//   { label: 'PostgreSQL' },
//   { label: 'MongoDB' },
// ];

// const refs = {
//   list: document.querySelector('.js-list'),
//   input: document.querySelector('#filter'),
// };

// const marckAp = onMap(tehn);
// populete(marckAp);
// // refs.list.innerHTML = marckAp;

// function onMap(items) {
//   return items.map((item) => `<li>${item.label}</li>`).join('');
// }

// refs.input.addEventListener('input', onFillter);

// function onFillter(e) {
//   const fillter = e.target.value.toLowerCase();

//   const filtrus = tehn.filter((t) => t.label.toLowerCase().includes(fillter));

//   const onFremut = onMap(filtrus);

//   // refs.list.innerHTML = onFremut;
//   populete(onFremut);
// }

// function populete(ma) {
//   refs.list.innerHTML = ma;
// }

console.log("первый вызов");

setTimeout(
  (x) => {
    console.log(x);
    console.log("В середине");
  },
  2000,
  50
);

console.log("Последний вызов");
