function check(){
    
    let a = document.getElementById('num_one').value
    let b = document.getElementById('num_two').value

    let c = a.replaceAll(b, '')

            document.getElementById('result').innerHTML = c
}