<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { state, toggleTheme } from "../store/state";

const route = useRoute();

const studentInitials = computed(() => {
  if (!state.student.name) return "SB";
  const parts = state.student.name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return state.student.name.substring(0, 2).toUpperCase();
});

const navItems = [
  { name: "Dashboard", path: "/", icon: "⌂" },
  { name: "Wallet", path: "/wallet", icon: "🔑" },
  { name: "Skills Matrix", path: "/skills", icon: "✦" },
  { name: "Certificates", path: "/certificates", icon: "🏆" },
  { name: "AI Assistant", path: "/ai-assistant", icon: "🤖" },
  { name: "Settings", path: "/settings", icon: "⚙️" },
];
</script>

<template>
  <aside class="sidebar" :class="{ 'dark-sidebar': state.theme === 'dark' }">
    <div class="sidebar-top">
      <div class="brand">
        <div class="brand-logo">S</div>
        <div class="brand-text">
          <h2>SkillBridge</h2>
          <span>Web Application</span>
        </div>
      </div>
    </div>

    <nav class="sidebar-nav">
      <router-link
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: route.path === item.path }"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        <span class="nav-label">{{ item.name }}</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <div class="user-pill">
        <div class="user-avatar">{{ studentInitials }}</div>
        <div class="user-info">
          <strong>{{ state.student.name }}</strong>
          <small>{{ state.student.studentId }}</small>
        </div>
      </div>

      <button class="theme-toggle" @click="toggleTheme" :title="`Switch to ${state.theme === 'light' ? 'Dark' : 'Light'} Mode`">
        {{ state.theme === 'light' ? '🌙' : '☀️' }}
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border-right: 1px solid rgba(108, 92, 231, 0.12);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

.sidebar.dark-sidebar {
  background: #0f172a;
  border-right-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.sidebar-top {
  padding: 1.5rem 1.25rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-logo {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.3);
}

.brand-text h2 {
  font-size: 1.1rem;
  font-weight: 800;
  color: inherit;
  line-height: 1.1;
}

.brand-text span {
  font-size: 0.72rem;
  color: #6c5ce7;
  font-weight: 700;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1rem 0.85rem;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  color: #64748b;
  transition: all 0.2s ease;
}

.dark-sidebar .nav-item {
  color: #94a3b8;
}

.nav-item:hover {
  background: rgba(108, 92, 231, 0.08);
  color: #6c5ce7;
}

.nav-item.active {
  background: linear-gradient(135deg, #6c5ce7, #8c7ae6);
  color: white;
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.25);
}

.nav-icon {
  font-size: 1.1rem;
}

.sidebar-footer {
  padding: 1.25rem;
  border-top: 1px solid rgba(108, 92, 231, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-pill {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.user-avatar {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #6c5ce7;
  color: white;
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info strong {
  display: block;
  font-size: 0.82rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
}

.user-info small {
  display: block;
  font-size: 0.7rem;
  color: #94a3b8;
}

.theme-toggle {
  border: none;
  background: rgba(108, 92, 231, 0.1);
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 1.1rem;
}
</style>
