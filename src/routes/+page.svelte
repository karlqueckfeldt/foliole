<script>
  import logo from '$lib/images/foliole_no_fill.svg';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="fo-card fo-card-secondary fo-text-center">
  <h1 class="fo-display-text-lg">
    Foliole <img src={logo} alt="Foliole brand" />
  </h1>
  <div class="fo-lead-text">
    <p>Welcome to Foliole! A simple component library and style guide.</p>
    <p>To use it in your project, run</p>
    <code class="fo-code-block">npm install foliole</code>
    <p>and have fun! 🥳</p>
  </div>
</div>

<style>
  img {
    width: 5rem;
    height: 5rem;
  }
</style>
