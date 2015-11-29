var img = document.getElementById('cat');

img.style.position = 'absolute';
img.style.left = '0px';




var delta = 10;

var catWalk = function() {
img.style.left = parseInt(img.style.left) + delta + 'px';
  if (parseInt(img.style.left) >= innerWidth) {
    delta = -10;
    cat.style.transform = "scaleX(-1)"
  } else if (parseInt(img.style.left) <= delta) {
    delta = 10;
    cat.style.transform = "scaleX(1)"
  }
};

setInterval(catWalk, 500);
var timerID = setInterval(catWalk, 100);

// var catWalk = function() {
//   console.log(img.style.position)
//   var oldLeft = (parseInt(img.style.left));
//   var newLeft = oldLeft + 1;
//   img.style.left = newLeft + 'px';
// 	if (img.style.newLeft >= innerWidth) {
//     	console.log('stopping!');
//     	clearInterval(timerID);
// }
// };

// var catWalk = function() {
//   console.log(img.style.position)
//   var oldLeft = (parseInt(img.style.left));
//   var newLeft = oldLeft + 1;
//   img.style.left = newLeft + 'px';
// 	if (timerID = ) {
//     	console.log('stopping!');
//     	console.log ("hey");
//     	console.log(timerID)

// }
// };
