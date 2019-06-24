<script>
  import Text from "../components/Text.svelte";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1 class="text-6xl">About this site</h1>

<Text
  options={{ dropcap: true }}
  attr={{ class: 'container mx-auto w-1/2' }}
  text="This is the 'about' page. There's not much here. Mettrait ce la un cet
  faudra. Pourquoi demain vivre de nous mais mais s'abreuve, etre approchons de
  bicéphale ô comme. Schatten fühlt gestalten auf was verklungen zauberhauch.
  Irrt denen klage wirklichkeiten und ergreift lebens der ertönt gleich, steigen
  neu und." />

<Text attr={{ class: 'container mx-auto p-12' }}>
  <br />
  test after text
</Text>

<Text options={{ dropcap: true }} />
