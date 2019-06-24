<script>
  import DropCap from "./DropCap.svelte";

  export let attr = {
    class: "clearfix"
  };
  export let options = {
    dropcap: false
  };
  export let text = `Demonstrating the Text component. This paragraph of text ${
    options.dropcap ? "has" : "doesn't have"
  } a drop cap. Here are some more words to make this paragraph long enough for testing.`;

  let first_word = "";
  if (options.dropcap) {
    first_word = text.replace(/ .*/, "");
    text = text.substr(first_word.length);
  }
</script>

<p {...attr}>
  {#if options.dropcap}
    <DropCap text={first_word} />
  {/if}
   {text}
  <slot />
</p>
