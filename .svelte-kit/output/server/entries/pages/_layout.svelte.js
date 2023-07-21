import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { l as logo } from "../../chunks/foliole.js";
import { b as base } from "../../chunks/paths.js";
import { p as page } from "../../chunks/stores.js";
const Sidenav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".fo-navigation.svelte-i0ds2h{position:sticky;top:0;padding-block-start:calc(var(--fo-spacing) * 2);height:100dvh}",
  map: null
};
const Sidenav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const links = {
    home: `${base}/`,
    components: `${base}/components`,
    buttons: `${base}/components/buttons`,
    links: `${base}/components/links`,
    textFields: `${base}/components/text-fields`,
    select: `${base}/components/select`,
    radioButtons: `${base}/components/radio-buttons`,
    checkboxes: `${base}/components/checkboxes`,
    navigation: `${base}/components/navigation`,
    badges: `${base}/components/badges`,
    cards: `${base}/components/cards`,
    utilities: `${base}/utilities`,
    classes: `${base}/utilities/classes`,
    properties: `${base}/utilities/properties`
  };
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="${"fo-navigation svelte-i0ds2h"}"><img${add_attribute("src", logo, 0)} alt="${"Foliole brand icon"}" class="${"fo-p-inline-start-1 fo-p-block-end-1"}">
  <ul class="${"fo-navigation-list"}"><li><a${add_attribute("href", links.home, 0)} class="${[
    "fo-button fo-button-flat fo-text-bold",
    $page.url.pathname === links.home ? "active" : ""
  ].join(" ").trim()}">Home</a></li>

    <li><a${add_attribute("href", links.components, 0)} class="${[
    "fo-button fo-button-flat fo-text-bold",
    $page.url.pathname === links.components ? "active" : ""
  ].join(" ").trim()}">Components</a></li>
    <ul class="${"fo-navigation-list"}"><li><a${add_attribute("href", links.badges, 0)} class="${[
    "fo-button fo-button-flat",
    $page.url.pathname === links.badges ? "active" : ""
  ].join(" ").trim()}">Badges</a></li>
      <li><a${add_attribute("href", links.buttons, 0)} class="${[
    "fo-button fo-button-flat",
    $page.url.pathname === links.buttons ? "active" : ""
  ].join(" ").trim()}">Buttons</a></li>
      <li><a${add_attribute("href", links.cards, 0)} class="${["fo-button fo-button-flat", $page.url.pathname === links.cards ? "active" : ""].join(" ").trim()}">Cards</a></li>
      <li><a${add_attribute("href", links.checkboxes, 0)} class="${[
    "fo-button fo-button-flat",
    $page.url.pathname === links.checkboxes ? "active" : ""
  ].join(" ").trim()}">Checkboxes</a></li>
      <li><a${add_attribute("href", links.links, 0)} class="${["fo-button fo-button-flat", $page.url.pathname === links.links ? "active" : ""].join(" ").trim()}">Links</a></li>
      <li><a${add_attribute("href", links.navigation, 0)} class="${[
    "fo-button fo-button-flat",
    $page.url.pathname === links.navigation ? "active" : ""
  ].join(" ").trim()}">Navigation</a></li>
      <li><a${add_attribute("href", links.radioButtons, 0)} class="${[
    "fo-button fo-button-flat",
    $page.url.pathname === links.radioButtons ? "active" : ""
  ].join(" ").trim()}">Radio buttons</a></li>
      <li><a${add_attribute("href", links.select, 0)} class="${[
    "fo-button fo-button-flat",
    $page.url.pathname === links.select ? "active" : ""
  ].join(" ").trim()}">Select</a></li>
      <li><a${add_attribute("href", links.textFields, 0)} class="${[
    "fo-button fo-button-flat",
    $page.url.pathname === links.textFields ? "active" : ""
  ].join(" ").trim()}">Text fields</a></li></ul>

    <li><a${add_attribute("href", links.utilities, 0)} class="${[
    "fo-button fo-button-flat fo-text-bold",
    $page.url.pathname === links.utilities ? "active" : ""
  ].join(" ").trim()}">Utilities</a></li>
    <ul class="${"fo-navigation-list"}"><li><a${add_attribute("href", links.classes, 0)} class="${[
    "fo-button fo-button-flat",
    $page.url.pathname === links.classes ? "active" : ""
  ].join(" ").trim()}">Classes</a></li>
      <li><a${add_attribute("href", links.properties, 0)} class="${[
    "fo-button fo-button-flat",
    $page.url.pathname === links.properties ? "active" : ""
  ].join(" ").trim()}">Properties</a></li></ul></ul>
</nav>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1kruojt{text-align:center}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"page-wrapper"}">${validate_component(Sidenav, "Sidenav").$$render($$result, {}, {}, {})}
  <div class="${"content-wrapper"}"><main>${slots.default ? slots.default({}) : ``}</main>
    <footer class="${"svelte-1kruojt"}"><p>Made by Karl Queckfeldt using SvelteKit.</p></footer></div>
</div>`;
});
export {
  Layout as default
};
