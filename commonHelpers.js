import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";let a=null,s=null;const h=document.querySelector("#datetime-picker"),c=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]"),k={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date,n=t[0];n>e?a=n.getTime():(r(),f.show({position:"topRight",close:!1,messageColor:"white",backgroundColor:"#ff544b",message:"❌ Please choose a date in the future"}))}};m("input#datetime-picker",k);c.addEventListener("click",r);function r(){c.disabled=!0,h.disabled=!0}c.addEventListener("click",()=>{setInterval(()=>{const t=Date.now(),e=a-t;s=o(e),D(s)},1e3)});function o(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:i,seconds:l}}console.log(o(2e3));console.log(o(14e4));console.log(o(2414e4));function D(t){S.textContent=t.days.toString().padStart(2,"0"),p.textContent=t.hours.toString().padStart(2,"0"),y.textContent=t.minutes.toString().padStart(2,"0"),g.textContent=t.seconds.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
