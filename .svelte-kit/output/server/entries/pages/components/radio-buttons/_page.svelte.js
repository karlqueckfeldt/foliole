import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Radio buttons" }, {}, {
    default: () => {
      return `<fieldset class="${"fo-form-fieldset"}"><legend class="${"fo-form-fieldset-legend"}">Animals</legend>
    <div class="${"fo-form-radio"}"><input class="${"fo-form-radio-input"}" type="${"radio"}" value="${"Cats"}" id="${"cats"}" name="${"animal"}" checked><label for="${"cats"}">Cats</label></div>
    <div class="${"fo-form-radio"}"><input class="${"fo-form-radio-input"}" type="${"radio"}" value="${"Dogs"}" id="${"dogs"}" name="${"animal"}"><label for="${"dogs"}">Dogs</label></div>
    <div class="${"fo-form-radio"}"><input class="${"fo-form-radio-input"}" type="${"radio"}" value="${"Frogs"}" id="${"frogs"}" name="${"animal"}" disabled><label for="${"frogs"}">Frogs</label></div>
    <div class="${"fo-form-radio"}"><input class="${"fo-form-radio-input"}" type="${"radio"}" value="${"Owls"}" id="${"owls"}" name="${"animal"}"><label for="${"owls"}">Owls</label></div></fieldset>

  ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: radioButtonsCode }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
