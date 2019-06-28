<script>
  import language from "../stores/language.js";

  // The link to homepage depends on currently active language.
  // TODO [wip] rework implementation.
  // @see src/components/LanguageSwitcher.svelte
  let active_language = "";
  const unsubscribe = language.subscribe(value => {
    active_language = value;
  });

  // TODO fetch default language from Drupal to handle unprefixed homepage link.
  const default_language = "en";

  // TODO get Drupal's translatable strings.
  const link_title = "Go to home page";
  const logo_alt_text = "Umami Food Magazine logo";
</script>

<a
  href={active_language == default_language ? '/' : '/' + active_language}
  title={link_title}>
  <img src="logo.svg" alt={logo_alt_text} />
</a>
