(function () {
  // Mobile nav
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // Notify placeholder (no backend)
  const form = document.getElementById("notify-form");
  const msg = document.getElementById("notify-msg");
  const email = document.getElementById("notify-email");
  if (!form || !msg || !email) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = (email.value || "").trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      form.classList.remove("ok");
      msg.textContent = "Enter a valid work email. Notify is a local placeholder for now.";
      email.focus();
      return;
    }
    form.classList.add("ok");
    msg.textContent =
      "Thanks — noted locally. Launch notify is not connected to a server yet.";
    email.value = "";
  });
})();
