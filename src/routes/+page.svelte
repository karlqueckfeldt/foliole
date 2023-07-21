<script>
  import logo from '$lib/images/foliole.svg';
</script>

<div class="fo-card fo-card-secondary">
  <h1 class="fo-display-text-lg fo-text-center">
    Foliole <img src={logo} alt="Foliole brand" />
  </h1>
  <div class="fo-lead-text">
    <p>Welcome to Foliole! A simple framework agnostic component library.</p>
    <p>To use it in your project</p>
    <ol>
      <li>
        run <code class="fo-code-block">npm install foliole</code>,
      </li>
      <li>
        import <code class="fo-code-block">foliole/main.css</code> where suitable,
      </li>
      <li>and have fun! 🍂</li>
    </ol>
  </div>
</div>

<style>
  .fo-card {
    display: grid;
    justify-content: center;
  }

  ol {
    line-height: 1.8;
  }

  img {
    width: 5rem;
    height: 5rem;
  }
</style>
