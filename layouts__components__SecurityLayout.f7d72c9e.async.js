(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{fGcP:function(e,t,n){"use strict";n.r(t);var a=n("fWQN"),i=n("mtLc"),r=n("yKVA"),o=n("879j"),c=n("q1tI"),s=n.n(c),u=n("Ty5D"),l=n("9kvl"),d=n("AfpS"),h=n("34ay"),p=n("zDPs"),m=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(e){var i;return Object(a["a"])(this,n),i=t.call(this,e),i.state={isReady:!1},i}return Object(i["a"])(n,[{key:"componentDidMount",value:function(){this.setState({isReady:!0});var e=Object(p["a"])(),t=Object(h["j"])(),n=this.props.dispatch;n(t&&n&&e?{type:"user/fetchCurrent",isSwitchingRole:!0}:{type:"user/fetchCurrent",isSwitchingRole:!1})}},{key:"render",value:function(){var e=this.state.isReady,t=this.props,n=t.children,a=t.loading,i=t.currentUser,r=i&&i._id;return!r&&a||!e?s.a.createElement(d["b"],null):r||"/login"===window.location.pathname||"/candidate"===window.location.pathname?n:s.a.createElement(u["c"],{to:"/login"})}}]),n}(s.a.Component);t["default"]=Object(l["a"])((function(e){var t=e.user,n=e.loading;return{currentUser:t.currentUser,loading:n.models.user||n.models.location||n.models.homePage||n.models.timeSheet}}))(m)}}]);