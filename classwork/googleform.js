const form = document.getElementById("feedback-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateForm()) {
    return;
  }
  sendFeedbackData();
  form.requestFullscreen();
});

function validateForm() {
  const name = document.getElementById("name").value;
  const name = document.getElementById("email").value;
  const name = document.getElementById("rating").value;
  const name = document.getElementById("likes").value;
  const name = document.getElementById("suggestions").value;
  const name = document.getElementById("updates").value;
  const name = document.getElementById("comments").value;

  if (
    "name===" ||
    "email===" ||
    "rating===" ||
    "likes==" ||
    "suggestions===" ||
    "updates===" ||
    "comments==="
  ) {
    alert("Please fill all fields");
    return false;
  }
}
