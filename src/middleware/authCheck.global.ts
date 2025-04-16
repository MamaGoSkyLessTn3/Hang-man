import { getAuth } from 'firebase/auth'

export default defineNuxtRouteMiddleware((to, from) => {
	const auth = getAuth()
	const isUserAuthenticated = !!auth.currentUser

	// Redirect to / if user is not authenticated and not already on /
	if (!isUserAuthenticated && to.path !== '/') {
		return navigateTo('/')
	}

	// Redirect to /unplayable-game if user is authenticated and tries to access /
	if (isUserAuthenticated && to.path === '/') {
		return navigateTo('/unplayable-game')
	}
})
