<script setup>
import { ref } from "vue";
import { state } from "../store/state";

const messages = ref([
  {
    sender: "ai",
    text: `Hello ${state.student.name}! I am your SkillBridge AI Career & Wallet Assistant. How can I help you optimize your profile or Stellar testnet credentials today?`,
  },
]);

const userQuery = ref("");
const typing = ref(false);

function sendMessage() {
  if (!userQuery.value.trim()) return;
  const q = userQuery.value.trim();
  messages.value.push({ sender: "user", text: q });
  userQuery.value = "";
  typing.value = true;

  setTimeout(() => {
    typing.value = false;
    let reply = "Based on your verified skills, I recommend focusing on building a Stellar Smart Contract project with Soroban to enhance your wallet score!";
    if (q.toLowerCase().includes("skill")) {
      reply = `You currently have ${state.skills.length} skills logged in your matrix. Adding TypeScript and Soroban Smart Contracts would boost your career track score!`;
    } else if (q.toLowerCase().includes("wallet") || q.toLowerCase().includes("xlm")) {
      reply = `Your Stellar wallet balance is ${state.wallet.balance} XLM. You can request additional testnet tokens from the Stellar Friendbot!`;
    } else if (q.toLowerCase().includes("certificate")) {
      reply = `You have ${state.certificates.length} verified credentials! High-demand certificates in ${state.student.course} include Google Cloud and GenAI Developer.`;
    }

    messages.value.push({ sender: "ai", text: reply });
  }, 1000);
}
</script>

<template>
  <div class="ai-page">
    <div class="header-row">
      <h2>SkillBridge AI Career Assistant 🤖</h2>
      <p>Instant guidance on career development, skill enhancement, and Stellar web3 integration</p>
    </div>

    <div class="chat-container">
      <div class="messages-list">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          class="chat-bubble"
          :class="msg.sender"
        >
          <div class="avatar-tag">{{ msg.sender === 'ai' ? '🤖' : '👤' }}</div>
          <div class="bubble-text">{{ msg.text }}</div>
        </div>

        <div v-if="typing" class="typing-indicator">
          🤖 AI is thinking...
        </div>
      </div>

      <form @submit.prevent="sendMessage" class="chat-input-form">
        <input v-model="userQuery" type="text" placeholder="Ask AI about skills, career track, or Stellar wallet..." required />
        <button type="submit" class="btn-send">Send 🚀</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.ai-page { display: flex; flex-direction: column; gap: 1.5rem; }
.header-row h2 { font-size: 1.6rem; font-weight: 800; }
.header-row p { font-size: 0.9rem; color: #64748b; }

.chat-container {
  background: white; border-radius: 20px; border: 1px solid #e2e8f0;
  display: flex; flex-direction: column; height: 550px; overflow: hidden;
}

.messages-list {
  flex: 1; padding: 1.5rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem;
}

.chat-bubble { display: flex; gap: 0.75rem; max-width: 80%; }
.chat-bubble.user { margin-left: auto; flex-direction: row-reverse; }

.avatar-tag {
  width: 34px; height: 34px; border-radius: 10px; background: #f1f5f9;
  display: flex; align-items: center; justify-content: center; font-size: 1rem;
}

.bubble-text {
  background: #f8fafc; padding: 0.85rem 1.1rem; border-radius: 14px;
  font-size: 0.9rem; color: #0f172a; line-height: 1.4;
}

.chat-bubble.user .bubble-text {
  background: #6c5ce7; color: white;
}

.typing-indicator { font-size: 0.82rem; color: #94a3b8; font-style: italic; }

.chat-input-form {
  padding: 1rem; border-top: 1px solid #e2e8f0; display: flex; gap: 0.75rem;
}

.chat-input-form input {
  flex: 1; padding: 0.8rem 1rem; border-radius: 12px; border: 1px solid #cbd5e1;
  font-size: 0.9rem; outline: none;
}

.btn-send {
  background: #6c5ce7; color: white; border: none; padding: 0.8rem 1.5rem;
  border-radius: 12px; font-weight: 700; cursor: pointer;
}
</style>
