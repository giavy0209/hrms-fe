(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{fTy4:function(e,n,o){"use strict";o.r(n);o("T2oS");var t=o("W9HT"),i=o("q1tI"),a=o.n(i),c=o("9kvl"),l=function(e){var n=e.location;n=void 0===n?{}:n;var o=n.query;o=void 0===o?{}:o;var c=o.code,l=void 0===c?"":c,r=e.dispatch;return Object(i["useEffect"])((function(){l&&r({type:"login/loginGoogle",payload:{code:l}})}),[l]),a.a.createElement(t["a"],{size:"large",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}})};n["default"]=Object(c["a"])((function(e){var n=e.loading;return{loadingSignin:n.effects["login/loginGoogle"]}}))(l)}}]);