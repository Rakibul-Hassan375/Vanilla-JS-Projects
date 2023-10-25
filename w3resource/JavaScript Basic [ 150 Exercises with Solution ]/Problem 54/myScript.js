function check(){
    let a = document.getElementById('num_one').value;
    let b = /[aeiou]/g;
    let c = a.match(b).length
    document.getElementById('result').innerHTML = c;
}