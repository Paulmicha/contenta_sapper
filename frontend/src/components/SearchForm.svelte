<script>
  // TODO get Drupal's translatable strings.
  const search_label = "Site";
  const submit_label = "Submit";
</script>

<form role="search" aria-labelledby="search-label">
  <div id="search-label" hidden>{search_label}</div>
  <label>
    <span>{search_label}</span>
    <input type="search" />
  </label>
  <button type="submit">{submit_label}</button>
</form>
