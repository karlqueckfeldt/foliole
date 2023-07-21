import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Text fields" }, {}, {
    default: () => {
      return `<div class="${"text-fields"}"><div><label class="${"fo-form-label"}" for="${"text_input"}">Text field</label>
      <input id="${"text_input"}" name="${"text_input"}" type="${"text"}" class="${"fo-form-field"}">
      ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: textFieldsCode }, {}, {})}</div>

    <div><label class="${"fo-form-label"}" for="${"disabled_text_input"}">Disabled text field</label>
      <input id="${"disabled_text_input"}" name="${"disabled_text_input"}" type="${"text"}" class="${"fo-form-field"}" disabled>
      ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: disabledTextFieldsCode }, {}, {})}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};
