<script>
  import logo from '$lib/images/foliole.svg';
</script>

<svelte:head>
  <title>Foliole</title>
  <meta
    name="description"
    content="Foliole component library and style guide"
  />
</svelte:head>

<div class="fo-card fo-card-secondary fo-text-center">
  <h1 class="fo-display-text-lg">
    Foliole <img src={logo} alt="Foliole brand" />
  </h1>
  <div class="fo-lead-text">
    <p>
      Welcome to Foliole! A simple framework agnostic component library and
      style guide.
    </p>
    <p>
      To use it in your project, run <code class="fo-code-block"
        >npm install foliole</code
      >
      and have fun! 🍂
    </p>
  </div>
</div>

<style>
  img {
    width: 5rem;
    height: 5rem;
  }
</style>
