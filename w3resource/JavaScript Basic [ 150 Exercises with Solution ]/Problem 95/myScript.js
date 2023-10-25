function check(){

    let a = document.getElementById('num_one').value
    let b = a.split('')

    let c = findMostDuplicate( b )
    for( i=0; i<b.length; i++ ){
        if( b[i] == c ){
            b[i] = '5'
        }
    }

    document.getElementById('result').innerHTML;
    console.log(b)
    console.log(c)
    
}

function findMostDuplicate(arr) {
    var occurrences = {};
    var maxCount = 0;
    var mostDuplicate;
  
    for (var i = 0; i < arr.length; i++) {
      var currentItem = arr[i];
      if (occurrences[currentItem] === undefined) {
        occurrences[currentItem] = 1;
      } else {
        occurrences[currentItem]++;
        if (occurrences[currentItem] > maxCount) {
          maxCount = occurrences[currentItem];
          mostDuplicate = currentItem;
        }
      }
    }

    console.log(occurrences)
    console.log(maxCount)
    console.log(mostDuplicate)
  
    return mostDuplicate;

  }