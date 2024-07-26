import{s as re,e as a,a as V,c as l,b as O,l as _,g as q,f as x,m as n,o as h,i as ie,h as t,n as ce}from"../chunks/scheduler.BY-FK6rg.js";import{S as de,i as fe,c as F,a as G,m as H,t as J,b as K,d as Q}from"../chunks/index.DXkMBp_H.js";import{S as _e,C as ne}from"../chunks/SubpageContainer.wv0xzI_w.js";function ue(W){let e,s,o,E="Select",I,A,i,u,R="Age of Empires",v,U="Super Mario",d,X="Tetris",p,Y="World of Warcraft",y,S,B,m,b,Z="Disabled select",j,P,r,g,ee="Age of Empires",C,te="Super Mario",f,oe="Tetris",$,ae="World of Warcraft",z,T,k;return S=new ne({props:{code:W[0]}}),T=new ne({props:{code:W[1]}}),{c(){e=a("div"),s=a("div"),o=a("label"),o.textContent=E,I=V(),A=a("div"),i=a("select"),u=a("option"),u.textContent=R,v=a("option"),v.textContent=U,d=a("option"),d.textContent=X,p=a("option"),p.textContent=Y,y=V(),F(S.$$.fragment),B=V(),m=a("div"),b=a("label"),b.textContent=Z,j=V(),P=a("div"),r=a("select"),g=a("option"),g.textContent=ee,C=a("option"),C.textContent=te,f=a("option"),f.textContent=oe,$=a("option"),$.textContent=ae,z=V(),F(T.$$.fragment),this.h()},l(c){e=l(c,"DIV",{class:!0});var M=O(e);s=l(M,"DIV",{});var N=O(s);o=l(N,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),_(o)!=="svelte-fs0d2"&&(o.textContent=E),I=q(N),A=l(N,"DIV",{class:!0});var le=O(A);i=l(le,"SELECT",{id:!0,name:!0,class:!0});var w=O(i);u=l(w,"OPTION",{"data-svelte-h":!0}),_(u)!=="svelte-au4m5q"&&(u.textContent=R),v=l(w,"OPTION",{"data-svelte-h":!0}),_(v)!=="svelte-721ack"&&(v.textContent=U),d=l(w,"OPTION",{"data-svelte-h":!0}),_(d)!=="svelte-a5cpku"&&(d.textContent=X),p=l(w,"OPTION",{"data-svelte-h":!0}),_(p)!=="svelte-il9870"&&(p.textContent=Y),w.forEach(x),le.forEach(x),y=q(N),G(S.$$.fragment,N),N.forEach(x),B=q(M),m=l(M,"DIV",{});var D=O(m);b=l(D,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),_(b)!=="svelte-1bf5ppv"&&(b.textContent=Z),j=q(D),P=l(D,"DIV",{class:!0});var se=O(P);r=l(se,"SELECT",{id:!0,name:!0,class:!0});var L=O(r);g=l(L,"OPTION",{"data-svelte-h":!0}),_(g)!=="svelte-au4m5q"&&(g.textContent=ee),C=l(L,"OPTION",{"data-svelte-h":!0}),_(C)!=="svelte-721ack"&&(C.textContent=te),f=l(L,"OPTION",{"data-svelte-h":!0}),_(f)!=="svelte-tsq9ux"&&(f.textContent=oe),$=l(L,"OPTION",{"data-svelte-h":!0}),_($)!=="svelte-il9870"&&($.textContent=ae),L.forEach(x),se.forEach(x),z=q(D),G(T.$$.fragment,D),D.forEach(x),M.forEach(x),this.h()},h(){n(o,"class","fo-form-label"),n(o,"for","video_games_select"),u.__value="Age of Empires",h(u,u.__value),v.__value="Super Mario",h(v,v.__value),d.__value="Tetris",h(d,d.__value),d.disabled=!0,p.__value="World of Warcraft",h(p,p.__value),n(i,"id","video_games_select"),n(i,"name","video_games_select"),n(i,"class","fo-form-select"),n(A,"class","fo-form-select-container"),n(b,"class","fo-form-label"),n(b,"for","video_games_disabled_select"),g.__value="Age of Empires",h(g,g.__value),C.__value="Super Mario",h(C,C.__value),f.__value="Tetris",h(f,f.__value),f.selected=!0,$.__value="World of Warcraft",h($,$.__value),n(r,"id","video_games_disabled_select"),n(r,"name","video_games_disabled_select"),n(r,"class","fo-form-select"),r.disabled=!0,n(P,"class","fo-form-select-container"),n(e,"class","selects")},m(c,M){ie(c,e,M),t(e,s),t(s,o),t(s,I),t(s,A),t(A,i),t(i,u),t(i,v),t(i,d),t(i,p),t(s,y),H(S,s,null),t(e,B),t(e,m),t(m,b),t(m,j),t(m,P),t(P,r),t(r,g),t(r,C),t(r,f),t(r,$),t(m,z),H(T,m,null),k=!0},p:ce,i(c){k||(J(S.$$.fragment,c),J(T.$$.fragment,c),k=!0)},o(c){K(S.$$.fragment,c),K(T.$$.fragment,c),k=!1},d(c){c&&x(e),Q(S),Q(T)}}}function ve(W){let e,s;return e=new _e({props:{heading:"Select",$$slots:{default:[ue]},$$scope:{ctx:W}}}),{c(){F(e.$$.fragment)},l(o){G(e.$$.fragment,o)},m(o,E){H(e,o,E),s=!0},p(o,[E]){const I={};E&4&&(I.$$scope={dirty:E,ctx:o}),e.$set(I)},i(o){s||(J(e.$$.fragment,o),s=!0)},o(o){K(e.$$.fragment,o),s=!1},d(o){Q(e,o)}}}function pe(W){return[`<label class="fo-form-label" for="video_games_select">
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
</select>`]}class $e extends de{constructor(e){super(),fe(this,e,pe,ve,re,{})}}export{$e as component};
