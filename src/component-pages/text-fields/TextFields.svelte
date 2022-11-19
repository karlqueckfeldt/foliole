<script>
  import CodeViewer from '../../code-viewer/CodeViewer.svelte';
  import ComponentContainer from '../../component-container/ComponentContainer.svelte';

  const textFieldsCode = `<label class="fo-form-label" for="text_input">Type something</label>
<input
  id="text_input"
  name="text_input"
  type="text"
  class="fo-form-field"
/>`;
  const disabledTextFieldsCode = `<label class="fo-form-label" for="disabled_text_input"
  >Disabled text field</label
>
<input
  id="disabled_text_input"
  name="disabled_text_input"
  type="text"
  class="fo-form-field"
  disabled
/>`;
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
      <CodeViewer code={textFieldsCode} />
    </div>

    <div>
      <label class="fo-form-label" for="disabled_text_input"
        >Disabled text field</label
      >
      <input
        id="disabled_text_input"
        name="disabled_text_input"
        type="text"
        class="fo-form-field"
        disabled
      />
      <CodeViewer code={disabledTextFieldsCode} />
    </div>
  </div>
</ComponentContainer>
