"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3177],{13177:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var i=r(1413),n=r(15671),a=r(43144),s=r(11752),l=r(61120),u=r(60136),o=r(54062),y=r(27366),c=r(92026),h=r(8537),f=(r(32718),r(25243),r(63780),r(93169),r(75366),r(69912)),d=r(18661);var p=function(e){(0,u.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add([(0,h.S1)(this.view,"viewpoint",(function(){return e._update()}))])}},{key:"_injectOverrides",value:function(e){var t=(0,s.Z)((0,l.Z)(r.prototype),"_injectOverrides",this).call(this,e),i=this.view.scale,n=this.layer.sublayers.filter((function(e){return function(e,t){return!e.visible||0!==e.minScale&&t>e.minScale||0!==e.maxScale&&t<e.maxScale}(e,i)})).map((function(e){return e.subtypeCode}));if(!n.length)return t;t=(0,c.pC)(t)?t:(new d.Z).toJSON();var a="NOT ".concat(this.layer.subtypeField," IN (").concat(n.join(","),")");return t.where=t.where?"(".concat(t.where,") AND (").concat(a,")"):a,t}},{key:"_setLayersForFeature",value:function(e){var t=this.layer.fieldsIndex.get(this.layer.subtypeField),r=e.attributes[t.name],i=this.layer.sublayers.find((function(e){return e.subtypeCode===r}));e.layer=i,e.sourceLayer=this.layer}},{key:"_createSchemaConfig",value:function(){var e=this,t={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((function(t){return{featureReduction:null,geometryType:e.layer.geometryType,labelingInfo:t.labelingInfo,labelsVisible:t.labelsVisible,renderer:t.renderer,subtypeCode:t.subtypeCode,orderBy:null}}))},n=this.layer.sublayers.map((function(e){return e.subtypeCode})).join(","),a=this.layer.sublayers.length?"".concat(this.layer.subtypeField," IN (").concat(n,")"):"1=2",u=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return u+=a,(0,i.Z)((0,i.Z)((0,i.Z)({},(0,s.Z)((0,l.Z)(r.prototype),"_createSchemaConfig",this).call(this)),t),{},{definitionExpression:u})}}]),r}(r(99288).default),b=p=(0,y._)([(0,f.j)("esri.views.2d.layers.SubtypeGroupLayerView2D")],p)}}]);
//# sourceMappingURL=3177.757ac641.chunk.js.map