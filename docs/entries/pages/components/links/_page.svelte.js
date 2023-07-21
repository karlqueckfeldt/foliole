import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const linkCode = `<a class="fo-link" href="#">A regular link</a>`;
  return `${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Links" }, {}, {
    default: () => {
      return `
  <a class="${"fo-link"}" href="${"#"}">A regular link</a>

  ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: linkCode }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
