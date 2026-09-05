import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import WalletView from "../views/WalletView.vue";
import SkillsView from "../views/SkillsView.vue";
import CertificatesView from "../views/CertificatesView.vue";
import AiAssistantView from "../views/AiAssistantView.vue";
import SettingsView from "../views/SettingsView.vue";

const routes = [
  { path: "/", name: "Dashboard", component: DashboardView },
  { path: "/wallet", name: "Wallet", component: WalletView },
  { path: "/skills", name: "Skills", component: SkillsView },
  { path: "/certificates", name: "Certificates", component: CertificatesView },
  { path: "/ai-assistant", name: "AiAssistant", component: AiAssistantView },
  { path: "/settings", name: "Settings", component: SettingsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
