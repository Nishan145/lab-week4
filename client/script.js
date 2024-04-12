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
}
async function fetchMessages() {
  const messages = await fetch("https://lab-week4-server.onrender.com/", {
    method: "GET",
  });
  const messagesJSON = await messages.json();
  const messageElement = document.createElement("li");
  messageElement.innerText = `${messagesJSON[0].username}; ${messagesJSON[0].message}`;
  document.getElementById("messageList").appendChild(messageElement);
}

form.addEventListener("submit", handleSubmit);
window.addEventListener("load", fetchMessages);
