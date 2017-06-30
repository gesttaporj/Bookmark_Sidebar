/*! (c) Philipp König under GPL-3.0 */
(e=>{"use strict";window.ModelHelper=function(e){let o={textColor:{light:"rgb(100,100,100)",dark:"rgb(200,200,200)"},sidebarMaskColor:{light:"rgba(255,255,255,0.8)",dark:"rgba(0,0,0,0.6)"},colorScheme:{light:"rgb(27,130,241)",dark:"rgb(31, 77, 128)"}},t={u:{openStates:{},hiddenEntries:{},scrollPos:{},separators:{},pinnedEntries:{},entriesLocked:!1,sort:{name:"custom",dir:"ASC"},mostViewedPerMonth:!1,viewAsTree:!0},b:{animations:!0,preventPageScroll:!1,pxTolerance:{windowed:20,maximized:1},openAction:"mousedown",newTab:"foreground",newTabPosition:"afterCurrent",linkAction:"current",dirAccordion:!1,rememberState:"all",rememberSearch:!0,dirOpenDuration:.5,openDelay:0,closeTimeout:1,initialOpenOnNewTab:!1},a:{sidebarPosition:"left",language:"default",showIndicator:!0,showIndicatorIcon:!0,darkMode:!1,showBookmarkIcons:!0,showDirectoryIcons:!0,styles:{colorScheme:o.colorScheme.light,textColor:o.textColor.light,indicatorWidth:"40px",indicatorIconSize:"32px",indicatorIconColor:"rgb(255,255,255)",indicatorColor:"rgba(0,0,0,0.5)",sidebarWidth:"350px",sidebarMaskColor:o.sidebarMaskColor.light,bookmarksFontSize:"14px",directoriesIconSize:"16px",bookmarksIconSize:"16px",bookmarksLineHeight:"40px",bookmarksDirIcon:"dir-1",bookmarksDirColor:o.textColor.light,bookmarksDirIndentation:"25px",bookmarksHorizontalPadding:"16px",overlayMaskColor:"rgba(0,0,0,0.5)",fontFamily:"default"}}},i={};this.init=(()=>new Promise(e=>{let o=["utility","behaviour","appearance"];chrome.storage.sync.get(o,t=>{i=t,o.forEach(e=>{void 0===i[e]&&(i[e]={})}),e()})})),this.getAllData=(()=>i),this.getData=(o=>{let r=o;"string"==typeof r&&(r=[r]);let a={};if(r.forEach(o=>{let r=o.split("/")[0],s=o.split("/")[1],n=null,l=null;switch(r){case"u":l=i.utility;break;case"b":l=i.behaviour;break;case"a":l=i.appearance}if(null!==l&&(void 0===l[s]?void 0!==t[r]&&void 0!==t[r][s]&&(n=t[r][s]):n=l[s]),"a/styles"===o){if(void 0===n.directoriesIconSize&&void 0!==n.bookmarksIconSize&&(n.directoriesIconSize=n.bookmarksIconSize),n=Object.assign({},t.a.styles,n),e.helper.font&&e.helper.font.isLoaded()){let o=e.helper.font.getFontInfo();n.fontFamily=o.name,Object.assign(n,o.fontWeights)}"__color_ee"===n.colorScheme&&(n.isEE=!0,n.colorScheme="#7b5fa4")}a[s]=n}),"string"==typeof o){let e=o.split("/")[1];a=a[e]}return a}),this.setData=(e=>new Promise(o=>{this.init().then(()=>{Object.keys(e).forEach(o=>{let t=o.split("/")[0],r=o.split("/")[1],a=e[o];switch(t){case"u":i.utility[r]=a;break;case"b":i.behaviour[r]=a;break;case"a":i.appearance[r]=a}});try{chrome.storage.sync.set(i,()=>{o()})}catch(e){o()}})})),this.call=((e,o={})=>new Promise(t=>{o.type=e,chrome.extension.sendMessage(o,e=>{t(e)})})),this.getDefaultColor=((e,t)=>o[e]?t&&o[e][t]?o[e][t]:o[e].light:null)}})(jsu);