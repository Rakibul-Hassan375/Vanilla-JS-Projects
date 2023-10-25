function determineSunday(){

    let a = document.getElementById('day').value;
    let b = new Date(a, 0, 1).getDay() == 0;
    
    // let c = b.getDay() == 0

        if(b){
            document.getElementById('result').innerHTML = 'Yes';
        }
        else{
            document.getElementById('result').innerHTML = 'No';
        }
}