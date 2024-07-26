import{s as q,e as p,a as v,c as m,b as I,l as N,g as h,f as y,m as n,i as z,h as l,n as j}from"../chunks/scheduler.BY-FK6rg.js";import{S as k,i as G,c as F,a as L,m as S,t as V,b as P,d as A}from"../chunks/index.DXkMBp_H.js";import{S as H,C as U}from"../chunks/SubpageContainer.wv0xzI_w.js";function J(_){let e,a,t,d="Text field",x,f,T,u,w,i,r,B="Disabled text field",D,o,E,c,C;return u=new U({props:{code:_[0]}}),c=new U({props:{code:_[1]}}),{c(){e=p("div"),a=p("div"),t=p("label"),t.textContent=d,x=v(),f=p("input"),T=v(),F(u.$$.fragment),w=v(),i=p("div"),r=p("label"),r.textContent=B,D=v(),o=p("input"),E=v(),F(c.$$.fragment),this.h()},l(s){e=m(s,"DIV",{class:!0});var $=I(e);a=m($,"DIV",{});var b=I(a);t=m(b,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),N(t)!=="svelte-3czuip"&&(t.textContent=d),x=h(b),f=m(b,"INPUT",{id:!0,name:!0,type:!0,class:!0}),T=h(b),L(u.$$.fragment,b),b.forEach(y),w=h($),i=m($,"DIV",{});var g=I(i);r=m(g,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),N(r)!=="svelte-t5a4ve"&&(r.textContent=B),D=h(g),o=m(g,"INPUT",{id:!0,name:!0,type:!0,class:!0}),E=h(g),L(c.$$.fragment,g),g.forEach(y),$.forEach(y),this.h()},h(){n(t,"class","fo-form-label"),n(t,"for","text_input"),n(f,"id","text_input"),n(f,"name","text_input"),n(f,"type","text"),n(f,"class","fo-form-field"),n(r,"class","fo-form-label"),n(r,"for","disabled_text_input"),n(o,"id","disabled_text_input"),n(o,"name","disabled_text_input"),n(o,"type","text"),n(o,"class","fo-form-field"),o.disabled=!0,n(e,"class","text-fields")},m(s,$){z(s,e,$),l(e,a),l(a,t),l(a,x),l(a,f),l(a,T),S(u,a,null),l(e,w),l(e,i),l(i,r),l(i,D),l(i,o),l(i,E),S(c,i,null),C=!0},p:j,i(s){C||(V(u.$$.fragment,s),V(c.$$.fragment,s),C=!0)},o(s){P(u.$$.fragment,s),P(c.$$.fragment,s),C=!1},d(s){s&&y(e),A(u),A(c)}}}function K(_){let e,a;return e=new H({props:{heading:"Text fields",$$slots:{default:[J]},$$scope:{ctx:_}}}),{c(){F(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,d){S(e,t,d),a=!0},p(t,[d]){const x={};d&4&&(x.$$scope={dirty:d,ctx:t}),e.$set(x)},i(t){a||(V(e.$$.fragment,t),a=!0)},o(t){P(e.$$.fragment,t),a=!1},d(t){A(e,t)}}}function M(_){return[`<label class="fo-form-label" for="text_input">Text field</label>
<input
  id="text_input"
  name="text_input"
  type="text"
  class="fo-form-field"
/>`,`<label class="fo-form-label" for="disabled_text_input"
  >Disabled text field</label
>
<input
  id="disabled_text_input"
  name="disabled_text_input"
  type="text"
  class="fo-form-field"
  disabled
/>`]}class W extends k{constructor(e){super(),G(this,e,M,K,q,{})}}export{W as component};
