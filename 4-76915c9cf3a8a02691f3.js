(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{260:function(e,t,n){"use strict";var a=n(261),o=n(0),r=n.n(o),i=n(263),c=n.n(i);function s(e){var t=e.description,n=e.lang,o=e.meta,i=e.title,s=e.children,l=a.data.site,d=t||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s - "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:i},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:d}].concat(o)},s)}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},261:function(e){e.exports={data:{site:{siteMetadata:{title:"UserLAnd",description:"Get the full power of Linux on your Android. The easiest way to run a Linux distribution or application on Android. Download Now!",author:"@userlandtech"}}}}},262:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"g",function(){return f}),n.d(t,"c",function(){return p}),n.d(t,"a",function(){return b}),n.d(t,"b",function(){return m});n(45),n(22),n(17),n(18),n(6),n(24),n(27),n(28),n(25),n(266);var a,o=n(1),r=n.n(o);function i(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function c(e,t){var n={};return Object.keys(e).forEach(function(a){-1===t.indexOf(a)&&(n[a]=e[a])}),n}function s(e,t){for(var n,a=Array.isArray(t)?t:[t],o=a.length,r={};o>0;)r[n=a[o-=1]]=e[n];return r}var l={};function d(e){l[e]||("undefined"!=typeof console&&console.error(e),l[e]=!0)}var u="object"==typeof window&&window.Element||function(){};r.a.oneOfType([r.a.string,r.a.func,function(e,t,n){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},r.a.shape({current:r.a.any})]);var f=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},b=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],m={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"==typeof window||!window.document||window.document.createElement},265:function(e,t,n){"use strict";n(17),n(18),n(6),n(24),n(13);var a=n(116),o=n.n(a),r=n(0),i=n.n(r),c=n(55),s=n.n(c),l=(n(238),{"./button.module.scss":{btn:"button-module--btn--2_6ft",btn_danger:"button-module--btn_danger--gWCg7",btn_primary:"button-module--btn_primary--3tJwR",btn_round:"button-module--btn_round--25LEd",icon:"button-module--icon--1Fm1w"}});function d(e){var t=e.children,n=e.icon,a=e.tag,r=e.className,c=e.danger,d=e.round,u=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","icon","tag","className","danger","round"]);return u.href&&"button"===a&&(a="a"),i.a.createElement(a,Object.assign({type:"button"===a&&u.onClick?"button":void 0},u,{className:(r?r+" ":"")+o()(s()("btn",{btn_round:d,btn_primary:!c,btn_danger:c}),l)+" "+(u&&u.className||"")}),t,n&&i.a.createElement("span",{className:"button-module--icon--1Fm1w"}))}d.defaultProps={tag:"button",danger:!1,round:!1},t.a=d},266:function(e,t,n){(function(t){n(46),n(69),n(6);var a="[object AsyncFunction]",o="[object Function]",r="[object GeneratorFunction]",i="[object Null]",c="[object Proxy]",s="[object Undefined]",l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,u=l||d||Function("return this")(),f=Object.prototype,p=f.hasOwnProperty,b=f.toString,m=u.Symbol,g=m?m.toStringTag:void 0;function h(e){return null==e?void 0===e?s:i:g&&g in Object(e)?function(e){var t=p.call(e,g),n=e[g];try{e[g]=void 0;var a=!0}catch(r){}var o=b.call(e);a&&(t?e[g]=n:delete e[g]);return o}(e):function(e){return b.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=h(e);return t==o||t==r||t==a||t==c}}).call(this,n(56))},275:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1),i=n.n(r),c=n(115),s=n(68),l=n(55),d=n.n(l),u=n(262),f={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:u.g,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,n=e.cssModule,a=e.row,r=e.disabled,i=e.check,l=e.inline,f=e.tag,p=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(u.d)(d()(t,!!a&&"row",i?"form-check":"form-group",!(!i||!l)&&"form-check-inline",!(!i||!r)&&"disabled"),n);return"fieldset"===f&&(p.disabled=r),o.a.createElement(f,Object(c.a)({},p,{className:b}))};p.propTypes=f,p.defaultProps={tag:"div"};var b=p,m=(n(27),n(310)),g=n.n(m),h=i.a.oneOfType([i.a.number,i.a.string]),v=i.a.oneOfType([i.a.string,i.a.number,i.a.shape({size:h,order:h,offset:h})]),y={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.g,className:i.a.string,cssModule:i.a.object,xs:v,sm:v,md:v,lg:v,xl:v,widths:i.a.array},j={tag:"label",widths:["xs","sm","md","lg","xl"]},O=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},w=function(e){var t=e.className,n=e.cssModule,a=e.hidden,r=e.widths,i=e.tag,l=e.check,f=e.size,p=e.for,b=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];r.forEach(function(t,a){var o=e[t];if(delete b[t],o||""===o){var r,i=!a;if(g()(o)){var c,s=i?"-":"-"+t+"-";r=O(i,t,o.size),m.push(Object(u.d)(d()(((c={})[r]=o.size||""===o.size,c["order"+s+o.order]=o.order||0===o.order,c["offset"+s+o.offset]=o.offset||0===o.offset,c))),n)}else r=O(i,t,o),m.push(r)}});var h=Object(u.d)(d()(t,!!a&&"sr-only",!!l&&"form-check-label",!!f&&"col-form-label-"+f,m,!!m.length&&"col-form-label"),n);return o.a.createElement(i,Object(c.a)({htmlFor:p},b,{className:h}))};w.propTypes=y,w.defaultProps=j;var E=w,N=(n(162),n(22),n(44),n(95)),x=n(73),R={children:i.a.node,type:i.a.string,size:i.a.string,bsSize:i.a.string,valid:i.a.bool,invalid:i.a.bool,tag:u.g,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),plaintext:i.a.bool,addon:i.a.bool,className:i.a.string,cssModule:i.a.object},T=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(N.a)(n)),n.focus=n.focus.bind(Object(N.a)(n)),n}Object(x.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.type,r=e.bsSize,i=e.valid,l=e.invalid,f=e.tag,p=e.addon,b=e.plaintext,m=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(a)>-1,v=new RegExp("\\D","g"),y=f||("select"===a||"textarea"===a?a:"input"),j="form-control";b?(j+="-plaintext",y=f||"input"):"file"===a?j+="-file":h&&(j=p?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(u.h)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var O=Object(u.d)(d()(t,l&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,j),n);return("input"===y||f&&"function"==typeof f)&&(g.type=a),g.children&&!b&&"select"!==a&&"string"==typeof y&&"select"!==y&&(Object(u.h)('Input with a type of "'+a+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(c.a)({},g,{ref:m,className:O}))},t}(o.a.Component);T.propTypes=R,T.defaultProps={type:"text"};var M=T,z={children:i.a.node,tag:u.g,className:i.a.string,cssModule:i.a.object,valid:i.a.bool,tooltip:i.a.bool},k={tag:"div",valid:void 0},P=function(e){var t=e.className,n=e.cssModule,a=e.valid,r=e.tooltip,i=e.tag,l=Object(s.a)(e,["className","cssModule","valid","tooltip","tag"]),f=r?"tooltip":"feedback",p=Object(u.d)(d()(t,a?"valid-"+f:"invalid-"+f),n);return o.a.createElement(i,Object(c.a)({},l,{className:p}))};P.propTypes=z,P.defaultProps=k;var _=P,C=n(71);n(248);function F(e){var t=e.field,n=e.type,a=e.label,r=e.placeholder,i=e.id,c=e.error,s=e.onChange,l=e.className;return o.a.createElement(b,{className:"TextFieldGroup-module--form--3ZTiz"},o.a.createElement(E,{for:i,hidden:!0},a),o.a.createElement(M,{type:n,name:t,onChange:s,id:i,placeholder:r,invalid:!!c,className:l}),c&&o.a.createElement(_,{tooltip:!0},o.a.createElement(C.a,{icon:["fa","exclamation-triangle"]}),c))}F.prototype={field:i.a.string.isRequired,type:i.a.string.isRequired,label:i.a.string.isRequired,placeholder:i.a.string.isRequired,id:i.a.string,error:i.a.object,onChange:i.a.func.isRequired};t.a=F},310:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},311:function(e,t,n){"use strict";n(44);var a=n(115),o=n(68),r=n(95),i=n(73),c=n(0),s=n.n(c),l=n(1),d=n.n(l),u=n(55),f=n.n(u),p=n(262),b={children:d.a.node,inline:d.a.bool,tag:p.g,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.submit=n.submit.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.inline,i=e.tag,c=e.innerRef,l=Object(o.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(p.d)(f()(t,!!r&&"form-inline"),n);return s.a.createElement(i,Object(a.a)({},l,{ref:c,className:d}))},t}(c.Component);m.propTypes=b,m.defaultProps={tag:"form"},t.a=m}}]);
//# sourceMappingURL=4-76915c9cf3a8a02691f3.js.map