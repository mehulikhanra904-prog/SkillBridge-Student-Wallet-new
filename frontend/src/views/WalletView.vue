<script setup>
import { ref, computed } from "vue";
import { state, connectWallet, disconnectWallet, refreshWalletBalance, addActivity } from "../store/state";

const copied = ref(false);
const sendRecipient = ref("");
const sendAmount = ref("");
const sending = ref(false);
const sendStatus = ref("");

const shortAddress = computed(() => {
  if (!state.wallet.address) return "";
  return `${state.wallet.address.slice(0, 8)}...${state.wallet.address.slice(-8)}`;
});

function copyAddress() {
  if (!state.wallet.address) return;
  navigator.clipboard.writeText(state.wallet.address);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}

async function handleSend() {
  if (!sendRecipient.value.trim() || !sendAmount.value) {
    sendStatus.value = "Please enter a valid recipient address and amount.";
    return;
  }
  
  sending.value = true;
  sendStatus.value = "Initiating transaction via Freighter...";

  setTimeout(() => {
    sending.value = false;
    sendStatus.value = `Simulated transaction of ${sendAmount.value} XLM sent to ${sendRecipient.value.slice(0, 6)}...!`;
    addActivity("XLM Sent", `Sent ${sendAmount.value} XLM to ${sendRecipient.value.slice(0, 6)}...`, "purple");
    sendRecipient.value = "";
    sendAmount.value = "";
  }, 1500);
}
</script>

<template>
  <div class="wallet-page">
    <!-- TOP WALLET BANNER -->
    <div class="wallet-header-card">
      <div class="wallet-pass">
        <div class="pass-top">
          <div class="pass-brand">
            <div class="logo-box">S</div>
            <div>
              <strong>SkillBridge Pass</strong>
              <small>STELLAR {{ state.wallet.network }}</small>
            </div>
          </div>
          <span class="status-tag" :class="{ connected: state.wallet.connected }">
            {{ state.wallet.connected ? "Connected" : "Not Synced" }}
          </span>
        </div>

        <div class="pass-body">
          <small>STUDENT WALLET IDENTITY</small>
          <h2>{{ state.student.name }}</h2>
          <p>{{ state.student.course }}</p>
        </div>

        <div class="pass-bottom">
          <div>
            <small>XLM BALANCE</small>
            <strong class="bal-text">{{ state.wallet.balance }} XLM</strong>
          </div>
          <div class="qr-placeholder">▦</div>
        </div>
      </div>

      <!-- CONNECTION CONTROL -->
      <div class="control-panel">
        <h3>Wallet Controls</h3>
        <p>Sync your Stellar Freighter browser extension to access student credentials and testnet assets.</p>

        <div v-if="state.wallet.error" class="alert-error">
          ⚠️ {{ state.wallet.error }}
        </div>

        <div v-if="state.wallet.connected" class="wallet-details">
          <div class="detail-row">
            <span>Address:</span>
            <code>{{ shortAddress }}</code>
            <button class="btn-sm" @click="copyAddress">{{ copied ? "Copied!" : "Copy" }}</button>
          </div>
          <div class="detail-row">
            <span>Balance:</span>
            <strong>{{ state.wallet.balance }} XLM</strong>
            <button class="btn-sm" @click="refreshWalletBalance">Refresh</button>
          </div>

          <button class="btn-danger" @click="disconnectWallet">Disconnect Wallet</button>
        </div>

        <div v-else class="connect-action">
          <button class="btn-connect" @click="connectWallet" :disabled="state.wallet.loading">
            {{ state.wallet.loading ? 'Connecting Freighter...' : 'Connect Freighter Wallet' }}
          </button>
        </div>
      </div>
    </div>

    <!-- SEND XLM FORM -->
    <div class="send-section panel">
      <h3>Send Testnet XLM</h3>
      <p>Transfer testnet Stellar lumens to another student address</p>

      <form @submit.prevent="handleSend" class="send-form">
        <div class="form-group">
          <label>Recipient Address (Public Key)</label>
          <input v-model="sendRecipient" type="text" placeholder="G..." required />
        </div>

        <div class="form-group">
          <label>Amount (XLM)</label>
          <input v-model="sendAmount" type="number" step="0.1" min="0.1" placeholder="e.g. 10" required />
        </div>

        <button type="submit" class="btn-primary" :disabled="sending || !state.wallet.connected">
          {{ sending ? 'Processing...' : 'Send XLM via Freighter' }}
        </button>

        <div v-if="sendStatus" class="status-msg">
          {{ sendStatus }}
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wallet-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.wallet-header-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.wallet-pass {
  background: linear-gradient(135deg, #1e1b4b, #312e81, #4338ca);
  color: white;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  box-shadow: 0 15px 35px rgba(49, 46, 129, 0.3);
}

.pass-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pass-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.logo-box {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}

.pass-brand strong { display: block; font-size: 0.9rem; }
.pass-brand small { font-size: 0.65rem; opacity: 0.7; }

.status-tag {
  background: rgba(239, 68, 68, 0.2);
  color: #f87171;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.status-tag.connected {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
}

.pass-body { margin: 1.5rem 0; }
.pass-body small { font-size: 0.65rem; opacity: 0.7; letter-spacing: 0.5px; }
.pass-body h2 { font-size: 1.6rem; font-weight: 800; }

.pass-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.pass-bottom small { display: block; font-size: 0.65rem; opacity: 0.7; }
.bal-text { color: #34d399; font-size: 1.1rem; }

.qr-placeholder {
  width: 38px;
  height: 38px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-panel {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.control-panel h3 { font-size: 1.2rem; font-weight: 800; margin-bottom: 0.5rem; }
.control-panel p { font-size: 0.85rem; color: #64748b; margin-bottom: 1.5rem; }

.alert-error {
  background: #fef2f2;
  color: #991b1b;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.82rem;
  margin-bottom: 1rem;
}

.wallet-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8fafc;
  padding: 0.75rem;
  border-radius: 10px;
  font-size: 0.85rem;
}

.btn-sm {
  background: #e2e8f0;
  border: none;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
}

.btn-danger {
  background: #fef2f2;
  color: #ef4444;
  border: 1px solid #fecaca;
  padding: 0.65rem;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
}

.btn-connect {
  background: linear-gradient(135deg, #6c5ce7, #8c7ae6);
  color: white;
  border: none;
  padding: 0.85rem 1.5rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
}

.panel {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.send-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 700;
  color: #334155;
}

.form-group input {
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 0.9rem;
}

.btn-primary {
  background: #6c5ce7;
  color: white;
  border: none;
  padding: 0.85rem;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
}

.status-msg {
  background: #eff6ff;
  color: #1d4ed8;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .wallet-header-card { grid-template-columns: 1fr; }
}
</style>
