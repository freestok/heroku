"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[3421],{93421:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var n=r(27366),i=r(49861),s=(r(63780),r(93169),r(25243)),o=r(69912),a=r(76200),l=r(23084);r(59486);var u=r(35594),N=r(80885);var c=r(77981);var f=r(43404);const p=new f.X({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});const m=new f.X({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});var y=r(46784);let _=class extends y.wq{constructor(e){super(e),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],_.prototype,"deviationUnit",void 0),(0,n._)([(0,i.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,c.im)(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],_.prototype,"geometries",void 0),(0,n._)([(0,i.Cb)({type:Number,json:{write:!0}})],_.prototype,"maxDeviation",void 0),_=(0,n._)([(0,o.j)("esri.rest.support.GeneralizeParameters")],_),_.from=(0,s.se)(_);const d=_;async function T(e,t,r){const n=(t=d.from(t)).toJSON(),i=function(e){const{geometries:t,deviationUnit:r,maxDeviation:n}=e.toJSON(),i={maxDeviation:n};return t&&t.length&&(i.geometries=JSON.stringify({geometryType:(0,c.Ji)(t[0]),geometries:t}),i.sr=JSON.stringify(t[0].spatialReference)),m.write(r,i,"deviationUnit"),i}(t),s=(0,l.en)(e),o={...s.query,f:"json",...i},u=n.geometries[0].spatialReference,N=(0,l.lA)(o,r);return(0,a.default)(s.path+"/generalize",N).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>(0,c.im)(e).set({spatialReference:u})))}))}const I=new f.X({preserveShape:"preserve-shape"});function g(e){const{polylines:t,lengthUnit:r,geodesic:n,calculationType:i}=e.toJSON(),s={};s.polylines=JSON.stringify(t);const o=e.polylines[0].spatialReference;return s.sr=o.wkid?o.wkid:JSON.stringify(o.toJSON()),r&&(s.lengthUnit=r),n&&(s.geodesic=n),i&&(s.calculationType=I.toJSON(i)),s}var S=r(29909);let O=class extends y.wq{constructor(e){super(e),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],O.prototype,"calculationType",void 0),(0,n._)([(0,i.Cb)({type:Boolean,json:{write:!0}})],O.prototype,"geodesic",void 0),(0,n._)([(0,i.Cb)({json:{write:!0}})],O.prototype,"lengthUnit",void 0),(0,n._)([(0,i.Cb)({type:[S.Z],json:{read:{reader:e=>e?e.map((e=>(0,c.im)(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],O.prototype,"polylines",void 0),O=(0,n._)([(0,o.j)("esri.rest.support.LengthsParameters")],O),O.from=(0,s.se)(O);const R=O;const h=new f.X({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),U=new f.X({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let E=class extends y.wq{constructor(e){super(e),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};(0,n._)([(0,i.Cb)({type:Number,json:{write:!0}})],E.prototype,"bevelRatio",void 0),(0,n._)([(0,i.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,c.im)(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],E.prototype,"geometries",void 0),(0,n._)([(0,i.Cb)({type:Number,json:{write:!0}})],E.prototype,"offsetDistance",void 0),(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],E.prototype,"offsetHow",void 0),(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],E.prototype,"offsetUnit",void 0),E=(0,n._)([(0,o.j)("esri.rest.support.OffsetParameters")],E),E.from=(0,s.se)(E);const A=E;async function J(e,t,r){const n=function(e){const{geometries:t,bevelRatio:r,offsetDistance:n,offsetHow:i,offsetUnit:s}=e.toJSON(),o={bevelRatio:r,offsetDistance:n};return t&&t.length&&(o.geometries=JSON.stringify({geometryType:(0,c.Ji)(t[0]),geometries:t}),o.sr=JSON.stringify(t[0].spatialReference)),i&&(o.offsetHow=h.toJSON(i)),s&&(o.offsetUnit=U.toJSON(s)),o}(t=A.from(t)),i=(0,l.en)(e),s={...i.query,f:"json",...n},o=t.geometries[0].spatialReference,u=(0,l.lA)(s,r);return(0,a.default)(i.path+"/offset",u).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>(0,c.im)(e).set({spatialReference:o})))}))}var w=r(45362);const C=new f.X({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});let v=class extends y.wq{constructor(e){super(e),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};(0,n._)([(0,i.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,c.im)(e))):null},write:{writer:(e,t)=>{t.geometries1=e.map((e=>e.toJSON()))}}}})],v.prototype,"geometries1",void 0),(0,n._)([(0,i.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,c.im)(e))):null},write:{writer:(e,t)=>{t.geometries2=e.map((e=>e.toJSON()))}}}})],v.prototype,"geometries2",void 0),(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],v.prototype,"relation",void 0),(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],v.prototype,"relationParameter",void 0),v=(0,n._)([(0,o.j)("esri.rest.support.RelationParameters")],v),v.from=(0,s.se)(v);const j=v;async function D(e,t,r){const n=function(e){const{geometries1:t,geometries2:r,relation:n,relationParameter:i}=e.toJSON(),s={};if(t&&t.length){s.geometries1=JSON.stringify({geometryType:(0,c.Ji)(t[0]),geometries:t});const e=t[0].spatialReference;s.sr=e.wkid?e.wkid:JSON.stringify(e)}return r&&r.length>0&&(s.geometries2=JSON.stringify({geometryType:(0,c.Ji)(r[0]),geometries:r})),n&&(s.relation=C.toJSON(n)),i&&(s.relationParam=i),s}(t=j.from(t)),i=(0,l.en)(e),s={...i.query,f:"json",...n},o=(0,l.lA)(s,r);return(0,a.default)(i.path+"/relation",o).then((e=>{let{data:t}=e;return t.relations}))}var L=r(35995);const b=new f.X({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});let M=class extends y.wq{constructor(e){super(e),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};(0,n._)([(0,i.Cb)({type:String,json:{write:!0}})],M.prototype,"extendHow",void 0),(0,n._)([(0,i.Cb)({type:[S.Z],json:{read:{reader:e=>e?e.map((e=>(0,c.im)(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],M.prototype,"polylines",void 0),(0,n._)([(0,i.Cb)({json:{read:{reader:e=>e?(0,c.im)(e):null},write:{writer:(e,t)=>{t.trimExtendTo=e.toJSON()}}}})],M.prototype,"trimExtendTo",void 0),M=(0,n._)([(0,o.j)("esri.rest.support.TrimExtendParameters")],M),M.from=(0,s.se)(M);const q=M;async function G(e,t,r){const n=function(e){const{extendHow:t,polylines:r,trimExtendTo:n}=e.toJSON(),i={};return i.extendHow=b.toJSON(t),r&&r.length&&(i.polylines=JSON.stringify(r),i.sr=JSON.stringify(r[0].spatialReference)),n&&(i.trimExtendTo=JSON.stringify(n)),i}(t=q.from(t)),i=(0,l.en)(e),s={...i.query,f:"json",...n},o=t.sr,u=(0,l.lA)(s,r);return(0,a.default)(i.path+"/trimExtend",u).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>{let{paths:t}=e;return new S.Z({spatialReference:o,paths:t})}))}))}var x=r(4338);let H=class extends x.Z{constructor(e){super(e),this.url=null}areasAndLengths(e,t){return async function(e,t,r){const n=(0,l.en)(e),i={...n.query,f:"json",...t.toJSON()},s=(0,l.lA)(i,r);return(0,a.default)(n.path+"/areasAndLengths",s).then((e=>e.data))}(this.url,e,t)}autoComplete(e,t,r){return async function(e,t,r,n){const i=t[0].spatialReference,s=(0,l.en)(e),o={...s.query,f:"json",sr:JSON.stringify(i.toJSON()),polygons:JSON.stringify((0,u.F)(t).geometries),polylines:JSON.stringify((0,u.F)(r).geometries)},c=(0,l.lA)(o,n);return(0,a.default)(s.path+"/autoComplete",c).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>{let{rings:t}=e;return new N.Z({spatialReference:i,rings:t})}))}))}(this.url,e,t,r)}buffer(e,t){return async function(e,t,r){const n=(0,l.en)(e),i={...n.query,f:"json",...t.toJSON()},s=t.outSpatialReference||t.geometries[0].spatialReference,o=(0,l.lA)(i,r);return(0,a.default)(n.path+"/buffer",o).then((e=>(e.data.geometries||[]).map((e=>{let{rings:t}=e;return new N.Z({spatialReference:s,rings:t})}))))}(this.url,e,t)}convexHull(e,t){return async function(e,t,r){const n=t[0].spatialReference,i=(0,l.en)(e),s={...i.query,f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify((0,u.F)(t))},o=(0,l.lA)(s,r);return(0,a.default)(i.path+"/convexHull",o).then((e=>{let{data:t}=e;return(0,c.im)(t.geometry).set({spatialReference:n})}))}(this.url,e,t)}cut(e,t,r){return async function(e,t,r,n){const i=(0,l.en)(e),s=t[0].spatialReference,o={...n,query:{...i.query,f:"json",sr:JSON.stringify(s),target:JSON.stringify({geometryType:(0,c.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},u=await(0,a.default)(i.path+"/cut",o),{cutIndexes:N,geometries:f=[]}=u.data;return{cutIndexes:N,geometries:f.map((e=>{const t=(0,c.im)(e);return t.spatialReference=s,t}))}}(this.url,e,t,r)}densify(e,t){return async function(e,t,r){const n=t.geometries[0].spatialReference,i=(0,l.en)(e),s={...i.query,f:"json",...t.toJSON()},o=(0,l.lA)(s,r);return(0,a.default)(i.path+"/densify",o).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>(0,c.im)(e).set({spatialReference:n})))}))}(this.url,e,t)}difference(e,t,r){return async function(e,t,r,n){const i=t[0].spatialReference,s=(0,l.en)(e);let o={query:{...s.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify((0,u.F)(t)),geometry:JSON.stringify({geometryType:(0,c.Ji)(r),geometry:r.toJSON()})}};return n&&(o={...n,...o}),(0,a.default)(s.path+"/difference",o).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>(0,c.im)(e).set({spatialReference:i})))}))}(this.url,e,t,r)}distance(e,t){return async function(e,t,r){const n=(0,l.en)(e),i={...n.query,f:"json",...t.toJSON()},s=(0,l.lA)(i,r);return(0,a.default)(n.path+"/distance",s).then((e=>{let{data:t}=e;return t&&t.distance}))}(this.url,e,t)}fromGeoCoordinateString(e,t){return async function(e,t,r){const n={};null!=t.sr&&"object"==typeof t.sr?n.sr=t.sr.wkid||JSON.stringify(t.sr):n.sr=t.sr,n.strings=JSON.stringify(t.strings);const i=t.conversionType||"mgrs";n.conversionType=p.toJSON(i),n.conversionMode=t.conversionMode;const s=(0,l.en)(e),o={...s.query,f:"json",...n},u=(0,l.lA)(o,r);return(0,a.default)(s.path+"/fromGeoCoordinateString",u).then((e=>{let{data:t}=e;return t.coordinates}))}(this.url,e,t)}generalize(e,t){return T(this.url,e,t)}intersect(e,t,r){return async function(e,t,r,n){const i=t[0].spatialReference,s=(0,l.en)(e),o={...s.query,f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify((0,u.F)(t)),geometry:JSON.stringify({geometryType:(0,c.Ji)(r),geometry:r.toJSON()})},N=(0,l.lA)(o,n);return(0,a.default)(s.path+"/intersect",N).then((e=>{let{data:t}=e;return(t.geometries||[]).map((e=>(0,c.im)(e).set({spatialReference:i})))}))}(this.url,e,t,r)}labelPoints(e,t){return function(e,t,r){const n=t.map((e=>e.toJSON())),i=t[0].spatialReference,s=(0,l.en)(e),o={...s.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i.toJSON()),polygons:JSON.stringify(n)},u=(0,l.lA)(o,r);return(0,a.default)(s.path+"/labelPoints",u).then((e=>{let{data:t}=e;return(t.labelPoints||[]).map((e=>(0,c.im)(e).set({spatialReference:i})))}))}(this.url,e,t)}lengths(e,t){return async function(e,t,r){const n=g(t=R.from(t)),i=(0,l.en)(e),s={...i.query,f:"json",...n},o=(0,l.lA)(s,r);return(0,a.default)(i.path+"/lengths",o).then((e=>{let{data:t}=e;return t}))}(this.url,e,t)}offset(e,t){return J(this.url,e,t)}project(e,t){return(0,w.i)(this.url,e,t)}relation(e,t){return D(this.url,e,t)}reshape(e,t,r){return async function(e,t,r,n){const i=t.spatialReference,s=(0,l.en)(e),o={...s.query,f:"json",sr:JSON.stringify(i.toJSON()),target:JSON.stringify({geometryType:(0,c.Ji)(t),geometry:t.toJSON()}),reshaper:JSON.stringify(r.toJSON())},u=(0,l.lA)(o,n);return(0,a.default)(s.path+"/reshape",u).then((e=>{let{data:t}=e;return(0,c.im)(t.geometry).set({spatialReference:i})}))}(this.url,e,t,r)}simplify(e,t){return async function(e,t,r){const n="string"==typeof e?(0,L.mN)(e):e,i=t[0].spatialReference,s=(0,c.Ji)(t[0]),o={...r,query:{...n.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify((0,u.F)(t))}},{data:l}=await(0,a.default)(n.path+"/simplify",o);return(0,u.o)(l.geometries,s,i)}(this.url,e,t)}toGeoCoordinateString(e,t){return async function(e,t,r){const n={};null!=t.sr&&"object"==typeof t.sr?n.sr=t.sr.wkid||JSON.stringify(t.sr):n.sr=t.sr,n.coordinates=JSON.stringify(t.coordinates);const i=t.conversionType||"mgrs";n.conversionType=p.toJSON(i),n.conversionMode=t.conversionMode,n.numOfDigits=t.numOfDigits,n.rounding=t.rounding,n.addSpaces=t.addSpaces;const s=(0,l.en)(e),o={...s.query,f:"json",...n},u=(0,l.lA)(o,r);return(0,a.default)(s.path+"/toGeoCoordinateString",u).then((e=>{let{data:t}=e;return t.strings}))}(this.url,e,t)}trimExtend(e,t){return G(this.url,e,t)}union(e,t){return async function(e,t,r){const n=t[0].spatialReference,i=(0,l.en)(e),s={...i.query,f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify((0,u.F)(t))},o=(0,l.lA)(s,r);return(0,a.default)(i.path+"/union",o).then((e=>{let{data:t}=e;return(0,c.im)(t.geometry).set({spatialReference:n})}))}(this.url,e,t)}};H.UNIT_METER=9001,H.UNIT_GERMAN_METER=9031,H.UNIT_FOOT=9002,H.UNIT_SURVEY_FOOT=9003,H.UNIT_CLARKE_FOOT=9005,H.UNIT_FATHOM=9014,H.UNIT_NAUTICAL_MILE=9030,H.UNIT_SURVEY_CHAIN=9033,H.UNIT_SURVEY_LINK=9034,H.UNIT_SURVEY_MILE=9035,H.UNIT_KILOMETER=9036,H.UNIT_CLARKE_YARD=9037,H.UNIT_CLARKE_CHAIN=9038,H.UNIT_CLARKE_LINK=9039,H.UNIT_SEARS_YARD=9040,H.UNIT_SEARS_FOOT=9041,H.UNIT_SEARS_CHAIN=9042,H.UNIT_SEARS_LINK=9043,H.UNIT_BENOIT_1895A_YARD=9050,H.UNIT_BENOIT_1895A_FOOT=9051,H.UNIT_BENOIT_1895A_CHAIN=9052,H.UNIT_BENOIT_1895A_LINK=9053,H.UNIT_BENOIT_1895B_YARD=9060,H.UNIT_BENOIT_1895B_FOOT=9061,H.UNIT_BENOIT_1895B_CHAIN=9062,H.UNIT_BENOIT_1895B_LINK=9063,H.UNIT_INDIAN_FOOT=9080,H.UNIT_INDIAN_1937_FOOT=9081,H.UNIT_INDIAN_1962_FOOT=9082,H.UNIT_INDIAN_1975_FOOT=9083,H.UNIT_INDIAN_YARD=9084,H.UNIT_INDIAN_1937_YARD=9085,H.UNIT_INDIAN_1962_YARD=9086,H.UNIT_INDIAN_1975_YARD=9087,H.UNIT_FOOT_1865=9070,H.UNIT_RADIAN=9101,H.UNIT_DEGREE=9102,H.UNIT_ARCMINUTE=9103,H.UNIT_ARCSECOND=9104,H.UNIT_GRAD=9105,H.UNIT_GON=9106,H.UNIT_MICRORADIAN=9109,H.UNIT_ARCMINUTE_CENTESIMAL=9112,H.UNIT_ARCSECOND_CENTESIMAL=9113,H.UNIT_MIL6400=9114,H.UNIT_BRITISH_1936_FOOT=9095,H.UNIT_GOLDCOAST_FOOT=9094,H.UNIT_INTERNATIONAL_CHAIN=109003,H.UNIT_INTERNATIONAL_LINK=109004,H.UNIT_INTERNATIONAL_YARD=109001,H.UNIT_STATUTE_MILE=9093,H.UNIT_SURVEY_YARD=109002,H.UNIT_50KILOMETER_LENGTH=109030,H.UNIT_150KILOMETER_LENGTH=109031,H.UNIT_DECIMETER=109005,H.UNIT_CENTIMETER=109006,H.UNIT_MILLIMETER=109007,H.UNIT_INTERNATIONAL_INCH=109008,H.UNIT_US_SURVEY_INCH=109009,H.UNIT_INTERNATIONAL_ROD=109010,H.UNIT_US_SURVEY_ROD=109011,H.UNIT_US_NAUTICAL_MILE=109012,H.UNIT_UK_NAUTICAL_MILE=109013,H.UNIT_SQUARE_INCHES="esriSquareInches",H.UNIT_SQUARE_FEET="esriSquareFeet",H.UNIT_SQUARE_YARDS="esriSquareYards",H.UNIT_ACRES="esriAcres",H.UNIT_SQUARE_MILES="esriSquareMiles",H.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",H.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",H.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",H.UNIT_SQUARE_METERS="esriSquareMeters",H.UNIT_ARES="esriAres",H.UNIT_HECTARES="esriHectares",H.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",(0,n._)([(0,i.Cb)()],H.prototype,"url",void 0),H=(0,n._)([(0,o.j)("esri.tasks.GeometryService")],H);const F=H}}]);
//# sourceMappingURL=3421.7d1911b6.chunk.js.map