class ImageSlider {
  constructor(slider) {
    this.slider = slider;
    this.slides = [...slider.querySelectorAll('.slide')];
    this.currentSlide = 0;
    this.init();
  }

  init() {
    this.slides[this.currentSlide].classList.add('active');
    setInterval(this.nextSlide.bind(this), 3000);
  }

  nextSlide() {
    this.slides[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.slides[this.currentSlide].classList.add('active');
  }
}
class Lightbox {
  constructor(lightbox) {
    this.lightbox = lightbox;
    this.images = [...lightbox.querySelectorAll('.lightbox-img')];
    this.modal = document.getElementById('lightbox-modal');
    this.modalImg = document.getElementById('lightbox-img');
    this.caption = document.getElementById('lightbox-caption');
    this.closeButton = document.querySelector('.lightbox-close');
    this.addEventListeners();
  }

  openModal(img) {
    this.modal.style.display = 'block';
    this.modalImg.src = img.src;
    this.caption.innerHTML = img.alt;
  }

  closeModal() {
    this.modal.style.display = 'none';
  }

  addEventListeners() {
    this.images.forEach((img) => {
      img.addEventListener('click', (e) => this.openModal(e.target));
    });
    this.closeButton.addEventListener('click', this.closeModal.bind(this));
  }
}
class Navigation {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.links = [...document.querySelectorAll('nav a')];
    this.currentPage = window.location.pathname;
    this.addEventListeners();
  }

  addEventListeners() {
    this.links.forEach((link) => {
      if (link.pathname === this.currentPage) {
        link.classList.add('current');
      }
    });
  }
}

const navigation = new Navigation();

const sections = document.querySelectorAll('section[data-color]');

sections.forEach((section) => {
  const color = section.getAttribute('data-color');
  section.style.backgroundColor = color;
});
