function check(){

    let a = document.getElementById('removeDrop')
    let b = a.options.length
    let c = ''

    for (let i = 0; i < b; i++) {
        let d = a.options[i].text;
        c += d + "\n";
      }
    
      alert("Dropdown items list:\n" + c);
}