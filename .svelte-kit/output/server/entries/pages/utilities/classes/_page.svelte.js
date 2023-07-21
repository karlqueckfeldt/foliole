import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-yobcya:not(:first-of-type){margin-top:3rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const marginClassesCode = `
.fo-m-0
.fo-m-1
.fo-m-inline-1
.fo-m-block-1
.fo-m-block-start-1
.fo-m-block-end-1
.fo-m-inline-end-1
.fo-m-inline-start-1
.fo-m-2
.fo-m-inline-2
.fo-m-block-2
.fo-m-block-start-2
.fo-m-block-end-2
.fo-m-inline-end-2
.fo-m-inline-start-2
.fo-m-3
.fo-m-inline-3
.fo-m-block-3
.fo-m-block-start-3
.fo-m-block-end-3
.fo-m-inline-end-3
.fo-m-inline-start-3
.fo-m-4
.fo-m-inline-4
.fo-m-block-4
.fo-m-block-start-4
.fo-m-block-end-4
.fo-m-inline-end-4
.fo-m-inline-start-4
`;
  const paddingClassesCode = `
.fo-p-0
.fo-p-1
.fo-p-inline-1
.fo-p-block-1
.fo-p-block-start-1
.fo-p-block-end-1
.fo-p-inline-end-1
.fo-p-inline-start-1
.fo-p-2
.fo-p-inline-2
.fo-p-block-2
.fo-p-block-start-2
.fo-p-block-end-2
.fo-p-inline-end-2
.fo-p-inline-start-2
.fo-p-3
.fo-p-inline-3
.fo-p-block-3
.fo-p-block-start-3
.fo-p-block-end-3
.fo-p-inline-end-3
.fo-p-inline-start-3
.fo-p-4
.fo-p-inline-4
.fo-p-block-4
.fo-p-block-start-4
.fo-p-block-end-4
.fo-p-inline-end-4
.fo-p-inline-start-4
`;
  const typographyClassesCode = `
.fo-display-text-lg
.fo-display-text-md
.fo-lead-text
.fo-h1
.fo-h2
.fo-h3
.fo-code-block
.fo-text-center
.fo-text-left
.fo-text-right
.fo-text-primary
.fo-text-secondary
.fo-text-bold
`;
  $$result.css.add(css);
  return `${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Classes" }, {}, {
    default: () => {
      return `<h2 class="${"svelte-yobcya"}">Margin</h2>
  ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: marginClassesCode, language: "css" }, {}, {})}

  <h2 class="${"svelte-yobcya"}">Padding</h2>
  ${validate_component(CodeViewer, "CodeViewer").$$render(
        $$result,
        {
          code: paddingClassesCode,
          language: "css"
        },
        {},
        {}
      )}

  <h2 class="${"svelte-yobcya"}">Typography</h2>
  ${validate_component(CodeViewer, "CodeViewer").$$render(
        $$result,
        {
          code: typographyClassesCode,
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
