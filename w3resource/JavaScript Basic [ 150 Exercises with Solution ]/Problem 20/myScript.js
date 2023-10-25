function sum(){

    let a = document.getElementById('number_one').value;
    let b = document.getElementById('number_two').value;
    let c = '';


        if ( a > 0 && b < 0 ){
            c = 'True'
        }
        else{
            c = 'False'
        }

    document.getElementById('result').innerHTML = c
}