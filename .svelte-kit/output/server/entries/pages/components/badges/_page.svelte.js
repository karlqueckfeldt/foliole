import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const badgesCode = `<div class="fo-badge fo-badge-primary">Primary</div>
<div class="fo-badge fo-badge-secondary">Secondary</div>
<div class="fo-badge">Basic</div>
<div class="fo-badge fo-badge-outlined">Outlined</div>
<div class="fo-badge fo-badge-primary">4</div>
<div class="fo-badge fo-badge-primary"></div>`;
  return `${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Badges" }, {}, {
    default: () => {
      return `<div class="${"components"}"><div class="${"fo-badge fo-badge-primary"}">Primary</div>
    <div class="${"fo-badge fo-badge-secondary"}">Secondary</div>
    <div class="${"fo-badge"}">Basic</div>
    <div class="${"fo-badge fo-badge-outlined"}">Outlined</div>
    <div class="${"fo-badge fo-badge-primary"}">4</div>
    <div class="${"fo-badge fo-badge-primary"}"></div></div>

  ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: badgesCode }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
