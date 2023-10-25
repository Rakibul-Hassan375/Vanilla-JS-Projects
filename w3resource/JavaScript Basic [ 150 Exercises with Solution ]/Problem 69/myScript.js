function check(){

    let a = document.getElementById('num_one').value;

    // let b = a.split('');
    // let c = Number( b[0] ) + Number( b[1] ) + Number( b[2] );

    // let x = ['10','32','20']
    // let y = Number( x[0] ) + Number( x[1] ) + Number( x[2] );

    document.getElementById('result').innerHTML = y;
    console.log()

}

// function numberToArray(number) {
//     // Convert the number to a string
//     const numberString = number.toString();
  
//     // Split the string into an array of characters
//     const characters = numberString.split('');
  
//     // Convert each character back to a number
//     const array = characters.map((char) => parseInt(char, 10));
  
//     return array;
//   }
  
//   // Example usage
//   const number = 323232;
//   const array = numberToArray(number);
//   console.log(array); // Output: [32, 32, 32]