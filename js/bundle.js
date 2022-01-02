(()=>{"use strict";document.querySelector(".js-preloader")&&(window.onload=function(){document.querySelector(".js-preloader").style.display="none"});var e=e=>Array.isArray(e),t=t=>e(t)?t:[t],n=e=>Array.from(e),i=e=>document.createTextNode(e);const s=e=>([...e.childNodes].forEach((e=>{if(e.nodeValue)return[...e.nodeValue].forEach((t=>{e.parentNode.insertBefore(i(t),e)})),void e.remove();s(e)})),e);var r=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,s(t.body)};const o="ti-cursor",a="START",l={started:!1,completed:!1,frozen:!1,destroyed:!1},c={breakLines:!0,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}};function d(e,t=!1){const n=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:e=>{var t;return(null==(t=null==e?void 0:e.classList)?void 0:t.contains(o))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});let i,s=[];for(;i=n.nextNode();)i.originalParent=i.parentNode,s.push(i);return t?s.reverse():s}function u(e,t=!0){return t?d(r(e)):n(e).map(i)}var p=e=>document.createElement(e),m=(e,t="")=>{let n=p("style");n.id=t,n.appendChild(i(e)),document.head.appendChild(n)};const y=e=>Number.isInteger(e),h=(e,t=document,n=!1)=>t["querySelector"+(n?"All":"")](e);var f=e=>"value"in e;const v=e=>f(e)?n(e.value):d(e,!0).filter((e=>!(e.childNodes.length>0)));var g=({el:e,move:t,cursorPos:n,to:i})=>{if(y(t))return-1*t;let s=((e,t,n=a)=>{let i=new RegExp("END","i").test(n),s=d(e?h(e,t):t,!0),r=s[0],o=s[s.length-1],l=i&&!e?0:v(t).findIndex((e=>e.isSameNode(i?r:o)));return i&&l--,l+1})(t,e,i);return s-n},b=t=>(e(t)||(t=[t/2,t/2]),t),L=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let w=e=>e/2;const S=e=>"function"==typeof e?e():e;var q=(e,t)=>Object.assign({},e,t),E=e=>{if(!e)return;const t=e.parentNode;(t.childNodes.length>1?e:t).remove()};const k={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"","margin-left":"-.125em","margin-right":".125em"};document.querySelector(".js-type-it-title")&&new function(e,n={}){const i=async(e,t,n=!1)=>{W.frozen&&await new Promise((e=>{this.unfreeze=()=>{W.frozen=!1,e()}})),n||await F.beforeStep(this),await(async(e,t,n)=>new Promise((i=>{n.push(setTimeout((async()=>{await e(),i()}),t))})))(e,t,B),n||await F.afterStep(this)},d=()=>f(A),_=e=>function(e){let{speed:t,deleteSpeed:n,lifeLike:i}=e;return n=null!==n?n:t/3,i?[L(t,w(t)),L(n,w(n))]:[t,n]}(F)[e],$=()=>v(A),T=(e,t=0)=>e?_(t):0,z=(e,t)=>(U.add(e),((e={})=>{let t=e.delay;t&&U.add((()=>x(t)))})(t),this),j=(e={})=>[()=>I(e),()=>I(F)],D=e=>{let t=F.nextStringDelay;U.add([()=>x(t[0]),...e,()=>x(t[1])])},N=e=>{J&&(Q.classList.toggle("disabled",e),Q.classList.toggle("with-delay",!e))},M=async()=>{W.started=!0;let e=U.getItems();try{for(let t=0;t<e.length;t++)await e[t](),U.markDone(t),N(!1);if(W.completed=!0,await F.afterComplete(this),!F.loop)throw"";let t=F.loopDelay;i((async()=>{await(async e=>{V&&await C({value:V}),U.reset(),U.set(0,(()=>x(e))),await P({num:null})})(t[0]),M()}),t[1])}catch(e){}return this},x=(e=0)=>i((()=>{}),e),C=async({value:e,to:t=a,instant:n=!1})=>{N(!0);let s=g({el:A,move:e,cursorPos:V,to:t}),r=()=>{var e,t,n;e=s<0?-1:1,t=V,n=$(),V=Math.min(Math.max(t+e,0),n.length),((e,t,n)=>{let i=t[n-1],s=h(".ti-cursor",e);(e=(null==i?void 0:i.parentNode)||e).insertBefore(s,i||null)})(A,$(),V)};await i((async()=>{for(let e=0;e<Math.abs(s);e++)n?r():await i(r,_(0))}),T(n))},H=({chars:e,silent:t=!1,instant:n=!1})=>(N(!0),i((async()=>{const s=e=>((e,t)=>{if(f(e))return void(e.value=`${e.value}${t.textContent}`);t.innerHTML="";let n="BODY"===(null==(i=t.originalParent)?void 0:i.tagName)?e:t.originalParent||e;var i;n.insertBefore(t,h(".ti-cursor",n)||null)})(A,e);t||await F.beforeString(e,this);for(let t of e)n||/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML)?s(t):await i((()=>s(t)),_(0));t||await F.afterString(e,this)}),T(n),!0)),I=async e=>{F=q(F,e)},R=async()=>{d()?A.value="":$().forEach((e=>{E(e)}))},P=async({num:e=null,instant:t=!1,to:n=a})=>{N(!0),await i((async()=>{let s=y(e)||d()?e:g({el:A,move:e,cursorPos:V,to:n});const r=()=>{let e=$();e.length&&(d()?A.value=A.value.slice(0,-1):E(e[V]))};for(let e=0;e<s;e++)t?r():await i(r,_(1))}),T(t,1)),null===e&&$().length-1>0&&await P({num:null})};this.break=function(e){return z((()=>H({chars:[p("BR")],silent:!0})),e)},this.delete=function(e=null,t={}){e=S(e);let n=j(t),i=e,{instant:s,to:r}=t;return z([n[0],()=>P({num:i,instant:s,to:r}),n[1]],t)},this.empty=function(e={}){return z(R,e)},this.exec=function(e,t){let n=j(t);return z([n[0],e,n[1]],t)},this.move=function(e,t={}){e=S(e);let n=j(t),{instant:i,to:s}=t,r={value:null===e?"":e,to:s,instant:i};return z([n[0],()=>C(r),n[1]],t)},this.options=function(e){return e=S(e),z((()=>I(e)),e)},this.pause=function(e,t={}){return z((()=>x(S(e))),t)},this.type=function(e,t={}){e=S(e);let n=j(t),i=u(e,F.html),{instant:s}=t,r=[n[0],()=>H({chars:i,instant:s}),n[1]];return z(r,t)},this.is=function(e){return W[e]},this.destroy=function(e=!0){B.forEach((e=>clearTimeout(e))),B=[],S(e)&&E(Q),W.destroyed=!0},this.freeze=function(){W.frozen=!0},this.unfreeze=function(){},this.reset=function(){!this.is("destroyed")&&this.destroy(),U.reset(),V=0;for(let e in W)W[e]=!1;return A[d()?"value":"innerHTML"]="",this},this.go=function(){return W.started?this:((async()=>{!d()&&A.appendChild(Q),J&&((e,t,n)=>{let i=`[data-typeit-id='${e}'] .ti-cursor`,s=getComputedStyle(n),r=Object.entries(k).reduce(((e,[t,n])=>`${e} ${t}: var(--ti-cursor-${t}, ${n||s[t]});`),"");m(`@keyframes blink-${e} { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } ${i} { display: inline; letter-spacing: -1em; ${r} animation: blink-${e} ${t.cursorSpeed/1e3}s infinite; } ${i}.with-delay { animation-delay: 500ms; } ${i}.disabled { animation: none; }`,e)})(Y,F,A)})(),F.waitUntilVisible?(((e,t)=>{new IntersectionObserver(((n,i)=>{n.forEach((n=>{n.isIntersecting&&(t(),i.unobserve(e))}))}),{threshold:1}).observe(e)})(A,M.bind(this)),this):(M(),this))},this.getQueue=()=>U,this.getOptions=()=>F,this.updateOptions=e=>I(e),this.getElement=()=>A;let A="string"==typeof(O=e)?h(O):O;var O;let B=[],V=0,W=q({},l),F=q(c,n);F=q(F,{html:!d()&&F.html,nextStringDelay:b(F.nextStringDelay),loopDelay:b(F.loopDelay)});let Y=Math.random().toString().substring(2,9),U=function(e){const n=function(e){return i=i.concat(t(e)),this};let i=[];return n(e),{add:n,set:function(e,t){i[e]=t},reset:function(){i=i.map((e=>(delete e.done,e)))},getItems:()=>i.filter((e=>!e.done)),markDone:e=>{i[e].done=!0}}}([()=>x(F.startDelay)]);A.dataset.typeitId=Y,m("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}");let J=F.cursor&&!d(),Q=(()=>{if(d())return;let e=p("span");return e.className=o,J?(e.innerHTML=r(F.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)})();F.strings=(e=>{let t=A.innerHTML;return t?(A.innerHTML="",F.startDelete?(A.innerHTML=t,s(A),D([()=>P({num:null})]),e):t.trim().split(/<br(?:\s*?)(?:\/)?>/).concat(e)):e})(t(F.strings)),F.strings.length&&(()=>{let e=F.strings.filter((e=>!!e));e.forEach(((t,n)=>{let i=u(t,F.html);if(U.add((()=>H({chars:i}))),n+1===e.length)return;const s=[F.breakLines?()=>H({chars:[p("BR")],silent:!0}):()=>P({num:i.length})];D(s)}))})()}(".js-type-it-title",{speed:100,startDelay:2e3,waitUntilVisible:!0}).type("Узнай, какой ты овощ").pause(1500).delete(4).type("<s>овощ</s> дол").pause(500).delete(3).pause(500).type("<span>дольщик</span>").go(),function(){if(document.querySelector('a[href*="#"]')){const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const n=t.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))}}(),function(){if(document.querySelector(".quiz")){const e=[{question:"Вопрос 1",answers:[{id:"1",value:"Ответ 1",correct:!0},{id:"2",value:"Ответ 2",correct:!1},{id:"3",value:"Ответ 3",correct:!1},{id:"4",value:"Ответ 4",correct:!1}]},{question:"Вопрос 2",answers:[{id:"5",value:"Ответ 5",correct:!0},{id:"6",value:"Ответ 6",correct:!1},{id:"7",value:"Ответ 7",correct:!1},{id:"8",value:"Ответ 8",correct:!1}]}];let t={};const n=document.querySelector(".quiz"),i=(document.querySelector(".js-indicator"),document.querySelector(".js-questions")),s=document.querySelector(".js-btn-next"),r=document.querySelector(".js-btn-result"),o=document.querySelector(".js-test-result"),a=document.querySelector(".js-gift"),l=document.querySelector(".js-repeat-test"),c=t=>{i.dataset.currentStep=t,i.innerHTML=`\n                <div class="quiz__wrapper-item">\n                    <p class="quiz__question">${e[t].question}</p>\n                    <ul class="quiz__list">${e[t].answers.map((e=>`\n                    <li class="quiz__list-item">\n                        <label class="text quiz__label">\n                            <input type="radio" class="quiz__input" name=${t} value=${e.id}>\n                            <span class="quiz__radio"></span>\n                            ${e.value}\n                        </label>\n                    </li>\n                `)).join("")}</ul>\n                </div>\n                <div class="quiz__wrapper-item">\n                    <p class="quiz__item-text js-indicator">Вопрос ${t+1} из ${e.length}</p>\n                </div>\n            `};n.addEventListener("change",(e=>{e.target.classList.contains("quiz__input")&&(t[e.target.name]=e.target.value,s.disabled=!1,s.classList.add("btn--transparent-black"),s.classList.remove("btn--disabled"))})),n.addEventListener("click",(n=>{if(n.target.classList.contains("js-btn-next")){const n=Number(i.dataset.currentStep)+1;e.length===n?(r.classList.remove("d-none"),s.classList.add("d-none"),o.classList.remove("d-none"),a.classList.remove("d-none"),l.addEventListener("click",(()=>{t={},c(0),o.classList.add("d-none"),a.classList.add("d-none"),r.classList.add("d-none"),s.classList.remove("d-none"),s.classList.remove("btn--transparent-black"),s.classList.add("btn--disabled")}))):(c(n),s.classList.remove("btn--transparent-black"),s.classList.add("btn--disabled")),s.disabled=!0}})),c(0)}}(),function(){if(document.querySelector(".pop-up")){const e=document.querySelector(".pop-up"),t=document.querySelector(".js-modal-open"),n=document.querySelector(".js-modal-close"),i=document.querySelector(".js-modal-content"),s=window.innerWidth-document.documentElement.clientWidth;t.addEventListener("click",(()=>{e.classList.add("pop-up--active"),document.body.style.overflowY="hidden",document.body.style.paddingRight=`${s}px`})),n.addEventListener("click",(()=>{e.classList.remove("pop-up--active"),document.body.style.overflowY="",document.body.style.paddingRight=""})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&e.classList.contains("pop-up--active")&&(e.classList.remove("pop-up--active"),document.body.style.overflowY="",document.body.style.paddingRight="")})),e.addEventListener("click",(t=>{e.classList.remove("pop-up--active"),document.body.style.overflowY="",document.body.style.paddingRight=""})),i.addEventListener("click",(e=>{e.stopPropagation()}))}}(),(new WOW).init()})();
//# sourceMappingURL=bundle.js.map