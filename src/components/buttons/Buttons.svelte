<script>
  import ComponentContainer from '../../component-container/ComponentContainer.svelte';
</script>

<ComponentContainer heading="Buttons">
  <section class="fo-margin-bottom-8">
    <h3>Regular buttons</h3>
    <div class="components">
      <button class="fo-button fo-button-primary">Primary</button>
      <button class="fo-button fo-button-secondary">Secondary</button>
      <button class="fo-button">Basic</button>
      <button class="fo-button fo-button-outlined">Outlined</button>
      <button class="fo-button fo-button-warning">Warning</button>
      <button class="fo-button fo-button-flat">Flat</button>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="fo-button fo-button-flat">Link</a>
    </div>
  </section>

  <section class="fo-margin-bottom-8">
    <h3>Small buttons</h3>
    <div class="components">
      <button class="fo-button fo-button-sm fo-button-primary">Primary</button>
      <button class="fo-button fo-button-sm fo-button-secondary"
        >Secondary</button
      >
      <button class="fo-button fo-button-sm">Basic</button>
      <button class="fo-button fo-button-sm fo-button-outlined">Outlined</button
      >
      <button class="fo-button fo-button-sm fo-button-warning">Warning</button>
      <button class="fo-button fo-button-sm fo-button-flat">Flat</button>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="fo-button fo-button-sm fo-button-flat">Link</a>
    </div>
  </section>

  <section>
    <h3>Large buttons</h3>
    <div class="components">
      <button class="fo-button fo-button-lg fo-button-primary">Primary</button>
      <button class="fo-button fo-button-lg fo-button-secondary"
        >Secondary</button
      >
      <button class="fo-button fo-button-lg">Basic</button>
      <button class="fo-button fo-button-lg fo-button-outlined">Outlined</button
      >
      <button class="fo-button fo-button-lg fo-button-warning">Warning</button>
      <button class="fo-button fo-button-lg fo-button-flat">Flat</button>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#" class="fo-button fo-button-lg fo-button-flat">Link</a>
    </div>
  </section>
</ComponentContainer>
