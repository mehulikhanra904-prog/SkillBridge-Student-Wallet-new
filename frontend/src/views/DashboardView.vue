<script setup>
import { computed } from "vue";
import { state, addActivity } from "../store/state";

const studentInitials = computed(() => {
  if (!state.student.name) return "SB";
  const parts = state.student.name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return state.student.name.substring(0, 2).toUpperCase();
});

const computedWalletScore = computed(() => {
  let score = 40;
  if (state.student.name && state.student.course) score += 15;
  if (state.wallet.connected) score += 15;
  score += Math.min(15, state.skills.length * 2);
  score += Math.min(15, state.certificates.length * 3);
  return Math.min(100, score);
});
</script>

<template>
  <div class="view-container">
    <!-- HERO ROW -->
    <div class="hero-grid">
      <div class="welcome-card">
        <span class="pill-badge">STUDENT DASHBOARD</span>
        <h2>Welcome back, <span>{{ state.student.name }}</span>! 👋</h2>
        <p>Your academic identity, verified skills, and Stellar wallet metrics at a glance.</p>
        
        <div class="quick-actions">
          <router-link to="/wallet" class="btn-primary">
            Manage Stellar Wallet →
          </router-link>
          <router-link to="/skills" class="btn-secondary">
            View Skills Matrix
          </router-link>
        </div>
      </div>

      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar">{{ studentInitials }}</div>
          <div>
            <h3>{{ state.student.name }}</h3>
            <p>{{ state.student.course }}</p>
          </div>
        </div>

        <div class="profile-divider"></div>

        <div class="profile-details">
          <div>
            <span>INSTITUTION</span>
            <strong>{{ state.student.institution }}</strong>
          </div>
          <div>
            <span>STUDENT ID</span>
            <strong>{{ state.student.studentId }}</strong>
          </div>
        </div>

        <div class="status-banner">
          <span class="check-icon">✓</span>
          <div>
            <strong>Verified Student Identity</strong>
            <small>{{ state.student.status }} • {{ state.student.careerTrack }}</small>
          </div>
        </div>
      </div>
    </div>

    <!-- STATS ROW -->
    <div class="stats-grid">
      <div class="stat-card purple">
        <div class="stat-icon">⚡</div>
        <div class="stat-info">
          <span>TOTAL SKILLS</span>
          <h3>{{ state.skills.length }}</h3>
          <small>Verified capabilities</small>
        </div>
      </div>

      <div class="stat-card yellow">
        <div class="stat-icon">🏆</div>
        <div class="stat-info">
          <span>CERTIFICATES</span>
          <h3>{{ state.certificates.length }}</h3>
          <small>Active credentials</small>
        </div>
      </div>

      <div class="stat-card blue">
        <div class="stat-icon">🚀</div>
        <div class="stat-info">
          <span>XLM BALANCE</span>
          <h3>{{ state.wallet.balance }}</h3>
          <small>Stellar Testnet</small>
        </div>
      </div>

      <div class="stat-card green">
        <div class="stat-icon">⭐</div>
        <div class="stat-info">
          <span>IDENTITY SCORE</span>
          <h3>{{ computedWalletScore }}%</h3>
          <small>Profile Completeness</small>
        </div>
      </div>
    </div>

    <!-- PANELS ROW -->
    <div class="panels-grid">
      <!-- TOP SKILLS -->
      <div class="panel">
        <div class="panel-head">
          <h3>Top Verified Skills</h3>
          <router-link to="/skills" class="link-sm">View All →</router-link>
        </div>
        <div class="skills-preview">
          <div v-for="skill in state.skills.slice(0, 4)" :key="skill.name" class="skill-row">
            <span class="skill-name">{{ skill.name }}</span>
            <div class="progress-bar">
              <span :style="{ width: `${skill.percentage}%` }"></span>
            </div>
            <span class="skill-pct">{{ skill.percentage }}%</span>
          </div>
        </div>
      </div>

      <!-- RECENT ACTIVITY -->
      <div class="panel">
        <div class="panel-head">
          <h3>Recent Activity Log</h3>
        </div>
        <div class="activity-list">
          <div v-for="item in state.activities.slice(0, 5)" :key="item.time" class="activity-item">
            <span class="dot" :class="`${item.type}-dot`"></span>
            <div>
              <strong>{{ item.title }}</strong>
              <p>{{ item.description }}</p>
              <small>{{ item.time }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
}

.welcome-card {
  background: linear-gradient(135deg, #ffffff 0%, #f4f3ff 100%);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(108, 92, 231, 0.15);
  box-shadow: 0 10px 30px rgba(108, 92, 231, 0.05);
}

.pill-badge {
  background: rgba(108, 92, 231, 0.12);
  color: #6c5ce7;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 0.8rem;
}

.welcome-card h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.6rem;
}

.welcome-card h2 span {
  color: #6c5ce7;
}

.welcome-card p {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.quick-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #6c5ce7, #8c7ae6);
  color: white;
  padding: 0.75rem 1.4rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 4px 14px rgba(108, 92, 231, 0.3);
}

.btn-secondary {
  background: white;
  color: #334155;
  border: 1px solid #cbd5e1;
  padding: 0.75rem 1.2rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
}

.profile-card {
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: #6c5ce7;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-header h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f172a;
}

.profile-header p {
  font-size: 0.82rem;
  color: #64748b;
}

.profile-divider {
  height: 1px;
  background: #f1f5f9;
  margin: 1rem 0;
}

.profile-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.profile-details span {
  display: block;
  font-size: 0.7rem;
  font-weight: 800;
  color: #94a3b8;
}

.profile-details strong {
  font-size: 0.85rem;
  color: #1e293b;
}

.status-banner {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 10px;
  padding: 0.65rem 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.check-icon {
  background: #10b981;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
}

.status-banner strong {
  display: block;
  font-size: 0.82rem;
  color: #166534;
}

.status-banner small {
  font-size: 0.72rem;
  color: #15803d;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.stat-card {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.purple .stat-icon { background: #f3e8ff; }
.yellow .stat-icon { background: #fef3c7; }
.blue .stat-icon { background: #e0f2fe; }
.green .stat-icon { background: #dcfce7; }

.stat-info span {
  font-size: 0.68rem;
  font-weight: 800;
  color: #94a3b8;
}

.stat-info h3 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f172a;
}

.stat-info small {
  font-size: 0.75rem;
  color: #64748b;
}

.panels-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.panel {
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.panel-head h3 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
}

.link-sm {
  font-size: 0.82rem;
  color: #6c5ce7;
  text-decoration: none;
  font-weight: 700;
}

.skills-preview {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.skill-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-name {
  width: 100px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #334155;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: #f1f5f9;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #6c5ce7, #a29bfe);
}

.skill-pct {
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748b;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 0.4rem;
}

.purple-dot { background: #8b5cf6; }
.blue-dot { background: #3b82f6; }
.green-dot { background: #10b981; }
.orange-dot { background: #f59e0b; }

.activity-item strong {
  display: block;
  font-size: 0.85rem;
  color: #0f172a;
}

.activity-item p {
  font-size: 0.78rem;
  color: #64748b;
}

.activity-item small {
  font-size: 0.7rem;
  color: #94a3b8;
}

@media (max-width: 900px) {
  .hero-grid, .panels-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
}
</style>
