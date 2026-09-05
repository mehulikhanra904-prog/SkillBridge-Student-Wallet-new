import { reactive, ref, computed, watch } from "vue";
import {
  DEFAULT_STUDENT,
  DEFAULT_SKILLS,
  DEFAULT_CERTIFICATES,
  DEFAULT_ACTIVITIES,
} from "../config";
import { connectWallet as freighterConnect, getXlmBalance } from "../wallet/stellar";

// Load initial state from LocalStorage or Config
const savedStudent = localStorage.getItem("sb_student");
const savedSkills = localStorage.getItem("sb_skills");
const savedCerts = localStorage.getItem("sb_certs");
const savedActivities = localStorage.getItem("sb_activities");
const savedTheme = localStorage.getItem("sb_theme") || "light";

export const state = reactive({
  student: savedStudent ? JSON.parse(savedStudent) : { ...DEFAULT_STUDENT },
  skills: savedSkills ? JSON.parse(savedSkills) : [...DEFAULT_SKILLS],
  certificates: savedCerts ? JSON.parse(savedCerts) : [...DEFAULT_CERTIFICATES],
  activities: savedActivities ? JSON.parse(savedActivities) : [...DEFAULT_ACTIVITIES],
  wallet: {
    connected: false,
    address: "",
    balance: "0",
    network: "TESTNET",
    loading: false,
    error: "",
  },
  theme: savedTheme,
});

// Watchers for persistence
watch(
  () => state.student,
  (val) => localStorage.setItem("sb_student", JSON.stringify(val)),
  { deep: true }
);

watch(
  () => state.skills,
  (val) => localStorage.setItem("sb_skills", JSON.stringify(val)),
  { deep: true }
);

watch(
  () => state.certificates,
  (val) => localStorage.setItem("sb_certs", JSON.stringify(val)),
  { deep: true }
);

watch(
  () => state.activities,
  (val) => localStorage.setItem("sb_activities", JSON.stringify(val)),
  { deep: true }
);

watch(
  () => state.theme,
  (val) => localStorage.setItem("sb_theme", val)
);

// Helper Methods
export function addActivity(title, description, type = "blue") {
  const now = new Date();
  const timeStr = `${now.toLocaleDateString([], { month: "short", day: "numeric" })} • ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  state.activities.unshift({
    type,
    title,
    description,
    time: timeStr,
  });
  if (state.activities.length > 15) {
    state.activities.pop();
  }
}

export async function connectWallet() {
  state.wallet.loading = true;
  state.wallet.error = "";
  try {
    const res = await freighterConnect();
    if (res.address) {
      state.wallet.address = res.address;
      state.wallet.network = res.network || "TESTNET";
      state.wallet.connected = true;
      
      try {
        const bal = await getXlmBalance(res.address);
        state.wallet.balance = bal;
      } catch (e) {
        state.wallet.balance = "0";
      }

      addActivity(
        "Wallet Connected",
        `Stellar address ${res.address.slice(0, 4)}...${res.address.slice(-4)} synced`,
        "purple"
      );
    }
  } catch (err) {
    state.wallet.error = err.message || "Failed to connect to Freighter wallet.";
  } finally {
    state.wallet.loading = false;
  }
}

export async function refreshWalletBalance() {
  if (!state.wallet.address) return;
  try {
    const bal = await getXlmBalance(state.wallet.address);
    state.wallet.balance = bal;
  } catch (err) {
    console.error("Balance refresh error:", err);
  }
}

export function disconnectWallet() {
  state.wallet.connected = false;
  state.wallet.address = "";
  state.wallet.balance = "0";
  addActivity("Wallet Disconnected", "Freighter wallet session closed", "orange");
}

export function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
}

export function resetAllData() {
  state.student = { ...DEFAULT_STUDENT };
  state.skills = [...DEFAULT_SKILLS];
  state.certificates = [...DEFAULT_CERTIFICATES];
  state.activities = [...DEFAULT_ACTIVITIES];
  localStorage.clear();
  addActivity("System Reset", "All data restored to default settings", "orange");
}
