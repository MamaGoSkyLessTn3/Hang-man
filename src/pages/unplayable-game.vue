<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import GameFigure from '../components/GameFigure.vue'
import GameHeader from '../components/GameHeader.vue'
import PlayerHistory from '../components/PlayerHistory.vue'
import GameNotification from '../components/GameNotification.vue'
import GamePopup from '../components/GamePopup.vue'
import GameWord from '../components/GameWord.vue'
import GameWrongLetters from '../components/GameWrongLetters.vue'
import { useRandomWord } from '../composables/useRandomWord'
import { useLetters } from '../composables/useLetters'
import { useNotification } from '../composables/useNotification'
import type { IScore } from '../types/IInterface'
import { v4 as uuidv4 } from 'uuid'
import type { GameStatus } from '../types/GameStatus'
import { getAuth, signOut } from 'firebase/auth'
import {
	getFirestore,
	setDoc,
	doc,
	collection,
	query,
	orderBy,
	getDocs,
	deleteDoc,
} from 'firebase/firestore'

const router = useRouter()
const auth = getAuth()

const addNewScore = async (status: GameStatus) => {
	const payload: IScore = {
		id: uuidv4(),
		gameStatus: status,
		word: word.value,
		date: new Date().toLocaleDateString(),
	}
	const userId = getAuth().currentUser?.uid
	if (userId) {
		setDoc(
			doc(getFirestore(), `users/${userId}/userScore`, payload.id),
			payload
		)
	}
}

const { word, getRandomWord } = useRandomWord()
const {
	letters,
	correctLetters,
	wrongLetters,
	isLose,
	isWin,
	addLetter,
	resetLetters,
} = useLetters(word)
const { notification, showNotification } = useNotification()
const restart = async () => {
	await getRandomWord()
	resetLetters()
	popup.value?.close()
}

const popup = ref<InstanceType<typeof GamePopup> | null>(null)

watch(wrongLetters, () => {
	if (isLose.value) {
		addNewScore('lose')
		popup.value?.open('lose')
	}
})

watch(correctLetters, () => {
	if (isWin.value) {
		addNewScore('win')
		popup.value?.open('win')
	}
})

window.addEventListener('keydown', ({ key }) => {
	if (isLose.value || isWin.value) {
		return
	}
	if (letters.value.includes(key)) {
		showNotification()
		return
	}

	addLetter(key)
})

const logout = async () => {
	try {
		await signOut(auth)
		router.push('/')
	} catch (error) {}
}
</script>

<template>
	<div>
		<PlayerHistory />
		<UButton
			@click="logout"
			label="Выйти с аккаунта"
			color="neutral"
			variant="subtle"
			trailing-icon="i-lucide-chevron-up"
			class="absolute right-4 top-4"
		/>
		<div class="flex h-screen flex-col items-center justify-center">
			<div class="p-1 bg-emerald-700/80 rounded-xl border" id="ap">
				<GameHeader />
				<div class="game-container">
					<GameFigure :wrong-letters-count="wrongLetters.length" />
					<GameWrongLetters
						class="bg-red-500 rounded-2xl py-1 px-3 border border-red-950"
						:wrongLetters="wrongLetters"
					/>
					<GameWord :word="word" :correctLetters="correctLetters" />
				</div>
			</div>
		</div>

		<!-- Container for final message -->
		<GamePopup ref="popup" :word="word" @restart="restart" />

		<!-- Notification -->
		<GameNotification ref="notification" />
	</div>
</template>

<style scoped></style>
