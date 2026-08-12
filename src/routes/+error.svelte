<script>
import { goto } from "$app/navigation";
import { page } from "$app/state";
import { m } from "$lib/paraglide/messages";
</script>

<main class="flex flex-col items-center justify-center p-6 text-center">
	<div>
		<p class="text-sm font-semibold text-ctp-blue uppercase">
			Error {page.status}
		</p>

		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
			{m.not_found()}
		</h1>

		<div class="mt-6">
			<button
				type="button"
				tabindex="-1"
				class="w-fit"
				onclick={() => goto('/')}
			>
				{"$"}
				cd ~
			</button>
		</div>
	</div>
</main>
