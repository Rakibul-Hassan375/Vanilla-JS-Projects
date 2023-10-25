function check(){

    let a = document.getElementById('num_one').value
    let b = a.split('')

    let c = findMostDuplicate( b )
    // for( i=0; i<b.length; i++ ){
    //     if( b[i] == b[0] ){
    //         c++
    //     }
    // }

    // let d = 0
    // for( i=0; i<b.length; i++ ){
    //     if( b[i] == b[1] ){
    //         d++
    //     }
    // }

    document.getElementById('result').innerHTML;
    console.log(b)
    console.log(c)
    // console.log(d)
    // console.log(e)
    // console.log(f)
}

function findMostDuplicate(arr) {
    var occurrences = {};         //
    var maxCount = 0;             //
    var mostDuplicate;            //
  
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

//  1 1 1 2 2 3 3 3 3
//  0 1 2 3 4 5 6 7 8

// {1:3, 2:1}
// 3
// 1
// 

// occurrences[currentItem] = key
// {1:2}