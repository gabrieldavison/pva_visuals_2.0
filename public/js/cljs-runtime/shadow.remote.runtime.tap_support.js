goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__39430,p__39431){
var map__39432 = p__39430;
var map__39432__$1 = cljs.core.__destructure_map(map__39432);
var svc = map__39432__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39432__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39432__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39432__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39436 = p__39431;
var map__39436__$1 = cljs.core.__destructure_map(map__39436);
var msg = map__39436__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39436__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39436__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39436__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39436__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__39441,p__39442){
var map__39446 = p__39441;
var map__39446__$1 = cljs.core.__destructure_map(map__39446);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39446__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__39448 = p__39442;
var map__39448__$1 = cljs.core.__destructure_map(map__39448);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39448__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39450,p__39451){
var map__39455 = p__39450;
var map__39455__$1 = cljs.core.__destructure_map(map__39455);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39455__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39455__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39456 = p__39451;
var map__39456__$1 = cljs.core.__destructure_map(map__39456);
var msg = map__39456__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39456__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39459,tid){
var map__39460 = p__39459;
var map__39460__$1 = cljs.core.__destructure_map(map__39460);
var svc = map__39460__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39460__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39467 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39468 = null;
var count__39469 = (0);
var i__39470 = (0);
while(true){
if((i__39470 < count__39469)){
var vec__39478 = chunk__39468.cljs$core$IIndexed$_nth$arity$2(null,i__39470);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39478,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39478,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39486 = seq__39467;
var G__39487 = chunk__39468;
var G__39488 = count__39469;
var G__39489 = (i__39470 + (1));
seq__39467 = G__39486;
chunk__39468 = G__39487;
count__39469 = G__39488;
i__39470 = G__39489;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39467);
if(temp__5753__auto__){
var seq__39467__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39467__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39467__$1);
var G__39490 = cljs.core.chunk_rest(seq__39467__$1);
var G__39491 = c__4638__auto__;
var G__39492 = cljs.core.count(c__4638__auto__);
var G__39493 = (0);
seq__39467 = G__39490;
chunk__39468 = G__39491;
count__39469 = G__39492;
i__39470 = G__39493;
continue;
} else {
var vec__39481 = cljs.core.first(seq__39467__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39481,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39481,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39494 = cljs.core.next(seq__39467__$1);
var G__39495 = null;
var G__39496 = (0);
var G__39497 = (0);
seq__39467 = G__39494;
chunk__39468 = G__39495;
count__39469 = G__39496;
i__39470 = G__39497;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39461_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39461_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39462_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39462_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39463_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39463_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39464_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39464_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39484){
var map__39485 = p__39484;
var map__39485__$1 = cljs.core.__destructure_map(map__39485);
var svc = map__39485__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39485__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39485__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
