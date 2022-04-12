"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8103],{8103:function(e,a,l){l.r(a),l.d(a,{previewSymbol2D:function(){return b}});var t=l(1413),n=l(51995),i=l(10064),o=l(17842),u=l(79563),s=l(37817),r=l(1682),c="picture-fill",m=s.b_.size,h=s.b_.maxSize,d=s.b_.maxOutlineSize,p=s.b_.lineWidth,v=document.createElement("canvas");function f(e,a){var l=v.getContext("2d"),t=[];return a&&(a.weight&&t.push(a.weight),a.size&&t.push(a.size+"px"),a.family&&t.push(a.family)),l.font=t.join(" "),l.measureText(e).width}function y(e){if(0===e.length)return 0;if(e.length>2){var a=(0,o.Wz)(1),l=parseFloat(e);switch(e.slice(-2)){case"px":return l;case"pt":return l*a;case"in":return 72*l*a;case"pc":return 12*l*a;case"mm":return 2.8346456692913384*l*a;case"cm":return 28.346456692913385*l*a}}return parseFloat(e)}function w(e){var a=null==e?void 0:e.size;return{width:null!=a&&"object"==typeof a&&"width"in a?(0,o.F2)(a.width):null,height:null!=a&&"object"==typeof a&&"height"in a?(0,o.F2)(a.height):null}}function b(e,a){var l,v,b="number"==typeof(null==a?void 0:a.size)?null==a?void 0:a.size:null,g=null!=b?(0,o.F2)(b):null,M=null!=(null==a?void 0:a.maxSize)?(0,o.F2)(a.maxSize):null,k=null!=(null==a?void 0:a.opacity)?a.opacity:null,x=null!=(null==a?void 0:a.rotation)?a.rotation:"angle"in e?e.angle:null,L=(0,u._M)(e),z=(0,u.mx)(e);if(L&&!z){var F="type"in L?null:new n.Z(L);"#ffffff"===(F?F.toHex():null)&&(z={color:"#bdc3c7",width:.75})}var Z={shape:null,fill:null,stroke:z,offset:[0,0]};null!=(l=z)&&l.width&&(z.width=Math.min(z.width,d));var C=(null==(v=z)?void 0:v.width)||0,S=null!=(null==a?void 0:a.size)&&(null==(null==a?void 0:a.scale)||(null==a?void 0:a.scale)),j=0,_=0,P=!1;switch(e.type){case"simple-marker":var q=e.style,E=Math.min(null!=g?g:(0,o.F2)(e.size),M||h);switch(j=E,_=E,q){case"circle":Z.shape={type:"circle",cx:0,cy:0,r:.5*E},S||(j+=C,_+=C);break;case"cross":Z.shape={type:"path",path:[{command:"M",values:[0,.5*_]},{command:"L",values:[j,.5*_]},{command:"M",values:[.5*j,0]},{command:"L",values:[.5*j,_]}]};break;case"diamond":Z.shape={type:"path",path:[{command:"M",values:[0,.5*_]},{command:"L",values:[.5*j,0]},{command:"L",values:[j,.5*_]},{command:"L",values:[.5*j,_]},{command:"Z",values:[]}]},S||(j+=C,_+=C);break;case"square":Z.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[j,0]},{command:"L",values:[j,_]},{command:"L",values:[0,_]},{command:"Z",values:[]}]},S||(j+=C,_+=C),x&&(P=!0);break;case"triangle":Z.shape={type:"path",path:[{command:"M",values:[.5*j,0]},{command:"L",values:[j,_]},{command:"L",values:[0,_]},{command:"Z",values:[]}]},S||(j+=C,_+=C),x&&(P=!0);break;case"x":Z.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[j,_]},{command:"M",values:[j,0]},{command:"L",values:[0,_]}]},x&&(P=!0);break;case"path":Z.shape={type:"path",path:e.path||""},S||(j+=C,_+=C),x&&(P=!0),S=!0}break;case"simple-line":var D,H=w(a),O=H.width,T=H.height,V=null!=T?T:Math.min(null!=g?g:C,M||d),W=null!=O?O:p;z.width=V,j=W,_=V;var A=(null==Z||null==(D=Z.stroke)?void 0:D.cap)||"butt",J="round"===A;S=!0,Z.stroke.cap="butt"===A?"square":A,Z.shape={type:"path",path:[{command:"M",values:[J?V/2:0,_/2]},{command:"L",values:[J?j-V/2:j,_/2]}]};break;case c:case"simple-fill":var R="object"==typeof(null==a?void 0:a.symbolConfig)&&(null==a?void 0:a.symbolConfig.isSquareFill),B=w(a),G=B.width,I=B.height;j=R&&null!=G?G:null!=g?g:m,_=R&&null!=I?I:j,S||(j+=C,_+=C),S=!0,Z.shape=R?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[j,0]},{command:"L",values:[j,_]},{command:"L",values:[0,_]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:s.JZ.fill[0];break;case"picture-marker":var K=(0,o.F2)(e.width),N=(0,o.F2)(e.height),Q=null!=g?g:Math.max(K,N),U=K/N;K=U<=1?Math.ceil(Q*U):Q,N=U<=1?Q:Math.ceil(Q/U),j=Math.min(K,M||h),_=Math.min(N,M||h),Z.shape={type:"image",x:-Math.round(j/2),y:-Math.round(_/2),width:j,height:_,src:e.url||""},x&&(P=!0);break;case"text":var X=e,Y=X.text||"Aa",$=X.font,ee=Math.min(null!=g?g:(0,o.F2)($.size),M||h),ae=f(Y,{weight:$.weight,size:ee,family:$.family}),le=/[\uE600-\uE6FF]/.test(Y);j=le?ee:ae,_=ee;var te=.25*y(($?ee:0).toString());le&&(te+=5),Z.shape={type:"text",text:Y,x:0,y:te,align:"middle",decoration:$&&$.decoration,rotated:X.rotated,kerning:X.kerning},Z.font=$&&{size:ee,style:$.style,decoration:$.decoration,weight:$.weight,family:$.family}}if(!Z.shape)return Promise.reject(new i.Z("symbolPreview: renderPreviewHTML2D","symbol not supported."));var ne=L,ie=e.color,oe=null;return ne&&"pattern"===ne.type&&ie&&e.type!==c?oe=(0,u.Od)(ne.src,ie.toCss(!0)).then((function(e){return ne.src=e,Z.fill=ne,Z})):(Z.fill=L,oe=Promise.resolve(Z)),oe.then((function(e){var l=[[e]];if("object"==typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.applyColorModulation){var n=.6*j;l.unshift([(0,t.Z)((0,t.Z)({},e),{},{offset:[-n,0],fill:(0,s.dc)(L,-.3)})]),l.push([(0,t.Z)((0,t.Z)({},e),{},{offset:[n,0],fill:(0,s.dc)(L,.3)})]),j+=2*n,S=!1}return(0,r.w)(l,[j,_],{node:a&&a.node,scale:S,opacity:k,rotation:x,useRotationSize:P,effectView:null==a?void 0:a.effectView})}))}}}]);
//# sourceMappingURL=8103.602d92e6.chunk.js.map