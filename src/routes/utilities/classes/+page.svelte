<script>
  import CodeViewer from '../../../lib/code-viewer/CodeViewer.svelte';
  import SubpageContainer from '../../../lib/subpage-container/SubpageContainer.svelte';

  const marginClassesCode = `
.fo-m-0
.fo-m-1
.fo-m-inline-1
.fo-m-block-1
.fo-m-block-start-1
.fo-m-block-end-1
.fo-m-inline-end-1
.fo-m-inline-start-1
.fo-m-2
.fo-m-inline-2
.fo-m-block-2
.fo-m-block-start-2
.fo-m-block-end-2
.fo-m-inline-end-2
.fo-m-inline-start-2
.fo-m-3
.fo-m-inline-3
.fo-m-block-3
.fo-m-block-start-3
.fo-m-block-end-3
.fo-m-inline-end-3
.fo-m-inline-start-3
.fo-m-4
.fo-m-inline-4
.fo-m-block-4
.fo-m-block-start-4
.fo-m-block-end-4
.fo-m-inline-end-4
.fo-m-inline-start-4
`;

  const paddingClassesCode = `
.fo-p-0
.fo-p-1
.fo-p-inline-1
.fo-p-block-1
.fo-p-block-start-1
.fo-p-block-end-1
.fo-p-inline-end-1
.fo-p-inline-start-1
.fo-p-2
.fo-p-inline-2
.fo-p-block-2
.fo-p-block-start-2
.fo-p-block-end-2
.fo-p-inline-end-2
.fo-p-inline-start-2
.fo-p-3
.fo-p-inline-3
.fo-p-block-3
.fo-p-block-start-3
.fo-p-block-end-3
.fo-p-inline-end-3
.fo-p-inline-start-3
.fo-p-4
.fo-p-inline-4
.fo-p-block-4
.fo-p-block-start-4
.fo-p-block-end-4
.fo-p-inline-end-4
.fo-p-inline-start-4
`;

  const typographyClassesCode = `
.fo-display-text-lg
.fo-display-text-md
.fo-lead-text
.fo-h1
.fo-h2
.fo-h3
.fo-code-block
.fo-text-center
.fo-text-left
.fo-text-right
.fo-text-primary
.fo-text-secondary
.fo-text-bold
`;
</script>

<SubpageContainer heading="Classes">
  <h2>Margin</h2>
  <CodeViewer code={marginClassesCode} language={'css'} />

  <h2>Padding</h2>
  <CodeViewer code={paddingClassesCode} language={'css'} />

  <h2>Typography</h2>
  <CodeViewer code={typographyClassesCode} language={'css'} />
</SubpageContainer>

<style>
  h2:not(:first-of-type) {
    margin-top: 3rem;
  }
</style>
