let count = 0;

function increase(){
        count +=1;
        if ( count > 20 ){
             count = 20;
        }
        document.getElementById('counter').innerHTML = count;
}
function decrease(){
        count -=1;
        if ( count < 0 ){
             count = 0;
        }
        document.getElementById('counter').innerHTML = count;
}
