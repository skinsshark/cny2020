(this["webpackJsonpchinese-zodiac"]=this["webpackJsonpchinese-zodiac"]||[]).push([[0],{1:function(e,a,t){},13:function(e){e.exports=JSON.parse('{"animals":{"monkey":{"emoji":" \ud83d\udc12","character":"\u7334"},"rooster":{"emoji":"\ud83d\udc13","character":"\u9e21"},"dog":{"emoji":"\ud83d\udc15","character":"\u72d7"},"pig":{"emoji":"\ud83d\udc16","character":"\u732a"},"rat":{"emoji":"\ud83d\udc00","character":"\u9f20"},"ox":{"emoji":"\ud83d\udc04","character":"\u725b"},"tiger":{"emoji":"\ud83d\udc05","character":"\u864e"},"rabbit":{"emoji":"\ud83d\udc07","character":"\u5154"},"dragon":{"emoji":"\ud83d\udc09","character":"\u9f99"},"snake":{"emoji":"\ud83d\udc0d","character":"\u86c7"},"horse":{"emoji":" \ud83d\udc0e","character":"\u9a6c"},"sheep":{"emoji":" \ud83d\udc10","character":"\u7f8a"}}}')},16:function(e,a,t){e.exports=t(29)},21:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),o=(t(21),t(4)),i=t(2),m=(t(1),4),u=["\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"];var s=function(e){return r.a.createElement("div",null,function(e){var a=Array.from(e).map((function(e){return u[e]}));return r.a.createElement("header",null,r.a.createElement("h4",null,a.join("")))}(e.year),r.a.createElement("input",{autoFocus:!0,value:e.year,type:"number",maxLength:m,placeholder:"\u8f93\u5165\u51fa\u751f\u5e74",onChange:function(a){return t=a.target.value,n=e.setYear,void(t.length>m?n(t.slice(0,m)):n(t));var t,n}}))};var h=function(e){var a=e.year,t=e.setYear,n=Object(i.c)();return r.a.createElement("main",null,r.a.createElement(s,{year:a,setYear:t}),r.a.createElement("h3",null,"Enter your birth year"),r.a.createElement("button",{disabled:4!==a.length||a<1920||a>2020,onClick:function(){n.push("/almost")}},"\u2192"))},E=2,d=["\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"];var v=function(e){return r.a.createElement("div",null,function(e){var a=Array.from(e).map((function(e){return d[e]}));return r.a.createElement("header",null,r.a.createElement("h4",null,a.join("")))}(e.month),r.a.createElement("input",{autoFocus:!0,value:e.month,type:"number",maxLength:E,placeholder:"\u6708\u4efd",onChange:function(a){return t=a.target.value,n=e.setMonth,void(t.length>E?n(t.slice(0,E)):n(t));var t,n}}))},f=2,p=["\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"];var y=function(e){return r.a.createElement("div",null,function(e){var a=Array.from(e).map((function(e){return p[e]}));return r.a.createElement("header",null,r.a.createElement("h4",null,a.join("")))}(e.day),r.a.createElement("input",{value:e.day,type:"number",maxLength:f,placeholder:"\u65e5\u5b50",onChange:function(a){return t=a.target.value,n=e.setDay,void(t.length>f?n(t.slice(0,f)):n(t));var t,n}}))};var b=function(e){var a=e.month,t=e.setMonth,n=e.day,c=e.setDay,l=Object(i.c)();return r.a.createElement("main",null,r.a.createElement("section",{className:"month-day"},r.a.createElement("article",null,r.a.createElement(v,{month:a,setMonth:t}),r.a.createElement("h3",null,"Month")),r.a.createElement("article",null,r.a.createElement(y,{day:n,setDay:c}),r.a.createElement("h3",null,"Day"))),r.a.createElement("button",{className:"back",onClick:function(){l.goBack()}},"\u2190"),r.a.createElement("button",{disabled:a.length<1||n.length<1||a<1||a>12||n<1||n>31,className:"forward",onClick:function(){l.push("/result")}},"\u2192"))},g=t(14),j=(t(27),t(13));var k=function(e){var a=e.birthday,t=function(e){var a=e.year,t=j.animals,n=a%12,r=Object.keys(t)[n];return Object(g.a)({},t[r],{name:r})}(a),n=t.emoji,c=t.character,l=t.name;return r.a.createElement("div",{className:"result"},r.a.createElement("h5",null,a.year,"/",a.month,"/",a.day),r.a.createElement("div",{className:"ani"},r.a.createElement("div",{className:"moji"},r.a.createElement("span",{role:"img","aria-label":l},n),r.a.createElement("span",{role:"img","aria-label":l},n),r.a.createElement("span",{role:"img","aria-label":l},n)),r.a.createElement("div",{className:"text"},c),r.a.createElement("div",{className:"moji right"},r.a.createElement("span",{role:"img","aria-label":l},n),r.a.createElement("span",{role:"img","aria-label":l},n),r.a.createElement("span",{role:"img","aria-label":l},n))))};t(28);function O(e,a,t){return{year:parseInt(e,10),month:parseInt(a,10),day:parseInt(t,10)}}var w=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),u=m[0],s=m[1],E=Object(n.useState)(""),d=Object(o.a)(E,2),v=d[0],f=d[1];function p(){c(""),s(""),f("")}return r.a.createElement(i.a,null,r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(h,{year:t,setYear:c})}}),r.a.createElement(i.b,{path:"/almost",render:function(){return r.a.createElement(b,{month:u,setMonth:s,day:v,setDay:f})}}),r.a.createElement(i.b,{path:"/result",render:function(){return r.a.createElement(k,{birthday:O(t,u,v),clearBirthday:p})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.b6985bf3.chunk.js.map