let x = new Date();

// Solution Way One

    // Day
        let day = x.getDate();

    // Month

        // let month = x.getMonth() + 1; {This will give us only the 'NUMERIC' number of a Month 'for example: 5'}

        let allMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let month = allMonth[x.getMonth()];

    // Year
        let year = x.getFullYear();

    //Format One 
        document.getElementById('result_one').innerHTML = 'Current date is' + ' ' + month + '-' + day + '-' + year;
    //Format Two 
        document.getElementById('result_two').innerHTML = 'Current date is' + ' ' + month + '/' + day + '/' + year;
    //Format Three 
        document.getElementById('result_three').innerHTML = 'Current date is' + ' ' + day + '-' + month + '-' + year;
    //Format Four 
        document.getElementById('result_four').innerHTML = 'Current date is' + ' ' + day + '/' + month + '/' + year;

// Solution Way Two

    // Month, Day, Year
        let a = x.toLocaleString('en-US',{month:'numeric',day:'numeric',year:'numeric'});

        document.getElementById('result_five').innerHTML = 'Current date is' + ' ' + a;

