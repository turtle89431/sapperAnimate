<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>

<Nav {segment} />

<slot />
