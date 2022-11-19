<script>
  import Highlight from 'svelte-highlight';
  import langHtml from 'svelte-highlight/languages/vbscript-html';
  import codeStyle from 'svelte-highlight/styles/stackoverflow-light';

  export let code;

  const trimmedCode = () => code.trim();
</script>

<svelte:head>
  {@html codeStyle}
</svelte:head>

<div class="fo-card fo-card-outlined fo-padding-0 fo-margin-top-1">
  <img src="/assets/code.svg" alt="Code icon" />
  <Highlight language={langHtml} code={trimmedCode()} />
</div>

<style>
  .fo-card {
    position: relative;
    font-size: 1rem;
    border-color: var(--fo-opaque-clr);
    min-height: 100px;
  }

  .fo-card :global(code) {
    background-color: rgb(245, 248, 245);
  }

  img {
    position: absolute;
    right: var(--fo-spacing);
    top: var(--fo-spacing);
  }
</style>
