function check(){

    let a = document.getElementById('num_one').value;
    let b = document.getElementById('num_two').value;
    let c = '';

        if( b == 'Final' ){
            if(90<=a && a<=100){
                c = 'A+';
            }
            else{
                c = 'B+';
            }
        }
        else{
            if(89<=a && a<=100){
                c = 'A+';
            }
            else{
                c = 'B+';
            }
        }
    document.getElementById('result').innerHTML = c;
}

// check a student's total marks in various examinations. 
// The student will get A+ grade if the total marks are in the range 89..100 inclusive, 
// if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. 
// If the student gets an A+ grade, return true, otherwise return false
// 89<=a && a<=100