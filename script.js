(function() {
    emailjs.init("uHhbDTil9BGUTFpRc");
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("emailMeGenard2468", "template_swg4tv2", this)
      .then(function() {
        alert("Message sent! I'll get back to you soon.");
      }, function(error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".about-text");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab");
  
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((content) => content.classList.remove("active"));

        tab.classList.add("active");
        document.querySelector(`.about-text[data-content="${target}"]`).classList.add("active");
      });
    });
  });  
