function check(){

    let a = document.getElementById('num_one').value
    let b = document.getElementById('num_two').value
    let c = '';

        if( 40<a && a<60 && 40<b && b<60 || 70<a && a<100 && 70<b && b<100 ){
            c = 'True'
        }
        else{
            c = 'False'
        }

    document.getElementById('result').innerHTML = c
}
// 40..60 or 70..100
// (70 < a < 100 && 70 < b < 100)