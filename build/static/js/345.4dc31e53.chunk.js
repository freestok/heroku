"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[345],{60345:function(e,t,n){n.r(t),n.d(t,{BufferObject:function(){return r.f},FramebufferObject:function(){return u.X},Program:function(){return o.$},ProgramCache:function(){return i.G},Renderbuffer:function(){return c.r},ShaderCompiler:function(){return f.B},Texture:function(){return a.x},VertexArrayObject:function(){return s.U},glslifyDefineMap:function(){return h.K},createProgram:function(){return l.H},createContextOrErrorHTML:function(){return v.sj}});var r=n(44070),u=n(53634),o=n(52714),i=n(66293),c=n(15880),f=n(56648),a=n(51378),s=n(45412),h=n(65706),l=n(96721),v=n(49800)},66293:function(e,t,n){n.d(t,{G:function(){return f}});var r=n(15671),u=n(43144),o=n(92026),i=function(){function e(){(0,r.Z)(this,e),this._outer=new Map}return(0,u.Z)(e,[{key:"clear",value:function(){this._outer.clear()}},{key:"empty",get:function(){return 0===this._outer.size}},{key:"get",value:function(e,t){var n;return null==(n=this._outer.get(e))?void 0:n.get(t)}},{key:"set",value:function(e,t,n){var r=this._outer.get(e);r?r.set(t,n):this._outer.set(e,new Map([[t,n]]))}},{key:"delete",value:function(e,t){var n=this._outer.get(e);n&&(n.delete(t),0===n.size&&this._outer.delete(e))}},{key:"forEach",value:function(e){this._outer.forEach((function(t,n){return e(t,n)}))}}]),e}(),c=n(52714),f=function(){function e(t){(0,r.Z)(this,e),this._rctx=t,this._store=new i}return(0,u.Z)(e,[{key:"dispose",value:function(){this._store.forEach((function(e){return e.forEach((function(e){return e.dispose()}))})),this._store.clear()}},{key:"acquire",value:function(e,t,n,r){var u=this._store.get(e,t);if((0,o.pC)(u))return u.ref(),u;var i=new c.$(this._rctx,e,t,n,r);return i.ref(),this._store.set(e,t,i),i}},{key:"test",get:function(){var e=0;return this._store.forEach((function(t){return t.forEach((function(t){return e+=t.hasGLName?2:1}))})),{cachedWebGLObjects:e}}}]),e}()},65706:function(e,t,n){function r(e){var t="";for(var n in e){var r=e[n];if("boolean"==typeof r)r&&(t+="#define ".concat(n,"\n"));else if("number"==typeof r)t+="#define ".concat(n," ").concat(r.toFixed(),"\n");else if("object"==typeof r){var u=r.options,o=0;for(var i in u)t+="#define ".concat(u[i]," ").concat((o++).toFixed(),"\n");t+="#define ".concat(n," ").concat(u[r.value],"\n")}}return t}n.d(t,{K:function(){return r}})}}]);
//# sourceMappingURL=345.4dc31e53.chunk.js.map