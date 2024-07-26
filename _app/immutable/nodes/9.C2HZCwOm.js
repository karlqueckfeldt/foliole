import{s as g,e as $,a as d,c as v,l as _,g as x,m as C,i,n as S,f as u}from"../chunks/scheduler.BY-FK6rg.js";import{S as w,i as H,c as r,a as c,m as b,t as m,b as p,d as h}from"../chunks/index.DXkMBp_H.js";import{S as L,C as T}from"../chunks/SubpageContainer.wv0xzI_w.js";function P(s){let t,e='<ul class="fo-navigation-list"><li><a href="#" class="fo-button fo-button-flat fo-text-bold">Home</a></li> <li><a href="#" class="fo-button fo-button-flat fo-text-bold">Components</a></li> <ul class="fo-navigation-list"><li><a href="#" class="fo-button fo-button-flat">Buttons</a></li> <li><a href="#" class="fo-button fo-button-flat active">Links</a></li> <li><a href="#" class="fo-button fo-button-flat">Text fields</a></li> <li><a href="#" class="fo-button fo-button-flat">Select</a></li> <li><a href="#" class="fo-button fo-button-flat">Radio buttons</a></li></ul> <li><a href="#" class="fo-button fo-button-flat fo-text-bold">Utilities</a></li> <ul class="fo-navigation-list"><li><a href="#" class="fo-button fo-button-flat">Classes</a></li> <li><a href="#" class="fo-button fo-button-flat">Properties</a></li></ul></ul>',a,l,n;return l=new T({props:{code:s[0]}}),{c(){t=$("nav"),t.innerHTML=e,a=d(),r(l.$$.fragment),this.h()},l(o){t=v(o,"NAV",{class:!0,"data-svelte-h":!0}),_(t)!=="svelte-1pt1acr"&&(t.innerHTML=e),a=x(o),c(l.$$.fragment,o),this.h()},h(){C(t,"class","fo-navigation")},m(o,f){i(o,t,f),i(o,a,f),b(l,o,f),n=!0},p:S,i(o){n||(m(l.$$.fragment,o),n=!0)},o(o){p(l.$$.fragment,o),n=!1},d(o){o&&(u(t),u(a)),h(l,o)}}}function k(s){let t,e;return t=new L({props:{heading:"Navigation",$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){r(t.$$.fragment)},l(a){c(t.$$.fragment,a)},m(a,l){b(t,a,l),e=!0},p(a,[l]){const n={};l&2&&(n.$$scope={dirty:l,ctx:a}),t.$set(n)},i(a){e||(m(t.$$.fragment,a),e=!0)},o(a){p(t.$$.fragment,a),e=!1},d(a){h(t,a)}}}function B(s){return[`<nav class="fo-navigation">
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
</nav>`]}class U extends w{constructor(t){super(),H(this,t,B,k,g,{})}}export{U as component};
