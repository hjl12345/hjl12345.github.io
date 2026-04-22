const zb={ROTATE:0,DOLLY:1,PAN:2},Gb={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wl=0,Ro=1,jl=2,Ws=1,ql=2,es=3,Cn=0,Nt=1,cn=2,wn=0,wi=1,Co=2,Po=3,Do=4,Xl=5,ti=100,Kl=101,Yl=102,Jl=103,Zl=104,$l=200,Ql=201,eh=202,th=203,$a=204,Qa=205,nh=206,ih=207,sh=208,ah=209,rh=210,oh=211,ch=212,lh=213,hh=214,er=0,tr=1,nr=2,Pi=3,ir=4,sr=5,ar=6,rr=7,Kr=0,dh=1,uh=2,dn=0,Kc=1,Yc=2,Jc=3,Zc=4,$c=5,Qc=6,el=7,Lo="attached",fh="detached",tl=300,ri=301,Di=302,fa=303,pa=304,sa=306,Li=1e3,ln=1001,Zs=1002,mt=1003,nl=1004,ts=1005,gt=1006,js=1007,Tn=1008,kt=1009,il=1010,sl=1011,rs=1012,Yr=1013,fn=1014,Ht=1015,Pn=1016,Jr=1017,Zr=1018,os=1020,al=35902,rl=35899,ol=1021,cl=1022,Wt=1023,Dn=1026,ii=1027,$r=1028,Qr=1029,Ii=1030,eo=1031,to=1033,qs=33776,Xs=33777,Ks=33778,Ys=33779,or=35840,cr=35841,lr=35842,hr=35843,dr=36196,ur=37492,fr=37496,pr=37488,mr=37489,gr=37490,br=37491,_r=37808,xr=37809,vr=37810,Mr=37811,Sr=37812,Er=37813,yr=37814,Tr=37815,Ar=37816,wr=37817,Rr=37818,Cr=37819,Pr=37820,Dr=37821,Lr=36492,Ir=36494,Fr=36495,Nr=36283,Ur=36284,Or=36285,Br=36286,ph=2200,mh=2201,gh=2202,cs=2300,ls=2301,ma=2302,Io=2303,Ti=2400,Ai=2401,$s=2402,no=2500,bh=2501,_h=0,ll=1,kr=2,xh=3200,Vb=3201,io=0,vh=1,Vn="",yt="srgb",Lt="srgb-linear",Qs="linear",Ze="srgb",li=7680,Fo=519,Mh=512,Sh=513,Eh=514,so=515,yh=516,Th=517,ao=518,Ah=519,zr=35044,No="300 es",hn=2e3,hs=2001;function wh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rh(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ch(){const s=ds("canvas");return s.style.display="block",s}const Uo={};function ea(...s){const e="THREE."+s.shift();console.log(e,...s)}function hl(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ee(...s){s=hl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Re(...s){s=hl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ta(...s){const e=s.join(" ");e in Uo||(Uo[e]=!0,Ee(...s))}function Ph(s,e,t){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Dh={[er]:tr,[nr]:ar,[ir]:rr,[Pi]:sr,[tr]:er,[ar]:nr,[rr]:ir,[sr]:Pi};class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oo=1234567;const is=Math.PI/180,Fi=180/Math.PI;function $t(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ge(s,e,t){return Math.max(e,Math.min(t,s))}function ro(s,e){return(s%e+e)%e}function Lh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ih(s,e,t){return s!==e?(t-s)/(e-s):0}function ss(s,e,t){return(1-t)*s+t*e}function Fh(s,e,t,n){return ss(s,e,1-Math.exp(-t*n))}function Nh(s,e=1){return e-Math.abs(ro(s,e*2)-e)}function Uh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Oh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Bh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function kh(s,e){return s+Math.random()*(e-s)}function zh(s){return s*(.5-Math.random())}function Gh(s){s!==void 0&&(Oo=s);let e=Oo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vh(s){return s*is}function Hh(s){return s*Fi}function Wh(s){return(s&s-1)===0&&s!==0}function jh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xh(s,e,t,n,i){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+n)/2),h=r((e+n)/2),u=a((e-n)/2),d=r((e-n)/2),f=a((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Kh={DEG2RAD:is,RAD2DEG:Fi,generateUUID:$t,clamp:Ge,euclideanModulo:ro,mapLinear:Lh,inverseLerp:Ih,lerp:ss,damp:Fh,pingpong:Nh,smoothstep:Uh,smootherstep:Oh,randInt:Bh,randFloat:kh,randFloatSpread:zh,seededRandom:Gh,degToRad:Vh,radToDeg:Hh,isPowerOfTwo:Wh,ceilPowerOfTwo:jh,floorPowerOfTwo:qh,setQuaternionFromProperEuler:Xh,normalize:$e,denormalize:Jt};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=a[r+0],f=a[r+1],g=a[r+2],_=a[r+3];if(u!==_||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),E=Math.sin(v);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+_*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+_*o;const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,a,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=a[r],d=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(a/2),d=c(n/2),f=c(i/2),g=c(a/2);switch(r){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(a-l)*f,this._z=(r-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(a+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(a-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-i)/f,this._x=(a+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-a*c,this._y=i*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-a*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,a=-a,r=-r,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+a*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),h=2*(o*t-a*i),u=2*(a*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-a*u,this.z=i+c*u+a*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-a*o,this.y=a*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new F,Bo=new jt;class Fe{constructor(e,t,n,i,a,r,o,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,c,l)}set(e,t,n,i,a,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],E=i[4],S=i[7],A=i[2],w=i[5],P=i[8];return a[0]=r*_+o*v+c*A,a[3]=r*m+o*E+c*w,a[6]=r*p+o*S+c*P,a[1]=l*_+h*v+u*A,a[4]=l*m+h*E+u*w,a[7]=l*p+h*S+u*P,a[2]=d*_+f*v+g*A,a[5]=d*m+f*E+g*w,a[8]=d*p+f*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*a*h+n*o*c+i*a*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,d=o*c-h*a,f=l*a-r*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*r)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*a-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new Fe,ko=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zo=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yh(){const s={enabled:!0,workingColorSpace:Lt,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Ze&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ze&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vn?Qs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,a){return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,a)},toWorkingColorSpace:function(i,a){return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Lt]:{primaries:e,whitePoint:n,transfer:Qs,toXYZ:ko,fromXYZ:zo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:ko,fromXYZ:zo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),s}const He=Yh();function Rn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ri(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hi;class Jh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hi===void 0&&(hi=ds("canvas")),hi.width=e.width,hi.height=e.height;const i=hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Rn(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class oo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=$t(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(_a(i[r].image)):a.push(_a(i[r]))}else a=_a(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function _a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}let $h=0;const xa=new F;class St extends Wn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=ln,i=ln,a=gt,r=Tn,o=Wt,c=kt,l=St.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=$t(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=tl;St.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,S=(f+1)/2,A=(p+1)/2,w=(h+d)/4,P=(u+_)/4,x=(g+m)/4;return E>S&&E>A?E<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(E),i=w/n,a=P/n):S>A?S<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(S),n=w/i,a=x/i):A<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(A),n=P/a,i=x/a),this.set(n,i,a,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},a=new St(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new oo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Qh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dl extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ed extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oe{constructor(e,t,n,i,a,r,o,c,l,h,u,d,f,g,_,m){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,a,r,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=a,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/di.setFromMatrixColumn(e,0).length(),a=1/di.setFromMatrixColumn(e,1).length(),r=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=r*h,f=r*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=r*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-r*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*h,t[9]=_-d*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,f=r*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=r*c,f=r*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(td,e,nd)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Nn.crossVectors(n,Ot),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Nn.crossVectors(n,Ot)),Nn.normalize(),gs.crossVectors(Ot,Nn),i[0]=Nn.x,i[4]=gs.x,i[8]=Ot.x,i[1]=Nn.y,i[5]=gs.y,i[9]=Ot.y,i[2]=Nn.z,i[6]=gs.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],E=n[7],S=n[11],A=n[15],w=i[0],P=i[4],x=i[8],y=i[12],W=i[1],R=i[5],B=i[9],O=i[13],H=i[2],G=i[6],z=i[10],k=i[14],Q=i[3],J=i[7],le=i[11],pe=i[15];return a[0]=r*w+o*W+c*H+l*Q,a[4]=r*P+o*R+c*G+l*J,a[8]=r*x+o*B+c*z+l*le,a[12]=r*y+o*O+c*k+l*pe,a[1]=h*w+u*W+d*H+f*Q,a[5]=h*P+u*R+d*G+f*J,a[9]=h*x+u*B+d*z+f*le,a[13]=h*y+u*O+d*k+f*pe,a[2]=g*w+_*W+m*H+p*Q,a[6]=g*P+_*R+m*G+p*J,a[10]=g*x+_*B+m*z+p*le,a[14]=g*y+_*O+m*k+p*pe,a[3]=v*w+E*W+S*H+A*Q,a[7]=v*P+E*R+S*G+A*J,a[11]=v*x+E*B+S*z+A*le,a[15]=v*y+E*O+S*k+A*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],v=c*f-l*d,E=o*f-l*u,S=o*d-c*u,A=r*f-l*h,w=r*d-c*h,P=r*u-o*h;return t*(_*v-m*E+p*S)-n*(g*v-m*A+p*w)+i*(g*E-_*A+p*P)-a*(g*S-_*w+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=t*o-n*r,E=t*c-i*r,S=t*l-a*r,A=n*c-i*o,w=n*l-a*o,P=i*l-a*c,x=h*_-u*g,y=h*m-d*g,W=h*p-f*g,R=u*m-d*_,B=u*p-f*_,O=d*p-f*m,H=v*O-E*B+S*R+A*W-w*y+P*x;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/H;return e[0]=(o*O-c*B+l*R)*G,e[1]=(i*B-n*O-a*R)*G,e[2]=(_*P-m*w+p*A)*G,e[3]=(d*w-u*P-f*A)*G,e[4]=(c*W-r*O-l*y)*G,e[5]=(t*O-i*W+a*y)*G,e[6]=(m*S-g*P-p*E)*G,e[7]=(h*P-d*S+f*E)*G,e[8]=(r*B-o*W+l*x)*G,e[9]=(n*W-t*B-a*x)*G,e[10]=(g*w-_*S+p*v)*G,e[11]=(u*S-h*w-f*v)*G,e[12]=(o*y-r*R-c*x)*G,e[13]=(t*R-n*y+i*x)*G,e[14]=(_*E-g*A-m*v)*G,e[15]=(h*A-u*E+d*v)*G,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,h=r+r,u=o+o,d=a*l,f=a*h,g=a*u,_=r*h,m=r*u,p=o*u,v=c*l,E=c*h,S=c*u,A=n.x,w=n.y,P=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+S)*A,i[2]=(g-E)*A,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(d+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+E)*P,i[9]=(m-v)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let r=di.set(i[0],i[1],i[2]).length();const o=di.set(i[4],i[5],i[6]).length(),c=di.set(i[8],i[9],i[10]).length();a<0&&(r=-r),Xt.copy(this);const l=1/r,h=1/o,u=1/c;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=u,Xt.elements[9]*=u,Xt.elements[10]*=u,t.setFromRotationMatrix(Xt),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,i,a,r,o=hn,c=!1){const l=this.elements,h=2*a/(t-e),u=2*a/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(c)g=a/(r-a),_=r*a/(r-a);else if(o===hn)g=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===hs)g=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=hn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(c)g=1/(r-a),_=r/(r-a);else if(o===hn)g=-2/(r-a),_=-(r+a)/(r-a);else if(o===hs)g=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new F,Xt=new Oe,td=new F(0,0,0),nd=new F(1,1,1),Nn=new F,gs=new F,Ot=new F,Go=new Oe,Vo=new jt;class en{constructor(e=0,t=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let id=0;const Ho=new F,ui=new jt,xn=new Oe,bs=new F,Wi=new F,sd=new F,ad=new jt,Wo=new F(1,0,0),jo=new F(0,1,0),qo=new F(0,0,1),Xo={type:"added"},rd={type:"removed"},fi={type:"childadded",child:null},va={type:"childremoved",child:null};class ct extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new F,t=new en,n=new jt,i=new F(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Fe}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Wo,e)}rotateY(e){return this.rotateOnAxis(jo,e)}rotateZ(e){return this.rotateOnAxis(qo,e)}translateOnAxis(e,t){return Ho.copy(e).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wo,e)}translateY(e){return this.translateOnAxis(jo,e)}translateZ(e){return this.translateOnAxis(qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bs.copy(e):bs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Wi,bs,this.up):xn.lookAt(bs,Wi,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(xn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xo),fi.child=e,this.dispatchEvent(fi),fi.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rd),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*i,a[13]+=n-a[1]*t-a[5]*n-a[9]*i,a[14]+=i-a[2]*t-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new F(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class si extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const od={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(od)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=He.workingColorSpace){if(e=ro(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Sa(r,a,e+1/3),this.g=Sa(r,a,e),this.b=Sa(r,a,e-1/3)}return He.colorSpaceToWorking(this,i),this}setStyle(e,t=yt){function n(a){a!==void 0&&parseFloat(a)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=fl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return He.workingToColorSpace(wt.copy(this),e),Math.round(Ge(wt.r*255,0,255))*65536+Math.round(Ge(wt.g*255,0,255))*256+Math.round(Ge(wt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,a=wt.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(i-a)/u+(i<a?6:0);break;case i:c=(a-n)/u+2;break;case a:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=yt){He.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(_s);const n=ss(Un.h,_s.h,t),i=ss(Un.s,_s.s,t),a=ss(Un.l,_s.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ce;Ce.NAMES=fl;class Hb extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kt=new F,vn=new F,Ea=new F,Mn=new F,pi=new F,mi=new F,Ko=new F,ya=new F,Ta=new F,Aa=new F,wa=new rt,Ra=new rt,Ca=new rt;class Zt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Kt.subVectors(i,t),vn.subVectors(n,t),Ea.subVectors(e,t);const r=Kt.dot(Kt),o=Kt.dot(vn),c=Kt.dot(Ea),l=vn.dot(vn),h=vn.dot(Ea),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(r*h-o*c)*d;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,i,a,r,o,c){return this.getBarycoord(e,t,n,i,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Mn.x),c.addScaledVector(r,Mn.y),c.addScaledVector(o,Mn.z),c)}static getInterpolatedAttribute(e,t,n,i,a,r){return wa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),wa.fromBufferAttribute(e,t),Ra.fromBufferAttribute(e,n),Ca.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(wa,a.x),r.addScaledVector(Ra,a.y),r.addScaledVector(Ca,a.z),r}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),vn.subVectors(e,t),Kt.cross(vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Kt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let r,o;pi.subVectors(i,n),mi.subVectors(a,n),ya.subVectors(e,n);const c=pi.dot(ya),l=mi.dot(ya);if(c<=0&&l<=0)return t.copy(n);Ta.subVectors(e,i);const h=pi.dot(Ta),u=mi.dot(Ta);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(pi,r);Aa.subVectors(e,a);const f=pi.dot(Aa),g=mi.dot(Aa);if(g>=0&&f<=g)return t.copy(a);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(mi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ko.subVectors(a,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Ko,o);const p=1/(m+_+d);return r=_*p,o=d*p,t.copy(n).addScaledVector(pi,r).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ln{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Yt):Yt.fromBufferAttribute(a,r),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),vs.subVectors(this.max,ji),gi.subVectors(e.a,ji),bi.subVectors(e.b,ji),_i.subVectors(e.c,ji),On.subVectors(bi,gi),Bn.subVectors(_i,bi),Xn.subVectors(gi,_i);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-Xn.z,Xn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,Xn.z,0,-Xn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-Xn.y,Xn.x,0];return!Pa(t,gi,bi,_i,vs)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,gi,bi,_i,vs))?!1:(Ms.crossVectors(On,Bn),t=[Ms.x,Ms.y,Ms.z],Pa(t,gi,bi,_i,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sn=[new F,new F,new F,new F,new F,new F,new F,new F],Yt=new F,xs=new Ln,gi=new F,bi=new F,_i=new F,On=new F,Bn=new F,Xn=new F,ji=new F,vs=new F,Ms=new F,Kn=new F;function Pa(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Kn.fromArray(s,a);const o=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),c=e.dot(Kn),l=t.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const pt=new F,Ss=new We;let cd=0;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zr,this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),a=$e(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zr&&(e.usage=this.usage),e}}class pl extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ml extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ld=new Ln,qi=new F,Da=new F;class mn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ld.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(Da)),this.expandByPoint(qi.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hd=0;const Gt=new Oe,La=new ct,xi=new F,Bt=new Ln,Xi=new Ln,Mt=new F;class It extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wh(e)?ml:pl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Fe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,a=e.length;i<a;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const a=e[i];t.setXYZ(i,a.x,a.y,a.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];Bt.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Bt.min,Xi.min),Bt.expandByPoint(Mt),Mt.addVectors(Bt.max,Xi.max),Bt.expandByPoint(Mt)):(Bt.expandByPoint(Xi.min),Bt.expandByPoint(Xi.max))}Bt.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)Mt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Mt.fromBufferAttribute(o,l),c&&(xi.fromBufferAttribute(e,l),Mt.add(xi)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new F,c[x]=new F;const l=new F,h=new F,u=new F,d=new We,f=new We,g=new We,_=new F,m=new F;function p(x,y,W){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,W),d.fromBufferAttribute(a,x),f.fromBufferAttribute(a,y),g.fromBufferAttribute(a,W),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[x].add(_),o[y].add(_),o[W].add(_),c[x].add(m),c[y].add(m),c[W].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,y=v.length;x<y;++x){const W=v[x],R=W.start,B=W.count;for(let O=R,H=R+B;O<H;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new F,S=new F,A=new F,w=new F;function P(x){A.fromBufferAttribute(i,x),w.copy(A);const y=o[x];E.copy(y),E.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(w,y);const R=S.dot(c[x])<0?-1:1;r.setXYZW(x,E.x,E.y,E.z,R)}for(let x=0,y=v.length;x<y;++x){const W=v[x],R=W.start,B=W.count;for(let O=R,H=R+B;O<H;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new F,a=new F,r=new F,o=new F,c=new F,l=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Dt(d,h,u)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],u=a[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zr,this.updateRanges=[],this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new F;class co{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),a=$e(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ud=0;class Qt extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=$t(),this.name="",this.type="Material",this.blending=wi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Qa,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const En=new F,Ia=new F,Es=new F,kn=new F,Fa=new F,ys=new F,Na=new F;class aa{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ia.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Ia);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Es),o=kn.dot(this.direction),c=-kn.dot(Es),l=kn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*c-o,d=r*o-c,g=a*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*o)+d*(r*u+d+2*c)+l}else d=a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d=-a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-c),a),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-a,-c),a),f=d*(d+2*c)+l):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-c),a),f=-u*u+d*(d+2*c)+l);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ia).addScaledVector(Es,d),f}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,a=e.radius*e.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,i,a){Fa.subVectors(t,e),ys.subVectors(n,e),Na.crossVectors(Fa,ys);let r=this.direction.dot(Na),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;kn.subVectors(this.origin,e);const c=o*this.direction.dot(ys.crossVectors(kn,ys));if(c<0)return null;const l=o*this.direction.dot(Fa.cross(kn));if(l<0||c+l>r)return null;const h=-o*kn.dot(Na);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ai extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yo=new Oe,Yn=new aa,Ts=new mn,Jo=new F,As=new F,ws=new F,Rs=new F,Ua=new F,Cs=new F,Zo=new F,Ps=new F;class zt extends ct{constructor(e=new It,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){Cs.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],u=a[c];h!==0&&(Ua.fromBufferAttribute(u,e),r?Cs.addScaledVector(Ua,h):Cs.addScaledVector(Ua.sub(t),h))}t.add(Cs)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(a),Yn.copy(e.ray).recast(e.near),!(Ts.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Ts,Jo)===null||Yn.origin.distanceToSquared(Jo)>(e.far-e.near)**2))&&(Yo.copy(a).invert(),Yn.copy(e.ray).applyMatrix4(Yo),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let i;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,A=E;S<A;S+=3){const w=o.getX(S),P=o.getX(S+1),x=o.getX(S+2);i=Ds(this,p,e,n,l,h,u,w,P,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);i=Ds(this,r,e,n,l,h,u,v,E,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,A=E;S<A;S+=3){const w=S,P=S+1,x=S+2;i=Ds(this,p,e,n,l,h,u,w,P,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,E=m+1,S=m+2;i=Ds(this,r,e,n,l,h,u,v,E,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function fd(s,e,t,n,i,a,r,o){let c;if(e.side===Nt?c=n.intersectTriangle(r,a,i,!0,o):c=n.intersectTriangle(i,a,r,e.side===Cn,o),c===null)return null;Ps.copy(o),Ps.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ps);return l<t.near||l>t.far?null:{distance:l,point:Ps.clone(),object:s}}function Ds(s,e,t,n,i,a,r,o,c,l){s.getVertexPosition(o,As),s.getVertexPosition(c,ws),s.getVertexPosition(l,Rs);const h=fd(s,e,t,n,As,ws,Rs,Zo);if(h){const u=new F;Zt.getBarycoord(Zo,As,ws,Rs,u),i&&(h.uv=Zt.getInterpolatedAttribute(i,o,c,l,u,new We)),a&&(h.uv1=Zt.getInterpolatedAttribute(a,o,c,l,u,new We)),r&&(h.normal=Zt.getInterpolatedAttribute(r,o,c,l,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new F,materialIndex:0};Zt.getNormal(As,ws,Rs,d.normal),h.face=d,h.barycoord=u}return h}const $o=new F,Qo=new rt,ec=new rt,pd=new F,tc=new Oe,Ls=new F,Oa=new mn,nc=new Oe,Ba=new aa;class md extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lo,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ls),this.boundingBox.expandByPoint(Ls)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ls),this.boundingSphere.expandByPoint(Ls)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(i),e.ray.intersectsSphere(Oa)!==!1&&(nc.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(nc),!(this.boundingBox!==null&&Ba.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ba)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fh?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Qo.fromBufferAttribute(i.attributes.skinIndex,e),ec.fromBufferAttribute(i.attributes.skinWeight,e),$o.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const r=ec.getComponent(a);if(r!==0){const o=Qo.getComponent(a);tc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(pd.copy($o).applyMatrix4(tc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gl extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lo extends St{constructor(e=null,t=1,n=1,i,a,r,o,c,l=mt,h=mt,u,d){super(null,r,o,c,l,h,i,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ic=new Oe,gd=new Oe;class ho{constructor(e=[],t=[]){this.uuid=$t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let a=0,r=e.length;a<r;a++){const o=e[a]?e[a].matrixWorld:gd;ic.multiplyMatrices(o,t[a]),ic.toArray(n,a*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ho(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new lo(t,e,e,Wt,Ht);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const a=e.bones[n];let r=t[a];r===void 0&&(Ee("Skeleton: No bone found with UUID:",a),r=new gl),this.bones.push(r),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,a=t.length;i<a;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Gr extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vi=new Oe,sc=new Oe,Is=[],ac=new Ln,bd=new Oe,Ki=new zt,Yi=new mn;class _d extends zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),ac.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(ac)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),Yi.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Yi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yi.copy(this.boundingSphere),Yi.applyMatrix4(n),e.ray.intersectsSphere(Yi)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,vi),sc.multiplyMatrices(n,vi),Ki.matrixWorld=sc,Ki.raycast(e,Is);for(let r=0,o=Is.length;r<o;r++){const c=Is[r];c.instanceId=a,c.object=this,t.push(c)}Is.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new lo(new Float32Array(i*this.count),i,this.count,$r,Ht));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ka=new F,xd=new F,vd=new Fe;class ei{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ka.subVectors(n,t).cross(xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vd.getNormalMatrix(e),i=this.coplanarPoint(ka).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new mn,Md=new We(.5,.5),Fs=new F;class uo{constructor(e=new ei,t=new ei,n=new ei,i=new ei,a=new ei,r=new ei){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){const i=this.planes,a=e.elements,r=a[0],o=a[1],c=a[2],l=a[3],h=a[4],u=a[5],d=a[6],f=a[7],g=a[8],_=a[9],m=a[10],p=a[11],v=a[12],E=a[13],S=a[14],A=a[15];if(i[0].setComponents(l-r,f-h,p-g,A-v).normalize(),i[1].setComponents(l+r,f+h,p+g,A+v).normalize(),i[2].setComponents(l+o,f+u,p+_,A+E).normalize(),i[3].setComponents(l-o,f-u,p-_,A-E).normalize(),n)i[4].setComponents(c,d,m,S).normalize(),i[5].setComponents(l-c,f-d,p-m,A-S).normalize();else if(i[4].setComponents(l-c,f-d,p-m,A-S).normalize(),t===hn)i[5].setComponents(l+c,f+d,p+m,A+S).normalize();else if(t===hs)i[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){Jn.center.set(0,0,0);const t=Md.distanceTo(e.center);return Jn.radius=.7071067811865476+t,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fs.x=i.normal.x>0?e.max.x:e.min.x,Fs.y=i.normal.y>0?e.max.y:e.min.y,Fs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fo extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new F,ia=new F,rc=new Oe,Ji=new aa,Ns=new mn,za=new F,oc=new F;class po extends ct{constructor(e=new It,t=new fo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)na.fromBufferAttribute(t,i-1),ia.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=na.distanceTo(ia);e.setAttribute("lineDistance",new Rt(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=a,e.ray.intersectsSphere(Ns)===!1)return;rc.copy(i).invert(),Ji.copy(e.ray).applyMatrix4(rc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),E=Us(this,e,Ji,c,p,v,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Us(this,e,Ji,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=l){const p=Us(this,e,Ji,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Us(this,e,Ji,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Us(s,e,t,n,i,a,r){const o=s.geometry.attributes.position;if(na.fromBufferAttribute(o,i),ia.fromBufferAttribute(o,a),t.distanceSqToSegment(na,ia,za,oc)>n)return;za.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(za);if(!(l<e.near||l>e.far))return{distance:l,point:oc.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const cc=new F,lc=new F;class bl extends po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)cc.fromBufferAttribute(t,i),lc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cc.distanceTo(lc);e.setAttribute("lineDistance",new Rt(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sd extends po{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _l extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hc=new Oe,Vr=new aa,Os=new mn,Bs=new F;class Ed extends ct{constructor(e=new It,t=new _l){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=a,e.ray.intersectsSphere(Os)===!1)return;hc.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(hc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Bs.fromBufferAttribute(u,m),dc(Bs,m,c,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,_=f;g<_;g++)Bs.fromBufferAttribute(u,g),dc(Bs,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function dc(s,e,t,n,i,a,r){const o=Vr.distanceSqToPoint(s);if(o<t){const c=new F;Vr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class xl extends St{constructor(e=[],t=ri,n,i,a,r,o,c,l,h){super(e,t,n,i,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class us extends St{constructor(e,t,n=fn,i,a,r,o=mt,c=mt,l,h=Dn,u=1){if(h!==Dn&&h!==ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yd extends us{constructor(e,t=fn,n=ri,i,a,r=mt,o=mt,c,l=Dn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,a,r,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vl extends St{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fs extends It{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2));function g(_,m,p,v,E,S,A,w,P,x,y){const W=S/P,R=A/x,B=S/2,O=A/2,H=w/2,G=P+1,z=x+1;let k=0,Q=0;const J=new F;for(let le=0;le<z;le++){const pe=le*R-O;for(let de=0;de<G;de++){const Ne=de*W-B;J[_]=Ne*v,J[m]=pe*E,J[p]=H,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=w>0?1:-1,h.push(J.x,J.y,J.z),u.push(de/P),u.push(1-le/x),k+=1}}for(let le=0;le<x;le++)for(let pe=0;pe<P;pe++){const de=d+pe+G*le,Ne=d+pe+G*(le+1),ot=d+(pe+1)+G*(le+1),at=d+(pe+1)+G*le;c.push(de,Ne,at),c.push(Ne,ot,at),Q+=6}o.addGroup(f,Q,y),f+=Q,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ra extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-r;for(let E=0;E<l;E++){const S=E*u-a;g.push(S,-v,0),_.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const E=v+l*p,S=v+l*(p+1),A=v+1+l*(p+1),w=v+1+l*p;f.push(E,S,w),f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ml extends It{constructor(e=1,t=.4,n=12,i=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],u=[],d=new F,f=new F,g=new F;for(let _=0;_<=n;_++){const m=r+_/n*o;for(let p=0;p<=i;p++){const v=p/i*a;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const p=(i+1)*_+m-1,v=(i+1)*(_-1)+m-1,E=(i+1)*(_-1)+m,S=(i+1)*_+m;c.push(p,v,S),c.push(v,E,S)}this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ni(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(s){const e={};for(let t=0;t<s.length;t++){const n=Ni(s[t]);for(const i in n)e[i]=n[i]}return e}function Td(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const Ad={clone:Ni,merge:Pt};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cd extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mo extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gn extends mo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wb extends Qt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Kr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pd extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dd extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ks(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ld(s){function e(i,a){return s[i]-s[a]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function uc(s,e,t){const n=s.length,i=new s.constructor(n);for(let a=0,r=0;r!==n;++a){const o=t[a]*e;for(let c=0;c!==e;++c)i[r++]=s[o+c]}return i}function El(s,e,t,n){let i=1,a=s[0];for(;a!==void 0&&a[n]===void 0;)a=s[i++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push(...r)),a=s[i++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=s[i++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=s[i++];while(a!==void 0)}class ki{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],a=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=a,a=t[--n-1],e>=a)break t}r=n,n=0;break n}break e}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,i)}return this.interpolate_(n,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i;for(let r=0;r!==i;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Id extends ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ti,endingEnd:Ti}}intervalChanged_(e,t,n){const i=this.parameterPositions;let a=e-2,r=e+1,o=i[a],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ai:a=e,o=2*t-n;break;case $s:a=i.length-2,o=t+i[a]-i[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ai:r=e,c=2*n-t;break;case $s:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let A=0;A!==o;++A)a[A]=p*r[h+A]+v*r[l+A]+E*r[c+A]+S*r[u+A];return a}}class yl extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)a[d]=r[l+d]*u+r[c+d]*h;return a}}class Fd extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nd extends ki{interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const _=(n-t)/(i-t),m=1-_;for(let p=0;p!==o;++p)a[p]=r[l+p]*m+r[c+p]*_;return a}const f=o*2,g=e-1;for(let _=0;_!==o;++_){const m=r[l+_],p=r[c+_],v=g*f+_*2,E=d[v],S=d[v+1],A=e*f+_*2,w=u[A],P=u[A+1];let x=(n-t)/(i-t),y,W,R,B,O;for(let H=0;H<8;H++){y=x*x,W=y*x,R=1-x,B=R*R,O=B*R;const z=O*t+3*B*x*E+3*R*y*w+W*i-n;if(Math.abs(z)<1e-10)break;const k=3*B*(E-t)+6*R*x*(w-E)+3*y*(i-w);if(Math.abs(k)<1e-10)break;x=x-z/k,x=Math.max(0,Math.min(1,x))}a[_]=O*m+3*B*x*S+3*R*y*P+W*p}return a}}class tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Id(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Nd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case cs:t=this.InterpolantFactoryMethodDiscrete;break;case ls:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break;case Io:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return ls;case this.InterpolantFactoryMethodSmooth:return ma;case this.InterpolantFactoryMethodBezier:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let a=0,r=i-1;for(;a!==i&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==i){a>=r&&(r=Math.max(r,1),a=r-1);const o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,a=n.length;a===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Re("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){Re("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&Rh(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Re("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ma,a=e.length-1;let r=1;for(let o=1;o<a;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const u=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=ls;class zi extends tn{constructor(e,t,n){super(e,t,n)}}zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=cs;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Tl extends tn{constructor(e,t,n,i){super(e,t,n,i)}}Tl.prototype.ValueTypeName="color";class Ui extends tn{constructor(e,t,n,i){super(e,t,n,i)}}Ui.prototype.ValueTypeName="number";class Ud extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)jt.slerpFlat(a,0,r,l-o,r,l,c);return a}}class Oi extends tn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ud(this.times,this.values,this.getValueSize(),e)}}Oi.prototype.ValueTypeName="quaternion";Oi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends tn{constructor(e,t,n){super(e,t,n)}}Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=cs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Bi extends tn{constructor(e,t,n,i){super(e,t,n,i)}}Bi.prototype.ValueTypeName="vector";class Hr{constructor(e="",t=-1,n=[],i=no){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$t(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Bd(n[r]).scale(i));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,r=n.length;a!==r;++a)t.push(tn.toJSON(n[a]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const a=t.length,r=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);const h=Ld(c);c=uc(c,1,h),l=uc(l,1,h),!i&&c[0]===0&&(c.push(a),l.push(l[0])),r.push(new Ui(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(a);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(Ee("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Re("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];El(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],a=e.name||"default",r=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const E=d[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}i.push(new Ui(".morphTargetInfluence["+_+"]",m,p))}c=f.length*r}else{const f=".bones["+t[u].name+"]";n(Bi,f+".position",d,"pos",i),n(Oi,f+".quaternion",d,"rot",i),n(Bi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(a,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Od(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return Tl;case"quaternion":return Oi;case"bool":case"boolean":return zi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bd(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Od(s.type);if(s.times===void 0){const t=[],n=[];El(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const An={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(fc(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!fc(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function fc(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class kd{constructor(e,t,n){const i=this;let a=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,a===!1&&i.onStart!==void 0&&i.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const zd=new kd;class Vi{constructor(e){this.manager=e!==void 0?e:zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";const yn={};class Gd extends Error{constructor(e,t){super(e),this.response=t}}class Al extends Vi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=An.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(yn[e]!==void 0){yn[e].push({onLoad:t,onProgress:n,onError:i});return}yn[e]=[],yn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=yn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:E,value:S})=>{if(E)p.close();else{_+=S.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,P=h.length;w<P;w++){const x=h[w];x.onProgress&&x.onProgress(A)}p.enqueue(S),v()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Gd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{An.add(`file:${e}`,l);const h=yn[e];delete yn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=yn[e];if(h===void 0)throw this.manager.itemError(e),l;delete yn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Mi=new WeakMap;class Vd extends Vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=An.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);else{let u=Mi.get(r);u===void 0&&(u=[],Mi.set(r,u)),u.push({onLoad:t,onError:i})}return r}const o=ds("img");function c(){h(),t&&t(this);const u=Mi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Mi.delete(this),a.manager.itemEnd(e)}function l(u){h(),i&&i(u),An.remove(`image:${e}`);const d=Mi.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Mi.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),An.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class Hd extends Vi{constructor(e){super(e)}load(e,t,n,i){const a=new St,r=new Vd(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class oa extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ga=new Oe,pc=new F,mc=new F;class go{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=kt,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(pc),mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mc),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===hs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zs=new F,Gs=new jt,sn=new F;class wl extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zs,Gs,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,Gs,sn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(zs,Gs,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zs,Gs,sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zn=new F,gc=new We,bc=new We;class Ft extends wl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,gc,bc),t.subVectors(bc,gc)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wd extends go{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Fi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||i!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jd extends oa{constructor(e,t,n=0,i=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Wd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class qd extends go{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}}class Xd extends oa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ca extends wl{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kd extends go{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yd extends oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Kd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class jb extends oa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class as{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qb extends It{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Va=new WeakMap;class Jd extends Vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=An.get(`image-bitmap:${e}`);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(l=>{if(Va.has(r)===!0)i&&i(Va.get(r)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(l),a.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return An.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Va.set(c,l),An.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});An.add(`image-bitmap:${e}`,c),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Si=-90,Ei=1;class Zd extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ft(Si,Ei,e,t);i.layers=this.layers,this.add(i);const a=new Ft(Si,Ei,e,t);a.layers=this.layers,this.add(a);const r=new Ft(Si,Ei,e,t);r.layers=this.layers,this.add(r);const o=new Ft(Si,Ei,e,t);o.layers=this.layers,this.add(o);const c=new Ft(Si,Ei,e,t);c.layers=this.layers,this.add(c);const l=new Ft(Si,Ei,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $d extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Qd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Qd(){this._document.hidden===!1&&this.reset()}class eu{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,a,r;switch(t){case"quaternion":i=this._slerp,a=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,a=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,a=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=a,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,a=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[a+o]=n[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(n,a,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,a=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-a,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let a=n,r=i;a!==r;++a)t[a]=t[i+a%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,a){if(i>=.5)for(let r=0;r!==a;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){jt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,a){const r=this._workIndex*a;jt.multiplyQuaternionsFlat(e,r,e,t,e,n),jt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,a){const r=1-i;for(let o=0;o!==a;++o){const c=t+o;e[c]=e[c]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,a){for(let r=0;r!==a;++r){const o=t+r;e[o]=e[o]+e[n+r]*i}}}const bo="\\[\\]\\.:\\/",tu=new RegExp("["+bo+"]","g"),_o="[^"+bo+"]",nu="[^"+bo.replace("\\.","")+"]",iu=/((?:WC+[\/:])*)/.source.replace("WC",_o),su=/(WCOD+)?/.source.replace("WCOD",nu),au=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_o),ru=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_o),ou=new RegExp("^"+iu+su+au+ru+"$"),cu=["material","materials","bones","map"];class lu{constructor(e,t,n){const i=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=n.length;i!==a;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tu,"")}static parseTrackName(e){const t=ou.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const a=n.nodeName.substring(i+1);cu.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let r=0;r<a.length;r++){const o=a[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let a=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;Re("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=lu;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hu{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const a=t.tracks,r=a.length,o=new Array(r),c={endingStart:Ti,endingEnd:Ti};for(let l=0;l!==r;++l){const h=a[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=mh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,a=e._clip.duration,r=a/i,o=i/a;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,a=i.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=a,c[1]=a+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const c=(e-a)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case bh:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case no:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,a=this._loopCount;const r=n===gh;if(e===0)return a===-1?i:r&&(a&1)===1?t-i:i;if(n===ph){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,a+=Math.abs(o);const c=this.repetitions-a;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=a,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(r&&(a&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ai,i.endingEnd=Ai):(e?i.endingStart=this.zeroSlopeAtStart?Ai:Ti:i.endingStart=$s,t?i.endingEnd=this.zeroSlopeAtEnd?Ai:Ti:i.endingEnd=$s)}_scheduleFading(e,t,n){const i=this._mixer,a=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,c=r.sampleValues;return o[0]=a,c[0]=t,o[1]=a+e,c[1]=n,this}}const du=new Float32Array(1);class Kb extends Wn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,a=i.length,r=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==a;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new eu(Ke.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),r[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,a=this._actionsByClip[i];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,a=this._actionsByClip;let r=a[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,r=this._actionsByClip,o=r[a],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete r[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const a=t[n];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,a=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,a=n.path,r=this._bindingsByRootAndName,o=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[a],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new yl(new Float32Array(2),new Float32Array(2),1,du),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,a=t[i];e.__cacheIndex=i,t[i]=e,a.__cacheIndex=n,t[n]=a}clipAction(e,t,n){const i=t||this._root,a=i.uuid;let r=typeof e=="string"?Hr.findByName(i,e):e;const o=r!==null?r.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=no),c!==void 0){const u=c.actionByRoot[a];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;const h=new hu(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,a),h}existingAction(e,t){const n=t||this._root,i=n.uuid,a=typeof e=="string"?Hr.findByName(n,e):e,r=a?a.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,a=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,a,r);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,a=i[n];if(a!==void 0){const r=a.knownActions;for(let o=0,c=r.length;o!==c;++o){const l=r[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const o=n[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,a=i[t];if(a!==void 0)for(const r in a){const o=a[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Yb{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jb extends bl{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ce(n),i=new Ce(i);const a=t/2,r=e/t,o=e/2,c=[],l=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=r){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=d===a?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new It;h.setAttribute("position",new Rt(c,3)),h.setAttribute("color",new Rt(l,3));const u=new fo({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zb extends Wn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _c(s,e,t,n){const i=uu(n);switch(t){case ol:return s*e;case $r:return s*e/i.components*i.byteLength;case Qr:return s*e/i.components*i.byteLength;case Ii:return s*e*2/i.components*i.byteLength;case eo:return s*e*2/i.components*i.byteLength;case cl:return s*e*3/i.components*i.byteLength;case Wt:return s*e*4/i.components*i.byteLength;case to:return s*e*4/i.components*i.byteLength;case qs:case Xs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Ys:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cr:case hr:return Math.max(s,16)*Math.max(e,8)/4;case or:case lr:return Math.max(s,8)*Math.max(e,8)/2;case dr:case ur:case pr:case mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fr:case gr:case br:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _r:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Sr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Er:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Tr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ar:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Dr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Lr:case Ir:case Fr:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Nr:case Ur:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Or:case Br:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uu(s){switch(s){case kt:case il:return{byteLength:1,components:1};case rs:case sl:case Pn:return{byteLength:2,components:1};case Jr:case Zr:return{byteLength:2,components:4};case fn:case Yr:case Ht:return{byteLength:4,components:1};case al:case rl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function Rl(){let s=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function fu(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:a,update:r}}var pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Su=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Au=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ru=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Uu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ku=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ju=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,of=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ff=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,If=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ep=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ip=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Np=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Up=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:pu,alphahash_pars_fragment:mu,alphamap_fragment:gu,alphamap_pars_fragment:bu,alphatest_fragment:_u,alphatest_pars_fragment:xu,aomap_fragment:vu,aomap_pars_fragment:Mu,batching_pars_vertex:Su,batching_vertex:Eu,begin_vertex:yu,beginnormal_vertex:Tu,bsdfs:Au,iridescence_fragment:wu,bumpmap_pars_fragment:Ru,clipping_planes_fragment:Cu,clipping_planes_pars_fragment:Pu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Lu,color_fragment:Iu,color_pars_fragment:Fu,color_pars_vertex:Nu,color_vertex:Uu,common:Ou,cube_uv_reflection_fragment:Bu,defaultnormal_vertex:ku,displacementmap_pars_vertex:zu,displacementmap_vertex:Gu,emissivemap_fragment:Vu,emissivemap_pars_fragment:Hu,colorspace_fragment:Wu,colorspace_pars_fragment:ju,envmap_fragment:qu,envmap_common_pars_fragment:Xu,envmap_pars_fragment:Ku,envmap_pars_vertex:Yu,envmap_physical_pars_fragment:of,envmap_vertex:Ju,fog_vertex:Zu,fog_pars_vertex:$u,fog_fragment:Qu,fog_pars_fragment:ef,gradientmap_pars_fragment:tf,lightmap_pars_fragment:nf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:af,lights_pars_begin:rf,lights_toon_fragment:cf,lights_toon_pars_fragment:lf,lights_phong_fragment:hf,lights_phong_pars_fragment:df,lights_physical_fragment:uf,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:gf,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:vf,map_fragment:Mf,map_pars_fragment:Sf,map_particle_fragment:Ef,map_particle_pars_fragment:yf,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:Af,morphinstance_vertex:wf,morphcolor_vertex:Rf,morphnormal_vertex:Cf,morphtarget_pars_vertex:Pf,morphtarget_vertex:Df,normal_fragment_begin:Lf,normal_fragment_maps:If,normal_pars_fragment:Ff,normal_pars_vertex:Nf,normal_vertex:Uf,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:Gf,opaque_fragment:Vf,packing:Hf,premultiplied_alpha_fragment:Wf,project_vertex:jf,dithering_fragment:qf,dithering_pars_fragment:Xf,roughnessmap_fragment:Kf,roughnessmap_pars_fragment:Yf,shadowmap_pars_fragment:Jf,shadowmap_pars_vertex:Zf,shadowmap_vertex:$f,shadowmask_pars_fragment:Qf,skinbase_vertex:ep,skinning_pars_vertex:tp,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:ap,tonemapping_fragment:rp,tonemapping_pars_fragment:op,transmission_fragment:cp,transmission_pars_fragment:lp,uv_pars_fragment:hp,uv_pars_vertex:dp,uv_vertex:up,worldpos_vertex:fp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:bp,cube_vert:_p,cube_frag:xp,depth_vert:vp,depth_frag:Mp,distance_vert:Sp,distance_frag:Ep,equirect_vert:yp,equirect_frag:Tp,linedashed_vert:Ap,linedashed_frag:wp,meshbasic_vert:Rp,meshbasic_frag:Cp,meshlambert_vert:Pp,meshlambert_frag:Dp,meshmatcap_vert:Lp,meshmatcap_frag:Ip,meshnormal_vert:Fp,meshnormal_frag:Np,meshphong_vert:Up,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:kp,meshtoon_vert:zp,meshtoon_frag:Gp,points_vert:Vp,points_frag:Hp,shadow_vert:Wp,shadow_frag:jp,sprite_vert:qp,sprite_frag:Xp},re={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},on={basic:{uniforms:Pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Pt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Pt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Pt([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Pt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Pt([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Pt([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Pt([re.common,re.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Pt([re.lights,re.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};on.physical={uniforms:Pt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Vs={r:0,b:0,g:0},Zn=new en,Kp=new Oe;function Yp(s,e,t,n,i,a){const r=new Ce(0);let o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const S=v.backgroundBlurriness>0;E=e.get(E,S)}return E}function g(v){let E=!1;const S=f(v);S===null?m(r,o):S&&S.isColor&&(m(S,1),E=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,E){const S=f(E);S&&(S.isCubeTexture||S.mapping===sa)?(l===void 0&&(l=new zt(new fs(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ni(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Zn.copy(E.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(Zn)),l.material.toneMapped=He.getTransfer(S.colorSpace)!==Ze,(h!==S||u!==S.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new zt(new ra(2,2),new pn({name:"BackgroundMaterial",uniforms:Ni(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=He.getTransfer(S.colorSpace)!==Ze,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,E){v.getRGB(Vs,Sl(s)),t.buffers.color.setClear(Vs.r,Vs.g,Vs.b,E,a)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,E=1){r.set(v),o=E,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(r,o)},render:g,addToRenderList:_,dispose:p}}function Jp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let a=i,r=!1;function o(R,B,O,H,G){let z=!1;const k=u(R,H,O,B);a!==k&&(a=k,l(a.object)),z=f(R,H,O,G),z&&g(R,H,O,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,S(R,B,O,H),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,B,O,H){const G=H.wireframe===!0;let z=n[B.id];z===void 0&&(z={},n[B.id]=z);const k=R.isInstancedMesh===!0?R.id:0;let Q=z[k];Q===void 0&&(Q={},z[k]=Q);let J=Q[O.id];J===void 0&&(J={},Q[O.id]=J);let le=J[G];return le===void 0&&(le=d(c()),J[G]=le),le}function d(R){const B=[],O=[],H=[];for(let G=0;G<t;G++)B[G]=0,O[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:H,object:R,attributes:{},index:null}}function f(R,B,O,H){const G=a.attributes,z=B.attributes;let k=0;const Q=O.getAttributes();for(const J in Q)if(Q[J].location>=0){const pe=G[J];let de=z[J];if(de===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),pe===void 0||pe.attribute!==de||de&&pe.data!==de.data)return!0;k++}return a.attributesNum!==k||a.index!==H}function g(R,B,O,H){const G={},z=B.attributes;let k=0;const Q=O.getAttributes();for(const J in Q)if(Q[J].location>=0){let pe=z[J];pe===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor));const de={};de.attribute=pe,pe&&pe.data&&(de.data=pe.data),G[J]=de,k++}a.attributes=G,a.attributesNum=k,a.index=H}function _(){const R=a.newAttributes;for(let B=0,O=R.length;B<O;B++)R[B]=0}function m(R){p(R,0)}function p(R,B){const O=a.newAttributes,H=a.enabledAttributes,G=a.attributeDivisors;O[R]=1,H[R]===0&&(s.enableVertexAttribArray(R),H[R]=1),G[R]!==B&&(s.vertexAttribDivisor(R,B),G[R]=B)}function v(){const R=a.newAttributes,B=a.enabledAttributes;for(let O=0,H=B.length;O<H;O++)B[O]!==R[O]&&(s.disableVertexAttribArray(O),B[O]=0)}function E(R,B,O,H,G,z,k){k===!0?s.vertexAttribIPointer(R,B,O,G,z):s.vertexAttribPointer(R,B,O,H,G,z)}function S(R,B,O,H){_();const G=H.attributes,z=O.getAttributes(),k=B.defaultAttributeValues;for(const Q in z){const J=z[Q];if(J.location>=0){let le=G[Q];if(le===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const pe=le.normalized,de=le.itemSize,Ne=e.get(le);if(Ne===void 0)continue;const ot=Ne.buffer,at=Ne.type,K=Ne.bytesPerElement,ne=at===s.INT||at===s.UNSIGNED_INT||le.gpuType===Yr;if(le.isInterleavedBufferAttribute){const ae=le.data,Ie=ae.stride,Ae=le.offset;if(ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<J.locationSize;Pe++)p(J.location+Pe,ae.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Pe=0;Pe<J.locationSize;Pe++)m(J.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let Pe=0;Pe<J.locationSize;Pe++)E(J.location+Pe,de/J.locationSize,at,pe,Ie*K,(Ae+de/J.locationSize*Pe)*K,ne)}else{if(le.isInstancedBufferAttribute){for(let ae=0;ae<J.locationSize;ae++)p(J.location+ae,le.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ae=0;ae<J.locationSize;ae++)m(J.location+ae);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let ae=0;ae<J.locationSize;ae++)E(J.location+ae,de/J.locationSize,at,pe,de*K,de/J.locationSize*ae*K,ne)}}else if(k!==void 0){const pe=k[Q];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(J.location,pe);break;case 3:s.vertexAttrib3fv(J.location,pe);break;case 4:s.vertexAttrib4fv(J.location,pe);break;default:s.vertexAttrib1fv(J.location,pe)}}}}v()}function A(){y();for(const R in n){const B=n[R];for(const O in B){const H=B[O];for(const G in H){const z=H[G];for(const k in z)h(z[k].object),delete z[k];delete H[G]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const B=n[R.id];for(const O in B){const H=B[O];for(const G in H){const z=H[G];for(const k in z)h(z[k].object),delete z[k];delete H[G]}}delete n[R.id]}function P(R){for(const B in n){const O=n[B];for(const H in O){const G=O[H];if(G[R.id]===void 0)continue;const z=G[R.id];for(const k in z)h(z[k].object),delete z[k];delete G[R.id]}}}function x(R){for(const B in n){const O=n[B],H=R.isInstancedMesh===!0?R.id:0,G=O[H];if(G!==void 0){for(const z in G){const k=G[z];for(const Q in k)h(k[Q].object),delete k[Q];delete G[z]}delete O[H],Object.keys(O).length===0&&delete n[B]}}}function y(){W(),r=!0,a!==i&&(a=i,l(a.object))}function W(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:y,resetDefaultState:W,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Zp(s,e,t){let n;function i(l){n=l}function a(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function r(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $p(s,e,t,n){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){return!(P!==Wt&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const x=P===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==kt&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ht&&!x)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ee("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:w}}function Qp(s){const e=this;let t=null,n=0,i=!1,a=!1;const r=new ei,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||a&&!m)a?h(null):l();else{const v=a?0:n,E=v*4;let S=p.clippingState||null;c.value=S,S=h(g,d,E,f);for(let A=0;A!==E;++A)S[A]=t[A];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=f;E!==_;++E,S+=4)r.copy(u[E]).applyMatrix4(v,o),r.normal.toArray(m,S),m[S+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Hn=4,xc=[.125,.215,.35,.446,.526,.582],ni=20,em=256,Zi=new ca,vc=new Ce;let Ha=null,Wa=0,ja=0,qa=!1;const tm=new F;class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,a={}){const{size:r=256,position:o=tm}=a;Ha=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha,Wa,ja),this._renderer.xr.enabled=qa,e.scissorTest=!1,yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:Pn,format:Wt,colorSpace:Lt,depthBuffer:!1},i=Sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nm(a)),this._blurMaterial=sm(a,e,t),this._ggxMaterial=im(a,e,t)}return i}_compileMaterial(e){const t=new zt(new It,e);this._renderer.compile(t,Zi)}_sceneToCubeUV(e,t,n,i,a){const c=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vc),u.toneMapping=dn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new fs,new ai({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(vc),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+h[E],a.y,a.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+h[E],a.z)):(c.up.set(0,l[E],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+h[E]));const A=this._cubeSize;yi(i,S*A,E>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(_,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ri||e.mapping===Di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const a=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;yi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Zi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let a=1;a<i;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Hn?n-g+Hn:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,yi(a,m,p,3*_,2*_),i.setRenderTarget(a),i.render(o,Zi),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=g-n,yi(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,Zi)}_blur(e,t,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*ni-1),_=a/g,m=isFinite(a)?1+Math.floor(h*_):ni;m>ni&&Ee(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const p=[];let v=0;for(let P=0;P<ni;++P){const x=P/_,y=Math.exp(-x*x/2);p.push(y),P===0?v+=y:P<m&&(v+=2*y)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const S=this._sizeLods[i],A=3*S*(i>E-Hn?i-E+Hn:0),w=4*(this._cubeSize-S);yi(t,A,w,3*S,2*S),c.setRenderTarget(t),c.render(u,Zi)}}function nm(s){const e=[],t=[],n=[];let i=s;const a=s-Hn+1+xc.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);e.push(o);let c=1/o;r>s-Hn?c=xc[r-s+Hn-1]:r===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),E=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let w=0;w<f;w++){const P=w%3*2/3-1,x=w>2?0:-1,y=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];v.set(y,_*g*w),E.set(d,m*g*w);const W=[w,w,w,w,w,w];S.set(W,p*g*w)}const A=new It;A.setAttribute("position",new Dt(v,_)),A.setAttribute("uv",new Dt(E,m)),A.setAttribute("faceIndex",new Dt(S,p)),n.push(new zt(A,null)),i>Hn&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Sc(s,e,t){const n=new un(s,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function im(s,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:em,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:la(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function sm(s,e,t){const n=new Float32Array(ni),i=new F(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ec(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function yc(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cl extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fs(5,5,5),a=new pn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:wn});a.uniforms.tEquirect.value=t;const r=new zt(i,a),o=t.minFilter;return t.minFilter===Tn&&(t.minFilter=gt),new Zd(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}}function am(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?r(d):a(d)}function a(d){if(d&&d.isTexture){const f=d.mapping;if(f===fa||f===pa)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new Cl(g.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const f=d.mapping,g=f===fa||f===pa,_=f===ri||f===Di;if(g||_){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Mc(s)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||_&&v&&c(v)?(n===null&&(n=new Mc(s)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===fa?d.mapping=ri:f===pa&&(d.mapping=Di),d}function c(d){let f=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function l(d){const f=d.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function rm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ta("WebGLRenderer: "+n+" extension not supported."),i}}}function om(s,e,t,n){const i={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let E=0,S=v.length;E<S;E+=3){const A=v[E+0],w=v[E+1],P=v[E+2];d.push(A,w,w,P,P,A)}}else{const v=g.array;_=g.version;for(let E=0,S=v.length/3-1;E<S;E+=3){const A=E+0,w=E+1,P=E+2;d.push(A,w,w,P,P,A)}}const m=new(g.count>=65535?ml:pl)(d,1);m.version=_;const p=a.get(u);p&&e.remove(p),a.set(u,m)}function h(u){const d=a.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function cm(s,e,t){let n;function i(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function c(d,f){s.drawElements(n,f,a,d*r),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,a,d*r,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,a,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:Re("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hm(s,e,t){const n=new WeakMap,i=new rt;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let S=o.attributes.position.count*E,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*A*4*u),P=new dl(w,S,A,u);P.type=Ht,P.needsUpdate=!0;const x=E*4;for(let W=0;W<u;W++){const R=m[W],B=p[W],O=v[W],H=S*A*4*W;for(let G=0;G<R.count;G++){const z=G*x;f===!0&&(i.fromBufferAttribute(R,G),w[H+z+0]=i.x,w[H+z+1]=i.y,w[H+z+2]=i.z,w[H+z+3]=0),g===!0&&(i.fromBufferAttribute(B,G),w[H+z+4]=i.x,w[H+z+5]=i.y,w[H+z+6]=i.z,w[H+z+7]=0),_===!0&&(i.fromBufferAttribute(O,G),w[H+z+8]=i.x,w[H+z+9]=i.y,w[H+z+10]=i.z,w[H+z+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new We(S,A)},n.set(o,d),o.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function dm(s,e,t,n,i){let a=new WeakMap;function r(l){const h=i.render.frame,u=l.geometry,d=e.get(l,u);if(a.get(d)!==h&&(e.update(d),a.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),a.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return d}function o(){a=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const um={[Kc]:"LINEAR_TONE_MAPPING",[Yc]:"REINHARD_TONE_MAPPING",[Jc]:"CINEON_TONE_MAPPING",[Zc]:"ACES_FILMIC_TONE_MAPPING",[Qc]:"AGX_TONE_MAPPING",[el]:"NEUTRAL_TONE_MAPPING",[$c]:"CUSTOM_TONE_MAPPING"};function fm(s,e,t,n,i){const a=new un(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),r=new un(e,t,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),o=new It;o.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Rt([0,2,0,0,2,0],2));const c=new Cd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new zt(o,c),h=new ca(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(v,E){a.setSize(v,E),r.setSize(v,E);for(let S=0;S<m.length;S++){const A=m[S];A.setSize&&A.setSize(v,E)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const E=a.width,S=a.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(E,S)}},this.begin=function(v,E){if(f||v.toneMapping===dn&&m.length===0)return!1;if(_=E,E!==null){const S=E.width,A=E.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return p===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=dn,!0},this.hasRenderPass=function(){return p},this.end=function(v,E){v.toneMapping=g,f=!0;let S=a,A=r;for(let w=0;w<m.length;w++){const P=m[w];if(P.enabled!==!1&&(P.render(v,A,S,E),P.needsSwap!==!1)){const x=S;S=A,A=x}}if(u!==v.outputColorSpace||d!==v.toneMapping){u=v.outputColorSpace,d=v.toneMapping,c.defines={},He.getTransfer(u)===Ze&&(c.defines.SRGB_TRANSFER="");const w=um[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(_),v.render(l,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),r.dispose(),o.dispose(),c.dispose()}}const Pl=new St,Wr=new us(1,1),Dl=new dl,Ll=new ed,Il=new xl,Tc=[],Ac=[],wc=new Float32Array(16),Rc=new Float32Array(9),Cc=new Float32Array(4);function Hi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let a=Tc[i];if(a===void 0&&(a=new Float32Array(i),Tc[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ha(s,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function pm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function bm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function _m(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(bt(t,n))return;Cc.set(n),s.uniformMatrix2fv(this.addr,!1,Cc),_t(t,n)}}function xm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(bt(t,n))return;Rc.set(n),s.uniformMatrix3fv(this.addr,!1,Rc),_t(t,n)}}function vm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(bt(t,n))return;wc.set(n),s.uniformMatrix4fv(this.addr,!1,wc),_t(t,n)}}function Mm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function Em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function Tm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function wm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function Rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function Cm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Wr.compareFunction=t.isReversedDepthBuffer()?ao:so,a=Wr):a=Pl,t.setTexture2D(e||a,i)}function Pm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ll,i)}function Dm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Il,i)}function Lm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Dl,i)}function Im(s){switch(s){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return bm;case 35674:return _m;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return Mm;case 35667:case 35671:return Sm;case 35668:case 35672:return Em;case 35669:case 35673:return ym;case 5125:return Tm;case 36294:return Am;case 36295:return wm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Fm(s,e){s.uniform1fv(this.addr,e)}function Nm(s,e){const t=Hi(e,this.size,2);s.uniform2fv(this.addr,t)}function Um(s,e){const t=Hi(e,this.size,3);s.uniform3fv(this.addr,t)}function Om(s,e){const t=Hi(e,this.size,4);s.uniform4fv(this.addr,t)}function Bm(s,e){const t=Hi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function km(s,e){const t=Hi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zm(s,e){const t=Hi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gm(s,e){s.uniform1iv(this.addr,e)}function Vm(s,e){s.uniform2iv(this.addr,e)}function Hm(s,e){s.uniform3iv(this.addr,e)}function Wm(s,e){s.uniform4iv(this.addr,e)}function jm(s,e){s.uniform1uiv(this.addr,e)}function qm(s,e){s.uniform2uiv(this.addr,e)}function Xm(s,e){s.uniform3uiv(this.addr,e)}function Km(s,e){s.uniform4uiv(this.addr,e)}function Ym(s,e,t){const n=this.cache,i=e.length,a=ha(t,i);bt(n,a)||(s.uniform1iv(this.addr,a),_t(n,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=Wr:r=Pl;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,a[o])}function Jm(s,e,t){const n=this.cache,i=e.length,a=ha(t,i);bt(n,a)||(s.uniform1iv(this.addr,a),_t(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Ll,a[r])}function Zm(s,e,t){const n=this.cache,i=e.length,a=ha(t,i);bt(n,a)||(s.uniform1iv(this.addr,a),_t(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Il,a[r])}function $m(s,e,t){const n=this.cache,i=e.length,a=ha(t,i);bt(n,a)||(s.uniform1iv(this.addr,a),_t(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Dl,a[r])}function Qm(s){switch(s){case 5126:return Fm;case 35664:return Nm;case 35665:return Um;case 35666:return Om;case 35674:return Bm;case 35675:return km;case 35676:return zm;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Hm;case 35669:case 35673:return Wm;case 5125:return jm;case 36294:return qm;case 36295:return Xm;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return $m}}class eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}}class tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qm(t.type)}}class ng{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Pc(s,e){s.seq.push(e),s.map[e.id]=e}function ig(s,e,t){const n=s.name,i=n.length;for(Xa.lastIndex=0;;){const a=Xa.exec(n),r=Xa.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Pc(t,l===void 0?new eg(o,s,e):new tg(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new ng(o),Pc(t,u)),t=u}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);ig(o,c,this)}const i=[],a=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):a.push(r);i.length>0&&(this.seq=i.concat(a))}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Dc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const sg=37297;let ag=0;function rg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Lc=new Fe;function og(s){He._getMatrix(Lc,He.workingColorSpace,s);const e=`mat3( ${Lc.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(s)){case Qs:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ic(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+rg(s.getShaderSource(e),o)}else return a}function cg(s,e){const t=og(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lg={[Kc]:"Linear",[Yc]:"Reinhard",[Jc]:"Cineon",[Zc]:"ACESFilmic",[Qc]:"AgX",[el]:"Neutral",[$c]:"Custom"};function hg(s,e){const t=lg[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hs=new F;function dg(){He.getLuminanceCoefficients(Hs);const s=Hs.x.toFixed(4),e=Hs.y.toFixed(4),t=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ug(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function fg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(e,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function ns(s){return s!==""}function Fc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(s){return s.replace(mg,bg)}const gg=new Map;function bg(s,e){let t=Ue[e];if(t===void 0){const n=gg.get(e);if(n!==void 0)t=Ue[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jr(t)}const _g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(s){return s.replace(_g,xg)}function xg(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Oc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vg={[Ws]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};function Mg(s){return vg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sg={[ri]:"ENVMAP_TYPE_CUBE",[Di]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function Eg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Sg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const yg={[Di]:"ENVMAP_MODE_REFRACTION"};function Tg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ag={[Kr]:"ENVMAP_BLENDING_MULTIPLY",[dh]:"ENVMAP_BLENDING_MIX",[uh]:"ENVMAP_BLENDING_ADD"};function wg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ag[s.combine]||"ENVMAP_BLENDING_NONE"}function Rg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cg(s,e,t,n){const i=s.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=Mg(t),l=Eg(t),h=Tg(t),u=wg(t),d=Rg(t),f=ug(t),g=fg(a),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),p.length>0&&(p+=`
`)):(m=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),p=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==dn?hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,cg("linearToOutputTexel",t.outputColorSpace),dg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),r=jr(r),r=Fc(r,t),r=Nc(r,t),o=jr(o),o=Fc(o,t),o=Nc(o,t),r=Uc(r),o=Uc(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=v+m+r,S=v+p+o,A=Dc(i,i.VERTEX_SHADER,E),w=Dc(i,i.FRAGMENT_SHADER,S);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(R){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(A)||"",H=i.getShaderInfoLog(w)||"",G=B.trim(),z=O.trim(),k=H.trim();let Q=!0,J=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,w);else{const le=Ic(i,A,"vertex"),pe=Ic(i,w,"fragment");Re("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+le+`
`+pe)}else G!==""?Ee("WebGLProgram: Program Info Log:",G):(z===""||k==="")&&(J=!1);J&&(R.diagnostics={runnable:Q,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(A),i.deleteShader(w),x=new Js(i,_),y=pg(i,_)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=i.getProgramParameter(_,sg)),W},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ag++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Pg=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lg(e),t.set(e,n)),n}}class Lg{constructor(e){this.id=Pg++,this.code=e,this.usedTimes=0}}function Ig(s,e,t,n,i,a){const r=new ul,o=new Dg,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,y,W,R,B){const O=R.fog,H=B.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||G,z),Q=k&&k.mapping===sa?k.image.height:null,J=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Ee("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pe=le!==void 0?le.length:0;let de=0;H.morphAttributes.position!==void 0&&(de=1),H.morphAttributes.normal!==void 0&&(de=2),H.morphAttributes.color!==void 0&&(de=3);let Ne,ot,at,K;if(J){const Je=on[J];Ne=Je.vertexShader,ot=Je.fragmentShader}else Ne=x.vertexShader,ot=x.fragmentShader,o.update(x),at=o.getVertexShaderID(x),K=o.getFragmentShaderID(x);const ne=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,Pe=!!x.map,xt=!!x.matcap,je=!!k,Ye=!!x.aoMap,tt=!!x.lightMap,Be=!!x.bumpMap,ht=!!x.normalMap,C=!!x.displacementMap,ft=!!x.emissiveMap,Xe=!!x.metalnessMap,it=!!x.roughnessMap,ve=x.anisotropy>0,T=x.clearcoat>0,b=x.dispersion>0,L=x.iridescence>0,X=x.sheen>0,Y=x.transmission>0,q=ve&&!!x.anisotropyMap,me=T&&!!x.clearcoatMap,ie=T&&!!x.clearcoatNormalMap,Te=T&&!!x.clearcoatRoughnessMap,we=L&&!!x.iridescenceMap,Z=L&&!!x.iridescenceThicknessMap,ee=X&&!!x.sheenColorMap,ge=X&&!!x.sheenRoughnessMap,_e=!!x.specularMap,he=!!x.specularColorMap,ke=!!x.specularIntensityMap,D=Y&&!!x.transmissionMap,se=Y&&!!x.thicknessMap,te=!!x.gradientMap,fe=!!x.alphaMap,$=x.alphaTest>0,j=!!x.alphaHash,be=!!x.extensions;let De=dn;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(De=s.toneMapping);const st={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:ot,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Lt,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:xt,envMap:je,envMapMode:je&&k.mapping,envMapCubeUVHeight:Q,aoMap:Ye,lightMap:tt,bumpMap:Be,normalMap:ht,displacementMap:C,emissiveMap:ft,normalMapObjectSpace:ht&&x.normalMapType===vh,normalMapTangentSpace:ht&&x.normalMapType===io,metalnessMap:Xe,roughnessMap:it,anisotropy:ve,anisotropyMap:q,clearcoat:T,clearcoatMap:me,clearcoatNormalMap:ie,clearcoatRoughnessMap:Te,dispersion:b,iridescence:L,iridescenceMap:we,iridescenceThicknessMap:Z,sheen:X,sheenColorMap:ee,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:he,specularIntensityMap:ke,transmission:Y,transmissionMap:D,thicknessMap:se,gradientMap:te,opaque:x.transparent===!1&&x.blending===wi&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:$,alphaHash:j,combine:x.combine,mapUv:Pe&&g(x.map.channel),aoMapUv:Ye&&g(x.aoMap.channel),lightMapUv:tt&&g(x.lightMap.channel),bumpMapUv:Be&&g(x.bumpMap.channel),normalMapUv:ht&&g(x.normalMap.channel),displacementMapUv:C&&g(x.displacementMap.channel),emissiveMapUv:ft&&g(x.emissiveMap.channel),metalnessMapUv:Xe&&g(x.metalnessMap.channel),roughnessMapUv:it&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:me&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(x.sheenRoughnessMap.channel),specularMapUv:_e&&g(x.specularMap.channel),specularColorMapUv:he&&g(x.specularColorMap.channel),specularIntensityMapUv:ke&&g(x.specularIntensityMap.channel),transmissionMapUv:D&&g(x.transmissionMap.channel),thicknessMapUv:se&&g(x.thicknessMap.channel),alphaMapUv:fe&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ht||ve),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(Pe||fe),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:de,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&He.getTransfer(x.map.colorSpace)===Ze,decodeVideoTextureEmissive:ft&&x.emissiveMap.isVideoTexture===!0&&He.getTransfer(x.emissiveMap.colorSpace)===Ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===Nt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function m(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)y.push(W),y.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(p(y,x),v(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){r.disableAll(),y.instancing&&r.enable(0),y.instancingColor&&r.enable(1),y.instancingMorph&&r.enable(2),y.matcap&&r.enable(3),y.envMap&&r.enable(4),y.normalMapObjectSpace&&r.enable(5),y.normalMapTangentSpace&&r.enable(6),y.clearcoat&&r.enable(7),y.iridescence&&r.enable(8),y.alphaTest&&r.enable(9),y.vertexColors&&r.enable(10),y.vertexAlphas&&r.enable(11),y.vertexUv1s&&r.enable(12),y.vertexUv2s&&r.enable(13),y.vertexUv3s&&r.enable(14),y.vertexTangents&&r.enable(15),y.anisotropy&&r.enable(16),y.alphaHash&&r.enable(17),y.batching&&r.enable(18),y.dispersion&&r.enable(19),y.batchingColor&&r.enable(20),y.gradientMap&&r.enable(21),x.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),x.push(r.mask)}function E(x){const y=f[x.type];let W;if(y){const R=on[y];W=Ad.clone(R.uniforms)}else W=x.uniforms;return W}function S(x,y){let W=h.get(y);return W!==void 0?++W.usedTimes:(W=new Cg(s,y,x,i),l.push(W),h.set(y,W)),W}function A(x){if(--x.usedTimes===0){const y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function P(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:S,releaseProgram:A,releaseShaderCache:w,programs:l,dispose:P}}function Fg(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,c){s.get(r)[o]=c}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:a}}function Ng(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Bc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kc(){const s=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,m,p){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:r(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=r(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function c(d,f,g,_,m,p){const v=o(d,f,g,_,m,p);g.transmission>0?n.push(v):g.transparent===!0?i.push(v):t.push(v)}function l(d,f,g,_,m,p){const v=o(d,f,g,_,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Ng),n.length>1&&n.sort(f||Bc),i.length>1&&i.sort(f||Bc)}function u(){for(let d=e,f=s.length;d<f;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:c,unshift:l,finish:u,sort:h}}function Ug(){let s=new WeakMap;function e(n,i){const a=s.get(n);let r;return a===void 0?(r=new kc,s.set(n,[r])):i>=a.length?(r=new kc,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Og(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ce};break;case"SpotLight":t={position:new F,direction:new F,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function Bg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let kg=0;function zg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Gg(s){const e=new Og,t=Bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const i=new F,a=new Oe,r=new Oe;function o(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,E=0,S=0,A=0,w=0,P=0;l.sort(zg);for(let y=0,W=l.length;y<W;y++){const R=l[y],B=R.color,O=R.intensity,H=R.distance;let G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ii?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],O);P++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=z,f++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(B).multiplyScalar(O),z.distance=H,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;const k=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,k.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=k.matrix,R.castShadow){const Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=G,S++}_++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(B).multiplyScalar(O),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const k=R.shadow,Q=t.get(R);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,Q.shadowCameraNear=k.camera.near,Q.shadowCameraFar=k.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=z,g++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(O),z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==v||x.numPointShadows!==E||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=v,x.numPointShadows=E,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=P,n.version=kg++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const E=l[p];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(E.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),r.identity(),a.copy(E.matrixWorld),a.premultiply(m),r.extractRotation(a),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),g++}else if(E.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function zc(s){const e=new Gg(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function Vg(s){let e=new WeakMap;function t(i,a=0){const r=e.get(i);let o;return r===void 0?(o=new zc(s),e.set(i,[o])):a>=r.length?(o=new zc(s),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],qg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Gc=new Oe,$i=new F,Ka=new F;function Xg(s,e,t){let n=new uo;const i=new We,a=new We,r=new rt,o=new Pd,c=new Dd,l={},h=t.maxTextureSize,u={[Cn]:Nt,[Nt]:Cn,[cn]:cn},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Hg,fragmentShader:Wg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let p=this.type;this.render=function(w,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===ql&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ws);const y=s.getRenderTarget(),W=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),B=s.state;B.setBlending(wn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=p!==this.type;O&&P.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(G=>G.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,G=w.length;H<G;H++){const z=w[H],k=z.shadow;if(k===void 0){Ee("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Q=k.getFrameExtents();i.multiply(Q),a.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/Q.x),i.x=a.x*Q.x,k.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/Q.y),i.y=a.y*Q.y,k.mapSize.y=a.y));const J=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=J,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===es){if(z.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new un(i.x,i.y,{format:Ii,type:Pn,minFilter:gt,magFilter:gt,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new us(i.x,i.y,Ht),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=Dn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=mt,k.map.depthTexture.magFilter=mt}else z.isPointLight?(k.map=new Cl(i.x),k.map.depthTexture=new yd(i.x,fn)):(k.map=new un(i.x,i.y),k.map.depthTexture=new us(i.x,i.y,fn)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=Dn,this.type===Ws?(k.map.depthTexture.compareFunction=J?ao:so,k.map.depthTexture.minFilter=gt,k.map.depthTexture.magFilter=gt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=mt,k.map.depthTexture.magFilter=mt);k.camera.updateProjectionMatrix()}const le=k.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<le;pe++){if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,pe),s.clear();else{pe===0&&(s.setRenderTarget(k.map),s.clear());const de=k.getViewport(pe);r.set(a.x*de.x,a.y*de.y,a.x*de.z,a.y*de.w),B.viewport(r)}if(z.isPointLight){const de=k.camera,Ne=k.matrix,ot=z.distance||de.far;ot!==de.far&&(de.far=ot,de.updateProjectionMatrix()),$i.setFromMatrixPosition(z.matrixWorld),de.position.copy($i),Ka.copy(de.position),Ka.add(jg[pe]),de.up.copy(qg[pe]),de.lookAt(Ka),de.updateMatrixWorld(),Ne.makeTranslation(-$i.x,-$i.y,-$i.z),Gc.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Gc,de.coordinateSystem,de.reversedDepth)}else k.updateMatrices(z);n=k.getFrustum(),S(P,x,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===es&&v(k,x),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,W,R)};function v(w,P){const x=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new un(i.x,i.y,{format:Ii,type:Pn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(P,null,x,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(P,null,x,f,_,null)}function E(w,P,x,y){let W=null;const R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)W=R;else if(W=x.isPointLight===!0?c:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=W.uuid,O=P.uuid;let H=l[B];H===void 0&&(H={},l[B]=H);let G=H[O];G===void 0&&(G=W.clone(),H[O]=G,P.addEventListener("dispose",A)),W=G}if(W.visible=P.visible,W.wireframe=P.wireframe,y===es?W.side=P.shadowSide!==null?P.shadowSide:P.side:W.side=P.shadowSide!==null?P.shadowSide:u[P.side],W.alphaMap=P.alphaMap,W.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,W.map=P.map,W.clipShadows=P.clipShadows,W.clippingPlanes=P.clippingPlanes,W.clipIntersection=P.clipIntersection,W.displacementMap=P.displacementMap,W.displacementScale=P.displacementScale,W.displacementBias=P.displacementBias,W.wireframeLinewidth=P.wireframeLinewidth,W.linewidth=P.linewidth,x.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const B=s.properties.get(W);B.light=x}return W}function S(w,P,x,y,W){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&W===es)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const O=e.update(w),H=w.material;if(Array.isArray(H)){const G=O.groups;for(let z=0,k=G.length;z<k;z++){const Q=G[z],J=H[Q.materialIndex];if(J&&J.visible){const le=E(w,J,y,W);w.onBeforeShadow(s,w,P,x,O,le,Q),s.renderBufferDirect(x,null,O,le,w,Q),w.onAfterShadow(s,w,P,x,O,le,Q)}}}else if(H.visible){const G=E(w,H,y,W);w.onBeforeShadow(s,w,P,x,O,G,null),s.renderBufferDirect(x,null,O,G,w,null),w.onAfterShadow(s,w,P,x,O,G,null)}}const B=w.children;for(let O=0,H=B.length;O<H;O++)S(B[O],P,x,y,W)}function A(w){w.target.removeEventListener("dispose",A);for(const x in l){const y=l[x],W=w.target.uuid;W in y&&(y[W].dispose(),delete y[W])}}}function Kg(s,e){function t(){let D=!1;const se=new rt;let te=null;const fe=new rt(0,0,0,0);return{setMask:function($){te!==$&&!D&&(s.colorMask($,$,$,$),te=$)},setLocked:function($){D=$},setClear:function($,j,be,De,st){st===!0&&($*=De,j*=De,be*=De),se.set($,j,be,De),fe.equals(se)===!1&&(s.clearColor($,j,be,De),fe.copy(se))},reset:function(){D=!1,te=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,te=null,fe=null,$=null;return{setReversed:function(j){if(se!==j){const be=e.get("EXT_clip_control");j?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),se=j;const De=$;$=null,this.setClear(De)}},getReversed:function(){return se},setTest:function(j){j?ne(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(j){te!==j&&!D&&(s.depthMask(j),te=j)},setFunc:function(j){if(se&&(j=Dh[j]),fe!==j){switch(j){case er:s.depthFunc(s.NEVER);break;case tr:s.depthFunc(s.ALWAYS);break;case nr:s.depthFunc(s.LESS);break;case Pi:s.depthFunc(s.LEQUAL);break;case ir:s.depthFunc(s.EQUAL);break;case sr:s.depthFunc(s.GEQUAL);break;case ar:s.depthFunc(s.GREATER);break;case rr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=j}},setLocked:function(j){D=j},setClear:function(j){$!==j&&($=j,se&&(j=1-j),s.clearDepth(j))},reset:function(){D=!1,te=null,fe=null,$=null,se=!1}}}function i(){let D=!1,se=null,te=null,fe=null,$=null,j=null,be=null,De=null,st=null;return{setTest:function(Je){D||(Je?ne(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(Je){se!==Je&&!D&&(s.stencilMask(Je),se=Je)},setFunc:function(Je,bn,_n){(te!==Je||fe!==bn||$!==_n)&&(s.stencilFunc(Je,bn,_n),te=Je,fe=bn,$=_n)},setOp:function(Je,bn,_n){(j!==Je||be!==bn||De!==_n)&&(s.stencilOp(Je,bn,_n),j=Je,be=bn,De=_n)},setLocked:function(Je){D=Je},setClear:function(Je){st!==Je&&(s.clearStencil(Je),st=Je)},reset:function(){D=!1,se=null,te=null,fe=null,$=null,j=null,be=null,De=null,st=null}}}const a=new t,r=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,E=null,S=null,A=null,w=null,P=new Ce(0,0,0),x=0,y=!1,W=null,R=null,B=null,O=null,H=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=k>=2);let J=null,le={};const pe=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),Ne=new rt().fromArray(pe),ot=new rt().fromArray(de);function at(D,se,te,fe){const $=new Uint8Array(4),j=s.createTexture();s.bindTexture(D,j),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<te;be++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,$):s.texImage2D(se+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,$);return j}const K={};K[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ne(s.DEPTH_TEST),r.setFunc(Pi),Be(!1),ht(Ro),ne(s.CULL_FACE),Ye(wn);function ne(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function ae(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ie(D,se){return u[D]!==se?(s.bindFramebuffer(D,se),u[D]=se,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=se),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(D,se){let te=f,fe=!1;if(D){te=d.get(se),te===void 0&&(te=[],d.set(se,te));const $=D.textures;if(te.length!==$.length||te[0]!==s.COLOR_ATTACHMENT0){for(let j=0,be=$.length;j<be;j++)te[j]=s.COLOR_ATTACHMENT0+j;te.length=$.length,fe=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,fe=!0);fe&&s.drawBuffers(te)}function Pe(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const xt={[ti]:s.FUNC_ADD,[Kl]:s.FUNC_SUBTRACT,[Yl]:s.FUNC_REVERSE_SUBTRACT};xt[Jl]=s.MIN,xt[Zl]=s.MAX;const je={[$l]:s.ZERO,[Ql]:s.ONE,[eh]:s.SRC_COLOR,[$a]:s.SRC_ALPHA,[rh]:s.SRC_ALPHA_SATURATE,[sh]:s.DST_COLOR,[nh]:s.DST_ALPHA,[th]:s.ONE_MINUS_SRC_COLOR,[Qa]:s.ONE_MINUS_SRC_ALPHA,[ah]:s.ONE_MINUS_DST_COLOR,[ih]:s.ONE_MINUS_DST_ALPHA,[oh]:s.CONSTANT_COLOR,[ch]:s.ONE_MINUS_CONSTANT_COLOR,[lh]:s.CONSTANT_ALPHA,[hh]:s.ONE_MINUS_CONSTANT_ALPHA};function Ye(D,se,te,fe,$,j,be,De,st,Je){if(D===wn){_===!0&&(ae(s.BLEND),_=!1);return}if(_===!1&&(ne(s.BLEND),_=!0),D!==Xl){if(D!==m||Je!==y){if((p!==ti||S!==ti)&&(s.blendEquation(s.FUNC_ADD),p=ti,S=ti),Je)switch(D){case wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Co:s.blendFunc(s.ONE,s.ONE);break;case Po:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Do:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Re("WebGLState: Invalid blending: ",D);break}else switch(D){case wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Po:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Do:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",D);break}v=null,E=null,A=null,w=null,P.set(0,0,0),x=0,m=D,y=Je}return}$=$||se,j=j||te,be=be||fe,(se!==p||$!==S)&&(s.blendEquationSeparate(xt[se],xt[$]),p=se,S=$),(te!==v||fe!==E||j!==A||be!==w)&&(s.blendFuncSeparate(je[te],je[fe],je[j],je[be]),v=te,E=fe,A=j,w=be),(De.equals(P)===!1||st!==x)&&(s.blendColor(De.r,De.g,De.b,st),P.copy(De),x=st),m=D,y=!1}function tt(D,se){D.side===cn?ae(s.CULL_FACE):ne(s.CULL_FACE);let te=D.side===Nt;se&&(te=!te),Be(te),D.blending===wi&&D.transparent===!1?Ye(wn):Ye(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),a.setMask(D.colorWrite);const fe=D.stencilWrite;o.setTest(fe),fe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){W!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),W=D)}function ht(D){D!==Wl?(ne(s.CULL_FACE),D!==R&&(D===Ro?s.cullFace(s.BACK):D===jl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),R=D}function C(D){D!==B&&(z&&s.lineWidth(D),B=D)}function ft(D,se,te){D?(ne(s.POLYGON_OFFSET_FILL),(O!==se||H!==te)&&(O=se,H=te,r.getReversed()&&(se=-se),s.polygonOffset(se,te))):ae(s.POLYGON_OFFSET_FILL)}function Xe(D){D?ne(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function it(D){D===void 0&&(D=s.TEXTURE0+G-1),J!==D&&(s.activeTexture(D),J=D)}function ve(D,se,te){te===void 0&&(J===null?te=s.TEXTURE0+G-1:te=J);let fe=le[te];fe===void 0&&(fe={type:void 0,texture:void 0},le[te]=fe),(fe.type!==D||fe.texture!==se)&&(J!==te&&(s.activeTexture(te),J=te),s.bindTexture(D,se||K[D]),fe.type=D,fe.texture=se)}function T(){const D=le[J];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(D){Re("WebGLState:",D)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(D){Re("WebGLState:",D)}}function X(){try{s.texSubImage2D(...arguments)}catch(D){Re("WebGLState:",D)}}function Y(){try{s.texSubImage3D(...arguments)}catch(D){Re("WebGLState:",D)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Re("WebGLState:",D)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Re("WebGLState:",D)}}function ie(){try{s.texStorage2D(...arguments)}catch(D){Re("WebGLState:",D)}}function Te(){try{s.texStorage3D(...arguments)}catch(D){Re("WebGLState:",D)}}function we(){try{s.texImage2D(...arguments)}catch(D){Re("WebGLState:",D)}}function Z(){try{s.texImage3D(...arguments)}catch(D){Re("WebGLState:",D)}}function ee(D){Ne.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function ge(D){ot.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ot.copy(D))}function _e(D,se){let te=l.get(se);te===void 0&&(te=new WeakMap,l.set(se,te));let fe=te.get(D);fe===void 0&&(fe=s.getUniformBlockIndex(se,D.name),te.set(D,fe))}function he(D,se){const fe=l.get(se).get(D);c.get(se)!==fe&&(s.uniformBlockBinding(se,fe,D.__bindingPointIndex),c.set(se,fe))}function ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,le={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,E=null,S=null,A=null,w=null,P=new Ce(0,0,0),x=0,y=!1,W=null,R=null,B=null,O=null,H=null,Ne.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ne,disable:ae,bindFramebuffer:Ie,drawBuffers:Ae,useProgram:Pe,setBlending:Ye,setMaterial:tt,setFlipSided:Be,setCullFace:ht,setLineWidth:C,setPolygonOffset:ft,setScissorTest:Xe,activeTexture:it,bindTexture:ve,unbindTexture:T,compressedTexImage2D:b,compressedTexImage3D:L,texImage2D:we,texImage3D:Z,updateUBOMapping:_e,uniformBlockBinding:he,texStorage2D:ie,texStorage3D:Te,texSubImage2D:X,texSubImage3D:Y,compressedTexSubImage2D:q,compressedTexSubImage3D:me,scissor:ee,viewport:ge,reset:ke}}function Yg(s,e,t,n,i,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return f?new OffscreenCanvas(T,b):ds("canvas")}function _(T,b,L){let X=1;const Y=ve(T);if((Y.width>L||Y.height>L)&&(X=L/Math.max(Y.width,Y.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(X*Y.width),me=Math.floor(X*Y.height);u===void 0&&(u=g(q,me));const ie=b?g(q,me):u;return ie.width=q,ie.height=me,ie.getContext("2d").drawImage(T,0,0,q,me),Ee("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+q+"x"+me+")."),ie}else return"data"in T&&Ee("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(T,b,L,X,Y=!1){if(T!==null){if(s[T]!==void 0)return s[T];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=b;if(b===s.RED&&(L===s.FLOAT&&(q=s.R32F),L===s.HALF_FLOAT&&(q=s.R16F),L===s.UNSIGNED_BYTE&&(q=s.R8)),b===s.RED_INTEGER&&(L===s.UNSIGNED_BYTE&&(q=s.R8UI),L===s.UNSIGNED_SHORT&&(q=s.R16UI),L===s.UNSIGNED_INT&&(q=s.R32UI),L===s.BYTE&&(q=s.R8I),L===s.SHORT&&(q=s.R16I),L===s.INT&&(q=s.R32I)),b===s.RG&&(L===s.FLOAT&&(q=s.RG32F),L===s.HALF_FLOAT&&(q=s.RG16F),L===s.UNSIGNED_BYTE&&(q=s.RG8)),b===s.RG_INTEGER&&(L===s.UNSIGNED_BYTE&&(q=s.RG8UI),L===s.UNSIGNED_SHORT&&(q=s.RG16UI),L===s.UNSIGNED_INT&&(q=s.RG32UI),L===s.BYTE&&(q=s.RG8I),L===s.SHORT&&(q=s.RG16I),L===s.INT&&(q=s.RG32I)),b===s.RGB_INTEGER&&(L===s.UNSIGNED_BYTE&&(q=s.RGB8UI),L===s.UNSIGNED_SHORT&&(q=s.RGB16UI),L===s.UNSIGNED_INT&&(q=s.RGB32UI),L===s.BYTE&&(q=s.RGB8I),L===s.SHORT&&(q=s.RGB16I),L===s.INT&&(q=s.RGB32I)),b===s.RGBA_INTEGER&&(L===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),L===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),L===s.UNSIGNED_INT&&(q=s.RGBA32UI),L===s.BYTE&&(q=s.RGBA8I),L===s.SHORT&&(q=s.RGBA16I),L===s.INT&&(q=s.RGBA32I)),b===s.RGB&&(L===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),L===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),b===s.RGBA){const me=Y?Qs:He.getTransfer(X);L===s.FLOAT&&(q=s.RGBA32F),L===s.HALF_FLOAT&&(q=s.RGBA16F),L===s.UNSIGNED_BYTE&&(q=me===Ze?s.SRGB8_ALPHA8:s.RGBA8),L===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),L===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(T,b){let L;return T?b===null||b===fn||b===os?L=s.DEPTH24_STENCIL8:b===Ht?L=s.DEPTH32F_STENCIL8:b===rs&&(L=s.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===fn||b===os?L=s.DEPTH_COMPONENT24:b===Ht?L=s.DEPTH_COMPONENT32F:b===rs&&(L=s.DEPTH_COMPONENT16),L}function A(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==mt&&T.minFilter!==gt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function w(T){const b=T.target;b.removeEventListener("dispose",w),x(b),b.isVideoTexture&&h.delete(b)}function P(T){const b=T.target;b.removeEventListener("dispose",P),W(b)}function x(T){const b=n.get(T);if(b.__webglInit===void 0)return;const L=T.source,X=d.get(L);if(X){const Y=X[b.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&y(T),Object.keys(X).length===0&&d.delete(L)}n.remove(T)}function y(T){const b=n.get(T);s.deleteTexture(b.__webglTexture);const L=T.source,X=d.get(L);delete X[b.__cacheKey],r.memory.textures--}function W(T){const b=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let Y=0;Y<b.__webglFramebuffer[X].length;Y++)s.deleteFramebuffer(b.__webglFramebuffer[X][Y]);else s.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)s.deleteFramebuffer(b.__webglFramebuffer[X]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const L=T.textures;for(let X=0,Y=L.length;X<Y;X++){const q=n.get(L[X]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),r.memory.textures--),n.remove(L[X])}n.remove(T)}let R=0;function B(){R=0}function O(){const T=R;return T>=i.maxTextures&&Ee("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function H(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function G(T,b){const L=n.get(T);if(T.isVideoTexture&&Xe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&L.__version!==T.version){const X=T.image;if(X===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{K(L,T,b);return}}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,L.__webglTexture,s.TEXTURE0+b)}function z(T,b){const L=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){K(L,T,b);return}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,L.__webglTexture,s.TEXTURE0+b)}function k(T,b){const L=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){K(L,T,b);return}t.bindTexture(s.TEXTURE_3D,L.__webglTexture,s.TEXTURE0+b)}function Q(T,b){const L=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&L.__version!==T.version){ne(L,T,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+b)}const J={[Li]:s.REPEAT,[ln]:s.CLAMP_TO_EDGE,[Zs]:s.MIRRORED_REPEAT},le={[mt]:s.NEAREST,[nl]:s.NEAREST_MIPMAP_NEAREST,[ts]:s.NEAREST_MIPMAP_LINEAR,[gt]:s.LINEAR,[js]:s.LINEAR_MIPMAP_NEAREST,[Tn]:s.LINEAR_MIPMAP_LINEAR},pe={[Mh]:s.NEVER,[Ah]:s.ALWAYS,[Sh]:s.LESS,[so]:s.LEQUAL,[Eh]:s.EQUAL,[ao]:s.GEQUAL,[yh]:s.GREATER,[Th]:s.NOTEQUAL};function de(T,b){if(b.type===Ht&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===gt||b.magFilter===js||b.magFilter===ts||b.magFilter===Tn||b.minFilter===gt||b.minFilter===js||b.minFilter===ts||b.minFilter===Tn)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,J[b.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,J[b.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,J[b.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,le[b.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,le[b.minFilter]),b.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===mt||b.minFilter!==ts&&b.minFilter!==Tn||b.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ne(T,b){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",w));const X=b.source;let Y=d.get(X);Y===void 0&&(Y={},d.set(X,Y));const q=H(b);if(q!==T.__cacheKey){Y[q]===void 0&&(Y[q]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,L=!0),Y[q].usedTimes++;const me=Y[T.__cacheKey];me!==void 0&&(Y[T.__cacheKey].usedTimes--,me.usedTimes===0&&y(b)),T.__cacheKey=q,T.__webglTexture=Y[q].texture}return L}function ot(T,b,L){return Math.floor(Math.floor(T/L)/b)}function at(T,b,L,X){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,L,X,b.data);else{q.sort((Z,ee)=>Z.start-ee.start);let me=0;for(let Z=1;Z<q.length;Z++){const ee=q[me],ge=q[Z],_e=ee.start+ee.count,he=ot(ge.start,b.width,4),ke=ot(ee.start,b.width,4);ge.start<=_e+1&&he===ke&&ot(ge.start+ge.count-1,b.width,4)===he?ee.count=Math.max(ee.count,ge.start+ge.count-ee.start):(++me,q[me]=ge)}q.length=me+1;const ie=s.getParameter(s.UNPACK_ROW_LENGTH),Te=s.getParameter(s.UNPACK_SKIP_PIXELS),we=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Z=0,ee=q.length;Z<ee;Z++){const ge=q[Z],_e=Math.floor(ge.start/4),he=Math.ceil(ge.count/4),ke=_e%b.width,D=Math.floor(_e/b.width),se=he,te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,ke,D,se,te,L,X,b.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),s.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function K(T,b,L){let X=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=s.TEXTURE_3D);const Y=Ne(T,b),q=b.source;t.bindTexture(X,T.__webglTexture,s.TEXTURE0+L);const me=n.get(q);if(q.version!==me.__version||Y===!0){t.activeTexture(s.TEXTURE0+L);const ie=He.getPrimaries(He.workingColorSpace),Te=b.colorSpace===Vn?null:He.getPrimaries(b.colorSpace),we=b.colorSpace===Vn||ie===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Z=_(b.image,!1,i.maxTextureSize);Z=it(b,Z);const ee=a.convert(b.format,b.colorSpace),ge=a.convert(b.type);let _e=E(b.internalFormat,ee,ge,b.colorSpace,b.isVideoTexture);de(X,b);let he;const ke=b.mipmaps,D=b.isVideoTexture!==!0,se=me.__version===void 0||Y===!0,te=q.dataReady,fe=A(b,Z);if(b.isDepthTexture)_e=S(b.format===ii,b.type),se&&(D?t.texStorage2D(s.TEXTURE_2D,1,_e,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,_e,Z.width,Z.height,0,ee,ge,null));else if(b.isDataTexture)if(ke.length>0){D&&se&&t.texStorage2D(s.TEXTURE_2D,fe,_e,ke[0].width,ke[0].height);for(let $=0,j=ke.length;$<j;$++)he=ke[$],D?te&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,he.width,he.height,ee,ge,he.data):t.texImage2D(s.TEXTURE_2D,$,_e,he.width,he.height,0,ee,ge,he.data);b.generateMipmaps=!1}else D?(se&&t.texStorage2D(s.TEXTURE_2D,fe,_e,Z.width,Z.height),te&&at(b,Z,ee,ge)):t.texImage2D(s.TEXTURE_2D,0,_e,Z.width,Z.height,0,ee,ge,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){D&&se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,_e,ke[0].width,ke[0].height,Z.depth);for(let $=0,j=ke.length;$<j;$++)if(he=ke[$],b.format!==Wt)if(ee!==null)if(D){if(te)if(b.layerUpdates.size>0){const be=_c(he.width,he.height,b.format,b.type);for(const De of b.layerUpdates){const st=he.data.subarray(De*be/he.data.BYTES_PER_ELEMENT,(De+1)*be/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,De,he.width,he.height,1,ee,st)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,Z.depth,ee,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,_e,he.width,he.height,Z.depth,0,he.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,Z.depth,ee,ge,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,_e,he.width,he.height,Z.depth,0,ee,ge,he.data)}else{D&&se&&t.texStorage2D(s.TEXTURE_2D,fe,_e,ke[0].width,ke[0].height);for(let $=0,j=ke.length;$<j;$++)he=ke[$],b.format!==Wt?ee!==null?D?te&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,he.width,he.height,ee,he.data):t.compressedTexImage2D(s.TEXTURE_2D,$,_e,he.width,he.height,0,he.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,he.width,he.height,ee,ge,he.data):t.texImage2D(s.TEXTURE_2D,$,_e,he.width,he.height,0,ee,ge,he.data)}else if(b.isDataArrayTexture)if(D){if(se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,_e,Z.width,Z.height,Z.depth),te)if(b.layerUpdates.size>0){const $=_c(Z.width,Z.height,b.format,b.type);for(const j of b.layerUpdates){const be=Z.data.subarray(j*$/Z.data.BYTES_PER_ELEMENT,(j+1)*$/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,Z.width,Z.height,1,ee,ge,be)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ee,ge,Z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,Z.width,Z.height,Z.depth,0,ee,ge,Z.data);else if(b.isData3DTexture)D?(se&&t.texStorage3D(s.TEXTURE_3D,fe,_e,Z.width,Z.height,Z.depth),te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ee,ge,Z.data)):t.texImage3D(s.TEXTURE_3D,0,_e,Z.width,Z.height,Z.depth,0,ee,ge,Z.data);else if(b.isFramebufferTexture){if(se)if(D)t.texStorage2D(s.TEXTURE_2D,fe,_e,Z.width,Z.height);else{let $=Z.width,j=Z.height;for(let be=0;be<fe;be++)t.texImage2D(s.TEXTURE_2D,be,_e,$,j,0,ee,ge,null),$>>=1,j>>=1}}else if(ke.length>0){if(D&&se){const $=ve(ke[0]);t.texStorage2D(s.TEXTURE_2D,fe,_e,$.width,$.height)}for(let $=0,j=ke.length;$<j;$++)he=ke[$],D?te&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ee,ge,he):t.texImage2D(s.TEXTURE_2D,$,_e,ee,ge,he);b.generateMipmaps=!1}else if(D){if(se){const $=ve(Z);t.texStorage2D(s.TEXTURE_2D,fe,_e,$.width,$.height)}te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee,ge,Z)}else t.texImage2D(s.TEXTURE_2D,0,_e,ee,ge,Z);m(b)&&p(X),me.__version=q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ne(T,b,L){if(b.image.length!==6)return;const X=Ne(T,b),Y=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+L);const q=n.get(Y);if(Y.version!==q.__version||X===!0){t.activeTexture(s.TEXTURE0+L);const me=He.getPrimaries(He.workingColorSpace),ie=b.colorSpace===Vn?null:He.getPrimaries(b.colorSpace),Te=b.colorSpace===Vn||me===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=b.isCompressedTexture||b.image[0].isCompressedTexture,Z=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let j=0;j<6;j++)!we&&!Z?ee[j]=_(b.image[j],!0,i.maxCubemapSize):ee[j]=Z?b.image[j].image:b.image[j],ee[j]=it(b,ee[j]);const ge=ee[0],_e=a.convert(b.format,b.colorSpace),he=a.convert(b.type),ke=E(b.internalFormat,_e,he,b.colorSpace),D=b.isVideoTexture!==!0,se=q.__version===void 0||X===!0,te=Y.dataReady;let fe=A(b,ge);de(s.TEXTURE_CUBE_MAP,b);let $;if(we){D&&se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,ke,ge.width,ge.height);for(let j=0;j<6;j++){$=ee[j].mipmaps;for(let be=0;be<$.length;be++){const De=$[be];b.format!==Wt?_e!==null?D?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,De.width,De.height,_e,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,ke,De.width,De.height,0,De.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,De.width,De.height,_e,he,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,ke,De.width,De.height,0,_e,he,De.data)}}}else{if($=b.mipmaps,D&&se){$.length>0&&fe++;const j=ve(ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,ke,j.width,j.height)}for(let j=0;j<6;j++)if(Z){D?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ee[j].width,ee[j].height,_e,he,ee[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,ee[j].width,ee[j].height,0,_e,he,ee[j].data);for(let be=0;be<$.length;be++){const st=$[be].image[j].image;D?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,st.width,st.height,_e,he,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,ke,st.width,st.height,0,_e,he,st.data)}}else{D?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_e,he,ee[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,_e,he,ee[j]);for(let be=0;be<$.length;be++){const De=$[be];D?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,_e,he,De.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,ke,_e,he,De.image[j])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),q.__version=Y.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ae(T,b,L,X,Y,q){const me=a.convert(L.format,L.colorSpace),ie=a.convert(L.type),Te=E(L.internalFormat,me,ie,L.colorSpace),we=n.get(b),Z=n.get(L);if(Z.__renderTarget=b,!we.__hasExternalTextures){const ee=Math.max(1,b.width>>q),ge=Math.max(1,b.height>>q);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?t.texImage3D(Y,q,Te,ee,ge,b.depth,0,me,ie,null):t.texImage2D(Y,q,Te,ee,ge,0,me,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),ft(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Y,Z.__webglTexture,0,C(b)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Y,Z.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(T,b,L){if(s.bindRenderbuffer(s.RENDERBUFFER,T),b.depthBuffer){const X=b.depthTexture,Y=X&&X.isDepthTexture?X.type:null,q=S(b.stencilBuffer,Y),me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ft(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,C(b),q,b.width,b.height):L?s.renderbufferStorageMultisample(s.RENDERBUFFER,C(b),q,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,q,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,T)}else{const X=b.textures;for(let Y=0;Y<X.length;Y++){const q=X[Y],me=a.convert(q.format,q.colorSpace),ie=a.convert(q.type),Te=E(q.internalFormat,me,ie,q.colorSpace);ft(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,C(b),Te,b.width,b.height):L?s.renderbufferStorageMultisample(s.RENDERBUFFER,C(b),Te,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Te,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(T,b,L){const X=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(b.depthTexture);if(Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,b.depthTexture.addEventListener("dispose",w)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),de(s.TEXTURE_CUBE_MAP,b.depthTexture);const we=a.convert(b.depthTexture.format),Z=a.convert(b.depthTexture.type);let ee;b.depthTexture.format===Dn?ee=s.DEPTH_COMPONENT24:b.depthTexture.format===ii&&(ee=s.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ee,b.width,b.height,0,we,Z,null)}}else G(b.depthTexture,0);const q=Y.__webglTexture,me=C(b),ie=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+L:s.TEXTURE_2D,Te=b.depthTexture.format===ii?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Dn)ft(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,ie,q,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,Te,ie,q,0);else if(b.depthTexture.format===ii)ft(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,ie,q,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,Te,ie,q,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const b=n.get(T),L=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){const Y=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",Y)};X.addEventListener("dispose",Y),b.__depthDisposeCallback=Y}b.__boundDepthTexture=X}if(T.depthTexture&&!b.__autoAllocateDepthBuffer)if(L)for(let X=0;X<6;X++)Ae(b.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?Ae(b.__webglFramebuffer[0],T,0):Ae(b.__webglFramebuffer,T,0)}else if(L){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=s.createRenderbuffer(),Ie(b.__webglDepthbuffer[X],T,!1);else{const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,q)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ie(b.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(T,b,L){const X=n.get(T);b!==void 0&&ae(X.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),L!==void 0&&Pe(T)}function je(T){const b=T.texture,L=n.get(T),X=n.get(b);T.addEventListener("dispose",P);const Y=T.textures,q=T.isWebGLCubeRenderTarget===!0,me=Y.length>1;if(me||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=b.version,r.memory.textures++),q){L.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0){L.__webglFramebuffer[ie]=[];for(let Te=0;Te<b.mipmaps.length;Te++)L.__webglFramebuffer[ie][Te]=s.createFramebuffer()}else L.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){L.__webglFramebuffer=[];for(let ie=0;ie<b.mipmaps.length;ie++)L.__webglFramebuffer[ie]=s.createFramebuffer()}else L.__webglFramebuffer=s.createFramebuffer();if(me)for(let ie=0,Te=Y.length;ie<Te;ie++){const we=n.get(Y[ie]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),r.memory.textures++)}if(T.samples>0&&ft(T)===!1){L.__webglMultisampledFramebuffer=s.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ie=0;ie<Y.length;ie++){const Te=Y[ie];L.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,L.__webglColorRenderbuffer[ie]);const we=a.convert(Te.format,Te.colorSpace),Z=a.convert(Te.type),ee=E(Te.internalFormat,we,Z,Te.colorSpace,T.isXRRenderTarget===!0),ge=C(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,ee,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,L.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),de(s.TEXTURE_CUBE_MAP,b);for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)ae(L.__webglFramebuffer[ie][Te],T,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te);else ae(L.__webglFramebuffer[ie],T,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ie=0,Te=Y.length;ie<Te;ie++){const we=Y[ie],Z=n.get(we);let ee=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,Z.__webglTexture),de(ee,we),ae(L.__webglFramebuffer,T,we,s.COLOR_ATTACHMENT0+ie,ee,0),m(we)&&p(ee)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,X.__webglTexture),de(ie,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)ae(L.__webglFramebuffer[Te],T,b,s.COLOR_ATTACHMENT0,ie,Te);else ae(L.__webglFramebuffer,T,b,s.COLOR_ATTACHMENT0,ie,0);m(b)&&p(ie),t.unbindTexture()}T.depthBuffer&&Pe(T)}function Ye(T){const b=T.textures;for(let L=0,X=b.length;L<X;L++){const Y=b[L];if(m(Y)){const q=v(T),me=n.get(Y).__webglTexture;t.bindTexture(q,me),p(q),t.unbindTexture()}}}const tt=[],Be=[];function ht(T){if(T.samples>0){if(ft(T)===!1){const b=T.textures,L=T.width,X=T.height;let Y=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(T),ie=b.length>1;if(ie)for(let we=0;we<b.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const Te=T.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let we=0;we<b.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[we]);const Z=n.get(b[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0)}s.blitFramebuffer(0,0,L,X,0,0,L,X,Y,s.NEAREST),c===!0&&(tt.length=0,Be.length=0,tt.push(s.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(tt.push(q),Be.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let we=0;we<b.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,me.__webglColorRenderbuffer[we]);const Z=n.get(b[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,Z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const b=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function C(T){return Math.min(i.maxSamples,T.samples)}function ft(T){const b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(T){const b=r.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function it(T,b){const L=T.colorSpace,X=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==Lt&&L!==Vn&&(He.getTransfer(L)===Ze?(X!==Wt||Y!==kt)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",L)),b}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=xt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Jg(s,e){function t(n,i=Vn){let a;const r=He.getTransfer(i);if(n===kt)return s.UNSIGNED_BYTE;if(n===Jr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===al)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===il)return s.BYTE;if(n===sl)return s.SHORT;if(n===rs)return s.UNSIGNED_SHORT;if(n===Yr)return s.INT;if(n===fn)return s.UNSIGNED_INT;if(n===Ht)return s.FLOAT;if(n===Pn)return s.HALF_FLOAT;if(n===ol)return s.ALPHA;if(n===cl)return s.RGB;if(n===Wt)return s.RGBA;if(n===Dn)return s.DEPTH_COMPONENT;if(n===ii)return s.DEPTH_STENCIL;if(n===$r)return s.RED;if(n===Qr)return s.RED_INTEGER;if(n===Ii)return s.RG;if(n===eo)return s.RG_INTEGER;if(n===to)return s.RGBA_INTEGER;if(n===qs||n===Xs||n===Ks||n===Ys)if(r===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===or||n===cr||n===lr||n===hr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===or)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dr||n===ur||n===fr||n===pr||n===mr||n===gr||n===br)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===dr||n===ur)return r===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===fr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===pr)return a.COMPRESSED_R11_EAC;if(n===mr)return a.COMPRESSED_SIGNED_R11_EAC;if(n===gr)return a.COMPRESSED_RG11_EAC;if(n===br)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_r||n===xr||n===vr||n===Mr||n===Sr||n===Er||n===yr||n===Tr||n===Ar||n===wr||n===Rr||n===Cr||n===Pr||n===Dr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===_r)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Er)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ar)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dr)return r===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===Ir||n===Fr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Lr)return r===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ir)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nr||n===Ur||n===Or||n===Br)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Nr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ur)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Br)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new vl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pn({vertexShader:Zg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eb extends Wn{constructor(e,t){super();const n=this;let i=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Qg,p={},v=t.getContextAttributes();let E=null,S=null;const A=[],w=[],P=new We;let x=null;const y=new Ft;y.viewport=new rt;const W=new Ft;W.viewport=new rt;const R=[y,W],B=new $d;let O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=A[K];return ne===void 0&&(ne=new Ma,A[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=A[K];return ne===void 0&&(ne=new Ma,A[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=A[K];return ne===void 0&&(ne=new Ma,A[K]=ne),ne.getHandSpace()};function G(K){const ne=w.indexOf(K.inputSource);if(ne===-1)return;const ae=A[ne];ae!==void 0&&(ae.update(K.inputSource,K.frame,l||r),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",k);for(let K=0;K<A.length;K++){const ne=w[K];ne!==null&&(w[K]=null,A[K].disconnect(ne))}O=null,H=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(E),f=null,d=null,u=null,i=null,S=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",z),i.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ie=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=v.stencil?ii:Dn,Ie=v.stencil?os:fn);const Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new un(d.textureWidth,d.textureHeight,{format:Wt,type:kt,depthTexture:new us(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new un(f.framebufferWidth,f.framebufferHeight,{format:Wt,type:kt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(K){for(let ne=0;ne<K.removed.length;ne++){const ae=K.removed[ne],Ie=w.indexOf(ae);Ie>=0&&(w[Ie]=null,A[Ie].disconnect(ae))}for(let ne=0;ne<K.added.length;ne++){const ae=K.added[ne];let Ie=w.indexOf(ae);if(Ie===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=w.length){w.push(ae),Ie=Pe;break}else if(w[Pe]===null){w[Pe]=ae,Ie=Pe;break}if(Ie===-1)break}const Ae=A[Ie];Ae&&Ae.connect(ae)}}const Q=new F,J=new F;function le(K,ne,ae){Q.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(ae.matrixWorld);const Ie=Q.distanceTo(J),Ae=ne.projectionMatrix.elements,Pe=ae.projectionMatrix.elements,xt=Ae[14]/(Ae[10]-1),je=Ae[14]/(Ae[10]+1),Ye=(Ae[9]+1)/Ae[5],tt=(Ae[9]-1)/Ae[5],Be=(Ae[8]-1)/Ae[0],ht=(Pe[8]+1)/Pe[0],C=xt*Be,ft=xt*ht,Xe=Ie/(-Be+ht),it=Xe*-Be;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(it),K.translateZ(Xe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ve=xt+Xe,T=je+Xe,b=C-it,L=ft+(Ie-it),X=Ye*je/T*ve,Y=tt*je/T*ve;K.projectionMatrix.makePerspective(b,L,X,Y,ve,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function pe(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ne=K.near,ae=K.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),B.near=W.near=y.near=ne,B.far=W.far=y.far=ae,(O!==B.near||H!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),O=B.near,H=B.far),B.layers.mask=K.layers.mask|6,y.layers.mask=B.layers.mask&-5,W.layers.mask=B.layers.mask&-3;const Ie=K.parent,Ae=B.cameras;pe(B,Ie);for(let Pe=0;Pe<Ae.length;Pe++)pe(Ae[Pe],Ie);Ae.length===2?le(B,y,W):B.projectionMatrix.copy(y.projectionMatrix),de(K,B,Ie)};function de(K,ne,ae){ae===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(K){return p[K]};let Ne=null;function ot(K,ne){if(h=ne.getViewerPose(l||r),g=ne,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ie=!1;ae.length!==B.cameras.length&&(B.cameras.length=0,Ie=!0);for(let je=0;je<ae.length;je++){const Ye=ae[je];let tt=null;if(f!==null)tt=f.getViewport(Ye);else{const ht=u.getViewSubImage(d,Ye);tt=ht.viewport,je===0&&(e.setRenderTargetTextures(S,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(S))}let Be=R[je];Be===void 0&&(Be=new Ft,Be.layers.enable(je),Be.viewport=new rt,R[je]=Be),Be.matrix.fromArray(Ye.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ye.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(tt.x,tt.y,tt.width,tt.height),je===0&&(B.matrix.copy(Be.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ie===!0&&B.cameras.push(Be)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const je=u.getDepthInformation(ae[0]);je&&je.isValid&&je.texture&&m.init(je,i.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let je=0;je<ae.length;je++){const Ye=ae[je].camera;if(Ye){let tt=p[Ye];tt||(tt=new vl,p[Ye]=tt);const Be=u.getCameraImage(Ye);tt.sourceTexture=Be}}}}for(let ae=0;ae<A.length;ae++){const Ie=w[ae],Ae=A[ae];Ie!==null&&Ae!==void 0&&Ae.update(Ie,ne,l||r)}Ne&&Ne(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const at=new Rl;at.setAnimationLoop(ot),this.setAnimationLoop=function(K){Ne=K},this.dispose=function(){}}}const $n=new en,tb=new Oe;function nb(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,E,S){p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),E=v.envMap,S=v.envMapRotation;E&&(m.envMap.value=E,$n.copy(S),$n.x*=-1,$n.y*=-1,$n.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler($n)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ib(s,e,t,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){const S=E.program;n.uniformBlockBinding(v,S)}function l(v,E){let S=i[v.id];S===void 0&&(g(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(v,A);const w=e.render.frame;a[v.id]!==w&&(d(v),a[v.id]=w)}function h(v){const E=u();v.__bindingPointIndex=E;const S=s.createBuffer(),A=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,S),S}function u(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const E=i[v.id],S=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,P=S.length;w<P;w++){const x=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,W=x.length;y<W;y++){const R=x[y];if(f(R,w,y,A)===!0){const B=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let G=0;G<O.length;G++){const z=O[G],k=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,B+H,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,H),H+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,E,S,A){const w=v.value,P=E+"_"+S;if(A[P]===void 0)return typeof w=="number"||typeof w=="boolean"?A[P]=w:A[P]=w.clone(),!0;{const x=A[P];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return A[P]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function g(v){const E=v.uniforms;let S=0;const A=16;for(let P=0,x=E.length;P<x;P++){const y=Array.isArray(E[P])?E[P]:[E[P]];for(let W=0,R=y.length;W<R;W++){const B=y[W],O=Array.isArray(B.value)?B.value:[B.value];for(let H=0,G=O.length;H<G;H++){const z=O[H],k=_(z),Q=S%A,J=Q%k.boundary,le=Q+J;S+=J,le!==0&&A-le<k.storage&&(S+=A-le),B.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=k.storage}}}const w=S%A;return w>0&&(S+=A-w),v.__size=S,v.__cache={},this}function _(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ee("WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){const E=v.target;E.removeEventListener("dispose",m);const S=r.indexOf(E.__bindingPointIndex);r.splice(S,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete a[E.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);r=[],i={},a={}}return{bind:c,update:l,dispose:p}}const sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function ab(){return an===null&&(an=new lo(sb,16,16,Ii,Pn),an.name="DFG_LUT",an.minFilter=gt,an.magFilter=gt,an.wrapS=ln,an.wrapT=ln,an.generateMipmaps=!1,an.needsUpdate=!0),an}class $b{constructor(e={}){const{canvas:t=Ch(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=kt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const _=f,m=new Set([to,eo,Qr]),p=new Set([kt,fn,rs,os,Jr,Zr]),v=new Uint32Array(4),E=new Int32Array(4);let S=null,A=null;const w=[],P=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let W=!1;this._outputColorSpace=yt;let R=0,B=0,O=null,H=-1,G=null;const z=new rt,k=new rt;let Q=null;const J=new Ce(0);let le=0,pe=t.width,de=t.height,Ne=1,ot=null,at=null;const K=new rt(0,0,pe,de),ne=new rt(0,0,pe,de);let ae=!1;const Ie=new uo;let Ae=!1,Pe=!1;const xt=new Oe,je=new F,Ye=new rt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ht(){return O===null?Ne:1}let C=n;function ft(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r183"),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",st,!1),C===null){const I="webgl2";if(C=ft(I,M),C===null)throw ft(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Re("WebGLRenderer: "+M.message),M}let Xe,it,ve,T,b,L,X,Y,q,me,ie,Te,we,Z,ee,ge,_e,he,ke,D,se,te,fe;function $(){Xe=new rm(C),Xe.init(),se=new Jg(C,Xe),it=new $p(C,Xe,e,se),ve=new Kg(C,Xe),it.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),T=new lm(C),b=new Fg,L=new Yg(C,Xe,ve,b,it,se,T),X=new am(y),Y=new fu(C),te=new Jp(C,Y),q=new om(C,Y,T,te),me=new dm(C,q,Y,te,T),he=new hm(C,it,L),ee=new Qp(b),ie=new Ig(y,X,Xe,it,te,ee),Te=new nb(y,b),we=new Ug,Z=new Vg(Xe),_e=new Yp(y,X,ve,me,g,c),ge=new Xg(y,me,it),fe=new ib(C,T,it,ve),ke=new Zp(C,Xe,T),D=new cm(C,Xe,T),T.programs=ie.programs,y.capabilities=it,y.extensions=Xe,y.properties=b,y.renderLists=we,y.shadowMap=ge,y.state=ve,y.info=T}$(),_!==kt&&(x=new fm(_,t.width,t.height,i,a));const j=new eb(y,C);this.xr=j,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(M){M!==void 0&&(Ne=M,this.setSize(pe,de,!1))},this.getSize=function(M){return M.set(pe,de)},this.setSize=function(M,I,V=!0){if(j.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=M,de=I,t.width=Math.floor(M*Ne),t.height=Math.floor(I*Ne),V===!0&&(t.style.width=M+"px",t.style.height=I+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(pe*Ne,de*Ne).floor()},this.setDrawingBufferSize=function(M,I,V){pe=M,de=I,Ne=V,t.width=Math.floor(M*V),t.height=Math.floor(I*V),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(_===kt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,I,V,U){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,I,V,U),ve.viewport(z.copy(K).multiplyScalar(Ne).round())},this.getScissor=function(M){return M.copy(ne)},this.setScissor=function(M,I,V,U){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,I,V,U),ve.scissor(k.copy(ne).multiplyScalar(Ne).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(M){ve.setScissorTest(ae=M)},this.setOpaqueSort=function(M){ot=M},this.setTransparentSort=function(M){at=M},this.getClearColor=function(M){return M.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,V=!0){let U=0;if(M){let N=!1;if(O!==null){const oe=O.texture.format;N=m.has(oe)}if(N){const oe=O.texture.type,ue=p.has(oe),ce=_e.getClearColor(),xe=_e.getClearAlpha(),Se=ce.r,Le=ce.g,ze=ce.b;ue?(v[0]=Se,v[1]=Le,v[2]=ze,v[3]=xe,C.clearBufferuiv(C.COLOR,0,v)):(E[0]=Se,E[1]=Le,E[2]=ze,E[3]=xe,C.clearBufferiv(C.COLOR,0,E))}else U|=C.COLOR_BUFFER_BIT}I&&(U|=C.DEPTH_BUFFER_BIT),V&&(U|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&C.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",st,!1),_e.dispose(),we.dispose(),Z.dispose(),b.dispose(),X.dispose(),me.dispose(),te.dispose(),fe.dispose(),ie.dispose(),j.dispose(),j.removeEventListener("sessionstart",vo),j.removeEventListener("sessionend",Mo),jn.stop()};function be(M){M.preventDefault(),ea("WebGLRenderer: Context Lost."),W=!0}function De(){ea("WebGLRenderer: Context Restored."),W=!1;const M=T.autoReset,I=ge.enabled,V=ge.autoUpdate,U=ge.needsUpdate,N=ge.type;$(),T.autoReset=M,ge.enabled=I,ge.autoUpdate=V,ge.needsUpdate=U,ge.type=N}function st(M){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Je(M){const I=M.target;I.removeEventListener("dispose",Je),bn(I)}function bn(M){_n(M),b.remove(M)}function _n(M){const I=b.get(M).programs;I!==void 0&&(I.forEach(function(V){ie.releaseProgram(V)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,V,U,N,oe){I===null&&(I=tt);const ue=N.isMesh&&N.matrixWorld.determinant()<0,ce=Bl(M,I,V,U,N);ve.setMaterial(U,ue);let xe=V.index,Se=1;if(U.wireframe===!0){if(xe=q.getWireframeAttribute(V),xe===void 0)return;Se=2}const Le=V.drawRange,ze=V.attributes.position;let ye=Le.start*Se,Qe=(Le.start+Le.count)*Se;oe!==null&&(ye=Math.max(ye,oe.start*Se),Qe=Math.min(Qe,(oe.start+oe.count)*Se)),xe!==null?(ye=Math.max(ye,0),Qe=Math.min(Qe,xe.count)):ze!=null&&(ye=Math.max(ye,0),Qe=Math.min(Qe,ze.count));const dt=Qe-ye;if(dt<0||dt===1/0)return;te.setup(N,U,ce,V,xe);let lt,et=ke;if(xe!==null&&(lt=Y.get(xe),et=D,et.setIndex(lt)),N.isMesh)U.wireframe===!0?(ve.setLineWidth(U.wireframeLinewidth*ht()),et.setMode(C.LINES)):et.setMode(C.TRIANGLES);else if(N.isLine){let Tt=U.linewidth;Tt===void 0&&(Tt=1),ve.setLineWidth(Tt*ht()),N.isLineSegments?et.setMode(C.LINES):N.isLineLoop?et.setMode(C.LINE_LOOP):et.setMode(C.LINE_STRIP)}else N.isPoints?et.setMode(C.POINTS):N.isSprite&&et.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ta("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Tt=N._multiDrawStarts,Me=N._multiDrawCounts,Ut=N._multiDrawCount,qe=xe?Y.get(xe).bytesPerElement:1,qt=b.get(U).currentProgram.getUniforms();for(let nn=0;nn<Ut;nn++)qt.setValue(C,"_gl_DrawID",nn),et.render(Tt[nn]/qe,Me[nn])}else if(N.isInstancedMesh)et.renderInstances(ye,dt,N.count);else if(V.isInstancedBufferGeometry){const Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Me=Math.min(V.instanceCount,Tt);et.renderInstances(ye,dt,Me)}else et.render(ye,dt)};function xo(M,I,V){M.transparent===!0&&M.side===cn&&M.forceSinglePass===!1?(M.side=Nt,M.needsUpdate=!0,ms(M,I,V),M.side=Cn,M.needsUpdate=!0,ms(M,I,V),M.side=cn):ms(M,I,V)}this.compile=function(M,I,V=null){V===null&&(V=M),A=Z.get(V),A.init(I),P.push(A),V.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(A.pushLight(N),N.castShadow&&A.pushShadow(N))}),M!==V&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(A.pushLight(N),N.castShadow&&A.pushShadow(N))}),A.setupLights();const U=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const oe=N.material;if(oe)if(Array.isArray(oe))for(let ue=0;ue<oe.length;ue++){const ce=oe[ue];xo(ce,V,N),U.add(ce)}else xo(oe,V,N),U.add(oe)}),A=P.pop(),U},this.compileAsync=function(M,I,V=null){const U=this.compile(M,I,V);return new Promise(N=>{function oe(){if(U.forEach(function(ue){b.get(ue).currentProgram.isReady()&&U.delete(ue)}),U.size===0){N(M);return}setTimeout(oe,10)}Xe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let da=null;function Ol(M){da&&da(M)}function vo(){jn.stop()}function Mo(){jn.start()}const jn=new Rl;jn.setAnimationLoop(Ol),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(M){da=M,j.setAnimationLoop(M),M===null?jn.stop():jn.start()},j.addEventListener("sessionstart",vo),j.addEventListener("sessionend",Mo),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;const V=j.enabled===!0&&j.isPresenting===!0,U=x!==null&&(O===null||V)&&x.begin(y,O);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(j.cameraAutoUpdate===!0&&j.updateCamera(I),I=j.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,I,O),A=Z.get(M,P.length),A.init(I),P.push(A),xt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ie.setFromProjectionMatrix(xt,hn,I.reversedDepth),Pe=this.localClippingEnabled,Ae=ee.init(this.clippingPlanes,Pe),S=we.get(M,w.length),S.init(),w.push(S),j.enabled===!0&&j.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&ua(ue,I,-1/0,y.sortObjects)}ua(M,I,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(ot,at),Be=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Be&&_e.addToRenderList(S,M),this.info.render.frame++,Ae===!0&&ee.beginShadows();const N=A.state.shadowsArray;if(ge.render(N,M,I),Ae===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(U&&x.hasRenderPass())===!1){const ue=S.opaque,ce=S.transmissive;if(A.setupLights(),I.isArrayCamera){const xe=I.cameras;if(ce.length>0)for(let Se=0,Le=xe.length;Se<Le;Se++){const ze=xe[Se];Eo(ue,ce,M,ze)}Be&&_e.render(M);for(let Se=0,Le=xe.length;Se<Le;Se++){const ze=xe[Se];So(S,M,ze,ze.viewport)}}else ce.length>0&&Eo(ue,ce,M,I),Be&&_e.render(M),So(S,M,I)}O!==null&&B===0&&(L.updateMultisampleRenderTarget(O),L.updateRenderTargetMipmap(O)),U&&x.end(y),M.isScene===!0&&M.onAfterRender(y,M,I),te.resetDefaultState(),H=-1,G=null,P.pop(),P.length>0?(A=P[P.length-1],Ae===!0&&ee.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function ua(M,I,V,U){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ie.intersectsSprite(M)){U&&Ye.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xt);const ue=me.update(M),ce=M.material;ce.visible&&S.push(M,ue,ce,V,Ye.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ie.intersectsObject(M))){const ue=me.update(M),ce=M.material;if(U&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ye.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ye.copy(ue.boundingSphere.center)),Ye.applyMatrix4(M.matrixWorld).applyMatrix4(xt)),Array.isArray(ce)){const xe=ue.groups;for(let Se=0,Le=xe.length;Se<Le;Se++){const ze=xe[Se],ye=ce[ze.materialIndex];ye&&ye.visible&&S.push(M,ue,ye,V,Ye.z,ze)}}else ce.visible&&S.push(M,ue,ce,V,Ye.z,null)}}const oe=M.children;for(let ue=0,ce=oe.length;ue<ce;ue++)ua(oe[ue],I,V,U)}function So(M,I,V,U){const{opaque:N,transmissive:oe,transparent:ue}=M;A.setupLightsView(V),Ae===!0&&ee.setGlobalState(y.clippingPlanes,V),U&&ve.viewport(z.copy(U)),N.length>0&&ps(N,I,V),oe.length>0&&ps(oe,I,V),ue.length>0&&ps(ue,I,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Eo(M,I,V,U){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[U.id]===void 0){const ye=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[U.id]=new un(1,1,{generateMipmaps:!0,type:ye?Pn:kt,minFilter:Tn,samples:Math.max(4,it.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}const oe=A.state.transmissionRenderTarget[U.id],ue=U.viewport||z;oe.setSize(ue.z*y.transmissionResolutionScale,ue.w*y.transmissionResolutionScale);const ce=y.getRenderTarget(),xe=y.getActiveCubeFace(),Se=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor(J),le=y.getClearAlpha(),le<1&&y.setClearColor(16777215,.5),y.clear(),Be&&_e.render(V);const Le=y.toneMapping;y.toneMapping=dn;const ze=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),A.setupLightsView(U),Ae===!0&&ee.setGlobalState(y.clippingPlanes,U),ps(M,V,U),L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Qe=0,dt=I.length;Qe<dt;Qe++){const lt=I[Qe],{object:et,geometry:Tt,material:Me,group:Ut}=lt;if(Me.side===cn&&et.layers.test(U.layers)){const qe=Me.side;Me.side=Nt,Me.needsUpdate=!0,yo(et,V,U,Tt,Me,Ut),Me.side=qe,Me.needsUpdate=!0,ye=!0}}ye===!0&&(L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe))}y.setRenderTarget(ce,xe,Se),y.setClearColor(J,le),ze!==void 0&&(U.viewport=ze),y.toneMapping=Le}function ps(M,I,V){const U=I.isScene===!0?I.overrideMaterial:null;for(let N=0,oe=M.length;N<oe;N++){const ue=M[N],{object:ce,geometry:xe,group:Se}=ue;let Le=ue.material;Le.allowOverride===!0&&U!==null&&(Le=U),ce.layers.test(V.layers)&&yo(ce,I,V,xe,Le,Se)}}function yo(M,I,V,U,N,oe){M.onBeforeRender(y,I,V,U,N,oe),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(y,I,V,U,M,oe),N.transparent===!0&&N.side===cn&&N.forceSinglePass===!1?(N.side=Nt,N.needsUpdate=!0,y.renderBufferDirect(V,I,U,N,M,oe),N.side=Cn,N.needsUpdate=!0,y.renderBufferDirect(V,I,U,N,M,oe),N.side=cn):y.renderBufferDirect(V,I,U,N,M,oe),M.onAfterRender(y,I,V,U,N,oe)}function ms(M,I,V){I.isScene!==!0&&(I=tt);const U=b.get(M),N=A.state.lights,oe=A.state.shadowsArray,ue=N.state.version,ce=ie.getParameters(M,N.state,oe,I,V),xe=ie.getProgramCacheKey(ce);let Se=U.programs;U.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,U.fog=I.fog;const Le=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;U.envMap=X.get(M.envMap||U.environment,Le),U.envMapRotation=U.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Se===void 0&&(M.addEventListener("dispose",Je),Se=new Map,U.programs=Se);let ze=Se.get(xe);if(ze!==void 0){if(U.currentProgram===ze&&U.lightsStateVersion===ue)return Ao(M,ce),ze}else ce.uniforms=ie.getUniforms(M),M.onBeforeCompile(ce,y),ze=ie.acquireProgram(ce,xe),Se.set(xe,ze),U.uniforms=ce.uniforms;const ye=U.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ye.clippingPlanes=ee.uniform),Ao(M,ce),U.needsLights=zl(M),U.lightsStateVersion=ue,U.needsLights&&(ye.ambientLightColor.value=N.state.ambient,ye.lightProbe.value=N.state.probe,ye.directionalLights.value=N.state.directional,ye.directionalLightShadows.value=N.state.directionalShadow,ye.spotLights.value=N.state.spot,ye.spotLightShadows.value=N.state.spotShadow,ye.rectAreaLights.value=N.state.rectArea,ye.ltc_1.value=N.state.rectAreaLTC1,ye.ltc_2.value=N.state.rectAreaLTC2,ye.pointLights.value=N.state.point,ye.pointLightShadows.value=N.state.pointShadow,ye.hemisphereLights.value=N.state.hemi,ye.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ye.spotLightMatrix.value=N.state.spotLightMatrix,ye.spotLightMap.value=N.state.spotLightMap,ye.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=ze,U.uniformsList=null,ze}function To(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Js.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ao(M,I){const V=b.get(M);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Bl(M,I,V,U,N){I.isScene!==!0&&(I=tt),L.resetTextureUnits();const oe=I.fog,ue=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?I.environment:null,ce=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Lt,xe=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Se=X.get(U.envMap||ue,xe),Le=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ye=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color;let lt=dn;U.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(lt=y.toneMapping);const et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Tt=et!==void 0?et.length:0,Me=b.get(U),Ut=A.state.lights;if(Ae===!0&&(Pe===!0||M!==G)){const vt=M===G&&U.id===H;ee.setState(U,M,vt)}let qe=!1;U.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ut.state.version||Me.outputColorSpace!==ce||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==Se||U.fog===!0&&Me.fog!==oe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==Le||Me.vertexTangents!==ze||Me.morphTargets!==ye||Me.morphNormals!==Qe||Me.morphColors!==dt||Me.toneMapping!==lt||Me.morphTargetsCount!==Tt)&&(qe=!0):(qe=!0,Me.__version=U.version);let qt=Me.currentProgram;qe===!0&&(qt=ms(U,I,N));let nn=!1,qn=!1,oi=!1;const nt=qt.getUniforms(),Et=Me.uniforms;if(ve.useProgram(qt.program)&&(nn=!0,qn=!0,oi=!0),U.id!==H&&(H=U.id,qn=!0),nn||G!==M){ve.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),nt.setValue(C,"projectionMatrix",M.projectionMatrix),nt.setValue(C,"viewMatrix",M.matrixWorldInverse);const Fn=nt.map.cameraPosition;Fn!==void 0&&Fn.setValue(C,je.setFromMatrixPosition(M.matrixWorld)),it.logarithmicDepthBuffer&&nt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&nt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),G!==M&&(G=M,qn=!0,oi=!0)}if(Me.needsLights&&(Ut.state.directionalShadowMap.length>0&&nt.setValue(C,"directionalShadowMap",Ut.state.directionalShadowMap,L),Ut.state.spotShadowMap.length>0&&nt.setValue(C,"spotShadowMap",Ut.state.spotShadowMap,L),Ut.state.pointShadowMap.length>0&&nt.setValue(C,"pointShadowMap",Ut.state.pointShadowMap,L)),N.isSkinnedMesh){nt.setOptional(C,N,"bindMatrix"),nt.setOptional(C,N,"bindMatrixInverse");const vt=N.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),nt.setValue(C,"boneTexture",vt.boneTexture,L))}N.isBatchedMesh&&(nt.setOptional(C,N,"batchingTexture"),nt.setValue(C,"batchingTexture",N._matricesTexture,L),nt.setOptional(C,N,"batchingIdTexture"),nt.setValue(C,"batchingIdTexture",N._indirectTexture,L),nt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&nt.setValue(C,"batchingColorTexture",N._colorsTexture,L));const In=V.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&he.update(N,V,qt),(qn||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,nt.setValue(C,"receiveShadow",N.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&I.environment!==null&&(Et.envMapIntensity.value=I.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=ab()),qn&&(nt.setValue(C,"toneMappingExposure",y.toneMappingExposure),Me.needsLights&&kl(Et,oi),oe&&U.fog===!0&&Te.refreshFogUniforms(Et,oe),Te.refreshMaterialUniforms(Et,U,Ne,de,A.state.transmissionRenderTarget[M.id]),Js.upload(C,To(Me),Et,L)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Js.upload(C,To(Me),Et,L),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&nt.setValue(C,"center",N.center),nt.setValue(C,"modelViewMatrix",N.modelViewMatrix),nt.setValue(C,"normalMatrix",N.normalMatrix),nt.setValue(C,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const vt=U.uniformsGroups;for(let Fn=0,ci=vt.length;Fn<ci;Fn++){const wo=vt[Fn];fe.update(wo,qt),fe.bind(wo,qt)}}return qt}function kl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function zl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,I,V){const U=b.get(M);U.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),b.get(M.texture).__webglTexture=I,b.get(M.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:V,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const V=b.get(M);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};const Gl=C.createFramebuffer();this.setRenderTarget=function(M,I=0,V=0){O=M,R=I,B=V;let U=null,N=!1,oe=!1;if(M){const ce=b.get(M);if(ce.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(C.FRAMEBUFFER,ce.__webglFramebuffer),z.copy(M.viewport),k.copy(M.scissor),Q=M.scissorTest,ve.viewport(z),ve.scissor(k),ve.setScissorTest(Q),H=-1;return}else if(ce.__webglFramebuffer===void 0)L.setupRenderTarget(M);else if(ce.__hasExternalTextures)L.rebindTextures(M,b.get(M.texture).__webglTexture,b.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Le=M.depthTexture;if(ce.__boundDepthTexture!==Le){if(Le!==null&&b.has(Le)&&(M.width!==Le.image.width||M.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(M)}}const xe=M.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(oe=!0);const Se=b.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Se[I])?U=Se[I][V]:U=Se[I],N=!0):M.samples>0&&L.useMultisampledRTT(M)===!1?U=b.get(M).__webglMultisampledFramebuffer:Array.isArray(Se)?U=Se[V]:U=Se,z.copy(M.viewport),k.copy(M.scissor),Q=M.scissorTest}else z.copy(K).multiplyScalar(Ne).floor(),k.copy(ne).multiplyScalar(Ne).floor(),Q=ae;if(V!==0&&(U=Gl),ve.bindFramebuffer(C.FRAMEBUFFER,U)&&ve.drawBuffers(M,U),ve.viewport(z),ve.scissor(k),ve.setScissorTest(Q),N){const ce=b.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,ce.__webglTexture,V)}else if(oe){const ce=I;for(let xe=0;xe<M.textures.length;xe++){const Se=b.get(M.textures[xe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+xe,Se.__webglTexture,V,ce)}}else if(M!==null&&V!==0){const ce=b.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ce.__webglTexture,V)}H=-1},this.readRenderTargetPixels=function(M,I,V,U,N,oe,ue,ce=0){if(!(M&&M.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){ve.bindFramebuffer(C.FRAMEBUFFER,xe);try{const Se=M.textures[ce],Le=Se.format,ze=Se.type;if(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ce),!it.textureFormatReadable(Le)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(ze)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-U&&V>=0&&V<=M.height-N&&C.readPixels(I,V,U,N,se.convert(Le),se.convert(ze),oe)}finally{const Se=O!==null?b.get(O).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,I,V,U,N,oe,ue,ce=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe)if(I>=0&&I<=M.width-U&&V>=0&&V<=M.height-N){ve.bindFramebuffer(C.FRAMEBUFFER,xe);const Se=M.textures[ce],Le=Se.format,ze=Se.type;if(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ce),!it.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ye),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),C.readPixels(I,V,U,N,se.convert(Le),se.convert(ze),0);const Qe=O!==null?b.get(O).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,Qe);const dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Ph(C,dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ye),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(ye),C.deleteSync(dt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,V=0){const U=Math.pow(2,-V),N=Math.floor(M.image.width*U),oe=Math.floor(M.image.height*U),ue=I!==null?I.x:0,ce=I!==null?I.y:0;L.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,ue,ce,N,oe),ve.unbindTexture()};const Vl=C.createFramebuffer(),Hl=C.createFramebuffer();this.copyTextureToTexture=function(M,I,V=null,U=null,N=0,oe=0){let ue,ce,xe,Se,Le,ze,ye,Qe,dt;const lt=M.isCompressedTexture?M.mipmaps[oe]:M.image;if(V!==null)ue=V.max.x-V.min.x,ce=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,Se=V.min.x,Le=V.min.y,ze=V.isBox3?V.min.z:0;else{const Et=Math.pow(2,-N);ue=Math.floor(lt.width*Et),ce=Math.floor(lt.height*Et),M.isDataArrayTexture?xe=lt.depth:M.isData3DTexture?xe=Math.floor(lt.depth*Et):xe=1,Se=0,Le=0,ze=0}U!==null?(ye=U.x,Qe=U.y,dt=U.z):(ye=0,Qe=0,dt=0);const et=se.convert(I.format),Tt=se.convert(I.type);let Me;I.isData3DTexture?(L.setTexture3D(I,0),Me=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(L.setTexture2DArray(I,0),Me=C.TEXTURE_2D_ARRAY):(L.setTexture2D(I,0),Me=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const Ut=C.getParameter(C.UNPACK_ROW_LENGTH),qe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),qt=C.getParameter(C.UNPACK_SKIP_PIXELS),nn=C.getParameter(C.UNPACK_SKIP_ROWS),qn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,lt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Se),C.pixelStorei(C.UNPACK_SKIP_ROWS,Le),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ze);const oi=M.isDataArrayTexture||M.isData3DTexture,nt=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const Et=b.get(M),In=b.get(I),vt=b.get(Et.__renderTarget),Fn=b.get(In.__renderTarget);ve.bindFramebuffer(C.READ_FRAMEBUFFER,vt.__webglFramebuffer),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let ci=0;ci<xe;ci++)oi&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(M).__webglTexture,N,ze+ci),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(I).__webglTexture,oe,dt+ci)),C.blitFramebuffer(Se,Le,ue,ce,ye,Qe,ue,ce,C.DEPTH_BUFFER_BIT,C.NEAREST);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||b.has(M)){const Et=b.get(M),In=b.get(I);ve.bindFramebuffer(C.READ_FRAMEBUFFER,Vl),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,Hl);for(let vt=0;vt<xe;vt++)oi?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Et.__webglTexture,N,ze+vt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Et.__webglTexture,N),nt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,In.__webglTexture,oe,dt+vt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,In.__webglTexture,oe),N!==0?C.blitFramebuffer(Se,Le,ue,ce,ye,Qe,ue,ce,C.COLOR_BUFFER_BIT,C.NEAREST):nt?C.copyTexSubImage3D(Me,oe,ye,Qe,dt+vt,Se,Le,ue,ce):C.copyTexSubImage2D(Me,oe,ye,Qe,Se,Le,ue,ce);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else nt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Me,oe,ye,Qe,dt,ue,ce,xe,et,Tt,lt.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Me,oe,ye,Qe,dt,ue,ce,xe,et,lt.data):C.texSubImage3D(Me,oe,ye,Qe,dt,ue,ce,xe,et,Tt,lt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,oe,ye,Qe,ue,ce,et,Tt,lt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,oe,ye,Qe,lt.width,lt.height,et,lt.data):C.texSubImage2D(C.TEXTURE_2D,oe,ye,Qe,ue,ce,et,Tt,lt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ut),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,qe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,qt),C.pixelStorei(C.UNPACK_SKIP_ROWS,nn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qn),oe===0&&I.generateMipmaps&&C.generateMipmap(Me),ve.unbindTexture()},this.initRenderTarget=function(M){b.get(M).__webglFramebuffer===void 0&&L.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?L.setTextureCube(M,0):M.isData3DTexture?L.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?L.setTexture2DArray(M,0):L.setTexture2D(M,0),ve.unbindTexture()},this.resetState=function(){R=0,B=0,O=null,ve.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}function Vc(s,e){if(e===_h)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===kr||e===ll){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===kr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=s.clone();return a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function rb(s){const e=new Map,t=new Map,n=s.clone();return Fl(s,n,function(i,a){e.set(a,i),t.set(i,a)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const a=i,r=e.get(i),o=r.skeleton.bones;a.skeleton=r.skeleton.clone(),a.bindMatrix.copy(r.bindMatrix),a.skeleton.bones=o.map(function(c){return t.get(c)}),a.bind(a.skeleton,a.bindMatrix)}),n}function Fl(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Fl(s.children[n],e.children[n],t)}class Qb extends Vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new db(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new Hc(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hc(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new yb(t)})}load(e,t,n,i){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=as.extractUrlBase(e);r=as.resolveURL(l,this.path)}else r=as.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new Al(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,r,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let a;const r={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Nl){try{r[Ve.KHR_BINARY_GLTF]=new Tb(e)}catch(u){i&&i(u);return}a=JSON.parse(r[Ve.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Bb(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:r[u]=new lb;break;case Ve.KHR_DRACO_MESH_COMPRESSION:r[u]=new Ab(a,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:r[u]=new wb;break;case Ve.KHR_MESH_QUANTIZATION:r[u]=new Rb;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,a){n.parse(e,t,i,a)})}}function ob(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function ut(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cb{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Lt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Yd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Xd(h),l.distance=u;break;case"spot":l=new jd(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),rn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class lb{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return ai}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Lt),e.opacity=r[3]}a.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",a.baseColorTexture,yt))}return Promise.all(i)}}class hb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class db{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return ut(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const a=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(a,a)}return Promise.all(i)}}class ub{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return ut(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class fb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return ut(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class pb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return ut(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const a=n.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Lt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,yt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class mb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return ut(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class gb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return ut(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const a=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(a[0],a[1],a[2],Lt),Promise.all(i)}}class bb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return ut(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class _b{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return ut(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const a=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(a[0],a[1],a[2],Lt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,yt)),Promise.all(i)}}class xb{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return ut(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class vb{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return ut(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){const n=ut(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Mb{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class Sb{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class Eb{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class Hc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class yb{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Vt.TRIANGLES&&l.mode!==Vt.TRIANGLE_STRIP&&l.mode!==Vt.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Oe,m=new F,p=new jt,v=new F(1,1,1),E=new _d(g.geometry,g.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&v.fromBufferAttribute(c.SCALE,S),E.setMatrixAt(S,_.compose(m,p,v));for(const S in c)if(S==="_COLOR_0"){const A=c[S];E.instanceColor=new Gr(A.array,A.itemSize,A.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);ct.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Nl="glTF",Qi=12,Wc={JSON:1313821514,BIN:5130562};class Tb{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qi),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Qi,a=new DataView(e,Qi);let r=0;for(;r<i;){const o=a.getUint32(r,!0);r+=4;const c=a.getUint32(r,!0);if(r+=4,c===Wc.JSON){const l=new Uint8Array(e,Qi+r,o);this.content=n.decode(l)}else if(c===Wc.BIN){const l=Qi+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ab{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const h in r){const u=qr[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=qr[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ci[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,Lt,d)})})}}class wb{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Rb{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class Ul extends ki{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,i){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,v=1-m,E=p-d+u;for(let S=0;S!==o;S++){const A=r[_+S+o],w=r[_+S+c]*h,P=r[g+S+o],x=r[g+S]*h;a[S]=v*A+E*w+m*P+p*x}return a}}const Cb=new jt;class Pb extends Ul{interpolate_(e,t,n,i){const a=super.interpolate_(e,t,n,i);return Cb.fromArray(a).normalize().toArray(a),a}}const Vt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ci={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jc={9728:mt,9729:gt,9984:nl,9985:js,9986:ts,9987:Tn},qc={33071:ln,33648:Zs,10497:Li},Ya={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qr={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Db={CUBICSPLINE:void 0,LINEAR:ls,STEP:cs},Ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new mo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),s.DefaultMaterial}function Qn(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function rn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ib(s,e,t){let n=!1,i=!1,a=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(a=!0),n&&i&&a)break}if(!n&&!i&&!a)return Promise.resolve(s);const r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(a){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),a&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Fb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nb(s){let e;const t=s.extensions&&s.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Za(t.attributes):e=s.indices+":"+Za(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Za(s.targets[n]);return e}function Za(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Xr(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ub(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ob=new Oe;class Bb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ob,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,a=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||a&&r<98?this.textureLoader=new Hd(this.options.manager):this.textureLoader=new Jd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Al(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Qn(a,o,i),rn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),a=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,h]of r.children.entries())a(h,o.children[l])};return a(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,r){n.load(as.resolveURL(t.uri,i.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Ya[i.type],o=Ci[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new Dt(l,r,c))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],c=Ya[i.type],l=Ci[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let E=t.cache.get(v);E||(_=new l(o,p*f,i.count*f/h),E=new dd(_,f/h),t.cache.add(v,E)),m=new co(E,c,d%f/h,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),m=new Dt(_,c,g);if(i.sparse!==void 0){const p=Ya.SCALAR,v=Ci[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,A=new v(r[1],E,i.sparse.count*p),w=new l(r[2],S,i.sparse.count*c);o!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,x=A.length;P<x;P++){const y=A[P];if(m.setX(y,w[P*c]),c>=2&&m.setY(y,w[P*c+1]),c>=3&&m.setZ(y,w[P*c+2]),c>=4&&m.setW(y,w[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const i=this,a=this.json,r=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(a.samplers||{})[r.sampler]||{};return h.magFilter=jc[d.magFilter]||gt,h.minFilter=jc[d.minFilter]||Tn,h.wrapS=qc[d.wrapS]||Li,h.wrapT=qc[d.wrapT]||Li,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==mt&&h.minFilter!==gt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:r.mimeType});return c=o.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new St(_);m.needsUpdate=!0,d(m)}),t.load(as.resolveURL(u,a.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),rn(u,r),u.userData.mimeType=r.mimeType||Ub(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(r);r=a.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new _l,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new fo,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||a||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return mo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,a=n.materials[e];let r;const o={},c=a.extensions||{},l=[];if(c[Ve.KHR_MATERIALS_UNLIT]){const u=i[Ve.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else{const u=a.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Lt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,yt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=cn);const h=a.alphaMode||Ja.OPAQUE;if(h===Ja.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ja.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==ai&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new We(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&r!==ai&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==ai){const u=a.emissiveFactor;o.emissive=new Ce().setRGB(u[0],u[1],u[2],Lt)}return a.emissiveTexture!==void 0&&r!==ai&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,yt)),Promise.all(l).then(function(){const u=new r(o);return a.name&&(u.name=a.name),rn(u,a),t.associations.set(u,{materials:e}),a.extensions&&Qn(i,u,a),u})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function a(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Xc(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=Nb(l),u=i[h];if(u)r.push(u.promise);else{let d;l.extensions&&l.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=a(l):d=Xc(new It,l,t),i[h]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?Lb(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=r[f];let p;const v=l[f];if(m.mode===Vt.TRIANGLES||m.mode===Vt.TRIANGLE_STRIP||m.mode===Vt.TRIANGLE_FAN||m.mode===void 0)p=a.isSkinnedMesh===!0?new md(_,v):new zt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Vt.TRIANGLE_STRIP?p.geometry=Vc(p.geometry,ll):m.mode===Vt.TRIANGLE_FAN&&(p.geometry=Vc(p.geometry,kr));else if(m.mode===Vt.LINES)p=new bl(_,v);else if(m.mode===Vt.LINE_STRIP)p=new po(_,v);else if(m.mode===Vt.LINE_LOOP)p=new Sd(_,v);else if(m.mode===Vt.POINTS)p=new Ed(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Fb(p,a),p.name=t.createUniqueName(a.name||"mesh_"+e),rn(p,a),m.extensions&&Qn(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return a.extensions&&Qn(i,u[0],a),u[0];const d=new si;a.extensions&&Qn(i,d,a),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(Kh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ca(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),rn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,a=t.joints.length;i<a;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const a=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u){o.push(u);const d=new Oe;a!==null&&d.fromArray(a.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ho(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let E=0,S=d.length;E<S;E++){const A=d[E],w=f[E],P=g[E],x=_[E],y=m[E];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const W=n._createAnimationTracks(A,w,P,x,y);if(W)for(let R=0;R<W.length;R++)p.push(W[R])}const v=new Hr(a,void 0,p);return rn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,i.mesh,a);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([a,Promise.all(r),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ob)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new F().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?i.createUniqueName(a.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(l){return i._getNodeRef(i.cameraCache,a.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new gl:l.length>1?h=new si:l.length===1?h=l[0]:h=new ct,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=r),rn(h,a),a.extensions&&Qn(n,h,a),a.matrix!==void 0){const u=new Oe;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(a.mesh!==void 0&&i.meshCache.refs[a.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,a=new si;n.name&&(a.name=i.createUniqueName(n.name)),rn(a,n),n.extensions&&Qn(t,a,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){const d=c[h];d.parent!==null?a.add(rb(d)):a.add(d)}const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Qt||d instanceof St)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(a),a})}_createAnimationTracks(e,t,n,i,a){const r=[],o=e.name?e.name:e.uuid,c=[];Gn[a.path]===Gn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Gn[a.path]){case Gn.weights:l=Ui;break;case Gn.rotation:l=Oi;break;case Gn.translation:case Gn.scale:l=Bi;break;default:n.itemSize===1?l=Ui:l=Bi;break}const h=i.interpolation!==void 0?Db[i.interpolation]:ls,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Gn[a.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Xr(t.constructor),i=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)i[a]=t[a]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Oi?Pb:Ul;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kb(s,e,t){const n=e.attributes,i=new Ln;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),o.normalized){const h=Xr(Ci[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new F,c=new F;for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Xr(Ci[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const r=new mn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=r}function Xc(s,e,t){const n=e.attributes,i=[];function a(r,o){return t.getDependency("accessor",r).then(function(c){s.setAttribute(o,c)})}for(const r in n){const o=qr[r]||r.toLowerCase();o in s.attributes||i.push(a(n[r],o))}if(e.indices!==void 0&&!s.index){const r=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(r)}return He.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${He.workingColorSpace}" not supported.`),rn(s,e),kb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ib(s,e.targets,t):s})}var e_=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuec:W:Odkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;lZkdbk;jYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbhodnawTmbaxa8Acd4fRbbhokaocFeGh5cbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q1jjbfcj1jjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bbarcwf9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfag9c8F1:NghcKtc8F91aicdfa8J9c8N1:Nfg8KRbbG86bbarcVfcba8KahcjeGcr4fghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fag9c8F1:NgicKtc8F91aha8J9c8N1:NfghRbbG86bbarc96fcbahaicjeGcr4fgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbb83bbarcwfaicwf8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbcbaocl49Rh8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E93aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:XseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk::ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxabaiarcefciGfcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGfgkcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabaiarcufciGfcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkabakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K1jjbgeabcifc98GfgbBd:K1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk81dbcjwk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:Kwkl8WNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuec:q:6dkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:Ctklbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:183lYud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxavaialfgmar9Rgoad;8qbbcj;abad9Uc;WFbGcjdadca0EhPdndndnadTmbaoadfhscbhzinaeaz9nmdamax9RaD6miabazad2fhHaxaDfhOaPaeaz9RazaPfae6EgAcsfgocl4cifcd4hCavcj;cbfaoc9WGgXcetfhQavcj;cbfaXci2fhLavcj;cbfaXfhKcbhYaoc;ab6h8AincbhodnawTmbaxaYcd4fRbbhokaocFeGhEcbh3avcj;cbfh5indndndndnaEa3cet4ciGgoc9:fPdebdkamaO9RaX6mwavcj;cbfa3aX2faOaX;8qbbaOaAfhOxdkavcj;cbfa3aX2fcbaX;8kbxekamaO9RaC6moaoclVcbawEhraOaCfhocbhidna8Ambamao9Rc;Gb6mbcbhlina5alfhidndndndndndnaOalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiczfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaicafaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaoclffaqc:q:yjjbfRbbfhoxikaic8Wfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaocwffaqc:q:yjjbfRbbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitc:q1jjbfpbibaic:q:yjjbfRbbgipsaoRbegqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqc:q:yjjbfRbbfhokalc;abfhialcjefaX0meaihlamao9Rc;Fb0mbkkdnaiaX9pmbaici4hlinamao9RcK6mwa5aifhqdndndndndndnaOaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaoclffahc:q:yjjbfRbbfhoxikaqaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaocwffahc:q:yjjbfRbbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpkbbaaaocdffahc:q:yjjbfRbbfhokalcdfhlaiczfgiaX6mbkkaohOaoTmoka5aXfh5a3cefg3cl9hmbkdndndndnawTmbasaYcd4fRbbglciGPlbedwbkaXTmdavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep9Ta8Epxeeeeeeeeeeeeeeeeg8Fp9op9Hp9rg8Eagp9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Ug8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9AbbbaladfhlaoczfgoaX6mbxikkaXTmeavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep:nea8Epxebebebebebebebebg8Fp9op:bep9rg8Eagp:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeg8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9AbbbaladfhlaoczfgoaX6mbxdkkaXTmbcbhocbalcl4gl9Rc8FGhiavcjdfaYfhravaYfpbdbh8Finaravcj;cbfaofpblbggaKaofpblbg8JpmbzeHdOiAlCvXoQrLg8KaQaofpblbg8LaLaofpblbg8MpmbzeHdOiAlCvXoQrLg8NpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ea8Fp9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Fa8Ka8NpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwKDYq8AkEx3m5P8Es8Fgga8La8MpmwKDYq8AkEx3m5P8Es8Fg8JpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9AbbbaradfhraoczfgoaX6mbkkaYclfgYad6mbkaHavcjdfaAad2;8qbbavavcjdfaAcufad2fad;8qbbaAazfhzc9:hoaOhxaOmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdaPaeao9RaoaPfae6Eaofgoae6mbkaial9Rhxkcbc99amax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbk:TseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:2Pliur97eue978Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskaipxFubbFubbFubbFubbgxpklbdnalTmbcbhvabhdinadczfgmampbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblbaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgopklbaiaopklbaiabalcitfgdaeciGglcitgv;8qbbaiaxpkladnalTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblaaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkadaiav;8qbbkk:Iwllue97euo978Jjjjjbca9Rhidnaec98GglTmbcbhvabhoinaocKfpx:ji:1S:ji:1S:ji:1S:ji:1SaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qgxp;6ep;Negmaxaxp:1ep;7egxaxp;KearaDpmbediwDqkzHOAKY8AEgxczp:Reczp:Sep;6egrarp;Meaxczp:Sep;6egDaDp;Meaqczp:Reczp:Sep;6egqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gxp;KepxFFbbFFbbFFbbFFbbgPp9oamaDp;Meaxp;Keczp:Rep9qgDamarp;Meaxp;KeaPp9oamaqp;Meaxp;Keczp:Rep9qgxpmwDKYqk8AExm35Ps8E8Fgrp5eakclp:RegmpEi:T:j83ibawarp5bampEd:T:j83ibaocwfaDaxpmbezHdiOAlvCXorQLgxp5eampEe:T:j83ibaoaxp5bampEb:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiczfpxbbbbbbbbbbbbbbbbgmpklbaiampklbaiabalcitfgoaeciGgvcitgw;8qbbdnavTmbaipx:ji:1S:ji:1S:ji:1S:ji:1SaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qgxp;6ep;Negmaxaxp:1ep;7egxaxp;KearaDpmbediwDqkzHOAKY8AEgxczp:Reczp:Sep;6egrarp;Meaxczp:Sep;6egDaDp;Meaqczp:Reczp:Sep;6egqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gxp;KepxFFbbFFbbFFbbFFbbgPp9oamaDp;Meaxp;Keczp:Rep9qgDamarp;Meaxp;KeaPp9oamaqp;Meaxp;Keczp:Rep9qgxpmwDKYqk8AExm35Ps8E8Fgrp5eakclp:RegmpEi:T:j83iKaiarp5bampEd:T:j83izaiaDaxpmbezHdiOAlvCXorQLgxp5eampEe:T:j83iwaiaxp5bampEb:T:j83ibkaoaiaw;8qbbkk;uddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaic8WfpxbbbbbbbbbbbbbbbbgopklbaicafaopklbaiczfaopklbaiaopklbaiabavcdtfgdalciGgecdtgv;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkadaiav;8qbbkk:CPvdue97euw97eu8Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadpbbbhradpxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpkbbadczfhdaoclfgoal6mbkkalaeSmeaiavpklaaicafabalcdtfgdaeciGglcdtgo;8qbbaiavpklbdnalTmbaipblahraipxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpklakadaicafao;8qbbskaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadczfgspxbFu9hbFu9hbFu9hbFu9hadpbbbgDaspbbbgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblbp9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpkbbadaxarpmbezHdiOAlvCXorQLpkbbadcafhdaoclfgoal6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgrpklbaiarpklbaiabalcitfgdaeciGglcitgo;8qbbaiavpkladnalTmbaipxbFu9hbFu9hbFu9hbFu9haipblbgDaipblzgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblap9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpklzaiaxarpmbezHdiOAlvCXorQLpklbkadaiao;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),a,r=WebAssembly.instantiate(i,{}).then(function(p){a=p.instance,a.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),E=0;E<p.length;++E){var S=p.charCodeAt(E);v[E]=S>96?S-97:S>64?S-39:S+4}for(var A=0,E=0;E<p.length;++E)v[A++]=v[E]<60?n[v[E]]:(v[E]-60)*64+v[++E];return v.buffer.slice(0,A)}function c(p,v,E,S,A,w,P){var x=p.exports.sbrk,y=S+3&-4,W=x(y*A),R=x(w.length),B=new Uint8Array(p.exports.memory.buffer);B.set(w,R);var O=v(W,S,A,R,w.length);if(O==0&&P&&P(W,y,A),E.set(B.subarray(W,W+S*A)),x(W-x(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(E){var S=E.data;v.pending-=S.count,v.requests[S.id][S.action](S.value),delete v.requests[S.id]},v}function g(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),E=new Blob([v],{type:"text/javascript"}),S=URL.createObjectURL(E),A=u.length;A<p;++A)u[A]=f(S);for(var A=p;A<u.length;++A)u[A].object.postMessage({});u.length=p,URL.revokeObjectURL(S)}function _(p,v,E,S,A){for(var w=u[0],P=1;P<u.length;++P)u[P].pending<w.pending&&(w=u[P]);return new Promise(function(x,y){var W=new Uint8Array(E),R=++d;w.pending+=p,w.requests[R]={resolve:x,reject:y},w.object.postMessage({id:R,count:p,size:v,source:W,mode:S,filter:A},[W.buffer])})}function m(p){var v=p.data;if(!v.id)return self.close();self.ready.then(function(E){try{var S=new Uint8Array(v.count*v.size);c(E,E.exports[v.mode],S,v.count,v.size,v.source,E.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:S},[S.buffer])}catch(A){self.postMessage({id:v.id,count:v.count,action:"reject",value:A})}})}return{ready:r,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,E,S,A){c(a,a.exports.meshopt_decodeVertexBuffer,p,v,E,S,a.exports[l[A]])},decodeIndexBuffer:function(p,v,E,S){c(a,a.exports.meshopt_decodeIndexBuffer,p,v,E,S)},decodeIndexSequence:function(p,v,E,S){c(a,a.exports.meshopt_decodeIndexSequence,p,v,E,S)},decodeGltfBuffer:function(p,v,E,S,A,w){c(a,a.exports[h[A]],p,v,E,S,a.exports[l[w]])},decodeGltfBufferAsync:function(p,v,E,S,A){return u.length>0?_(p,v,E,h[S],l[A]):r.then(function(){var w=new Uint8Array(p*v);return c(a,a.exports[h[S]],w,p,v,E,a.exports[l[A]]),w})}}})();export{dn as $,Kb as A,fs as B,Ce as C,us as D,Wn as E,Ht as F,jb as G,Pn as H,_d as I,Yd as J,Mc as K,gt as L,mo as M,si as N,ct as O,Xd as P,jt as Q,Vb as R,Hb as S,St as T,Ad as U,F as V,un as W,Qb as X,e_ as Y,Ml as Z,Xb as _,Nt as a,Zb as a0,zb as a1,Gb as a2,Yb as a3,aa as a4,ei as a5,ca as a6,Rt as a7,wn as a8,Jb as a9,zt as b,Wb as c,It as d,Oe as e,rt as f,Dt as g,pn as h,Kh as i,gn as j,Dd as k,Pd as l,Ue as m,ai as n,We as o,qb as p,mn as q,Ln as r,Gr as s,Fe as t,cn as u,ra as v,Ft as w,en as x,$b as y,Zc as z};
