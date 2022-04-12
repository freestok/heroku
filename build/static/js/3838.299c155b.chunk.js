"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3838],{13838:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}});var n,l=r(37762),i=r(15861),o=r(93433),a=r(1413),s=r(15671),u=r(43144),y=r(11752),f=r(61120),p=r(60136),c=r(54062),v=r(87757),d=r(27366),h=(r(59486),r(81608)),b=r(77178),m=r(92026),g=r(97642),S=r(66978),k=r(35995),_=r(49861),C=(r(63780),r(93169),r(25243)),w=r(38511),Z=r(69912),x=r(31201),E=r(78952),I=r(74184),O=r(6693),G=r(6061),P=r(29598),L=r(71684),F=r(56811),M=r(45948),j=r(91505),T=r(46784),N=r(54472),R=r(94172),J=r(643),K=r(89125),z=r(21857),A=r(53866),H=n=function(e){(0,p.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments))._sublayersHandles=null,e.description=null,e.id=null,e.networkLink=null,e.title=null,e.sourceJSON=null,e.fullExtent=null,e}return(0,u.Z)(r,[{key:"initialize",value:function(){var e=this;(0,R.N1)((function(){return e.networkLink})).then((function(){return(0,R.N1)((function(){return!0===e.visible}))})).then((function(){return e.load()}))}},{key:"load",value:function(e){var t=this;if(this.networkLink&&!this.networkLink.viewFormat){var r=(0,m.pC)(e)?e.signal:null,l=this._fetchService(this._get("networkLink").href,r).then((function(e){var r=(0,z.lm)(e.sublayers);t.fullExtent=A.Z.fromJSON(r),t.sourceJSON=e;var l=(0,C.se)(h.Z.ofType(n),(0,z.j5)(n,e));t.sublayers?t.sublayers.addMany(l):t.sublayers=l,t.layer.emit("sublayer-update"),t.layer&&t.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(l),Promise.resolve(this)}}},{key:"sublayers",set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))]),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return(0,C.se)(h.Z.ofType(n),e)}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}},{key:"readVisible",value:function(e,t){return!!t.visibility}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"_fetchService",value:function(e,t){return(0,z.CS)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((function(e){return(0,z.Cw)(e.data)}))}}]),r}(j.Z.EventedMixin((0,T.eC)(N.Z)));(0,d._)([(0,_.Cb)()],H.prototype,"description",void 0),(0,d._)([(0,_.Cb)()],H.prototype,"id",void 0),(0,d._)([(0,_.Cb)({readOnly:!0,value:null})],H.prototype,"networkLink",void 0),(0,d._)([(0,_.Cb)({json:{write:{allowNull:!0}}})],H.prototype,"parent",void 0),(0,d._)([(0,_.Cb)({value:null,json:{write:{allowNull:!0}}})],H.prototype,"sublayers",null),(0,d._)([(0,K.p)("sublayers")],H.prototype,"castSublayers",null),(0,d._)([(0,_.Cb)({value:null,json:{read:{source:"name",reader:function(e){return(0,J.Cb)(e)}}}})],H.prototype,"title",void 0),(0,d._)([(0,_.Cb)({value:!0})],H.prototype,"visible",null),(0,d._)([(0,w.r)("visible",["visibility"])],H.prototype,"readVisible",null),(0,d._)([(0,_.Cb)()],H.prototype,"sourceJSON",void 0),(0,d._)([(0,_.Cb)({value:null})],H.prototype,"layer",null),(0,d._)([(0,_.Cb)({type:A.Z})],H.prototype,"fullExtent",void 0);var Y=H=n=(0,d._)([(0,Z.j)("esri.layers.support.KMLSublayer")],H),W=["kml","xml"],U=function(e){(0,p.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l)))._visibleFolders=[],e.allSublayers=new b.Z({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.outSpatialReference=E.Z.WGS84,e.path=null,e.legendEnabled=!1,e.operationalLayerType="KML",e.sublayers=null,e.type="kml",e.url=null,e}return(0,u.Z)(r,[{key:"initialize",value:function(){var e=this;this.watch("sublayers",(function(t,r){r&&r.forEach((function(e){e.parent=null,e.layer=null})),t&&t.forEach((function(t){t.parent=e,t.layer=e}))}),!0),this.on("sublayer-update",(function(){return e.notifyChange("fullExtent")}))}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"readSublayersFromItemOrWebMap",value:function(e,t){this._visibleFolders=t.visibleFolders}},{key:"readSublayers",value:function(e,t,r){return(0,z.j5)(Y,t,r,this._visibleFolders)}},{key:"writeSublayers",value:function(e,t){for(var r=[],n=e.toArray();n.length;){var l=n[0];l.networkLink||(l.visible&&r.push(l.id),l.sublayers&&n.push.apply(n,(0,o.Z)(l.sublayers.toArray()))),n.shift()}t.visibleFolders=r}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,k.vt)(this.url,W)||"KML":e||""},set:function(e){this._set("title",e)}},{key:"visibleSublayers",get:function(){var e=this.sublayers,t=[];return e&&e.forEach((function e(r){r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(e))})),t}},{key:"fullExtent",get:function(){return this._recomputeFullExtent()}},{key:"load",value:function(e){var t=this,r=(0,m.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(S.r9).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"destroy",value:function(){(0,y.Z)((0,f.Z)(r.prototype),"destroy",this).call(this),this.allSublayers.destroy()}},{key:"_fetchService",value:function(){var e=(0,i.Z)(v.mark((function e(t){var r,n,l=this;return v.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then((function(){return l.resourceInfo?{ssl:!1,data:l.resourceInfo}:(0,z.CS)(l.url,l.outSpatialReference,l.refreshInterval,t)}));case 2:r=e.sent,(n=(0,z.Cw)(r.data))&&this.read(n,{origin:"service"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_recomputeFullExtent",value:function(){var e=null;(0,m.pC)(this.extent)&&(e=this.extent.clone());return function t(r){if(r.sublayers){var n,i=(0,l.Z)(r.sublayers.items);try{for(i.s();!(n=i.n()).done;){var o=n.value;t(o),o.visible&&o.fullExtent&&((0,m.pC)(e)?e.union(o.fullExtent):e=o.fullExtent.clone())}}catch(a){i.e(a)}finally{i.f()}}}(this),e}}]),r}((0,O.h)((0,L.Q)((0,F.M)((0,G.q)((0,P.I)((0,g.R)(I.Z)))))));(0,d._)([(0,_.Cb)({readOnly:!0})],U.prototype,"allSublayers",void 0),(0,d._)([(0,_.Cb)({type:E.Z})],U.prototype,"outSpatialReference",void 0),(0,d._)([(0,_.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],U.prototype,"path",void 0),(0,d._)([(0,_.Cb)({readOnly:!0,json:{read:!1,write:!1}})],U.prototype,"legendEnabled",void 0),(0,d._)([(0,_.Cb)({type:["show","hide","hide-children"]})],U.prototype,"listMode",void 0),(0,d._)([(0,_.Cb)({type:["KML"]})],U.prototype,"operationalLayerType",void 0),(0,d._)([(0,_.Cb)({})],U.prototype,"resourceInfo",void 0),(0,d._)([(0,_.Cb)({type:h.Z.ofType(Y),json:{write:{ignoreOrigin:!0}}})],U.prototype,"sublayers",void 0),(0,d._)([(0,w.r)(["web-map","portal-item"],"sublayers",["visibleFolders"])],U.prototype,"readSublayersFromItemOrWebMap",null),(0,d._)([(0,w.r)("service","sublayers",["sublayers"])],U.prototype,"readSublayers",null),(0,d._)([(0,x.c)("sublayers")],U.prototype,"writeSublayers",null),(0,d._)([(0,_.Cb)({readOnly:!0,json:{read:!1}})],U.prototype,"type",void 0),(0,d._)([(0,_.Cb)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],U.prototype,"title",null),(0,d._)([(0,_.Cb)(M.HQ)],U.prototype,"url",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],U.prototype,"visibleSublayers",null),(0,d._)([(0,_.Cb)({type:A.Z})],U.prototype,"extent",void 0),(0,d._)([(0,_.Cb)()],U.prototype,"fullExtent",null);var q=U=(0,d._)([(0,Z.j)("esri.layers.KMLLayer")],U)},21857:function(e,t,r){r.d(t,{lm:function(){return w},CS:function(){return g},Yu:function(){return _},Cw:function(){return m},j5:function(){return S}});var n=r(15861),l=r(37762),i=r(87757),o=r(42265),a=r(19545),s=r(44055),u=r(76200),y=r(84652),f=r(35995),p=r(78952),c=r(41414),v=r(376),d=r(9014),h=r(49818),b={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function m(e){var t=e.folders||[],r=t.slice(),n=new Map,i=new Map,o=new Map,a=new Map,s=new Map,u={esriGeometryPoint:i,esriGeometryPolyline:o,esriGeometryPolygon:a};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=(0,y.d9)(e);t.featureSet.features=[];var r=e.featureSet.geometryType;n.set(r,t);var l=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?k(i,l,e.featureSet.features):"esriGeometryPolyline"===r?k(o,l,e.featureSet.features):"esriGeometryPolygon"===r&&k(a,l,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){s.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(n){var l=function(e,t,r){var n=function(e,t){var r;return t.some((function(t){return t.id===e&&(r=t,!0)})),r}(e,r);return n&&(n.parentFolderId=t,n.networkLink=n),n}(n,t.id,e.networkLinks);l&&r.push(l)}))})),r.forEach((function(e){if(e.featureInfos){e.points=(0,y.d9)(n.get("esriGeometryPoint")),e.polylines=(0,y.d9)(n.get("esriGeometryPolyline")),e.polygons=(0,y.d9)(n.get("esriGeometryPolygon")),e.mapImages=[];var t,r=(0,l.Z)(e.featureInfos);try{for(r.s();!(t=r.n()).done;){var i=t.value;switch(i.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var o=u[i.type].get(i.id);o&&e[b[i.type]].featureSet.features.push(o);break;case"GroundOverlay":var a=s.get(i.id);a&&e.mapImages.push(a)}}}catch(f){r.e(f)}finally{r.f()}e.fullExtent=w([e])}}));var f=w(r);return{folders:t,sublayers:r,extent:f}}function g(e,t,r,n){var l=a.id&&a.id.findCredential(e);e=(0,f.fl)(e,{token:l&&l.token});var i=o.Z.kmlServiceUrl;return(0,u.default)(i,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function S(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],l=[],i={},o=t.sublayers,a=t.folders.map((function(e){return e.id}));return o.forEach((function(t){var o=new e;if(r?o.read(t,r):o.read(t),n.length&&a.indexOf(o.id)>-1&&(o.visible=-1!==n.indexOf(o.id)),i[t.id]=o,null!=t.parentFolderId&&-1!==t.parentFolderId){var s=i[t.parentFolderId];s.sublayers||(s.sublayers=[]),s.sublayers.unshift(o)}else l.unshift(o)})),l}function k(e,t,r){r.forEach((function(r){e.set(r.attributes[t],r)}))}function _(e){return C.apply(this,arguments)}function C(){return(C=(0,n.Z)(i.mark((function e(t){var r,n,o,a,u,y,f,p,c;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=h.default.fromJSON(t.featureSet).features,n=t.layerDefinition,o=(0,d.i)(n.drawingInfo.renderer),a=s.Z.fromJSON(t.popupInfo),u=[],y=(0,l.Z)(r),e.prev=2,y.s();case 4:if((f=y.n()).done){e.next=12;break}return p=f.value,e.next=8,o.getSymbolAsync(p);case 8:c=e.sent,p.symbol=c,p.popupTemplate=a,p.visible=!0,u.push(p);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),y.e(e.t0);case 17:return e.prev=17,y.f(),e.finish(17);case 20:return e.abrupt("return",u);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function w(e){var t,r=(0,c.Ue)(c.Gv),n=(0,c.Ue)(c.Gv),i=(0,l.Z)(e);try{for(i.s();!(t=i.n()).done;){var o=t.value;if(o.polygons&&o.polygons.featureSet&&o.polygons.featureSet.features){var a,s=(0,l.Z)(o.polygons.featureSet.features);try{for(s.s();!(a=s.n()).done;){var u=a.value;(0,v.Yg)(r,u.geometry),(0,c.TC)(n,r)}}catch(_){s.e(_)}finally{s.f()}}if(o.polylines&&o.polylines.featureSet&&o.polylines.featureSet.features){var y,f=(0,l.Z)(o.polylines.featureSet.features);try{for(f.s();!(y=f.n()).done;){var d=y.value;(0,v.Yg)(r,d.geometry),(0,c.TC)(n,r)}}catch(_){f.e(_)}finally{f.f()}}if(o.points&&o.points.featureSet&&o.points.featureSet.features){var h,b=(0,l.Z)(o.points.featureSet.features);try{for(b.s();!(h=b.n()).done;){var m=h.value;(0,v.Yg)(r,m.geometry),(0,c.TC)(n,r)}}catch(_){b.e(_)}finally{b.f()}}if(o.mapImages){var g,S=(0,l.Z)(o.mapImages);try{for(S.s();!(g=S.n()).done;){var k=g.value;(0,v.Yg)(r,k.extent),(0,c.TC)(n,r)}}catch(_){S.e(_)}finally{S.f()}}}}catch(_){i.e(_)}finally{i.f()}return(0,c.fS)(n,c.Gv)?null:{xmin:n[0],ymin:n[1],zmin:n[2],xmax:n[3],ymax:n[4],zmax:n[5],spatialReference:p.Z.WGS84}}}}]);
//# sourceMappingURL=3838.299c155b.chunk.js.map