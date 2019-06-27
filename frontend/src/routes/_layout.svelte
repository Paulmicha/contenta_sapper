<script>
  import BgCanvas from "../components/BgCanvas.svelte";
  import Nav from "../components/Nav.svelte";
  import Logo from "../components/Logo.svelte";
  import SearchForm from "../components/SearchForm.svelte";
  import LanguageSwitcher from "../components/LanguageSwitcher.svelte";

  export let segment;
</script>

<header>
  <div class="flex justify-between p-6">
    <LanguageSwitcher />
    <SearchForm />
  </div>
  <div class="flex items-center justify-between flex-wrap p-6">
    <Logo />
    <Nav {segment} />
  </div>
</header>

<main>
  <slot />
</main>

<BgCanvas />
