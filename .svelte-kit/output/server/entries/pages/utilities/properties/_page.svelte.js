import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-yobcya:not(:first-of-type){margin-top:3rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const generalPropertiesCode = `
:root {
  /* General 🍂 */
  --fo-spacing: 1rem;
  --fo-border-width: 1px;
  --fo-radio-border-width: calc(var(--fo-border-width) * 2);
  --fo-border: var(--fo-border-width) solid var(--fo-border-clr);
  --fo-radio-border: var(--fo-radio-border-width) solid var(--fo-radio-clr);
  --fo-button-radius: 999999px;
  --fo-input-radius: 4px;
  --fo-card-radius: 18px;
  --fo-code-radius: 10px;
  --fo-box-shadow: 0 2px 4px 0 var(--fo-box-shadow-clr);
  --fo-outline: 2px solid var(--fo-outline-clr);
`;
  const colorPropertiesCode = `
:root {
  /* Base colors 🍂 */
  --fo-primary-clr: rgb(22, 92, 38);
  --fo-secondary-clr: rgb(204, 230, 212);
  --fo-warning-clr: rgb(210 42 18);
  --fo-light-clr: rgb(243, 248, 246);
  --fo-dark-clr: rgb(32, 49, 41);
  
  /* Lighter base colors 🍂 */
  --fo-primary-light-clr: rgb(34, 106, 40);
  --fo-secondary-light-clr: rgb(222, 238, 225);
  --fo-warning-light-clr: rgb(229, 52, 46);
  
  /* Misc colors 🍂 */
  --fo-disabled-clr: rgb(190, 190, 190);
  --fo-opaque-clr: rgba(85, 85, 85, 0.202);
  
  /* Color applications 🍂 */
  --fo-primary-text-clr: var(--fo-dark-clr);
  --fo-secondary-text-clr: var(--fo-light-clr);
  --fo-border-clr: var(--fo-primary-clr);
  --fo-link-clr: var(--fo-primary-clr);
  --fo-bg-clr: var(--fo-light-clr);
  --fo-radio-clr: var(--fo-primary-clr);
  --fo-box-shadow-clr: var(--fo-opaque-clr);
  --fo-outline-clr: var(--fo-primary-clr);
}
`;
  const typographyPropertiesCode = `
:root {
  /* Font family 🍂 */
  --fo-font-family: Verdana, sans-serif;

  /* Font sizes 🍂 */
  --fo-h1-size: 2.5rem;
  --fo-h2-size: 2rem;
  --fo-h3-size: 1.5rem;
  --fo-h4-size: 1rem;
  --fo-h5-size: 0.9em;
  --fo-h6-size: 0.7em;
  --fo-display-text-lg-size: 7rem;
  --fo-display-text-md-size: 4rem;
  --fo-text-sm-size: 0.8em;
  --fo-text-lg-size: 1.4em;

  /* Line height 🍂 */
  --fo-body-line-height: 1.5;
  --fo-heading-line-height: 1.2;
}
`;
  $$result.css.add(css);
  return `${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Properties" }, {}, {
    default: () => {
      return `<h2 class="${"svelte-yobcya"}">General</h2>
  ${validate_component(CodeViewer, "CodeViewer").$$render(
        $$result,
        {
          code: generalPropertiesCode,
          language: "css"
        },
        {},
        {}
      )}

  <h2 class="${"svelte-yobcya"}">Colors</h2>
  ${validate_component(CodeViewer, "CodeViewer").$$render(
        $$result,
        {
          code: colorPropertiesCode,
          language: "css"
        },
        {},
        {}
      )}

  <h2 class="${"svelte-yobcya"}">Typography</h2>
  ${validate_component(CodeViewer, "CodeViewer").$$render(
        $$result,
        {
          code: typographyPropertiesCode,
          language: "css"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
export {
  Page as default
};
