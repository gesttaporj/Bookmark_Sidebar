/*! (c) Philipp König under GPL-3.0 */
"use strict";function a(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(a,c){function d(a){return void 0!==a}function e(a){return"string"==typeof a}function f(a){return"object"===(void 0===a?"undefined":b(a))}function g(a){return Object.keys(a).length}function h(a,b,c){return a<b?b:a>c?c:a}function i(a,b){return parseInt(a,b||10)}function j(a){return Math.round(a)}function k(a){var b,c,d,e,f,g,h,i,k=+a[0],l=+a[1],m=+a[2];switch(e=Math.floor(6*k),f=6*k-e,g=m*(1-l),h=m*(1-f*l),i=m*(1-(1-f)*l),e=e||0,h=h||0,i=i||0,e%6){case 0:b=m,c=i,d=g;break;case 1:b=h,c=m,d=g;break;case 2:b=g,c=m,d=i;break;case 3:b=g,c=h,d=m;break;case 4:b=i,c=g,d=m;break;case 5:b=m,c=g,d=h}return[j(255*b),j(255*c),j(255*d)]}function l(a){return n(k(a))}function m(a){var b,c=+a[0],d=+a[1],e=+a[2],f=Math.max(c,d,e),g=Math.min(c,d,e),h=f-g,i=0===f?0:h/f,j=f/255;switch(f){case g:b=0;break;case c:b=d-e+h*(d<e?6:0),b/=6*h;break;case d:b=e-c+2*h,b/=6*h;break;case e:b=c-d+4*h,b/=6*h}return[b,i,j]}function n(a){var b=+a[2]|+a[1]<<8|+a[0]<<16;return b="000000"+b.toString(16),b.slice(-6)}function o(a){return m(p(a))}function p(a){return 3===a.length&&(a=a.replace(/./g,"$&$&")),[i(a[0]+a[1],16),i(a[2]+a[3],16),i(a[4]+a[5],16)]}function q(a){return[+a[0]/360,+a[1]/100,+a[2]/100]}function r(a){return[j(360*+a[0]),j(100*+a[1]),j(100*+a[2])]}function s(a){return[+a[0]/255,+a[1]/255,+a[2]/255]}function t(a){if(f(a))return a;var b=/\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(a),c=/\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(a);return"#"===a[0]&&a.match(/^#([\da-f]{3}|[\da-f]{6})$/i)?o(a.slice(1)):c?q([+c[1],+c[2],+c[3]]):b?m([+b[1],+b[2],+b[3]]):[0,1,1]}var u="firstChild",v="offsetLeft",w="offsetTop",x=setTimeout;!function(a){a.version="1.3.3",a.__instance__={},a.each=function(b,c){return x(function(){var c,d=a.__instance__;for(c in d)b(d[c],c,d)},0===c?0:c||1),a},a.parse=t,a._HSV2RGB=k,a._HSV2HEX=l,a._RGB2HSV=m,a._HEX2HSV=o,a._HEX2RGB=function(a){return s(p(a))},a.HSV2RGB=function(a){return k(q(a))},a.HSV2HEX=function(a){return l(q(a))},a.RGB2HSV=function(a){return r(m(a))},a.RGB2HEX=n,a.HEX2HSV=function(a){return r(o(a))},a.HEX2RGB=p}(a.CP=function(b,i){function j(a,b,c){a=a.split(/\s+/);for(var d=0,e=a.length;d<e;++d)b.addEventListener(a[d],c,!1)}function m(a,b,c){a=a.split(/\s+/);for(var d=0,e=a.length;d<e;++d)b.removeEventListener(a[d],c)}function n(a,b){var c=b.touches?b.touches[0].pageX:b.pageX,d=b.touches?b.touches[0].pageY:b.pageY,e=o(a);return{x:c-e.l,y:d-e.t}}function o(b){if(b===a)var c=a.pageXOffset||G.scrollLeft,d=a.pageYOffset||G.scrollTop;else for(var c=b[v]-b.scrollLeft,d=b[w]-b.scrollTop;b=b.offsetParent;)c+=b[v]-b.scrollLeft,d+=b[w]-b.scrollTop;return{l:c,t:d}}function p(a,b){for(;(a=a.parentElement)&&a!==b;);return a}function q(a){a&&a.preventDefault()}function r(b){return b===a?{w:a.innerWidth,h:a.innerHeight}:{w:b.offsetWidth,h:b.offsetHeight}}function s(a){return I||!!d(a)&&a}function t(a){I=a}function y(a,b,c){return d(a)?d(b)?(d(J[a])||(J[a]={}),d(c)||(c=g(J[a])),J[a][c]=b,H):J[a]:J}function z(a,b){return d(a)?d(b)?(delete J[a][b],H):(J[a]={},H):(J={},H)}function A(a,b,c){if(!d(J[a]))return H;if(d(c))d(J[a][c])&&J[a][c].apply(H,b);else for(var e in J[a])J[a][e].apply(H,b);return H}function B(a,b){a&&"h"!==a||A("change:h",b),a&&"sv"!==a||A("change:sv",b),A("change",b)}function C(){return K.parentNode}function D(d,e){function f(a){var b=(k(R),k([R[0],1,1]));T.style.backgroundColor="rgb("+b.join(",")+")",t(R),q(a)}function g(a){var b=h(n(S,a).y,0,G);R[0]=(G-b)/G,U.style.top=b-Q/2+"px",f(a)}function o(a){var b=n(T,a),c=h(b.x,0,I),d=h(b.y,0,J);R[1]=1-(I-c)/I,R[2]=(J-d)/J,V.style.right=I-c-$/2+"px",V.style.top=d-_/2+"px",f(a)}function u(a){Y&&(g(a),ca=l(R),W||(A("drag:h",[ca,H]),A("drag",[ca,H]),B("h",[ca,H]))),Z&&(o(a),ca=l(R),X||(A("drag:sv",[ca,H]),A("drag",[ca,H]),B("sv",[ca,H]))),W=0,X=0}function v(a){var c=a.target,d=Y?"h":"sv",e=[l(R),H],f=c===b||p(c,b)===b,g=c===K||p(c,K)===K;f||g?g&&(A("stop:"+d,e),A("stop",e),B(d,e)):C()&&!1!==i&&(H.exit(),A("exit",[H]),B(0,e)),Y=0,Z=0}function w(a){W=1,Y=1,u(a),q(a),A("start:h",[ca,H]),A("start",[ca,H]),B("h",[ca,H])}function x(a){X=1,Z=1,u(a),q(a),A("start:sv",[ca,H]),A("start",[ca,H]),B("sv",[ca,H])}d||((e||F).appendChild(K),H.visible=!0),aa=r(K).w,ba=r(K).h;var y=r(T),z=r(V),G=r(S).h,I=y.w,J=y.h,Q=r(U).h,$=z.w,_=z.h;if(d){var da=function(a){var c=a.target,d=c===b||p(c,b)===b;d?D():H.exit(),A(d?"enter":"exit",[H])};K.style.left=K.style.top="-9999px",!1!==i&&j(i,b,da),H.create=function(){return D(1),A("create",[H]),H},H.destroy=function(){return!1!==i&&m(i,b,da),H.exit(),t(!1),A("destroy",[H]),H}}else E();P=function(){R=s(R),f(),U.style.top=G-Q/2-G*+R[0]+"px",V.style.right=I-$/2-I*+R[1]+"px",V.style.top=J-_/2-J*+R[2]+"px"},H.exit=function(b){return C()&&(C().removeChild(K),H.visible=!1),m(L,S,w),m(L,T,x),m(M,c,u),m(N,c,v),m(O,a,E),H},P(),d||(j(L,S,w),j(L,T,x),j(M,c,u),j(N,c,v),j(O,a,E))}function E(){return H.fit()}var F=c.body,G=c.documentElement,H=this,I=!1,J={},K=c.createElement("div"),L="touchstart mousedown",M="touchmove mousemove",N="touchend mouseup",O="orientationchange resize";if(!(H instanceof CP))return new CP(b,i);CP.__instance__[b.id||b.name||g(CP.__instance__)]=H,d(i)||(i=L),t(CP.parse(b.getAttribute("data-color")||b.value||[0,1,1])),K.className="color-picker",K.innerHTML='<div class="color-picker-control"><span class="color-picker-h"><i></i></span><span class="color-picker-sv"><i></i></span></div>';var P,Q=K[u].children,R=s([0,1,1]),S=Q[0],T=Q[1],U=S[u],V=T[u],W=0,X=0,Y=0,Z=0,$=0,_=0,aa=0,ba=0,ca=l(R);return D(1),x(function(){var a=[l(R),H];A("create",a),B(0,a)},0),H.fit=function(c){var e=r(a),g=r(G),h=g.h>e.h,i=o(a),j=(o(G),h?g.w:e.w+i.l),k=h?e.h+i.t:Math.max(g.h,e.h),l=o(b);return $=l.l,_=l.t+r(b).h,f(c)?(d(c[0])&&($=c[0]),d(c[1])&&(_=c[1])):($+aa>j&&($=j-aa),_+ba>k&&(_=k-ba)),K.style.left=$+"px",K.style.top=_+"px",A("fit",[H]),H},H.set=function(a){return d(a)?(e(a)&&(a=CP.parse(a)),t(a),P(),H):s()},H.target=b,H.picker=K,H.visible=!1,H.on=y,H.off=z,H.trigger=A,H.hooks=J,H.enter=function(a){return D(0,a)},H})}(window,document),function(b){window.CheckboxHelper=function(a){var c=this,d={};this.get=function(d,e){var f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"checkbox",h=b("<div />").html("<input type='checkbox' />").data("uid",Math.random().toString(36).substr(2,12)).attr(a.opts.attr.type,f).addClass(a.opts.classes.checkbox.box);return void 0!==e&&(h.children("input[type='checkbox']").attr(e),e[a.opts.attr.name]&&h.attr(a.opts.attr.name,e[a.opts.attr.name])),c.isChecked(h)&&h.addClass(a.opts.classes.checkbox.active),g(h,d),h},this.isChecked=function(a){return a.find("input[type='checkbox']")[0].checked};var e=function(b,c){var d=b.children("input[type='checkbox']");d.trigger("change"),c.document()[0].dispatchEvent(new CustomEvent(a.opts.events.checkboxChanged,{detail:{container:b,checkbox:d,checked:b.hasClass(a.opts.classes.checkbox.active)},bubbles:!0,cancelable:!1}))},f=function f(g,h){g.addClass(a.opts.classes.checkbox.clicked),g.removeClass(a.opts.classes.checkbox.focus),g.toggleClass(a.opts.classes.checkbox.active);var i=g.hasClass(a.opts.classes.checkbox.active),j=g.children("input[type='checkbox']");if("radio"===g.attr(a.opts.attr.type)&&g.attr(a.opts.attr.name))if(h){var k=g.attr(a.opts.attr.name);g.addClass(a.opts.classes.checkbox.active),i&&(j.attr("checked",!0),e(g,h)),h.find("div."+a.opts.classes.checkbox.box+"["+a.opts.attr.type+"='radio']["+a.opts.attr.name+"='"+k+"']").forEach(function(a){var d=b(a);a!==g[0]&&c.isChecked(d)&&f(d)})}else j.attr("checked",!1);else j.attr("checked",i),e(g,h);var l=g.data("uid");d[l]&&clearTimeout(d[l]),d[l]=setTimeout(function(){g.removeClass(a.opts.classes.checkbox.clicked)},300)},g=function(c,d){c.on("mousedown",function(c){c.preventDefault(),c.stopPropagation(),b(c.currentTarget).addClass(a.opts.classes.checkbox.focus)}).on("click",function(a){a.preventDefault(),a.stopPropagation(),f(b(a.currentTarget),d)}),d.on("click",function(){c.removeClass(a.opts.classes.checkbox.focus)})}},window.AppearanceHelper=function(a){var c={sidebar:{template:"sidebar",styles:["sidebar"]},general:{template:"sidebar",styles:["sidebar"]},overlay:{template:"overlay",styles:["overlay"]},indicator:{template:"indicator",styles:["contentBase","content"]}};this.init=function(){h();var b=a.helper.model.getData("a/sidebarPosition");a.opts.elm.select.sidebarPosition[0].value=b,a.opts.elm.select.sidebarPosition.data("initial",b);var c=a.helper.model.getData("a/styles");setTimeout(function(){Object.keys(c).forEach(function(b){var e=c[b];a.opts.elm.range[b]?(a.opts.elm.range[b][0].value=e.replace("px",""),a.opts.elm.range[b].data("initial",e.replace("px","")),a.opts.elm.range[b].trigger("change")):a.opts.elm.color[b]?(a.opts.elm.color[b].data("initial",e),d(a.opts.elm.color[b],e)):a.opts.elm.select[b]&&(a.opts.elm.select[b][0].value=e,a.opts.elm.select[b].data("initial",e))}),i()},0)},this.save=function(){chrome.storage.sync.set({appearance:g()},function(){a.showSuccessMessage("saved_message")})};var d=function(a,b){var c=a.data("picker");if(b.search(/rgba\(/)>-1){var d=b.replace(/(rgba|\(|\))/gi,"").split(",");b="rgb("+d[0]+","+d[1]+","+d[2]+")",c.alpha&&(c.alpha[0].value=d[3])}c.set(b),c.trigger("change")},e=function(a,b){var c=new XMLHttpRequest;c.open("GET",chrome.extension.getURL(a),!0),c.onload=function(){c.response&&b(c.response)},c.send()},f=function(d){if(a.opts.elm.preview[d]){a.opts.elm.preview[d].find("head > style").remove();var e=g();Object.assign(e.styles,a.helper.model.getFontWeights(e.styles.fontFamily));var f=c[d].css;Object.keys(e.styles).forEach(function(a){f=f.replace(new RegExp('"?%'+a+'"?',"g"),e.styles[a])}),a.opts.elm.preview[d].find("["+a.opts.attr.style+"]").forEach(function(c){var d=b(c).attr(a.opts.attr.style);Object.keys(e.styles).forEach(function(a){d=d.replace(new RegExp('"?%'+a+'"?',"g"),e.styles[a])}),c.style.cssText=d}),a.opts.elm.preview[d].find("["+a.opts.attr.hideOnFalse+"]").forEach(function(c){var d=b(c).attr(a.opts.attr.hideOnFalse);void 0===e[d]||!1===e[d]?b(c).css("display","none"):b(c).css("display","block")}),a.opts.elm.body.attr(a.opts.attr.pos,e.sidebarPosition),a.opts.elm.preview[d].find("["+a.opts.attr.pos+"]").attr(a.opts.attr.pos,e.sidebarPosition),a.opts.elm.preview[d].find("head").append("<style>"+f+"</style>");var h=a.opts.elm.preview[d].find("section#sidebar");if(h.length()>0){var i=h.find("> header");i.find("> h1 > span").removeClass(a.opts.classes.hidden);var j=window.getComputedStyle(i[0]),k=parseInt(j.getPropertyValue("padding-top"));i.children("a").forEach(function(b){if(b.offsetTop>k)return i.find("> h1 > span").addClass(a.opts.classes.hidden),!0})}}},g=function(){var b={sidebarPosition:a.opts.elm.select.sidebarPosition[0].value,showIndicator:!0,showBookmarkIcons:!0,styles:{}},c=a.helper.model.getData("a/styles");return Object.keys(c).forEach(function(c){a.opts.elm.range[c]?b.styles[c]=a.opts.elm.range[c][0].value+"px":a.opts.elm.color[c]?b.styles[c]=a.opts.elm.color[c][0].value:a.opts.elm.select[c]&&(b.styles[c]=a.opts.elm.select[c][0].value)}),0===parseInt(b.styles.indicatorWidth)&&(b.showIndicator=!1),0===parseInt(b.styles.bookmarksIconSize)&&(b.showBookmarkIcons=!1),b},h=function(){Object.keys(c).forEach(function(d){c[d].css="",a.opts.elm.preview[d]=b("<iframe />").attr(a.opts.attr.appearance,d).addClass(a.opts.classes.hidden).appendTo(a.opts.elm.body),e("html/template/"+c[d].template+".html",function(c){c=c.replace(/__MSG_\@\@extension_id__/g,chrome.runtime.id),c=c.replace(/__DATE__CREATED__/g,a.helper.i18n.getLocaleDate(new Date("2016-11-25"))),a.opts.elm.preview[d].find("body").html(c),b("<link />").attr({rel:"stylesheet",type:"text/css",href:a.opts.fontHref}).appendTo(a.opts.elm.preview[d].find("head"))}),c[d].styles.forEach(function(a){e("css/"+a+".css",function(a){c[d].css+=a,f(d)})})})},i=function(){a.opts.elm.appearance.content.find("input, select").on("change input",function(c){var d=b(c.currentTarget),e=c.currentTarget.value,g=d.data("initial"),h=d;d.next("span").length()>0&&(h=d.next("span")),e!==g?0===h.next("a."+a.opts.classes.revert).length()&&b("<a href='#' />").addClass(a.opts.classes.revert).data("elm",d).insertAfter(h):h.next("a."+a.opts.classes.revert).remove();var i=d.parents("["+a.opts.attr.name+"]").eq(0).attr(a.opts.attr.name);f(i)}),a.opts.elm.appearance.content.on("click","a."+a.opts.classes.revert,function(a){a.preventDefault();var c=b(a.currentTarget).data("elm"),e=c.data("initial");c.data("picker")?d(c,e):(c[0].value=e,c.trigger("change"))}),a.opts.elm.appearance.backgroundChanger.on("click",function(c){c.preventDefault();var d=b(c.currentTarget).attr(a.opts.attr.bg);a.opts.elm.appearance.backgroundChanger.removeClass(a.opts.classes.tabs.active),b(c.currentTarget).addClass(a.opts.classes.tabs.active),a.opts.elm.body.attr(a.opts.attr.bg,d)}),a.opts.elm.appearance.backgroundChanger.eq(0).trigger("click"),b(document).on(a.opts.events.contentTabChanged,function(b){"appearance"===b.detail.headerTab&&Object.keys(a.opts.elm.preview).forEach(function(c){var d=a.opts.elm.preview[c];c===b.detail.contentTab?(f(c),d.removeClass(a.opts.classes.hidden)):d.addClass(a.opts.classes.hidden)})})}},window.BehaviourHelper=function(a){this.init=function(){b(),["rememberSearch","dirAccordion"].forEach(function(b){!0===a.helper.model.getData("b/"+b)&&a.opts.elm.checkbox[b].trigger("click")});var c=a.helper.model.getData("b/pxTolerance");a.opts.elm.range.pxToleranceMaximized[0].value=c.maximized,a.opts.elm.range.pxToleranceWindowed[0].value=c.windowed;var d=a.helper.model.getData("b/scrollSensitivity");a.opts.elm.range.mouseScrollSensitivity[0].value=d.mouse,a.opts.elm.range.trackpadScrollSensitivity[0].value=d.trackpad,a.opts.elm.range.closeTimeout[0].value=a.helper.model.getData("b/closeTimeout"),a.opts.elm.range.dirOpenDuration[0].value=a.helper.model.getData("b/dirOpenDuration"),a.opts.elm.range.openDelay[0].value=a.helper.model.getData("b/openDelay"),a.opts.elm.select.openAction[0].value=a.helper.model.getData("b/openAction"),a.opts.elm.select.linkAction[0].value=a.helper.model.getData("b/linkAction"),a.opts.elm.select.rememberState[0].value=a.helper.model.getData("b/rememberState"),a.opts.elm.select.newTab[0].value=a.helper.model.getData("b/newTab"),a.opts.elm.range.pxToleranceMaximized.trigger("change"),a.opts.elm.range.pxToleranceWindowed.trigger("change"),a.opts.elm.range.mouseScrollSensitivity.trigger("change"),a.opts.elm.range.trackpadScrollSensitivity.trigger("change"),a.opts.elm.range.closeTimeout.trigger("change"),a.opts.elm.range.dirOpenDuration.trigger("change"),a.opts.elm.range.openDelay.trigger("change"),a.opts.elm.select.openAction.trigger("change"),a.opts.elm.select.linkAction.trigger("change"),a.opts.elm.select.rememberState.trigger("change")},this.save=function(){var b={pxTolerance:{maximized:a.opts.elm.range.pxToleranceMaximized[0].value,windowed:a.opts.elm.range.pxToleranceWindowed[0].value},scrollSensitivity:{mouse:a.opts.elm.range.mouseScrollSensitivity[0].value,trackpad:a.opts.elm.range.trackpadScrollSensitivity[0].value},closeTimeout:a.opts.elm.range.closeTimeout[0].value,dirOpenDuration:a.opts.elm.range.dirOpenDuration[0].value,openDelay:a.opts.elm.range.openDelay[0].value,openAction:a.opts.elm.select.openAction[0].value,linkAction:a.opts.elm.select.linkAction[0].value,rememberState:a.opts.elm.select.rememberState[0].value,newTab:a.opts.elm.select.newTab[0].value};["rememberSearch","dirAccordion"].forEach(function(c){b[c]=a.helper.checkbox.isChecked(a.opts.elm.checkbox[c])}),chrome.storage.sync.set({behaviour:b},function(){a.showSuccessMessage("saved_message")})};var b=function(){a.opts.elm.keyboardShortcutInfo.children("a").on("click",function(a){a.preventDefault(),chrome.tabs.create({url:"chrome://extensions",active:!0})}),a.opts.elm.select.openAction.on("change",function(){"mousemove"===a.opts.elm.select.openAction[0].value?a.opts.elm.range.openDelay.parent("div."+a.opts.classes.configEntry).removeClass(a.opts.classes.hidden):a.opts.elm.range.openDelay.parent("div."+a.opts.classes.configEntry).addClass(a.opts.classes.hidden)})}},window.ContributeHelper=function(a){this.init=function(){chrome.storage.sync.get(["shareUserdata"],function(b){b.shareUserdata&&!0===b.shareUserdata&&a.opts.elm.checkbox.shareUserdata.trigger("click"),a.opts.elm.checkbox.shareUserdata.children("input[type='checkbox']").on("change",function(){chrome.storage.sync.set({shareUserdata:a.helper.checkbox.isChecked(a.opts.elm.checkbox.shareUserdata)},function(){a.showSuccessMessage("saved_share_userdata")})})}),a.opts.elm.contribute.action.on("click",function(c){switch(c.preventDefault(),b(c.currentTarget).parents("["+a.opts.attr.name+"]").eq(0).attr(a.opts.attr.name)){case"donation":window.open(a.opts.donateLink,"_blank");break;case"translation":window.open(chrome.extension.getURL("html/translate.html"),"_blank")}})}},window.FeedbackHelper=function(a){this.init=function(){a.opts.elm.feedback.faq.children("strong").on("click",function(c){c.preventDefault(),b(c.currentTarget).next("p").toggleClass(a.opts.classes.visible)})},this.send=function(){var c=a.opts.elm.textarea.feedbackMsg[0].value,d=a.opts.elm.field.feedbackEmail[0].value,e=d.length>0&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d),f=c.length>0;if(e&&f){var g=+new Date,h=a.helper.template.loading().appendTo(a.opts.elm.body);a.opts.elm.body.addClass(a.opts.classes.loading);var i=new XMLHttpRequest;i.open("POST",a.opts.ajax.feedback,!0),i.onload=function(){setTimeout(function(){a.opts.elm.textarea.feedbackMsg[0].value="",a.opts.elm.field.feedbackEmail[0].value="",a.opts.elm.body.removeClass(a.opts.classes.loading),h.remove(),a.showSuccessMessage("feedback_sent_message")},Math.max(0,1e3-(+new Date-g)))};var j=new FormData;j.append("email",d),j.append("msg",c),j.append("extension",JSON.stringify({name:a.opts.manifest.name,version:a.opts.manifest.version})),i.send(j)}else e?f||a.opts.elm.textarea.feedbackMsg.addClass(a.opts.classes.error):a.opts.elm.field.feedbackEmail.addClass(a.opts.classes.error);setTimeout(function(){b("."+a.opts.classes.error).removeClass(a.opts.classes.error)},700)}},window.FormHelper=function(c){this.init=function(){e(),d()};var d=function(){c.opts.elm.tab.children("div").on("scroll",function(a){Object.values(c.opts.elm.color).forEach(function(a){a.data("picker").fit()})})},e=function(){c.opts.elm.formElement.forEach(function(d){var e=b(d).attr(c.opts.attr.type),f=b(d).attr(c.opts.attr.name),g=b(d).attr(c.opts.attr.i18n)||"";b("<br />").insertAfter(d);var h=b("<label />").attr(c.opts.attr.i18n,g).insertAfter(d);switch(b("<p />").attr(c.opts.attr.i18n,g+"_desc").insertAfter(h),e){case"checkbox":c.opts.elm.checkbox[f]=c.helper.checkbox.get(c.opts.elm.body).insertAfter(h);break;case"text":case"email":c.opts.elm.field[f]=b("<input type='"+e+"' />").insertAfter(h),["placeholder"].forEach(function(a){var e=b(d).attr(c.opts.attr.field[a]);e&&c.opts.elm.field[f].attr(a,e)});break;case"textarea":c.opts.elm.textarea[f]=b("<textarea />").insertAfter(h);break;case"font":c.opts.elm.select[f]=b("<select />").insertAfter(h),chrome.fontSettings.getFontList(function(a){a.push({fontId:"Roboto",displayName:"Roboto ("+c.helper.i18n.get("settings_font_familiy_default")+")"}),a.sort(function(a,b){var c=a.displayName.toUpperCase(),d=b.displayName.toUpperCase();return c<d?-1:c>d?1:0}),a.forEach(function(a){0===c.opts.elm.select[f].children("option[value='"+a.fontId+"']").length()&&b("<option />").attr("value",a.fontId).text(a.displayName).appendTo(c.opts.elm.select[f])})});break;case"color":c.opts.elm.color[f]=b("<input type='text' />").addClass(c.opts.classes.color.field).insertAfter(h);var i=b("<span />").insertAfter(c.opts.elm.color[f]),j=new CP(c.opts.elm.color[f][0]);b(d).attr(c.opts.attr.color.alpha)&&(j.alpha=b("<input type='range' />").attr({min:0,max:1,step:.01,value:1}).appendTo(j.picker),j.alpha.on("change input",function(){return j.trigger("change")})),j.on("change",function(a){var b=CP._HSV2RGB(j.set());a&&(b=CP.HEX2RGB(a)),j.alpha&&j.alpha.css("background-image","linear-gradient(to right, transparent 0%, rgb("+b.join(",")+") 100%),url("+chrome.extension.getURL("img/settings/alpha.webp")+")"),b=j.alpha&&+j.alpha[0].value<1?"rgba("+b.join(",")+","+j.alpha[0].value+")":"rgb("+b.join(",")+")",c.opts.elm.color[f][0].value=b,c.opts.elm.color[f].trigger("change"),i.css("background-color",b)}),c.opts.elm.color[f].data("picker",j);break;case"range":c.opts.elm.range[f]=b("<input type='range' />").insertAfter(h),["min","max","step"].forEach(function(a){var e=b(d).attr(c.opts.attr.range[a]);e&&c.opts.elm.range[f].attr(a,e)}),c.opts.elm.range[f].attr("value",b(d).attr(c.opts.attr.value)||"");var k=b(d).attr(c.opts.attr.range.unit)||"",l=b("<span />").insertAfter(c.opts.elm.range[f]);c.opts.elm.range[f].on("input change",function(a){var b=a.currentTarget,d=b.max||100,e=b.min||0,g=Math.round(100*(b.value-e)/(d-e)),h=c.opts.elm.range[f].css("background-size").replace(/^.*\s/,g+"% ");c.opts.elm.range[f].css("background-size",h),l.text(b.value+k)}),c.opts.elm.range[f].trigger("input");break;case"select":c.opts.elm.select[f]=b("<select />").insertAfter(h),b(d).children("span").forEach(function(d){b("<option />").attr(a({value:b(d).attr(c.opts.attr.value)},c.opts.attr.i18n,b(d).attr(c.opts.attr.i18n))).appendTo(c.opts.elm.select[f])})}d.remove()})}},window.HelpHelper=function(a){this.init=function(){b("a."+a.opts.classes.gotoFeedback).on("click",function(b){b.preventDefault(),a.opts.elm.header.find("> ul > li["+a.opts.attr.name+"='feedback'] > a").trigger("click")}),b("a."+a.opts.classes.howto).on("click",function(a){a.preventDefault(),window.open(chrome.extension.getURL("html/howto.html")+"?tutorial=1","_blank")})}},window.settings=function(){var a=this;this.opts={classes:{tabs:{content:"tab",list:"tabBar",active:"active"},color:{field:"color"},checkbox:{box:"checkbox",active:"active",clicked:"clicked",focus:"focus"},hidden:"hidden",configEntry:"configEntry",success:"success",error:"error",loading:"loading",revert:"revert",visible:"visible",gotoFeedback:"gotoFeedback",howto:"howto",action:"action"},attr:{type:"data-type",appearance:"data-appearance",name:"data-name",i18n:"data-i18n",value:"data-value",tab:"data-tab",success:"data-successtext",style:"data-style",hideOnFalse:"data-hideOnFalse",pos:"data-pos",bg:"data-bg",range:{min:"data-min",max:"data-max",step:"data-step",unit:"data-unit"},color:{alpha:"data-alpha"},field:{placeholder:"data-placeholder"}},elm:{body:b("body"),title:b("head > title"),header:b("body > header"),content:b("section#content"),tab:b("section#content > div.tab"),contentTabs:b("ul.labels > li"),contentTabSections:b("ul.labels ~ div[data-name]"),copyrightDate:b("a#copyright > span"),keyboardShortcutInfo:b("p.shortcutInfo"),formElement:b("div.formElement"),appearance:{content:b("div.tab[data-name='appearance']"),backgroundChanger:b("menu.backgroundChanger > a")},contribute:{action:b("div.tab[data-name='contribute'] a.action")},feedback:{textarea:b("textarea#feedback"),email:b("input#feedbackEmail"),faq:b("div.faq")},button:{save:b("div.tab > header > button.save"),restore:b("div.tab > header > button.restore")},preview:{},checkbox:{},range:{},select:{},color:{},textarea:{},field:{}},events:{checkboxChanged:"blockbyte-bs-checkboxChanged",contentTabChanged:"blockbyte-bs-contentTabChanged"},ajax:{feedback:"https://blockbyte.de/ajax/extensions/feedback"},fontHref:"https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,100i,200i,300i,400i,500i",donateLink:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2VW2UADL99YEL",manifest:chrome.runtime.getManifest()},this.run=function(){c(),a.helper.form.init(),d(),a.helper.i18n.init(function(){f(),a.helper.template.footer().insertAfter(a.opts.elm.content),a.helper.i18n.parseHtml(document),a.opts.elm.title.text(a.opts.elm.title.text()+" - "+a.opts.manifest.short_name),a.helper.model.init(function(){a.helper.behaviour.init(),a.helper.appearance.init(),a.helper.feedback.init(),a.helper.contribute.init(),a.helper.help.init(),g(),e()})})},this.showSuccessMessage=function(b){a.opts.elm.body.attr(a.opts.attr.success,a.helper.i18n.get("settings_"+b)),a.opts.elm.body.addClass(a.opts.classes.success),setTimeout(function(){a.opts.elm.body.removeClass(a.opts.classes.success)},1500)};var c=function(){a.helper={model:new window.ModelHelper(a),checkbox:new window.CheckboxHelper(a),template:new window.TemplateHelper(a),i18n:new window.I18nHelper(a),form:new window.FormHelper(a),behaviour:new window.BehaviourHelper(a),appearance:new window.AppearanceHelper(a),feedback:new window.FeedbackHelper(a),contribute:new window.ContributeHelper(a),help:new window.HelpHelper(a)}},d=function(){a.opts.elm.header.prepend('<svg height="48" width="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>')},e=function(){a.opts.elm.contentTabs.children("a").on("click",function(c){c.preventDefault();var d=b(c.currentTarget).parent("li"),e=d.parents("div."+a.opts.classes.tabs.content).eq(0).attr(a.opts.attr.name),f=d.attr(a.opts.attr.type);d.siblings("li").removeClass(a.opts.classes.tabs.active),d.addClass(a.opts.classes.tabs.active),b(c.currentTarget).parents("ul").eq(0).siblings("div["+a.opts.attr.name+"]").forEach(function(c){b(c).attr(a.opts.attr.name)===f?b(c).removeClass(a.opts.classes.hidden):b(c).addClass(a.opts.classes.hidden)}),document.dispatchEvent(new CustomEvent(a.opts.events.contentTabChanged,{detail:{headerTab:e,contentTab:f},bubbles:!0,cancelable:!1}))}),a.opts.elm.contentTabSections.addClass(a.opts.classes.hidden),setTimeout(function(){a.opts.elm.contentTabs.forEach(function(c){b(c).hasClass(a.opts.classes.tabs.active)&&b(c).children("a").trigger("click")})},0)},f=function(){var c=b("<ul />").addClass(a.opts.classes.tabs.list).prependTo(a.opts.elm.header);a.opts.elm.tab.forEach(function(d){var e=b(d).attr(a.opts.attr.name);b("<li />").attr(a.opts.attr.name,e).html("<a href='#'>"+a.helper.i18n.get("settings_tab_"+e)+"</a>").appendTo(c)}),c.find("> li > a").on("click",function(d){d.preventDefault(),c.children("li").removeClass(a.opts.classes.tabs.active);var e=b(d.currentTarget).parent("li"),f=e.attr(a.opts.attr.name);e.addClass(a.opts.classes.tabs.active),a.opts.elm.tab.forEach(function(c){b(c).attr(a.opts.attr.name)===f?b(c).removeClass(a.opts.classes.hidden):b(c).addClass(a.opts.classes.hidden)}),location.hash=f,a.opts.elm.body.attr(a.opts.attr.tab,f)});var d=location.hash?location.hash.substr(1):null;c.find("> li > a").eq(0).trigger("click"),d&&c.find("> li["+a.opts.attr.name+"='"+d+"'] > a").trigger("click")},g=function(){a.opts.elm.button.save.on("click",function(b){switch(b.preventDefault(),a.opts.elm.body.attr(a.opts.attr.tab)){case"behaviour":a.helper.behaviour.save();break;case"appearance":a.helper.appearance.save();break;case"feedback":a.helper.feedback.send()}}),a.opts.elm.button.restore.on("click",function(b){b.preventDefault();var c=a.opts.elm.body.attr(a.opts.attr.tab);switch(c){case"behaviour":case"appearance":chrome.storage.sync.remove([c],function(){a.showSuccessMessage("restored_message"),setTimeout(function(){location.reload(!0)},1500)})}})}},(new window.settings).run()}(jsu);