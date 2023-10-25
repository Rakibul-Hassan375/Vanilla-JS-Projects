function check(){

    let a = document.getElementById('p1').href;
    let b = document.getElementById('p1').hreflang;
    let c = document.getElementById('p1').type;
    let d = document.getElementById('p1').target;
    let e = document.getElementById('p1').rel;

    document.getElementById('result').innerHTML = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e;

}