(this["webpackJsonptest-project"]=this["webpackJsonptest-project"]||[]).push([[0],{50:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(23),s=c.n(r),i=c(13),l=c.n(i),o=c(24),j=c(3),d=c(25),u=c.n(d),b=c(7),h=c.n(b),x=c(2),A=c(8),g=c(14),p=c(6),O=c.n(p),f=c.p+"static/media/arrow-right-solid.2db90993.svg",m=c(1);var _=function(e){return Object(m.jsxs)("div",{className:O.a.Cards,children:[Object(m.jsx)("img",{src:e.urlToImage}),Object(m.jsxs)(A.b,{className:O.a.Text,to:"/article/".concat(e.id),children:[Object(m.jsx)("h2",{dangerouslySetInnerHTML:{__html:e.title}}),Object(m.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}}),Object(m.jsxs)("div",{className:O.a.More,children:[Object(m.jsx)("h4",{children:"Read more"}),Object(m.jsx)("img",{src:f,alt:"arrow right"})]})]})]})};function v(e){return e.map((function(e){return Object(g.a)({},e)}))}var B=function(e){var t=e.cards,c=Object(a.useState)(""),n=Object(j.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(0),l=Object(j.a)(i,2),o=l[0],d=l[1],u=Object(a.useState)([]),b=Object(j.a)(u,2),h=b[0],x=b[1];Object(a.useEffect)((function(){x(v(t))}),[t]),Object(a.useEffect)((function(){if(r){var e=v(t).filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())||e.content.toLowerCase().includes(r.toLowerCase())}));if(e.length&&r.length){var c=new RegExp(r,"gi");e=e.map((function(e){return e.title=e.title.replaceAll(c,'<span class="highlight">'.concat(r,"</span>")),e.content=e.content.replaceAll(c,'<span class="highlight">'.concat(r,"</span>")),e}))}x(e)}else x(t)}),[r]),Object(a.useEffect)((function(){d(h.length)}),[h]);return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:O.a.Header,children:[Object(m.jsx)("h3",{children:"Filter by keywords"}),Object(m.jsx)("div",{className:O.a.Input,children:Object(m.jsx)("input",{onChange:function(e){s(e.target.value)},type:"text"})}),Object(m.jsxs)("h4",{children:["Results: ",o]})]}),Object(m.jsxs)("div",{className:O.a.Block,children:[Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:O.a.Info,children:Object(m.jsx)("div",{children:h.map((function(e){return Object(m.jsx)(_,Object(g.a)({},e),e.url)}))})})]})]})},w=function(e){var t=e.cards;Object(a.useEffect)((function(){s(v(t))}),[t]);var c=Object(a.useState)([]),n=Object(j.a)(c,2),r=n[0],s=n[1],i=Object(x.g)(),l=r.find((function(e){return"".concat(e.id)===i.id}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:h.a.Background,children:Object(m.jsx)("img",{src:null===l||void 0===l?void 0:l.urlToImage})}),Object(m.jsxs)("div",{className:h.a.Block,children:[Object(m.jsx)("div",{className:h.a.Title,children:Object(m.jsx)("h2",{children:null===l||void 0===l?void 0:l.title})}),Object(m.jsx)("div",{className:h.a.Content,children:Object(m.jsx)("p",{children:null===l||void 0===l?void 0:l.content})}),Object(m.jsxs)("div",{className:h.a.Back,children:[Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAICAYAAAAV6Lr7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABHSURBVHgB7dZRCUAhEETReS+RjYyqEWxgFVf0xwazcA8MBrggK71KrAqWdpx5X5ghjqlPJ0qL9dgQrPxCCnxxCRApAc5sMwu8jQidhUEt5QAAAABJRU5ErkJggg==",alt:"arrow"}),Object(m.jsx)(A.b,{className:h.a.Text,to:"/",children:Object(m.jsx)("p",{children:"Back to Homepage"})})]})]})]})};var k=function(){var e=n.a.useState([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r="62f2901bad3f4a7dae34f403323e7a0a";return n.a.useEffect((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=".concat(r));case 3:t=e.sent,a(t.data.articles.map((function(e){return e.id=Math.floor(1e4*Math.random()),e}))),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert("data fetch error"),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(A.a,{children:Object(m.jsxs)(x.c,{children:[Object(m.jsx)(x.a,{path:"/",element:Object(m.jsx)(B,{cards:c})}),Object(m.jsx)(x.a,{path:"/article/:id",element:Object(m.jsx)(w,{cards:c})})]})})})};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))},6:function(e,t,c){e.exports={Header:"Homepage_Header__1xDeu",Input:"Homepage_Input__37fDA",Block:"Homepage_Block__1lvD0",Info:"Homepage_Info__2HvFl",Cards:"Homepage_Cards__1gHLl",Text:"Homepage_Text__3omtf",More:"Homepage_More__11m-z"}},7:function(e,t,c){e.exports={Background:"ArticlePage_Background__3vz5H",Block:"ArticlePage_Block__WwKsu",Title:"ArticlePage_Title__E-Mda",Content:"ArticlePage_Content__3xBpa",Back:"ArticlePage_Back__3VlxQ",Text:"ArticlePage_Text__1XNAT"}}},[[50,1,2]]]);
//# sourceMappingURL=main.bcf259c0.chunk.js.map