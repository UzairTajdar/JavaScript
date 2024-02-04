const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight  = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const fat_result = document.querySelector('#fat_results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please provide a valid height';
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please provide a valid weight';
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your bmi is ${bmi}</span>`

        if (bmi < 18.5) {
            fat_result.innerHTML = 'You are underweight';           
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            fat_result.innerHTML = 'You are normal weight';
        }
        else {
            fat_result.innerHTML = 'You are overweight';
        }
    }

   

});