(this.webpackJsonpirmao_do_jorel=this.webpackJsonpirmao_do_jorel||[]).push([[0],{43:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){},49:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(29),s=r.n(a),o=r(7),i=r(6),j=Object(n.createContext)(),d=r(1),l=function(e){var t=e.children,r=Object(n.useState)([]),c=Object(i.a)(r,2),a=c[0],s=c[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u={persons:a,setPersons:s,searchName:l[0],setSearchName:l[1]};return Object(d.jsx)(j.Provider,{value:u,children:t})},u=r(8),h=r.n(u),b=r(15),p=r(61),O=r(57),m=r(58),x=r(32),f=r(59);var v=function(){return Object(d.jsx)("nav",{children:Object(d.jsxs)(f.a,{fill:!0,variant:"tabs",children:[Object(d.jsx)(f.a.Item,{children:Object(d.jsx)(f.a.Link,{href:"/irmaodojorelapp",children:"Home"})}),Object(d.jsx)(f.a.Item,{children:Object(d.jsx)(f.a.Link,{href:"/irmaodojorelapp/episode",children:"Epis\xf3dios"})}),Object(d.jsx)(f.a.Link,{href:"/irmaodojorelapp/about",children:"Sobre"}),Object(d.jsx)(f.a.Item,{})]})})},g=function(){return fetch("http://www.irmaodojorel.com/api/Personagem").then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}))},w=function(e){return fetch("http://www.irmaodojorel.com/api/Personagem/busca/".concat(e)).then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}))},k=function(e){return fetch("http://www.irmaodojorel.com/api/Personagem/".concat(e)).then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}))},y=(r(43),r(60));var P=function(){var e=Object(n.useContext)(j).setSearchName;return Object(d.jsx)("section",{children:Object(d.jsxs)("section",{className:"inputs",children:[Object(d.jsx)("h3",{children:" Pesquise por nome:"}),Object(d.jsx)(y.a.Control,{type:"text",placeholder:"Nome do personagem",onChange:function(t){return e(t.target.value.toLowerCase())}})]})})},N=r.p+"static/media/irmao-do-jorel.7fa50aee.jpeg";var C=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(n.useContext)(j),s=a.persons,o=a.setPersons,l=a.searchName;return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})()&&c(!1)}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(l);case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})()&&c(!1)}),[l]),Object(d.jsx)("div",{className:"home-page",children:Object(d.jsxs)(O.a,{fluid:"md",children:[Object(d.jsx)(m.a,{children:Object(d.jsxs)(x.a,{children:[" ",Object(d.jsx)(v,{})," "]})}),Object(d.jsxs)("section",{children:[Object(d.jsx)("img",{src:N,alt:"logo"}),Object(d.jsx)("h1",{children:"Encontre seus personagens favoritos!"})]}),Object(d.jsx)(P,{}),r||!s?Object(d.jsx)("p",{children:"Carregando..."}):Object(d.jsx)("ul",{className:"home-persons",children:s.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsxs)(p.a,{style:{width:"18rem"},children:[Object(d.jsx)(p.a.Img,{variant:"top",src:e.imagemUrl,alt:e.descricao}),Object(d.jsxs)(p.a.Body,{children:[Object(d.jsx)(p.a.Title,{children:e.nome}),Object(d.jsxs)(p.a.Text,{children:[Object(d.jsx)("p",{children:e.descricao}),e.idade&&Object(d.jsxs)("p",{children:[" Idade: ",e.idade," "]}),e.categoria&&Object(d.jsxs)("p",{children:[" Categoria: ",e.categoria," "]}),e.personalidade&&Object(d.jsxs)("p",{children:[" Personalidade: ",e.personalidade," "]})]})]}),Object(d.jsx)(p.a.Footer,{children:e.frase&&Object(d.jsxs)("p",{children:["Frase mais conhecida: ",e.frase]})})]})},t)}))})]})})};r(46);var E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),s=Object(i.a)(a,2),o=s[0],j=s[1],l=Object(n.useState)(!0),u=Object(i.a)(l,2),f=u[0],g=u[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.irmaodojorel.com/api/Episodio").then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}));case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()&&g(!1)}),[]),Object(n.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.irmaodojorel.com/api/Episodio/busca/".concat(o)).then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}));case 2:r=e.sent,c(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()()&&g(!1)}),[o]),Object(d.jsx)("div",{className:"episode-page",children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(m.a,{children:Object(d.jsx)(x.a,{children:Object(d.jsx)(v,{})})}),Object(d.jsx)("h1",{children:"Epis\xf3dios"}),Object(d.jsxs)("section",{className:"inputs",children:[Object(d.jsx)("h3",{children:" Pesquise pelo nome do epis\xf3dio:"}),Object(d.jsx)(y.a.Control,{type:"text",placeholder:"Nome do epis\xf3dio",onChange:function(e){return j(e.target.value.toLowerCase())}})]}),f||!r?Object(d.jsx)("p",{children:"Carregando..."}):Object(d.jsx)("ul",{className:"episodes",children:r.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)(p.a,{style:{width:"15rem"},children:Object(d.jsxs)(p.a.Body,{children:[Object(d.jsx)(p.a.Title,{children:e.nome}),Object(d.jsxs)(p.a.Subtitle,{className:"mb-2 text-muted",children:["Data de estreia: ",e.dataEstreia.substring(10,0)," Temporada ",e.temporadaId]}),Object(d.jsxs)(p.a.Text,{children:[Object(d.jsx)("p",{children:e.descricao}),Object(d.jsxs)("p",{children:["Sinopse: ",e.sinopse]})]})]})})},t)}))})]})})},S=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e};r(47);var I=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(S(1,109));case 2:t=e.sent,console.log(t),c(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsx)("div",{className:"about",children:Object(d.jsx)(O.a,{children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(x.a,{children:Object(d.jsx)(v,{})}),Object(d.jsx)("h2",{children:"Obrigado por visitar meu projeto! Entre em contato por:"}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://github.com/Tarcisio-Menezes",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/tarc%C3%ADsio-menezes/",target:"_blank",rel:"noreferrer",children:"Linkedin"}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:" Agradecimento ao site: "}),Object(d.jsx)("a",{href:"http://www.irmaodojorel.com/",target:"_blank",rel:"noreferrer",children:"irmaodojorel.com/"}),Object(d.jsx)("div",{className:"about-image",children:r?Object(d.jsx)("img",{src:r.imagemUrl,alt:"Imagem de um personagem gerado aleat\xf3riamente: ".concat(r.nome)}):Object(d.jsx)("h2",{children:"Carregando..."})})]})})})};r(48);var T=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(S(1,109));case 2:t=e.sent,console.log(t),c(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsx)("div",{className:"error-page",children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(m.a,{children:Object(d.jsx)(x.a,{children:Object(d.jsx)(v,{})})}),Object(d.jsx)("h2",{children:"Ooooops, p\xe1gina n\xe3o encontrada!!"}),r?Object(d.jsxs)(p.a,{style:{width:"15rem"},children:[Object(d.jsx)(p.a.Img,{variant:"top",src:r.imagemUrl}),Object(d.jsx)(p.a.Body,{children:Object(d.jsxs)(p.a.Text,{children:[" ",r.nome," n\xe3o encontrou a p\xe1gina!"]})})]}):Object(d.jsx)("h2",{children:"Carregando..."})]})})};r(49),r(50);var _=function(){return Object(d.jsx)(l,{basename:"/tarcisio-menezes",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/irmaodojorelapp",component:C}),Object(d.jsx)(o.a,{path:"/irmaodojorelapp/episode",component:E}),Object(d.jsx)(o.a,{path:"/irmaodojorelapp/about",component:I}),Object(d.jsx)(o.a,{path:"/irmaodojorelapp/*",component:T})]})})},L=r(23);s.a.render(Object(d.jsxs)(c.a.StrictMode,{children:[Object(d.jsx)(L.a,{children:Object(d.jsx)(_,{})}),","]}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.a3ff55af.chunk.js.map