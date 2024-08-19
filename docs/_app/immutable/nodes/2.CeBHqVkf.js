import{_ as ve}from"../chunks/preload-helper.D6kgxu3v.js";import{s as ye,n as M,o as we,i as _e}from"../chunks/scheduler.Bmg8oFKD.js";import{S as Ce,i as Te,e as w,c as _,a as S,d as p,o as C,g as A,z as Ee,s as E,t as z,f as O,b as W,p as G,h,A as Oe,j as Se}from"../chunks/index.ttLCn4K3.js";function Z(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}var Ae=typeof global=="object"&&global&&global.Object===Object&&global,Re=typeof self=="object"&&self&&self.Object===Object&&self,je=Ae||Re||Function("return this")(),x=je.Symbol,te=Object.prototype,Le=te.hasOwnProperty,Ue=te.toString,y=x?x.toStringTag:void 0;function $e(e){var t=Le.call(e,y),r=e[y];try{e[y]=void 0;var n=!0}catch{}var o=Ue.call(e);return n&&(t?e[y]=r:delete e[y]),o}var Pe=Object.prototype,De=Pe.toString;function Ne(e){return De.call(e)}var ke="[object Null]",Ie="[object Undefined]",V=x?x.toStringTag:void 0;function Me(e){return e==null?e===void 0?Ie:ke:V&&V in Object(e)?$e(e):Ne(e)}function ze(e){return e!=null&&typeof e=="object"}var We="[object Symbol]";function Ge(e){return typeof e=="symbol"||ze(e)&&Me(e)==We}function Ze(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var Ve=Array.isArray,Be=1/0,B=x?x.prototype:void 0,H=B?B.toString:void 0;function re(e){if(typeof e=="string")return e;if(Ve(e))return Ze(e,re)+"";if(Ge(e))return H?H.call(e):"";var t=e+"";return t=="0"&&1/e==-Be?"-0":t}function ne(e){return e==null?"":re(e)}function He(e,t,r,n){for(var o=-1,i=e==null?0:e.length;++o<i;)r=t(r,e[o],o,e);return r}function Je(e){return function(t){return e==null?void 0:e[t]}}var qe={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Ye=Je(qe),Fe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ke="\\u0300-\\u036f",Xe="\\ufe20-\\ufe2f",Qe="\\u20d0-\\u20ff",et=Ke+Xe+Qe,tt="["+et+"]",rt=RegExp(tt,"g");function nt(e){return e=ne(e),e&&e.replace(Fe,Ye).replace(rt,"")}var ot=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ut(e){return e.match(ot)||[]}var it=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function st(e){return it.test(e)}var oe="\\ud800-\\udfff",at="\\u0300-\\u036f",ct="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",ft=at+ct+lt,ue="\\u2700-\\u27bf",ie="a-z\\xdf-\\xf6\\xf8-\\xff",dt="\\xac\\xb1\\xd7\\xf7",pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ht="\\u2000-\\u206f",bt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",se="A-Z\\xc0-\\xd6\\xd8-\\xde",gt="\\ufe0e\\ufe0f",ae=dt+pt+ht+bt,ce="['’]",J="["+ae+"]",mt="["+ft+"]",le="\\d+",xt="["+ue+"]",fe="["+ie+"]",de="[^"+oe+ae+le+ue+ie+se+"]",vt="\\ud83c[\\udffb-\\udfff]",yt="(?:"+mt+"|"+vt+")",wt="[^"+oe+"]",pe="(?:\\ud83c[\\udde6-\\uddff]){2}",he="[\\ud800-\\udbff][\\udc00-\\udfff]",g="["+se+"]",_t="\\u200d",q="(?:"+fe+"|"+de+")",Ct="(?:"+g+"|"+de+")",Y="(?:"+ce+"(?:d|ll|m|re|s|t|ve))?",F="(?:"+ce+"(?:D|LL|M|RE|S|T|VE))?",be=yt+"?",ge="["+gt+"]?",Tt="(?:"+_t+"(?:"+[wt,pe,he].join("|")+")"+ge+be+")*",Et="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ot="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",St=ge+be+Tt,At="(?:"+[xt,pe,he].join("|")+")"+St,Rt=RegExp([g+"?"+fe+"+"+Y+"(?="+[J,g,"$"].join("|")+")",Ct+"+"+F+"(?="+[J,g+q,"$"].join("|")+")",g+"?"+q+"+"+Y,g+"+"+F,Ot,Et,le,At].join("|"),"g");function jt(e){return e.match(Rt)||[]}function Lt(e,t,r){return e=ne(e),t=t,t===void 0?st(e)?jt(e):ut(e):e.match(t)||[]}var Ut="['’]",$t=RegExp(Ut,"g");function Pt(e){return function(t){return He(Lt(nt(t).replace($t,"")),e,"")}}var Dt=Pt(function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}),Nt=Object.defineProperty,kt=(e,t,r)=>t in e?Nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$=(e,t,r)=>(kt(e,typeof t!="symbol"?t+"":t,r),r);function It(e,t){let r;const n=()=>{r!==void 0&&t&&t(r),r=void 0};return[()=>r===void 0?r=e(n):r,n]}class Mt{constructor(t,r={}){this.scope=t,this.options=r}print(t,...r){const n=new Date,o=Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,timeZone:"UTC"}).format(n),{textColor:i,bgColor:u}=this.options,s="font-weight: bold;padding: 0 5px;border-radius:5px";console[t](`%c${o}%c / %c${this.scope}`,`${s};background-color: lightblue;color:black`,"",`${s};${i?`color:${i};`:""}${u?`background-color:${u}`:""}`,...r)}error(...t){this.print("error",...t)}log(...t){this.print("log",...t)}}const zt=new Mt("SDK",{bgColor:"forestgreen",textColor:"white"});class K{constructor(){$(this,"listeners",new Map),$(this,"listenersCount",0),$(this,"subscribeListeners",[])}clear(){this.listeners.clear(),this.subscribeListeners=[]}get count(){return this.listenersCount+this.subscribeListeners.length}emit(t,...r){this.subscribeListeners.forEach(n=>n({event:t,args:r})),(this.listeners.get(t)||[]).forEach(([n,o])=>{n(...r),o&&this.off(t,n)})}on(t,r,n){let o=this.listeners.get(t);return o||this.listeners.set(t,o=[]),o.push([r,n]),this.listenersCount+=1,()=>this.off(t,r)}off(t,r){const n=this.listeners.get(t)||[];for(let o=0;o<n.length;o+=1)if(r===n[o][0]){n.splice(o,1),this.listenersCount-=1;return}}subscribe(t){return this.subscribeListeners.push(t),()=>this.unsubscribe(t)}unsubscribe(t){for(let r=0;r<this.subscribeListeners.length;r+=1)if(this.subscribeListeners[r]===t){this.subscribeListeners.splice(r,1);return}}}function X(e,t,r){return window.addEventListener(e,t,r),()=>window.removeEventListener(e,t,r)}function Wt(...e){let t=!1;const r=e.flat(1);return[n=>!t&&r.push(n),()=>{t||(t=!0,r.forEach(n=>n()))},t]}class P extends Error{constructor(t,r,n){super(r,{cause:n}),this.type=t,Object.setPrototypeOf(this,P.prototype)}}function D(e,t,r){return new P(e,t,r)}const Gt="ERR_UNEXPECTED_TYPE",me="ERR_PARSE";function j(){return D(Gt,"Value has unexpected type")}class xe{constructor(t,r,n){this.parser=t,this.isOptional=r,this.type=n}parse(t){if(!(this.isOptional&&t===void 0))try{return this.parser(t)}catch(r){throw D(me,`Unable to parse value${this.type?` as ${this.type}`:""}`,r)}}optional(){return this.isOptional=!0,this}}function N(e,t){return()=>new xe(e,!1,t)}const m=N(e=>{if(typeof e=="boolean")return e;const t=String(e);if(t==="1"||t==="true")return!0;if(t==="0"||t==="false")return!1;throw j()},"boolean");function Zt(e,t){const r={};for(const n in e){const o=e[n];if(!o)continue;let i,u;if(typeof o=="function"||"parse"in o)i=n,u=typeof o=="function"?o:o.parse.bind(o);else{const{type:s}=o;i=o.from||n,u=typeof s=="function"?s:s.parse.bind(s)}try{const s=u(t(i));s!==void 0&&(r[n]=s)}catch(s){throw D(me,`Unable to parse field "${n}"`,s)}}return r}function Vt(e){let t=e;if(typeof t=="string"&&(t=JSON.parse(t)),typeof t!="object"||t===null||Array.isArray(t))throw j();return t}function b(e,t){return new xe(r=>{const n=Vt(r);return Zt(e,o=>n[o])},!1,t)}const R=N(e=>{if(typeof e=="number")return e;if(typeof e=="string"){const t=Number(e);if(!Number.isNaN(t))return t}throw j()},"number"),a=N(e=>{if(typeof e=="string"||typeof e=="number")return e.toString();throw j()},"string");function Bt(e){return b({eventType:a(),eventData:t=>t}).parse(e)}function Ht(){["TelegramGameProxy_receiveEvent","TelegramGameProxy","Telegram"].forEach(e=>{delete window[e]})}function Jt(e,t){window.dispatchEvent(new MessageEvent("message",{data:JSON.stringify({eventType:e,eventData:t}),source:window.parent}))}function qt(){[["TelegramGameProxy_receiveEvent"],["TelegramGameProxy","receiveEvent"],["Telegram","WebView","receiveEvent"]].forEach(e=>{let t=window;e.forEach((r,n,o)=>{if(n===o.length-1){t[r]=Jt;return}r in t||(t[r]={}),t=t[r]})})}const Yt={clipboard_text_received:b({req_id:a(),data:e=>e===null?e:a().optional().parse(e)}),custom_method_invoked:b({req_id:a(),result:e=>e,error:a().optional()}),popup_closed:{parse(e){return b({button_id:t=>t==null?void 0:a().parse(t)}).parse(e??{})}},viewport_changed:b({height:R(),width:e=>e==null?window.innerWidth:R().parse(e),is_state_stable:m(),is_expanded:m()})};function Ft(){const e=new K,t=new K;t.subscribe(n=>{e.emit("event",{name:n.event,payload:n.args[0]})}),qt();const[,r]=Wt(Ht,X("resize",()=>{t.emit("viewport_changed",{width:window.innerWidth,height:window.innerHeight,is_state_stable:!0,is_expanded:!0})}),X("message",n=>{if(n.source!==window.parent)return;let o;try{o=Bt(n.data)}catch{return}const{eventType:i,eventData:u}=o,s=Yt[i];try{const c=s?s.parse(u):u;t.emit(...c?[i,c]:[i])}catch(c){zt.error(`An error occurred processing the "${i}" event from the Telegram application.
Please, file an issue here:
https://github.com/Telegram-Mini-Apps/telegram-apps/issues/new/choose`,o,c)}}),()=>e.clear(),()=>t.clear());return[{on:t.on.bind(t),off:t.off.bind(t),subscribe(n){return e.on("event",n)},unsubscribe(n){e.off("event",n)},get count(){return t.count+e.count}},r]}const[Kt,ur]=It(e=>{const[t,r]=Ft(),n=t.off.bind(t);return t.off=(o,i)=>{const{count:u}=t;n(o,i),u&&!t.count&&e()},[t,r]},([,e])=>e());function Xt(){return Kt()[0]}function Qt(e,t,r){return Xt().on(e,t,r)}b({id:R(),type:a(),title:a(),photoUrl:{type:a().optional(),from:"photo_url"},username:a().optional()},"Chat").optional();b({addedToAttachmentMenu:{type:m().optional(),from:"added_to_attachment_menu"},allowsWriteToPm:{type:m().optional(),from:"allows_write_to_pm"},firstName:{type:a(),from:"first_name"},id:R(),isBot:{type:m().optional(),from:"is_bot"},isPremium:{type:m().optional(),from:"is_premium"},languageCode:{type:a().optional(),from:"language_code"},lastName:{type:a().optional(),from:"last_name"},photoUrl:{type:a().optional(),from:"photo_url"},username:a().optional()},"User").optional();function Q(e,t,r){const n=e.slice();return n[4]=t[r],n[6]=r,n}function ee(e){let t,r,n,o=e[1][e[6]]+"",i,u,s,c,d,v=e[4]+"",T,L,U,k;return{c(){t=w("div"),r=E(),n=w("div"),i=z(o),u=E(),s=w("br"),c=E(),d=w("div"),T=z(v),L=E(),this.h()},l(f){t=_(f,"DIV",{class:!0,style:!0}),S(t).forEach(p),r=O(f),n=_(f,"DIV",{});var l=S(n);i=W(l,o),u=O(l),s=_(l,"BR",{}),c=O(l),d=_(l,"DIV",{title:!0,role:!0,class:!0});var I=S(d);T=W(I,v),I.forEach(p),L=O(l),l.forEach(p),this.h()},h(){C(t,"class","thumb svelte-63hxck"),G(t,"background-color",e[4]),C(d,"title","click to copy"),C(d,"role","button"),C(d,"class","color svelte-63hxck")},m(f,l){A(f,t,l),A(f,r,l),A(f,n,l),h(n,i),h(n,u),h(n,s),h(n,c),h(n,d),h(d,T),h(n,L),U||(k=Oe(d,"click",function(){_e(e[2](e[4]))&&e[2](e[4]).apply(this,arguments)}),U=!0)},p(f,l){e=f,l&1&&G(t,"background-color",e[4]),l&1&&v!==(v=e[4]+"")&&Se(T,v)},d(f){f&&(p(t),p(r),p(n)),U=!1,k()}}}function er(e){let t,r=Z(e[0]),n=[];for(let o=0;o<r.length;o+=1)n[o]=ee(Q(e,r,o));return{c(){t=w("div");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=_(o,"DIV",{class:!0});var i=S(t);for(let u=0;u<n.length;u+=1)n[u].l(i);i.forEach(p),this.h()},h(){C(t,"class","list")},m(o,i){A(o,t,i);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null)},p(o,[i]){if(i&7){r=Z(o[0]);let u;for(u=0;u<r.length;u+=1){const s=Q(o,r,u);n[u]?n[u].p(s,i):(n[u]=ee(s),n[u].c(),n[u].m(t,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=r.length}},i:M,o:M,d(o){o&&p(t),Ee(n,o)}}}function tr(e,t,r){let n=[],o=["accentTextColor","bgColor","buttonColor","buttonTextColor","destructiveTextColor","headerBgColor","hintColor","linkColor","secondaryBgColor","sectionBgColor","sectionHeaderTextColor","subtitleTextColor","textColor"];const i=s=>o.map(c=>getComputedStyle(s).getPropertyValue(`--tg-theme-${Dt(c)}`));return we(async()=>{await ve(()=>import("../chunks/index.D9Nb2HTe.js").then(c=>c.i),[],import.meta.url);const s=document.querySelector("html");r(0,n=i(s)),Qt("theme_changed",()=>{const c=document.querySelector("html");r(0,n=i(c))})}),[n,o,s=>{navigator.clipboard.writeText(s)}]}class ir extends Ce{constructor(t){super(),Te(this,t,tr,er,ye,{})}}export{ir as component};
