(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n.n(r),s=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),a=(n(13),n(2)),o=n(3),i=n(5),h=n(4),l=n(1),b=n.n(l),u=n(0),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma3 grow bw3 shadow-5",children:[Object(u.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,n){return Object(u.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){var t=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:" 500px"},children:e.children})},p=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}]),n}(l.Component),g=(n(15),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(u.jsx)(f,{searchChange:this.onSearchChange}),Object(u.jsx)(O,{children:Object(u.jsx)(p,{children:Object(u.jsx)(j,{robots:r})})})]}):Object(u.jsx)("h1",{children:"Loading..."})}}]),n}(b.a.Component));c.a.render(Object(u.jsx)(g,{}),document.getElementById("root")),s()}},[[16,1,2]]]);
//# sourceMappingURL=main.a1221e56.chunk.js.map