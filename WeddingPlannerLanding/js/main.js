document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitContactForm();
  });
});

function submitContactForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const requestBody = {
    name: name,
    email: email,
    message: message,
  };

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Message sent successfully!");
      } else {
        alert("Error sending message. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error sending message. Please try again.");
    });
}