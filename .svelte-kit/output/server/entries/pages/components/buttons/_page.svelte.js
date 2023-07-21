import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SubpageContainer, C as CodeViewer } from "../../../../chunks/SubpageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const regularButtonsCode = `<button class="fo-button fo-button-primary">Primary</button>
<button class="fo-button fo-button-secondary">Secondary</button>
<button class="fo-button">Basic</button>
<button class="fo-button fo-button-outlined">Outlined</button>
<button class="fo-button fo-button-warning">Warning</button>
<button class="fo-button fo-button-flat">Flat</button>
<a href="#" class="fo-button fo-button-flat">Link</a>`;
  const smallButtonsCode = `<button class="fo-button fo-button-sm fo-button-primary">Primary</button>
<button class="fo-button fo-button-sm fo-button-secondary">Secondary</button>
<button class="fo-button fo-button-sm">Basic</button>
<button class="fo-button fo-button-sm fo-button-outlined">Outlined</button>
<button class="fo-button fo-button-sm fo-button-warning">Warning</button>
<button class="fo-button fo-button-sm fo-button-flat">Flat</button>
<a href="#" class="fo-button fo-button-sm fo-button-flat">Link</a>`;
  const largeButtonsCode = `<button class="fo-button fo-button-lg fo-button-primary">Primary</button>
<button class="fo-button fo-button-lg fo-button-secondary">Secondary</button>
<button class="fo-button fo-button-lg">Basic</button>
<button class="fo-button fo-button-lg fo-button-outlined">Outlined</button>
<button class="fo-button fo-button-lg fo-button-warning">Warning</button>
<button class="fo-button fo-button-lg fo-button-flat">Flat</button>
<a href="#" class="fo-button fo-button-lg fo-button-flat">Link</a>`;
  const disabledButtonsCode = `<button class="fo-button fo-button-primary" disabled>Primary</button>
<button class="fo-button fo-button-secondary" disabled>Secondary</button>
<button class="fo-button" disabled>Basic</button>
<button class="fo-button fo-button-outlined" disabled>Outlined</button>
<button class="fo-button fo-button-warning" disabled>Warning</button>
<button class="fo-button fo-button-flat" disabled>Flat</button>`;
  return `
${validate_component(SubpageContainer, "SubpageContainer").$$render($$result, { heading: "Buttons" }, {}, {
    default: () => {
      return `<section class="${"fo-m-block-end-3"}"><h3>Regular buttons</h3>
    <div class="${"components"}"><button class="${"fo-button fo-button-primary"}">Primary</button>
      <button class="${"fo-button fo-button-secondary"}">Secondary</button>
      <button class="${"fo-button"}">Basic</button>
      <button class="${"fo-button fo-button-outlined"}">Outlined</button>
      <button class="${"fo-button fo-button-warning"}">Warning</button>
      <button class="${"fo-button fo-button-flat"}">Flat</button>
      <a href="${"#"}" class="${"fo-button fo-button-flat"}">Link</a></div>

    ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: regularButtonsCode }, {}, {})}</section>

  <section class="${"fo-m-block-end-3"}"><h3>Small buttons</h3>
    <div class="${"components"}"><button class="${"fo-button fo-button-sm fo-button-primary"}">Primary</button>
      <button class="${"fo-button fo-button-sm fo-button-secondary"}">Secondary</button>
      <button class="${"fo-button fo-button-sm"}">Basic</button>
      <button class="${"fo-button fo-button-sm fo-button-outlined"}">Outlined</button>
      <button class="${"fo-button fo-button-sm fo-button-warning"}">Warning</button>
      <button class="${"fo-button fo-button-sm fo-button-flat"}">Flat</button>
      <a href="${"#"}" class="${"fo-button fo-button-sm fo-button-flat"}">Link</a></div>

    ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: smallButtonsCode }, {}, {})}</section>

  <section class="${"fo-m-block-end-3"}"><h3>Large buttons</h3>
    <div class="${"components"}"><button class="${"fo-button fo-button-lg fo-button-primary"}">Primary</button>
      <button class="${"fo-button fo-button-lg fo-button-secondary"}">Secondary</button>
      <button class="${"fo-button fo-button-lg"}">Basic</button>
      <button class="${"fo-button fo-button-lg fo-button-outlined"}">Outlined</button>
      <button class="${"fo-button fo-button-lg fo-button-warning"}">Warning</button>
      <button class="${"fo-button fo-button-lg fo-button-flat"}">Flat</button>
      <a href="${"#"}" class="${"fo-button fo-button-lg fo-button-flat"}">Link</a></div>

    ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: largeButtonsCode }, {}, {})}</section>

  <section><h3>Disabled buttons</h3>
    <div class="${"components"}"><button class="${"fo-button fo-button-primary"}" disabled>Primary</button>
      <button class="${"fo-button fo-button-secondary"}" disabled>Secondary</button>
      <button class="${"fo-button"}" disabled>Basic</button>
      <button class="${"fo-button fo-button-outlined"}" disabled>Outlined</button>
      <button class="${"fo-button fo-button-warning"}" disabled>Warning</button>
      <button class="${"fo-button fo-button-flat"}" disabled>Flat</button></div>

    ${validate_component(CodeViewer, "CodeViewer").$$render($$result, { code: disabledButtonsCode }, {}, {})}</section>`;
    }
  })}`;
});
export {
  Page as default
};
