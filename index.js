// Your code here
var dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
//    debugger
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

function moveDodgerRight() {
    var rightNumbers = dodger.style.left.replace("px", "");
    var right = parseInt(rightNumbers, 10);
    // debugger;
    if (right < 360) {
      dodger.style.left = `${right + 1}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  });