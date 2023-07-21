import { c as create_ssr_component, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, k as add_classes, e as escape, l as createEventDispatcher, v as validate_component, d as add_attribute } from "./index.js";
import hljs from "highlight.js/lib/core";
/* empty css                                                */import register from "highlight.js/lib/languages/vbscript-html";
import css$4 from "highlight.js/lib/languages/css";
const css$3 = {
  code: ".langtag.svelte-11sh29b{position:relative}.langtag.svelte-11sh29b::after{content:attr(data-language);position:absolute;top:0;right:0;padding:1em;display:flex;align-items:center;justify-content:center;background:var(--langtag-background, inherit);color:var(--langtag-color, inherit);border-radius:var(--langtag-border-radius)}",
  map: null
};
const LangTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["langtag", "highlighted", "code", "languageName"]);
  let { langtag = false } = $$props;
  let { highlighted } = $$props;
  let { code } = $$props;
  let { languageName = "plaintext" } = $$props;
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0)
    $$bindings.langtag(langtag);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.languageName === void 0 && $$bindings.languageName && languageName !== void 0)
    $$bindings.languageName(languageName);
  $$result.css.add(css$3);
  return `<pre${spread(
    [
      {
        "data-language": escape_attribute_value(languageName)
      },
      escape_object($$restProps)
    ],
    {
      classes: (langtag ? "langtag" : "") + " svelte-11sh29b"
    }
  )}><code${add_classes("hljs".trim())}>${highlighted ? `<!-- HTML_TAG_START -->${highlighted}<!-- HTML_TAG_END -->` : `${escape(code)}`}</code></pre>`;
});
const Highlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["language", "code", "langtag"]);
  let { language } = $$props;
  let { code } = $$props;
  let { langtag = false } = $$props;
  createEventDispatcher();
  let highlighted = "";
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0)
    $$bindings.langtag(langtag);
  {
    {
      hljs.registerLanguage(language.name, language.register);
      highlighted = hljs.highlight(code, { language: language.name }).value;
    }
  }
  return `${slots.default ? slots.default({ highlighted }) : `
  ${validate_component(LangTag, "LangTag").$$render($$result, Object.assign({}, $$restProps, { languageName: language.name }, { langtag }, { highlighted }, { code }), {}, {})}
`}`;
});
const vbscriptHtml = { name: "vbscript-html", register };
const langHtml = vbscriptHtml;
const css$2 = { name: "css", register: css$4 };
const langCss = css$2;
const stackoverflowLight = `<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: StackOverflow Light
  Description: Light theme as used on stackoverflow.com
  Author: stackoverflow.com
  Maintainer: @Hirse
  Website: https://github.com/StackExchange/Stacks
  License: MIT
  Updated: 2021-05-15

  Updated for @stackoverflow/stacks v0.64.0
  Code Blocks: /blob/v0.64.0/lib/css/components/_stacks-code-blocks.less
  Colors: /blob/v0.64.0/lib/css/exports/_stacks-constants-colors.less
*/.hljs{color:#2f3337;background:#f6f6f6}.hljs-subst{color:#2f3337}.hljs-comment{color:#656e77}.hljs-attr,.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-section,.hljs-selector-tag{color:#015692}.hljs-attribute{color:#803378}.hljs-name,.hljs-number,.hljs-quote,.hljs-selector-id,.hljs-template-tag,.hljs-type{color:#b75501}.hljs-selector-class{color:#015692}.hljs-link,.hljs-regexp,.hljs-selector-attr,.hljs-string,.hljs-symbol,.hljs-template-variable,.hljs-variable{color:#54790d}.hljs-meta,.hljs-selector-pseudo{color:#015692}.hljs-built_in,.hljs-literal,.hljs-title{color:#b75501}.hljs-bullet,.hljs-code{color:#535a60}.hljs-meta .hljs-string{color:#54790d}.hljs-deletion{color:#c02d2e}.hljs-addition{color:#2f6f44}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style>`;
const codeStyle = stackoverflowLight;
const codeIcon = "/_app/immutable/assets/code-feb99139.svg";
const css$1 = {
  code: ".fo-card.svelte-yvmrw9{position:relative;font-size:1rem;border-color:var(--fo-opaque-clr);min-height:100px}.fo-card.svelte-yvmrw9 code{background-color:rgb(245, 248, 245)}img.svelte-yvmrw9{position:absolute;right:var(--fo-spacing);top:var(--fo-spacing)}",
  map: null
};
const CodeViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code } = $$props;
  let { language = "html" } = $$props;
  const trimmedCode = () => code.trim();
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-1ef7rnv_START --><!-- HTML_TAG_START -->${codeStyle}<!-- HTML_TAG_END --><!-- HEAD_svelte-1ef7rnv_END -->`, ""}

<div class="${"fo-card fo-card-outlined fo-p-0 fo-m-block-start-1 svelte-yvmrw9"}"><img${add_attribute("src", codeIcon, 0)} alt="${"Code icon"}" class="${"svelte-yvmrw9"}">
  ${validate_component(Highlight, "Highlight").$$render(
    $$result,
    {
      language: language === "html" ? langHtml : langCss,
      code: trimmedCode()
    },
    {},
    {}
  )}
</div>`;
});
const css = {
  code: ".fo-card.svelte-nbl7xl{min-height:50dvh}",
  map: null
};
const SubpageContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css);
  return `<section class="${"fo-card svelte-nbl7xl"}"><h1 class="${"fo-display-text-md"}">${escape(heading)}</h1>
  ${slots.default ? slots.default({}) : ``}
</section>`;
});
export {
  CodeViewer as C,
  SubpageContainer as S
};
