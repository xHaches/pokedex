(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{XiUz:function(t,e,i){"use strict";i.d(e,"e",function(){return it}),i.d(e,"a",function(){return V}),i.d(e,"c",function(){return g}),i.d(e,"b",function(){return H}),i.d(e,"d",function(){return k});var n=i("8Y7J"),s=i("pD6V"),r=i("cH1L"),a=i("XNiG"),o=i("1G5W");const l="inline",u=["row","column","row-reverse","column-reverse"];function c(t){t=t?t.toLowerCase():"";let[e,i,n]=t.split(" ");return u.find(t=>t===e)||(e=u[0]),i===l&&(i=n!==l?n:"",n=l),[e,f(i),!!n]}function h(t){let[e]=c(t);return e.indexOf("row")>-1}function f(t){if(t)switch(t.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":t="wrap-reverse";break;case"no":case"none":case"nowrap":t="nowrap";break;default:t="wrap"}return t}let p=(()=>{class t extends s.h{buildStyles(t){return function(t){let[e,i,n]=c(t);return function(t,e=null,i=!1){return{display:i?"inline-flex":"flex","box-sizing":"border-box","flex-direction":t,"flex-wrap":e||null}}(e,i,n)}(t)}}return t.\u0275fac=function(e){return d(e||t)},t.\u0275prov=Object(n.Fb)({factory:function(){return new t},token:t,providedIn:"root"}),t})();const d=n.Ob(p),y=["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"];let x=(()=>{class t extends s.b{constructor(t,e,i,n){super(t,i,e,n),this.DIRECTIVE_KEY="layout",this.styleCache=b,this.init()}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(n.l),n.Jb(s.i),n.Jb(p),n.Jb(s.f))},t.\u0275dir=n.Eb({type:t,features:[n.wb]}),t})(),g=(()=>{class t extends x{constructor(){super(...arguments),this.inputs=y}}return t.\u0275fac=function(e){return m(e||t)},t.\u0275dir=n.Eb({type:t,selectors:[["","fxLayout",""],["","fxLayout.xs",""],["","fxLayout.sm",""],["","fxLayout.md",""],["","fxLayout.lg",""],["","fxLayout.xl",""],["","fxLayout.lt-sm",""],["","fxLayout.lt-md",""],["","fxLayout.lt-lg",""],["","fxLayout.lt-xl",""],["","fxLayout.gt-xs",""],["","fxLayout.gt-sm",""],["","fxLayout.gt-md",""],["","fxLayout.gt-lg",""]],inputs:{fxLayout:"fxLayout","fxLayout.xs":"fxLayout.xs","fxLayout.sm":"fxLayout.sm","fxLayout.md":"fxLayout.md","fxLayout.lg":"fxLayout.lg","fxLayout.xl":"fxLayout.xl","fxLayout.lt-sm":"fxLayout.lt-sm","fxLayout.lt-md":"fxLayout.lt-md","fxLayout.lt-lg":"fxLayout.lt-lg","fxLayout.lt-xl":"fxLayout.lt-xl","fxLayout.gt-xs":"fxLayout.gt-xs","fxLayout.gt-sm":"fxLayout.gt-sm","fxLayout.gt-md":"fxLayout.gt-md","fxLayout.gt-lg":"fxLayout.gt-lg"},features:[n.wb]}),t})();const m=n.Ob(g),b=new Map,w={"margin-left":null,"margin-right":null,"margin-top":null,"margin-bottom":null};let v=(()=>{class t extends s.h{constructor(t){super(),this._styler=t}buildStyles(t,e){return t.endsWith(Q)?function(t,e){const[i,n]=t.split(" "),s=t=>"-"+t;let r="0px",a=s(n||i),o="0px";return"rtl"===e?o=s(i):r=s(i),{margin:`0px ${r} ${a} ${o}`}}(t=t.slice(0,t.indexOf(Q)),e.directionality):{}}sideEffect(t,e,i){const n=i.items;if(t.endsWith(Q)){const e=function(t,e){const[i,n]=t.split(" ");let s="0px",r="0px";return"rtl"===e?r=i:s=i,{padding:`0px ${s} ${n||i} ${r}`}}(t=t.slice(0,t.indexOf(Q)),i.directionality);this._styler.applyStyleToElements(e,i.items)}else{const e=n.pop(),s=function(t,e){const i=B(e.directionality,e.layout),n=Object.assign({},w);return n[i]=t,n}(t,i);this._styler.applyStyleToElements(s,n),this._styler.applyStyleToElements(w,[e])}}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(s.i))},t.\u0275prov=Object(n.Fb)({factory:function(){return new t(Object(n.Qb)(s.i))},token:t,providedIn:"root"}),t})();const L=["fxLayoutGap","fxLayoutGap.xs","fxLayoutGap.sm","fxLayoutGap.md","fxLayoutGap.lg","fxLayoutGap.xl","fxLayoutGap.lt-sm","fxLayoutGap.lt-md","fxLayoutGap.lt-lg","fxLayoutGap.lt-xl","fxLayoutGap.gt-xs","fxLayoutGap.gt-sm","fxLayoutGap.gt-md","fxLayoutGap.gt-lg"];let E=(()=>{class t extends s.b{constructor(t,e,i,n,s,r){super(t,s,n,r),this.zone=e,this.directionality=i,this.styleUtils=n,this.layout="row",this.DIRECTIVE_KEY="layout-gap",this.observerSubject=new a.a;const l=[this.directionality.change,this.observerSubject.asObservable()];this.init(l),this.marshal.trackValue(this.nativeElement,"layout").pipe(Object(o.a)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this))}get childrenNodes(){const t=this.nativeElement.children,e=[];for(let i=t.length;i--;)e[i]=t[i];return e}ngAfterContentInit(){this.buildChildObservable(),this.triggerUpdate()}ngOnDestroy(){super.ngOnDestroy(),this.observer&&this.observer.disconnect()}onLayoutChange(t){const e=t.value.split(" ");this.layout=e[0],u.find(t=>t===this.layout)||(this.layout="row"),this.triggerUpdate()}updateWithValue(t){const e=this.childrenNodes.filter(t=>1===t.nodeType&&this.willDisplay(t)).sort((t,e)=>{const i=+this.styler.lookupStyle(t,"order"),n=+this.styler.lookupStyle(e,"order");return isNaN(i)||isNaN(n)||i===n?0:i>n?1:-1});if(e.length>0){const i=this.directionality.value,n=this.layout;"row"===n&&"rtl"===i?this.styleCache=S:"row"===n&&"rtl"!==i?this.styleCache=M:"column"===n&&"rtl"===i?this.styleCache=O:"column"===n&&"rtl"!==i&&(this.styleCache=j),this.addStyles(t,{directionality:i,items:e,layout:n})}}clearStyles(){const t=Object.keys(this.mru).length>0,e=t?"padding":B(this.directionality.value,this.layout);t&&super.clearStyles(),this.styleUtils.applyStyleToElements({[e]:""},this.childrenNodes)}willDisplay(t){const e=this.marshal.getValue(t,"show-hide");return!0===e||void 0===e&&"none"!==this.styleUtils.lookupStyle(t,"display")}buildChildObservable(){this.zone.runOutsideAngular(()=>{"undefined"!=typeof MutationObserver&&(this.observer=new MutationObserver(t=>{t.some(t=>t.addedNodes&&t.addedNodes.length>0||t.removedNodes&&t.removedNodes.length>0)&&this.observerSubject.next()}),this.observer.observe(this.nativeElement,{childList:!0}))})}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(n.l),n.Jb(n.z),n.Jb(r.b),n.Jb(s.i),n.Jb(v),n.Jb(s.f))},t.\u0275dir=n.Eb({type:t,features:[n.wb]}),t})(),k=(()=>{class t extends E{constructor(){super(...arguments),this.inputs=L}}return t.\u0275fac=function(e){return A(e||t)},t.\u0275dir=n.Eb({type:t,selectors:[["","fxLayoutGap",""],["","fxLayoutGap.xs",""],["","fxLayoutGap.sm",""],["","fxLayoutGap.md",""],["","fxLayoutGap.lg",""],["","fxLayoutGap.xl",""],["","fxLayoutGap.lt-sm",""],["","fxLayoutGap.lt-md",""],["","fxLayoutGap.lt-lg",""],["","fxLayoutGap.lt-xl",""],["","fxLayoutGap.gt-xs",""],["","fxLayoutGap.gt-sm",""],["","fxLayoutGap.gt-md",""],["","fxLayoutGap.gt-lg",""]],inputs:{fxLayoutGap:"fxLayoutGap","fxLayoutGap.xs":"fxLayoutGap.xs","fxLayoutGap.sm":"fxLayoutGap.sm","fxLayoutGap.md":"fxLayoutGap.md","fxLayoutGap.lg":"fxLayoutGap.lg","fxLayoutGap.xl":"fxLayoutGap.xl","fxLayoutGap.lt-sm":"fxLayoutGap.lt-sm","fxLayoutGap.lt-md":"fxLayoutGap.lt-md","fxLayoutGap.lt-lg":"fxLayoutGap.lt-lg","fxLayoutGap.lt-xl":"fxLayoutGap.lt-xl","fxLayoutGap.gt-xs":"fxLayoutGap.gt-xs","fxLayoutGap.gt-sm":"fxLayoutGap.gt-sm","fxLayoutGap.gt-md":"fxLayoutGap.gt-md","fxLayoutGap.gt-lg":"fxLayoutGap.gt-lg"},features:[n.wb]}),t})();const A=n.Ob(k),S=new Map,O=new Map,M=new Map,j=new Map,Q=" grid";function B(t,e){switch(e){case"column":return"margin-bottom";case"column-reverse":return"margin-top";case"row":return"rtl"===t?"margin-left":"margin-right";case"row-reverse":return"rtl"===t?"margin-right":"margin-left";default:return"rtl"===t?"margin-left":"margin-right"}}function F(t,...e){if(null==t)throw TypeError("Cannot convert undefined or null to object");for(let i of e)if(null!=i)for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}let C=(()=>{class t extends s.h{constructor(t){super(),this.layoutConfig=t}buildStyles(t,e){let[i,n,...s]=t.split(" "),r=s.join(" ");const a=e.direction.indexOf("column")>-1?"column":"row",o=h(a)?"max-width":"max-height",l=h(a)?"min-width":"min-height",u=String(r).indexOf("calc")>-1,c=u||"auto"===r,f=String(r).indexOf("%")>-1&&!u,p=String(r).indexOf("px")>-1||String(r).indexOf("rem")>-1||String(r).indexOf("em")>-1||String(r).indexOf("vw")>-1||String(r).indexOf("vh")>-1;let d=u||p;i="0"==i?0:i,n="0"==n?0:n;const y=!i&&!n;let x={};const g={"max-width":null,"max-height":null,"min-width":null,"min-height":null};switch(r||""){case"":const t=!1!==this.layoutConfig.useColumnBasisZero;r="row"===a?"0%":t?"0.000000001px":"auto";break;case"initial":case"nogrow":i=0,r="auto";break;case"grow":r="100%";break;case"noshrink":n=0,r="auto";break;case"auto":break;case"none":i=0,n=0,r="auto";break;default:d||f||isNaN(r)||(r+="%"),"0%"===r&&(d=!0),"0px"===r&&(r="0%"),x=F(g,u?{"flex-grow":i,"flex-shrink":n,"flex-basis":d?r:"100%"}:{flex:`${i} ${n} ${d?r:"100%"}`})}return x.flex||x["flex-grow"]||(x=F(g,u?{"flex-grow":i,"flex-shrink":n,"flex-basis":r}:{flex:`${i} ${n} ${r}`})),"0%"!==r&&"0px"!==r&&"0.000000001px"!==r&&"auto"!==r&&(x[l]=y||d&&i?r:null,x[o]=y||!c&&n?r:null),x[l]||x[o]?e.hasWrap&&(x[u?"flex-basis":"flex"]=x[o]?u?x[o]:`${i} ${n} ${x[o]}`:u?x[l]:`${i} ${n} ${x[l]}`):x=F(g,u?{"flex-grow":i,"flex-shrink":n,"flex-basis":r}:{flex:`${i} ${n} ${r}`}),F(x,{"box-sizing":"border-box"})}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(s.e))},t.\u0275prov=Object(n.Fb)({factory:function(){return new t(Object(n.Qb)(s.e))},token:t,providedIn:"root"}),t})();const G=["fxFlex","fxFlex.xs","fxFlex.sm","fxFlex.md","fxFlex.lg","fxFlex.xl","fxFlex.lt-sm","fxFlex.lt-md","fxFlex.lt-lg","fxFlex.lt-xl","fxFlex.gt-xs","fxFlex.gt-sm","fxFlex.gt-md","fxFlex.gt-lg"];let P=(()=>{class t extends s.b{constructor(t,e,i,n,s){super(t,n,e,s),this.layoutConfig=i,this.marshal=s,this.DIRECTIVE_KEY="flex",this.direction=void 0,this.wrap=void 0,this.flexGrow="1",this.flexShrink="1",this.init()}get shrink(){return this.flexShrink}set shrink(t){this.flexShrink=t||"1",this.triggerReflow()}get grow(){return this.flexGrow}set grow(t){this.flexGrow=t||"1",this.triggerReflow()}ngOnInit(){this.parentElement&&(this.marshal.trackValue(this.parentElement,"layout").pipe(Object(o.a)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)),this.marshal.trackValue(this.nativeElement,"layout-align").pipe(Object(o.a)(this.destroySubject)).subscribe(this.triggerReflow.bind(this)))}onLayoutChange(t){const e=t.value.split(" ");this.direction=e[0],this.wrap=void 0!==e[1]&&"wrap"===e[1],this.triggerUpdate()}updateWithValue(t){void 0===this.direction&&(this.direction=this.getFlexFlowDirection(this.parentElement,!1!==this.layoutConfig.addFlexToParent)),void 0===this.wrap&&(this.wrap=this.hasWrap(this.parentElement));const e=this.direction,i=e.startsWith("row"),n=this.wrap;i&&n?this.styleCache=D:i&&!n?this.styleCache=_:!i&&n?this.styleCache=R:i||n||(this.styleCache=I);const r=String(t).replace(";",""),a=Object(s.j)(r,this.flexGrow,this.flexShrink);this.addStyles(a.join(" "),{direction:e,hasWrap:n})}triggerReflow(){const t=this.activatedValue;if(void 0!==t){const e=Object(s.j)(t+"",this.flexGrow,this.flexShrink);this.marshal.updateElement(this.nativeElement,this.DIRECTIVE_KEY,e.join(" "))}}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(n.l),n.Jb(s.i),n.Jb(s.e),n.Jb(C),n.Jb(s.f))},t.\u0275dir=n.Eb({type:t,inputs:{shrink:["fxShrink","shrink"],grow:["fxGrow","grow"]},features:[n.wb]}),t})(),V=(()=>{class t extends P{constructor(){super(...arguments),this.inputs=G}}return t.\u0275fac=function(e){return T(e||t)},t.\u0275dir=n.Eb({type:t,selectors:[["","fxFlex",""],["","fxFlex.xs",""],["","fxFlex.sm",""],["","fxFlex.md",""],["","fxFlex.lg",""],["","fxFlex.xl",""],["","fxFlex.lt-sm",""],["","fxFlex.lt-md",""],["","fxFlex.lt-lg",""],["","fxFlex.lt-xl",""],["","fxFlex.gt-xs",""],["","fxFlex.gt-sm",""],["","fxFlex.gt-md",""],["","fxFlex.gt-lg",""]],inputs:{fxFlex:"fxFlex","fxFlex.xs":"fxFlex.xs","fxFlex.sm":"fxFlex.sm","fxFlex.md":"fxFlex.md","fxFlex.lg":"fxFlex.lg","fxFlex.xl":"fxFlex.xl","fxFlex.lt-sm":"fxFlex.lt-sm","fxFlex.lt-md":"fxFlex.lt-md","fxFlex.lt-lg":"fxFlex.lt-lg","fxFlex.lt-xl":"fxFlex.lt-xl","fxFlex.gt-xs":"fxFlex.gt-xs","fxFlex.gt-sm":"fxFlex.gt-sm","fxFlex.gt-md":"fxFlex.gt-md","fxFlex.gt-lg":"fxFlex.gt-lg"},features:[n.wb]}),t})();const T=n.Ob(V),_=new Map,I=new Map,D=new Map,R=new Map;new Map,new Map,new Map,new Map,new Map,new Map,new Map;let W=(()=>{class t extends s.h{buildStyles(t,e){const i={},[n,s]=t.split(" ");switch(n){case"center":i["justify-content"]="center";break;case"space-around":i["justify-content"]="space-around";break;case"space-between":i["justify-content"]="space-between";break;case"space-evenly":i["justify-content"]="space-evenly";break;case"end":case"flex-end":i["justify-content"]="flex-end";break;case"start":case"flex-start":default:i["justify-content"]="flex-start"}switch(s){case"start":case"flex-start":i["align-items"]=i["align-content"]="flex-start";break;case"center":i["align-items"]=i["align-content"]="center";break;case"end":case"flex-end":i["align-items"]=i["align-content"]="flex-end";break;case"space-between":i["align-content"]="space-between",i["align-items"]="stretch";break;case"space-around":i["align-content"]="space-around",i["align-items"]="stretch";break;case"baseline":i["align-content"]="stretch",i["align-items"]="baseline";break;case"stretch":default:i["align-items"]=i["align-content"]="stretch"}return F(i,{display:e.inline?"inline-flex":"flex","flex-direction":e.layout,"box-sizing":"border-box","max-width":"stretch"===s?h(e.layout)?null:"100%":null,"max-height":"stretch"===s&&h(e.layout)?"100%":null})}}return t.\u0275fac=function(e){return $(e||t)},t.\u0275prov=Object(n.Fb)({factory:function(){return new t},token:t,providedIn:"root"}),t})();const $=n.Ob(W),N=["fxLayoutAlign","fxLayoutAlign.xs","fxLayoutAlign.sm","fxLayoutAlign.md","fxLayoutAlign.lg","fxLayoutAlign.xl","fxLayoutAlign.lt-sm","fxLayoutAlign.lt-md","fxLayoutAlign.lt-lg","fxLayoutAlign.lt-xl","fxLayoutAlign.gt-xs","fxLayoutAlign.gt-sm","fxLayoutAlign.gt-md","fxLayoutAlign.gt-lg"];let J=(()=>{class t extends s.b{constructor(t,e,i,n){super(t,i,e,n),this.DIRECTIVE_KEY="layout-align",this.layout="row",this.inline=!1,this.init(),this.marshal.trackValue(this.nativeElement,"layout").pipe(Object(o.a)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this))}updateWithValue(t){const e=this.layout||"row",i=this.inline;"row"===e&&i?this.styleCache=X:"row"!==e||i?"row-reverse"===e&&i?this.styleCache=tt:"row-reverse"!==e||i?"column"===e&&i?this.styleCache=Z:"column"!==e||i?"column-reverse"===e&&i?this.styleCache=et:"column-reverse"!==e||i||(this.styleCache=q):this.styleCache=z:this.styleCache=Y:this.styleCache=U,this.addStyles(t,{layout:e,inline:i})}onLayoutChange(t){const e=t.value.split(" ");this.layout=e[0],this.inline=t.value.includes("inline"),u.find(t=>t===this.layout)||(this.layout="row"),this.triggerUpdate()}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(n.l),n.Jb(s.i),n.Jb(W),n.Jb(s.f))},t.\u0275dir=n.Eb({type:t,features:[n.wb]}),t})(),H=(()=>{class t extends J{constructor(){super(...arguments),this.inputs=N}}return t.\u0275fac=function(e){return K(e||t)},t.\u0275dir=n.Eb({type:t,selectors:[["","fxLayoutAlign",""],["","fxLayoutAlign.xs",""],["","fxLayoutAlign.sm",""],["","fxLayoutAlign.md",""],["","fxLayoutAlign.lg",""],["","fxLayoutAlign.xl",""],["","fxLayoutAlign.lt-sm",""],["","fxLayoutAlign.lt-md",""],["","fxLayoutAlign.lt-lg",""],["","fxLayoutAlign.lt-xl",""],["","fxLayoutAlign.gt-xs",""],["","fxLayoutAlign.gt-sm",""],["","fxLayoutAlign.gt-md",""],["","fxLayoutAlign.gt-lg",""]],inputs:{fxLayoutAlign:"fxLayoutAlign","fxLayoutAlign.xs":"fxLayoutAlign.xs","fxLayoutAlign.sm":"fxLayoutAlign.sm","fxLayoutAlign.md":"fxLayoutAlign.md","fxLayoutAlign.lg":"fxLayoutAlign.lg","fxLayoutAlign.xl":"fxLayoutAlign.xl","fxLayoutAlign.lt-sm":"fxLayoutAlign.lt-sm","fxLayoutAlign.lt-md":"fxLayoutAlign.lt-md","fxLayoutAlign.lt-lg":"fxLayoutAlign.lt-lg","fxLayoutAlign.lt-xl":"fxLayoutAlign.lt-xl","fxLayoutAlign.gt-xs":"fxLayoutAlign.gt-xs","fxLayoutAlign.gt-sm":"fxLayoutAlign.gt-sm","fxLayoutAlign.gt-md":"fxLayoutAlign.gt-md","fxLayoutAlign.gt-lg":"fxLayoutAlign.gt-lg"},features:[n.wb]}),t})();const K=n.Ob(H),U=new Map,z=new Map,Y=new Map,q=new Map,X=new Map,Z=new Map,tt=new Map,et=new Map;let it=(()=>{class t{}return t.\u0275mod=n.Hb({type:t}),t.\u0275inj=n.Gb({factory:function(e){return new(e||t)},imports:[[s.c,r.a]]}),t})()},YUcS:function(t,e,i){"use strict";i.d(e,"a",function(){return u});var n=i("8Y7J"),s=i("SVse"),r=i("pD6V");i("8LU1"),i("1G5W"),i("cUpR"),new Map,new WeakMap;let a=(()=>{class t{}return t.\u0275mod=n.Hb({type:t}),t.\u0275inj=n.Gb({factory:function(e){return new(e||t)},imports:[[r.c]]}),t})();var o=i("XiUz");new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map,new Map;let l=(()=>{class t{}return t.\u0275mod=n.Hb({type:t}),t.\u0275inj=n.Gb({factory:function(e){return new(e||t)},imports:[[r.c]]}),t})();new n.O("11.0.0-beta.33");let u=(()=>{class t{constructor(t,e){Object(s.p)(e)&&!t&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(e,i=[]){return{ngModule:t,providers:e.serverLoaded?[{provide:r.e,useValue:Object.assign(Object.assign({},r.d),e)},{provide:r.a,useValue:i,multi:!0},{provide:r.g,useValue:!0}]:[{provide:r.e,useValue:Object.assign(Object.assign({},r.d),e)},{provide:r.a,useValue:i,multi:!0}]}}}return t.\u0275mod=n.Hb({type:t}),t.\u0275inj=n.Gb({factory:function(e){return new(e||t)(n.Qb(r.g),n.Qb(n.B))},imports:[[o.e,a,l],o.e,a,l]}),t})()},pD6V:function(t,e,i){"use strict";i.d(e,"c",function(){return p}),i.d(e,"d",function(){return x}),i.d(e,"e",function(){return g}),i.d(e,"g",function(){return m}),i.d(e,"a",function(){return b}),i.d(e,"b",function(){return k}),i.d(e,"i",function(){return K}),i.d(e,"h",function(){return U}),i.d(e,"j",function(){return z}),i.d(e,"f",function(){return q});var n=i("8Y7J"),s=i("SVse"),r=i("XNiG"),a=i("2Vo4"),o=i("HDdC"),l=i("VRyK"),u=(i("7Hc7"),i("LRne"),i("xgIS"),i("pLZG")),c=(i("lJxs"),i("Kj3r"),i("eIep"),i("1G5W"),i("IzEk"),i("vkgz"));const h={provide:n.b,useFactory:function(t,e){return()=>{if(Object(s.o)(e)){const e=Array.from(t.querySelectorAll(`[class*=${f}]`)),i=/\bflex-layout-.+?\b/g;e.forEach(t=>{t.classList.contains(f+"ssr")&&t.parentNode?t.parentNode.removeChild(t):t.className.replace(i,"")})}}},deps:[s.c,n.B],multi:!0},f="flex-layout-";let p=(()=>{class t{}return t.\u0275mod=n.Hb({type:t}),t.\u0275inj=n.Gb({factory:function(e){return new(e||t)},providers:[h]}),t})();class d{constructor(t=!1,e="all",i="",n="",s=0){this.matches=t,this.mediaQuery=e,this.mqAlias=i,this.suffix=n,this.priority=s,this.property=""}clone(){return new d(this.matches,this.mediaQuery,this.mqAlias,this.suffix)}}let y=(()=>{class t{constructor(){this.stylesheet=new Map}addStyleToElement(t,e,i){const n=this.stylesheet.get(t);n?n.set(e,i):this.stylesheet.set(t,new Map([[e,i]]))}clearStyles(){this.stylesheet.clear()}getStyleForElement(t,e){const i=this.stylesheet.get(t);let n="";if(i){const t=i.get(e);"number"!=typeof t&&"string"!=typeof t||(n=t+"")}return n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(n.Fb)({factory:function(){return new t},token:t,providedIn:"root"}),t})();const x={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[]},g=new n.q("Flex Layout token, config options for the library",{providedIn:"root",factory:()=>x}),m=new n.q("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),b=new n.q("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:()=>null});function w(t,e){return t=t?t.clone():new d,e&&(t.mqAlias=e.alias,t.mediaQuery=e.mediaQuery,t.suffix=e.suffix,t.priority=e.priority),t}const v="inline",L=["row","column","row-reverse","column-reverse"];function E(t){if(t)switch(t.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":t="wrap-reverse";break;case"no":case"none":case"nowrap":t="nowrap";break;default:t="wrap"}return t}let k=(()=>{class t{constructor(t,e,i,n){this.elementRef=t,this.styleBuilder=e,this.styler=i,this.marshal=n,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new r.a,this.styleCache=new Map}get parentElement(){return this.elementRef.nativeElement.parentElement}get nativeElement(){return this.elementRef.nativeElement}get activatedValue(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)}set activatedValue(t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,this.marshal.activatedAlias)}ngOnChanges(t){Object.keys(t).forEach(e=>{if(-1!==this.inputs.indexOf(e)){const i=e.split(".").slice(1).join(".");this.setValue(t[e].currentValue,i)}})}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)}init(t=[]){this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),t)}addStyles(t,e){const i=this.styleBuilder,n=i.shouldCache;let s=this.styleCache.get(t);s&&n||(s=i.buildStyles(t,e),n&&this.styleCache.set(t,s)),this.mru=Object.assign({},s),this.applyStyleToElement(s),i.sideEffect(t,s,e)}clearStyles(){Object.keys(this.mru).forEach(t=>{this.mru[t]=""}),this.applyStyleToElement(this.mru),this.mru={}}triggerUpdate(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)}getFlexFlowDirection(t,e=!1){if(t){const[i,n]=this.styler.getFlowDirection(t);if(!n&&e){const e=function(t){let[e,i,n]=function(t){t=t?t.toLowerCase():"";let[e,i,n]=t.split(" ");return L.find(t=>t===e)||(e=L[0]),i===v&&(i=n!==v?n:"",n=v),[e,E(i),!!n]}(t);return function(t,e=null,i=!1){return{display:i?"inline-flex":"flex","box-sizing":"border-box","flex-direction":t,"flex-wrap":e||null}}(e,i,n)}(i);this.styler.applyStyleToElements(e,[t])}return i.trim()}return"row"}hasWrap(t){return this.styler.hasWrap(t)}applyStyleToElement(t,e,i=this.nativeElement){this.styler.applyStyleToElement(i,t,e)}setValue(t,e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,e)}updateWithValue(t){this.currentValue!==t&&(this.addStyles(t),this.currentValue=t)}}return t.\u0275fac=function(t){n.Tb()},t.\u0275dir=n.Eb({type:t,features:[n.xb]}),t})();const A=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.98px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.98px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.98px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.98px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.98px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.98px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.98px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.98px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.98px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],S="(orientation: portrait) and (max-width: 599.98px)",O="(orientation: landscape) and (max-width: 959.98px)",M="(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)",j="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)",Q="(orientation: portrait) and (min-width: 840px)",B="(orientation: landscape) and (min-width: 1280px)",F={HANDSET:`${S}, ${O}`,TABLET:`${M} , ${j}`,WEB:`${Q}, ${B} `,HANDSET_PORTRAIT:""+S,TABLET_PORTRAIT:M+" ",WEB_PORTRAIT:""+Q,HANDSET_LANDSCAPE:""+O,TABLET_LANDSCAPE:""+j,WEB_LANDSCAPE:""+B},C=[{alias:"handset",priority:2e3,mediaQuery:F.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:F.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:F.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:F.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:F.TABLET_LANDSCAPE},{alias:"tablet.portrait",priority:2100,mediaQuery:F.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:F.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:F.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:F.WEB_PORTRAIT,overlapping:!0}],G=/(\.|-|_)/g;function P(t){let e=t.length>0?t.charAt(0):"",i=t.length>1?t.slice(1):"";return e.toUpperCase()+i}const V=new n.q("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:()=>{const t=Object(n.U)(b),e=Object(n.U)(g),i=[].concat.apply([],(t||[]).map(t=>Array.isArray(t)?t:[t]));return function(t,e=[]){const i={};return t.forEach(t=>{i[t.alias]=t}),e.forEach(t=>{i[t.alias]?function(t,...e){if(null==t)throw TypeError("Cannot convert undefined or null to object");for(let i of e)if(null!=i)for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e])}(i[t.alias],t):i[t.alias]=t}),(n=Object.keys(i).map(t=>i[t])).forEach(t=>{t.suffix||(t.suffix=t.alias.replace(G,"|").split("|").map(P).join(""),t.overlapping=!!t.overlapping)}),n;var n}((e.disableDefaultBps?[]:A).concat(e.addOrientationBps?C:[]),i)}});function T(t,e){return(e&&e.priority||0)-(t&&t.priority||0)}function _(t,e){return(t.priority||0)-(e.priority||0)}let I=(()=>{class t{constructor(t){this.findByMap=new Map,this.items=[...t].sort(_)}findByAlias(t){return t?this.findWithPredicate(t,e=>e.alias==t):null}findByQuery(t){return this.findWithPredicate(t,e=>e.mediaQuery==t)}get overlappings(){return this.items.filter(t=>1==t.overlapping)}get aliases(){return this.items.map(t=>t.alias)}get suffixes(){return this.items.map(t=>t.suffix?t.suffix:"")}findWithPredicate(t,e){let i=this.findByMap.get(t);return i||(i=this.items.find(e)||null,this.findByMap.set(t,i)),i||null}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(V))},t.\u0275prov=Object(n.Fb)({factory:function(){return new t(Object(n.Qb)(V))},token:t,providedIn:"root"}),t})(),D=(()=>{class t{constructor(t,e,i){this._zone=t,this._platformId=e,this._document=i,this.source=new a.a(new d(!0)),this.registry=new Map,this.pendingRemoveListenerFns=[],this._observable$=this.source.asObservable()}get activations(){const t=[];return this.registry.forEach((e,i)=>{e.matches&&t.push(i)}),t}isActive(t){const e=this.registry.get(t);return e?e.matches:this.registerQuery(t).some(t=>t.matches)}observe(t,e=!1){if(t&&t.length){const i=this._observable$.pipe(Object(u.a)(i=>!e||t.indexOf(i.mediaQuery)>-1)),n=new o.a(e=>{const i=this.registerQuery(t);if(i.length){const t=i.pop();i.forEach(t=>{e.next(t)}),this.source.next(t)}e.complete()});return Object(l.a)(n,i)}return this._observable$}registerQuery(t){const e=Array.isArray(t)?t:[t],i=[];return function(t,e){const i=t.filter(t=>!R[t]);if(i.length>0){const t=i.join(", ");try{const n=e.createElement("style");n.setAttribute("type","text/css"),n.styleSheet||n.appendChild(e.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${t} {.fx-query-test{ }}\n`)),e.head.appendChild(n),i.forEach(t=>R[t]=n)}catch(n){console.error(n)}}}(e,this._document),e.forEach(t=>{const e=e=>{this._zone.run(()=>this.source.next(new d(e.matches,t)))};let n=this.registry.get(t);n||(n=this.buildMQL(t),n.addListener(e),this.pendingRemoveListenerFns.push(()=>n.removeListener(e)),this.registry.set(t,n)),n.matches&&i.push(new d(!0,t))}),i}ngOnDestroy(){let t;for(;t=this.pendingRemoveListenerFns.pop();)t()}buildMQL(t){return function(t,e){return e&&window.matchMedia("all").addListener?window.matchMedia(t):{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{},onchange:null,addEventListener(){},removeEventListener(){},dispatchEvent:()=>!1}}(t,Object(s.o)(this._platformId))}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(n.z),n.Qb(n.B),n.Qb(s.c))},t.\u0275prov=Object(n.Fb)({factory:function(){return new t(Object(n.Qb)(n.z),Object(n.Qb)(n.B),Object(n.Qb)(s.c))},token:t,providedIn:"root"}),t})();const R={},W="print",$={alias:W,mediaQuery:W,priority:1e3};let N=(()=>{class t{constructor(t,e,i){this.breakpoints=t,this.layoutConfig=e,this._document=i,this.registeredBeforeAfterPrintHooks=!1,this.isPrintingBeforeAfterEvent=!1,this.beforePrintEventListeners=[],this.afterPrintEventListeners=[],this.isPrinting=!1,this.queue=new J,this.deactivations=[]}withPrintQuery(t){return[...t,W]}isPrintEvent(t){return t.mediaQuery.startsWith(W)}get printAlias(){return this.layoutConfig.printWithBreakpoints||[]}get printBreakPoints(){return this.printAlias.map(t=>this.breakpoints.findByAlias(t)).filter(t=>null!==t)}getEventBreakpoints({mediaQuery:t}){const e=this.breakpoints.findByQuery(t);return(e?[...this.printBreakPoints,e]:this.printBreakPoints).sort(T)}updateEvent(t){let e=this.breakpoints.findByQuery(t.mediaQuery);return this.isPrintEvent(t)&&(e=this.getEventBreakpoints(t)[0],t.mediaQuery=e?e.mediaQuery:""),w(t,e)}registerBeforeAfterPrintHooks(t){if(!this._document.defaultView||this.registeredBeforeAfterPrintHooks)return;this.registeredBeforeAfterPrintHooks=!0;const e=()=>{this.isPrinting||(this.isPrintingBeforeAfterEvent=!0,this.startPrinting(t,this.getEventBreakpoints(new d(!0,W))),t.updateStyles())},i=()=>{this.isPrintingBeforeAfterEvent=!1,this.isPrinting&&(this.stopPrinting(t),t.updateStyles())};this._document.defaultView.addEventListener("beforeprint",e),this._document.defaultView.addEventListener("afterprint",i),this.beforePrintEventListeners.push(e),this.afterPrintEventListeners.push(i)}interceptEvents(t){return this.registerBeforeAfterPrintHooks(t),e=>{this.isPrintEvent(e)?e.matches&&!this.isPrinting?(this.startPrinting(t,this.getEventBreakpoints(e)),t.updateStyles()):e.matches||!this.isPrinting||this.isPrintingBeforeAfterEvent||(this.stopPrinting(t),t.updateStyles()):this.collectActivations(e)}}blockPropagation(){return t=>!(this.isPrinting||this.isPrintEvent(t))}startPrinting(t,e){this.isPrinting=!0,t.activatedBreakpoints=this.queue.addPrintBreakpoints(e)}stopPrinting(t){t.activatedBreakpoints=this.deactivations,this.deactivations=[],this.queue.clear(),this.isPrinting=!1}collectActivations(t){if(!this.isPrinting||this.isPrintingBeforeAfterEvent)if(t.matches)this.isPrintingBeforeAfterEvent||(this.deactivations=[]);else{const e=this.breakpoints.findByQuery(t.mediaQuery);e&&(this.deactivations.push(e),this.deactivations.sort(T))}}ngOnDestroy(){this.beforePrintEventListeners.forEach(t=>this._document.defaultView.removeEventListener("beforeprint",t)),this.afterPrintEventListeners.forEach(t=>this._document.defaultView.removeEventListener("afterprint",t))}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(I),n.Qb(g),n.Qb(s.c))},t.\u0275prov=Object(n.Fb)({factory:function(){return new t(Object(n.Qb)(I),Object(n.Qb)(g),Object(n.Qb)(s.c))},token:t,providedIn:"root"}),t})();class J{constructor(){this.printBreakpoints=[]}addPrintBreakpoints(t){return t.push($),t.sort(T),t.forEach(t=>this.addBreakpoint(t)),this.printBreakpoints}addBreakpoint(t){t&&void 0===this.printBreakpoints.find(e=>e.mediaQuery===t.mediaQuery)&&(this.printBreakpoints=function(t){return!!t&&t.mediaQuery.startsWith(W)}(t)?[t,...this.printBreakpoints]:[...this.printBreakpoints,t])}clear(){this.printBreakpoints=[]}}function H(t){for(let e in t){let i=t[e]||"";switch(e){case"display":t.display="flex"===i?["-webkit-flex","flex"]:"inline-flex"===i?["-webkit-inline-flex","inline-flex"]:i;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":t["-webkit-"+e]=i;break;case"flex-direction":i=i||"row",t["-webkit-flex-direction"]=i,t["flex-direction"]=i;break;case"order":t.order=t["-webkit-"+e]=isNaN(+i)?"0":i}}return t}let K=(()=>{class t{constructor(t,e,i,n){this._serverStylesheet=t,this._serverModuleLoaded=e,this._platformId=i,this.layoutConfig=n}applyStyleToElement(t,e,i=null){let n={};"string"==typeof e&&(n[e]=i,e=n),n=this.layoutConfig.disableVendorPrefixes?e:H(e),this._applyMultiValueStyleToElement(n,t)}applyStyleToElements(t,e=[]){const i=this.layoutConfig.disableVendorPrefixes?t:H(t);e.forEach(t=>{this._applyMultiValueStyleToElement(i,t)})}getFlowDirection(t){const e="flex-direction";let i=this.lookupStyle(t,e);return[i||"row",this.lookupInlineStyle(t,e)||Object(s.p)(this._platformId)&&this._serverModuleLoaded?i:""]}hasWrap(t){return"wrap"===this.lookupStyle(t,"flex-wrap")}lookupAttributeValue(t,e){return t.getAttribute(e)||""}lookupInlineStyle(t,e){return Object(s.o)(this._platformId)?t.style.getPropertyValue(e):this._getServerStyle(t,e)}lookupStyle(t,e,i=!1){let n="";return t&&((n=this.lookupInlineStyle(t,e))||(Object(s.o)(this._platformId)?i||(n=getComputedStyle(t).getPropertyValue(e)):this._serverModuleLoaded&&(n=this._serverStylesheet.getStyleForElement(t,e)))),n?n.trim():""}_applyMultiValueStyleToElement(t,e){Object.keys(t).sort().forEach(i=>{const n=t[i],r=Array.isArray(n)?n:[n];r.sort();for(let t of r)t=t?t+"":"",Object(s.o)(this._platformId)||!this._serverModuleLoaded?Object(s.o)(this._platformId)?e.style.setProperty(i,t):this._setServerStyle(e,i,t):this._serverStylesheet.addStyleToElement(e,i,t)})}_setServerStyle(t,e,i){e=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();const n=this._readStyleAttribute(t);n[e]=i||"",this._writeStyleAttribute(t,n)}_getServerStyle(t,e){return this._readStyleAttribute(t)[e]||""}_readStyleAttribute(t){const e={},i=t.getAttribute("style");if(i){const t=i.split(/;+/g);for(let i=0;i<t.length;i++){const n=t[i].trim();if(n.length>0){const t=n.indexOf(":");if(-1===t)throw new Error("Invalid CSS style: "+n);e[n.substr(0,t).trim()]=n.substr(t+1).trim()}}}return e}_writeStyleAttribute(t,e){let i="";for(const n in e)e[n]&&(i+=n+":"+e[n]+";");t.setAttribute("style",i)}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(y),n.Qb(m),n.Qb(n.B),n.Qb(g))},t.\u0275prov=Object(n.Fb)({factory:function(){return new t(Object(n.Qb)(y),Object(n.Qb)(m),Object(n.Qb)(n.B),Object(n.Qb)(g))},token:t,providedIn:"root"}),t})();class U{constructor(){this.shouldCache=!0}sideEffect(t,e,i){}}function z(t,e="1",i="1"){let n=[e,i,t],s=t.indexOf("calc");if(s>0){n[2]=Y(t.substring(s).trim());let e=t.substr(0,s).trim().split(" ");2==e.length&&(n[0]=e[0],n[1]=e[1])}else if(0==s)n[2]=Y(t.trim());else{let s=t.split(" ");n=3===s.length?s:[e,i,t]}return n}function Y(t){return t.replace(/[\s]/g,"").replace(/[\/\*\+\-]/g," $& ")}let q=(()=>{class t{constructor(t,e,i){this.matchMedia=t,this.breakpoints=e,this.hook=i,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new r.a,this.observeActivations()}get activatedAlias(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""}onMediaChange(t){const e=this.findByQuery(t.mediaQuery);e&&((t=w(t,e)).matches&&-1===this.activatedBreakpoints.indexOf(e)?(this.activatedBreakpoints.push(e),this.activatedBreakpoints.sort(T),this.updateStyles()):t.matches||-1===this.activatedBreakpoints.indexOf(e)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(e),1),this.activatedBreakpoints.sort(T),this.updateStyles()))}init(t,e,i,n,s=[]){X(this.updateMap,t,e,i),X(this.clearMap,t,e,n),this.buildElementKeyMap(t,e),this.watchExtraTriggers(t,e,s)}getValue(t,e,i){const n=this.elementMap.get(t);if(n){const t=void 0!==i?n.get(i):this.getActivatedValues(n,e);if(t)return t.get(e)}}hasValue(t,e){const i=this.elementMap.get(t);if(i){const t=this.getActivatedValues(i,e);if(t)return void 0!==t.get(e)||!1}return!1}setValue(t,e,i,n){let s=this.elementMap.get(t);if(s){const r=(s.get(n)||new Map).set(e,i);s.set(n,r),this.elementMap.set(t,s)}else s=(new Map).set(n,(new Map).set(e,i)),this.elementMap.set(t,s);const r=this.getValue(t,e);void 0!==r&&this.updateElement(t,e,r)}trackValue(t,e){return this.subject.asObservable().pipe(Object(u.a)(i=>i.element===t&&i.key===e))}updateStyles(){this.elementMap.forEach((t,e)=>{const i=new Set(this.elementKeyMap.get(e));let n=this.getActivatedValues(t);n&&n.forEach((t,n)=>{this.updateElement(e,n,t),i.delete(n)}),i.forEach(i=>{if(n=this.getActivatedValues(t,i),n){const t=n.get(i);this.updateElement(e,i,t)}else this.clearElement(e,i)})})}clearElement(t,e){const i=this.clearMap.get(t);if(i){const n=i.get(e);n&&(n(),this.subject.next({element:t,key:e,value:""}))}}updateElement(t,e,i){const n=this.updateMap.get(t);if(n){const s=n.get(e);s&&(s(i),this.subject.next({element:t,key:e,value:i}))}}releaseElement(t){const e=this.watcherMap.get(t);e&&(e.forEach(t=>t.unsubscribe()),this.watcherMap.delete(t));const i=this.elementMap.get(t);i&&(i.forEach((t,e)=>i.delete(e)),this.elementMap.delete(t))}triggerUpdate(t,e){const i=this.elementMap.get(t);if(i){const n=this.getActivatedValues(i,e);n&&(e?this.updateElement(t,e,n.get(e)):n.forEach((e,i)=>this.updateElement(t,i,e)))}}buildElementKeyMap(t,e){let i=this.elementKeyMap.get(t);i||(i=new Set,this.elementKeyMap.set(t,i)),i.add(e)}watchExtraTriggers(t,e,i){if(i&&i.length){let n=this.watcherMap.get(t);if(n||(n=new Map,this.watcherMap.set(t,n)),!n.get(e)){const s=Object(l.a)(...i).subscribe(()=>{const i=this.getValue(t,e);this.updateElement(t,e,i)});n.set(e,s)}}}findByQuery(t){return this.breakpoints.findByQuery(t)}getActivatedValues(t,e){for(let n=0;n<this.activatedBreakpoints.length;n++){const i=t.get(this.activatedBreakpoints[n].alias);if(i&&(void 0===e||i.has(e)&&null!=i.get(e)))return i}const i=t.get("");return void 0===e||i&&i.has(e)?i:void 0}observeActivations(){const t=this.breakpoints.items.map(t=>t.mediaQuery);this.matchMedia.observe(this.hook.withPrintQuery(t)).pipe(Object(c.a)(this.hook.interceptEvents(this)),Object(u.a)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(D),n.Qb(I),n.Qb(N))},t.\u0275prov=Object(n.Fb)({factory:function(){return new t(Object(n.Qb)(D),Object(n.Qb)(I),Object(n.Qb)(N))},token:t,providedIn:"root"}),t})();function X(t,e,i,n){if(void 0!==n){let s=t.get(e);s||(s=new Map,t.set(e,s)),s.set(i,n)}}}}]);