function changeMultiple(){

    let a = document.getElementById('inpt').value;
    let b = '';

        if ( a % 3 === 0 || a % 7 === 0 ){

            b = 'True';
        }
        else{
            
            b = 'False';
        }

    document.getElementById('result').innerHTML = b;
}