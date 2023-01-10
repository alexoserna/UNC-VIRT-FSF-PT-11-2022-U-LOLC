var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (element.matches("box")) {
    // Get the current value of the image's data-state attribute
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "data-numbers";
      element.setAttribute("data-state", "data-numbers");

      // Update the image's source to the string being stored in the data-animate attribute
      element.setAttribute("src", element.dataset.animate);
     } 
     //   else {
    //   // Change the attributes back to their non-animated values
    //   element.dataset.state = "still";
    //   element.setAttribute("src", element.dataset.still);
    // }
  }
});
