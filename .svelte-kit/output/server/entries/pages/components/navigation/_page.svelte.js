import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navigationCode = `<nav class="fo-navigation">
  <ul class="fo-navigation-list">
    <li>
      <a href="#" class="fo-button fo-button-flat fo-text-bold">Home</a>
    </li>

    <li>
      <a href="#" class="fo-button fo-button-flat fo-text-bold">Components</a>
    </li>
    <ul class="fo-navigation-list">
      <li>
        <a href="#" class="fo-button fo-button-flat">Buttons</a>
      </li>
      <li>
        <a href="#" class="fo-button fo-button-flat active">Links</a>
      </li>
      <li>
        <a href="#" class="fo-button fo-button-flat">Text fields</a>
      </li>
      <li>
        <a href="#" class="fo-button fo-button-flat">Select</a>
      </li>
      <li>
        <a href="#" class="fo-button fo-button-flat">Radio buttons</a>
      </li>
    </ul>

    <li>
      <a href="#" class="fo-button fo-button-flat fo-text-bold">Utilities</a>
    </li>
    <ul class="fo-navigation-list">
      <li>
        <a href="#" class="fo-button fo-button-flat">Classes</a>
      </li>
      <li>
        <a href="#" class="fo-button fo-button-flat">Properties</a>
      </li>
    </ul>
  </ul>
</nav>`;
  return `${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Navigation" }, {}, {
    default: () => {
      return `
  <nav class="${"fo-navigation"}"><ul class="${"fo-navigation-list"}"><li><a href="${"#"}" class="${"fo-button fo-button-flat fo-text-bold"}">Home</a></li>

      <li><a href="${"#"}" class="${"fo-button fo-button-flat fo-text-bold"}">Components</a></li>
      <ul class="${"fo-navigation-list"}"><li><a href="${"#"}" class="${"fo-button fo-button-flat"}">Buttons</a></li>
        <li><a href="${"#"}" class="${"fo-button fo-button-flat active"}">Links</a></li>
        <li><a href="${"#"}" class="${"fo-button fo-button-flat"}">Text fields</a></li>
        <li><a href="${"#"}" class="${"fo-button fo-button-flat"}">Select</a></li>
        <li><a href="${"#"}" class="${"fo-button fo-button-flat"}">Radio buttons</a></li></ul>

      <li><a href="${"#"}" class="${"fo-button fo-button-flat fo-text-bold"}">Utilities</a></li>
      <ul class="${"fo-navigation-list"}"><li><a href="${"#"}" class="${"fo-button fo-button-flat"}">Classes</a></li>
        <li><a href="${"#"}" class="${"fo-button fo-button-flat"}">Properties</a></li></ul></ul></nav>
  ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: navigationCode }, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
