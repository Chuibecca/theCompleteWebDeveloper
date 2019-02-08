// Chapter 1
// Exercise 1
console.log('xiaoouwang');
console.log(31);
// Exercise 2
console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);
// Exercise 3
console.log(4 + 5); //9
console.log('4 + 5'); //4+5
console.log('4' + '5'); //45

// Chapter 2
// Exercise 1

let a = 2;
a -= 1; //1
a++; // x++ returns the value before incrementation
console.log(a); //2
let b = 8;
b += 2; //10
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(c, d, e, f, g); // 102 30 40 10 10

// Exercise 2
const tempCel = 37.1;

function tempConverter(temp) {
	return temp * (9 / 5) + 32;
}
console.log(`${tempCel}°C = ${tempConverter(tempCel)}°F`);

// Exercise 3
let nombre1 = 5;
let nombre2 = 3;
let nombre3 = nombre2;
nombre2 = nombre1;
nombre1 = nombre3;
console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5

// Chapter 3
// Exercise 1
// Version 1 with switch
const today = 'monday';
let tomorrow = '';
switch (today) {
	case 'monday':
		tomorrow = 'tuesday';
		break;
	case 'tuesday':
		tomorrow = 'wednesday';
		break;
	case 'wednesday':
		tomorrow = 'thursday';
		break;
	case 'thursday':
		tomorrow = 'friday';
		break;
	case 'friday':
		tomorrow = 'saturday';
		break;
	case 'saturday':
		tomorrow = 'sunday';
		break;
	case 'sunday':
		tomorrow = 'monday';
		break;
	default:
		console.log('error, please input a valid day');
		break;
}
console.log(`the day after ${today} is ${tomorrow}`);
// Version 2 with array and forEach
// const todayVersionArray = 'monday';
// let allDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// let tomorrowVersionArray = '';
// allDays.forEach(day =>  {
// 	if (day === todayVersionArray) {
// 		if (day === 'sunday') {
// 			tomorrowVersionArray = 'monday';
// 		} else {
// 			tomorrowVersionArray = allDays[(allDays.indexOf(day) + 1)];
// 		}
// 	}
// });
// console.log(tomorrowVersionArray);
// Version 3 with for
// const todayVersionArrayFor = 'monday';
// let allDaysFor = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// let tomorrowVersionArrayFor = '';
// for (let index = 0; index < allDaysFor.length; index++) {
//   if (todayVersionArrayFor === allDaysFor[index]) {
//     if (todayVersionArrayFor === 'sunday') {
//       tomorrowVersionArrayFor = 'monday';
//     } else {
//       tomorrowVersionArrayFor = allDaysFor[index+1]
//       // tomorrowVersionArrayFor = allDaysFor[(allDaysFor.indexOf(todayVersionArrayFor) + 1)];
//     }
//   }
// }
// Version 4 with for of
// const todayVersionArrayForOf = 'tuesday';
// let allDaysForOf = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// let tomorrowVersionArrayForOf = '';
// for (const day of allDaysForOf) {
// 	if (day === todayVersionArrayForOf) {
// 		if (day === 'sunday') {
// 			tomorrowVersionArrayForOf = 'monday';
// 		} else {
// 			tomorrowVersionArrayForOf = allDaysForOf[(allDaysForOf.indexOf(day) + 1)];
// 		}
// 	}
// }

// console.log(tomorrowVersionArrayForOf);

// Exercise 2
const moyenne = 11;
if (moyenne < 10) {
	console.log('Vous etes recale.');
} else if (moyenne > 12 && moyenne === 12) {
	console.log('Vous etes recu avec mention.');
} else {
	console.log('Vous etes recu.');
}

// Exercise 3
// 14h17m59s => 14h18m0s 6h59m59s => 7h0m0s 23h59m59s => 0h0m0s (minuit)

let heures = 23; // Faire varier cette variable entre 0 et 23
let minutes = 59; // faire varier cette variable entre 0 et 59
let secondes = 59; // faire varier cette variable entre 0 et 59
if (secondes === 59 && minutes === 59 && heures === 23) {
	heures = 0;
	secondes = 0;
	minutes = 0;

} else if (secondes === 59 && minutes === 59) {
	secondes = 0;
	minutes = 0;
	heures++;
} else if (secondes === 59) {
	secondes = 0;
	minutes++;
}

console.log(`Dans une seconde il sera ${heures}h${minutes}m${secondes}s`);

// CHapter 4
// Exercise 1
const nbTours = 10;

console.log("Le manège démarre");
for (let i = 0; i < nbTours; i++) {
	console.log(`c'est le tour numero ${i}`);
}

// Ajoutez votre code ici

console.log("Le manège s'arrête");
// Exercise 2
const nombre = 7; // Faites varier cette variable entre 1 et 10
let i = 1;
while (i < 10) {
	console.log(`${i} * ${nombre} = ${i*nombre}`);
	i++;
}
console.log(`Table de multiplication de ${nombre}`);
// Exercise 3
// Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3. Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3. Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5

// const nombreFizz = 20;
// if (nombreFizz % 3 === 0 && nombreFizz % 5 === 0) {
// 	console.log(nombreFizz % 3 === 0 && nombreFizz % 5 === 0);
// 	console.log('FizzBuzz');
// 	}
// 	else if (((nombreFizz % 3) === 0) && ((nombreFizz % 5) !== 0)) {
// 	console.log('Fizz');
// 	} else {
// 	console.log('Buzz');
// 	}

// CHapter 5
// Exercise 1
// Renvoie le carré de x
function carre1(x) {
	return x * x;
	return 0;
}

// Renvoie le carré de x
const carre2 = x => x * x; // Ajoutez votre code ici

console.log(carre1(0)); // 0
console.log(carre1(2)); // 4
console.log(carre1(5)); // 25

console.log(carre2(0)); // 0
console.log(carre2(2)); // 4
console.log(carre2(5)); // 25
// Exercise 2
// Ajoutez votre code ici
function min(x, y) {
	if (x > y) {
		return x;
	} else {
		return y;
	}
}
console.log(min(4.5, 5)); // 4.5
console.log(min(19, 9)); // 9
console.log(min(1, 1)); // 1
// Calculatrice
const calculer = (firstNumber, operator, secondNumber) => {
	switch (operator) {
		case "+":
			return firstNumber + secondNumber;
			break;
		case "-":
			return firstNumber - secondNumber;
		case "*":
			return firstNumber * secondNumber;
		case "/":
			return firstNumber / secondNumber;
		default:
			break;
	}
}
console.log(calculer(4, "+", 6)); // 10
console.log(calculer(4, "-", 6)); // -2
console.log(calculer(2, "*", 0)); // 0
console.log(calculer(12, "/", 0)); // Infinity

// Chapter 6
// Exercise 1
const aurora = {
	nom: "Aurora",
	sante: 150,
	force: 25,
	xp: 0,
// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
	decrire() {
		return `${this.nom} a ${this.sante} de vie, ${this.force} en force et ${this.xp} d'experience`;
	}
}

console.log(aurora.decrire());

console.log("Aurora apprend une nouvelle compétence");
aurora.xp += 15;

// "Aurora a 150 points de vie, 25 en force et 15 points d'expérience"
console.log(aurora.decrire());
// Exercise 2
// Ajoutez votre code ici
const chien = {
	nom: "Crockdur",
	race: "matin de Naples",
	taille: 75,

	aboyer(parameter) {
		return "Grrr !";
	}

}
// "Crockdur est un mâtin de Naples mesurant 75 cm"
console.log(`${chien.nom} est un ${chien.race} mesurant ${chien.taille} cm`);

// "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);
// Exercise 3

