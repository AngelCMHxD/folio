<script lang="ts">
import { resolve } from "$app/paths";
import { page } from "$app/state";
import type { Pathname } from "$app/types";
import { locales, localizeHref } from "$lib/paraglide/runtime";
import "./layout.css";
import favicon from "$lib/assets/favicon.png";
import LocaleSwitcher from "$lib/components/locale-switcher.svelte";

let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon}></svelte:head>
<div
	class="max-w-3xl mx-auto mt-30 border-2 border-ctp-surface1 shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
>
	<div class="flex bg-ctp-surface1 px-4 py-1 font-bold justify-between">
		<span
			>{page.url.pathname !== '/' ? `~/${page.url.pathname.slice(1)}` : '~'}</span
		>

		<LocaleSwitcher />
	</div>
	{@render children()}
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a
			href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}
			>{locale}</a
		>
	{/each}
</div>
