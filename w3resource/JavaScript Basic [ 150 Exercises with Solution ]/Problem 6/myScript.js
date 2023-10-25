
function determine(){

    let leapyear = document.getElementById('year').value;
    
    let a = new Date(leapyear, 1, 29).getDate() == 29;

        if(a){
            document.getElementById('result').innerHTML = leapyear + ' is a leap year';
        }
        else{
            document.getElementById('result').innerHTML = leapyear + ' is not a leap year';
        }
}