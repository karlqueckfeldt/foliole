import{s as d,e as h,a as C,c as k,l as v,g as x,m as l,i as c,n as b,f}from"../chunks/scheduler.BY-FK6rg.js";import{S as w,i as S,c as m,a as u,m as p,t as $,b as _,d as g}from"../chunks/index.DXkMBp_H.js";import{S as A,C as y}from"../chunks/SubpageContainer.wv0xzI_w.js";function q(o){let e,s="A regular link",t,a,r;return a=new y({props:{code:o[0]}}),{c(){e=h("a"),e.textContent=s,t=C(),m(a.$$.fragment),this.h()},l(n){e=k(n,"A",{class:!0,href:!0,"data-svelte-h":!0}),v(e)!=="svelte-k5y35p"&&(e.textContent=s),t=x(n),u(a.$$.fragment,n),this.h()},h(){l(e,"class","fo-link"),l(e,"href","#")},m(n,i){c(n,e,i),c(n,t,i),p(a,n,i),r=!0},p:b,i(n){r||($(a.$$.fragment,n),r=!0)},o(n){_(a.$$.fragment,n),r=!1},d(n){n&&(f(e),f(t)),g(a,n)}}}function L(o){let e,s;return e=new A({props:{heading:"Links",$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){m(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,a){p(e,t,a),s=!0},p(t,[a]){const r={};a&2&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function P(o){return['<a class="fo-link" href="#">A regular link</a>']}class B extends w{constructor(e){super(),S(this,e,P,L,d,{})}}export{B as component};