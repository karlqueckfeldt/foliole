import{S as ae,i as te,s as se,y as Q,z as W,A as X,g as Y,d as Z,B as ee,k as r,q as L,a as I,l as i,m as u,r as A,h as n,c as B,n as a,b as M,E as t,F as oe}from"../chunks/index.a164cd80.js";import{S as le,C as re}from"../chunks/SubpageContainer.9f47183a.js";function ie(D){let e,d,s,p,f,c,E,O,P,b,v,y,S,T,_,m,w,V,x,$,g,C,U,F,h,N;return h=new re({props:{code:D[0]}}),{c(){e=r("fieldset"),d=r("legend"),s=L("Animals"),p=I(),f=r("div"),c=r("input"),E=r("label"),O=L("Cats"),P=I(),b=r("div"),v=r("input"),y=r("label"),S=L("Dogs"),T=I(),_=r("div"),m=r("input"),w=r("label"),V=L("Frogs"),x=I(),$=r("div"),g=r("input"),C=r("label"),U=L("Owls"),F=I(),Q(h.$$.fragment),this.h()},l(o){e=i(o,"FIELDSET",{class:!0});var l=u(e);d=i(l,"LEGEND",{class:!0});var R=u(d);s=A(R,"Animals"),R.forEach(n),p=B(l),f=i(l,"DIV",{class:!0});var k=u(f);c=i(k,"INPUT",{class:!0,type:!0,id:!0,name:!0}),E=i(k,"LABEL",{for:!0});var j=u(E);O=A(j,"Cats"),j.forEach(n),k.forEach(n),P=B(l),b=i(l,"DIV",{class:!0});var q=u(b);v=i(q,"INPUT",{class:!0,type:!0,id:!0,name:!0}),y=i(q,"LABEL",{for:!0});var H=u(y);S=A(H,"Dogs"),H.forEach(n),q.forEach(n),T=B(l),_=i(l,"DIV",{class:!0});var z=u(_);m=i(z,"INPUT",{class:!0,type:!0,id:!0,name:!0}),w=i(z,"LABEL",{for:!0});var J=u(w);V=A(J,"Frogs"),J.forEach(n),z.forEach(n),x=B(l),$=i(l,"DIV",{class:!0});var G=u($);g=i(G,"INPUT",{class:!0,type:!0,id:!0,name:!0}),C=i(G,"LABEL",{for:!0});var K=u(C);U=A(K,"Owls"),K.forEach(n),G.forEach(n),l.forEach(n),F=B(o),W(h.$$.fragment,o),this.h()},h(){a(d,"class","fo-form-fieldset-legend"),a(c,"class","fo-form-radio-input"),a(c,"type","radio"),c.value="Cats",a(c,"id","cats"),a(c,"name","animal"),c.checked=!0,a(E,"for","cats"),a(f,"class","fo-form-radio"),a(v,"class","fo-form-radio-input"),a(v,"type","radio"),v.value="Dogs",a(v,"id","dogs"),a(v,"name","animal"),a(y,"for","dogs"),a(b,"class","fo-form-radio"),a(m,"class","fo-form-radio-input"),a(m,"type","radio"),m.value="Frogs",a(m,"id","frogs"),a(m,"name","animal"),m.disabled=!0,a(w,"for","frogs"),a(_,"class","fo-form-radio"),a(g,"class","fo-form-radio-input"),a(g,"type","radio"),g.value="Owls",a(g,"id","owls"),a(g,"name","animal"),a(C,"for","owls"),a($,"class","fo-form-radio"),a(e,"class","fo-form-fieldset")},m(o,l){M(o,e,l),t(e,d),t(d,s),t(e,p),t(e,f),t(f,c),t(f,E),t(E,O),t(e,P),t(e,b),t(b,v),t(b,y),t(y,S),t(e,T),t(e,_),t(_,m),t(_,w),t(w,V),t(e,x),t(e,$),t($,g),t($,C),t(C,U),M(o,F,l),X(h,o,l),N=!0},p:oe,i(o){N||(Y(h.$$.fragment,o),N=!0)},o(o){Z(h.$$.fragment,o),N=!1},d(o){o&&n(e),o&&n(F),ee(h,o)}}}function ne(D){let e,d;return e=new le({props:{heading:"Radio buttons",$$slots:{default:[ie]},$$scope:{ctx:D}}}),{c(){Q(e.$$.fragment)},l(s){W(e.$$.fragment,s)},m(s,p){X(e,s,p),d=!0},p(s,[p]){const f={};p&2&&(f.$$scope={dirty:p,ctx:s}),e.$set(f)},i(s){d||(Y(e.$$.fragment,s),d=!0)},o(s){Z(e.$$.fragment,s),d=!1},d(s){ee(e,s)}}}function de(D){return[`  <fieldset class="fo-form-fieldset">
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
</fieldset>`]}class ce extends ae{constructor(e){super(),te(this,e,de,ne,se,{})}}export{ce as component};
