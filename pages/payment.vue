<template>
  <div class="payment-page">
    <div class="payment-container">
      <div class="back-button-container">
        <button @click="goToHomepage" class="back-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 15L1 8L8 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Back to Home</span>
        </button>
      </div>
      
      <h1 class="payment-header">Complete Your Payment</h1>
      <div class="payment-details">
        <div class="payment-item">
          <span class="payment-label">Product:</span>
          <span class="payment-value">Premium Panel</span>
        </div>
        <div class="payment-item">
          <span class="payment-label">Amount:</span>
          <span class="payment-value">৳ 499</span>
        </div>
      </div>
      <PaymentOptions />
    </div>
  </div>
</template>

<script setup>
// Just a demonstration page for the payment options
definePageMeta({
  layout: 'transaction'
});

function goToHomepage() {
  navigateTo('/');
}
</script>

<style scoped>
.payment-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  padding: 2rem 1rem;
}

.payment-container {
  max-width: 800px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.back-button-container {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0.5rem;
}

.back-button:hover {
  color: white;
}

.payment-header {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.payment-details {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.payment-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.payment-item:last-child {
  margin-bottom: 0;
}

.payment-label {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.payment-value {
  font-weight: 600;
  color: white;
}

@media (max-width: 640px) {
  .payment-container {
    padding: 1.5rem;
  }
  
  .payment-header {
    font-size: 1.75rem;
    margin-top: 2rem;
  }
}
</style> 