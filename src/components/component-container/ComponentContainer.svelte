<script>
  export let heading;

  const getFragmentId = () => heading.replace(' ', '_').toLowerCase();
</script>

<section>
  <h2 class="fo-display-text-md" id="{getFragmentId()}_section">
    {heading}
  </h2>
  <slot />
</section>
