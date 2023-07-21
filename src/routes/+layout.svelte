<script>
  import Sidenav from '../lib/sidenav/Sidenav.svelte';
  import './styles.css';
</script>

<div class="page-wrapper">
  <Sidenav />
  <div class="content-wrapper">
    <main>
      <slot />
    </main>
    <footer>
      <p>Made by Karl Queckfeldt using SvelteKit.</p>
    </footer>
  </div>
</div>

<style>
  footer {
    text-align: center;
  }
</style>
