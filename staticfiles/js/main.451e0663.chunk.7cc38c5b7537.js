(this["webpackJsonpvirtual-tool-box"]=this["webpackJsonpvirtual-tool-box"]||[]).push([[0],{30:function(e,t,n){e.exports=n(59)},35:function(e,t,n){},36:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(27),l=n.n(r),c=(n(35),n(36),n(13)),u=n(1),i=n(8),s=n(9),m=n(11),h=n(10),p=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"about"},o.a.createElement("h3",null,"About"),o.a.createElement("main",null,o.a.createElement("p",null,"lots of stuff")))}}]),n}(o.a.Component),f=n(28),v=n.n(f),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={tools:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://virtual-tool-box.herokuapp.com/api",(function(e){console.log(e)})).then((function(t){e.setState({tools:t.data}),console.log(e.state.tools)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement("h3",null,"Main Page"),o.a.createElement("main",null,o.a.createElement("p",null,this.state.tools)))}}]),n}(o.a.Component),E=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("nav",null,o.a.createElement(c.b,{to:"/"},"About"),o.a.createElement(c.b,{to:"/main"},"Main"))}}]),n}(o.a.Component);var d=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(E,null),o.a.createElement(u.a,{path:"/",exact:!0,component:p}),o.a.createElement(u.a,{path:"/main",exact:!0,component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.451e0663.chunk.js.map