goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37880 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37880(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37881 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37881(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36918 = coll;
var G__36919 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36918,G__36919) : shadow.dom.lazy_native_coll_seq.call(null,G__36918,G__36919));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36986 = arguments.length;
switch (G__36986) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36997 = arguments.length;
switch (G__36997) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37001 = arguments.length;
switch (G__37001) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37004 = arguments.length;
switch (G__37004) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37008 = arguments.length;
switch (G__37008) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37022 = arguments.length;
switch (G__37022) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37030){if((e37030 instanceof Object)){
var e = e37030;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37030;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37042 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37043 = null;
var count__37044 = (0);
var i__37045 = (0);
while(true){
if((i__37045 < count__37044)){
var el = chunk__37043.cljs$core$IIndexed$_nth$arity$2(null,i__37045);
var handler_37891__$1 = ((function (seq__37042,chunk__37043,count__37044,i__37045,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37042,chunk__37043,count__37044,i__37045,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37891__$1);


var G__37892 = seq__37042;
var G__37893 = chunk__37043;
var G__37894 = count__37044;
var G__37895 = (i__37045 + (1));
seq__37042 = G__37892;
chunk__37043 = G__37893;
count__37044 = G__37894;
i__37045 = G__37895;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37042);
if(temp__5753__auto__){
var seq__37042__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37042__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37042__$1);
var G__37896 = cljs.core.chunk_rest(seq__37042__$1);
var G__37897 = c__4638__auto__;
var G__37898 = cljs.core.count(c__4638__auto__);
var G__37899 = (0);
seq__37042 = G__37896;
chunk__37043 = G__37897;
count__37044 = G__37898;
i__37045 = G__37899;
continue;
} else {
var el = cljs.core.first(seq__37042__$1);
var handler_37900__$1 = ((function (seq__37042,chunk__37043,count__37044,i__37045,el,seq__37042__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37042,chunk__37043,count__37044,i__37045,el,seq__37042__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37900__$1);


var G__37901 = cljs.core.next(seq__37042__$1);
var G__37902 = null;
var G__37903 = (0);
var G__37904 = (0);
seq__37042 = G__37901;
chunk__37043 = G__37902;
count__37044 = G__37903;
i__37045 = G__37904;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37065 = arguments.length;
switch (G__37065) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37074 = cljs.core.seq(events);
var chunk__37075 = null;
var count__37076 = (0);
var i__37077 = (0);
while(true){
if((i__37077 < count__37076)){
var vec__37090 = chunk__37075.cljs$core$IIndexed$_nth$arity$2(null,i__37077);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37090,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37090,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37915 = seq__37074;
var G__37916 = chunk__37075;
var G__37917 = count__37076;
var G__37918 = (i__37077 + (1));
seq__37074 = G__37915;
chunk__37075 = G__37916;
count__37076 = G__37917;
i__37077 = G__37918;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37074);
if(temp__5753__auto__){
var seq__37074__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37074__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37074__$1);
var G__37919 = cljs.core.chunk_rest(seq__37074__$1);
var G__37920 = c__4638__auto__;
var G__37921 = cljs.core.count(c__4638__auto__);
var G__37922 = (0);
seq__37074 = G__37919;
chunk__37075 = G__37920;
count__37076 = G__37921;
i__37077 = G__37922;
continue;
} else {
var vec__37097 = cljs.core.first(seq__37074__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37097,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37923 = cljs.core.next(seq__37074__$1);
var G__37924 = null;
var G__37925 = (0);
var G__37926 = (0);
seq__37074 = G__37923;
chunk__37075 = G__37924;
count__37076 = G__37925;
i__37077 = G__37926;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37106 = cljs.core.seq(styles);
var chunk__37107 = null;
var count__37108 = (0);
var i__37109 = (0);
while(true){
if((i__37109 < count__37108)){
var vec__37123 = chunk__37107.cljs$core$IIndexed$_nth$arity$2(null,i__37109);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37123,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37927 = seq__37106;
var G__37928 = chunk__37107;
var G__37929 = count__37108;
var G__37930 = (i__37109 + (1));
seq__37106 = G__37927;
chunk__37107 = G__37928;
count__37108 = G__37929;
i__37109 = G__37930;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37106);
if(temp__5753__auto__){
var seq__37106__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37106__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37106__$1);
var G__37932 = cljs.core.chunk_rest(seq__37106__$1);
var G__37933 = c__4638__auto__;
var G__37934 = cljs.core.count(c__4638__auto__);
var G__37935 = (0);
seq__37106 = G__37932;
chunk__37107 = G__37933;
count__37108 = G__37934;
i__37109 = G__37935;
continue;
} else {
var vec__37130 = cljs.core.first(seq__37106__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37130,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37936 = cljs.core.next(seq__37106__$1);
var G__37937 = null;
var G__37938 = (0);
var G__37939 = (0);
seq__37106 = G__37936;
chunk__37107 = G__37937;
count__37108 = G__37938;
i__37109 = G__37939;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37136_37940 = key;
var G__37136_37941__$1 = (((G__37136_37940 instanceof cljs.core.Keyword))?G__37136_37940.fqn:null);
switch (G__37136_37941__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37943 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_37943,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_37943,"aria-");
}
})())){
el.setAttribute(ks_37943,value);
} else {
(el[ks_37943] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37175){
var map__37176 = p__37175;
var map__37176__$1 = cljs.core.__destructure_map(map__37176);
var props = map__37176__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37176__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37177 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37177,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37177,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37177,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37180 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37180,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37180;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37186 = arguments.length;
switch (G__37186) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37216){
var vec__37217 = p__37216;
var seq__37218 = cljs.core.seq(vec__37217);
var first__37219 = cljs.core.first(seq__37218);
var seq__37218__$1 = cljs.core.next(seq__37218);
var nn = first__37219;
var first__37219__$1 = cljs.core.first(seq__37218__$1);
var seq__37218__$2 = cljs.core.next(seq__37218__$1);
var np = first__37219__$1;
var nc = seq__37218__$2;
var node = vec__37217;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37225 = nn;
var G__37226 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37225,G__37226) : create_fn.call(null,G__37225,G__37226));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37228 = nn;
var G__37229 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37228,G__37229) : create_fn.call(null,G__37228,G__37229));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37240 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37240,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37240,(1),null);
var seq__37244_37945 = cljs.core.seq(node_children);
var chunk__37245_37946 = null;
var count__37246_37947 = (0);
var i__37247_37948 = (0);
while(true){
if((i__37247_37948 < count__37246_37947)){
var child_struct_37949 = chunk__37245_37946.cljs$core$IIndexed$_nth$arity$2(null,i__37247_37948);
var children_37950 = shadow.dom.dom_node(child_struct_37949);
if(cljs.core.seq_QMARK_(children_37950)){
var seq__37300_37951 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37950));
var chunk__37302_37952 = null;
var count__37303_37953 = (0);
var i__37304_37954 = (0);
while(true){
if((i__37304_37954 < count__37303_37953)){
var child_37955 = chunk__37302_37952.cljs$core$IIndexed$_nth$arity$2(null,i__37304_37954);
if(cljs.core.truth_(child_37955)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37955);


var G__37956 = seq__37300_37951;
var G__37957 = chunk__37302_37952;
var G__37958 = count__37303_37953;
var G__37959 = (i__37304_37954 + (1));
seq__37300_37951 = G__37956;
chunk__37302_37952 = G__37957;
count__37303_37953 = G__37958;
i__37304_37954 = G__37959;
continue;
} else {
var G__37960 = seq__37300_37951;
var G__37961 = chunk__37302_37952;
var G__37962 = count__37303_37953;
var G__37963 = (i__37304_37954 + (1));
seq__37300_37951 = G__37960;
chunk__37302_37952 = G__37961;
count__37303_37953 = G__37962;
i__37304_37954 = G__37963;
continue;
}
} else {
var temp__5753__auto___37964 = cljs.core.seq(seq__37300_37951);
if(temp__5753__auto___37964){
var seq__37300_37965__$1 = temp__5753__auto___37964;
if(cljs.core.chunked_seq_QMARK_(seq__37300_37965__$1)){
var c__4638__auto___37966 = cljs.core.chunk_first(seq__37300_37965__$1);
var G__37967 = cljs.core.chunk_rest(seq__37300_37965__$1);
var G__37968 = c__4638__auto___37966;
var G__37969 = cljs.core.count(c__4638__auto___37966);
var G__37970 = (0);
seq__37300_37951 = G__37967;
chunk__37302_37952 = G__37968;
count__37303_37953 = G__37969;
i__37304_37954 = G__37970;
continue;
} else {
var child_37971 = cljs.core.first(seq__37300_37965__$1);
if(cljs.core.truth_(child_37971)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37971);


var G__37972 = cljs.core.next(seq__37300_37965__$1);
var G__37973 = null;
var G__37974 = (0);
var G__37975 = (0);
seq__37300_37951 = G__37972;
chunk__37302_37952 = G__37973;
count__37303_37953 = G__37974;
i__37304_37954 = G__37975;
continue;
} else {
var G__37976 = cljs.core.next(seq__37300_37965__$1);
var G__37977 = null;
var G__37978 = (0);
var G__37979 = (0);
seq__37300_37951 = G__37976;
chunk__37302_37952 = G__37977;
count__37303_37953 = G__37978;
i__37304_37954 = G__37979;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37950);
}


var G__37980 = seq__37244_37945;
var G__37981 = chunk__37245_37946;
var G__37982 = count__37246_37947;
var G__37983 = (i__37247_37948 + (1));
seq__37244_37945 = G__37980;
chunk__37245_37946 = G__37981;
count__37246_37947 = G__37982;
i__37247_37948 = G__37983;
continue;
} else {
var temp__5753__auto___37984 = cljs.core.seq(seq__37244_37945);
if(temp__5753__auto___37984){
var seq__37244_37985__$1 = temp__5753__auto___37984;
if(cljs.core.chunked_seq_QMARK_(seq__37244_37985__$1)){
var c__4638__auto___37986 = cljs.core.chunk_first(seq__37244_37985__$1);
var G__37987 = cljs.core.chunk_rest(seq__37244_37985__$1);
var G__37988 = c__4638__auto___37986;
var G__37989 = cljs.core.count(c__4638__auto___37986);
var G__37990 = (0);
seq__37244_37945 = G__37987;
chunk__37245_37946 = G__37988;
count__37246_37947 = G__37989;
i__37247_37948 = G__37990;
continue;
} else {
var child_struct_37991 = cljs.core.first(seq__37244_37985__$1);
var children_37992 = shadow.dom.dom_node(child_struct_37991);
if(cljs.core.seq_QMARK_(children_37992)){
var seq__37316_37993 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37992));
var chunk__37318_37994 = null;
var count__37319_37995 = (0);
var i__37320_37996 = (0);
while(true){
if((i__37320_37996 < count__37319_37995)){
var child_37997 = chunk__37318_37994.cljs$core$IIndexed$_nth$arity$2(null,i__37320_37996);
if(cljs.core.truth_(child_37997)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37997);


var G__37998 = seq__37316_37993;
var G__37999 = chunk__37318_37994;
var G__38000 = count__37319_37995;
var G__38001 = (i__37320_37996 + (1));
seq__37316_37993 = G__37998;
chunk__37318_37994 = G__37999;
count__37319_37995 = G__38000;
i__37320_37996 = G__38001;
continue;
} else {
var G__38002 = seq__37316_37993;
var G__38003 = chunk__37318_37994;
var G__38004 = count__37319_37995;
var G__38005 = (i__37320_37996 + (1));
seq__37316_37993 = G__38002;
chunk__37318_37994 = G__38003;
count__37319_37995 = G__38004;
i__37320_37996 = G__38005;
continue;
}
} else {
var temp__5753__auto___38006__$1 = cljs.core.seq(seq__37316_37993);
if(temp__5753__auto___38006__$1){
var seq__37316_38007__$1 = temp__5753__auto___38006__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37316_38007__$1)){
var c__4638__auto___38008 = cljs.core.chunk_first(seq__37316_38007__$1);
var G__38009 = cljs.core.chunk_rest(seq__37316_38007__$1);
var G__38010 = c__4638__auto___38008;
var G__38011 = cljs.core.count(c__4638__auto___38008);
var G__38012 = (0);
seq__37316_37993 = G__38009;
chunk__37318_37994 = G__38010;
count__37319_37995 = G__38011;
i__37320_37996 = G__38012;
continue;
} else {
var child_38013 = cljs.core.first(seq__37316_38007__$1);
if(cljs.core.truth_(child_38013)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38013);


var G__38014 = cljs.core.next(seq__37316_38007__$1);
var G__38015 = null;
var G__38016 = (0);
var G__38017 = (0);
seq__37316_37993 = G__38014;
chunk__37318_37994 = G__38015;
count__37319_37995 = G__38016;
i__37320_37996 = G__38017;
continue;
} else {
var G__38018 = cljs.core.next(seq__37316_38007__$1);
var G__38019 = null;
var G__38020 = (0);
var G__38021 = (0);
seq__37316_37993 = G__38018;
chunk__37318_37994 = G__38019;
count__37319_37995 = G__38020;
i__37320_37996 = G__38021;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37992);
}


var G__38022 = cljs.core.next(seq__37244_37985__$1);
var G__38023 = null;
var G__38024 = (0);
var G__38025 = (0);
seq__37244_37945 = G__38022;
chunk__37245_37946 = G__38023;
count__37246_37947 = G__38024;
i__37247_37948 = G__38025;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37373 = cljs.core.seq(node);
var chunk__37374 = null;
var count__37375 = (0);
var i__37376 = (0);
while(true){
if((i__37376 < count__37375)){
var n = chunk__37374.cljs$core$IIndexed$_nth$arity$2(null,i__37376);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38026 = seq__37373;
var G__38027 = chunk__37374;
var G__38028 = count__37375;
var G__38029 = (i__37376 + (1));
seq__37373 = G__38026;
chunk__37374 = G__38027;
count__37375 = G__38028;
i__37376 = G__38029;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37373);
if(temp__5753__auto__){
var seq__37373__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37373__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37373__$1);
var G__38030 = cljs.core.chunk_rest(seq__37373__$1);
var G__38031 = c__4638__auto__;
var G__38032 = cljs.core.count(c__4638__auto__);
var G__38033 = (0);
seq__37373 = G__38030;
chunk__37374 = G__38031;
count__37375 = G__38032;
i__37376 = G__38033;
continue;
} else {
var n = cljs.core.first(seq__37373__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38034 = cljs.core.next(seq__37373__$1);
var G__38035 = null;
var G__38036 = (0);
var G__38037 = (0);
seq__37373 = G__38034;
chunk__37374 = G__38035;
count__37375 = G__38036;
i__37376 = G__38037;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37388 = arguments.length;
switch (G__37388) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37394 = arguments.length;
switch (G__37394) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37402 = arguments.length;
switch (G__37402) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38043 = arguments.length;
var i__4819__auto___38044 = (0);
while(true){
if((i__4819__auto___38044 < len__4818__auto___38043)){
args__4824__auto__.push((arguments[i__4819__auto___38044]));

var G__38045 = (i__4819__auto___38044 + (1));
i__4819__auto___38044 = G__38045;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37436_38046 = cljs.core.seq(nodes);
var chunk__37438_38047 = null;
var count__37439_38048 = (0);
var i__37440_38049 = (0);
while(true){
if((i__37440_38049 < count__37439_38048)){
var node_38050 = chunk__37438_38047.cljs$core$IIndexed$_nth$arity$2(null,i__37440_38049);
fragment.appendChild(shadow.dom._to_dom(node_38050));


var G__38051 = seq__37436_38046;
var G__38052 = chunk__37438_38047;
var G__38053 = count__37439_38048;
var G__38054 = (i__37440_38049 + (1));
seq__37436_38046 = G__38051;
chunk__37438_38047 = G__38052;
count__37439_38048 = G__38053;
i__37440_38049 = G__38054;
continue;
} else {
var temp__5753__auto___38055 = cljs.core.seq(seq__37436_38046);
if(temp__5753__auto___38055){
var seq__37436_38056__$1 = temp__5753__auto___38055;
if(cljs.core.chunked_seq_QMARK_(seq__37436_38056__$1)){
var c__4638__auto___38057 = cljs.core.chunk_first(seq__37436_38056__$1);
var G__38058 = cljs.core.chunk_rest(seq__37436_38056__$1);
var G__38059 = c__4638__auto___38057;
var G__38060 = cljs.core.count(c__4638__auto___38057);
var G__38061 = (0);
seq__37436_38046 = G__38058;
chunk__37438_38047 = G__38059;
count__37439_38048 = G__38060;
i__37440_38049 = G__38061;
continue;
} else {
var node_38062 = cljs.core.first(seq__37436_38056__$1);
fragment.appendChild(shadow.dom._to_dom(node_38062));


var G__38063 = cljs.core.next(seq__37436_38056__$1);
var G__38064 = null;
var G__38065 = (0);
var G__38066 = (0);
seq__37436_38046 = G__38063;
chunk__37438_38047 = G__38064;
count__37439_38048 = G__38065;
i__37440_38049 = G__38066;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37433){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37433));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37443_38067 = cljs.core.seq(scripts);
var chunk__37444_38068 = null;
var count__37445_38069 = (0);
var i__37446_38070 = (0);
while(true){
if((i__37446_38070 < count__37445_38069)){
var vec__37455_38071 = chunk__37444_38068.cljs$core$IIndexed$_nth$arity$2(null,i__37446_38070);
var script_tag_38072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37455_38071,(0),null);
var script_body_38073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37455_38071,(1),null);
eval(script_body_38073);


var G__38074 = seq__37443_38067;
var G__38075 = chunk__37444_38068;
var G__38076 = count__37445_38069;
var G__38077 = (i__37446_38070 + (1));
seq__37443_38067 = G__38074;
chunk__37444_38068 = G__38075;
count__37445_38069 = G__38076;
i__37446_38070 = G__38077;
continue;
} else {
var temp__5753__auto___38078 = cljs.core.seq(seq__37443_38067);
if(temp__5753__auto___38078){
var seq__37443_38079__$1 = temp__5753__auto___38078;
if(cljs.core.chunked_seq_QMARK_(seq__37443_38079__$1)){
var c__4638__auto___38080 = cljs.core.chunk_first(seq__37443_38079__$1);
var G__38081 = cljs.core.chunk_rest(seq__37443_38079__$1);
var G__38082 = c__4638__auto___38080;
var G__38083 = cljs.core.count(c__4638__auto___38080);
var G__38084 = (0);
seq__37443_38067 = G__38081;
chunk__37444_38068 = G__38082;
count__37445_38069 = G__38083;
i__37446_38070 = G__38084;
continue;
} else {
var vec__37459_38085 = cljs.core.first(seq__37443_38079__$1);
var script_tag_38086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37459_38085,(0),null);
var script_body_38087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37459_38085,(1),null);
eval(script_body_38087);


var G__38088 = cljs.core.next(seq__37443_38079__$1);
var G__38089 = null;
var G__38090 = (0);
var G__38091 = (0);
seq__37443_38067 = G__38088;
chunk__37444_38068 = G__38089;
count__37445_38069 = G__38090;
i__37446_38070 = G__38091;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37462){
var vec__37463 = p__37462;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37463,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37463,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37478 = arguments.length;
switch (G__37478) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37491 = cljs.core.seq(style_keys);
var chunk__37492 = null;
var count__37493 = (0);
var i__37494 = (0);
while(true){
if((i__37494 < count__37493)){
var it = chunk__37492.cljs$core$IIndexed$_nth$arity$2(null,i__37494);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38097 = seq__37491;
var G__38098 = chunk__37492;
var G__38099 = count__37493;
var G__38100 = (i__37494 + (1));
seq__37491 = G__38097;
chunk__37492 = G__38098;
count__37493 = G__38099;
i__37494 = G__38100;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37491);
if(temp__5753__auto__){
var seq__37491__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37491__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37491__$1);
var G__38101 = cljs.core.chunk_rest(seq__37491__$1);
var G__38102 = c__4638__auto__;
var G__38103 = cljs.core.count(c__4638__auto__);
var G__38104 = (0);
seq__37491 = G__38101;
chunk__37492 = G__38102;
count__37493 = G__38103;
i__37494 = G__38104;
continue;
} else {
var it = cljs.core.first(seq__37491__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38105 = cljs.core.next(seq__37491__$1);
var G__38106 = null;
var G__38107 = (0);
var G__38108 = (0);
seq__37491 = G__38105;
chunk__37492 = G__38106;
count__37493 = G__38107;
i__37494 = G__38108;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k37512,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__37523 = k37512;
var G__37523__$1 = (((G__37523 instanceof cljs.core.Keyword))?G__37523.fqn:null);
switch (G__37523__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37512,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__37527){
var vec__37528 = p__37527;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37528,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37528,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37511){
var self__ = this;
var G__37511__$1 = this;
return (new cljs.core.RecordIter((0),G__37511__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37513,other37514){
var self__ = this;
var this37513__$1 = this;
return (((!((other37514 == null)))) && ((((this37513__$1.constructor === other37514.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37513__$1.x,other37514.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37513__$1.y,other37514.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37513__$1.__extmap,other37514.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k37512){
var self__ = this;
var this__4468__auto____$1 = this;
var G__37547 = k37512;
var G__37547__$1 = (((G__37547 instanceof cljs.core.Keyword))?G__37547.fqn:null);
switch (G__37547__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37512);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__37511){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__37548 = cljs.core.keyword_identical_QMARK_;
var expr__37549 = k__4470__auto__;
if(cljs.core.truth_((pred__37548.cljs$core$IFn$_invoke$arity$2 ? pred__37548.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37549) : pred__37548.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37549)))){
return (new shadow.dom.Coordinate(G__37511,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37548.cljs$core$IFn$_invoke$arity$2 ? pred__37548.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37549) : pred__37548.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37549)))){
return (new shadow.dom.Coordinate(self__.x,G__37511,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__37511),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__37511){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37511,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37519){
var extmap__4501__auto__ = (function (){var G__37555 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37519,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37519)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37555);
} else {
return G__37555;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37519),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37519),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k37570,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__37580 = k37570;
var G__37580__$1 = (((G__37580 instanceof cljs.core.Keyword))?G__37580.fqn:null);
switch (G__37580__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37570,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__37581){
var vec__37582 = p__37581;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37582,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37582,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37569){
var self__ = this;
var G__37569__$1 = this;
return (new cljs.core.RecordIter((0),G__37569__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37571,other37572){
var self__ = this;
var this37571__$1 = this;
return (((!((other37572 == null)))) && ((((this37571__$1.constructor === other37572.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37571__$1.w,other37572.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37571__$1.h,other37572.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37571__$1.__extmap,other37572.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k37570){
var self__ = this;
var this__4468__auto____$1 = this;
var G__37640 = k37570;
var G__37640__$1 = (((G__37640 instanceof cljs.core.Keyword))?G__37640.fqn:null);
switch (G__37640__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37570);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__37569){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__37654 = cljs.core.keyword_identical_QMARK_;
var expr__37655 = k__4470__auto__;
if(cljs.core.truth_((pred__37654.cljs$core$IFn$_invoke$arity$2 ? pred__37654.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37655) : pred__37654.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37655)))){
return (new shadow.dom.Size(G__37569,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37654.cljs$core$IFn$_invoke$arity$2 ? pred__37654.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37655) : pred__37654.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37655)))){
return (new shadow.dom.Size(self__.w,G__37569,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__37569),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__37569){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37569,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37575){
var extmap__4501__auto__ = (function (){var G__37695 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37575,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37575)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37695);
} else {
return G__37695;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37575),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37575),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__38154 = (i + (1));
var G__38155 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38154;
ret = G__38155;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37726){
var vec__37727 = p__37726;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37727,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37731 = arguments.length;
switch (G__37731) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38163 = ps;
var G__38164 = (i + (1));
el__$1 = G__38163;
i = G__38164;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37743 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37743,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37743,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37743,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37746_38167 = cljs.core.seq(props);
var chunk__37747_38168 = null;
var count__37748_38169 = (0);
var i__37749_38170 = (0);
while(true){
if((i__37749_38170 < count__37748_38169)){
var vec__37756_38172 = chunk__37747_38168.cljs$core$IIndexed$_nth$arity$2(null,i__37749_38170);
var k_38173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756_38172,(0),null);
var v_38174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756_38172,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_38173);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38173),v_38174);


var G__38181 = seq__37746_38167;
var G__38182 = chunk__37747_38168;
var G__38183 = count__37748_38169;
var G__38184 = (i__37749_38170 + (1));
seq__37746_38167 = G__38181;
chunk__37747_38168 = G__38182;
count__37748_38169 = G__38183;
i__37749_38170 = G__38184;
continue;
} else {
var temp__5753__auto___38185 = cljs.core.seq(seq__37746_38167);
if(temp__5753__auto___38185){
var seq__37746_38186__$1 = temp__5753__auto___38185;
if(cljs.core.chunked_seq_QMARK_(seq__37746_38186__$1)){
var c__4638__auto___38187 = cljs.core.chunk_first(seq__37746_38186__$1);
var G__38188 = cljs.core.chunk_rest(seq__37746_38186__$1);
var G__38189 = c__4638__auto___38187;
var G__38190 = cljs.core.count(c__4638__auto___38187);
var G__38191 = (0);
seq__37746_38167 = G__38188;
chunk__37747_38168 = G__38189;
count__37748_38169 = G__38190;
i__37749_38170 = G__38191;
continue;
} else {
var vec__37761_38192 = cljs.core.first(seq__37746_38186__$1);
var k_38193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761_38192,(0),null);
var v_38194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761_38192,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_38193);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38193),v_38194);


var G__38196 = cljs.core.next(seq__37746_38186__$1);
var G__38197 = null;
var G__38198 = (0);
var G__38199 = (0);
seq__37746_38167 = G__38196;
chunk__37747_38168 = G__38197;
count__37748_38169 = G__38198;
i__37749_38170 = G__38199;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37769 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37769,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37769,(1),null);
var seq__37772_38200 = cljs.core.seq(node_children);
var chunk__37775_38201 = null;
var count__37776_38202 = (0);
var i__37777_38203 = (0);
while(true){
if((i__37777_38203 < count__37776_38202)){
var child_struct_38204 = chunk__37775_38201.cljs$core$IIndexed$_nth$arity$2(null,i__37777_38203);
if((!((child_struct_38204 == null)))){
if(typeof child_struct_38204 === 'string'){
var text_38205 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38205),child_struct_38204].join(''));
} else {
var children_38206 = shadow.dom.svg_node(child_struct_38204);
if(cljs.core.seq_QMARK_(children_38206)){
var seq__37808_38207 = cljs.core.seq(children_38206);
var chunk__37810_38208 = null;
var count__37811_38209 = (0);
var i__37812_38210 = (0);
while(true){
if((i__37812_38210 < count__37811_38209)){
var child_38211 = chunk__37810_38208.cljs$core$IIndexed$_nth$arity$2(null,i__37812_38210);
if(cljs.core.truth_(child_38211)){
node.appendChild(child_38211);


var G__38212 = seq__37808_38207;
var G__38213 = chunk__37810_38208;
var G__38214 = count__37811_38209;
var G__38215 = (i__37812_38210 + (1));
seq__37808_38207 = G__38212;
chunk__37810_38208 = G__38213;
count__37811_38209 = G__38214;
i__37812_38210 = G__38215;
continue;
} else {
var G__38216 = seq__37808_38207;
var G__38217 = chunk__37810_38208;
var G__38218 = count__37811_38209;
var G__38219 = (i__37812_38210 + (1));
seq__37808_38207 = G__38216;
chunk__37810_38208 = G__38217;
count__37811_38209 = G__38218;
i__37812_38210 = G__38219;
continue;
}
} else {
var temp__5753__auto___38220 = cljs.core.seq(seq__37808_38207);
if(temp__5753__auto___38220){
var seq__37808_38221__$1 = temp__5753__auto___38220;
if(cljs.core.chunked_seq_QMARK_(seq__37808_38221__$1)){
var c__4638__auto___38224 = cljs.core.chunk_first(seq__37808_38221__$1);
var G__38225 = cljs.core.chunk_rest(seq__37808_38221__$1);
var G__38226 = c__4638__auto___38224;
var G__38227 = cljs.core.count(c__4638__auto___38224);
var G__38228 = (0);
seq__37808_38207 = G__38225;
chunk__37810_38208 = G__38226;
count__37811_38209 = G__38227;
i__37812_38210 = G__38228;
continue;
} else {
var child_38229 = cljs.core.first(seq__37808_38221__$1);
if(cljs.core.truth_(child_38229)){
node.appendChild(child_38229);


var G__38230 = cljs.core.next(seq__37808_38221__$1);
var G__38231 = null;
var G__38232 = (0);
var G__38233 = (0);
seq__37808_38207 = G__38230;
chunk__37810_38208 = G__38231;
count__37811_38209 = G__38232;
i__37812_38210 = G__38233;
continue;
} else {
var G__38234 = cljs.core.next(seq__37808_38221__$1);
var G__38235 = null;
var G__38236 = (0);
var G__38237 = (0);
seq__37808_38207 = G__38234;
chunk__37810_38208 = G__38235;
count__37811_38209 = G__38236;
i__37812_38210 = G__38237;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38206);
}
}


var G__38238 = seq__37772_38200;
var G__38239 = chunk__37775_38201;
var G__38240 = count__37776_38202;
var G__38241 = (i__37777_38203 + (1));
seq__37772_38200 = G__38238;
chunk__37775_38201 = G__38239;
count__37776_38202 = G__38240;
i__37777_38203 = G__38241;
continue;
} else {
var G__38242 = seq__37772_38200;
var G__38243 = chunk__37775_38201;
var G__38244 = count__37776_38202;
var G__38245 = (i__37777_38203 + (1));
seq__37772_38200 = G__38242;
chunk__37775_38201 = G__38243;
count__37776_38202 = G__38244;
i__37777_38203 = G__38245;
continue;
}
} else {
var temp__5753__auto___38246 = cljs.core.seq(seq__37772_38200);
if(temp__5753__auto___38246){
var seq__37772_38247__$1 = temp__5753__auto___38246;
if(cljs.core.chunked_seq_QMARK_(seq__37772_38247__$1)){
var c__4638__auto___38250 = cljs.core.chunk_first(seq__37772_38247__$1);
var G__38251 = cljs.core.chunk_rest(seq__37772_38247__$1);
var G__38252 = c__4638__auto___38250;
var G__38253 = cljs.core.count(c__4638__auto___38250);
var G__38254 = (0);
seq__37772_38200 = G__38251;
chunk__37775_38201 = G__38252;
count__37776_38202 = G__38253;
i__37777_38203 = G__38254;
continue;
} else {
var child_struct_38255 = cljs.core.first(seq__37772_38247__$1);
if((!((child_struct_38255 == null)))){
if(typeof child_struct_38255 === 'string'){
var text_38256 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38256),child_struct_38255].join(''));
} else {
var children_38257 = shadow.dom.svg_node(child_struct_38255);
if(cljs.core.seq_QMARK_(children_38257)){
var seq__37841_38258 = cljs.core.seq(children_38257);
var chunk__37843_38259 = null;
var count__37844_38260 = (0);
var i__37845_38261 = (0);
while(true){
if((i__37845_38261 < count__37844_38260)){
var child_38262 = chunk__37843_38259.cljs$core$IIndexed$_nth$arity$2(null,i__37845_38261);
if(cljs.core.truth_(child_38262)){
node.appendChild(child_38262);


var G__38263 = seq__37841_38258;
var G__38264 = chunk__37843_38259;
var G__38265 = count__37844_38260;
var G__38266 = (i__37845_38261 + (1));
seq__37841_38258 = G__38263;
chunk__37843_38259 = G__38264;
count__37844_38260 = G__38265;
i__37845_38261 = G__38266;
continue;
} else {
var G__38267 = seq__37841_38258;
var G__38268 = chunk__37843_38259;
var G__38269 = count__37844_38260;
var G__38270 = (i__37845_38261 + (1));
seq__37841_38258 = G__38267;
chunk__37843_38259 = G__38268;
count__37844_38260 = G__38269;
i__37845_38261 = G__38270;
continue;
}
} else {
var temp__5753__auto___38271__$1 = cljs.core.seq(seq__37841_38258);
if(temp__5753__auto___38271__$1){
var seq__37841_38272__$1 = temp__5753__auto___38271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37841_38272__$1)){
var c__4638__auto___38273 = cljs.core.chunk_first(seq__37841_38272__$1);
var G__38274 = cljs.core.chunk_rest(seq__37841_38272__$1);
var G__38275 = c__4638__auto___38273;
var G__38276 = cljs.core.count(c__4638__auto___38273);
var G__38277 = (0);
seq__37841_38258 = G__38274;
chunk__37843_38259 = G__38275;
count__37844_38260 = G__38276;
i__37845_38261 = G__38277;
continue;
} else {
var child_38278 = cljs.core.first(seq__37841_38272__$1);
if(cljs.core.truth_(child_38278)){
node.appendChild(child_38278);


var G__38279 = cljs.core.next(seq__37841_38272__$1);
var G__38280 = null;
var G__38281 = (0);
var G__38282 = (0);
seq__37841_38258 = G__38279;
chunk__37843_38259 = G__38280;
count__37844_38260 = G__38281;
i__37845_38261 = G__38282;
continue;
} else {
var G__38283 = cljs.core.next(seq__37841_38272__$1);
var G__38284 = null;
var G__38285 = (0);
var G__38286 = (0);
seq__37841_38258 = G__38283;
chunk__37843_38259 = G__38284;
count__37844_38260 = G__38285;
i__37845_38261 = G__38286;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38257);
}
}


var G__38287 = cljs.core.next(seq__37772_38247__$1);
var G__38288 = null;
var G__38289 = (0);
var G__38290 = (0);
seq__37772_38200 = G__38287;
chunk__37775_38201 = G__38288;
count__37776_38202 = G__38289;
i__37777_38203 = G__38290;
continue;
} else {
var G__38291 = cljs.core.next(seq__37772_38247__$1);
var G__38292 = null;
var G__38293 = (0);
var G__38294 = (0);
seq__37772_38200 = G__38291;
chunk__37775_38201 = G__38292;
count__37776_38202 = G__38293;
i__37777_38203 = G__38294;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38299 = arguments.length;
var i__4819__auto___38300 = (0);
while(true){
if((i__4819__auto___38300 < len__4818__auto___38299)){
args__4824__auto__.push((arguments[i__4819__auto___38300]));

var G__38301 = (i__4819__auto___38300 + (1));
i__4819__auto___38300 = G__38301;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37849){
var G__37850 = cljs.core.first(seq37849);
var seq37849__$1 = cljs.core.next(seq37849);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37850,seq37849__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37852 = arguments.length;
switch (G__37852) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__33245__auto___38305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_37857){
var state_val_37858 = (state_37857[(1)]);
if((state_val_37858 === (1))){
var state_37857__$1 = state_37857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37857__$1,(2),once_or_cleanup);
} else {
if((state_val_37858 === (2))){
var inst_37854 = (state_37857[(2)]);
var inst_37855 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37857__$1 = (function (){var statearr_37859 = state_37857;
(statearr_37859[(7)] = inst_37854);

return statearr_37859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37857__$1,inst_37855);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33004__auto__ = null;
var shadow$dom$state_machine__33004__auto____0 = (function (){
var statearr_37860 = [null,null,null,null,null,null,null,null];
(statearr_37860[(0)] = shadow$dom$state_machine__33004__auto__);

(statearr_37860[(1)] = (1));

return statearr_37860;
});
var shadow$dom$state_machine__33004__auto____1 = (function (state_37857){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_37857);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e37874){var ex__33007__auto__ = e37874;
var statearr_37875_38307 = state_37857;
(statearr_37875_38307[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_37857[(4)]))){
var statearr_37876_38308 = state_37857;
(statearr_37876_38308[(1)] = cljs.core.first((state_37857[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38309 = state_37857;
state_37857 = G__38309;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
shadow$dom$state_machine__33004__auto__ = function(state_37857){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33004__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33004__auto____1.call(this,state_37857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33004__auto____0;
shadow$dom$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33004__auto____1;
return shadow$dom$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_37878 = f__33246__auto__();
(statearr_37878[(6)] = c__33245__auto___38305);

return statearr_37878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
