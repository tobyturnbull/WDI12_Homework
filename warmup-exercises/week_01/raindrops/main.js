// We need a function, called convert, that receives a number
// If the number is evenly divisible by:
//   3 - we want to output "Pling"
//   5 - we want to output "Plang"
//   7 - we want to output "Plong"
// If the number is not divisible by those, turn the number into a string

var convert = function ( num ) {
  var str = "";

  if ( num % 3 === 0 ) {
    str += "Pling";
  }
  if ( num % 5 === 0 ) {
    str += "Plang";
  }
  if ( num % 7 === 0 ) {
    str += "Plong";
  }

  if ( str.length === 0 ) {
    console.log( num + "" );
    return num + "";
    // return num.toString();
  }
  // if ( num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0 ) {
  //   console.log( "Not divisible!" );
  // }

  console.log( str );
  return str;
}