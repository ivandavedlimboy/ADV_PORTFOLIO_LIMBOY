
const homePage = document.getElementById('HomePage');
const contactPage = document.getElementById('ContactPage');
const aboutPage = document.getElementById('AboutPage');
const homeButton = document.getElementById('Home');
const aboutButton = document.getElementById('About');
const contactButton = document.getElementById('Contact');
const EnterButton = document.getElementById('EnterBtn');

function showHomePage() {
  homePage.style.display = 'block';
  aboutPage.style.display = 'none';
  contactPage.style.display = 'none';
    setTimeout(function() {
    contactPage.style.transition = 'opacity 0.5s';
    contactPage.style.opacity = 1;
  }, 50);
}

function showAboutPage() {
  homePage.style.display = 'none';
  aboutPage.style.display = 'block';
  contactPage.style.display = 'none';
    setTimeout(function() {
    contactPage.style.transition = 'opacity 0.5s';
    contactPage.style.opacity = 1;
  }, 50);
}

function showContactPage() {
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  contactPage.style.display = 'block';
    setTimeout(function() {
    contactPage.style.transition = 'opacity 0.5s';
    contactPage.style.opacity = 1;
  }, 50);
}

homeButton.addEventListener('click', (event) => {
  event.preventDefault();
  showHomePage();
});

aboutButton.addEventListener('click', (event) => {
  event.preventDefault();
  showAboutPage();
});

contactButton.addEventListener('click', (event) => {
  event.preventDefault();
  showContactPage();
});

EnterButton.addEventListener('click', (event) => {
  event.preventDefault();
  showAboutPage();
});

showHomePage();
