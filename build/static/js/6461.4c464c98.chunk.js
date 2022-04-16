"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[6461],{16461:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});r(59486);var n=r(92026),o=r(42306),s=r(99278),i=r(45502),l=r(17314),a=r(80394),f=r(64145),c=r(77960),p=r(55343),u=r(55185),m=r(53866);class y{convertVectorFieldData(e){const t=s.Z.fromJSON(e.pixelBlock),r=(0,f.KC)(t,e.type);return Promise.resolve((0,n.pC)(r)&&r.toJSON())}async decode(e){const t=await(0,i.J)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=s.Z.fromJSON(e.pixelBlock),e.extent=e.extent?m.Z.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve((0,n.pC)(t)&&t.toJSON())}async updateSymbolizer(e){var t;this.symbolizer=p.Z.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(t=this.symbolizer)?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(s.Z.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve((0,n.pC)(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=(0,l.Hv)(s.Z.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=(0,l.Vl)(s.Z.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach(((e,r)=>{t.set(r,null==e?void 0:e.toJSON())})),Promise.resolve(t)}async mosaicAndTransform(e){var t;const r=e.srcPixelBlocks.map((e=>e?new s.Z(e):null)),o=(0,l.us)(r,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let i,a=o;return e.coefs&&(a=(0,l.Uk)(o,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(i=(0,l.Qh)(e.destDimension,e.gcsGrid),a=(0,n.Wg)((0,f.xQ)(a,e.isUV?"vector-uv":"vector-magdir",i))),{pixelBlock:null==(t=a)?void 0:t.toJSON(),localNorthDirections:i}}async createStreamlinesMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),width:e.flowData.width,height:e.flowData.height},{vertexData:n,indexData:o}=await(0,u.z_)(e.rendererSettings,r,t.signal);return{result:{vertexBuffer:n.buffer,indexBuffer:o.buffer},transferList:[n.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=m.Z.fromJSON(e.projectedExtent),r=m.Z.fromJSON(e.srcBufferExtent);let n=null;e.datumTransformationSteps&&(n=new o.Z({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,a.Mk)(t.spatialReference,r.spatialReference,n))&&await(0,a.zD)();const s=e.rasterTransform?(0,c.c)(e.rasterTransform):null;return(0,a.Qp)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:n,rasterTransform:s})}}},32935:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(27366),o=r(46784),s=r(49861),i=(r(63780),r(93169),r(25243),r(69912));let l=class extends o.wq{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};(0,n._)([(0,s.Cb)()],l.prototype,"affectsPixelSize",null),(0,n._)([(0,s.Cb)({json:{write:!0}})],l.prototype,"spatialReference",void 0),l=(0,n._)([(0,i.j)("esri.layers.support.rasterTransforms.BaseRasterTransform")],l);const a=l},3089:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(27366),o=r(49861),s=(r(63780),r(93169),r(25243),r(27135)),i=r(69912),l=r(32935);let a=class extends l.Z{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}};(0,n._)([(0,s.J)({GCSShiftXform:"gcs-shift"})],a.prototype,"type",void 0),(0,n._)([(0,o.Cb)()],a.prototype,"tolerance",void 0),a=(0,n._)([(0,i.j)("esri.layers.support.rasterTransforms.GCSShiftTransform")],a);const f=a},69405:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(27366),o=(r(59486),r(49861)),s=(r(63780),r(93169),r(25243),r(27135)),i=r(38511),l=r(69912),a=r(31201),f=r(32935),c=r(7882),p=r(53866);function u(e,t,r){const{x:n,y:o}=t;if(r<2)return{x:e[0]+n*e[2]+o*e[4],y:e[1]+n*e[3]+o*e[5]};if(2===r){const t=n*n,r=o*o,s=n*o;return{x:e[0]+n*e[2]+o*e[4]+t*e[6]+s*e[8]+r*e[10],y:e[1]+n*e[3]+o*e[5]+t*e[7]+s*e[9]+r*e[11]}}const s=n*n,i=o*o,l=n*o,a=s*n,f=s*o,c=n*i,p=o*i;return{x:e[0]+n*e[2]+o*e[4]+s*e[6]+l*e[8]+i*e[10]+a*e[12]+f*e[14]+c*e[16]+p*e[18],y:e[1]+n*e[3]+o*e[5]+s*e[7]+l*e[9]+i*e[11]+a*e[13]+f*e[15]+c*e[17]+p*e[19]}}function m(e,t,r){const{xmin:n,ymin:o,xmax:s,ymax:i,spatialReference:l}=t;let a=[];if(r<2)a.push({x:n,y:i}),a.push({x:s,y:i}),a.push({x:n,y:o}),a.push({x:s,y:o});else{let e=10;for(let t=0;t<e;t++)a.push({x:n,y:o+(i-o)*t/(e-1)}),a.push({x:s,y:o+(i-o)*t/(e-1)});e=8;for(let t=1;t<=e;t++)a.push({x:n+(s-n)*t/e,y:o}),a.push({x:n+(s-n)*t/e,y:i})}a=a.map((t=>u(e,t,r)));const f=a.map((e=>e.x)),c=a.map((e=>e.y));return new p.Z({xmin:Math.min.apply(null,f),xmax:Math.max.apply(null,f),ymin:Math.min.apply(null,c),ymax:Math.max.apply(null,c),spatialReference:l})}let y=class extends f.Z{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,t){const{coeffX:r,coeffY:n}=t;if(null==r||!r.length||null==n||!n.length||r.length!==n.length)return null;const o=[];for(let s=0;s<r.length;s++)o.push(r[s]),o.push(n[s]);return o}writeForwardCoefficients(e,t,r){const n=[],o=[];for(let s=0;s<(null==e?void 0:e.length);s++)s%2==0?n.push(e[s]):o.push(e[s]);t.coeffX=n,t.coeffY=o}get inverseCoefficients(){let e=this._get("inverseCoefficients");const t=this._get("forwardCoefficients");return!e&&t&&this.polynomialOrder<2&&(e=function(e){const[t,r,n,o,s,i]=e,l=n*i-s*o,a=s*o-n*i;return[(s*r-t*i)/l,(n*r-t*o)/a,i/l,o/a,-s/l,-n/a]}(t)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,t){const{inverseCoeffX:r,inverseCoeffY:n}=t;if(null==r||!r.length||null==n||!n.length||r.length!==n.length)return null;const o=[];for(let s=0;s<r.length;s++)o.push(r[s]),o.push(n[s]);return o}writeInverseCoefficients(e,t,r){const n=[],o=[];for(let s=0;s<(null==e?void 0:e.length);s++)s%2==0?n.push(e[s]):o.push(e[s]);t.inverseCoeffX=n,t.inverseCoeffY=o}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const t=u(this.forwardCoefficients,e,this.polynomialOrder);return new c.Z({x:t.x,y:t.y,spatialReference:e.spatialReference})}return m(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const t=u(this.inverseCoefficients,e,this.polynomialOrder);return new c.Z({x:t.x,y:t.y,spatialReference:e.spatialReference})}return m(this.inverseCoefficients,e,this.polynomialOrder)}};(0,n._)([(0,o.Cb)({json:{write:!0}})],y.prototype,"polynomialOrder",void 0),(0,n._)([(0,o.Cb)()],y.prototype,"forwardCoefficients",void 0),(0,n._)([(0,i.r)("forwardCoefficients",["coeffX","coeffY"])],y.prototype,"readForwardCoefficients",null),(0,n._)([(0,a.c)("forwardCoefficients")],y.prototype,"writeForwardCoefficients",null),(0,n._)([(0,o.Cb)({json:{write:!0}})],y.prototype,"inverseCoefficients",null),(0,n._)([(0,i.r)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],y.prototype,"readInverseCoefficients",null),(0,n._)([(0,a.c)("inverseCoefficients")],y.prototype,"writeInverseCoefficients",null),(0,n._)([(0,o.Cb)()],y.prototype,"affectsPixelSize",null),(0,n._)([(0,s.J)({PolynomialXform:"polynomial"})],y.prototype,"type",void 0),y=(0,n._)([(0,l.j)("esri.layers.support.rasterTransforms.PolynomialTransform")],y);const d=y},77960:(e,t,r)=>{r.d(t,{j:()=>m,c:()=>y});var n=r(3089),o=r(27366),s=(r(32718),r(25243),r(63780),r(93169),r(75366),r(27135)),i=r(69912),l=r(32935);let a=class extends l.Z{constructor(){super(...arguments),this.type="identity"}};(0,o._)([(0,s.J)({IdentityXform:"identity"})],a.prototype,"type",void 0),a=(0,o._)([(0,i.j)("esri.layers.support.rasterTransforms.IdentityTransform")],a);const f=a;var c=r(69405);const p={GCSShiftXform:n.Z,IdentityXform:f,PolynomialXform:c.Z},u=Object.keys(p);function m(e){const t=null==e?void 0:e.type;return!e||u.includes(t)}function y(e){if(!(null==e?void 0:e.type))return null;const t=p[null==e?void 0:e.type];if(t){const r=new t;return r.read(e),r}return null}}}]);
//# sourceMappingURL=6461.4c464c98.chunk.js.map