import { ref, computed } from 'vue'
import { useSupabaseUser, useSupabaseClient } from '#imports'
import { useRuntimeConfig } from '#app'

export const useAuth = () => {
  const user = useSupabaseUser()
  const client = useSupabaseClient()
  const config = useRuntimeConfig()
  const loading = ref(false)
  const error = ref<string | null>(null)

  const signInWithEmail = async (email: string, password: string) => {
    try {
      loading.value = true
      error.value = null
      const { error: err } = await client.auth.signInWithPassword({
        email,
        password,
      })
      if (err) throw err
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      loading.value = true
      error.value = null
      const { error: err } = await client.auth.signUp({
        email,
        password,
      })
      if (err) throw err
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const signInWithGoogle = async () => {
    try {
      loading.value = true
      error.value = null
      const { error: err } = await client.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })
      if (err) throw err
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const signOut = async () => {
    try {
      loading.value = true
      error.value = null
      const { error: err } = await client.auth.signOut()
      if (err) throw err
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const isAdmin = computed(() => {
    return user.value?.email === config.public.adminEmail
  })

  return {
    user,
    loading,
    error,
    isAdmin,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signOut
  }
} 