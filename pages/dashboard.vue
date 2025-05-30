<template>
  <div>
    <div class="background-gradient"></div>
    <div id="dashboard-particles"></div>
    <div class="floating-element"></div>
    <div class="floating-element"></div>
    <div class="floating-element"></div>

    <header class="header glass-effect">
      <div class="header-container">
        <div class="logo-container">
          <img src="/images/logo.png" alt="logo" class="logo-img">
          <NuxtLink to="/" class="logo">ETHUN<span>009</span></NuxtLink>
        </div>

        <nav class="nav-menu">
          <ul class="nav-list">
            <li class="nav-item"><NuxtLink to="/#home" class="nav-link">HOME</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/#pricing" class="nav-link">PRICING</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/#diamonds" class="nav-link">DIAMOND</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/#roadmap" class="nav-link">ROAD MAP</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/#contact-us" class="nav-link">CONTACT US</NuxtLink></li>
          </ul>
        </nav>

        <div class="header-buttons">
          <!-- User Profile Dropdown -->
          <div class="user-profile">
            <div class="user-avatar">
              <img src="https://ui-avatars.com/api/?name=User&background=6c5ce7&color=fff" alt="User">
            </div>
            <span class="user-name">User</span>
            <i class='bx bx-chevron-down dropdown-toggle'></i>
            <div class="user-dropdown glass-effect">
              <NuxtLink to="/dashboard" class="dropdown-item">
                <i class='bx bx-dashboard'></i>
                <span>Dashboard</span>
              </NuxtLink>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item" @click.prevent="logout">
                <i class='bx bx-log-out'></i>
                <span>Sign Out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="dashboard-container">
      <h1 class="dashboard-title">Account Dashboard</h1>
      
      <div class="dashboard-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id" 
          :class="['tab-btn', { active: activeTab === tab.id }]" 
          @click="setActiveTab(tab.id)"
        >
          <i :class="['bx', tab.icon]"></i>
          {{ tab.name }}
        </button>
      </div>

      <div class="tab-content">
        <!-- Purchases Tab -->
        <div :class="['tab-pane', { active: activeTab === 'purchases' }]" id="purchases">
          <h2 class="section-heading">Your Purchases</h2>
          
          <!-- Sub tabs for purchase types -->
          <div class="subtabs">
            <button 
              v-for="subtab in purchaseSubtabs" 
              :key="subtab.id" 
              :class="['subtab-btn', { active: activeSubtab === subtab.id }]" 
              @click="setActiveSubtab(subtab.id)"
            >
              {{ subtab.name }}
            </button>
          </div>

          <div class="subtab-content">
            <!-- Diamond Purchases Tab -->
            <div :class="['subtab-pane', { active: activeSubtab === 'diamond-purchases' }]" id="diamond-purchases">
              <div class="purchase-filters">
                <div class="filter-group">
                  <label>Filter by:</label>
                  <select v-model="diamondFilter">
                    <option value="all">All Purchases</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
                <div class="search-box">
                  <button><i class='bx bx-search'></i></button>
                  <input type="text" placeholder="Search transactions..." v-model="diamondSearch">
                </div>
              </div>

              <div class="purchase-table">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Product</th>
                      <th>Player ID</th>
                      <th>Transaction ID</th>
                      <th>Payment Method</th>
                      <th>Phone Number</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Processed At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row-animate">
                      <td>2023-12-15</td>
                      <td>520 Diamonds</td>
                      <td>FF123456789</td>
                      <td>TXN98765432</td>
                      <td>UPI</td>
                      <td>+91 9876543210</td>
                      <td>$9.99</td>
                      <td><span class="status-badge completed">Completed</span></td>
                      <td>2023-12-15 10:00 AM</td>
                      <td><button class="view-btn">View</button></td>
                    </tr>
                    <tr class="table-row-animate">
                      <td>2023-12-10</td>
                      <td>1060 Diamonds</td>
                      <td>FF987654321</td>
                      <td>TXN12345678</td>
                      <td>PayPal</td>
                      <td>+91 8765432109</td>
                      <td>$19.99</td>
                      <td><span class="status-badge pending">Pending</span></td>
                      <td>2023-12-10 11:00 AM</td>
                      <td><button class="view-btn">View</button></td>
                    </tr>
                    <tr class="table-row-animate">
                      <td>2023-12-05</td>
                      <td>2180 Diamonds</td>
                      <td>FF456789012</td>
                      <td>TXN24681357</td>
                      <td>Credit Card</td>
                      <td>+91 7654321098</td>
                      <td>$39.99</td>
                      <td><span class="status-badge failed">Failed</span></td>
                      <td>2023-12-05 12:00 PM</td>
                      <td><button class="view-btn">View Details</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="pagination">
                <button class="page-btn"><i class='bx bx-chevron-left'></i></button>
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <button class="page-btn"><i class='bx bx-chevron-right'></i></button>
              </div>
            </div>

            <!-- App Purchases Tab -->
            <div :class="['subtab-pane', { active: activeSubtab === 'app-purchases' }]" id="app-purchases">
              <div class="purchase-filters">
                <div class="filter-group">
                  <label for="appPurchaseFilter">Filter by:</label>
                  <select id="appPurchaseFilter" v-model="appFilter">
                    <option value="all">All Purchases</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <div class="search-box">
                  <button><i class='bx bx-search'></i></button>
                  <input type="text" id="appPurchaseSearch" placeholder="Search transactions..." v-model="appSearch">
                </div>
              </div>
              
              <div class="purchase-table">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Product</th>
                      <th>Transaction ID</th>
                      <th>Payment Method</th>
                      <th>User ID</th>
                      <th>Amount</th>
                      <th>Duration</th>
                      <th>Status</th>
                      <th>Processing Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023-10-15</td>
                      <td>Premium Panel</td>
                      <td>TRX123456</td>
                      <td>bKash</td>
                      <td>USER123</td>
                      <td>1500 BDT</td>
                      <td>30 days</td>
                      <td><span class="status-badge status-approved">Approved</span></td>
                      <td>2023-10-16</td>
                      <td>
                        <button class="view-btn">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <!-- Wallet Topup Tab -->
            <div :class="['subtab-pane', { active: activeSubtab === 'wallet-topup' }]" id="wallet-topup">
              <div class="purchase-filters">
                <div class="filter-group">
                  <label>Filter by:</label>
                  <select v-model="walletFilter">
                    <option value="all">All Transactions</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
                <div class="search-box">
                  <button><i class='bx bx-search'></i></button>
                  <input type="text" placeholder="Search transactions..." v-model="walletSearch">
                </div>
              </div>

              <div class="purchase-table">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Transaction ID</th>
                      <th>Payment Method</th>
                      <th>Phone Number</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Processed At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row-animate">
                      <td>2023-12-20</td>
                      <td>WLT98765432</td>
                      <td>bKash</td>
                      <td>+91 9876543210</td>
                      <td>500 BDT</td>
                      <td><span class="status-badge completed">Completed</span></td>
                      <td>2023-12-20 10:30 AM</td>
                      <td><button class="view-btn">View</button></td>
                    </tr>
                    <tr class="table-row-animate">
                      <td>2023-12-18</td>
                      <td>WLT12345678</td>
                      <td>Nagad</td>
                      <td>+91 8765432109</td>
                      <td>1000 BDT</td>
                      <td><span class="status-badge pending">Pending</span></td>
                      <td>2023-12-18 09:45 AM</td>
                      <td><button class="view-btn">View</button></td>
                    </tr>
                    <tr class="table-row-animate">
                      <td>2023-12-15</td>
                      <td>WLT24681357</td>
                      <td>bKash</td>
                      <td>+91 7654321098</td>
                      <td>2000 BDT</td>
                      <td><span class="status-badge failed">Failed</span></td>
                      <td>2023-12-15 11:20 AM</td>
                      <td><button class="view-btn">View Details</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="pagination">
                <button class="page-btn"><i class='bx bx-chevron-left'></i></button>
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <button class="page-btn"><i class='bx bx-chevron-right'></i></button>
              </div>
            </div>
          </div>
        </div>

        <!-- App Status Tab -->
        <div :class="['tab-pane', { active: activeTab === 'app-status' }]" id="app-status">
          <h2 class="section-heading">Your Applications</h2>
          
          <div class="app-cards">
            <div class="app-card">
              <div class="app-header">
                <h3>Basic Panel</h3>
                <span class="status active">Active</span>
              </div>
              <div class="app-details">
                <div class="detail-row">
                  <span class="detail-label">Application Type:</span>
                  <span class="detail-value">Free Fire Mod</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Duration:</span>
                  <span class="detail-value">30 days</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Expiry Date:</span>
                  <span class="detail-value">December 31, 2023</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Login Username:</span>
                  <span class="detail-value">user123</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Login Password:</span>
                  <div class="password-container">
                    <span class="detail-value password">{{ showPassword ? 'password123' : '********' }}</span>
                    <button class="show-password" @click="togglePassword"><i class='bx' :class="showPassword ? 'bx-hide' : 'bx-show'"></i></button>
                  </div>
                </div>
                <div class="detail-row">
                  <span class="detail-label">App Version:</span>
                  <span class="detail-value">v2.1.4 <span class="app-version">Latest</span></span>
                </div>
              </div>
              <div class="app-actions">
                <button class="action-btn primary">
                  <i class='bx bx-download'></i>
                  <span>Download</span>
                </button>
                <NuxtLink to="/#pricing" class="action-btn secondary">
                  <i class='bx bx-refresh'></i>
                  <span>Extend Subscription</span>
                </NuxtLink>
              </div>
            </div>

            <div class="app-card">
              <div class="app-header">
                <h3>Premium Panel</h3>
                <span class="status expired">Expired</span>
              </div>
              <div class="app-details">
                <div class="detail-row">
                  <span class="detail-label">Application Type:</span>
                  <span class="detail-value">PUBG Mod</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Duration:</span>
                  <span class="detail-value">15 days</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Expiry Date:</span>
                  <span class="detail-value">October 15, 2023</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Login Username:</span>
                  <span class="detail-value">premium_user</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Login Password:</span>
                  <div class="password-container">
                    <span class="detail-value password">{{ showPremiumPassword ? 'premium123' : '********' }}</span>
                    <button class="show-password" @click="togglePremiumPassword"><i class='bx' :class="showPremiumPassword ? 'bx-hide' : 'bx-show'"></i></button>
                  </div>
                </div>
                <div class="detail-row">
                  <span class="detail-label">App Version:</span>
                  <span class="detail-value">v3.0.2 <span class="app-version">Latest</span></span>
                </div>
              </div>
              <div class="app-actions">
                <button class="action-btn primary">
                  <i class='bx bx-download'></i>
                  <span>Download</span>
                </button>
                <button class="action-btn secondary">
                  <i class='bx bx-refresh'></i>
                  <span>Renew Subscription</span>
                </button>
              </div>
            </div>
            
            <!-- Add a third card as an example -->
            <div class="app-card">
              <div class="app-header">
                <h3>Ultimate Panel</h3>
                <span class="status active">Active</span>
              </div>
              <div class="app-details">
                <div class="detail-row">
                  <span class="detail-label">Application Type:</span>
                  <span class="detail-value">Call of Duty Mod</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Duration:</span>
                  <span class="detail-value">60 days</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Expiry Date:</span>
                  <span class="detail-value">February 28, 2024</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Login Username:</span>
                  <span class="detail-value">ultimate_user</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Login Password:</span>
                  <div class="password-container">
                    <span class="detail-value password">{{ showUltimatePassword ? 'ultimate123' : '********' }}</span>
                    <button class="show-password" @click="toggleUltimatePassword"><i class='bx' :class="showUltimatePassword ? 'bx-hide' : 'bx-show'"></i></button>
                  </div>
                </div>
                <div class="detail-row">
                  <span class="detail-label">App Version:</span>
                  <span class="detail-value">v1.8.5 <span class="app-version">Latest</span></span>
                </div>
              </div>
              <div class="app-actions">
                <button class="action-btn primary">
                  <i class='bx bx-download'></i>
                  <span>Download</span>
                </button>
                <NuxtLink to="/#pricing" class="action-btn secondary">
                  <i class='bx bx-refresh'></i>
                  <span>Extend Subscription</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Account Tab -->
        <div :class="['tab-pane', { active: activeTab === 'account' }]" id="account">
          <div class="account-grid">
            <div class="account-section profile-section">
              <h2 class="section-heading">Profile Information</h2>
              <div class="profile-avatar">
                <div class="profile-avatar-inner">
                  <i class='bx bxs-user'></i>
                </div>
                <button class="change-avatar">Change Avatar</button>
              </div>
              <div class="profile-info">
                <div class="info-row">
                  <span class="info-label">Username</span>
                  <span class="info-value">{{ userData.username }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Email</span>
                  <span class="info-value">{{ userData.email }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Member Since</span>
                  <span class="info-value">{{ userData.memberSince }}</span>
                </div>
              </div>
              <div class="profile-actions">
                <button class="profile-btn" @click="editProfile">
                  <i class='bx bx-edit-alt'></i>
                  <span>Edit Profile</span>
                </button>
                <button class="profile-btn" @click="changePassword">
                  <i class='bx bx-lock-alt'></i>
                  <span>Change Password</span>
                </button>
              </div>
            </div>

            <div class="account-section wallet-section">
              <h2 class="section-heading">Wallet</h2>
              <div class="wallet-balance">
                <span class="balance-label">Current Balance</span>
                <span class="balance-amount">{{ userData.walletBalance }}</span>
              </div>
              <div class="wallet-actions">
                <button class="wallet-btn primary" @click="addMoney">
                  <i class='bx bx-plus-circle'></i>
                  <span>Add Money</span>
                </button>
                <button class="wallet-btn view-transactions" @click="viewTransactions">
                  <i class='bx bx-history'></i>
                  <span>Transactions</span>
                </button>
              </div>
            </div>

            <div class="account-section support-section">
              <h2 class="section-heading">Support</h2>
              <div class="support-options">
                <a href="#" class="support-option" @click.prevent="contactSupport">
                  <i class='bx bx-support'></i>
                  <span>Contact Support</span>
                </a>
                <a href="#" class="support-option" @click.prevent="viewFaq">
                  <i class='bx bx-help-circle'></i>
                  <span>View FAQ</span>
                </a>
                <a href="#" class="support-option">
                  <i class='bx bx-book-content'></i>
                  <span>Documentation</span>
                </a>
                <a href="#" class="support-option">
                  <i class='bx bx-message-dots'></i>
                  <span>Live Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Tab navigation state with added icons
const tabs = [
  { id: 'purchases', name: 'Purchases', icon: 'bx-shopping-bag' },
  { id: 'app-status', name: 'App Status', icon: 'bx-grid-alt' },
  { id: 'account', name: 'Account', icon: 'bx-user' }
];

const purchaseSubtabs = [
  { id: 'diamond-purchases', name: 'Diamond Purchases' },
  { id: 'app-purchases', name: 'App Purchases' },
  { id: 'wallet-topup', name: 'Wallet Topup' }
];

const activeTab = ref('purchases');
const activeSubtab = ref('diamond-purchases');

// Filters and search
const diamondFilter = ref('all');
const diamondSearch = ref('');
const appFilter = ref('all');
const appSearch = ref('');
const walletFilter = ref('all');
const walletSearch = ref('');

// Password visibility
const showPassword = ref(false);
const showPremiumPassword = ref(false);
const showUltimatePassword = ref(false);

// Mock user data
const userData = ref({
  username: 'JohnDoe',
  email: 'john.doe@example.com',
  memberSince: 'January 15, 2023',
  walletBalance: '₹5,000'
});

// Tab navigation functions
const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const setActiveSubtab = (subtab) => {
  activeSubtab.value = subtab;
};

// Password toggle functions
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const togglePremiumPassword = () => {
  showPremiumPassword.value = !showPremiumPassword.value;
};

const toggleUltimatePassword = () => {
  showUltimatePassword.value = !showUltimatePassword.value;
};

// Account actions
const editProfile = () => {
  alert('Edit Profile functionality will be implemented here');
};

const changePassword = () => {
  alert('Change Password functionality will be implemented here');
};

const addMoney = () => {
  alert('Add Money functionality will be implemented here');
};

const viewTransactions = () => {
  setActiveTab('purchases');
  setActiveSubtab('wallet-topup');
};

const contactSupport = () => {
  alert('Contact Support functionality will be implemented here');
};

const viewFaq = () => {
  alert('FAQ functionality will be implemented here');
};

const logout = () => {
  alert('Logout functionality will be implemented here');
};

onMounted(() => {
  // Initialize particles.js for background effect with updated colors
  if (window.particlesJS) {
    window.particlesJS('dashboard-particles', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#06b6d4', '#0ea5e9', '#3b82f6']
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.2,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#06b6d4',
          opacity: 0.1,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.3
            }
          },
          push: {
            particles_nb: 3
          }
        }
      },
      retina_detect: true
    });
  }
});
</script>