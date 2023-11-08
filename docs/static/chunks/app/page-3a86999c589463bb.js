(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4440:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(n=(function(){return o}).apply(t,[]))&&(e.exports=n)}()},1100:function(e,t,n){"use strict";n.d(t,{Pi:function(){return b}});var r,o=n(4256),i=n(2265);if(!i.useState)throw Error("mobx-react-lite requires React with Hooks support");if(!o.rC)throw Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var a=n(4887);function s(e){return(0,o.Gf)(e)}var c=function(){function e(e){var t=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(t.sweepTimeout),t.sweepTimeout=void 0;var n=Date.now();t.registrations.forEach(function(r,o){n-r.registeredAt>=e&&(t.finalize(r.value),t.registrations.delete(o))}),t.registrations.size>0&&t.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){t.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,n){this.registrations.set(n,{value:t,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),l=new("undefined"!=typeof FinalizationRegistry?FinalizationRegistry:c)(function(e){var t;null===(t=e.reaction)||void 0===t||t.dispose(),e.reaction=null}),u=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};function p(e){return"observer".concat(e)}var f=function(){};function d(){return new f}var h="function"==typeof Symbol&&Symbol.for,m=h?Symbol.for("react.forward_ref"):"function"==typeof i.forwardRef&&(0,i.forwardRef)(function(e){return null}).$$typeof,y=h?Symbol.for("react.memo"):"function"==typeof i.memo&&(0,i.memo)(function(e){return null}).$$typeof;function b(e,t){if(y&&e.$$typeof===y)throw Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var n,r=null!==(n=null==t?void 0:t.forwardRef)&&void 0!==n&&n,a=e,c=e.displayName||e.name;if(m&&e.$$typeof===m&&(r=!0,"function"!=typeof(a=e.render)))throw Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var f=function(e,t){return function(e,t){void 0===t&&(t="observed");var n,r,a=u(i.useState(d),1)[0],c=u(i.useState(),2)[1],f=function(){return c([])},h=i.useRef(null);h.current||(h.current={reaction:null,mounted:!1,changedBeforeMount:!1});var m=h.current;if(m.reaction||(m.reaction=new o.le(p(t),function(){m.mounted?f():m.changedBeforeMount=!0}),l.register(a,m,m)),i.useDebugValue(m.reaction,s),i.useEffect(function(){return l.unregister(m),m.mounted=!0,m.reaction?m.changedBeforeMount&&(m.changedBeforeMount=!1,f()):(m.reaction=new o.le(p(t),function(){f()}),f()),function(){m.reaction.dispose(),m.reaction=null,m.mounted=!1,m.changedBeforeMount=!1}},[]),m.reaction.track(function(){try{n=e()}catch(e){r=e}}),r)throw r;return n}(function(){return a(e,t)},c)};return""!==c&&(f.displayName=c),e.contextTypes&&(f.contextTypes=e.contextTypes),r&&(f=(0,i.forwardRef)(f)),function(e,t){Object.keys(e).forEach(function(n){v[n]||Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}(e,f=(0,i.memo)(f)),f}var v={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};(r=a.unstable_batchedUpdates)||(r=function(e){e()}),(0,o.jQ)({reactionScheduler:r}),l.finalizeAllImmediately},8838:function(e,t,n){Promise.resolve().then(n.bind(n,8306)),Promise.resolve().then(n.bind(n,9664)),Promise.resolve().then(n.bind(n,7082)),Promise.resolve().then(n.t.bind(n,7815,23)),Promise.resolve().then(n.t.bind(n,6350,23))},8306:function(e,t,n){"use strict";n.r(t),n.d(t,{RootProvider:function(){return h},RootStoreContext:function(){return d}});var r=n(7437),o=n(4256);let i="http://localhost:3001/tasks",a=async()=>{let e=await fetch(i),t=await e.json();return t},s=async e=>{let t=await fetch(i,{headers:{"Content-type":"application/json; charset=UTF-8"},method:"post",body:JSON.stringify({title:e,completed:!1})}),n=await t.json();return n},c=async e=>{let t=await fetch("".concat(i,"/").concat(e.id),{headers:{"Content-type":"application/json; charset = UTF-8"},method:"PUT",body:JSON.stringify(e)}),n=await t.json();return n},l=async e=>{await fetch("".concat(i,"/").concat(e),{method:"delete"})};class u{constructor(){this.taskList=[],this.getAllTaskAction=async()=>{try{let e=await a();(0,o.z)(()=>{this.taskList=e})}catch(e){console.log("getAllTaskAction"+e)}},this.addTaskAction=async e=>{try{let t=await s(e);(0,o.z)(()=>{this.taskList.push(t)})}catch(e){console.log("addTask:"+e)}},this.editTaskAction=async e=>{try{let t=await c(e);(0,o.z)(()=>{let e=this.taskList.findIndex(e=>e.id===t.id);-1!==e&&(this.taskList[e]=t)})}catch(e){console.log("editTaskAction"+e)}},this.deleteTaskAction=async e=>{try{await l(e)}catch(e){console.log("deleteTaskAction"+e)}},(0,o.ky)(this)}}class p{constructor(){this.taskStore=new u,(0,o.ky)(this)}}var f=n(2265);let d=(0,f.createContext)({}),h=e=>{let{children:t}=e;return(0,r.jsx)(d.Provider,{value:new p,children:t})}},8957:function(e,t,n){"use strict";var r=n(7437),o=n(4440),i=n.n(o);t.Z=e=>{let{typeBtn:t="button",classBtn:n,onClick:o,children:a}=e,s=i()(n);return(0,r.jsx)("button",{type:t,className:s,onClick:o?e=>o(e):void 0,children:a})}},7189:function(e,t,n){"use strict";var r=n(7437),o=n(8957),i=n(9489),a=n.n(i);t.Z=e=>{let{children:t,nameBtn:n,onSubmit:i}=e;return(0,r.jsxs)("form",{className:a().form,onSubmit:e=>i(e),children:[t,(0,r.jsx)(o.Z,{typeBtn:"submit",classBtn:a().btn,children:n})]})}},8997:function(e,t,n){"use strict";var r=n(7437),o=n(4440),i=n.n(o),a=n(2910),s=n.n(a);t.Z=e=>{let{id:t,className:n,label:o,error:a,required:c,onChange:l,value:u}=e,p=i()(s().input,n,{error:a});return(0,r.jsxs)("div",{className:s().wrapper,children:[o&&(0,r.jsx)("label",{className:s().label,htmlFor:t,children:o}),(0,r.jsx)("input",{name:t,id:t,className:p,required:!!c&&c,value:u,onChange:l}),a&&(0,r.jsx)("span",{className:s().error,children:a})]})}},7082:function(e,t,n){"use strict";n.r(t),n.d(t,{Main:function(){return v}});var r=n(7437),o=n(2265),i=n(8306),a=n(1100),s=n(5217),c=n(7189),l=n(8997),u=n(8957),p=n(5791),f=n.n(p),d=n(4033);let h=(0,a.Pi)(e=>{let{task:t}=e,{taskStore:n}=(0,o.useContext)(i.RootStoreContext),a=(0,d.useRouter)(),[p,h]=(0,o.useState)(!1),[m,y]=(0,o.useState)(!1),[b,v]=(0,o.useState)(t.title);return(0,r.jsxs)("li",{className:f().task,children:[(0,r.jsx)("p",{className:f().wrapperBtn,children:t.title}),(0,r.jsxs)("div",{className:f().wrapperBtn,children:[(0,r.jsx)(u.Z,{typeBtn:"button",classBtn:f().btn,onClick:()=>h(!0),children:"EDIT"}),(0,r.jsx)(s.Z,{title:"Edit task",open:p,setOpen:h,children:(0,r.jsx)(c.Z,{nameBtn:"Save edited task",onSubmit:e=>{e.preventDefault(),n.editTaskAction({id:t.id,title:b,completed:t.completed}),h(!1),a.refresh()},children:(0,r.jsx)(l.Z,{id:"input",className:f().input,value:b,onChange:e=>v(e.target.value)})})}),(0,r.jsx)(u.Z,{typeBtn:"button",classBtn:f().btn,onClick:()=>y(!0),children:"DELETE"}),(0,r.jsx)(s.Z,{title:"Delete task",open:m,setOpen:y,children:(0,r.jsx)(c.Z,{nameBtn:"Delete task",onSubmit:e=>{e.preventDefault(),n.deleteTaskAction(t.id),y(!1),a.refresh()},children:(0,r.jsxs)("p",{children:['Are you sure, that want to delete "',t.title,'"?']})})})]})]})}),m=e=>{let{tasks:t}=e;return(0,r.jsx)("ul",{className:f().list,children:t.length>0?t.map(e=>(0,r.jsx)(h,{task:e},e.id)):(0,r.jsx)("li",{className:f().noTask,children:"You do not have any tasks yet"})})};var y=n(7046),b=n.n(y);let v=(0,a.Pi)(()=>{let{taskStore:e}=(0,o.useContext)(i.RootStoreContext);return(0,o.useEffect)(()=>{e.getAllTaskAction()},[e]),(0,r.jsx)("div",{className:b().main,children:(0,r.jsx)(m,{tasks:e.taskList})})})},5217:function(e,t,n){"use strict";var r=n(7437),o=n(4440),i=n.n(o),a=n(4538),s=n.n(a);t.Z=e=>{let{children:t,title:n,open:o,setOpen:a}=e;return(0,r.jsx)("div",{className:i()(s().wrapper,o?s().wrapper_open:""),children:(0,r.jsxs)("div",{className:s().popup,children:[(0,r.jsx)("button",{className:i()(s().btn,s().btn),onClick:()=>a(!1),children:"x"}),(0,r.jsxs)("div",{className:s().content,children:[(0,r.jsx)("h3",{className:s().title,children:n}),t]})]})})}},9664:function(e,t,n){"use strict";n.r(t),n.d(t,{AddTask:function(){return d}});var r=n(7437),o=n(1100),i=n(2265),a=n(4033),s=n(8306),c=n(8997),l=n(7189),u=n(5217),p=n(5791),f=n.n(p);let d=(0,o.Pi)(()=>{let{taskStore:e}=(0,i.useContext)(s.RootStoreContext),t=(0,a.useRouter)(),[n,o]=(0,i.useState)(!1),[p,d]=(0,i.useState)("");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",className:f().btn,onClick:()=>{o(!0)},children:"Add new Task   "}),(0,r.jsx)(u.Z,{title:"Add new task",open:n,setOpen:o,children:(0,r.jsx)(l.Z,{nameBtn:"Save task",onSubmit:n=>{n.preventDefault(),e.addTaskAction(p),o(!1),t.refresh()},children:(0,r.jsx)(c.Z,{id:"input",className:"{ style.input}",value:p,onChange:e=>d(e.target.value)})})})]})})},7815:function(e){e.exports={container:"Container_container__Qfhlb"}},9489:function(e){e.exports={btn:"Form_btn__Y758R"}},6350:function(e){e.exports={header:"Header_header__AF_3G",h1:"Header_h1__m1_JT"}},2910:function(e){e.exports={input:"Input_input__cDdvD"}},7046:function(e){e.exports={main:"Main_main__NTSgt"}},4538:function(e){e.exports={wrapper:"Popup_wrapper__GDs5H",wrapper_open:"Popup_wrapper_open__1XLad",popup:"Popup_popup__cpqn3",btn:"Popup_btn__Xltqx",content:"Popup_content__juy_b",title:"Popup_title__tgEK_"}},5791:function(e){e.exports={btn:"Task_btn__U8ry1",task:"Task_task__LWqMO",wrapperBtn:"Task_wrapperBtn__ETzc6",list:"Task_list__hFsor",main:"Task_main___qJQj",noTask:"Task_noTask__8Z1Ss"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(8165)}},function(e){e.O(0,[147,971,596,744],function(){return e(e.s=8838)}),_N_E=e.O()}]);