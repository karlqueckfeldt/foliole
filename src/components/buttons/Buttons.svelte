<script>
  import ComponentContainer from '../../component-container/ComponentContainer.svelte';
</script>

<ComponentContainer heading="Buttons">
  <section class="fo-margin-bottom-8">
    <h3>Regular buttons</h3>
    <div class="components">
      <button class="fo-button fo-button-primary">Primary</button>
      <button class="fo-button fo-button-secondary">Secondary</button>
      <button class="fo-button fo-button-warning">Warning</button>
      <button class="fo-button fo-button-light">Light</button>
      <button class="fo-button fo-button-dark">Dark</button>
      <button class="fo-button fo-button-outlined">Outlined</button>
      <button class="fo-button fo-button-basic">Basic</button>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="fo-button fo-button-basic">Link</a>
    </div>
  </section>

  <section class="fo-margin-bottom-8">
    <h3>Small buttons</h3>
    <div class="components">
      <button class="fo-button fo-button-sm fo-button-primary">Primary</button>
      <button class="fo-button fo-button-sm fo-button-secondary"
        >Secondary</button
      >
      <button class="fo-button fo-button-sm fo-button-warning">Warning</button>
      <button class="fo-button fo-button-sm fo-button-light">Light</button>
      <button class="fo-button fo-button-sm fo-button-dark">Dark</button>
      <button class="fo-button fo-button-sm fo-button-outlined">Outlined</button
      >
      <button class="fo-button fo-button-sm fo-button-basic">Basic</button>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="fo-button fo-button-sm fo-button-basic">Link</a>
    </div>
  </section>

  <section>
    <h3>Large buttons</h3>
    <div class="components">
      <button class="fo-button fo-button-lg fo-button-primary">Primary</button>
      <button class="fo-button fo-button-lg fo-button-secondary"
        >Secondary</button
      >
      <button class="fo-button fo-button-lg fo-button-warning">Warning</button>
      <button class="fo-button fo-button-lg fo-button-light">Light</button>
      <button class="fo-button fo-button-lg fo-button-dark">Dark</button>
      <button class="fo-button fo-button-lg fo-button-outlined">Outlined</button
      >
      <button class="fo-button fo-button-lg fo-button-basic">Basic</button>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="fo-button fo-button-lg fo-button-basic">Link</a>
    </div>
  </section>
</ComponentContainer>
