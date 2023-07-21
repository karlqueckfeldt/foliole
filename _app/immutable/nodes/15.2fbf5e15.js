import{S as A,i as M,s as j,y as v,z as _,A as x,g as w,d as C,B as z,k as q,q as E,a as g,l as S,m as F,r as G,h as s,c as u,n as H,b as i,E as B,F as D}from"../chunks/index.3cadb944.js";import{S as I,C as L}from"../chunks/SubpageContainer.ca5160db.js";function J(f){let e,l,o,a,n,c,P,$,p,h,m,k,b,d,y;return a=new L({props:{code:f[0],language:"css"}}),p=new L({props:{code:f[1],language:"css"}}),d=new L({props:{code:f[2],language:"css"}}),{c(){e=q("h2"),l=E("General"),o=g(),v(a.$$.fragment),n=g(),c=q("h2"),P=E("Colors"),$=g(),v(p.$$.fragment),h=g(),m=q("h2"),k=E("Typography"),b=g(),v(d.$$.fragment),this.h()},l(r){e=S(r,"H2",{class:!0});var t=F(e);l=G(t,"General"),t.forEach(s),o=u(r),_(a.$$.fragment,r),n=u(r),c=S(r,"H2",{class:!0});var T=F(c);P=G(T,"Colors"),T.forEach(s),$=u(r),_(p.$$.fragment,r),h=u(r),m=S(r,"H2",{class:!0});var V=F(m);k=G(V,"Typography"),V.forEach(s),b=u(r),_(d.$$.fragment,r),this.h()},h(){H(e,"class","svelte-yobcya"),H(c,"class","svelte-yobcya"),H(m,"class","svelte-yobcya")},m(r,t){i(r,e,t),B(e,l),i(r,o,t),x(a,r,t),i(r,n,t),i(r,c,t),B(c,P),i(r,$,t),x(p,r,t),i(r,h,t),i(r,m,t),B(m,k),i(r,b,t),x(d,r,t),y=!0},p:D,i(r){y||(w(a.$$.fragment,r),w(p.$$.fragment,r),w(d.$$.fragment,r),y=!0)},o(r){C(a.$$.fragment,r),C(p.$$.fragment,r),C(d.$$.fragment,r),y=!1},d(r){r&&s(e),r&&s(o),z(a,r),r&&s(n),r&&s(c),r&&s($),z(p,r),r&&s(h),r&&s(m),r&&s(b),z(d,r)}}}function K(f){let e,l;return e=new I({props:{heading:"Properties",$$slots:{default:[J]},$$scope:{ctx:f}}}),{c(){v(e.$$.fragment)},l(o){_(e.$$.fragment,o)},m(o,a){x(e,o,a),l=!0},p(o,[a]){const n={};a&8&&(n.$$scope={dirty:a,ctx:o}),e.$set(n)},i(o){l||(w(e.$$.fragment,o),l=!0)},o(o){C(e.$$.fragment,o),l=!1},d(o){z(e,o)}}}function N(f){return[`
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
`,`
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
`,`
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
`]}class R extends A{constructor(e){super(),M(this,e,N,K,j,{})}}export{R as component};
