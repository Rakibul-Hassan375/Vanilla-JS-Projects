function check(){

    let a = document.getElementById('num_one').value
    let b = a.split('')
    let c = b.reverse()
    let d = c.join('')
    
    document.getElementById('result').innerHTML = d;
    console.log(b)

}