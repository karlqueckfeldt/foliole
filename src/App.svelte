<script>
  import Header from './header/Header.svelte';
  import Sidenav from './sidenav/Sidenav.svelte';
  import { Router, Link, Route } from 'svelte-navigator';
  import Buttons from './components/buttons/Buttons.svelte';
  import Links from './components/links/Links.svelte';
  import TextFields from './components/text-fields/TextFields.svelte';
  import SelectFields from './components/select-fields/SelectFields.svelte';
</script>

<Header />;
<Router>
  <div class="page-container">
    <Sidenav />
    <main>
      <h1 class="fo-display-text-lg">Components</h1>
      <section class="components-container">
        <Buttons />
        <Links />
        <TextFields />
        <SelectFields />

        <section class="fo-card fo-card-bordered">
          <h2 class="fo-display-text-md" id="radio_buttons_section">
            Radio buttons
          </h2>
          <div>
            <fieldset class="fo-form-fieldset">
              <legend class="fo-form-fieldset-legend">Animals</legend>
              <div class="fo-form-radio">
                <input
                  class="fo-form-radio-input"
                  type="radio"
                  value="Cats"
                  id="cats"
                  name="animal"
                  checked
                /><label for="cats">Cats</label>
              </div>
              <div class="fo-form-radio">
                <input
                  class="fo-form-radio-input"
                  type="radio"
                  value="Dogs"
                  id="dogs"
                  name="animal"
                /><label for="dogs">Dogs</label>
              </div>
              <div class="fo-form-radio">
                <input
                  class="fo-form-radio-input"
                  type="radio"
                  value="Frogs"
                  id="frogs"
                  name="animal"
                  disabled
                /><label for="frogs">Frogs</label>
              </div>
              <div class="fo-form-radio">
                <input
                  class="fo-form-radio-input"
                  type="radio"
                  value="Owls"
                  id="owls"
                  name="animal"
                /><label for="owls">Owls</label>
              </div>
            </fieldset>
          </div>
        </section>

        <section class="fo-card fo-card-bordered">
          <h2 class="fo-display-text-md" id="checkboxes_section">Checkboxes</h2>
          <div>
            <fieldset class="fo-form-fieldset">
              <legend class="fo-form-fieldset-legend">Food</legend>
              <div class="fo-form-check">
                <input
                  class="fo-form-check-input"
                  type="checkbox"
                  value="Burgers"
                  id="burgers"
                  name="food"
                  checked
                /><label for="burgers">Burgers</label>
              </div>
              <div class="fo-form-check">
                <input
                  class="fo-form-check-input"
                  type="checkbox"
                  value="Pasta"
                  id="pasta"
                  name="food"
                /><label for="pasta">Pasta</label>
              </div>
              <div class="fo-form-check">
                <input
                  class="fo-form-check-input"
                  type="checkbox"
                  value="Pancakes"
                  id="pancakes"
                  name="food"
                  disabled
                /><label for="pancakes">Pancakes</label>
              </div>
              <div class="fo-form-check">
                <input
                  class="fo-form-check-input"
                  type="checkbox"
                  value="Sushi"
                  id="sushi"
                  name="food"
                /><label for="sushi">Sushi</label>
              </div>
            </fieldset>
          </div>
        </section>

        <section class="fo-card fo-card-bordered">
          <h2 class="fo-display-text-md" id="badges_section">Badges</h2>
          <div class="components">
            <div class="fo-badge" />
            <div class="fo-badge">4</div>
            <div class="fo-badge">Elevated badge</div>
            <div class="fo-badge fo-badge-outlined">Outlined badge</div>
          </div>
        </section>

        <section class="fo-card fo-card-bordered">
          <h2 class="fo-display-text-md" id="cards_section">Cards</h2>
          <div class="components">
            <div class="fo-card fo-card-primary">
              <h3>Primary card</h3>
              <p>This is a primary card.</p>
            </div>
            <div class="fo-card">
              <h3>Light card</h3>
              <p>This is a light card.</p>
            </div>
            <div class="fo-card fo-card-bordered">
              <h3>Bordered card</h3>
              <p>This is a bordered card.</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  </div>
</Router>

<style>
</style>
