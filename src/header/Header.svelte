<header>
  <h1>Foliole</h1>
  <img src="foliole.svg" class="brand" alt="Foliole brand icon" />
</header>

<style>
  header {
    background-color: var(--fo-primary-clr);
    padding: var(--fo-spacing);
    color: var(--fo-light-text-clr);
    position: sticky;
    top: 0;
    z-index: 9999;
    box-shadow: var(--fo-box-shadow);
    min-height: 4rem;
    display: flex;
    align-items: center;
    gap: calc(var(--fo-spacing) / 2);
  }

  header h1 {
    margin: 0;
    line-height: 1;
  }

  header .brand {
    width: 2rem;
    height: 2rem;
  }
</style>
