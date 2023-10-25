function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = Number(a) / Number(b);
    let d = c.toString().split('');

            document.getElementById('result').innerHTML = d;
}