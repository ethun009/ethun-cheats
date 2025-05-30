<template>
  <div class="callback-container">
    <div class="loading-spinner"></div>
    <p>Completing authentication...</p>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const router = useRouter()

// Handle the OAuth callback
onMounted(async () => {
  try {
    const { error } = await client.auth.getSession()
    if (error) throw error
    
    // Redirect to dashboard or home based on user role
    const { isAdmin } = useAuth()
    router.push(isAdmin.value ? '/admin/dashboard' : '/')
  } catch (error) {
    console.error('Auth error:', error)
    router.push('/admin/login')
  }
})
</script>

<style scoped>
.callback-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-color);
  color: var(--text-color);
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style> 