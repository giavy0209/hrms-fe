(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{"5qkN":function(e,t,a){"use strict";a.r(t);a("+L6B");var n,l,i,o,c=a("2/Rp"),r=(a("7Kak"),a("9yH6")),s=(a("5NDa"),a("5rEg")),d=(a("OaEy"),a("2fM7")),u=a("qLMh"),m=a("9og8"),b=a("oBTY"),p=a("jrin"),_=a("k1fw"),f=a("fWQN"),v=a("mtLc"),C=a("yKVA"),h=a("879j"),F=a("q1tI"),O=a.n(F),x=a("9kvl"),g=a("AfpS"),E=a("9hbo"),y=a.n(E),S=a("Sk1C"),j=a.n(S),k=a("G3L7"),N=a.n(k),w=(n=Object(x["a"])((function(e){var t=e.loading,a=e.employee;a=void 0===a?{}:a;var n=a.department,l=void 0===n?[]:n,i=e.employeeProfile;i=void 0===i?{}:i;var o=i.listSkill;return{loading:t.effects["custormField/addSection"],department:l,listSkill:o}})),l=Reflect.metadata("design:type",Function),i=Reflect.metadata("design:paramtypes",[void 0]),n(o=l(o=i(o=function(e){Object(C["a"])(a,e);var t=Object(h["a"])(a);function a(e){var n;return Object(f["a"])(this,a),n=t.call(this,e),n.handleChange=function(e,t){var a=n.state.data,l=t.target.value;if("name"===e){var i=a;n.setState({data:Object(_["a"])(Object(_["a"])({},i),{},Object(p["a"])({},e,l))})}if("sensitive"===e||"applicant"===e||"onboardingComplete"===e||"visibleToIndividual"===e||"visibileToManager"===e){var o=a,c=o.settings;n.setState({data:Object(_["a"])(Object(_["a"])({},o),{},{settings:Object(_["a"])(Object(_["a"])({},c),{},Object(p["a"])({},e,l))})})}n.setState({name:l})},n.onClickChange=function(e){n.setState({itemField:e})},n.handleChangeFilter=function(e,t,a){var l=n.state.data,i=l.filters,o=i[e],c=Object(_["a"])(Object(_["a"])({},o),{},Object(p["a"])({},t,a)),r=Object(b["a"])(i);r.splice(e,1,c),n.setState({data:Object(_["a"])(Object(_["a"])({},l),{},{filters:r})})},n.handClick=function(){var e=Object(m["a"])(Object(u["a"])().mark((function e(t){var a;return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.props.dispatch,e.next=3,a({type:"custormField/addSection",payload:t}).then((function(e){"Add item successfully"===e&&x["e"].push("/onboarding/")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handClickCancel=function(){x["e"].push("/onboarding/")},n.state={name:"",itemField:"all",dataFilter:[{}],data:{name:"",settings:{},filters:[]}},n}return Object(v["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"employee/fetchDepartment"}),e({type:"employeeProfile/fetchListSkill"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.itemField,l=t.dataFilter,i=t.data,o=this.props,u=o.department,m=o.listSkill,b=o.loading,p=d["default"].Option;return O.a.createElement(g["a"],null,O.a.createElement("div",{className:N.a.CreateACustomFieldSection},O.a.createElement("div",{className:N.a.Title},O.a.createElement("img",{src:y.a,alt:"not Found"}),O.a.createElement("h2",null,Object(x["b"])({id:"pages.OnboardingCustomField.createACustomFieldSection"}))),O.a.createElement("div",{className:N.a.boxFieldSection1},O.a.createElement("p",{className:N.a.boxFieldSection1__Title},Object(x["b"])({id:"pages.OnboardingCustomField.CreateCustomFieldSection"})),O.a.createElement(s["a"],{onChange:function(t){return e.handleChange("name",t)}})),O.a.createElement("div",{className:N.a.boxFieldSection2},O.a.createElement("div",{className:N.a.boxFieldSection2__Title},O.a.createElement("p",null,Object(x["b"])({id:"pages.OnboardingCustomField.fillingOutTheFields"}))),O.a.createElement("div",{className:N.a.boxFieldSection2__Content},O.a.createElement("div",{className:N.a.boxFieldSection2__Content1},O.a.createElement("span",{className:N.a.boxFieldSection2__Content1__Text},Object(x["b"])({id:"pages.OnboardingCustomField.text2"})),O.a.createElement("div",{className:N.a.boxFieldSection2__Content1__Radio},O.a.createElement(r["a"].Group,{defaultValue:"true",onChange:function(t){return e.handleChange("sensitive",t)}},O.a.createElement(r["a"],{value:"true"},"Yes"),O.a.createElement(r["a"],{value:"false"},"No")))),O.a.createElement("div",{className:N.a.boxFieldSection2__Content1},O.a.createElement("span",{className:N.a.boxFieldSection2__Content1__Text1},Object(x["b"])({id:"pages.OnboardingCustomField.whoWillFillOutThisField"})),O.a.createElement("div",{className:N.a.boxFieldSection2__Content1__Radio},O.a.createElement(r["a"].Group,{defaultValue:"EMPLOYEE",onChange:function(t){return e.handleChange("applicant",t)}},O.a.createElement(r["a"],{value:"EMPLOYEE"},"Employee"),O.a.createElement(r["a"],{value:"EMPLOYER"},"Employer")))),O.a.createElement("div",{className:N.a.boxFieldSection2__Content1},O.a.createElement("span",{className:N.a.boxFieldSection2__Content1__Text1},Object(x["b"])({id:"pages.OnboardingCustomField.completedDuringOnboarding"})),O.a.createElement("div",{className:N.a.boxFieldSection2__Content1__Radio},O.a.createElement(r["a"].Group,{defaultValue:"true",onChange:function(t){return e.handleChange("onboardingComplete",t)}},O.a.createElement(r["a"],{value:"true"},"Yes"),O.a.createElement(r["a"],{value:"false"},"No")))),O.a.createElement("div",{className:N.a.boxFieldSection2__Content1},O.a.createElement("span",{className:N.a.boxFieldSection2__Content1__Text1},Object(x["b"])({id:"pages.OnboardingCustomField.shouldTheIndividual"})),O.a.createElement("div",{className:N.a.boxFieldSection2__Content1__Radio},O.a.createElement(r["a"].Group,{defaultValue:"true",onChange:function(t){return e.handleChange("visibleToIndividual",t)}},O.a.createElement(r["a"],{value:"true"},"Yes"),O.a.createElement(r["a"],{value:"false"},"No")))),O.a.createElement("div",{className:N.a.boxFieldSection2__Content1},O.a.createElement("span",{className:N.a.boxFieldSection2__Content1__Text1},Object(x["b"])({id:"pages.OnboardingCustomField.shouldTheIndividualManager"})),O.a.createElement("div",{className:N.a.boxFieldSection2__Content1__Radio},O.a.createElement(r["a"].Group,{defaultValue:"true",onChange:function(t){return e.handleChange("visibileToManager",t)}},O.a.createElement(r["a"],{value:"true"},"Yes"),O.a.createElement(r["a"],{value:"false"},"No")))))),O.a.createElement("div",{className:N.a.boxFieldSection2},O.a.createElement("div",{className:N.a.boxFieldSection2__Title},O.a.createElement("p",null,Object(x["b"])({id:"pages.OnboardingCustomField.Filters"}))),O.a.createElement("div",{className:N.a.boxFieldSection2__Content},O.a.createElement("div",{className:N.a.boxFieldSection2__Content1},O.a.createElement("span",{className:N.a.boxFieldSection2__Content1__Text},Object(x["b"])({id:"pages.OnboardingCustomField.text3"})),O.a.createElement("div",{className:N.a.boxFieldSection2__Content1__Radio,onChange:function(t){return e.handleChange("filter",t)}},O.a.createElement(r["a"].Group,{name:a,defaultValue:"everyone"},O.a.createElement(r["a"],{name:"everyone",value:"everyone"},"Everyone"),O.a.createElement(r["a"],{name:"certain people only",value:"certain people only"},"Certain people only")),"certain people only"===a?O.a.createElement(O.a.Fragment,null,O.a.createElement("div",{className:N.a.switchField},O.a.createElement("div",{className:"".concat("all"===n?N.a.itemField1Active:N.a.itemField1),onClick:function(){return e.onClickChange("all")}},"All of this"),O.a.createElement("div",{className:"".concat("any"===n?N.a.itemField1Active:N.a.itemField1),onClick:function(){return e.onClickChange("any")}},"Any of this")),l.map((function(t,a){return O.a.createElement("div",{key:"data".concat(a+1)},O.a.createElement("div",{className:N.a.selectFilter},O.a.createElement(d["default"],{className:N.a.selectFilter1,allowClear:!0,onChange:function(t){return e.handleChangeFilter(a,"department",t)}},u.map((function(e){return O.a.createElement(p,{value:e._id,key:e._id},e.name)}))),O.a.createElement(d["default"],{defaultValue:"is",className:N.a.selectFilter2,allowClear:!0},O.a.createElement(p,{value:"is"},"is")),O.a.createElement(d["default"],{className:N.a.selectFilter3,allowClear:!0,onChange:function(t){return e.handleChangeFilter(a,"title",t)}},m.map((function(e){return O.a.createElement(p,{value:e._id,key:e._id},e.name)}))),O.a.createElement("img",{src:j.a,alt:"not found"})),O.a.createElement("div",{className:N.a.line}))}))):"")))),O.a.createElement("div",{className:N.a.buttonFooter},O.a.createElement(c["default"],{className:N.a.buttonFooterSave,onClick:function(){return e.handClick(i)},loading:b},Object(x["b"])({id:"pages.OnboardingCustomField.Save&Return"})),O.a.createElement(c["default"],{className:N.a.buttonFooterCancel,onClick:this.handClickCancel},Object(x["b"])({id:"pages.OnboardingCustomField.Cancel"})))))}}]),a}(F["PureComponent"]))||o)||o)||o);t["default"]=w},"7Kak":function(e,t,a){"use strict";a("EFp3"),a("KPFz")},"9hbo":function(e,t,a){e.exports=a.p+"static/createFieldArrow.f788d21f.svg"},"9yH6":function(e,t,a){"use strict";var n=a("oOh1"),l=a("SiX+"),i=a("KNH7"),o=n["a"];o.Button=i["a"],o.Group=l["a"],t["a"]=o},G3L7:function(e,t,a){e.exports={CreateACustomFieldSection:"CreateACustomFieldSection___2ui53",Title:"Title___2Foti",boxFieldSection1:"boxFieldSection1___fVoOM",boxFieldSection1__Title:"boxFieldSection1__Title___2icB8",boxFieldSection2:"boxFieldSection2___1MzIX",boxFieldSection2__Title:"boxFieldSection2__Title___2BGSW",boxFieldSection2__Content:"boxFieldSection2__Content___3Fde_",boxFieldSection2__Content1:"boxFieldSection2__Content1___2a42j",boxFieldSection2__Content1__Text:"boxFieldSection2__Content1__Text___22Vp6",boxFieldSection2__Content1__Text1:"boxFieldSection2__Content1__Text1___1iK-6",boxFieldSection2__Content1__Radio:"boxFieldSection2__Content1__Radio___3yycQ",buttonFooter:"buttonFooter___3s-TU",buttonFooterSave:"buttonFooterSave___QDeur",buttonFooterCancel:"buttonFooterCancel___1WDfW",switchField:"switchField___2pJij",itemField1:"itemField1___pb4TE",itemField1Active:"itemField1Active____m70u",selectFilter:"selectFilter___OguoI",selectFilter1:"selectFilter1___3iEz0",selectFilter2:"selectFilter2___2Ru6_",selectFilter3:"selectFilter3___1NunS",line:"line___30-Pf"}},KNH7:function(e,t,a){"use strict";var n=a("wx14"),l=a("q1tI"),i=a("oOh1"),o=a("H84U"),c=a("xCex"),r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},s=function(e,t){var a=l["useContext"](c["b"]),s=l["useContext"](o["b"]),d=s.getPrefixCls,u=e.prefixCls,m=r(e,["prefixCls"]),b=d("radio-button",u);return a&&(m.checked=e.value===a.value,m.disabled=e.disabled||a.disabled),l["createElement"](i["a"],Object(n["a"])({prefixCls:b},m,{type:"radio",ref:t}))};t["a"]=l["forwardRef"](s)},KPFz:function(e,t,a){},"SiX+":function(e,t,a){"use strict";var n=a("wx14"),l=a("rePB"),i=a("ODXe"),o=a("q1tI"),c=a("TSYQ"),r=a.n(c),s=a("6cGi"),d=a("oOh1"),u=a("H84U"),m=a("3Nzz"),b=a("xCex"),p=a("RqAY"),_=o["forwardRef"]((function(e,t){var a=o["useContext"](u["b"]),c=a.getPrefixCls,_=a.direction,f=o["useContext"](m["b"]),v=Object(s["a"])(e.defaultValue,{value:e.value}),C=Object(i["a"])(v,2),h=C[0],F=C[1],O=function(t){var a=h,n=t.target.value;"value"in e||F(n);var l=e.onChange;l&&n!==a&&l(t)},x=function(){var a,i=e.prefixCls,s=e.className,u=void 0===s?"":s,m=e.options,b=e.optionType,v=e.buttonStyle,C=void 0===v?"outline":v,F=e.disabled,O=e.children,x=e.size,g=e.style,E=e.id,y=e.onMouseEnter,S=e.onMouseLeave,j=c("radio",i),k="".concat(j,"-group"),N=O;if(m&&m.length>0){var w="button"===b?"".concat(j,"-button"):j;N=m.map((function(e){return"string"===typeof e?o["createElement"](d["a"],{key:e,prefixCls:w,disabled:F,value:e,checked:h===e},e):o["createElement"](d["a"],{key:"radio-group-value-options-".concat(e.value),prefixCls:w,disabled:e.disabled||F,value:e.value,checked:h===e.value,style:e.style},e.label)}))}var T=x||f,P=r()(k,"".concat(k,"-").concat(C),(a={},Object(l["a"])(a,"".concat(k,"-").concat(T),T),Object(l["a"])(a,"".concat(k,"-rtl"),"rtl"===_),a),u);return o["createElement"]("div",Object(n["a"])({},Object(p["a"])(e),{className:P,style:g,onMouseEnter:y,onMouseLeave:S,id:E,ref:t}),N)};return o["createElement"](b["a"],{value:{onChange:O,value:h,disabled:e.disabled,name:e.name}},x())}));t["a"]=o["memo"](_)},Sk1C:function(e,t,a){e.exports=a.p+"static/iconCancelCustomField.4f36ba2c.svg"},oOh1:function(e,t,a){"use strict";var n=a("rePB"),l=a("wx14"),i=a("q1tI"),o=a("x1Ya"),c=a("TSYQ"),r=a.n(c),s=a("c+Xe"),d=a("H84U"),u=a("xCex"),m=a("uaoM"),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},p=function(e,t){var a,c=i["useContext"](u["b"]),p=i["useContext"](d["b"]),_=p.getPrefixCls,f=p.direction,v=i["useRef"](),C=Object(s["a"])(t,v);i["useEffect"]((function(){Object(m["a"])(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var h=function(t){var a,n;null===(a=e.onChange)||void 0===a||a.call(e,t),null===(n=null===c||void 0===c?void 0:c.onChange)||void 0===n||n.call(c,t)},F=e.prefixCls,O=e.className,x=e.children,g=e.style,E=b(e,["prefixCls","className","children","style"]),y=_("radio",F),S=Object(l["a"])({},E);c&&(S.name=c.name,S.onChange=h,S.checked=e.value===c.value,S.disabled=e.disabled||c.disabled);var j=r()("".concat(y,"-wrapper"),(a={},Object(n["a"])(a,"".concat(y,"-wrapper-checked"),S.checked),Object(n["a"])(a,"".concat(y,"-wrapper-disabled"),S.disabled),Object(n["a"])(a,"".concat(y,"-wrapper-rtl"),"rtl"===f),a),O);return i["createElement"]("label",{className:j,style:g,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i["createElement"](o["default"],Object(l["a"])({},S,{type:"radio",prefixCls:y,ref:C})),void 0!==x?i["createElement"]("span",null,x):null)},_=i["forwardRef"](p);_.displayName="Radio",t["a"]=_},x1Ya:function(e,t,a){"use strict";a.r(t);var n=a("wx14"),l=a("rePB"),i=a("Ff2n"),o=a("VTBJ"),c=a("1OyB"),r=a("vuIU"),s=a("Ji7U"),d=a("LK+K"),u=a("q1tI"),m=a.n(u),b=a("TSYQ"),p=a.n(b),_=function(e){Object(s["a"])(a,e);var t=Object(d["a"])(a);function a(e){var n;Object(c["a"])(this,a),n=t.call(this,e),n.handleChange=function(e){var t=n.props,a=t.disabled,l=t.onChange;a||("checked"in n.props||n.setState({checked:e.target.checked}),l&&l({target:Object(o["a"])(Object(o["a"])({},n.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},n.saveInput=function(e){n.input=e};var l="checked"in e?e.checked:e.defaultChecked;return n.state={checked:l},n}return Object(r["a"])(a,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,o=t.className,c=t.style,r=t.name,s=t.id,d=t.type,u=t.disabled,b=t.readOnly,_=t.tabIndex,f=t.onClick,v=t.onFocus,C=t.onBlur,h=t.onKeyDown,F=t.onKeyPress,O=t.onKeyUp,x=t.autoFocus,g=t.value,E=t.required,y=Object(i["a"])(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),S=Object.keys(y).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=y[t]),e}),{}),j=this.state.checked,k=p()(a,o,(e={},Object(l["a"])(e,"".concat(a,"-checked"),j),Object(l["a"])(e,"".concat(a,"-disabled"),u),e));return m.a.createElement("span",{className:k,style:c},m.a.createElement("input",Object(n["a"])({name:r,id:s,type:d,required:E,readOnly:b,disabled:u,tabIndex:_,className:"".concat(a,"-input"),checked:!!j,onClick:f,onFocus:v,onBlur:C,onKeyUp:O,onKeyDown:h,onKeyPress:F,onChange:this.handleChange,autoFocus:x,ref:this.saveInput,value:g},S)),m.a.createElement("span",{className:"".concat(a,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(o["a"])(Object(o["a"])({},t),{},{checked:e.checked}):null}}]),a}(u["Component"]);_.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t["default"]=_},xCex:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=n["createContext"](null),i=l.Provider;t["b"]=l}}]);