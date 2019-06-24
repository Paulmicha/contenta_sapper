<script>
  export let text = "Demo";
  const id = Math.random()
    .toString(36)
    .substr(2, 9);
  const first_letter = text.substr(0, 1);
  const remaining_text = text.substr(1);
</script>

<span aria-labelledby="dropcap-{id}" role="text">
  <span aria-hidden="true">
    <span class="dropcap">{first_letter}</span>
     {remaining_text}
  </span>
  <span id="dropcap-{id}" class="hidden">{text}</span>
</span>
