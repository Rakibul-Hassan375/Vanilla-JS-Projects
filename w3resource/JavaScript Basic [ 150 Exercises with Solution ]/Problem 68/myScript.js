function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let e = a.substring( 0,b );
    let f = a.substring( a.length-b );

    document.getElementById('result').innerHTML = e + f;
    
}