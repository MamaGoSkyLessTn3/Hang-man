<script setup lang="ts">
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import * as z from 'zod'
import { ref } from 'vue'
import type { FormSubmitEvent } from '@nuxt/ui'

defineEmits<{
	toggleAuth: []
}>()

const router = useRouter()

const signUp = async (): Promise<void> => {
	try {
		await createUserWithEmailAndPassword(getAuth(), state.email, state.password)
		router.push('/unplayable-game')
	} catch (e) {
		console.log(e)
	}
}

const schema = z.object({
	email: z.string().email('Invalid email'),
	password: z.string().min(8, 'Must be at least 8 characters'),
})

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
	email: '',
	password: '',
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
	signUp()
	toast.add({
		title: 'Успех',
		description: 'Запрос отправлен',
		color: 'success',
	})
	console.log(event.data)
}
</script>

<template>
	<span class="text-center text-3xl text-emerald-400">Регистрация</span>
	<UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
		<div class="flex flex-col w-full gap-4">
			<UFormField label="Email" name="email">
				<UInput class="w-full" v-model="state.email" />
			</UFormField>

			<UFormField label="Password" name="password">
				<UInput class="w-full" v-model="state.password" type="password" />
			</UFormField>
			<div class="flex w-55 justify-between mt-2 gap-4 items-center">
				<span
					class="bg-white flex hover:bg-gray-200 cursor-pointer transition-colors duration-200 hover:text-emerald-500 text-emerald-700 font-bold py-1 px-4 rounded"
					@click="$emit('toggleAuth')"
					>Вход</span
				>
				<UButton class="cursor-pointer" type="submit"> Submit </UButton>
			</div>
		</div>
	</UForm>
</template>

<style scoped></style>
