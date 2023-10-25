function multiply(){
    
    let a = document.getElementById('number_one').value;
    let b = document.getElementById('number_two').value;

        let c = Number(a) * Number(b);

    document.getElementById('result').innerHTML = c;
}

function divide(){

    let a = document.getElementById('number_one').value;
    let b = document.getElementById('number_two').value;

        let c = Number(a) / Number(b);

    document.getElementById('result').innerHTML = c;
}