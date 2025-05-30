<template>
  <div class="pricing-page">
    <section class="pricing-section">
      <div class="section-header">
        <h2 class="section-title">Our Pricing Plans</h2>
        <p class="section-subtitle">Choose the perfect plan for your gaming needs</p>
      </div>
      
      <div class="pricing-container">
        <!-- Basic Plan -->
        <div class="pricing-card">
          <div class="pricing-header">
            <h3>Basic Panel</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">19</span>
              <span class="period">/month</span>
            </div>
          </div>
          <div class="pricing-features">
            <ul>
              <li><i class='bx bx-check'></i> Basic Anti-Ban Protection</li>
              <li><i class='bx bx-check'></i> Standard ESP Features</li>
              <li><i class='bx bx-check'></i> 7-Day Support</li>
              <li><i class='bx bx-x'></i> Advanced Aimbot</li>
              <li><i class='bx bx-x'></i> Priority Updates</li>
            </ul>
          </div>
          <div class="pricing-action">
            <button class="btn-purchase">Purchase Now</button>
          </div>
        </div>
        
        <!-- Pro Plan -->
        <div class="pricing-card featured">
          <div class="pricing-badge">Popular</div>
          <div class="pricing-header">
            <h3>Pro Panel</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">39</span>
              <span class="period">/month</span>
            </div>
          </div>
          <div class="pricing-features">
            <ul>
              <li><i class='bx bx-check'></i> Advanced Anti-Ban Protection</li>
              <li><i class='bx bx-check'></i> Premium ESP Features</li>
              <li><i class='bx bx-check'></i> 24/7 Priority Support</li>
              <li><i class='bx bx-check'></i> Advanced Aimbot</li>
              <li><i class='bx bx-check'></i> Priority Updates</li>
            </ul>
          </div>
          <div class="pricing-action">
            <button class="btn-purchase">Purchase Now</button>
          </div>
        </div>
        
        <!-- Premium Plan -->
        <div class="pricing-card">
          <div class="pricing-header">
            <h3>Ultimate Panel</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">59</span>
              <span class="period">/month</span>
            </div>
          </div>
          <div class="pricing-features">
            <ul>
              <li><i class='bx bx-check'></i> Ultimate Anti-Ban Protection</li>
              <li><i class='bx bx-check'></i> All Premium Features</li>
              <li><i class='bx bx-check'></i> 24/7 VIP Support</li>
              <li><i class='bx bx-check'></i> Custom Aimbot Settings</li>
              <li><i class='bx bx-check'></i> Early Access to New Features</li>
            </ul>
          </div>
          <div class="pricing-action">
            <button class="btn-purchase">Purchase Now</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// You can add any pricing-specific logic here
</script>

<style scoped>
.pricing-page {
  padding: 80px 0;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto;
}

.pricing-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 40px 30px;
  width: 100%;
  max-width: 350px;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(0, 170, 167, 0.3);
}

.pricing-card.featured {
  border: 2px solid var(--primary-color);
  transform: scale(1.05);
  z-index: 1;
  box-shadow: 0 15px 50px rgba(0, 170, 167, 0.3);
}

.pricing-card.featured:hover {
  transform: translateY(-10px) scale(1.05);
}

.pricing-badge {
  position: absolute;
  top: -15px;
  right: 30px;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.pricing-header {
  text-align: center;
  margin-bottom: 30px;
}

.pricing-header h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, #ccc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.price {
  font-family: 'Rajdhani', sans-serif;
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.currency {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-right: 5px;
}

.amount {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
}

.period {
  font-size: 1rem;
  color: #aaa;
  margin-left: 5px;
}

.pricing-features ul {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.pricing-features li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
}

.pricing-features li i {
  margin-right: 10px;
  font-size: 1.2rem;
}

.pricing-features li .bx-check {
  color: var(--primary-color);
}

.pricing-features li .bx-x {
  color: #ff6b6b;
}

.pricing-action {
  text-align: center;
}

.btn-purchase {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border: none;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 170, 167, 0.3);
}

.btn-purchase:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 170, 167, 0.5);
}

@media (max-width: 768px) {
  .pricing-container {
    flex-direction: column;
    align-items: center;
  }
  
  .pricing-card {
    max-width: 100%;
    margin-bottom: 30px;
  }
  
  .pricing-card.featured {
    transform: scale(1);
    order: -1;
  }
  
  .pricing-card.featured:hover {
    transform: translateY(-10px);
  }
}
</style>
