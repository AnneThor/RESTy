(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{176:function(t,e,n){},177:function(t,e,n){},178:function(t,e,n){},179:function(t,e,n){},180:function(t,e,n){},181:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),a=n(32),i=n.n(a),o=(n(40),n(3)),c=n(6),l=n(7),d=n(9),h=n(8),u=n(15),j=n(4),p=(n(41),n(0)),b=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{id:"header",children:[Object(p.jsx)("h1",{children:Object(p.jsx)(u.b,{to:"/resty",children:"RESTy"})}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/resty",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/history",children:"History"})})]})]})}}]),n}(s.Component),O=(n(51),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).state={},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{id:"footer",children:Object(p.jsx)("p",{children:"\xa9 Anne Thorsteinson, 2021"})})}}]),n}(s.Component)),m=n(22),x=n.n(m),f=n(34),y=n(23),g=n.n(y),v=n(35),S=n.n(v);n(89),n(90);var C=function(t){var e=t.method;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"radio-button",children:[Object(p.jsx)("input",{type:"radio","data-testid":e,id:t.method,name:"method",value:t.method,onClick:t.click}),Object(p.jsx)("label",{htmlFor:t.method,children:t.method.toUpperCase()})]})})},k=(n(91),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{id:"form",children:Object(p.jsxs)("form",{"data-testid":"urlForm",onSubmit:this.props.handleFormSubmit,children:[Object(p.jsxs)("div",{id:"form-url-input",children:[Object(p.jsx)("label",{id:"url-input-label",htmlFor:"url",children:"URL: "}),Object(p.jsx)("input",{id:"url-input",type:"text",name:"url","data-testid":"url",placeholder:"Enter a valid url",value:this.props.tempUrl,onChange:this.props.handleUrlChange}),Object(p.jsx)("button",{id:"url-submit",type:"submit",name:"url",value:"submit",children:"Go!"})]}),Object(p.jsxs)("div",{id:"radio-buttons",children:[Object(p.jsx)(C,{method:"get",click:this.props.handleRadioClick}),Object(p.jsx)(C,{method:"post",click:this.props.handleRadioClick}),Object(p.jsx)(C,{method:"put",click:this.props.handleRadioClick}),Object(p.jsx)(C,{method:"delete",click:this.props.handleRadioClick})]})]})})}}]),n}(s.Component)),F=(n(92),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{id:"input",children:[Object(p.jsxs)("label",{id:"http-req-body",htmlFor:"http-req-body",children:[this.props.method.toUpperCase()," Request Body: "]}),Object(p.jsx)("textarea",{id:"req-body",type:"textarea",name:"req-body",placeholder:"Enter the body you would like to send with your HTTP Request. Must be in object format, ex: { firstName: 'John', lastName: 'Doe' }",value:this.props.body,onChange:this.props.handleBodyChange})]})}}]),n}(s.Component)),R=n(18),U=n.n(R),L=n(16),I=(n(176),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.response&&this.props.response.data&&this.props.response.data.count?{count:this.props.response.data.count}:null,e=t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:"Count: "}),Object(p.jsx)(U.a,{id:"json-pretty",json:t,theme:L.atelierSulphurpoolLight})]}):null,n=this.props.response?{headers:this.props.response.headers}:null,s=this.props.response?{body:this.props.response.data}:null,r=this.props.display?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{id:"display-headers",children:[Object(p.jsxs)("p",{"data-testid":"method",children:["Method: ",this.props.method]}),Object(p.jsxs)("p",{children:["URL: ",this.props.url]})]}),Object(p.jsxs)("div",{"data-testid":"json",id:"display-results",children:[Object(p.jsx)("p",{children:"Headers:"}),Object(p.jsx)(U.a,{id:"json-pretty",json:n,theme:L.atelierSulphurpoolLight}),e,Object(p.jsx)("p",{children:"Response:"}),Object(p.jsx)(U.a,{id:"json-pretty",json:s,theme:L.atelierSulphurpoolLight})]})]}):null;return Object(p.jsx)("div",{id:"display",children:r})}}]),n}(s.Component)),w=(n(177),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{id:"sidebar",children:[Object(p.jsx)("h1",{children:"Previous Searches"}),Object(p.jsx)("ul",{children:this.props.list.map((function(e,n){var s=e.substring(0,e.indexOf("-")),r=e.substring(e.indexOf("-")+1);return Object(p.jsxs)("li",{onClick:t.props.onClick,children:[s," ",r]},n)}))})]})}}]),n}(s.Component)),B=(n(178),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).handleRadioClick=function(t){s.setState(Object(o.a)(Object(o.a)({},s.state),{},{method:t.target.value}))},s.handleUrlChange=function(t){s.setState(Object(o.a)(Object(o.a)({},s.state),{},{url:t.target.value}))},s.handleUrlClick=function(t){var e=t.target.innerText,n=e.substring(e.indexOf(" ")+1);s.setState(Object(o.a)(Object(o.a)({},s.state),{},{url:n}))},s.handleBodyChange=function(t){s.setState(Object(o.a)(Object(o.a)({},s.state),{},{body:t.target.value}))},s.handleFormSubmit=function(t){switch(t.preventDefault(),s.toggleSpinner(),!1){case"get"===s.state.method:g()({method:s.state.method,url:s.state.url,data:JSON.parse(s.state.body)}).then((function(t){s.setState(Object(o.a)(Object(o.a)({},s.state),{},{response:t})),s.setState(Object(o.a)(Object(o.a)({},s.state),{},{display:!0})),s.setLocalStorage(s.state.method,s.state.url,t),s.toggleSpinner()})).catch((function(t){s.toggleSpinner(),console.log(t,t.message)}));break;default:g()({method:"get",url:s.state.url}).then((function(t){s.setState(Object(o.a)(Object(o.a)({},s.state),{},{response:t})),s.setState(Object(o.a)(Object(o.a)({},s.state),{},{display:!0})),s.setLocalStorage(s.state.method,s.state.url,t),s.toggleSpinner()})).catch((function(t){s.toggleSpinner(),console.log(t,t.message)})),s.toggleSpinner()}},s.toggleSpinner=function(){var t=!s.state.spinner;s.setState(Object(o.a)(Object(o.a)({},s.state),{},{spinner:t}))},s.setLocalStorage=function(){var t=Object(f.a)(x.a.mark((function t(e,n,r){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("".concat(e,"-").concat(n),JSON.stringify({method:s.state.method,url:s.state.url,reply:r})),s.props.handleHistory(e,n);case 2:case"end":return t.stop()}}),t)})));return function(e,n,s){return t.apply(this,arguments)}}(),s.state={method:"get",url:"",display:!1,response:"",body:"",spinner:!1},s}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.spinner?Object(p.jsx)(S.a,{type:"Circles",color:"00BFFF",height:80,width:80}):null;return Object(p.jsxs)("div",{id:"home",children:[Object(p.jsx)(w,{list:this.props.keyIndex,onClick:this.handleUrlClick}),Object(p.jsx)(k,{handleUrlChange:this.handleUrlChange,handleFormSubmit:this.handleFormSubmit,tempUrl:this.state.url,currMethod:this.state.method,handleRadioClick:this.handleRadioClick}),"get"!==this.state.method&&Object(p.jsx)(F,{method:this.state.method,body:this.state.body,handleBodyChange:this.handleBodyChange}),t||Object(p.jsx)(I,{display:this.state.display,method:this.state.method,response:this.state.response,url:this.state.url})]})}}]),n}(r.a.Component)),T=(n(179),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return console.log("key index",this.props.keyIndex),Object(p.jsxs)("div",{id:"history",children:[Object(p.jsx)("h1",{children:"List of Sites Previously Visited"}),Object(p.jsx)("ul",{children:this.props.keyIndex.map((function(t,e){var n=JSON.parse(localStorage.getItem(t));return Object(p.jsxs)("li",{children:[n.method," ",n.url]},e)}))})]})}}]),n}(r.a.Component)),q=(n(180),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).handleStorage=function(t,e){var n="".concat(t,"-").concat(e);if(!s.state.storage.find((function(t){return t===n}))){var r=s.state.storage.concat(n);s.setState(Object(o.a)(Object(o.a)({},s.state),{},{storage:r}))}},s.state={response:"",storage:[]},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(b,{}),Object(p.jsx)(j.a,{id:"body",exact:!0,path:"/resty",children:Object(p.jsx)(B,{handleHistory:this.handleStorage,keyIndex:this.state.storage})}),Object(p.jsx)(j.a,{exact:!0,path:"/history",children:Object(p.jsx)(T,{keyIndex:this.state.storage})}),Object(p.jsx)(O,{})]})}}]),n}(r.a.Component)),H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),s(t),r(t),a(t),i(t)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),H()},40:function(t,e,n){},41:function(t,e,n){},51:function(t,e,n){},90:function(t,e,n){},91:function(t,e,n){},92:function(t,e,n){}},[[181,1,2]]]);
//# sourceMappingURL=main.1459738a.chunk.js.map