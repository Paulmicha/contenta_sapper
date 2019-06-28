<script>
  import IconMenu from "./icons/IconMenu.svelte";

  export let segment;

  // TODO fetch from Drupal menu via REST API.
  const menu_links = [
    { href: "articles", label: "Articles" },
    { href: "recipes", label: "Recipes" }
  ];

  // TODO get Drupal's translatable strings.
  const nav_label = "Primary";

  // TODO [wip] implement transition for smaller viewports + hide it for
  // larger ones.
</script>

<style>
  .menu-link {
    display: inline-block;
    transition: all 0.2s;
    text-decoration: none;
    color: inherit;
    border-bottom: solid 0.15em transparent;
    background-color: inherit;
    @apply font-serif;
  }
  .menu-link:hover,
  .menu-link.is-active:hover,
  .menu-link:focus {
    text-decoration: none;
    color: #da3c13;
    border-bottom-color: #da3c13;
    background-color: inherit;
  }
  .menu-link:active,
  .menu-link.is-active {
    text-decoration: none;
    border-bottom-color: #da3c13;
  }

  .nav-toggle {
    display: block;
    min-height: 1em;
    min-width: 1em;
  }
</style>

<nav class="flex" aria-labelledby="primary-nav-label">
  <div id="primary-nav-label" hidden>{nav_label}</div>
  <ul class="flex mr-2">
    {#each menu_links as l}
      <li class="mr-2 text-center">
        <a
          class="mr-10 p-1 font-serif rfs-5 menu-link {segment === l.href ? 'is-active' : ''}"
          href={l.href}>
           {l.label}
        </a>
      </li>
    {/each}
  </ul>
  <button
    class="py-1 pl-1 nav-toggle"
    aria-label="Toggle the menu"
    on:click={e => {
      console.log(e);
    }}>
    <IconMenu />
  </button>
</nav>
