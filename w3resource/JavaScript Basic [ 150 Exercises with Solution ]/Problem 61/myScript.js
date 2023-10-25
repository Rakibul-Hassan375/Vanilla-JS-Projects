function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;

    let c = a.substring( 1,a.length );
    let d = b.substring( 1,a.length );
    
    let e = c + d;

    document.getElementById('result').innerHTML =e;
}