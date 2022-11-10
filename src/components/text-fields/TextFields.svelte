<script>
  import ComponentContainer from '../component-container/ComponentContainer.svelte';
</script>

<ComponentContainer heading="Text fields">
  <div class="text-fields">
    <div>
      <label class="fo-form-label" for="text_input">Type something</label>
      <input
        id="text_input"
        name="text_input"
        type="text"
        class="fo-form-field"
      />
    </div>

    <div>
      <label class="fo-form-label" for="disabled_text_input"
        >Disabled input</label
      >
      <input
        id="disabled_text_input"
        name="disabled_text_input"
        type="text"
        class="fo-form-field"
        disabled
      />
    </div>
  </div>
</ComponentContainer>
