function check(){

    let a = document.getElementById('num_one')
    let r = a.value
    let π = 3.14
    let v = (4/3)*π*(r*r*r)
    document.getElementById('num_two').innerHTML = v;
    console.log(v)
}