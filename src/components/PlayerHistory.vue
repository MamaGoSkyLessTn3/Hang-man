<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHistory } from '../composables/useHistory'

const { history, setHistory } = useHistory()
</script>

<template>
	<UDrawer :overlay="false" direction="left">
		<UButton
			@click="setHistory()"
			label="История игр"
			color="neutral"
			variant="subtle"
			trailing-icon="i-lucide-chevron-up"
			class="absolute left-4 top-4"
		/>

		<template #content>
			<div class="ml-4 h-screen w-110 overflow-hidden">
				<div class="flex flex-col w-full items-center justify-center p-4 gap-4">
					<Span class="mx-auto text-2xl text-white">История Игр</Span>
					<div
						v-for="item in history"
						:key="item.id"
						class="grid items-center justify-items-center grid-cols-[auto_1fr_1fr_1fr] gap-1 w-full px-2 py-2 border border-white border-dashed"
					>
						<span class="text-md">Игровое слово</span>
						<span
							:class="
								item.gameStatus === 'win' ? 'text-green-600' : 'text-red-500'
							"
							>{{ item.word }}
						</span>

						<UIcon
							:class="
								item.gameStatus === 'win' ? 'text-green-600' : 'text-red-500'
							"
							size="20"
							:name="item.gameStatus === 'win' ? 'lucide:check' : 'lucide:x'"
						></UIcon>
						<span>
							{{ item.date }}
						</span>
					</div>
				</div>
			</div>
		</template>
	</UDrawer>
</template>
