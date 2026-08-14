<script lang="ts">
import { page } from "$app/state";
import MarkdownReadme from "$lib/components/markdown-readme.svelte";

type Project = {
	name: string;
	description: string;
};

const projects: Record<string, Project> = {
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

let project: Project | undefined = $state(undefined);

if (page.params.project) {
	project = projects[page.params.project];
}
</script>

<svelte:head>
	<title>{project?.name || page.params.project}| Angel's folio</title>
	<meta
		name="description"
		content={project?.description || "Just a simple proyect"}
	>
</svelte:head>

<MarkdownReadme
	title={project?.name || page.params.project}
	repoName={page.params.project}
/>
