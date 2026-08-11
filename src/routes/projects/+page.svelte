<script>
import { ParaglideMessage } from "@inlang/paraglide-js-svelte";
import { goto } from "$app/navigation";
import { m } from "$lib/paraglide/messages";
</script>

<div class="p-8">
	<h1 class="text-2xl font-normal mb-2">
		{">"}
		{m.projects_sub()}
	</h1>

	<div class="w-full" is-="separator" variant-="background1"></div>

	<div class="mb-8">
		<h2 class="text-xl font-normal mb-2">
			{">"}
			<a href="https://peekm2.angelcmh.com" class="hover:underline">
				PeekM2
			</a>
			<a
				href="https://github.com/AngelCMHxD/PeekM2"
				class="hover:underline"
			>
				(Repo)
			</a>
		</h2>
		<p class="text-ctp-text break-normal">
			{m.project1_desc()}
		</p>
	</div>

	<div class="mb-8">
		<h2 class="text-xl font-normal mb-2">
			{">"}
			<a href="https://chessnow.angelcmh.com" class="hover:underline">
				Chess Now!
			</a>
			<a
				href="https://github.com/AngelCMHxD/chess-now"
				class="hover:underline"
			>
				(Repo)
			</a>
		</h2>
		<p class="text-ctp-text break-normal">
			{m.project2_desc()}
		</p>
	</div>

	<div class="mb-8">
		<h2 class="text-xl font-normal mb-2">
			{">"}
			<span> Easy Legendary! </span>
			<a
				href="https://github.com/AngelCMHxD/easy-legendary"
				class="hover:underline"
			>
				(Repo)
			</a>
		</h2>
		<p class="text-ctp-text break-normal">
			<ParaglideMessage message={m.project3_desc}>
				{#snippet link({ children })}
					<a
						href="https://github.com/legendary-gl/legendary"
						class="hover:underline"
						target="_blank"
						rel="noopener noreferrer"
						>{@render children?.()}</a
					>
				{/snippet}
			</ParaglideMessage>
		</p>
	</div>

	<button type="button" tabindex="-1" class="w-fit" onclick={() => goto('/')}>
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
