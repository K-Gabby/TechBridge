  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Get individual form fields
  const name = formData.get("name");
  const email = formData.get("email");
  const rating = formData.get("rating");
  const likes = formData.get("likes");
  const suggestions = formData.get("suggestions");
  const updates = formData.get("updates");
  const comments = formData.get("comments");

  // Validate the form fields
  if (
    name === "" ||
    email === "" ||
    rating === "" ||
    likes == "" ||
    suggestions === "" ||
    updates === "" ||
    comments === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  // Submit the form data to the server
  fetch("/submit-feedback", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Feedback submitted successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Error submitting feedback. Please try again.");
    });
  });
