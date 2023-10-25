function change(){

    let a = document.getElementById('value').value;
    let c = '';

        a = a.toLowerCase().replace('py','');

        c = 'Py' + a;

    document.getElementById('result').innerHTML = c;

}