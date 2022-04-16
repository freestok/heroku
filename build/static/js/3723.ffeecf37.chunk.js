"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[3723],{48734:(e,t,E)=>{E.d(t,{B3:()=>n,Op:()=>R,U:()=>T,n1:()=>_});E(93169);function _(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function n(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function T(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function R(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},35888:(e,t,E)=>{E.d(t,{d:()=>n});var _=E(16889);function n(e,t,E){var n;const i=e.byteLength/(4*t),N=new Uint32Array(e,0,i*t);let o=new Uint32Array(i);const s=null!=(n=null==E?void 0:E.minReduction)?n:0,S=(null==E?void 0:E.originalIndices)||null,I=S?S.length:0,O=(null==E?void 0:E.componentOffsets)||null;let c=0;if(O)for(let _=0;_<O.length-1;_++){const e=O[_+1]-O[_];e>c&&(c=e)}else c=i;const C=Math.floor(1.1*c)+1;(null==r||r.length<2*C)&&(r=new Uint32Array((0,_.Sf)(2*C)));for(let _=0;_<2*C;_++)r[_]=0;let a=0;const u=!!O&&!!S,f=u?I:i,L=u?new Uint32Array(I):null,l=1.96;let D=0!==s?Math.ceil(4*l*l/(s*s)*s*(1-s)):f,U=1,M=O?O[1]:f;for(let _=0;_<f;_++){if(_===D){const e=1-a/_;if(e+l*Math.sqrt(e*(1-e)/_)<s)return null;D*=2}if(_===M){for(let e=0;e<2*C;e++)r[e]=0;if(S)for(let e=O[U-1];e<O[U];e++)L[e]=o[S[e]];M=O[++U]}const e=u?S[_]:_,E=e*t,n=A(N,E,t);let R=n%C,i=a;for(;0!==r[2*R+1];){if(r[2*R]===n){const e=r[2*R+1]-1;if(T(N,E,e*t,t)){i=o[e];break}}R++,R>=C&&(R-=C)}i===a&&(r[2*R]=n,r[2*R+1]=e+1,a++),o[e]=i}if(0!==s&&1-a/i<s)return null;if(u){for(let e=O[U-1];e<L.length;e++)L[e]=o[S[e]];o=L}const P=new Uint32Array(t*a);a=0;for(let _=0;_<f;_++)o[_]===a&&(R(N,(u?S[_]:_)*t,P,a*t,t),a++);if(S&&!u){const e=new Uint32Array(I);for(let t=0;t<e.length;t++)e[t]=o[S[t]];o=e}return{buffer:P.buffer,indices:o,uniqueCount:a}}function T(e,t,E,_){for(let n=0;n<_;n++)if(e[t+n]!==e[E+n])return!1;return!0}function R(e,t,E,_,n){for(let T=0;T<n;T++)E[_+T]=e[t+T]}function A(e,t,E){let _=0;for(let n=0;n<E;n++)_=e[t+n]+_|0,_=_+(_<<11)+(_>>>2)|0;return _>>>0}let r=null},55158:(e,t,E)=>{E.d(t,{U$:()=>A});var _=E(25158),n=E(48734);class T{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const E of e.fieldNames){const t=e.fields.get(E);this[E]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const E=this[e];return E&&E.elementCount===t.ElementCount&&E.elementType===t.ElementType?E:null}slice(e,t){return new T(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,E,_){const n=this.stride;if(n%4==0){const T=new Uint32Array(e.buffer,t*n,_*n/4);new Uint32Array(this.buffer,E*n,_*n/4).set(T)}else{const T=new Uint8Array(e.buffer,t*n,_*n);new Uint8Array(this.buffer,E*n,_*n).set(T)}}}class R{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,_.Eu,t),this}vec2f64(e,t){return this._appendField(e,_.q6,t),this}vec3f(e,t){return this._appendField(e,_.ct,t),this}vec3f64(e,t){return this._appendField(e,_.fP,t),this}vec4f(e,t){return this._appendField(e,_.ek,t),this}vec4f64(e,t){return this._appendField(e,_.Cd,t),this}mat3f(e,t){return this._appendField(e,_.gK,t),this}mat3f64(e,t){return this._appendField(e,_.ey,t),this}mat4f(e,t){return this._appendField(e,_.bj,t),this}mat4f64(e,t){return this._appendField(e,_.O1,t),this}vec4u8(e,t){return this._appendField(e,_.mc,t),this}f32(e,t){return this._appendField(e,_.ly,t),this}f64(e,t){return this._appendField(e,_.oS,t),this}u8(e,t){return this._appendField(e,_.D_,t),this}u16(e,t){return this._appendField(e,_.av,t),this}i8(e,t){return this._appendField(e,_.Hz,t),this}vec2i8(e,t){return this._appendField(e,_.Vs,t),this}vec2i16(e,t){return this._appendField(e,_.or,t),this}vec2u8(e,t){return this._appendField(e,_.xA,t),this}vec4u16(e,t){return this._appendField(e,_.v6,t),this}u32(e,t){return this._appendField(e,_.Nu,t),this}_appendField(e,t,E){const _=t.ElementCount*(0,n.n1)(t.ElementType),T=this.stride;this.fields.set(e,{size:_,constructor:t,offset:T,optional:E}),this.stride+=_,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new T(this,e)}createView(e){return new T(this,e)}clone(){const e=new R;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,E)=>e.fields.set(E,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function A(){return new R}},4760:(e,t,E)=>{var _;E.d(t,{T:()=>_}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(_||(_={}))},33723:(e,t,E)=>{E.r(t),E.d(t,{work:()=>Q,wrappedWork:()=>q});var _=E(35888);function n(e,t,E){const _=t/3,n=new Uint32Array(E+1),T=new Uint32Array(E+1),R=(e,t)=>{e<t?n[e+1]++:T[t+1]++};for(let C=0;C<_;C++){const t=e[3*C],E=e[3*C+1],_=e[3*C+2];R(t,E),R(E,_),R(_,t)}let A=0,r=0;for(let C=0;C<E;C++){const e=n[C+1],t=T[C+1];n[C+1]=A,T[C+1]=r,A+=e,r+=t}const i=new Uint32Array(6*_),N=n[E],o=(e,t,E)=>{if(e<t){const _=n[e+1]++;i[2*_]=t,i[2*_+1]=E}else{const _=T[t+1]++;i[2*N+2*_]=e,i[2*N+2*_+1]=E}};for(let C=0;C<_;C++){const t=e[3*C],E=e[3*C+1],_=e[3*C+2];o(t,E,C),o(E,_,C),o(_,t,C)}const s=(e,t)=>{const E=2*e,_=t-e;for(let n=1;n<_;n++){const e=i[E+2*n],t=i[E+2*n+1];let _=n-1;for(;_>=0&&i[E+2*_]>e;_--)i[E+2*_+2]=i[E+2*_],i[E+2*_+3]=i[E+2*_+1];i[E+2*_+2]=e,i[E+2*_+3]=t}};for(let C=0;C<E;C++)s(n[C],n[C+1]),s(N+T[C],N+T[C+1]);const S=new Int32Array(3*_),I=(t,E)=>t===e[3*E]?0:t===e[3*E+1]?1:t===e[3*E+2]?2:-1,O=(e,t)=>{const E=I(e,t);S[3*t+E]=-1},c=(e,t,E,_)=>{const n=I(e,t);S[3*t+n]=_;const T=I(E,_);S[3*_+T]=t};for(let C=0;C<E;C++){let e=n[C];const t=n[C+1];let E=T[C];const _=T[C+1];for(;e<t&&E<_;){const t=i[2*e],_=i[2*N+2*E];t===_?(c(C,i[2*e+1],_,i[2*N+2*E+1]),e++,E++):t<_?(O(C,i[2*e+1]),e++):(O(_,i[2*N+2*E+1]),E++)}for(;e<t;)O(C,i[2*e+1]),e++;for(;E<_;)O(i[2*N+2*E],i[2*N+2*E+1]),E++}return S}var T=E(25158),R=E(55158);function A(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:r(e.layout)}}function r(e){const t=new Array;return e.fields.forEach(((e,E)=>{const _={...e,constructor:N(e.constructor)};t.push([E,_])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const i=[T.ly,T.Eu,T.ct,T.ek,T.gK,T.bj,T.oS,T.q6,T.fP,T.Cd,T.ey,T.O1,T.D_,T.xA,T.ne,T.mc,T.av,T.TS,T.mw,T.v6,T.Nu,T.qt,T.G5,T.hu,T.Hz,T.Vs,T.P_,T.ir,T.o7,T.or,T.n1,T.zO,T.Jj,T.wA,T.PP,T.TN];function N(e){return`${e.ElementType}_${e.ElementCount}`}const o=new Map;i.forEach((e=>o.set(N(e),e)));var s=E(8548),S=E(61109);function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const E=e.stride;return e.fieldNames.filter((t=>{const E=e.fields.get(t).optional;return!(E&&E.glPadding)})).map((_=>{const n=e.fields.get(_),T=n.constructor.ElementCount,R=O(n.constructor.ElementType),A=n.offset,r=!(!n.optional||!n.optional.glNormalized);return new S.G(_,T,R,A,E,r,t)}))}function O(e){const t=c[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const c={u8:s.g.UNSIGNED_BYTE,u16:s.g.UNSIGNED_SHORT,u32:s.g.UNSIGNED_INT,i8:s.g.BYTE,i16:s.g.SHORT,i32:s.g.INT,f32:s.g.FLOAT};var C=E(4760);const a=(0,R.U$)().vec3f(C.T.POSITION).u16(C.T.COMPONENTINDEX).u16(C.T.U16PADDING),u=(I((0,R.U$)().vec2u8(C.T.SIDENESS)),(0,R.U$)().vec3f(C.T.POSITION0).vec3f(C.T.POSITION1).u16(C.T.COMPONENTINDEX).u8(C.T.VARIANTOFFSET,{glNormalized:!0}).u8(C.T.VARIANTSTROKE).u8(C.T.VARIANTEXTENSION,{glNormalized:!0}).u8(C.T.U8PADDING,{glPadding:!0}).u16(C.T.U16PADDING,{glPadding:!0})),f=u.clone().vec3f(C.T.NORMAL),L=u.clone().vec3f(C.T.NORMALA).vec3f(C.T.NORMALB);new Map([[C.T.POSITION0,0],[C.T.POSITION1,1],[C.T.COMPONENTINDEX,2],[C.T.VARIANTOFFSET,3],[C.T.VARIANTSTROKE,4],[C.T.VARIANTEXTENSION,5],[C.T.NORMAL,6],[C.T.NORMALA,6],[C.T.NORMALB,7],[C.T.SIDENESS,8]]);var l=E(84936),D=E(11186),U=E(71353);class M{updateSettings(e){this.settings=e,this.edgeHashFunction=e.reducedPrecision?B:d}write(e,t,E){const _=this.edgeHashFunction(E);m.seed=_;const n=m.getIntRange(0,255),T=m.getIntRange(0,this.settings.variants-1),R=m.getFloat(),A=255*(.5*function(e,t){const E=e<0?-1:1;return Math.abs(e)**t*E}(-(1-Math.min(R/.7,1))+Math.max(0,R-.7)/(1-.7),1.2)+.5);e.position0.setVec(t,E.position0),e.position1.setVec(t,E.position1),e.componentIndex.set(t,E.componentIndex),e.variantOffset.set(t,n),e.variantStroke.set(t,T),e.variantExtension.set(t,A)}trim(e,t){return e.slice(0,t)}}const P=new Float32Array(6),G=new Uint32Array(P.buffer),F=new Uint32Array(1);function d(e){const t=P;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],F[0]=5381;for(let E=0;E<G.length;E++)F[0]=31*F[0]+G[E];return F[0]}function B(e){const t=P;t[0]=h(e.position0[0]),t[1]=h(e.position0[1]),t[2]=h(e.position0[2]),t[3]=h(e.position1[0]),t[4]=h(e.position1[1]),t[5]=h(e.position1[2]),F[0]=5381;for(let E=0;E<G.length;E++)F[0]=31*F[0]+G[E];return F[0]}function h(e){return Math.round(1e4*e)/1e4}class g{constructor(){this.commonWriter=new M}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return f.createBuffer(e)}write(e,t,E){this.commonWriter.write(e,t,E),(0,D.b)(H,E.faceNormal0,E.faceNormal1),(0,D.n)(H,H),e.normal.setVec(t,H)}trim(e,t){return this.commonWriter.trim(e,t)}}g.Layout=f,g.glLayout=I(f,1);class p{constructor(){this.commonWriter=new M}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return L.createBuffer(e)}write(e,t,E){this.commonWriter.write(e,t,E),e.normalA.setVec(t,E.faceNormal0),e.normalB.setVec(t,E.faceNormal1)}trim(e,t){return this.commonWriter.trim(e,t)}}p.Layout=L,p.glLayout=I(L,1);const H=(0,U.c)(),m=new l.Z;var V=E(63780),w=E(16889),v=E(18722);const X=-1;var y;function Y(e,t){return e.cosAngle<t}function b(e,t){return e.cosAngle>t}function W(e,t){const E=(0,w.ZF)(e.cosAngle),_=k.fwd,n=k.ortho;return(0,D.r)(_,e.position1,e.position0),E*((0,D.d)((0,D.c)(n,e.faceNormal0,e.faceNormal1),_)>0?-1:1)>t}function x(e){const t=e.faces.length/3,E=e.faces,_=e.neighbors;let n=0;for(let A=0;A<t;A++){const e=_[3*A+0],t=_[3*A+1],T=_[3*A+2],R=E[3*A+0],r=E[3*A+1],i=E[3*A+2];n+=e===X||R<r?1:0,n+=t===X||r<i?1:0,n+=T===X||i<R?1:0}const T=new Int32Array(4*n);let R=0;for(let A=0;A<t;A++){const e=_[3*A+0],t=_[3*A+1],n=_[3*A+2],r=E[3*A+0],i=E[3*A+1],N=E[3*A+2];(e===X||r<i)&&(T[R++]=r,T[R++]=i,T[R++]=A,T[R++]=e),(t===X||i<N)&&(T[R++]=i,T[R++]=N,T[R++]=A,T[R++]=t),(n===X||N<r)&&(T[R++]=N,T[R++]=r,T[R++]=A,T[R++]=n)}return T}function K(e){const t=e.faces.length/3,E=e.vertices.position,_=e.faces,n=Z.v0,T=Z.v1,R=Z.v2,A=new Float32Array(3*t);for(let r=0;r<t;r++){const e=_[3*r+0],t=_[3*r+1],i=_[3*r+2];E.getVec(e,n),E.getVec(t,T),E.getVec(i,R),(0,D.f)(T,T,n),(0,D.f)(R,R,n),(0,D.c)(n,T,R),(0,D.n)(n,n),A[3*r+0]=n[0],A[3*r+1]=n[1],A[3*r+2]=n[2]}return A}!function(e){e[e.SOLID=0]="SOLID",e[e.SKETCH=1]="SKETCH"}(y||(y={}));const k={edge:{position0:(0,U.c)(),position1:(0,U.c)(),faceNormal0:(0,U.c)(),faceNormal1:(0,U.c)(),componentIndex:0,cosAngle:0},ortho:(0,U.c)(),fwd:(0,U.c)()},Z={v0:(0,U.c)(),v1:(0,U.c)(),v2:(0,U.c)()},z={anglePlanar:4,angleSignificantEdge:35};async function q(e){const t=function(e){return{data:a.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}(e),E=Q(t),_=[t.data.buffer];return{result:$(E,_),transferList:_}}function Q(e){const t=j(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return J.updateSettings(e.writerSettings),ee.updateSettings(e.writerSettings),function(e,t,E){let _=arguments.length>3&&void 0!==arguments[3]?arguments[3]:z;const n=e.vertices.position,T=e.vertices.componentIndex,R=(0,w.Vl)(_.anglePlanar),A=(0,w.Vl)(_.angleSignificantEdge),r=Math.cos(A),i=Math.cos(R),N=k.edge,o=N.position0,s=N.position1,S=N.faceNormal0,I=N.faceNormal1,O=K(e),c=x(e),C=c.length/4,a=t.allocate(C);let u=0;const f=C,L=E.allocate(f);let l=0,U=0,M=0;const P=(0,V.w6)(0,C),G=new Float32Array(C);(0,v.Ed)(G,((e,t,E)=>{n.getVec(c[4*t+0],o),n.getVec(c[4*t+1],s),E[t]=(0,D.i)(o,s)})),P.sort(((e,t)=>G[t]-G[e]));const F=new Array,d=new Array;for(let g=0;g<C;g++){const e=P[g],_=G[e],A=c[4*e+0],C=c[4*e+1],f=c[4*e+2],B=c[4*e+3],h=B===X;if(n.getVec(A,o),n.getVec(C,s),h)(0,D.s)(S,O[3*f+0],O[3*f+1],O[3*f+2]),(0,D.g)(I,S),N.componentIndex=T.get(A),N.cosAngle=(0,D.d)(S,I);else{if((0,D.s)(S,O[3*f+0],O[3*f+1],O[3*f+2]),(0,D.s)(I,O[3*B+0],O[3*B+1],O[3*B+2]),N.componentIndex=T.get(A),N.cosAngle=(0,D.d)(S,I),b(N,i))continue;N.cosAngle<-.9999&&(0,D.g)(I,S)}U+=_,M++,h||Y(N,r)?(t.write(a,u++,N),F.push(_)):W(N,R)&&(E.write(L,l++,N),d.push(_))}const B=new Float32Array(F.reverse()),h=new Float32Array(d.reverse());return{regular:{instancesData:t.trim(a,u),lodInfo:{lengths:B}},silhouette:{instancesData:E.trim(L,l),lodInfo:{lengths:h}},averageEdgeLength:U/M}}(t,J,ee)}function $(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:A(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:A(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function j(e,t,E,T){if(t)return{faces:E,facesLength:T,neighbors:n(E,T,e.count),vertices:e};const R=(0,_.d)(e.buffer,e.stride/4,{originalIndices:E,originalIndicesLength:T}),A=n(R.indices,T,R.uniqueCount);return{faces:R.indices,facesLength:R.indices.length,neighbors:A,vertices:a.createView(R.buffer)}}const J=new g,ee=new p},61109:(e,t,E)=>{E.d(t,{G:()=>_});class _{constructor(e,t,E,_,n){let T=arguments.length>5&&void 0!==arguments[5]&&arguments[5],R=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=e,this.count=t,this.type=E,this.offset=_,this.stride=n,this.normalized=T,this.divisor=R}}},8548:(e,t,E)=>{var _,n,T,R,A,r,i,N,o,s,S,I,O,c,C,a,u,f,L,l,D,U;E.d(t,{Br:()=>a,Ho:()=>L,LR:()=>r,Ld:()=>M,Lm:()=>D,Lu:()=>F,MX:()=>n,No:()=>O,OU:()=>U,Se:()=>B,Tg:()=>u,V7:()=>H,VI:()=>c,VY:()=>G,Wf:()=>i,Y5:()=>p,_g:()=>P,cw:()=>S,db:()=>R,e8:()=>I,g:()=>N,l1:()=>f,lP:()=>C,lk:()=>_,q_:()=>d,qi:()=>l,w0:()=>A,wb:()=>o,xS:()=>s,zi:()=>T}),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(_||(_={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(n||(n={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(T||(T={})),function(e){e[e.ADD=32774]="ADD",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(R||(R={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(A||(A={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(r||(r={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(i||(i={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(N||(N={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(o||(o={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(s||(s={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(S||(S={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(I||(I={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(O||(O={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(c||(c={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(C||(C={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(a||(a={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(u||(u={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(f||(f={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(L||(L={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(l||(l={})),function(e){e[e.TEXTURE=0]="TEXTURE",e[e.RENDER_BUFFER=1]="RENDER_BUFFER",e[e.CUBEMAP=2]="CUBEMAP"}(D||(D={})),function(e){e[e.NONE=0]="NONE",e[e.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",e[e.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(U||(U={}));const M=33984;var P,G;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.Framebuffer=5]="Framebuffer",e[e.Renderbuffer=6]="Renderbuffer",e[e.Sync=7]="Sync",e[e.COUNT=8]="COUNT"}(P||(P={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(G||(G={}));const F=33306;var d,B,h,g,p,H,m;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(d||(d={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(B||(B={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(h||(h={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(g||(g={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(p||(p={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(H||(H={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(m||(m={}))}}]);
//# sourceMappingURL=3723.ffeecf37.chunk.js.map