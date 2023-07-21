<script>
  import CodeViewer from '../../../lib/code-viewer/CodeViewer.svelte';
  import SubpageContainer from '../../../lib/subpage-container/SubpageContainer.svelte';

  const linkCode = `<a class="fo-link" href="#">A regular link</a>`;
</script>

<SubpageContainer heading="Links">
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a class="fo-link" href="#">A regular link</a>

  <CodeViewer code={linkCode} />
</SubpageContainer>
