let b = ''
function check(){

    let a = new Date()
    b += a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + '<br>';
    document.getElementById('result').innerHTML = b;
    console.log(b)

}
setInterval( check, 1000)