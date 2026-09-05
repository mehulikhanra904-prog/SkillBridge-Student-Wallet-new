<script setup>
import { ref } from "vue";
import { state, resetAllData, addActivity } from "../store/state";

const savedMessage = ref("");

function saveProfile() {
  savedMessage.value = "Student profile settings saved successfully!";
  addActivity("Settings Saved", "Updated student identity preferences", "blue");
  setTimeout(() => (savedMessage.value = ""), 3000);
}

function confirmReset() {
  if (confirm("Are you sure you want to reset all wallet data to defaults?")) {
    resetAllData();
    savedMessage.value = "All data reset to defaults!";
    setTimeout(() => (savedMessage.value = ""), 3000);
  }
}
</script>

<template>
  <div class="settings-page">
    <div class="header-row">
      <h2>Web Application Settings ⚙️</h2>
      <p>Configure student identity details, storage preferences, and web app options</p>
    </div>

    <div v-if="savedMessage" class="alert-success">
      ✓ {{ savedMessage }}
    </div>

    <div class="settings-card panel">
      <h3>Student Identity Information</h3>
      <form @submit.prevent="saveProfile" class="settings-form">
        <div class="form-group">
          <label>Full Name</label>
          <input v-model="state.student.name" type="text" required />
        </div>

        <div class="form-group">
          <label>Course / Specialization</label>
          <input v-model="state.student.course" type="text" required />
        </div>

        <div class="form-group">
          <label>Educational Institution</label>
          <input v-model="state.student.institution" type="text" required />
        </div>

        <div class="form-group">
          <label>Student ID Code</label>
          <input v-model="state.student.studentId" type="text" required />
        </div>

        <div class="form-group">
          <label>Career Track</label>
          <input v-model="state.student.careerTrack" type="text" required />
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-primary">Save Profile Settings</button>
        </div>
      </form>
    </div>

    <div class="settings-card panel danger-panel">
      <h3>Storage & Reset Controls</h3>
      <p>Clear local storage data and reset the web application to initial default values.</p>

      <button class="btn-danger" @click="confirmReset">Reset All Application Data</button>
    </div>
  </div>
</template>

<style scoped>
.settings-page { display: flex; flex-direction: column; gap: 1.5rem; }
.header-row h2 { font-size: 1.6rem; font-weight: 800; }
.header-row p { font-size: 0.9rem; color: #64748b; }

.panel { background: white; border-radius: 20px; padding: 2rem; border: 1px solid #e2e8f0; }

.alert-success {
  background: #f0fdf4; color: #166534; padding: 0.85rem 1.2rem;
  border-radius: 12px; font-weight: 700; border: 1px solid #bbf7d0;
}

.settings-form { display: flex; flex-direction: column; gap: 1.2rem; margin-top: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 0.4rem; }
.form-group label { font-size: 0.85rem; font-weight: 700; color: #334155; }
.form-group input { padding: 0.75rem 1rem; border-radius: 10px; border: 1px solid #cbd5e1; font-size: 0.9rem; }

.btn-primary {
  background: #6c5ce7; color: white; border: none; padding: 0.85rem 1.5rem;
  border-radius: 10px; font-weight: 700; cursor: pointer; align-self: flex-start;
}

.danger-panel h3 { color: #ef4444; margin-bottom: 0.5rem; }
.danger-panel p { font-size: 0.85rem; color: #64748b; margin-bottom: 1.2rem; }

.btn-danger {
  background: #fef2f2; color: #ef4444; border: 1px solid #fecaca;
  padding: 0.75rem 1.25rem; border-radius: 10px; font-weight: 700; cursor: pointer;
}
</style>
