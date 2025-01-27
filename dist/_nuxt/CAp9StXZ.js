import{_ as d}from"./Bl28FWMR.js";import{c as i,_ as l}from"./BPUhGl-o.js";import{m,c as _,a as o,t as a,b as e,w as s,u as c,o as f,d as u}from"./CqFRfUpL.js";/**
 * @license lucide-vue-next v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=i("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),x={class:"container mx-auto flex flex-col items-center justify-center h-screen"},h={id:"error-code",class:"text-9xl font-bold text-primary"},v={id:"error-msg"},N=m({__name:"errorPage",props:{error:{type:Object,required:!1,default:()=>({code:500,msg:"Unhandle error"})}},setup(t){return(y,r)=>{const n=d;return f(),_("div",x,[o("div",h,a(t.error.code),1),o("div",v,a(t.error.msg),1),e(c(l),{class:"mt-8",variant:"primary"},{default:s(()=>[e(n,{to:"/",class:"flex items-center"},{default:s(()=>[e(c(p),{class:"w-4 h-4 mr-2"}),r[0]||(r[0]=u("回首頁 "))]),_:1})]),_:1})])}}});export{N as default};
