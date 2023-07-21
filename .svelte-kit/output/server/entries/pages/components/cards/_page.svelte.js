import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const cardsCode = `<div class="fo-card fo-card-primary" aria-labelledby="primary_card_heading">
  <span class="fo-h3" id="primary_card_heading">Primary</span>
  <p>This is a primary card.</p>
</div>
<div class="fo-card fo-card-secondary">
  <p class="fo-h3">Secondary</p>
  <p>This is a secondary card.</p>
</div>
<div class="fo-card">
  <p class="fo-h3">Basic</p>
  <p>This is a basic card.</p>
</div>
<div class="fo-card fo-card-outlined">
  <p class="fo-h3">Outlined</p>
  <p>This is an outlined card.</p>
</div>`;
  return `${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Cards" }, {}, {
    default: () => {
      return `<div class="${"components"}"><div class="${"fo-card fo-card-primary"}" aria-labelledby="${"primary_card_heading"}"><span class="${"fo-h3"}" id="${"primary_card_heading"}">Primary</span>
      <p>This is a primary card.</p></div>
    <div class="${"fo-card fo-card-secondary"}" aria-labelledby="${"secondary_card_heading"}"><span class="${"fo-h3"}" id="${"secondary_card_heading"}">Secondary</span>
      <p>This is a secondary card.</p></div>
    <div class="${"fo-card"}" aria-labelledby="${"basic_card_heading"}"><span class="${"fo-h3"}" id="${"basic_card_heading"}">Basic</span>
      <p>This is a basic card.</p></div>
    <div class="${"fo-card fo-card-outlined"}" aria-labelledby="${"outlined_card_heading"}"><span class="${"fo-h3"}" id="${"outlined_card_heading"}">Outlined</span>
      <p>This is an outlined card.</p></div></div>

  ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: cardsCode }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
