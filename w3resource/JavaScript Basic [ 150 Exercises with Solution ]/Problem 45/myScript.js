function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = Number(a) + Number(b)
    let d = Math.abs( Number(a) - Number(b) )
    let x = '';

        if( a == 15 || b == 15 || c == 15 ){
            x = 'True'
        }
        else if( c == 15){
            x = 'True'
        }
        else if( d == 15){
            x = 'True'
        }
        else{
            x = 'False'
        }

    document.getElementById('result').innerHTML = x;

}