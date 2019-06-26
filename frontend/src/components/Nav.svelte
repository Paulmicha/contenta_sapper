<script>
  import IconMenu from "./icons/IconMenu.svelte";
  export let segment;

  // TODO fetch from Drupal menu via REST API.
  const menu_links = [
    { path: "articles", label: "Articles" },
    { path: "recipes", label: "Recipes" }
  ];
</script>

<style>
  button {
    display: block;
    min-height: 1em;
    min-width: 1em;
  }
</style>

<nav>
  <ul>
    {#each menu_links as l}
      <li>
        <a class="font-serif {segment === l.path ? 'is-on' : ''}" href={l.path}>
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
