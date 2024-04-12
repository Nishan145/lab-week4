const form = document.getElementById("messageForm");

async function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;
  console.log({ username, message });

  //post to message end point
  fetch("https://lab-week4-server.onrender.com/message", {
    method: "POST",
    body: JSON.stringify({ username, message }),
    //
    headers: { "Content-Type": "application/json" },
  });
  const messages = await fetch("https://lab-week4-server.onrender.com/", {
    method: "GET",
  });
  console.log(messages.json());
}

form.addEventListener("submit", handleSubmit);
