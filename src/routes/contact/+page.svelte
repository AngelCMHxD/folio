<script>
import { ParaglideMessage } from "@inlang/paraglide-js-svelte";
import { goto } from "$app/navigation";
import { m } from "$lib/paraglide/messages";
</script>

<div class="p-8">
	<h1 class="text-2xl font-normal mb-2">
		{">"}
		{m.how_to_contact()}
	</h1>

	<div class="w-full" is-="separator" variant-="background1"></div>

	<div class="mb-8">
		<p class="text-ctp-text break-normal">
			<ParaglideMessage
				message={m.contact_text}
				inputs={{
					username: "@angelcmhxd"
				}}
			>
				{#snippet code({ children })}
					<code> {@render children?.()} </code>
				{/snippet}
				{#snippet space()}
					<br>
					<br>
				{/snippet}
			</ParaglideMessage>
		</p>
	</div>

	<button
		type="button"
		tabindex="-1"
		class="w-fit mb-8"
		onclick={() => goto('/')}
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
