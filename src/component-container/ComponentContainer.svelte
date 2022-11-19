<script>
  export let heading;
</script>

<section class="fo-card">
  <h1 class="fo-display-text-md">
    {heading}
  </h1>
  <slot />
</section>

<style>
  .fo-card {
    min-height: 70%;
  }
</style>
