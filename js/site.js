(function () {
  var menuBtn = document.querySelector("[data-menu]");
  var mobile = document.querySelector("[data-mobile]");
  if (menuBtn && mobile) {
    menuBtn.addEventListener("click", function () {
      var open = mobile.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.textContent = open ? "Close" : "Menu";
    });
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobile.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "Menu";
      });
    });
  }

  document.querySelectorAll("[data-acc]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var disc = btn.parentElement;
      var open = disc.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  var form = document.querySelector("#quote-form");
  var captchaStarted = false;
  function loadCaptcha() {
    if (captchaStarted) return;
    captchaStarted = true;
    window.cfRecaptchaLoaded = function () {
      var el = document.getElementById("cf-recaptcha");
      if (!window.grecaptcha || !el || el.childElementCount) return;
      window.grecaptcha.render(el, {
        sitekey: "6LdU3CgUAAAAAB0nnFM3M3T0sy707slYYU51RroJ",
        callback: function () {
          document.getElementById("recaptcha_visible").value = "1";
          var err = document.querySelector("[data-form-error]");
          if (err) err.hidden = true;
        },
        "expired-callback": function () {
          document.getElementById("recaptcha_visible").value = "";
        },
      });
    };
    var s = document.createElement("script");
    s.src = "https://www.google.com/recaptcha/api.js?onload=cfRecaptchaLoaded&render=explicit";
    s.async = true;
    document.body.appendChild(s);
  }
  if (form) {
    form.addEventListener("focusin", loadCaptcha);
    form.addEventListener("submit", function (event) {
      var honey = form.querySelector('[name="website"]');
      if (honey && honey.value) {
        event.preventDefault();
        return;
      }
      var token = document.getElementById("recaptcha_visible");
      if (!token || token.value !== "1") {
        event.preventDefault();
        loadCaptcha();
        var err = document.querySelector("[data-form-error]");
        if (err) {
          err.hidden = false;
          err.textContent = "Please verify that you are human before sending.";
        }
      }
    });
  }
})();
