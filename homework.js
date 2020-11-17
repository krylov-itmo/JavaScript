console.log('Задание №1');
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
