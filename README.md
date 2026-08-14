# Folio

A retro/TUI inspired portfolio & project showcase built with SvelteKit, [WebTUI](https://webtui.ironclad.sh/), and [Paraglide](https://paraglidejs.com/).

This is my personal dev portfolio, designed to showcase some of my projects and just general info about me. I really wanted to try out [WebTUI](https://webtui.ironclad.sh/) for a while now (which I actually found about it while searching for a TUI framework for my other project, [Chess Now!](https://chessnow.angelcmh.com/)), so this is my shot at it.

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
