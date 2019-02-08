## Consignes

1. fork then clone the openclassroon answer repository [here](https://github.com/xiaoouwang/intro-javascript)
2. use for loop to complete [this exercise](https://github.com/xiaoouwang/intro-javascript/blob/gh-pages/chapitre3_exercice1.js), add the new answer to the original file
3. pull a request to ask the author to merge the modification [link](https://www.youtube.com/watch?v=rgbCcBNZcdQ)

## My answer using forEach

```javascript
const todayVersionarray = "monday";
let allDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let tomorrowVersionarray = "";
allDays.forEach(day =>  {
	if (day === todayVersionarray) {
		if (day === "sunday") {
			tomorrowVersionarray = "monday";
		} else {
			tomorrowVersionarray = allDays[(allDays.indexOf(day) + 1)];
		}
	}
});
console.log(tomorrowVersionarray);
```

