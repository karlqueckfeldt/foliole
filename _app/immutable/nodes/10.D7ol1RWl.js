import{s as v,e as $,a as b,c as _,l as w,g as h,m as C,i as n,n as y,f as d}from"../chunks/scheduler.BY-FK6rg.js";import{S as D,i as F,c as f,a as m,m as c,t as u,b as p,d as g}from"../chunks/index.DXkMBp_H.js";import{S,C as O}from"../chunks/SubpageContainer.wv0xzI_w.js";function x(l){let e,t='<legend class="fo-form-fieldset-legend">Animals</legend> <div class="fo-form-radio"><input class="fo-form-radio-input" type="radio" value="Cats" id="cats" name="animal" checked=""/><label for="cats">Cats</label></div> <div class="fo-form-radio"><input class="fo-form-radio-input" type="radio" value="Dogs" id="dogs" name="animal"/><label for="dogs">Dogs</label></div> <div class="fo-form-radio"><input class="fo-form-radio-input" type="radio" value="Frogs" id="frogs" name="animal" disabled=""/><label for="frogs">Frogs</label></div> <div class="fo-form-radio"><input class="fo-form-radio-input" type="radio" value="Owls" id="owls" name="animal"/><label for="owls">Owls</label></div>',a,s,i;return s=new O({props:{code:l[0]}}),{c(){e=$("fieldset"),e.innerHTML=t,a=b(),f(s.$$.fragment),this.h()},l(o){e=_(o,"FIELDSET",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-1dehla7"&&(e.innerHTML=t),a=h(o),m(s.$$.fragment,o),this.h()},h(){C(e,"class","fo-form-fieldset")},m(o,r){n(o,e,r),n(o,a,r),c(s,o,r),i=!0},p:y,i(o){i||(u(s.$$.fragment,o),i=!0)},o(o){p(s.$$.fragment,o),i=!1},d(o){o&&(d(e),d(a)),g(s,o)}}}function L(l){let e,t;return e=new S({props:{heading:"Radio buttons",$$slots:{default:[x]},$$scope:{ctx:l}}}),{c(){f(e.$$.fragment)},l(a){m(e.$$.fragment,a)},m(a,s){c(e,a,s),t=!0},p(a,[s]){const i={};s&2&&(i.$$scope={dirty:s,ctx:a}),e.$set(i)},i(a){t||(u(e.$$.fragment,a),t=!0)},o(a){p(e.$$.fragment,a),t=!1},d(a){g(e,a)}}}function T(l){return[`  <fieldset class="fo-form-fieldset">
  <legend class="fo-form-fieldset-legend">Animals</legend>
  <div class="fo-form-radio">
    <input
      class="fo-form-radio-input"
      type="radio"
      value="Cats"
      id="cats"
      name="animal"
      checked
    /><label for="cats">Cats</label>
  </div>
  <div class="fo-form-radio">
    <input
      class="fo-form-radio-input"
      type="radio"
      value="Dogs"
      id="dogs"
      name="animal"
    /><label for="dogs">Dogs</label>
  </div>
  <div class="fo-form-radio">
    <input
      class="fo-form-radio-input"
      type="radio"
      value="Frogs"
      id="frogs"
      name="animal"
      disabled
    /><label for="frogs">Frogs</label>
  </div>
  <div class="fo-form-radio">
    <input
      class="fo-form-radio-input"
      type="radio"
      value="Owls"
      id="owls"
      name="animal"
    /><label for="owls">Owls</label>
  </div>
</fieldset>`]}class E extends D{constructor(e){super(),F(this,e,T,L,v,{})}}export{E as component};
