<template>
  <div>
    <!-- Preloader -->
    <div class="loading-screen" id="preloader">
      <div class="loader">
        <div class="loader-1"></div>
        <div class="loader-2"></div>
        <div class="loader-3"></div>
        <div class="loader-4"></div>
      </div>
      <div class="counter">
        <div class="digit">
          <div class="digit-inner">
            <div class="num">0</div>
            <div class="num">1</div>
            <div class="num">2</div>
            <div class="num">3</div>
            <div class="num">4</div>
            <div class="num">5</div>
            <div class="num">6</div>
            <div class="num">7</div>
            <div class="num">8</div>
            <div class="num">9</div>
          </div>
        </div>
        <div class="digit">
          <div class="digit-inner">
            <div class="num">0</div>
            <div class="num">1</div>
            <div class="num">2</div>
            <div class="num">3</div>
            <div class="num">4</div>
            <div class="num">5</div>
            <div class="num">6</div>
            <div class="num">7</div>
            <div class="num">8</div>
            <div class="num">9</div>
          </div>
        </div>
        <div class="digit">
          <div class="digit-inner">
            <div class="num">0</div>
            <div class="num">1</div>
            <div class="num">2</div>
            <div class="num">3</div>
            <div class="num">4</div>
            <div class="num">5</div>
            <div class="num">6</div>
            <div class="num">7</div>
            <div class="num">8</div>
            <div class="num">9</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="background-gradient"></div>
      <div id="dashboard-particles"></div>
    </div>

    <!-- Header - hide for transaction pages -->
    <header v-if="!isTransactionPage" class="header">
      <div class="header-container">
        <div class="logo-container">
          <img src="/images/logo.png" alt="logo" class="logo-img">
          <a href="#home" class="logo">ETHUN<span>009</span></a>
        </div>

        <nav class="nav-menu">
          <ul class="nav-list">
            <li class="nav-item"><NuxtLink to="#home" class="nav-link">HOME</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="#pricing" class="nav-link">PRICING</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="#diamonds" class="nav-link">DIAMOND</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="#roadmap" class="nav-link">ROAD MAP</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="#contact-us" class="nav-link">CONTACT US</NuxtLink></li>
          </ul>
        </nav>

        <div class="header-buttons">
          <div class="button-box" id="authButtonContainer">
            <button id="signinButton" @click="openAuthModal">SIGN IN</button>
          </div>
          <!-- User Profile Dropdown (Hidden by default, shown when logged in) -->
          <div class="user-profile" id="userProfileDropdown" style="display: none;">
            <div class="user-avatar">
              <img id="userAvatar" src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" alt="User">
            </div>
            <span class="user-name" id="headerUserName">User</span>
            <i class='bx bx-chevron-down dropdown-toggle'></i>
            <div class="user-dropdown">
              <a href="dashboard/dashboard.html" class="dropdown-item">
                <i class='bx bx-dashboard'></i>
                <span>Dashboard</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item" id="logoutButton">
                <i class='bx bx-log-out'></i>
                <span>Sign Out</span>
              </a>
            </div>
          </div>
          <button class="menu-toggle" id="menuToggle" @click="toggleSidebar">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <NuxtPage />

    <!-- Sidebar - hide for transaction pages -->
    <div v-if="!isTransactionPage" class="sidebar" id="sidebar" :class="{ 'active': isSidebarActive }">
      <div class="sidebar-header">
        <img src="/images/logo.png" alt="logo" class="sidebar-logo">
        <button class="close-sidebar" id="closeSidebar" @click="closeSidebar">
          <i class='bx bx-x'></i>
        </button>
      </div>
      
      <!-- User Profile in Sidebar (Hidden by default, shown when logged in) -->
      <div class="sidebar-user-profile" id="sidebarUserProfile" style="display: none;">
        <div class="sidebar-user-avatar">
          <img id="sidebarUserAvatar" src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" alt="User">
        </div>
        <div class="sidebar-user-name" id="sidebarUserName">User</div>
        <div class="sidebar-user-email" id="sidebarUserEmail">user@example.com</div>
        <a href="dashboard/dashboard.html" class="sidebar-action-btn">
          <i class='bx bx-dashboard'></i> Dashboard
        </a>
        <button class="sidebar-action-btn" id="sidebarLogoutButton">
          <i class='bx bx-log-out'></i> Sign Out
        </button>
      </div>
      
      <nav class="sidebar-nav">
        <ul class="sidebar-nav-list">
          <li class="sidebar-nav-item"><NuxtLink to="/" class="sidebar-nav-link" @click="closeSidebar">HOME</NuxtLink></li>
          <li class="sidebar-nav-item"><NuxtLink to="#pricing" class="sidebar-nav-link" @click="closeSidebar">PRICING</NuxtLink></li>
          <li class="sidebar-nav-item"><NuxtLink to="#diamonds" class="sidebar-nav-link" @click="closeSidebar">DIAMOND</NuxtLink></li>
          <li class="sidebar-nav-item"><NuxtLink to="#roadmap" class="sidebar-nav-link" @click="closeSidebar">ROAD MAP</NuxtLink></li>
          <li class="sidebar-nav-item"><NuxtLink to="#contact-us" class="sidebar-nav-link" @click="closeSidebar">CONTACT US</NuxtLink></li>
        </ul>
      </nav>
      <div class="sidebar-social-container">
        <h3 class="sidebar-social-title">Connect With Us</h3>
        <div class="sidebar-social">
          <a href="https://discord.gg/eEgPBA6gVQ" class="social-icon"><i class='bx bxl-discord-alt'></i></a>
          <a href="https://www.youtube.com/@ethun009" class="social-icon"><i class='bx bxl-youtube'></i></a>
          <a href="https://www.tiktok.com/@ethun009" class="social-icon"><i class='bx bxl-tiktok'></i></a>
          <a href="https://www.facebook.com/ethun009/" class="social-icon"><i class='bx bxl-facebook'></i></a>
        </div>
      </div>
      <div class="button-box">
        <button id="sidebarSigninButton" @click="openAuthModal">SIGN IN</button>
      </div>
    </div>

    <!-- Auth Modal -->
    <div class="auth-modal" :class="{ 'active': isAuthModalOpen }">
      <div class="auth-modal-content" :class="{ 'active': isAuthModalOpen }">
        <button class="close-modal" @click="closeAuthModal">
          <i class='bx bx-x'></i>
        </button>
        <div class="auth-tabs">
          <button 
            class="auth-tab" 
            :class="{ 'active': authTab === 'signin' }" 
            @click="authTab = 'signin'"
          >
            Sign In
          </button>
          <button 
            class="auth-tab" 
            :class="{ 'active': authTab === 'register' }" 
            @click="authTab = 'register'"
          >
            Register
          </button>
        </div>
        
        <!-- Sign In Form -->
        <div class="auth-form" v-if="authTab === 'signin'">
          <h2>Welcome Back</h2>
          <div class="form-group">
            <div class="input-icon">
              <i class='bx bx-envelope'></i>
              <input type="email" placeholder="Email Address" required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-icon">
              <i class='bx bx-lock-alt'></i>
              <input type="password" placeholder="Password" required>
            </div>
          </div>
          <div class="form-options">
            <label class="remember-me">
              <input type="checkbox">
              <span>Remember me</span>
            </label>
            <a href="#" class="forgot-password">Forgot Password?</a>
          </div>
          <button class="auth-submit-btn">Sign In</button>
          <div class="auth-divider">
            <span>or continue with</span>
          </div>
          <div class="social-auth">
            <button class="google-auth">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google">
              <span>Google</span>
            </button>
          </div>
        </div>
        
        <!-- Register Form -->
        <div class="auth-form" v-if="authTab === 'register'">
          <h2>Create Account</h2>
          <div class="form-group">
            <div class="input-icon">
              <i class='bx bx-user'></i>
              <input type="text" placeholder="Username" required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-icon">
              <i class='bx bx-envelope'></i>
              <input type="email" placeholder="Email Address" required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-icon">
              <i class='bx bx-lock-alt'></i>
              <input type="password" placeholder="Password" required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-icon">
              <i class='bx bx-lock-alt'></i>
              <input type="password" placeholder="Confirm Password" required>
            </div>
          </div>
          <div class="form-options">
            <label class="terms">
              <input type="checkbox" required>
              <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
            </label>
          </div>
          <button class="auth-submit-btn">Create Account</button>
          <div class="auth-divider">
            <span>or register with</span>
          </div>
          <div class="social-auth">
            <button class="google-auth">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google">
              <span>Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer - hide for transaction pages -->
    <footer v-if="!isTransactionPage" class="footer">
      <div class="footer-content">
        <div class="footer-section brand">
          <img src="/images/logo.png" alt="logo" class="footer-logo">
          <h2>ETHUN<span>009</span></h2>
          <p>Creating amazing experiences through innovative solutions</p>
        </div>

        <div class="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="#pricing">Pricing</NuxtLink></li>
            <li><NuxtLink to="#diamonds">Diamonds</NuxtLink></li>
            <li><NuxtLink to="#roadmap">Road Map</NuxtLink></li>
            <li><NuxtLink to="#contact-us">Contact</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-section social">
          <h3>Connect With Us</h3>
          <div class="social-icons">
            <a href="https://discord.gg/eEgPBA6gVQ" class="social-icon"><i class='bx bxl-discord-alt'></i></a>
            <a href="https://www.youtube.com/@ethun009" class="social-icon"><i class='bx bxl-youtube'></i></a>
            <a href="https://www.tiktok.com/@ethun009" class="social-icon"><i class='bx bxl-tiktok'></i></a>
            <a href="https://www.facebook.com/ethun009/" class="social-icon"><i class='bx bxl-facebook'></i></a>
          </div>
        </div>

        <div class="footer-section creator">
          <h3>Creator Portfolio</h3>
          <a href="https://ethun009.github.io/Portfolio/#home" class="creator-btn">Visit Portfolio <i class='bx bx-right-arrow-alt'></i></a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; 2025 Ethun Pandey. All Rights Reserved.</p>
        </div>
        <div class="footer-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#00aaa7" fill-opacity="0.1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';

// Get current route
const route = useRoute();

// Check if current page uses transaction layout
const isTransactionPage = computed(() => {
  return ['/payment', '/transaction-bkash', '/transaction-nagad', '/admin/login', '/admin/dashboard'].includes(route.path);
});

// Sidebar state
const isSidebarActive = ref(false);

// Toggle sidebar
const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value;
};

// Close sidebar
const closeSidebar = () => {
  isSidebarActive.value = false;
};

// Auth modal state
const isAuthModalOpen = ref(false);
const authTab = ref('signin');

// Open auth modal
const openAuthModal = () => {
  isAuthModalOpen.value = true;
  document.body.classList.add('modal-open');
};

// Close auth modal
const closeAuthModal = () => {
  isAuthModalOpen.value = false;
  document.body.classList.remove('modal-open');
};

// Preloader animation
onMounted(() => {
  // Check if this is a page refresh or normal navigation
  const isRefresh = window.performance && performance.navigation && performance.navigation.type === 1;
  const isFirstLoad = !sessionStorage.getItem('hasLoaded');

  // Show preloader only on refresh or first load
  if (!isRefresh && !isFirstLoad) {
    // Hide preloader immediately if navigating back
    document.getElementById('preloader').classList.add('hidden');
    document.body.classList.add('loaded');
    return;
  }

  // Set session flag to track navigation
  sessionStorage.setItem('hasLoaded', 'true');

  // Initialize GSAP timeline
  const tl = gsap.timeline();

  // Initial loading animation - horizontal bar filling
  tl.to(".loader-1", {
    width: 200,
    duration: 6,
    ease: "power2.inOut"
  });

  // Counter animations
  let currentNumber = 0;
  const duration = 6;
  const totalNumbers = 100;
  const interval = duration / totalNumbers;

  function updateCounter(number) {
    const numStr = number.toString().padStart(3, '0');
    const digits = document.querySelectorAll('.digit-inner');
    
    digits.forEach((digit, index) => {
      const targetNum = parseInt(numStr[index]);
      gsap.to(digit, {
        y: -targetNum * 100,
        duration: 0.4,
        ease: "power2.out"
      });
    });
  }

  // Start counter animation
  const counterInterval = setInterval(() => {
    currentNumber++;
    if (currentNumber <= 100) {
      updateCounter(currentNumber);
    } else {
      clearInterval(counterInterval);
    }
  }, interval * 1000);

  // Hide counter
  gsap.to(".counter", {
    opacity: 0,
    duration: 0.5,
    delay: 6.5
  });

  // Rest of animations
  gsap.to(".loader", {
    background: "none",
    delay: 6,
    duration: 0.1,
  });

  gsap.to(".loader-1", {
    rotate: 90,
    y: -50,
    duration: 0.5,
    delay: 6,
  });

  gsap.to(".loader-2", {
    width: 150,
    x: 70,
    y: -170,
    duration: 0.5,
    delay: 6,
    opacity: 1
  });

  gsap.to(".loader-3", {
    width: 150,
    x: 50,
    y: -50,
    duration: 0.5,
    delay: 6,
    opacity: 1
  });

  gsap.to(".loader-4", {
    width: 150,
    x: 70,
    y: 60,
    duration: 0.5,
    delay: 6,
    opacity: 1
  });

  gsap.to(".loader", {
    scale: 40,
    duration: 1,
    delay: 7,
    ease: "power2.inOut"
  });

  gsap.to(".loader", {
    rotate: 45,
    y: 500,
    x: 2000,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
  });

  gsap.to(".loading-screen", {
    opacity: 0,
    duration: 0.5,
    delay: 7.5,
    ease: "power1.inOut",
    onComplete: function() {
      // Add loaded class to body to show content
      document.body.classList.add('loaded');
      // Remove the loader element completely
      setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) loadingScreen.remove();
      }, 500);
    }
  });

  gsap.to("h1", 1.5, {
    delay: 7,
    y: -80,
    ease: "power4.inOut",
    stagger: {
      amount: 0.1,
    }
  });

  // User profile dropdown functionality
  const userProfile = document.getElementById('userProfileDropdown');
  if (userProfile) {
    userProfile.addEventListener('click', () => {
      userProfile.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!userProfile.contains(event.target)) {
        userProfile.classList.remove('active');
      }
    });
  }

  // Add smooth scrolling to all links
  const allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Check if the href is just a "#" (which would scroll to the top)
      if (href === '#') return;
      
      // Get the element to scroll to
      const targetElement = document.querySelector(href);
      
      // If the element exists, scroll to it
      if (targetElement) {
        e.preventDefault();
        
        // Scroll to the element
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
</script>
