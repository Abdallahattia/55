google.maps.__gjsload__('stats', function(_){var oY=function(a){_.C(this,a,2)},pY=function(a){_.C(this,a,6)},qY=function(a,b,c,d){var e={};e.host=document.location&&document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},rY=function(a){var b=document;this.H=Zda;this.j=a+"/maps/gen_204";this.o=b},sY=function(a,b,c){var d=[];_.rb(a,function(e,f){d.push(f+b+e)});return d.join(c)},$da=function(a){var b={};_.rb(a,function(c,d){b[encodeURIComponent(d)]=encodeURIComponent(c).replace(/%7C/g,"|")});
return sY(b,":",",")},tY=function(a,b,c,d){var e=_.D(_.I,0,1);this.T=a;this.$=b;this.H=e;this.j=c;this.o=d;this.i=new _.eo;this.W=_.Sa()},uY=function(a,b,c,d,e){this.W=a;this.$=b;this.T=c;this.o=d;this.H=e;this.j={};this.i=[]},vY=function(a,b,c){var d=_.Lj;this.o=a;_.M.bind(this.o,"set_at",this,this.H);_.M.bind(this.o,"insert_at",this,this.H);this.W=b;this.$=d;this.T=c;this.j=0;this.i={};this.H()},xY=function(a,b,c,d,e){var f=_.D(_.I,23,500);var g=_.D(_.I,22,2);this.ka=a;this.ta=b;this.ua=f;this.H=
g;this.$=c;this.T=d;this.W=e;this.j=new _.eo;this.i=0;this.o=_.Sa();wY(this)},wY=function(a){window.setTimeout(function(){aea(a);wY(a)},Math.min(a.ua*Math.pow(a.H,a.i),2147483647))},aea=function(a){var b=qY(a.ta,a.$,a.T,a.W);b.t=a.i+"-"+(_.Sa()-a.o);a.j.forEach(function(c,d){c=c();0<c&&(b[d]=Number(c.toFixed(2))+(_.Oo()?"-if":""))});a.ka.i({ev:"api_snap"},b);++a.i},yY=function(){this.j=_.F(_.I,6);this.o=_.F(_.I,16);if(_.ph[35]){var a=_.Fd(_.I);a=_.F(a,11)}else a=_.Au;this.i=new rY(a);(a=_.Kj)&&new vY(a,
(0,_.y)(this.i.i,this.i),!!this.j);a=_.F(new _.Kd(_.I.V[3]),1);this.ka=a.split(".")[1]||a;this.ua={};this.$={};this.W={};this.ta=_.D(_.I,0,1);_.lg&&(this.va=new xY(this.i,this.ka,this.ta,this.j,this.o));a=this.T=new pY;var b=_.F(new _.Kd(_.I.V[3]),1);a.V[1]=b;this.j&&(this.T.V[2]=this.j);this.o&&(this.T.V[3]=this.o)};_.z(oY,_.B);var zY;_.z(pY,_.B);var Zda=Math.round(1E15*Math.random()).toString(36);rY.prototype.i=function(a,b){b=b||{};var c=_.nn().toString(36);b.src="apiv3";b.token=this.H;b.ts=c.substr(c.length-6);a.cad=$da(b);a=sY(a,"=","&");a=this.j+"?target=api&"+a;_.Jc(new _.Ic(this.o),"IMG").src=a;(b=_.t.__gm_captureCSI)&&b(a)};tY.prototype.ka=function(a,b){b=void 0!==b?b:1;this.i.isEmpty()&&window.setTimeout((0,_.y)(function(){var c=qY(this.$,this.H,this.j,this.o);c.t=_.Sa()-this.W;var d=this.i;_.fo(d);for(var e={},f=0;f<d.i.length;f++){var g=d.i[f];e[g]=d.j[g]}_.ub(c,e);this.i.clear();this.T.i({ev:"api_maprft"},c)},this),500);b=this.i.get(a,0)+b;this.i.set(a,b)};uY.prototype.ka=function(a){this.j[a]||(this.j[a]=!0,this.i.push(a),2>this.i.length&&_.yz(this,this.ta,500))};uY.prototype.ta=function(){for(var a=qY(this.$,this.T,this.o,this.H),b=0,c;c=this.i[b];++b)a[c]="1";a.hybrid=+_.Po();this.i.length=0;this.W.i({ev:"api_mapft"},a)};vY.prototype.H=function(){for(var a;a=this.o.removeAt(0);){var b=a.Ho;a=a.timestamp-this.$;++this.j;this.i[b]||(this.i[b]=0);++this.i[b];if(20<=this.j&&!(this.j%5)){var c={};c.s=b;c.sr=this.i[b];c.tr=this.j;c.te=a;c.hc=this.T?"1":"0";this.W({ev:"api_services"},c)}}};xY.prototype.register=function(a,b){this.j.set(a,b)};yY.prototype.Na=function(a){a=_.kf(a);var b=this.ua[a];b||(b=new uY(this.i,this.ka,this.ta,this.j,this.o),this.ua[a]=b);return b};yY.prototype.Ba=function(a){a=_.kf(a);this.$[a]||(this.$[a]=new tY(this.i,this.ka,this.j,this.o));return this.$[a]};yY.prototype.H=function(a){if(this.va){this.W[a]||(this.W[a]=new _.eL,this.va.register(a,function(){return b.nc()}));var b=this.W[a];return b}};
yY.prototype.Sa=function(a){if(_.lg){var b=this.T;b=new b.constructor(_.Fm(b));var c=Math.floor(_.Sa()/1E3);b.V[0]=c;c=new oY(_.G(b,5));c.V[0]=Math.round(1/this.ta);c.V[1]=a;a=this.i;c={ev:"api_map_style"};var d=new _.Rs;zY||(zY={ha:"issssm",ma:["is"]});b=d.i(b.V,zY);c.pb=encodeURIComponent(b).replace(/%20/g,"+");b=sY(c,"=","&");_.Jc(new _.Ic(a.o),"IMG").src=a.j+"?target=api&"+b}};_.Xe("stats",new yY);});
