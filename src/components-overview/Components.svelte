<script>
  import { Link, Route } from 'svelte-navigator';
  import Badges from '../component-pages/badges/Badges.svelte';
  import Buttons from '../component-pages/buttons/Buttons.svelte';
  import Cards from '../component-pages/cards/Cards.svelte';
  import Checkboxes from '../component-pages/checkboxes/Checkboxes.svelte';
  import Links from '../component-pages/links/Links.svelte';
  import RadioButtons from '../component-pages/radio-buttons/RadioButtons.svelte';
  import SelectFields from '../component-pages/select-fields/SelectFields.svelte';
  import TextFields from '../component-pages/text-fields/TextFields.svelte';
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
