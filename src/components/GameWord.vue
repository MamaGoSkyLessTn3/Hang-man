<script setup lang="ts">
interface Props {
	word: string
	correctLetters: string[]
}
defineProps<Props>()

// const renderLetter = computed(() => (props.correctLetters.includes(props.word) ? props.word : ''))
</script>

<template>
	<div class="word">
		<span v-for="(letter, index) in word" :key="index" class="letter">
			{{ correctLetters.includes(letter) ? letter : '' }}
		</span>
	</div>
</template>
