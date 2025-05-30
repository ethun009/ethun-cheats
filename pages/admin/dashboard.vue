<template>
  <div class="admin-page">
    <div class="admin-container">
      <div class="admin-header">
        <h1>Admin Panel</h1>
        <button class="btn btn-edit">Logout</button>
      </div>

      <div class="admin-tabs">
        <button class="tab-button active">Packages</button>
        <button class="tab-button">Wallet Top-ups</button>
        <button class="tab-button">Diamond & Membership</button>
        <button class="tab-button">Panel Requests</button>
        <button class="tab-button">Messages <span class="message-badge">1</span></button>
      </div>

      <div class="tab-content active">
        <h2>Manage Packages</h2>
        
        <div class="package-type-tabs">
          <button class="package-tab-button active">Diamond Packages</button>
          <button class="package-tab-button">Membership Packages</button>
          <button class="package-tab-button">Panel Plans</button>
        </div>

          <div class="package-grid">
          <!-- Sample Package Cards -->
          <div class="package-card">
            <span class="status-badge status-available">Available</span>
            <h3>25 Diamond</h3>
            <div class="package-form">
                <div class="form-group">
                  <label>Package Name</label>
                <input type="text" value="25 Diamond" readonly>
                </div>
                <div class="form-group">
                  <label>Price</label>
                <input type="number" value="22" readonly>
                </div>
                <div class="form-group">
                  <label>Status</label>
                <select disabled>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>
          </div>
        </div>

          <div class="package-card">
            <span class="status-badge status-available">Available</span>
                <h3>Weekly Membership</h3>
            <div class="package-form">
                  <div class="form-group">
                    <label>Package Name</label>
                <input type="text" value="1x Weekly Membership" readonly>
                  </div>
                  <div class="form-group">
                    <label>Price</label>
                <input type="number" value="150" readonly>
                  </div>
                  <div class="form-group">
                    <label>Status</label>
                <select disabled>
                      <option value="available">Available</option>
                      <option value="unavailable">Unavailable</option>
                    </select>
                  </div>
            </div>
          </div>

          <div class="package-card">
            <span class="status-badge status-available">Available</span>
            <h3>Basic Panel</h3>
            <div class="package-form">
                  <div class="form-group">
                    <label>Package Name</label>
                <input type="text" value="Basic Panel" readonly>
                  </div>
                  <div class="form-group">
                    <label>Price</label>
                <input type="number" value="19" readonly>
                  </div>
                  <div class="form-group">
                <label>Features</label>
                <textarea readonly>Basic Anti-Ban Protection, Standard ESP Features, 7-Day Support</textarea>
                </div>
                <div class="form-group">
                  <label>Status</label>
                <select disabled>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>
                </div>
            </div>
          </div>
        </div>

      <div class="tab-content">
        <h2>Recent Transactions</h2>
        <table class="requests-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>T001</td>
              <td>user123</td>
              <td>50 Diamond</td>
              <td>35</td>
              <td class="status-pending">Pending</td>
            </tr>
            <tr>
              <td>T002</td>
              <td>user456</td>
              <td>Weekly Membership</td>
              <td>150</td>
              <td class="status-completed">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'transaction'
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
  --warning-color: #FFA000;
}

.admin-page {
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-color);
  z-index: 1;
}

.admin-container {
  max-width: 92vw;
  margin: 0 auto;
  padding: 10px;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin-bottom: 30px;
}

.admin-header h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.admin-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
  padding: 0 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tab-button {
  padding: 12px 24px;
  background: transparent;
  border: none;
  color: #aaa;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tab-button.active {
  color: #fff;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #fff;
}

.message-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 18px;
  height: 18px;
  background: var(--danger-color);
  color: white;
  border-radius: 9px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  font-weight: 600;
  border: 2px solid var(--bg-color);
}

.tab-content {
  display: none;
  padding: 30px 20px;
}

.tab-content.active {
  display: block;
}

.package-type-tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
}

.package-tab-button {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 8px;
  color: var(--text-color);
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.package-tab-button.active {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  box-shadow: 0 0 20px rgba(0, 170, 167, 0.3);
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.package-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  position: relative;
}

.status-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-available {
  background: var(--success-color);
  color: white;
}

.status-unavailable {
  background: var(--danger-color);
  color: white;
}

.package-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-size: 1rem;
  color: #ccc;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px;
  background: rgba(255, 255, 255, 0.808);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: #000;
  font-size: 1.1rem;
}

.requests-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.requests-table th,
.requests-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.requests-table th {
  background: rgba(255, 255, 255, 0.05);
  font-weight: 600;
}

.status-pending {
  color: var(--warning-color);
  font-weight: 600;
}

.status-completed {
  color: var(--success-color);
  font-weight: 600;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-edit {
  background: var(--warning-color);
  color: white;
}

@media (max-width: 768px) {
  .admin-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .admin-tabs {
    flex-direction: column;
  }

  .package-grid {
    grid-template-columns: 1fr;
  }

  .requests-table {
    display: block;
    overflow-x: auto;
  }

  .package-type-tabs {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style> 