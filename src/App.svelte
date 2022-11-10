<script>
  import { Route, Router } from 'svelte-navigator';
  import Badges from './components/badges/Badges.svelte';
  import Buttons from './components/buttons/Buttons.svelte';
  import Cards from './components/cards/Cards.svelte';
  import Checkboxes from './components/checkboxes/Checkboxes.svelte';
  import Links from './components/links/Links.svelte';
  import RadioButtons from './components/radio-buttons/RadioButtons.svelte';
  import SelectFields from './components/select-fields/SelectFields.svelte';
  import TextFields from './components/text-fields/TextFields.svelte';
  import Header from './header/Header.svelte';
  import Sidenav from './sidenav/Sidenav.svelte';
</script>

<Header />;
<Router>
  <div class="page-container">
    <Sidenav />
    <main>
      <h1 class="fo-display-text-lg">Components</h1>
      <section class="components-container">
        <Route path="buttons" component={Buttons} />
        <Route path="links" component={Links} />
        <Route path="text-fields" component={TextFields} />
        <Route path="select-fields" component={SelectFields} />
        <Route path="radio-buttons" component={RadioButtons} />
        <Route path="checkboxes" component={Checkboxes} />
        <Route path="badges" component={Badges} />
        <Route path="cards" component={Cards} />
      </section>
    </main>
  </div>
</Router>

<style>
</style>
