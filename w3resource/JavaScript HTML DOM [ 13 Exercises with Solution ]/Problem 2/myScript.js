function check(event){

    event.preventDefault()

    let a = document.getElementById('num_one').value
    let b = document.getElementById('num_two').value
    
    document.getElementById('result').innerHTML = a + ' ' + b;
    
}