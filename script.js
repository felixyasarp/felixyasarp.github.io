/* JavaScript code */

// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');
footer.innerHTML = &copy; ${currentYear} Prakash Yasarp;

// Change the background color of the header when scrolled
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
if (window.pageYOffset > 100) {
header.style.backgroundColor = '#333';
} else {
header.style.backgroundColor = 'transparent';
}
});

// Open and close the mobile navigation menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuBtn.addEventListener('click', function() {
mobileMenu.classList.toggle('open');
});

// Display a message when the form is submitted
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function(event) {
event.preventDefault();
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
alert(Thank you for your message, ${nameInput.value}! We will get back to you at ${emailInput.value} as soon as possible.);
nameInput.value = '';
emailInput.value = '';
messageInput.value = '';
});