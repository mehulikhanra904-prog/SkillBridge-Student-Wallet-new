<script setup>
import { state } from "../store/state";
</script>

<template>
  <div class="not-found-container" :class="{ 'dark-mode': state.theme === 'dark' }">
    <div class="not-found-card">
      <div class="error-badge">404 ERROR</div>
      <div class="illustration">🔍</div>
      <h1>Page Not Found</h1>
      <p>
        The page you are looking for doesn't exist, was removed, or is temporarily unavailable.
      </p>
      
      <router-link to="/" class="btn-home">
        ← Back to Dashboard
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 120px);
  padding: 2rem;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}

.not-found-card {
  max-width: 480px;
  width: 100%;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(108, 92, 231, 0.15);
  border-radius: 24px;
  padding: 3rem 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
}

.dark-mode .not-found-card {
  background: #1e293b;
  border-color: rgba(255, 255, 255, 0.1);
  color: #f8fafc;
}

.error-badge {
  display: inline-block;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  font-weight: 800;
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  margin-bottom: 1.5rem;
}

.illustration {
  font-size: 4rem;
  margin-bottom: 1rem;
}

h1 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  color: inherit;
}

p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.dark-mode p {
  color: #94a3b8;
}

.btn-home {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #6c5ce7, #8c7ae6);
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.85rem 1.75rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(108, 92, 231, 0.3);
  transition: all 0.25s ease;
}

.btn-home:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(108, 92, 231, 0.4);
}
</style>
