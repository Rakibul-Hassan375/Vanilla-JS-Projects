
function check(){

    let a = document.getElementById('num_one').value
    let b = a.split('')

    let c = findMostDuplicate( b )


    document.getElementById('result').innerHTML = c;

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

  // 0 1 2 3 4 5 6 7 8
  // 3 a a a 2 3 a 3

  // {3:3, a:4, 2:1}
  // maxCount 3
  // mostDuplicate a