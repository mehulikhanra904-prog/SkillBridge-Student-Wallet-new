<script setup>
import { ref } from "vue";
import { state, addActivity } from "../store/state";

const showAddModal = ref(false);
const selectedCert = ref(null);

const newCert = ref({
  title: "",
  issuer: "",
  icon: "🏅",
});

function submitAddCert() {
  if (!newCert.value.title.trim() || !newCert.value.issuer.trim()) return;
  state.certificates.push({
    title: newCert.value.title.trim(),
    issuer: newCert.value.issuer.trim(),
    icon: newCert.value.icon || "🏅",
  });
  addActivity("Certificate Added", `Added: ${newCert.value.title}`, "green");
  showAddModal.value = false;
  newCert.value.title = "";
  newCert.value.issuer = "";
}

function removeCert(idx) {
  const removed = state.certificates.splice(idx, 1);
  if (removed.length > 0) {
    addActivity("Certificate Removed", `Removed: ${removed[0].title}`, "orange");
  }
}
</script>

<template>
  <div class="certs-page">
    <div class="header-row">
      <div>
        <h2>Academic & Professional Certificates</h2>
        <p>Verified credentials linked to your student wallet identity</p>
      </div>

      <button class="btn-primary" @click="showAddModal = true">+ Add Certificate</button>
    </div>

    <!-- CERTIFICATES LIST -->
    <div class="certs-grid">
      <div v-for="(cert, idx) in state.certificates" :key="cert.title" class="cert-card">
        <div class="cert-icon">{{ cert.icon }}</div>
        <div class="cert-info">
          <h3>{{ cert.title }}</h3>
          <p>{{ cert.issuer }} • Verified Credential</p>
        </div>
        <div class="cert-actions">
          <button class="btn-view" @click="selectedCert = cert">Inspect</button>
          <button class="btn-del" @click="removeCert(idx)">✕</button>
        </div>
      </div>
    </div>

    <!-- INSPECT MODAL -->
    <div v-if="selectedCert" class="modal-backdrop" @click.self="selectedCert = null">
      <div class="modal cert-detail-modal">
        <div class="modal-badge">VERIFIED CREDENTIAL</div>
        <h2>{{ selectedCert.title }}</h2>
        <p>Issued by <strong>{{ selectedCert.issuer }}</strong></p>

        <div class="cert-meta">
          <div><span>STATUS</span><strong>ACTIVE & VERIFIED</strong></div>
          <div><span>STUDENT</span><strong>{{ state.student.name }}</strong></div>
          <div><span>ISSUER</span><strong>{{ selectedCert.issuer }}</strong></div>
        </div>

        <button class="btn-sec" @click="selectedCert = null">Close</button>
      </div>
    </div>

    <!-- ADD MODAL -->
    <div v-if="showAddModal" class="modal-backdrop" @click.self="showAddModal = false">
      <div class="modal">
        <h3>Add Certificate</h3>
        <form @submit.prevent="submitAddCert" class="modal-form">
          <div class="form-group">
            <label>Certificate Title</label>
            <input v-model="newCert.title" type="text" placeholder="e.g. Cloud Architect Associate" required />
          </div>

          <div class="form-group">
            <label>Issuer</label>
            <input v-model="newCert.issuer" type="text" placeholder="e.g. Google, AWS, SkillBridge" required />
          </div>

          <div class="modal-actions">
            <button type="button" class="btn-sec" @click="showAddModal = false">Cancel</button>
            <button type="submit" class="btn-primary">Add Certificate</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.certs-page { display: flex; flex-direction: column; gap: 1.5rem; }
.header-row { display: flex; justify-content: space-between; align-items: center; }
.header-row h2 { font-size: 1.6rem; font-weight: 800; }

.certs-grid { display: flex; flex-direction: column; gap: 1rem; }
.cert-card {
  background: white; border-radius: 16px; padding: 1.25rem 1.5rem;
  border: 1px solid #e2e8f0; display: flex; align-items: center; gap: 1rem;
}

.cert-icon { font-size: 1.6rem; }
.cert-info { flex: 1; }
.cert-info h3 { font-size: 1.05rem; font-weight: 700; }
.cert-info p { font-size: 0.82rem; color: #64748b; }

.cert-actions { display: flex; align-items: center; gap: 0.75rem; }
.btn-view { background: #f1f5f9; border: none; padding: 0.4rem 0.8rem; border-radius: 8px; font-weight: 700; font-size: 0.8rem; cursor: pointer; }
.btn-del { border: none; background: transparent; color: #ef4444; cursor: pointer; }

.btn-primary { background: #6c5ce7; color: white; border: none; padding: 0.7rem 1.2rem; border-radius: 10px; font-weight: 700; cursor: pointer; }
.btn-sec { background: #f1f5f9; border: none; padding: 0.7rem 1.2rem; border-radius: 10px; font-weight: 700; cursor: pointer; }

.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal { background: white; padding: 2rem; border-radius: 20px; width: 90%; max-width: 450px; }
.modal-badge { background: #dcfce7; color: #166534; font-size: 0.75rem; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 6px; display: inline-block; margin-bottom: 0.8rem; }
.cert-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0; font-size: 0.85rem; }
.cert-meta span { display: block; font-size: 0.7rem; color: #94a3b8; font-weight: 800; }

.modal-form { display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 0.35rem; }
.form-group input { padding: 0.7rem; border-radius: 8px; border: 1px solid #cbd5e1; }
.modal-actions { display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem; }
</style>
