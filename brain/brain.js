"use strict";(()=>{var P=(e,t)=>()=>(e&&(t=e(e=0)),t);var J=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var A=(e,t,s)=>new Promise((i,a)=>{var h=u=>{try{v(s.next(u))}catch(f){a(f)}},c=u=>{try{v(s.throw(u))}catch(f){a(f)}},v=u=>u.done?i(u.value):Promise.resolve(u.value).then(h,c);v((s=s.apply(e,t)).next())});var K,q,k=P(()=>{"use strict";K=e=>{let t=new ArrayBuffer(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t},q=K});var Q,x,H=P(()=>{"use strict";Q=(e,t)=>{let s=Math.sqrt(t),i=440,a=Math.pow(2,1/12),h=Math.floor((e-1)/s)+1;e=e-h*5-17;let c=Math.floor(e/7+2);return(e+7)%7===0?e=e+c*5:(e+6)%7===0?e=e+c*5+1:(e+5)%7===0||(e+4)%7===0?e=e+c*5+2:(e+3)%7===0?e=e+c*5+3:(e+2)%7===0?e=e+c*5+4:(e+1)%7===0&&(e=e+c*5+5),[+(i*Math.pow(a,e)).toFixed(4),+(i*Math.pow(a,e+3)).toFixed(4)]},x=Q});var W,D,O=P(()=>{"use strict";W=(e,t,s)=>{let i=Math.sqrt(e),a=s+i-1,h=s+i,c=s+i+1,v=s-1,u=s+1,f=s-i-1,w=s-i,m=s-i+1;return[a,h,c,v,u,f,w,m].map(b=>t.includes(b)).filter(b=>b!==!1)},D=W});var X=J(C=>{k();H();O();document.addEventListener("DOMContentLoaded",()=>A(C,null,function*(){let e=[...document.querySelectorAll(".pad")],t=[],s=document.querySelector(".grid"),i=e.length,a=document.querySelector(".playButton"),h=document.querySelector(".resetButton"),c=document.querySelector(".modeButton"),v=3,u=2500,f="Mode: Classic",w=!1,m=!1,b,E=0,g=[],R=["sawtooth","sine","square","triangle"],G=window.location.href.includes("file")?"https://cors-anywhere.herokuapp.com/":"",F=yield fetch(`${G}https://jameslewis.io/assets/Output%201-2.wav`),M,U=yield F.arrayBuffer(),B,d=()=>{a.innerHTML=m?"Stop":"Play",s.className=m?"main grid playing":"main grid",c.className=m?"modeButton playing":"modeButton"},N=()=>{m=!1,clearInterval(b),d(),t.forEach(n=>{n.classList.remove("active")}),E=0,g=[],t=[]},_=()=>{if(++E,g.push(t),g.length>2){g.shift();let[n,o]=g.map(r=>r.map(y=>y.id).length>0?r.map(y=>y.id).reduce((y,L)=>y+L):"empty");n===o&&N()}},$=(n,o,r,l)=>{!r&&l===v||r&&(l===v||l===v-1)?(t.includes(n)||t.push(n),r||n.classList.add("active"),n.click()):(t=t.filter(y=>y!==n),r&&n.classList.remove("active"))},j=(n,o,r)=>{Math.floor(Math.random()*10)===0?(t.includes(n)||t.push(n),r||n.classList.add("active"),n.click()):(t=t.filter(l=>l!==n),r&&n.classList.remove("active"))},z=()=>A(C,null,function*(){M=new window.AudioContext;let n=M.createGain();n.gain.value=.12,n.connect(M.destination);let o=M.createConvolver(),r=q(U.slice(0));o.buffer=yield M.decodeAudioData(r).then(l=>l),B=o,w=!0}),S=n=>A(C,null,function*(){let o=M.createOscillator();o.type=R[Math.floor(Math.random()*4)],o.frequency.setValueAtTime(n,M.currentTime),o.connect(B),o.start(),console.log(M,B,o),yield new Promise(l=>setTimeout(l,u*.85)).then(()=>{o.stop(),o.disconnect()})});e.forEach((n,o)=>{let r=i-o,[l,y]=x(r,i);n.id=`${r}`,n.addEventListener("click",()=>{let L=Math.floor(E/4)%2===0?l:y;w?(m||(t.includes(n)?(t=t.filter(V=>V!==n),n.classList.remove("active")):(t.push(n),n.classList.add("active"),S(L))),m&&S(L)):z()})});let T=()=>{let n=t.map(o=>+o.id);e.forEach((o,r)=>{let l=o.classList.contains("active"),y=D(i,n,+o.id).length;f==="Mode: Classic"&&$(o,r,l,y),f==="Mode: Random"&&j(o,r,l)}),_()};a==null||a.addEventListener("click",()=>{m=!m,d(),m===!0?(T(),b=setInterval(()=>T(),u)):clearInterval(b)}),h==null||h.addEventListener("click",()=>{N()}),c==null||c.addEventListener("click",()=>{f==="Mode: Random"?f="Mode: Classic":f="Mode: Random",c.innerHTML=f})}))});X();})();
