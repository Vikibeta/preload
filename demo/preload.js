var Preload=function(e){"use strict";var t,n,r=e.sources||null,a=e.connector||null,o=e.progress||function(){},u=e.completeLoad||function(){},i=0,c=0,l=0,s=0,f=[],h=[],d=[],g=["jpg","png","gif"],t={xhr:null,timeOut:e.loadingOverTime||15,timeOutCB:e.loadingOverTimeCB||function(){},id:0,max:3},p=document.getElementsByTagName("head")[0],m=[],v=[],x=function(){b(),null!=a&&M(),y(f[0],h[0],d)},X=function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject){if("string"!=typeof arguments.callee.activeXString){var e,t,n=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];for(e=0,t=n.length;t>e;e++)try{new ActiveXObject(n[e]),arguments.callee.activeXString=n[e];break}catch(r){}}return new ActiveXObject(arguments.callee.activeXString)}throw new Error("No XHR object available.")}(),b=function(){if(null!==r){n=Object.getOwnPropertyNames(r).length;for(var e in r){for(var t=0,a=r[e].source.length;a>t;t++)f.push(r[e].source[t]);d.push(r[e].source.length),h.push("undefined"==typeof r[e].callback?null:r[e].callback)}for(var e=1,a=d.length;a>e;e++)d[e]=d[e-1]+d[e];c=f.length,m=document.getElementsByTagName("img");for(var e=0,a=m.length;a>e;e++)m[e].attributes.pSrc&&(v[e]=m[e].attributes.pSrc.value)}},y=function(e,r,a){if(l>=a[s]&&(null!=h[s]&&h[s](),++s),s>=n)return void u();if(O(e)){var d=new Image,g=setTimeout(function(){t.timeOutCB()},1e3*t.timeOut);d.src=e,d.onload=function(){clearTimeout(g),o(++i,c);for(var t=0,n=v.length;n>t;t++)if(v[t]==e){m[t].src=v[t];break}y(f[++l],r,a)},d.onerror=function(){o(++i,c),y(f[++l],r,a)}}else t.xhr=X,t.xhr.onreadystatechange=function(){4==t.xhr.readyState?(t.xhr.status>=200&&t.xhr.status<300||304===t.xhr.status)&&(o(++i,c),y(f[++l],r,a)):t.xhr.status>=400&&t.xhr.status<500&&(o(++i,c),y(f[++l],r,a))},t.xhr.open("GET",e,!0),t.xhr.send(null)},M=function(){for(var e in a)a[e].jsonp?w(a[e].url):S(a[e].url,a[e].callback)},O=function(e){for(var t=e.split(".").pop(),n=0,r=g.length;r>n;n++)if(t==g[n])return!0;return!1},S=function(e,n){t.xhr=X,t.xhr.onreadystatechange=function(){4==t.xhr.readyState&&(t.xhr.status>=200&&t.xhr.status<300||304===t.xhr.status)&&n(t.xhr.responseText)},t.xhr.open("GET",e,!0),t.xhr.send(null)},w=function(e){var t=document.createElement("script");t.src=e,p.appendChild(t)};x()};"object"==typeof module?module.exports=Preload:window.Preload=Preload;