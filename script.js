document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // MENU MOBILE
  // ===============================
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // ===============================
  // HERO CARROSSEL
  // ===============================
  const heroTrack = document.querySelector(".hero-track");
  const heroSlides = document.querySelectorAll(".hero-slide");
  const heroPrev = document.querySelector(".hero-prev");
  const heroNext = document.querySelector(".hero-next");

  let heroIndex = 0;
  let heroInterval;
  let heroPaused = false;
  let heroResumeTimeout;

  function updateHeroCarousel() {
    heroTrack.style.transform = `translateX(-${heroIndex * 100}%)`;
  }

  function startHeroAutoSlide() {
    heroInterval = setInterval(() => {
      if (!heroPaused) {
        heroIndex = (heroIndex + 1) % heroSlides.length;
        updateHeroCarousel();
      }
    }, 4000);
  }

  function pauseHeroAutoSlide() {
    heroPaused = true;
    clearTimeout(heroResumeTimeout);
    heroResumeTimeout = setTimeout(() => {
      heroPaused = false;
    }, 3000);
  }

  if (heroPrev && heroNext) {
    heroPrev.addEventListener("click", () => {
      heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
      updateHeroCarousel();
      pauseHeroAutoSlide();
    });

    heroNext.addEventListener("click", () => {
      heroIndex = (heroIndex + 1) % heroSlides.length;
      updateHeroCarousel();
      pauseHeroAutoSlide();
    });

    startHeroAutoSlide();
  }

  // ===============================
  // SABORES MENSAIS - SCROLL
  // ===============================
  const monthlyTrack = document.querySelector('.monthly-track');
  const monthlyPrev = document.querySelector('.monthly-prev');
  const monthlyNext = document.querySelector('.monthly-next');

  if (monthlyPrev && monthlyNext && monthlyTrack) {
    monthlyPrev.addEventListener('click', () => {
      monthlyTrack.scrollBy({ left: -300, behavior: 'smooth' });
    });

    monthlyNext.addEventListener('click', () => {
      monthlyTrack.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  // ===============================
  // DEPOIMENTOS CARROSSEL
  // ===============================
  const testimonialsSection = document.querySelector(".testimonials");
  const testimonialsTrack = testimonialsSection.querySelector(".testimonials-track");
  const testimonialsSlides = testimonialsSection.querySelectorAll(".testimonial");
  const testimonialsPrev = testimonialsSection.querySelector(".testimonials-prev");
  const testimonialsNext = testimonialsSection.querySelector(".testimonials-next");

  let testimonialIndex = 0;
  let testimonialsInterval;
  let testimonialsPaused = false;
  let testimonialsResumeTimeout;

  function updateTestimonialsCarousel() {
    testimonialsTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  }

  function startTestimonialsAutoSlide() {
    testimonialsInterval = setInterval(() => {
      if (!testimonialsPaused) {
        testimonialIndex = (testimonialIndex + 1) % testimonialsSlides.length;
        updateTestimonialsCarousel();
      }
    }, 3000);
  }

  function pauseTestimonialsAutoSlide() {
    testimonialsPaused = true;
    clearTimeout(testimonialsResumeTimeout);
    testimonialsResumeTimeout = setTimeout(() => {
      testimonialsPaused = false;
    }, 4000);
  }

  if (testimonialsPrev && testimonialsNext) {
    testimonialsPrev.addEventListener("click", () => {
      testimonialIndex = (testimonialIndex - 1 + testimonialsSlides.length) % testimonialsSlides.length;
      updateTestimonialsCarousel();
      pauseTestimonialsAutoSlide();
    });

    testimonialsNext.addEventListener("click", () => {
      testimonialIndex = (testimonialIndex + 1) % testimonialsSlides.length;
      updateTestimonialsCarousel();
      pauseTestimonialsAutoSlide();
    });

    startTestimonialsAutoSlide();
  }

  // ===============================
  // FORMULÁRIO DE PEDIDO
  // ===============================

  
  const formPedido = document.getElementById("formPedido");

  if (formPedido) {
    formPedido.addEventListener("submit", (e) => {
      e.preventDefault();

      const sabor = document.getElementById("sabor").value;
      const tamanho = document.getElementById("tamanho").value;
      const complementos = Array.from(
        document.querySelectorAll(".checkbox-group input:checked")
      ).map((c) => c.value);
      const nome = document.getElementById("nome").value;
      const endereco = document.getElementById("endereco").value;

      const mensagem = `*Novo Pedido Sorvete Tropical*%0A
- Nome: ${nome}%0A
- Endereço: ${endereco}%0A
- Sabor: ${sabor}%0A
- Tamanho: ${tamanho}%0A
- Complementos: ${complementos.join(", ") || "Nenhum"}`;

      const numeroWhats = "5599999999999";
      window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, "_blank");
    });
  }
});
