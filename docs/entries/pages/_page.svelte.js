import { c as create_ssr_component, d as add_attribute } from "../../chunks/index.js";
import { l as logo } from "../../chunks/foliole.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-17v05y3{width:5rem;height:5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-hbm4jb_START -->${$$result.title = `<title>Foliole</title>`, ""}<meta name="${"description"}" content="${"Foliole component library"}"><!-- HEAD_svelte-hbm4jb_END -->`, ""}

<div class="${"fo-card fo-card-secondary fo-text-center"}"><h1 class="${"fo-display-text-lg"}">Foliole <img${add_attribute("src", logo, 0)} alt="${"Foliole brand"}" class="${"svelte-17v05y3"}"></h1>
  <div class="${"fo-lead-text"}"><p>Welcome to Foliole! A simple framework agnostic component library.</p>
    <p>To use it in your project, run <code class="${"fo-code-block"}">npm install foliole</code>
      and have fun! 🍂
    </p></div>
</div>`;
});
export {
  Page as default
};
