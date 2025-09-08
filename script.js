// Language switching functionality
let currentLanguage = "en";

const translations = {
  en: {
    title: "Senior Software Engineer",
    description:
      "Experienced .NET Developer with 5 years in software design and development. I enjoy solving complex problems, collaborating with others, and continuously learning. Passionate about building impactful, high-quality software in a growth-oriented environment.",
    coreSkills: "Core Skills",
    languages: "Languages",
    backend: "Backend",
    frontend: "Frontend",
    cloud: "Cloud",
    experiences: "Experiences",
    contactMe: "Contact me",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "your.email@example.com",
    subjectPlaceholder: "Subject of your message",
    messagePlaceholder: "Your message here...",
    emailSuccess:
      "Email client opened! Please send the email from your email application.",
    copyright: "© 2025 RAJAONAH Tiavina Handrianina. All rights reserved.",
    // Experience data
    experienceData: [
      {
        title: ".NET / Angular Developer",
        period: "Dec 2024 - Present",
        company: "Ezway Technology",
        descriptions: [
          "Designed, built and delivered new backend solutions using .NET 8, C# and Web APIs.",
          "Migrated Angular JS and .NET Framework project into Angular 19 and .NET Core 8.",
          "Designed, development and deployment of new features in existing projects using .NET 8, Native PHP, JQuery and Vue2.",
          "Refactored and improved existing applications.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Oct 2021 - Dec 2024",
        company: "Pulse - AXIAN GROUP",
        descriptions: [
          "Designed, built and delivered new backend solutions using .NET 7, .NET 8, PHP Symfony 5.4.",
          "Participated in development of new features in existing projects using Angular 12.",
          "Designed and developed microservices for Axian Group Application.",
          "Refactored and improved existing applications.",
        ],
      },
      {
        title: "Web Developer",
        period: "Feb 2020 - Jun 2021",
        company: "GECKO SARL - Madagascar",
        descriptions: [
          "Designed, built and delivered web applications using Symfony 4.4.",
          "Designed and developed new features in existing project using Symfony 4.4.",
          "Integrated online payment systems, including Mobile Money and banking solutions",
        ],
      },
    ],
  },
  fr: {
    title: "Ingénieur Logiciel Senior",
    description:
      "Développeur .NET expérimenté avec 5 ans de conception et développement logiciel. J'aime résoudre des problèmes complexes, collaborer avec les autres et apprendre continuellement. Passionné par la création de logiciels percutants et de haute qualité dans un environnement axé sur la croissance.",
    coreSkills: "Compétences Principales",
    languages: "Langages",
    backend: "Backend",
    frontend: "Frontend",
    cloud: "Cloud",
    experiences: "Expériences",
    contactMe: "Contactez-moi",
    name: "Nom",
    email: "Email",
    subject: "Sujet",
    message: "Message",
    sendMessage: "Envoyer le Message",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "votre.email@exemple.com",
    subjectPlaceholder: "Sujet de votre message",
    messagePlaceholder: "Votre message ici...",
    emailSuccess:
      "Client email ouvert! Veuillez envoyer l'email depuis votre application email.",
    copyright: "© 2025 RAJAONAH Tiavina Handrianina. Tous droits réservés.",
    // Experience data in French
    experienceData: [
      {
        title: "Développeur .NET / Angular",
        period: "Déc 2024 - Présent",
        company: "Ezway Technology",
        descriptions: [
          "Conception, réalisation et déploiement de nouvelles solutions backend en utilisant .NET 8 C#.",
          "Migration d'un projet Angular JS et .NET Framework vers Angular 19 et .NET 8.",
          "Conception et développement de nouvelles fonctionnalités dans des projets existants en utilisant .NET 8, PHP natif, JQuery et Vue2.",
          "Refactorisation et optimisation d'applications existantes.",
        ],
      },
      {
        title: "Ingénieur d'Études et de Développement",
        period: "Oct 2021 - Déc 2024",
        company: "Pulse - AXIAN GROUP",
        descriptions: [
          "Conception, réalisation et déploiement de nouvelles solutions backend en utilisant .NET 7, .NET 8, Symfony 5.4 et Webman",
          "Développement de nouvelles fonctionnalités dans des projets existants utilisant Angular 12.",
          "Conception et développement de micro services pour les applications du groupe AXIAN.",
          "Refactorisation et optimisation d'applications existantes.",
        ],
      },
      {
        title: "Développeur Web",
        period: "Fév 2020 - Juin 2021",
        company: "GECKO S.A.R.L Madagascar",
        descriptions: [
          "Conception, réalisation et déploiement d'applications web avec Symfony 4.4.",
          "Conception et développement de nouvelles fonctionnalités dans des projets existants avec Symfony 4.4.",
          "Intégration de systèmes de paiement en ligne, incluant Mobile Money et solutions bancaires.",
        ],
      },
    ],
  },
};

function switchLanguage(lang) {
  currentLanguage = lang;

  // Update button states
  document.getElementById("lang-en").className =
    lang === "en"
      ? "px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      : "px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors";

  document.getElementById("lang-fr").className =
    lang === "fr"
      ? "px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      : "px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors";

  // Update content
  const t = translations[lang];

  // Update text content
  document.querySelector("h2").textContent = t.title;
  document.querySelector("p.text-center").textContent = t.description;
  document.querySelector("h3").textContent = t.coreSkills;
  document.querySelectorAll("h3")[1].textContent = t.experiences;
  document.querySelectorAll("h3")[2].textContent = t.contactMe;

  // Update skill categories
  document.querySelectorAll(".text-gray-400.mb-1")[0].textContent = t.languages;
  document.querySelectorAll(".text-gray-400.mb-1")[1].textContent = t.backend;
  document.querySelectorAll(".text-gray-400.mb-1")[2].textContent = t.frontend;
  document.querySelectorAll(".text-gray-400.mb-1")[3].textContent = t.cloud;

  // Update form labels
  document.querySelector('label[for="name"]').textContent = t.name;
  document.querySelector('label[for="email"]').textContent = t.email;
  document.querySelector('label[for="subject"]').textContent = t.subject;
  document.querySelector('label[for="message"]').textContent = t.message;

  // Update form placeholders
  document.getElementById("name").placeholder = t.namePlaceholder;
  document.getElementById("email").placeholder = t.emailPlaceholder;
  document.getElementById("subject").placeholder = t.subjectPlaceholder;
  document.getElementById("message").placeholder = t.messagePlaceholder;

  // Update button text
  document.querySelector('button[type="submit"]').textContent = t.sendMessage;

  // Update copyright
  document.querySelector("footer p").textContent = t.copyright;

  // Update experiences section
  updateExperiences(t.experienceData);
}

function updateExperiences(experienceData) {
  const experienceContainer = document.querySelector(".space-y-6");
  experienceContainer.innerHTML = "";

  experienceData.forEach((exp) => {
    const expDiv = document.createElement("div");
    expDiv.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="font-bold text-lg">${exp.title}</span>
        <span class="text-gray-400 text-sm">${exp.period}</span>
      </div>
      <div class="text-gray-400 mb-1">${exp.company}</div>
      ${exp.descriptions
        .map((desc) => `<div class="text-gray-300 text-sm">${desc}</div>`)
        .join("")}
    `;
    experienceContainer.appendChild(expDiv);
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Create email body
  const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

  // Create mailto link
  const mailtoLink = `mailto:rajaonahtiavina@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${emailBody}`;

  // Open email client
  window.location.href = mailtoLink;

  // Reset form
  this.reset();

  // Show success message
  const t = translations[currentLanguage];
  alert(t.emailSuccess);
});
