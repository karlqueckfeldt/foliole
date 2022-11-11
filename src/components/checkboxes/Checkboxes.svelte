<script>
  import ComponentContainer from '../../component-container/ComponentContainer.svelte';
</script>

<ComponentContainer heading="Checkboxes">
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
        value="Pancakes"
        id="pancakes"
        name="food"
      /><label for="pancakes">Lasagna</label>
    </div>
    <div class="fo-form-check">
      <input
        class="fo-form-check-input"
        type="checkbox"
        value="Pasta"
        id="pasta"
        name="food"
        disabled
      /><label for="pasta">Pizza</label>
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
</ComponentContainer>
