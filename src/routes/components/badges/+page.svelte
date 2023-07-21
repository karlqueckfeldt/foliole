<script>
  import CodeViewer from '../../../lib/code-viewer/CodeViewer.svelte';
  import SubpageContainer from '../../../lib/subpage-container/SubpageContainer.svelte';

  const badgesCode = `<div class="fo-badge fo-badge-primary">Primary</div>
<div class="fo-badge fo-badge-secondary">Secondary</div>
<div class="fo-badge">Basic</div>
<div class="fo-badge fo-badge-outlined">Outlined</div>
<div class="fo-badge fo-badge-primary">4</div>
<div class="fo-badge fo-badge-primary"></div>`;
</script>

<SubpageContainer heading="Badges">
  <div class="components">
    <div class="fo-badge fo-badge-primary">Primary</div>
    <div class="fo-badge fo-badge-secondary">Secondary</div>
    <div class="fo-badge">Basic</div>
    <div class="fo-badge fo-badge-outlined">Outlined</div>
    <div class="fo-badge fo-badge-primary">4</div>
    <div class="fo-badge fo-badge-primary" />
  </div>

  <CodeViewer code={badgesCode} />
</SubpageContainer>
