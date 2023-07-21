import{S as ae,i as te,s as se,y as R,z as W,A as X,g as Y,d as Z,B as ee,k as l,q as P,a as B,l as c,m as u,r as S,h as n,c as I,n as a,b as Q,E as t,F as oe}from"../chunks/index.3cadb944.js";import{S as re,C as le}from"../chunks/SubpageContainer.ca5160db.js";function ce(L){let e,i,s,m,f,d,$,D,A,v,h,E,F,N,k,p,x,T,V,g,b,y,w,z,_,C;return _=new le({props:{code:L[0]}}),{c(){e=l("fieldset"),i=l("legend"),s=P("Food"),m=B(),f=l("div"),d=l("input"),$=l("label"),D=P("Burgers"),A=B(),v=l("div"),h=l("input"),E=l("label"),F=P("Lasagna"),N=B(),k=l("div"),p=l("input"),x=l("label"),T=P("Pizza"),V=B(),g=l("div"),b=l("input"),y=l("label"),w=P("Sushi"),z=B(),R(_.$$.fragment),this.h()},l(o){e=c(o,"FIELDSET",{class:!0});var r=u(e);i=c(r,"LEGEND",{class:!0});var H=u(i);s=S(H,"Food"),H.forEach(n),m=I(r),f=c(r,"DIV",{class:!0});var U=u(f);d=c(U,"INPUT",{class:!0,type:!0,id:!0,name:!0}),$=c(U,"LABEL",{for:!0});var J=u($);D=S(J,"Burgers"),J.forEach(n),U.forEach(n),A=I(r),v=c(r,"DIV",{class:!0});var q=u(v);h=c(q,"INPUT",{class:!0,type:!0,id:!0,name:!0}),E=c(q,"LABEL",{for:!0});var K=u(E);F=S(K,"Lasagna"),K.forEach(n),q.forEach(n),N=I(r),k=c(r,"DIV",{class:!0});var G=u(k);p=c(G,"INPUT",{class:!0,type:!0,id:!0,name:!0}),x=c(G,"LABEL",{for:!0});var M=u(x);T=S(M,"Pizza"),M.forEach(n),G.forEach(n),V=I(r),g=c(r,"DIV",{class:!0});var j=u(g);b=c(j,"INPUT",{class:!0,type:!0,id:!0,name:!0}),y=c(j,"LABEL",{for:!0});var O=u(y);w=S(O,"Sushi"),O.forEach(n),j.forEach(n),r.forEach(n),z=I(o),W(_.$$.fragment,o),this.h()},h(){a(i,"class","fo-form-fieldset-legend"),a(d,"class","fo-form-check-input"),a(d,"type","checkbox"),d.value="Burgers",a(d,"id","burgers"),a(d,"name","food"),d.checked=!0,a($,"for","burgers"),a(f,"class","fo-form-check"),a(h,"class","fo-form-check-input"),a(h,"type","checkbox"),h.value="Pancakes",a(h,"id","pancakes"),a(h,"name","food"),a(E,"for","pancakes"),a(v,"class","fo-form-check"),a(p,"class","fo-form-check-input"),a(p,"type","checkbox"),p.value="Pasta",a(p,"id","pasta"),a(p,"name","food"),p.disabled=!0,a(x,"for","pasta"),a(k,"class","fo-form-check"),a(b,"class","fo-form-check-input"),a(b,"type","checkbox"),b.value="Sushi",a(b,"id","sushi"),a(b,"name","food"),a(y,"for","sushi"),a(g,"class","fo-form-check"),a(e,"class","fo-form-fieldset")},m(o,r){Q(o,e,r),t(e,i),t(i,s),t(e,m),t(e,f),t(f,d),t(f,$),t($,D),t(e,A),t(e,v),t(v,h),t(v,E),t(E,F),t(e,N),t(e,k),t(k,p),t(k,x),t(x,T),t(e,V),t(e,g),t(g,b),t(g,y),t(y,w),Q(o,z,r),X(_,o,r),C=!0},p:oe,i(o){C||(Y(_.$$.fragment,o),C=!0)},o(o){Z(_.$$.fragment,o),C=!1},d(o){o&&n(e),o&&n(z),ee(_,o)}}}function ne(L){let e,i;return e=new re({props:{heading:"Checkboxes",$$slots:{default:[ce]},$$scope:{ctx:L}}}),{c(){R(e.$$.fragment)},l(s){W(e.$$.fragment,s)},m(s,m){X(e,s,m),i=!0},p(s,[m]){const f={};m&2&&(f.$$scope={dirty:m,ctx:s}),e.$set(f)},i(s){i||(Y(e.$$.fragment,s),i=!0)},o(s){Z(e.$$.fragment,s),i=!1},d(s){ee(e,s)}}}function ie(L){return[`<fieldset class="fo-form-fieldset">
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
</fieldset>`]}class de extends ae{constructor(e){super(),te(this,e,ie,ne,se,{})}}export{de as component};
