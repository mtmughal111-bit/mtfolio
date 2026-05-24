const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click",() =>{
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click",() => menuOpenButton.click
());

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
});


    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });



  document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Stop normal form submission

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        window.location.href = "thankyou.html"; // Replace with your actual file path
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      alert("There was an error sending your message.");
    }
  });


  

