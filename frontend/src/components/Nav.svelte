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
</script>

<style>
  button {
    display: block;
    min-height: 1em;
    min-width: 1em;
  }
</style>

<nav aria-labelledby="primary-nav-label">
  <div id="primary-nav-label" hidden>{nav_label}</div>
  <ul>
    {#each menu_links as l}
      <li>
        <a class="font-serif {segment === l.path ? 'is-on' : ''}" href={l.href}>
           {l.label}
        </a>
      </li>
    {/each}
  </ul>
  <button
    aria-label="Toggle the menu"
    on:click={e => {
      console.log(e);
    }}>
    <IconMenu />
  </button>
</nav>
