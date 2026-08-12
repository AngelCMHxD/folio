<script lang="ts">
import { page } from "$app/state";
import MarkdownReadme from "$lib/components/markdown-readme.svelte";

const projects: Record<string, string> = {
	"chess-now": "Chess Now!",
	peekm2: "PeekM2",
	"easy-legendary": "Easy Legendary!",
};
</script>

<MarkdownReadme
	title={projects[page.params.project] || page.params.project}
	repoName={page.params.project}
/>
