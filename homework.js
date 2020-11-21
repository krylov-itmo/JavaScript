

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
/*console.log('Задание №1');
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
} */
//  для массивов
// 4   .includes()   метод проверяет содержит ли массив искомый элемент, возвращает булевный метод
// 5   .revers()     разворачивает массив
// 6   .concat()	склеивает два массива в один
// 7   .indexOf / lastIndexOf   возвращает первый индекс искомого элемента, можно искать не сначала / возвращает последний индекс искомого элемента, можно так же не сначала.
//для строк
//8. indexOf / 9. lastIndexOf  
//10. slice / 11. substring  в чем отличие методов

/*console.log('Задание №1');
let from = "дом домик домой одомашненный";
let that = "дом";
let how = from.split(that).length-1;
console.log(`В строке: ${from}  - слово ${that} содержится: ${how} раз/а`);  //есть много способов, но этот показался самым красивым


console.log('Задание №2');
let checkpldrm = "a sdds A";
if (checkpldrm.toLowerCase() === checkpldrm.toLowerCase().split("").reverse().join('')) {
	console.log(`Строка ${checkpldrm} - это палиндром`);
}
else {
	console.log(`Строка ${checkpldrm} - это не палиндром`);
}

console.log('Задание №3');
let s = "tEsTsTriNG";
console.log(s.substring(0,1).toUpperCase()+s.substring(1).toLowerCase());

console.log('Задание №4');
let text = "Lorem ipsum dolor sit amet consectetur ero id ipsam";
let mostalongword = ["",0];
for (let a of text.split(' ')) {
	if (a.length > mostalongword[1]) {
		mostalongword[0] = a;
		mostalongword[1] = a.length;
	}
}
console.log(`В строке: \"${text}\" самое длиннное слово: ${mostalongword[0]} из ${mostalongword[1]} символов`);



*/


/*занятие 5-6*/
console.log("Задание №1");
function sklon(a) {
	if (a === 11 || a === 12) return a + " товаров";
	if (a % 10 === 0) return a+ " товаров";
	if (a % 10 === 1) return a + " товар";
	if (a % 10 === 2 || a % 10 === 2 || a % 10 === 3 || a % 10 === 4) return  a + " товара";
	return a + " товаров";

}
/*let inpt =  prompt("Введите число");
if ((inpt * 1) === (inpt / 1)) {
	console.log(sklon(+inpt));
}
else {
	console.log(`${inpt} это не число`);
}*/
for (let i = 1; i <=100; i++) {
	console.log(sklon(i));
}

console.log("Задание №2");

function range(start,end,step = 1) {
	let arr = [start];
	while ((start+step) < end) {
		arr.push(start+step);
		start+=step;
	}
	return arr;
}

console.log(range(1,200,5));




console.log("Задание №3");
function sumNum(a) {
	if (a < 10) return a;
	return a % 10 + sumNum(Math.floor(a / 10));
}
console.log(sumNum(134));



console.log("Задание №4");
let numsArr = [
	[3, 5, -1, 6, 0],
	[56, -9, 111, 6],
	[11, 86, -12],
];

let result = [];
for (let m = 0; m < numsArr.length; m++) {
	result[m] = numsArr[m].map(a => a + 10);
}
console.log(`Увеличенные на 10 элементы массива ${result}`);

let result2 = [];
for (let n=0; n < numsArr.length; n++) {
	result2[n] = numsArr[n].filter(b => b > 0);

} 
 console.log(`Положительные элементы массива ${result2}`);


 console.log("Задание №5");

 function spamCheck(text,...keywords) {
 	let cnt = 0;
 	for (let k of keywords) {
 		if (text.split(" ").includes(k)) {
 			cnt+=1;
 		}

 	}
 	let ratio = (text.split(" ").length / 5) * cnt;
 	return `Из ${text.split(" ").length} слов текста, спам найден в ${cnt}  = ${ratio}/5 spam ratio`;
 } 

console.log(spamCheck("ставки на спорт покер казино","слоты", "казино", "рулетка", "покер", "ставки", "таблетки", "знакомства", "выигрыш"));

console.log("Задание №6");
let more18 = x => x > 18;
let less30 = x => x < 30;
let arr = [more18,less30];


function argfunc(array_func) {
	let age = Math.floor(Math.random() * 100);
	console.log(`age = ${age}`);
	return array_func[0](age) && array_func[1](age);

}

result = argfunc(arr);
console.log(result);
