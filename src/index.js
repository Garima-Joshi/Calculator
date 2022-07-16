import "./styles.css";
var numeric = document.getElementsByClassName("num");
var op = document.getElementsByClassName("op");
var display = document.getElementsByClassName("item1")[0];
var operatorSet = false;
var operand2Set = false;
var digCount = 0;
for (var i = 0; i < numeric.length; i++) {
  numeric[i].addEventListener("click", function () {
    if (digCount < 6) {
      var exp = display.innerText;
      if (
        digCount == 1 &&
        exp[exp.length - 1] == "0" &&
        this.innerText != "."
      ) {
        exp = exp.substring(0, exp.length - 1) + this.innerText;
      } else {
        exp = exp + this.innerText;
        digCount++;
      }
      display.innerText = exp;
    }

    operand2Set = operatorSet;
  });
}
for (var i = 0; i < op.length; i++) {
  op[i].addEventListener("click", function () {
    digCount = 0;
    if (this.innerText == "C") {
      display.innerText = "";
    } else if (this.innerText == "=") {
      if (operand2Set) {
        var res = eval(display.innerText);
        if (res == Infinity || res == NaN) res = "Error";
        display.innerText = res;
      }
    } else if (this.innerText == "+/-") {
    } else {
      if (!operatorSet && display.innerText != "") {
        display.innerText = display.innerText + this.innerHTML;
        operatorSet = true;
      } else {
        if (operand2Set) {
          var res = eval(display.innerText);
          if (res == Infinity || res == NaN) {
            display.innerText = "Error";
          } else {
            display.innerText = eval(display.innerText) + this.innerHTML;
          }
          operand2Set = false;
        }
      }
    }
  });
}
