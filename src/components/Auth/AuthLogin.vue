<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

defineEmits<{
	toggleAuth: []
}>()

const router = useRouter()

const schema = z.object({
	email: z.string().email('Неверная почта'),
	password: z.string().min(8, 'Пароль должен содержать 8 символов'),
})

const signIn = async (): Promise<void> => {
	try {
		await signInWithEmailAndPassword(getAuth(), state.email, state.password)
		router.push('/unplayable-game')
	} catch (e) {
		console.log(e)
	}
}

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
	email: '',
	password: '',
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
	signIn()
	toast.add({
		title: 'Success',
		description: 'The form has been submitted.',
		color: 'success',
	})
	console.log(event.data)
}
</script>

<template>
	<span class="text-center text-3xl text-emerald-400">Вход</span>
	<UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
		<div class="flex flex-col w-full gap-4">
			<UFormField label="Email" name="email">
				<UInput class="w-full" v-model="state.email" />
			</UFormField>

			<UFormField label="Password" name="password">
				<UInput class="w-full" v-model="state.password" type="password" />
			</UFormField>
			<div class="flex w-full justify-between mt-2 gap-4 items-center">
				<span
					class="bg-white flex hover:bg-gray-200 cursor-pointer transition-colors duration-200 hover:text-emerald-500 text-emerald-700 font-bold py-1 px-4 rounded"
					@click="$emit('toggleAuth')"
					>Регистрация</span
				>
				<UButton class="cursor-pointer" type="submit"> Submit </UButton>
			</div>
		</div>
	</UForm>
</template>

<style scoped></style>
