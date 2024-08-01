function login() {
  // Ambil nilai input
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Validasi input
  if (username === "" || password === "") {
    alert("Username and Password Cannot Be Empty");
    return;
  }

  document.getElementById("name").innerText = username;
  document.querySelector(".login-container").classList.add("hidden");
  document.querySelectorAll("#main-content").forEach(function (element) {
    element.classList.remove("hidden");
  });
}

// logout
function logout() {
  document.getElementById("name").innerText = "";

  // menampilkan form login lebih dulu dan menyembunyikan page utama
  document.querySelector(".login-container").classList.remove("hidden");
  document.querySelectorAll("#main-content").forEach(function (element) {
    element.classList.add("hidden");
  });
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// untuk pengiriman form
document
  .getElementById("formulir")
  .addEventListener("submit", function (event) {
    // menghindari tindakan default dari pengiriman formulir
    event.preventDefault();

    // tanggal dan waktu
    const now = new Date();
    const dateTimeString = now.toLocaleString();

    // ambil nilai form
    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tgl-lahir").value;
    const jenisKelamin = document.querySelector(
      "input[name=jenisKelamin]:checked"
    )?.value;
    const pesan = document.getElementById("pesan").value;

    const resultText = `Date/time: ${dateTimeString}\n\nNama: ${nama}\nTanggal Lahir: ${tanggalLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan: ${pesan}\n`;

    // menunjukkan hasil
    document.getElementById("result").value = resultText;

    // menunjukkan bahwa pesan telah dikirim
    alert("Pesan telah dikirim");

    document.getElementById("nama").value = "";
    document.getElementById("tgl-lahir").value = "";
    document.getElementById("pesan").value = "";
    if (document.querySelector("input[name=jenisKelamin]:checked")) {
      document.querySelector(
        "input[name=jenisKelamin]:checked"
      ).checked = false;
    }
  });

let currentSlide = 0;

// untuk slide
function moveSlide(direction) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  // mengatur slide berdasarkan arah yang diberikan
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // mengatur posisi offset dari slide
  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

// menginisialisasi posisi slider saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  moveSlide(0);
});

// deklarasi tombol untuk scroll ke atas
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// membuat perpindahan page menjadi smooth
document.querySelectorAll(".nav-item").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});