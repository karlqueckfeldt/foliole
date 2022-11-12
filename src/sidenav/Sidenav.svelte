<script>
  import { Link, useLocation } from 'svelte-navigator';
  const location = useLocation();
</script>

<aside class="side-nav">
  <img src="foliole.svg" alt="Foliole brand icon" class="fo-padding-left-1" />
  <nav>
    {#if $location.pathname !== '/'}
      <ul class="side-nav-list">
        <li>
          <Link to="/" class="fo-button fo-button-flat">{'← Go back'}</Link>
        </li>
      </ul>
    {/if}

    {#if $location.pathname === '/'}
      <ul class="side-nav-list">
        <li>
          <Link to="components/" class="fo-button fo-button-flat"
            >Components</Link
          >
        </li>
      </ul>
    {/if}

    {#if $location.pathname.includes('/components')}
      <ul class="side-nav-list">
        <li>
          <Link to="components" class="fo-button fo-button-flat"
            >Components overview</Link
          >
        </li>
        <li>
          <Link to="components/buttons" class="fo-button fo-button-flat"
            >Buttons</Link
          >
        </li>
        <li>
          <Link to="components/links" class="fo-button fo-button-flat"
            >Links</Link
          >
        </li>
        <li>
          <Link to="components/text-fields" class="fo-button fo-button-flat"
            >Text fields</Link
          >
        </li>
        <li>
          <Link to="components/select-fields" class="fo-button fo-button-flat"
            >Select fields</Link
          >
        </li>
        <li>
          <Link to="components/radio-buttons" class="fo-button fo-button-flat"
            >Radio buttons</Link
          >
        </li>
        <li>
          <Link to="components/checkboxes" class="fo-button fo-button-flat"
            >Checkboxes</Link
          >
        </li>
        <li>
          <Link to="components/badges" class="fo-button fo-button-flat"
            >Badges</Link
          >
        </li>
        <li>
          <Link to="components/cards" class="fo-button fo-button-flat"
            >Cards</Link
          >
        </li>
      </ul>
    {/if}
  </nav>
</aside>

<style>
  .side-nav {
    position: sticky;
    top: calc(var(--fo-spacing) * 2);
    align-self: start;
    gap: var(--fo-spacing);
  }

  .side-nav-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .side-nav-list li {
    display: block;
    margin: 0;
    padding: 0;
  }
</style>
