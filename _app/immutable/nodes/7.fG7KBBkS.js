import{s as b,e as k,a as g,c as v,l as $,g as _,m as x,i,n as y,f as r}from"../chunks/scheduler.BY-FK6rg.js";import{S,i as C,c as f,a as d,m as u,t as m,b as p,d as h}from"../chunks/index.DXkMBp_H.js";import{S as P,C as L}from"../chunks/SubpageContainer.wv0xzI_w.js";function w(l){let e,t='<legend class="fo-form-fieldset-legend">Food</legend> <div class="fo-form-check"><input class="fo-form-check-input" type="checkbox" value="Burgers" id="burgers" name="food" checked=""/><label for="burgers">Burgers</label></div> <div class="fo-form-check"><input class="fo-form-check-input" type="checkbox" value="Pancakes" id="pancakes" name="food"/><label for="pancakes">Lasagna</label></div> <div class="fo-form-check"><input class="fo-form-check-input" type="checkbox" value="Pasta" id="pasta" name="food" disabled=""/><label for="pasta">Pizza</label></div> <div class="fo-form-check"><input class="fo-form-check-input" type="checkbox" value="Sushi" id="sushi" name="food"/><label for="sushi">Sushi</label></div>',a,o,c;return o=new L({props:{code:l[0]}}),{c(){e=k("fieldset"),e.innerHTML=t,a=g(),f(o.$$.fragment),this.h()},l(s){e=v(s,"FIELDSET",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1ghdnfc"&&(e.innerHTML=t),a=_(s),d(o.$$.fragment,s),this.h()},h(){x(e,"class","fo-form-fieldset")},m(s,n){i(s,e,n),i(s,a,n),u(o,s,n),c=!0},p:y,i(s){c||(m(o.$$.fragment,s),c=!0)},o(s){p(o.$$.fragment,s),c=!1},d(s){s&&(r(e),r(a)),h(o,s)}}}function z(l){let e,t;return e=new P({props:{heading:"Checkboxes",$$slots:{default:[w]},$$scope:{ctx:l}}}),{c(){f(e.$$.fragment)},l(a){d(e.$$.fragment,a)},m(a,o){u(e,a,o),t=!0},p(a,[o]){const c={};o&2&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){t||(m(e.$$.fragment,a),t=!0)},o(a){p(e.$$.fragment,a),t=!1},d(a){h(e,a)}}}function B(l){return[`<fieldset class="fo-form-fieldset">
  <legend class="fo-form-fieldset-legend">Food</legend>
  <div class="fo-form-check">
    <input
      class="fo-form-check-input"
      type="checkbox"
      value="Burgers"
      id="burgers"
      name="food"
      checked
    /><label for="burgers">Burgers</label>
  </div>
  <div class="fo-form-check">
    <input
      class="fo-form-check-input"
      type="checkbox"
      value="Pancakes"
      id="pancakes"
      name="food"
    /><label for="pancakes">Lasagna</label>
  </div>
  <div class="fo-form-check">
    <input
      class="fo-form-check-input"
      type="checkbox"
      value="Pasta"
      id="pasta"
      name="food"
      disabled
    /><label for="pasta">Pizza</label>
  </div>
  <div class="fo-form-check">
    <input
      class="fo-form-check-input"
      type="checkbox"
      value="Sushi"
      id="sushi"
      name="food"
    /><label for="sushi">Sushi</label>
  </div>
</fieldset>`]}class H extends S{constructor(e){super(),C(this,e,B,z,b,{})}}export{H as component};
