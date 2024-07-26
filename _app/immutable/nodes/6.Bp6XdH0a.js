import{s as u,e as $,a as g,c as y,l as v,g as b,m as T,i as t,n as C,f as o}from"../chunks/scheduler.BY-FK6rg.js";import{S,i as w,c as l,a as p,m as f,t as m,b as _,d as h}from"../chunks/index.DXkMBp_H.js";import{S as x,C as P}from"../chunks/SubpageContainer.wv0xzI_w.js";function B(d){let a,i='<div class="fo-card fo-card-primary" aria-labelledby="primary_card_heading"><span class="fo-h3" id="primary_card_heading">Primary</span> <p>This is a primary card.</p></div> <div class="fo-card fo-card-secondary" aria-labelledby="secondary_card_heading"><span class="fo-h3" id="secondary_card_heading">Secondary</span> <p>This is a secondary card.</p></div> <div class="fo-card" aria-labelledby="basic_card_heading"><span class="fo-h3" id="basic_card_heading">Basic</span> <p>This is a basic card.</p></div> <div class="fo-card fo-card-outlined" aria-labelledby="outlined_card_heading"><span class="fo-h3" id="outlined_card_heading">Outlined</span> <p>This is an outlined card.</p></div>',e,r,n;return r=new P({props:{code:d[0]}}),{c(){a=$("div"),a.innerHTML=i,e=g(),l(r.$$.fragment),this.h()},l(s){a=y(s,"DIV",{class:!0,"data-svelte-h":!0}),v(a)!=="svelte-wdkdoe"&&(a.innerHTML=i),e=b(s),p(r.$$.fragment,s),this.h()},h(){T(a,"class","components")},m(s,c){t(s,a,c),t(s,e,c),f(r,s,c),n=!0},p:C,i(s){n||(m(r.$$.fragment,s),n=!0)},o(s){_(r.$$.fragment,s),n=!1},d(s){s&&(o(a),o(e)),h(r,s)}}}function H(d){let a,i;return a=new x({props:{heading:"Cards",$$slots:{default:[B]},$$scope:{ctx:d}}}),{c(){l(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,r){f(a,e,r),i=!0},p(e,[r]){const n={};r&2&&(n.$$scope={dirty:r,ctx:e}),a.$set(n)},i(e){i||(m(a.$$.fragment,e),i=!0)},o(e){_(a.$$.fragment,e),i=!1},d(e){h(a,e)}}}function L(d){return[`<div class="fo-card fo-card-primary" aria-labelledby="primary_card_heading">
  <span class="fo-h3" id="primary_card_heading">Primary</span>
  <p>This is a primary card.</p>
</div>
<div class="fo-card fo-card-secondary">
  <p class="fo-h3">Secondary</p>
  <p>This is a secondary card.</p>
</div>
<div class="fo-card">
  <p class="fo-h3">Basic</p>
  <p>This is a basic card.</p>
</div>
<div class="fo-card fo-card-outlined">
  <p class="fo-h3">Outlined</p>
  <p>This is an outlined card.</p>
</div>`]}class k extends S{constructor(a){super(),w(this,a,L,H,u,{})}}export{k as component};
