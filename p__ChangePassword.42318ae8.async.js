(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"14J3":function(e,a,t){"use strict";t("EFp3"),t("1GLa")},BMrR:function(e,a,t){"use strict";var s=t("qrJ5");a["a"]=s["a"]},GH75:function(e,a,t){"use strict";t.r(a);t("1YHl");var s,n,r=t("VNzZ"),o=t("fWQN"),c=t("mtLc"),i=t("yKVA"),d=t("879j"),l=t("q1tI"),u=t.n(l),m=t("9kvl"),p=t("AfpS"),g=t("QxmC"),h=t("Ix2d"),w=t("kXPo"),P=t.n(w),f=(s=Object(m["a"])((function(){return{}})),s(n=function(e){Object(i["a"])(t,e);var a=Object(d["a"])(t);function t(){var e;Object(o["a"])(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return e=a.call.apply(a,[this].concat(n)),e.onFinish=function(a){var t=e.props.dispatch,s={oldPassword:a.currentPassword,newPassword:a.newPassword};t({type:"changePassword/updatePassword",payload:s})},e}return Object(c["a"])(t,[{key:"render",value:function(){return u.a.createElement(p["a"],null,u.a.createElement(r["a"],{offsetTop:42},u.a.createElement("div",{className:P.a.titlePage},u.a.createElement("p",{className:P.a.titlePage_text},Object(m["b"])({id:"pages.changePassword"})))),u.a.createElement("div",{className:P.a.ChangePassword},h["b"]?u.a.createElement("span",null,Object(m["b"])({id:"pages.changePasswordWarning"})):u.a.createElement(g["a"],{onFinish:this.onFinish})))}}]),t}(l["Component"]))||n);a["default"]=f},Ix2d:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}));var s=window.location.href,n=s.includes("terralogic.paxanimi.ai"),r=s.includes("terralogic.paxanimi.ai/candidate")},QxmC:function(e,a,t){"use strict";t("14J3");var s,n,r,o,c=t("BMrR"),i=(t("jCWc"),t("kPKH")),d=(t("y8nQ"),t("Vl3Y")),l=(t("5NDa"),t("5rEg")),u=(t("5Dmo"),t("3S7+")),m=t("fWQN"),p=t("mtLc"),g=t("yKVA"),h=t("879j"),w=t("aIfO"),P=t("q1tI"),f=t.n(P),b=t("9kvl"),v=t("uj/i"),_=t.n(v),E=t("f9Dp"),j=t.n(E),C=t("k6th"),O=["Use a minimum of 8 characters.","Avoid common words and repetition (eg. password, 12121212)","At least one letter, one number and special character!"],y=(s=Object(b["a"])((function(e){var a=e.loading,t=e.changePassword.statusChangePassword,s=void 0!==t&&t;return{statusChangePassword:s,loading:a.effects["changePassword/updatePassword"]}})),n=Reflect.metadata("design:type",Function),r=Reflect.metadata("design:paramtypes",[void 0]),s(o=n(o=r(o=function(e){Object(g["a"])(t,e);var a=Object(h["a"])(t);function t(e){var s;return Object(m["a"])(this,t),s=a.call(this,e),s._renderButton=function(e){var a=s.props.loading,t=e("newPassword"),n=e("confirmPassword");return f.a.createElement(C["a"],{type:"primary",htmlType:"submit",loading:a,disabled:!t||!n||t!==n,style:{width:"100%"}},Object(b["b"])({id:"pages.changePassword"}))},s.handleLogout=function(){var e=s.props.dispatch;e&&e({type:"login/logout"})},s.formRef=f.a.createRef(),s}return Object(p["a"])(t,[{key:"componentDidUpdate",value:function(){var e=this,a=this.props,t=a.statusChangePassword,s=a.dispatch;!0===t&&(s({type:"changePassword/save",payload:{statusChangePassword:!1}}),setTimeout((function(){e.formRef.current.resetFields()}),500))}},{key:"render",value:function(){var e=this,a=this.props,t=a.onFinish,s=void 0===t?function(){}:t,n=a.showOption,r=void 0!==n&&n;return f.a.createElement("div",{className:j.a.ChangePasswordBox},f.a.createElement(d["a"],{className:j.a.changePassword__form,layout:"vertical",name:"basic",ref:this.formRef,onFinish:s,requiredMark:!1},f.a.createElement("div",{className:j.a.container},f.a.createElement("div",{className:j.a.header},f.a.createElement("span",{className:j.a.title},Object(b["b"])({id:"component.ChangePasswordBox.changePass"})),r&&f.a.createElement(u["default"],{title:Object(b["b"])({id:"app.logout"})},f.a.createElement(w["a"],{onClick:this.handleLogout,className:j.a.icon,style:{marginLeft:"24px"}}))),f.a.createElement("p",{className:j.a.description},Object(b["b"])({id:"component.ChangePasswordBox.createAccount"})),f.a.createElement("div",{className:j.a.titleAndDescription},O.map((function(e){return f.a.createElement("div",{key:e,style:{marginBottom:"12px"}},f.a.createElement("img",{src:_.a,alt:"",style:{color:"#13A951",marginRight:"10px"}}),f.a.createElement("span",{className:j.a.description},e))}))),f.a.createElement(c["a"],{className:j.a.passwordContainer,gutter:["12","12"]},f.a.createElement(i["a"],{span:24},f.a.createElement(d["a"].Item,{label:Object(b["b"])({id:"pages.changePassword.currentPassword"}),name:"currentPassword",rules:[{required:!0,message:Object(b["b"])({id:"pages.changePassword.requiredCurrentPassword"})}]},f.a.createElement(l["a"].Password,{className:j.a.inputPassword}))),f.a.createElement(i["a"],null)),f.a.createElement(c["a"],{justify:"space-between",className:j.a.passwordContainer,gutter:["12","12"]},f.a.createElement(i["a"],{span:24},f.a.createElement(d["a"].Item,{label:Object(b["b"])({id:"pages.changePassword.newPassword"}),name:"newPassword",rules:[{required:!0,message:Object(b["b"])({id:"pages.changePassword.requiredNewPassword"})},{min:8,message:Object(b["b"])({id:"pages.changePassword.rules.characters"})},{pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&(){}^<>|;'"-+=])[A-Za-z\d@$!%*#?&(){}^<>|;'"-+=]{0,}$/,message:Object(b["b"])({id:"pages.changePassword.rules.patterns"})}]},f.a.createElement(l["a"].Password,{className:j.a.inputPassword}))),f.a.createElement(i["a"],{span:24},f.a.createElement(d["a"].Item,{label:Object(b["b"])({id:"pages.changePassword.confirmPassword"}),name:"confirmPassword",rules:[{required:!0,message:Object(b["b"])({id:"pages.changePassword.requiredCfmPassword"})},{min:8,message:Object(b["b"])({id:"pages.changePassword.rules.characters"})},{pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&(){}^<>|;'"-+=])[A-Za-z\d@$!%*#?&(){}^<>|;'"-+=]{0,}$/,message:Object(b["b"])({id:"pages.changePassword.rules.patterns"})},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("newPassword")!==t?Promise.reject(new Error(Object(b["b"])({id:"pages.changePassword.rules.passMatch"}))):Promise.resolve()}}}]},f.a.createElement(l["a"].Password,{className:j.a.inputPassword})))),f.a.createElement("div",{className:j.a.changePasswordButton},f.a.createElement(d["a"].Item,{noStyle:!0,shouldUpdate:function(e,a){return e!==a}},(function(a){var t=a.getFieldValue;return e._renderButton(t)}))))))}}]),t}(P["PureComponent"]))||o)||o)||o);a["a"]=y},Wjgv:function(e,a,t){e.exports={CustomPrimaryButton:"CustomPrimaryButton___1PBpv"}},aIfO:function(e,a,t){"use strict";var s=t("q1tI"),n=t.n(s),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"logout",theme:"outlined"},o=r,c=t("6VBw"),i=function(e,a){return n.a.createElement(c["a"],Object.assign({},e,{ref:a,icon:o}))};i.displayName="LogoutOutlined";a["a"]=n.a.forwardRef(i)},f9Dp:function(e,a,t){e.exports={ChangePasswordBox:"ChangePasswordBox___Lkio8",header:"header___1yop4",title:"title___1WZDl",icon:"icon___h8h3a",description:"description___3APdg",changePassword__form:"changePassword__form___IzRIo",container:"container___2lRzx",titleAndDescription:"titleAndDescription___3sWwV",passwordContainer:"passwordContainer___PY3ac",changePasswordButton:"changePasswordButton___1ENPF"}},jCWc:function(e,a,t){"use strict";t("EFp3"),t("1GLa")},k6th:function(e,a,t){"use strict";t("+L6B");var s=t("2/Rp"),n=t("0Owb"),r=t("PpiC"),o=t("q1tI"),c=t.n(o),i=t("Wjgv"),d=t.n(i),l=["children","width","height","backgroundColor","shape"],u=function(e){var a=e.children,t=e.width,o=void 0===t?"":t,i=e.height,u=void 0===i?42:i,m=e.backgroundColor,p=void 0===m?"#ffa100":m,g=e.shape,h=void 0===g?"circle":g,w=Object(r["a"])(e,l);return c.a.createElement(s["default"],Object(n["a"])({},w,{className:d.a.CustomPrimaryButton,style:{height:u,backgroundColor:p,width:o,borderRadius:"square"===h?5:25}}),a)};a["a"]=u},kPKH:function(e,a,t){"use strict";var s=t("/kpp");a["a"]=s["a"]},kXPo:function(e,a,t){e.exports={titlePage:"titlePage___2Gqhu",titlePage_text:"titlePage_text___22kN6",ChangePassword:"ChangePassword___2KYoV"}},"uj/i":function(e,a,t){e.exports=t.p+"static/changePasswordCheck.83f8c46e.svg"}}]);