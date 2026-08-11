// biome-ignore lint/correctness/noUnusedImports: idk why it's triggered here, as it IS used lol
import type { HTMLAttributes } from "svelte/elements";

declare module "svelte/elements" {
	interface HTMLAttributes<T> {
		"is-"?: string;
		"variant-"?: string;
	}
}
