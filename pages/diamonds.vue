<template>
  <div class="diamonds-page">
    <!-- Background Elements -->
    <div class="background-gradient"></div>
    <div id="diamonds-particles"></div>
    <div class="floating-element"></div>
    <div class="floating-element"></div>
    <div class="floating-element"></div>

    <!-- Content Container -->
    <div class="content-container">
      <!-- Page Title -->
      <div class="page-header">
        <h1 class="page-title">Free Fire Diamonds</h1>
        <p class="page-subtitle">Get your Free Fire diamonds at the best prices with instant delivery</p>
      </div>

      <!-- Cards Section -->
      <div class="cards-container">
        <!-- Diamonds Offer Card -->
        <div class="offer-card">
          <div class="card-glow"></div>
          <div class="card-badge">POPULAR</div>
          <div class="card-header">
            <div class="diamond-icon">
              <i class='bx bxs-diamond'></i>
            </div>
            <h3 class="card-title">Diamonds Offer</h3>
          </div>
          <div class="card-content">
            <p class="card-description">Get exclusive diamond packages with special discounts. Instant delivery to your Free Fire account.</p>
            <button class="view-button">
              <span>View Offers</span>
              <i class='bx bx-right-arrow-alt'></i>
            </button>
          </div>
        </div>

        <!-- Weekly/Monthly Offer Card -->
        <div class="offer-card">
          <div class="card-glow"></div>
          <div class="card-badge">BEST VALUE</div>
          <div class="card-header">
            <div class="diamond-icon">
              <i class='bx bx-calendar-star'></i>
            </div>
            <h3 class="card-title">Subscription Plans</h3>
          </div>
          <div class="card-content">
            <p class="card-description">Save more with our weekly and monthly subscription plans. Regular diamonds delivery with bonus rewards.</p>
            <button class="view-button">
              <span>View Plans</span>
              <i class='bx bx-right-arrow-alt'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiamondsPage',
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      if (window.particlesJS) {
        window.particlesJS('diamonds-particles', {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#6c5ce7", "#00cec9", "#fd79a8"]
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
            },
            opacity: {
              value: 0.3,
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
              color: "#a29bfe",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 150,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
      }
    }
  },
  head() {
    return {
      title: 'Buy Diamonds - ETHUN CHEATS',
      meta: [
        { hid: 'description', name: 'description', content: 'Get your Free Fire diamonds at the best prices with instant delivery and 100% reliability' }
      ]
    }
  }
}
</script>