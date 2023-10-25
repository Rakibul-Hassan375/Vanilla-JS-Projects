function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = document.getElementById('num_three').value;
    let d = '';

        if( a>b && a>c ){
            d = a;
        }
        else{
            if( b>a && b>c ){
                d = b;
            }
            else{
                if( c>a && c>b ){
                    d = c;
                }
            }
        }
            document.getElementById('result').innerHTML = d;
}