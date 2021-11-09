goog.provide('hclj.kb');
hclj.kb.kb = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["0",(function (){
return console.log((0));
}),"1",(function (){
return console.log((1));
})], null));
hclj.kb.set_k = (function hclj$kb$set_k(k,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hclj.kb.kb,cljs.core.assoc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),f);
});
hclj.kb.setup_kb = (function hclj$kb$setup_kb(){
return document.addEventListener("keypress",(function (e){
var k = e.key;
var kf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hclj.kb.kb),k);
if(cljs.core.truth_(kf)){
return (kf.cljs$core$IFn$_invoke$arity$0 ? kf.cljs$core$IFn$_invoke$arity$0() : kf.call(null));
} else {
return null;
}
}));
});

//# sourceMappingURL=hclj.kb.js.map
