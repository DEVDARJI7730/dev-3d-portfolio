(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ph(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ma={duration:.5,overwrite:!1,delay:0},Lc,$t,yt,Kn=1e8,_t=1/Kn,$l=Math.PI*2,Dp=$l/4,Up=0,Lh=Math.sqrt,Ip=Math.cos,Np=Math.sin,Yt=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},Ci=function(e){return typeof e=="number"},Dc=function(e){return typeof e>"u"},mi=function(e){return typeof e=="object"},Mn=function(e){return e!==!1},Uc=function(){return typeof window<"u"},La=function(e){return Rt(e)||Yt(e)},Dh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,Op=/random\([^)]+\)/g,Fp=/,\s*/g,_u=/(?:-?\.?\d|\.)+/gi,Uh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ih=/[+-]=-?[.\d]+/,Bp=/[^,'"\[\]\s]+/gi,zp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,li,Kl,Ic,Gn={},Ao={},Nh,Oh=function(e){return(Ao=As(e,Gn))&&An},Nc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_a=function(e,t){return!t&&console.warn(e)},Fh=function(e,t){return e&&(Gn[e]=t)&&Ao&&(Ao[e]=t)||Gn},ga=function(){return 0},kp={suppressEvents:!0,isStart:!0,kill:!1},_o={suppressEvents:!0,kill:!1},Gp={suppressEvents:!0},Oc={},qi=[],Zl={},Bh,Dn={},sl={},gu=30,go=[],Fc="",Bc=function(e){var t=e[0],n,i;if(mi(t)||Rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=go.length;i--&&!go[i].targetTest(t););n=go[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ad(e[i],n)))||e.splice(i,1);return e},Sr=function(e){return e._gsap||Bc(Zn(e))[0]._gsap},zh=function(e,t,n){return(n=e[t])&&Rt(n)?e[t]():Dc(n)&&e.getAttribute&&e.getAttribute(t)||n},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},gs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Hp=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},wo=function(){var e=qi.length,t=qi.slice(0),n,i;for(Zl={},qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zc=function(e){return!!(e._initted||e._startAt||e.add)},kh=function(e,t,n,i){qi.length&&!$t&&wo(),e.render(t,n,!!($t&&t<0&&zc(e))),qi.length&&!$t&&wo()},Gh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Bp).length<2?t:Yt(e)?e.trim():e},Hh=function(e){return e},Hn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Vp=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},As=function(e,t){for(var n in t)e[n]=t[n];return e},vu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=mi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ro=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ea=function(e){var t=e.parent||bt,n=e.keyframes?Vp(on(e.keyframes)):Hn;if(Mn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Wp=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Vh=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Wo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Qi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Xp=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jl=function(e,t,n,i){return e._startAt&&($t?e._startAt.revert(_o):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Yp=function r(e){return!e||e._ts&&r(e.parent)},xu=function(e){return e._repeat?ws(e._tTime,e=e.duration()+e._rDelay)*e:0},ws=function(e,t){var n=Math.floor(e=Tt(e/t));return e&&n===e?n-1:n},Co=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xo=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},Yo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xo(e),n._dirty||yr(n,e)),e},Wh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Co(e.rawTime(),t),(!t._dur||Ca(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),yr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},fi=function(e,t,n,i){return t.parent&&Qi(t),t._start=Tt((Ci(n)?n:n||e!==bt?Xn(e,n,t):e._time)+t._delay),t._end=Tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Vh(e,t,"_first","_last",e._sort?"_start":0),Ql(t)||(e._recent=t),i||Wh(e,t),e._ts<0&&Yo(e,e._tTime),e},Xh=function(e,t){return(Gn.ScrollTrigger||Nc("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},Yh=function(e,t,n,i,s){if(Gc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!$t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Bh!==Nn.frame)return qi.push(e),e._lazy=[s,i],1},qp=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ql=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jp=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&qp(e)&&!(!e._initted&&Ql(e))||(e._ts<0||e._dp._ts<0)&&!Ql(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Ca(0,e._tDur,t),u=ws(l,a),e._yoyo&&u&1&&(o=1-o),u!==ws(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||$t||i||e._zTime===_t||!t&&e._zTime){if(!e._initted&&Yh(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Jl(e,t,n,!0),e._onUpdate&&!n&&Fn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Qi(e,1),!n&&!$t&&(Fn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$p=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Rs=function(e,t,n,i){var s=e._repeat,o=Tt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Tt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Yo(e,e._tTime=e._tDur*a),e.parent&&Xo(e),n||yr(e.parent,e),e},Mu=function(e){return e instanceof xn?yr(e):Rs(e,e._dur)},Kp={_start:0,endTime:ga,totalDuration:ga},Xn=function r(e,t,n){var i=e.labels,s=e._recent||Kp,o=e.duration()>=Kn?s.endTime(!1):e._dur,a,l,c;return Yt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ta=function(e,t,n){var i=Ci(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;o.immediateRender=Mn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ut(t[0],o,t[s+1])},rr=function(e,t){return e||e===0?t(e):t},Ca=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!Yt(e)||!(t=zp.exec(e))?"":t[1]},Zp=function(e,t,n){return rr(n,function(i){return Ca(e,t,i)})},ec=[].slice,qh=function(e,t){return e&&mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&mi(e[0]))&&!e.nodeType&&e!==li},Jp=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Yt(i)&&!t||qh(i,1)?(s=n).push.apply(s,Zn(i)):n.push(i)})||n},Zn=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):Yt(e)&&!n&&(Kl||!Cs())?ec.call((t||Ic).querySelectorAll(e),0):on(e)?Jp(e,n):qh(e)?ec.call(e,0):e?[e]:[]},tc=function(e){return e=Zn(e)[0]||_a("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Zn(t,n.querySelectorAll?n:n===e?_a("Invalid scope")||Ic.createElement("div"):e)}},jh=function(e){return e.sort(function(){return .5-Math.random()})},$h=function(e){if(Rt(e))return e;var t=mi(e)?e:{each:e},n=Er(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return Yt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,x,v,S,w,A,E,U,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Kn])[1],!M){for(E=-Kn;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:i%M,x=M===Kn?0:l?_*f/M-.5:i/M|0,E=0,U=Kn,A=0;A<_;A++)v=A%M-p,S=x-(A/M|0),m[A]=w=c?Math.abs(c==="y"?S:v):Lh(v*v+S*S),w>E&&(E=w),w<U&&(U=w);i==="random"&&jh(m),m.max=E-U,m.min=U,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=sn(t.amount||t.each)||0,n=n&&_<0?fm(n):n}return _=(m[h]-m.min)/m.max||0,Tt(m.b+(n?n(_):_)*m.v)+m.u}},nc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Tt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ci(n)?0:sn(n))}},Kh=function(e,t){var n=on(e),i,s;return!n&&mi(e)&&(i=n=e.radius||Kn,e.values?(e=Zn(e.values),(s=!Ci(e[0]))&&(i*=i)):e=nc(e.increment)),rr(t,n?Rt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Kn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Ci(o)?u:u+sn(o)}:nc(e))},Zh=function(e,t,n,i){return rr(on(e)?!t:n===!0?!!(n=0):!i,function(){return on(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Qp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},em=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},tm=function(e,t,n){return Qh(e,t,0,1,n)},Jh=function(e,t,n){return rr(n,function(i){return e[~~t(i)]})},nm=function r(e,t,n){var i=t-e;return on(e)?Jh(e,r(0,e.length),t):rr(n,function(s){return(i+(s-e)%i)%i+e})},im=function r(e,t,n){var i=t-e,s=i*2;return on(e)?Jh(e,r(0,e.length-1),t):rr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},va=function(e){return e.replace(Op,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Fp);return Zh(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Qh=function(e,t,n,i,s){var o=t-e,a=i-n;return rr(s,function(l){return n+((l-e)/o*a||0)})},rm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Yt(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=As(on(e)?[]:{},e));if(!u){for(l in t)kc.call(a,e,l,"get",t[l]);s=function(g){return Wc(g,a)||(o?e.p:e)}}}return rr(n,s)},Su=function(e,t,n){var i=e.labels,s=Kn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Fn=function(e,t,n){var i=e.vars,s=i[t],o=yt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qi.length&&wo(),a&&(yt=a),u=l?s.apply(c,l):s.call(c),yt=o,u},qs=function(e){return Qi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$t),e.progress()<1&&Fn(e,"onInterrupt"),e},hs,ed=[],td=function(e){if(e)if(e=!e.name&&e.default||e,Uc()||e.headless){var t=e.name,n=Rt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ga,render:Wc,add:kc,kill:Sm,modifier:Mm,rawVars:0},o={targetTest:0,get:0,getSetter:Vc,aliases:{},register:0};if(Cs(),e!==i){if(Dn[t])return;Hn(i,Hn(Ro(e,s),o)),As(i.prototype,As(s,Ro(e,o))),Dn[i.prop=t]=i,e.targetTest&&(go.push(i),Oc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Fh(t,i),e.register&&e.register(An,i,yn)}else ed.push(e)},mt=255,js={aqua:[0,mt,mt],lime:[0,mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mt],navy:[0,0,128],white:[mt,mt,mt],olive:[128,128,0],yellow:[mt,mt,0],orange:[mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mt,0,0],pink:[mt,192,203],cyan:[0,mt,mt],transparent:[mt,mt,mt,0]},al=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*mt+.5|0},nd=function(e,t,n){var i=e?Ci(e)?[e>>16,e>>8&mt,e&mt]:0:js.black,s,o,a,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),js[e])i=js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&mt,i&mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&mt,e&mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(_u),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=al(l+1/3,s,o),i[1]=al(l,s,o),i[2]=al(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Uh),n&&i.length<4&&(i[3]=1),i}else i=e.match(_u)||js.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/mt,o=i[1]/mt,a=i[2]/mt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},id=function(e){var t=[],n=[],i=-1;return e.split(ji).forEach(function(s){var o=s.match(fs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},yu=function(e,t,n){var i="",s=(e+i).match(ji),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=nd(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=id(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ji,"1").split(fs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ji),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},ji=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in js)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),sm=/hsl[a]?\(/,rd=function(e){var t=e.join(" "),n;if(ji.lastIndex=0,ji.test(t))return n=sm.test(t),e[1]=yu(e[1],n),e[0]=yu(e[0],n,id(e[1])),!0},xa,Nn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=r()-i,x=m===!0,v,S,w,A;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,v=w-o,(v>0||x)&&(A=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=v+(v>=s?4:s-v),S=1),x||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](w,h,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Nh&&(!Kl&&Uc()&&(li=Kl=window,Ic=li.document||{},Gn.gsap=An,(li.gsapVersions||(li.gsapVersions=[])).push(An.version),Oh(Ao||li.GreenSockGlobals||!li.gsap&&li||{}),ed.forEach(td)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},xa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),xa=0,c=ga},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,x){var v=p?function(S,w,A,E){m(S,w,A,E),f.remove(v)}:m;return f.remove(m),a[x?"unshift":"push"](v),Cs(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Cs=function(){return!xa&&Nn.wake()},lt={},am=/^[\d.\-M][\d.\-,\s]/,om=/["']/g,lm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(om,"").trim():+c,i=l.substr(a+1).trim();return t},cm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},um=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[lm(t[1])]:cm(e).split(",").map(Gh)):lt._CE&&am.test(e)?lt._CE("",e):n},fm=function(e){return function(t){return 1-e(1-t)}},Er=function(e,t){return e&&(Rt(e)?e:lt[e]||um(e))||t},Br=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Sn(e,function(a){lt[a]=Gn[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},sd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ol=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/$l*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Np((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:sd(a);return s=$l/s,l.config=function(c,u){return r(e,c,u)},l},ll=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:sd(n);return i.config=function(s){return r(e,s)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Br(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;Br("Elastic",ol("in"),ol("out"),ol());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Br("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Br("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Br("Circ",function(r){return-(Lh(1-r*r)-1)});Br("Sine",function(r){return r===1?1:-Ip(r*Dp)+1});Br("Back",ll("in"),ll("out"),ll());lt.SteppedEase=lt.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-_t;return function(a){return((i*Ca(0,o,a)|0)+s)*n}}};ma.ease=lt["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Fc+=r+","+r+"Params,"});var ad=function(e,t){this.id=Up++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zh,this.set=t?t.getSetter:Vc},Ma=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Rs(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),xa||Nn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Rs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Cs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Yo(this,n),!s._dp||s.parent||Wh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_t||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),kh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ws(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Co(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,this.totalTime(Ca(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Xo(this),Xp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Tt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Co(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Gp);var i=$t;return $t=n,zc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$t=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Xn(this,n),Mn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Mn(i)),this._dur||(this._zTime=-_t),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-_t)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Rt(n)?n:Hh,l=function(){var u=i.then;i.then=null,s&&s(),Rt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){qs(this)},r}();Hn(Ma.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var xn=function(r){Ph(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Mn(n.sortChildren),bt&&fi(n.parent||bt,yi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Xh(yi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ta(0,arguments,this),this},t.from=function(i,s,o){return ta(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ta(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ea(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(i,s,Xn(this,o),1),this},t.call=function(i,s,o){return fi(this,Ut.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ut(i,o,Xn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ea(o).immediateRender=Mn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,ea(a).immediateRender=Mn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Tt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,m,p,x,v,S,w,A,E;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,S=this._start,v=this._ts,p=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Tt(u%m),u===l?(_=this._repeat,h=c):(w=Tt(u/m),_=~~w,_&&_===w&&(h=c,_--),h>c&&(h=c)),w=ws(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),A&&_&1&&(h=c-h,E=1),_!==w&&!this._lock){var U=A&&w&1,M=U===(A&&_&1);if(_<w&&(U=!U),a=U?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Tt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=$p(this,Tt(a),Tt(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!w&&(Fn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=-_t);break}}d=g}else{d=this._last;for(var y=i<0?i:h;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||$t&&zc(d)),h!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=y?-_t:_t);break}}d=g}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-_t)._zTime=h>=a?1:-1,this._ts))return this._start=S,Xo(this),this.render(i,s,o);this._onUpdate&&!s&&Fn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Qi(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Fn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ci(s)||(s=Xn(this,s,i)),!(i instanceof Ma)){if(on(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Yt(i))return this.addLabel(i,s);if(Rt(i))i=Ut.delayedCall(0,i);else return this}return this!==i?fi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Kn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ut?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Yt(i)?this.removeLabel(i):Rt(i)?this.killTweensOf(i):(i.parent===this&&Wo(this,i),i===this._recent&&(this._recent=this._last),yr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Xn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ut.delayedCall(0,s||ga,o);return a.data="isPause",this._hasPause=1,fi(this,a,Xn(this,i))},t.removePause=function(i){var s=this._first;for(i=Xn(this,i);s;)s._start===i&&s.data==="isPause"&&Qi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)zi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Zn(i),l=this._first,c=Ci(s),u;l;)l instanceof Ut?Hp(l._targets,a)&&(c?(!zi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Xn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Ut.to(o,Hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||_t,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Rs(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Hn({startAt:{time:Xn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Su(this,Xn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Su(this,Xn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Tt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return yr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),yr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Kn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Tt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Rs(o,o===bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(bt._ts&&(kh(bt,Co(i,bt)),Bh=Nn.frame),Nn.frame>=gu){gu+=zn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&zn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},e}(Ma);Hn(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var hm=function(e,t,n,i,s,o,a){var l=new yn(this._pt,e,t,0,1,hd,null,s),c=0,u=0,f,h,d,g,_,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=va(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),h=n.match(rl)||[];f=rl.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?gs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=rl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ih.test(i)||p)&&(l.e=0),this._pt=l,l},kc=function(e,t,n,i,s,o,a,l,c,u){Rt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:Rt(f)?c?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Rt(f)?c?gm:ud:Hc,g;if(Yt(i)&&(~i.indexOf("random(")&&(i=va(i)),i.charAt(1)==="="&&(g=gs(h,i)+(sn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||ic)return!isNaN(h*i)&&i!==""?(g=new yn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?xm:fd,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Nc(t,i),hm.call(this,e,t,h,i,d,l||zn.stringFilter,c))},dm=function(e,t,n,i,s){if(Rt(e)&&(e=na(e,s,t,n,i)),!mi(e)||e.style&&e.nodeType||on(e)||Dh(e))return Yt(e)?na(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=na(e[a],s,t,n,i);return o},od=function(e,t,n,i,s,o){var a,l,c,u;if(Dn[e]&&(a=new Dn[e]).init(s,a.rawVars?t[e]:dm(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new yn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==hs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},zi,ic,Gc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!Lc,S=e.timeline,w=i.easeReverse||f,A,E,U,M,y,B,N,Z,L,F,H,W,q;if(S&&(!h||!s)&&(s="none"),e._ease=Er(s,ma.ease),e._rEase=w&&(Er(w)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||h&&!i.stagger){if(Z=m[0]?Sr(m[0]).harness:0,W=Z&&i[Z.prop],A=Ro(i,Oc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?_o:kp),_._lazy=0),o){if(Qi(e._startAt=Ut.set(m,Hn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Mn(l),startAt:null,delay:0,onUpdate:c&&function(){return Fn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t||!a&&!d)&&e._startAt.revert(_o),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),U=Hn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Mn(l),immediateRender:a,stagger:0,parent:p},A),W&&(U[Z.prop]=W),Qi(e._startAt=Ut.set(m,U)),e._startAt._dp=0,e._startAt._sat=e,t<0&&($t?e._startAt.revert(_o):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Mn(l)||l&&!g,E=0;E<m.length;E++){if(y=m[E],N=y._gsap||Bc(m)[E]._gsap,e._ptLookup[E]=F={},Zl[N.id]&&qi.length&&wo(),H=x===m?E:x.indexOf(y),Z&&(L=new Z).init(y,W||A,e,H,x)!==!1&&(e._pt=M=new yn(e._pt,y,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function($){F[$]=M}),L.priority&&(B=1)),!Z||W)for(U in A)Dn[U]&&(L=od(U,A,e,H,y,x))?L.priority&&(B=1):F[U]=M=kc.call(e,y,U,"get",A[U],H,x,0,i.stringFilter);e._op&&e._op[E]&&e.kill(y,e._op[E]),v&&e._pt&&(zi=e,bt.killTweensOf(y,F,e.globalTime(t)),q=!e.parent,zi=0),e._pt&&l&&(Zl[N.id]=1)}B&&dd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,h&&t<=0&&S.render(Kn,!0,!0)},pm=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ic=1,e.vars[t]="+=0",Gc(e,a),ic=0,l?_a(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ct(n)+sn(f.e)),f.b&&(f.b=u.s+sn(f.b))},mm=function(e,t){var n=e[0]?Sr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=As({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},_m=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(on(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},na=function(e,t,n,i,s){return Rt(e)?e.call(t,n,i,s):Yt(e)&&~e.indexOf("random(")?va(e):e},ld=Fc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",cd={};Sn(ld+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return cd[r]=1});var Ut=function(r){Ph(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ea(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||bt,x=(on(n)||Dh(n)?Ci(n[0]):"length"in i)?[n]:Zn(n),v,S,w,A,E,U,M,y;if(a._targets=x.length?Bc(x):_a("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||La(c)||La(u)){i=a.vars;var B=i.easeReverse||i.yoyoEase;if(v=a.timeline=new xn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:x}),v.kill(),v.parent=v._dp=yi(a),v._start=0,h||La(c)||La(u)){if(A=x.length,M=h&&$h(h),mi(h))for(E in h)~ld.indexOf(E)&&(y||(y={}),y[E]=h[E]);for(S=0;S<A;S++)w=Ro(i,cd),w.stagger=0,B&&(w.easeReverse=B),y&&As(w,y),U=x[S],w.duration=+na(c,yi(a),S,U,x),w.delay=(+na(u,yi(a),S,U,x)||0)-a._delay,!h&&A===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(U,w,M?M(S,U,x):0),v._ease=lt.none;v.duration()?c=u=0:a.timeline=0}else if(g){ea(Hn(v.vars.defaults,{ease:"none"})),v._ease=Er(g.ease||i.ease||"none");var N=0,Z,L,F;if(on(g))g.forEach(function(H){return v.to(x,H,">")}),v.duration();else{w={};for(E in g)E==="ease"||E==="easeEach"||_m(E,g[E],w,g.easeEach);for(E in w)for(Z=w[E].sort(function(H,W){return H.t-W.t}),N=0,S=0;S<Z.length;S++)L=Z[S],F={ease:L.e,duration:(L.t-(S?Z[S-1].t:0))/100*c},F[E]=L.v,v.to(x,F,N),N+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Lc&&(zi=yi(a),bt.killTweensOf(x),zi=0),fi(p,yi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Tt(p._time)&&Mn(f)&&Yp(yi(a))&&p.data!=="nested")&&(a._tTime=-_t,a.render(Math.max(0,-u)||0)),m&&Xh(yi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-_t&&!u?l:i<_t?0:i,h,d,g,_,m,p,x,v;if(!c)jp(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Tt(f%_),f===l?(g=this._repeat,h=c):(m=Tt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=ws(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Tt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Yh(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=h<a;if(S!==this._inv){var w=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(S?-1:1)/w:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(h/c);if(this._from&&(this.ratio=x=1-x),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Fn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Jl(this,i,s,o),Fn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Fn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Jl(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Qi(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Fn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){xa||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Gc(this,c),u=this._ease(c/this._dur),pm(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Yo(this,0),this.parent||Vh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?qs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$t),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,zi&&zi.vars.overwrite!==!0)._first||qs(this),this.parent&&o!==this.timeline.totalDuration()&&Rs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Zn(i):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&Wp(a,l))return s==="all"&&(this._pt=0),qs(this);for(f=this._op=this._op||[],s!=="all"&&(Yt(s)&&(_={},Sn(s,function(x){return _[x]=1}),s=_),s=mm(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Wo(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&qs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ta(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ta(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return bt.killTweensOf(i,s,o)},e}(Ma);Hn(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(r){Ut[r]=function(){var e=new xn,t=ec.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Hc=function(e,t,n){return e[t]=n},ud=function(e,t,n){return e[t](n)},gm=function(e,t,n,i){return e[t](i.fp,n)},vm=function(e,t,n){return e.setAttribute(t,n)},Vc=function(e,t){return Rt(e[t])?ud:Dc(e[t])&&e.setAttribute?vm:Hc},fd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},xm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Wc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Mm=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Sm=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Wo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ym=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},dd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},yn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||fd,this.d=l||this,this.set=c||Hc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ym,this.m=n,this.mt=s,this.tween=i},r}();Sn(Fc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Oc[r]=1});Gn.TweenMax=Gn.TweenLite=Ut;Gn.TimelineLite=Gn.TimelineMax=xn;bt=new xn({sortChildren:!1,defaults:ma,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=rd;var Tr=[],vo={},Em=[],Eu=0,Tm=0,cl=function(e){return(vo[e]||Em).map(function(t){return t()})},rc=function(){var e=Date.now(),t=[];e-Eu>2&&(cl("matchMediaInit"),Tr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=li.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),cl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Eu=e,cl("matchMedia"))},pd=function(){function r(t,n){this.selector=n&&tc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Tm++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Rt(n)&&(s=i,i=n,n=Rt);var o=this,a=function(){var c=yt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=tc(s)),yt=o,f=i.apply(o,arguments),Rt(f)&&o._r.push(f),yt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Rt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ut&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ut)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Tr.length;o--;)Tr[o].id===this.id&&Tr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),bm=function(){function r(t){this.contexts=[],this.scope=t,yt&&yt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){mi(n)||(n={matches:n});var o=new pd(0,s||this.scope),a=o.conditions={},l,c,u;yt&&!o.selector&&(o.selector=yt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=li.matchMedia(n[c]),l&&(Tr.indexOf(o)<0&&Tr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(rc):l.addEventListener("change",rc)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Po={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return td(i)})},timeline:function(e){return new xn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Yt(e)&&(e=Zn(e)[0]);var s=Sr(e||{}).get,o=n?Hh:Gh;return n==="native"&&(n=""),e&&(t?o((Dn[t]&&Dn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Dn[a]&&Dn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Zn(e),e.length>1){var i=e.map(function(u){return An.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=Dn[t],a=Sr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;hs._pt=0,f.init(e,n?u+n:u,hs,0,[e]),f.render(1,f),hs._pt&&Wc(1,hs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=An.to(e,Hn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Er(e.ease,ma.ease)),vu(ma,e||{})},config:function(e){return vu(zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Dn[a]&&!Gn[a]&&_a(t+" effect requires "+a+" plugin.")}),sl[t]=function(a,l,c){return n(Zn(a),Hn(l||{},s),c)},o&&(xn.prototype[t]=function(a,l,c){return this.add(sl[t](a,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Er(t)},parseEase:function(e,t){return arguments.length?Er(e,t):lt},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new xn(e),i,s;for(n.smoothChildTiming=Mn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ut&&i.vars.onComplete===i._targets[0]))&&fi(n,i,i._start-i._delay),i=s;return fi(bt,n,0),n},context:function(e,t){return e?new pd(e,t):yt},matchMedia:function(e){return new bm(e)},matchMediaRefresh:function(){return Tr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||rc()},addEventListener:function(e,t){var n=vo[e]||(vo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=vo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:nm,wrapYoyo:im,distribute:$h,random:Zh,snap:Kh,normalize:tm,getUnit:sn,clamp:Zp,splitColor:nd,toArray:Zn,selector:tc,mapRange:Qh,pipe:Qp,unitize:em,interpolate:rm,shuffle:jh},install:Oh,effects:sl,ticker:Nn,updateRoot:xn.updateRoot,plugins:Dn,globalTimeline:bt,core:{PropTween:yn,globals:Fh,Tween:Ut,Timeline:xn,Animation:Ma,getCache:Sr,_removeLinkedListItem:Wo,reverting:function(){return $t},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return Lc=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Po[r]=Ut[r]});Nn.add(xn.updateRoot);hs=Po.to({},{duration:0});var Am=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},wm=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Am(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ul=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Yt(s)&&(l={},Sn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}wm(a,s)}}}},An=Po.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)$t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ul("roundProps",nc),ul("modifiers"),ul("snap",Kh))||Po;Ut.version=xn.version=An.version="3.15.0";Nh=1;Uc()&&Cs();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tu,ki,vs,Xc,xr,bu,Yc,Rm=function(){return typeof window<"u"},Pi={},dr=180/Math.PI,xs=Math.PI/180,kr=Math.atan2,Au=1e8,qc=/([A-Z])/g,Cm=/(left|right|width|margin|padding|x)/i,Pm=/[\s,\(]\S/,hi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Lm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Dm=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Um=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Im=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},md=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_d=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Nm=function(e,t,n){return e.style[t]=n},Om=function(e,t,n){return e.style.setProperty(t,n)},Fm=function(e,t,n){return e._gsap[t]=n},Bm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},zm=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},km=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},At="transform",En=At+"Origin",Gm=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Pi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=hi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ei(i,a)}):this.tfm[e]=o.x?o[e]:Ei(i,e),e===En&&(this.tfm.zOrigin=o.zOrigin);else return hi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(At)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=At}(s||t)&&this.props.push(e,t,s[e])},gd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Hm=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(qc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yc(),(!s||!s.isStart)&&!n[At]&&(gd(n),i.zOrigin&&n[En]&&(n[En]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},vd=function(e,t){var n={target:e,props:[],revert:Hm,save:Gm};return e._gsap||An.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},xd,ac=function(e,t){var n=ki.createElementNS?ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ki.createElement(e);return n&&n.style?n:ki.createElement(e)},Bn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(qc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ps(t)||t,1)||""},wu="O,Moz,ms,Ms,Webkit".split(","),Ps=function(e,t,n){var i=t||xr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(wu[o]+e in s););return o<0?null:(o===3?"ms":o>=0?wu[o]:"")+e},oc=function(){Rm()&&window.document&&(Tu=window,ki=Tu.document,vs=ki.documentElement,xr=ac("div")||{style:{}},ac("div"),At=Ps(At),En=At+"Origin",xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xd=!!Ps("perspective"),Yc=An.core.reverting,Xc=1)},Ru=function(e){var t=e.ownerSVGElement,n=ac("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),vs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),vs.removeChild(n),s},Cu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Md=function(e){var t,n;try{t=e.getBBox()}catch{t=Ru(e),n=1}return t&&(t.width||t.height)||n||(t=Ru(e)),t&&!t.width&&!t.x&&!t.y?{x:+Cu(e,["x","cx","x1"])||0,y:+Cu(e,["y","cy","y1"])||0,width:0,height:0}:t},Sd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Md(e))},er=function(e,t){if(t){var n=e.style,i;t in Pi&&t!==En&&(t=At),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(qc,"-$1").toLowerCase())):n.removeAttribute(t)}},Gi=function(e,t,n,i,s,o){var a=new yn(e._pt,t,n,0,1,o?_d:md);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Pu={deg:1,rad:1,turn:1},Vm={grid:1,flex:1},tr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=xr.style,l=Cm.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Pu[i]||Pu[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&Sd(e),(d||o==="%")&&(Pi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ct(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ki||!_.appendChild)&&(_=ki.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Nn.time&&!m.uncache)return Ct(s/m.width*f);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+i,g=e[u],x?e.style[t]=x:er(e,t)}else(d||o==="%")&&!Vm[Bn(_,"display")]&&(a.position=Bn(e,"position")),_===e&&(a.position="static"),_.appendChild(xr),g=xr[u],_.removeChild(xr),a.position="absolute";return l&&d&&(m=Sr(_),m.time=Nn.time,m.width=_[u]),Ct(h?g*s/f:g&&s?f/g*s:0)},Ei=function(e,t,n,i){var s;return Xc||oc(),t in hi&&t!=="transform"&&(t=hi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pi[t]&&t!=="transform"?(s=ya(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Do(Bn(e,En))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Lo[t]&&Lo[t](e,t,n)||Bn(e,t)||zh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?tr(e,t,s,n)+n:s},Wm=function(e,t,n,i){if(!n||n==="none"){var s=Ps(t,e,1),o=s&&Bn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Bn(e,"borderTopColor"))}var a=new yn(this._pt,e.style,t,0,1,hd),l=0,c=0,u,f,h,d,g,_,m,p,x,v,S,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Bn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Bn(e,t)||i,_?e.style[t]=_:er(e,t)),u=[n,i],rd(u),n=u[0],i=u[1],h=n.match(fs)||[],w=i.match(fs)||[],w.length){for(;f=fs.exec(i);)m=f[0],x=i.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=gs(d,m)+S),p=parseFloat(m),v=m.substr((p+"").length),l=fs.lastIndex-v.length,v||(v=v||zn.units[t]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(d=tr(e,t,_,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?_d:md;return Ih.test(i)&&(a.e=0),this._pt=a,a},Lu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xm=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Lu[n]||n,t[1]=Lu[i]||i,t.join(" ")},Ym=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Pi[a]&&(l=1,a=a==="transformOrigin"?En:At),er(n,a);l&&(er(n,At),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ya(n,1),o.uncache=1,gd(i)))}},Lo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new yn(e._pt,t,n,0,0,Ym);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Sa=[1,0,0,1,0,0],yd={},Ed=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Du=function(e){var t=Bn(e,At);return Ed(t)?Sa:t.substr(7).match(Uh).map(Ct)},jc=function(e,t){var n=e._gsap||Sr(e),i=e.style,s=Du(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Sa:s):(s===Sa&&!e.offsetParent&&e!==vs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,vs.appendChild(e)),s=Du(e),l?i.display=l:er(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):vs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lc=function(e,t,n,i,s,o){var a=e._gsap,l=s||jc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],v=t.split(" "),S=parseFloat(v[0])||0,w=parseFloat(v[1])||0,A,E,U,M;n?l!==Sa&&(E=d*m-g*_)&&(U=S*(m/E)+w*(-_/E)+(_*x-m*p)/E,M=S*(-g/E)+w*(d/E)-(d*x-g*p)/E,S=U,w=M):(A=Md(e),S=A.x+(~v[0].indexOf("%")?S/100*A.width:S),w=A.y+(~(v[1]||v[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&a.smooth?(p=S-c,x=w-u,a.xOffset=f+(p*d+x*_)-p,a.yOffset=h+(p*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[En]="0px 0px",o&&(Gi(o,a,"xOrigin",c,S),Gi(o,a,"yOrigin",u,w),Gi(o,a,"xOffset",f,a.xOffset),Gi(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},ya=function(e,t){var n=e._gsap||new ad(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Bn(e,En)||"0",u,f,h,d,g,_,m,p,x,v,S,w,A,E,U,M,y,B,N,Z,L,F,H,W,q,$,C,J,se,j,K,ue;return u=f=h=_=m=p=x=v=S=0,d=g=1,n.svg=!!(e.getCTM&&Sd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[At]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[At]!=="none"?l[At]:"")),i.scale=i.rotate=i.translate="none"),E=jc(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),lc(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,A=n.yOrigin||0,E!==Sa&&(B=E[0],N=E[1],Z=E[2],L=E[3],u=F=E[4],f=H=E[5],E.length===6?(d=Math.sqrt(B*B+N*N),g=Math.sqrt(L*L+Z*Z),_=B||N?kr(N,B)*dr:0,x=Z||L?kr(Z,L)*dr+_:0,x&&(g*=Math.abs(Math.cos(x*xs))),n.svg&&(u-=w-(w*B+A*Z),f-=A-(w*N+A*L))):(ue=E[6],j=E[7],C=E[8],J=E[9],se=E[10],K=E[11],u=E[12],f=E[13],h=E[14],U=kr(ue,se),m=U*dr,U&&(M=Math.cos(-U),y=Math.sin(-U),W=F*M+C*y,q=H*M+J*y,$=ue*M+se*y,C=F*-y+C*M,J=H*-y+J*M,se=ue*-y+se*M,K=j*-y+K*M,F=W,H=q,ue=$),U=kr(-Z,se),p=U*dr,U&&(M=Math.cos(-U),y=Math.sin(-U),W=B*M-C*y,q=N*M-J*y,$=Z*M-se*y,K=L*y+K*M,B=W,N=q,Z=$),U=kr(N,B),_=U*dr,U&&(M=Math.cos(U),y=Math.sin(U),W=B*M+N*y,q=F*M+H*y,N=N*M-B*y,H=H*M-F*y,B=W,F=q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Ct(Math.sqrt(B*B+N*N+Z*Z)),g=Ct(Math.sqrt(H*H+ue*ue)),U=kr(F,H),x=Math.abs(U)>2e-4?U*dr:0,S=K?1/(K<0?-K:K):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ed(Bn(e,At)),W&&e.setAttribute("transform",W))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Ct(d),n.scaleY=Ct(g),n.rotation=Ct(_)+a,n.rotationX=Ct(m)+a,n.rotationY=Ct(p)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[En]=Do(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?jm:xd?Td:qm,n.uncache=0,n},Do=function(e){return(e=e.split(" "))[0]+" "+e[1]},fl=function(e,t,n){var i=sn(t);return Ct(parseFloat(t)+parseFloat(tr(e,"x",n+"px",i)))+i},qm=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Td(e,t)},or="0deg",ks="0px",lr=") ",Td=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,S="",w=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==or||u!==or)){var A=parseFloat(u)*xs,E=Math.sin(A),U=Math.cos(A),M;A=parseFloat(f)*xs,M=Math.cos(A),o=fl(x,o,E*M*-v),a=fl(x,a,-Math.sin(A)*-v),l=fl(x,l,U*M*-v+v)}m!==ks&&(S+="perspective("+m+lr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(w||o!==ks||a!==ks||l!==ks)&&(S+=l!==ks||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+lr),c!==or&&(S+="rotate("+c+lr),u!==or&&(S+="rotateY("+u+lr),f!==or&&(S+="rotateX("+f+lr),(h!==or||d!==or)&&(S+="skew("+h+", "+d+lr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+lr),x.style[At]=S||"translate(0, 0)"},jm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(o),S=parseFloat(a),w,A,E,U,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=xs,c*=xs,w=Math.cos(l)*f,A=Math.sin(l)*f,E=Math.sin(l-c)*-h,U=Math.cos(l-c)*h,c&&(u*=xs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),E*=M,U*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,A*=M)),w=Ct(w),A=Ct(A),E=Ct(E),U=Ct(U)):(w=f,U=h,A=E=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=tr(d,"x",o,"px"),S=tr(d,"y",a,"px")),(g||_||m||p)&&(v=Ct(v+g-(g*w+_*E)+m),S=Ct(S+_-(g*A+_*U)+p)),(i||s)&&(M=d.getBBox(),v=Ct(v+i/100*M.width),S=Ct(S+s/100*M.height)),M="matrix("+w+","+A+","+E+","+U+","+v+","+S+")",d.setAttribute("transform",M),x&&(d.style[At]=M)},$m=function(e,t,n,i,s){var o=360,a=Yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?dr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Au)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Au)%o-~~(c/o)*o)),e._pt=h=new yn(e._pt,t,n,i,c,Lm),h.e=u,h.u="deg",e._props.push(n),h},Uu=function(e,t){for(var n in t)e[n]=t[n];return e},Km=function(e,t,n){var i=Uu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[At]=t,a=ya(n,1),er(n,At),n.setAttribute("transform",c)):(c=getComputedStyle(n)[At],o[At]=t,a=ya(n,1),o[At]=c);for(l in Pi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=sn(c),g=sn(u),f=d!==g?tr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new yn(e._pt,a,l,f,h-f,sc),e._pt.u=g||0,e._props.push(l));Uu(a,i)};Sn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Lo[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Ei(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var bd={name:"css",register:oc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,x,v,S,w,A,E,U,M;Xc||oc(),this.styles=this.styles||vd(e),U=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Dn[_]&&od(_,t,n,i,e,s)))){if(d=typeof u,g=Lo[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=va(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ji.lastIndex=0,ji.test(c)||(m=sn(c),p=sn(u),p?m!==p&&(c=tr(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),U.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Yt(c)&&~c.indexOf("random(")&&(c=va(c)),sn(c+"")||c==="auto"||(c+=zn.units[_]||sn(Ei(e,_))||""),(c+"").charAt(1)==="="&&(c=Ei(e,_))):c=Ei(e,_),h=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),_ in hi&&(_==="autoAlpha"&&(h===1&&Ei(e,"visibility")==="hidden"&&f&&(h=0),U.push("visibility",0,a.visibility),Gi(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=hi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Pi,v){if(this.styles.save(_),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Bn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=Bn(e,"perspective"),y?e.style.perspective=y:er(e,"perspective")}f=parseFloat(u)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||ya(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new yn(this._pt,a,At,0,1,w.renderTransform,w,0,-1),S.dep=1),_==="scale")this._pt=new yn(this._pt,w,"scaleY",w.scaleY,(x?gs(w.scaleY,x+f):f)-w.scaleY||0,sc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(En,0,a[En]),u=Xm(u),w.svg?lc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&Gi(this,w,"zOrigin",w.zOrigin,p),Gi(this,a,_,Do(c),Do(u)));continue}else if(_==="svgOrigin"){lc(e,u,1,A,0,this);continue}else if(_ in yd){$m(this,w,_,h,x?gs(h,x+u):u);continue}else if(_==="smoothOrigin"){Gi(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){Km(this,u,e);continue}}else _ in a||(_=Ps(_)||_);if(v||(f||f===0)&&(h||h===0)&&!Pm.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=sn(u)||(_ in zn.units?zn.units[_]:m),m!==p&&(h=tr(e,_,c,p)),this._pt=new yn(this._pt,v?w:a,_,h,(x?gs(h,x+f):f)-h,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Im:sc),this._pt.u=p||0,v&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=Um):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Dm);else if(_ in a)Wm.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){Nc(_,u);continue}v||(_ in a?U.push(_,0,a[_]):typeof e[_]=="function"?U.push(_,2,e[_]()):U.push(_,1,c||e[_])),o.push(_)}}E&&dd(this)},render:function(e,t){if(t.tween._time||!Yc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ei,aliases:hi,getSetter:function(e,t,n){var i=hi[t];return i&&i.indexOf(",")<0&&(t=i),t in Pi&&t!==En&&(e._gsap.x||Ei(e,"x"))?n&&bu===n?t==="scale"?Bm:Fm:(bu=n||{})&&(t==="scale"?zm:km):e.style&&!Dc(e.style[t])?Nm:~t.indexOf("-")?Om:Vc(e,t)},core:{_removeProperty:er,_getMatrix:jc}};An.utils.checkPrefix=Ps;An.core.getStyleSaver=vd;(function(r,e,t,n){var i=Sn(r+","+e+","+t,function(s){Pi[s]=1});Sn(e,function(s){zn.units[s]="deg",yd[s]=1}),hi[i[13]]=r+","+e,Sn(n,function(s){var o=s.split(":");hi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zn.units[r]="px"});An.registerPlugin(bd);var Wt=An.registerPlugin(bd)||An;Wt.core.Tween;function Zm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Jm(r,e,t){return e&&Zm(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jt,xo,On,Hi,Vi,Ms,Ad,pr,Ss,wd,Ai,ii,Rd,Cd=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},Pd=1,ds=[],rt=[],pi=[],ia=Date.now,cc=function(e,t){return t},Qm=function(){var e=Ss.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,pi),rt=n,pi=i,cc=function(o,a){return t[o](a)}},$i=function(e,t){return~pi.indexOf(e)&&pi[pi.indexOf(e)+1][t]},ra=function(e){return!!~wd.indexOf(e)},un=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Da="scrollLeft",Ua="scrollTop",uc=function(){return Ai&&Ai.isPressed||rt.cache++},Uo=function(e,t){var n=function i(s){if(s||s===0){Pd&&(On.history.scrollRestoration="manual");var o=Ai&&Ai.isPressed;s=i.v=Math.round(s)||(Ai&&Ai.iOS?1:0),e(s),i.cacheID=rt.cache,o&&cc("ss",s)}else(t||rt.cache!==i.cacheID||cc("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},gn={s:Da,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Uo(function(r){return arguments.length?On.scrollTo(r,Bt.sc()):On.pageXOffset||Hi[Da]||Vi[Da]||Ms[Da]||0})},Bt={s:Ua,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gn,sc:Uo(function(r){return arguments.length?On.scrollTo(gn.sc(),r):On.pageYOffset||Hi[Ua]||Vi[Ua]||Ms[Ua]||0})},vn=function(e,t){return(t&&t._ctx&&t._ctx.selector||jt.utils.toArray)(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},e_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},nr=function(e,t){var n=t.s,i=t.sc;ra(e)&&(e=Hi.scrollingElement||Vi);var s=rt.indexOf(e),o=i===Bt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||un(e,"scroll",uc);var a=rt[s+o],l=a||(rt[s+o]=Uo($i(e,n),!0)||(ra(e)?i:Uo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},fc=function(e,t,n){var i=e,s=e,o=ia(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ia();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,m=s,p=ia();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Gs=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Iu=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Ld=function(){Ss=jt.core.globals().ScrollTrigger,Ss&&Ss.core&&Qm()},Dd=function(e){return jt=e||Cd(),!xo&&jt&&typeof document<"u"&&document.body&&(On=window,Hi=document,Vi=Hi.documentElement,Ms=Hi.body,wd=[On,Hi,Vi,Ms],jt.utils.clamp,Rd=jt.core.context||function(){},pr="onpointerenter"in Ms?"pointer":"mouse",Ad=Pt.isTouch=On.matchMedia&&On.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in On||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=Pt.eventTypes=("ontouchstart"in Vi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Vi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Pd=0},500),xo=1),Ss||Ld(),xo};gn.op=Bt;rt.cache=0;var Pt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){xo||Dd(jt)||console.warn("Please gsap.registerPlugin(Observer)"),Ss||Ld();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,x=n.onDrag,v=n.onPress,S=n.onRelease,w=n.onRight,A=n.onLeft,E=n.onUp,U=n.onDown,M=n.onChangeX,y=n.onChangeY,B=n.onChange,N=n.onToggleX,Z=n.onToggleY,L=n.onHover,F=n.onHoverEnd,H=n.onMove,W=n.ignoreCheck,q=n.isNormalizer,$=n.onGestureStart,C=n.onGestureEnd,J=n.onWheel,se=n.onEnable,j=n.onDisable,K=n.onClick,ue=n.scrollSpeed,Me=n.capture,me=n.allowClicks,De=n.lockAxis,ye=n.onLockAxis;this.target=a=vn(a)||Vi,this.vars=n,d&&(d=jt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ue=ue||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(On.getComputedStyle(Ms).lineHeight)||22);var Ie,ke,I,Te,oe,Ee,ge,G=this,Be=0,R=0,T=n.passive||!u&&n.passive!==!1,z=nr(a,gn),ie=nr(a,Bt),ee=z(),re=ie(),ve=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ii[0]==="pointerdown",pe=ra(a),fe=a.ownerDocument||Hi,Pe=[0,0,0],He=[0,0,0],Q=0,st=function(){return Q=ia()},Ne=function(Se,Ce){return(G.event=Se)&&d&&e_(Se.target,d)||Ce&&ve&&Se.pointerType!=="touch"||W&&W(Se,Ce)},Ye=function(){G._vx.reset(),G._vy.reset(),ke.pause(),f&&f(G)},we=function(){var Se=G.deltaX=Iu(Pe),Ce=G.deltaY=Iu(He),ce=Math.abs(Se)>=i,Ve=Math.abs(Ce)>=i;B&&(ce||Ve)&&B(G,Se,Ce,Pe,He),ce&&(w&&G.deltaX>0&&w(G),A&&G.deltaX<0&&A(G),M&&M(G),N&&G.deltaX<0!=Be<0&&N(G),Be=G.deltaX,Pe[0]=Pe[1]=Pe[2]=0),Ve&&(U&&G.deltaY>0&&U(G),E&&G.deltaY<0&&E(G),y&&y(G),Z&&G.deltaY<0!=R<0&&Z(G),R=G.deltaY,He[0]=He[1]=He[2]=0),(Te||I)&&(H&&H(G),I&&(m&&I===1&&m(G),x&&x(G),I=0),Te=!1),Ee&&!(Ee=!1)&&ye&&ye(G),oe&&(J(G),oe=!1),Ie=0},xe=function(Se,Ce,ce){Pe[ce]+=Se,He[ce]+=Ce,G._vx.update(Se),G._vy.update(Ce),c?Ie||(Ie=requestAnimationFrame(we)):we()},P=function(Se,Ce){De&&!ge&&(G.axis=ge=Math.abs(Se)>Math.abs(Ce)?"x":"y",Ee=!0),ge!=="y"&&(Pe[2]+=Se,G._vx.update(Se,!0)),ge!=="x"&&(He[2]+=Ce,G._vy.update(Ce,!0)),c?Ie||(Ie=requestAnimationFrame(we)):we()},le=function(Se){if(!Ne(Se,1)){Se=Gs(Se,u);var Ce=Se.clientX,ce=Se.clientY,Ve=Ce-G.x,Ge=ce-G.y,Ke=G.isDragging;G.x=Ce,G.y=ce,(Ke||(Ve||Ge)&&(Math.abs(G.startX-Ce)>=s||Math.abs(G.startY-ce)>=s))&&(I||(I=Ke?2:1),Ke||(G.isDragging=!0),P(Ve,Ge))}},Re=G.onPress=function(be){Ne(be,1)||be&&be.button||(G.axis=ge=null,ke.pause(),G.isPressed=!0,be=Gs(be),Be=R=0,G.startX=G.x=be.clientX,G.startY=G.y=be.clientY,G._vx.reset(),G._vy.reset(),un(q?a:fe,ii[1],le,T,!0),G.deltaX=G.deltaY=0,v&&v(G))},te=G.onRelease=function(be){if(!Ne(be,1)){cn(q?a:fe,ii[1],le,!0);var Se=!isNaN(G.y-G.startY),Ce=G.isDragging,ce=Ce&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ve=Gs(be);!ce&&Se&&(G._vx.reset(),G._vy.reset(),u&&me&&jt.delayedCall(.08,function(){if(ia()-Q>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(fe.createEvent){var Ge=fe.createEvent("MouseEvents");Ge.initMouseEvent("click",!0,!0,On,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(Ge)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&Ce&&!q&&ke.restart(!0),I&&we(),p&&Ce&&p(G),S&&S(G,ce)}},ne=function(Se){return Se.touches&&Se.touches.length>1&&(G.isGesturing=!0)&&$(Se,G.isDragging)},D=function(){return(G.isGesturing=!1)||C(G)},ae=function(Se){if(!Ne(Se)){var Ce=z(),ce=ie();xe((Ce-ee)*ue,(ce-re)*ue,1),ee=Ce,re=ce,f&&ke.restart(!0)}},he=function(Se){if(!Ne(Se)){Se=Gs(Se,u),J&&(oe=!0);var Ce=(Se.deltaMode===1?l:Se.deltaMode===2?On.innerHeight:1)*g;xe(Se.deltaX*Ce,Se.deltaY*Ce,0),f&&!q&&ke.restart(!0)}},ze=function(Se){if(!Ne(Se)){var Ce=Se.clientX,ce=Se.clientY,Ve=Ce-G.x,Ge=ce-G.y;G.x=Ce,G.y=ce,Te=!0,f&&ke.restart(!0),(Ve||Ge)&&P(Ve,Ge)}},Oe=function(Se){G.event=Se,L(G)},je=function(Se){G.event=Se,F(G)},Je=function(Se){return Ne(Se)||Gs(Se,u)&&K(G)};ke=G._dc=jt.delayedCall(h||.25,Ye).pause(),G.deltaX=G.deltaY=0,G._vx=fc(0,50,!0),G._vy=fc(0,50,!0),G.scrollX=z,G.scrollY=ie,G.isDragging=G.isGesturing=G.isPressed=!1,Rd(this),G.enable=function(be){return G.isEnabled||(un(pe?fe:a,"scroll",uc),o.indexOf("scroll")>=0&&un(pe?fe:a,"scroll",ae,T,Me),o.indexOf("wheel")>=0&&un(a,"wheel",he,T,Me),(o.indexOf("touch")>=0&&Ad||o.indexOf("pointer")>=0)&&(un(a,ii[0],Re,T,Me),un(fe,ii[2],te),un(fe,ii[3],te),me&&un(a,"click",st,!0,!0),K&&un(a,"click",Je),$&&un(fe,"gesturestart",ne),C&&un(fe,"gestureend",D),L&&un(a,pr+"enter",Oe),F&&un(a,pr+"leave",je),H&&un(a,pr+"move",ze)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Te=I=!1,G._vx.reset(),G._vy.reset(),ee=z(),re=ie(),be&&be.type&&Re(be),se&&se(G)),G},G.disable=function(){G.isEnabled&&(ds.filter(function(be){return be!==G&&ra(be.target)}).length||cn(pe?fe:a,"scroll",uc),G.isPressed&&(G._vx.reset(),G._vy.reset(),cn(q?a:fe,ii[1],le,!0)),cn(pe?fe:a,"scroll",ae,Me),cn(a,"wheel",he,Me),cn(a,ii[0],Re,Me),cn(fe,ii[2],te),cn(fe,ii[3],te),cn(a,"click",st,!0),cn(a,"click",Je),cn(fe,"gesturestart",ne),cn(fe,"gestureend",D),cn(a,pr+"enter",Oe),cn(a,pr+"leave",je),cn(a,pr+"move",ze),G.isEnabled=G.isPressed=G.isDragging=!1,j&&j(G))},G.kill=G.revert=function(){G.disable();var be=ds.indexOf(G);be>=0&&ds.splice(be,1),Ai===G&&(Ai=0)},ds.push(G),q&&ra(a)&&(Ai=G),G.enable(_)},Jm(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Pt.version="3.15.0";Pt.create=function(r){return new Pt(r)};Pt.register=Dd;Pt.getAll=function(){return ds.slice()};Pt.getById=function(r){return ds.filter(function(e){return e.vars.id===r})[0]};Cd()&&jt.registerPlugin(Pt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ae,ls,nt,ht,Un,ct,$c,Io,Ea,sa,$s,Ia,en,qo,hc,pn,Nu,Ou,cs,Ud,hl,Id,dn,dc,Nd,Od,Fi,pc,Kc,ys,Zc,aa,mc,dl,Na=1,tn=Date.now,pl=tn(),Jn=0,Ks=0,Fu=function(e,t,n){var i=Ln(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Bu=function(e,t){return t&&(!Ln(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},t_=function r(){return Ks&&requestAnimationFrame(r)},zu=function(){return qo=1},ku=function(){return qo=0},ci=function(e){return e},Zs=function(e){return Math.round(e*1e5)/1e5||0},Fd=function(){return typeof window<"u"},Bd=function(){return Ae||Fd()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Lr=function(e){return!!~$c.indexOf(e)},zd=function(e){return(e==="Height"?Zc:nt["inner"+e])||Un["client"+e]||ct["client"+e]},kd=function(e){return $i(e,"getBoundingClientRect")||(Lr(e)?function(){return To.width=nt.innerWidth,To.height=Zc,To}:function(){return Ti(e)})},n_=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=$i(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?zd(s):e["client"+s])||0}},i_=function(e,t){return!t||~pi.indexOf(e)?kd(e):function(){return To}},di=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=$i(e,n))?o()-kd(e)()[s]:Lr(e)?(Un[n]||ct[n])-zd(i):e[n]-e["offset"+i])},Oa=function(e,t){for(var n=0;n<cs.length;n+=3)(!t||~t.indexOf(cs[n+1]))&&e(cs[n],cs[n+1],cs[n+2])},Ln=function(e){return typeof e=="string"},an=function(e){return typeof e=="function"},Js=function(e){return typeof e=="number"},mr=function(e){return typeof e=="object"},Hs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Gr=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Hr=Math.abs,Gd="left",Hd="top",Jc="right",Qc="bottom",br="width",Ar="height",oa="Right",la="Left",ca="Top",ua="Bottom",Dt="padding",Yn="margin",Ls="Width",eu="Height",Ft="px",qn=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},r_=function(e){var t=qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Gu=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ti=function(e,t){var n=t&&qn(e)[hc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},No=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Vd=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},s_=function(e){return function(t){return Ae.utils.snap(Vd(e),t)}},tu=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},a_=function(e){return function(t,n){return tu(Vd(e))(t,n.direction)}},Fa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Vt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Ht=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ba=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Hu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},za={toggleActions:"play",anticipatePin:0},Oo={top:0,left:0,center:.5,bottom:1,right:1},Mo=function(e,t){if(Ln(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Oo?Oo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ka=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=ht.createElement("div"),_=Lr(n)||$i(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?ct:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,v=x?c:u,S="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===Bt?Jc:Qc)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],So(g,0,i,x),g},So=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ls]=1,s["border"+a+Ls]=0,s[n.p]=t+"px",Ae.set(e,s)},et=[],_c={},Ta,Vu=function(){return tn()-Jn>34&&(Ta||(Ta=requestAnimationFrame(Ri)))},Vr=function(){(!dn||!dn.isPressed||dn.startX>ct.clientWidth)&&(rt.cache++,dn?Ta||(Ta=requestAnimationFrame(Ri)):Ri(),Jn||Ur("scrollStart"),Jn=tn())},ml=function(){Od=nt.innerWidth,Nd=nt.innerHeight},Qs=function(e){rt.cache++,(e===!0||!en&&!Id&&!ht.fullscreenElement&&!ht.webkitFullscreenElement&&(!dc||Od!==nt.innerWidth||Math.abs(nt.innerHeight-Nd)>nt.innerHeight*.25))&&Io.restart(!0)},Dr={},o_=[],Wd=function r(){return Ht(at,"scrollEnd",r)||Mr(!0)},Ur=function(e){return Dr[e]&&Dr[e].map(function(t){return t()})||o_},Pn=[],Xd=function(e){for(var t=0;t<Pn.length;t+=5)(!e||Pn[t+4]&&Pn[t+4].query===e)&&(Pn[t].style.cssText=Pn[t+1],Pn[t].getBBox&&Pn[t].setAttribute("transform",Pn[t+2]||""),Pn[t+3].uncache=1)},Yd=function(){return rt.forEach(function(e){return an(e)&&++e.cacheID&&(e.rec=e())})},nu=function(e,t){var n;for(pn=0;pn<et.length;pn++)n=et[pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));aa=!0,t&&Xd(t),t||Ur("revert")},qd=function(e,t){rt.cache++,(t||!mn)&&rt.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),Ln(e)&&(nt.history.scrollRestoration=Kc=e)},mn,wr=0,Wu,l_=function(){if(Wu!==wr){var e=Wu=wr;requestAnimationFrame(function(){return e===wr&&Mr(!0)})}},jd=function(){ct.appendChild(ys),Zc=!dn&&ys.offsetHeight||nt.innerHeight,ct.removeChild(ys)},Xu=function(e){return Ea(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Mr=function(e,t){if(Un=ht.documentElement,ct=ht.body,$c=[nt,ht,Un,ct],Jn&&!e&&!aa){Vt(at,"scrollEnd",Wd);return}jd(),mn=at.isRefreshing=!0,aa||Yd();var n=Ur("refreshInit");Ud&&at.sort(),t||nu(),rt.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),aa=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),mc=1,Xu(!0),et.forEach(function(i){var s=di(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Xu(!1),mc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),qd(Kc,1),Io.pause(),wr++,mn=2,Ri(2),et.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),mn=at.isRefreshing=!1,Ur("refresh")},gc=0,yo=1,fa,Ri=function(e){if(e===2||!mn&&!aa){at.isUpdating=!0,fa&&fa.update(0);var t=et.length,n=tn(),i=n-pl>=50,s=t&&et[0].scroll();if(yo=gc>s?-1:1,mn||(gc=s),i&&(Jn&&!qo&&n-Jn>200&&(Jn=0,Ur("scrollEnd")),$s=pl,pl=n),yo<0){for(pn=t;pn-- >0;)et[pn]&&et[pn].update(0,i);yo=1}else for(pn=0;pn<t;pn++)et[pn]&&et[pn].update(0,i);at.isUpdating=!1}Ta=0},vc=[Gd,Hd,Qc,Jc,Yn+ua,Yn+oa,Yn+ca,Yn+la,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Eo=vc.concat([br,Ar,"boxSizing","max"+Ls,"max"+eu,"position",Yn,Dt,Dt+ca,Dt+oa,Dt+ua,Dt+la]),c_=function(e,t,n){Es(n);var i=e._gsap;if(i.spacerIsNative)Es(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},_l=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=vc.length,o=t.style,a=e.style,l;s--;)l=vc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Qc]=a[Jc]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[br]=No(e,gn)+Ft,o[Ar]=No(e,Bt)+Ft,o[Dt]=a[Yn]=a[Hd]=a[Gd]="0",Es(i),a[br]=a["max"+Ls]=n[br],a[Ar]=a["max"+eu]=n[Ar],a[Dt]=n[Dt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},u_=/([A-Z])/g,Es=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(u_,"-$1").toLowerCase())}},Ga=function(e){for(var t=Eo.length,n=e.style,i=[],s=0;s<t;s++)i.push(Eo[s],n[Eo[s]]);return i.t=e,i},f_=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},To={left:0,top:0},Yu=function(e,t,n,i,s,o,a,l,c,u,f,h,d,g){an(e)&&(e=e(l)),Ln(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Mo("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,x;if(d&&d.seek(0),isNaN(e)||(e=+e),Js(e))d&&(e=Ae.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&So(a,n,i,!0);else{an(t)&&(t=t(l));var v=(e||"0").split(" "),S,w,A,E;x=vn(t,l)||ct,S=Ti(x)||{},(!S||!S.left&&!S.top)&&qn(x).display==="none"&&(E=x.style.display,x.style.display="block",S=Ti(x),E?x.style.display=E:x.style.removeProperty("display")),w=Mo(v[0],S[i.d]),A=Mo(v[1]||"0",n),e=S[i.p]-c[i.p]-u+w+s-A,a&&So(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var U=e+n,M=o._isStart;m="scroll"+i.d2,So(o,U,i,M&&U>20||!M&&(f?Math.max(ct[m],Un[m]):o.parentNode[m])<=U+1),f&&(c=Ti(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ft))}return d&&x&&(m=Ti(x),d.seek(h),p=Ti(x),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},h_=/(webkit|moz|length|cssText|inset)/i,qu=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ct){e._stOrig=s.cssText,a=qn(e);for(o in a)!+o&&!h_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},$d=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Ha=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},ju=function(e,t){var n=nr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=$d(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&Ri()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Ae.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Vt(e,"wheel",n.wheelHandler),at.isTouch&&Vt(e,"touchmove",n.wheelHandler),s},at=function(){function r(t,n){ls||r.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),pc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ks){this.update=this.refresh=this.kill=ci;return}n=Gu(Ln(n)||Js(n)||n.nodeType?{trigger:n}:n,za);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,v=s.once,S=s.snap,w=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,U=s.fastScrollEnd,M=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?gn:Bt,B=!f&&f!==0,N=vn(n.scroller||nt),Z=Ae.core.getCache(N),L=Lr(N),F=("pinType"in n?n.pinType:$i(N,"pinType")||L&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=B&&n.toggleActions.split(" "),q="markers"in n?n.markers:za.markers,$=L?0:parseFloat(qn(N)["border"+y.p2+Ls])||0,C=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(C)},se=n_(N,L,y),j=i_(N,L),K=0,ue=0,Me=0,me=nr(N,y),De,ye,Ie,ke,I,Te,oe,Ee,ge,G,Be,R,T,z,ie,ee,re,ve,pe,fe,Pe,He,Q,st,Ne,Ye,we,xe,P,le,Re,te,ne,D,ae,he,ze,Oe,je;if(C._startClamp=C._endClamp=!1,C._dir=y,m*=45,C.scroller=N,C.scroll=E?E.time.bind(E):me,ke=me(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ud=1,n.refreshPriority===-9999&&(fa=C)),Z.tweenScroll=Z.tweenScroll||{top:ju(N,Bt),left:ju(N,gn)},C.tweenTo=De=Z.tweenScroll[y.p],C.scrubDuration=function(ce){ne=Js(ce)&&ce,ne?te?te.duration(ce):te=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ne,paused:!0,onComplete:function(){return p&&p(C)}}):(te&&te.progress(1).kill(),te=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(f),le=0,l||(l=i.vars.id)),S&&((!mr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in ct.style&&Ae.set(L?[ct,Un]:N,{scrollBehavior:"auto"}),rt.forEach(function(ce){return an(ce)&&ce.target===(L?ht.scrollingElement||Un:N)&&(ce.smooth=!1)}),Ie=an(S.snapTo)?S.snapTo:S.snapTo==="labels"?s_(i):S.snapTo==="labelsDirectional"?a_(i):S.directional!==!1?function(ce,Ve){return tu(S.snapTo)(ce,tn()-ue<500?0:Ve.direction)}:Ae.utils.snap(S.snapTo),D=S.duration||{min:.1,max:2},D=mr(D)?sa(D.min,D.max):sa(D,D),ae=Ae.delayedCall(S.delay||ne/2||.1,function(){var ce=me(),Ve=tn()-ue<500,Ge=De.tween;if((Ve||Math.abs(C.getVelocity())<10)&&!Ge&&!qo&&K!==ce){var Ke=(ce-Te)/z,Et=i&&!B?i.totalProgress():Ke,tt=Ve?0:(Et-Re)/(tn()-$s)*1e3||0,gt=Ae.utils.clamp(-Ke,1-Ke,Hr(tt/2)*tt/.185),Nt=Ke+(S.inertia===!1?0:gt),xt,vt,ut=S,wn=ut.onStart,b=ut.onInterrupt,O=ut.onComplete;if(xt=Ie(Nt,C),Js(xt)||(xt=Nt),vt=Math.max(0,Math.round(Te+xt*z)),ce<=oe&&ce>=Te&&vt!==ce){if(Ge&&!Ge._initted&&Ge.data<=Hr(vt-ce))return;S.inertia===!1&&(gt=xt-Ke),De(vt,{duration:D(Hr(Math.max(Hr(Nt-Et),Hr(xt-Et))*.185/tt/.05||0)),ease:S.ease||"power3",data:Hr(vt-ce),onInterrupt:function(){return ae.restart(!0)&&b&&Gr(C,b)},onComplete:function(){C.update(),K=me(),i&&!B&&(te?te.resetTo("totalProgress",xt,i._tTime/i._tDur):i.progress(xt)),le=Re=i&&!B?i.totalProgress():C.progress,x&&x(C),O&&Gr(C,O)}},ce,gt*z,vt-ce-gt*z),wn&&Gr(C,wn,De.tween)}}else C.isActive&&K!==ce&&ae.restart(!0)}).pause()),l&&(_c[l]=C),h=C.trigger=vn(h||d!==!0&&d),je=h&&h._gsap&&h._gsap.stRevert,je&&(je=je(C)),d=d===!0?h:vn(d),Ln(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Yn||(g=!g&&d.parentNode&&d.parentNode.style&&qn(d.parentNode).display==="flex"?!1:Dt),C.pin=d,ye=Ae.core.getCache(d),ye.spacer?ie=ye.pinState:(A&&(A=vn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),ye.spacerIsNative=!!A,A&&(ye.spacerState=Ga(A))),ye.spacer=ve=A||ht.createElement("div"),ve.classList.add("pin-spacer"),l&&ve.classList.add("pin-spacer-"+l),ye.pinState=ie=Ga(d)),n.force3D!==!1&&Ae.set(d,{force3D:!0}),C.spacer=ve=ye.spacer,P=qn(d),st=P[g+y.os2],fe=Ae.getProperty(d),Pe=Ae.quickSetter(d,y.a,Ft),_l(d,ve,P),re=Ga(d)),q){R=mr(q)?Gu(q,Hu):Hu,G=ka("scroller-start",l,N,y,R,0),Be=ka("scroller-end",l,N,y,R,0,G),pe=G["offset"+y.op.d2];var Je=vn($i(N,"content")||N);Ee=this.markerStart=ka("start",l,Je,y,R,pe,0,E),ge=this.markerEnd=ka("end",l,Je,y,R,pe,0,E),E&&(Oe=Ae.quickSetter([Ee,ge],y.a,Ft)),!F&&!(pi.length&&$i(N,"fixedMarkers")===!0)&&(r_(L?ct:N),Ae.set([G,Be],{force3D:!0}),Ye=Ae.quickSetter(G,y.a,Ft),xe=Ae.quickSetter(Be,y.a,Ft))}if(E){var be=E.vars.onUpdate,Se=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),be&&be.apply(E,Se||[])})}if(C.previous=function(){return et[et.indexOf(C)-1]},C.next=function(){return et[et.indexOf(C)+1]},C.revert=function(ce,Ve){if(!Ve)return C.kill(!0);var Ge=ce!==!1||!C.enabled,Ke=en;Ge!==C.isReverted&&(Ge&&(he=Math.max(me(),C.scroll.rec||0),Me=C.progress,ze=i&&i.progress()),Ee&&[Ee,ge,G,Be].forEach(function(Et){return Et.style.display=Ge?"none":"block"}),Ge&&(en=C,C.update(Ge)),d&&(!w||!C.isActive)&&(Ge?c_(d,ve,ie):_l(d,ve,qn(d),Ne)),Ge||C.update(Ge),en=Ke,C.isReverted=Ge)},C.refresh=function(ce,Ve,Ge,Ke){if(!((en||!C.enabled)&&!Ve)){if(d&&ce&&Jn){Vt(r,"scrollEnd",Wd);return}!mn&&J&&J(C),en=C,De.tween&&!Ge&&(De.tween.kill(),De.tween=0),te&&te.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Et=se(),tt=j(),gt=E?E.duration():di(N,y),Nt=z<=.01||!z,xt=0,vt=Ke||0,ut=mr(Ge)?Ge.end:n.end,wn=n.endTrigger||h,b=mr(Ge)?Ge.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),O=C.pinnedContainer=n.pinnedContainer&&vn(n.pinnedContainer,C),Y=h&&Math.max(0,et.indexOf(C))||0,X=Y,V,de,Le,We,Ue,Fe,Xe,Ze,St,Ot,ft,ln,dt;for(q&&mr(Ge)&&(ln=Ae.getProperty(G,y.p),dt=Ae.getProperty(Be,y.p));X-- >0;)Fe=et[X],Fe.end||Fe.refresh(0,1)||(en=C),Xe=Fe.pin,Xe&&(Xe===h||Xe===d||Xe===O)&&!Fe.isReverted&&(Ot||(Ot=[]),Ot.unshift(Fe),Fe.revert(!0,!0)),Fe!==et[X]&&(Y--,X--);for(an(b)&&(b=b(C)),b=Fu(b,"start",C),Te=Yu(b,h,Et,y,me(),Ee,G,C,tt,$,F,gt,E,C._startClamp&&"_startClamp")||(d?-.001:0),an(ut)&&(ut=ut(C)),Ln(ut)&&!ut.indexOf("+=")&&(~ut.indexOf(" ")?ut=(Ln(b)?b.split(" ")[0]:"")+ut:(xt=Mo(ut.substr(2),Et),ut=Ln(b)?b:(E?Ae.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Te):Te)+xt,wn=h)),ut=Fu(ut,"end",C),oe=Math.max(Te,Yu(ut||(wn?"100% 0":gt),wn,Et,y,me()+xt,ge,Be,C,tt,$,F,gt,E,C._endClamp&&"_endClamp"))||-.001,xt=0,X=Y;X--;)Fe=et[X]||{},Xe=Fe.pin,Xe&&Fe.start-Fe._pinPush<=Te&&!E&&Fe.end>0&&(V=Fe.end-(C._startClamp?Math.max(0,Fe.start):Fe.start),(Xe===h&&Fe.start-Fe._pinPush<Te||Xe===O)&&isNaN(b)&&(xt+=V*(1-Fe.progress)),Xe===d&&(vt+=V));if(Te+=xt,oe+=xt,C._startClamp&&(C._startClamp+=xt),C._endClamp&&!mn&&(C._endClamp=oe||-.001,oe=Math.min(oe,di(N,y))),z=oe-Te||(Te-=.01)&&.001,Nt&&(Me=Ae.utils.clamp(0,1,Ae.utils.normalize(Te,oe,he))),C._pinPush=vt,Ee&&xt&&(V={},V[y.a]="+="+xt,O&&(V[y.p]="-="+me()),Ae.set([Ee,ge],V)),d&&!(mc&&C.end>=di(N,y)))V=qn(d),We=y===Bt,Le=me(),He=parseFloat(fe(y.a))+vt,!gt&&oe>1&&(ft=(L?ht.scrollingElement||Un:N).style,ft={style:ft,value:ft["overflow"+y.a.toUpperCase()]},L&&qn(ct)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ft.style["overflow"+y.a.toUpperCase()]="scroll")),_l(d,ve,V),re=Ga(d),de=Ti(d,!0),Ze=F&&nr(N,We?gn:Bt)(),g?(Ne=[g+y.os2,z+vt+Ft],Ne.t=ve,X=g===Dt?No(d,y)+z+vt:0,X&&(Ne.push(y.d,X+Ft),ve.style.flexBasis!=="auto"&&(ve.style.flexBasis=X+Ft)),Es(Ne),O&&et.forEach(function(qe){qe.pin===O&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),F&&me(he)):(X=No(d,y),X&&ve.style.flexBasis!=="auto"&&(ve.style.flexBasis=X+Ft)),F&&(Ue={top:de.top+(We?Le-Te:Ze)+Ft,left:de.left+(We?Ze:Le-Te)+Ft,boxSizing:"border-box",position:"fixed"},Ue[br]=Ue["max"+Ls]=Math.ceil(de.width)+Ft,Ue[Ar]=Ue["max"+eu]=Math.ceil(de.height)+Ft,Ue[Yn]=Ue[Yn+ca]=Ue[Yn+oa]=Ue[Yn+ua]=Ue[Yn+la]="0",Ue[Dt]=V[Dt],Ue[Dt+ca]=V[Dt+ca],Ue[Dt+oa]=V[Dt+oa],Ue[Dt+ua]=V[Dt+ua],Ue[Dt+la]=V[Dt+la],ee=f_(ie,Ue,w),mn&&me(0)),i?(St=i._initted,hl(1),i.render(i.duration(),!0,!0),Q=fe(y.a)-He+z+vt,we=Math.abs(z-Q)>1,F&&we&&ee.splice(ee.length-2,2),i.render(0,!0,!0),St||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),hl(0)):Q=z,ft&&(ft.value?ft.style["overflow"+y.a.toUpperCase()]=ft.value:ft.style.removeProperty("overflow-"+y.a));else if(h&&me()&&!E)for(de=h.parentNode;de&&de!==ct;)de._pinOffset&&(Te-=de._pinOffset,oe-=de._pinOffset),de=de.parentNode;Ot&&Ot.forEach(function(qe){return qe.revert(!1,!0)}),C.start=Te,C.end=oe,ke=I=mn?he:me(),!E&&!mn&&(ke<he&&me(he),C.scroll.rec=0),C.revert(!1,!0),ue=tn(),ae&&(K=-1,ae.restart(!0)),en=0,i&&B&&(i._initted||ze)&&i.progress()!==ze&&i.progress(ze||0,!0).render(i.time(),!0,!0),(Nt||Me!==C.progress||E||_||i&&!i._initted)&&(i&&!B&&(i._initted||Me||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Te<-.001&&!Me?Ae.utils.normalize(Te,oe,0):Me,!0),C.progress=Nt||(ke-Te)/z===Me?0:Me),d&&g&&(ve._pinOffset=Math.round(C.progress*Q)),te&&te.invalidate(),isNaN(ln)||(ln-=Ae.getProperty(G,y.p),dt-=Ae.getProperty(Be,y.p),Ha(G,y,ln),Ha(Ee,y,ln-(Ke||0)),Ha(Be,y,dt),Ha(ge,y,dt-(Ke||0))),Nt&&!mn&&C.update(),u&&!mn&&!T&&(T=!0,u(C),T=!1)}},C.getVelocity=function(){return(me()-I)/(tn()-$s)*1e3||0},C.endAnimation=function(){Hs(C.callbackAnimation),i&&(te?te.progress(1):i.paused()?B||Hs(i,C.direction<0,1):Hs(i,i.reversed()))},C.labelToScroll=function(ce){return i&&i.labels&&(Te||C.refresh()||Te)+i.labels[ce]/i.duration()*z||0},C.getTrailing=function(ce){var Ve=et.indexOf(C),Ge=C.direction>0?et.slice(0,Ve).reverse():et.slice(Ve+1);return(Ln(ce)?Ge.filter(function(Ke){return Ke.vars.preventOverlaps===ce}):Ge).filter(function(Ke){return C.direction>0?Ke.end<=Te:Ke.start>=oe})},C.update=function(ce,Ve,Ge){if(!(E&&!Ge&&!ce)){var Ke=mn===!0?he:C.scroll(),Et=ce?0:(Ke-Te)/z,tt=Et<0?0:Et>1?1:Et||0,gt=C.progress,Nt,xt,vt,ut,wn,b,O,Y;if(Ve&&(I=ke,ke=E?me():Ke,S&&(Re=le,le=i&&!B?i.totalProgress():tt)),m&&d&&!en&&!Na&&Jn&&(!tt&&Te<Ke+(Ke-I)/(tn()-$s)*m?tt=1e-4:tt===1&&oe>Ke+(Ke-I)/(tn()-$s)*m&&(tt=.9999)),tt!==gt&&C.enabled){if(Nt=C.isActive=!!tt&&tt<1,xt=!!gt&&gt<1,b=Nt!==xt,wn=b||!!tt!=!!gt,C.direction=tt>gt?1:-1,C.progress=tt,wn&&!en&&(vt=tt&&!gt?0:tt===1?1:gt===1?2:3,B&&(ut=!b&&W[vt+1]!=="none"&&W[vt+1]||W[vt],Y=i&&(ut==="complete"||ut==="reset"||ut in i))),M&&(b||Y)&&(Y||f||!i)&&(an(M)?M(C):C.getTrailing(M).forEach(function(Le){return Le.endAnimation()})),B||(te&&!en&&!Na?(te._dp._time-te._start!==te._time&&te.render(te._dp._time-te._start),te.resetTo?te.resetTo("totalProgress",tt,i._tTime/i._tDur):(te.vars.totalProgress=tt,te.invalidate().restart())):i&&i.totalProgress(tt,!!(en&&(ue||ce)))),d){if(ce&&g&&(ve.style[g+y.os2]=st),!F)Pe(Zs(He+Q*tt));else if(wn){if(O=!ce&&tt>gt&&oe+1>Ke&&Ke+1>=di(N,y),w)if(!ce&&(Nt||O)){var X=Ti(d,!0),V=Ke-Te;qu(d,ct,X.top+(y===Bt?V:0)+Ft,X.left+(y===Bt?0:V)+Ft)}else qu(d,ve);Es(Nt||O?ee:re),we&&tt<1&&Nt||Pe(He+(tt===1&&!O?Q:0))}}S&&!De.tween&&!en&&!Na&&ae.restart(!0),a&&(b||v&&tt&&(tt<1||!dl))&&Ea(a.targets).forEach(function(Le){return Le.classList[Nt||v?"add":"remove"](a.className)}),o&&!B&&!ce&&o(C),wn&&!en?(B&&(Y&&(ut==="complete"?i.pause().totalProgress(1):ut==="reset"?i.restart(!0).pause():ut==="restart"?i.restart(!0):i[ut]()),o&&o(C)),(b||!dl)&&(c&&b&&Gr(C,c),H[vt]&&Gr(C,H[vt]),v&&(tt===1?C.kill(!1,1):H[vt]=0),b||(vt=tt===1?1:3,H[vt]&&Gr(C,H[vt]))),U&&!Nt&&Math.abs(C.getVelocity())>(Js(U)?U:2500)&&(Hs(C.callbackAnimation),te?te.progress(1):Hs(i,ut==="reverse"?1:!tt,1))):B&&o&&!en&&o(C)}if(xe){var de=E?Ke/E.duration()*(E._caScrollDist||0):Ke;Ye(de+(G._isFlipped?1:0)),xe(de)}Oe&&Oe(-Ke/E.duration()*(E._caScrollDist||0))}},C.enable=function(ce,Ve){C.enabled||(C.enabled=!0,Vt(N,"resize",Qs),L||Vt(N,"scroll",Vr),J&&Vt(r,"refreshInit",J),ce!==!1&&(C.progress=Me=0,ke=I=K=me()),Ve!==!1&&C.refresh())},C.getTween=function(ce){return ce&&De?De.tween:te},C.setPositions=function(ce,Ve,Ge,Ke){if(E){var Et=E.scrollTrigger,tt=E.duration(),gt=Et.end-Et.start;ce=Et.start+gt*ce/tt,Ve=Et.start+gt*Ve/tt}C.refresh(!1,!1,{start:Bu(ce,Ge&&!!C._startClamp),end:Bu(Ve,Ge&&!!C._endClamp)},Ke),C.update()},C.adjustPinSpacing=function(ce){if(Ne&&ce){var Ve=Ne.indexOf(y.d)+1;Ne[Ve]=parseFloat(Ne[Ve])+ce+Ft,Ne[1]=parseFloat(Ne[1])+ce+Ft,Es(Ne)}},C.disable=function(ce,Ve){if(ce!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Ve||te&&te.pause(),he=0,ye&&(ye.uncache=1),J&&Ht(r,"refreshInit",J),ae&&(ae.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!L)){for(var Ge=et.length;Ge--;)if(et[Ge].scroller===N&&et[Ge]!==C)return;Ht(N,"resize",Qs),L||Ht(N,"scroll",Vr)}},C.kill=function(ce,Ve){C.disable(ce,Ve),te&&!Ve&&te.kill(),l&&delete _c[l];var Ge=et.indexOf(C);Ge>=0&&et.splice(Ge,1),Ge===pn&&yo>0&&pn--,Ge=0,et.forEach(function(Ke){return Ke.scroller===C.scroller&&(Ge=1)}),Ge||mn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ce&&i.revert({kill:!1}),Ve||i.kill()),Ee&&[Ee,ge,G,Be].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),fa===C&&(fa=0),d&&(ye&&(ye.uncache=1),Ge=0,et.forEach(function(Ke){return Ke.pin===d&&Ge++}),Ge||(ye.spacer=0)),n.onKill&&n.onKill(C)},et.push(C),C.enable(!1,!1),je&&je(C),i&&i.add&&!z){var Ce=C.update;C.update=function(){C.update=Ce,rt.cache++,Te||oe||C.refresh()},Ae.delayedCall(.01,C.update),z=.01,Te=oe=0}else C.refresh();d&&l_()},r.register=function(n){return ls||(Ae=n||Bd(),Fd()&&window.document&&r.enable(),ls=Ks),ls},r.defaults=function(n){if(n)for(var i in n)za[i]=n[i];return za},r.disable=function(n,i){Ks=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),Ht(nt,"wheel",Vr),Ht(ht,"scroll",Vr),clearInterval(Ia),Ht(ht,"touchcancel",ci),Ht(ct,"touchstart",ci),Fa(Ht,ht,"pointerdown,touchstart,mousedown",zu),Fa(Ht,ht,"pointerup,touchend,mouseup",ku),Io.kill(),Oa(Ht);for(var s=0;s<rt.length;s+=3)Ba(Ht,rt[s],rt[s+1]),Ba(Ht,rt[s],rt[s+2])},r.enable=function(){if(nt=window,ht=document,Un=ht.documentElement,ct=ht.body,Ae){if(Ea=Ae.utils.toArray,sa=Ae.utils.clamp,pc=Ae.core.context||ci,hl=Ae.core.suppressOverwrites||ci,Kc=nt.history.scrollRestoration||"auto",gc=nt.pageYOffset||0,Ae.core.globals("ScrollTrigger",r),ct){Ks=1,ys=document.createElement("div"),ys.style.height="100vh",ys.style.position="absolute",jd(),t_(),Pt.register(Ae),r.isTouch=Pt.isTouch,Fi=Pt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),dc=Pt.isTouch===1,Vt(nt,"wheel",Vr),$c=[nt,ht,Un,ct],Ae.matchMedia?(r.matchMedia=function(u){var f=Ae.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Ae.addEventListener("matchMediaInit",function(){Yd(),nu()}),Ae.addEventListener("matchMediaRevert",function(){return Xd()}),Ae.addEventListener("matchMedia",function(){Mr(0,1),Ur("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return ml(),ml})):console.warn("Requires GSAP 3.11.0 or later"),ml(),Vt(ht,"scroll",Vr);var n=ct.hasAttribute("style"),i=ct.style,s=i.borderTopStyle,o=Ae.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ti(ct),Bt.m=Math.round(a.top+Bt.sc())||0,gn.m=Math.round(a.left+gn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ct.setAttribute("style",""),ct.removeAttribute("style")),Ia=setInterval(Vu,250),Ae.delayedCall(.5,function(){return Na=0}),Vt(ht,"touchcancel",ci),Vt(ct,"touchstart",ci),Fa(Vt,ht,"pointerdown,touchstart,mousedown",zu),Fa(Vt,ht,"pointerup,touchend,mouseup",ku),hc=Ae.utils.checkPrefix("transform"),Eo.push(hc),ls=tn(),Io=Ae.delayedCall(.2,Mr).pause(),cs=[ht,"visibilitychange",function(){var u=nt.innerWidth,f=nt.innerHeight;ht.hidden?(Nu=u,Ou=f):(Nu!==u||Ou!==f)&&Qs()},ht,"DOMContentLoaded",Mr,nt,"load",Mr,nt,"resize",Qs],Oa(Vt),et.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)Ba(Ht,rt[l],rt[l+1]),Ba(Ht,rt[l],rt[l+2])}else if(ht){var c=function u(){r.enable(),ht.removeEventListener("DOMContentLoaded",u)};ht.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(dl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ia)||(Ia=i)&&setInterval(Vu,i),"ignoreMobileResize"in n&&(dc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Oa(Ht)||Oa(Vt,n.autoRefreshEvents||"none"),Id=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=vn(n),o=rt.indexOf(s),a=Lr(s);~o&&rt.splice(o,a?6:2),i&&(a?pi.unshift(nt,i,ct,i,Un,i):pi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Ln(n)?vn(n):n).getBoundingClientRect(),a=o[s?br:Ar]*i||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},r.positionInViewport=function(n,i,s){Ln(n)&&(n=vn(n));var o=n.getBoundingClientRect(),a=o[s?br:Ar],l=i==null?a/2:i in Oo?Oo[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Dr.killAll||[];Dr={},i.forEach(function(s){return s()})}},r}();at.version="3.15.0";at.saveStyles=function(r){return r?Ea(r).forEach(function(e){if(e&&e.style){var t=Pn.indexOf(e);t>=0&&Pn.splice(t,5),Pn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),pc())}}):Pn};at.revert=function(r,e){return nu(!r,e)};at.create=function(r,e){return new at(r,e)};at.refresh=function(r){return r?Qs(!0):(ls||at.register())&&Mr(!0)};at.update=function(r){return++rt.cache&&Ri(r===!0?2:0)};at.clearScrollMemory=qd;at.maxScroll=function(r,e){return di(r,e?gn:Bt)};at.getScrollFunc=function(r,e){return nr(vn(r),e?gn:Bt)};at.getById=function(r){return _c[r]};at.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!Jn};at.snapDirectional=tu;at.addEventListener=function(r,e){var t=Dr[r]||(Dr[r]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(r,e){var t=Dr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Ae.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&an(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return an(s)&&(s=s(),Vt(at,"refresh",function(){return s=e.batchMax()})),Ea(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(at.create(c))}),t};var $u=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},gl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Pt.isTouch?" pinch-zoom":""):"none",e===Un&&r(ct,t)},Va={auto:1,scroll:1},d_=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ae.core.getCache(s),a=tn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ct&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Va[(l=qn(s)).overflowY]||Va[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Lr(s)&&(Va[(l=qn(s)).overflowY]||Va[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Kd=function(e,t,n,i){return Pt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&d_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Vt(ht,Pt.eventTypes[0],Zu,!1,!0)},onDisable:function(){return Ht(ht,Pt.eventTypes[0],Zu,!0)}})},p_=/(input|label|select|textarea)/i,Ku,Zu=function(e){var t=p_.test(e.target.tagName);(t||Ku)&&(e._gsapAllow=!0,Ku=t)},m_=function(e){mr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=vn(e.target)||Un,u=Ae.core.globals().ScrollSmoother,f=u&&u.get(),h=Fi&&(e.content&&vn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=nr(c,Bt),g=nr(c,gn),_=1,m=(Pt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,x=an(i)?function(){return i(a)}:function(){return i||2.8},v,S,w=Kd(c,e.type,!0,s),A=function(){return S=!1},E=ci,U=ci,M=function(){l=di(c,Bt),U=sa(Fi?1:0,l),n&&(E=sa(0,di(c,gn))),v=wr},y=function(){h._gsap.y=Zs(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},B=function(){if(S){requestAnimationFrame(A);var q=Zs(a.deltaY/2),$=U(d.v-q);if(h&&$!==d.v+d.offset){d.offset=$-d.v;var C=Zs((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",d.cacheID=rt.cache,Ri()}return!0}d.offset&&y(),S=!0},N,Z,L,F,H=function(){M(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return h&&Ae.set(h,{y:"+=0"}),e.ignoreCheck=function(W){return Fi&&W.type==="touchmove"&&B()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){S=!1;var W=_;_=Zs((nt.visualViewport&&nt.visualViewport.scale||1)/m),N.pause(),W!==_&&gl(c,_>1.01?!0:n?!1:"x"),Z=g(),L=d(),M(),v=wr},e.onRelease=e.onGestureStart=function(W,q){if(d.offset&&y(),!q)F.restart(!0);else{rt.cache++;var $=x(),C,J;n&&(C=g(),J=C+$*.05*-W.velocityX/.227,$*=$u(g,C,J,di(c,gn)),N.vars.scrollX=E(J)),C=d(),J=C+$*.05*-W.velocityY/.227,$*=$u(d,C,J,di(c,Bt)),N.vars.scrollY=U(J),N.invalidate().duration($).play(.01),(Fi&&N.vars.scrollY>=l||C>=l-1)&&Ae.to({},{onUpdate:H,duration:$})}o&&o(W)},e.onWheel=function(){N._ts&&N.pause(),tn()-p>1e3&&(v=0,p=tn())},e.onChange=function(W,q,$,C,J){if(wr!==v&&M(),q&&n&&g(E(C[2]===q?Z+(W.startX-W.x):g()+q-C[1])),$){d.offset&&y();var se=J[2]===$,j=se?L+W.startY-W.y:d()+$-J[1],K=U(j);se&&j!==K&&(L+=K-j),d(K)}($||q)&&Ri()},e.onEnable=function(){gl(c,n?!1:"x"),at.addEventListener("refresh",H),Vt(nt,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){gl(c,!0),Ht(nt,"resize",H),at.removeEventListener("refresh",H),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Pt(e),a.iOS=Fi,Fi&&!d()&&d(1),Fi&&Ae.ticker.add(ci),F=a._dc,N=Ae.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:$d(d,d(),function(){return N.pause()})},onUpdate:Ri,onComplete:F.vars.onComplete}),a};at.sort=function(r){if(an(r))return et.sort(r);var e=nt.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(r){return new Pt(r)};at.normalizeScroll=function(r){if(typeof r>"u")return dn;if(r===!0&&dn)return dn.enable();if(r===!1){dn&&dn.kill(),dn=r;return}var e=r instanceof Pt?r:m_(r);return dn&&dn.target===e.target&&dn.kill(),Lr(e.target)&&(dn=e),e};at.core={_getVelocityProp:fc,_inputObserver:Kd,_scrollers:rt,_proxies:pi,bridge:{ss:function(){Jn||Ur("scrollStart"),Jn=tn()},ref:function(){return en}}};Bd()&&Ae.registerPlugin(at);const __=[{id:"campusfind",title:"CampusFind",subtitle:"Smart Campus Navigation Platform",desc:"CampusFind is a smart Lost & Found web application designed for college campuses. It enables students and staff to report lost or found items, search for missing belongings, and connect with the rightful owners through a secure and user-friendly platform. The system simplifies item recovery, reduces manual effort, and improves communication within the campus community.",category:"Web App",tech:["PHP","MySQL","HTML5","CSS3","JavaScript","Bootstrap","XAMPP","Git"],demoUrl:"https://campusfind-pro.onrender.com",githubUrl:"https://github.com/DEVDARJI7730/CampusFind-Pro",icon:"fa-solid fa-map-location-dot",image:"/campusfind.png"},{id:"IRVision AI",title:"IRVision AI",subtitle:"AI-Powered Infrared Image Enhancement & Colorization",desc:"An AI-powered web application that enhances and colorizes infrared satellite images using deep learning. The platform improves image clarity, reduces noise, enhances contrast, and enables better object interpretation through an intuitive web interface with secure Google Authentication.",category:"Artificial Intelligence / Computer Vision",tech:["React.js","FastAPI","Python","PyTorch","OpenCV","MongoDB","Google OAuth","JWT","Tailwind CSS"],demoUrl:"https://irvision-ai-client.onrender.com",githubUrl:"https://github.com/DEVDARJI7730/ISRO",icon:"fa-solid fa-camera",image:"/irvision-ai.png"},{id:"skillswap-ai",title:"Skill Swap AI",subtitle:"AI-Powered Skill Exchange & P2P Learning Platform",desc:"An AI-driven peer-to-peer learning platform that connects users wishing to trade skills. The system matches users based on their learning goals, interests, and expertise, facilitating mutual skill sharing with automated recommendations, collaborative channels, and progress tracking.",category:"Full Stack / AI",tech:["Next.js","FastAPI","Python","MongoDB","Tailwind CSS","WebSockets","Gemini AI","Git"],demoUrl:"https://skillswap-frontend-1gv8.onrender.com",githubUrl:"https://github.com/DEVDARJI7730/skillswap-ai",icon:"fa-solid fa-people-arrows",image:"/skillswap-ai.jpg"},{id:"devora-ai",title:"DevoraAI",subtitle:"Enterprise-Grade Full-Stack AI Assistant Dashboard",desc:"An enterprise-grade, full-stack AI assistant dashboard styled with a modern dark theme and glassmorphic panels. It consolidates multiple generative and analytical models into a single local workspace for streaming conversational reasoning, image generation, voice synthesis, and document evaluations.",category:"Full Stack / AI",tech:["React.js","Tailwind CSS","Framer Motion","Zustand","Node.js","Express.js","FastAPI","MongoDB Atlas","Gemini 3.5 Flash","FLUX.1"],demoUrl:null,githubUrl:"https://github.com/DEVDARJI7730/devora-ai",icon:"fa-solid fa-robot",image:"/devora-ai.jpg"},{id:"Developer Portfolio Website",title:"Developer Portfolio",subtitle:"Modern Personal Portfolio Website",desc:"A responsive and interactive portfolio website showcasing my projects, technical skills, certifications, and contact information. Built with modern web technologies, it features smooth animations, dark mode, project filtering, and a clean user experience..",category:"Frontend / Web Development",tech:["JavaScript","HTML5","CSS3","Vite","Three.js"],demoUrl:"https://dev-3d-portfolio.onrender.com",githubUrl:"https://github.com/DEVDARJI7730/dev-3d-portfolio",icon:"fa-solid fa-terminal",image:"/portfolio.jpg"}],g_=[{category:"Languages",icon:"fa-solid fa-code",items:[{name:"C",icon:"fa-solid fa-c"},{name:"C++",icon:"fa-solid fa-hashtag"},{name:"Java",icon:"fa-brands fa-java"},{name:"Python",icon:"fa-brands fa-python"},{name:"JavaScript",icon:"fa-brands fa-js"},{name:"SQL",icon:"fa-solid fa-database"}]},{category:"Frontend",icon:"fa-solid fa-laptop-code",items:[{name:"HTML",icon:"fa-brands fa-html5"},{name:"CSS",icon:"fa-brands fa-css3-alt"},{name:"Tailwind CSS",icon:"fa-brands fa-css3"},{name:"React",icon:"fa-brands fa-react"},{name:"Next.js",icon:"fa-solid fa-n"}]},{category:"Backend",icon:"fa-solid fa-server",items:[{name:"Node.js",icon:"fa-brands fa-node-js"},{name:"MongoDB",icon:"fa-solid fa-leaf"}]},{category:"AI / ML Integration",icon:"fa-solid fa-brain",items:[{name:"OpenAI APIs",icon:"fa-solid fa-bolt"},{name:"Gemini AI",icon:"fa-solid fa-wand-magic-sparkles"},{name:"AI Chatbots",icon:"fa-solid fa-comment-dots"},{name:"Prompt Engineering",icon:"fa-solid fa-terminal"}]},{category:"Tools & Workflow",icon:"fa-solid fa-screwdriver-wrench",items:[{name:"Git",icon:"fa-brands fa-git-alt"},{name:"GitHub",icon:"fa-brands fa-github"},{name:"VS Code",icon:"fa-solid fa-code"},{name:"Figma",icon:"fa-brands fa-figma"}]}],v_=[{date:"2024 - 2029",title:"B.Sc. Information Technology",subtitle:"GLS University",text:"Laying solid foundations in computer science theory, logic structures, and database architectures. Acquired core proficiencies in C, C++, Java, SQL, HTML, CSS, and modern JS. Maintained high academic standing while building hands-on projects."},{date:"Present Goal",title:"Aspiring Full Stack AI Engineer",subtitle:"Developer Journey",text:"Bridging the gap between traditional software systems and AI integrations. Developing applications like Devora AI, mastering full-stack frameworks (MERN), exploring prompt optimization, fine-tuning APIs, and building interactive 3D web spaces."},{date:"Dream Vision",title:"Launch an AI Tech Startup",subtitle:"Founder Mindset",text:"Fusing cutting-edge AI utilities with high-performance, human-centric design. Seeking to create a tech venture focused on automation, generative systems, or campus efficiency that can scale to benefit millions."}],x_=[{title:"AI Fluency: AI Capabilities and Limitations",issuer:"Anthropic",date:"2026",icon:"fa-solid fa-laptop",credentialUrl:"https://verify.skilljar.com/c/coi5dudud5i2"},{title:"AI Fluency: Framework and Foundations",issuer:"Anthropic",date:"2026",icon:"fa-solid fa-laptop",credentialUrl:"https://verify.skilljar.com/c/7m3iux44oacy"},{title:"Claude 101",issuer:"Anthropic",date:"2026",icon:"fa-solid fa-brain",credentialUrl:"https://verify.skilljar.com/c/myok2gyqmam9"},{title:"Gemini Certified Student (K12)",issuer:"Google Gemini",date:"2026",icon:"fa-brands fa-google",credentialUrl:"https://edu.exceedlms.com/student/award/Ya5JCmM583VgK8ZvZChDS38y"},{title:"AI Tools Workshop",issuer:"Be10x",date:"2026",icon:"fa-solid fa-wrench",credentialUrl:"https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971287661"},{title:"Data Science & Analytics",issuer:"HP LIFE",date:"2026",icon:"fa-solid fa-chart-line",credentialUrl:"https://www.life-global.org/certificate/c4bf060b-7af6-498d-8f95-c65f180e2aff"},{title:"AI for Beginners",issuer:"HP LIFE",date:"2026",icon:"fa-solid fa-brain",credentialUrl:"https://www.life-global.org/certificate/4136fe5a-0446-417f-92b5-a8ae5efd2c45"},{title:"Critical Thinking in the AI Era",issuer:"HP LIFE",date:"2026",icon:"fa-solid fa-lightbulb",credentialUrl:"https://www.life-global.org/certificate/b7f4c143-c32c-4c95-91b6-b092b6bc11af"},{title:"Intermediate Coding in Python with AI",issuer:"Unstop",date:"2026",icon:"fa-brands fa-python",credentialUrl:"https://unstop.com/certificate-preview/039192f4-4fd0-4bb2-955d-4217ff2df5c8"},{title:"WhatsApp API Expert",issuer:"Wati Academy",date:"2026",icon:"fa-brands fa-whatsapp",credentialUrl:"https://academy.wati.io/certificate_v2/6565e67ddf50a85b8d0536c6/user/69f9f4f4e686e44637092b6d"},{title:"Cyber Shadez 2026 Techathon",issuer:"GLS University",date:"2026",icon:"fa-solid fa-trophy",credentialUrl:"https://www.linkedin.com/feed/update/urn:li:activity:7431534498611269632/"},{title:"Cyber Shadez 2026 Idea Presentation",issuer:"GLS University",date:"2026",icon:"fa-solid fa-display",credentialUrl:"https://www.linkedin.com/feed/update/urn:li:activity:7430924854280908800/"},{title:"Internal Hackathon",issuer:"GLS University",date:"2026",icon:"fa-solid fa-laptop-code",credentialUrl:"https://www.linkedin.com/feed/update/urn:li:activity:7422123252573011968/"},{title:"Ideathon 4.0",issuer:"Silver Oak University",date:"2025",icon:"fa-solid fa-lightbulb",credentialUrl:"https://www.linkedin.com/feed/update/urn:li:activity:7373310067141509120/"},{title:"HACKOUT'25",issuer:"DA-IICT",date:"2025",icon:"fa-solid fa-code",credentialUrl:"https://www.linkedin.com/feed/update/urn:li:activity:7368650046940102656/"}];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const iu="160",Wr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},M_=0,Ju=1,S_=2,Zd=1,y_=2,Si=3,ir=0,Tn=1,bi=2,Ki=0,Ts=1,xc=2,Qu=3,ef=4,E_=5,gr=100,T_=101,b_=102,tf=103,nf=104,A_=200,w_=201,R_=202,C_=203,Mc=204,Sc=205,P_=206,L_=207,D_=208,U_=209,I_=210,N_=211,O_=212,F_=213,B_=214,z_=0,k_=1,G_=2,Fo=3,H_=4,V_=5,W_=6,X_=7,ru=0,Y_=1,q_=2,Zi=0,j_=1,$_=2,K_=3,Z_=4,J_=5,Q_=6,Jd=300,Ds=301,Us=302,yc=303,Ec=304,jo=306,Tc=1e3,si=1001,bc=1002,_n=1003,rf=1004,vl=1005,jn=1006,eg=1007,ba=1008,Ji=1009,tg=1010,ng=1011,su=1012,Qd=1013,Wi=1014,Xi=1015,Aa=1016,ep=1017,tp=1018,Rr=1020,ig=1021,ai=1023,rg=1024,sg=1025,Cr=1026,Is=1027,ag=1028,np=1029,og=1030,ip=1031,rp=1033,xl=33776,Ml=33777,Sl=33778,yl=33779,sf=35840,af=35841,of=35842,lf=35843,sp=36196,cf=37492,uf=37496,ff=37808,hf=37809,df=37810,pf=37811,mf=37812,_f=37813,gf=37814,vf=37815,xf=37816,Mf=37817,Sf=37818,yf=37819,Ef=37820,Tf=37821,El=36492,bf=36494,Af=36495,lg=36283,wf=36284,Rf=36285,Cf=36286,ap=3e3,Pr=3001,cg=3200,ug=3201,op=0,fg=1,$n="",qt="srgb",Li="srgb-linear",au="display-p3",$o="display-p3-linear",Bo="linear",Mt="srgb",zo="rec709",ko="p3",Yr=7680,Pf=519,hg=512,dg=513,pg=514,lp=515,mg=516,_g=517,gg=518,vg=519,Lf=35044,Df="300 es",Ac=1035,wi=2e3,Go=2001;class zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uf=1234567;const ha=Math.PI/180,wa=180/Math.PI;function Os(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function rn(r,e,t){return Math.max(e,Math.min(t,r))}function ou(r,e){return(r%e+e)%e}function xg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Mg(r,e,t){return r!==e?(t-r)/(e-r):0}function da(r,e,t){return(1-t)*r+t*e}function Sg(r,e,t,n){return da(r,e,1-Math.exp(-t*n))}function yg(r,e=1){return e-Math.abs(ou(r,e*2)-e)}function Eg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Tg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function bg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ag(r,e){return r+Math.random()*(e-r)}function wg(r){return r*(.5-Math.random())}function Rg(r){r!==void 0&&(Uf=r);let e=Uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cg(r){return r*ha}function Pg(r){return r*wa}function wc(r){return(r&r-1)===0&&r!==0}function Lg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ho(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Dg(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function us(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const cp={DEG2RAD:ha,RAD2DEG:wa,generateUUID:Os,clamp:rn,euclideanModulo:ou,mapLinear:xg,inverseLerp:Mg,lerp:da,damp:Sg,pingpong:yg,smoothstep:Eg,smootherstep:Tg,randInt:bg,randFloat:Ag,randFloatSpread:wg,seededRandom:Rg,degToRad:Cg,radToDeg:Pg,isPowerOfTwo:wc,ceilPowerOfTwo:Lg,floorPowerOfTwo:Ho,setQuaternionFromProperEuler:Dg,normalize:fn,denormalize:us};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,n,i,s,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],v=i[4],S=i[7],w=i[2],A=i[5],E=i[8];return s[0]=o*_+a*x+l*w,s[3]=o*m+a*v+l*A,s[6]=o*p+a*S+l*E,s[1]=c*_+u*x+f*w,s[4]=c*m+u*v+f*A,s[7]=c*p+u*S+f*E,s[2]=h*_+d*x+g*w,s[5]=h*m+d*v+g*A,s[8]=h*p+d*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tl=new it;function up(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ug(){const r=Vo("canvas");return r.style.display="block",r}const If={};function pa(r){r in If||(If[r]=!0,console.warn(r))}const Nf=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Of=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wa={[Li]:{transfer:Bo,primaries:zo,toReference:r=>r,fromReference:r=>r},[qt]:{transfer:Mt,primaries:zo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[$o]:{transfer:Bo,primaries:ko,toReference:r=>r.applyMatrix3(Of),fromReference:r=>r.applyMatrix3(Nf)},[au]:{transfer:Mt,primaries:ko,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Of),fromReference:r=>r.applyMatrix3(Nf).convertLinearToSRGB()}},Ig=new Set([Li,$o]),pt={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ig.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Wa[e].toReference,i=Wa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Wa[r].primaries},getTransfer:function(r){return r===$n?Bo:Wa[r].transfer}};function bs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qr;class fp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=Vo("canvas")),qr.width=e.width,qr.height=e.height;const n=qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bs(t[n]/255)*255):t[n]=bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ng=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Os(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Al(i[o].image)):s.push(Al(i[o]))}else s=Al(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Al(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Og=0;class bn extends zr{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,n=si,i=si,s=jn,o=ba,a=ai,l=Ji,c=bn.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Os(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Pr?qt:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tc:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tc:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qt?Pr:ap}set encoding(e){pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pr?qt:$n}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Jd;bn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,n=0,i=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,w=(p+1)/2,A=(u+h)/4,E=(f+_)/4,U=(g+m)/4;return v>S&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=E/n):S>w?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=U/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=E/s,i=U/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fg extends zr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(pa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pr?qt:$n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends Fg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dp extends bn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bg extends bn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const w=Math.sqrt(v),A=Math.atan2(w,p*x);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const S=a*x;if(l=l*m+h*S,c=c*m+d*S,u=u*m+g*S,f=f*m+_*S,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ff.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wl=new k,Ff=new Nr;class Pa{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Ya.subVectors(this.max,Vs),jr.subVectors(e.a,Vs),$r.subVectors(e.b,Vs),Kr.subVectors(e.c,Vs),Di.subVectors($r,jr),Ui.subVectors(Kr,$r),cr.subVectors(jr,Kr);let t=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-cr.z,cr.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,cr.z,0,-cr.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-cr.y,cr.x,0];return!Rl(t,jr,$r,Kr,Ya)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,jr,$r,Kr,Ya))?!1:(qa.crossVectors(Di,Ui),t=[qa.x,qa.y,qa.z],Rl(t,jr,$r,Kr,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new k,new k,new k,new k,new k,new k,new k,new k],ei=new k,Xa=new Pa,jr=new k,$r=new k,Kr=new k,Di=new k,Ui=new k,cr=new k,Vs=new k,Ya=new k,qa=new k,ur=new k;function Rl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ur.fromArray(r,s);const a=i.x*Math.abs(ur.x)+i.y*Math.abs(ur.y)+i.z*Math.abs(ur.z),l=e.dot(ur),c=t.dot(ur),u=n.dot(ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zg=new Pa,Ws=new k,Cl=new k;class Ko{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Cl)),this.expandByPoint(Ws.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new k,Pl=new k,ja=new k,Ii=new k,Ll=new k,$a=new k,Dl=new k;class lu{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pl.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Pl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ja),a=Ii.dot(this.direction),l=-Ii.dot(ja),c=Ii.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Pl).addScaledVector(ja,h),d}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),i=gi.dot(gi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,i,s){Ll.subVectors(t,e),$a.subVectors(n,e),Dl.crossVectors(Ll,$a);let o=this.direction.dot(Dl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot($a.crossVectors(Ii,$a));if(l<0)return null;const c=a*this.direction.dot(Ll.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(Dl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),o=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kg,e,Gg)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ni.crossVectors(n,Rn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ni.crossVectors(n,Rn)),Ni.normalize(),Ka.crossVectors(Rn,Ni),i[0]=Ni.x,i[4]=Ka.x,i[8]=Rn.x,i[1]=Ni.y,i[5]=Ka.y,i[9]=Rn.y,i[2]=Ni.z,i[6]=Ka.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],S=n[11],w=n[15],A=i[0],E=i[4],U=i[8],M=i[12],y=i[1],B=i[5],N=i[9],Z=i[13],L=i[2],F=i[6],H=i[10],W=i[14],q=i[3],$=i[7],C=i[11],J=i[15];return s[0]=o*A+a*y+l*L+c*q,s[4]=o*E+a*B+l*F+c*$,s[8]=o*U+a*N+l*H+c*C,s[12]=o*M+a*Z+l*W+c*J,s[1]=u*A+f*y+h*L+d*q,s[5]=u*E+f*B+h*F+d*$,s[9]=u*U+f*N+h*H+d*C,s[13]=u*M+f*Z+h*W+d*J,s[2]=g*A+_*y+m*L+p*q,s[6]=g*E+_*B+m*F+p*$,s[10]=g*U+_*N+m*H+p*C,s[14]=g*M+_*Z+m*W+p*J,s[3]=x*A+v*y+S*L+w*q,s[7]=x*E+v*B+S*F+w*$,s[11]=x*U+v*N+S*H+w*C,s[15]=x*M+v*Z+S*W+w*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,v=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,S=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,w=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,A=t*x+n*v+i*S+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=x*E,e[1]=(_*h*s-f*m*s-_*i*d+n*m*d+f*i*p-n*h*p)*E,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*E,e[4]=v*E,e[5]=(u*m*s-g*h*s+g*i*d-t*m*d-u*i*p+t*h*p)*E,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*E,e[8]=S*E,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*E,e[12]=w*E,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*m+t*f*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,x=l*c,v=l*u,S=l*f,w=n.x,A=n.y,E=n.z;return i[0]=(1-(_+p))*w,i[1]=(d+S)*w,i[2]=(g-v)*w,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(h+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+v)*E,i[9]=(m-x)*E,i[10]=(1-(h+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Zr.set(i[0],i[1],i[2]).length();const o=Zr.set(i[4],i[5],i[6]).length(),a=Zr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ti.copy(this);const c=1/s,u=1/o,f=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=wi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(a===wi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Go)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=wi){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),h=(t+e)*c,d=(n+i)*u;let g,_;if(a===wi)g=(o+s)*f,_=-2*f;else if(a===Go)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zr=new k,ti=new It,kg=new k(0,0,0),Gg=new k(1,1,1),Ni=new k,Ka=new k,Rn=new k,Bf=new It,zf=new Nr;class Zo{constructor(e=0,t=0,n=0,i=Zo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zf.setFromEuler(this),this.setFromQuaternion(zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zo.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hg=0;const kf=new k,Jr=new Nr,vi=new It,Za=new k,Xs=new k,Vg=new k,Wg=new Nr,Gf=new k(1,0,0),Hf=new k(0,1,0),Vf=new k(0,0,1),Xg={type:"added"},Yg={type:"removed"};class Kt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new k,t=new Zo,n=new Nr,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new it}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,t){return kf.copy(e).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Xs,Za,this.up):vi.lookAt(Za,Xs,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),Jr.setFromRotationMatrix(vi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Kt.DEFAULT_UP=new k(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new k,xi=new k,Ul=new k,Mi=new k,Qr=new k,es=new k,Wf=new k,Il=new k,Nl=new k,Ol=new k;let Ja=!1;class ri{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ni.subVectors(e,t),i.cross(ni);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ni.subVectors(i,t),xi.subVectors(n,t),Ul.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(xi),l=ni.dot(Ul),c=xi.dot(xi),u=xi.dot(Ul),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,n,i,s,o,a,l){return Ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ja=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static isFrontFacing(e,t,n,i){return ni.subVectors(n,t),xi.subVectors(e,t),ni.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),ni.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ja=!0),ri.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Qr.subVectors(i,n),es.subVectors(s,n),Il.subVectors(e,n);const l=Qr.dot(Il),c=es.dot(Il);if(l<=0&&c<=0)return t.copy(n);Nl.subVectors(e,i);const u=Qr.dot(Nl),f=es.dot(Nl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Qr,o);Ol.subVectors(e,s);const d=Qr.dot(Ol),g=es.dot(Ol);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(es,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Wf.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(Wf,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Qr,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Fl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=ou(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Fl(o,s,e+1/3),this.g=Fl(o,s,e),this.b=Fl(o,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=mp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=bl(e.r),this.g=bl(e.g),this.b=bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return pt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(rn(Qt.r*255,0,255))*65536+Math.round(rn(Qt.g*255,0,255))*256+Math.round(rn(Qt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,i=Qt.g,s=Qt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=qt){pt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,i=Qt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Qa);const n=da(Oi.h,Qa.h,t),i=da(Oi.s,Qa.s,t),s=da(Oi.l,Qa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ot;ot.NAMES=mp;let qg=0;class Fs extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Ts,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mc&&(n.blendSrc=this.blendSrc),this.blendDst!==Sc&&(n.blendDst=this.blendDst),this.blendEquation!==gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ps extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new k,eo=new $e;class Qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=us(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),i=fn(i,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lf&&(e.usage=this.usage),e}}class _p extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gp extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kn extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jg=0;const Wn=new It,Bl=new Kt,ts=new k,Cn=new Pa,Ys=new Pa,Gt=new k;class oi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?gp:_p)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Cn.min,Ys.min),Cn.expandByPoint(Gt),Gt.addVectors(Cn.max,Ys.max),Cn.expandByPoint(Gt)):(Cn.expandByPoint(Ys.min),Cn.expandByPoint(Ys.max))}Cn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),Gt.add(ts)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new k,u[y]=new k;const f=new k,h=new k,d=new k,g=new $e,_=new $e,m=new $e,p=new k,x=new k;function v(y,B,N){f.fromArray(i,y*3),h.fromArray(i,B*3),d.fromArray(i,N*3),g.fromArray(o,y*2),_.fromArray(o,B*2),m.fromArray(o,N*2),h.sub(f),d.sub(f),_.sub(g),m.sub(g);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(Z),x.copy(d).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(Z),c[y].add(p),c[B].add(p),c[N].add(p),u[y].add(x),u[B].add(x),u[N].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let y=0,B=S.length;y<B;++y){const N=S[y],Z=N.start,L=N.count;for(let F=Z,H=Z+L;F<H;F+=3)v(n[F+0],n[F+1],n[F+2])}const w=new k,A=new k,E=new k,U=new k;function M(y){E.fromArray(s,y*3),U.copy(E);const B=c[y];w.copy(B),w.sub(E.multiplyScalar(E.dot(B))).normalize(),A.crossVectors(U,B);const Z=A.dot(u[y])<0?-1:1;l[y*4]=w.x,l[y*4+1]=w.y,l[y*4+2]=w.z,l[y*4+3]=Z}for(let y=0,B=S.length;y<B;++y){const N=S[y],Z=N.start,L=N.count;for(let F=Z,H=Z+L;F<H;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Qn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xf=new It,fr=new lu,to=new Ko,Yf=new k,ns=new k,is=new k,rs=new k,zl=new k,no=new k,io=new $e,ro=new $e,so=new $e,qf=new k,jf=new k,$f=new k,ao=new k,oo=new k;class nn extends Kt{constructor(e=new oi,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){no.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(zl.fromBufferAttribute(f,e),o?no.addScaledVector(zl,u):no.addScaledVector(zl.sub(t),u))}t.add(no)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(to.containsPoint(fr.origin)===!1&&(fr.intersectSphere(to,Yf)===null||fr.origin.distanceToSquared(Yf)>(e.far-e.near)**2))&&(Xf.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Xf),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=x,w=v;S<w;S+=3){const A=a.getX(S),E=a.getX(S+1),U=a.getX(S+2);i=lo(this,p,e,n,c,u,f,A,E,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=lo(this,o,e,n,c,u,f,x,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=x,w=v;S<w;S+=3){const A=S,E=S+1,U=S+2;i=lo(this,p,e,n,c,u,f,A,E,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,S=m+2;i=lo(this,o,e,n,c,u,f,x,v,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function $g(r,e,t,n,i,s,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ir,a),l===null)return null;oo.copy(a),oo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:r}}function lo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ns),r.getVertexPosition(l,is),r.getVertexPosition(c,rs);const u=$g(r,e,t,n,ns,is,rs,ao);if(u){i&&(io.fromBufferAttribute(i,a),ro.fromBufferAttribute(i,l),so.fromBufferAttribute(i,c),u.uv=ri.getInterpolation(ao,ns,is,rs,io,ro,so,new $e)),s&&(io.fromBufferAttribute(s,a),ro.fromBufferAttribute(s,l),so.fromBufferAttribute(s,c),u.uv1=ri.getInterpolation(ao,ns,is,rs,io,ro,so,new $e),u.uv2=u.uv1),o&&(qf.fromBufferAttribute(o,a),jf.fromBufferAttribute(o,l),$f.fromBufferAttribute(o,c),u.normal=ri.getInterpolation(ao,ns,is,rs,qf,jf,$f,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};ri.getNormal(ns,is,rs,f.normal),u.face=f}return u}class Or extends oi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new kn(c,3)),this.setAttribute("normal",new kn(u,3)),this.setAttribute("uv",new kn(f,2));function g(_,m,p,x,v,S,w,A,E,U,M){const y=S/E,B=w/U,N=S/2,Z=w/2,L=A/2,F=E+1,H=U+1;let W=0,q=0;const $=new k;for(let C=0;C<H;C++){const J=C*B-Z;for(let se=0;se<F;se++){const j=se*y-N;$[_]=j*x,$[m]=J*v,$[p]=L,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=A>0?1:-1,u.push($.x,$.y,$.z),f.push(se/E),f.push(1-C/U),W+=1}}for(let C=0;C<U;C++)for(let J=0;J<E;J++){const se=h+J+F*C,j=h+J+F*(C+1),K=h+(J+1)+F*(C+1),ue=h+(J+1)+F*C;l.push(se,j,ue),l.push(j,K,ue),q+=6}a.addGroup(d,q,M),d+=q,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function hn(r){const e={};for(let t=0;t<r.length;t++){const n=Ns(r[t]);for(const i in n)e[i]=n[i]}return e}function Kg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function vp(r){return r.getRenderTarget()===null?r.outputColorSpace:pt.workingColorSpace}const Zg={clone:Ns,merge:hn};var Jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jg,this.fragmentShader=Qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=Kg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xp extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends xp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,as=1;class e0 extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In(ss,as,e,t);i.layers=this.layers,this.add(i);const s=new In(ss,as,e,t);s.layers=this.layers,this.add(s);const o=new In(ss,as,e,t);o.layers=this.layers,this.add(o);const a=new In(ss,as,e,t);a.layers=this.layers,this.add(a);const l=new In(ss,as,e,t);l.layers=this.layers,this.add(l);const c=new In(ss,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mp extends bn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t0 extends Ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(pa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Pr?qt:$n),this.texture=new Mp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Or(5,5,5),s=new Fr({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Ki});s.uniforms.tEquirect.value=t;const o=new nn(i,s),a=t.minFilter;return t.minFilter===ba&&(t.minFilter=jn),new e0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const kl=new k,n0=new k,i0=new it;class Bi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=kl.subVectors(n,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||i0.getNormalMatrix(e),i=this.coplanarPoint(kl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Ko,co=new k;class cu{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,s=new Bi,o=new Bi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,h-c,m-d,S-p).normalize(),n[1].setComponents(l+s,h+c,m+d,S+p).normalize(),n[2].setComponents(l+o,h+u,m+g,S+x).normalize(),n[3].setComponents(l-o,h-u,m-g,S-x).normalize(),n[4].setComponents(l-a,h-f,m-_,S-v).normalize(),t===wi)n[5].setComponents(l+a,h+f,m+_,S+v).normalize();else if(t===Go)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(co.x=i.normal.x>0?e.max.x:e.min.x,co.y=i.normal.y>0?e.max.y:e.min.y,co.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function r0(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=r.SHORT;else if(f instanceof Uint32Array)_=r.UNSIGNED_INT;else if(f instanceof Int32Array)_=r.INT;else if(f instanceof Int8Array)_=r.BYTE;else if(f instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(r.bindBuffer(f,c),d.count===-1&&g.length===0&&r.bufferSubData(f,0,h),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?r.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):r.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Ra extends oi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*h-o;for(let v=0;v<c;v++){const S=v*f-s;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,S=x+c*(p+1),w=x+1+c*(p+1),A=x+1+c*p;d.push(v,S,A),d.push(S,w,A)}this.setIndex(d),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,u0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,R0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,J0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ev=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,av=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ex=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ax=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:s0,alphahash_pars_fragment:a0,alphamap_fragment:o0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:u0,aomap_fragment:f0,aomap_pars_fragment:h0,batching_pars_vertex:d0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:_0,bsdfs:g0,iridescence_fragment:v0,bumpmap_pars_fragment:x0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:E0,color_fragment:T0,color_pars_fragment:b0,color_pars_vertex:A0,color_vertex:w0,common:R0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:P0,displacementmap_pars_vertex:L0,displacementmap_vertex:D0,emissivemap_fragment:U0,emissivemap_pars_fragment:I0,colorspace_fragment:N0,colorspace_pars_fragment:O0,envmap_fragment:F0,envmap_common_pars_fragment:B0,envmap_pars_fragment:z0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:J0,envmap_vertex:G0,fog_vertex:H0,fog_pars_vertex:V0,fog_fragment:W0,fog_pars_fragment:X0,gradientmap_pars_fragment:Y0,lightmap_fragment:q0,lightmap_pars_fragment:j0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:K0,lights_pars_begin:Z0,lights_toon_fragment:Q0,lights_toon_pars_fragment:ev,lights_phong_fragment:tv,lights_phong_pars_fragment:nv,lights_physical_fragment:iv,lights_physical_pars_fragment:rv,lights_fragment_begin:sv,lights_fragment_maps:av,lights_fragment_end:ov,logdepthbuf_fragment:lv,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:uv,logdepthbuf_vertex:fv,map_fragment:hv,map_pars_fragment:dv,map_particle_fragment:pv,map_particle_pars_fragment:mv,metalnessmap_fragment:_v,metalnessmap_pars_fragment:gv,morphcolor_vertex:vv,morphnormal_vertex:xv,morphtarget_pars_vertex:Mv,morphtarget_vertex:Sv,normal_fragment_begin:yv,normal_fragment_maps:Ev,normal_pars_fragment:Tv,normal_pars_vertex:bv,normal_vertex:Av,normalmap_pars_fragment:wv,clearcoat_normal_fragment_begin:Rv,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Lv,opaque_fragment:Dv,packing:Uv,premultiplied_alpha_fragment:Iv,project_vertex:Nv,dithering_fragment:Ov,dithering_pars_fragment:Fv,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:zv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:Gv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Vv,skinbase_vertex:Wv,skinning_pars_vertex:Xv,skinning_vertex:Yv,skinnormal_vertex:qv,specularmap_fragment:jv,specularmap_pars_fragment:$v,tonemapping_fragment:Kv,tonemapping_pars_fragment:Zv,transmission_fragment:Jv,transmission_pars_fragment:Qv,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,worldpos_vertex:ix,background_vert:rx,background_frag:sx,backgroundCube_vert:ax,backgroundCube_frag:ox,cube_vert:lx,cube_frag:cx,depth_vert:ux,depth_frag:fx,distanceRGBA_vert:hx,distanceRGBA_frag:dx,equirect_vert:px,equirect_frag:mx,linedashed_vert:_x,linedashed_frag:gx,meshbasic_vert:vx,meshbasic_frag:xx,meshlambert_vert:Mx,meshlambert_frag:Sx,meshmatcap_vert:yx,meshmatcap_frag:Ex,meshnormal_vert:Tx,meshnormal_frag:bx,meshphong_vert:Ax,meshphong_frag:wx,meshphysical_vert:Rx,meshphysical_frag:Cx,meshtoon_vert:Px,meshtoon_frag:Lx,points_vert:Dx,points_frag:Ux,shadow_vert:Ix,shadow_frag:Nx,sprite_vert:Ox,sprite_frag:Fx},_e={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ui={basic:{uniforms:hn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:hn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:hn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:hn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:hn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ot(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:hn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:hn([_e.points,_e.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:hn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:hn([_e.common,_e.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:hn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:hn([_e.sprite,_e.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:hn([_e.common,_e.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:hn([_e.lights,_e.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ui.physical={uniforms:hn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const uo={r:0,b:0,g:0};function Bx(r,e,t,n,i,s,o){const a=new ot(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===jo)?(u===void 0&&(u=new nn(new Or(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:Ns(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=pt.getTransfer(v.colorSpace)!==Mt,(f!==v||h!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new nn(new Ra(2,2),new Fr({name:"BackgroundMaterial",uniforms:Ns(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=pt.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(uo,vp(r)),n.buffers.color.setClear(uo.r,uo.g,uo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function zx(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(L,F,H,W,q){let $=!1;if(o){const C=_(W,H,F);c!==C&&(c=C,d(c.object)),$=p(L,W,H,q),$&&x(L,W,H,q)}else{const C=F.wireframe===!0;(c.geometry!==W.id||c.program!==H.id||c.wireframe!==C)&&(c.geometry=W.id,c.program=H.id,c.wireframe=C,$=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,U(L,F,H,W),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,F,H){const W=H.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let $=q[F.id];$===void 0&&($={},q[F.id]=$);let C=$[W];return C===void 0&&(C=m(h()),$[W]=C),C}function m(L){const F=[],H=[],W=[];for(let q=0;q<i;q++)F[q]=0,H[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:W,object:L,attributes:{},index:null}}function p(L,F,H,W){const q=c.attributes,$=F.attributes;let C=0;const J=H.getAttributes();for(const se in J)if(J[se].location>=0){const K=q[se];let ue=$[se];if(ue===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),K===void 0||K.attribute!==ue||ue&&K.data!==ue.data)return!0;C++}return c.attributesNum!==C||c.index!==W}function x(L,F,H,W){const q={},$=F.attributes;let C=0;const J=H.getAttributes();for(const se in J)if(J[se].location>=0){let K=$[se];K===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ue={};ue.attribute=K,K&&K.data&&(ue.data=K.data),q[se]=ue,C++}c.attributes=q,c.attributesNum=C,c.index=W}function v(){const L=c.newAttributes;for(let F=0,H=L.length;F<H;F++)L[F]=0}function S(L){w(L,0)}function w(L,F){const H=c.newAttributes,W=c.enabledAttributes,q=c.attributeDivisors;H[L]=1,W[L]===0&&(r.enableVertexAttribArray(L),W[L]=1),q[L]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),q[L]=F)}function A(){const L=c.newAttributes,F=c.enabledAttributes;for(let H=0,W=F.length;H<W;H++)F[H]!==L[H]&&(r.disableVertexAttribArray(H),F[H]=0)}function E(L,F,H,W,q,$,C){C===!0?r.vertexAttribIPointer(L,F,H,q,$):r.vertexAttribPointer(L,F,H,W,q,$)}function U(L,F,H,W){if(n.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=W.attributes,$=H.getAttributes(),C=F.defaultAttributeValues;for(const J in $){const se=$[J];if(se.location>=0){let j=q[J];if(j===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const K=j.normalized,ue=j.itemSize,Me=t.get(j);if(Me===void 0)continue;const me=Me.buffer,De=Me.type,ye=Me.bytesPerElement,Ie=n.isWebGL2===!0&&(De===r.INT||De===r.UNSIGNED_INT||j.gpuType===Qd);if(j.isInterleavedBufferAttribute){const ke=j.data,I=ke.stride,Te=j.offset;if(ke.isInstancedInterleavedBuffer){for(let oe=0;oe<se.locationSize;oe++)w(se.location+oe,ke.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let oe=0;oe<se.locationSize;oe++)S(se.location+oe);r.bindBuffer(r.ARRAY_BUFFER,me);for(let oe=0;oe<se.locationSize;oe++)E(se.location+oe,ue/se.locationSize,De,K,I*ye,(Te+ue/se.locationSize*oe)*ye,Ie)}else{if(j.isInstancedBufferAttribute){for(let ke=0;ke<se.locationSize;ke++)w(se.location+ke,j.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ke=0;ke<se.locationSize;ke++)S(se.location+ke);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ke=0;ke<se.locationSize;ke++)E(se.location+ke,ue/se.locationSize,De,K,ue*ye,ue/se.locationSize*ke*ye,Ie)}}else if(C!==void 0){const K=C[J];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(se.location,K);break;case 3:r.vertexAttrib3fv(se.location,K);break;case 4:r.vertexAttrib4fv(se.location,K);break;default:r.vertexAttrib1fv(se.location,K)}}}}A()}function M(){N();for(const L in a){const F=a[L];for(const H in F){const W=F[H];for(const q in W)g(W[q].object),delete W[q];delete F[H]}delete a[L]}}function y(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const H in F){const W=F[H];for(const q in W)g(W[q].object),delete W[q];delete F[H]}delete a[L.id]}function B(L){for(const F in a){const H=a[F];if(H[L.id]===void 0)continue;const W=H[L.id];for(const q in W)g(W[q].object),delete W[q];delete H[L.id]}}function N(){Z(),u=!0,c!==l&&(c=l,d(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:N,resetDefaultState:Z,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function kx(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,f){r.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Gx(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),w=v&&S,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:A}}function Hx(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Bi,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,v=x*4;let S=p.clippingState||null;l.value=S,S=u(g,h,v,d);for(let w=0;w!==v;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=d;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Vx(r){let e=new WeakMap;function t(o,a){return a===yc?o.mapping=Ds:a===Ec&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yc||a===Ec)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new t0(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class yp extends xp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ms=4,Kf=[.125,.215,.35,.446,.526,.582],vr=20,Gl=new yp,Zf=new ot;let Hl=null,Vl=0,Wl=0;const _r=(1+Math.sqrt(5))/2,os=1/_r,Jf=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,_r,os),new k(0,_r,-os),new k(os,0,_r),new k(-os,0,_r),new k(_r,os,0),new k(-_r,os,0)];class Qf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Vl,Wl),e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Aa,format:ai,colorSpace:Li,depthBuffer:!1},i=eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wx(s)),this._blurMaterial=Xx(s,e,t)}return i}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,n,i){const a=new In(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Zf),u.toneMapping=Zi,u.autoClear=!1;const d=new ps({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new nn(new Or,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Zf),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;fo(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ds||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Jf[(i-1)%Jf.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new nn(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*vr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const p=[];let x=0;for(let E=0;E<vr;++E){const U=E/_,M=Math.exp(-U*U/2);p.push(M),E===0?x+=M:E<m&&(x+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const S=this._sizeLods[i],w=3*S*(i>v-ms?i-v+ms:0),A=4*(this._cubeSize-S);fo(t,w,A,3*S,2*S),l.setRenderTarget(t),l.render(f,Gl)}}function Wx(r){const e=[],t=[],n=[];let i=r;const s=r-ms+1+Kf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ms?l=Kf[o-r+ms-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,U=A>2?0:-1,M=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];x.set(M,_*g*A),v.set(h,m*g*A);const y=[A,A,A,A,A,A];S.set(y,p*g*A)}const w=new oi;w.setAttribute("position",new Qn(x,_)),w.setAttribute("uv",new Qn(v,m)),w.setAttribute("faceIndex",new Qn(S,p)),e.push(w),i>ms&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eh(r,e,t){const n=new Ir(r,e,t);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Xx(r,e,t){const n=new Float32Array(vr),i=new k(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function th(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function nh(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===yc||l===Ec,u=l===Ds||l===Us;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Qf(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Qf(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jx(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,S=x.length;v<S;v+=3){const w=x[v+0],A=x[v+1],E=x[v+2];h.push(w,A,A,E,E,w)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const w=v+0,A=v+1,E=v+2;h.push(w,A,A,E,E,w)}}else return;const m=new(up(h)?gp:_p)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function $x(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){r.drawElements(s,g,a,d*l),t.update(g,s,1)}function f(d,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,d*l,_),t.update(g,s,_)}function h(d,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,d,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function Kx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zx(r,e){return r[0]-e[0]}function Jx(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Qx(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let F=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var d=F;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),w===!0&&(M=3);let y=u.attributes.position.count*M,B=1;y>e.maxTextureSize&&(B=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const N=new Float32Array(y*B*4*_),Z=new dp(N,y,B,_);Z.type=Xi,Z.needsUpdate=!0;const L=M*4;for(let H=0;H<_;H++){const W=A[H],q=E[H],$=U[H],C=y*B*4*H;for(let J=0;J<W.count;J++){const se=J*L;v===!0&&(o.fromBufferAttribute(W,J),N[C+se+0]=o.x,N[C+se+1]=o.y,N[C+se+2]=o.z,N[C+se+3]=0),S===!0&&(o.fromBufferAttribute(q,J),N[C+se+4]=o.x,N[C+se+5]=o.y,N[C+se+6]=o.z,N[C+se+7]=0),w===!0&&(o.fromBufferAttribute($,J),N[C+se+8]=o.x,N[C+se+9]=o.y,N[C+se+10]=o.z,N[C+se+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:Z,size:new $e(y,B)},s.set(u,m),u.addEventListener("dispose",F)}let p=0;for(let v=0;v<h.length;v++)p+=h[v];const x=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const w=_[S];w[0]=S,w[1]=h[S]}_.sort(Jx);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Zx);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const w=a[S],A=w[0],E=w[1];A!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+S)!==m[A]&&u.setAttribute("morphTarget"+S,m[A]),p&&u.getAttribute("morphNormal"+S)!==p[A]&&u.setAttribute("morphNormal"+S,p[A]),i[S]=E,x+=E):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(r,"morphTargetBaseInfluence",v),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function eM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ep extends bn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Cr,u!==Cr&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Cr&&(n=Wi),n===void 0&&u===Is&&(n=Rr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tp=new bn,bp=new Ep(1,1);bp.compareFunction=lp;const Ap=new dp,wp=new Bg,Rp=new Mp,ih=[],rh=[],sh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function Bs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ih[i];if(s===void 0&&(s=new Float32Array(i),ih[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Jo(r,e){let t=rh[e];t===void 0&&(t=new Int32Array(e),rh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2fv(this.addr,e),kt(t,e)}}function iM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;r.uniform3fv(this.addr,e),kt(t,e)}}function rM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4fv(this.addr,e),kt(t,e)}}function sM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;oh.set(n),r.uniformMatrix2fv(this.addr,!1,oh),kt(t,n)}}function aM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;ah.set(n),r.uniformMatrix3fv(this.addr,!1,ah),kt(t,n)}}function oM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;sh.set(n),r.uniformMatrix4fv(this.addr,!1,sh),kt(t,n)}}function lM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2iv(this.addr,e),kt(t,e)}}function uM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3iv(this.addr,e),kt(t,e)}}function fM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4iv(this.addr,e),kt(t,e)}}function hM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2uiv(this.addr,e),kt(t,e)}}function pM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3uiv(this.addr,e),kt(t,e)}}function mM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4uiv(this.addr,e),kt(t,e)}}function _M(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?bp:Tp;t.setTexture2D(e||s,i)}function gM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wp,i)}function vM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rp,i)}function xM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ap,i)}function MM(r){switch(r){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return aM;case 35676:return oM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return fM;case 5125:return hM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return xM}}function SM(r,e){r.uniform1fv(this.addr,e)}function yM(r,e){const t=Bs(e,this.size,2);r.uniform2fv(this.addr,t)}function EM(r,e){const t=Bs(e,this.size,3);r.uniform3fv(this.addr,t)}function TM(r,e){const t=Bs(e,this.size,4);r.uniform4fv(this.addr,t)}function bM(r,e){const t=Bs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function AM(r,e){const t=Bs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wM(r,e){const t=Bs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function RM(r,e){r.uniform1iv(this.addr,e)}function CM(r,e){r.uniform2iv(this.addr,e)}function PM(r,e){r.uniform3iv(this.addr,e)}function LM(r,e){r.uniform4iv(this.addr,e)}function DM(r,e){r.uniform1uiv(this.addr,e)}function UM(r,e){r.uniform2uiv(this.addr,e)}function IM(r,e){r.uniform3uiv(this.addr,e)}function NM(r,e){r.uniform4uiv(this.addr,e)}function OM(r,e,t){const n=this.cache,i=e.length,s=Jo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Tp,s[o])}function FM(r,e,t){const n=this.cache,i=e.length,s=Jo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||wp,s[o])}function BM(r,e,t){const n=this.cache,i=e.length,s=Jo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Rp,s[o])}function zM(r,e,t){const n=this.cache,i=e.length,s=Jo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ap,s[o])}function kM(r){switch(r){case 5126:return SM;case 35664:return yM;case 35665:return EM;case 35666:return TM;case 35674:return bM;case 35675:return AM;case 35676:return wM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return PM;case 35669:case 35673:return LM;case 5125:return DM;case 36294:return UM;case 36295:return IM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return zM}}class GM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=MM(t.type)}}class HM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}}class VM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Xl=/(\w+)(\])?(\[|\.)?/g;function lh(r,e){r.seq.push(e),r.map[e.id]=e}function WM(r,e,t){const n=r.name,i=n.length;for(Xl.lastIndex=0;;){const s=Xl.exec(n),o=Xl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){lh(t,c===void 0?new GM(a,r,e):new HM(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new VM(a),lh(t,f)),t=f}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);WM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ch(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const XM=37297;let YM=0;function qM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function jM(r){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r);let n;switch(e===t?n="":e===ko&&t===zo?n="LinearDisplayP3ToLinearSRGB":e===zo&&t===ko&&(n="LinearSRGBToLinearDisplayP3"),r){case Li:case $o:return[n,"LinearTransferOETF"];case qt:case au:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function uh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+qM(r.getShaderSource(e),o)}else return i}function $M(r,e){const t=jM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function KM(r,e){let t;switch(e){case j_:t="Linear";break;case $_:t="Reinhard";break;case K_:t="OptimizedCineon";break;case Z_:t="ACESFilmic";break;case Q_:t="AgX";break;case J_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ZM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function JM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_s).join(`
`)}function QM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function _s(r){return r!==""}function fh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(r){return r.replace(tS,iS)}const nS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iS(r,e){let t=Qe[e];if(t===void 0){const n=nS.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}const rS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(r){return r.replace(rS,sS)}function sS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ph(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===y_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function oS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function cS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ru:e="ENVMAP_BLENDING_MULTIPLY";break;case Y_:e="ENVMAP_BLENDING_MIX";break;case q_:e="ENVMAP_BLENDING_ADD";break}return e}function uS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aS(t),c=oS(t),u=lS(t),f=cS(t),h=uS(t),d=t.isWebGL2?"":ZM(t),g=JM(t),_=QM(s),m=i.createProgram();let p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_s).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_s).join(`
`),x.length>0&&(x+=`
`)):(p=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),x=[d,ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Zi?KM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,$M("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),o=Rc(o),o=fh(o,t),o=hh(o,t),a=Rc(a),a=fh(a,t),a=hh(a,t),o=dh(o),a=dh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+p+o,w=v+x+a,A=ch(i,i.VERTEX_SHADER,S),E=ch(i,i.FRAGMENT_SHADER,w);i.attachShader(m,A),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function U(N){if(r.debug.checkShaderErrors){const Z=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(E).trim();let H=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,A,E);else{const q=uh(i,A,"vertex"),$=uh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+q+`
`+$)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||F==="")&&(W=!1);W&&(N.diagnostics={runnable:H,programLog:Z,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:x}})}i.deleteShader(A),i.deleteShader(E),M=new bo(i,m),y=eS(i,m)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let y;this.getAttributes=function(){return y===void 0&&U(this),y};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(m,XM)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=E,this}let hS=0;class dS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pS(e),t.set(e,n)),n}}class pS{constructor(e){this.id=hS++,this.code=e,this.usedTimes=0}}function mS(r,e,t,n,i,s,o){const a=new pp,l=new dS,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,y,B,N,Z){const L=N.fog,F=Z.geometry,H=M.isMeshStandardMaterial?N.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),q=W&&W.mapping===jo?W.image.height:null,$=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const C=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,J=C!==void 0?C.length:0;let se=0;F.morphAttributes.position!==void 0&&(se=1),F.morphAttributes.normal!==void 0&&(se=2),F.morphAttributes.color!==void 0&&(se=3);let j,K,ue,Me;if($){const Se=ui[$];j=Se.vertexShader,K=Se.fragmentShader}else j=M.vertexShader,K=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const me=r.getRenderTarget(),De=Z.isInstancedMesh===!0,ye=Z.isBatchedMesh===!0,Ie=!!M.map,ke=!!M.matcap,I=!!W,Te=!!M.aoMap,oe=!!M.lightMap,Ee=!!M.bumpMap,ge=!!M.normalMap,G=!!M.displacementMap,Be=!!M.emissiveMap,R=!!M.metalnessMap,T=!!M.roughnessMap,z=M.anisotropy>0,ie=M.clearcoat>0,ee=M.iridescence>0,re=M.sheen>0,ve=M.transmission>0,pe=z&&!!M.anisotropyMap,fe=ie&&!!M.clearcoatMap,Pe=ie&&!!M.clearcoatNormalMap,He=ie&&!!M.clearcoatRoughnessMap,Q=ee&&!!M.iridescenceMap,st=ee&&!!M.iridescenceThicknessMap,Ne=re&&!!M.sheenColorMap,Ye=re&&!!M.sheenRoughnessMap,we=!!M.specularMap,xe=!!M.specularColorMap,P=!!M.specularIntensityMap,le=ve&&!!M.transmissionMap,Re=ve&&!!M.thicknessMap,te=!!M.gradientMap,ne=!!M.alphaMap,D=M.alphaTest>0,ae=!!M.alphaHash,he=!!M.extensions,ze=!!F.attributes.uv1,Oe=!!F.attributes.uv2,je=!!F.attributes.uv3;let Je=Zi;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Je=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:K,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ye,instancing:De,instancingColor:De&&Z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Li,map:Ie,matcap:ke,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:q,aoMap:Te,lightMap:oe,bumpMap:Ee,normalMap:ge,displacementMap:h&&G,emissiveMap:Be,normalMapObjectSpace:ge&&M.normalMapType===fg,normalMapTangentSpace:ge&&M.normalMapType===op,metalnessMap:R,roughnessMap:T,anisotropy:z,anisotropyMap:pe,clearcoat:ie,clearcoatMap:fe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:He,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:st,sheen:re,sheenColorMap:Ne,sheenRoughnessMap:Ye,specularMap:we,specularColorMap:xe,specularIntensityMap:P,transmission:ve,transmissionMap:le,thicknessMap:Re,gradientMap:te,opaque:M.transparent===!1&&M.blending===Ts,alphaMap:ne,alphaTest:D,alphaHash:ae,combine:M.combine,mapUv:Ie&&_(M.map.channel),aoMapUv:Te&&_(M.aoMap.channel),lightMapUv:oe&&_(M.lightMap.channel),bumpMapUv:Ee&&_(M.bumpMap.channel),normalMapUv:ge&&_(M.normalMap.channel),displacementMapUv:G&&_(M.displacementMap.channel),emissiveMapUv:Be&&_(M.emissiveMap.channel),metalnessMapUv:R&&_(M.metalnessMap.channel),roughnessMapUv:T&&_(M.roughnessMap.channel),anisotropyMapUv:pe&&_(M.anisotropyMap.channel),clearcoatMapUv:fe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:xe&&_(M.specularColorMap.channel),specularIntensityMapUv:P&&_(M.specularIntensityMap.channel),transmissionMapUv:le&&_(M.transmissionMap.channel),thicknessMapUv:Re&&_(M.thicknessMap.channel),alphaMapUv:ne&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ge||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:Oe,vertexUv3s:je,pointsUvs:Z.isPoints===!0&&!!F.attributes.uv&&(Ie||ne),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Je,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ie&&M.map.isVideoTexture===!0&&pt.getTransfer(M.map.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bi,flipSided:M.side===Tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)y.push(B),y.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(x(y,M),v(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const y=g[M.type];let B;if(y){const N=ui[y];B=Zg.clone(N.uniforms)}else B=M.uniforms;return B}function w(M,y){let B;for(let N=0,Z=c.length;N<Z;N++){const L=c[N];if(L.cacheKey===y){B=L,++B.usedTimes;break}}return B===void 0&&(B=new fS(r,y,M,s),c.push(B)),B}function A(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:U}}function _S(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function gS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function mh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _h(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||gS),n.length>1&&n.sort(h||mh),i.length>1&&i.sort(h||mh)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function vS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new _h,r.set(n,[o])):i>=s.length?(o=new _h,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function xS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ot};break;case"SpotLight":t={position:new k,direction:new k,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function MS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let SS=0;function yS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ES(r,e){const t=new xS,n=MS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const s=new k,o=new It,a=new It;function l(u,f){let h=0,d=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,m=0,p=0,x=0,v=0,S=0,w=0,A=0,E=0,U=0,M=0;u.sort(yS);const y=f===!0?Math.PI:1;for(let N=0,Z=u.length;N<Z;N++){const L=u[N],F=L.color,H=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*H*y,d+=F.g*H*y,g+=F.b*H*y;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],H);M++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const C=L.shadow,J=n.get(L);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=L.shadow.matrix,S++}i.directional[_]=$,_++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(F).multiplyScalar(H*y),$.distance=W,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[p]=$;const C=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,C.updateMatrices(L),L.castShadow&&U++),i.spotLightMatrix[p]=C.matrix,L.castShadow){const J=n.get(L);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=q,A++}p++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(F).multiplyScalar(H),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=$,x++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*y),$.distance=L.distance,$.decay=L.decay,L.castShadow){const C=L.shadow,J=n.get(L);J.shadowBias=C.bias,J.shadowNormalBias=C.normalBias,J.shadowRadius=C.radius,J.shadowMapSize=C.mapSize,J.shadowCameraNear=C.camera.near,J.shadowCameraFar=C.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=L.shadow.matrix,w++}i.point[m]=$,m++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(H*y),$.groundColor.copy(L.groundColor).multiplyScalar(H*y),i.hemi[v]=$,v++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==_||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==x||B.hemiLength!==v||B.numDirectionalShadows!==S||B.numPointShadows!==w||B.numSpotShadows!==A||B.numSpotMaps!==E||B.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+E-U,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=M,B.directionalLength=_,B.pointLength=m,B.spotLength=p,B.rectAreaLength=x,B.hemiLength=v,B.numDirectionalShadows=S,B.numPointShadows=w,B.numSpotShadows=A,B.numSpotMaps=E,B.numLightProbes=M,i.version=SS++)}function c(u,f){let h=0,d=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const S=u[x];if(S.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(S.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function gh(r,e){const t=new ES(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function TS(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new gh(r,e),t.set(s,[l])):o>=a.length?(l=new gh(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class bS extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AS extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CS(r,e,t){let n=new cu;const i=new $e,s=new $e,o=new Xt,a=new bS({depthPacking:ug}),l=new AS,c={},u=t.maxTextureSize,f={[ir]:Tn,[Tn]:ir,[bi]:bi},h=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:wS,fragmentShader:RS}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new oi;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let p=this.type;this.render=function(A,E,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),y=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Ki),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const Z=p!==Si&&this.type===Si,L=p===Si&&this.type!==Si;for(let F=0,H=A.length;F<H;F++){const W=A[F],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const $=q.getFrameExtents();if(i.multiply($),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,q.mapSize.y=s.y)),q.map===null||Z===!0||L===!0){const J=this.type!==Si?{minFilter:_n,magFilter:_n}:{};q.map!==null&&q.map.dispose(),q.map=new Ir(i.x,i.y,J),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const C=q.getViewportCount();for(let J=0;J<C;J++){const se=q.getViewport(J);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),N.viewport(o),q.updateMatrices(W,J),n=q.getFrustum(),S(E,U,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===Si&&x(q,U),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,y,B)};function x(A,E){const U=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ir(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,U,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,U,d,_,null)}function v(A,E,U,M){let y=null;const B=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)y=B;else if(y=U.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=y.uuid,Z=E.uuid;let L=c[N];L===void 0&&(L={},c[N]=L);let F=L[Z];F===void 0&&(F=y.clone(),L[Z]=F,E.addEventListener("dispose",w)),y=F}if(y.visible=E.visible,y.wireframe=E.wireframe,M===Si?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=r.properties.get(y);N.light=U}return y}function S(A,E,U,M,y){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Si)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const Z=e.update(A),L=A.material;if(Array.isArray(L)){const F=Z.groups;for(let H=0,W=F.length;H<W;H++){const q=F[H],$=L[q.materialIndex];if($&&$.visible){const C=v(A,$,M,y);A.onBeforeShadow(r,A,E,U,Z,C,q),r.renderBufferDirect(U,null,Z,C,A,q),A.onAfterShadow(r,A,E,U,Z,C,q)}}}else if(L.visible){const F=v(A,L,M,y);A.onBeforeShadow(r,A,E,U,Z,F,null),r.renderBufferDirect(U,null,Z,F,A,null),A.onAfterShadow(r,A,E,U,Z,F,null)}}const N=A.children;for(let Z=0,L=N.length;Z<L;Z++)S(N[Z],E,U,M,y)}function w(A){A.target.removeEventListener("dispose",w);for(const U in c){const M=c[U],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function PS(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const ae=new Xt;let he=null;const ze=new Xt(0,0,0,0);return{setMask:function(Oe){he!==Oe&&!D&&(r.colorMask(Oe,Oe,Oe,Oe),he=Oe)},setLocked:function(Oe){D=Oe},setClear:function(Oe,je,Je,be,Se){Se===!0&&(Oe*=be,je*=be,Je*=be),ae.set(Oe,je,Je,be),ze.equals(ae)===!1&&(r.clearColor(Oe,je,Je,be),ze.copy(ae))},reset:function(){D=!1,he=null,ze.set(-1,0,0,0)}}}function s(){let D=!1,ae=null,he=null,ze=null;return{setTest:function(Oe){Oe?ye(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(Oe){ae!==Oe&&!D&&(r.depthMask(Oe),ae=Oe)},setFunc:function(Oe){if(he!==Oe){switch(Oe){case z_:r.depthFunc(r.NEVER);break;case k_:r.depthFunc(r.ALWAYS);break;case G_:r.depthFunc(r.LESS);break;case Fo:r.depthFunc(r.LEQUAL);break;case H_:r.depthFunc(r.EQUAL);break;case V_:r.depthFunc(r.GEQUAL);break;case W_:r.depthFunc(r.GREATER);break;case X_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=Oe}},setLocked:function(Oe){D=Oe},setClear:function(Oe){ze!==Oe&&(r.clearDepth(Oe),ze=Oe)},reset:function(){D=!1,ae=null,he=null,ze=null}}}function o(){let D=!1,ae=null,he=null,ze=null,Oe=null,je=null,Je=null,be=null,Se=null;return{setTest:function(Ce){D||(Ce?ye(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(Ce){ae!==Ce&&!D&&(r.stencilMask(Ce),ae=Ce)},setFunc:function(Ce,ce,Ve){(he!==Ce||ze!==ce||Oe!==Ve)&&(r.stencilFunc(Ce,ce,Ve),he=Ce,ze=ce,Oe=Ve)},setOp:function(Ce,ce,Ve){(je!==Ce||Je!==ce||be!==Ve)&&(r.stencilOp(Ce,ce,Ve),je=Ce,Je=ce,be=Ve)},setLocked:function(Ce){D=Ce},setClear:function(Ce){Se!==Ce&&(r.clearStencil(Ce),Se=Ce)},reset:function(){D=!1,ae=null,he=null,ze=null,Oe=null,je=null,Je=null,be=null,Se=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,S=null,w=null,A=null,E=null,U=null,M=new ot(0,0,0),y=0,B=!1,N=null,Z=null,L=null,F=null,H=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,$=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(C)[1]),q=$>=1):C.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),q=$>=2);let J=null,se={};const j=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),ue=new Xt().fromArray(j),Me=new Xt().fromArray(K);function me(D,ae,he,ze){const Oe=new Uint8Array(4),je=r.createTexture();r.bindTexture(D,je),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<he;Je++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,ze,0,r.RGBA,r.UNSIGNED_BYTE,Oe):r.texImage2D(ae+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Oe);return je}const De={};De[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),De[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),De[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(r.DEPTH_TEST),l.setFunc(Fo),Be(!1),R(Ju),ye(r.CULL_FACE),ge(Ki);function ye(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function ke(D,ae){return d[D]!==ae?(r.bindFramebuffer(D,ae),d[D]=ae,n&&(D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ae),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function I(D,ae){let he=_,ze=!1;if(D)if(he=g.get(ae),he===void 0&&(he=[],g.set(ae,he)),D.isWebGLMultipleRenderTargets){const Oe=D.texture;if(he.length!==Oe.length||he[0]!==r.COLOR_ATTACHMENT0){for(let je=0,Je=Oe.length;je<Je;je++)he[je]=r.COLOR_ATTACHMENT0+je;he.length=Oe.length,ze=!0}}else he[0]!==r.COLOR_ATTACHMENT0&&(he[0]=r.COLOR_ATTACHMENT0,ze=!0);else he[0]!==r.BACK&&(he[0]=r.BACK,ze=!0);ze&&(t.isWebGL2?r.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Te(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const oe={[gr]:r.FUNC_ADD,[T_]:r.FUNC_SUBTRACT,[b_]:r.FUNC_REVERSE_SUBTRACT};if(n)oe[tf]=r.MIN,oe[nf]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(oe[tf]=D.MIN_EXT,oe[nf]=D.MAX_EXT)}const Ee={[A_]:r.ZERO,[w_]:r.ONE,[R_]:r.SRC_COLOR,[Mc]:r.SRC_ALPHA,[I_]:r.SRC_ALPHA_SATURATE,[D_]:r.DST_COLOR,[P_]:r.DST_ALPHA,[C_]:r.ONE_MINUS_SRC_COLOR,[Sc]:r.ONE_MINUS_SRC_ALPHA,[U_]:r.ONE_MINUS_DST_COLOR,[L_]:r.ONE_MINUS_DST_ALPHA,[N_]:r.CONSTANT_COLOR,[O_]:r.ONE_MINUS_CONSTANT_COLOR,[F_]:r.CONSTANT_ALPHA,[B_]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(D,ae,he,ze,Oe,je,Je,be,Se,Ce){if(D===Ki){p===!0&&(Ie(r.BLEND),p=!1);return}if(p===!1&&(ye(r.BLEND),p=!0),D!==E_){if(D!==x||Ce!==B){if((v!==gr||A!==gr)&&(r.blendEquation(r.FUNC_ADD),v=gr,A=gr),Ce)switch(D){case Ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xc:r.blendFunc(r.ONE,r.ONE);break;case Qu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ef:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ef:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,w=null,E=null,U=null,M.set(0,0,0),y=0,x=D,B=Ce}return}Oe=Oe||ae,je=je||he,Je=Je||ze,(ae!==v||Oe!==A)&&(r.blendEquationSeparate(oe[ae],oe[Oe]),v=ae,A=Oe),(he!==S||ze!==w||je!==E||Je!==U)&&(r.blendFuncSeparate(Ee[he],Ee[ze],Ee[je],Ee[Je]),S=he,w=ze,E=je,U=Je),(be.equals(M)===!1||Se!==y)&&(r.blendColor(be.r,be.g,be.b,Se),M.copy(be),y=Se),x=D,B=!1}function G(D,ae){D.side===bi?Ie(r.CULL_FACE):ye(r.CULL_FACE);let he=D.side===Tn;ae&&(he=!he),Be(he),D.blending===Ts&&D.transparent===!1?ge(Ki):ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ze=D.stencilWrite;c.setTest(ze),ze&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){N!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),N=D)}function R(D){D!==M_?(ye(r.CULL_FACE),D!==Z&&(D===Ju?r.cullFace(r.BACK):D===S_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),Z=D}function T(D){D!==L&&(q&&r.lineWidth(D),L=D)}function z(D,ae,he){D?(ye(r.POLYGON_OFFSET_FILL),(F!==ae||H!==he)&&(r.polygonOffset(ae,he),F=ae,H=he)):Ie(r.POLYGON_OFFSET_FILL)}function ie(D){D?ye(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function ee(D){D===void 0&&(D=r.TEXTURE0+W-1),J!==D&&(r.activeTexture(D),J=D)}function re(D,ae,he){he===void 0&&(J===null?he=r.TEXTURE0+W-1:he=J);let ze=se[he];ze===void 0&&(ze={type:void 0,texture:void 0},se[he]=ze),(ze.type!==D||ze.texture!==ae)&&(J!==he&&(r.activeTexture(he),J=he),r.bindTexture(D,ae||De[D]),ze.type=D,ze.texture=ae)}function ve(){const D=se[J];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function pe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(D){ue.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),ue.copy(D))}function le(D){Me.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Me.copy(D))}function Re(D,ae){let he=f.get(ae);he===void 0&&(he=new WeakMap,f.set(ae,he));let ze=he.get(D);ze===void 0&&(ze=r.getUniformBlockIndex(ae,D.name),he.set(D,ze))}function te(D,ae){const ze=f.get(ae).get(D);u.get(ae)!==ze&&(r.uniformBlockBinding(ae,ze,D.__bindingPointIndex),u.set(ae,ze))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,se={},d={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,S=null,w=null,A=null,E=null,U=null,M=new ot(0,0,0),y=0,B=!1,N=null,Z=null,L=null,F=null,H=null,ue.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ye,disable:Ie,bindFramebuffer:ke,drawBuffers:I,useProgram:Te,setBlending:ge,setMaterial:G,setFlipSided:Be,setCullFace:R,setLineWidth:T,setPolygonOffset:z,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:ve,compressedTexImage2D:pe,compressedTexImage3D:fe,texImage2D:we,texImage3D:xe,updateUBOMapping:Re,uniformBlockBinding:te,texStorage2D:Ne,texStorage3D:Ye,texSubImage2D:Pe,texSubImage3D:He,compressedTexSubImage2D:Q,compressedTexSubImage3D:st,scissor:P,viewport:le,reset:ne}}function LS(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return d?new OffscreenCanvas(R,T):Vo("canvas")}function _(R,T,z,ie){let ee=1;if((R.width>ie||R.height>ie)&&(ee=ie/Math.max(R.width,R.height)),ee<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=T?Ho:Math.floor,ve=re(ee*R.width),pe=re(ee*R.height);f===void 0&&(f=g(ve,pe));const fe=z?g(ve,pe):f;return fe.width=ve,fe.height=pe,fe.getContext("2d").drawImage(R,0,0,ve,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ve+"x"+pe+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return wc(R.width)&&wc(R.height)}function p(R){return a?!1:R.wrapS!==si||R.wrapT!==si||R.minFilter!==_n&&R.minFilter!==jn}function x(R,T){return R.generateMipmaps&&T&&R.minFilter!==_n&&R.minFilter!==jn}function v(R){r.generateMipmap(R)}function S(R,T,z,ie,ee=!1){if(a===!1)return T;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=T;if(T===r.RED&&(z===r.FLOAT&&(re=r.R32F),z===r.HALF_FLOAT&&(re=r.R16F),z===r.UNSIGNED_BYTE&&(re=r.R8)),T===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(re=r.R8UI),z===r.UNSIGNED_SHORT&&(re=r.R16UI),z===r.UNSIGNED_INT&&(re=r.R32UI),z===r.BYTE&&(re=r.R8I),z===r.SHORT&&(re=r.R16I),z===r.INT&&(re=r.R32I)),T===r.RG&&(z===r.FLOAT&&(re=r.RG32F),z===r.HALF_FLOAT&&(re=r.RG16F),z===r.UNSIGNED_BYTE&&(re=r.RG8)),T===r.RGBA){const ve=ee?Bo:pt.getTransfer(ie);z===r.FLOAT&&(re=r.RGBA32F),z===r.HALF_FLOAT&&(re=r.RGBA16F),z===r.UNSIGNED_BYTE&&(re=ve===Mt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function w(R,T,z){return x(R,z)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==jn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function A(R){return R===_n||R===rf||R===vl?r.NEAREST:r.LINEAR}function E(R){const T=R.target;T.removeEventListener("dispose",E),M(T),T.isVideoTexture&&u.delete(T)}function U(R){const T=R.target;T.removeEventListener("dispose",U),B(T)}function M(R){const T=n.get(R);if(T.__webglInit===void 0)return;const z=R.source,ie=h.get(z);if(ie){const ee=ie[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(R),Object.keys(ie).length===0&&h.delete(z)}n.remove(R)}function y(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const z=R.source,ie=h.get(z);delete ie[T.__cacheKey],o.memory.textures--}function B(R){const T=R.texture,z=n.get(R),ie=n.get(T);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(z.__webglFramebuffer[ee]))for(let re=0;re<z.__webglFramebuffer[ee].length;re++)r.deleteFramebuffer(z.__webglFramebuffer[ee][re]);else r.deleteFramebuffer(z.__webglFramebuffer[ee]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[ee])}else{if(Array.isArray(z.__webglFramebuffer))for(let ee=0;ee<z.__webglFramebuffer.length;ee++)r.deleteFramebuffer(z.__webglFramebuffer[ee]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,re=T.length;ee<re;ee++){const ve=n.get(T[ee]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(T[ee])}n.remove(T),n.remove(R)}let N=0;function Z(){N=0}function L(){const R=N;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function F(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function H(R,T){const z=n.get(R);if(R.isVideoTexture&&G(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,R,T);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+T)}function W(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){ue(z,R,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+T)}function q(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){ue(z,R,T);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+T)}function $(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Me(z,R,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+T)}const C={[Tc]:r.REPEAT,[si]:r.CLAMP_TO_EDGE,[bc]:r.MIRRORED_REPEAT},J={[_n]:r.NEAREST,[rf]:r.NEAREST_MIPMAP_NEAREST,[vl]:r.NEAREST_MIPMAP_LINEAR,[jn]:r.LINEAR,[eg]:r.LINEAR_MIPMAP_NEAREST,[ba]:r.LINEAR_MIPMAP_LINEAR},se={[hg]:r.NEVER,[vg]:r.ALWAYS,[dg]:r.LESS,[lp]:r.LEQUAL,[pg]:r.EQUAL,[gg]:r.GEQUAL,[mg]:r.GREATER,[_g]:r.NOTEQUAL};function j(R,T,z){if(z?(r.texParameteri(R,r.TEXTURE_WRAP_S,C[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,C[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,C[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,J[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,J[T.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==si||T.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,A(T.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==_n&&T.minFilter!==jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===_n||T.minFilter!==vl&&T.minFilter!==ba||T.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Aa&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function K(R,T){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",E));const ie=T.source;let ee=h.get(ie);ee===void 0&&(ee={},h.set(ie,ee));const re=F(T);if(re!==R.__cacheKey){ee[re]===void 0&&(ee[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[re].usedTimes++;const ve=ee[R.__cacheKey];ve!==void 0&&(ee[R.__cacheKey].usedTimes--,ve.usedTimes===0&&y(T)),R.__cacheKey=re,R.__webglTexture=ee[re].texture}return z}function ue(R,T,z){let ie=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=r.TEXTURE_3D);const ee=K(R,T),re=T.source;t.bindTexture(ie,R.__webglTexture,r.TEXTURE0+z);const ve=n.get(re);if(re.version!==ve.__version||ee===!0){t.activeTexture(r.TEXTURE0+z);const pe=pt.getPrimaries(pt.workingColorSpace),fe=T.colorSpace===$n?null:pt.getPrimaries(T.colorSpace),Pe=T.colorSpace===$n||pe===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const He=p(T)&&m(T.image)===!1;let Q=_(T.image,He,!1,i.maxTextureSize);Q=Be(T,Q);const st=m(Q)||a,Ne=s.convert(T.format,T.colorSpace);let Ye=s.convert(T.type),we=S(T.internalFormat,Ne,Ye,T.colorSpace,T.isVideoTexture);j(ie,T,st);let xe;const P=T.mipmaps,le=a&&T.isVideoTexture!==!0&&we!==sp,Re=ve.__version===void 0||ee===!0,te=w(T,Q,st);if(T.isDepthTexture)we=r.DEPTH_COMPONENT,a?T.type===Xi?we=r.DEPTH_COMPONENT32F:T.type===Wi?we=r.DEPTH_COMPONENT24:T.type===Rr?we=r.DEPTH24_STENCIL8:we=r.DEPTH_COMPONENT16:T.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Cr&&we===r.DEPTH_COMPONENT&&T.type!==su&&T.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Wi,Ye=s.convert(T.type)),T.format===Is&&we===r.DEPTH_COMPONENT&&(we=r.DEPTH_STENCIL,T.type!==Rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Rr,Ye=s.convert(T.type))),Re&&(le?t.texStorage2D(r.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,we,Q.width,Q.height,0,Ne,Ye,null));else if(T.isDataTexture)if(P.length>0&&st){le&&Re&&t.texStorage2D(r.TEXTURE_2D,te,we,P[0].width,P[0].height);for(let ne=0,D=P.length;ne<D;ne++)xe=P[ne],le?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,xe.width,xe.height,Ne,Ye,xe.data):t.texImage2D(r.TEXTURE_2D,ne,we,xe.width,xe.height,0,Ne,Ye,xe.data);T.generateMipmaps=!1}else le?(Re&&t.texStorage2D(r.TEXTURE_2D,te,we,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,Ne,Ye,Q.data)):t.texImage2D(r.TEXTURE_2D,0,we,Q.width,Q.height,0,Ne,Ye,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){le&&Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,we,P[0].width,P[0].height,Q.depth);for(let ne=0,D=P.length;ne<D;ne++)xe=P[ne],T.format!==ai?Ne!==null?le?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,xe.width,xe.height,Q.depth,Ne,xe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,we,xe.width,xe.height,Q.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,xe.width,xe.height,Q.depth,Ne,Ye,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,we,xe.width,xe.height,Q.depth,0,Ne,Ye,xe.data)}else{le&&Re&&t.texStorage2D(r.TEXTURE_2D,te,we,P[0].width,P[0].height);for(let ne=0,D=P.length;ne<D;ne++)xe=P[ne],T.format!==ai?Ne!==null?le?t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,xe.width,xe.height,Ne,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,we,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,xe.width,xe.height,Ne,Ye,xe.data):t.texImage2D(r.TEXTURE_2D,ne,we,xe.width,xe.height,0,Ne,Ye,xe.data)}else if(T.isDataArrayTexture)le?(Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,we,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ne,Ye,Q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,Ne,Ye,Q.data);else if(T.isData3DTexture)le?(Re&&t.texStorage3D(r.TEXTURE_3D,te,we,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ne,Ye,Q.data)):t.texImage3D(r.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,Ne,Ye,Q.data);else if(T.isFramebufferTexture){if(Re)if(le)t.texStorage2D(r.TEXTURE_2D,te,we,Q.width,Q.height);else{let ne=Q.width,D=Q.height;for(let ae=0;ae<te;ae++)t.texImage2D(r.TEXTURE_2D,ae,we,ne,D,0,Ne,Ye,null),ne>>=1,D>>=1}}else if(P.length>0&&st){le&&Re&&t.texStorage2D(r.TEXTURE_2D,te,we,P[0].width,P[0].height);for(let ne=0,D=P.length;ne<D;ne++)xe=P[ne],le?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Ne,Ye,xe):t.texImage2D(r.TEXTURE_2D,ne,we,Ne,Ye,xe);T.generateMipmaps=!1}else le?(Re&&t.texStorage2D(r.TEXTURE_2D,te,we,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Ye,Q)):t.texImage2D(r.TEXTURE_2D,0,we,Ne,Ye,Q);x(T,st)&&v(ie),ve.__version=re.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Me(R,T,z){if(T.image.length!==6)return;const ie=K(R,T),ee=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);const re=n.get(ee);if(ee.version!==re.__version||ie===!0){t.activeTexture(r.TEXTURE0+z);const ve=pt.getPrimaries(pt.workingColorSpace),pe=T.colorSpace===$n?null:pt.getPrimaries(T.colorSpace),fe=T.colorSpace===$n||ve===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Pe=T.isCompressedTexture||T.image[0].isCompressedTexture,He=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!Pe&&!He?Q[ne]=_(T.image[ne],!1,!0,i.maxCubemapSize):Q[ne]=He?T.image[ne].image:T.image[ne],Q[ne]=Be(T,Q[ne]);const st=Q[0],Ne=m(st)||a,Ye=s.convert(T.format,T.colorSpace),we=s.convert(T.type),xe=S(T.internalFormat,Ye,we,T.colorSpace),P=a&&T.isVideoTexture!==!0,le=re.__version===void 0||ie===!0;let Re=w(T,st,Ne);j(r.TEXTURE_CUBE_MAP,T,Ne);let te;if(Pe){P&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,xe,st.width,st.height);for(let ne=0;ne<6;ne++){te=Q[ne].mipmaps;for(let D=0;D<te.length;D++){const ae=te[D];T.format!==ai?Ye!==null?P?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,0,0,ae.width,ae.height,Ye,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,xe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,0,0,ae.width,ae.height,Ye,we,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,xe,ae.width,ae.height,0,Ye,we,ae.data)}}}else{te=T.mipmaps,P&&le&&(te.length>0&&Re++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,xe,Q[0].width,Q[0].height));for(let ne=0;ne<6;ne++)if(He){P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Q[ne].width,Q[ne].height,Ye,we,Q[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,xe,Q[ne].width,Q[ne].height,0,Ye,we,Q[ne].data);for(let D=0;D<te.length;D++){const he=te[D].image[ne].image;P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,0,0,he.width,he.height,Ye,we,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,xe,he.width,he.height,0,Ye,we,he.data)}}else{P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ye,we,Q[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,xe,Ye,we,Q[ne]);for(let D=0;D<te.length;D++){const ae=te[D];P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,0,0,Ye,we,ae.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,xe,Ye,we,ae.image[ne])}}}x(T,Ne)&&v(r.TEXTURE_CUBE_MAP),re.__version=ee.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function me(R,T,z,ie,ee,re){const ve=s.convert(z.format,z.colorSpace),pe=s.convert(z.type),fe=S(z.internalFormat,ve,pe,z.colorSpace);if(!n.get(T).__hasExternalTextures){const He=Math.max(1,T.width>>re),Q=Math.max(1,T.height>>re);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,fe,He,Q,T.depth,0,ve,pe,null):t.texImage2D(ee,re,fe,He,Q,0,ve,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ge(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,n.get(z).__webglTexture,0,Ee(T)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,n.get(z).__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(R,T,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ie=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(z||ge(T)){const ee=T.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Xi?ie=r.DEPTH_COMPONENT32F:ee.type===Wi&&(ie=r.DEPTH_COMPONENT24));const re=Ee(T);ge(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,ie,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,re,ie,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const ie=Ee(T);z&&ge(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,T.width,T.height):ge(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ie=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],ve=s.convert(re.format,re.colorSpace),pe=s.convert(re.type),fe=S(re.internalFormat,ve,pe,re.colorSpace),Pe=Ee(T);z&&ge(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,fe,T.width,T.height):ge(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,fe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const ie=n.get(T.depthTexture).__webglTexture,ee=Ee(T);if(T.depthTexture.format===Cr)ge(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(T.depthTexture.format===Is)ge(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const T=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ye(T.__webglFramebuffer,R)}else if(z){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]=r.createRenderbuffer(),De(T.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),De(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(R,T,z){const ie=n.get(R);T!==void 0&&me(ie.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ie(R)}function I(R){const T=R.texture,z=n.get(R),ie=n.get(T);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=T.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,ve=m(R)||a;if(ee){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let fe=0;fe<T.mipmaps.length;fe++)z.__webglFramebuffer[pe][fe]=r.createFramebuffer()}else z.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)z.__webglFramebuffer[pe]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(re)if(i.drawBuffers){const pe=R.texture;for(let fe=0,Pe=pe.length;fe<Pe;fe++){const He=n.get(pe[fe]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ge(R)===!1){const pe=re?T:[T];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<pe.length;fe++){const Pe=pe[fe];z.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const He=s.convert(Pe.format,Pe.colorSpace),Q=s.convert(Pe.type),st=S(Pe.internalFormat,He,Q,Pe.colorSpace,R.isXRRenderTarget===!0),Ne=Ee(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,st,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),De(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),j(r.TEXTURE_CUBE_MAP,T,ve);for(let pe=0;pe<6;pe++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)me(z.__webglFramebuffer[pe][fe],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,fe);else me(z.__webglFramebuffer[pe],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(T,ve)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const pe=R.texture;for(let fe=0,Pe=pe.length;fe<Pe;fe++){const He=pe[fe],Q=n.get(He);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),j(r.TEXTURE_2D,He,ve),me(z.__webglFramebuffer,R,He,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),x(He,ve)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?pe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ie.__webglTexture),j(pe,T,ve),a&&T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)me(z.__webglFramebuffer[fe],R,T,r.COLOR_ATTACHMENT0,pe,fe);else me(z.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,pe,0);x(T,ve)&&v(pe),t.unbindTexture()}R.depthBuffer&&Ie(R)}function Te(R){const T=m(R)||a,z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,ee=z.length;ie<ee;ie++){const re=z[ie];if(x(re,T)){const ve=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,pe=n.get(re).__webglTexture;t.bindTexture(ve,pe),v(ve),t.unbindTexture()}}}function oe(R){if(a&&R.samples>0&&ge(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],z=R.width,ie=R.height;let ee=r.COLOR_BUFFER_BIT;const re=[],ve=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=n.get(R),fe=R.isWebGLMultipleRenderTargets===!0;if(fe)for(let Pe=0;Pe<T.length;Pe++)t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){re.push(r.COLOR_ATTACHMENT0+Pe),R.depthBuffer&&re.push(ve);const He=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(He===!1&&(R.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),fe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pe.__webglColorRenderbuffer[Pe]),He===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ve])),fe){const Q=n.get(T[Pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,z,ie,0,0,z,ie,ee,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Pe=0;Pe<T.length;Pe++){t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,pe.__webglColorRenderbuffer[Pe]);const He=n.get(T[Pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ee(R){return Math.min(i.maxSamples,R.samples)}function ge(R){const T=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function G(R){const T=o.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function Be(R,T){const z=R.colorSpace,ie=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ac||z!==Li&&z!==$n&&(pt.getTransfer(z)===Mt?a===!1?e.has("EXT_sRGB")===!0&&ie===ai?(R.format=Ac,R.minFilter=jn,R.generateMipmaps=!1):T=fp.sRGBToLinear(T):(ie!==ai||ee!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),T}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=ke,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function DS(r,e,t){const n=t.isWebGL2;function i(s,o=$n){let a;const l=pt.getTransfer(o);if(s===Ji)return r.UNSIGNED_BYTE;if(s===ep)return r.UNSIGNED_SHORT_4_4_4_4;if(s===tp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===tg)return r.BYTE;if(s===ng)return r.SHORT;if(s===su)return r.UNSIGNED_SHORT;if(s===Qd)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Aa)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ig)return r.ALPHA;if(s===ai)return r.RGBA;if(s===rg)return r.LUMINANCE;if(s===sg)return r.LUMINANCE_ALPHA;if(s===Cr)return r.DEPTH_COMPONENT;if(s===Is)return r.DEPTH_STENCIL;if(s===Ac)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ag)return r.RED;if(s===np)return r.RED_INTEGER;if(s===og)return r.RG;if(s===ip)return r.RG_INTEGER;if(s===rp)return r.RGBA_INTEGER;if(s===xl||s===Ml||s===Sl||s===yl)if(l===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ml)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sf||s===af||s===of||s===lf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===af)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===of)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cf||s===uf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===cf)return l===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===uf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ff||s===hf||s===df||s===pf||s===mf||s===_f||s===gf||s===vf||s===xf||s===Mf||s===Sf||s===yf||s===Ef||s===Tf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ff)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===df)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_f)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ef)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===El||s===bf||s===Af)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===El)return l===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Af)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lg||s===wf||s===Rf||s===Cf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===El)return a.COMPRESSED_RED_RGTC1_EXT;if(s===wf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class US extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yi extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IS={type:"move"};class Yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class NS extends zr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const x=[],v=[],S=new $e;let w=null;const A=new In;A.layers.enable(1),A.viewport=new Xt;const E=new In;E.layers.enable(2),E.viewport=new Xt;const U=[A,E],M=new US;M.layers.enable(1),M.layers.enable(2);let y=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=x[j];return K===void 0&&(K=new Yl,x[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=x[j];return K===void 0&&(K=new Yl,x[j]=K),K.getGripSpace()},this.getHand=function(j){let K=x[j];return K===void 0&&(K=new Yl,x[j]=K),K.getHandSpace()};function N(j){const K=v.indexOf(j.inputSource);if(K===-1)return;const ue=x[K];ue!==void 0&&(ue.update(j.inputSource,j.frame,c||o),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",L);for(let j=0;j<x.length;j++){const K=v[j];K!==null&&(v[j]=null,x[j].disconnect(K))}y=null,B=null,e.setRenderTarget(m),d=null,h=null,f=null,i=null,p=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Ir(d.framebufferWidth,d.framebufferHeight,{format:ai,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ue=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?Is:Cr,ue=_.stencil?Rr:Wi);const me={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(me),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new Ir(h.textureWidth,h.textureHeight,{format:ai,type:Ji,depthTexture:new Ep(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(p);De.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(j){for(let K=0;K<j.removed.length;K++){const ue=j.removed[K],Me=v.indexOf(ue);Me>=0&&(v[Me]=null,x[Me].disconnect(ue))}for(let K=0;K<j.added.length;K++){const ue=j.added[K];let Me=v.indexOf(ue);if(Me===-1){for(let De=0;De<x.length;De++)if(De>=v.length){v.push(ue),Me=De;break}else if(v[De]===null){v[De]=ue,Me=De;break}if(Me===-1)break}const me=x[Me];me&&me.connect(ue)}}const F=new k,H=new k;function W(j,K,ue){F.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(ue.matrixWorld);const Me=F.distanceTo(H),me=K.projectionMatrix.elements,De=ue.projectionMatrix.elements,ye=me[14]/(me[10]-1),Ie=me[14]/(me[10]+1),ke=(me[9]+1)/me[5],I=(me[9]-1)/me[5],Te=(me[8]-1)/me[0],oe=(De[8]+1)/De[0],Ee=ye*Te,ge=ye*oe,G=Me/(-Te+oe),Be=G*-Te;K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Be),j.translateZ(G),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=ye+G,T=Ie+G,z=Ee-Be,ie=ge+(Me-Be),ee=ke*Ie/T*R,re=I*Ie/T*R;j.projectionMatrix.makePerspective(z,ie,ee,re,R,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function q(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;M.near=E.near=A.near=j.near,M.far=E.far=A.far=j.far,(y!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,B=M.far);const K=j.parent,ue=M.cameras;q(M,K);for(let Me=0;Me<ue.length;Me++)q(ue[Me],K);ue.length===2?W(M,A,E):M.projectionMatrix.copy(A.projectionMatrix),$(j,M,K)};function $(j,K,ue){ue===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=wa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)};let C=null;function J(j,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Me=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let me=0;me<ue.length;me++){const De=ue[me];let ye=null;if(d!==null)ye=d.getViewport(De);else{const ke=f.getViewSubImage(h,De);ye=ke.viewport,me===0&&(e.setRenderTargetTextures(p,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(p))}let Ie=U[me];Ie===void 0&&(Ie=new In,Ie.layers.enable(me),Ie.viewport=new Xt,U[me]=Ie),Ie.matrix.fromArray(De.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(De.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(ye.x,ye.y,ye.width,ye.height),me===0&&(M.matrix.copy(Ie.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push(Ie)}}for(let ue=0;ue<x.length;ue++){const Me=v[ue],me=x[ue];Me!==null&&me!==void 0&&me.update(Me,K,c||o)}C&&C(j,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const se=new Sp;se.setAnimationLoop(J),this.setAnimationLoop=function(j){C=j},this.dispose=function(){}}}function OS(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function FS(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=i[x.id];S===void 0&&(g(x),S=u(x),i[x.id]=S,x.addEventListener("dispose",m));const w=v.program;n.updateUBOMapping(x,w);const A=e.render.frame;s[x.id]!==A&&(h(x),s[x.id]=A)}function u(x){const v=f();x.__bindingPointIndex=v;const S=r.createBuffer(),w=x.__size,A=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=i[x.id],S=x.uniforms,w=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,E=S.length;A<E;A++){const U=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,y=U.length;M<y;M++){const B=U[M];if(d(B,A,M,w)===!0){const N=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value];let L=0;for(let F=0;F<Z.length;F++){const H=Z[F],W=_(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,N+L,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,v,S,w){const A=x.value,E=v+"_"+S;if(w[E]===void 0)return typeof A=="number"||typeof A=="boolean"?w[E]=A:w[E]=A.clone(),!0;{const U=w[E];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return w[E]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(x){const v=x.uniforms;let S=0;const w=16;for(let E=0,U=v.length;E<U;E++){const M=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,B=M.length;y<B;y++){const N=M[y],Z=Array.isArray(N.value)?N.value:[N.value];for(let L=0,F=Z.length;L<F;L++){const H=Z[L],W=_(H),q=S%w;q!==0&&w-q<W.boundary&&(S+=w-q),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=W.storage}}}const A=S%w;return A>0&&(S+=w-A),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Cc{constructor(e={}){const{canvas:t=Ug(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const v=this;let S=!1,w=0,A=0,E=null,U=-1,M=null;const y=new Xt,B=new Xt;let N=null;const Z=new ot(0);let L=0,F=t.width,H=t.height,W=1,q=null,$=null;const C=new Xt(0,0,F,H),J=new Xt(0,0,F,H);let se=!1;const j=new cu;let K=!1,ue=!1,Me=null;const me=new It,De=new $e,ye=new k,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return E===null?W:1}let I=n;function Te(b,O){for(let Y=0;Y<b.length;Y++){const X=b[Y],V=t.getContext(X,O);if(V!==null)return V}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${iu}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ae,!1),I===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),I=Te(O,b),I===null)throw Te(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let oe,Ee,ge,G,Be,R,T,z,ie,ee,re,ve,pe,fe,Pe,He,Q,st,Ne,Ye,we,xe,P,le;function Re(){oe=new qx(I),Ee=new Gx(I,oe,e),oe.init(Ee),xe=new DS(I,oe,Ee),ge=new PS(I,oe,Ee),G=new Kx(I),Be=new _S,R=new LS(I,oe,ge,Be,Ee,xe,G),T=new Vx(v),z=new Yx(v),ie=new r0(I,Ee),P=new zx(I,oe,ie,Ee),ee=new jx(I,ie,G,P),re=new eM(I,ee,ie,G),Ne=new Qx(I,Ee,R),He=new Hx(Be),ve=new mS(v,T,z,oe,Ee,P,He),pe=new OS(v,Be),fe=new vS,Pe=new TS(oe,Ee),st=new Bx(v,T,z,ge,re,h,l),Q=new CS(v,re,Ee),le=new FS(I,G,Ee,ge),Ye=new kx(I,oe,G,Ee),we=new $x(I,oe,G,Ee),G.programs=ve.programs,v.capabilities=Ee,v.extensions=oe,v.properties=Be,v.renderLists=fe,v.shadowMap=Q,v.state=ge,v.info=G}Re();const te=new NS(v,I);this.xr=te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(F,H,!1))},this.getSize=function(b){return b.set(F,H)},this.setSize=function(b,O,Y=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,H=O,t.width=Math.floor(b*W),t.height=Math.floor(O*W),Y===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(F*W,H*W).floor()},this.setDrawingBufferSize=function(b,O,Y){F=b,H=O,W=Y,t.width=Math.floor(b*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,O,Y,X){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,O,Y,X),ge.viewport(y.copy(C).multiplyScalar(W).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,O,Y,X){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,O,Y,X),ge.scissor(B.copy(J).multiplyScalar(W).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){ge.setScissorTest(se=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(b=!0,O=!0,Y=!0){let X=0;if(b){let V=!1;if(E!==null){const de=E.texture.format;V=de===rp||de===ip||de===np}if(V){const de=E.texture.type,Le=de===Ji||de===Wi||de===su||de===Rr||de===ep||de===tp,We=st.getClearColor(),Ue=st.getClearAlpha(),Fe=We.r,Xe=We.g,Ze=We.b;Le?(d[0]=Fe,d[1]=Xe,d[2]=Ze,d[3]=Ue,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=Fe,g[1]=Xe,g[2]=Ze,g[3]=Ue,I.clearBufferiv(I.COLOR,0,g))}else X|=I.COLOR_BUFFER_BIT}O&&(X|=I.DEPTH_BUFFER_BIT),Y&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),fe.dispose(),Pe.dispose(),Be.dispose(),T.dispose(),z.dispose(),re.dispose(),P.dispose(),le.dispose(),ve.dispose(),te.dispose(),te.removeEventListener("sessionstart",Se),te.removeEventListener("sessionend",Ce),Me&&(Me.dispose(),Me=null),ce.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=G.autoReset,O=Q.enabled,Y=Q.autoUpdate,X=Q.needsUpdate,V=Q.type;Re(),G.autoReset=b,Q.enabled=O,Q.autoUpdate=Y,Q.needsUpdate=X,Q.type=V}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function he(b){const O=b.target;O.removeEventListener("dispose",he),ze(O)}function ze(b){Oe(b),Be.remove(b)}function Oe(b){const O=Be.get(b).programs;O!==void 0&&(O.forEach(function(Y){ve.releaseProgram(Y)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,X,V,de){O===null&&(O=Ie);const Le=V.isMesh&&V.matrixWorld.determinant()<0,We=vt(b,O,Y,X,V);ge.setMaterial(X,Le);let Ue=Y.index,Fe=1;if(X.wireframe===!0){if(Ue=ee.getWireframeAttribute(Y),Ue===void 0)return;Fe=2}const Xe=Y.drawRange,Ze=Y.attributes.position;let St=Xe.start*Fe,Ot=(Xe.start+Xe.count)*Fe;de!==null&&(St=Math.max(St,de.start*Fe),Ot=Math.min(Ot,(de.start+de.count)*Fe)),Ue!==null?(St=Math.max(St,0),Ot=Math.min(Ot,Ue.count)):Ze!=null&&(St=Math.max(St,0),Ot=Math.min(Ot,Ze.count));const ft=Ot-St;if(ft<0||ft===1/0)return;P.setup(V,X,We,Y,Ue);let ln,dt=Ye;if(Ue!==null&&(ln=ie.get(Ue),dt=we,dt.setIndex(ln)),V.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*ke()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(V.isLine){let qe=X.linewidth;qe===void 0&&(qe=1),ge.setLineWidth(qe*ke()),V.isLineSegments?dt.setMode(I.LINES):V.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else V.isPoints?dt.setMode(I.POINTS):V.isSprite&&dt.setMode(I.TRIANGLES);if(V.isBatchedMesh)dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)dt.renderInstances(St,ft,V.count);else if(Y.isInstancedBufferGeometry){const qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,el=Math.min(Y.instanceCount,qe);dt.renderInstances(St,ft,el)}else dt.render(St,ft)};function je(b,O,Y){b.transparent===!0&&b.side===bi&&b.forceSinglePass===!1?(b.side=Tn,b.needsUpdate=!0,gt(b,O,Y),b.side=ir,b.needsUpdate=!0,gt(b,O,Y),b.side=bi):gt(b,O,Y)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),m=Pe.get(Y),m.init(),x.push(m),Y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),b!==Y&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(v._useLegacyLights);const X=new Set;return b.traverse(function(V){const de=V.material;if(de)if(Array.isArray(de))for(let Le=0;Le<de.length;Le++){const We=de[Le];je(We,Y,V),X.add(We)}else je(de,Y,V),X.add(de)}),x.pop(),m=null,X},this.compileAsync=function(b,O,Y=null){const X=this.compile(b,O,Y);return new Promise(V=>{function de(){if(X.forEach(function(Le){Be.get(Le).currentProgram.isReady()&&X.delete(Le)}),X.size===0){V(b);return}setTimeout(de,10)}oe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Je=null;function be(b){Je&&Je(b)}function Se(){ce.stop()}function Ce(){ce.start()}const ce=new Sp;ce.setAnimationLoop(be),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(b){Je=b,te.setAnimationLoop(b),b===null?ce.stop():ce.start()},te.addEventListener("sessionstart",Se),te.addEventListener("sessionend",Ce),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(O),O=te.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,E),m=Pe.get(b,x.length),m.init(),x.push(m),me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(me),ue=this.localClippingEnabled,K=He.init(this.clippingPlanes,ue),_=fe.get(b,p.length),_.init(),p.push(_),Ve(b,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,$),this.info.render.frame++,K===!0&&He.beginShadows();const Y=m.state.shadowsArray;if(Q.render(Y,b,O),K===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(_,b),m.setupLights(v._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let V=0,de=X.length;V<de;V++){const Le=X[V];Ge(_,b,Le,Le.viewport)}}else Ge(_,b,O);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(v,b,O),P.resetDefaultState(),U=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ve(b,O,Y,X){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){X&&ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const Le=re.update(b),We=b.material;We.visible&&_.push(b,Le,We,Y,ye.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const Le=re.update(b),We=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ye.copy(b.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ye.copy(Le.boundingSphere.center)),ye.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(We)){const Ue=Le.groups;for(let Fe=0,Xe=Ue.length;Fe<Xe;Fe++){const Ze=Ue[Fe],St=We[Ze.materialIndex];St&&St.visible&&_.push(b,Le,St,Y,ye.z,Ze)}}else We.visible&&_.push(b,Le,We,Y,ye.z,null)}}const de=b.children;for(let Le=0,We=de.length;Le<We;Le++)Ve(de[Le],O,Y,X)}function Ge(b,O,Y,X){const V=b.opaque,de=b.transmissive,Le=b.transparent;m.setupLightsView(Y),K===!0&&He.setGlobalState(v.clippingPlanes,Y),de.length>0&&Ke(V,de,O,Y),X&&ge.viewport(y.copy(X)),V.length>0&&Et(V,O,Y),de.length>0&&Et(de,O,Y),Le.length>0&&Et(Le,O,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ke(b,O,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const de=Ee.isWebGL2;Me===null&&(Me=new Ir(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Aa:Ji,minFilter:ba,samples:de?4:0})),v.getDrawingBufferSize(De),de?Me.setSize(De.x,De.y):Me.setSize(Ho(De.x),Ho(De.y));const Le=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(Z),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const We=v.toneMapping;v.toneMapping=Zi,Et(b,Y,X),R.updateMultisampleRenderTarget(Me),R.updateRenderTargetMipmap(Me);let Ue=!1;for(let Fe=0,Xe=O.length;Fe<Xe;Fe++){const Ze=O[Fe],St=Ze.object,Ot=Ze.geometry,ft=Ze.material,ln=Ze.group;if(ft.side===bi&&St.layers.test(X.layers)){const dt=ft.side;ft.side=Tn,ft.needsUpdate=!0,tt(St,Y,X,Ot,ft,ln),ft.side=dt,ft.needsUpdate=!0,Ue=!0}}Ue===!0&&(R.updateMultisampleRenderTarget(Me),R.updateRenderTargetMipmap(Me)),v.setRenderTarget(Le),v.setClearColor(Z,L),v.toneMapping=We}function Et(b,O,Y){const X=O.isScene===!0?O.overrideMaterial:null;for(let V=0,de=b.length;V<de;V++){const Le=b[V],We=Le.object,Ue=Le.geometry,Fe=X===null?Le.material:X,Xe=Le.group;We.layers.test(Y.layers)&&tt(We,O,Y,Ue,Fe,Xe)}}function tt(b,O,Y,X,V,de){b.onBeforeRender(v,O,Y,X,V,de),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(v,O,Y,X,b,de),V.transparent===!0&&V.side===bi&&V.forceSinglePass===!1?(V.side=Tn,V.needsUpdate=!0,v.renderBufferDirect(Y,O,X,V,b,de),V.side=ir,V.needsUpdate=!0,v.renderBufferDirect(Y,O,X,V,b,de),V.side=bi):v.renderBufferDirect(Y,O,X,V,b,de),b.onAfterRender(v,O,Y,X,V,de)}function gt(b,O,Y){O.isScene!==!0&&(O=Ie);const X=Be.get(b),V=m.state.lights,de=m.state.shadowsArray,Le=V.state.version,We=ve.getParameters(b,V.state,de,O,Y),Ue=ve.getProgramCacheKey(We);let Fe=X.programs;X.environment=b.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(b.isMeshStandardMaterial?z:T).get(b.envMap||X.environment),Fe===void 0&&(b.addEventListener("dispose",he),Fe=new Map,X.programs=Fe);let Xe=Fe.get(Ue);if(Xe!==void 0){if(X.currentProgram===Xe&&X.lightsStateVersion===Le)return xt(b,We),Xe}else We.uniforms=ve.getUniforms(b),b.onBuild(Y,We,v),b.onBeforeCompile(We,v),Xe=ve.acquireProgram(We,Ue),Fe.set(Ue,Xe),X.uniforms=We.uniforms;const Ze=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=He.uniform),xt(b,We),X.needsLights=wn(b),X.lightsStateVersion=Le,X.needsLights&&(Ze.ambientLightColor.value=V.state.ambient,Ze.lightProbe.value=V.state.probe,Ze.directionalLights.value=V.state.directional,Ze.directionalLightShadows.value=V.state.directionalShadow,Ze.spotLights.value=V.state.spot,Ze.spotLightShadows.value=V.state.spotShadow,Ze.rectAreaLights.value=V.state.rectArea,Ze.ltc_1.value=V.state.rectAreaLTC1,Ze.ltc_2.value=V.state.rectAreaLTC2,Ze.pointLights.value=V.state.point,Ze.pointLightShadows.value=V.state.pointShadow,Ze.hemisphereLights.value=V.state.hemi,Ze.directionalShadowMap.value=V.state.directionalShadowMap,Ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ze.spotShadowMap.value=V.state.spotShadowMap,Ze.spotLightMatrix.value=V.state.spotLightMatrix,Ze.spotLightMap.value=V.state.spotLightMap,Ze.pointShadowMap.value=V.state.pointShadowMap,Ze.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Xe,X.uniformsList=null,Xe}function Nt(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=bo.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function xt(b,O){const Y=Be.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function vt(b,O,Y,X,V){O.isScene!==!0&&(O=Ie),R.resetTextureUnits();const de=O.fog,Le=X.isMeshStandardMaterial?O.environment:null,We=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Li,Ue=(X.isMeshStandardMaterial?z:T).get(X.envMap||Le),Fe=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ze=!!Y.morphAttributes.position,St=!!Y.morphAttributes.normal,Ot=!!Y.morphAttributes.color;let ft=Zi;X.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ft=v.toneMapping);const ln=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dt=ln!==void 0?ln.length:0,qe=Be.get(X),el=m.state.lights;if(K===!0&&(ue===!0||b!==M)){const Vn=b===M&&X.id===U;He.setState(X,b,Vn)}let wt=!1;X.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==el.state.version||qe.outputColorSpace!==We||V.isBatchedMesh&&qe.batching===!1||!V.isBatchedMesh&&qe.batching===!0||V.isInstancedMesh&&qe.instancing===!1||!V.isInstancedMesh&&qe.instancing===!0||V.isSkinnedMesh&&qe.skinning===!1||!V.isSkinnedMesh&&qe.skinning===!0||V.isInstancedMesh&&qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qe.instancingColor===!1&&V.instanceColor!==null||qe.envMap!==Ue||X.fog===!0&&qe.fog!==de||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==He.numPlanes||qe.numIntersection!==He.numIntersection)||qe.vertexAlphas!==Fe||qe.vertexTangents!==Xe||qe.morphTargets!==Ze||qe.morphNormals!==St||qe.morphColors!==Ot||qe.toneMapping!==ft||Ee.isWebGL2===!0&&qe.morphTargetsCount!==dt)&&(wt=!0):(wt=!0,qe.__version=X.version);let sr=qe.currentProgram;wt===!0&&(sr=gt(X,O,V));let pu=!1,zs=!1,tl=!1;const Zt=sr.getUniforms(),ar=qe.uniforms;if(ge.useProgram(sr.program)&&(pu=!0,zs=!0,tl=!0),X.id!==U&&(U=X.id,zs=!0),pu||M!==b){Zt.setValue(I,"projectionMatrix",b.projectionMatrix),Zt.setValue(I,"viewMatrix",b.matrixWorldInverse);const Vn=Zt.map.cameraPosition;Vn!==void 0&&Vn.setValue(I,ye.setFromMatrixPosition(b.matrixWorld)),Ee.logarithmicDepthBuffer&&Zt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Zt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,zs=!0,tl=!0)}if(V.isSkinnedMesh){Zt.setOptional(I,V,"bindMatrix"),Zt.setOptional(I,V,"bindMatrixInverse");const Vn=V.skeleton;Vn&&(Ee.floatVertexTextures?(Vn.boneTexture===null&&Vn.computeBoneTexture(),Zt.setValue(I,"boneTexture",Vn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Zt.setOptional(I,V,"batchingTexture"),Zt.setValue(I,"batchingTexture",V._matricesTexture,R));const nl=Y.morphAttributes;if((nl.position!==void 0||nl.normal!==void 0||nl.color!==void 0&&Ee.isWebGL2===!0)&&Ne.update(V,Y,sr),(zs||qe.receiveShadow!==V.receiveShadow)&&(qe.receiveShadow=V.receiveShadow,Zt.setValue(I,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ar.envMap.value=Ue,ar.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),zs&&(Zt.setValue(I,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&ut(ar,tl),de&&X.fog===!0&&pe.refreshFogUniforms(ar,de),pe.refreshMaterialUniforms(ar,X,W,H,Me),bo.upload(I,Nt(qe),ar,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(bo.upload(I,Nt(qe),ar,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Zt.setValue(I,"center",V.center),Zt.setValue(I,"modelViewMatrix",V.modelViewMatrix),Zt.setValue(I,"normalMatrix",V.normalMatrix),Zt.setValue(I,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Vn=X.uniformsGroups;for(let il=0,Lp=Vn.length;il<Lp;il++)if(Ee.isWebGL2){const mu=Vn[il];le.update(mu,sr),le.bind(mu,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function ut(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function wn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,O,Y){Be.get(b.texture).__webglTexture=O,Be.get(b.depthTexture).__webglTexture=Y;const X=Be.get(b);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Y===void 0,X.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const Y=Be.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Y=0){E=b,w=O,A=Y;let X=!0,V=null,de=!1,Le=!1;if(b){const Ue=Be.get(b);Ue.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(I.FRAMEBUFFER,null),X=!1):Ue.__webglFramebuffer===void 0?R.setupRenderTarget(b):Ue.__hasExternalTextures&&R.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Le=!0);const Xe=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xe[O])?V=Xe[O][Y]:V=Xe[O],de=!0):Ee.isWebGL2&&b.samples>0&&R.useMultisampledRTT(b)===!1?V=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(Xe)?V=Xe[Y]:V=Xe,y.copy(b.viewport),B.copy(b.scissor),N=b.scissorTest}else y.copy(C).multiplyScalar(W).floor(),B.copy(J).multiplyScalar(W).floor(),N=se;if(ge.bindFramebuffer(I.FRAMEBUFFER,V)&&Ee.drawBuffers&&X&&ge.drawBuffers(b,V),ge.viewport(y),ge.scissor(B),ge.setScissorTest(N),de){const Ue=Be.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,Y)}else if(Le){const Ue=Be.get(b.texture),Fe=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.__webglTexture,Y||0,Fe)}U=-1},this.readRenderTargetPixels=function(b,O,Y,X,V,de,Le){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(We=We[Le]),We){ge.bindFramebuffer(I.FRAMEBUFFER,We);try{const Ue=b.texture,Fe=Ue.format,Xe=Ue.type;if(Fe!==ai&&xe.convert(Fe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Xe===Aa&&(oe.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Xe!==Ji&&xe.convert(Xe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Xi&&(Ee.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-X&&Y>=0&&Y<=b.height-V&&I.readPixels(O,Y,X,V,xe.convert(Fe),xe.convert(Xe),de)}finally{const Ue=E!==null?Be.get(E).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(b,O,Y=0){const X=Math.pow(2,-Y),V=Math.floor(O.image.width*X),de=Math.floor(O.image.height*X);R.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,b.x,b.y,V,de),ge.unbindTexture()},this.copyTextureToTexture=function(b,O,Y,X=0){const V=O.image.width,de=O.image.height,Le=xe.convert(Y.format),We=xe.convert(Y.type);R.setTexture2D(Y,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment),O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,X,b.x,b.y,V,de,Le,We,O.image.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,X,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Le,O.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,X,b.x,b.y,Le,We,O.image),X===0&&Y.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,O,Y,X,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=b.max.x-b.min.x+1,Le=b.max.y-b.min.y+1,We=b.max.z-b.min.z+1,Ue=xe.convert(X.format),Fe=xe.convert(X.type);let Xe;if(X.isData3DTexture)R.setTexture3D(X,0),Xe=I.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)R.setTexture2DArray(X,0),Xe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Ze=I.getParameter(I.UNPACK_ROW_LENGTH),St=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ot=I.getParameter(I.UNPACK_SKIP_PIXELS),ft=I.getParameter(I.UNPACK_SKIP_ROWS),ln=I.getParameter(I.UNPACK_SKIP_IMAGES),dt=Y.isCompressedTexture?Y.mipmaps[V]:Y.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,b.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,b.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?I.texSubImage3D(Xe,V,O.x,O.y,O.z,de,Le,We,Ue,Fe,dt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Xe,V,O.x,O.y,O.z,de,Le,We,Ue,dt.data)):I.texSubImage3D(Xe,V,O.x,O.y,O.z,de,Le,We,Ue,Fe,dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ot),I.pixelStorei(I.UNPACK_SKIP_ROWS,ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ln),V===0&&X.generateMipmaps&&I.generateMipmap(Xe),ge.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){w=0,A=0,E=null,ge.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===au?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===$o?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qt?Pr:ap}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pr?qt:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class BS extends Cc{}BS.prototype.isWebGL1Renderer=!0;class vh extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Cp extends Fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xh=new It,Pc=new lu,ho=new Ko,po=new k;class zS extends Kt{constructor(e=new oi,t=new Cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=s,e.ray.intersectsSphere(ho)===!1)return;xh.copy(i).invert(),Pc.copy(e.ray).applyMatrix4(xh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);po.fromBufferAttribute(f,m),Mh(po,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)po.fromBufferAttribute(f,g),Mh(po,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mh(r,e,t,n,i,s,o){const a=Pc.distanceSqToPoint(r);if(a<t){const l=new k;Pc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Qo extends oi{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new kn(s,3)),this.setAttribute("normal",new kn(s.slice(),3)),this.setAttribute("uv",new kn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new k,S=new k,w=new k;for(let A=0;A<t.length;A+=3)d(t[A+0],v),d(t[A+1],S),d(t[A+2],w),l(v,S,w,x)}function l(x,v,S,w){const A=w+1,E=[];for(let U=0;U<=A;U++){E[U]=[];const M=x.clone().lerp(S,U/A),y=v.clone().lerp(S,U/A),B=A-U;for(let N=0;N<=B;N++)N===0&&U===A?E[U][N]=M:E[U][N]=M.clone().lerp(y,N/B)}for(let U=0;U<A;U++)for(let M=0;M<2*(A-U)-1;M++){const y=Math.floor(M/2);M%2===0?(h(E[U][y+1]),h(E[U+1][y]),h(E[U][y])):(h(E[U][y+1]),h(E[U+1][y+1]),h(E[U+1][y]))}}function c(x){const v=new k;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const x=new k;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;o.push(S,1-w)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],w=o[x+4],A=Math.max(v,S,w),E=Math.min(v,S,w);A>.9&&E<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),w<.2&&(o[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function d(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const x=new k,v=new k,S=new k,w=new k,A=new $e,E=new $e,U=new $e;for(let M=0,y=0;M<s.length;M+=9,y+=6){x.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),A.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),U.set(o[y+4],o[y+5]),w.copy(x).add(v).add(S).divideScalar(3);const B=m(w);_(A,y+0,x,B),_(E,y+2,v,B),_(U,y+4,S,B)}}function _(x,v,S,w){w<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.vertices,e.indices,e.radius,e.details)}}class fu extends Qo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fu(e.radius,e.detail)}}class hu extends Qo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hu(e.radius,e.detail)}}class du extends oi{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/i,d=new k,g=new $e;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,v=x,S=x+n+1,w=x+n+2,A=x+1;a.push(v,S,A),a.push(S,w,A)}}this.setIndex(a),this.setAttribute("position",new kn(l,3)),this.setAttribute("normal",new kn(c,3)),this.setAttribute("uv",new kn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Sh extends Fs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ot(16777215),this.specular=new ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=op,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pp extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ql=new It,yh=new k,Eh=new k;class kS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cu,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(yh),Eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eh),t.updateMatrixWorld(),ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GS extends kS{constructor(){super(new yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Th extends Pp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new GS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class HS extends Pp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class VS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bh(){return(typeof performance>"u"?Date:performance).now()}class Ah{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=iu);const wh={type:"change"},jl={type:"start"},Rh={type:"end"},mo=new lu,Ch=new Bi,WS=Math.cos(70*cp.DEG2RAD);class XS extends zr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Pe),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wh),n.update(),s=i.NONE},this.update=function(){const P=new k,le=new Nr().setFromUnitVectors(e.up,new k(0,1,0)),Re=le.clone().invert(),te=new k,ne=new Nr,D=new k,ae=2*Math.PI;return function(ze=null){const Oe=n.object.position;P.copy(Oe).sub(n.target),P.applyQuaternion(le),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&N(y(ze)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let je=n.minAzimuthAngle,Je=n.maxAzimuthAngle;isFinite(je)&&isFinite(Je)&&(je<-Math.PI?je+=ae:je>Math.PI&&(je-=ae),Je<-Math.PI?Je+=ae:Je>Math.PI&&(Je-=ae),je<=Je?a.theta=Math.max(je,Math.min(Je,a.theta)):a.theta=a.theta>(je+Je)/2?Math.max(je,a.theta):Math.min(Je,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?a.radius=C(a.radius):a.radius=C(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Re),Oe.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let be=!1;if(n.zoomToCursor&&A){let Se=null;if(n.object.isPerspectiveCamera){const Ce=P.length();Se=C(Ce*c);const ce=Ce-Se;n.object.position.addScaledVector(S,ce),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ce=new k(w.x,w.y,0);Ce.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),be=!0;const ce=new k(w.x,w.y,0);ce.unproject(n.object),n.object.position.sub(ce).add(Ce),n.object.updateMatrixWorld(),Se=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Se!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Se).add(n.object.position):(mo.origin.copy(n.object.position),mo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(mo.direction))<WS?e.lookAt(n.target):(Ch.setFromNormalAndCoplanarPoint(n.object.up,n.target),mo.intersectPlane(Ch,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),be=!0);return c=1,A=!1,be||te.distanceToSquared(n.object.position)>o||8*(1-ne.dot(n.object.quaternion))>o||D.distanceToSquared(n.target)>0?(n.dispatchEvent(wh),te.copy(n.object.position),ne.copy(n.object.quaternion),D.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",st),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Pe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Ah,l=new Ah;let c=1;const u=new k,f=new $e,h=new $e,d=new $e,g=new $e,_=new $e,m=new $e,p=new $e,x=new $e,v=new $e,S=new k,w=new $e;let A=!1;const E=[],U={};let M=!1;function y(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function B(P){const le=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*le)}function N(P){l.theta-=P}function Z(P){l.phi-=P}const L=function(){const P=new k;return function(Re,te){P.setFromMatrixColumn(te,0),P.multiplyScalar(-Re),u.add(P)}}(),F=function(){const P=new k;return function(Re,te){n.screenSpacePanning===!0?P.setFromMatrixColumn(te,1):(P.setFromMatrixColumn(te,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Re),u.add(P)}}(),H=function(){const P=new k;return function(Re,te){const ne=n.domElement;if(n.object.isPerspectiveCamera){const D=n.object.position;P.copy(D).sub(n.target);let ae=P.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),L(2*Re*ae/ne.clientHeight,n.object.matrix),F(2*te*ae/ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(Re*(n.object.right-n.object.left)/n.object.zoom/ne.clientWidth,n.object.matrix),F(te*(n.object.top-n.object.bottom)/n.object.zoom/ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(P,le){if(!n.zoomToCursor)return;A=!0;const Re=n.domElement.getBoundingClientRect(),te=P-Re.left,ne=le-Re.top,D=Re.width,ae=Re.height;w.x=te/D*2-1,w.y=-(ne/ae)*2+1,S.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function C(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function J(P){f.set(P.clientX,P.clientY)}function se(P){$(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function j(P){g.set(P.clientX,P.clientY)}function K(P){h.set(P.clientX,P.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const le=n.domElement;N(2*Math.PI*d.x/le.clientHeight),Z(2*Math.PI*d.y/le.clientHeight),f.copy(h),n.update()}function ue(P){x.set(P.clientX,P.clientY),v.subVectors(x,p),v.y>0?W(B(v.y)):v.y<0&&q(B(v.y)),p.copy(x),n.update()}function Me(P){_.set(P.clientX,P.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(_),n.update()}function me(P){$(P.clientX,P.clientY),P.deltaY<0?q(B(P.deltaY)):P.deltaY>0&&W(B(P.deltaY)),n.update()}function De(P){let le=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),le=!0;break}le&&(P.preventDefault(),n.update())}function ye(P){if(E.length===1)f.set(P.pageX,P.pageY);else{const le=xe(P),Re=.5*(P.pageX+le.x),te=.5*(P.pageY+le.y);f.set(Re,te)}}function Ie(P){if(E.length===1)g.set(P.pageX,P.pageY);else{const le=xe(P),Re=.5*(P.pageX+le.x),te=.5*(P.pageY+le.y);g.set(Re,te)}}function ke(P){const le=xe(P),Re=P.pageX-le.x,te=P.pageY-le.y,ne=Math.sqrt(Re*Re+te*te);p.set(0,ne)}function I(P){n.enableZoom&&ke(P),n.enablePan&&Ie(P)}function Te(P){n.enableZoom&&ke(P),n.enableRotate&&ye(P)}function oe(P){if(E.length==1)h.set(P.pageX,P.pageY);else{const Re=xe(P),te=.5*(P.pageX+Re.x),ne=.5*(P.pageY+Re.y);h.set(te,ne)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const le=n.domElement;N(2*Math.PI*d.x/le.clientHeight),Z(2*Math.PI*d.y/le.clientHeight),f.copy(h)}function Ee(P){if(E.length===1)_.set(P.pageX,P.pageY);else{const le=xe(P),Re=.5*(P.pageX+le.x),te=.5*(P.pageY+le.y);_.set(Re,te)}m.subVectors(_,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(_)}function ge(P){const le=xe(P),Re=P.pageX-le.x,te=P.pageY-le.y,ne=Math.sqrt(Re*Re+te*te);x.set(0,ne),v.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),W(v.y),p.copy(x);const D=(P.pageX+le.x)*.5,ae=(P.pageY+le.y)*.5;$(D,ae)}function G(P){n.enableZoom&&ge(P),n.enablePan&&Ee(P)}function Be(P){n.enableZoom&&ge(P),n.enableRotate&&oe(P)}function R(P){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",z)),Ne(P),P.pointerType==="touch"?He(P):ie(P))}function T(P){n.enabled!==!1&&(P.pointerType==="touch"?Q(P):ee(P))}function z(P){Ye(P),E.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",z)),n.dispatchEvent(Rh),s=i.NONE}function ie(P){let le;switch(P.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Wr.DOLLY:if(n.enableZoom===!1)return;se(P),s=i.DOLLY;break;case Wr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;j(P),s=i.PAN}else{if(n.enableRotate===!1)return;J(P),s=i.ROTATE}break;case Wr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;J(P),s=i.ROTATE}else{if(n.enablePan===!1)return;j(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(jl)}function ee(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;K(P);break;case i.DOLLY:if(n.enableZoom===!1)return;ue(P);break;case i.PAN:if(n.enablePan===!1)return;Me(P);break}}function re(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(jl),me(ve(P)),n.dispatchEvent(Rh))}function ve(P){const le=P.deltaMode,Re={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(le){case 1:Re.deltaY*=16;break;case 2:Re.deltaY*=100;break}return P.ctrlKey&&!M&&(Re.deltaY*=10),Re}function pe(P){P.key==="Control"&&(M=!0,document.addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(P){P.key==="Control"&&(M=!1,document.removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function Pe(P){n.enabled===!1||n.enablePan===!1||De(P)}function He(P){switch(we(P),E.length){case 1:switch(n.touches.ONE){case Xr.ROTATE:if(n.enableRotate===!1)return;ye(P),s=i.TOUCH_ROTATE;break;case Xr.PAN:if(n.enablePan===!1)return;Ie(P),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Xr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(P),s=i.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(P),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(jl)}function Q(P){switch(we(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ee(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Be(P),n.update();break;default:s=i.NONE}}function st(P){n.enabled!==!1&&P.preventDefault()}function Ne(P){E.push(P.pointerId)}function Ye(P){delete U[P.pointerId];for(let le=0;le<E.length;le++)if(E[le]==P.pointerId){E.splice(le,1);return}}function we(P){let le=U[P.pointerId];le===void 0&&(le=new $e,U[P.pointerId]=le),le.set(P.pageX,P.pageY)}function xe(P){const le=P.pointerId===E[0]?E[1]:E[0];return U[le]}n.domElement.addEventListener("contextmenu",st),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}function YS(){if(!(()=>{try{const I=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(I.getContext("webgl")||I.getContext("experimental-webgl")))}catch{return!1}})()){console.warn("WebGL not supported. 3D features disabled.");return}const e=document.getElementById("bg-canvas"),t=new vh,n=new In(60,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=30;const i=new Cc({canvas:e,alpha:!0,antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new oi,o=1500,a=new Float32Array(o*3),l=new Float32Array(o*3),c=new ot("#0055ff"),u=new ot("#bd00ff"),f=new ot("#00f0ff"),h=[c,u,f];for(let I=0;I<o*3;I+=3){a[I]=(Math.random()-.5)*100,a[I+1]=(Math.random()-.5)*100,a[I+2]=(Math.random()-.5)*100;const Te=h[Math.floor(Math.random()*h.length)];l[I]=Te.r,l[I+1]=Te.g,l[I+2]=Te.b}s.setAttribute("position",new Qn(a,3)),s.setAttribute("color",new Qn(l,3));const d=()=>{const I=document.createElement("canvas");I.width=16,I.height=16;const Te=I.getContext("2d"),oe=Te.createRadialGradient(8,8,0,8,8,8);oe.addColorStop(0,"rgba(255,255,255,1)"),oe.addColorStop(.3,"rgba(255,255,255,0.8)"),oe.addColorStop(1,"rgba(255,255,255,0)"),Te.fillStyle=oe,Te.fillRect(0,0,16,16);const Ee=new bn(I);return Ee.needsUpdate=!0,Ee},g=new Cp({size:.25,sizeAttenuation:!0,transparent:!0,alphaTest:.01,blending:xc,vertexColors:!0,map:d()}),_=new zS(s,g);t.add(_);let m=0,p=0;document.addEventListener("mousemove",I=>{m=I.clientX/window.innerWidth-.5,p=I.clientY/window.innerHeight-.5});const x=document.getElementById("hero-3d-canvas");if(!x)return;const v=new vh,S=new In(45,x.clientWidth/x.clientHeight,.1,100);S.position.set(0,5,12);const w=new Cc({canvas:x,alpha:!0,antialias:!0});w.setSize(x.clientWidth,x.clientHeight),w.setPixelRatio(Math.min(window.devicePixelRatio,2));const A=new HS(16777215,.4);v.add(A);const E=new Th("#00f0ff",2);E.position.set(5,5,2),v.add(E);const U=new Th("#bd00ff",2.5);U.position.set(-5,3,5),v.add(U);const M=new Yi;v.add(M);const y=new Yi;M.add(y);const B=new ps({color:61695,wireframe:!0,transparent:!0,opacity:.55}),N=new ps({color:12386559,wireframe:!0,transparent:!0,opacity:.4}),Z=new Sh({color:658464,emissive:22015,emissiveIntensity:.15,shininess:30,transparent:!0,opacity:.7}),L=new Or(4.5,.15,3),F=new nn(L,Z),H=new nn(L,B);F.add(H),y.add(F);const W=new Ra(3.8,2.2,10,6);W.rotateX(-Math.PI/2);const q=new nn(W,new ps({color:61695,wireframe:!0,transparent:!0,opacity:.65}));q.position.set(0,.08,.1),y.add(q);const $=new Yi;$.position.set(0,.07,-1.45);const C=new Or(4.5,2.8,.1);C.translate(0,1.4,0);const J=new nn(C,Z),se=new nn(C,B);J.add(se),$.add(J);const j=new Ra(4.2,2.5,12,8);j.translate(0,1.4,.06);const K=new nn(j,new ps({color:12386559,wireframe:!0,transparent:!0,opacity:.45}));$.add(K),$.rotation.x=cp.degToRad(20),y.add($);const ue=new Yi;M.add(ue);const Me=3,me=[],De=[];for(let I=0;I<Me;I++){const Te=3.5+I*1.2,oe=.3*(1-I*.2),Ee=(I-1)*.8,ge=new du(Te,Te+.03,64);ge.rotateX(Math.PI/2);const G=new nn(ge,N);G.position.y=Ee,ue.add(G),De.push(G);const Be=I===1?new hu(.35,1):new fu(.3,0),R=new Sh({color:I===1?61695:12386559,emissive:I===1?61695:12386559,emissiveIntensity:.5,wireframe:!0}),T=new nn(Be,R);ue.add(T),me.push({mesh:T,radius:Te,speed:oe,yPos:Ee,angle:Math.random()*Math.PI*2})}const ye=new XS(S,x);ye.enableDamping=!0,ye.dampingFactor=.05,ye.enableZoom=!1,ye.minPolarAngle=Math.PI/6,ye.maxPolarAngle=Math.PI/2,M.rotation.y=-Math.PI/6,M.position.y=-1;const Ie=new VS,ke=()=>{requestAnimationFrame(ke);const I=Ie.getElapsedTime();_.rotation.y=I*.015,_.rotation.x=I*.005,_.position.x+=(m*5-_.position.x)*.05,_.position.y+=(-p*5-_.position.y)*.05,!ye.state==-1&&(M.rotation.y=-Math.PI/6+Math.sin(I*.25)*.15),y.position.y=Math.sin(I*1.5)*.15,y.rotation.z=Math.cos(I*1)*.02,K.rotation.y=I*.05,me.forEach(oe=>{oe.angle+=oe.speed*.015,oe.mesh.position.x=Math.cos(oe.angle)*oe.radius,oe.mesh.position.z=Math.sin(oe.angle)*oe.radius,oe.mesh.position.y=oe.yPos+Math.sin(I*2+oe.radius)*.25,oe.mesh.rotation.x=I*.5,oe.mesh.rotation.y=I*.8}),De.forEach((oe,Ee)=>{oe.rotation.y=I*.05*(Ee%2===0?1:-1)});const Te=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight);M.position.x=-Te*1.5,M.rotation.y=-Math.PI/6+Te*Math.PI*.35,ye.update(),i.render(t,n),w.render(v,S)};ke(),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.clientWidth>0&&x.clientHeight>0&&(S.aspect=x.clientWidth/x.clientHeight,S.updateProjectionMatrix(),w.setSize(x.clientWidth,x.clientHeight),w.setPixelRatio(Math.min(window.devicePixelRatio,2)))})}Wt.registerPlugin(at);document.addEventListener("DOMContentLoaded",()=>{qS(),jS(),$S(),KS(),ZS(),JS(),QS(),ey(),ty(),ny(),iy(),YS()});function qS(){const r=document.getElementById("cursor-glow"),e=document.getElementById("cursor-dot");if(!r||!e)return;if("ontouchstart"in window||navigator.maxTouchPoints>0){r.style.display="none",e.style.display="none";return}let n=0,i=0,s=0,o=0;Wt.ticker.add(()=>{n+=(s-n)*.1,i+=(o-i)*.1,Wt.set(r,{x:n,y:i}),Wt.set(e,{x:s,y:o})}),window.addEventListener("mousemove",l=>{s=l.clientX,o=l.clientY});const a="a, button, input, textarea, .project-card, .skill-tag, .cert-card, .magnetic";document.addEventListener("mouseover",l=>{l.target.closest(a)&&(r.style.width="120px",r.style.height="120px",r.style.background="radial-gradient(circle, rgba(189, 0, 255, 0.15) 0%, transparent 70%)",e.style.transform="translate(-50%, -50%) scale(2.0)",e.style.borderColor="var(--color-purple)",e.style.backgroundColor="transparent",e.style.border="1px solid var(--color-purple)")}),document.addEventListener("mouseout",l=>{l.target.closest(a)&&(r.style.width="300px",r.style.height="300px",r.style.background="radial-gradient(circle, rgba(0, 240, 255, 0.07) 0%, transparent 70%)",e.style.transform="translate(-50%, -50%) scale(1)",e.style.backgroundColor="var(--color-cyan)",e.style.border="none")})}function jS(){const r=document.getElementById("typing-text");if(!r)return;const e=["Full-Stack Developer | AI/ML Enthusiast","3rd Year B.Sc. IT Student","GLS University Scholar"];let t=0,n=0,i=!1,s=100;function o(){const a=e[t];i?(r.textContent=a.substring(0,n-1),n--,s=50):(r.textContent=a.substring(0,n+1),n++,s=100),!i&&n===a.length?(i=!0,s=1800):i&&n===0&&(i=!1,t=(t+1)%e.length,s=400),setTimeout(o,s)}setTimeout(o,1e3)}function $S(){const r=document.getElementById("mobile-toggle"),e=document.getElementById("nav-menu"),t=document.querySelectorAll(".nav-link");!r||!e||(r.addEventListener("click",()=>{r.classList.toggle("active"),e.classList.toggle("active")}),t.forEach(n=>{n.addEventListener("click",()=>{r.classList.remove("active"),e.classList.remove("active")})}))}function KS(){const r=document.getElementById("skills-grid-container");r&&(r.innerHTML=g_.map((e,t)=>`
    <div class="skills-category glass-panel">
      <h3><i class="${e.icon}"></i> ${e.category}</h3>
      <div class="skills-items">
        ${e.items.map(n=>`
          <div class="skill-tag magnetic">
            <i class="${n.icon}"></i>
            <span>${n.name}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join(""))}function ZS(){const r=document.getElementById("projects-grid-container");if(!r)return;r.innerHTML=__.map(t=>`
    <div class="project-card glass-panel" data-id="${t.id}">
      <div class="project-image-wrapper">
        <span class="project-badge">${t.category}</span>
        ${t.image?`
          <img src="${t.image}" alt="${t.title}" class="project-image" loading="lazy">
        `:`
          <div class="project-image-placeholder">
            <i class="${t.icon}"></i>
          </div>
        `}
        <div class="project-links-overlay">
          <a href="${t.githubUrl}" target="_blank" class="project-overlay-link" title="GitHub Source" aria-label="GitHub Source">
            <i class="fa-brands fa-github"></i>
          </a>
          ${t.demoUrl?`
          <a href="${t.demoUrl}" target="_blank" class="project-overlay-link" title="Live Demo" aria-label="Live Demo">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          `:`
          <a href="#" class="project-overlay-link disabled" title="Live Demo Unavailable" aria-label="Live Demo Unavailable" onclick="return false;">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          `}
        </div>
      </div>
      <div class="project-body">
        <h3>${t.title}</h3>
        <p class="project-desc">${t.desc}</p>
        <div class="project-tech">
          ${t.tech.map(n=>`<span class="tech-tag">${n}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join(""),document.querySelectorAll(".project-card").forEach(t=>{t.addEventListener("mousemove",n=>{const i=t.getBoundingClientRect(),s=n.clientX-i.left,o=n.clientY-i.top,a=i.width,l=i.height,c=(o/l-.5)*-15,u=(s/a-.5)*15;Wt.to(t,{rotateX:c,rotateY:u,transformPerspective:1e3,ease:"power1.out",duration:.3})}),t.addEventListener("mouseleave",()=>{Wt.to(t,{rotateX:0,rotateY:0,transformPerspective:1e3,ease:"power2.out",duration:.5})})})}function JS(){const r=document.getElementById("timeline-list");r&&(r.innerHTML=v_.map(e=>`
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content glass-panel">
        <span class="timeline-date">${e.date}</span>
        <h3>${e.title}</h3>
        <div class="timeline-subtitle">${e.subtitle}</div>
        <p class="timeline-text">${e.text}</p>
      </div>
    </div>
  `).join(""))}function QS(){const r=document.getElementById("certs-grid-container");r&&(r.innerHTML=x_.map(e=>{const t=e.credentialUrl&&e.credentialUrl!=="",n=t?"a":"div",i=t?`href="${e.credentialUrl}" target="_blank" class="cert-card glass-panel magnetic"`:'class="cert-card glass-panel"';return`
      <${n} ${i}>
        <div class="cert-icon">
          <i class="${e.icon}"></i>
        </div>
        <div class="cert-info">
          <h3>${e.title} ${t?'<i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.7rem; margin-left: 4px; opacity: 0.7;"></i>':""}</h3>
          <p>${e.issuer} &bull; ${e.date}</p>
        </div>
      </${n}>
    `}).join(""))}async function ey(){const r=document.getElementById("github-contribution-grid");if(!r)return;const e=document.getElementById("total-commits"),t=document.getElementById("active-days");let n=147,i=23,s="";try{const o=await fetch("https://github-contributions-api.deno.dev/DEVDARJI7730.json");if(!o.ok)throw new Error("API network response error");const a=await o.json();n=a.totalContributions||0,i=0,a.weeks.forEach(l=>{l.forEach(c=>{let u=0;c.contributionLevel==="FIRST_QUARTILE"?u=1:c.contributionLevel==="SECOND_QUARTILE"?u=2:c.contributionLevel==="THIRD_QUARTILE"?u=3:c.contributionLevel==="FOURTH_QUARTILE"&&(u=4),c.contributionCount>0&&i++;const h=new Date(c.date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),d=`${c.contributionCount===0?"No":c.contributionCount} contribution${c.contributionCount!==1?"s":""} on ${h}`;s+=`<div class="github-cell level-${u}" data-tooltip="${d}"></div>`})}),r.innerHTML=s,e&&(e.textContent=n),t&&(t.textContent=i)}catch(o){console.warn("Real-time GitHub contributions fetch failed, falling back to simulated data:",o);const a=53,l=7;s="",n=147,i=23;const c=new Date;c.setDate(c.getDate()-365);const u=c.getDay();c.setDate(c.getDate()-u);for(let f=0;f<a;f++)for(let h=0;h<l;h++){const d=new Date(c);d.setDate(c.getDate()+f*7+h);let g=0;f===8&&h===1||f===8&&h===3||f===10&&h===1||f===18&&h===1?g=3:f===19&&h===5?g=2:f===34&&h===1?g=3:f===43&&h===5||f===44&&h===3?g=4:f===44&&h===5||f===44&&h===1?g=2:f===48&&h===5||f===49&&h===5||f===50&&h===5?g=4:f===51&&h===1?g=6:f===51&&h===3?g=3:f===51&&h===5?g=14:f===51&&h===6?g=4:f===51&&h===0?g=8:f===52&&h===1?g=18:f===52&&h===3?g=8:f===52&&h===5?g=20:f===52&&h===6?g=10:f===52&&h===0&&(g=15);let _=0;g===0?_=0:g<=2?_=1:g<=4?_=2:g<=8?_=3:_=4;const m=d.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),p=`${g===0?"No":g} contribution${g!==1?"s":""} on ${m}`;s+=`<div class="github-cell level-${_}" data-tooltip="${p}"></div>`}r.innerHTML=s,e&&(e.textContent=n),t&&(t.textContent=i)}}function ty(){if(window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0)return;document.querySelectorAll(".magnetic").forEach(e=>{e.addEventListener("mousemove",t=>{const n=e.getBoundingClientRect(),i=t.clientX-(n.left+n.width/2),s=t.clientY-(n.top+n.height/2);Wt.to(e,{x:i*.35,y:s*.35,duration:.3,ease:"power2.out"});const o=e.querySelector("span");o&&Wt.to(o,{x:i*.15,y:s*.15,duration:.3,ease:"power2.out"})}),e.addEventListener("mouseleave",()=>{Wt.to(e,{x:0,y:0,duration:.5,ease:"elastic.out(1, 0.4)"});const t=e.querySelector("span");t&&Wt.to(t,{x:0,y:0,duration:.5,ease:"elastic.out(1, 0.4)"})})})}function ny(){Wt.to("#scroll-progress-bar",{width:"100%",scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:.1}}),document.querySelectorAll("section").forEach(t=>{Wt.from(t.querySelector(".section-header"),{opacity:0,y:30,duration:.8,scrollTrigger:{trigger:t,start:"top 80%",toggleActions:"play none none none"}})}),Wt.from("#skills-grid-container .skills-category",{opacity:0,y:40,stagger:.15,duration:.8,scrollTrigger:{trigger:"#skills",start:"top 75%"}}),Wt.from("#projects-grid-container .project-card",{opacity:0,y:50,stagger:.15,duration:.8,scrollTrigger:{trigger:"#projects",start:"top 70%"}}),Wt.from(".timeline-item",{opacity:0,x:t=>t%2===0?-50:50,stagger:.2,duration:1,scrollTrigger:{trigger:"#experience",start:"top 70%"}}),Wt.from("#certs-grid-container .cert-card",{opacity:0,y:30,stagger:.1,duration:.6,scrollTrigger:{trigger:"#certifications",start:"top 80%"}}),document.querySelectorAll(".count-up-card").forEach(t=>{const n=t.querySelector(".stat-num");parseInt(n.getAttribute("data-val"),10),Wt.from(n,{textContent:0,duration:2,ease:"power2.out",snap:{textContent:1},scrollTrigger:{trigger:t,start:"top 85%"}})})}function iy(){const r=document.getElementById("contact-form"),e=document.getElementById("form-status");!r||!e||r.addEventListener("submit",t=>{t.preventDefault(),e.textContent="Processing transmission...",e.className="form-status";const n=r.querySelector("#submit-btn"),i=n.querySelector("span"),s=i.innerHTML;i.innerHTML='Sending... <i class="fa-solid fa-circle-notch fa-spin"></i>',n.disabled=!0;const o=new FormData(r);fetch("https://api.web3forms.com/submit",{method:"POST",body:o}).then(async a=>{let l=await a.json();a.status===200?(e.textContent="Transmission successful! Message received.",e.className="form-status success",r.reset()):(e.textContent=l.message||"Something went wrong!",e.className="form-status error")}).catch(a=>{console.error(a),e.textContent="Network error! Message not sent.",e.className="form-status error"}).then(()=>{i.innerHTML=s,n.disabled=!1,setTimeout(()=>{e.textContent="",e.className="form-status"},5e3)})})}
//# sourceMappingURL=index-WUFoPn8Z.js.map
