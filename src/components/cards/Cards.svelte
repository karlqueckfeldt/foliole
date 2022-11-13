<script>
  import ComponentContainer from '../component-container/ComponentContainer.svelte';
</script>

<ComponentContainer heading="Cards">
  <div class="components">
    <div class="fo-card fo-card-primary" aria-labelledby="primary_card_heading">
      <span class="fo-h3" id="primary_card_heading">Primary</span>
      <p>This is a primary card.</p>
    </div>
    <div class="fo-card fo-card-secondary">
      <p class="fo-h3">Secondary</p>
      <p>This is a secondary card.</p>
    </div>
    <div class="fo-card">
      <p class="fo-h3">Basic</p>
      <p>This is a basic card.</p>
    </div>
    <div class="fo-card fo-card-outlined">
      <p class="fo-h3">Outlined</p>
      <p>This is an outlined card.</p>
    </div>
  </div>
</ComponentContainer>
