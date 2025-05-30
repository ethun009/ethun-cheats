import { useSupabaseUser } from '#imports'
import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser()
  const { isAdmin } = useAuth()

  // If route starts with /admin
  if (to.path.startsWith('/admin')) {
    // If not logged in, redirect to login
    if (!user.value) {
      return navigateTo('/admin/login')
    }
    
    // If logged in but not admin, redirect to home
    if (!isAdmin.value) {
      return navigateTo('/')
    }
  }
}) 