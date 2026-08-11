<script>
import { m } from "$lib/paraglide/messages";
import { setLocale } from "$lib/paraglide/runtime";

let opened = $state(false);
</script>
<div class="flex gap-2">
	<span>{m.lang()}: </span>
	<details bind:open={opened}>
		<summary>
			{m.locale()}
		</summary>
		<div class="flex flex-col w-50 gap-0">
			<button
				type="button"
				value="en"
				onclick={(e) => {
					e.preventDefault();
					opened = false;
					setLocale("en")
				}}
			>
				English
			</button>
			<button
				type="button"
				value="es"
				onclick={(e) => {
					e.preventDefault();
					opened = false;
					setLocale("es")
				}}
			>
				Español
			</button>
		</div>
	</details>
</div>
