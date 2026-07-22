import{V as et,Z as tt,i as ge,v as nt,D as rt,n as Pe,R as re,C as ot,aE as it,an as st,a as at,E as z,l as de,T as lt,e as ve,a8 as ut,a2 as ct,Y as D,k as m,am as _e,a1 as he,af as ae,ai as ye}from"./index-C_xGNWUU.js";import{G as N}from"./Graphics-D-PFgfJC.js";import{C as Se}from"./CanvasPool-Clfl-tCJ.js";import{C as G,f as be,g as le,T as Ce}from"./TextStyle-CA-7YdOA.js";import{g as ht}from"./getPo2TextureFromSource-0OuSnnKg.js";import{i as me}from"./isMobile-CjBdU-FT.js";import{d as Ne,b as dt,f as pt,_ as Ae,c as Fe,h as ft,o as Ve,a as mt,r as It}from"./index-TJzZOM0E.js";import"./_commonjsHelpers-CE1G-McA.js";class xt extends et{constructor(e,t){const{text:n,resolution:r,style:o,anchor:a,width:s,height:l,roundPixels:u,...c}=e;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=t,this.text=n??"",this.style=o,this.resolution=r??null,this.allowChildren=!1,this._anchor=new tt({_onUpdate:()=>{this.onViewUpdate()}}),a&&(this.anchor=a),this.roundPixels=u??!1,s!==void 0&&(this.width=s),l!==void 0&&(this.height=l)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){e||(e={}),this._style?.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,t){typeof e=="object"?(t=e.height??e.width,e=e.width):t??(t=e),e!==void 0&&this._setWidth(e,this.bounds.width),t!==void 0&&this._setHeight(t,this.bounds.height)}containsPoint(e){const t=this.bounds.width,n=this.bounds.height,r=-t*this.anchor.x;let o=0;return e.x>=r&&e.x<=r+t&&(o=-n*this.anchor.y,e.y>=o&&e.y<=o+n)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e?.style)&&this._style.destroy(e),this._style=null,this._text=null}get styleKey(){return`${this._text}:${this._style.styleKey}:${this._resolution}`}}function gt(i,e){let t=i[0]??{};return(typeof t=="string"||i[1])&&(ge(nt,`use new ${e}({ text: "hi!", style }) instead`),t={text:t,style:i[1]}),t}let H=null,R=null;function _t(i,e){H||(H=rt.get().createCanvas(256,128),R=H.getContext("2d",{willReadFrequently:!0}),R.globalCompositeOperation="copy",R.globalAlpha=1),(H.width<i||H.height<e)&&(H.width=Pe(i),H.height=Pe(e))}function Xe(i,e,t){for(let n=0,r=4*t*e;n<e;++n,r+=4)if(i[r+3]!==0)return!1;return!0}function ke(i,e,t,n,r){const o=4*e;for(let a=n,s=n*o+4*t;a<=r;++a,s+=o)if(i[s+3]!==0)return!1;return!0}function Ct(...i){let e=i[0];e.canvas||(e={canvas:i[0],resolution:i[1]});const{canvas:t}=e,n=Math.min(e.resolution??1,1),r=e.width??t.width,o=e.height??t.height;let a=e.output;if(_t(r,o),!R)throw new TypeError("Failed to get canvas 2D context");R.drawImage(t,0,0,r,o,0,0,r*n,o*n);const l=R.getImageData(0,0,r,o).data;let u=0,c=0,f=r-1,h=o-1;for(;c<o&&Xe(l,r,c);)++c;if(c===o)return re.EMPTY;for(;Xe(l,r,h);)--h;for(;ke(l,r,u,c,h);)++u;for(;ke(l,r,f,c,h);)--f;return++f,++h,R.globalCompositeOperation="source-over",R.strokeRect(u,c,f-u,h-c),R.globalCompositeOperation="copy",a??(a=new re),a.set(u/n,c/n,(f-u)/n,(h-c)/n),a}const Me=new re;function A(i){let e=0;for(let t=0;t<i.length;t++)i.charCodeAt(t)===32&&e++;return e}class vt{getCanvasAndContext(e){const{text:t,style:n,resolution:r=1}=e,o=n._getFinalPadding(),a=G.measureText(t||" ",n),s=Math.ceil(Math.ceil(Math.max(1,a.width)+o*2)*r),l=Math.ceil(Math.ceil(Math.max(1,a.height)+o*2)*r),u=Se.getOptimalCanvasAndContext(s,l);this._renderTextToCanvas(n,o,r,u,a);const c=n.trim?Ct({canvas:u.canvas,width:s,height:l,resolution:1,output:Me}):Me.set(0,0,s,l);return{canvasAndContext:u,frame:c}}returnCanvasAndContext(e){Se.returnCanvasAndContext(e)}_renderTextToCanvas(e,t,n,r,o){if(o.runsByLine&&o.runsByLine.length>0){this._renderTaggedTextToCanvas(o,e,t,n,r);return}const{canvas:a,context:s}=r,l=be(e),u=o.lines,c=o.lineHeight,f=o.lineWidths,h=o.maxLineWidth,w=o.fontProperties,E=a.height;if(s.resetTransform(),s.scale(n,n),s.textBaseline=e.textBaseline,e._stroke?.width){const I=e._stroke;s.lineWidth=I.width,s.miterLimit=I.miterLimit,s.lineJoin=I.join,s.lineCap=I.cap}s.font=l;let x,g;const b=e.dropShadow?2:1,_=(e._stroke?.width??0)/2;let P=(c-w.fontSize)/2;c-w.fontSize<0&&(P=0);for(let I=0;I<b;++I){const X=e.dropShadow&&I===0,y=X?Math.ceil(Math.max(1,E)+t*2):0,S=y*n;if(X)this._setupDropShadow(s,e,n,S);else{const p=e._gradientBounds,T=e._gradientOffset;if(p){const L={width:p.width,height:p.height,lineHeight:p.height,lines:o.lines};this._setFillAndStrokeStyles(s,e,L,t,_,T?.x??0,T?.y??0)}else T?this._setFillAndStrokeStyles(s,e,o,t,_,T.x,T.y):this._setFillAndStrokeStyles(s,e,o,t,_);s.shadowColor="rgba(0,0,0,0)"}for(let p=0;p<u.length;p++){x=_,g=_+p*c+w.ascent+P,x+=this._getAlignmentOffset(f[p],h,e.align);let T=0;if(e.align==="justify"&&e.wordWrap&&p<u.length-1){const L=A(u[p]);L>0&&(T=(h-f[p])/L)}e._stroke?.width&&this._drawLetterSpacing(u[p],e,r,x+t,g+t-y,!0,T),e._fill!==void 0&&this._drawLetterSpacing(u[p],e,r,x+t,g+t-y,!1,T)}}}_renderTaggedTextToCanvas(e,t,n,r,o){const{canvas:a,context:s}=o,{runsByLine:l,lineWidths:u,maxLineWidth:c,lineAscents:f,lineHeights:h,hasDropShadow:w}=e,E=a.height;s.resetTransform(),s.scale(r,r),s.textBaseline=t.textBaseline;const x=w?2:1;let g=t._stroke?.width??0;for(const _ of l)for(const P of _){const I=P.style._stroke?.width??0;I>g&&(g=I)}const b=g/2,C=[];for(let _=0;_<l.length;_++){const P=l[_],I=[];for(const X of P){const y=be(X.style);s.font=y,I.push({width:G._measureText(X.text,X.style.letterSpacing,s),font:y})}C.push(I)}for(let _=0;_<x;++_){const P=w&&_===0,I=P?Math.ceil(Math.max(1,E)+n*2):0,X=I*r;P||(s.shadowColor="rgba(0,0,0,0)");let y=b;for(let S=0;S<l.length;S++){const p=l[S],T=u[S],L=f[S],Qe=h[S],Te=C[S];let pe=b;pe+=this._getAlignmentOffset(T,c,t.align);let U=0;if(t.align==="justify"&&t.wordWrap&&S<l.length-1){let v=0;for(const d of p)v+=A(d.text);v>0&&(U=(c-T)/v)}const we=y+L;let k=pe+n;for(let v=0;v<p.length;v++){const d=p[v],{width:W,font:j}=Te[v];if(s.font=j,s.textBaseline=d.style.textBaseline,d.style._stroke?.width){const M=d.style._stroke;if(s.lineWidth=M.width,s.miterLimit=M.miterLimit,s.lineJoin=M.join,s.lineCap=M.cap,P)if(d.style.dropShadow)this._setupDropShadow(s,d.style,r,X);else{const B=A(d.text);k+=W+B*U;continue}else{const B=G.measureFont(j),se=d.style.lineHeight||B.fontSize,Ze={width:W,height:se,lineHeight:se,lines:[d.text]};s.strokeStyle=le(M,s,Ze,n*2,k-n,y)}this._drawLetterSpacing(d.text,d.style,o,k,we+n-I,!0,U)}const fe=A(d.text);k+=W+fe*U}k=pe+n;for(let v=0;v<p.length;v++){const d=p[v],{width:W,font:j}=Te[v];if(s.font=j,s.textBaseline=d.style.textBaseline,d.style._fill!==void 0){if(P)if(d.style.dropShadow)this._setupDropShadow(s,d.style,r,X);else{const M=A(d.text);k+=W+M*U;continue}else{const M=G.measureFont(j),B=d.style.lineHeight||M.fontSize,se={width:W,height:B,lineHeight:B,lines:[d.text]};s.fillStyle=le(d.style._fill,s,se,n*2,k-n,y)}this._drawLetterSpacing(d.text,d.style,o,k,we+n-I,!1,U)}const fe=A(d.text);k+=W+fe*U}y+=Qe}}}_setFillAndStrokeStyles(e,t,n,r,o,a=0,s=0){if(e.fillStyle=t._fill?le(t._fill,e,n,r*2,a,s):null,t._stroke?.width){const l=o+r*2;e.strokeStyle=le(t._stroke,e,n,l,a,s)}}_setupDropShadow(e,t,n,r){e.fillStyle="black",e.strokeStyle="black";const o=t.dropShadow,a=o.color,s=o.alpha;e.shadowColor=ot.shared.setValue(a).setAlpha(s).toRgbaString();const l=o.blur*n,u=o.distance*n;e.shadowBlur=l,e.shadowOffsetX=Math.cos(o.angle)*u,e.shadowOffsetY=Math.sin(o.angle)*u+r}_getAlignmentOffset(e,t,n){return n==="right"?t-e:n==="center"?(t-e)/2:0}_drawLetterSpacing(e,t,n,r,o,a=!1,s=0){const{context:l}=n,u=t.letterSpacing;let c=!1;if(G.experimentalLetterSpacingSupported&&(G.experimentalLetterSpacing?(l.letterSpacing=`${u}px`,l.textLetterSpacing=`${u}px`,c=!0):(l.letterSpacing="0px",l.textLetterSpacing="0px")),(u===0||c)&&s===0){a?l.strokeText(e,r,o):l.fillText(e,r,o);return}if(s!==0&&(u===0||c)){const x=e.split(" ");let g=r;const b=l.measureText(" ").width;for(let C=0;C<x.length;C++)a?l.strokeText(x[C],g,o):l.fillText(x[C],g,o),g+=l.measureText(x[C]).width+b+s;return}let f=r;const h=G.graphemeSegmenter(e);let w=l.measureText(e).width,E=0;for(let x=0;x<h.length;++x){const g=h[x];a?l.strokeText(g,f,o):l.fillText(g,f,o);let b="";for(let C=x+1;C<h.length;++C)b+=h[C];E=l.measureText(b).width,f+=w-E+u,g===" "&&(f+=s),w=E}}}const V=new vt;function Tt(i,e){const{texture:t,bounds:n}=i,r=e._style._getFinalPadding();it(n,e._anchor,t);const o=e._anchor._x*r*2,a=e._anchor._y*r*2;n.minX-=r-o,n.minY-=r-a,n.maxX-=r-o,n.maxY-=r-a}class wt extends st{}class ze{constructor(e){this._renderer=e,e.runners.resolutionChange.add(this),this._managedTexts=new at({renderer:e,type:"renderable",onUnload:this.onTextUnload.bind(this),name:"canvasText"})}resolutionChange(){for(const e in this._managedTexts.items){const t=this._managedTexts.items[e];t?._autoResolution&&t.onViewUpdate()}}validateRenderable(e){const t=this._getGpuText(e),n=e.styleKey;return t.currentKey!==n?!0:e._didTextUpdate}addRenderable(e,t){const n=this._getGpuText(e);if(e._didTextUpdate){const r=e._autoResolution?this._renderer.resolution:e.resolution;(n.currentKey!==e.styleKey||e._resolution!==r)&&this._updateGpuText(e),e._didTextUpdate=!1,Tt(n,e)}this._renderer.renderPipes.batch.addToBatch(n,t)}updateRenderable(e){const t=this._getGpuText(e);t._batcher.updateElement(t)}_updateGpuText(e){const t=this._getGpuText(e);t.texture&&this._renderer.canvasText.decreaseReferenceCount(t.currentKey),e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,t.texture=this._renderer.canvasText.getManagedTexture(e),t.currentKey=e.styleKey}_getGpuText(e){return e._gpuData[this._renderer.uid]||this.initGpuText(e)}initGpuText(e){const t=new wt;return t.currentKey="--",t.renderable=e,t.transform=e.groupTransform,t.bounds={minX:0,maxX:1,minY:0,maxY:0},t.roundPixels=this._renderer._roundPixels|e._roundPixels,e._gpuData[this._renderer.uid]=t,this._managedTexts.add(e),t}onTextUnload(e){const t=e._gpuData[this._renderer.uid];if(!t)return;const{canvasText:n}=this._renderer;n.getReferenceCount(t.currentKey)>0?n.decreaseReferenceCount(t.currentKey):t.texture&&n.returnTexture(t.texture)}destroy(){this._managedTexts.destroy(),this._renderer=null}}ze.extension={type:[z.WebGLPipes,z.WebGPUPipes,z.CanvasPipes],name:"text"};class je{constructor(e,t){this._activeTextures={},this._renderer=e,this._retainCanvasContext=t}getTexture(e,t,n,r){typeof e=="string"&&(ge("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),e={text:e,style:n,resolution:t}),e.style instanceof Ce||(e.style=new Ce(e.style)),e.textureStyle instanceof de||(e.textureStyle=new de(e.textureStyle)),typeof e.text!="string"&&(e.text=e.text.toString());const{text:o,style:a,textureStyle:s,autoGenerateMipmaps:l}=e,u=e.resolution??this._renderer.resolution,{frame:c,canvasAndContext:f}=V.getCanvasAndContext({text:o,style:a,resolution:u}),h=ht(f.canvas,c.width,c.height,u,l);if(s&&(h.source.style=s),a.trim&&(c.pad(a.padding),h.frame.copyFrom(c),h.frame.scale(1/u),h.updateUvs()),a.filters){const w=this._applyFilters(h,a.filters);return this.returnTexture(h),V.returnCanvasAndContext(f),w}return this._renderer.texture.initSource(h._source),this._retainCanvasContext||V.returnCanvasAndContext(f),h}returnTexture(e){const t=e.source,n=t.resource;if(this._retainCanvasContext&&n?.getContext){const r=n.getContext("2d");r&&V.returnCanvasAndContext({canvas:n,context:r})}t.resource=null,t.uploadMethodId="unknown",t.alphaMode="no-premultiply-alpha",lt.returnTexture(e,!0)}renderTextToCanvas(){ge("8.10.0","CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead")}getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;const t=e.styleKey;if(this._activeTextures[t])return this._increaseReferenceCount(t),this._activeTextures[t].texture;const n=this.getTexture({text:e.text,style:e.style,resolution:e._resolution,textureStyle:e.textureStyle,autoGenerateMipmaps:e.autoGenerateMipmaps});return this._activeTextures[t]={texture:n,usageCount:1},n}decreaseReferenceCount(e){const t=this._activeTextures[e];t&&(t.usageCount--,t.usageCount===0&&(this.returnTexture(t.texture),this._activeTextures[e]=null))}getReferenceCount(e){return this._activeTextures[e]?.usageCount??0}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}_applyFilters(e,t){const n=this._renderer.renderTarget.renderTarget,r=this._renderer.filter.generateFilteredTexture({texture:e,filters:t});return this._renderer.renderTarget.bind(n,!1),r}destroy(){this._renderer=null;for(const e in this._activeTextures)this._activeTextures[e]&&this.returnTexture(this._activeTextures[e].texture);this._activeTextures=null}}class qe extends je{constructor(e){super(e,!0)}}qe.extension={type:[z.CanvasSystem],name:"canvasText"};class Ye extends je{constructor(e){super(e,!1)}}Ye.extension={type:[z.WebGLSystem,z.WebGPUSystem],name:"canvasText"};ve.add(qe);ve.add(Ye);ve.add(ze);class q extends xt{constructor(...e){const t=gt(e,"Text");super(t,Ce),this.renderPipeId="text",t.textureStyle&&(this.textureStyle=t.textureStyle instanceof de?t.textureStyle:new de(t.textureStyle)),this.autoGenerateMipmaps=t.autoGenerateMipmaps??ut.defaultOptions.autoGenerateMipmaps}updateBounds(){const e=this._bounds,t=this._anchor;let n=0,r=0;if(this._style.trim){const{frame:o,canvasAndContext:a}=V.getCanvasAndContext({text:this.text,style:this._style,resolution:1});V.returnCanvasAndContext(a),n=o.width,r=o.height}else{const o=G.measureText(this._text,this._style);n=o.width,r=o.height}e.minX=-t._x*n,e.maxX=e.minX+n,e.minY=-t._y*r,e.maxY=e.minY+r}}const Ke=""+new URL("../image/game/fnab/room1.png",import.meta.url).href;class Pt{children=[];parent=null;constructor(){}addChild(e){this.children.push(e),e.addedChildBy(this)}addedChildBy(e){this.parent=e}removeChild(e){e.removedChildBy(this),this.children=this.children.filter(t=>t!==e)}removedChildBy(e){this.parent=null}process(e){}getRoot(){let e=this;for(;e.parent;)e=e.parent;return e}getApp(){const e=this.getRoot();return e instanceof $e?e:null}}class oe extends Pt{PIXIContainer;constructor(){super(),this.PIXIContainer=new D}addChild(e){super.addChild(e),e instanceof oe&&this.PIXIContainer.addChild(e.PIXIContainer)}removeChild(e){super.removeChild(e),e instanceof oe&&this.PIXIContainer.removeChild(e.PIXIContainer)}}class $e extends oe{canvas;resizeObserver;PIXI_DESIGN_WIDTH=1920;PIXI_DESIGN_HEIGHT=1080;PIXIApp;PIXIContainer;PIXITestTexture;PIXITestSprite;constructor(){super(),this.canvas=document.createElement("canvas"),this.resizeObserver=new ResizeObserver(this._resizeToCanvas.bind(this)),this.PIXIApp=new ct,this.PIXIContainer=new D,this.PIXITestTexture=m.EMPTY,this.PIXITestSprite=new _e}_resizeToCanvas(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight,n=e/this.PIXI_DESIGN_WIDTH,r=t/this.PIXI_DESIGN_HEIGHT,o=Math.min(n,r);this.PIXIApp.renderer.resize(e,t),this.PIXIContainer.scale.set(o,o),this.PIXIContainer.x=(e-this.PIXI_DESIGN_WIDTH*o)/2,this.PIXIContainer.y=(t-this.PIXI_DESIGN_HEIGHT*o)/2}async init(e){const{canvas:t,runTest:n=!0}=e;this.canvas=t,await this.PIXIApp.init({canvas:t,backgroundColor:0,resolution:window.devicePixelRatio||1,width:this.PIXI_DESIGN_WIDTH,height:this.PIXI_DESIGN_HEIGHT,preference:"webgl"}),this.resizeObserver.observe(t),this.PIXIApp.stage.addChild(this.PIXIContainer),n&&(this.PIXITestTexture=await he.load(Ke),this.PIXITestSprite.texture=this.PIXITestTexture,this.PIXITestSprite.x=0,this.PIXITestSprite.y=0,this.PIXITestSprite.width=this.PIXI_DESIGN_WIDTH,this.PIXITestSprite.height=this.PIXI_DESIGN_HEIGHT,this.PIXIContainer.addChild(this.PIXITestSprite)),this.PIXIApp.ticker.add(r=>{this.process(r.deltaMS)})}process(e){const t=(n,r)=>{for(const o of n.children)t(o,r);n.process(r)};for(const n of this.children)t(n,e)}async start(){this.PIXIApp.start()}}var Ie={},Y={},De;function ie(){if(De)return Y;De=1,Object.defineProperty(Y,"__esModule",{value:!0}),Y.Collector=void 0;let i=class{constructor(t){this.emit=(...n)=>{t.emitCollecting(this,n)}}};return Y.Collector=i,Y}var K={},Re;function yt(){if(Re)return K;Re=1,Object.defineProperty(K,"__esModule",{value:!0}),K.CollectorArray=void 0;const i=ie();let e=class extends i.Collector{constructor(){super(...arguments),this.result=[]}handleResult(n){return this.result.push(n),!0}getResult(){return this.result}reset(){this.result.length=0}};return K.CollectorArray=e,K}var $={},Oe;function St(){if(Oe)return $;Oe=1,Object.defineProperty($,"__esModule",{value:!0}),$.CollectorLast=void 0;const i=ie();let e=class extends i.Collector{handleResult(n){return this.result=n,!0}getResult(){return this.result}reset(){delete this.result}};return $.CollectorLast=e,$}var J={},Ge;function bt(){if(Ge)return J;Ge=1,Object.defineProperty(J,"__esModule",{value:!0}),J.CollectorUntil0=void 0;const i=ie();let e=class extends i.Collector{constructor(){super(...arguments),this.result=!1}handleResult(n){return this.result=n,this.result}getResult(){return this.result}reset(){this.result=!1}};return J.CollectorUntil0=e,J}var Q={},Ee;function Xt(){if(Ee)return Q;Ee=1,Object.defineProperty(Q,"__esModule",{value:!0}),Q.CollectorWhile0=void 0;const i=ie();let e=class extends i.Collector{constructor(){super(...arguments),this.result=!1}handleResult(n){return this.result=n,!this.result}getResult(){return this.result}reset(){this.result=!1}};return Q.CollectorWhile0=e,Q}var Z={},ee={},Ue;function kt(){if(Ue)return ee;Ue=1,Object.defineProperty(ee,"__esModule",{value:!0}),ee.SignalConnectionImpl=void 0;class i{constructor(t,n){this.link=t,this.parentCleanup=n}disconnect(){return this.link!==null?(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0):!1}set enabled(t){this.link&&this.link.setEnabled(t)}get enabled(){return this.link!==null&&this.link.isEnabled()}}return ee.SignalConnectionImpl=i,ee}var te={},We;function Mt(){if(We)return te;We=1,Object.defineProperty(te,"__esModule",{value:!0}),te.SignalLink=void 0;let i=class Je{constructor(t=null,n=null,r=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=t??this,this.next=n??this,this.order=r}isEnabled(){return this.enabled&&!this.newLink}setEnabled(t){this.enabled=t}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(t,n){let r=this.prev;for(;r!==this&&!(r.order<=n);)r=r.prev;const o=new Je(r,r.next,n);return o.callback=t,r.next=o,o.next.prev=o,o}};return te.SignalLink=i,te}var He;function Dt(){if(He)return Z;He=1,Object.defineProperty(Z,"__esModule",{value:!0}),Z.Signal=void 0;const i=kt(),e=Mt();let t=class{constructor(){this.head=new e.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(r,o=0){this.connectionsCount++;const a=this.head.insert(r,o);return this.emitDepth>0&&(this.hasNewLinks=!0,a.newLink=!0),new i.SignalConnectionImpl(a,()=>this.decrementConnectionCount())}decrementConnectionCount(){this.connectionsCount--}disconnect(r){for(let o=this.head.next;o!==this.head;o=o.next)if(o.callback===r)return this.decrementConnectionCount(),o.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...r){this.emitDepth++;for(let o=this.head.next;o!==this.head;o=o.next)o.isEnabled()&&o.callback&&o.callback.apply(null,r);this.emitDepth--,this.unsetNewLink()}emitCollecting(r,o){this.emitDepth++;for(let a=this.head.next;a!==this.head;a=a.next)if(a.isEnabled()&&a.callback){const s=a.callback.apply(null,o);if(!r.handleResult(s))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&this.emitDepth===0){for(let r=this.head.next;r!==this.head;r=r.next)r.newLink=!1;this.hasNewLinks=!1}}};return Z.Signal=t,Z}var ne={},Le;function Rt(){if(Le)return ne;Le=1,Object.defineProperty(ne,"__esModule",{value:!0}),ne.SignalConnections=void 0;let i=class{constructor(){this.list=[]}add(t){this.list.push(t)}disconnectAll(){for(const t of this.list)t.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return this.list.length===0}};return ne.SignalConnections=i,ne}var Be;function Ot(){return Be||(Be=1,(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.SignalConnections=i.Signal=i.CollectorWhile0=i.CollectorUntil0=i.CollectorLast=i.CollectorArray=i.Collector=void 0;var e=ie();Object.defineProperty(i,"Collector",{enumerable:!0,get:function(){return e.Collector}});var t=yt();Object.defineProperty(i,"CollectorArray",{enumerable:!0,get:function(){return t.CollectorArray}});var n=St();Object.defineProperty(i,"CollectorLast",{enumerable:!0,get:function(){return n.CollectorLast}});var r=bt();Object.defineProperty(i,"CollectorUntil0",{enumerable:!0,get:function(){return r.CollectorUntil0}});var o=Xt();Object.defineProperty(i,"CollectorWhile0",{enumerable:!0,get:function(){return o.CollectorWhile0}});var a=Dt();Object.defineProperty(i,"Signal",{enumerable:!0,get:function(){return a.Signal}});var s=Rt();Object.defineProperty(i,"SignalConnections",{enumerable:!0,get:function(){return s.SignalConnections}})})(Ie)),Ie}var F=Ot(),Gt=Object.defineProperty,Et=(i,e,t)=>e in i?Gt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,O=(i,e,t)=>Et(i,typeof e!="symbol"?e+"":e,t);class Ut{constructor(){O(this,"_isMouseIn",!1),O(this,"_isDown",!1),O(this,"onDown"),O(this,"onUp"),O(this,"onUpOut"),O(this,"onOut"),O(this,"onPress"),O(this,"onHover"),this.onPress=new F.Signal,this.onDown=new F.Signal,this.onUp=new F.Signal,this.onHover=new F.Signal,this.onOut=new F.Signal,this.onUpOut=new F.Signal}connectEvents(e){me.any?(e.on("pointerdown",this.processDown,this),e.on("pointerup",this.processUp,this),e.on("pointerupoutside",this.processUpOut,this),e.on("pointerout",this.processOut,this),e.on("pointertap",this.processPress,this),e.on("pointerover",this.processOver,this)):(e.on("mousedown",this.processDown,this),e.on("mouseup",this.processUp,this),e.on("mouseupoutside",this.processUpOut,this),e.on("mouseout",this.processOut,this),e.on("click",this.processPress,this),e.on("mouseover",this.processOver,this))}disconnectEvents(e){me.any?(e.off("pointerdown",this.processDown,this),e.off("pointerup",this.processUp,this),e.off("pointerupoutside",this.processUpOut,this),e.off("pointerout",this.processOut,this),e.off("pointertap",this.processPress,this),e.off("pointerover",this.processOver,this)):(e.off("mousedown",this.processDown,this),e.off("mouseup",this.processUp,this),e.off("mouseupoutside",this.processUpOut,this),e.off("mouseout",this.processOut,this),e.off("click",this.processPress,this),e.off("mouseover",this.processOver,this))}processDown(e){this._isDown=!0,this.onDown.emit(this,e),this.down(e)}processUp(e){this._isDown&&(this.onUp.emit(this,e),this.up(e)),this._isDown=!1}processUpOut(e){this._isDown&&(this.onUp.emit(this,e),this.onUpOut.emit(this,e),this.up(e),this.upOut(e)),this._isDown=!1}processOut(e){this._isMouseIn&&(this._isMouseIn=!1,this.onOut.emit(this,e),this.out(e))}processPress(e){this._isDown=!1,this.onPress.emit(this,e),this.press(e)}processOver(e){me.any||(this._isMouseIn=!0,this.onHover.emit(this,e),this.hover(e))}down(e){}up(e){}upOut(e){}out(e){}press(e){}hover(e){}get isDown(){return this._isDown}}var Wt=Object.defineProperty,Ht=(i,e,t)=>e in i?Wt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Lt=(i,e,t)=>Ht(i,e+"",t);class xe extends Ut{constructor(e){super(),Lt(this,"_view"),e&&(this.view=e,this.enabled=!0)}set view(e){this._view&&this._view&&this.disconnectEvents(this._view),this._view=e,this.connectEvents(this._view)}get view(){return this._view}set enabled(e){if(!this.view){console.error("Button view is not set. Please set it before enabling the button.");return}this.view.eventMode=e?"static":"auto",this.view.cursor=e?"pointer":"default",!e&&this.isDown&&this.processUp()}get enabled(){return this.view?.eventMode==="static"}}const Bt=""+new URL("../image/game/global/gray-noise-256-256.png",import.meta.url).href,Nt=""+new URL("../image/game/fnab/room2.png",import.meta.url).href,At=""+new URL("../image/game/fnab/room3.png",import.meta.url).href,Ft=""+new URL("../image/game/fnab/room4.png",import.meta.url).href,Vt=""+new URL("../image/game/fnab/room5.png",import.meta.url).href,zt=""+new URL("../image/game/fnab/room6.png",import.meta.url).href,jt=""+new URL("../image/game/fnab/room7.png",import.meta.url).href,ue=""+new URL("../image/game/fnab/room1-berrychan.png",import.meta.url).href,qt=""+new URL("../image/game/fnab/room3-berrychan.png",import.meta.url).href,Yt=""+new URL("../image/game/fnab/room5-berrychan.png",import.meta.url).href,Kt=""+new URL("../image/game/fnab/room7-berrychan.png",import.meta.url).href,ce=["room1","room2","room3","room4","room5","room6","room7"],$t=new Map([["room1",{x:280,y:435}],["room2",{x:660,y:435}],["room3",{x:280,y:310}],["room4",{x:660,y:310}],["room5",{x:280,y:145}],["room6",{x:430,y:110}],["room7",{x:660,y:145}]]),Jt=new Map([["room1",{background:Ke,berrychan:ue}],["room2",{background:Nt,berrychan:ue}],["room3",{background:At,berrychan:qt}],["room4",{background:Ft,berrychan:ue}],["room5",{background:Vt,berrychan:Yt}],["room6",{background:zt,berrychan:ue}],["room7",{background:jt,berrychan:Kt}]]),Qt=new Map([["room1",{x:.35,y:.185,width:.315}],["room2",{x:.35,y:.185,width:.315}],["room3",{x:.55,y:.34,width:.245}],["room4",{x:.35,y:.185,width:.315}],["room5",{x:.4,y:.235,width:.145}],["room6",{x:.35,y:.185,width:.315}],["room7",{x:.325,y:.27,width:.43}]]);class Zt extends oe{PIXISceneContainer;PIXISceneVertex;PIXISceneFragment;PIXISceneFilter;PIXIRooms;currentRoom="room1";PIXINoiseTexture;PIXIFilter;PIXIVertex;PIXIFragment;PIXIGraphics;PIXILightGraphics;PIXIMapContainer;PIXIMapGraphics;PIXIMapMeText;PIXIMapButtons;CloseButton;cameraScale=0;cameraTime=0;cameraXMin=0;cameraXMax=0;constructor(){super(),this.PIXISceneContainer=new D,this.PIXISceneVertex="",this.PIXISceneFragment="",this.PIXISceneFilter=new ae({}),this.PIXIRooms=new Map,this.PIXINoiseTexture=m.EMPTY,this.PIXIFilter=new ae({}),this.PIXIVertex="",this.PIXIFragment="",this.PIXIGraphics=new N,this.PIXILightGraphics=new N,this.PIXIMapContainer=new D,this.PIXIMapGraphics=new N,this.PIXIMapMeText=new q,this.PIXIMapButtons=new Map,this.CloseButton={button:new xe,buttonContainer:new D,buttonText:new q,buttonGraphics:new N,getButtonView:()=>new D}}async initCloseButton(e){const t=new D,n=new N().rect(0,0,1e3,70).fill({color:0,alpha:.5}).stroke({texture:m.WHITE,width:5.5,color:16777215});t.addChild(n),await document.fonts.load('75px "Decalotype"');const r=new q({text:"CLOSE CAMERA",style:{fill:16777215,fontSize:70,fontFamily:" Decalotype, Arial, sans-serif",stroke:0,align:"center",letterSpacing:-2.5}});r.anchor.set(.5,.5),r.x=500,r.y=35,t.addChild(r),t.x=e.PIXI_DESIGN_WIDTH/2-500,t.y=e.PIXI_DESIGN_HEIGHT*.885;const o=new xe(t);o.enabled=!1,o.onPress.connect(()=>{console.log("h")}),this.CloseButton={button:o,buttonContainer:t,buttonText:r,buttonGraphics:n,getButtonView:()=>o.view},this.PIXIContainer.addChild(this.CloseButton.getButtonView())}async createButton(e){const t=new D,n=new N().rect(0,0,110,40).fill({color:0,alpha:.5}).stroke({texture:m.WHITE,width:3.5,color:16777215});t.addChild(n),await document.fonts.load('32px "Decalotype"');const r=new q({text:e.toUpperCase().replace("ROOM","CAM 0"),style:{fill:16777215,fontSize:32,fontFamily:" Decalotype, Arial, sans-serif",stroke:0,align:"center"}});r.anchor.set(.5,.5),r.x=55,r.y=20,t.addChild(r);const o=$t.get(e);t.x=o.x,t.y=o.y;const a=new xe(t);return a.enabled=!1,a.onPress.connect(()=>{this.changeToRoom(e),console.log(`${e} 按钮被点击了！`)}),{button:a,buttonContainer:t,buttonText:r,buttonGraphics:n,getButtonView:()=>a.view}}enableButtonsInteraction(){for(const e of ce){const t=this.PIXIMapButtons.get(e);t.button.enabled=!0}this.CloseButton.button.enabled=!0}unenableButtonsInteraction(){for(const e of ce){const t=this.PIXIMapButtons.get(e);t.button.enabled=!1}this.CloseButton.button.enabled=!1}async initRoom(e){for(const t of ce){const n=new D;n.alpha=0;const r=Jt.get(t),o=await he.load(r.background),a=new _e;a.texture=o,a.x=0,a.y=0,a.width=e.PIXI_DESIGN_WIDTH,a.height=e.PIXI_DESIGN_HEIGHT,n.addChild(a);const s=Qt.get(t),l=await he.load(r.berrychan),u=new _e,c=l.width/l.height;u.texture=l,u.x=e.PIXI_DESIGN_WIDTH*s.x,u.y=e.PIXI_DESIGN_HEIGHT*s.y,u.width=e.PIXI_DESIGN_WIDTH*s.width,u.height=u.width/c,n.addChild(u),this.PIXIRooms.set(t,{roomContainer:n,roomBackgroundSprite:a,roomBackgroundTexture:o,roomBerrychanSprite:u,roomBerrychanTexture:l}),this.PIXISceneContainer.addChild(n)}}changeToRoom(e){const t=this.PIXIRooms.get(this.currentRoom);t.roomContainer.alpha=0,this.PIXIMapButtons.get(this.currentRoom).buttonGraphics.clear().rect(0,0,110,40).fill({color:0,alpha:.5}).stroke({texture:m.WHITE,width:3.5,color:16777215});const r=this.PIXIRooms.get(e);r.roomContainer.alpha=1,this.PIXIMapButtons.get(e).buttonGraphics.clear().rect(0,0,110,40).fill({color:10461087,alpha:.75}).stroke({texture:m.WHITE,width:3.5,color:16777215}),this.currentRoom=e}async initUIMap(e){this.PIXIMapContainer.x=e.PIXI_DESIGN_WIDTH*.55,this.PIXIMapContainer.y=e.PIXI_DESIGN_HEIGHT*.35,this.PIXIContainer.addChild(this.PIXIMapContainer),this.PIXIMapGraphics.rect(400,50,250,300).stroke({texture:m.WHITE,width:5,color:16777215}).rect(670,250,70,300).stroke({texture:m.WHITE,width:5,color:16777215}).rect(650,285,20,30).stroke({texture:m.WHITE,width:5,color:16777215}).rect(650,135,20,30).stroke({texture:m.WHITE,width:5,color:16777215}).rect(670,100,70,100).stroke({texture:m.WHITE,width:5,color:16777215}).rect(310,250,70,300).stroke({texture:m.WHITE,width:5,color:16777215}).rect(330,200,30,50).stroke({texture:m.WHITE,width:5,color:16777215}).rect(310,100,70,100).stroke({texture:m.WHITE,width:5,color:16777215}).rect(475,450,100,100).stroke({texture:m.WHITE,width:5,color:16777215}).rect(505,495,40,40).fill({texture:m.WHITE,color:16777215}).rect(380,485,95,30).stroke({texture:m.WHITE,width:5,color:16777215}).rect(575,485,95,30).stroke({texture:m.WHITE,width:5,color:16777215}),this.PIXIMapContainer.addChild(this.PIXIMapGraphics),await document.fonts.load('35px "Decalotype"'),this.PIXIMapMeText=new q({text:"YOU",style:{fill:16777215,fontSize:35,fontFamily:" Decalotype, Arial, sans-serif",stroke:0,align:"center"}}),this.PIXIMapMeText.x=525,this.PIXIMapMeText.anchor.set(.5,.5),this.PIXIMapMeText.y=475,this.PIXIMapContainer.addChild(this.PIXIMapMeText);for(const t of ce){const n=await this.createButton(t);this.PIXIMapButtons.set(t,n),this.PIXIMapContainer.addChild(n.getButtonView())}}async init(e){this.cameraScale=1.25,this.cameraXMin=-Math.max(this.cameraScale-1,0)*e.PIXI_DESIGN_WIDTH,this.cameraXMax=0,this.PIXISceneContainer.x=this.cameraXMin,this.PIXISceneContainer.y=-Math.max(this.cameraScale-1.1,0)*e.PIXI_DESIGN_HEIGHT,this.PIXISceneContainer.scale.set(this.cameraScale,this.cameraScale),this.PIXIContainer.addChild(this.PIXISceneContainer),await this.initRoom(e),await this.initUIMap(e),await this.initCloseButton(e),this.PIXISceneVertex=`
      in vec2 aPosition;
      out vec2 vTextureCoord;
      out vec2 uv;
      out vec2 uvToTextureCoordWarp;

      uniform vec4 uInputSize;
      uniform vec4 uOutputFrame;
      uniform vec4 uOutputTexture;
      vec4 filterVertexPosition(void)
      {
        vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
        position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
        position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;
        return vec4(position, 0.0, 1.0);
      }

      vec2 filterTextureCoord(void)
      {
        uvToTextureCoordWarp = (uOutputFrame.zw * uInputSize.zw);
        return aPosition * (uvToTextureCoordWarp);
      }

      void main(void)
      {
          gl_Position = filterVertexPosition();
          vTextureCoord = filterTextureCoord();
          uv = aPosition;
      }
    `,this.PIXISceneFragment=`
      in vec2 uv; // uv 坐标
      in vec2 uvToTextureCoordWarp; // 将uv转换为对应vTextureCoord的系数

      in vec2 vTextureCoord;
      uniform sampler2D uTexture;

      vec2 UvToTextureCoord(vec2 _uv)
      {
        return _uv * (uvToTextureCoordWarp);
      }

      vec4 UvToColor(vec2 _uv)
      {
        if(_uv.y <= 0.0 || _uv.y >= 1.0)
          return vec4(0.0,0.0,0.0,1.0);
        else
          return texture2D(uTexture, UvToTextureCoord(_uv));
      }

      void main(void)
      {
        float warp = 8.0; // 鱼眼强度 1.0即为不影响
        vec2 _uv = uv;
        _uv -= 0.5;
        _uv.y /=  1.0 + (warp - 1.0)*_uv.x*_uv.x;
        _uv += 0.5;
        gl_FragColor = UvToColor(_uv);
      }
    `,this.PIXISceneFilter=new ae({glProgram:ye.from({fragment:this.PIXISceneFragment,vertex:this.PIXISceneVertex}),resources:{}}),this.PIXISceneContainer.filters=this.PIXISceneFilter,this.PIXISceneContainer.filterArea=new re(0,0,e.PIXI_DESIGN_WIDTH,e.PIXI_DESIGN_HEIGHT),this.PIXIGraphics.rect(35,35,e.PIXI_DESIGN_WIDTH-70,e.PIXI_DESIGN_HEIGHT-70).stroke({texture:m.WHITE,width:5,color:16777215}),this.PIXIContainer.addChild(this.PIXIGraphics),this.PIXILightGraphics.circle(120,120,40).fill({color:16777215,alpha:.95}),this.PIXIContainer.addChild(this.PIXILightGraphics),this.PIXIVertex=`
      // 滤镜所覆盖的范围内的标准化坐标，取值范围为[0-1]，滤镜左上角为(0,0)，滤镜右下角为(1,1)
      // 类似于很多3D软件中的 UV 坐标
      in vec2 aPosition;
      // 被归一化的采样纹理输入坐标，也就是输入 filter 的临时 framebuffer 贴图的采样坐标，取值范围[0-1]，左上角为(0,0)，右下角为(1,1)
      out vec2 vTextureCoord;

      // Filter 所覆盖的范围内的 UV值，实际上就是aPosition。请注意和vTextureCoord的区别，vTextureCoord是采样纹理的坐标，而aPosition是filter覆盖范围内的标准化坐标
      out vec2 uv;
      // uv 到 TextureCoord 的系数
      out vec2 uvToTextureCoordWarp;

      uniform vec4 uInputSize; // 输入滤镜的临时 framebuffer 临时帧缓冲大小。也就是贴图大小。
      // 前两个分量 x, y 为以像素为单位的大小，后两个分量 z, w 是前者的倒数，注意用于将除法转换为乘法来加快计算速度。
      uniform vec4 uOutputFrame; // 滤镜效果最终要绘制到屏幕上的矩形区域
      // 前两个分量 x, y 为输出矩形区域的左上角位置，后两个分量 z, w 为输出矩形区域的长宽，单位均为 CSS 像素。
      uniform vec4 uOutputTexture; // 描述“渲染目标纹理”的尺寸信息
      // x渲染目标纹理的宽度， y渲染目标纹理的高度，z高度与宽度的比值 (height / width)，w 未明确使用

      vec4 filterVertexPosition(void)
      {
        // position 算出来的是滤镜最终要覆盖的矩形区域的屏幕坐标，单位均为 CSS 像素。
        vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
        position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
        position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;
        // 裁剪空间的标准化设备坐标 (Normalized Device Coordinate, NDC) ，[-1, 1]
        return vec4(position, 0.0, 1.0);
      }

      vec2 filterTextureCoord(void)
      {
        // 请注意，aPosition 是 filter 所覆盖的区域的标准化坐标，而不是纹理坐标。
        // 一般情况下，aPosition的值和vTextureCoord有一定区别
        // 如果希望使用uv坐标，并以绿所覆盖的显示范围内的左上角为(0,0)，右下角为(1,1)，那么应该直接使用 aPosition

        uvToTextureCoordWarp = (uOutputFrame.zw * uInputSize.zw);
        return aPosition * (uvToTextureCoordWarp);
        // 之所以要这样做是因为缓冲区往往比滤镜的显示区域大一些
        // aPosition 取1的位置  由于缓冲区更大 其中有效的区域在这时只对应0.8
      }

      void main(void)
      {
          // 裁剪空间 NDC 坐标传递给 WebGL
          gl_Position = filterVertexPosition();
          // 纹理坐标传递给片元着色器
          vTextureCoord = filterTextureCoord();
          // UV坐标传递给片元着色器
          uv = aPosition;
      }
    `,this.PIXIFragment=`
      in vec2 uv; // uv 坐标
      in vec2 uvToTextureCoordWarp; // 将uv转换为对应vTextureCoord的系数
      in vec2 vTextureCoord;
      uniform sampler2D uTexture;
      uniform sampler2D uNoiseTexture; // 噪音贴图
      uniform float uTime;            // 当前时间

      // 扭曲画面uv  形成CRT效果
      vec2 DistortUv(vec2 _uv)
      {
        // 统一扭曲系数
        float warp = 1.25;

        // 扭曲系数在x和y方向上的分量，分别为0.3和0.4
        float warpX = 0.2;
        float warpY = 0.3;

        // 扭曲强度，以中心为[0,0]，四周为[0.25,0.25]，距离中心越远，扭曲强度越大且呈现二次函数增长
        vec2 dc = abs(0.5-uv);
        dc *= dc;

        // uv变换到[-0.5,0.5]，然后根据dc的值进行缩放，最后再变换回[0,1]
        _uv -= vec2(0.5,0.5);
        _uv.x *= 1.0+(dc.y*(warpX*warp));
        _uv.y *= 1.0+(dc.x*(warpY*warp));
        _uv += vec2(0.5,0.5);
        return _uv;
      }

      // 将uv映射到采样坐标
      vec2 UvToTextureCoord(vec2 _uv)
      {
        return _uv * (uvToTextureCoordWarp);
      }

      // 开关阶跃函数
      float onOff(float a, float b, float c)
      {
        return step(c, sin(uTime + a*cos(uTime*b)));
      }

      // 将uv坐标映射到颜色值
      vec4 UvToColor(vec2 _uv)
      {
        // 画面的震动
        vec2 look = _uv;
        float window = 1./(1.+20.*(look.y-mod(uTime/4.,1.))*(look.y-mod(uTime/4.,1.)));
        look.x = look.x + sin(look.y*10. + uTime)/50.*onOff(4.,4.,.3)*(1.+cos(uTime*80.))*window;
        look.x = mod(look.x, 1.);
        float vShift = 0.4*onOff(2.,3.,1.15)*(sin(uTime)*sin(uTime*8.) +
                          (0.5 + 0.1*sin(uTime*8.)*cos(uTime)));
        look.y = mod(look.y + vShift, 1.);
        return texture2D(uTexture, UvToTextureCoord(look));
      }

      // 通过uv得到噪音
      float UvToNoise(vec2 p) {
        // 多倍密度采样使噪音变密集
        vec2 _p = p*1.85;
        // 让噪音动起来
        _p += vec2(cos(0.5*uTime),0.)*4.;
        // 使用噪声纹理
        float s = texture2D(uNoiseTexture, mod(_p, 1.0)).x; // 噪音图片是灰度的，在xyz任选一分量即可
        // 在计算噪音强度
        s *= s * 0.5;
        return s;
      }

      // 边缘黑暗
      float UvToCornerDark(vec2 p){
        float factor = 4.0*(0.5 - abs(p.x - 0.5))*(0.5 - abs(p.y - 0.5));
        return sqrt(factor);
      }

      void main(void)
      {
          // 获取扭曲后的uv坐标系和颜色
          vec2 _uv = DistortUv(uv);

          // 如果 uv 坐标超出[0,1]范围，则显示黑色表示超出范围
          if (_uv.y >= 1.0 || _uv.y <= 0.0 || _uv.x <= 0.0 || _uv.x >= 1.0)
            gl_FragColor = vec4(0.0,0.0,0.0,1.0);
          // 否则才正常着色
          else{
            // 获得颜色
            vec4 color = UvToColor(_uv);
            // 标准灰度转换
            float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
            color.rgb = vec3(gray,gray,gray);
            // 添加噪声
            color.rgb += UvToNoise(_uv);
            // 边缘黑暗
            color.rgb *= UvToCornerDark(_uv);
            gl_FragColor = color;
          }
      }
    `,this.PIXINoiseTexture=await he.load(Bt),this.PIXIFilter=new ae({glProgram:ye.from({fragment:this.PIXIFragment,vertex:this.PIXIVertex}),resources:{uNoiseTexture:this.PIXINoiseTexture.source,timeUniforms:{uTime:{value:0,type:"f32"}}}}),this.PIXIContainer.filters=this.PIXIFilter,this.PIXIContainer.filterArea=new re(0,0,e.PIXI_DESIGN_WIDTH,e.PIXI_DESIGN_HEIGHT),this.changeToRoom(this.currentRoom),this.enableButtonsInteraction()}process(e){this.PIXIFilter.resources.timeUniforms.uniforms.uTime=(this.PIXIFilter.resources.timeUniforms.uniforms.uTime+e*.01)%1e3,this.cameraTime=(this.cameraTime+e*.001)%1e3;const t=(()=>{const r=this.cameraTime%28;return r<7?r/7:r<14?1:r<21?1-(r-14)/7:0})();this.PIXISceneContainer.x=t*(this.cameraXMax-this.cameraXMin)+this.cameraXMin;const n=(()=>{const r=this.cameraTime%1;return r<.5?r/.5:(1-r)/.5})();this.PIXILightGraphics.clear().circle(120,120,40).fill({color:16777215,alpha:.95*n})}}class en extends $e{async start(){const e=new Zt;await e.init({PIXI_DESIGN_WIDTH:this.PIXI_DESIGN_WIDTH,PIXI_DESIGN_HEIGHT:this.PIXI_DESIGN_HEIGHT}),this.addChild(e),await super.start()}}const tn=Ne({setup(i,e){let t=pt(null);const n=new en;return dt(async()=>{t.value&&(await n.init({canvas:t.value,runTest:!1}),await n.start())}),{canvasRef:t}}}),nn={class:"game-fnab-layout-main-container"},rn={ref:"canvasRef"};function on(i,e,t,n,r,o){return Ve(),Fe("div",nn,[ft("canvas",rn,null,512)])}const sn=Ae(tn,[["render",on],["__scopeId","data-v-11afc10b"]]),an=Ne({components:{GameFNABLayout:sn}}),ln={class:"game-view-main-container"};function un(i,e,t,n,r,o){const a=It("GameFNABLayout");return Ve(),Fe("div",ln,[mt(a)])}const yn=Ae(an,[["render",un],["__scopeId","data-v-206f239a"]]);export{yn as default};
