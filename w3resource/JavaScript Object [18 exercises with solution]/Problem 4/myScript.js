function check(){

    let a = [
        { Author: 'Bill Gates', Title: 'The Road Ahead', ReadingStatus: 'true' },
        { Author: 'Steve Jobs', Title: 'Walter Isaacson', ReadingStatus: 'true' },
        { Author: 'Suzanne Collins', Title: 'Mockingjay: The Final Book of The Hunger Games', ReadingStatus: 'false' }
    ]

    let b = ocument.getElementById('result')


    for( i=0; i<a.length; i++){
        if( a[i].ReadingStatus == 'true' ){
            b += '<li> Already read' + ' ' + "'" + a[i].Author + "'" + ' ' + 'by' + ' ' + a[i].Title + '</li>'
        }
        if( a[i].ReadingStatus == 'false' ){
            b += '<li> You still need to read' + ' ' + "'" + a[i].Author + "'" + ' ' + 'by' + ' ' + a[i].Title +' </li>'
        }
    }

    document.getElementById('result').innerHTML = b;

}
