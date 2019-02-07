// Chapter 1
// Exercise 1
console.log("xiaoouwang");
console.log(31);
// Exercise 2
console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);
// Exercise 3
console.log(4 + 5);  //9
console.log("4 + 5"); //4+5
console.log("4" + "5"); //45

// Chapter 2
// Exercise 1

let a = 2;
a -= 1;   //1
a++;    // x++ returns the value before incrementation
console.log(a);  //2
let b = 8;
b += 2;  //10
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(c,d,e,f,g);   // 102 30 40 10 10

// Exercise 2
const tempCel = 37.1;
function tempConverter(temp) {
	return temp*(9/5)+32;
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
const today = "monday";
let tomorrow = "";
switch (today) {
	case "monday":
		tomorrow = "tuesday";
		break;
	case "tuesday":
		tomorrow = "wednesday";
		break;
	case "wednesday":
		tomorrow = "thursday";
		break;
	case "thursday":
		tomorrow = "friday";
		break;
	case "friday":
		tomorrow = "saturday";
		break;
	case "saturday":
		tomorrow = "sunday";
		break;
	case "sunday":
		tomorrow = "monday";
		break;
	default:
		console.log("error, please input a valid day");
		break;
}
console.log(`the day after ${today} is ${tomorrow}`);
// Version 2 with array
const todayVersionarray = "monday";
let allDays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
let tomorrowVersionarray = allDays.forEach(function(day){
	if (day === todayVersionarray) {
		return allDays[(allDays.findIndex()+1)];
	}
});
console.log(tomorrowVersionarray);

