<script>
  import CodeViewer from '../../../lib/code-viewer/CodeViewer.svelte';
  import ComponentContainer from '../component-container/ComponentContainer.svelte';

  const linkCode = `<a class="fo-link" href="#">A regular link</a>`;
</script>

<ComponentContainer heading="Links">
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a class="fo-link" href="#">A regular link</a>

  <CodeViewer code={linkCode} />
</ComponentContainer>
