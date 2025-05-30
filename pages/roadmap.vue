<template>
  <div class="roadmap-container">
    <div id="particles-js"></div>

    <header data-aos="fade-down">
      <h1>ETHUN CHEATS</h1>
      <p>Your Ultimate Guide to Game Modding</p>
      <NuxtLink to="/" class="back-button">
        <i class="bx bx-arrow-back"></i> Back to Home
      </NuxtLink>
    </header>

    <div class="progress-container" data-aos="fade-up">
      <div class="progress-background">
        <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
      </div>
      <div class="progress-text">Completed: {{ progressPercentage }}%</div>
    </div>

    <h2 class="section-title" data-aos="fade-up">Episode Roadmap</h2>
    <div class="episodes">
      <!-- Episode cards with data-aos attributes -->
      <div 
        v-for="(episode, index) in episodes" 
        :key="index" 
        class="episode" 
        :class="{ completed: episode.completed }"
        data-aos="fade-up" 
        :data-aos-delay="100 + (index * 100)"
        @click="toggleEpisodeStatus(index)"
      >
        <h2>{{ episode.title }}</h2>
        <p>{{ episode.description }}</p>
        <a :href="episode.videoLink" class="video-link" @click.stop>Watch Now</a>
      </div>
    </div>

    <div class="journey" data-aos="fade-up">
      <h2>Inspiration Behind This Series</h2>
      <p>The best way to find yourself is to lose yourself in the service of others. When we share our knowledge, we not only empower others but also deepen our own understanding. Teaching is not just about imparting information; it's about inspiring others to grow, question, and explore new horizons.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useHead } from 'nuxt/app';

// Add page metadata
useHead({
  title: 'Roadmap - ETHUN CHEATS',
  meta: [
    { name: 'description', content: 'Master Android game modding with our comprehensive roadmap. Learn Free Fire panel development from basics to advanced techniques.' },
    { name: 'keywords', content: 'ethun cheats, free fire, game modding, roadmap, tutorial series, android game hacking' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' }
  ]
});

const episodes = ref([
  {
    title: 'Episode 1: Installing Visual Studio & Basic Windows Form App',
    description: 'Learn how to install Visual Studio and create your first basic Windows Form application for panel development.',
    videoLink: 'https://youtu.be/UpTsUr4-aPY?si=p-NALN5uyRNNjZca',
    completed: false
  },
  {
    title: 'Episode 2: Basic Sniper Functions (Auto Aim & Quick Switch)',
    description: 'Implement core sniper functions such as auto-aim and quick weapon switching to enhance gameplay precision.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 3: Aimbot Neck Basic',
    description: 'Create an aimbot that targets the neck area for more consistent hits without appearing too obvious.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 4: Advanced Method of Injecting (More Dynamic)',
    description: 'Explore more advanced, dynamic methods of code injection for greater flexibility and less detection.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 5: Adding Location',
    description: 'Integrate location tracking into your panel to enhance features such as player position monitoring.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 6: Adding Keyauth for Login',
    description: 'Implement Keyauth for secure user authentication, allowing login and license management.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 7: How to Dump Free Fire',
    description: 'Learn how to extract data from Free Fire using memory dumping techniques.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 8: Finding AOB Codes',
    description: 'Discover how to scan and locate array of byte (AOB) patterns in the game\'s memory.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 9: Repairing AOB Codes',
    description: 'Fix and repair broken or outdated AOB codes to keep your panel functional after updates.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 10: Permanent Code for Sniper Auto Aim',
    description: 'Make your sniper auto-aim functionality permanent by implementing a stable memory modification.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 11: Adding Hot Key',
    description: 'Add hotkeys to your panel for quick and easy access to important features.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 12: Mobile Control P1 (C# Server)',
    description: 'Set up the C# server to enable mobile control of your panel remotely.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 13: Mobile Control P2 (Making Website)',
    description: 'Create a simple website interface for controlling your panel via mobile devices.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 14: Mobile Control P3 (Hosting the Web Inside the EXE)',
    description: 'Host the website inside your panel\'s executable to integrate web-based controls.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 15: Mobile Control P4 (Using QR Code for Hosted Website)',
    description: 'Generate a QR code for users to easily access the hosted website from their mobile device.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 16: Adding Voice Control in Panel',
    description: 'Implement voice recognition for hands-free control of your panel\'s functions.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 17: Hidden & Stream Mode',
    description: 'Add a hidden or streamer mode to hide sensitive features when streaming or sharing screens.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 18: Hiding from Task Manager and Process Hacker',
    description: 'Learn techniques to hide your panel from task manager and process monitoring tools like Process Hacker.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 19: Basic Panel Using C++',
    description: 'Develop a basic version of your panel using C++ instead of C#.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 20: Automatically Update the Panel',
    description: 'Set up an automatic update system for your panel, ensuring users always have the latest version.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 21: Automatically Update Codes Only (Without Changing the EXE)',
    description: 'Implement a system to update just the codes without needing to distribute a new executable.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 22: Login System with Google Drive',
    description: 'Create a secure login system that integrates with Google Drive for authentication.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 23: Protect Users from Incoming Patch',
    description: 'Develop safeguards to protect your users from game patches that could break functionality.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 24: Turn On/Off Aimbot Instantly',
    description: 'Add a toggle function to quickly enable or disable the aimbot feature.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 25: Aimbot Legit (Left Click Head, Right Click Body Shot)',
    description: 'Create a more legitimate aimbot that allows for headshots with left-click and body shots with right-click.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 26: Protect Panel from Crackers',
    description: 'Explore methods to protect your panel from being cracked or reverse-engineered.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 27: Basic Console App',
    description: 'Build a simple console application to assist with back-end operations of your panel.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 28: Turn Off/On Sniper Functions Instantly',
    description: 'Add quick toggle functionality to enable or disable sniper-related features.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 29: Simple Discord Bot',
    description: 'Create a simple bot for Discord that integrates with your panel for notifications or control.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 30: Introduction to STREAMER Panel P1',
    description: 'Learn the basics of setting up a streamer mode panel for added privacy during broadcasts.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 31: STREAMER Panel P2 (Child EXE)',
    description: 'Develop the child executable for the streamer panel, separating it from the main application.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 32: STREAMER Panel P3 (Parent/Setup EXE)',
    description: 'Create the parent or setup executable that links to the child EXE for streamer panel functions.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 33: Making DLL Panel',
    description: 'Develop a dynamic link library (DLL) panel for injecting features into external processes.',
    videoLink: '#',
    completed: false
  },
  {
    title: 'Episode 34: Making New Aimbot (With Counting Moving Players)',
    description: 'Create an advanced aimbot that adjusts based on the number of moving players in the game.',
    videoLink: '#',
    completed: false
  }
]);

// Computed property for progress percentage
const progressPercentage = computed(() => {
  const completedCount = episodes.value.filter(episode => episode.completed).length;
  return Math.round((completedCount / episodes.value.length) * 100);
});

// Toggle episode completion status
const toggleEpisodeStatus = (index) => {
  episodes.value[index].completed = !episodes.value[index].completed;
  saveProgress();
};

// Load progress from localStorage
const loadProgress = () => {
  for (let i = 0; i < episodes.value.length; i++) {
    const savedStatus = localStorage.getItem(`episode-${i + 1}`);
    if (savedStatus === 'true') {
      episodes.value[i].completed = true;
    }
  }
};

// Save progress to localStorage
const saveProgress = () => {
  for (let i = 0; i < episodes.value.length; i++) {
    localStorage.setItem(`episode-${i + 1}`, episodes.value[i].completed);
  }
};

// Initialize particles.js and AOS when component is mounted
onMounted(() => {
  loadProgress();
  
  // Import particles.js and AOS dynamically for client-side only
  if (process.client) {
    // Use particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#00E676" },
          shape: { type: "circle" },
          opacity: { value: 0.4, random: true },
          size: { value: 3, random: true },
          line_linked: { 
            enable: true, 
            distance: 150, 
            color: "#00E676", 
            opacity: 0.2, 
            width: 1 
          },
          move: { 
            enable: true, 
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: { 
            onhover: { enable: true, mode: "grab" }, 
            onclick: { enable: true, mode: "push" } 
          },
          modes: { 
            grab: { distance: 140, line_linked: { opacity: 1 } }, 
            push: { particles_nb: 4 } 
          }
        },
        retina_detect: true
      });
    }
    
    // Use AOS
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }).catch(err => console.error('Failed to load AOS', err));
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.roadmap-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #0a0a0a;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  padding-top: 70px;
}

/* Particles.js container */
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 0;
}

header {
  padding: 2em;
  text-align: center;
  width: 100%;
  color: #ffffff;
  z-index: 1;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

header h1 {
  font-size: 2.8em;
  font-weight: bold;
  margin-bottom: 0.5em;
  background: linear-gradient(45deg, #B2FF59, #00E676);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 3s ease infinite;
  transform: translateY(0px)!important;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

header p {
  font-size: 1.5em;
  color: #B2FF59;
  text-shadow: 0 0 10px rgba(178, 255, 89, 0.5);
}

.back-button {
  display: inline-flex;
  align-items: center;
  margin-top: 15px;
  padding: 8px 20px;
  background: rgba(50, 205, 50, 0.2);
  color: #B2FF59;
  border: 1px solid rgba(50, 205, 50, 0.4);
  border-radius: 30px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(50, 205, 50, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(50, 205, 50, 0.2);
}

.back-button i {
  margin-right: 8px;
  font-size: 1.2rem;
}

.section-title {
  font-size: 2.2em;
  font-weight: bold;
  text-align: center;
  margin: 2em 0;
  color: #00E676;
  position: relative;
  padding-bottom: 15px;
  z-index: 1;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, #B2FF59, #00E676);
  border-radius: 3px;
}

.episodes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5em;
  padding: 1.5em;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 1;
  width: 100%;
}

.episode {
  background: rgba(28, 28, 30, 0.8);
  border-radius: 20px;
  padding: 2em;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(76, 175, 80, 0.2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  cursor: pointer;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.episode::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(76, 175, 80, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.episode.completed {
  background: rgba(76, 175, 80, 0.1);
  border-color: #4CAF50;
}

.episode.completed::after {
  content: 'DONE';
  position: absolute;
  top: 15px;
  right: 15px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  background: #4CAF50;
  padding: 4px 12px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
  letter-spacing: 0.5px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.episode:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: #4CAF50;
}

.episode:hover::before {
  transform: translateX(100%);
}

.episode h2 {
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #B2FF59;
  position: relative;
  padding-bottom: 10px;
  padding-right: 40px;
}

.episode h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: #4CAF50;
  transition: width 0.3s ease;
}

.episode:hover h2::after {
  width: 100px;
}

.episode p {
  font-size: 1.1em;
  color: #f5f5f5;
  line-height: 1.6;
  margin-bottom: 20px;
}

.episode .video-link {
  position: relative;
  color: #B2FF59;
  font-size: 1em;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 20px;
  background: rgba(76, 175, 80, 0.1);
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: auto;
}

.episode .video-link:hover {
  background: rgba(76, 175, 80, 0.2);
  transform: translateY(-2px);
}

/* Progress Bar */
.progress-container {
  width: 80%;
  max-width: 800px;
  margin: 2em auto;
  z-index: 1;
  background: rgba(28, 28, 30, 0.8);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(76, 175, 80, 0.2);
}

.progress-background {
  background-color: rgba(117, 117, 117, 0.2);
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}

.progress-bar {
  background: linear-gradient(90deg, #B2FF59, #00E676);
  height: 100%;
  border-radius: 15px;
  transition: width 0.5s ease;
  position: relative;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.progress-text {
  text-align: center;
  margin-top: 1em;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: 500;
}

/* Journey Section */
.journey {
  background: rgba(44, 44, 44, 0.8);
  padding: 3em;
  text-align: center;
  color: #ffffff;
  margin: 2em 0;
  z-index: 1;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(76, 175, 80, 0.2);
  max-width: 800px;
  margin: 2em auto;
  width: 80%;
}

.journey h2 {
  font-size: 2.5em;
  margin-bottom: 1em;
  background: linear-gradient(45deg, #B2FF59, #00E676);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.journey p {
  font-size: 1.2em;
  color: #B2FF59;
  line-height: 1.8;
}

/* Responsive styles */
@media screen and (max-width: 1200px) {
  .episodes {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.2em;
    padding: 1.2em;
  }

  .episode {
    padding: 1.5em;
    min-height: 220px;
  }

  .episode h2 {
    font-size: 1.3em;
  }

  .episode p {
    font-size: 1em;
  }
}

@media screen and (max-width: 768px) {
  .episodes {
    grid-template-columns: 1fr;
    gap: 1em;
    padding: 1em;
  }

  .episode {
    padding: 1.2em;
    min-height: 200px;
  }

  .episode h2 {
    font-size: 1.2em;
    padding-right: 30px;
  }

  .episode p {
    font-size: 0.95em;
  }

  .episode.completed::after {
    font-size: 11px;
    padding: 3px 10px;
    top: 12px;
    right: 12px;
  }
  
  .journey, .progress-container {
    width: 90%;
    padding: 1.5em;
  }
}

@media screen and (max-width: 480px) {
  .episodes {
    padding: 0.8em;
  }

  .episode {
    padding: 1em;
    min-height: 180px;
  }

  .episode h2 {
    font-size: 1.1em;
    margin-bottom: 0.8em;
  }

  .episode p {
    font-size: 0.9em;
    line-height: 1.4;
  }

  .episode .video-link {
    padding: 6px 12px;
    font-size: 0.9em;
  }

  .episode.completed::after {
    font-size: 10px;
    padding: 2px 8px;
    top: 10px;
    right: 10px;
  }
  
  .journey, .progress-container {
    width: 95%;
    padding: 1em;
  }
  
  header h1 {
    font-size: 2em;
  }
  
  header p {
    font-size: 1.2em;
  }
  
  .back-button {
    padding: 6px 15px;
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 1.8em;
    margin: 1.5em 0;
  }
  
  .journey h2 {
    font-size: 2em;
  }
  
  .journey p {
    font-size: 1em;
    line-height: 1.6;
  }
}
</style> 