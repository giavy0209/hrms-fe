(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{Iwko:function(e,a,n){e.exports={DropdownSearch:"DropdownSearch___aPCZm",searchContainer:"searchContainer___1uIYJ",listEmployee:"listEmployee___1SUNe",employee:"employee___42aHp",emptyContainer:"emptyContainer___1WMTo"}},d7qg:function(e,a,n){"use strict";n.r(a);n("T2oS");var t=n("W9HT"),l=(n("R9oj"),n("ECub")),o=(n("14J3"),n("BMrR")),r=(n("jCWc"),n("kPKH")),i=n("9kvl"),c=n("q1tI"),m=n.n(c),d=n("p8kl"),s=n("Iwko"),p=n.n(s),u=function(e){var a=e.onChangeSearch,n=void 0===a?function(){}:a,c=e.employeeFilterList,s=void 0===c?[]:c,u=e.handleSelectChange,v=void 0===u?function(){}:u,_=e.loading,E=void 0!==_&&_;return m.a.createElement("div",{className:p.a.DropdownSearch},m.a.createElement("div",{className:p.a.searchContainer},m.a.createElement(d["a"],{onSearch:n,borderRadius:6,placeholder:Object(i["b"])({id:"pages.ticketManagement.byNamePlaceHolder"})})),m.a.createElement(t["a"],{spinning:E},m.a.createElement("div",{className:p.a.listEmployee},s.length>0?m.a.createElement(o["a"],null,s.map((function(e){var a;return m.a.createElement(r["a"],{span:24},m.a.createElement("div",{className:p.a.employee,onClick:function(){var a;return v(e._id,null===(a=e.generalInfo)||void 0===a?void 0:a.legalName)}},m.a.createElement("span",null,null===(a=e.generalInfo)||void 0===a?void 0:a.legalName)))}))):m.a.createElement("div",{className:p.a.emptyContainer},m.a.createElement(l["a"],null)))))};a["default"]=u}}]);