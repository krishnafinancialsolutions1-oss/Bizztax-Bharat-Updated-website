(function(){
var hd=document.getElementById('hd');
addEventListener('scroll',function(){hd.classList.toggle('on',scrollY>8)},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
var tabs=document.querySelectorAll('.tl button'),panels=document.querySelectorAll('.panel');
tabs.forEach(function(b){b.addEventListener('click',function(){var t=b.dataset.t;tabs.forEach(function(x){x.setAttribute('aria-selected',x===b)});panels.forEach(function(p){p.hidden=p.dataset.p!==t})})});

var tl=document.getElementById('tilt'),sh=document.querySelector('.sh');
if(tl){var rx=0,ry=0,tX=0,tY=0,drag=false,hov=false,sx=0,sy=0,bX=0,bY=0,still=matchMedia('(prefers-reduced-motion:reduce)').matches,
sc=innerWidth>860?1.1:1,cl=function(v,a){return Math.max(-a,Math.min(a,v))};
tl.addEventListener('pointerdown',function(e){drag=true;sx=e.clientX;sy=e.clientY;bX=tX;bY=tY;try{tl.setPointerCapture(e.pointerId)}catch(x){}});
tl.addEventListener('pointermove',function(e){
if(drag){tY=cl(bY+(e.clientX-sx)*.45,45);tX=cl(bX-(e.clientY-sy)*.25,22)}
else{var b=tl.getBoundingClientRect();tY=((e.clientX-b.left)/b.width-.5)*36;tX=-((e.clientY-b.top)/b.height-.5)*16}});
tl.addEventListener('pointerenter',function(){hov=true});
tl.addEventListener('pointerleave',function(){hov=false});
function up(){drag=false}
tl.addEventListener('pointerup',up);tl.addEventListener('pointercancel',up);
function frame(t){
if(!drag&&!hov&&!still){tY=Math.sin(t/1900)*22;tX=Math.sin(t/2600)*5}
ry+=(tY-ry)*.07;rx+=(tX-rx)*.07;
tl.style.transform='rotateX('+rx.toFixed(2)+'deg) rotateY('+ry.toFixed(2)+'deg) scale('+sc+')';
if(sh)sh.style.transform='translateX('+(-ry*.8).toFixed(1)+'px) scaleX('+(1-Math.abs(ry)/160).toFixed(3)+')';
requestAnimationFrame(frame)}
requestAnimationFrame(frame)}
})();
