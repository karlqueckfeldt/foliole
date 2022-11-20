<script>
  import { Route, Router } from 'svelte-navigator';
  import Components from './component-pages/ComponentPages.svelte';
  import Home from './home/Home.svelte';
  import Sidenav from './sidenav/Sidenav.svelte';
  import UtilitiesPages from './utilities-pages/UtilitiesPages.svelte';
</script>

<div class="page-container">
  <Router>
    <Sidenav />
    <main>
      <Route path="/">
        <Home />
      </Route>
      <Route path="components/*">
        <Components />
      </Route>
      <Route path="utilities/*">
        <UtilitiesPages />
      </Route>
      <Route><h1 class="fo-display-text-lg">☹︎</h1></Route>
    </main>
  </Router>
</div>
