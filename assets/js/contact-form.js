/**
 * EmailJS Contact Form Handler
 * ----------------------------
 * Fill in the 3 values below from your EmailJS account (https://dashboard.emailjs.com):
 *   1. PUBLIC_KEY   -> Account > General > Public Key
 *   2. SERVICE_ID   -> Email Services > your service's Service ID
 *   3. TEMPLATE_ID  -> Email Templates > your template's Template ID
 *
 * Your EmailJS template should use these variable names (matching the form field "name" attributes):
 *   {{name}}, {{phone}}, {{subject}}, {{message}}
 */
(function () {
  "use strict";

  var PUBLIC_KEY = "jw0O0IpjdZTVa0yT4";
  var SERVICE_ID = "service_tlpf4i5";
  var TEMPLATE_ID = "template_2zdv3fo";

  if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: PUBLIC_KEY });
  }

  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var loadingEl = form.querySelector(".loading");
    var errorEl = form.querySelector(".error-message");
    var sentEl = form.querySelector(".sent-message");

    loadingEl.classList.add("d-block");
    errorEl.classList.remove("d-block");
    sentEl.classList.remove("d-block");
    errorEl.textContent = "";

    if (
      PUBLIC_KEY === "YOUR_PUBLIC_KEY" ||
      SERVICE_ID === "YOUR_SERVICE_ID" ||
      TEMPLATE_ID === "YOUR_TEMPLATE_ID"
    ) {
      loadingEl.classList.remove("d-block");
      errorEl.classList.add("d-block");
      errorEl.textContent =
        "Contact form is not configured yet. Add your EmailJS keys in assets/js/contact-form.js.";
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form).then(
      function () {
        loadingEl.classList.remove("d-block");
        sentEl.classList.add("d-block");
        form.reset();
        setTimeout(function () {
          sentEl.classList.remove("d-block");
        }, 5000);
      },
      function (error) {
        loadingEl.classList.remove("d-block");
        errorEl.classList.add("d-block");
        errorEl.textContent =
          (error && error.text) || "Something went wrong. Please try again.";
      }
    );
  });
})();
