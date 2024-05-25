function validateAndCalculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var gender = document.getElementById('gender').value;
    var isValid = true;
    if (!weight) {
        document.getElementById('weight-error').textContent = 'Please fill out this field.';
        isValid = false;
    } else {
        document.getElementById('weight-error').textContent = '';
    }
    if (!height) {
        document.getElementById('height-error').textContent = 'Please fill out this field.';
        isValid = false;
    } else {
        document.getElementById('height-error').textContent = '';
    }
    if (!gender) {
        document.getElementById('gender-error').textContent = 'Please fill out this field.';
        isValid = false;
    } else {
        document.getElementById('gender-error').textContent = '';
    }
    if (isValid) {
        var bmi = weight / ((height / 100) * (height / 100));
        var interpretation = interpretBMI(bmi, gender);
        document.getElementById('result').innerHTML = bmi.toFixed(2);
        document.getElementById('interpretation').innerHTML = interpretation;
    }
}
function interpretBMI(bmi, gender) {
    if (gender === 'male') {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    } else if (gender === 'female') {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
}