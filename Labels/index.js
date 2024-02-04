function sendMessage() {
  const btn = document.getElementById("submit-button");

  btn.outerHTML =
    '<p id="submitMessage" class="submit-message" aria-live="polite">Message sent! ✅</p>';

  document.getElementById("getFocus").focus();
}
