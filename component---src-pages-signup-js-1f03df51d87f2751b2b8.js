(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{257:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(260),s=(t(35),t(21)),l=t(311),i=(t(249),t(265)),m=t(275);var u=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).submitedTimer=null,a.state={email:"",password:"",errors:{},submited:!1},a.handleUpdate=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault(),a.setState({submited:!0}),a.submitedTimer=setTimeout(function(){a.setState({submited:!1})},4400)},a}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this,a=this.state.errors;return r.a.createElement(l.a,{onSubmit:function(a){e.handleSubmit(a)},className:"mx-auto signup-module--form--1r6UK"},r.a.createElement(m.a,{label:"Email",type:"email",field:"email",onChange:this.handleUpdate,id:"signupEmail",placeholder:"Enter Email",className:"signup-module--form__input---6-83",error:a.email}),r.a.createElement(m.a,{label:"Password",type:"password",field:"password",onChange:this.handleUpdate,id:"signupPassword",placeholder:"Password",className:"signup-module--form__input---6-83",error:a.password}),r.a.createElement(i.a,{className:"signup-module--form__btn--1xHsn",disabled:!0,round:!0},"Coming Soon"),r.a.createElement("span",{className:"signup-module--form__login--rn2hT"},"Already have an account? ",r.a.createElement(s.a,{to:"/login"},"Login")),r.a.createElement("span",{className:"mt-4 small signup-module--form__login--rn2hT"},"By signing up, you agree to our ",r.a.createElement(s.a,{to:"/tos"},"Terms")," and that you have read our ",r.a.createElement(s.a,{to:"/privacy"},"Privacy Policy"),"."))},n}(n.Component);function c(){return r.a.createElement("div",{className:"page"},r.a.createElement(o.a,{title:"Userland Sign up"}),r.a.createElement("div",{className:"container page__header"},r.a.createElement("h2",{className:"page__title"},"Sign Up")),r.a.createElement("div",{className:"container"},r.a.createElement(u,null)))}t.d(a,"default",function(){return c})}}]);
//# sourceMappingURL=component---src-pages-signup-js-1f03df51d87f2751b2b8.js.map