

/*Задание №1 */

let h = 10; let w = 20; let l = 10;
let s = 2*((h*w)+(w*l)+(h*l))
console.log(`Площадь прямоугольного параллелепипеда с высотой: ${h}; шириной: ${w} и длинной: ${l} = ${s}`);


/*Задание №2 */

let n = 76; let rn = n % 10; let ln = (n - rn) / 10;
let sum = ln + rn; 
console.log(`Значение n равно ${n}, сумма его цифр равна ${sum}`);

/*Задание №3 */

let n = 23; 
let rn = n % 10; 
let ln = (n - rn) / 10; 
ln = ln + rn;
rn = ln - rn;
ln = ln - rn;
console.log(`Левое число стало ${ln}, Правое: ${rn}`)

/*Задание №4*/

let sum; 
if (sum < 1000) { 
	console.log(`К оплате ${sum}`); 
}
else if (sum > 1000 && sum < 2000) { 
	sum -= sum / 20;
	console.log('К оплате'+sum+'с учетом 5% скидки');}
else if (sum > 2000 && sum < 3000) {
	sum -= sum / 10;
	console.log('К оплате'+sum+'с учетом 10% скидки');}

else {
	sum -= sum / 10; 
	console.log('К оплате'+sum+'с учетом 5% скидки 10% скидки + подарок');}

//как правильно выводить сообщения в обратных кавычках если это уже внитри скобок фигурных??

/*Задание №5 тут у вас опечка:  Eсли больше, присвоить переменной result - Мы перезвоним Вам в ближайшее время. Больше чего?*/

let lang, salary;

if (lang === 'javascript') {
	if (salary === 100000) {
		let result = 'Приглашаем Вас на собеседование';
	}
	else if (salary > 100000) {
		let result = 'Мы перезвоним Вам в ближайшее время.';
	}
	else {
		let result = 'У вас заниженная самооценка';
	}
}

/*Задание №6*/

const MONTH;
let season;

switch (MONTH) {
	case "декабрь";
	case "январь"
	case "февраль"
		season = "зима";
		break;
	case "март";
	case "апрель"
	case "май"
		season = "весна";
		break;
	case "июнь";
	case "июль"
	case "август"
		season = "лето";
		break;
	case "сентябрь";
	case "октябрь"
	case "ноябрь"
		season = "осень";
		break;			
}
