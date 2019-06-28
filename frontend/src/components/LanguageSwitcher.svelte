<script>
  import language from "../stores/language.js";

  // Currently active language.
  // TODO we need 1. Link to current page in other language (navigation) AND 2.
  // to switch currently active language -> how to do that ? Current attempt :
  // use on:click + href (WIP untested).
  // Caveats (Drupal 8 JSON API in core not 100% ready yet) :
  // See https://www.drupal.org/project/jsonapi/issues/2794431
  export let active_language = language;

  // TODO fetch active languages list + current page URL in each language from
  // Drupal.
  const language_links = [
    { langcode: "en", href: "en", label: "English" },
    { langcode: "es", href: "es", label: "Español" }
  ];

  // TODO get Drupal's translatable strings.
  const nav_label = "Switch language";
</script>

<nav aria-labelledby="language-switcher-nav-label">
  <div id="language-switcher-nav-label" hidden>{nav_label}</div>
  <ul class="inline-flex">
    {#each language_links as l}
      <li class="mr-2">
        <a
          class="p-1 {active_language === l.langcode ? 'is-on font-bold' : 'text-gray-600'}"
          href={l.href}
          on:click={() => {
            language.update(l.langcode);
          }}>
           {l.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
