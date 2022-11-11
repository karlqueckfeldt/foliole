<script>
  import { Link } from 'svelte-navigator';
</script>

<aside class="side-nav">
  <nav>
    <ul class="side-nav-list">
      <li>
        <Link to="buttons" class="fo-button fo-button-basic">Buttons</Link>
      </li>
      <li>
        <Link to="links" class="fo-button fo-button-basic">Links</Link>
      </li>
      <li>
        <Link to="text-fields" class="fo-button fo-button-basic"
          >Text fields</Link
        >
      </li>
      <li>
        <Link to="select-fields" class="fo-button fo-button-basic"
          >Select fields</Link
        >
      </li>
      <li>
        <Link to="radio-buttons" class="fo-button fo-button-basic"
          >Radio buttons</Link
        >
      </li>
      <li>
        <Link to="checkboxes" class="fo-button fo-button-basic">Checkboxes</Link
        >
      </li>
      <li>
        <Link to="badges" class="fo-button fo-button-basic">Badges</Link>
      </li>
      <li>
        <Link to="cards" class="fo-button fo-button-basic">Cards</Link>
      </li>
    </ul>
  </nav>
</aside>

<style>
  .side-nav {
    position: sticky;
    top: 6rem;
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
