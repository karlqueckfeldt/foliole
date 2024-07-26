import{s as V,e as w,a as g,c as _,l as z,g as u,m as M,i as s,n as j,f as i}from"../chunks/scheduler.BY-FK6rg.js";import{S as A,i as B,c as P,a as H,m as k,t as q,b as L,d as S}from"../chunks/index.DXkMBp_H.js";import{S as D,C as T}from"../chunks/SubpageContainer.wv0xzI_w.js";function E(c){let r,l="All custom properties are scoped inside <code>:root</code>.",t,o,$="General",h,p,b,n,F="Colors",v,m,y,f,G="Typography",x,d,C;return p=new T({props:{code:c[0],language:"css"}}),m=new T({props:{code:c[1],language:"css"}}),d=new T({props:{code:c[2],language:"css"}}),{c(){r=w("p"),r.innerHTML=l,t=g(),o=w("h2"),o.textContent=$,h=g(),P(p.$$.fragment),b=g(),n=w("h2"),n.textContent=F,v=g(),P(m.$$.fragment),y=g(),f=w("h2"),f.textContent=G,x=g(),P(d.$$.fragment),this.h()},l(e){r=_(e,"P",{"data-svelte-h":!0}),z(r)!=="svelte-3sg8c4"&&(r.innerHTML=l),t=u(e),o=_(e,"H2",{class:!0,"data-svelte-h":!0}),z(o)!=="svelte-cw6fae"&&(o.textContent=$),h=u(e),H(p.$$.fragment,e),b=u(e),n=_(e,"H2",{class:!0,"data-svelte-h":!0}),z(n)!=="svelte-jrwi3i"&&(n.textContent=F),v=u(e),H(m.$$.fragment,e),y=u(e),f=_(e,"H2",{class:!0,"data-svelte-h":!0}),z(f)!=="svelte-qkac7r"&&(f.textContent=G),x=u(e),H(d.$$.fragment,e),this.h()},h(){M(o,"class","svelte-yobcya"),M(n,"class","svelte-yobcya"),M(f,"class","svelte-yobcya")},m(e,a){s(e,r,a),s(e,t,a),s(e,o,a),s(e,h,a),k(p,e,a),s(e,b,a),s(e,n,a),s(e,v,a),k(m,e,a),s(e,y,a),s(e,f,a),s(e,x,a),k(d,e,a),C=!0},p:j,i(e){C||(q(p.$$.fragment,e),q(m.$$.fragment,e),q(d.$$.fragment,e),C=!0)},o(e){L(p.$$.fragment,e),L(m.$$.fragment,e),L(d.$$.fragment,e),C=!1},d(e){e&&(i(r),i(t),i(o),i(h),i(b),i(n),i(v),i(y),i(f),i(x)),S(p,e),S(m,e),S(d,e)}}}function I(c){let r,l;return r=new D({props:{heading:"Properties",$$slots:{default:[E]},$$scope:{ctx:c}}}),{c(){P(r.$$.fragment)},l(t){H(r.$$.fragment,t)},m(t,o){k(r,t,o),l=!0},p(t,[o]){const $={};o&8&&($.$$scope={dirty:o,ctx:t}),r.$set($)},i(t){l||(q(r.$$.fragment,t),l=!0)},o(t){L(r.$$.fragment,t),l=!1},d(t){S(r,t)}}}function J(c){return[`/* General 🍂 */
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
`,`/* Base colors 🍂 */
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
`,`/* Font family 🍂 */
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
`]}class Q extends A{constructor(r){super(),B(this,r,J,I,V,{})}}export{Q as component};
