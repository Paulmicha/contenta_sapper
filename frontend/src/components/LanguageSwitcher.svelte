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
  <ul>
    {#each language_links as l}
      <li>
        <a class={active_language === l.langcode ? 'is-on' : ''} href={l.href}>
           {l.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
