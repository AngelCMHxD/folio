<script>
import { goto } from "$app/navigation";
</script>

<div
	class="max-w-3xl mx-auto mt-30 border-2 border-ctp-surface1 shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
>
	<div class="bg-ctp-surface1 px-4 py-1 font-bold">~/contact</div>

	<div class="p-8">
		<h1 class="text-2xl font-normal mb-2">
			{">"}
			How to contact me?
		</h1>

		<div class="w-full" is-="separator" variant-="background1"></div>

		<div class="mb-8">
			<p class="text-ctp-text break-normal">
				Just send me a DM on Discord! My username is
				<code>@angelcmhxd</code>, and I'm always happy to chat!
				<br>
				<br>
				Make sure to tell me you know me from my GitHub repos, otherwise
				I might think it's spam ;P
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
</div>
