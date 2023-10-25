function check(){

    let a = document.getElementById('num_one').value
    
    let b = a.split(' ')
    let c = b.join('+')

    document.getElementById('result').innerHTML = c;
    
}