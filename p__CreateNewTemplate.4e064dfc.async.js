(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"14J3":function(e,t,n){"use strict";n("EFp3"),n("1GLa")},"4le0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var a=function(){return"undefined"!==typeof window?window:e},o=function(){var e=a();return e&&e.tinymce?e.tinymce:null}}).call(this,n("IyRk"))},BMrR:function(e,t,n){"use strict";var a=n("qrJ5");t["a"]=a["a"]},FVm2:function(e,t,n){e.exports=n.p+"static/checkIcon.f818b0c0.svg"},I79D:function(e,t,n){"use strict";n.r(t);n("14J3");var a,o,r,i,l,c,s,u,p=n("BMrR"),d=(n("jCWc"),n("kPKH")),f=n("fWQN"),m=n("mtLc"),h=n("yKVA"),v=n("879j"),g=n("q1tI"),b=n.n(g),y=n("LMbU"),C=n("55Ip"),_=n("9kvl"),N=n("Io9k"),w=n.n(N),E=n("bYvY"),T=n.n(E),k=function(e){Object(h["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(f["a"])(this,n),t.apply(this,arguments)}return Object(m["a"])(n,[{key:"render",value:function(){return b.a.createElement("div",{className:T.a.CreateNewTemplateHeader},b.a.createElement(C["a"],{to:{pathname:"/onboarding/settings/documents-templates"}},b.a.createElement("img",{src:w.a,alt:"back icon"})),b.a.createElement("p",null,Object(_["b"])({id:"app.createNewTemplate"})))}}]),n}(g["PureComponent"]),O=k,j=(n("+L6B"),n("2/Rp")),I=(n("y8nQ"),n("Vl3Y")),S=(n("5NDa"),n("5rEg")),x=(n("/xke"),n("TeRw")),F=n("wd/R"),B=n.n(F),D=n("34ay"),R=n("qLMh"),V=n("9og8"),L=n("UYf5"),M=n("Knpq"),P=n("hMvG"),H=n.n(P),U=n("JTWt"),z=n("glQo"),A=(a=Object(_["a"])((function(e){var t=e.employeeSetting,n=e.loading;return{employeeSetting:t,loading:n.effects["employeeSetting/addCustomTemplate"]}})),o=Reflect.metadata("design:type",Function),r=Reflect.metadata("design:paramtypes",[void 0]),a(i=o(i=r(i=function(e){Object(h["a"])(n,e);var t=Object(v["a"])(n);function n(e){var a;return Object(f["a"])(this,n),a=t.call(this,e),a.handleEditorChange=function(e){var t=a.props.handleHtmlContent,n=void 0===t?function(){}:t;n(e)},a.imageType=function(e){var t=e.split("."),n=t[t.length-1];switch(n.toLowerCase()){case"jpg":case"jpeg":case"svg":case"webp":case"tiff":case"png":return!0;default:return!1}},a.beforeUpload=function(e){var t=a.imageType(e.name),n=e.size/1024/1024<5;return t&&n},a.uploadImageHandle=function(){var e=Object(V["a"])(Object(R["a"])().mark((function e(t,n,o){var r,i,l,c;return Object(R["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.blob(),i=a.beforeUpload(r),!i){e.next=9;break}return e.next=5,Object(U["b"])({file:r,typeFile:z["d"].TYPE_FILE.ONBOARDING,subPath:!0});case 5:l=e.sent,l&&(c=l[0],n(c.url)),e.next=10;break;case 9:o(Object(_["b"])({id:"app.imageSizeError2"}));case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),a.mapValues={},a}return Object(m["a"])(n,[{key:"render",value:function(){var e=this.props.currentTemplate;e=void 0===e?{}:e;var t=e.settings,n=void 0===t?[]:t;return b.a.createElement("div",{className:H.a.EditForm},b.a.createElement(L["a"],{apiKey:M["a"],init:{height:"100%",menubar:!0,plugins:["save advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks fullscreen","insertdatetime media table paste help wordcount variable"],toolbar:"undo redo formatselect bold italic backcolor  alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat help variable",content_style:"body { margin: 1rem; max-width: 900px; }",setup:function(e){window.tester=e,e.ui.registry.addMenuButton("variable",{text:"Insert auto-text",fetch:function(t){var a=n.map((function(t){return{type:"menuitem",text:t.description,onAction:function(){e.plugins.variable.addVariable(t.key)}}}));t(a)}})},variable_mapper:this.mapValues,variable_style:"background-color: #ffa100; color: #fff; border-radius: 4px; padding: 4px;",external_plugins:{variable:window.location.href.replace(_["e"].location.pathname,"/tinymce/plugins/auto_text/plugin.js")},images_upload_handler:this.uploadImageHandle},onEditorChange:this.handleEditorChange,outputFormat:"raw"}))}}]),n}(g["Component"]))||i)||i)||i),q=A,K=n("QRpD"),G=n.n(K),Y=(l=Object(_["a"])((function(e){var t=e.loading,n=e.user;n=void 0===n?{}:n;var a=n.companiesOfUser,o=void 0===a?[]:a,r=e.employeeSetting.currentTemplate,i=void 0===r?{}:r;return{currentTemplate:i,companiesOfUser:o,loadingAddTemplate:t.effects["employeeSetting/addCustomTemplate"]}})),c=Reflect.metadata("design:type",Function),s=Reflect.metadata("design:paramtypes",[void 0]),l(u=c(u=s(u=function(e){Object(h["a"])(n,e);var t=Object(v["a"])(n);function n(e){var a;return Object(f["a"])(this,n),a=t.call(this,e),a.handleChangeInput=function(e){var t=a.props.dispatch,n=e.target,o=n.value;t({type:"employeeSetting/saveCurrentTemplate",payload:{title:o}})},a.getCompanyLogo=function(){var e=a.props.companiesOfUser,t=void 0===e?[]:e,n=t.find((function(e){return e._id===Object(D["d"])()}));return null===n||void 0===n?void 0:n.logoUrl},a.handleHtmlContent=function(e){a.setState({content:e})},a.handleSubmit=function(){var e=a.state.content,t=a.props,n=t.currentTemplate;n=void 0===n?{}:n;var o=n.title,r=n.settings,i=void 0===r?[]:r,l=t.type,c=void 0===l?"":l,s=t.dispatch,u=Object(D["f"])();s({type:"employeeSetting/addCustomTemplate",payload:{html:e,settings:i,type:c||"ON_BOARDING",title:o,tenantId:u,default:!0}}).then((function(e){200===e.statusCode&&(x["a"].success({message:Object(_["b"])({id:"app.actionMessage.createTemplateSuccess"})}),setTimeout((function(){_["e"].goBack()}),500))}))},a.state={content:""},a}return Object(m["a"])(n,[{key:"render",value:function(){var e=this.props.loadingAddTemplate,t=new Date(B()()),n=this.getCompanyLogo();return b.a.createElement("div",{className:G.a.CreateNewTemplateForm},b.a.createElement("div",{className:G.a.CreateNewTemplateForm_header},b.a.createElement(I["a"],null,b.a.createElement(I["a"].Item,{label:Object(_["b"])({id:"app.templateTitle"}),name:"templateTitle",required:!1,rules:[{required:!0,message:Object(_["b"])({id:"app.input.templateRule"})}]},b.a.createElement(p["a"],{gutter:[24,0]},b.a.createElement(d["a"],{span:16},b.a.createElement(S["a"],{onChange:this.handleChangeInput})),b.a.createElement(d["a"],{span:8},b.a.createElement(S["a"],{disabled:!0,defaultValue:"companyLogo.png"})))))),b.a.createElement("div",{className:G.a.CreateNewTemplateForm_template},b.a.createElement("div",{className:G.a.CreateNewTemplateForm_template_header},b.a.createElement("img",{src:n,alt:"brand-logo"}),b.a.createElement("p",null,t.toLocaleDateString())),b.a.createElement("hr",null),b.a.createElement("div",{className:G.a.CreateNewTemplateForm_template_content},b.a.createElement(q,{handleHtmlContent:this.handleHtmlContent}))),b.a.createElement("div",{className:G.a.CreateNewTemplateForm_button},b.a.createElement(j["default"],{type:"primary",onClick:this.handleSubmit,loading:e,className:G.a.CreateNewTemplateForm_button_primary},Object(_["b"])({id:"app.save"}))))}}]),n}(g["PureComponent"]))||u)||u)||u),W=Y,J=(n("DYRE"),n("zeV3")),Q=n("eiZ0"),Z=n.n(Q),X=n("FVm2"),$=n.n(X),ee=n("Vq6B"),te=n.n(ee),ne=function(e){Object(h["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(f["a"])(this,n),t.apply(this,arguments)}return Object(m["a"])(n,[{key:"render",value:function(){return b.a.createElement("div",{className:te.a.CreateNewTemplateNote},b.a.createElement("div",{className:te.a.CreateNewTemplateNote_header},b.a.createElement(J["b"],{size:"middle"},b.a.createElement("div",{className:te.a.CreateNewTemplateNote_header_icons},b.a.createElement("div",{className:te.a.outsideCircle}),b.a.createElement("div",{className:te.a.insideCircle}),b.a.createElement("img",{src:Z.a,alt:"icon"}))),b.a.createElement("div",{className:te.a.CreateNewTemplateNote_header_title},Object(_["b"])({id:"component.templateDetailsNote.title"}))),b.a.createElement("div",{className:te.a.CreateNewTemplateNote_list},b.a.createElement("div",{className:te.a.CreateNewTemplateNote_list_note},b.a.createElement("img",{src:$.a,alt:"icon"}),b.a.createElement("div",{className:te.a.content},Object(_["b"])({id:"component.templateDetailsNote.content1"}))),b.a.createElement("div",{className:te.a.CreateNewTemplateNote_list_note},b.a.createElement("img",{src:$.a,alt:"icon"}),b.a.createElement("div",{className:te.a.content},Object(_["b"])({id:"component.templateDetailsNote.content2"})))))}}]),n}(g["PureComponent"]),ae=ne,oe=n("Izpe"),re=n.n(oe),ie=function(e){Object(h["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(f["a"])(this,n),t.apply(this,arguments)}return Object(m["a"])(n,[{key:"render",value:function(){var e=this.props.location;e=void 0===e?{}:e;var t=e.state;t=void 0===t?{}:t;var n=t.type,a=void 0===n?"":n;return b.a.createElement(y["a"],null,b.a.createElement("div",{className:re.a.CreateNewTemplate},b.a.createElement(O,null),b.a.createElement("div",{className:re.a.CreateNewTemplate_content},b.a.createElement(p["a"],{gutter:[24,24]},b.a.createElement(d["a"],{xs:24,sm:24,md:24,lg:17,xl:17},b.a.createElement(W,{type:a})),b.a.createElement(d["a"],{xs:24,sm:24,md:24,lg:7,xl:7},b.a.createElement(ae,null))))))}}]),n}(g["PureComponent"]);t["default"]=ie},Io9k:function(e,t,n){e.exports=n.p+"static/blueBackIcon.f788d21f.svg"},Izpe:function(e,t,n){e.exports={CreateNewTemplate:"CreateNewTemplate___291_W",CreateNewTemplate_content:"CreateNewTemplate_content___5PeO0"}},Knpq:function(e,t,n){"use strict";var a="edk8sdg4xfadi42jszlvvsld5lez89panuynv8ykp6ki0j4e";t["a"]=a},QRpD:function(e,t,n){e.exports={CreateNewTemplateForm:"CreateNewTemplateForm___37svb",CreateNewTemplateForm_template:"CreateNewTemplateForm_template___3R73h",CreateNewTemplateForm_template_content:"CreateNewTemplateForm_template_content___3qq3V",CreateNewTemplateForm_template_header:"CreateNewTemplateForm_template_header___2xnZn",CreateNewTemplateForm_button:"CreateNewTemplateForm_button___1e0V5",CreateNewTemplateForm_button_primary:"CreateNewTemplateForm_button_primary___1NThH"}},UYf5:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n("q1tI"),o=n("17x9"),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},i={onActivate:o["func"],onAddUndo:o["func"],onBeforeAddUndo:o["func"],onBeforeExecCommand:o["func"],onBeforeGetContent:o["func"],onBeforeRenderUI:o["func"],onBeforeSetContent:o["func"],onBeforePaste:o["func"],onBlur:o["func"],onChange:o["func"],onClearUndos:o["func"],onClick:o["func"],onContextMenu:o["func"],onCopy:o["func"],onCut:o["func"],onDblclick:o["func"],onDeactivate:o["func"],onDirty:o["func"],onDrag:o["func"],onDragDrop:o["func"],onDragEnd:o["func"],onDragGesture:o["func"],onDragOver:o["func"],onDrop:o["func"],onExecCommand:o["func"],onFocus:o["func"],onFocusIn:o["func"],onFocusOut:o["func"],onGetContent:o["func"],onHide:o["func"],onInit:o["func"],onKeyDown:o["func"],onKeyPress:o["func"],onKeyUp:o["func"],onLoadContent:o["func"],onMouseDown:o["func"],onMouseEnter:o["func"],onMouseLeave:o["func"],onMouseMove:o["func"],onMouseOut:o["func"],onMouseOver:o["func"],onMouseUp:o["func"],onNodeChange:o["func"],onObjectResizeStart:o["func"],onObjectResized:o["func"],onObjectSelected:o["func"],onPaste:o["func"],onPostProcess:o["func"],onPostRender:o["func"],onPreProcess:o["func"],onProgressState:o["func"],onRedo:o["func"],onRemove:o["func"],onReset:o["func"],onSaveContent:o["func"],onSelectionChange:o["func"],onSetAttrib:o["func"],onSetContent:o["func"],onShow:o["func"],onSubmit:o["func"],onUndo:o["func"],onVisualAid:o["func"]},l=r({apiKey:o["string"],id:o["string"],inline:o["bool"],init:o["object"],initialValue:o["string"],onEditorChange:o["func"],outputFormat:o["oneOf"](["html","text"]),value:o["string"],tagName:o["string"],cloudChannel:o["string"],plugins:o["oneOfType"]([o["string"],o["array"]]),toolbar:o["oneOfType"]([o["string"],o["array"]]),disabled:o["bool"],textareaName:o["string"],tinymceScriptSrc:o["string"],rollback:o["oneOfType"]([o["number"],o["oneOf"]([!1])]),scriptLoading:o["shape"]({async:o["bool"],defer:o["bool"],delay:o["number"]})},i),c=function(e){return"function"===typeof e},s=function(e){return e in i},u=function(e){return e.substr(2)},p=function(e,t,n,a,o,r,i){var l=Object.keys(o).filter(s),c=Object.keys(r).filter(s),p=l.filter((function(e){return void 0===r[e]})),d=c.filter((function(e){return void 0===o[e]}));p.forEach((function(e){var t=u(e),a=i[t];n(t,a),delete i[t]})),d.forEach((function(n){var o=a(e,n),r=u(n);i[r]=o,t(r,o)}))},d=function(e,t,n,a,o){return p(o,e.on.bind(e),e.off.bind(e),(function(t,n){return function(a){var o;return null===(o=t(n))||void 0===o?void 0:o(a,e)}}),t,n,a)},f=0,m=function(e){var t=Date.now(),n=Math.floor(1e9*Math.random());return f++,e+"_"+n+f+String(t)},h=function(e){return null!==e&&("textarea"===e.tagName.toLowerCase()||"input"===e.tagName.toLowerCase())},v=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},g=function(e,t){return v(e).concat(v(t))},b=function(){return window.InputEvent&&"function"===typeof InputEvent.prototype.getTargetRanges},y=function(e){if(!("isConnected"in Node.prototype)){var t=e,n=e.parentNode;while(null!=n)t=n,n=t.parentNode;return t===e.ownerDocument}return e.isConnected},C=function(e,t){void 0!==e&&(null!=e.mode&&"object"===typeof e.mode&&"function"===typeof e.mode.set?e.mode.set(t):e.setMode(t))},_=function(){return{listeners:[],scriptId:m("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},N=function(){var e=_(),t=function(e,t,n,a,o,r){var i=t.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=e,i.src=n,i.async=a,i.defer=o;var l=function e(){i.removeEventListener("load",e),r()};i.addEventListener("load",l),t.head&&t.head.appendChild(i)},n=function(n,a,o,r,i,l){var c=function(){return t(e.scriptId,n,a,o,r,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0}))};e.scriptLoaded?l():(e.listeners.push(l),e.scriptLoading||(e.scriptLoading=!0,i>0?setTimeout(c,i):c()))},a=function(){e=_()};return{load:n,reinitialize:a}},w=N(),E=n("4le0"),T=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),k=function(){return k=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)},O=function(){var e,t,n;return(null===(n=null===(t=null===(e=Object(E["a"])())||void 0===e?void 0:e.Env)||void 0===t?void 0:t.browser)||void 0===n?void 0:n.isIE())?"change keyup compositionend setcontent":"change input compositionend setcontent"},j=function(){return b()?"beforeinput SelectionChange":"SelectionChange"},I=function(e){function t(t){var n,o,r,i=this;return i=e.call(this,t)||this,i.rollbackTimer=void 0,i.valueCursor=void 0,i.rollbackChange=function(){var e=i.editor,t=i.props.value;e&&t&&t!==i.currentContent&&e.undoManager.ignore((function(){if(e.setContent(t),i.valueCursor&&(!i.inline||e.hasFocus()))try{e.selection.moveToBookmark(i.valueCursor)}catch(n){}})),i.rollbackTimer=void 0},i.handleBeforeInput=function(e){if(void 0!==i.props.value&&i.props.value===i.currentContent&&i.editor&&(!i.inline||i.editor.hasFocus))try{i.valueCursor=i.editor.selection.getBookmark(3)}catch(t){}},i.handleBeforeInputSpecial=function(e){"Enter"!==e.key&&"Backspace"!==e.key&&"Delete"!==e.key||i.handleBeforeInput(e)},i.handleEditorChange=function(e){var t=i.editor;if(t&&t.initialized){var n=t.getContent();if(void 0!==i.props.value&&i.props.value!==n&&!1!==i.props.rollback&&(i.rollbackTimer||(i.rollbackTimer=window.setTimeout(i.rollbackChange,"number"===typeof i.props.rollback?i.props.rollback:200))),n!==i.currentContent&&(i.currentContent=n,c(i.props.onEditorChange))){var a=i.props.outputFormat,o="html"===a?n:t.getContent({format:a});i.props.onEditorChange(o,t)}}},i.handleEditorChangeSpecial=function(e){"Backspace"!==e.key&&"Delete"!==e.key||i.handleEditorChange(e)},i.initialise=function(e){var t,n,a;void 0===e&&(e=0);var o=i.elementRef.current;if(o)if(y(o)){var r=Object(E["a"])();if(!r)throw new Error("tinymce should have been loaded into global scope");var l=k(k({},i.props.init),{selector:void 0,target:o,readonly:i.props.disabled,inline:i.inline,plugins:g(null===(t=i.props.init)||void 0===t?void 0:t.plugins,i.props.plugins),toolbar:null!==(n=i.props.toolbar)&&void 0!==n?n:null===(a=i.props.init)||void 0===a?void 0:a.toolbar,setup:function(e){i.editor=e,i.bindHandlers({}),i.inline&&!h(o)&&e.once("PostRender",(function(t){e.setContent(i.getInitialValue(),{no_events:!0})})),i.props.init&&c(i.props.init.setup)&&i.props.init.setup(e)},init_instance_callback:function(e){var t,n,a=i.getInitialValue();i.currentContent=null!==(t=i.currentContent)&&void 0!==t?t:e.getContent(),i.currentContent!==a&&(i.currentContent=a,e.setContent(a),e.undoManager.clear(),e.undoManager.add(),e.setDirty(!1));var o=null!==(n=i.props.disabled)&&void 0!==n&&n;C(i.editor,o?"readonly":"design"),i.props.init&&c(i.props.init.init_instance_callback)&&i.props.init.init_instance_callback(e)}});i.inline||(o.style.visibility=""),h(o)&&(o.value=i.getInitialValue()),r.init(l)}else if(0===e)setTimeout((function(){return i.initialise(1)}),1);else{if(!(e<100))throw new Error("tinymce can only be initialised when in a document");setTimeout((function(){return i.initialise(e+1)}),100)}},i.id=i.props.id||m("tiny-react"),i.elementRef=a["createRef"](),i.inline=null!==(r=null!==(n=i.props.inline)&&void 0!==n?n:null===(o=i.props.init)||void 0===o?void 0:o.inline)&&void 0!==r&&r,i.boundHandlers={},i}return T(t,e),t.prototype.componentDidUpdate=function(e){var t,n,a=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(e),this.editor.initialized)){if(this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:this.editor.getContent(),"string"===typeof this.props.initialValue&&this.props.initialValue!==e.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"===typeof this.props.value&&this.props.value!==this.currentContent){var o=this.editor;o.undoManager.transact((function(){var e;if(!a.inline||o.hasFocus())try{e=o.selection.getBookmark(3)}catch(l){}var t=a.valueCursor;if(o.setContent(a.props.value),!a.inline||o.hasFocus())for(var n=0,r=[e,t];n<r.length;n++){var i=r[n];if(i)try{o.selection.moveToBookmark(i),a.valueCursor=i;break}catch(l){}}}))}if(this.props.disabled!==e.disabled){var r=null!==(n=this.props.disabled)&&void 0!==n&&n;C(this.editor,r?"readonly":"design")}}},t.prototype.componentDidMount=function(){var e,t,n,a,o,r;null!==Object(E["a"])()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&w.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(t=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.async)&&void 0!==t&&t,null!==(a=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.defer)&&void 0!==a&&a,null!==(r=null===(o=this.props.scriptLoading)||void 0===o?void 0:o.delay)&&void 0!==r?r:0,this.initialise)},t.prototype.componentWillUnmount=function(){var e=this,t=this.editor;t&&(t.off(O(),this.handleEditorChange),t.off(j(),this.handleBeforeInput),t.off("keypress",this.handleEditorChangeSpecial),t.off("keydown",this.handleBeforeInputSpecial),t.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(n){t.off(n,e.boundHandlers[n])})),this.boundHandlers={},t.remove(),this.editor=void 0)},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.renderInline=function(){var e=this.props.tagName,t=void 0===e?"div":e;return a["createElement"](t,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return a["createElement"]("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var e=this.props.cloudChannel,t=this.props.apiKey?this.props.apiKey:"no-api-key";return"https://cdn.tiny.cloud/1/".concat(t,"/tinymce/").concat(e,"/tinymce.min.js")},t.prototype.getInitialValue=function(){return"string"===typeof this.props.initialValue?this.props.initialValue:"string"===typeof this.props.value?this.props.value:""},t.prototype.bindHandlers=function(e){var t=this;if(void 0!==this.editor){d(this.editor,e,this.props,this.boundHandlers,(function(e){return t.props[e]}));var n=function(e){return void 0!==e.onEditorChange||void 0!==e.value},a=n(e),o=n(this.props);!a&&o?(this.editor.on(O(),this.handleEditorChange),this.editor.on(j(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):a&&!o&&(this.editor.off(O(),this.handleEditorChange),this.editor.off(j(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},t.propTypes=l,t.defaultProps={cloudChannel:"5"},t}(a["Component"])},Vq6B:function(e,t,n){e.exports={CreateNewTemplateNote:"CreateNewTemplateNote___2xPqv",CreateNewTemplateNote_list:"CreateNewTemplateNote_list___yOVz0",CreateNewTemplateNote_list_note:"CreateNewTemplateNote_list_note___3Uuf1",content:"content___xUZSX",CreateNewTemplateNote_header:"CreateNewTemplateNote_header___15Bib",CreateNewTemplateNote_header_title:"CreateNewTemplateNote_header_title___3T2ln",CreateNewTemplateNote_header_icons:"CreateNewTemplateNote_header_icons___30Enu",outsideCircle:"outsideCircle___3TECU",insideCircle:"insideCircle___1zVht"}},bYvY:function(e,t,n){e.exports={CreateNewTemplateHeader:"CreateNewTemplateHeader___1EWVT"}},eiZ0:function(e,t,n){e.exports=n.p+"static/ideaIcon.7ae610b9.svg"},hMvG:function(e,t,n){e.exports={EditForm:"EditForm___rwuSQ",buttonArea:"buttonArea___ncVzO"}},jCWc:function(e,t,n){"use strict";n("EFp3"),n("1GLa")},kPKH:function(e,t,n){"use strict";var a=n("/kpp");t["a"]=a["a"]}}]);