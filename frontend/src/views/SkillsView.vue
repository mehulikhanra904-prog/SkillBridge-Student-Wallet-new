<script setup>
import { ref, computed } from "vue";
import { state, addActivity } from "../store/state";

const searchQuery = ref("");
const showAddModal = ref(false);

const newSkill = ref({
  name: "",
  level: "Intermediate",
  percentage: 75,
  icon: "✦",
  type: "js",
});

const filteredSkills = computed(() => {
  if (!searchQuery.value.trim()) return state.skills;
  const q = searchQuery.value.toLowerCase();
  return state.skills.filter(
    (s) => s.name.toLowerCase().includes(q) || s.level.toLowerCase().includes(q)
  );
});

function submitAddSkill() {
  if (!newSkill.value.name.trim()) return;
  state.skills.push({
    name: newSkill.value.name.trim(),
    level: newSkill.value.level,
    percentage: Number(newSkill.value.percentage) || 50,
    icon: newSkill.value.icon || "✦",
    type: newSkill.value.type || "js",
  });
  addActivity("Skill Added", `Added new skill: ${newSkill.value.name}`, "purple");
  showAddModal.value = false;
  newSkill.value.name = "";
}

function removeSkill(index) {
  const removed = state.skills.splice(index, 1);
  if (removed.length > 0) {
    addActivity("Skill Removed", `Removed skill: ${removed[0].name}`, "orange");
  }
}
</script>

<template>
  <div class="skills-page">
    <div class="header-row">
      <div>
        <h2>Skills Matrix</h2>
        <p>Manage and verify your core technical and professional capabilities</p>
      </div>

      <button class="btn-primary" @click="showAddModal = true">+ Add New Skill</button>
    </div>

    <!-- SEARCH BAR -->
    <div class="search-bar">
      <input v-model="searchQuery" type="text" placeholder="Search skills by name or level..." />
    </div>

    <!-- SKILLS GRID -->
    <div class="skills-grid">
      <div v-for="(skill, idx) in filteredSkills" :key="skill.name" class="skill-card">
        <div class="card-top">
          <div class="icon-box">{{ skill.icon }}</div>
          <div>
            <h3>{{ skill.name }}</h3>
            <span class="level-tag">{{ skill.level }}</span>
          </div>
          <button class="btn-del" @click="removeSkill(idx)">✕</button>
        </div>

        <div class="pct-row">
          <span>Proficiency</span>
          <strong>{{ skill.percentage }}%</strong>
        </div>

        <div class="progress-bar">
          <span :style="{ width: `${skill.percentage}%` }"></span>
        </div>
      </div>
    </div>

    <!-- ADD SKILL MODAL -->
    <div v-if="showAddModal" class="modal-backdrop" @click.self="showAddModal = false">
      <div class="modal">
        <h3>Add Skill to Wallet</h3>
        <form @submit.prevent="submitAddSkill" class="modal-form">
          <div class="form-group">
            <label>Skill Name</label>
            <input v-model="newSkill.name" type="text" placeholder="e.g. Vue.js, Python, TypeScript" required />
          </div>

          <div class="form-group">
            <label>Level</label>
            <select v-model="newSkill.level">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div class="form-group">
            <label>Percentage ({{ newSkill.percentage }}%)</label>
            <input v-model.number="newSkill.percentage" type="range" min="10" max="100" />
          </div>

          <div class="modal-actions">
            <button type="button" class="btn-sec" @click="showAddModal = false">Cancel</button>
            <button type="submit" class="btn-primary">Add Skill</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-page { display: flex; flex-direction: column; gap: 1.5rem; }
.header-row { display: flex; justify-content: space-between; align-items: center; }
.header-row h2 { font-size: 1.6rem; font-weight: 800; }
.header-row p { font-size: 0.9rem; color: #64748b; }

.search-bar input {
  width: 100%;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  font-size: 0.95rem;
  outline: none;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.skill-card {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  border: 1px solid #e2e8f0;
}

.card-top { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1rem; }
.icon-box {
  width: 40px; height: 40px; border-radius: 10px; background: #f1f5f9;
  display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 800;
}

.card-top h3 { font-size: 1rem; font-weight: 700; }
.level-tag { font-size: 0.72rem; color: #64748b; }
.btn-del { margin-left: auto; border: none; background: transparent; color: #ef4444; cursor: pointer; }

.pct-row { display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.4rem; }
.progress-bar { height: 8px; background: #f1f5f9; border-radius: 4px; overflow: hidden; }
.progress-bar span { display: block; height: 100%; background: linear-gradient(90deg, #6c5ce7, #a29bfe); }

.btn-primary { background: #6c5ce7; color: white; border: none; padding: 0.7rem 1.2rem; border-radius: 10px; font-weight: 700; cursor: pointer; }
.btn-sec { background: #f1f5f9; border: none; padding: 0.7rem 1.2rem; border-radius: 10px; font-weight: 700; cursor: pointer; }

.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal { background: white; padding: 2rem; border-radius: 20px; width: 90%; max-width: 450px; }
.modal-form { display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 0.35rem; }
.form-group input, .form-group select { padding: 0.7rem; border-radius: 8px; border: 1px solid #cbd5e1; }
.modal-actions { display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem; }

@media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr; } }
</style>
