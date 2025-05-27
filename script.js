// Dark/Light mode toggle - override system preference
const toggleBtn = document.getElementById("darkModeToggle");

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--bg-color", "#121212");
    document.documentElement.style.setProperty("--text-color", "#e0e0e0");
    document.documentElement.style.setProperty("--accent-color", "#80d8ff");
    document.documentElement.style.setProperty("--btn-bg", "#80d8ff");
    document.documentElement.style.setProperty("--btn-hover", "#4fb3e3");
    document.documentElement.style.setProperty("--input-bg", "#333333");
    document.documentElement.style.setProperty("--input-border", "#80d8ff");
  } else {
    document.documentElement.style.setProperty("--bg-color", "#e0f7fa");
    document.documentElement.style.setProperty("--text-color", "#022c43");
    document.documentElement.style.setProperty("--accent-color", "#0288d1");
    document.documentElement.style.setProperty("--btn-bg", "#0288d1");
    document.documentElement.style.setProperty("--btn-hover", "#026ca0");
    document.documentElement.style.setProperty("--input-bg", "#ffffff");
    document.documentElement.style.setProperty("--input-border", "#0288d1");
  }
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(getSystemTheme());
  }
}

function toggleTheme() {
  const currentBg = getComputedStyle(document.documentElement).getPropertyValue("--bg-color").trim();
  if (currentBg === "#e0f7fa") {
    applyTheme("dark");
    localStorage.setItem("theme", "dark");
  } else {
    applyTheme("light");
    localStorage.setItem("theme", "light");
  }
}

toggleBtn.addEventListener("click", toggleTheme);

// Load theme on page load
loadTheme();

// Contact form using EmailJS
emailjs.send("service_c170cxq", "template_1dut8a6", {
  from_name: "Chirenjeevi",
  to_name: "DJ",
  message: "This is a test message",
  reply_to: "chirenjeev7616@gmail.com"
})
.then(() => {
  alert("Message sent successfully!");
})
.catch((error) => {
  alert("Failed to send message. Please try again later.");
  console.error(error);
});
