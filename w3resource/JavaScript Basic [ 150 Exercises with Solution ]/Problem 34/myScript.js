function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = '';

    if( 40<=a && a<=60 && 40<=b && b<=60 ){
        if(a<b){
            c = b;
        }
        else{
            c = a
        }
    }
    else{
        c = 'False'
    }
            document.getElementById('result').innerHTML = c 
}