import{S as j,i as G,s as H,y as L,z as S,A as V,g as A,d as B,B as P,k as p,q as U,a as v,l as m,m as y,r as k,h,c as C,n as s,b as J,E as l,F as K}from"../chunks/index.a164cd80.js";import{S as M,C as z}from"../chunks/SubpageContainer.9f47183a.js";function O(_){let e,a,t,r,$,d,T,f,w,i,u,D,F,o,I,c,E;return f=new z({props:{code:_[0]}}),c=new z({props:{code:_[1]}}),{c(){e=p("div"),a=p("div"),t=p("label"),r=U("Text field"),$=v(),d=p("input"),T=v(),L(f.$$.fragment),w=v(),i=p("div"),u=p("label"),D=U("Disabled text field"),F=v(),o=p("input"),I=v(),L(c.$$.fragment),this.h()},l(n){e=m(n,"DIV",{class:!0});var b=y(e);a=m(b,"DIV",{});var x=y(a);t=m(x,"LABEL",{class:!0,for:!0});var q=y(t);r=k(q,"Text field"),q.forEach(h),$=C(x),d=m(x,"INPUT",{id:!0,name:!0,type:!0,class:!0}),T=C(x),S(f.$$.fragment,x),x.forEach(h),w=C(b),i=m(b,"DIV",{});var g=y(i);u=m(g,"LABEL",{class:!0,for:!0});var N=y(u);D=k(N,"Disabled text field"),N.forEach(h),F=C(g),o=m(g,"INPUT",{id:!0,name:!0,type:!0,class:!0}),I=C(g),S(c.$$.fragment,g),g.forEach(h),b.forEach(h),this.h()},h(){s(t,"class","fo-form-label"),s(t,"for","text_input"),s(d,"id","text_input"),s(d,"name","text_input"),s(d,"type","text"),s(d,"class","fo-form-field"),s(u,"class","fo-form-label"),s(u,"for","disabled_text_input"),s(o,"id","disabled_text_input"),s(o,"name","disabled_text_input"),s(o,"type","text"),s(o,"class","fo-form-field"),o.disabled=!0,s(e,"class","text-fields")},m(n,b){J(n,e,b),l(e,a),l(a,t),l(t,r),l(a,$),l(a,d),l(a,T),V(f,a,null),l(e,w),l(e,i),l(i,u),l(u,D),l(i,F),l(i,o),l(i,I),V(c,i,null),E=!0},p:K,i(n){E||(A(f.$$.fragment,n),A(c.$$.fragment,n),E=!0)},o(n){B(f.$$.fragment,n),B(c.$$.fragment,n),E=!1},d(n){n&&h(e),P(f),P(c)}}}function Q(_){let e,a;return e=new M({props:{heading:"Text fields",$$slots:{default:[O]},$$scope:{ctx:_}}}),{c(){L(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){V(e,t,r),a=!0},p(t,[r]){const $={};r&4&&($.$$scope={dirty:r,ctx:t}),e.$set($)},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){P(e,t)}}}function R(_){return[`<label class="fo-form-label" for="text_input">Text field</label>
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
/>`]}class Y extends j{constructor(e){super(),G(this,e,R,Q,H,{})}}export{Y as component};
