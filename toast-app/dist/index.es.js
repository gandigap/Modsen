import e,{useState as t,useEffect as r,useCallback as a}from"react";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===r&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}(".requirement{align-items:center;display:flex;height:35px}.requirement p{font-family:sans-serif;font-size:14px;font-weight:700;margin-left:10px}.invalid{color:red}.valid{color:#7ac142}.checkmark{stroke-width:5;stroke:#fff;stroke-miterlimit:10;animation:fill .4s ease-in-out .4s forwards,scale .3s ease-in-out .9s both;border-radius:50%;box-shadow:inset 0 0 0 #7ac142;display:block;height:15px;width:15px}.checkmark__circle{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:2;stroke-miterlimit:10;stroke:#7ac142;fill:none;animation:stroke .6s cubic-bezier(.65,0,.45,1) forwards}.checkmark__check{stroke-dasharray:48;stroke-dashoffset:48;animation:stroke .2s cubic-bezier(.65,0,.45,1) .5s forwards;transform-origin:50% 50%}@keyframes stroke{to{stroke-dashoffset:0}}@keyframes scale{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@keyframes fill{to{box-shadow:inset 0 0 0 30px #7ac142}}");const s=()=>e.createElement("svg",{x:"0px",y:"0px",width:"15px",height:"15px",viewBox:"0 0 122.879 122.879",enableBackground:"new 0 0 122.879 122.879"},e.createElement("g",null,e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#FF4141",d:"M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"}))),i=()=>e.createElement("svg",{className:"checkmark",viewBox:"0 0 52 52"},e.createElement("circle",{className:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),e.createElement("path",{className:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})),c=({value:a,requirement:c})=>{const[l,n]=t();return r((()=>{n(c.validator(a))}),[a,c]),e.createElement("div",{className:"requirement"},l?e.createElement(i,null):e.createElement(s,null),e.createElement("p",{className:l?"valid":"invalid"},c.text))},l=({value:t,requirements:s,onValidChange:i})=>{const l=a(i,[]);return r((()=>{l(s.every((e=>e.validator(t))))}),[t,s,l]),s.map(((r,a)=>e.createElement(c,{key:a,value:t,requirement:r,onValidChange:i})))};export{l as Requirements};
