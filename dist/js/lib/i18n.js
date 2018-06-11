/*! (c) Philipp König under GPL-3.0 */
(e=>{"use strict";window.I18nHelper=function(t){let a=null,l={},g=null,i="data-i18n",n="data-i18nReplaces";this.init=(()=>new Promise(e=>{t.helper.model.call("langvars").then(t=>{a=t.language,l=t.vars,g=t.dir,e()})})),this.getLanguage=(()=>a),this.isRtl=(()=>"rtl"===g),this.getUILanguage=(()=>chrome.i18n.getUILanguage()),this.getDefaultLanguage=(()=>e.opts.manifest.default_locale),this.getLocaleSortCollator=(()=>new Intl.Collator([this.getUILanguage(),this.getDefaultLanguage()])),this.getLocaleDate=(e=>e.toLocaleDateString([this.getUILanguage(),this.getDefaultLanguage()],{year:"numeric",month:"2-digit",day:"2-digit"})),this.parseHtml=(t=>{e(t).find("["+i+"]").forEach(t=>{let a=null,l=e(t).attr(i);if(l){let g=[],i=e(t).attr(n);i&&(g=i.split(",")),a=this.get(l,g)}a?(e(t).removeAttr(i),e(t).html(a)):e(t).remove()})}),this.get=((e,t=[])=>{let a="",g=l[e];return g&&g.message&&(a=g.message,t.forEach((e,t)=>{a=a.replace(new RegExp("\\{"+(t+1)+"\\}"),e)}),a=(a=(a=a.replace(/\[b\](.*)\[\/b\]/,"<strong>$1</strong>")).replace(/\[a\](.*)\[\/a\]/,"<a href='#'>$1</a>")).replace(/\[em\](.*)\[\/em\]/,"<em>$1</em>")),a})}})(jsu);