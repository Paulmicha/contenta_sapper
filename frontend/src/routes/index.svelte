<script>
  // TODO fetch from Drupal pages via REST API ?
  export let page_title = "Welcome";
  export let site_name = "Umami Food Magazine";
</script>

<svelte:head>
  <title>{page_title} | {site_name}</title>
</svelte:head>

<h1 class="rfs-12">{page_title}</h1>
