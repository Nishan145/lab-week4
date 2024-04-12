const form = document.getElementById("messageForm");

function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;
  console.log({ username, message });
  fetch("https://lab-week4-server.onrender.com", {
    method: "GET",
    body: JSON.stringify({ username, message }),
    headers: { "Content-Type": "application/json" },
  });
}
form.addEventListener("submit", handleSubmit);
