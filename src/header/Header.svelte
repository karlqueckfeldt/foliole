<header>
  <div class="header-content-wrapper">
    <img src="foliole.svg" class="brand" alt="Foliole brand icon" />
  </div>
</header>

<style>
  header {
    background-color: var(--fo-primary-clr);
    padding: var(--fo-spacing);
    color: var(--fo-secondary-text-clr);
    position: sticky;
    top: 0;
    z-index: 9999;
    box-shadow: var(--fo-box-shadow);
    min-block-size: 4rem;
  }

  .header-content-wrapper {
    display: flex;
    align-items: center;
    gap: calc(var(--fo-spacing) / 2);
    max-inline-size: var(--max-page-width);
    margin-inline: auto;
  }

  header .brand {
    inline-size: 2rem;
    block-size: 2rem;
  }
</style>
