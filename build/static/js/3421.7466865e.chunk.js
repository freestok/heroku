"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3421],{93421:function(e,t,r){r.r(t),r.d(t,{default:function(){return le}});var n=r(15671),i=r(43144),o=r(60136),u=r(54062),a=r(27366),s=r(49861),f=(r(63780),r(93169),r(25243)),c=r(69912),p=r(1413),l=r(15861),N=r(87757),y=r(76200),m=r(23084);function d(){return d=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.en)(t),o=(0,p.Z)((0,p.Z)({},i.query),{},{f:"json"},r.toJSON()),u=(0,m.lA)(o,n),e.abrupt("return",(0,y.default)(i.path+"/areasAndLengths",u).then((function(e){return e.data})));case 2:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}r(59486);var _=r(35594),T=r(80885);function h(){return h=(0,l.Z)(N.mark((function e(t,r,n,i){var o,u,a,s;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r[0].spatialReference,u=(0,m.en)(t),a=(0,p.Z)((0,p.Z)({},u.query),{},{f:"json",sr:JSON.stringify(o.toJSON()),polygons:JSON.stringify((0,_.F)(r).geometries),polylines:JSON.stringify((0,_.F)(n).geometries)}),s=(0,m.lA)(a,i),e.abrupt("return",(0,y.default)(u.path+"/autoComplete",s).then((function(e){return(e.data.geometries||[]).map((function(e){var t=e.rings;return new T.Z({spatialReference:o,rings:t})}))})));case 2:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function I(){return I=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.en)(t),o=(0,p.Z)((0,p.Z)({},i.query),{},{f:"json"},r.toJSON()),u=r.outSpatialReference||r.geometries[0].spatialReference,a=(0,m.lA)(o,n),e.abrupt("return",(0,y.default)(i.path+"/buffer",a).then((function(e){return(e.data.geometries||[]).map((function(e){var t=e.rings;return new T.Z({spatialReference:u,rings:t})}))})));case 2:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}var v=r(77981);function g(){return g=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r[0].spatialReference,o=(0,m.en)(t),u=(0,p.Z)((0,p.Z)({},o.query),{},{f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify((0,_.F)(r))}),a=(0,m.lA)(u,n),e.abrupt("return",(0,y.default)(o.path+"/convexHull",a).then((function(e){var t=e.data;return(0,v.im)(t.geometry).set({spatialReference:i})})));case 2:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function S(){return S=(0,l.Z)(N.mark((function e(t,r,n,i){var o,u,a,s,f,c,l,d;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,m.en)(t),u=r[0].spatialReference,a=(0,p.Z)((0,p.Z)({},i),{},{query:(0,p.Z)((0,p.Z)({},o.query),{},{f:"json",sr:JSON.stringify(u),target:JSON.stringify({geometryType:(0,v.Ji)(r[0]),geometries:r}),cutter:JSON.stringify(n)})}),e.next=5,(0,y.default)(o.path+"/cut",a);case 5:return s=e.sent,f=s.data,c=f.cutIndexes,l=f.geometries,d=void 0===l?[]:l,e.abrupt("return",{cutIndexes:c,geometries:d.map((function(e){var t=(0,v.im)(e);return t.spatialReference=u,t}))});case 11:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function O(){return O=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.geometries[0].spatialReference,o=(0,m.en)(t),u=(0,p.Z)((0,p.Z)({},o.query),{},{f:"json"},r.toJSON()),a=(0,m.lA)(u,n),e.abrupt("return",(0,y.default)(o.path+"/densify",a).then((function(e){return(e.data.geometries||[]).map((function(e){return(0,v.im)(e).set({spatialReference:i})}))})));case 2:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function R(){return R=(0,l.Z)(N.mark((function e(t,r,n,i){var o,u,a;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r[0].spatialReference,u=(0,m.en)(t),a={query:(0,p.Z)((0,p.Z)({},u.query),{},{f:"json",sr:JSON.stringify(o.toJSON()),geometries:JSON.stringify((0,_.F)(r)),geometry:JSON.stringify({geometryType:(0,v.Ji)(n),geometry:n.toJSON()})})},e.abrupt("return",(i&&(a=(0,p.Z)((0,p.Z)({},i),a)),(0,y.default)(u.path+"/difference",a).then((function(e){return(e.data.geometries||[]).map((function(e){return(0,v.im)(e).set({spatialReference:o})}))}))));case 3:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}function U(){return U=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.en)(t),o=(0,p.Z)((0,p.Z)({},i.query),{},{f:"json"},r.toJSON()),u=(0,m.lA)(o,n),e.abrupt("return",(0,y.default)(i.path+"/distance",u).then((function(e){var t=e.data;return t&&t.distance})));case 2:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}var E=r(43404),A=new E.X({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});function w(){return w=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a,s;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},null!=r.sr&&"object"==typeof r.sr?i.sr=r.sr.wkid||JSON.stringify(r.sr):i.sr=r.sr,i.strings=JSON.stringify(r.strings),o=r.conversionType||"mgrs",i.conversionType=A.toJSON(o),i.conversionMode=r.conversionMode,u=(0,m.en)(t),a=(0,p.Z)((0,p.Z)({},u.query),{},{f:"json"},i),s=(0,m.lA)(a,n),e.abrupt("return",(0,y.default)(u.path+"/fromGeoCoordinateString",s).then((function(e){return e.data.coordinates})));case 6:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var Z=new E.X({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function J(e){var t=e.toJSON(),r=t.geometries,n=t.deviationUnit,i={maxDeviation:t.maxDeviation};return r&&r.length&&(i.geometries=JSON.stringify({geometryType:(0,v.Ji)(r[0]),geometries:r}),i.sr=JSON.stringify(r[0].spatialReference)),Z.write(n,i,"deviationUnit"),i}var C=r(46784),b=function(e){(0,o.Z)(r,e);var t=(0,u.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).deviationUnit=null,i.geometries=null,i.maxDeviation=null,i}return(0,i.Z)(r)}(C.wq);(0,a._)([(0,s.Cb)({type:String,json:{write:!0}})],b.prototype,"deviationUnit",void 0),(0,a._)([(0,s.Cb)({json:{read:{reader:function(e){return e?e.map((function(e){return(0,v.im)(e)})):null}},write:{writer:function(e,t){t.geometries=e.map((function(e){return e.toJSON()}))}}}})],b.prototype,"geometries",void 0),(0,a._)([(0,s.Cb)({type:Number,json:{write:!0}})],b.prototype,"maxDeviation",void 0),(b=(0,a._)([(0,c.j)("esri.rest.support.GeneralizeParameters")],b)).from=(0,f.se)(b);var k=b;function j(){return j=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a,s,f;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(r=k.from(r)).toJSON(),o=J(r),u=(0,m.en)(t),a=(0,p.Z)((0,p.Z)({},u.query),{},{f:"json"},o),s=i.geometries[0].spatialReference,f=(0,m.lA)(a,n),e.abrupt("return",(0,y.default)(u.path+"/generalize",f).then((function(e){return(e.data.geometries||[]).map((function(e){return(0,v.im)(e).set({spatialReference:s})}))})));case 2:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function D(){return D=(0,l.Z)(N.mark((function e(t,r,n,i){var o,u,a,s;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r[0].spatialReference,u=(0,m.en)(t),a=(0,p.Z)((0,p.Z)({},u.query),{},{f:"json",sr:JSON.stringify(o.toJSON()),geometries:JSON.stringify((0,_.F)(r)),geometry:JSON.stringify({geometryType:(0,v.Ji)(n),geometry:n.toJSON()})}),s=(0,m.lA)(a,i),e.abrupt("return",(0,y.default)(u.path+"/intersect",s).then((function(e){return(e.data.geometries||[]).map((function(e){return(0,v.im)(e).set({spatialReference:o})}))})));case 2:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}var x=new E.X({preserveShape:"preserve-shape"});function L(e){var t=e.toJSON(),r=t.polylines,n=t.lengthUnit,i=t.geodesic,o=t.calculationType,u={};u.polylines=JSON.stringify(r);var a=e.polylines[0].spatialReference;return u.sr=a.wkid?a.wkid:JSON.stringify(a.toJSON()),n&&(u.lengthUnit=n),i&&(u.geodesic=i),o&&(u.calculationType=x.toJSON(o)),u}var M=r(29909),q=function(e){(0,o.Z)(r,e);var t=(0,u.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).calculationType=null,i.geodesic=null,i.lengthUnit=null,i.polylines=null,i}return(0,i.Z)(r)}(C.wq);(0,a._)([(0,s.Cb)({type:String,json:{write:!0}})],q.prototype,"calculationType",void 0),(0,a._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],q.prototype,"geodesic",void 0),(0,a._)([(0,s.Cb)({json:{write:!0}})],q.prototype,"lengthUnit",void 0),(0,a._)([(0,s.Cb)({type:[M.Z],json:{read:{reader:function(e){return e?e.map((function(e){return(0,v.im)(e)})):null}},write:{writer:function(e,t){t.polylines=e.map((function(e){return e.toJSON()}))}}}})],q.prototype,"polylines",void 0),(q=(0,a._)([(0,c.j)("esri.rest.support.LengthsParameters")],q)).from=(0,f.se)(q);var G=q;function H(){return H=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=G.from(r),i=L(r),o=(0,m.en)(t),u=(0,p.Z)((0,p.Z)({},o.query),{},{f:"json"},i),a=(0,m.lA)(u,n),e.abrupt("return",(0,y.default)(o.path+"/lengths",a).then((function(e){return e.data})));case 3:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}var F=new E.X({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),Y=new E.X({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function K(e){var t=e.toJSON(),r=t.geometries,n=t.bevelRatio,i=t.offsetDistance,o=t.offsetHow,u=t.offsetUnit,a={bevelRatio:n,offsetDistance:i};return r&&r.length&&(a.geometries=JSON.stringify({geometryType:(0,v.Ji)(r[0]),geometries:r}),a.sr=JSON.stringify(r[0].spatialReference)),o&&(a.offsetHow=F.toJSON(o)),u&&(a.offsetUnit=Y.toJSON(u)),a}var B=function(e){(0,o.Z)(r,e);var t=(0,u.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).bevelRatio=null,i.geometries=null,i.offsetDistance=null,i.offsetHow=null,i.offsetUnit=null,i}return(0,i.Z)(r)}(C.wq);(0,a._)([(0,s.Cb)({type:Number,json:{write:!0}})],B.prototype,"bevelRatio",void 0),(0,a._)([(0,s.Cb)({json:{read:{reader:function(e){return e?e.map((function(e){return(0,v.im)(e)})):null}},write:{writer:function(e,t){t.geometries=e.map((function(e){return e.toJSON()}))}}}})],B.prototype,"geometries",void 0),(0,a._)([(0,s.Cb)({type:Number,json:{write:!0}})],B.prototype,"offsetDistance",void 0),(0,a._)([(0,s.Cb)({type:String,json:{write:!0}})],B.prototype,"offsetHow",void 0),(0,a._)([(0,s.Cb)({type:String,json:{write:!0}})],B.prototype,"offsetUnit",void 0),(B=(0,a._)([(0,c.j)("esri.rest.support.OffsetParameters")],B)).from=(0,f.se)(B);var P=B;function Q(){return Q=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a,s;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.from(r),i=K(r),o=(0,m.en)(t),u=(0,p.Z)((0,p.Z)({},o.query),{},{f:"json"},i),a=r.geometries[0].spatialReference,s=(0,m.lA)(u,n),e.abrupt("return",(0,y.default)(o.path+"/offset",s).then((function(e){return(e.data.geometries||[]).map((function(e){return(0,v.im)(e).set({spatialReference:a})}))})));case 3:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}var V=r(45362),X=new E.X({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});function z(e){var t=e.toJSON(),r=t.geometries1,n=t.geometries2,i=t.relation,o=t.relationParameter,u={};if(r&&r.length){u.geometries1=JSON.stringify({geometryType:(0,v.Ji)(r[0]),geometries:r});var a=r[0].spatialReference;u.sr=a.wkid?a.wkid:JSON.stringify(a)}return n&&n.length>0&&(u.geometries2=JSON.stringify({geometryType:(0,v.Ji)(n[0]),geometries:n})),i&&(u.relation=X.toJSON(i)),o&&(u.relationParam=o),u}var W=function(e){(0,o.Z)(r,e);var t=(0,u.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).geometries1=null,i.geometries2=null,i.relation=null,i.relationParameter=null,i}return(0,i.Z)(r)}(C.wq);(0,a._)([(0,s.Cb)({json:{read:{reader:function(e){return e?e.map((function(e){return(0,v.im)(e)})):null}},write:{writer:function(e,t){t.geometries1=e.map((function(e){return e.toJSON()}))}}}})],W.prototype,"geometries1",void 0),(0,a._)([(0,s.Cb)({json:{read:{reader:function(e){return e?e.map((function(e){return(0,v.im)(e)})):null}},write:{writer:function(e,t){t.geometries2=e.map((function(e){return e.toJSON()}))}}}})],W.prototype,"geometries2",void 0),(0,a._)([(0,s.Cb)({type:String,json:{write:!0}})],W.prototype,"relation",void 0),(0,a._)([(0,s.Cb)({type:String,json:{write:!0}})],W.prototype,"relationParameter",void 0),(W=(0,a._)([(0,c.j)("esri.rest.support.RelationParameters")],W)).from=(0,f.se)(W);var $=W;function ee(){return ee=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=$.from(r),i=z(r),o=(0,m.en)(t),u=(0,p.Z)((0,p.Z)({},o.query),{},{f:"json"},i),a=(0,m.lA)(u,n),e.abrupt("return",(0,y.default)(o.path+"/relation",a).then((function(e){return e.data.relations})));case 3:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}function te(){return te=(0,l.Z)(N.mark((function e(t,r,n,i){var o,u,a,s;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.spatialReference,u=(0,m.en)(t),a=(0,p.Z)((0,p.Z)({},u.query),{},{f:"json",sr:JSON.stringify(o.toJSON()),target:JSON.stringify({geometryType:(0,v.Ji)(r),geometry:r.toJSON()}),reshaper:JSON.stringify(n.toJSON())}),s=(0,m.lA)(a,i),e.abrupt("return",(0,y.default)(u.path+"/reshape",s).then((function(e){var t=e.data;return(0,v.im)(t.geometry).set({spatialReference:o})})));case 2:case"end":return e.stop()}}),e)}))),te.apply(this,arguments)}var re=r(35995);function ne(){return ne=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a,s,f;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="string"==typeof t?(0,re.mN)(t):t,o=r[0].spatialReference,u=(0,v.Ji)(r[0]),a=(0,p.Z)((0,p.Z)({},n),{},{query:(0,p.Z)((0,p.Z)({},i.query),{},{f:"json",sr:o.wkid?o.wkid:JSON.stringify(o),geometries:JSON.stringify((0,_.F)(r))})}),e.next=6,(0,y.default)(i.path+"/simplify",a);case 6:return s=e.sent,f=s.data,e.abrupt("return",(0,_.o)(f.geometries,u,o));case 9:case"end":return e.stop()}}),e)}))),ne.apply(this,arguments)}function ie(){return ie=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a,s;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={},null!=r.sr&&"object"==typeof r.sr?i.sr=r.sr.wkid||JSON.stringify(r.sr):i.sr=r.sr,i.coordinates=JSON.stringify(r.coordinates),o=r.conversionType||"mgrs",i.conversionType=A.toJSON(o),i.conversionMode=r.conversionMode,i.numOfDigits=r.numOfDigits,i.rounding=r.rounding,i.addSpaces=r.addSpaces,u=(0,m.en)(t),a=(0,p.Z)((0,p.Z)({},u.query),{},{f:"json"},i),s=(0,m.lA)(a,n),e.abrupt("return",(0,y.default)(u.path+"/toGeoCoordinateString",s).then((function(e){return e.data.strings})));case 6:case"end":return e.stop()}}),e)}))),ie.apply(this,arguments)}var oe=new E.X({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});function ue(e){var t=e.toJSON(),r=t.extendHow,n=t.polylines,i=t.trimExtendTo,o={};return o.extendHow=oe.toJSON(r),n&&n.length&&(o.polylines=JSON.stringify(n),o.sr=JSON.stringify(n[0].spatialReference)),i&&(o.trimExtendTo=JSON.stringify(i)),o}var ae=function(e){(0,o.Z)(r,e);var t=(0,u.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).extendHow="default-curve-extension",i.polylines=null,i.trimExtendTo=null,i}return(0,i.Z)(r)}(C.wq);(0,a._)([(0,s.Cb)({type:String,json:{write:!0}})],ae.prototype,"extendHow",void 0),(0,a._)([(0,s.Cb)({type:[M.Z],json:{read:{reader:function(e){return e?e.map((function(e){return(0,v.im)(e)})):null}},write:{writer:function(e,t){t.polylines=e.map((function(e){return e.toJSON()}))}}}})],ae.prototype,"polylines",void 0),(0,a._)([(0,s.Cb)({json:{read:{reader:function(e){return e?(0,v.im)(e):null}},write:{writer:function(e,t){t.trimExtendTo=e.toJSON()}}}})],ae.prototype,"trimExtendTo",void 0),(ae=(0,a._)([(0,c.j)("esri.rest.support.TrimExtendParameters")],ae)).from=(0,f.se)(ae);var se=ae;function fe(){return fe=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a,s;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=se.from(r),i=ue(r),o=(0,m.en)(t),u=(0,p.Z)((0,p.Z)({},o.query),{},{f:"json"},i),a=r.sr,s=(0,m.lA)(u,n),e.abrupt("return",(0,y.default)(o.path+"/trimExtend",s).then((function(e){return(e.data.geometries||[]).map((function(e){var t=e.paths;return new M.Z({spatialReference:a,paths:t})}))})));case 3:case"end":return e.stop()}}),e)}))),fe.apply(this,arguments)}function ce(){return ce=(0,l.Z)(N.mark((function e(t,r,n){var i,o,u,a;return N.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r[0].spatialReference,o=(0,m.en)(t),u=(0,p.Z)((0,p.Z)({},o.query),{},{f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify((0,_.F)(r))}),a=(0,m.lA)(u,n),e.abrupt("return",(0,y.default)(o.path+"/union",a).then((function(e){var t=e.data;return(0,v.im)(t.geometry).set({spatialReference:i})})));case 2:case"end":return e.stop()}}),e)}))),ce.apply(this,arguments)}var pe=function(e){(0,o.Z)(r,e);var t=(0,u.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).url=null,i}return(0,i.Z)(r,[{key:"areasAndLengths",value:function(e,t){return function(e,t,r){return d.apply(this,arguments)}(this.url,e,t)}},{key:"autoComplete",value:function(e,t,r){return function(e,t,r,n){return h.apply(this,arguments)}(this.url,e,t,r)}},{key:"buffer",value:function(e,t){return function(e,t,r){return I.apply(this,arguments)}(this.url,e,t)}},{key:"convexHull",value:function(e,t){return function(e,t,r){return g.apply(this,arguments)}(this.url,e,t)}},{key:"cut",value:function(e,t,r){return function(e,t,r,n){return S.apply(this,arguments)}(this.url,e,t,r)}},{key:"densify",value:function(e,t){return function(e,t,r){return O.apply(this,arguments)}(this.url,e,t)}},{key:"difference",value:function(e,t,r){return function(e,t,r,n){return R.apply(this,arguments)}(this.url,e,t,r)}},{key:"distance",value:function(e,t){return function(e,t,r){return U.apply(this,arguments)}(this.url,e,t)}},{key:"fromGeoCoordinateString",value:function(e,t){return function(e,t,r){return w.apply(this,arguments)}(this.url,e,t)}},{key:"generalize",value:function(e,t){return function(e,t,r){return j.apply(this,arguments)}(this.url,e,t)}},{key:"intersect",value:function(e,t,r){return function(e,t,r,n){return D.apply(this,arguments)}(this.url,e,t,r)}},{key:"labelPoints",value:function(e,t){return function(e,t,r){var n=t.map((function(e){return e.toJSON()})),i=t[0].spatialReference,o=(0,m.en)(e),u=(0,p.Z)((0,p.Z)({},o.query),{},{f:"json",sr:i.wkid?i.wkid:JSON.stringify(i.toJSON()),polygons:JSON.stringify(n)}),a=(0,m.lA)(u,r);return(0,y.default)(o.path+"/labelPoints",a).then((function(e){return(e.data.labelPoints||[]).map((function(e){return(0,v.im)(e).set({spatialReference:i})}))}))}(this.url,e,t)}},{key:"lengths",value:function(e,t){return function(e,t,r){return H.apply(this,arguments)}(this.url,e,t)}},{key:"offset",value:function(e,t){return function(e,t,r){return Q.apply(this,arguments)}(this.url,e,t)}},{key:"project",value:function(e,t){return(0,V.i)(this.url,e,t)}},{key:"relation",value:function(e,t){return function(e,t,r){return ee.apply(this,arguments)}(this.url,e,t)}},{key:"reshape",value:function(e,t,r){return function(e,t,r,n){return te.apply(this,arguments)}(this.url,e,t,r)}},{key:"simplify",value:function(e,t){return function(e,t,r){return ne.apply(this,arguments)}(this.url,e,t)}},{key:"toGeoCoordinateString",value:function(e,t){return function(e,t,r){return ie.apply(this,arguments)}(this.url,e,t)}},{key:"trimExtend",value:function(e,t){return function(e,t,r){return fe.apply(this,arguments)}(this.url,e,t)}},{key:"union",value:function(e,t){return function(e,t,r){return ce.apply(this,arguments)}(this.url,e,t)}}]),r}(r(4338).Z);pe.UNIT_METER=9001,pe.UNIT_GERMAN_METER=9031,pe.UNIT_FOOT=9002,pe.UNIT_SURVEY_FOOT=9003,pe.UNIT_CLARKE_FOOT=9005,pe.UNIT_FATHOM=9014,pe.UNIT_NAUTICAL_MILE=9030,pe.UNIT_SURVEY_CHAIN=9033,pe.UNIT_SURVEY_LINK=9034,pe.UNIT_SURVEY_MILE=9035,pe.UNIT_KILOMETER=9036,pe.UNIT_CLARKE_YARD=9037,pe.UNIT_CLARKE_CHAIN=9038,pe.UNIT_CLARKE_LINK=9039,pe.UNIT_SEARS_YARD=9040,pe.UNIT_SEARS_FOOT=9041,pe.UNIT_SEARS_CHAIN=9042,pe.UNIT_SEARS_LINK=9043,pe.UNIT_BENOIT_1895A_YARD=9050,pe.UNIT_BENOIT_1895A_FOOT=9051,pe.UNIT_BENOIT_1895A_CHAIN=9052,pe.UNIT_BENOIT_1895A_LINK=9053,pe.UNIT_BENOIT_1895B_YARD=9060,pe.UNIT_BENOIT_1895B_FOOT=9061,pe.UNIT_BENOIT_1895B_CHAIN=9062,pe.UNIT_BENOIT_1895B_LINK=9063,pe.UNIT_INDIAN_FOOT=9080,pe.UNIT_INDIAN_1937_FOOT=9081,pe.UNIT_INDIAN_1962_FOOT=9082,pe.UNIT_INDIAN_1975_FOOT=9083,pe.UNIT_INDIAN_YARD=9084,pe.UNIT_INDIAN_1937_YARD=9085,pe.UNIT_INDIAN_1962_YARD=9086,pe.UNIT_INDIAN_1975_YARD=9087,pe.UNIT_FOOT_1865=9070,pe.UNIT_RADIAN=9101,pe.UNIT_DEGREE=9102,pe.UNIT_ARCMINUTE=9103,pe.UNIT_ARCSECOND=9104,pe.UNIT_GRAD=9105,pe.UNIT_GON=9106,pe.UNIT_MICRORADIAN=9109,pe.UNIT_ARCMINUTE_CENTESIMAL=9112,pe.UNIT_ARCSECOND_CENTESIMAL=9113,pe.UNIT_MIL6400=9114,pe.UNIT_BRITISH_1936_FOOT=9095,pe.UNIT_GOLDCOAST_FOOT=9094,pe.UNIT_INTERNATIONAL_CHAIN=109003,pe.UNIT_INTERNATIONAL_LINK=109004,pe.UNIT_INTERNATIONAL_YARD=109001,pe.UNIT_STATUTE_MILE=9093,pe.UNIT_SURVEY_YARD=109002,pe.UNIT_50KILOMETER_LENGTH=109030,pe.UNIT_150KILOMETER_LENGTH=109031,pe.UNIT_DECIMETER=109005,pe.UNIT_CENTIMETER=109006,pe.UNIT_MILLIMETER=109007,pe.UNIT_INTERNATIONAL_INCH=109008,pe.UNIT_US_SURVEY_INCH=109009,pe.UNIT_INTERNATIONAL_ROD=109010,pe.UNIT_US_SURVEY_ROD=109011,pe.UNIT_US_NAUTICAL_MILE=109012,pe.UNIT_UK_NAUTICAL_MILE=109013,pe.UNIT_SQUARE_INCHES="esriSquareInches",pe.UNIT_SQUARE_FEET="esriSquareFeet",pe.UNIT_SQUARE_YARDS="esriSquareYards",pe.UNIT_ACRES="esriAcres",pe.UNIT_SQUARE_MILES="esriSquareMiles",pe.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",pe.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",pe.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",pe.UNIT_SQUARE_METERS="esriSquareMeters",pe.UNIT_ARES="esriAres",pe.UNIT_HECTARES="esriHectares",pe.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",(0,a._)([(0,s.Cb)()],pe.prototype,"url",void 0);var le=pe=(0,a._)([(0,c.j)("esri.tasks.GeometryService")],pe)}}]);
//# sourceMappingURL=3421.7466865e.chunk.js.map