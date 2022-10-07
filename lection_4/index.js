// Модуль 2. Занятие 4. Функции

//
//
//

// function foo() {
// 	let age = 18;

// 	console.log(age);

// 	return function () {
// 		age += 2;

// 		console.log(age);
// 	};
// }

// const foo2 = foo();

// foo2();

// foo2();
// function bar() {
// 	console.log("bar");
// }

// function baz() {
// 	console.log("baz");
// }

// function foo() {
// 	console.log("foo");
// 	bar();
// 	baz();
// }

// foo();

// function counter() {
// 	let count = 0;

// 	return function () {
// 		count += 1;
// 		return count;
// 	};
// }

// const likeCounter = counter();

// console.log(likeCounter());
// console.log(likeCounter());
// console.log(likeCounter());
// console.log(likeCounter());

// const x = 7;

// let result = 1;

// for (let i = 1; i <= x; i += 1) {
// 	result *= i;
// }

// console.log(result);

// function factorial(x) {
// 	if (x === 1) return 1;

// 	return x * factorial(x - 1);
// }

// const value = factorial(7);

// =>
// const greet = function () {};
// console.log(greet);

// function foo() {
// 	console.log(Array.from(arguments));
// }

// foo(1, 2, 3, 4);

// ______________

//
// =>
// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает
// индекс массы тела человека. Для этого необходимо разделить вес в киллограммах
// на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки.
// Нецелые числа могут быть заданы в виде 24.7 или 24,7,
// то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;

// function calcBMI(weight, height) {
// 	const parsedWeight = weight.replace(",", ".");
// 	const parsedHeight = height.replace(",", ".");
// 	const result = parseFloat(parsedWeight) / parseFloat(parsedHeight) ** 2;
// 	const bmi = result.toFixed(1);

// 	return Number(bmi);
// }

// const bmi = calcBMI("88,3", "2.75");
// console.log(bmi); // 28.8

// =>
// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// const min = function (a, b) {
// 	return a > b ? b : a;
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// =>
// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления
// площади прямоугольника со сторонами, значения которых
// будут переданы в параметр dimensions в виде строки.
// Значения гарантированно разделены пробелом.

// const [first, second] = ["1", "1"];

// console.log(first, second);

// function getRectArea(dimensions = "1 1") {
// 	const [width, height] = dimensions.split(" "); // ["1", "1"]

// 	return width * height;
// }

// console.log(getRectArea("8 11"));

// =>
// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует
// цикл for, который для каждого элемента массива будет выводить
// в консоль сообщение в формате <номер элемента> -
// <значение элемента>. Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива ['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items = []) {
// 	for (let i = 0; i < items.length; i += 1) {
// 		console.log(`${i + 1} - ${items[i]}`);
// 	}
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems();
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// =>
// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones)
// которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен и
// телефонных номеров, разделенные запятыми. Порядковый номер имен
// и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names = "", phones = "", splitter = ",") {
// 	const namesArr = names.split(splitter);
// 	const phonesArr = phones.split(splitter);

// 	for (let i = 0; i < namesArr.length; i += 1) {
// 		console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// 	}
// }

// printContactsInfo(
// 	"Jacob.William.Solomon.Artemis",
// 	"3809001234567.38089001112233.380890055566377.380890055566300",
//     "."
// );

// =>
// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая
// ищет самое большое число в массиве.

// function findLargestNumber(...numbers) {
// 	let max = numbers[0];

// 	for (let i = 0; i < numbers.length; i += 1) {
// 		if (numbers[i] > max) {
// 			max = numbers[i];
// 		}
// 	}

// 	return max;
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// =>
// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное
// кол-во аргументов и возвращает их среднее значение.
// Все аругменты будут только числами.

// function calAverage() {
// 	let sum = 0;

// 	for (let i = 0; i < arguments.length; i += 1) {
// 		sum += arguments[i];
// 	}

// 	return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// =>
// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение
// minutes (количество минут) в строку в формате часов и минут HH:MM.

// function formatTime(totalMinutes) {
// 	const days = Math.floor(totalMinutes / 1440);

// 	let totalMinutesWithoutDays = totalMinutes % 1440;
// 	const hours = Math.floor(totalMinutesWithoutDays / 60);
// 	const minutes = totalMinutesWithoutDays % 60;

// 	const doubleDigitHours = String(hours).padStart(2, 0);
// 	const doubleDigitMinutes = String(minutes).padStart(2, 0);

// 	const dayTitle = days !== 1 ? "days" : "day";

// 	return `${days} ${dayTitle} ${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "1 day 00:01"
// console.log(formatTime(3050)); // "1 day 00:01"

// =>
// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
// 	if (courses.includes(name)) {
// 		console.log("У вас уже есть такой курс");
// 		return;
// 	}

// 	courses.push(name);
// }

// function removeCourse(name) {
// 	const deleteIndex = courses.indexOf(name);

// 	if (deleteIndex === -1) {
// 		console.log("Курс с таким имененем не найден");
// 		return;
// 	}

// 	courses.splice(deleteIndex, 1);
// }

// function updateCourse(oldName, newName) {
// 	const replaceIndex = courses.indexOf(oldName);

// 	if (replaceIndex === -1) {
// 		console.log("Курс с таким имененем не найден");
// 		return;
// 	}

// 	courses.splice(replaceIndex, 1, newName);
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже есть такой курс'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс с таким имененем не найден'

// updateCourse("Express", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse("Vue", "NestJS"); // 'Курс с таким имененем не найден'

// Factorial
// function factorial(x) {
// 	if (x === 1) return 1;

// 	return x * factorial(x - 1);
// }

// console.log(factorial(6));
