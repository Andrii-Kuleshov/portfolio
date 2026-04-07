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

const project2Title = document.getElementById("project2-title");
const project2Text = document.getElementById("project2-text");
const project2Btn = document.getElementById("project2-btn");

const project3Title = document.getElementById("project3-title");
const project3Text = document.getElementById("project3-text");
const project3Btn = document.getElementById("project3-btn");


enBtn.onclick = function () {

  enBtn.classList.add("lang-active");
  uaBtn.classList.remove("lang-active");

  heroText.textContent =
  "Self-taught Frontend Developer building responsive websites with HTML and CSS.";

  aboutTitle.textContent = "About";
  skillsTitle.textContent = "Skills";
  projectsTitle.textContent = "Projects";
  contactTitle.textContent = "Contact";

  aboutText1.textContent =
  "I'm a self-taught Frontend Developer currently learning HTML, CSS and core web fundamentals. I like building websites and improving how they look and behave.";
  aboutText2.textContent =
  "Now I'm completing the Responsive Web Design Certification and after that I plan to continue with JavaScript to deepen my frontend development skills.";
  aboutText3.textContent =
  "I'm open to freelance projects and junior frontend opportunities where I can gain real experience and continue growing as a developer.";

  projectTitle.textContent = "Credit Card Payment Form";
  projectText.textContent =
  "Responsive payment form with validation, input formatting, and improved user experience.";
  projectBtn.textContent = "View Project";
  
  project2Title.textContent = "Headphones Product Page";
  project2Text.textContent =
  "Product landing page with structured layout and seamless navigation to checkout flow.";
  project2Btn.textContent = "View Project";
  
  project3Title.textContent = "Mini Store";
  project3Text.textContent =
  "Small e-commerce application with cart functionality, quantity management, localStorage integration, and checkout flow.";
  project3Btn.textContent = "View Project";
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
  "Адаптивна форма оплати з валідацією, форматуванням введення та покращеним користувацьким досвідом.";
  projectBtn.textContent = "Переглянути проєкт";
  
  project2Title.textContent = "Сторінка товару (навушники)";
  project2Text.textContent =
  "Лендінг сторінка товару зі структурованим layout та переходом до процесу оформлення замовлення.";
  project2Btn.textContent = "Переглянути проєкт";
  
  project3Title.textContent = "Міні-магазин";
  project3Text.textContent =
  "Невеликий e-commerce додаток з кошиком, керуванням кількістю товарів, використанням localStorage та процесом оформлення замовлення.";
  project3Btn.textContent = "Переглянути проєкт";
};


const browserLang = navigator.language || navigator.userLanguage;

if (browserLang.startsWith("uk")) {
  uaBtn.click();
} else {
  enBtn.click();
}
