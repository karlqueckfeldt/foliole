<script>
  import { Route } from 'svelte-navigator';
  import Badges from './badges/Badges.svelte';
  import Buttons from './buttons/Buttons.svelte';
  import Cards from './cards/Cards.svelte';
  import Checkboxes from './checkboxes/Checkboxes.svelte';
  import Links from './links/Links.svelte';
  import RadioButtons from './radio-buttons/RadioButtons.svelte';
  import SelectFields from './select/SelectFields.svelte';
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

  <!-- <div class="component-cards fo-margin-top-2">
    <ComponentCard />
    <ComponentCard />
    <ComponentCard />
    <ComponentCard />
    <ComponentCard />
    <ComponentCard />
    <ComponentCard />
    <ComponentCard />
  </div> -->
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
<Route path="select">
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

  /* .component-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: calc(var(--fo-spacing) * 2);
  } */
</style>
