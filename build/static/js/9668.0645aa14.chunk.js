"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[9668],{6741:(e,r,i)=>{i.d(r,{O:()=>b});var t=i(27366),s=i(76200),l=i(66978),a=i(35995),o=i(49901),n=i(49861),y=(i(63780),i(93169),i(25243),i(38511)),p=i(69912),u=i(53866),d=i(78952),c=i(45948);const b=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0}readCapabilities(e,r){var i,t;const s=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!s)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const l=this.type,a=s.includes("query"),n=s.includes("map"),y=!!r.exportTilesAllowed,p=s.includes("tilemap"),u="tile"!==l&&!!r.supportsDynamicLayers,d="tile"!==l&&(!r.tileInfo||u),c="tile"!==l&&(!r.tileInfo||u),b="tile"!==l,f=r.cimVersion&&o.G.parse(r.cimVersion),h=null!=(i=null==f?void 0:f.since(1,4))&&i,g=null!=(t=null==f?void 0:f.since(2,0))&&t;return{operations:{supportsQuery:a,supportsExportMap:n,supportsExportTiles:y,supportsTileMap:p},exportMap:n?{supportsArcadeExpressionForLabeling:h,supportsSublayersChanges:b,supportsDynamicLayers:u,supportsSublayerVisibility:d,supportsSublayerDefinitionExpression:c,supportsCIMSymbols:g}:null,exportTiles:y?{maxExportTilesCount:+r.maxExportTilesCount}:null}}readVersion(e,r){let i=r.currentVersion;return i||(i=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),i}async fetchSublayerInfo(e,r){return await this.fetchAllLayersAndTables(r),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=(0,s.default)((0,a.mN)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const r of e.data.layers)this._allLayersAndTablesMap.set(r.id,r);return{result:e.data}}),(e=>({error:e}))));const r=await this._allLayersAndTablesPromise;if((0,l.k_)(e),"result"in r)return r.result;throw r.error}};return(0,t._)([(0,n.Cb)({readOnly:!0})],r.prototype,"capabilities",void 0),(0,t._)([(0,y.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),(0,t._)([(0,n.Cb)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,t._)([(0,n.Cb)({type:u.Z})],r.prototype,"fullExtent",void 0),(0,t._)([(0,n.Cb)(c.id)],r.prototype,"id",void 0),(0,t._)([(0,n.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),(0,t._)([(0,n.Cb)(c.C_)],r.prototype,"popupEnabled",void 0),(0,t._)([(0,n.Cb)({type:d.Z})],r.prototype,"spatialReference",void 0),(0,t._)([(0,n.Cb)({readOnly:!0})],r.prototype,"version",void 0),(0,t._)([(0,y.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=(0,t._)([(0,p.j)("esri.layers.mixins.ArcGISMapService")],r),r}},18870:(e,r,i)=>{i.d(r,{x:()=>g});var t=i(27366),s=i(81608),l=i(77178),a=i(10064),o=i(32718),n=i(49861),y=(i(63780),i(93169),i(23879)),p=(i(25243),i(69912)),u=i(25265),d=i(77990),c=i(58132);const b=o.Z.getLogger("esri.layers.TileLayer");const f=s.Z.ofType(d.Z);function h(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&h(e.sublayers,r)}))}const g=e=>{let r=class extends e{constructor(){super(...arguments),this.allSublayers=new l.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[u.s3.SERVICE]:{},[u.s3.PORTAL_ITEM]:{},[u.s3.WEB_SCENE]:{},[u.s3.WEB_MAP]:{}},this.handles.add(this.watch("sublayers",((e,r)=>this._handleSublayersChange(e,r)),!0))}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:i}=this,t=(0,u.M9)(r.origin);if(t<u.s3.SERVICE)return;if(i[t]={context:r,visibleLayers:e.visibleLayers||i[t].visibleLayers,layers:e.layers||i[t].layers},t>u.s3.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:s,origin:l}=this.createSublayersForOrigin("web-document"),a=(0,y.vw)(this);a.setDefaultOrigin(l),this._set("sublayers",new f(s)),a.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=(0,u.M9)("web-document"===e?"web-map":e);let i=u.s3.SERVICE,t=this.sublayersSourceJSON[u.s3.SERVICE].layers,s=this.sublayersSourceJSON[u.s3.SERVICE].context,l=null;const a=[u.s3.PORTAL_ITEM,u.s3.WEB_SCENE,u.s3.WEB_MAP].filter((e=>e<=r));for(const u of a){const e=this.sublayersSourceJSON[u];(0,c.ac)(e.layers)&&(i=u,t=e.layers,s=e.context,e.visibleLayers&&(l={visibleLayers:e.visibleLayers,context:e.context}))}const o=[u.s3.PORTAL_ITEM,u.s3.WEB_SCENE,u.s3.WEB_MAP].filter((e=>e>i&&e<=r));let n=null;for(const u of o){const{layers:e,visibleLayers:r,context:i}=this.sublayersSourceJSON[u];e&&(n={layers:e,context:i}),r&&(l={visibleLayers:r,context:i})}const y=function(e,r){const i=[],t={};return e?(e.forEach((e=>{const s=new d.Z;if(s.read(e,r),t[s.id]=s,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(s)}else i.unshift(s)})),i):i}(t,s),p=new Map,b=new Set;if(n)for(const u of n.layers)p.set(u.id,u);if(l)for(const u of l.visibleLayers)b.add(u);return h(y,(e=>{n&&e.read(p.get(e.id),n.context),l&&e.read({defaultVisibility:b.has(e.id)},l.context)})),{origin:(0,u.x3)(i),sublayers:new f({items:y})}}read(e,r){super.read(e,r),this.readSublayers(e,r)}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(e=>{let{item:r}=e;r.parent=this,r.layer=this})),e.on("after-remove",(e=>{let{item:r}=e;r.parent=null,r.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{b.error(new a.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return(0,t._)([(0,n.Cb)({readOnly:!0})],r.prototype,"allSublayers",void 0),(0,t._)([(0,n.Cb)({readOnly:!0,type:s.Z.ofType(d.Z)})],r.prototype,"serviceSublayers",void 0),(0,t._)([(0,n.Cb)({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),(0,t._)([(0,n.Cb)({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=(0,t._)([(0,p.j)("esri.layers.mixins.SublayersOwner")],r),r}},77990:(e,r,i)=>{i.d(r,{Z:()=>W});var t,s=i(27366),l=(i(59486),i(44055)),a=(i(94931),i(78451),i(34213),i(46797),i(49018),i(34999),i(79850),i(9014),i(40464)),o=i(76200),n=i(76626),y=i(81608),p=i(10064),u=i(41691),d=i(79056),c=i(84652),b=i(54472),f=i(32718),h=i(92026),g=i(97642),m=i(35995),v=i(49861),S=i(23879),I=i(89125),w=i(38511),_=i(69912),E=i(31201),L=i(25243),C=i(25265),x=i(87165),O=i(83040),D=i(52410),T=i(77748),P=i(71065),F=i(64020),M=i(23505),A=i(21149),j=i(81085),V=i(10141),N=i(53866);function Z(e){return e&&"esriSMS"===e.type}function R(e,r,i){var t;const s=this.originIdOf(r)>=(0,C.M9)(i.origin);return{ignoreOrigin:!0,allowNull:s,enabled:!!i&&"map-image"===(null==(t=i.layer)?void 0:t.type)&&(i.writeSublayerStructure||s)}}function k(e,r,i){var t;return{enabled:!!i&&"tile"===(null==(t=i.layer)?void 0:t.type)&&this._isOverridden(r)}}function U(e,r,i){return{ignoreOrigin:!0,enabled:i&&i.writeSublayerStructure||!1}}function J(e,r,i){return{ignoreOrigin:!0,enabled:!!i&&(i.writeSublayerStructure||this.originIdOf(r)>=(0,C.M9)(i.origin))}}const B=f.Z.getLogger("esri.layers.support.Sublayer");let q=0;const $=new Set;$.add("layer"),$.add("parent"),$.add("loaded"),$.add("loadStatus"),$.add("loadError"),$.add("loadWarnings");let Q=t=class extends((0,u.p)((0,g.R)((0,d.I)(b.Z)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var r;if(!this.layer&&!this.url)throw new p.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let i=null;if(!this.layer||this.originIdOf("url")>C.s3.SERVICE||"data-layer"===(null==(r=this.source)?void 0:r.type))i=(await(0,o.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{var t;let r=this.id;"map-layer"===(null==(t=this.source)?void 0:t.type)&&(r=this.source.mapLayerId),i=await this.layer.fetchSublayerInfo(r,e)}i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}))})()),this}readCapabilities(e,r){const i=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[];return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:-1!==i.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new D.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const i of r.fields)if("esriFieldTypeGlobalID"===i.type)return i.name}get id(){const e=this._get("id");return null==e?q++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,i,t){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},t)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const i of r.fields)if("esriFieldTypeOID"===i.type)return i.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const i=r.layerDefinition;return 1-.01*(null!=i.transparency?i.transparency:i.drawingInfo.transparency)}writeOpacity(e,r,i,t){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=(0,L.vU)(this.parent.id):r.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if((0,n.dU)(r)){B.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new M.R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,L.se)(y.Z.ofType(t),e)}writeSublayers(e,r,i){this.get("sublayers.length")&&(r[i]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,r){let i=(r=r.layerDefinition||r).typeIdField;if(i&&r.fields){i=i.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===i));e&&(i=e.name)}return null}get url(){var e,r;const i=null!=(e=null==(r=this.layer)?void 0:r.parsedUrl)?e:this._lastParsedUrl,t=this.source;if(!i)return null;if(this._lastParsedUrl=i,"map-layer"===(null==t?void 0:t.type))return`${i.path}/${t.mapLayerId}`;const s={layer:JSON.stringify({source:this.source})};return`${i.path}/dynamicLayer?${(0,m.B7)(s)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,i,t){r[i]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,S.vw)(this),r=new t;return(0,S.vw)(r).store=e.clone($),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return(0,j.eZ)(this,e)}createQuery(){return new A.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,r;if(this.hasOwnProperty("sublayers"))return null;const t=null==(e=this.layer)?void 0:e.parsedUrl,s=new(0,(await Promise.resolve().then(i.bind(i,94990))).default)({url:t.path});return t&&this.source&&("map-layer"===this.source.type?s.layerId=this.source.mapLayerId:s.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(s.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(s.definitionExpression=this.definitionExpression),this.floorInfo&&(s.floorInfo=(0,c.d9)(this.floorInfo)),this.originIdOf("labelingInfo")>C.s3.SERVICE&&(s.labelingInfo=(0,c.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>C.s3.DEFAULTS&&(s.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>C.s3.DEFAULTS&&(s.legendEnabled=this.legendEnabled),this.originIdOf("visible")>C.s3.DEFAULTS&&(s.visible=this.visible),this.originIdOf("minScale")>C.s3.DEFAULTS&&(s.minScale=this.minScale),this.originIdOf("maxScale")>C.s3.DEFAULTS&&(s.maxScale=this.maxScale),this.originIdOf("opacity")>C.s3.DEFAULTS&&(s.opacity=this.opacity),this.originIdOf("popupTemplate")>C.s3.DEFAULTS&&(s.popupTemplate=(0,c.d9)(this.popupTemplate)),this.originIdOf("renderer")>C.s3.SERVICE&&(s.renderer=(0,c.d9)(this.renderer)),"data-layer"===(null==(r=this.source)?void 0:r.type)&&(s.dynamicDataSource=this.source.clone()),this.originIdOf("title")>C.s3.DEFAULTS&&(s.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>C.s3.DEFAULTS&&(s.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>C.s3.DEFAULTS&&(s.customParameters=this.layer.customParameters),s}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:i}=this;if(!r||!e)return null;const t=e.attributes?e.attributes[r]:void 0;if(null==t)return null;let s=null;return i.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===t.toString()&&(s=e),!!s)})),s}getFieldDomain(e,r){const i=r&&r.feature,t=this.getFeatureType(i);if(t){const r=t.domains&&t.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.createQuery(),r=arguments.length>1?arguments[1]:void 0;var t,s,l,a;if(await this.load(),!this.get("capabilities.operations.supportsQuery"))throw new p.Z("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:o},{default:n}]=await Promise.all([Promise.resolve().then(i.bind(i,5192)),Promise.resolve().then(i.bind(i,49818))]),y=await o(this.url,A.Z.from(e),null!=(t=null==(s=this.layer)?void 0:s.spatialReference)?t:null,{...r,query:{...null==(l=this.layer)?void 0:l.customParameters,token:null==(a=this.layer)?void 0:a.apiKey}}),u=n.fromJSON(y.data);if(null!=u&&u.features)for(const i of u.features)i.sourceLayer=this;return u}toExportImageJSON(e){var r;const i={id:this.id,source:(null==(r=this.source)?void 0:r.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};if(this.definitionExpression){const r=(0,h.pC)(e)?(0,V.Hp)(e,this):this.definitionExpression;i.definitionExpression=r}else(0,h.pC)(e)&&(i.definitionExpression=e);const t=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{}),s=Object.keys(t).some((e=>t[e]>C.s3.SERVICE));if(s){const e=i.drawingInfo={};t.renderer>C.s3.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),t.labelsVisible>C.s3.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&t.labelingInfo>C.s3.SERVICE&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),t.opacity>C.s3.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return i}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,r){if(e){const i="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of i)Z(e.symbol)&&r(e.symbol);"symbol"in e&&Z(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&Z(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const i=this.layer,t=this._get(e);let s,l;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",l="supportsModification"}const a=(0,S.vw)(this).getDefaultOrigin();if("service"!==a){if(s&&!1===this.get(`layer.capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(l&&!1===this.get(`capabilities.exportMap.${l}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${l}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==a&&t!==r&&i&&i.emit&&i.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(e=>{let{item:r}=e;r.parent=this,r.layer=this.layer})),e.on("after-remove",(e=>{let{item:r}=e;r.parent=null,r.layer=null})),e.on("before-changes",(e=>{const r=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||(B.error(new p.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,r){B.error(new p.Z("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};Q.test={isMapImageLayerOverridePolicy:e=>e===U||e===R,isTileImageLayerOverridePolicy:e=>e===k},(0,s._)([(0,v.Cb)({readOnly:!0})],Q.prototype,"capabilities",void 0),(0,s._)([(0,w.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],Q.prototype,"readCapabilities",null),(0,s._)([(0,v.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:R}}})],Q.prototype,"definitionExpression",null),(0,s._)([(0,v.Cb)({type:[O.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],Q.prototype,"fields",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],Q.prototype,"fieldsIndex",null),(0,s._)([(0,v.Cb)({type:P.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:R},origins:{"web-scene":{read:!1,write:!1}}}})],Q.prototype,"floorInfo",null),(0,s._)([(0,v.Cb)({type:N.Z,json:{read:{source:"layerDefinition.extent"}}})],Q.prototype,"fullExtent",void 0),(0,s._)([(0,v.Cb)({type:String})],Q.prototype,"globalIdField",void 0),(0,s._)([(0,w.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Q.prototype,"readGlobalIdFieldFromService",null),(0,s._)([(0,v.Cb)({type:L.z8,json:{write:{ignoreOrigin:!0}}})],Q.prototype,"id",null),(0,s._)([(0,v.Cb)({value:null,type:[T.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:U}}})],Q.prototype,"labelingInfo",null),(0,s._)([(0,E.c)("labelingInfo")],Q.prototype,"writeLabelingInfo",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:U}}})],Q.prototype,"labelsVisible",null),(0,s._)([(0,v.Cb)({value:null})],Q.prototype,"layer",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:J}}})],Q.prototype,"legendEnabled",void 0),(0,s._)([(0,v.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],Q.prototype,"listMode",null),(0,s._)([(0,v.Cb)({type:Number,value:0,json:{write:{overridePolicy:U}}})],Q.prototype,"minScale",null),(0,s._)([(0,w.r)("minScale",["minScale","layerDefinition.minScale"])],Q.prototype,"readMinScale",null),(0,s._)([(0,v.Cb)({type:Number,value:0,json:{write:{overridePolicy:U}}})],Q.prototype,"maxScale",null),(0,s._)([(0,w.r)("maxScale",["maxScale","layerDefinition.maxScale"])],Q.prototype,"readMaxScale",null),(0,s._)([(0,v.Cb)({readOnly:!0})],Q.prototype,"effectiveScaleRange",null),(0,s._)([(0,v.Cb)({type:String})],Q.prototype,"objectIdField",void 0),(0,s._)([(0,w.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Q.prototype,"readObjectIdFieldFromService",null),(0,s._)([(0,v.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:U}}})],Q.prototype,"opacity",null),(0,s._)([(0,w.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],Q.prototype,"readOpacity",null),(0,s._)([(0,E.c)("opacity")],Q.prototype,"writeOpacity",null),(0,s._)([(0,v.Cb)({json:{type:L.z8,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:U}}})],Q.prototype,"parent",void 0),(0,s._)([(0,E.c)("parent")],Q.prototype,"writeParent",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:J,writer(e,r,i){r[i]=!e}}}})],Q.prototype,"popupEnabled",void 0),(0,s._)([(0,v.Cb)({type:l.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:J}}})],Q.prototype,"popupTemplate",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],Q.prototype,"defaultPopupTemplate",null),(0,s._)([(0,v.Cb)({types:a.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:U},origins:{"web-scene":{types:a.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:U}}}}})],Q.prototype,"renderer",null),(0,s._)([(0,v.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":F.n,"map-layer":M.R}},cast(e){if(e){if("mapLayerId"in e)return(0,L.TJ)(M.R,e);if("dataSource"in e)return(0,L.TJ)(F.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:U}}})],Q.prototype,"source",null),(0,s._)([(0,v.Cb)()],Q.prototype,"sourceJSON",void 0),(0,s._)([(0,v.Cb)({value:null,json:{type:[L.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:U}}})],Q.prototype,"sublayers",null),(0,s._)([(0,I.p)("sublayers")],Q.prototype,"castSublayers",null),(0,s._)([(0,E.c)("sublayers")],Q.prototype,"writeSublayers",null),(0,s._)([(0,v.Cb)({type:String,json:{name:"name",write:{overridePolicy:J}}})],Q.prototype,"title",void 0),(0,s._)([(0,v.Cb)({type:String})],Q.prototype,"typeIdField",void 0),(0,s._)([(0,w.r)("typeIdField",["layerDefinition.typeIdField"])],Q.prototype,"readTypeIdField",null),(0,s._)([(0,v.Cb)({type:[x.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],Q.prototype,"types",void 0),(0,s._)([(0,v.Cb)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:k}}})],Q.prototype,"url",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:U}}})],Q.prototype,"visible",null),(0,s._)([(0,E.c)("visible")],Q.prototype,"writeVisible",null),Q=t=(0,s._)([(0,_.j)("esri.layers.support.Sublayer")],Q);const W=Q}}]);
//# sourceMappingURL=9668.0645aa14.chunk.js.map