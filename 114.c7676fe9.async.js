(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[114],{"71b8":function(e,a,t){"use strict";t("GNNt");var n=t("wEI+"),r=(t("T2oS"),t("W9HT")),o=(t("qbNl"),t("JBPa")),c=t("oBTY"),l=(t("5Dmo"),t("3S7+")),i=t("jrin"),s=t("tJVT"),u=t("un2q"),d=t.n(u),m=t("wd/R"),_=t.n(m),f=(t("Oaa7"),t("q1tI")),v=t.n(f),p=t("9kvl"),C=t("FC4l"),b=t.n(C),g=t("tJG2"),y=t.n(g),E=t("ajYY"),T=t("uW9w"),O=t("LEHq"),j=t.n(O),D=function(){var e=[{id:T["x"].IN_PROGRESS,name:Object(p["b"])({id:"pages.timeOff.applied"})},{id:T["x"].ACCEPTED,name:Object(p["b"])({id:"pages.timeOff.approved"})},{id:T["x"].REJECTED,name:Object(p["b"])({id:"pages.timeOff.rejected"})},{id:"Holiday",name:Object(p["b"])({id:"pages.timeOff.holiday"})}];return v.a.createElement("div",{className:j.a.TypeColorTag},e.map((function(e){return v.a.createElement("div",{className:j.a.TypeColorTag__status},v.a.createElement("div",{className:j.a.dots,style:{backgroundColor:T["i"][e.id]}}),v.a.createElement("span",{className:j.a.TypeColorTag__text},e.name))})))},N=D,R=t("pa1B"),h=t.n(R),x=t("+n12"),w=T["x"].IN_PROGRESS,H=T["x"].ACCEPTED,L=T["x"].REJECTED;_.a.locale("en-gb");var J=function(e){var a=e.holidays,t=void 0===a?[]:a,u=e.leaveRequests,m=void 0===u?[]:u,p=e.currentTime,C=void 0===p?"":p,g=e.setCurrentTime,T=void 0===g?function(){}:g,O=Object(f["useState"])(!1),j=Object(s["a"])(O,2),D=j[0],R=j[1],J=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return _()(e).format(E["b"])===_()(a).format(E["b"])||t.some((function(e){return _()(e,E["d"]).format(E["b"])===_()(a).format(E["b"])}))},P=function(e){return J(e,_()())},S=function(e,a){return m.some((function(t){var n;return t.fromDate?J(t.fromDate,e)&&a===t.status:!(null===t||void 0===t||null===(n=t.listLeave)||void 0===n||!n.length)&&(J("",e,t.listLeave)&&a===t.status)}))},q=function(e){return t.some((function(a){return J(a.date.iso,e)}))},M=function(e){var a,t="";P(e)&&(t+="".concat(h.a.currentDay," "));var n=(a={},Object(i["a"])(a,w,h.a.inProgressDay),Object(i["a"])(a,H,h.a.acceptedDay),Object(i["a"])(a,L,h.a.rejectedDay),a);return Object.keys(n).forEach((function(a){S(e,a)&&(t+="".concat(n[a]," "))})),q(e)&&(t+="".concat(h.a.holiday," ")),t},Y=function(e,a,t){return e?v.a.createElement(l["default"],{title:t},a):a},k=function(e){var a=_()(e).date(),n=M(e),r=[].concat(Object(c["a"])(m.filter((function(a){var t;return a.fromDate?J(a.fromDate,e):!(null===a||void 0===a||null===(t=a.listLeave)||void 0===t||!t.length)&&J("",e,a.listLeave)}))),Object(c["a"])(t.filter((function(a){var t;return J(null===(t=a.date)||void 0===t?void 0:t.iso,e)})))),o=function(){return Object(c["a"])(new Set(r.map((function(e,a){var t=e.name||e.typeName;return a+1<r.length?"".concat(t,", "):t}))))};return Y(r.length>0,v.a.createElement("div",{className:"".concat(h.a.dateRender," ").concat(n)},v.a.createElement("span",null,a),v.a.createElement("div",{className:h.a.smallDot})),o())},G=function(e){var a=e.value,t=e.type,n=e.onChange,r=void 0===n?function(){}:n;return v.a.createElement("div",{className:h.a.customHeader},v.a.createElement("div",{className:h.a.time},_()(a).format("MMMM YYYY")),v.a.createElement("div",{className:h.a.actions},v.a.createElement("img",{src:y.a,className:h.a.prev,onClick:function(){Object(x["g"])(R),r(_()(a).subtract(1,t))},alt:""}),v.a.createElement("img",{src:b.a,className:h.a.next,onClick:function(){Object(x["g"])(R),r(_()(a).add(1,t))},alt:""})))};return v.a.createElement(n["b"],{locale:d.a},v.a.createElement("div",{className:h.a.CustomCalendar},v.a.createElement(r["a"],{spinning:D},v.a.createElement(o["a"],{dateCellRender:k,value:C,headerRender:G,onChange:function(e){return T(e)}})),v.a.createElement(N,null)))};a["a"]=Object(p["a"])((function(){return{}}))(J)},FC4l:function(e,a,t){e.exports=t.p+"static/next.e156540b.svg"},LEHq:function(e,a,t){e.exports={TypeColorTag:"TypeColorTag___O8que",dots:"dots___2fEyA",dotAll:"dotAll___O-CC6",TypeColorTag__text:"TypeColorTag__text___3mz99",TypeColorTag__top:"TypeColorTag__top___1WYHr",TypeColorTag__status:"TypeColorTag__status___pRwuH"}},N5RU:function(e,a,t){e.exports={CalendarMode:"CalendarMode___26bfW"}},"PG/t":function(e,a,t){"use strict";t.r(a);var n=t("tJVT"),r=t("wd/R"),o=t.n(r),c=t("q1tI"),l=t.n(c),i=t("71b8"),s=t("N5RU"),u=t.n(s),d=function(e){var a=e.leavingList,t=void 0===a?[]:a,r=e.allHolidayList,s=void 0===r?[]:r,d=Object(c["useState"])(o()()),m=Object(n["a"])(d,2),_=m[0],f=m[1];return l.a.createElement("div",{className:u.a.CalendarMode},l.a.createElement(i["a"],{holidays:s,leaveRequests:t,currentTime:_,setCurrentTime:f,paddingHeaderLeft:10}))};a["default"]=d},pa1B:function(e,a,t){e.exports={CustomCalendar:"CustomCalendar___2JU6N",dateRender:"dateRender___1OM1t",smallDot:"smallDot___1mOMp",customHeader:"customHeader___TloH4",time:"time___2r-u4",actions:"actions___1yCSL",currentDay:"currentDay___1wlgv",inProgressDay:"inProgressDay___2UbaT",acceptedDay:"acceptedDay___2gCf2",rejectedDay:"rejectedDay___3Luuj",holiday:"holiday___3Pmud"}},tJG2:function(e,a,t){e.exports=t.p+"static/previous.35ca1e49.svg"}}]);