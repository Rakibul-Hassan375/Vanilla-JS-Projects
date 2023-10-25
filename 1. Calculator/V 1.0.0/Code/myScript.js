// Global
    let calculation = '';
// Function for all number buttons
    function num_btn(event){
        let a = event.target.value;
        calculation += a;
        document.getElementById('primary').innerHTML = calculation;
    }
// Function for all operator buttons
    function operator_btn(event){
        let a = event.target.value;
        if( !calculation.includes('+') && !calculation.includes('-') && !calculation.includes('/') && !calculation.includes('*') ){
            calculation += a;
        }
        document.getElementById('primary').innerHTML = calculation;
    }
// Function for equal button
    function equal_btn(){
        let a = eval(calculation);
        if( a != undefined ){
            document.getElementById('secondary').innerHTML = a;
            calculation = '';
        }
    }
// Function for delete button
    function dlt_btn(){
        calculation =  calculation.slice(0,-1);
        document.getElementById('primary').innerHTML = calculation;
    }
// Function for all clear button
    function all_clear_btn(){
        calculation = ''
        document.getElementById('primary').innerHTML = 0;
        document.getElementById('secondary').innerHTML = 0;
    }