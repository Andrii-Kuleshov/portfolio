const enBtn = document.getElementById("lang-en");
const uaBtn = document.getElementById("lang-ua");

const heroText = document.getElementById("hero-text");
const aboutTitle = document.getElementById("about-title");
const skillsTitle = document.getElementById("skills-title");
const projectsTitle = document.getElementById("projects-title");
const contactTitle = document.getElementById("contact-title");

const aboutText1 = document.getElementById("about-text-1");
const aboutText2 = document.getElementById("about-text-2");
const aboutText3 = document.getElementById("about-text-3");

const projectTitle = document.getElementById("project-title");
const projectText = document.getElementById("project-text");
const projectBtn = document.getElementById("project-btn");

enBtn.onclick = function () {

enBtn.classList.add("lang-active");
uaBtn.classList.remove("lang-active");

heroText.textContent =
"Self-taught Frontend Developer building responsive websites with HTML and CSS.";

aboutTitle.textContent = "About";
skillsTitle.textContent = "Skills";
projectsTitle.textContent = "Projects";
contactTitle.textContent = "Contact";

projectTitle.textContent = "Credit Card Payment Form";
projectText.textContent =
"A responsive credit card checkout form built with semantic HTML and CSS.";
projectBtn.textContent = "View Project";
};


uaBtn.onclick = function () {

uaBtn.classList.add("lang-active");
enBtn.classList.remove("lang-active");

heroText.textContent =
"Самоучка Frontend Developer, який створює адаптивні сайти за допомогою HTML та CSS.";

aboutTitle.textContent = "Про мене";
skillsTitle.textContent = "Навички";
projectsTitle.textContent = "Проєкти";
contactTitle.textContent = "Контакти";

aboutText1.textContent =
"Я самоучка Frontend Developer, який зараз вивчає HTML, CSS та основи веб-розробки.";
aboutText2.textContent =
"Зараз я проходжу Responsive Web Design Certification, після чого планую вивчати JavaScript, щоб поглибити свої навички frontend розробки.";
aboutText3.textContent =
"Я відкритий до фріланс-проєктів та junior frontend можливостей, де зможу отримати реальний досвід і продовжити розвиватися як розробник.";

projectTitle.textContent = "Форма оплати кредитною карткою";
projectText.textContent =
"Адаптивна форма оплати кредитною карткою, створена з використанням семантичного HTML та CSS.";
projectBtn.textContent = "Переглянути проєкт";
};
