(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{AygT:function(e,a,n){e.exports={formWrapper:"formWrapper___15tah",formWrapper__title:"formWrapper__title___3t8ip",formWrapper__description:"formWrapper__description___2K7rQ",keepSignIn:"keepSignIn___34mbD",forgotPasswordLink:"forgotPasswordLink___16lCb",inputPassword:"inputPassword___Hn0yF",checkbox:"checkbox___2LXV_",btnSignInGG:"btnSignInGG___2Vb6n",btnSignInLollypop:"btnSignInLollypop___1sXrP",textOr:"textOr___1MXZG",forgotPassword:"forgotPassword___16Nvp",btnSignIn:"btnSignIn___1NqKc"}},Ix2d:function(e,a,n){"use strict";n.d(a,"b",(function(){return r})),n.d(a,"a",(function(){return o}));var t=window.location.href,r=t.includes("terralogic.paxanimi.ai"),o=t.includes("terralogic.paxanimi.ai/candidate")},KCY9:function(e,a,n){},UAuE:function(e,a,n){"use strict";var t=n("q1tI"),r=n.n(t),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]},name:"eye",theme:"filled"},i=o,l=n("6VBw"),c=function(e,a){return r.a.createElement(l["a"],Object.assign({},e,{ref:a,icon:i}))};c.displayName="EyeFilled";a["a"]=r.a.forwardRef(c)},kaz8:function(e,a,n){"use strict";var t=n("rePB"),r=n("wx14"),o=n("q1tI"),i=n("TSYQ"),l=n.n(i),c=n("x1Ya"),s=n("KQm4"),u=n("ODXe"),d=n("bT9E"),p=n("H84U"),b=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n},f=o["createContext"](null),m=function(e,a){var n=e.defaultValue,i=e.children,c=e.options,m=void 0===c?[]:c,g=e.prefixCls,v=e.className,h=e.style,y=e.onChange,O=b(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),E=o["useContext"](p["b"]),k=E.getPrefixCls,x=E.direction,A=o["useState"](O.value||n||[]),w=Object(u["a"])(A,2),C=w[0],I=w[1],_=o["useState"]([]),N=Object(u["a"])(_,2),S=N[0],P=N[1];o["useEffect"]((function(){"value"in O&&I(O.value||[])}),[O.value]);var B=function(){return m.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},K=function(e){P((function(a){return a.filter((function(a){return a!==e}))}))},F=function(e){P((function(a){return[].concat(Object(s["a"])(a),[e])}))},T=function(e){var a=C.indexOf(e.value),n=Object(s["a"])(C);-1===a?n.push(e.value):n.splice(a,1),"value"in O||I(n);var t=B();null===y||void 0===y||y(n.filter((function(e){return-1!==S.indexOf(e)})).sort((function(e,a){var n=t.findIndex((function(a){return a.value===e})),r=t.findIndex((function(e){return e.value===a}));return n-r})))},U=k("checkbox",g),V="".concat(U,"-group"),L=Object(d["a"])(O,["value","disabled"]);m&&m.length>0&&(i=B().map((function(e){return o["createElement"](j,{prefixCls:U,key:e.value.toString(),disabled:"disabled"in e?e.disabled:O.disabled,value:e.value,checked:-1!==C.indexOf(e.value),onChange:e.onChange,className:"".concat(V,"-item"),style:e.style},e.label)})));var M={toggleOption:T,value:C,disabled:O.disabled,name:O.name,registerValue:F,cancelValue:K},Q=l()(V,Object(t["a"])({},"".concat(V,"-rtl"),"rtl"===x),v);return o["createElement"]("div",Object(r["a"])({className:Q,style:h},L,{ref:a}),o["createElement"](f.Provider,{value:M},i))},g=o["forwardRef"](m),v=o["memo"](g),h=n("uaoM"),y=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n},O=function(e,a){var n,i=e.prefixCls,s=e.className,u=e.children,d=e.indeterminate,b=void 0!==d&&d,m=e.style,g=e.onMouseEnter,v=e.onMouseLeave,O=e.skipGroup,E=void 0!==O&&O,j=y(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),k=o["useContext"](p["b"]),x=k.getPrefixCls,A=k.direction,w=o["useContext"](f),C=o["useRef"](j.value);o["useEffect"]((function(){null===w||void 0===w||w.registerValue(j.value),Object(h["a"])("checked"in j||!!w||!("value"in j),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),o["useEffect"]((function(){if(!E)return j.value!==C.current&&(null===w||void 0===w||w.cancelValue(C.current),null===w||void 0===w||w.registerValue(j.value)),function(){return null===w||void 0===w?void 0:w.cancelValue(j.value)}}),[j.value]);var I=x("checkbox",i),_=Object(r["a"])({},j);w&&!E&&(_.onChange=function(){j.onChange&&j.onChange.apply(j,arguments),w.toggleOption&&w.toggleOption({label:u,value:j.value})},_.name=w.name,_.checked=-1!==w.value.indexOf(j.value),_.disabled=j.disabled||w.disabled);var N=l()((n={},Object(t["a"])(n,"".concat(I,"-wrapper"),!0),Object(t["a"])(n,"".concat(I,"-rtl"),"rtl"===A),Object(t["a"])(n,"".concat(I,"-wrapper-checked"),_.checked),Object(t["a"])(n,"".concat(I,"-wrapper-disabled"),_.disabled),n),s),S=l()(Object(t["a"])({},"".concat(I,"-indeterminate"),b));return o["createElement"]("label",{className:N,style:m,onMouseEnter:g,onMouseLeave:v},o["createElement"](c["default"],Object(r["a"])({},_,{prefixCls:I,className:S,ref:a})),void 0!==u&&o["createElement"]("span",null,u))},E=o["forwardRef"](O);E.displayName="Checkbox";var j=E,k=j;k.Group=v,k.__ANT_CHECKBOX=!0;a["a"]=k},oTy4:function(e,a,n){"use strict";n.r(a);n("sRBo");var t=n("kaz8"),r=(n("5NDa"),n("5rEg")),o=n("qLMh"),i=n("9og8"),l=(n("+L6B"),n("2/Rp")),c=(n("y8nQ"),n("Vl3Y")),s=n("tJVT"),u=n("UAuE"),d=n("q1tI"),p=n.n(d),b=n("9kvl"),f=n("55Ip"),m=n("34ay"),g=n("r+yZ"),v=n.n(g),h=n("AygT"),y=n.n(h),O=n("Ix2d"),E=n("hQoX"),j=function(e){var a=e.location,n=void 0===a?{}:a,g=e.dispatch,h=e.loading,j=void 0!==h&&h,k=n.pathname,x=void 0===k?"":k,A="/candidate"===x,w=c["a"].useForm(),C=Object(s["a"])(w,1),I=C[0],_=Object(d["useState"])(!1),N=Object(s["a"])(_,2),S=N[0],P=N[1];Object(d["useEffect"])((function(){var e=new URLSearchParams(n.search),a=e.get("email");a&&I.setFieldsValue({userEmail:a}),Object(m["o"])(),b["e"].replace()}),[]);var B=function(e){g({type:"login/login",payload:e})},K=function(){g({type:"login/save",payload:{isEmailError:!1,isPasswordError:!1}})},F=function(e){var a=e.userEmail,n=e.password,t=e.keepSignIn,r={email:a,password:n,keepSignIn:t};B(r)},T=function(){return p.a.createElement(l["default"],{type:"primary",htmlType:"submit",loading:j,disabled:S,className:y.a.btnSignIn},Object(b["b"])({id:"pages.login.signIn"}))},U=function(){var e=Object(i["a"])(Object(o["a"])().mark((function e(){var a,n,t;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return P(!0),e.next=3,Object(E["a"])();case 3:a=e.sent,n=a.token,t=a.uid,n&&t&&g({type:"login/loginFirebase",payload:{accessToken:n,uid:t}}),P(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){return O["a"]?[Object(b["b"])({id:"pages.login.welcomeBack"}),Object(b["b"])({id:"pages.login.enterCredentials"})]:O["b"]?[Object(b["b"])({id:"pages.login.loginPortal"}),Object(b["b"])({id:"pages.login.enterCredentials"})]:[Object(b["b"])({id:"pages.login.signInToYourAccount"})]},L=V(O["b"],O["a"]);return p.a.createElement("div",{className:y.a.formWrapper},p.a.createElement("p",{className:y.a.formWrapper__title,style:O["b"]||O["a"]?{fontSize:"24px"}:{}},L[0]),L.length>1&&p.a.createElement("p",{className:y.a.formWrapper__description},L[1]),p.a.createElement(c["a"],{layout:"vertical",name:"basic",initialValues:{keepSignIn:!1},onFinish:F,requiredMark:!1,onValuesChange:K,form:I},p.a.createElement(c["a"].Item,{label:Object(b["b"])({id:"pages.login.emailLabel"}),name:"userEmail",validateTrigger:"onSubmit",rules:[{required:!0,message:Object(b["b"])({id:"pages.login.pleaseInputYourEmail"})},{type:"email",message:Object(b["b"])({id:"pages.login.invalidEmail"})}]},p.a.createElement(r["a"],{className:y.a.inputEmail,placeholder:Object(b["b"])({id:"pages.login.enterEmail"}),onChange:function(){return I.setFieldsValue({userEmail:(I.getFieldValue("userEmail")||"").trim()})},spellCheck:"false",disabled:S})),p.a.createElement(c["a"].Item,{label:Object(b["b"])({id:"pages.login.passwordLabel"}),name:"password",validateTrigger:"onSubmit",rules:[{required:!0,message:Object(b["b"])({id:"pages.login.pleaseInputYourPassword"})}]},p.a.createElement(r["a"].Password,{iconRender:function(e){return e?p.a.createElement(u["a"],{style:{color:"#2c6df9"}}):p.a.createElement(u["a"],null)},className:y.a.inputPassword,placeholder:Object(b["b"])({id:"pages.login.enterPassword"}),spellCheck:"false",disabled:S})),p.a.createElement("div",{className:y.a.keepSignIn},p.a.createElement(c["a"].Item,{className:y.a.checkbox,name:"keepSignIn",valuePropName:"checked"},p.a.createElement(t["a"],null,p.a.createElement("span",null,Object(b["b"])({id:"pages.login.keepMeSignedIn"}))))),p.a.createElement(c["a"].Item,{noStyle:!0,shouldUpdate:function(e,a){return e.userEmail!==a.userEmail||e.password!==a.password}},(function(e){var a=e.getFieldValue;return T(a)})),!O["a"]&&p.a.createElement(p.a.Fragment,null,O["b"]?p.a.createElement("div",{className:y.a.textOr},Object(b["b"])({id:"app.or"})):p.a.createElement("div",{className:y.a.textOr},Object(b["b"])({id:"pages.login.orSignIn"})),p.a.createElement(l["default"],{type:"primary",onClick:U,className:y.a.btnSignInGG},p.a.createElement("img",{src:v.a,alt:"logo"}),p.a.createElement("span",null,Object(b["b"])({id:"pages.login.terralogicLogin"}))),(!O["b"]||A)&&p.a.createElement(f["a"],{to:A?"/candidate/forgot-password":"/forgot-password"},p.a.createElement("p",{className:y.a.forgotPassword},Object(b["b"])({id:"pages.login.forgotPassword"}))))))};a["default"]=Object(b["a"])((function(e){var a=e.loading,n=e.login;return{loading:a.effects["login/login"],login:n}}))(j)},"r+yZ":function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJsSURBVEhLxZRNbxJRFIbZuO1P4Be4Mrrqri66NJbQnY1xgzUxqDGm0XRhDZK2piGWpqbVWAoEQ8nQUKAMHyVaA9SK1aa1ykYSUxdIKEwLQ4aP65zxjJmBkUG68EnezZx73vfec29G899hVqnHJbstfjRtzuXv3a7mLl4ghYlxpjhvzZSc9iBDh/px6b9RpDyWvHGUA8NO+jk02IQNFGi6D1s7AwuLVktWyayT4HSMz3sfbf5OL+aCRvSN4/XAMNooU3Q5KcVmXhAMoxAF9/Cn3o05E1i7BvOUmoKOLE8O2XBIi8tkMB73IoxG1RzgtuaK+Zs6mTm8FCyfjtr3jYFa9AzhXg+R0tM7gnnecLXe9ctQo36wHIEAISR2jlQCUwTeP5ZPT/3TTEYMEELe6OpYasPsqhQGTCdETcZnZQ5b+ICdqaw0oJZ+mMNSGz0F1LYfFKQB9Q+mQyy10W0ACFv4AH7H0oBa0lDFUhvdBlyxlBvYIr9k0JekmdAHG2exLMMTry7aaTbeKhiJNGDCUWGwhT/Bt8gl0TyamCXnX+nIQmo5jWVVwilWe3n6uCkNmKXYLJZ/U94aY2eiJsEcNLgy0vR+9Kv/vHiWQtWE1By0usnKn7k7veIXzaUhnh2fBZcoAuNpNTfMnSg/8/HIJNMaAhr1j3Gu95TDt7tuFPUi5YzA91vBR+Su7YcswB2rONBSTmg/2g9NSiGdpPfeIJO+z4L5whq7h3bK9BoCsm2ms3SSqP+/Ql9jWuvb5xklEyXBXdm33UFs757Afnh4PvFyT++93lAyhpMuvXPF4dTY0jv0brxPesn4WQWN5hc0/BQdA8YrvAAAAABJRU5ErkJggg=="},sRBo:function(e,a,n){"use strict";n("EFp3"),n("KCY9")},x1Ya:function(e,a,n){"use strict";n.r(a);var t=n("wx14"),r=n("rePB"),o=n("Ff2n"),i=n("VTBJ"),l=n("1OyB"),c=n("vuIU"),s=n("Ji7U"),u=n("LK+K"),d=n("q1tI"),p=n.n(d),b=n("TSYQ"),f=n.n(b),m=function(e){Object(s["a"])(n,e);var a=Object(u["a"])(n);function n(e){var t;Object(l["a"])(this,n),t=a.call(this,e),t.handleChange=function(e){var a=t.props,n=a.disabled,r=a.onChange;n||("checked"in t.props||t.setState({checked:e.target.checked}),r&&r({target:Object(i["a"])(Object(i["a"])({},t.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},t.saveInput=function(e){t.input=e};var r="checked"in e?e.checked:e.defaultChecked;return t.state={checked:r},t}return Object(c["a"])(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,a=this.props,n=a.prefixCls,i=a.className,l=a.style,c=a.name,s=a.id,u=a.type,d=a.disabled,b=a.readOnly,m=a.tabIndex,g=a.onClick,v=a.onFocus,h=a.onBlur,y=a.onKeyDown,O=a.onKeyPress,E=a.onKeyUp,j=a.autoFocus,k=a.value,x=a.required,A=Object(o["a"])(a,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(A).reduce((function(e,a){return"aria-"!==a.substr(0,5)&&"data-"!==a.substr(0,5)&&"role"!==a||(e[a]=A[a]),e}),{}),C=this.state.checked,I=f()(n,i,(e={},Object(r["a"])(e,"".concat(n,"-checked"),C),Object(r["a"])(e,"".concat(n,"-disabled"),d),e));return p.a.createElement("span",{className:I,style:l},p.a.createElement("input",Object(t["a"])({name:c,id:s,type:u,required:x,readOnly:b,disabled:d,tabIndex:m,className:"".concat(n,"-input"),checked:!!C,onClick:g,onFocus:v,onBlur:h,onKeyUp:E,onKeyDown:y,onKeyPress:O,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:k},w)),p.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return"checked"in e?Object(i["a"])(Object(i["a"])({},a),{},{checked:e.checked}):null}}]),n}(d["Component"]);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},a["default"]=m}}]);