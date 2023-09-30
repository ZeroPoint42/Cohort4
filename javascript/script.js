const body = document.querySelector('body');
const nav = document.querySelector('nav');
const modeToggle = document.getElementById('mode-toggle');
const homeToggle = document.getElementById('hm-btn');
const aboutToggle = document.getElementById('ab-btn');
const contactToggle = document.getElementById('cn-btn');
const prodToggle = document.getElementById('pr-btn');
const instaToggle = document.getElementById('ig-btn');
const emailToggle = document.getElementById('em-btn');
const dmIcon = document.getElementById('dm-icon');
const icons = document.querySelectorAll('.invertIcon');

function toggleMode() {
    icons.forEach((icon) => {
        // Toggle the "dark-mode-icon" class
        icon.classList.toggle('dmInvert');
        // Invert the icon's color based on the presence of the class
        if (icon.classList.contains('dmInvert')) {
          icon.style.filter = 'invert(0)';
        // } else {
        //   icon.style.filter = 'invert(1)'; // Revert to the original color
        // }
}});
    
    dmIcon.classList.toggle('darkmodeinvert');
    body.classList.toggle('light-mode');
    nav.classList.toggle('navbar-dark');
    
    homeToggle.classList.toggle('text-white');
    homeToggle.classList.toggle('text-black');

    aboutToggle.classList.toggle('text-white');
    aboutToggle.classList.toggle('text-black');

    contactToggle.classList.toggle('text-white');
    contactToggle.classList.toggle('text-black');

    prodToggle.classList.toggle('text-white');
    prodToggle.classList.toggle('text-black');

    instaToggle.classList.toggle('text-white');
    instaToggle.classList.toggle('text-black');

    emailToggle.classList.toggle('text-white');
    emailToggle.classList.toggle('text-black');
};
modeToggle.addEventListener('click', toggleMode);

// fade and slide on scroll
const items = document.querySelectorAll('.card:not(:first-child)');

const options = {
  threshold: 0.5
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } else { // this else part is not compulsory
      entry.target.classList.remove('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options);

items.forEach(item => {
  observer.observe(item);
});