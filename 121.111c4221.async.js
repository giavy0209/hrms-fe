(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[121],{FIJb:function(e,t,a){e.exports={FilterForm:"FilterForm___1nQY8",separator:"separator___l3jQh"}},tPW0:function(e,t,a){"use strict";a.r(t);a("14J3");var n=a("BMrR"),r=(a("jCWc"),a("kPKH")),o=(a("iQDF"),a("+eQT")),l=(a("y8nQ"),a("Vl3Y")),i=a("tJVT"),c=(a("OaEy"),a("2fM7")),s=a("LvDl"),u=a("wd/R"),d=a.n(u),m=a("q1tI"),f=a.n(m),p=a("9kvl"),b=a("+n12"),v=a("8ZLX"),E=a("ajYY"),O=a("FIJb"),h=a.n(O),F=c["default"].Option,w=function(e){var t=l["a"].useForm(),a=Object(i["a"])(t,1),u=a[0],p=e.dispatch,O=e.activeTab,w=void 0===O?{}:O,y=e.filter,L=void 0===y?{}:y,j=e.onFilter,D=void 0===j?function(){}:j,I=e.jobTitleList,T=void 0===I?[]:I,g=e.locationList,J=void 0===g?[]:g;Object(m["useEffect"])((function(){p({type:"onboarding/fetchJobTitleList",payload:{}}),p({type:"onboarding/fetchLocationList",payload:{}})}),[]);var C=Object(s["debounce"])((function(e){D(e)}),700),S=function(e,t){C(Object(b["r"])(t))},_=function(e,t){var a=u.getFieldValue(t);return!!a&&e>d()(a)},k=function(e,t){var a=u.getFieldValue(t);return!!a&&e<d()(a)};Object(m["useEffect"])((function(){Object(s["isEmpty"])(L)&&u.resetFields()}),[JSON.stringify(L)]);var A=[{label:"BY POSITION",name:"title",placeholder:"Select position",optionArray:T},{label:"BY LOCATION",name:"location",placeholder:"Select location",optionArray:J}],N=Object.keys(v["b"]).filter((function(e){return![v["b"].JOINED,v["b"].OFFER_WITHDRAWN,v["b"].OFFER_REJECTED].includes(e)}));return f.a.createElement("div",{className:h.a.FilterForm},f.a.createElement(l["a"],{layout:"vertical",name:"filter",onValuesChange:S,form:u},f.a.createElement(l["a"].Item,{label:"By status",name:"processStatus"},f.a.createElement(c["default"],{showArrow:!0,showSearch:!0,filterOption:function(e,t){return t.value.toLowerCase().indexOf(e.toLowerCase())>=0},mode:"multiple",placeholder:"Select status",disabled:w.id!==v["i"].ALL,allowClear:!0},N.map((function(e){return f.a.createElement(F,{key:e,value:e},v["c"][e])})))),A.map((function(e){return f.a.createElement(l["a"].Item,{key:e.name,label:e.label,name:e.name},f.a.createElement(c["default"],{allowClear:!0,showArrow:!0,showSearch:!0,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},mode:"multiple",placeholder:e.placeholder},e.optionArray.map((function(e){return f.a.createElement(F,{key:e._id,value:e._id},e.name)}))))})),f.a.createElement(l["a"].Item,{label:"By Date Of Joining"},f.a.createElement(n["a"],null,f.a.createElement(r["a"],{span:11},f.a.createElement(l["a"].Item,{name:"fromDate"},f.a.createElement(o["a"],{format:E["b"],placeholder:"From Date",disabledDate:function(e){return _(e,"toDate")}}))),f.a.createElement(r["a"],{span:2,className:h.a.separator},f.a.createElement("span",null,"to")),f.a.createElement(r["a"],{span:11},f.a.createElement(l["a"].Item,{name:"toDate"},f.a.createElement(o["a"],{format:E["b"],placeholder:"To Date",disabledDate:function(e){return k(e,"fromDate")}})))))))};t["default"]=Object(p["a"])((function(e){var t=e.onboarding;t=void 0===t?{}:t;var a=t.searchOnboarding;a=void 0===a?{}:a;var n=a.jobTitleList,r=void 0===n?[]:n,o=a.locationList,l=void 0===o?[]:o,i=a.isFilter,c=void 0!==i&&i,s=t.onboardingOverview;s=void 0===s?{}:s;var u=s.currentStatus,d=void 0===u?"":u;return{jobTitleList:r,locationList:l,currentStatus:d,isFiltering:c}}))(w)}}]);