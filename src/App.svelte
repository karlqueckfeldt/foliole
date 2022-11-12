<script>
  import { Route, Router } from 'svelte-navigator';
  import Components from './components/Components.svelte';
  import Header from './header/Header.svelte';
  import Home from './home/Home.svelte';
  import Sidenav from './sidenav/Sidenav.svelte';
</script>

<Header />
<Router>
  <div class="page-container">
    <Sidenav />
    <main>
      <Route path="/">
        <Home />
      </Route>
      <Route path="components">
        <Components />
      </Route>
      <Route><h1 class="fo-display-text-lg">😔</h1></Route>
    </main>
  </div>
</Router>

<style>
</style>
