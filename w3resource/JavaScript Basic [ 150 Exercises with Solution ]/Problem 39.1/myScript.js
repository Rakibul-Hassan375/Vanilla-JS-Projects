function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = Number(a) + Number(b);
    let d = '';

        if( 50<=c && c<=80){
            d = 65;
        }
        else{
            d = 80;
        }

    document.getElementById('result').innerHTML = d;
}