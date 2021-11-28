(this["webpackJsonpnews-page"]=this["webpackJsonpnews-page"]||[]).push([[0],{120:function(e,a,t){},121:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t(28),r=t.n(n),i=t(173),c=t(174),u=t(2),s=function(){return Object(u.jsx)(i.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px",padding:"1rem",borderRadius:"50px",width:"auto",height:300,bgcolor:"rgb(244, 183, 50)"},children:Object(u.jsx)(c.a,{sx:{textAlign:"center",color:"white"},variant:"h2",component:"div",gutterBottom:!0,children:"Discover Worldwide News"})})},o=t(20),d=t.n(o),b=t(25),v=t(13),h=t(5),p=t(80),j=t(172),x=t(175),m=t(177),g=t(178),f=t(179),O=Object(p.a)();O.typography.h3=Object(h.a)({fontSize:"1.2rem","@media (min-width:600px)":{fontSize:"1.5rem"}},O.breakpoints.up("md"),{fontSize:"2rem"});var y={card:{maxWidth:"100%",height:"30vh","@media (max-width:1200px)":{height:"25vh"}},cardActionArea:{display:"flex",alignItems:"center",height:"100%",background:"rgb(244, 89, 50 )","@media (max-width:900px)":{flexDirection:"column"}},cardMedia:{width:"50%",height:"100%","@media (max-width:600px)":{width:"70%"}},body2:{"@media (max-width:1200px)":{display:"none"}}},w=function(e){var a=e.data;return Object(u.jsx)(j.a,{theme:O,children:Object(u.jsx)(x.a,{onClick:function(){return e=a.articles[0].url,void window.open(e);var e},sx:y.card,children:Object(u.jsxs)(m.a,{sx:y.cardActionArea,children:[Object(u.jsx)(g.a,{sx:y.cardMedia,component:"img",image:a.articles[0].urlToImage,alt:"article picture"}),Object(u.jsxs)(f.a,{children:[Object(u.jsx)(c.a,{gutterBottom:!0,variant:"h3",component:"div",children:a.articles[0].title}),Object(u.jsx)(c.a,{sx:y.body2,variant:"body2",color:"text.secondary",children:a.articles[0].description})]})]})})})},S=t(170),k=t(180),z=t(171),C=t(165),A={box:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",maxWidth:600,bgcolor:"background.paper",border:"2px solid #000",borderRadius:"5px",boxShadow:24,p:4},btn:{"@media (max-width:600px)":{fontSize:"0.7rem"}}},B=function(e){var a=e.data,t=Object(l.useState)(!1),n=Object(v.a)(t,2),r=n[0],s=n[1],o=Object(l.useState)(0),d=Object(v.a)(o,2),b=d[0],h=d[1],p=function(e){s(!0),h(e.target.value)},j=function(){return s(!1)};return 0===a.totalResults?Object(u.jsx)("div",{children:"No results found"}):Object(u.jsx)(S.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},sx:{padding:"30px 0"},children:a.articles.slice(1).map((function(e,t){return Object(u.jsx)(S.a,{item:!0,xs:2,sm:4,md:4,children:Object(u.jsxs)(x.a,{sx:{maxWidth:345},children:[Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g.a,{component:"img",height:"140",image:e.urlToImage,alt:"article image"}),Object(u.jsx)(f.a,{children:Object(u.jsx)(c.a,{variant:"body2",color:"text.secondary",children:e.title})})]}),Object(u.jsxs)(k.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(u.jsx)(z.a,{sx:A.btn,onClick:p,value:t+1,size:"small",children:"Read More"}),Object(u.jsx)(C.a,{open:r,sx:{background:"rgb(117, 181, 210)"},onClose:j,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(u.jsxs)(i.a,{sx:A.box,children:[Object(u.jsx)(g.a,{component:"img",height:"auto",image:a.articles[b].urlToImage,alt:"article image"}),Object(u.jsx)(c.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:a.articles[b].title}),Object(u.jsx)(c.a,{id:"modal-modal-description",sx:{mt:2},children:a.articles[b].description})]})}),Object(u.jsx)(z.a,{sx:A.btn,target:"_blank",rel:"noreferrer",href:e.url,size:"small",children:"Go To"})]})]})},t)}))})},I=function(e){var a=e.data;return Object(u.jsxs)("div",{children:[Object(u.jsx)(w,{data:a}),Object(u.jsx)(B,{data:a})]})},N=t(42),T=t.n(N),R=function(){var e=Object(b.a)(d.a.mark((function e(){var a,t,l,n,r,i,c,u,s=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.length>0&&void 0!==s[0]?s[0]:"top-headlines",t=s.length>1?s[1]:void 0,l=s.length>2?s[2]:void 0,n=s.length>3&&void 0!==s[3]?s[3]:"publishedAt",r=s.length>4?s[4]:void 0,i=s.length>5&&void 0!==s[5]?s[5]:"us","everything"!==a){e.next=19;break}return e.prev=7,e.next=10,T.a.get("https://newsapi.org/v2/everything",{params:{q:t,language:l,sortBy:n,apiKey:"70f3117458644a38ad406e7dd376becc",pageSize:10}});case 10:return c=e.sent,e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",e.t0.response);case 17:e.next=29;break;case 19:return e.prev=19,e.next=22,T.a.get("https://newsapi.org/v2/top-headlines",{params:{q:t,category:r,country:i,apiKey:"70f3117458644a38ad406e7dd376becc",pageSize:10}});case 22:return u=e.sent,e.abrupt("return",u);case 26:return e.prev=26,e.t1=e.catch(19),e.abrupt("return",e.t1.response);case 29:case"end":return e.stop()}}),e,null,[[7,14],[19,26]])})));return function(){return e.apply(this,arguments)}}(),E=R,M=t(162),P=t(167),G=t(181),H=function(e){var a=e.title,t=e.body;return Object(u.jsx)(M.a,{sx:{width:"100%",marginTop:"50px"},spacing:2,children:Object(u.jsxs)(P.a,{severity:"error",children:[Object(u.jsx)(G.a,{children:a}),t]})})},K=[{value:"everything",label:"Everything"},{value:"top-headlines",label:"Top Headlines"}],U=[{value:"ar",label:"Arabic"},{value:"de",label:"German"},{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"he",label:"Hebrew"},{value:"fr",label:"French"},{value:"it",label:"Italian"},{value:"nl",label:"Dutch"},{value:"no",label:"Norwegian"},{value:"pt",label:"Portuguese"},{value:"ru",label:"Russian"},{value:"se",label:"Northern Sami"},{value:"zh",label:"Chinese"}],W=[{value:"relevancy",label:"Relevancy"},{value:"popularity",label:"Popularity"},{value:"publishedAt",label:"Published At"}],q=[{value:"",label:"None"},{value:"ae",label:"United Arab Emirates"},{value:"ar",label:"Argentina"},{value:"at",label:"Austria"},{value:"au",label:"Australia"},{value:"be",label:"Belgium"},{value:"bg",label:"Bulgaria"},{value:"br",label:"Brazil"},{value:"ca",label:"Canada"},{value:"ch",label:"Switzerland"},{value:"cn",label:"China"},{value:"co",label:"Colombia"},{value:"cu",label:"Cuba"},{value:"cz",label:"Czech Republic"},{value:"de",label:"Germany"},{value:"eg",label:"Egypt"},{value:"fr",label:"France"},{value:"gb",label:"United Kingdom"},{value:"gr",label:"Greece"},{value:"hk",label:"Hong Kong"},{value:"hu",label:"Hungary"},{value:"id",label:"Indonesia"},{value:"ie",label:"Ireland"},{value:"il",label:"Israel"},{value:"in",label:"India"},{value:"it",label:"Italy"},{value:"jp",label:"Japan"},{value:"kr",label:"Korea (South)"},{value:"lt",label:"Lithuania"},{value:"lv",label:"Latvia"},{value:"ma",label:"Morocco"},{value:"mx",label:"Mexico"},{value:"my",label:"Malaysia"},{value:"ng",label:"Nigeria"},{value:"nl",label:"Netherlands"},{value:"no",label:"Norway"},{value:"nz",label:"New Zealand"},{value:"ph",label:"Philippines"},{value:"pl",label:"\tPoland"},{value:"pt",label:"Portugal"},{value:"ro",label:"\tRomania"},{value:"rs",label:"Serbia"},{value:"ru",label:"\tRussian"},{value:"sa",label:"Saudi Arabia"},{value:"se",label:"Sweden"},{value:"sg",label:"Singapore"},{value:"si",label:"Slovenia"},{value:"sk",label:"Slovakia"},{value:"th",label:"Thailand"},{value:"tr",label:"Turkey"},{value:"tw",label:"\tTaiwan"},{value:"ua",label:"Ukraine"},{value:"us",label:"United States of America"},{value:"ve",label:"\tVenezuela"},{value:"za",label:"\tSouth Africa"}],J=[{value:"",label:"None"},{value:"business",label:"Business"},{value:"entertainment",label:"Entertainment"},{value:"general",label:"General"},{value:"health",label:"Health"},{value:"science",label:"Science"},{value:"sports",label:"Sports"},{value:"technology",label:"Technology"}],L=t(182),D=t(164),F=t(168),V=function(){var e=Object(l.useState)(),a=Object(v.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)(""),c=Object(v.a)(r,2),s=c[0],o=c[1],h=Object(l.useState)("everything"),p=Object(v.a)(h,2),j=p[0],x=p[1],m=Object(l.useState)("en"),g=Object(v.a)(m,2),f=g[0],O=g[1],y=Object(l.useState)("publishedAt"),w=Object(v.a)(y,2),S=w[0],k=w[1],z=Object(l.useState)(""),C=Object(v.a)(z,2),A=C[0],B=C[1],N=Object(l.useState)(""),T=Object(v.a)(N,2),R=T[0],M=T[1],P=Object(l.useState)(!0),G=Object(v.a)(P,2),V=G[0],X=G[1];Object(l.useEffect)((function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:a=e.sent,n(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(l.useEffect)((function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(j,s,f,S,A,R);case 2:a=e.sent,n(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=setTimeout((function(){("everything"===j&&s||"top-headlines"===j||"top-headlines"===j)&&e()}),500);return function(){clearTimeout(a)}}),[j,s,f,S,A,R]);var Y=function(e){"endpoint"===e.target.name&&(x(e.target.value),X(!V)),"language"===e.target.name&&O(e.target.value),"sorting"===e.target.name&&k(e.target.value),"category"===e.target.name&&B(e.target.value),"country"===e.target.name&&M(e.target.value)};return Object(u.jsxs)(L.a,{fixed:!0,children:[Object(u.jsx)(i.a,{component:"form",sx:{"& .MuiTextField-root":{m:1}},noValidate:!0,autoComplete:"off",children:Object(u.jsxs)("div",{children:[Object(u.jsx)(D.a,{sx:{width:200},size:"small",id:"outlined",select:!0,label:"Select",name:"endpoint",value:j,onChange:Y,children:K.map((function(e){return Object(u.jsx)(F.a,{value:e.value,children:e.label},e.value)}))}),Object(u.jsx)(D.a,{fullWidth:!0,required:!0,id:"outlined",label:"Search",onChange:function(e){o(e.target.value)}}),Object(u.jsx)(D.a,{disabled:!V,sx:{width:200},size:"small",id:"outlined",select:!0,name:"language",label:"Language",value:f,onChange:Y,children:U.map((function(e){return Object(u.jsx)(F.a,{value:e.value,children:e.label},e.value)}))}),Object(u.jsx)(D.a,{disabled:!V,sx:{width:200},size:"small",id:"outlined",select:!0,name:"sorting",label:"Sort by",value:S,onChange:Y,children:W.map((function(e){return Object(u.jsx)(F.a,{value:e.value,children:e.label},e.value)}))}),Object(u.jsx)(D.a,{disabled:V,sx:{width:200},size:"small",id:"outlined",name:"category",select:!0,label:"Category",value:A,onChange:Y,children:J.map((function(e){return Object(u.jsx)(F.a,{value:e.value,children:e.label},e.value)}))}),Object(u.jsx)(D.a,{disabled:V,sx:{width:200},size:"small",id:"outlined",name:"country",select:!0,label:"Country",value:R,onChange:Y,children:q.map((function(e){return Object(u.jsx)(F.a,{value:e.value,children:e.label},e.value)}))})]})}),function(){if(t)return"error"===t.data.status?Object(u.jsx)(H,{title:"Error ".concat(t.status),body:t.data.message}):t.data.totalResults?Object(u.jsx)(I,{data:t.data}):Object(u.jsx)(H,{title:"No results found",body:"Please change your categories or search term"})}()]})},X=t(14),Y=function(){var e=Object(b.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a).concat("New York"===a?",US":"","&units=metric&appid=1500bee8cdc86f2fda974240cd7a2253"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Z=Y,_={outerBox:{overflow:"hidden"},innerBox:{display:"flex",width:"100%",animation:"tickerh linear 15s infinite","@keyframes tickerh":{"0%":{transform:"translateX(100%)"},"100%":{transform:"translateX(-100%)"}},"@media (max-width:1200px)":{width:"130%"},"@media (max-width:900px)":{width:"150%"},"@media (max-width:600px)":{width:"200%"}},text:{paddingRight:"30px","@media (max-width:1200px)":{fontSize:"0.7rem"},"@media (max-width:900px)":{fontSize:"0.6rem"}}},Q=function(e){var a=e.data;return Object(u.jsx)(i.a,{sx:_.outerBox,children:Object(u.jsx)(i.a,{sx:_.innerBox,children:function(){if(a)return a.map((function(e,a){return Object(u.jsx)(c.a,{sx:_.text,variant:"caption",display:"block",gutterBottom:!0,children:"".concat(e.city," (").concat(e.temp,"C)")},a)}))}()})})},$=["New York","Paris","Madrid","Berlin","London","Rome","Jerusalem","Moscow","Beijing"],ee=function(){var e=Object(l.useState)([]),a=Object(v.a)(e,2),t=a[0],n=a[1];return Object(l.useEffect)((function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(a){var t,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(a);case 2:t=e.sent,l={city:"".concat(t.data.name),temp:"".concat(parseInt(t.data.main.temp))},n((function(e){return[].concat(Object(X.a)(e),[l])}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();$.map((function(a){return e(a)}))}),[]),Object(u.jsx)(L.a,{children:9===t.length?Object(u.jsx)(Q,{data:t}):""})},ae=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(ee,{}),Object(u.jsx)(s,{}),Object(u.jsx)(V,{})]})};t(120);r.a.render(Object(u.jsx)(ae,{}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.298dc0a0.chunk.js.map