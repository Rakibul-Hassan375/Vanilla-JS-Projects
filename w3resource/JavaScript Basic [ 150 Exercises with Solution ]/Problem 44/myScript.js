function check(){
    
    let a = Number(document.getElementById('num_one').value);
    let b = Number(document.getElementById('num_two').value);
    let c = Number(document.getElementById('num_three').value);
    let x = '';
    let y = '';

    if( a>=20 || b>=20 || c>=20 ){
        x = 'True';
        if( a>b && a>c ){
            y = a;
        }
        if( b>a && b>c ){
            console.log(a,b,c)
            y = b;
        }
        if( c>b && c>a ){
            y = c;
        }
    }
    else{
        x = 'False';
    }
    document.getElementById('result').innerHTML = x;
    document.getElementById('result_two').innerHTML = y;
}
//  50 8 6