"use strict";(()=>{var V=Object.defineProperty;var e=(b,f)=>V(b,"name",{value:f,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[6686,7157],{2235:(b,f,o)=>{o.d(f,{S:()=>_});function r(p){const n=document.querySelectorAll(p);if(n.length>0)return n[n.length-1]}e(r,"queryLast");function E(){const p=r("meta[name=analytics-location]");return p?p.content:window.location.pathname}e(E,"pagePathname");function l(){const p=r("meta[name=analytics-location-query-strip]");let n="";p||(n=window.location.search);const v=r("meta[name=analytics-location-params]");v&&(n+=(n?"&":"?")+v.content);for(const d of document.querySelectorAll("meta[name=analytics-param-rename]")){const h=d.content.split(":",2);n=n.replace(new RegExp(`(^|[?&])${h[0]}($|=)`,"g"),`$1${h[1]}$2`)}return n}e(l,"pageQuery");function _(){return`${window.location.protocol}//${window.location.host}${E()+l()}`}e(_,"requestUri")},81503:(b,f,o)=>{o.d(f,{$1:()=>E,d8:()=>_,ej:()=>r,kT:()=>p});function r(n){return E(n)[0]}e(r,"getCookie");function E(n){const v=[];for(const d of l()){const[h,g]=d.trim().split("=");n===h&&typeof g!="undefined"&&v.push({key:h,value:g})}return v}e(E,"getCookies");function l(){try{return document.cookie.split(";")}catch{return[]}}e(l,"readCookies");function _(n,v,d=null,h=!1,g="lax"){let y=document.domain;if(y==null)throw new Error("Unable to get document domain");y.endsWith(".github.com")&&(y="github.com");const S=location.protocol==="https:"?"; secure":"",k=d?`; expires=${d}`:"";h===!1&&(y=`.${y}`);try{document.cookie=`${n}=${v}; path=/; domain=${y}${k}${S}; samesite=${g}`}catch{}}e(_,"setCookie");function p(n,v=!1){let d=document.domain;if(d==null)throw new Error("Unable to get document domain");d.endsWith(".github.com")&&(d="github.com");const h=new Date().getTime(),g=new Date(h-1).toUTCString(),y=location.protocol==="https:"?"; secure":"",S=`; expires=${g}`;v===!1&&(d=`.${d}`);try{document.cookie=`${n}=''; path=/; domain=${d}${S}${y}`}catch{}}e(p,"deleteCookie")},26360:(b,f,o)=>{o.d(f,{LN:()=>g,aJ:()=>P,cI:()=>O,eK:()=>S,mT:()=>y});var r=o(79785),E=o(43452),l=o(82918),_=o(50232),p=o(28382),n=o(2235);let v=!1,d=0;const h=Date.now();function g(i){i.error&&k(a(C(i.error)))}e(g,"reportEvent");async function y(i){if(!!i.promise)try{await i.promise}catch(u){k(a(C(u)))}}e(y,"reportPromiseRejectionEvent");function S(i,u={}){i&&i.name!=="AbortError"&&k(a(C(i),u))}e(S,"reportError");async function k(i){var u,T;if(!D())return;const t=(T=(u=document.head)==null?void 0:u.querySelector('meta[name="browser-errors-url"]'))==null?void 0:T.content;if(!!t){if(U(i.error.stacktrace)){v=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(i)})}catch{}}}e(k,"report");function C(i){return{type:i.name,value:i.message,stacktrace:O(i)}}e(C,"formatError");function a(i,u={}){return Object.assign({error:i,sanitizedUrl:(0,n.S)()||window.location.href,readyState:document.readyState,referrer:(0,r.wP)(),timeSinceLoad:Math.round(Date.now()-h),user:P()||void 0,bundler:L()},u)}e(a,"errorContext");function O(i){return(0,p.Q)(i.stack||"").map(u=>({filename:u.file||"",function:String(u.methodName),lineno:(u.lineNumber||0).toString(),colno:(u.column||0).toString()}))}e(O,"stacktrace");const x=/(chrome|moz|safari)-extension:\/\//;function U(i){return i.some(u=>x.test(u.filename)||x.test(u.function))}e(U,"isExtensionError");function P(){var i,u;const T=(u=(i=document.head)==null?void 0:i.querySelector('meta[name="user-login"]'))==null?void 0:u.content;return T||`anonymous-${(0,l.b)()}`}e(P,"pageUser");let R=!1;window.addEventListener("pageshow",()=>R=!1),window.addEventListener("pagehide",()=>R=!0),document.addEventListener(r.QE.ERROR,i=>{k(a({type:"SoftNavError",value:i.detail,stacktrace:O(new Error)}))});function D(){return!R&&!v&&d<10&&(0,_.Gb)()&&!(0,E.Z)(document)}e(D,"reportable");function L(){return"webpack"}e(L,"bundlerName"),typeof BroadcastChannel=="function"&&new BroadcastChannel("shared-worker-error").addEventListener("message",u=>{S(u.data.error)})},43452:(b,f,o)=>{o.d(f,{Z:()=>r});function r(E){var l,_;const p=(_=(l=E.head)==null?void 0:l.querySelector('meta[name="expected-hostname"]'))==null?void 0:_.content;if(!p)return!1;const n=p.replace(/\.$/,"").split(".").slice(-2).join("."),v=E.location.hostname.replace(/\.$/,"").split(".").slice(-2).join(".");return n!==v}e(r,"detectProxySite")},60785:(b,f,o)=>{o.d(f,{Z:()=>E});class r{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}e(r,"NoOpStorage");function E(l,_={throwQuotaErrorsOnSet:!1},p=window){let n;try{n=p[l]}catch{n=new r}const{throwQuotaErrorsOnSet:v}=_;function d(y){try{return n.getItem(y)}catch{return null}}e(d,"getItem");function h(y,S){try{n.setItem(y,S)}catch(k){if(v&&k.message.toLowerCase().includes("quota"))throw k}}e(h,"setItem");function g(y){try{n.removeItem(y)}catch{}}return e(g,"removeItem"),{getItem:d,setItem:h,removeItem:g}}e(E,"safeStorage")},46836:(b,f,o)=>{o.d(f,{LS:()=>l,cl:()=>_,rV:()=>E});var r=o(60785);const{getItem:E,setItem:l,removeItem:_}=(0,r.Z)("sessionStorage")},79785:(b,f,o)=>{o.d(f,{Ak:()=>k,F6:()=>U,FP:()=>y,LD:()=>g,OE:()=>h,Po:()=>d,QE:()=>l,Xk:()=>O,Ys:()=>x,wP:()=>P});var r=o(46836),E=o(2235);const l=Object.freeze({INITIAL:"soft-nav:initial",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error"}),_="soft-navigation-fail",p="soft-navigation-referrer",n="soft-navigation-marker",v="reload";function d(){return(0,r.rV)(n)==="1"}e(d,"inSoftNavigation");function h(){return Boolean(C())}e(h,"hasSoftNavFailure");function g(){(0,r.LS)(n,"1"),(0,r.LS)(p,(0,E.S)()||window.location.href)}e(g,"startSoftNav");function y(){(0,r.LS)(n,"0")}e(y,"endSoftNav");function S(){(0,r.LS)(n,"0"),(0,r.cl)(p),(0,r.cl)(_)}e(S,"clearSoftNav");function k(R){(0,r.LS)(_,R||v)}e(k,"setSoftNavFailReason");function C(){return(0,r.rV)(_)}e(C,"getSoftNavFailReason");let a=0;function O(){a+=1,document.dispatchEvent(new CustomEvent(l.SUCCESS,{detail:a}))}e(O,"softNavSucceeded");function x(){document.dispatchEvent(new CustomEvent(l.ERROR,{detail:C()||v})),a=0,S()}e(x,"softNavFailed");function U(){document.dispatchEvent(new CustomEvent(l.INITIAL)),a=0,S()}e(U,"softNavInitial");function P(){return(0,r.rV)(p)||document.referrer}e(P,"getSoftNavReferrer")},70322:(b,f,o)=>{var r=o(26360),E=o(2235),l=o(48266);const _={handleError(t){d(t)}};function p(){var t;n();const c=(t=document.head.querySelector("meta[name=optimizely-datafile]"))==null?void 0:t.content;return l.ZP.createInstance({datafile:c,errorHandler:_})}e(p,"createInstance");function n(){const t=v("optimizely.logLevel");t?l.ZP.setLogLevel(t):l.ZP.setLogger(null)}e(n,"configureLogger");function v(t){var c;try{return(c=window.localStorage)==null?void 0:c.getItem(t)}catch{return null}}e(v,"localStorage");async function d(t){var c,s;const m=(s=(c=document.head)==null?void 0:c.querySelector('meta[name="browser-optimizely-client-errors-url"]'))==null?void 0:s.content;if(!m)return;const w={message:t.message,stack:t.stack,stacktrace:(0,r.cI)(t),sanitizedUrl:(0,E.S)()||window.location.href,user:(0,r.aJ)()||void 0};try{await fetch(m,{method:"post",body:JSON.stringify(w)})}catch{}}e(d,"reportError");var h=o(81503),g=o(82918),y=o(64463),S=o(59753),k,C;let a;(async function(){a=p(),await a.onReady()})();function O(t){return t.toLowerCase().replace(/-(.)/g,function(c,s){return s.toUpperCase()})}e(O,"camelCase");function x(t){const c={};for(const{name:s,value:m}of t.attributes)if(s.startsWith("data-optimizely-meta-")){const w=s.replace("data-optimizely-meta-","");m&&m.trim().length&&(c[O(w)]=m)}return c}e(x,"getUserAttributes"),(0,S.on)("click","[data-optimizely-event]",function(t){if(!a)return;const c=t.currentTarget,s=c.getAttribute("data-optimizely-event")||"",[m,w]=s.trim().split(/\s*,\s*/),I=x(c);m&&w?a.track(m,w,I):m&&a.track(m,(0,g.b)(),I)}),(0,y.N7)("[data-optimizely-experiment]",t=>{if(!a)return;const c=t.getAttribute("data-optimizely-experiment");if(!c||t.hidden)return;const s=x(t),m=a.activate(c,(0,g.b)(),s);if(!m)return;const w=t.querySelectorAll("[data-optimizely-variation]");for(const I of w){const A=I.getAttribute("data-optimizely-variation");I.hidden=A!==m}});const U=((C=(k=document.querySelector('meta[name="enabled-homepage-translation-languages"]'))==null?void 0:k.getAttribute("content"))==null?void 0:C.split(","))||[],P=(0,h.$1)("_locale_experiment").length>0&&(0,h.$1)("_locale_experiment")[0].value==="ko"&&U.includes("ko");P&&window.location.pathname==="/"&&R(),P&&window.location.pathname==="/join"&&D();async function R(){var t,c;const s="ko_homepage_translation",m=(0,g.b)(),w=(c=(t=(0,h.$1)("_locale")[0])==null?void 0:t.value)==null?void 0:c.slice(0,2);a.setForcedVariation(s,m,w),a.activate(s,m);const I=document.querySelectorAll("[data-optimizely-variation]");for(const A of I)A.hidden=w!==A.getAttribute("data-optimizely-variation");for(const A of document.querySelectorAll('form[action^="/join"]'))A.addEventListener("submit",()=>{a.track("submit.homepage_signup",m)});for(const A of document.querySelectorAll('a[href^="/join"]'))A.addEventListener("click",()=>{a.track("click.homepage_signup",m)})}e(R,"runKoreanHomepageExperiment");async function D(){var t;(t=document.getElementById("signup-form"))==null||t.addEventListener("submit",()=>{const c="ko_homepage_translation",s=(0,g.b)();a.activate(c,s),a.track("submit.create_account",s)})}e(D,"trackSignupsFromKoreanHomepage");const L=document.querySelector('meta[name^="user-currency"]');L&&window.location.pathname==="/pricing"&&u();async function u(){var t,c,s;const m=((c=(t=document.querySelector('meta[name^="supported-currencies"]'))==null?void 0:t.getAttribute("content"))==null?void 0:c.split(","))||[],w="local_currency_pricing",I="view.pricing_page",A="usd",z="localized_currency",N=(0,g.b)(),$=(s=L==null?void 0:L.getAttribute("content"))==null?void 0:s.toUpperCase(),M=new URLSearchParams(window.location.search);if($==="USD"||!$||!m.includes($))return;M.has("currency")&&a.setForcedVariation(w,N,z);const F=a.activate(w,N)===A?"USD":$;a.track(I,N,{requestedCurrency:$});for(const K of document.querySelectorAll("[data-currency]"))K.hidden=K.getAttribute("data-currency")!==F}e(u,"runCurrencyExperiment"),(0,S.on)("click","#signup_button",function(){var t,c;if(!a||!L)return;const s=new URLSearchParams(document.location.href);if(!(s.get("pricing_exp")&&((t=s.get("ref_page"))==null?void 0:t.startsWith("/pricing"))))return;const w="submit.create_account",I=(c=L==null?void 0:L.getAttribute("content"))==null?void 0:c.toUpperCase();a.track(w,(0,g.b)(),{requestedCurrency:I})}),window.location.pathname==="/settings/profile"&&T();async function T(){if(!a)return;const t=(0,g.b)();a.activate("test_experiment",t),a.track("test_event",t)}e(T,"runTestExperiment")},55830:(b,f,o)=>{o.r(f),o.d(f,{v4:()=>r});function r(){return crypto.randomUUID()}e(r,"v4")}},b=>{var f=e(r=>b(b.s=r),"__webpack_exec__");b.O(0,[5724,4978],()=>f(70322));var o=b.O()}]);})();

//# sourceMappingURL=optimizely-50883bdbd905.js.map