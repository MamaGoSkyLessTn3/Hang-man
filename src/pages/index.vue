<script setup lang="ts">
import { ref } from 'vue'

import AuthLogin from '../components/Auth/AuthLogin.vue'
import AuthRegistration from '../components/Auth/AuthRegistration.vue'

let isLogin = ref<boolean>(true)

const toggleAuth = () => {
	isLogin.value = !isLogin.value
}
</script>

<template>
	<div>
		<div class="flex h-screen flex-col items-center justify-center">
			<p class="text mx-auto text-6xl mb-30">Виселица OnLine</p>
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
@charset "UTF-8";
/* text: CS TEX */
@font-face {
	font-family: 'RZGFHHZLHJ';
	src: url('https://webfontsource.yuewen.com/api/v1/yfont/font.eot?base64=1&font=RZGFHHZLHJ&text=CS%20TEX'); /* IE9 */
	src: local('☺'),
		url(data:font/woff;charset=utf-8;base64,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)
			format('woff');
}

.text {
	margin: 0;

	-webkit-text-stroke: 2px #000000;
	font-weight: bold;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3CforeignObject width='100%25' height='100%25'%3E%3Cstyle%3E@keyframes rotate%7B0%25%7Btransform:translate(-50%25,0) rotate(0)%7Dto%7Btransform:translate(-50%25,0) rotate(360deg)%7D%7Dbody%7Bwidth:100%25;height:100%25;margin:0;background:0 0;transition:.3s%7Dbody::after,body::before%7Bcontent:'';position:absolute;bottom:50%25;left:50%25;width:400vw;height:400vw;border-radius:45%25 48%25 43%25 47%25;transform:translate(-50%25,0);box-shadow:0 0 0 50vw %2354caff9e;animation:rotate 10s infinite linear;z-index:1%7Dbody::after%7Bborder-radius:43%25 47%25 44%25 48%25;animation:rotate 10s infinite -1s linear%7D%3C/style%3E%3Cbody xmlns='http://www.w3.org/1999/xhtml'/%3E%3C/foreignObject%3E%3C/svg%3E");
	-webkit-background-clip: text;
	color: transparent;
}
</style>
