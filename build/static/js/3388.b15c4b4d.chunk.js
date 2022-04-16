"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[3388],{19610:(e,a,t)=>{t.d(a,{T:()=>n});const n={BingMapsLayer:async()=>(await t.e(165).then(t.bind(t,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(5731),t.e(6505)]).then(t.bind(t,66505))).default,CSVLayer:async()=>(await t.e(8435).then(t.bind(t,98435))).default,ElevationLayer:async()=>(await t.e(9512).then(t.bind(t,59512))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,94990))).default,GroupLayer:async()=>(await t.e(5069).then(t.bind(t,65069))).default,GeoRSSLayer:async()=>(await t.e(54).then(t.bind(t,70054))).default,GeoJSONLayer:async()=>(await t.e(5064).then(t.bind(t,5064))).default,ImageryLayer:async()=>(await Promise.all([t.e(7314),t.e(5345),t.e(7038),t.e(1638),t.e(1168)]).then(t.bind(t,11168))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(7314),t.e(5345),t.e(394),t.e(7038),t.e(1638),t.e(3060)]).then(t.bind(t,93060))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(5731),t.e(4710)]).then(t.bind(t,84710))).default,KMLLayer:async()=>(await t.e(3838).then(t.bind(t,13838))).default,MapImageLayer:async()=>(await Promise.all([t.e(9668),t.e(9583)]).then(t.bind(t,19583))).default,MapNotesLayer:async()=>(await t.e(9622).then(t.bind(t,69622))).default,OGCFeatureLayer:async()=>(await t.e(8701).then(t.bind(t,98701))).default,OpenStreetMapLayer:async()=>(await t.e(1656).then(t.bind(t,31656))).default,PointCloudLayer:async()=>(await Promise.all([t.e(5731),t.e(9532)]).then(t.bind(t,9532))).default,RouteLayer:async()=>(await Promise.all([t.e(8916),t.e(9129)]).then(t.bind(t,49129))).default,SceneLayer:async()=>(await Promise.all([t.e(5731),t.e(2964)]).then(t.bind(t,2964))).default,StreamLayer:async()=>(await t.e(2668).then(t.bind(t,2668))).default,TileLayer:async()=>(await Promise.all([t.e(9668),t.e(2389)]).then(t.bind(t,42977))).default,UnknownLayer:async()=>(await t.e(4917).then(t.bind(t,74917))).default,UnsupportedLayer:async()=>(await t.e(8101).then(t.bind(t,88101))).default,VectorTileLayer:async()=>(await Promise.all([t.e(969),t.e(7735)]).then(t.bind(t,47409))).default,VoxelLayer:async()=>(await Promise.all([t.e(5731),t.e(5947)]).then(t.bind(t,15947))).default,WebTileLayer:async()=>(await t.e(9200).then(t.bind(t,89200))).default,WFSLayer:async()=>(await Promise.all([t.e(2622),t.e(8566)]).then(t.bind(t,38566))).default,WMSLayer:async()=>(await t.e(4227).then(t.bind(t,84227))).default,WMTSLayer:async()=>(await t.e(6951).then(t.bind(t,46951))).default}},32698:(e,a,t)=>{t.d(a,{m:()=>l});var n=t(35995),r=t(70032);function l(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||r.Z.getDefault(),portalItem:e,readResourcePaths:[]}}},33388:(e,a,t)=>{t.r(a),t.d(a,{getFirstLayerOrTableId:()=>h,getNumLayersAndTables:()=>b,load:()=>u,preprocessFSItemData:()=>f});var n=t(10064),r=t(19610),l=t(70032),i=t(32698),s=t(21371),o=t(41226);async function u(e,a){const t=e.instance.portalItem;return t&&t.id?(await t.load(a),function(e){const a=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(a.type))throw new n.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const t=e.instance,n=t.portalItem,{url:r,title:l}=n,o=(0,i.m)(n);if("group"===t.type)return t.read({title:l},o),d(t,e);r&&t.read({url:r},o);const u=await p(e,a);return u&&t.read(u,o),t.resourceReferences={portalItem:n,paths:o.readResourcePaths},t.read({title:l},o),(0,s.y)(t,o)}(e,a)):Promise.resolve()}function d(e,a){let t;const l=e.portalItem.type;switch(l){case"Feature Service":case"Feature Collection":t=r.T.FeatureLayer;break;case"Stream Service":t=r.T.StreamLayer;break;case"Scene Service":t=r.T.SceneLayer;break;default:throw new n.Z("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let i;return t().then((e=>(i=e,p(a)))).then((async a=>"Feature Service"===l?(a=await f(a,e.portalItem.url),y(e,i,a)):b(a)>0?y(e,i,a):function(e,a){return e.portalItem.url?(0,o.b)(e.portalItem.url).then((t=>{var n,r;function l(e){return{id:e.id,name:e.name}}t&&y(e,a,{layers:null==(n=t.layers)?void 0:n.map(l),tables:null==(r=t.tables)?void 0:r.map(l)})})):Promise.resolve()}(e,i)))}function y(e,a,t){let n=t.layers||[];const r=t.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var a;"Table"===(null==e||null==(a=e.layerDefinition)?void 0:a.type)&&r.push(e)})),n=n.filter((e=>{var a;return"Table"!==(null==e||null==(a=e.layerDefinition)?void 0:a.type)}))),n.reverse().forEach((n=>{const r=c(e,a,t,n);e.add(r)})),r.reverse().forEach((n=>{const r=c(e,a,t,n);e.tables.add(r)}))}function c(e,a,t,n){const r=new a({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};r.read(n,a);const i=t.showLegend;null!=i&&r.read({showLegend:i},a)}return r}function p(e,a){if(!1===e.supportsData)return Promise.resolve(void 0);const t=e.instance;return t.portalItem.fetchData("json",a).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){let a,n=!0;return e&&b(e)>0&&(null==t.layerId&&(t.layerId=h(e)),a=function(e,a){const t=e.layers;if(t)for(let r=0;r<t.length;r++)if(t[r].id===a)return t[r];const n=e.tables;if(n)for(let r=0;r<n.length;r++)if(n[r].id===a)return n[r];return null}(e,t.layerId),a&&(1===b(e)&&(n=!1),null!=e.showLegend&&(a.showLegend=e.showLegend))),n&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),a}return e}))}async function f(e,a){var t,n;if(null==(null==(t=e)?void 0:t.layers)||null==(null==(n=e)?void 0:n.tables)){const t=await(0,o.b)(a);(e=e||{}).layers=e.layers||(null==t?void 0:t.layers),e.tables=e.tables||(null==t?void 0:t.tables)}return e}function h(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function b(e){var a,t,n,r;return(null!=(a=null==e||null==(t=e.layers)?void 0:t.length)?a:0)+(null!=(n=null==e||null==(r=e.tables)?void 0:r.length)?n:0)}},41226:(e,a,t)=>{t.d(a,{b:()=>r});var n=t(76200);async function r(e){const{data:a}=await(0,n.default)(e,{responseType:"json",query:{f:"json"}});return a}}}]);
//# sourceMappingURL=3388.b15c4b4d.chunk.js.map