<script>
  export let heading;
</script>

<section class="fo-card">
  <h1>
    {heading}
  </h1>
  <slot />
</section>

<style>
  .fo-card {
    min-height: 70%;
  }
</style>
