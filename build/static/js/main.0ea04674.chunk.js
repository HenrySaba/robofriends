(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),s=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))}),a=(n(13),n(4)),i=n(5),o=n(7),h=n(6),l=n(1),b=n.n(l),u=n(0),d=function(e){var t=e.name,n=e.email,c=e.id;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma3 grow bw3 shadow-5",children:[Object(u.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,n){return Object(u.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},p=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:" 500px"},children:e.children})},g=(n(15),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(u.jsx)(f,{searchChange:this.onSearchChange}),Object(u.jsx)(p,{children:Object(u.jsx)(j,{robots:c})})]}):Object(u.jsx)("h1",{children:"Loading..."})}}]),n}(b.a.Component));r.a.render(Object(u.jsx)(g,{}),document.getElementById("root")),s()}},[[16,1,2]]]);
//# sourceMappingURL=main.0ea04674.chunk.js.map