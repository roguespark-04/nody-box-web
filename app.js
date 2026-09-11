(function () {
  const form = document.getElementById("notify-form");
  const msg = document.getElementById("notify-msg");
  const email = document.getElementById("notify-email");
  if (!form || !msg || !email) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = (email.value || "").trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      form.classList.remove("ok");
      msg.textContent = "Enter a valid email — notify is a local placeholder for now.";
      email.focus();
      return;
    }
    form.classList.add("ok");
    msg.textContent =
      "Thanks — noted locally. Launch notify isn’t wired to a server yet.";
    email.value = "";
  });
})();
