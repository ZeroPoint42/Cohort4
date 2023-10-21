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
};

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } else { // this else part is not compulsory
      entry.target.classList.remove('slide-in');
    }
  });
};

const observer = new IntersectionObserver(addSlideIn, options);

items.forEach(item => {
  observer.observe(item);
});

// ------ validation --------------
// get DOM
const form = document.getElementById('contact');
const submitButton = document.querySelector('.contact-send');
const successMessage = document.getElementById('form-submitted-msg');
const telNum = document.getElementById('pNumber');

// store elements in array
const formElements = [ ...form.elements ];

// check if all form elements are valid
const allInputsValid = () => {
  const valid = formElements.every((element) => {
    if (element.nodeName === 'SELECT') {
      return element.value !== 'Please select an option'
    } else {
      return element.checkValidity()
    }
  });
  return valid
};

// handle changes to any form element
const handleChange = () => {
  // iterate each element
  formElements.forEach((element) => {
    // If the element is invalid and is not a button, style it with a red border and red text
    if (!element.checkValidity()
          && element.nodeName !== 'BUTTON'
    ) {
      element.style.borderColor = 'red';
      element.nextElementSibling.style.color = 'red';
      element.nextElementSibling.style.display = 'block';
      element.previousElementSibling.style.color = 'red';
    }

    // If the element is valid, reset its style to the original colors
    // The conditions are the same as above for excluding certain elements
    if (element.checkValidity()
          && element.nodeName !== 'BUTTON'
    ) {
      element.style.borderColor = 'white';
      // element.nextElementSibling.style.color = 'red';
      element.nextElementSibling.style.display = 'none';
      element.previousElementSibling.style.color = '';
    }
  });

  // If all form elements are valid, enable the submit button; otherwise, disable it
  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '');
  } else {
    submitButton.setAttribute('disabled', '');
  }
};
// handle form submission
const handleSubmit = (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // If all form elements are valid after the form submission, display a success message, reset the form, and disable the submit button
  if (allInputsValid()) {
    successMessage.style.display = 'block';
    form.reset();
    submitButton.setAttribute('disabled', '');

    // Hide the success message after 2 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 2000)
  };
};

function phoneFormat(input) {//returns (###) ###-####
    input = input.replace(/\D/g,'');
    var size = input.length;
    if (size>0) {input="("+input}
    if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
    if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
    return input;
}


// Add event listener to each form element
formElements.forEach((element) => {
  element.addEventListener('change', handleChange);
});

// Add submit listener to the form
form.addEventListener('submit', (e) => handleSubmit(e));