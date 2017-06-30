/*! (c) Philipp König under GPL-3.0 */
(e=>{"use strict";window.onboarding=function(){this.opts={elm:{body:e("body"),title:e("head > title"),sidebar:{left:e("div#sidebar")}},classes:{initLoading:"initLoading",slide:"slide",skip:"skip",close:"close",gotoSettings:"gotoSettings",large:"large",visible:"visible"},attr:{name:"data-name",value:"data-value",position:"data-position",openType:"data-openType",surface:"data-surface"},events:{sidebarOpened:"blockbyte-bs-sidebar-opened"},manifest:chrome.runtime.getManifest()},this.run=(()=>{t();let r=this.helper.template.loading().appendTo(this.opts.elm.body);this.helper.model.init().then(()=>this.helper.i18n.init()).then(()=>{this.helper.font.init(),this.helper.stylesheet.init(),this.helper.stylesheet.addStylesheets(["onboarding"],e(document)),this.helper.i18n.parseHtml(document),this.opts.elm.title.text(this.opts.elm.title.text()+" - "+this.helper.i18n.get("extension_name")),this.opts.elm.sidebar.right=e(this.opts.elm.sidebar.left[0].outerHTML).appendTo(this.opts.elm.body),this.opts.elm.sidebar.right.attr(this.opts.attr.position,"right"),s(),i(),o(),a(),l(),n(),this.helper.model.call("trackPageView",{page:"/onboarding"}),setTimeout(()=>{this.opts.elm.body.removeClass(this.opts.classes.initLoading),location.href.search(/(\?|\&)skip\=1/)>-1?p(!0):h("intro"),setTimeout(()=>{r.remove()},300)},500)})});let t=()=>{this.helper={i18n:new window.I18nHelper(this),font:new window.FontHelper(this),stylesheet:new window.StylesheetHelper(this),template:new window.TemplateHelper(this),model:new window.ModelHelper(this)}},s=()=>{e("section."+this.opts.classes.slide+"["+this.opts.attr.name+"='intro'] > a").on("click",t=>{t.preventDefault(),e(t.currentTarget).hasClass(this.opts.classes.skip)?p(!0):r()})},i=()=>{e("section."+this.opts.classes.slide+"["+this.opts.attr.name+"='position'] > a").on("mouseenter click",t=>{t.preventDefault();let s=e(t.currentTarget).attr(this.opts.attr.value);this.opts.elm.body.attr(this.opts.attr.position,s),Object.values(this.opts.elm.sidebar).forEach(e=>{e.removeClass(this.opts.classes.visible)}),this.opts.elm.sidebar[s].addClass(this.opts.classes.visible),"click"===t.type&&this.helper.model.setData({"a/sidebarPosition":s}).then(()=>{r()})}).on("mouseleave",t=>{let s=e(t.currentTarget).parent();setTimeout(()=>{s.hasClass(this.opts.classes.visible)&&Object.values(this.opts.elm.sidebar).forEach(e=>{e.removeClass(this.opts.classes.visible)})},0)})},o=()=>{e("section."+this.opts.classes.slide+"["+this.opts.attr.name+"='surface'] > a").on("mouseenter click",t=>{t.preventDefault();let s=e(t.currentTarget).attr(this.opts.attr.value);if(this.opts.elm.body.attr(this.opts.attr.surface,s),"click"===t.type){let e=this.helper.model.getData("a/styles");e.colorScheme=this.helper.model.getDefaultColor("colorScheme",s),e.textColor=this.helper.model.getDefaultColor("textColor",s),e.bookmarksDirColor=this.helper.model.getDefaultColor("textColor",s),e.sidebarMaskColor=this.helper.model.getDefaultColor("sidebarMaskColor",s),this.helper.model.setData({"a/darkMode":"dark"===s,"a/styles":e}).then(()=>{r()})}}).on("mouseleave",t=>{let s=e(t.currentTarget).parent();setTimeout(()=>{s.hasClass(this.opts.classes.visible)&&this.opts.elm.body.removeAttr(this.opts.attr.surface)},0)})},a=()=>{e("section."+this.opts.classes.slide+"["+this.opts.attr.name+"='openAction'] > a").on("click",t=>{t.preventDefault();let s=e(t.currentTarget).attr(this.opts.attr.value);this.helper.model.setData({"b/openAction":s}).then(()=>{p()})})},l=()=>{e(document).on(this.opts.events.sidebarOpened,()=>{e("section."+this.opts.classes.slide+"["+this.opts.attr.name+"='finished']").hasClass(this.opts.classes.visible)||h("finished")})},n=()=>{e("section."+this.opts.classes.slide+"["+this.opts.attr.name+"='finished'] > a").on("click",t=>{t.preventDefault(),e(t.currentTarget).hasClass(this.opts.classes.gotoSettings)?location.href=chrome.extension.getURL("html/settings.html"):e(t.currentTarget).hasClass(this.opts.classes.close)&&window.close()})},r=()=>{let t=e("section."+this.opts.classes.slide+"."+this.opts.classes.visible).next("section."+this.opts.classes.slide).attr(this.opts.attr.name);h(t)},h=(t,s=!1)=>{e("section."+this.opts.classes.slide+"."+this.opts.classes.visible).removeClass(this.opts.classes.visible),setTimeout(()=>{this.helper.model.call("trackEvent",{category:"onboarding",action:"view"+(s?"_direct":""),label:t}),e("section."+this.opts.classes.slide+"["+this.opts.attr.name+"='"+t+"']").addClass(this.opts.classes.visible)},300)},p=(t=!1)=>{h("handson",t),d(),Object.values(this.opts.elm.sidebar).forEach(e=>{e.removeClass(this.opts.classes.visible)});let s=e("section."+this.opts.classes.slide+"["+this.opts.attr.name+"='handson']");t&&s.children("p."+this.opts.classes.large).text(this.helper.i18n.get("onboarding_handson_desc_direct"));let i=this.helper.model.getData(["b/openAction","a/sidebarPosition"]);if(this.opts.elm.body.attr(this.opts.attr.position,i.sidebarPosition),"icon"===i.openAction)e("<p />").text(this.helper.i18n.get("onboarding_handson_icon_desc")).appendTo(s);else{let t=this.helper.i18n.get("onboarding_"+i.sidebarPosition);if(e("<p />").text(this.helper.i18n.get("onboarding_handson_mouse_desc_1",[t])).appendTo(s),"mousemove"!==i.openAction){let t=this.helper.i18n.get("onboarding_"+("contextmenu"===i.openAction?"right":"left"));e("<p />").text(this.helper.i18n.get("onboarding_handson_mouse_desc_2",[t])).appendTo(s)}}setTimeout(()=>{this.opts.elm.body.attr(this.opts.attr.openType,"icon"===i.openAction?"icon":"mouse")},300)},d=()=>{this.opts.manifest.content_scripts[0].css.forEach(t=>{e("head").append("<link href='"+chrome.extension.getURL(t)+"' type='text/css' rel='stylesheet' />")});let t=(e=0)=>{let s=this.opts.manifest.content_scripts[0].js[e];if(void 0!==s){let i=document.createElement("script");document.head.appendChild(i),i.onload=(()=>t(e+1)),i.src="/"+s}};t()}},(new window.onboarding).run()})(jsu);