
function split(){

    let a = document.getElementById('text_main').value

    let b =''

        b = a.split('.').pop()

    document.getElementById('result').innerHTML = b

}