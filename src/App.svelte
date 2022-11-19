<script>
  import { Route, Router } from 'svelte-navigator';
  import Components from './components-overview/Components.svelte';
  import Home from './home/Home.svelte';
  import Sidenav from './sidenav/Sidenav.svelte';
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
      <Route><h1 class="fo-display-text-lg">☹︎</h1></Route>
    </main>
  </Router>
</div>
