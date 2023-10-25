function christmas(){
    
    let a = new Date();
    let b = a.getFullYear();
    let chrismasdate = new Date(b, 11, 25);

    let c = chrismasdate - a;

        let second = c/1000;
        let minute = second/60;
        let hour = minute/60;
        let day = hour/24;

    let dayleft = Math.round(day);

    document.getElementById('result').innerHTML = dayleft;
}