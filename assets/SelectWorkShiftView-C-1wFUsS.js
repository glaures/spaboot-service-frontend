import{_ as ze,c as P,a as E,F as j,r as I,o as g,t as H}from"./index-BVx6h8Iz.js";function Re(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ve}=Object.prototype,{getPrototypeOf:se}=Object,V=(e=>t=>{const n=Ve.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>V(t)===e),J=e=>t=>typeof t===e,{isArray:B}=Array,k=J("undefined");function Je(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Oe=A("ArrayBuffer");function We(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Oe(e.buffer),t}const $e=J("string"),O=J("function"),Te=J("number"),W=e=>e!==null&&typeof e=="object",Ke=e=>e===!0||e===!1,q=e=>{if(V(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ge=A("Date"),Xe=A("File"),Ze=A("Blob"),Ye=A("FileList"),Qe=e=>W(e)&&O(e.pipe),et=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=V(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},tt=A("URLSearchParams"),nt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function Ae(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Pe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ge=e=>!k(e)&&e!==Pe;function Q(){const{caseless:e}=ge(this)&&this||{},t={},n=(r,s)=>{const i=e&&Ae(t,s)||s;q(t[i])&&q(r)?t[i]=Q(t[i],r):q(r)?t[i]=Q({},r):B(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const rt=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,i)=>{n&&O(s)?e[i]=Re(s,n):e[i]=s},{allOwnKeys:r}),e),st=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ot=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},it=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},at=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ct=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Te(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},lt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),ut=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},ft=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},dt=A("HTMLFormElement"),ht=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),pt=A("RegExp"),_e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},mt=e=>{_e(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return B(e)?r(e):r(String(e).split(t)),n},St=()=>{},Et=(e,t)=>(e=+e,Number.isFinite(e)?e:t),G="abcdefghijklmnopqrstuvwxyz",fe="0123456789",Ne={DIGIT:fe,ALPHA:G,ALPHA_DIGIT:G+G.toUpperCase()+fe},wt=(e=16,t=Ne.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function bt(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Rt=e=>{const t=new Array(10),n=(r,s)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=B(r)?[]:{};return L(r,(o,c)=>{const h=n(o,s+1);!k(h)&&(i[c]=h)}),t[s]=void 0,i}}return r};return n(e,0)},Ot=A("AsyncFunction"),Tt=e=>e&&(W(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:B,isArrayBuffer:Oe,isBuffer:Je,isFormData:et,isArrayBufferView:We,isString:$e,isNumber:Te,isBoolean:Ke,isObject:W,isPlainObject:q,isUndefined:k,isDate:Ge,isFile:Xe,isBlob:Ze,isRegExp:pt,isFunction:O,isStream:Qe,isURLSearchParams:tt,isTypedArray:lt,isFileList:Ye,forEach:L,merge:Q,extend:rt,trim:nt,stripBOM:st,inherits:ot,toFlatObject:it,kindOf:V,kindOfTest:A,endsWith:at,toArray:ct,forEachEntry:ut,matchAll:ft,isHTMLForm:dt,hasOwnProperty:ue,hasOwnProp:ue,reduceDescriptors:_e,freezeMethods:mt,toObjectSet:yt,toCamelCase:ht,noop:St,toFiniteNumber:Et,findKey:Ae,global:Pe,isContextDefined:ge,ALPHABET:Ne,generateString:wt,isSpecCompliantForm:bt,toJSONObject:Rt,isAsyncFn:Ot,isThenable:Tt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xe=m.prototype,Ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ce[e]={value:e}});Object.defineProperties(m,Ce);Object.defineProperty(xe,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(xe);return a.toFlatObject(e,o,function(h){return h!==Error.prototype},c=>c!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const At=null;function ee(e){return a.isPlainObject(e)||a.isArray(e)}function Fe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function de(e,t,n){return e?e.concat(t).map(function(s,i){return s=Fe(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Pt(e){return a.isArray(e)&&!e.some(ee)}const gt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,w){return!a.isUndefined(w[d])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function p(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!h&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?h&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,d,w){let b=f;if(f&&!w&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Pt(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(b=a.toArray(f)))return d=Fe(d),b.forEach(function(x,ve){!(a.isUndefined(x)||x===null)&&t.append(o===!0?de([d],ve,i):o===null?d:d+"[]",p(x))}),!1}return ee(f)?!0:(t.append(de(w,d,i),p(f)),!1)}const l=[],S=Object.assign(gt,{defaultVisitor:u,convertValue:p,isVisitable:ee});function R(f,d){if(!a.isUndefined(f)){if(l.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));l.push(f),a.forEach(f,function(b,N){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(N)?N.trim():N,d,S))===!0&&R(b,d?d.concat(N):[N])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function oe(e,t){this._pairs=[],e&&$(e,this,t)}const Be=oe.prototype;Be.append=function(t,n){this._pairs.push([t,n])};Be.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function _t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function De(e,t,n){if(!t)return e;const r=n&&n.encode||_t,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new oe(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class pe{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nt=typeof URLSearchParams<"u"?URLSearchParams:oe,xt=typeof FormData<"u"?FormData:null,Ct=typeof Blob<"u"?Blob:null,Ft={isBrowser:!0,classes:{URLSearchParams:Nt,FormData:xt,Blob:Ct},protocols:["http","https","file","blob","url","data"]},Le=typeof window<"u"&&typeof document<"u",Bt=(e=>Le&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Dt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Le,hasStandardBrowserEnv:Bt,hasStandardBrowserWebWorkerEnv:Dt},Symbol.toStringTag,{value:"Module"})),T={...kt,...Ft};function Lt(e,t){return $(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ue(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),h=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,h?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=jt(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Ut(r),s,n,0)}),n}return null}function It(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ie={transitional:ke,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Lt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return $(c?{"files[]":t}:t,h&&new h,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),It(t)):t}],transformResponse:[function(t){const n=this.transitional||ie.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ie.headers[e]={}});const ae=ie,Ht=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Ht[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},me=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function Mt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const vt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function X(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function zt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Vt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,h,p){const u=D(h);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(s,u);(!l||s[l]===void 0||p===!0||p===void 0&&s[l]!==!1)&&(s[l||h]=M(c))}const o=(c,h)=>a.forEach(c,(p,u)=>i(p,u,h));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!vt(t)?o(qt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Mt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||X(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=D(o),o){const c=a.findKey(r,o);c&&(!n||X(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||X(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=M(s),delete n[i];return}const c=t?zt(i):String(i).trim();c!==i&&delete n[i],n[c]=M(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[me]=this[me]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=D(o);r[c]||(Vt(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(K.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(K);const _=K;function Z(e,t){const n=this||ae,r=t||n,s=_.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function je(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,m,{__CANCEL__:!0});function Jt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wt=T.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $t(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Kt(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!$t(t)?Kt(e,t):t}const Gt=T.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Xt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Zt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(h){const p=Date.now(),u=r[i];o||(o=p),n[s]=h,r[s]=p;let l=i,S=0;for(;l!==s;)S+=n[l++],l=l%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),p-o<t)return;const R=u&&p-u;return R?Math.round(S*1e3/R):void 0}}function ye(e,t){let n=0;const r=Zt(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,h=r(c),p=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:h||void 0,estimated:h&&o&&p?(o-i)/h:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Yt=typeof XMLHttpRequest<"u",Qt=Yt&&function(e){return new Promise(function(n,r){let s=e.data;const i=_.from(e.headers).normalize();let{responseType:o,withXSRFToken:c}=e,h;function p(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}let u;if(a.isFormData(s)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[d,...w]=u?u.split(";").map(b=>b.trim()).filter(Boolean):[];i.setContentType([d||"multipart/form-data",...w].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(d+":"+w))}const S=Ie(e.baseURL,e.url);l.open(e.method.toUpperCase(),De(S,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function R(){if(!l)return;const d=_.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};Jt(function(x){n(x),p()},function(x){r(x),p()},b),l=null}if("onloadend"in l?l.onloadend=R:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(R)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||ke;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new m(w,b.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},T.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&Gt(S))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&Wt.read(e.xsrfCookieName);d&&i.set(e.xsrfHeaderName,d)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&a.forEach(i.toJSON(),function(w,b){l.setRequestHeader(b,w)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(h=d=>{l&&(r(!d||d.type?new U(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h)));const f=Xt(S);if(f&&T.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},te={http:At,xhr:Qt};a.forEach(te,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Se=e=>`- ${e}`,en=e=>a.isFunction(e)||e===null||e===!1,He={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!en(n)&&(r=te[(o=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([c,h])=>`adapter ${c} `+(h===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Se).join(`
`):" "+Se(i[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:te};function Y(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function Ee(e){return Y(e),e.headers=_.from(e.headers),e.data=Z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),He.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return Y(e),r.data=Z.call(e,e.transformResponse,r),r.headers=_.from(r.headers),r},function(r){return je(r)||(Y(e),r&&r.response&&(r.response.data=Z.call(e,e.transformResponse,r.response),r.response.headers=_.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof _?{...e}:e;function F(e,t){t=t||{};const n={};function r(p,u,l){return a.isPlainObject(p)&&a.isPlainObject(u)?a.merge.call({caseless:l},p,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(p,u,l){if(a.isUndefined(u)){if(!a.isUndefined(p))return r(void 0,p,l)}else return r(p,u,l)}function i(p,u){if(!a.isUndefined(u))return r(void 0,u)}function o(p,u){if(a.isUndefined(u)){if(!a.isUndefined(p))return r(void 0,p)}else return r(void 0,u)}function c(p,u,l){if(l in t)return r(p,u);if(l in e)return r(void 0,p)}const h={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(p,u)=>s(we(p),we(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=h[u]||s,S=l(e[u],t[u],u);a.isUndefined(S)&&l!==c||(n[u]=S)}),n}const qe="1.6.8",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const be={};ce.transitional=function(t,n,r){function s(i,o){return"[Axios v"+qe+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!be[o]&&(be[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function tn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],h=c===void 0||o(c,i,e);if(h!==!0)throw new m("option "+i+" must be "+h,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const ne={assertOptions:tn,validators:ce},C=ne.validators;class z{constructor(t){this.defaults=t,this.interceptors={request:new pe,response:new pe}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ne.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=_.concat(o,i);const c=[];let h=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(h=h&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const p=[];this.interceptors.response.forEach(function(d){p.push(d.fulfilled,d.rejected)});let u,l=0,S;if(!h){const f=[Ee.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,p),S=f.length,u=Promise.resolve(n);l<S;)u=u.then(f[l++],f[l++]);return u}S=c.length;let R=n;for(l=0;l<S;){const f=c[l++],d=c[l++];try{R=f(R)}catch(w){d.call(this,w);break}}try{u=Ee.call(this,R)}catch(f){return Promise.reject(f)}for(l=0,S=p.length;l<S;)u=u.then(p[l++],p[l++]);return u}getUri(t){t=F(this.defaults,t);const n=Ie(t.baseURL,t.url);return De(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(F(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});const v=z;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new U(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(s){t=s}),cancel:t}}}const nn=le;function rn(e){return function(n){return e.apply(null,n)}}function sn(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const on=re;function Me(e){const t=new v(e),n=Re(v.prototype.request,t);return a.extend(n,v.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Me(F(e,s))},n}const y=Me(ae);y.Axios=v;y.CanceledError=U;y.CancelToken=nn;y.isCancel=je;y.VERSION=qe;y.toFormData=$;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=rn;y.isAxiosError=sn;y.mergeConfig=F;y.AxiosHeaders=_;y.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=He.getAdapter;y.HttpStatusCode=on;y.default=y;const an=0,cn=1,ln=2,un=["HvoIcslIOtNBxnwFOlN07","6lkT0SW14Op8mOYrYcZ2Fl","3nLzWKs0IssG6xFh0GaTw6"],fn=["476vQxjUNuSdGQABy0Z8R9","6VpnHFiV2grce03YzpZ9Td","1iTP7nFj3d9kYfVlAcTP5q"],dn=["7s7doErEAr1jZauxnMWc70","SqwRez3grqXAXbgiL12q1","14FFqgHZIOSQTjoH7URVvB"],hn=["13J27SduyOR7hMKrZvk0O3","5vo4l2Q82HlZlCwPOlbMyG","5sn9GsMpw90ou947WdPWat"],pn={name:"SelectWorkShiftView",data(){return{allProducts:[]}},methods:{loadAllProducts(){y.get("https://api.spaboot.de/products?category=RES").then(e=>this.allProducts=e.data).catch(e=>console.log(e))},getProductById(e){return this.allProducts.find(t=>t.id===e)},getProductTypeByProductId(e){return e==="RES-0004"||e==="RES-0006"?ln:e==="RES-0010"||e==="RES-0009"?cn:an},prepare(e){const t=this.getProductById(e.target.value),n=un[this.getProductTypeByProductId(t.id)];this.$router.push({name:"process",params:{processId:n},query:{trip:t.trip}})},finalize(e){const t=this.getProductById(e.target.value),n=fn[this.getProductTypeByProductId(t.id)];this.$router.push({name:"process",params:{processId:n},query:{trip:t.trip}})},transferSelected(){this.$refs.transFromSelector.value&&this.$refs.transFromSelector.value!=="Bitte wähle"&&this.$refs.transToSelector.value&&this.$refs.transToSelector.value!=="Bitte wähle"&&this.transfer(this.$refs.transFromSelector.value,this.$refs.transToSelector.value)},transfer(e,t){console.log("transfer from "+e+" to "+t);const n=this.getProductById(this.$refs.transFromSelector.value),r=dn[this.getProductTypeByProductId(n.id)],s=this.getProductById(this.$refs.transToSelector.value),i=hn[this.getProductTypeByProductId(s.id)];this.$router.push({name:"process",params:{processId:r,processId2:i},query:{trip:n.trip,trip2:s.trip}})}},mounted(){this.loadAllProducts()}},mn={class:"container"},yn=E("div",{class:"h1"},"Wähle Deine Schicht",-1),Sn={class:"mt-5"},En=E("div",{class:"h3"},"Vorbereitung und Start",-1),wn=E("option",{value:null},"Bitte wähle",-1),bn=["value"],Rn={class:"mt-5"},On=E("div",{class:"h3"},"Übergang",-1),Tn={class:"input-group"},An=E("label",{for:"transFromSelector",class:"form-label"},"von",-1),Pn=E("option",{value:null},"Bitte wähle",-1),gn=["value"],_n=E("label",{for:"transToSelector",class:"form-label mt-3"},"nach",-1),Nn=E("option",{value:null},"Bitte wähle",-1),xn=["value"],Cn={class:"mt-5"},Fn=E("div",{class:"h3"},"Abholung",-1),Bn=E("option",{value:null},"Bitte wähle",-1),Dn=["value"];function kn(e,t,n,r,s,i){return g(),P("div",mn,[yn,E("div",Sn,[En,E("select",{id:"preparationSelector",class:"form-select form-control",onChange:t[0]||(t[0]=o=>i.prepare(o))},[wn,(g(!0),P(j,null,I(s.allProducts,o=>(g(),P("option",{key:o.id,value:o.id},H(o.name),9,bn))),128))],32)]),E("div",Rn,[On,E("div",Tn,[An,E("select",{id:"transFromSelector",class:"form-select form-control w-100",onChange:t[1]||(t[1]=(...o)=>i.transferSelected&&i.transferSelected(...o)),ref:"transFromSelector"},[Pn,(g(!0),P(j,null,I(s.allProducts,o=>(g(),P("option",{key:o.id,value:o.id},H(o.name),9,gn))),128))],544),_n,E("select",{id:"transToSelector",class:"form-select form-control w-100",onChange:t[2]||(t[2]=(...o)=>i.transferSelected&&i.transferSelected(...o)),ref:"transToSelector"},[Nn,(g(!0),P(j,null,I(s.allProducts,o=>(g(),P("option",{key:o.id,value:o.id},H(o.name),9,xn))),128))],544)])]),E("div",Cn,[Fn,E("select",{id:"finalizationSelector",class:"form-select form-control",onChange:t[3]||(t[3]=o=>i.finalize(o))},[Bn,(g(!0),P(j,null,I(s.allProducts,o=>(g(),P("option",{key:o.id,value:o.id},H(o.name),9,Dn))),128))],32)])])}const Un=ze(pn,[["render",kn]]);export{Un as default};
