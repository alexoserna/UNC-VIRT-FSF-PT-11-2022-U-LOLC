function keydownAction(event) {
  // TODO: Complete keydown function
  var key = event.key;
  var code = event.code;
  document.querySelector("#key").innerHTML = key;
  document.querySelector("#code").innerHTML = code;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
// TODO: Add Event Listener for "keydown" event

