goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39794 = arguments.length;
var i__4819__auto___39795 = (0);
while(true){
if((i__4819__auto___39795 < len__4818__auto___39794)){
args__4824__auto__.push((arguments[i__4819__auto___39795]));

var G__39796 = (i__4819__auto___39795 + (1));
i__4819__auto___39795 = G__39796;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39670){
var G__39671 = cljs.core.first(seq39670);
var seq39670__$1 = cljs.core.next(seq39670);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39671,seq39670__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39674 = cljs.core.seq(sources);
var chunk__39675 = null;
var count__39676 = (0);
var i__39677 = (0);
while(true){
if((i__39677 < count__39676)){
var map__39682 = chunk__39675.cljs$core$IIndexed$_nth$arity$2(null,i__39677);
var map__39682__$1 = cljs.core.__destructure_map(map__39682);
var src = map__39682__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39682__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39682__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39682__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39682__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39683){var e_39797 = e39683;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39797);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39797.message)].join('')));
}

var G__39798 = seq__39674;
var G__39799 = chunk__39675;
var G__39800 = count__39676;
var G__39801 = (i__39677 + (1));
seq__39674 = G__39798;
chunk__39675 = G__39799;
count__39676 = G__39800;
i__39677 = G__39801;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39674);
if(temp__5753__auto__){
var seq__39674__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39674__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39674__$1);
var G__39802 = cljs.core.chunk_rest(seq__39674__$1);
var G__39803 = c__4638__auto__;
var G__39804 = cljs.core.count(c__4638__auto__);
var G__39805 = (0);
seq__39674 = G__39802;
chunk__39675 = G__39803;
count__39676 = G__39804;
i__39677 = G__39805;
continue;
} else {
var map__39684 = cljs.core.first(seq__39674__$1);
var map__39684__$1 = cljs.core.__destructure_map(map__39684);
var src = map__39684__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39685){var e_39806 = e39685;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39806);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39806.message)].join('')));
}

var G__39807 = cljs.core.next(seq__39674__$1);
var G__39808 = null;
var G__39809 = (0);
var G__39810 = (0);
seq__39674 = G__39807;
chunk__39675 = G__39808;
count__39676 = G__39809;
i__39677 = G__39810;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39686 = cljs.core.seq(js_requires);
var chunk__39687 = null;
var count__39688 = (0);
var i__39689 = (0);
while(true){
if((i__39689 < count__39688)){
var js_ns = chunk__39687.cljs$core$IIndexed$_nth$arity$2(null,i__39689);
var require_str_39811 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39811);


var G__39812 = seq__39686;
var G__39813 = chunk__39687;
var G__39814 = count__39688;
var G__39815 = (i__39689 + (1));
seq__39686 = G__39812;
chunk__39687 = G__39813;
count__39688 = G__39814;
i__39689 = G__39815;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39686);
if(temp__5753__auto__){
var seq__39686__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39686__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39686__$1);
var G__39816 = cljs.core.chunk_rest(seq__39686__$1);
var G__39817 = c__4638__auto__;
var G__39818 = cljs.core.count(c__4638__auto__);
var G__39819 = (0);
seq__39686 = G__39816;
chunk__39687 = G__39817;
count__39688 = G__39818;
i__39689 = G__39819;
continue;
} else {
var js_ns = cljs.core.first(seq__39686__$1);
var require_str_39820 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39820);


var G__39821 = cljs.core.next(seq__39686__$1);
var G__39822 = null;
var G__39823 = (0);
var G__39824 = (0);
seq__39686 = G__39821;
chunk__39687 = G__39822;
count__39688 = G__39823;
i__39689 = G__39824;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39691){
var map__39692 = p__39691;
var map__39692__$1 = cljs.core.__destructure_map(map__39692);
var msg = map__39692__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39692__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39692__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39693(s__39694){
return (new cljs.core.LazySeq(null,(function (){
var s__39694__$1 = s__39694;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39694__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__39699 = cljs.core.first(xs__6308__auto__);
var map__39699__$1 = cljs.core.__destructure_map(map__39699);
var src = map__39699__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39699__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39699__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__39694__$1,map__39699,map__39699__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39692,map__39692__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39693_$_iter__39695(s__39696){
return (new cljs.core.LazySeq(null,((function (s__39694__$1,map__39699,map__39699__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39692,map__39692__$1,msg,info,reload_info){
return (function (){
var s__39696__$1 = s__39696;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__39696__$1);
if(temp__5753__auto____$1){
var s__39696__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39696__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__39696__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39698 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39697 = (0);
while(true){
if((i__39697 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__39697);
cljs.core.chunk_append(b__39698,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39825 = (i__39697 + (1));
i__39697 = G__39825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39698),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39693_$_iter__39695(cljs.core.chunk_rest(s__39696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39698),null);
}
} else {
var warning = cljs.core.first(s__39696__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39693_$_iter__39695(cljs.core.rest(s__39696__$2)));
}
} else {
return null;
}
break;
}
});})(s__39694__$1,map__39699,map__39699__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39692,map__39692__$1,msg,info,reload_info))
,null,null));
});})(s__39694__$1,map__39699,map__39699__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__39692,map__39692__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39693(cljs.core.rest(s__39694__$1)));
} else {
var G__39826 = cljs.core.rest(s__39694__$1);
s__39694__$1 = G__39826;
continue;
}
} else {
var G__39827 = cljs.core.rest(s__39694__$1);
s__39694__$1 = G__39827;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39700_39828 = cljs.core.seq(warnings);
var chunk__39701_39829 = null;
var count__39702_39830 = (0);
var i__39703_39831 = (0);
while(true){
if((i__39703_39831 < count__39702_39830)){
var map__39706_39832 = chunk__39701_39829.cljs$core$IIndexed$_nth$arity$2(null,i__39703_39831);
var map__39706_39833__$1 = cljs.core.__destructure_map(map__39706_39832);
var w_39834 = map__39706_39833__$1;
var msg_39835__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39706_39833__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39706_39833__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39706_39833__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39706_39833__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39838)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39836),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39837),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39835__$1)].join(''));


var G__39839 = seq__39700_39828;
var G__39840 = chunk__39701_39829;
var G__39841 = count__39702_39830;
var G__39842 = (i__39703_39831 + (1));
seq__39700_39828 = G__39839;
chunk__39701_39829 = G__39840;
count__39702_39830 = G__39841;
i__39703_39831 = G__39842;
continue;
} else {
var temp__5753__auto___39843 = cljs.core.seq(seq__39700_39828);
if(temp__5753__auto___39843){
var seq__39700_39844__$1 = temp__5753__auto___39843;
if(cljs.core.chunked_seq_QMARK_(seq__39700_39844__$1)){
var c__4638__auto___39845 = cljs.core.chunk_first(seq__39700_39844__$1);
var G__39846 = cljs.core.chunk_rest(seq__39700_39844__$1);
var G__39847 = c__4638__auto___39845;
var G__39848 = cljs.core.count(c__4638__auto___39845);
var G__39849 = (0);
seq__39700_39828 = G__39846;
chunk__39701_39829 = G__39847;
count__39702_39830 = G__39848;
i__39703_39831 = G__39849;
continue;
} else {
var map__39707_39850 = cljs.core.first(seq__39700_39844__$1);
var map__39707_39851__$1 = cljs.core.__destructure_map(map__39707_39850);
var w_39852 = map__39707_39851__$1;
var msg_39853__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39707_39851__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39707_39851__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39707_39851__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39707_39851__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39856)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39854),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39855),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39853__$1)].join(''));


var G__39857 = cljs.core.next(seq__39700_39844__$1);
var G__39858 = null;
var G__39859 = (0);
var G__39860 = (0);
seq__39700_39828 = G__39857;
chunk__39701_39829 = G__39858;
count__39702_39830 = G__39859;
i__39703_39831 = G__39860;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39690_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39690_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39708){
var map__39709 = p__39708;
var map__39709__$1 = cljs.core.__destructure_map(map__39709);
var msg = map__39709__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39709__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39710 = cljs.core.seq(updates);
var chunk__39712 = null;
var count__39713 = (0);
var i__39714 = (0);
while(true){
if((i__39714 < count__39713)){
var path = chunk__39712.cljs$core$IIndexed$_nth$arity$2(null,i__39714);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39744_39861 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39748_39862 = null;
var count__39749_39863 = (0);
var i__39750_39864 = (0);
while(true){
if((i__39750_39864 < count__39749_39863)){
var node_39865 = chunk__39748_39862.cljs$core$IIndexed$_nth$arity$2(null,i__39750_39864);
if(cljs.core.not(node_39865.shadow$old)){
var path_match_39866 = shadow.cljs.devtools.client.browser.match_paths(node_39865.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39866)){
var new_link_39867 = (function (){var G__39756 = node_39865.cloneNode(true);
G__39756.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39866),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39756;
})();
(node_39865.shadow$old = true);

(new_link_39867.onload = ((function (seq__39744_39861,chunk__39748_39862,count__39749_39863,i__39750_39864,seq__39710,chunk__39712,count__39713,i__39714,new_link_39867,path_match_39866,node_39865,path,map__39709,map__39709__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39865);
});})(seq__39744_39861,chunk__39748_39862,count__39749_39863,i__39750_39864,seq__39710,chunk__39712,count__39713,i__39714,new_link_39867,path_match_39866,node_39865,path,map__39709,map__39709__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39866], 0));

goog.dom.insertSiblingAfter(new_link_39867,node_39865);


var G__39868 = seq__39744_39861;
var G__39869 = chunk__39748_39862;
var G__39870 = count__39749_39863;
var G__39871 = (i__39750_39864 + (1));
seq__39744_39861 = G__39868;
chunk__39748_39862 = G__39869;
count__39749_39863 = G__39870;
i__39750_39864 = G__39871;
continue;
} else {
var G__39872 = seq__39744_39861;
var G__39873 = chunk__39748_39862;
var G__39874 = count__39749_39863;
var G__39875 = (i__39750_39864 + (1));
seq__39744_39861 = G__39872;
chunk__39748_39862 = G__39873;
count__39749_39863 = G__39874;
i__39750_39864 = G__39875;
continue;
}
} else {
var G__39876 = seq__39744_39861;
var G__39877 = chunk__39748_39862;
var G__39878 = count__39749_39863;
var G__39879 = (i__39750_39864 + (1));
seq__39744_39861 = G__39876;
chunk__39748_39862 = G__39877;
count__39749_39863 = G__39878;
i__39750_39864 = G__39879;
continue;
}
} else {
var temp__5753__auto___39880 = cljs.core.seq(seq__39744_39861);
if(temp__5753__auto___39880){
var seq__39744_39881__$1 = temp__5753__auto___39880;
if(cljs.core.chunked_seq_QMARK_(seq__39744_39881__$1)){
var c__4638__auto___39882 = cljs.core.chunk_first(seq__39744_39881__$1);
var G__39883 = cljs.core.chunk_rest(seq__39744_39881__$1);
var G__39884 = c__4638__auto___39882;
var G__39885 = cljs.core.count(c__4638__auto___39882);
var G__39886 = (0);
seq__39744_39861 = G__39883;
chunk__39748_39862 = G__39884;
count__39749_39863 = G__39885;
i__39750_39864 = G__39886;
continue;
} else {
var node_39887 = cljs.core.first(seq__39744_39881__$1);
if(cljs.core.not(node_39887.shadow$old)){
var path_match_39888 = shadow.cljs.devtools.client.browser.match_paths(node_39887.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39888)){
var new_link_39889 = (function (){var G__39757 = node_39887.cloneNode(true);
G__39757.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39888),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39757;
})();
(node_39887.shadow$old = true);

(new_link_39889.onload = ((function (seq__39744_39861,chunk__39748_39862,count__39749_39863,i__39750_39864,seq__39710,chunk__39712,count__39713,i__39714,new_link_39889,path_match_39888,node_39887,seq__39744_39881__$1,temp__5753__auto___39880,path,map__39709,map__39709__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39887);
});})(seq__39744_39861,chunk__39748_39862,count__39749_39863,i__39750_39864,seq__39710,chunk__39712,count__39713,i__39714,new_link_39889,path_match_39888,node_39887,seq__39744_39881__$1,temp__5753__auto___39880,path,map__39709,map__39709__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39888], 0));

goog.dom.insertSiblingAfter(new_link_39889,node_39887);


var G__39890 = cljs.core.next(seq__39744_39881__$1);
var G__39891 = null;
var G__39892 = (0);
var G__39893 = (0);
seq__39744_39861 = G__39890;
chunk__39748_39862 = G__39891;
count__39749_39863 = G__39892;
i__39750_39864 = G__39893;
continue;
} else {
var G__39894 = cljs.core.next(seq__39744_39881__$1);
var G__39895 = null;
var G__39896 = (0);
var G__39897 = (0);
seq__39744_39861 = G__39894;
chunk__39748_39862 = G__39895;
count__39749_39863 = G__39896;
i__39750_39864 = G__39897;
continue;
}
} else {
var G__39898 = cljs.core.next(seq__39744_39881__$1);
var G__39899 = null;
var G__39900 = (0);
var G__39901 = (0);
seq__39744_39861 = G__39898;
chunk__39748_39862 = G__39899;
count__39749_39863 = G__39900;
i__39750_39864 = G__39901;
continue;
}
}
} else {
}
}
break;
}


var G__39902 = seq__39710;
var G__39903 = chunk__39712;
var G__39904 = count__39713;
var G__39905 = (i__39714 + (1));
seq__39710 = G__39902;
chunk__39712 = G__39903;
count__39713 = G__39904;
i__39714 = G__39905;
continue;
} else {
var G__39906 = seq__39710;
var G__39907 = chunk__39712;
var G__39908 = count__39713;
var G__39909 = (i__39714 + (1));
seq__39710 = G__39906;
chunk__39712 = G__39907;
count__39713 = G__39908;
i__39714 = G__39909;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39710);
if(temp__5753__auto__){
var seq__39710__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39710__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39710__$1);
var G__39910 = cljs.core.chunk_rest(seq__39710__$1);
var G__39911 = c__4638__auto__;
var G__39912 = cljs.core.count(c__4638__auto__);
var G__39913 = (0);
seq__39710 = G__39910;
chunk__39712 = G__39911;
count__39713 = G__39912;
i__39714 = G__39913;
continue;
} else {
var path = cljs.core.first(seq__39710__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39758_39914 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39762_39915 = null;
var count__39763_39916 = (0);
var i__39764_39917 = (0);
while(true){
if((i__39764_39917 < count__39763_39916)){
var node_39918 = chunk__39762_39915.cljs$core$IIndexed$_nth$arity$2(null,i__39764_39917);
if(cljs.core.not(node_39918.shadow$old)){
var path_match_39919 = shadow.cljs.devtools.client.browser.match_paths(node_39918.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39919)){
var new_link_39920 = (function (){var G__39770 = node_39918.cloneNode(true);
G__39770.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39919),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39770;
})();
(node_39918.shadow$old = true);

(new_link_39920.onload = ((function (seq__39758_39914,chunk__39762_39915,count__39763_39916,i__39764_39917,seq__39710,chunk__39712,count__39713,i__39714,new_link_39920,path_match_39919,node_39918,path,seq__39710__$1,temp__5753__auto__,map__39709,map__39709__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39918);
});})(seq__39758_39914,chunk__39762_39915,count__39763_39916,i__39764_39917,seq__39710,chunk__39712,count__39713,i__39714,new_link_39920,path_match_39919,node_39918,path,seq__39710__$1,temp__5753__auto__,map__39709,map__39709__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39919], 0));

goog.dom.insertSiblingAfter(new_link_39920,node_39918);


var G__39921 = seq__39758_39914;
var G__39922 = chunk__39762_39915;
var G__39923 = count__39763_39916;
var G__39924 = (i__39764_39917 + (1));
seq__39758_39914 = G__39921;
chunk__39762_39915 = G__39922;
count__39763_39916 = G__39923;
i__39764_39917 = G__39924;
continue;
} else {
var G__39925 = seq__39758_39914;
var G__39926 = chunk__39762_39915;
var G__39927 = count__39763_39916;
var G__39928 = (i__39764_39917 + (1));
seq__39758_39914 = G__39925;
chunk__39762_39915 = G__39926;
count__39763_39916 = G__39927;
i__39764_39917 = G__39928;
continue;
}
} else {
var G__39929 = seq__39758_39914;
var G__39930 = chunk__39762_39915;
var G__39931 = count__39763_39916;
var G__39932 = (i__39764_39917 + (1));
seq__39758_39914 = G__39929;
chunk__39762_39915 = G__39930;
count__39763_39916 = G__39931;
i__39764_39917 = G__39932;
continue;
}
} else {
var temp__5753__auto___39933__$1 = cljs.core.seq(seq__39758_39914);
if(temp__5753__auto___39933__$1){
var seq__39758_39934__$1 = temp__5753__auto___39933__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39758_39934__$1)){
var c__4638__auto___39935 = cljs.core.chunk_first(seq__39758_39934__$1);
var G__39936 = cljs.core.chunk_rest(seq__39758_39934__$1);
var G__39937 = c__4638__auto___39935;
var G__39938 = cljs.core.count(c__4638__auto___39935);
var G__39939 = (0);
seq__39758_39914 = G__39936;
chunk__39762_39915 = G__39937;
count__39763_39916 = G__39938;
i__39764_39917 = G__39939;
continue;
} else {
var node_39940 = cljs.core.first(seq__39758_39934__$1);
if(cljs.core.not(node_39940.shadow$old)){
var path_match_39941 = shadow.cljs.devtools.client.browser.match_paths(node_39940.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39941)){
var new_link_39942 = (function (){var G__39771 = node_39940.cloneNode(true);
G__39771.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39941),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39771;
})();
(node_39940.shadow$old = true);

(new_link_39942.onload = ((function (seq__39758_39914,chunk__39762_39915,count__39763_39916,i__39764_39917,seq__39710,chunk__39712,count__39713,i__39714,new_link_39942,path_match_39941,node_39940,seq__39758_39934__$1,temp__5753__auto___39933__$1,path,seq__39710__$1,temp__5753__auto__,map__39709,map__39709__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39940);
});})(seq__39758_39914,chunk__39762_39915,count__39763_39916,i__39764_39917,seq__39710,chunk__39712,count__39713,i__39714,new_link_39942,path_match_39941,node_39940,seq__39758_39934__$1,temp__5753__auto___39933__$1,path,seq__39710__$1,temp__5753__auto__,map__39709,map__39709__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39941], 0));

goog.dom.insertSiblingAfter(new_link_39942,node_39940);


var G__39943 = cljs.core.next(seq__39758_39934__$1);
var G__39944 = null;
var G__39945 = (0);
var G__39946 = (0);
seq__39758_39914 = G__39943;
chunk__39762_39915 = G__39944;
count__39763_39916 = G__39945;
i__39764_39917 = G__39946;
continue;
} else {
var G__39947 = cljs.core.next(seq__39758_39934__$1);
var G__39948 = null;
var G__39949 = (0);
var G__39950 = (0);
seq__39758_39914 = G__39947;
chunk__39762_39915 = G__39948;
count__39763_39916 = G__39949;
i__39764_39917 = G__39950;
continue;
}
} else {
var G__39951 = cljs.core.next(seq__39758_39934__$1);
var G__39952 = null;
var G__39953 = (0);
var G__39954 = (0);
seq__39758_39914 = G__39951;
chunk__39762_39915 = G__39952;
count__39763_39916 = G__39953;
i__39764_39917 = G__39954;
continue;
}
}
} else {
}
}
break;
}


var G__39955 = cljs.core.next(seq__39710__$1);
var G__39956 = null;
var G__39957 = (0);
var G__39958 = (0);
seq__39710 = G__39955;
chunk__39712 = G__39956;
count__39713 = G__39957;
i__39714 = G__39958;
continue;
} else {
var G__39959 = cljs.core.next(seq__39710__$1);
var G__39960 = null;
var G__39961 = (0);
var G__39962 = (0);
seq__39710 = G__39959;
chunk__39712 = G__39960;
count__39713 = G__39961;
i__39714 = G__39962;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39772){
var map__39773 = p__39772;
var map__39773__$1 = cljs.core.__destructure_map(map__39773);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39773__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39774){
var map__39775 = p__39774;
var map__39775__$1 = cljs.core.__destructure_map(map__39775);
var _ = map__39775__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39775__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39776,done,error){
var map__39777 = p__39776;
var map__39777__$1 = cljs.core.__destructure_map(map__39777);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39777__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39778,done,error){
var map__39779 = p__39778;
var map__39779__$1 = cljs.core.__destructure_map(map__39779);
var msg = map__39779__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39779__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39779__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39779__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39780){
var map__39781 = p__39780;
var map__39781__$1 = cljs.core.__destructure_map(map__39781);
var src = map__39781__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39781__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39782 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39782) : done.call(null,G__39782));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39783){
var map__39784 = p__39783;
var map__39784__$1 = cljs.core.__destructure_map(map__39784);
var msg__$1 = map__39784__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39784__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39785){var ex = e39785;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39786){
var map__39787 = p__39786;
var map__39787__$1 = cljs.core.__destructure_map(map__39787);
var env = map__39787__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39787__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39788){
var map__39789 = p__39788;
var map__39789__$1 = cljs.core.__destructure_map(map__39789);
var msg = map__39789__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39789__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39790){
var map__39791 = p__39790;
var map__39791__$1 = cljs.core.__destructure_map(map__39791);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39791__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39791__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39792){
var map__39793 = p__39792;
var map__39793__$1 = cljs.core.__destructure_map(map__39793);
var svc = map__39793__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39793__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
