<script>
  import CodeViewer from '../../../lib/code-viewer/CodeViewer.svelte';
  import SubpageContainer from '../../../lib/subpage-container/SubpageContainer.svelte';

  const textFieldsCode = `<label class="fo-form-label" for="text_input">Text field</label>
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

<SubpageContainer heading="Text fields">
  <div class="text-fields">
    <div>
      <label class="fo-form-label" for="text_input">Text field</label>
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
</SubpageContainer>
