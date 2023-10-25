function guess(){

    let a = document.getElementById('number').value;

        if(a == 7){
            document.getElementById('result').innerHTML = 'Good Work';
        }
        else{
            document.getElementById('result').innerHTML = 'Not matched';
        }
}