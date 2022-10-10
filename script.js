const calculate = () => {
	const height = Number(document.getElementById("input-height").value);
	const weight = Number(document.getElementById("input-weight").value);

	if (height == "" || isNaN(height)) {
		const msg = "please input with number";

		const heightInvalid = document.getElementsByClassName("height-warning");
		heightInvalid.innerText = msg;
	}

	if (weight == "" || isNaN(weight)) {
		const msg = "please input with number";

		const weightInvalid = document.getElementsByClassName("weight-warning");
		weightInvalid.innerText = msg;
	}

	if (height != "" && weight != "" && !isNaN(height) && !isNaN(weight)) {
		const { bmivalue, status } = formula(height, weight);

		alert(`your BMI value is ${bmivalue}. status : ${status}`);
	}

	clear();
};

const formula = (h, w) => {
	const bmivalue = w / (h / 100) ** 2;
	let status = "";

	if (bmivalue < 18.5) {
		status = "Underweight";
	} else if (bmivalue > 18.5 && bmivalue < 24.9) {
		status = "Normal weight";
	} else if (bmivalue > 25 && bmivalue < 29.9) {
		status = "Overweight";
	} else if (bmivalue >= 30) {
		status = "Obesity";
	} else {
		status = "Undefined, your BMI out of range";
	}

	let result = { bmivalue, status };
	return result;
};

const clear = () => {
	document.getElementById("input-height").value = "";
	document.getElementById("input-weight").value = "";
};

const button = document.getElementsByClassName("submit")[0];
button.addEventListener("click", calculate);
