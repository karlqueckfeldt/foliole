<script>
  import { Link, Route } from 'svelte-navigator';
  import Badges from './badges/Badges.svelte';
  import Buttons from './buttons/Buttons.svelte';
  import Cards from './cards/Cards.svelte';
  import Checkboxes from './checkboxes/Checkboxes.svelte';
  import Links from './links/Links.svelte';
  import RadioButtons from './radio-buttons/RadioButtons.svelte';
  import SelectFields from './select-fields/SelectFields.svelte';
  import TextFields from './text-fields/TextFields.svelte';
</script>

<Route>
  <div class="fo-card fo-card-secondary">
    <h1 class="fo-display-text-lg">Components</h1>
    <p class="fo-lead-text">
      Foliole includes a small collection of components implemented with custom
      CSS properties and classes.
    </p>
  </div>
</Route>
<Route path="buttons">
  <Buttons />
</Route>
<Route path="links">
  <Links />
</Route>
<Route path="text-fields">
  <TextFields />
</Route>
<Route path="select-fields">
  <SelectFields />
</Route>
<Route path="radio-buttons">
  <RadioButtons />
</Route>
<Route path="checkboxes">
  <Checkboxes />
</Route>
<Route path="badges">
  <Badges />
</Route>
<Route path="cards">
  <Cards />
</Route>
<!-- Spinner -->
<!-- Tabs -->
<!-- Breadcrumbs -->

<!-- Range -->
<style>
  p {
    max-inline-size: 70ch;
  }
</style>
