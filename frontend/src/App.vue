<template>
  <div class="app">

    <!-- ================= BACKGROUND ================= -->
    <div class="background-effects">
      <div class="orb orb-blue"></div>
      <div class="orb orb-purple"></div>
      <div class="orb orb-cyan"></div>

      <div class="floating-shapes">
        <span
          v-for="bubble in bubbles"
          :key="bubble.id"
          class="bubble"
          :style="{
            width: bubble.size + 'px',
            height: bubble.size + 'px',
            left: bubble.left + '%',
            top: bubble.top + '%',
            animationDuration: bubble.duration + 's',
            animationDelay: bubble.delay + 's'
          }"
        ></span>
      </div>

      <div class="grid-overlay"></div>
    </div>

    <!-- ================= NAVBAR ================= -->
    <header class="navbar">

      <div class="brand" @click="goDashboard">
        <div class="brand-logo">
          <span>🎓</span>
        </div>

        <div class="brand-text">
          <h2>SkillBridge</h2>
          <span>Student Wallet</span>
        </div>
      </div>

      <nav class="nav-links">
        <button
          class="nav-link active"
          @click="goDashboard"
        >
          <span>⌂</span>
          Dashboard
        </button>

        <button
          class="nav-link"
          @click="goCredentials"
        >
          <span>▣</span>
          Credentials
        </button>

        <button
          class="nav-link"
          @click="goAchievements"
        >
          <span>🏆</span>
          Achievements
        </button>

        <button
          class="connect-button"
          @click="connectWallet"
        >
          <span>▣</span>

          {{ connected ? "Wallet Connected" : "Connect Freighter" }}

          <span class="button-arrow">→</span>
        </button>

        <div class="profile-button">
          <span>👤</span>
        </div>
      </nav>

    </header>

    <!-- ================= MAIN ================= -->
    <main class="page">

      <!-- ================= HERO ================= -->
      <section class="hero">

        <div class="hero-content">

          <div class="welcome-badge">
            <span class="sparkle">✦</span>
            Blockchain-Powered Student Identity
          </div>

          <h1>
            Your Digital
            <span class="gradient-text">
              Student Wallet
            </span>
          </h1>

          <p class="hero-description">
            Securely store, verify and showcase your academic
            credentials, achievements and skills in one place.
          </p>

          <div class="hero-buttons">

            <button
              class="primary-button"
              @click="connectWallet"
            >
              <span>🔗</span>

              {{ connected ? "Wallet Connected" : "Connect Freighter" }}

              <span>→</span>
            </button>

            <button
              class="secondary-button"
              @click="exploreWallet"
            >
              <span>🚀</span>
              Explore Wallet
              <span>→</span>
            </button>

          </div>

          <!-- FEATURE HIGHLIGHTS -->
          <div class="feature-highlights">

            <div class="feature-item">
              <div class="feature-icon blue">
                🛡
              </div>

              <div>
                <strong>Secure</strong>
                <span>Blockchain verified</span>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon purple">
                ⚡
              </div>

              <div>
                <strong>Fast</strong>
                <span>Instant access</span>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon pink">
                ✓
              </div>

              <div>
                <strong>Trusted</strong>
                <span>Real credentials</span>
              </div>
            </div>

            <div class="feature-item">
              <div class="feature-icon cyan">
                ◎
              </div>

              <div>
                <strong>Global</strong>
                <span>Anywhere, anytime</span>
              </div>
            </div>

          </div>

        </div>

        <!-- ================= WALLET PREVIEW ================= -->
        <div class="wallet-preview">

          <div class="wallet-glow"></div>

          <div class="wallet-card">

            <div class="wallet-header">

              <div class="wallet-heading">
                <div class="wallet-mini-icon">
                  💳
                </div>

                <div>
                  <h3>Student Wallet</h3>
                </div>
              </div>

              <span class="demo-status">
                <span></span>
                Demo
              </span>

            </div>

            <div class="balance-area">

              <span class="balance-label">
                Available Balance
              </span>

              <div class="balance">
                {{ balance.toLocaleString() }}
                <span>XLM</span>
              </div>

              <span class="usd-value">
                ≈ $1,234.56 USD
              </span>

            </div>

            <div class="wallet-address-box">

              <div>
                <span>Wallet Address</span>

                <code>
                  {{ displayAddress }}
                </code>
              </div>

              <button
                class="copy-button"
                @click="copyAddress"
                title="Copy wallet address"
              >
                {{ copied ? "✓" : "⧉" }}
              </button>

            </div>

            <button
              class="wallet-details-button"
              @click="viewWalletDetails"
            >
              View Wallet Details
              <span>→</span>
            </button>

          </div>

        </div>

      </section>

      <!-- ================= STATS ================= -->
      <section class="stats-section">

        <div class="stat-card">
          <div class="stat-icon blue">
            💰
          </div>

          <div>
            <span>Wallet Balance</span>
            <strong>{{ balance.toLocaleString() }} XLM</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon purple">
            🎓
          </div>

          <div>
            <span>Credentials</span>
            <strong>{{ credentials.length }}</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon pink">
            🏆
          </div>

          <div>
            <span>Achievements</span>
            <strong>{{ achievements.length }}</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon cyan">
            ✓
          </div>

          <div>
            <span>Verification</span>
            <strong>Verified</strong>
          </div>
        </div>

      </section>

      <!-- ================= WALLET OVERVIEW ================= -->
      <section
        id="wallet-overview"
        class="content-section"
      >

        <div class="section-heading">

          <div>
            <span class="section-label">
              YOUR DIGITAL IDENTITY
            </span>

            <h2>Student Wallet Overview</h2>
          </div>

          <button
            class="view-button"
            @click="viewWalletDetails"
          >
            View Details →
          </button>

        </div>

        <div class="dashboard-grid">

          <!-- PROFILE -->
          <div class="glass-card profile-card">

            <div class="card-header">

              <div class="card-title">

                <div class="card-icon blue-gradient">
                  👤
                </div>

                <div>
                  <h3>Student Profile</h3>
                  <p>Verified academic identity</p>
                </div>

              </div>

              <span class="verified">
                ✓ Verified
              </span>

            </div>

            <div class="profile-content">

              <div class="avatar">
                SB
              </div>

              <div class="profile-info">
                <h3>Student</h3>

                <p>
                  Computer Science & Engineering
                </p>

                <span>
                  SkillBridge Student
                </span>
              </div>

            </div>

            <div class="profile-details">

              <div>
                <span>Student ID</span>
                <strong>SB-2026-001</strong>
              </div>

              <div>
                <span>Institution</span>
                <strong>Narula Institute of Technology</strong>
              </div>

              <div>
                <span>Program</span>
                <strong>B.Tech CSE</strong>
              </div>

              <div>
                <span>Status</span>

                <strong class="active-status">
                  ● Active
                </strong>
              </div>

            </div>

          </div>

          <!-- SECURITY -->
          <div class="glass-card security-card">

            <div class="card-header">

              <div class="card-title">

                <div class="card-icon purple-gradient">
                  🔐
                </div>

                <div>
                  <h3>Wallet Security</h3>
                  <p>Blockchain identity status</p>
                </div>

              </div>

            </div>

            <div class="security-score">

              <div class="score-circle">
                <strong>98</strong>
                <span>%</span>
              </div>

              <div>
                <h3>Excellent</h3>
                <p>
                  Your wallet is securely configured.
                </p>
              </div>

            </div>

            <div class="security-list">

              <div>
                <span class="check">✓</span>
                <span>Wallet Connected</span>

                <strong>
                  {{ connected ? "Active" : "Pending" }}
                </strong>
              </div>

              <div>
                <span class="check">✓</span>
                <span>Blockchain Network</span>

                <strong>Testnet</strong>
              </div>

              <div>
                <span class="check">✓</span>
                <span>Digital Identity</span>

                <strong>Verified</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- ================= CREDENTIALS ================= -->
      <section
        id="credentials"
        class="content-section"
      >

        <div class="section-heading">

          <div>
            <span class="section-label">
              VERIFIED RECORDS
            </span>

            <h2>Digital Credentials</h2>
          </div>

          <button
            class="view-button"
            @click="viewAllCredentials"
          >
            View All →
          </button>

        </div>

        <div class="credentials-grid">

          <div
            v-for="credential in credentials"
            :key="credential.id"
            class="credential-card"
          >

            <div
              class="credential-icon"
              :class="credential.color"
            >
              {{ credential.icon }}
            </div>

            <div class="credential-content">

              <div class="credential-top">

                <span class="verified-badge">
                  ✓ Verified
                </span>

                <span class="credential-date">
                  {{ credential.date }}
                </span>

              </div>

              <h3>
                {{ credential.title }}
              </h3>

              <p>
                {{ credential.description }}
              </p>

              <div class="credential-footer">

                <span>
                  {{ credential.issuer }}
                </span>

                <button
                  @click="viewCredential(credential)"
                >
                  View →
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- ================= ACHIEVEMENTS ================= -->
      <section
        id="achievements"
        class="content-section"
      >

        <div class="section-heading">

          <div>
            <span class="section-label">
              YOUR PROGRESS
            </span>

            <h2>Achievements & Skills</h2>
          </div>

          <button
            class="view-button"
            @click="viewSkills"
          >
            Explore Skills →
          </button>

        </div>

        <div class="achievements-grid">

          <div
            v-for="achievement in achievements"
            :key="achievement.id"
            class="achievement-card"
            @click="viewAchievement(achievement)"
          >

            <div class="achievement-icon">
              {{ achievement.icon }}
            </div>

            <div class="achievement-info">

              <h3>
                {{ achievement.title }}
              </h3>

              <p>
                {{ achievement.description }}
              </p>

              <div class="progress-bar">

                <div
                  class="progress"
                  :style="{
                    width: achievement.progress + '%'
                  }"
                ></div>

              </div>

              <span class="progress-text">
                {{ achievement.progress }}% completed
              </span>

            </div>

          </div>

        </div>

      </section>

      <!-- ================= TRANSACTIONS ================= -->
      <section
        id="transactions"
        class="content-section"
      >

        <div class="section-heading">

          <div>
            <span class="section-label">
              BLOCKCHAIN ACTIVITY
            </span>

            <h2>Recent Transactions</h2>
          </div>

          <button
            class="view-button"
            @click="viewHistory"
          >
            View History →
          </button>

        </div>

        <div class="transactions-card">

          <div
            v-for="transaction in transactions"
            :key="transaction.id"
            class="transaction"
          >

            <div
              class="transaction-icon"
              :class="transaction.type"
            >
              {{ transaction.icon }}
            </div>

            <div class="transaction-info">

              <h3>
                {{ transaction.title }}
              </h3>

              <span>
                {{ transaction.date }}
              </span>

            </div>

            <strong
              :class="
                transaction.amount > 0
                  ? 'positive'
                  : 'neutral'
              "
            >
              {{ transaction.amount > 0 ? "+" : "" }}
              {{ transaction.amount }} XLM
            </strong>

            <span class="transaction-status">
              ✓ Completed
            </span>

          </div>

        </div>

      </section>

      <!-- ================= FOOTER ================= -->
      <footer class="footer">

        <div class="footer-brand">

          <div class="footer-logo">
            🎓
          </div>

          <div>
            <strong>SkillBridge</strong>
            <span>Student Wallet</span>
          </div>

        </div>

        <p>
          Secure. Verified. Student-owned.
        </p>

        <span>
          © 2026 SkillBridge
        </span>

      </footer>

    </main>

    <!-- ================= TOAST ================= -->
    <transition name="toast">

      <div
        v-if="toastMessage"
        class="toast"
      >
        <span>✓</span>
        {{ toastMessage }}
      </div>

    </transition>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";

/* ================= WALLET ================= */

const connected = ref(false);

const balance = ref(10000);

const walletAddress = ref(
  "GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
);

const copied = ref(false);

const toastMessage = ref("");

/* ================= BACKGROUND ================= */

const bubbles = [
  {
    id: 1,
    size: 85,
    left: 4,
    top: 22,
    duration: 18,
    delay: 0
  },
  {
    id: 2,
    size: 130,
    left: 15,
    top: 6,
    duration: 24,
    delay: 3
  },
  {
    id: 3,
    size: 60,
    left: 30,
    top: 38,
    duration: 16,
    delay: 5
  },
  {
    id: 4,
    size: 160,
    left: 48,
    top: 12,
    duration: 27,
    delay: 1
  },
  {
    id: 5,
    size: 80,
    left: 62,
    top: 48,
    duration: 20,
    delay: 7
  },
  {
    id: 6,
    size: 125,
    left: 78,
    top: 5,
    duration: 23,
    delay: 2
  },
  {
    id: 7,
    size: 65,
    left: 91,
    top: 35,
    duration: 17,
    delay: 8
  }
];

/* ================= CREDENTIALS ================= */

const credentials = ref([
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Verified web development credential",
    issuer: "SkillBridge Academy",
    date: "2026",
    icon: "🌐",
    color: "blue"
  },
  {
    id: 2,
    title: "Python Programming",
    description: "Programming and problem-solving skills",
    issuer: "SkillBridge Academy",
    date: "2026",
    icon: "🐍",
    color: "purple"
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Artificial intelligence fundamentals",
    issuer: "SkillBridge Academy",
    date: "2026",
    icon: "🤖",
    color: "pink"
  }
]);

/* ================= ACHIEVEMENTS ================= */

const achievements = ref([
  {
    id: 1,
    title: "Full Stack Development",
    description: "HTML, CSS, JavaScript, React & Node.js",
    progress: 82,
    icon: "💻"
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    description: "Machine Learning and Generative AI",
    progress: 65,
    icon: "🤖"
  },
  {
    id: 3,
    title: "Blockchain & Web3",
    description: "Stellar blockchain and digital assets",
    progress: 58,
    icon: "⛓️"
  },
  {
    id: 4,
    title: "Problem Solving",
    description: "Data structures and algorithms",
    progress: 74,
    icon: "🧠"
  }
]);

/* ================= TRANSACTIONS ================= */

const transactions = ref([
  {
    id: 1,
    title: "Wallet Funded",
    date: "Today",
    amount: 10000,
    icon: "↓",
    type: "receive"
  },
  {
    id: 2,
    title: "Credential Verified",
    date: "Yesterday",
    amount: 0,
    icon: "✓",
    type: "verify"
  },
  {
    id: 3,
    title: "Achievement Added",
    date: "2 days ago",
    amount: 0,
    icon: "🏆",
    type: "achievement"
  }
]);

/* ================= ADDRESS ================= */

const displayAddress = computed(() => {
  if (!walletAddress.value) {
    return "Not connected";
  }

  return `${walletAddress.value.slice(
    0,
    8
  )}...${walletAddress.value.slice(-8)}`;
});

/* ================= CONNECT WALLET ================= */

async function connectWallet() {
  try {
    if (!window.freighterApi) {
      connected.value = true;

      showToast(
        "Demo wallet connected — Freighter not detected"
      );

      return;
    }

    connected.value = true;

    showToast(
      "Wallet connected successfully"
    );

  } catch (error) {
    console.error(error);

    showToast(
      "Unable to connect wallet"
    );
  }
}

/* ================= COPY ================= */

async function copyAddress() {
  try {
    await navigator.clipboard.writeText(
      walletAddress.value
    );

    copied.value = true;

    showToast(
      "Wallet address copied"
    );

    setTimeout(() => {
      copied.value = false;
    }, 2000);

  } catch (error) {
    console.error(error);

    showToast(
      "Unable to copy address"
    );
  }
}

/* ================= SCROLL ================= */

function scrollTo(selector) {
  document
    .querySelector(selector)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
}

function exploreWallet() {
  scrollTo("#wallet-overview");
}

function goDashboard() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goCredentials() {
  scrollTo("#credentials");
}

function goAchievements() {
  scrollTo("#achievements");
}

function viewWalletDetails() {
  scrollTo(".profile-card");

  showToast(
    "Showing wallet details"
  );
}

function viewAllCredentials() {
  scrollTo("#credentials");

  showToast(
    "Showing all credentials"
  );
}

function viewSkills() {
  scrollTo("#achievements");

  showToast(
    "Showing your skills"
  );
}

function viewHistory() {
  scrollTo("#transactions");

  showToast(
    "Showing transaction history"
  );
}

function viewCredential(credential) {
  showToast(
    `${credential.title} — Verified credential`
  );
}

function viewAchievement(achievement) {
  showToast(
    `${achievement.title} — ${achievement.progress}% completed`
  );
}

/* ================= TOAST ================= */

function showToast(message) {
  toastMessage.value = message;

  setTimeout(() => {
    toastMessage.value = "";
  }, 3000);
}
</script>