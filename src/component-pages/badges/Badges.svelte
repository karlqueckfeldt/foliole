<script>
  import CodeViewer from '../../code-viewer/CodeViewer.svelte';
  import ComponentContainer from '../../component-container/ComponentContainer.svelte';

  const badgesCode = `<div class="fo-badge fo-badge-primary">Primary</div>
<div class="fo-badge fo-badge-secondary">Secondary</div>
<div class="fo-badge">Basic</div>
<div class="fo-badge fo-badge-outlined">Outlined</div>
<div class="fo-badge fo-badge-primary">4</div>
<div class="fo-badge fo-badge-primary"></div>`;
</script>

<ComponentContainer heading="Badges">
  <div class="components">
    <div class="fo-badge fo-badge-primary">Primary</div>
    <div class="fo-badge fo-badge-secondary">Secondary</div>
    <div class="fo-badge">Basic</div>
    <div class="fo-badge fo-badge-outlined">Outlined</div>
    <div class="fo-badge fo-badge-primary">4</div>
    <div class="fo-badge fo-badge-primary" />
  </div>

  <CodeViewer code={badgesCode} />
</ComponentContainer>
