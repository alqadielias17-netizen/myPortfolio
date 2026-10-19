// ---------- 1. Footer year ----------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---------- 2. Translations (English / Arabic) ----------
const translations = {
  en: {
    title: "Home | My Portfolio",
    nav_home: "Home",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: "Hi, I'm <span>Elias Ayoub Alqadi</span>",
    hero_role: "Full Stack Developer",
    hero_bio:
      "I'm a passionate Full Stack Developer and Software Engineering graduate who enjoys building modern, " +
      "responsive, and user-friendly web applications. I work with HTML, CSS, JavaScript, Angular, Bootstrap, " +
      "Node.js, Express.js, and .NET. I'm also developing my skills in database management, RESTful APIs, and " +
      "problem-solving. I'm always eager to learn new technologies and turn ideas into practical solutions.",
    btn_projects: "View Projects",
    btn_contact: "Contact Me",
    skills_title: "My <span>Skills</span>",
    projects_title: "My <span>Projects</span>",
    expense_tracker_title: "Expense Tracker",
    expense_tracker_desc:
      "The project solves common expense management challenges by simplifying expense tracking and organization, " +
      "reducing data entry errors through input validation, and enabling users to filter, sort, and analyze " +
      "expenses by category and date. It also provides visual summaries of spending and CSV export functionality, " +
      "helping users monitor their spending habits and manage their personal finances more effectively.",
    project_two: "Project Two",
    project_three: "Project Three",
    project_desc: "A short description of what this project does and the problem it solves.",
    link_demo: "Live Demo",
    link_code: "Code",
    contact_title: "Contact <span>Me</span>",
    contact_subtitle:
      "Have a question or a project in mind? Reach out using the details below or fill out the form and I'll get back to you soon.",
    info_title: "Contact Information",
    label_email: "Email",
    label_phone: "Phone",
    label_location: "Location",
    location_value: "Amman, Jordan",
    copy: "Copy",
    copied: "Copied!",
    failed: "Failed",
    form_name: "Name",
    form_subject: "Subject",
    form_message: "Message",
    ph_name: "Your name",
    ph_subject: "What is this about?",
    ph_message: "Write your message here...",
    btn_send: "Send Message",
    sending: "Sending...",
    err_name: "Please enter your name.",
    err_email_empty: "Please enter your email.",
    err_email_invalid: "Please enter a valid email address.",
    err_subject: "Please enter a subject.",
    err_message: "Your message should be at least 10 characters.",
    msg_success: "Thank you, {name}! Your message has been sent.",
    msg_fail: "Sorry, something went wrong. Please try again or email me directly.",
    msg_not_connected: "The form is not connected yet. Please email me directly.",
    footer_name: "Elias Ayoub Alqadi",
    lang_button: "العربية"
  },

  ar: {
    title: "الرئيسية | معرض أعمالي",
    nav_home: "الرئيسية",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_contact: "تواصل",
    hero_title: "مرحباً، أنا <span>إلياس أيوب القاضي</span>",
    hero_role: "مطوّر ويب متكامل (Full Stack)",
    hero_bio:
      "أنا مطوّر ويب متكامل وخريج هندسة برمجيات، أستمتع ببناء تطبيقات ويب حديثة ومتجاوبة وسهلة الاستخدام. " +
      "أعمل بتقنيات HTML وCSS وJavaScript وAngular وBootstrap وNode.js وExpress.js و.NET. " +
      "كما أطوّر مهاراتي في إدارة قواعد البيانات وواجهات RESTful API وحل المشكلات. " +
      "أحب تعلّم التقنيات الجديدة وتحويل الأفكار إلى حلول عملية.",
    btn_projects: "عرض المشاريع",
    btn_contact: "تواصل معي",
    skills_title: "<span>مهاراتي</span>",
    projects_title: "<span>مشاريعي</span>",
     expense_tracker_title: "متتبع المصاريف",
    expense_tracker_desc:
       "يحل هذا المشروع تحديات إدارة المصاريف الشائعة من خلال تبسيط تتبع المصاريف وتنظيمها، " +
      "وتقليل أخطاء إدخال البيانات عبر التحقق من المدخلات، وتمكين المستخدمين من تصفية المصاريف " +
      "وفرزها وتحليلها حسب الفئة والتاريخ. كما يوفر ملخصات مرئية للإنفاق وميزة تصدير CSV، " +
      "مما يساعد المستخدمين على مراقبة عاداتهم في الإنفاق وإدارة أموالهم الشخصية بفعالية أكبر.",
    project_two: "المشروع الثاني",
    project_three: "المشروع الثالث",
    project_desc: "وصف مختصر لما يفعله هذا المشروع والمشكلة التي يحلّها.",
    link_demo: "معاينة مباشرة",
    link_code: "الكود",
    contact_title: "تواصل <span>معي</span>",
    contact_subtitle:
      "لديك سؤال أو فكرة مشروع؟ تواصل معي عبر البيانات أدناه أو عبر النموذج وسأرد عليك قريباً.",
    info_title: "معلومات الاتصال",
    label_email: "البريد الإلكتروني",
    label_phone: "الهاتف",
    label_location: "الموقع",
    location_value: "عمان، الأردن",
    copy: "نسخ",
    copied: "تم النسخ!",
    failed: "فشل",
    form_name: "الاسم",
    form_subject: "الموضوع",
    form_message: "الرسالة",
    ph_name: "اسمك",
    ph_subject: "ما موضوع رسالتك؟",
    ph_message: "اكتب رسالتك هنا...",
    btn_send: "إرسال الرسالة",
    sending: "جارٍ الإرسال...",
    err_name: "الرجاء إدخال اسمك.",
    err_email_empty: "الرجاء إدخال بريدك الإلكتروني.",
    err_email_invalid: "الرجاء إدخال بريد إلكتروني صحيح.",
    err_subject: "الرجاء إدخال الموضوع.",
    err_message: "يجب أن تحتوي رسالتك على 10 أحرف على الأقل.",
    msg_success: "شكراً {name}! تم إرسال رسالتك.",
    msg_fail: "عذراً، حدث خطأ ما. حاول مرة أخرى أو راسلني مباشرة.",
    msg_not_connected: "النموذج غير مفعّل بعد. الرجاء مراسلتي مباشرة.",
    footer_name: "إلياس أيوب القاضي",
    lang_button: "English"
  }
};

let currentLang = "en";

try {
  if (localStorage.getItem("lang") === "ar") {
    currentLang = "ar";
  }
} catch (e) {
  // localStorage may be blocked; use English
}

function t(key) {
  return translations[currentLang][key];
}

const themeToggle = document.getElementById("themeToggle");

try {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }
} catch (e) {
}

function updateThemeButton() {
  if (!themeToggle) return;
  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
}

if (themeToggle) {
  updateThemeButton();

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");

    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch (e) {
      // ignore storage errors
    }

    updateThemeButton();
  });
}

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main[id], section[id]");

function setActiveLink(id) {
  navLinks.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + id);
  });
}

// ---------- 5. Back-to-top button ----------
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------- 6. Scroll handler (used by 4 and 5) ----------
function onScroll() {
  let current = "home";

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  // At the very bottom of the page, activate the last section
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) {
    current = sections[sections.length - 1].id;
  }

  setActiveLink(current);

  if (backToTop) {
    backToTop.classList.toggle("show", window.scrollY > 400);
  }
}

window.addEventListener("scroll", onScroll);
onScroll();

// ---------- 7. Copy buttons (email, phone) ----------
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  // Fallback for file:// pages and older browsers
  return new Promise(function (resolve, reject) {
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.select();

    const ok = document.execCommand("copy");
    document.body.removeChild(temp);

    if (ok) {
      resolve();
    } else {
      reject(new Error("Copy failed"));
    }
  });
}

document.querySelectorAll(".copy-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const target = document.getElementById(btn.dataset.copy);
    if (!target) return;

    copyText(target.textContent.trim())
      .then(function () {
        btn.textContent = t("copied");
      })
      .catch(function () {
        btn.textContent = t("failed");
      })
      .finally(function () {
        setTimeout(function () {
          btn.textContent = t("copy");
        }, 1500);
      });
  });
});

// ---------- 8. Contact form ----------

// Paste your Formspree endpoint here (from formspree.io)
const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxxx";

const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  document.getElementById(fieldId + "Error").textContent = message;
  field.parentElement.classList.toggle("invalid", message !== "");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showStatus(text, isError) {
  successMsg.textContent = text;
  successMsg.style.color = isError ? "var(--error)" : "";
}

function validateForm(data) {
  let valid = true;

  if (data.name === "") {
    showError("name", t("err_name"));
    valid = false;
  } else {
    showError("name", "");
  }

  if (data.email === "") {
    showError("email", t("err_email_empty"));
    valid = false;
  } else if (!isValidEmail(data.email)) {
    showError("email", t("err_email_invalid"));
    valid = false;
  } else {
    showError("email", "");
  }

  if (data.subject === "") {
    showError("subject", t("err_subject"));
    valid = false;
  } else {
    showError("subject", "");
  }

  if (data.message.length < 10) {
    showError("message", t("err_message"));
    valid = false;
  } else {
    showError("message", "");
  }

  return valid;
}

if (form) {
  const submitBtn = form.querySelector(".submit-btn");

  // Clear a field's error as soon as the user starts fixing it
  ["name", "email", "subject", "message"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", function () {
      showError(id, "");
    });
  });

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    showStatus("", false);

    const data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    if (!validateForm(data)) {
      return;
    }

    // Make sure the endpoint was replaced with a real one
    if (FORM_ENDPOINT.includes("xxxxxxxx")) {
      showStatus(t("msg_not_connected"), true);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = t("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      showStatus(t("msg_success").replace("{name}", data.name), false);
      form.reset();
    } catch (error) {
      showStatus(t("msg_fail"), true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t("btn_send");
    }
  });
}

// ---------- 9. Language switcher ----------
const langToggle = document.getElementById("langToggle");

function applyLanguage(lang) {
  currentLang = lang;

  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    // ignore storage errors
  }

  // Page language and direction
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t("title");

  // Translate all marked elements (the strings above are our own, so innerHTML is safe)
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.innerHTML = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  if (langToggle) {
    langToggle.textContent = t("lang_button");
  }

  // Clear old form messages so they don't stay in the previous language
  if (form) {
    ["name", "email", "subject", "message"].forEach(function (id) {
      showError(id, "");
    });
    showStatus("", false);
  }
}

if (langToggle) {
  langToggle.addEventListener("click", function () {
    applyLanguage(currentLang === "en" ? "ar" : "en");
  });
}

// Apply the saved language when the page loads
applyLanguage(currentLang);