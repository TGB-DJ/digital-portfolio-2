// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Scroll reveal animation
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

// EmailJS contact form
(function () {
  emailjs.init("NnoZLTOA3qauqD3L4"); // Your Public Key
})();

function sendEmail(event) {
  event.preventDefault();

  emailjs.sendForm('service_c170cxq', 'template_1dut8a6', '#contact-form')
    .then(() => {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.error("❌ Failed:", error);
      alert("❌ Failed to send. Please try again.");
    });
}
