import{S as N,i as Q,s as R,y as A,z as F,A as G,g as H,d as B,B as L,k as _,q as h,a as b,l as x,m as w,r as y,h as s,c as v,n as M,b as a,E as g,F as U}from"../chunks/index.a164cd80.js";import{S as W,C as O}from"../chunks/SubpageContainer.9f47183a.js";function X(f){let r,l,o,i,$,C,n,T,z,c,P,p,V,E,m,k,d,D,q,u,S;return c=new O({props:{code:f[0],language:"css"}}),m=new O({props:{code:f[1],language:"css"}}),u=new O({props:{code:f[2],language:"css"}}),{c(){r=_("p"),l=h("All custom properties are scoped inside "),o=_("code"),i=h(":root"),$=h("."),C=b(),n=_("h2"),T=h("General"),z=b(),A(c.$$.fragment),P=b(),p=_("h2"),V=h("Colors"),E=b(),A(m.$$.fragment),k=b(),d=_("h2"),D=h("Typography"),q=b(),A(u.$$.fragment),this.h()},l(e){r=x(e,"P",{});var t=w(r);l=y(t,"All custom properties are scoped inside "),o=x(t,"CODE",{});var j=w(o);i=y(j,":root"),j.forEach(s),$=y(t,"."),t.forEach(s),C=v(e),n=x(e,"H2",{class:!0});var I=w(n);T=y(I,"General"),I.forEach(s),z=v(e),F(c.$$.fragment,e),P=v(e),p=x(e,"H2",{class:!0});var J=w(p);V=y(J,"Colors"),J.forEach(s),E=v(e),F(m.$$.fragment,e),k=v(e),d=x(e,"H2",{class:!0});var K=w(d);D=y(K,"Typography"),K.forEach(s),q=v(e),F(u.$$.fragment,e),this.h()},h(){M(n,"class","svelte-yobcya"),M(p,"class","svelte-yobcya"),M(d,"class","svelte-yobcya")},m(e,t){a(e,r,t),g(r,l),g(r,o),g(o,i),g(r,$),a(e,C,t),a(e,n,t),g(n,T),a(e,z,t),G(c,e,t),a(e,P,t),a(e,p,t),g(p,V),a(e,E,t),G(m,e,t),a(e,k,t),a(e,d,t),g(d,D),a(e,q,t),G(u,e,t),S=!0},p:U,i(e){S||(H(c.$$.fragment,e),H(m.$$.fragment,e),H(u.$$.fragment,e),S=!0)},o(e){B(c.$$.fragment,e),B(m.$$.fragment,e),B(u.$$.fragment,e),S=!1},d(e){e&&s(r),e&&s(C),e&&s(n),e&&s(z),L(c,e),e&&s(P),e&&s(p),e&&s(E),L(m,e),e&&s(k),e&&s(d),e&&s(q),L(u,e)}}}function Y(f){let r,l;return r=new W({props:{heading:"Properties",$$slots:{default:[X]},$$scope:{ctx:f}}}),{c(){A(r.$$.fragment)},l(o){F(r.$$.fragment,o)},m(o,i){G(r,o,i),l=!0},p(o,[i]){const $={};i&8&&($.$$scope={dirty:i,ctx:o}),r.$set($)},i(o){l||(H(r.$$.fragment,o),l=!0)},o(o){B(r.$$.fragment,o),l=!1},d(o){L(r,o)}}}function Z(f){return[`/* General 🍂 */
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
`]}class oe extends N{constructor(r){super(),Q(this,r,Z,Y,R,{})}}export{oe as component};
