<script>
import { goto } from "$app/navigation";
</script>
<div
	class="max-w-2xl mx-auto mt-[10vh] border-2 border-ctp-surface1 font-mono bg-ctp-base text-ctp-text shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
>
	<div class="bg-ctp-surface1 text-ctp-text px-4 py-1 font-bold">
		~/portfolio
	</div>

	<div class="p-8">
		<h1 class="text-2xl font-normal mb-4">
			{">"}
			Hello, I'm <span class="text-ctp-green font-bold">Angel</span>.
		</h1>

		<p class="text-lg leading-relaxed mb-8 text-ctp-text">
			A beginner software developer.
		</p>

		<p class="text-lg leading-relaxed text-ctp-text">Known languages:</p>
		<ul class="pl-5 mb-8">
			<li> TypeScript</li>
			<li> JavaScript</li>
			<li>󰌛 C#</li>
			<li> Java</li>
			<li> Python</li>
		</ul>

		<nav class="flex flex-col gap-4 mb-12">
			<button
				type="button"
				tabindex="-1"
				class="w-fit"
				onclick={() => goto('/projects')}
			>
				{"$"}
				cd ./projects
			</button>
			<button
				type="button"
				tabindex="-1"
				class="w-fit"
				onclick={() => goto('/contact')}
			>
				{"$"}
				cd ./contact
			</button>
		</nav>

		<div class="text-lg">
			<span class="text-ctp-green">guest@portfolio</span>:~$
			<span
				class="animate-pulse inline-block w-2.5 h-5 bg-ctp-text align-middle"
			></span>
		</div>
	</div>
</div>
