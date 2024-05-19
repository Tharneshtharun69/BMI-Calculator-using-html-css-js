function calculatebmi() {
    event.preventDefault();
    var height = document.getElementById('Height').value;
    var weight = document.getElementById('Weight').value;
    height = height / 100;
    var bmi = weight / (height * height);
    var result = document.getElementById('result');
    result.innerHTML = 'Your BMI is ' + bmi.toFixed(2);
    if (bmi < 18.5) {
        result.innerHTML += '<br>You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerHTML += '<br>You have a normal weight.';
    } else{
        result.innerHTML += '<br>You are overweight.';
    }
}
