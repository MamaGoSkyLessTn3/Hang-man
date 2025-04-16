import { getAuth } from 'firebase/auth'
import type { IScore } from '../types/IInterface'
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

export const useHistory = () => {
	const userId = getAuth().currentUser?.uid
	const db = getFirestore()

	const history = ref<IScore[]>([])

	const getAllHistory = async <T extends IScore>() => {
		const getData = query(
			collection(db, `users/${userId}/userScore`),
			orderBy('date', 'desc')
		)
		const listDocs = await getDocs(getData)
		return listDocs.docs.map(doc => doc.data() as T)
	}
	onMounted(() => {
		setHistory()
	})
	const setHistory = async () => {
		const historyList = await getAllHistory()
		history.value = historyList
		console.log(history.value)
	}
	return {
		history,
		setHistory,
	}
}
