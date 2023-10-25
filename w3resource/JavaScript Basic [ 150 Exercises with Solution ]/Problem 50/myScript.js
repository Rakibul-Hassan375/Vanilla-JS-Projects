function check(){

    let a = document.getElementById('num_one').value;
    let b = Math.floor( Number(a) / Number(60) );
    let c = a % 60

            document.getElementById('result').innerHTML = b + ' ' + "hr" + ' '+ c + ' ' + "min";
}