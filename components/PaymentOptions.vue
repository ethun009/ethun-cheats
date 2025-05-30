<template>
  <div class="payment-options">
    <h2 class="payment-title">Select Payment Method</h2>
    <div class="payment-methods">
      <NuxtLink to="/transaction-bkash" class="payment-method">
        <img src="/assets/bkash.png" alt="bKash" class="payment-logo">
        <span class="payment-name">bKash</span>
      </NuxtLink>
      <NuxtLink to="/transaction-nagad" class="payment-method">
        <img src="/assets/nagad.png" alt="Nagad" class="payment-logo">
        <span class="payment-name">Nagad</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.payment-options {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.payment-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.payment-methods {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.payment-method {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.payment-method:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.payment-logo {
  height: 60px;
  margin-bottom: 0.5rem;
}

.payment-name {
  font-weight: 500;
  color: #333;
}
</style> 