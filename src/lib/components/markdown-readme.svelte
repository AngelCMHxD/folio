<script>
import SvelteMarkdown from "svelte-marked";
import { goto } from "$app/navigation";

const { repoName, title } = $props();
let source = $state("");

$effect(() => {
	fetch(`https://api.github.com/repos/AngelCMHxD/${repoName}/readme`)
		.then((res) => {
			if (!res.ok) throw new Error(`Not Found: ${res.status}`);
			return res.json();
		})
		.then((data) => fetch(data.download_url))
		.then((res) => res.text())
		.then((markdownText) => {
			source = markdownText;
		})
		.catch((err) => {
			console.log(err);
			source = `Failed to load README file\n\n${err.message}`;
		});
});
</script>

<div class="p-8">
	<h1 class="text-2xl font-normal mb-2">> {title}</h1>
	<div class="w-full" is-="separator" variant-="background1"></div>
	{#if !source}
		<div class="m-8 w-full flex justify-center">Loading...</div>
	{:else}
		<div class="mb-8 break-normal flex flex-col gap-4">
			<SvelteMarkdown
				{source}
				options={{
					breaks: true,
				}}
			/>
		</div>
	{/if}

	<button
		type="button"
		tabindex="-1"
		class="w-fit"
		onclick={() => goto('/projects')}
	>
		{"$"}
		cd ..
	</button>

	<div class="text-lg">
		<span class="text-ctp-teal">~</span>
		<br>
		<span class="text-ctp-green">-></span>
		<span
			class="animate-blink inline-block w-1 h-5 bg-ctp-text align-middle"
		></span>
	</div>
</div>
