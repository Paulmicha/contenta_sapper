<script>
  // TODO get Drupal's translatable strings.
  const search_label = "Site";
  const search_input_label = "Keywords";
  const submit_label = "Submit";
</script>

<form class="inline-flex" role="search" aria-labelledby="search-label">
  <div id="search-label" hidden>{search_label}</div>
  <label for="search-input" class="visually-hidden">{search_input_label}</label>
  <input class="mr-2" type="search" id="search-input" name="keywords" />
  <input type="submit" value={submit_label} />
</form>
