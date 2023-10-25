function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = document.getElementById('num_three').value;

    let x = '';

    if( 40<a && a<4000 ){
        if( b<a && a<c ){
            x = 'True'
        }
        else{
            x = 'False'
        }
    }
    else{
        x = 'False'
    }

    document.getElementById('result').innerHTML = x;
}