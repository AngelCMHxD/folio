<script lang="ts">
import { page } from "$app/state";
import MarkdownReadme from "$lib/components/markdown-readme.svelte";

const projects: Record<
	string,
	{
		name: string;
		description: string;
	}
> = {
	"chess-now": {
		name: "Chess Now!",
		description: "",
	},
	peekm2: {
		name: "PeekM2",
		description: "",
	},
	"easy-legendary": {
		name: "Easy Legendary!",
		description: "",
	},
};
</script>

<svelte:head>
	<title>
		{projects[page.params.project]?.name || page.params.project}
		| Angel's folio
	</title>
	<meta
		name="description"
		content={projects[page.params.project]?.description || "Just a simple proyect"}
	>
</svelte:head>

<MarkdownReadme
	title={projects[page.params.project]?.name || page.params.project}
	repoName={page.params.project}
/>
