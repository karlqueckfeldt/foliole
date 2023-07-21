import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const checkboxesCode = `<fieldset class="fo-form-fieldset">
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
</fieldset>`;
  return `${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Checkboxes" }, {}, {
    default: () => {
      return `<fieldset class="${"fo-form-fieldset"}"><legend class="${"fo-form-fieldset-legend"}">Food</legend>
    <div class="${"fo-form-check"}"><input class="${"fo-form-check-input"}" type="${"checkbox"}" value="${"Burgers"}" id="${"burgers"}" name="${"food"}" checked><label for="${"burgers"}">Burgers</label></div>
    <div class="${"fo-form-check"}"><input class="${"fo-form-check-input"}" type="${"checkbox"}" value="${"Pancakes"}" id="${"pancakes"}" name="${"food"}"><label for="${"pancakes"}">Lasagna</label></div>
    <div class="${"fo-form-check"}"><input class="${"fo-form-check-input"}" type="${"checkbox"}" value="${"Pasta"}" id="${"pasta"}" name="${"food"}" disabled><label for="${"pasta"}">Pizza</label></div>
    <div class="${"fo-form-check"}"><input class="${"fo-form-check-input"}" type="${"checkbox"}" value="${"Sushi"}" id="${"sushi"}" name="${"food"}"><label for="${"sushi"}">Sushi</label></div></fieldset>
  ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: checkboxesCode }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
