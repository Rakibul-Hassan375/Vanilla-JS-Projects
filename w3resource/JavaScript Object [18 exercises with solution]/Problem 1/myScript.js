function check(){

    let x = document.getElementById('num_one').value;
    let y = document.getElementById('num_two').value;
    let z = document.getElementById('num_three').value;

    let a = { Name: x, Age: y, Color: z }
    let b = a.Name
    let c = a.Age
    let d = a.Color
    let e = Object.keys(a)
    
    document.getElementById('result2').innerHTML = e[0] + ' : ' + b + '<br>' + e[1] + ' : ' + c + '<br>' + e[2] + ' : ' + d
}