function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = document.getElementById('num_three').value;

    let x = a.substring(1,2);
    let y = b.substring(1,2);
    let z = c.substring(1,2);

    let d = '';

        if( x == y && y == x && z == x ){
            d = 'True'
        }
        else if ( x == y || y == x || z == x ){
            d = 'True'
        }
        else{
            d = 'False'
        }

    document.getElementById('result').innerHTML = d;
}

//  2 2
//0 1 2 