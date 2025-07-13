function showSection(sectionId) {
  const sections = document.querySelectorAll("main > section");
  sections.forEach((sec) => sec.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
}

function goToUserDashboard() {
  const nickname = prompt("Enter your nickname:");
  if (nickname) {
    document.getElementById("nicknameDisplay").textContent = nickname;
    showSection("user-dashboard");
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatWindow = document.getElementById("chatWindow");
  const message = input.value.trim();
  if (message !== "") {
    const msgDiv = document.createElement("div");
    msgDiv.className = "message you";
    msgDiv.textContent = `You: ${message}`;
    chatWindow.appendChild(msgDiv);
    input.value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Simulated stranger reply
    setTimeout(() => {
      const reply = document.createElement("div");
      reply.className = "message stranger";
      reply.textContent = "Stranger: Thanks for sharing your feelings.";
      chatWindow.appendChild(reply);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1000);
  }
}
