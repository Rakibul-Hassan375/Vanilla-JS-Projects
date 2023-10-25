function check(){

    let a = document.getElementById('num_one').value

    let b = a.split('');
    let c = [ b[1], b[2], b[0] ] ;

    let x = [ '10','32','20' ]
    let y = [ x[1], x[2], x[0] ] ;

    document.getElementById('result').innerHTML = c;
    console.log(y)
}