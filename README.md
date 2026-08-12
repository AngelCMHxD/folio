# Folio

This is my small webpage, with a TUI style and i18n support

# Tech

Well, this is just SvelteKit + [WebTUI](https://webtui.ironclad.sh/). It's pretty simple.

It also uses [Svelte Marked/Markdown](https://github.com/ildella/svelte-marked) to render the packages READMEs inside of the page and [Paraglide](https://paraglidejs.com/) for i18n

Production site is hosted using [Render](https://render.com/) over at https://angelcmh.com

# Local dev

```bash
bun install
bun dev
# that's all lol
```

# Deploying

```bash
bun run build
# the result is a static page on the build/ folder
```
