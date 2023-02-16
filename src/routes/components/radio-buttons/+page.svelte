<script>
  import CodeViewer from '../../../lib/code-viewer/CodeViewer.svelte';
  import ComponentContainer from '../component-container/ComponentContainer.svelte';

  const radioButtonsCode = `  <fieldset class="fo-form-fieldset">
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
</fieldset>`;
</script>

<ComponentContainer heading="Radio buttons">
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

  <CodeViewer code={radioButtonsCode} />
</ComponentContainer>
