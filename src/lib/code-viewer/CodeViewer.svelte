<script>
  import Highlight from 'svelte-highlight';
  import langHtml from 'svelte-highlight/languages/vbscript-html';
  import langCss from 'svelte-highlight/languages/css';
  import codeStyle from 'svelte-highlight/styles/stackoverflow-light';

  import codeIcon from '$lib/images/code.svg';

  export let code;
  export let language = 'html';

  const trimmedCode = () => code.trim();
</script>

<svelte:head>
  {@html codeStyle}
</svelte:head>

<div class="fo-card fo-card-outlined fo-p-0 fo-m-block-start-1">
  <img src={codeIcon} alt="Code icon" />
  <Highlight
    language={language === 'html' ? langHtml : langCss}
    code={trimmedCode()}
  />
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
