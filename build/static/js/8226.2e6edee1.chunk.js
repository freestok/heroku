"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[8226],{45956:(e,t,i)=>{i.d(t,{eY:()=>c});var r=i(92026),s=i(22753),a=i(23588),n=i(15245),o=i(87422),h=i(10978),l=i(8548),d=i(51378);function u(e,t,i){const r={target:l.No.TEXTURE_2D,pixelFormat:l.VI.RGBA,internalFormat:l.VI.RGBA,dataType:l.Br.UNSIGNED_BYTE,wrapMode:l.e8.CLAMP_TO_EDGE};return t&&i&&(r.width=t,r.height=i),new d.x(e,r)}class c extends o.s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,a.c)()}}setTransform(e){const t=(0,s.b)(this.transforms.dvs),[i,r]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/e.resolution,o=a*this.width,h=a*this.height,l=Math.PI*this.rotation/180;(0,s.c)(t,t,(0,n.f)(i,r)),(0,s.c)(t,t,(0,n.f)(o/2,h/2)),(0,s.r)(t,t,-l),(0,s.c)(t,t,(0,n.f)(-o/2,-h/2)),(0,s.j)(t,t,(0,n.f)(o,h)),(0,s.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=u(e,this.sourceWidth,this.sourceHeight):this._texture=u(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(s=i)&&"render"in s)if(i instanceof h.Z){const e=i.getRenderedRasterPixels();this._texture.setData((0,r.pC)(e)?e.renderedRasterPixels:null)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null);var s}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},90110:(e,t,i)=>{i.d(t,{c:()=>n});var r=i(75010),s=i(80613),a=i(64510);class n extends a.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[r.U.bitmap],target:()=>this.children,drawPhase:s.jx.MAP});return[...super.prepareRenderPasses(e),t]}}},10978:(e,t,i)=>{i.d(t,{Z:()=>s});var r=i(92026);class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,r.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,r.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,r.Wi)(t))return;const i=this.filter({pixelBlock:t});if((0,r.Wi)(i.pixelBlock))return;const s=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(s),e.putImageData(a,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return(0,r.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},8226:(e,t,i)=>{i.r(t),i.d(t,{default:()=>J});var r=i(27366),s=i(52639),a=i(81608),n=i(94172),o=i(49861),h=(i(63780),i(93169),i(25243),i(69912)),l=i(78983),d=i(26686),u=i(95986),c=i(43634),p=i(83978),g=i(85015),m=i(32718),y=i(92026),x=i(66978),v=i(17314),w=i(90110),_=i(33624),b=i(10978),f=i(9229);const R=m.Z.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let P=class extends g.Z{constructor(){super(...arguments),this.attached=!1,this.container=new _.W,this.updateRequested=!1,this.type="imagery",this._bitmapView=new w.c}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,x.D_)(e)||R.error(e)}))}hitTest(e){return new s.Z({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new f.Z({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),r=(0,v.Kh)(i,t);return(0,y.pC)(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}_fetchImage(e,t,i,r){return(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,r).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:r.signal}).then((t=>{const i=new b.Z(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return i.filter=e=>this.layer.applyFilter(e),i}))))}};(0,r._)([(0,o.Cb)()],P.prototype,"attached",void 0),(0,r._)([(0,o.Cb)()],P.prototype,"container",void 0),(0,r._)([(0,o.Cb)()],P.prototype,"layer",void 0),(0,r._)([(0,o.Cb)()],P.prototype,"strategy",void 0),(0,r._)([(0,o.Cb)()],P.prototype,"timeExtent",void 0),(0,r._)([(0,o.Cb)()],P.prototype,"view",void 0),(0,r._)([(0,o.Cb)()],P.prototype,"updateRequested",void 0),(0,r._)([(0,o.Cb)()],P.prototype,"updating",null),(0,r._)([(0,o.Cb)()],P.prototype,"type",void 0),P=(0,r._)([(0,h.j)("esri.views.2d.layers.imagery.ImageryView2D")],P);const C=P;var S=i(76200),E=i(41691),B=i(53866),k=i(80394),T=i(64145),M=i(57874),D=i(80613),V=i(64510);class Z extends V.Z{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(e){const t=e.registerRenderPass({name:"imagery (vf)",brushes:[M.Z],target:()=>this.children,drawPhase:D.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===D.jx.MAP&&this.symbolTypes.forEach((t=>{e.renderPass=t,super.doRender(e)}))}}var I=i(60831);const q=m.Z.getLogger("esri.views.2d.layers.imagery.VectorFieldView2D");let z=class extends g.Z{constructor(e){super(e),this.update=(0,x.Ds)(((e,t)=>this._update(e,t).catch((e=>{(0,x.D_)(e)||q.error(e)}))))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:s}=e.state,a=new B.Z({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[n,o]=e.state.size;this._loading=this.fetchPixels(a,n,o,i);const h=await this._loading;this._addToDisplay(h,t,e.state),this._loading=null}_addToDisplay(e,t,i){if((0,y.Wi)(e.pixelBlock))return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=e,a=new I.F(s);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=r.xmin,a.y=r.ymax,a.pixelRatio=i.pixelRatio,a.rotation=i.rotation,a.resolution=i.resolution,a.width=s.width*t.symbolTileSize,a.height=s.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a)}};(0,r._)([(0,o.Cb)()],z.prototype,"fetchPixels",void 0),(0,r._)([(0,o.Cb)()],z.prototype,"container",void 0),(0,r._)([(0,o.Cb)()],z.prototype,"_loading",void 0),(0,r._)([(0,o.Cb)()],z.prototype,"updating",null),z=(0,r._)([(0,h.j)("esri.views.2d.layers.imagery.ImageryVFStrategy")],z);const A=z;let F=class extends E.r{constructor(){super(...arguments),this.attached=!1,this.container=new Z,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:n,width:o,height:h}=(0,T.BH)(e,t,i,a,s);if((0,y.pC)(s)&&!s.intersects(e))return{extent:n,pixelBlock:null};const l={bbox:`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(l)){const e=this.getPixelData();if((0,y.pC)(e)&&`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===l.bbox)return e}const{pixelData:d}=await this.layer.fetchImage(n,o,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});return this._dataParameters=l,(0,y.Wi)(d.pixelBlock)?{extent:n,pixelBlock:null}:{extent:n,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?(0,y.Wg)((0,T.KC)(d.pixelBlock,"vector-uv")):d.pixelBlock}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new A({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add((0,n.YP)((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),n.tX),"vector-field-view-update")}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:e,pixelBlock:t}=this.container.children[0].rawPixelData;return{extent:e,pixelBlock:t}}hitTest(e){return new s.Z({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams)}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams)}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&i&&r&&s}async _getProjectedFullExtent(e){try{return await(0,k.tB)(this.layer.fullExtent,e)}catch(Z){try{const t=(await(0,S.default)(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?B.Z.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};(0,r._)([(0,o.Cb)()],F.prototype,"attached",void 0),(0,r._)([(0,o.Cb)()],F.prototype,"container",void 0),(0,r._)([(0,o.Cb)()],F.prototype,"layer",void 0),(0,r._)([(0,o.Cb)()],F.prototype,"timeExtent",void 0),(0,r._)([(0,o.Cb)()],F.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],F.prototype,"view",void 0),(0,r._)([(0,o.Cb)()],F.prototype,"updating",null),F=(0,r._)([(0,h.j)("esri.views.2d.layers.imagery.VectorFieldView2D")],F);const W=F;var U=i(10064),H=i(7882),O=i(45948),j=i(21149),N=i(24405);const G=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new U.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:r}=i,s=(0,N.V)(i,t);if(!r||!(0,y.pC)(s))throw new U.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:r,popupTemplate:s});const a=await s.getRequiredFields(),n=new j.Z;n.timeExtent=this.timeExtent,n.geometry=e,n.outFields=a,n.outSpatialReference=e.spatialReference;const o=this.view.resolution,h="2d"===this.view.type?new H.Z(o,o,this.view.spatialReference):new H.Z(.5*o,.5*o,this.view.spatialReference),{returnTopmostRaster:l,showNoDataRecords:d}=s.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},u={returnDomainValues:!0,returnTopmostRaster:l,pixelSize:h,showNoDataRecords:d,signal:(0,y.pC)(t)?t.signal:null};return i.queryVisibleRasters(n,u).then((e=>e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return(0,r._)([(0,o.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"suspended",void 0),(0,r._)([(0,o.Cb)(O.qG)],t.prototype,"timeExtent",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"view",void 0),t=(0,r._)([(0,h.j)("esri.views.layers.ImageryLayerView")],t),t};var L=i(67581),Y=i(13107);let $=class extends(G((0,Y.y)((0,u.y)(L.Z)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new l.J,this.subview=null}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,t){return this.subview?[this.subview.hitTest(e)]:null}update(e){var t;null==(t=this.subview)||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new c.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new p.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([(0,n.YP)((()=>{var e;return null!=(e=this.layer.blendMode)?e:"normal"}),(e=>this.subview.container.blendMode=e),n.tX),(0,n.YP)((()=>{var e;return null!=(e=this.layer.effect)?e:null}),(e=>this.subview.container.effect=e),n.tX),(0,n.YP)((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())}),n.Z_),(0,n.YP)((()=>this.timeExtent),(e=>{this.subview.timeExtent=e,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch()}),n.Z_),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()})),(0,n.YP)((()=>this.layer.renderer),(()=>this._setSubView()))],"imagerylayerview-update")}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),null==(e=this.subview)||e.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,null==(t=this._highlightView)||t.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:a.Z.isCollection(e)?e.getItemAt(0):e)instanceof s.Z))return{remove:()=>{}};let i=[];return Array.isArray(e)||a.Z.isCollection(e)?i=e.map((e=>e.clone())):e instanceof s.Z&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var e;if(!this.view)return;const t=null==(e=this.layer.renderer)?void 0:e.type;let i="imagery";if("vector-field"===t&&"lerc"===this.layer.format?i="imageryVF":"flow"===t&&(i="flow"),this.subview){var r;if(this.subview.type===i)return this._attachSubview(this.subview),void("flow"===this.subview.type&&this.subview.redrawOrRefetch());this._detachSubview(this.subview),null==(r=this.subview)||r.destroy()}this.subview="imagery"===i?new C({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new W({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d.Z({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){null!=e&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};(0,r._)([(0,o.Cb)()],$.prototype,"pixelData",null),(0,r._)([(0,o.Cb)({readOnly:!0})],$.prototype,"updating",null),(0,r._)([(0,o.Cb)()],$.prototype,"subview",void 0),$=(0,r._)([(0,h.j)("esri.views.2d.layers.ImageryLayerView2D")],$);const J=$},83978:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(27366),s=(i(32718),i(25243),i(63780),i(93169),i(75366),i(69912)),a=i(80613),n=i(82022),o=i(8548);let h=class extends n.Z{renderChildren(e){if(e.drawPhase!==a.jx.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:t}=e,i=t.effects.highlight;i.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(o.lk.COLOR_BUFFER_BIT),this._renderChildren(e,i.defines.concat(["highlightAll"])),i.draw(e),i.unbind()}};h=(0,r._)([(0,s.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],h);const l=h},9229:(e,t,i)=>{i.d(t,{Z:()=>E});var r=i(27366),s=i(85015),a=i(66978),n=i(49861),o=(i(63780),i(93169),i(25243),i(69912)),h=i(53866),l=i(65156),d=i(92975),u=i(22824);const c=Math.PI/180;function p(e){return e*c}function g(e,t){const i=p(t.rotation),r=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i)),[a,n]=t.size;return e[0]=Math.round(n*s+a*r),e[1]=Math.round(n*r+a*s),e}var m=i(45956),y=i(37995),x=i(73828);const v=(0,l.Ue)(),w=[0,0],_=new x.Z(0,0,0,0),b=2048,f=2048,R=!1,P=!1,C=!1;let S=class extends s.Z{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=C,this.imageMaxWidth=b,this.imageMaxHeight=f,this.imageRotationSupported=R,this.imageNormalizationSupported=P,this.update=(0,a.Ds)((async(e,t)=>{if(!e.stationary||this.destroyed)return null;const i=e.state,r=(0,d.C5)(i.spatialReference),s=this.hidpi?e.pixelRatio:1,a=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];a?(w[0]=i.worldScreenWidth,w[1]=i.size[1]):this.imageRotationSupported?(w[0]=i.size[0],w[1]=i.size[1]):g(w,i);const n=Math.floor(w[0]*s)>this.imageMaxWidth||Math.floor(w[1]*s)>this.imageMaxHeight,o=r&&(i.extent.xmin<r.valid[0]||i.extent.xmax>r.valid[1]),h=!this.imageNormalizationSupported&&o,l=!n&&!h,u=this.imageRotationSupported?i.rotation:0;if(l){const e=a?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,w,e,i.resolution,u,s,t)}else{let e=Math.min(this.imageMaxWidth,this.imageMaxHeight);h&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,u,s,t)}return this._imagePromise.then((async e=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=e?e:[];for(const t of this.container.children)e.includes(t)||t.fadeOut().then((()=>{t.remove()}));for(const t of e)this.container.addChild(t),t.fadeIn()}})).catch((e=>{throw this._imagePromise=null,e}))}),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(e){for(const t of this.container.children){if(!t.visible||!t.stage)return;e(t),t.invalidateTexture(),t.requestRender()}}async _export(e,t,i,r,s,a){const n=await this.fetchSource(e,Math.floor(t*s),Math.floor(i*s),{rotation:r,pixelRatio:s,signal:a}),o=new m.eY(n,"additive");return o.x=e.xmin,o.y=e.ymax,o.resolution=e.width/t,o.rotation=r,o.pixelRatio=s,o}async _singleExport(e,t,i,r,s,a,n){!function(e,t,i,r){const[s,a]=t,[n,o]=r,h=.5*i;e[0]=s-h*n,e[1]=a-h*o,e[2]=s+h*n,e[3]=a+h*o}(v,i,r,t);const o=new h.Z(v[0],v[1],v[2],v[3],e.spatialReference);return[await this._export(o,t[0],t[1],s,a,n)]}_tiledExport(e,t,i,r,s){const a=u.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),n=new y.Z(a),o=n.getTileCoverage(e);if(!o)return null;const l=[];return o.forEach(((a,o,d,u)=>{_.set(a,o,d,u),n.getTileBounds(v,_);const c=new h.Z(v[0],v[1],v[2],v[3],e.spatialReference);l.push(this._export(c,t,t,i,r,s))})),Promise.all(l)}};(0,r._)([(0,n.Cb)()],S.prototype,"_imagePromise",void 0),(0,r._)([(0,n.Cb)()],S.prototype,"bitmaps",void 0),(0,r._)([(0,n.Cb)()],S.prototype,"container",void 0),(0,r._)([(0,n.Cb)()],S.prototype,"fetchSource",void 0),(0,r._)([(0,n.Cb)()],S.prototype,"hidpi",void 0),(0,r._)([(0,n.Cb)()],S.prototype,"imageMaxWidth",void 0),(0,r._)([(0,n.Cb)()],S.prototype,"imageMaxHeight",void 0),(0,r._)([(0,n.Cb)()],S.prototype,"imageRotationSupported",void 0),(0,r._)([(0,n.Cb)()],S.prototype,"imageNormalizationSupported",void 0),(0,r._)([(0,n.Cb)()],S.prototype,"requestUpdate",void 0),(0,r._)([(0,n.Cb)()],S.prototype,"updating",null),S=(0,r._)([(0,o.j)("esri.views.2d.layers.support.ExportStrategy")],S);const E=S}}]);
//# sourceMappingURL=8226.2e6edee1.chunk.js.map