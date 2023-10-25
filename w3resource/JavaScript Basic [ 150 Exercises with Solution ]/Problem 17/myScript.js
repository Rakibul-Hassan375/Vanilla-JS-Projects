function sum(){

    let a = document.getElementById('numr').value;
    let b = '';

    b = Number(a) - 19;

        if ( b > 19){

            b = b * 3;
        }

    document.getElementById('result').innerHTML = b;
}