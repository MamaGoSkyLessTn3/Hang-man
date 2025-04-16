import type { GameStatus } from './GameStatus'

export interface IScore {
	id: string
	gameStatus: GameStatus
	word: string
	date: string
}
