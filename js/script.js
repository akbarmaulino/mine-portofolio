document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting until validation

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let number = document.getElementById("number").value;

    // Simple client-side validation
    if (
      name === "" ||
      email === "" ||
      message === "" ||
      number === "" ||
      number.length < 10
    ) {
      alert("Please fill in all the fields.");
      return;
    }
  });

document.getElementById("hamburger").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
});
