import{c as _,d as f,g as b,a as l,i,b as m,t as u,f as p,e as S,r as C}from"./entry-client-66f42a9f.js";const k=u('<button><div text-base=""></div><!#><!/></button>',6),w=u('<div grid="" gap-5=""><div flex="" flex-wrap="" class="[&amp;_*]:rounded-lg [&amp;_button]:p-3 [&amp;_button]:w-fit vertCentered !gap-3"><!#><!/><!#><!/><!#><!/></div><pre class="hljs"></pre></div>',12),[N,E]=_("Linux / Macos"),v="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",M="git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim",O=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[D,L]=_(v),g=s=>{const{cmd:t,os:n,icon:o}=s;return(()=>{const e=b(k),a=e.firstChild,c=a.nextSibling,[d,r]=l(c.nextSibling);return e.$$click=()=>{E(n),L(t)},p(a,o),i(e,n,d,r),S(()=>p(e,`!text-vsm ${N()==n?"text-white-1 bg-blue-6 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`)),C(),e})()},H=()=>(()=>{const s=b(w),t=s.firstChild,n=t.firstChild,[o,e]=l(n.nextSibling),a=o.nextSibling,[c,d]=l(a.nextSibling),r=c.nextSibling,[$,h]=l(r.nextSibling),x=t.nextSibling;return i(t,m(g,{os:"Linux / Macos",cmd:v,icon:"i-mingcute:hashtag-fill"}),o,e),i(t,m(g,{os:"Windows",cmd:M,icon:"i-mdi:windows"}),c,d),i(t,m(g,{os:"Docker",cmd:O,icon:"i-nonicons:docker-16"}),$,h),i(x,D),s})();f(["click"]);export{H as O,L as a,O as d,E as s};
