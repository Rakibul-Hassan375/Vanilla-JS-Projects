function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = a.length;
    let d = b.length;
    let x = '';

    if( c == d || d == c ){
        x = a + b;
    }
    else if( c > d ){
        x = a.substring(a.length-d) + b;
    }
    else if( d > c ){
        x = a + b.substring(b.length-c);
    }
    else{
        x = 'False';
    }

    document.getElementById('result').innerHTML = x;

}

//   r a k i b      r a k i b u l      r a k i b 
// 0 1 2 3 4 5    0 1 2 3 4 5 6 7    0 1 2 3 4 5