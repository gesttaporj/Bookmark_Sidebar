/*! (c) Philipp König under GPL-3.0 */
(e=>{"use strict";window.I18nHelper=function(a){let t=null,l={},n={i18n:"data-i18n",i18nReplaces:"data-i18nReplaces"};this.init=(()=>new Promise(e=>{l={},a.helper.model.call("languageInfos").then(n=>{let g=a.helper.model.getData("a/language");"default"===g&&(g=chrome.i18n.getUILanguage());let i=this.getDefaultLanguage();[g,i].some(g=>{if(n.infos&&n.infos[g]&&n.infos[g].available)return t=g,a.helper.model.call("langvars",{lang:g,defaultLang:i}).then(a=>{a&&a.langVars&&(l=a.langVars,e())}),!0})})})),this.getLanguage=(()=>t),this.getDefaultLanguage=(()=>a.opts.manifest.default_locale),this.getLocaleSortCollator=(()=>new Intl.Collator([chrome.i18n.getUILanguage(),this.getDefaultLanguage()])),this.getLocaleDate=(e=>e.toLocaleDateString([chrome.i18n.getUILanguage(),this.getDefaultLanguage()],{year:"numeric",month:"2-digit",day:"2-digit"})),this.parseHtml=(a=>{e(a).find("["+n.i18n+"]").forEach(a=>{let t=null,l=e(a).attr(n.i18n);if(l){let g=[],i=e(a).attr(n.i18nReplaces);i&&(g=i.split(",")),t=this.get(l,g)}t?(e(a).removeAttr(n.i18n),e(a).html(t)):e(a).remove()})}),this.get=((e,a=[])=>{let t="",n=l[e];return n&&n.message&&(t=n.message,a.forEach((e,a)=>{t=t.replace(new RegExp("\\{"+(a+1)+"\\}"),e)}),t=t.replace(/\[b\](.*)\[\/b\]/,"<strong>$1</strong>"),t=t.replace(/\[a\](.*)\[\/a\]/,"<a href='#'>$1</a>"),t=t.replace(/\[em\](.*)\[\/em\]/,"<em>$1</em>")),t})}})(jsu);