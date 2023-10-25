function guessButton(){

    let a = document.getElementById('number').value
    let b = 'Great Job'
    let c = 'Try Again'

    if(a == '3'){
        document.getElementById('result').innerHTML = b;
        document.getElementById('result').style.color = 'green'
    }
    else{
        alert(c)
    }
}