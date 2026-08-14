<script lang="ts">
import { onMount } from "svelte";

let loading = $state(true);

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

let rows: Record<string, { count: number; date: string; style: string }[]> =
	$state(Object.fromEntries(days.map((d) => [d, []])));

let totalContributions = $state(0);

function getCell(count: number): string {
	if (count === -1) return "opacity-0 pointer-events-none";
	if (count === 0) return "opacity-25";
	if (count <= 6) return "opacity-50";
	if (count <= 14) return "opacity-75";
	return "opacity-100";
}

type ContributionsResponse = {
	contributions: {
		count: number;
		date: string;
		level: number;
	}[];
	total: {
		lastYear: number;
	};
};

onMount(async () => {
	const res = await fetch(
		`https://github-contributions-api.jogruber.de/v4/angelcmhxd?y=last`,
	);
	const data = (await res.json()) as ContributionsResponse;
	totalContributions = data.total.lastYear;

	if (data.contributions.length > 0) {
		const firstDate = new Date(data.contributions[0].date);
		const startDayIndex = firstDate.getDay();

		for (let i = 0; i < startDayIndex; i++) {
			rows[days[i]].push({ count: 0, date: "", style: getCell(0) });
		}

		data.contributions.forEach((contrib) => {
			const day = days[new Date(contrib.date).getDay()];
			rows[day].push({
				count: contrib.count,
				date: contrib.date,
				style: getCell(contrib.count),
			});
		});

		// fill space at the end
		const maxCols = Math.max(...Object.values(rows).map((r) => r.length));
		Object.values(rows).forEach((row) => {
			while (row.length < maxCols) {
				row.push({ count: 0, date: "", style: getCell(-1) });
			}
		});
	}

	loading = false;
});
</script>

<div>
	{#if loading}
		<div>Loading...</div>
	{:else}
		<div>Total Contributions: {totalContributions}</div>
		<div class="flex flex-col gap-0.5">
			{#each Object.entries(rows) as [day, row]}
				<div class="flex gap-0.5">
					<div class="text-xs break-normal">{day}</div>
					{#each row as cell}
						<div is-="tooltip" class="flex-1 min-w-0 aspect-square">
							<div
								is-="tooltip-trigger"
								class="w-full h-full rounded-[1px] bg-ctp-blue {cell.style}"
							></div>
							<div
								is-="tooltip-content"
								class="bg-black p-2 w-50"
							>
								<div class="">{cell.date} - {cell.count}</div>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>
