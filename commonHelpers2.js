import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";let t=null;const s=document.querySelector('[name="delay"]');s.addEventListener("input",()=>{t=s.value});let i=null;const r=document.querySelectorAll('[name="state"]');r.forEach(e=>{e.addEventListener("click",()=>{i=e.value})});function a(){return new Promise((e,n)=>{setTimeout(()=>{i==="fulfilled"?e(o.show({messageColor:"white",backgroundColor:"#34c683",position:"topRight",close:!1,message:`✅ Fulfilled promise in ${t} ms`})):n(o.show({messageColor:"white",backgroundColor:"#ff544b",position:"topRight",close:!1,message:`❌ Rejected promise in ${t} ms`}))},t)})}const l=document.querySelector("form");l.addEventListener("submit",m);function m(e){e.preventDefault(),a(),l.reset()}
//# sourceMappingURL=commonHelpers2.js.map
