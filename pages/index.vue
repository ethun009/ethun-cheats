<template>
  <div>
    
    <!-- Hero Section -->
    <section class="home sec" id="home">
      <div class="container">
        <video class="back-vid" loop autoplay muted playsinline src="/videos/galaxy.mp4"></video>
      </div>
      <div class="hero">
        <div class="hero-info">
 
          <h1 class="hero-title">
            <span class="hero-title-line">Providing <span class="gradient">the best</span></span>
            <span class="hero-title-line">Antiban <span class="gradient">Panel</span></span>
            <span class="hero-title-line">for <span class="gradient">Free Fire</span></span>
          </h1>
          <p class="hero-description">Welcome to the official website of Ethun Cheats. Discover our course roadmap,
            purchase panels from the shop section, and access premium gaming solutions.</p>
          <div class="hero-buttons">
            <a href="#pricing" class="hero-btn primary-btn">
              <span>Get Started</span>
              <i class='bx bx-right-arrow-alt'></i>
            </a>
            <a href="#about" class="hero-btn secondary-btn">
              <span>Learn More</span>
              <i class='bx bx-down-arrow-alt'></i>
            </a>
          </div>
          <div class="hero-features">
            <div class="hero-feature">
              <i class='bx bx-shield-quarter'></i>
              <span>Anti-Ban Protection</span>
            </div>
            <div class="hero-feature">
              <i class='bx bx-code-alt'></i>
              <span>Custom Scripts</span>
            </div>
            <div class="hero-feature">
              <i class='bx bx-support'></i>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      <spline-viewer url="https://prod.spline.design/BlSKZd3IsNakR7xJ/scene.splinecode"
        class="desktop-only"></spline-viewer>
    </section>

    <!-- About Section -->
    <section class="about sec" id="about">
      <div class="about-container">
        <div class="about-img">
          <div class="img-wrapper" data-aos-disable>
            <img src="/images/logo_square.png" alt="Ethun Cheats Logo">
            <div class="glow-effect"></div>
          </div>
          <h1 class="brand-title" data-aos-disable>ETHUN <span>009</span></h1>
        </div>
        <div class="about-content">
          <div class="subscriber-counter">
            <h2 class="sub-count" data-count="99999">99,999</h2>
            <div class="counter-label">
              <h3>SUBSCRIBERS</h3>
              <span class="counter-description">Join our growing community</span>
            </div>
          </div>
          <div class="about-actions">
            <a href="https://www.youtube.com/@ethun009" class="btn-3d sub-btn">
              <span class="btn-3d-front">SUBSCRIBE</span>
              <span class="btn-3d-back"></span>
              <span class="btn-3d-shadow"></span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section" id="pricing">
      <div id="pricing-particles" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="pricing-container">
        <div class="pricing-header" data-aos="fade-up">
          <h1 class="section-title">Pricing <span class="gradient">Plans</span></h1>
          <p class="section-subtitle">Choose the perfect plan for your gaming needs</p>
        </div>

        <swiper
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :navigation="{
            enabled: true,
            hideOnClick: false
          }"
          :modules="modules"
          :breakpoints="{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          class="pricing-swiper"
        >
          <!-- Basic Plan -->
          <swiper-slide>
            <div class="pricing-card" data-aos="fade-up" data-aos-delay="100">
              <div class="card-badge">BASIC</div>
              <div class="card-icon">
                <i class='bx bx-shield'></i>
              </div>
              <div class="card-header">
                <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">19</span>
                  <span class="period">/mo</span>
                </div>
                <h3 class="card-title">Starter Panel</h3>
              </div>
              <div class="card-features">
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>Basic Anti-Ban Protection</span>
                </div>
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>Standard ESP Features</span>
                </div>
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>7-Day Support</span>
                </div>
                <div class="feature-item disabled">
                  <i class='bx bx-x-circle'></i>
                  <span>Advanced Aimbot</span>
                </div>
                <div class="feature-item disabled">
                  <i class='bx bx-x-circle'></i>
                  <span>Custom Scripts</span>
                </div>
              </div>
              <div class="card-action">
                <button class="action-button">
                  <span>Get Started</span>
                  <i class='bx bx-right-arrow-alt'></i>
                </button>
              </div>
            </div>
          </swiper-slide>

          <!-- Premium Plan -->
          <swiper-slide>
            <div class="pricing-card featured" data-aos="fade-up">
              <div class="card-badge">PREMIUM</div>
              <div class="card-icon">
                <i class='bx bx-crown'></i>
              </div>
              <div class="card-header">
                <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">49</span>
                  <span class="period">/mo</span>
                </div>
                <h3 class="card-title">Advanced Panel</h3>
              </div>
              <div class="card-features">
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>Enhanced Anti-Ban System</span>
                </div>
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>Full ESP & Wallhack</span>
                </div>
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>Basic Aimbot</span>
                </div>
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>24/7 Priority Support</span>
                </div>
                <div class="feature-item disabled">
                  <i class='bx bx-x-circle'></i>
                  <span>Custom Scripts</span>
                </div>
              </div>
              <div class="card-action">
                <button class="action-button">
                  <span>Get Started</span>
                  <i class='bx bx-right-arrow-alt'></i>
                </button>
              </div>
            </div>
          </swiper-slide>

          <!-- Ultimate Plan -->
          <swiper-slide>
            <div class="pricing-card" data-aos="fade-up" data-aos-delay="200">
              <div class="card-badge">ULTIMATE</div>
              <div class="card-icon">
                <i class='bx bx-diamond'></i>
              </div>
              <div class="card-header">
                <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">99</span>
                  <span class="period">/mo</span>
                </div>
                <h3 class="card-title">Ultimate Panel</h3>
              </div>
              <div class="card-features">
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>Military-Grade Anti-Ban</span>
                </div>
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>Premium ESP & Wallhack</span>
                </div>
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>Advanced Aimbot</span>
                </div>
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>Custom Scripts</span>
                </div>
                <div class="feature-item">
                  <i class='bx bx-check-circle'></i>
                  <span>VIP Support</span>
                </div>
              </div>
              <div class="card-action">
                <button class="action-button">
                  <span>Get Started</span>
                  <i class='bx bx-right-arrow-alt'></i>
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="pricing-footer" data-aos="fade-up" data-aos-delay="300">
          <div class="custom-plan">
            <div class="custom-plan-content">
              <h3>Need a Custom Solution?</h3>
              <p>Contact us for a personalized plan tailored to your specific requirements</p>
            </div>
            <button class="custom-plan-button">
              <span>Contact Us</span>
              <i class='bx bx-envelope'></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Diamonds Section -->
    <section class="diamond-preview sec" id="diamonds">
      <div id="diamond-particles-js" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></div>
      <div class="diamonds-container">
        <div class="diamonds-header" data-aos="fade-up">
          <h1>Free Fire Diamonds</h1>
          <p>Get your Free Fire diamonds at the best prices with 100% reliability and instant delivery</p>
        </div>

        <div class="trust-badges" data-aos="fade-up" data-aos-delay="100">
          <div class="trust-badge">
            <i class='bx bx-shield-quarter'></i>
            <h3>100% Safe</h3>
            <p>Secure transactions with encrypted payment and guaranteed delivery. Your security is our top priority.</p>
          </div>
          <div class="trust-badge">
            <i class='bx bx-bolt'></i>
            <h3>Instant Delivery</h3>
            <p>Get your diamonds within minutes of purchase. No waiting, no delays - instant gratification guaranteed.</p>
          </div>
          <div class="trust-badge">
            <i class='bx bx-support'></i>
            <h3>24/7 Support</h3>
            <p>Round the clock customer service. Our dedicated team is always ready to assist you with any queries.</p>
          </div>
        </div>

        <div class="purchase-section" 
          data-aos="fade-up" 
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <div class="dark-overlay"></div>
          <div class="purchase-content">
            <h2 class="purchase-title">Ready to Get Your Diamonds?</h2>
            <p class="purchase-description">Visit our secure purchase page to get your Free Fire diamonds at the best prices!</p>
            <div class="purchase-button-wrapper">
              <a href="#" class="purchase-button">
                <span class="button-content">
                  <i class='bx bx-diamond'></i>
                  <span>Purchase Now</span>
                  <i class='bx bx-right-arrow-alt'></i>
                </span>
                <span class="button-particles"></span>
              </a>
              <span class="button-pulse"></span>
            </div>
          </div>
          <div class="purchase-decorations">
            <div class="floating-diamond diamond-1"></div>
            <div class="floating-diamond diamond-2"></div>
            <div class="floating-diamond diamond-3"></div>
            <div class="floating-diamond diamond-4"></div>
            <div class="floating-diamond diamond-5"></div>
            
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap Section -->
    <section class="roadmap-preview sec" id="roadmap">
      <div id="particles-js" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></div>
      <div class="preview-container" data-aos="fade-up">
        <div class="preview-header">
          <h1>Master in Android Game Modding</h1>
          <p>Embark on a comprehensive journey to master the art of Free Fire panel development. From basic concepts to
            advanced techniques, our roadmap guides you through every step.</p>
        </div>

        <div class="features-grid">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-icon">📚</div>
            <h3>Zero to Hero Journey</h3>
            <p>Start from absolute basics and progress through 34 comprehensive episodes, mastering Android game modding
              step by step.</p>
          </div>

          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-icon">🎮</div>
            <h3>Android Game Modding</h3>
            <p>Learn the complete process of Android game modification, from understanding game architecture to
              implementing advanced features.</p>
          </div>

          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div class="feature-icon">🔍</div>
            <h3>Memory Modification</h3>
            <p>Master memory manipulation techniques using tools like Cheat Engine, GameGuardian, and custom memory
              scanners.</p>
          </div>

          <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
            <div class="feature-icon">⚡</div>
            <h3>Advanced Tools & Techniques</h3>
            <p>Develop professional-grade modding tools, implement anti-detection systems, and create custom game
              modifications.</p>
          </div>
        </div>

        <div class="cta-container">
          <NuxtLink to="/roadmap" class="cta-button">View Complete Roadmap</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact-us">
      <div id="contact-particles-js" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></div>
      <div class="contact-container">
        <div class="contact-header" data-aos="fade-up">
          <h1><span class="gradient">Contact Us</span></h1>
          <p>Get in touch with us for any questions or support</p>
        </div>

        <form class="contact-form" data-aos="fade-up" data-aos-delay="200" id="contactForm">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" minlength="2" maxlength="50">
            <div class="error-message">Name must be at least 2 characters</div>
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
            <div class="error-message">Please enter a valid email address</div>
          </div>

          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" name="message" required placeholder="Type your message here..." minlength="10" maxlength="1000"></textarea>
            <div class="error-message">Message must be at least 10 characters</div>
          </div>

          <div class="form-footer">
            <button type="submit" class="send-button">
              <i class='bx bx-send'></i> Send Message
            </button>
            <p>We'll get back to you as soon as possible</p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Define modules for Swiper
const modules = [Pagination, Navigation];

onMounted(() => {

  
  // Force reload particles.js
  const particlesScript = document.createElement('script');
  particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  particlesScript.onload = initializeParticles;
  document.head.appendChild(particlesScript);


  // Initialize AOS
  if (typeof window !== 'undefined') {
    import('aos').then(AOS => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        disable: '.brand-title, .img-wrapper' // Disable AOS for these elements
      });
    });
  }

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.action-button, .custom-plan-button, .send-button, .purchase-button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Form input animations
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focus');
    });
    input.addEventListener('blur', function() {
      if (this.value === '') {
        this.parentElement.classList.remove('focus');
      }
    });
  });

  // Simple form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Reset validation states
      document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error', 'success');
      });
      
      // Validate name
      if (nameInput.value.trim().length < 2) {
        nameInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        nameInput.parentElement.classList.add('success');
      }
      
      // Validate email
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(emailInput.value)) {
        emailInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        emailInput.parentElement.classList.add('success');
      }
      
      // Validate message
      if (messageInput.value.trim().length < 10) {
        messageInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        messageInput.parentElement.classList.add('success');
      }
      
      if (isValid) {
        alert('Form submitted successfully! (This is a demo)');
        this.reset();
        document.querySelectorAll('.form-group').forEach(group => {
          group.classList.remove('success');
        });
      }
    });
  }

  // Function to initialize all particles
  function initializeParticles() {
    setTimeout(() => {
      // Particles for pricing section - light blue accent (minimalistic)
      if (document.getElementById('pricing-particles')) {
        particlesJS('pricing-particles', {
          particles: {
            number: { value: 50, density: { enable: true, value_area: 1000 } },
            color: { value: "#00C3FF" }, // Light blue accent
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00C3FF", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
          },
          interactivity: {
            detect_on: "canvas",
            events: { 
              onhover: { enable: true, mode: "repulse" }, 
              onclick: { enable: false, mode: "push" } 
            },
            modes: { 
              repulse: { distance: 100, duration: 0.4 }
            }
          }
        });
      }

      // Particles for diamond section - gold accent (very minimalistic)
      if (document.getElementById('diamond-particles-js')) {
        particlesJS('diamond-particles-js', {
          particles: {
            number: { value: 30, density: { enable: true, value_area: 1500 } },
            color: { value: "#FFD700" }, // Gold accent
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#FFD700", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out" }
          },
          interactivity: {
            detect_on: "canvas",
            events: { 
              onhover: { enable: true, mode: "grab" }, 
              onclick: { enable: false }
            },
            modes: { 
              grab: { distance: 100, line_linked: { opacity: 0.3 } }
            }
          }
        });
      }

      // Particles for roadmap section - lime green accent (minimalistic)
      if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
          particles: {
            number: { value: 40, density: { enable: true, value_area: 1200 } },
            color: { value: "#32CD32" }, // Lime green accent
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#32CD32", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
          },
          interactivity: {
            detect_on: "canvas",
            events: { 
              onhover: { enable: true, mode: "bubble" }, 
              onclick: { enable: false }
            },
            modes: { 
              bubble: { distance: 100, size: 4, duration: 0.3 }
            }
          }
        });
      }

      // Particles for contact section - teal accent (minimalistic)
      if (document.getElementById('contact-particles-js')) {
        particlesJS('contact-particles-js', {
          particles: {
            number: { value: 35, density: { enable: true, value_area: 1200 } },
            color: { value: "#00BCD4" }, // Teal accent
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#00BCD4", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1.8, direction: "none", random: true, straight: false, out_mode: "out" }
          },
          interactivity: {
            detect_on: "canvas",
            events: { 
              onhover: { enable: true, mode: "repulse" }, 
              onclick: { enable: false }
            },
            modes: { 
              repulse: { distance: 80, duration: 0.4 }
            }
          }
        });
      }
    }, 1000); // Delay initialization to ensure DOM elements are ready
  }

  // Subscriber count animation
  const subCount = document.querySelector('.sub-count');
  if (subCount) {
    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true; // Ensure animation only runs once
          
          const finalCount = parseInt(subCount.getAttribute('data-count'));
          let currentCount = 0;
          const duration = 2000; // 2 seconds
          const increment = finalCount / (duration / 16); // 60fps

          const updateCount = () => {
            currentCount = Math.min(currentCount + increment, finalCount);
            // Update only the text content, not affecting the layout
            subCount.textContent = Math.floor(currentCount).toLocaleString();

            if (currentCount < finalCount) {
              requestAnimationFrame(updateCount);
            }
          };

          updateCount();
        }
      });
    }, {
      threshold: 0.5 // Trigger when at least 50% of the element is visible
    });

    observer.observe(subCount);
  }
});
</script> 