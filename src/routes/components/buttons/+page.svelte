<script>
  import CodeViewer from '../../../lib/code-viewer/CodeViewer.svelte';
  import ComponentContainer from '../component-container/ComponentContainer.svelte';

  const regularButtonsCode = `<button class="fo-button fo-button-primary">Primary</button>
<button class="fo-button fo-button-secondary">Secondary</button>
<button class="fo-button">Basic</button>
<button class="fo-button fo-button-outlined">Outlined</button>
<button class="fo-button fo-button-warning">Warning</button>
<button class="fo-button fo-button-flat">Flat</button>
<a href="#" class="fo-button fo-button-flat">Link</a>`;

  const smallButtonsCode = `<button class="fo-button fo-button-sm fo-button-primary">Primary</button>
<button class="fo-button fo-button-sm fo-button-secondary">Secondary</button>
<button class="fo-button fo-button-sm">Basic</button>
<button class="fo-button fo-button-sm fo-button-outlined">Outlined</button>
<button class="fo-button fo-button-sm fo-button-warning">Warning</button>
<button class="fo-button fo-button-sm fo-button-flat">Flat</button>
<a href="#" class="fo-button fo-button-sm fo-button-flat">Link</a>`;

  const largeButtonsCode = `<button class="fo-button fo-button-lg fo-button-primary">Primary</button>
<button class="fo-button fo-button-lg fo-button-secondary">Secondary</button>
<button class="fo-button fo-button-lg">Basic</button>
<button class="fo-button fo-button-lg fo-button-outlined">Outlined</button>
<button class="fo-button fo-button-lg fo-button-warning">Warning</button>
<button class="fo-button fo-button-lg fo-button-flat">Flat</button>
<a href="#" class="fo-button fo-button-lg fo-button-flat">Link</a>`;

  const disabledButtonsCode = `<button class="fo-button fo-button-primary" disabled>Primary</button>
<button class="fo-button fo-button-secondary" disabled>Secondary</button>
<button class="fo-button" disabled>Basic</button>
<button class="fo-button fo-button-outlined" disabled>Outlined</button>
<button class="fo-button fo-button-warning" disabled>Warning</button>
<button class="fo-button fo-button-flat" disabled>Flat</button>`;
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<ComponentContainer heading="Buttons">
  <section class="fo-margin-bottom-3">
    <h3>Regular buttons</h3>
    <div class="components">
      <button class="fo-button fo-button-primary">Primary</button>
      <button class="fo-button fo-button-secondary">Secondary</button>
      <button class="fo-button">Basic</button>
      <button class="fo-button fo-button-outlined">Outlined</button>
      <button class="fo-button fo-button-warning">Warning</button>
      <button class="fo-button fo-button-flat">Flat</button>
      <a href="#" class="fo-button fo-button-flat">Link</a>
    </div>

    <CodeViewer code={regularButtonsCode} />
  </section>

  <section class="fo-margin-bottom-3">
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
      <a href="#" class="fo-button fo-button-sm fo-button-flat">Link</a>
    </div>

    <CodeViewer code={smallButtonsCode} />
  </section>

  <section class="fo-margin-bottom-3">
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
      <a href="#" class="fo-button fo-button-lg fo-button-flat">Link</a>
    </div>

    <CodeViewer code={largeButtonsCode} />
  </section>

  <section>
    <h3>Disabled buttons</h3>
    <div class="components">
      <button class="fo-button fo-button-primary" disabled>Primary</button>
      <button class="fo-button fo-button-secondary" disabled>Secondary</button>
      <button class="fo-button" disabled>Basic</button>
      <button class="fo-button fo-button-outlined" disabled>Outlined</button>
      <button class="fo-button fo-button-warning" disabled>Warning</button>
      <button class="fo-button fo-button-flat" disabled>Flat</button>
    </div>

    <CodeViewer code={disabledButtonsCode} />
  </section>
</ComponentContainer>
