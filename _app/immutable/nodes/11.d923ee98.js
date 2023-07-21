import{S as pe,i as ue,s as ve,y as U,z as X,A as Y,g as Z,d as ee,B as te,k as r,q as _,a as L,l as s,m as i,r as p,h as a,c as V,n as f,b as me,E as e,F as ge}from"../chunks/index.3cadb944.js";import{S as be,C as _e}from"../chunks/SubpageContainer.ca5160db.js";function $e(I){let t,l,o,g,C,c,b,y,$,B,u,q,E,k,z,W,F,v,O,j,G,n,h,H,S,J,m,K,T,Q,R,A,x;return W=new _e({props:{code:I[0]}}),A=new _e({props:{code:I[1]}}),{c(){t=r("div"),l=r("div"),o=r("label"),g=_("Select"),C=L(),c=r("select"),b=r("option"),y=_("Age of Empires"),$=r("option"),B=_("Super Mario"),u=r("option"),q=_("Tetris"),E=r("option"),k=_("World of Warcraft"),z=L(),U(W.$$.fragment),F=L(),v=r("div"),O=r("label"),j=_("Disabled select"),G=L(),n=r("select"),h=r("option"),H=_("Age of Empires"),S=r("option"),J=_("Super Mario"),m=r("option"),K=_("Tetris"),T=r("option"),Q=_("World of Warcraft"),R=L(),U(A.$$.fragment),this.h()},l(d){t=s(d,"DIV",{class:!0});var M=i(t);l=s(M,"DIV",{});var P=i(l);o=s(P,"LABEL",{class:!0,for:!0});var oe=i(o);g=p(oe,"Select"),oe.forEach(a),C=V(P),c=s(P,"SELECT",{id:!0,name:!0,class:!0});var w=i(c);b=s(w,"OPTION",{});var ae=i(b);y=p(ae,"Age of Empires"),ae.forEach(a),$=s(w,"OPTION",{});var le=i($);B=p(le,"Super Mario"),le.forEach(a),u=s(w,"OPTION",{});var re=i(u);q=p(re,"Tetris"),re.forEach(a),E=s(w,"OPTION",{});var se=i(E);k=p(se,"World of Warcraft"),se.forEach(a),w.forEach(a),z=V(P),X(W.$$.fragment,P),P.forEach(a),F=V(M),v=s(M,"DIV",{});var N=i(v);O=s(N,"LABEL",{class:!0,for:!0});var ie=i(O);j=p(ie,"Disabled select"),ie.forEach(a),G=V(N),n=s(N,"SELECT",{id:!0,name:!0,class:!0});var D=i(n);h=s(D,"OPTION",{});var ne=i(h);H=p(ne,"Age of Empires"),ne.forEach(a),S=s(D,"OPTION",{});var ce=i(S);J=p(ce,"Super Mario"),ce.forEach(a),m=s(D,"OPTION",{});var de=i(m);K=p(de,"Tetris"),de.forEach(a),T=s(D,"OPTION",{});var fe=i(T);Q=p(fe,"World of Warcraft"),fe.forEach(a),D.forEach(a),R=V(N),X(A.$$.fragment,N),N.forEach(a),M.forEach(a),this.h()},h(){f(o,"class","fo-form-label"),f(o,"for","video_games_select"),b.__value="Age of Empires",b.value=b.__value,$.__value="Super Mario",$.value=$.__value,u.__value="Tetris",u.value=u.__value,u.disabled=!0,E.__value="World of Warcraft",E.value=E.__value,f(c,"id","video_games_select"),f(c,"name","video_games_select"),f(c,"class","fo-form-select"),f(O,"class","fo-form-label"),f(O,"for","video_games_disabled_select"),h.__value="Age of Empires",h.value=h.__value,S.__value="Super Mario",S.value=S.__value,m.__value="Tetris",m.value=m.__value,m.selected=!0,T.__value="World of Warcraft",T.value=T.__value,f(n,"id","video_games_disabled_select"),f(n,"name","video_games_disabled_select"),f(n,"class","fo-form-select"),n.disabled=!0,f(t,"class","selects")},m(d,M){me(d,t,M),e(t,l),e(l,o),e(o,g),e(l,C),e(l,c),e(c,b),e(b,y),e(c,$),e($,B),e(c,u),e(u,q),e(c,E),e(E,k),e(l,z),Y(W,l,null),e(t,F),e(t,v),e(v,O),e(O,j),e(v,G),e(v,n),e(n,h),e(h,H),e(n,S),e(S,J),e(n,m),e(m,K),e(n,T),e(T,Q),e(v,R),Y(A,v,null),x=!0},p:ge,i(d){x||(Z(W.$$.fragment,d),Z(A.$$.fragment,d),x=!0)},o(d){ee(W.$$.fragment,d),ee(A.$$.fragment,d),x=!1},d(d){d&&a(t),te(W),te(A)}}}function Ee(I){let t,l;return t=new be({props:{heading:"Select",$$slots:{default:[$e]},$$scope:{ctx:I}}}),{c(){U(t.$$.fragment)},l(o){X(t.$$.fragment,o)},m(o,g){Y(t,o,g),l=!0},p(o,[g]){const C={};g&4&&(C.$$scope={dirty:g,ctx:o}),t.$set(C)},i(o){l||(Z(t.$$.fragment,o),l=!0)},o(o){ee(t.$$.fragment,o),l=!1},d(o){te(t,o)}}}function he(I){return[`<label class="fo-form-label" for="video_games_select">
    Select
</label>
<select
  id="video_games_select"
  name="video_games_select"
  class="fo-form-select"
>
  <option value="Age of Empires">Age of Empires</option>
  <option value="Super Mario">Super Mario</option>
  <option value="Tetris" disabled>Tetris</option>
  <option value="World of Warcraft">World of Warcraft</option>
</select>`,`<label class="fo-form-label" for="video_games_disabled_select">
    Disabled select
</label>
<select
  id="video_games_disabled_select"
  name="video_games_disabled_select"
  class="fo-form-select"
  disabled
>
  <option value="Age of Empires">Age of Empires</option>
  <option value="Super Mario">Super Mario</option>
  <option value="Tetris" selected>Tetris</option>
  <option value="World of Warcraft">World of Warcraft</option>
</select>`]}class We extends pe{constructor(t){super(),ue(this,t,he,Ee,ve,{})}}export{We as component};
