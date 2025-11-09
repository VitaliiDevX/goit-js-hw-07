const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const { elements } = e.currentTarget;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (!email || !password) {
    return alert("All form fields must be filled in");
  }

  console.log({
    email,
    password,
  });

  e.currentTarget.reset();
}
