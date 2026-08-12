<script>
import { ParaglideMessage } from "@inlang/paraglide-js-svelte";
import { goto } from "$app/navigation";
import { m } from "$lib/paraglide/messages";
</script>

<svelte:head>
	<title>Angel's folio</title>
	<meta
		name="description"
		content="Computer Science student and aspiring full-stack developer. Building cool and open-source things on the internet, take a look! :D"
	>
</svelte:head>

<div class="p-8">
	<h1 class="text-2xl font-normal mb-4">
		{">"}
		<ParaglideMessage message={m.hello} inputs={{ name: "Angel" }}>
			{#snippet style({ children })}
				<span class="text-ctp-green font-bold"
					>{@render children?.()}</span
				>
			{/snippet}
		</ParaglideMessage>
	</h1>

	<img
		src="https://avatars.githubusercontent.com/u/57822483"
		alt="my avatar"
		class="mb-1"
	>

	<div class="text-lg">
		<ParaglideMessage message={m.intro} inputs={{}}>
			{#snippet strong({ children })}
				<strong> {@render children?.()} </strong>
			{/snippet}
		</ParaglideMessage>
	</div>

	<p class="text-lg leading-relaxed mt-8">{m.languages_known()}</p>
	<ul class="pl-5 mb-8">
		<li class="text-ctp-blue"> TypeScript</li>
		<li class="text-ctp-yellow"> JavaScript</li>
		<li class="text-ctp-green">󰌛 C#</li>
		<li class="text-ctp-red"> Java</li>
		<li class="text-ctp-blue"> Python</li>
	</ul>

	<nav class="flex flex-col gap-4 mb-12">
		<button
			type="button"
			tabindex="-1"
			class="w-fit"
			onclick={() => goto('/projects')}
		>
			{"$"}
			cd {m.projects()}
		</button>
		<button
			type="button"
			tabindex="-1"
			class="w-fit"
			onclick={() => goto('/contact')}
		>
			{"$"}
			cd {m.contact()}
		</button>
	</nav>

	<div class="text-lg">
		<span class="text-ctp-teal">~</span>
		<br>
		<span class="text-ctp-green">-></span>
		<span
			class="animate-blink inline-block w-1 h-5 bg-ctp-text align-middle"
		></span>
	</div>
</div>
