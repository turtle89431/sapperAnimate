<script>
  import Nav from "../components/Nav.svelte";
  export let segment;
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main {
    position: absolute;
    top: 0;
    height: calc(100vh - 2em); /* hieght must me 100vh - hieght of nav */
    box-sizing: border-box;
  }
</style>

<Nav {segment} />
<main>
  <slot />
</main>
