

/*Занятие №1*/

/*let h = 10; let w = 20; let l = 10;
let s = 2*((h*w)+(w*l)+(h*l))
console.log(`Площадь прямоугольного параллелепипеда с высотой: ${h}; шириной: ${w} и длинной: ${l} = ${s}`);*/




/*let n = 76; let rn = n % 10; let ln = (n - rn) / 10;
let sum = ln + rn; 
console.log(`Значение n равно ${n}, сумма его цифр равна ${sum}`);*/


/*let n = 23; 
let rn = n % 10; 
let ln = (n - rn) / 10; 
ln = ln + rn;
rn = ln - rn;
ln = ln - rn;
console.log(`Левое число стало ${ln}, Правое: ${rn}`)*/



/*let sum; 
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
	console.log('К оплате'+sum+'с учетом 5% скидки 10% скидки + подарок');}*/

//как правильно выводить сообщения в обратных кавычках если это уже внитри скобок фигурных??

/*Задание №5 тут у вас опечка:  Eсли больше, присвоить переменной result - Мы перезвоним Вам в ближайшее время. Больше чего?*/

/*let lang, salary;

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
*/


/*const MONTH;
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
}*/

/*Занятие №3*/
console.log('Задание №1');
let a = 2;
let count = 1;
do {
	console.log(a);
	a = a * 2;
	count++;
}
while (count <= 20);

console.log('Задание №2');

let b = 90;
while (b >= 0) {
	console.log(b);
	b-=5;
}


console.log('Задание №3');

let fairy = 50;
let plates = 8;

while (fairy > 0){ 
	fairy -= 0.5;
	plates -= 1;
	console.log(`Осталось моющего средства ${fairy}`);
	if (plates === 0) {
		break;
	}
}
console.log(`Осталось тарелок ${plates}; Осталось моющего средства ${fairy}`);



console.log('Задание №4');

let my_array = [];
let cnt = 0;
while (cnt < 10) {
	my_array[cnt] = Math.random();
	console.log(`В массив  ${cnt} добавлено число ${my_array[cnt]}`)
	cnt++;
}
console.log('Случайный елемент массива: ' + my_array[Math.floor(Math.random() * 10)]);


console.log('Задание №5');

let my_array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
for (let d1 = 0; d1 < my_array1.length; d1++) {
	for (let d2 = 0; d2 < my_array1.length; d2++) {
		if ((my_array1[d1] + my_array1[d2]) === 7) {
			console.log(`Сумма элементов с индексами ${d1} ${d2} ${my_array1[d1]}+${my_array1[d2]}=7`);
			break;
		}
}
break;
}

console.log('Задание №6');
 let my_array2 = [
        [23, 56, 78, 12, -900],
        [0, 0, 67, -3, 621],
        [89, 67, 12],
        [23, 56, 78, 12, -900, 89, 33, 21]
     ]

 let sum = 0;
for (let index =0; index < my_array2.length; index++) {
	for (let index2 = 0; index2 < my_array2[index].length; index2++) {
		my_array2[index][index2] += 10;
		
		console.log(`Текущая сумма ${sum} добавлено ${my_array2[index][index2]}`)
		sum += my_array2[index][index2];
	}

}

console.log(`Сумма элементов массива ${sum}`);



console.log('Задание №7');
let user_val = +prompt("Введите число от 0 до 100");
let max = 100;
let min = 0;
let val;
while (true) {
	val = Math.floor((max-min)/2);
	if ((val+min) === user_val) {
		console.log(`Ваше число ${val+min}`);
		break;
	}
	let podskazka = prompt(`Число > или < ${val+min}`);
	if (podskazka === '>') {
		min+= Math.floor(val);
			console.log(`Текущий диапазон от ${min} до ${max}`);
			}
	else if (podskazka === '<') {
		max-= Math.floor(val);
		console.log(`Текущий диапазон от ${min} до ${max}`);
			}
	else {
		console.log(`Ваше число ${val+min}`);
			break;
			}
}	
