(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{251:function(e,t,n){"use strict";n.r(t);var a=n(116),o=n.n(a),r=n(0),s=n.n(r),i=n(55),c=n.n(i),l=(n(239),n(260));n(240);function d(e){var t=e.dangerouslySetInnerHTML;return s.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:t})}n(236);var u=n(57),m=(n(35),n(312));function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var b=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.routes,n=e.className,a=e.navClose;return s.a.createElement("ul",{className:(n?n+" ":"")+"sidebar-module--sidebar__menu--18bDG"},t.map(function(e){return s.a.createElement(_,{navClose:a,key:e.href,route:e,className:n})}))},t}(r.Component),_=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.toggle=function(){t.setState({isOpen:!t.state.isOpen})},t}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.route,n=e.className,a=e.navClose;return s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement("a",{href:t.href,onClick:a},t.name),t.routes&&s.a.createElement("button",{className:"sidebar-module--sidebar__menu-btn--1HNDK","aria-label":"toggle button",onClick:this.toggle},s.a.createElement(u.a,{icon:["fas",this.state.isOpen?"chevron-up":"chevron-down"]}))),t.routes&&s.a.createElement(m.a,{isOpen:this.state.isOpen},s.a.createElement(b,{navClose:a,routes:t.routes,className:n})))},t}(r.Component),h=b,y=n(145),f=n(146),v={"./sidebar.module.scss":{sidebar:"sidebar-module--sidebar--61LjD",sidebar__btn:"sidebar-module--sidebar__btn--1w00j",sidebar__brand:"sidebar-module--sidebar__brand--GQp5N",sidebar__menu:"sidebar-module--sidebar__menu--18bDG","sidebar__menu-btn":"sidebar-module--sidebar__menu-btn--1HNDK",sidebar_open:"sidebar-module--sidebar_open--Ppv4v",sidebar_sticky:"sidebar-module--sidebar_sticky--2LEz7",sticky:"sidebar-module--sticky--aFHX_"}};var g=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={sticky:!1,top:0,bottom:0},t.handleScroll=function(){var e=document.getElementById("main-nav"),n=document.getElementById("footer"),a=window.scrollY,o=window.innerHeight||document.documentElement.clientHeight;document.body.clientHeight-n.clientHeight<o+a?t.setState({top:"unset",bottom:0,sticky:!1}):a!==t.state.top?t.setState({sticky:!0,top:e.clientHeight,bottom:"unset"}):t.setState({sticky:!1})},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll);var e=document.getElementById("main-nav");this.setState({top:e.clientHeight})},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){var e=this.props,t=e.routes,n=e.isOpen,a=e.close,r=e.toggle,i=e.boundaryRef,l=this.state.sticky;return s.a.createElement("aside",{style:{top:this.state.top,bottom:this.state.bottom},ref:i,className:o()(c()("sidebar",{sidebar_open:n,sticky:l}),v)},s.a.createElement(y.a,{className:"sidebar-module--sidebar__brand--GQp5N"}),s.a.createElement("button",{className:"sidebar-module--sidebar__btn--1w00j",onClick:r,"aria-label":"documentation button"},n?s.a.createElement(u.a,{icon:["fa","times"]}):s.a.createElement(u.a,{icon:["fa","book"]})),s.a.createElement(h,{navClose:a,routes:t}))},a}(r.Component),E=Object(f.a)(g);n.d(t,"pageQuery",function(){return N});var w={"./docs.module.scss":{docs:"docs-module--docs--2KPjj",docs__title:"docs-module--docs__title--2Y-gz",docs__single:"docs-module--docs__single--1ah64"}};var k=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.data.markdownRemark;return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{title:""+e.frontmatter.title}),s.a.createElement("main",{className:"page "+o()(c()("docs",{docs__single:!e.frontmatter.nav}),w)},e.frontmatter.nav&&s.a.createElement(E,{routes:e.frontmatter.nav}),s.a.createElement("article",{className:"markdown"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",{className:"docs-module--docs__title--2Y-gz"},e.frontmatter.title),s.a.createElement(d,{dangerouslySetInnerHTML:{__html:e.html}})))))},a}(r.Component),N=(t.default=k,"3944961989")},260:function(e,t,n){"use strict";var a=n(261),o=n(0),r=n.n(o),s=n(263),i=n.n(s);function c(e){var t=e.description,n=e.lang,o=e.meta,s=e.title,c=e.children,l=a.data.site,d=t||l.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s - "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o)},c)}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},261:function(e){e.exports={data:{site:{siteMetadata:{title:"UserLAnd",description:"Get the full power of Linux on your Android. The easiest way to run a Linux distribution or application on Android. Download Now!",author:"@userlandtech"}}}}}}]);
//# sourceMappingURL=component---src-layouts-docs-js-632d897b2ede5dace6e8.js.map