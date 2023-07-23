<script>
  import Sidenav from '../lib/sidenav/Sidenav.svelte';
  import './styles.css';
</script>

<svelte:head>
  <title>Foliole</title>
  <meta name="description" content="Foliole component library" />
</svelte:head>

<div class="page-wrapper">
  <Sidenav />
  <div class="content-wrapper">
    <main>
      <slot />
    </main>
    <footer>
      <p>
        Made by Karl Queckfeldt using SvelteKit. <a
          href="https://github.com/karlqueckfeldt/foliole"
          target="_blank"
          rel="noopener noreferrer">GitHub repository</a
        >.
        <a
          href="https://www.npmjs.com/package/foliole"
          target="_blank"
          rel="noopener noreferrer">NPM page</a
        >.
      </p>
    </footer>
  </div>
</div>

<style>
  footer {
    text-align: center;
  }
</style>
