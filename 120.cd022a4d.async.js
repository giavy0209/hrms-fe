(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[120],{OBtT:function(e,t,a){"use strict";a.r(t);a("14J3");var l=a("BMrR"),r=(a("jCWc"),a("kPKH")),o=(a("giR+"),a("fyUT")),n=(a("OaEy"),a("2fM7")),i=a("k1fw"),c=(a("y8nQ"),a("Vl3Y")),d=a("tJVT"),m=a("LvDl"),p=a("q1tI"),s=a.n(p),u=a("9kvl"),f=a("x5Y5"),b=a("udZa"),y=a.n(b),h=a("+n12"),O=function(e){var t=c["a"].useForm(),a=Object(d["a"])(t,1),b=a[0],O=e.dispatch,v=e.employee;v=void 0===v?{}:v;var w=v.departmentList,E=void 0===w?[]:w,j=v.divisionList,C=void 0===j?[]:j,F=v.filterList;F=void 0===F?{}:F;var L=F.listCountry,I=void 0===L?[]:L,g=F.listEmployeeType,T=void 0===g?[]:g,x=F.listTitle,k=void 0===x?[]:x,_=v.listSkill,S=void 0===_?[]:_,A=v.filter;A=void 0===A?{}:A;var N=A.ids,V=void 0===N?[]:N,D=A.departments,J=void 0===D?[]:D,M=A.divisions,R=void 0===M?[]:M,P=A.countries,B=void 0===P?[]:P,W=A.locations,Y=void 0===W?[]:W,Z=A.titles,q=void 0===Z?[]:Z,z=A.reportingManager,G=A.employeeTypes,H=void 0===G?[]:G,K=A.empTypeOthers,Q=void 0===K?[]:K,U=A.skills,X=void 0===U?[]:U,$=A.fromExp,ee=A.toExp,te=v.filter,ae=void 0===te?{}:te,le=e.activeTab,re=void 0===le?"":le,oe=e.companyLocationList,ne=void 0===oe?[]:oe,ie=Object(p["useState"])([]),ce=Object(d["a"])(ie,2),de=ce[0],me=ce[1],pe=function(){var e=I.map((function(e){var t,a;return{id:null===(t=e.country)||void 0===t?void 0:t._id,country:null===(a=e.country)||void 0===a?void 0:a.name}}));e=e.filter((function(e,t,a){return a.findIndex((function(t){return t.id===e.id}))===t})),me(e)};Object(p["useEffect"])((function(){pe()}),[JSON.stringify(I)]),Object(p["useEffect"])((function(){Object(m["isEmpty"])(ae)&&b.resetFields(),b.setFieldsValue(Object(i["a"])(Object(i["a"])({},ae),{},{ids:V,departments:J,divisions:R,titles:q,locations:Y,countries:B,reportingManager:z,employeeTypes:H,empTypeOthers:Q,skills:X,fromExp:$,toExp:ee}))}),[JSON.stringify(ae)]),Object(p["useEffect"])((function(){return O({type:"employee/fetchSkillList"}),O({type:"employee/fetchDepartmentList",params:{type:"DEPARTMENT"}}),O({type:"employee/fetchDepartmentList",params:{type:"DIVISION"}}),function(){O({type:"employee/clearFilter"})}}),[]);var se=function(e){var t=Object(i["a"])({},e),a=Object.entries(t).reduce((function(e,t){var a=Object(d["a"])(t,2),l=a[0],r=a[1];return null!=r&&0!==r.length&&r?(e[l]=r,e):e}),{});O({type:"employee/save",payload:{filter:a}})},ue=Object(m["debounce"])((function(e){se(e)}),700),fe=function(){var e=b.getFieldsValue();ue(e)},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?O({type:"globalData/fetchEmployeeListEffect",payload:{search:e,status:t&&["ACTIVE","INACTIVE"]||("inActive"===re?["INACTIVE"]:["ACTIVE"])}}).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data,a=void 0===t?[]:t;return a.map((function(e){var t=e.generalInfo,a=e.location,l=e._id;return{label:Object(h["h"])(t,a),value:l}}))})):new Promise((function(e){e([])}))};return s.a.createElement(c["a"],{layout:"vertical",name:"filter",onValuesChange:fe,form:b,className:y.a.FilterContent},s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.name"}),name:"ids"},s.a.createElement(f["a"],{placeholder:Object(u["b"])({id:"component.directory.tableFilter.name.placeholder"}),fetchOptions:be,showSearch:!0,allowClear:!0})),"myTeam"!==re&&s.a.createElement(s.a.Fragment,null,s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.department"}),name:"departments"},s.a.createElement(n["default"],{allowClear:!0,showSearch:!0,mode:"multiple",style:{width:"100%"},placeholder:Object(u["b"])({id:"component.directory.tableFilter.department.placeholder"}),filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},showArrow:!0},E.map((function(e){return s.a.createElement(n["default"].Option,{value:e._id,key:e._id},e.name)})))),s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.division"}),name:"divisions"},s.a.createElement(n["default"],{allowClear:!0,showSearch:!0,mode:"multiple",style:{width:"100%"},placeholder:Object(u["b"])({id:"component.directory.tableFilter.division.placeholder"}),filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},showArrow:!0},C.map((function(e){return s.a.createElement(n["default"].Option,{value:e._id,key:e._id},e.name)}))))),s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.title"}),name:"titles"},s.a.createElement(n["default"],{allowClear:!0,showSearch:!0,mode:"multiple",style:{width:"100%"},placeholder:Object(u["b"])({id:"component.directory.tableFilter.title.placeholder"}),filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},showArrow:!0},k.map((function(e){return s.a.createElement(n["default"].Option,{value:e._id,key:e._id},e.name)})))),"myTeam"!==re&&s.a.createElement(s.a.Fragment,null,s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.manager"}),name:"managers"},s.a.createElement(f["a"],{placeholder:Object(u["b"])({id:"component.directory.tableFilter.manager.placeholder"}),fetchOptions:function(e){return be(e,!0)},showSearch:!0,allowClear:!0}))),s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.location"}),name:"locations"},s.a.createElement(n["default"],{allowClear:!0,showSearch:!0,mode:"multiple",style:{width:"100%"},placeholder:Object(u["b"])({id:"component.directory.tableFilter.location.placeholder"}),filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},showArrow:!0},ne.map((function(e){return s.a.createElement(n["default"].Option,{value:e._id,key:e._id},e.name)})))),"myTeam"!==re&&s.a.createElement(s.a.Fragment,null,s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.country"}),name:"countries"},s.a.createElement(n["default"],{allowClear:!0,showSearch:!0,mode:"multiple",style:{width:"100%"},placeholder:Object(u["b"])({id:"component.directory.tableFilter.country.placeholder"}),filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},showArrow:!0},de.map((function(e){return s.a.createElement(n["default"].Option,{value:e.id,key:e.id},e.country)})))),s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.empTypeOther"}),name:"empTypeOther"},s.a.createElement(n["default"],{allowClear:!0,showSearch:!0,mode:"multiple",style:{width:"100%"},placeholder:Object(u["b"])({id:"component.directory.tableFilter.empTypeOther.placeholder"}),filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},showArrow:!0},["Regular","Contingent Worker"].map((function(e,t){return s.a.createElement(n["default"].Option,{key:"".concat(t+1),value:e},e)})),"]")),s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.employeeType"}),name:"employeeTypes"},s.a.createElement(n["default"],{allowClear:!0,showSearch:!0,mode:"multiple",style:{width:"100%"},placeholder:Object(u["b"])({id:"component.directory.tableFilter.employeeType.placeholder"}),filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},showArrow:!0},T.filter((function(e){return"Other"!==e.name})).map((function(e){return s.a.createElement(n["default"].Option,{value:e._id,key:e._id},e.name)})))),s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.skill"}),name:"skills"},s.a.createElement(n["default"],{allowClear:!0,showSearch:!0,mode:"multiple",style:{width:"100%"},placeholder:Object(u["b"])({id:"component.directory.tableFilter.skill.placeholder"}),filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},showArrow:!0},S.map((function(e){return s.a.createElement(n["default"].Option,{value:e._id,key:e._id},e.name)})))),s.a.createElement(c["a"].Item,{label:Object(u["b"])({id:"component.directory.tableFilter.experience"})},s.a.createElement(l["a"],null,s.a.createElement(r["a"],{span:11},s.a.createElement(c["a"].Item,{name:"fromExp"},s.a.createElement(o["a"],{min:0,max:100,placeholder:Object(u["b"])({id:"component.directory.tableFilter.from"})}))),s.a.createElement(r["a"],{span:2,className:y.a.separator},s.a.createElement("span",null,Object(u["b"])({id:"component.directory.tableFilter.to"}))),s.a.createElement(r["a"],{span:11},s.a.createElement(c["a"].Item,{name:"toExp"},s.a.createElement(o["a"],{min:0,max:100,placeholder:Object(u["b"])({id:"component.directory.tableFilter.to"})})))))))};t["default"]=Object(u["a"])((function(e){var t=e.loading,a=e.employee,l=e.location;l=void 0===l?{}:l;var r=l.companyLocationList,o=void 0===r?[]:r;return{loadingFetchEmployeeIDList:t.effects["employee/fetchEmployeeIDListEffect"],loadingFetchEmployeeNameList:t.effects["employee/fetchEmployeeNameListEffect"],employee:a,companyLocationList:o}}))(O)},udZa:function(e,t,a){e.exports={FilterContent:"FilterContent___3vx1v",separator:"separator___1Gxzv"}}}]);