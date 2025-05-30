<template>
  <div class="admin-login-page">
    <canvas id="network-bg"></canvas>
    <div class="login-container">
      <div class="login-header">
        <h1>Admin Login</h1>
        <p>Sign in to access the admin dashboard</p>
      </div>
      <div class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password">
        </div>
        <div id="error-message" class="login-error" v-if="error">{{ error }}</div>
        <button @click="handleLogin" class="btn btn-primary" :disabled="loading">
          {{ loading ? 'Signing in...' : 'Sign In' }}
        </button>
        <div class="auth-divider">
          <span>or continue with</span>
        </div>
        <button @click="handleGoogleLogin" class="google-auth" :disabled="loading">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google">
          <span>Google</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'transaction',
});

import { ref, onMounted } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { useRouter } from 'vue-router';

const router = useRouter();
const { signInWithEmail, signInWithGoogle, error, loading, isAdmin } = useAuth();

const email = ref('');
const password = ref('');

async function handleLogin() {
  if (!email.value || !password.value) {
    error.value = "Please enter both email and password";
    return;
  }

  await signInWithEmail(email.value, password.value);
  
  if (!error.value && isAdmin.value) {
    router.push('/admin/dashboard');
  } else if (!error.value) {
    error.value = "You don't have admin access";
  }
}

async function handleGoogleLogin() {
  await signInWithGoogle();
}

onMounted(() => {
  // Animated network background
  const canvas = document.getElementById('network-bg');
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth, h = window.innerHeight;
  
  function resize() {
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w; canvas.height = h;
  }
  
  window.addEventListener('resize', resize);
  resize();

  // Network points
  const points = Array.from({length: 32}, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3
  }));

  function draw() {
    ctx.clearRect(0,0,w,h);
    // Draw lines
    for(let i=0;i<points.length;i++){
      for(let j=i+1;j<points.length;j++){
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < 180) {
          ctx.strokeStyle = 'rgba(0,170,167,'+(1-dist/180)*0.5+')';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }
    // Draw points
    for(const p of points) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, 2*Math.PI);
      ctx.fillStyle = 'rgba(0,170,167,0.8)';
      ctx.shadowColor = '#00aaa7';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function animate() {
    for(const p of points) {
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;
    }
    draw();
    requestAnimationFrame(animate);
  }
  animate();
});
</script>

<style scoped>
:root {
  --primary-color: #00aaa7;
  --secondary-color: #7f42a7;
  --bg-color: #080808;
  --text-color: #fff;
  --danger-color: #e53935;
  --success-color: #4CAF50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rajdhani', sans-serif;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

#network-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}

.admin-login-page {
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-color);
  z-index: 100;
  overflow: hidden;
}

.login-container {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, -60%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.login-header p {
  color: #ccc;
  font-size: 1rem;
}

.form-group {
  margin-bottom: 20px;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #ccc;
  font-size: 0.95rem;
}

.form-group input {
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-color);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(0, 170, 167, 0.2);
}

.form-group i {
  position: absolute;
  right: 12px;
  top: 40px;
  color: #666;
}

.btn {
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  width: 100%;
  text-align: center;
}

.btn-primary {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  box-shadow: 0 4px 12px rgba(0, 170, 167, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 170, 167, 0.3);
}

.login-error {
  color: var(--danger-color);
  font-size: 0.9rem;
  margin-top: 10px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(229, 57, 53, 0.1);
}

.auth-divider {
  text-align: center;
  margin: 20px 0;
}

.auth-divider span {
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.google-auth {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.google-auth img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

@media (max-width: 480px) {
  .login-container {
    padding: 30px 20px;
  }

  .login-header h1 {
    font-size: 1.8rem;
  }
}
</style> 