<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { state, connectWallet, disconnectWallet } from "../store/state";

const route = useRoute();

const routeTitle = computed(() => {
  switch (route.path) {
    case "/": return "Student Dashboard";
    case "/wallet": return "Stellar Wallet & Testnet";
    case "/skills": return "Skills Matrix & Verification";
    case "/certificates": return "Certificates & Credentials";
    case "/ai-assistant": return "SkillBridge AI Assistant";
    case "/settings": return "Application Settings";
    default: return "SkillBridge Web App";
  }
});
</script>

<template>
  <header class="app-header" :class="{ 'dark-header': state.theme === 'dark' }">
    <div class="header-left">
      <h1 class="page-title">{{ routeTitle }}</h1>
      <span class="badge-tag">TESTNET v2.0</span>
    </div>

    <div class="header-right">
      <button class="wallet-btn" @click="state.wallet.connected ? disconnectWallet() : connectWallet()">
        <span class="status-dot" :class="{ connected: state.wallet.connected }"></span>
        <span>
          {{ state.wallet.loading ? 'Connecting...' : state.wallet.connected ? `${state.wallet.balance} XLM` : 'Connect Freighter' }}
        </span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  height: 70px;
  padding: 0 2rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(108, 92, 231, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 90;
}

.app-header.dark-header {
  background: #0f172a;
  border-bottom-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.page-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: inherit;
}

.badge-tag {
  background: rgba(108, 92, 231, 0.12);
  color: #6c5ce7;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.wallet-btn {
  border: 1px solid rgba(108, 92, 231, 0.3);
  background: rgba(108, 92, 231, 0.08);
  color: #6c5ce7;
  padding: 0.55rem 1.1rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.wallet-btn:hover {
  background: #6c5ce7;
  color: white;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f59e0b;
}

.status-dot.connected {
  background: #10b981;
}
</style>
