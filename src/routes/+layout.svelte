<script>
  import Sidenav from './sidenav/Sidenav.svelte';
  import './styles.css';
</script>

<div class="page-wrapper">
  <Sidenav />
  <div class="content-wrapper">
    <main>
      <slot />
    </main>
    <footer>
      <p>By Karl Queckfeldt, made using Sveltekit.</p>
    </footer>
  </div>
</div>

<style>
  footer {
    text-align: center;
  }
</style>
