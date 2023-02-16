<script>
  import Sidenav from './sidenav/Sidenav.svelte';
  import './styles.css';
</script>

<div class="page-container">
  <Sidenav />

  <main>
    <slot />
  </main>

  <footer>
    <p>This is a footer</p>
  </footer>
</div>

<style>
</style>
