const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const tittle = document.getElementById("feature-title");
const discrip = document.getElementById("feature-description");

btn1.addEventListener("click", function (e) {
  e.preventDefault();
  const newTitle = btn1.getAttribute("data-title");
  const newDescription = btn1.getAttribute("data-description");

  tittle.textContent = newTitle;
  discrip.textContent = newDescription;
});

btn2.addEventListener("click", function (e) {
  e.preventDefault();
  const newTitle = btn2.getAttribute("data-title");
  const newDescription = btn2.getAttribute("data-description");

  tittle.textContent = newTitle;
  discrip.textContent = newDescription;
});

btn3.addEventListener("click", function (e) {
  e.preventDefault();
  const newTitle = btn3.getAttribute("data-title");
  const newDescription = btn3.getAttribute("data-description");

  tittle.textContent = newTitle;
  discrip.textContent = newDescription;
});

// FAQ SECTION

const Q1 = document.querySelector(".question1");

Q1.addEventListener("click", function () {
  const A1 = document.querySelector(".A1");
  const S1 = document.querySelector(".S1");
  A1.classList.toggle("hidden");
  S1.classList.toggle("rotate-90");
});

const Q2 = document.querySelector(".question2");

Q2.addEventListener("click", function () {
  const A2 = document.querySelector(".A2");
  const S2 = document.querySelector(".S2");
  A2.classList.toggle("hidden");
  S2.classList.toggle("rotate-90");
});

const Q3 = document.querySelector(".question3");

Q3.addEventListener("click", function () {
  const A3 = document.querySelector(".A3");
  const S3 = document.querySelector(".S3");
  A3.classList.toggle("hidden");
  S3.classList.toggle("rotate-90");
});

const Q4 = document.querySelector(".question4");

Q4.addEventListener("click", function () {
  const A4 = document.querySelector(".A4");
  const S4 = document.querySelector(".S4");
  A4.classList.toggle("hidden");
  S4.classList.toggle("rotate-90");
});

// error massage email 

const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');

emailInput.addEventListener('input', function() {
  const errorImg = document.querySelector('.errorImg');
  const emailValue = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Pola email regex

  // Cek validitas email menggunakan regex
  if (!emailPattern.test(emailValue)) {
    errorImg.classList.remove('hidden');
    errorMessage.classList.remove('hidden'); // Menampilkan pesan error
    emailInput.classList.add('border-red-500'); // Menambahkan border merah pada input
  } else {
    errorImg.classList.add('hidden');
    errorMessage.classList.add('hidden'); // Sembunyikan pesan error
    emailInput.classList.remove('border-red-500'); // Menghapus border merah
  }
});

// hamburger bar
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function() {
  if(window.innerWidth <= 640) {
    mobileMenu.classList.toggle('hidden');
  }
})

menuClose.addEventListener('click', function() {
  mobileMenu.classList.add('hidden');
})