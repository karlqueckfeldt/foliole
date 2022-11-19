<script>
  import CodeViewer from '../../code-viewer/CodeViewer.svelte';
  import ComponentContainer from '../../component-container/ComponentContainer.svelte';

  const cardsCode = `<div class="fo-card fo-card-primary" aria-labelledby="primary_card_heading">
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
</div>`;
</script>

<ComponentContainer heading="Cards">
  <div class="components">
    <div class="fo-card fo-card-primary" aria-labelledby="primary_card_heading">
      <span class="fo-h3" id="primary_card_heading">Primary</span>
      <p>This is a primary card.</p>
    </div>
    <div
      class="fo-card fo-card-secondary"
      aria-labelledby="secondary_card_heading"
    >
      <span class="fo-h3" id="secondary_card_heading">Secondary</span>
      <p>This is a secondary card.</p>
    </div>
    <div class="fo-card" aria-labelledby="basic_card_heading">
      <span class="fo-h3" id="basic_card_heading">Basic</span>
      <p>This is a basic card.</p>
    </div>
    <div
      class="fo-card fo-card-outlined"
      aria-labelledby="outlined_card_heading"
    >
      <span class="fo-h3" id="outlined_card_heading">Outlined</span>
      <p>This is an outlined card.</p>
    </div>
  </div>

  <CodeViewer code={cardsCode} />
</ComponentContainer>
