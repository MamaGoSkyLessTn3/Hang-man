import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
	const firebaseConfig = {
		apiKey: 'AIzaSyDZXDKS-Sc0whXEssNWwDCejR9PVLPdZcg',
		authDomain: 'hang-man-8b58d.firebaseapp.com',
		projectId: 'hang-man-8b58d',
		storageBucket: 'hang-man-8b58d.firebasestorage.app',
		messagingSenderId: '496741567471',
		appId: '1:496741567471:web:377d2b272b2c9f7763c41a',
	}

	// Initialize Firebase
	const app = initializeApp(firebaseConfig)
	const db = getFirestore(app)

	return {
		provide: {
			firebaseApp: app,
			db,
		},
	}
})
