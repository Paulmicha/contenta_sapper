<script>
  // Currently active language.
  export let active_language = "en";

  // TODO fetch current page URL in each language from Drupal.
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
          href={l.href}>
           {l.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
