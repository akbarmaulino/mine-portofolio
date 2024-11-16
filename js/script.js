document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form untuk dikirim sebelum validasi

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let number = document.getElementById("number").value;

  // Validasi sederhana
  if (
    name === "" ||
    email === "" ||
    message === "" ||
    number === "" ||
    number.length < 10 ||
    isNaN(number) // Pastikan nomor hanya berisi angka
  ) {
    alert("Please fill in all the fields correctly.");
    return;
  }

  // Jika semua validasi lolos, kirim form secara manual
  this.submit(); // Ini akan mengirimkan form ke action yang telah ditentukan (https://api.web3forms.com/submit)
});

document.getElementById("hamburger").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
});
