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
    headers: { "Content-Type": "application/json" },
  });
  const messageElement = document.createElement("li");
  messageElement.innerText = `${username}; ${message}`;
  document.getElementById("messageList").appendChild(messageElement);
}
async function fetchMessages() {
  const messages = await fetch("https://lab-week4-server.onrender.com/", {
    method: "GET",
  });
  const messagesJSON = await messages.json();

  const messageList = document.getElementById("messageList");
  messageList.innerHTML = "";

  messagesJSON.forEach((message) => {
    const messageElement = document.createElement("li");
    messageElement.innerText = `${message.username}; ${message.message}`;
    messageList.appendChild(messageElement);
  });
}

form.addEventListener("submit", handleSubmit);
window.addEventListener("load", fetchMessages);
