function showFormula(){

    document.getElementById('showformula').innerHTML = 
    'Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit'

}
showFormula()

// Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit
// (1°C × 9/5) + 32 = 33.8°F
// (1°F − 32) × 5/9 = -17.22°C

function celcius(){

    let a = document.getElementById('celcius').value;
    let b ='';

        b = (a * 9/5) + 32;

    document.getElementById('result_c').innerHTML = b + ' ' + 'Fahrenheit';
}

function fahrenheit(){

    let a = document.getElementById('fahrenheit').value;
    let b ='';
    
        b =  (a - 32) * 5/9;
    
    document.getElementById('result_f').innerHTML = b + ' ' + 'Celsius';

}