(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[115],{HDyT:function(e,t,a){"use strict";a.r(t);a("T2oS");var n=a("W9HT"),i=a("jrin"),r=a("k1fw"),c=a("oBTY"),o=a("tJVT"),l=a("LvDl"),u=a("q1tI"),s=a.n(u),m=a("ps87"),f=a("t7U6"),p=a("y9N3"),d=a("J+eN"),v=a("b+jq"),h=a("nJDY"),E=a("Yjvw"),b=a("2Ovm"),g=a("lEKu"),O=a("9kvl"),y=a("92R3"),j=a("uuFz"),T=a.n(j),w=a("an34"),x=a("XKZL"),S=a.n(x),_=function(e){var t=e.dispatch,a=e.timeOff;a=void 0===a?{}:a;var j=a.previousStatistic,x=void 0===j?[]:j,_=e.loadingFetch,F=void 0!==_&&_,k=Object(u["useState"])([]),L=Object(o["a"])(k,2),N=L[0],z=L[1],C=Object(u["useState"])([]),J=Object(o["a"])(C,2),K=J[0],R=J[1];Object(u["useEffect"])((function(){t({type:"timeOff/fetchPreviousStatistic"})}),[]),Object(u["useEffect"])((function(){if(!Object(l["isEmpty"])(x)){var e=[],t=x.map((function(t){var a;e=[].concat(Object(c["a"])(e),Object(c["a"])(t.types.map((function(e){return e.leaveType}))));var n=null===(a=t.types)||void 0===a?void 0:a.reduce((function(e,t){return Object(r["a"])(Object(r["a"])({},e),{},Object(i["a"])({},t.leaveType,t.total))}),{});return Object(r["a"])({month:t.month,monthStr:y["r"][t.month]},n)}));z(t),R(Object(c["a"])(new Set(e)))}}),[JSON.stringify(x)]);var D=function(e){var t=e.payload;return s.a.createElement("div",{className:S.a.tooltipContainer},null===t||void 0===t?void 0:t.map((function(e){return s.a.createElement("span",null,e.name,": ",e.value)})))},X=["#2C6DF9","#BF80FF","#F7B688"];return s.a.createElement(w["a"],{title:Object(O["b"])({id:"pages.timeOff.yourTimeOffActivities"}),icon:T.a},s.a.createElement(n["a"],{spinning:F},s.a.createElement(m["a"],{width:"100%",height:300},s.a.createElement(f["a"],{width:"100%",height:324,data:N,margin:{left:-35},barSize:32},s.a.createElement(p["a"],{vertical:!1,strokeDasharray:"3 3"}),s.a.createElement(d["a"],{dataKey:"monthStr",axisLine:!1}),s.a.createElement(v["a"],{axisLine:!1}),s.a.createElement(h["a"],{wrapperStyle:{background:"#1A1A46",borderRadius:"4px",padding:"16px"},content:s.a.createElement(D,null),cursor:!1}),s.a.createElement(E["a"],{iconType:"circle",iconSize:8,layout:"horizontal",formatter:function(e){return s.a.createElement("span",{className:S.a.legendText},e)}}),K.map((function(e,t){return s.a.createElement(b["a"],{dataKey:e,stackId:"a",fill:X[t%X.length],legendType:"circle",shape:function(e){var a=Object.keys(e.payload).length-2;return a-1===t&&(e.radius=[4,4,0,0]),s.a.createElement(g["a"],e)}})}))))))};t["default"]=Object(O["a"])((function(e){var t=e.user,a=e.timeOff,n=e.loading;return{user:t,timeOff:a,loadingFetch:n.effects["timeOff/fetchPreviousStatistic"]}}))(_)},XKZL:function(e,t,a){e.exports={tooltipContainer:"tooltipContainer___LiRqN"}},an34:function(e,t,a){"use strict";a("DYRE");var n=a("zeV3"),i=(a("tU7J"),a("wFql")),r=a("q1tI"),c=a.n(r),o=a("luuX"),l=a.n(o),u=a("kKYX"),s=a.n(u),m=function(e){var t=e.title,a=void 0===t?"":t,r=e.icon,o=void 0===r?"":r,u=e.children;return c.a.createElement("div",{className:s.a.RightComponentLayout},c.a.createElement(n["b"],{className:s.a.header,style:{marginBottom:"24px"},size:"middle"},c.a.createElement("div",null,c.a.createElement("img",{src:o||l.a,alt:"lightning icon"})),c.a.createElement(i["a"].Title,{level:5,className:s.a.titleText},a)),c.a.createElement("div",null,u))};t["a"]=m},kKYX:function(e,t,a){e.exports={RightComponentLayout:"RightComponentLayout___2aPxS",header:"header___mmFtE",titleText:"titleText___wQtby"}},luuX:function(e,t,a){e.exports=a.p+"static/lightning.24aa12ec.svg"},uuFz:function(e,t,a){e.exports=a.p+"static/ic_chart.0560f701.svg"}}]);