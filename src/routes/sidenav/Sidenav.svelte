<script>
  import logo from '$lib/images/foliole.svg';
</script>

<aside class="side-nav">
  <img
    src={logo}
    alt="Foliole brand icon"
    class="fo-padding-left-1 fo-padding-bottom-1"
  />
  <nav>
    <ul class="side-nav-list">
      <li>
        <a href="/" class="fo-button fo-button-flat">Home</a>
      </li>

      <li>
        <a href="/components/" class="fo-button fo-button-flat">Components</a>
      </li>
      <li>
        <a href="/components/buttons" class="fo-button fo-button-flat"
          >Buttons</a
        >
      </li>
      <li>
        <a href="/components/links" class="fo-button fo-button-flat">Links</a>
      </li>
      <li>
        <a href="/components/text-fields" class="fo-button fo-button-flat"
          >Text fields</a
        >
      </li>
      <li>
        <a href="/components/select" class="fo-button fo-button-flat">Select</a>
      </li>
      <li>
        <a href="/components/radio-buttons" class="fo-button fo-button-flat"
          >Radio buttons</a
        >
      </li>
      <li>
        <a href="/components/checkboxes" class="fo-button fo-button-flat"
          >Checkboxes</a
        >
      </li>
      <li>
        <a href="/components/badges" class="fo-button fo-button-flat">Badges</a>
      </li>
      <li>
        <a href="/components/cards" class="fo-button fo-button-flat">Cards</a>
      </li>

      <li>
        <a href="/utilities/" class="fo-button fo-button-flat">Utilities</a>
      </li>
    </ul>
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
