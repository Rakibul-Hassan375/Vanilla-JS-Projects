function calculateSum(){

    let   a = document.getElementById('number_one').value;
    let   b = document.getElementById('number_two').value;
    let   c = document.getElementById('type').value;
    let   z = 0;

        if (c == '+'){
            z = Number(a) + Number(b);
        }

        if (c == '-'){
            z = Number(a) - Number(b);
        }

    document.getElementById('result').innerHTML = z;
}
