const messageList = document.getElementById("messageList");

async function getMessages() {
  const response = await fetch("https://lab-week4-server.onrender.com");
  return await response.json();
}

//function to display message
async function displayMessages() {
  const messages = await getMessages();
  messageList.innerHTML = "";
  messages.forEach(function (message) {
    const listItem = document.createElement("li");
    listItem.textContent = message.username + ": " + message.message;
    messageList.appendChild(listItem);
  });
}

await displayMessages();

document
  .getElementById("messageForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const message = event.target.elements.message.value;
    const newMessage = { username, message };

    await fetch("https://lab-week4-server.onrender.com/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });
  });
