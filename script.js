function scrollToElement(elementSelector, instance = 0) {
  // Sellect all elements that match that given selector
  const element = document.querySelectorAll(elementSelector);
  // check if there are elements matchings the selector and if the requested instance exist
  if (element.length > instance) {
    // Scroll to the specified instance of the element
    element[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", () => {
  scrollToElement(".header");
});

link2.addEventListener("click", () => {
  // scroll to the second element of the class header
  scrollToElement(".header", 1);
});

link3.addEventListener("click", () => {
  scrollToElement(".column");
});

document.addEventListener("DOMContentLoaded", function () {
  // Use unique IDs for each button
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  btn1.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("join.html", "_blank");
  });

  btn2.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("join.html", "_blank");
  });

  btn3.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("join.html", "_blank");
  });
});
