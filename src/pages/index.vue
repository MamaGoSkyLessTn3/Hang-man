<script setup lang="ts">
import { ref } from 'vue'

import AuthLogin from '../components/Auth/AuthLogin.vue'
import AuthRegistration from '../components/Auth/AuthRegistration.vue'

let isLogin = ref<boolean>(true)

const toggleAuth = () => {
	isLogin.value = !isLogin.value
}

// анимация
</script>

<template>
	<div>
		<div class="flex h-screen flex-col items-center justify-center">
			<p class="mx-auto text-6xl mb-30">
				<span class="char" style="animation-delay: 0s">В</span>
				<span class="char" style="animation-delay: 0.1s">и</span>
				<span class="char" style="animation-delay: 0.2s">с</span>
				<span class="char" style="animation-delay: 0.3s">е</span>
				<span class="char" style="animation-delay: 0.4s">л</span>
				<span class="char" style="animation-delay: 0.5s">и</span>
				<span class="char" style="animation-delay: 0.6s">ц</span>
				<span class="char" style="animation-delay: 0.7s">а</span>
				<span class="char" style="animation-delay: 0.8s">&nbsp;</span>
				<span class="char" style="animation-delay: 0.9s">O</span>
				<span class="char" style="animation-delay: 1s">n</span>
				<span class="char" style="animation-delay: 1.1s">L</span>
				<span class="char" style="animation-delay: 1.2s">i</span>
				<span class="char" style="animation-delay: 1.3s">n</span>
				<span class="char" style="animation-delay: 1.4s">e</span>
			</p>
			<div
				class="border flex max-w-80 h-86 w-80 py-4 items-center justify-center flex-col gap-4 p-1 bg-emerald-700/80 rounded-xl"
			>
				<AuthLogin @toggle-auth="toggleAuth" v-if="isLogin" />
				<AuthRegistration @toggle-auth="toggleAuth" v-if="!isLogin" />
			</div>
		</div>
	</div>
</template>

<style scope>
@keyframes wave {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-20px);
	}
}

.char {
	display: inline-block;
	animation: wave 2s ease-in-out infinite;
	text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000,
		1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
}
</style>
