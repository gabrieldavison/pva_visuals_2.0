goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33351 = arguments.length;
switch (G__33351) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33356 = (function (f,blockable,meta33357){
this.f = f;
this.blockable = blockable;
this.meta33357 = meta33357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33358,meta33357__$1){
var self__ = this;
var _33358__$1 = this;
return (new cljs.core.async.t_cljs$core$async33356(self__.f,self__.blockable,meta33357__$1));
}));

(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33358){
var self__ = this;
var _33358__$1 = this;
return self__.meta33357;
}));

(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33357","meta33357",700947155,null)], null);
}));

(cljs.core.async.t_cljs$core$async33356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33356");

(cljs.core.async.t_cljs$core$async33356.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33356.
 */
cljs.core.async.__GT_t_cljs$core$async33356 = (function cljs$core$async$__GT_t_cljs$core$async33356(f__$1,blockable__$1,meta33357){
return (new cljs.core.async.t_cljs$core$async33356(f__$1,blockable__$1,meta33357));
});

}

return (new cljs.core.async.t_cljs$core$async33356(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33405 = arguments.length;
switch (G__33405) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33426 = arguments.length;
switch (G__33426) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33444 = arguments.length;
switch (G__33444) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36743 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36743) : fn1.call(null,val_36743));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36743) : fn1.call(null,val_36743));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33464 = arguments.length;
switch (G__33464) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___36765 = n;
var x_36766 = (0);
while(true){
if((x_36766 < n__4695__auto___36765)){
(a[x_36766] = x_36766);

var G__36779 = (x_36766 + (1));
x_36766 = G__36779;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33480 = (function (flag,meta33481){
this.flag = flag;
this.meta33481 = meta33481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33482,meta33481__$1){
var self__ = this;
var _33482__$1 = this;
return (new cljs.core.async.t_cljs$core$async33480(self__.flag,meta33481__$1));
}));

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33482){
var self__ = this;
var _33482__$1 = this;
return self__.meta33481;
}));

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33481","meta33481",1909387096,null)], null);
}));

(cljs.core.async.t_cljs$core$async33480.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33480");

(cljs.core.async.t_cljs$core$async33480.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33480");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33480.
 */
cljs.core.async.__GT_t_cljs$core$async33480 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33480(flag__$1,meta33481){
return (new cljs.core.async.t_cljs$core$async33480(flag__$1,meta33481));
});

}

return (new cljs.core.async.t_cljs$core$async33480(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33504 = (function (flag,cb,meta33505){
this.flag = flag;
this.cb = cb;
this.meta33505 = meta33505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33506,meta33505__$1){
var self__ = this;
var _33506__$1 = this;
return (new cljs.core.async.t_cljs$core$async33504(self__.flag,self__.cb,meta33505__$1));
}));

(cljs.core.async.t_cljs$core$async33504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33506){
var self__ = this;
var _33506__$1 = this;
return self__.meta33505;
}));

(cljs.core.async.t_cljs$core$async33504.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33504.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33505","meta33505",180406937,null)], null);
}));

(cljs.core.async.t_cljs$core$async33504.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33504");

(cljs.core.async.t_cljs$core$async33504.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33504");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33504.
 */
cljs.core.async.__GT_t_cljs$core$async33504 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33504(flag__$1,cb__$1,meta33505){
return (new cljs.core.async.t_cljs$core$async33504(flag__$1,cb__$1,meta33505));
});

}

return (new cljs.core.async.t_cljs$core$async33504(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33523_SHARP_){
var G__33529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33523_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33529) : fret.call(null,G__33529));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33524_SHARP_){
var G__33530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33524_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33530) : fret.call(null,G__33530));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36811 = (i + (1));
i = G__36811;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36817 = arguments.length;
var i__4819__auto___36818 = (0);
while(true){
if((i__4819__auto___36818 < len__4818__auto___36817)){
args__4824__auto__.push((arguments[i__4819__auto___36818]));

var G__36819 = (i__4819__auto___36818 + (1));
i__4819__auto___36818 = G__36819;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33540){
var map__33541 = p__33540;
var map__33541__$1 = cljs.core.__destructure_map(map__33541);
var opts = map__33541__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33535){
var G__33536 = cljs.core.first(seq33535);
var seq33535__$1 = cljs.core.next(seq33535);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33536,seq33535__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33549 = arguments.length;
switch (G__33549) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33245__auto___36828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_33621){
var state_val_33623 = (state_33621[(1)]);
if((state_val_33623 === (7))){
var inst_33615 = (state_33621[(2)]);
var state_33621__$1 = state_33621;
var statearr_33649_36834 = state_33621__$1;
(statearr_33649_36834[(2)] = inst_33615);

(statearr_33649_36834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (1))){
var state_33621__$1 = state_33621;
var statearr_33651_36835 = state_33621__$1;
(statearr_33651_36835[(2)] = null);

(statearr_33651_36835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (4))){
var inst_33590 = (state_33621[(7)]);
var inst_33590__$1 = (state_33621[(2)]);
var inst_33593 = (inst_33590__$1 == null);
var state_33621__$1 = (function (){var statearr_33660 = state_33621;
(statearr_33660[(7)] = inst_33590__$1);

return statearr_33660;
})();
if(cljs.core.truth_(inst_33593)){
var statearr_33661_36839 = state_33621__$1;
(statearr_33661_36839[(1)] = (5));

} else {
var statearr_33662_36840 = state_33621__$1;
(statearr_33662_36840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (13))){
var state_33621__$1 = state_33621;
var statearr_33663_36841 = state_33621__$1;
(statearr_33663_36841[(2)] = null);

(statearr_33663_36841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (6))){
var inst_33590 = (state_33621[(7)]);
var state_33621__$1 = state_33621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33621__$1,(11),to,inst_33590);
} else {
if((state_val_33623 === (3))){
var inst_33617 = (state_33621[(2)]);
var state_33621__$1 = state_33621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33621__$1,inst_33617);
} else {
if((state_val_33623 === (12))){
var state_33621__$1 = state_33621;
var statearr_33676_36845 = state_33621__$1;
(statearr_33676_36845[(2)] = null);

(statearr_33676_36845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (2))){
var state_33621__$1 = state_33621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33621__$1,(4),from);
} else {
if((state_val_33623 === (11))){
var inst_33608 = (state_33621[(2)]);
var state_33621__$1 = state_33621;
if(cljs.core.truth_(inst_33608)){
var statearr_33677_36847 = state_33621__$1;
(statearr_33677_36847[(1)] = (12));

} else {
var statearr_33678_36849 = state_33621__$1;
(statearr_33678_36849[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (9))){
var state_33621__$1 = state_33621;
var statearr_33680_36852 = state_33621__$1;
(statearr_33680_36852[(2)] = null);

(statearr_33680_36852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (5))){
var state_33621__$1 = state_33621;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33681_36855 = state_33621__$1;
(statearr_33681_36855[(1)] = (8));

} else {
var statearr_33682_36857 = state_33621__$1;
(statearr_33682_36857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (14))){
var inst_33613 = (state_33621[(2)]);
var state_33621__$1 = state_33621;
var statearr_33683_36858 = state_33621__$1;
(statearr_33683_36858[(2)] = inst_33613);

(statearr_33683_36858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (10))){
var inst_33605 = (state_33621[(2)]);
var state_33621__$1 = state_33621;
var statearr_33684_36860 = state_33621__$1;
(statearr_33684_36860[(2)] = inst_33605);

(statearr_33684_36860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33623 === (8))){
var inst_33596 = cljs.core.async.close_BANG_(to);
var state_33621__$1 = state_33621;
var statearr_33685_36863 = state_33621__$1;
(statearr_33685_36863[(2)] = inst_33596);

(statearr_33685_36863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_33686 = [null,null,null,null,null,null,null,null];
(statearr_33686[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_33686[(1)] = (1));

return statearr_33686;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_33621){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_33621);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e33694){var ex__33007__auto__ = e33694;
var statearr_33697_36868 = state_33621;
(statearr_33697_36868[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_33621[(4)]))){
var statearr_33704_36871 = state_33621;
(statearr_33704_36871[(1)] = cljs.core.first((state_33621[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36873 = state_33621;
state_33621 = G__36873;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_33621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_33621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_33722 = f__33246__auto__();
(statearr_33722[(6)] = c__33245__auto___36828);

return statearr_33722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33743){
var vec__33750 = p__33743;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33750,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33750,(1),null);
var job = vec__33750;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33245__auto___36883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_33767){
var state_val_33768 = (state_33767[(1)]);
if((state_val_33768 === (1))){
var state_33767__$1 = state_33767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33767__$1,(2),res,v);
} else {
if((state_val_33768 === (2))){
var inst_33764 = (state_33767[(2)]);
var inst_33765 = cljs.core.async.close_BANG_(res);
var state_33767__$1 = (function (){var statearr_33770 = state_33767;
(statearr_33770[(7)] = inst_33764);

return statearr_33770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33767__$1,inst_33765);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0 = (function (){
var statearr_33773 = [null,null,null,null,null,null,null,null];
(statearr_33773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__);

(statearr_33773[(1)] = (1));

return statearr_33773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1 = (function (state_33767){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_33767);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e33786){var ex__33007__auto__ = e33786;
var statearr_33787_36892 = state_33767;
(statearr_33787_36892[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_33767[(4)]))){
var statearr_33788_36905 = state_33767;
(statearr_33788_36905[(1)] = cljs.core.first((state_33767[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36910 = state_33767;
state_33767 = G__36910;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__ = function(state_33767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1.call(this,state_33767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_33789 = f__33246__auto__();
(statearr_33789[(6)] = c__33245__auto___36883);

return statearr_33789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33791){
var vec__33792 = p__33791;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33792,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33792,(1),null);
var job = vec__33792;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___36920 = n;
var __36921 = (0);
while(true){
if((__36921 < n__4695__auto___36920)){
var G__33795_36923 = type;
var G__33795_36924__$1 = (((G__33795_36923 instanceof cljs.core.Keyword))?G__33795_36923.fqn:null);
switch (G__33795_36924__$1) {
case "compute":
var c__33245__auto___36927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36921,c__33245__auto___36927,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async){
return (function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = ((function (__36921,c__33245__auto___36927,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async){
return (function (state_33816){
var state_val_33817 = (state_33816[(1)]);
if((state_val_33817 === (1))){
var state_33816__$1 = state_33816;
var statearr_33820_36931 = state_33816__$1;
(statearr_33820_36931[(2)] = null);

(statearr_33820_36931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (2))){
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33816__$1,(4),jobs);
} else {
if((state_val_33817 === (3))){
var inst_33814 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33816__$1,inst_33814);
} else {
if((state_val_33817 === (4))){
var inst_33798 = (state_33816[(2)]);
var inst_33803 = process(inst_33798);
var state_33816__$1 = state_33816;
if(cljs.core.truth_(inst_33803)){
var statearr_33828_36935 = state_33816__$1;
(statearr_33828_36935[(1)] = (5));

} else {
var statearr_33830_36940 = state_33816__$1;
(statearr_33830_36940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (5))){
var state_33816__$1 = state_33816;
var statearr_33838_36941 = state_33816__$1;
(statearr_33838_36941[(2)] = null);

(statearr_33838_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (6))){
var state_33816__$1 = state_33816;
var statearr_33842_36942 = state_33816__$1;
(statearr_33842_36942[(2)] = null);

(statearr_33842_36942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33817 === (7))){
var inst_33808 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
var statearr_33843_36943 = state_33816__$1;
(statearr_33843_36943[(2)] = inst_33808);

(statearr_33843_36943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36921,c__33245__auto___36927,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async))
;
return ((function (__36921,switch__33003__auto__,c__33245__auto___36927,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0 = (function (){
var statearr_33846 = [null,null,null,null,null,null,null];
(statearr_33846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__);

(statearr_33846[(1)] = (1));

return statearr_33846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1 = (function (state_33816){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_33816);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e33849){var ex__33007__auto__ = e33849;
var statearr_33851_36946 = state_33816;
(statearr_33851_36946[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_33816[(4)]))){
var statearr_33855_36951 = state_33816;
(statearr_33855_36951[(1)] = cljs.core.first((state_33816[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36952 = state_33816;
state_33816 = G__36952;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__ = function(state_33816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1.call(this,state_33816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__;
})()
;})(__36921,switch__33003__auto__,c__33245__auto___36927,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async))
})();
var state__33247__auto__ = (function (){var statearr_33857 = f__33246__auto__();
(statearr_33857[(6)] = c__33245__auto___36927);

return statearr_33857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
});})(__36921,c__33245__auto___36927,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async))
);


break;
case "async":
var c__33245__auto___36954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36921,c__33245__auto___36954,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async){
return (function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = ((function (__36921,c__33245__auto___36954,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async){
return (function (state_33872){
var state_val_33873 = (state_33872[(1)]);
if((state_val_33873 === (1))){
var state_33872__$1 = state_33872;
var statearr_33877_36957 = state_33872__$1;
(statearr_33877_36957[(2)] = null);

(statearr_33877_36957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (2))){
var state_33872__$1 = state_33872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33872__$1,(4),jobs);
} else {
if((state_val_33873 === (3))){
var inst_33870 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33872__$1,inst_33870);
} else {
if((state_val_33873 === (4))){
var inst_33862 = (state_33872[(2)]);
var inst_33863 = async(inst_33862);
var state_33872__$1 = state_33872;
if(cljs.core.truth_(inst_33863)){
var statearr_33881_36958 = state_33872__$1;
(statearr_33881_36958[(1)] = (5));

} else {
var statearr_33883_36959 = state_33872__$1;
(statearr_33883_36959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (5))){
var state_33872__$1 = state_33872;
var statearr_33884_36960 = state_33872__$1;
(statearr_33884_36960[(2)] = null);

(statearr_33884_36960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (6))){
var state_33872__$1 = state_33872;
var statearr_33885_36961 = state_33872__$1;
(statearr_33885_36961[(2)] = null);

(statearr_33885_36961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (7))){
var inst_33868 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33895_36963 = state_33872__$1;
(statearr_33895_36963[(2)] = inst_33868);

(statearr_33895_36963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36921,c__33245__auto___36954,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async))
;
return ((function (__36921,switch__33003__auto__,c__33245__auto___36954,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0 = (function (){
var statearr_33900 = [null,null,null,null,null,null,null];
(statearr_33900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__);

(statearr_33900[(1)] = (1));

return statearr_33900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1 = (function (state_33872){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_33872);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e33901){var ex__33007__auto__ = e33901;
var statearr_33911_36964 = state_33872;
(statearr_33911_36964[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_33872[(4)]))){
var statearr_33912_36965 = state_33872;
(statearr_33912_36965[(1)] = cljs.core.first((state_33872[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36966 = state_33872;
state_33872 = G__36966;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__ = function(state_33872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1.call(this,state_33872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__;
})()
;})(__36921,switch__33003__auto__,c__33245__auto___36954,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async))
})();
var state__33247__auto__ = (function (){var statearr_33927 = f__33246__auto__();
(statearr_33927[(6)] = c__33245__auto___36954);

return statearr_33927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
});})(__36921,c__33245__auto___36954,G__33795_36923,G__33795_36924__$1,n__4695__auto___36920,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33795_36924__$1)].join('')));

}

var G__36967 = (__36921 + (1));
__36921 = G__36967;
continue;
} else {
}
break;
}

var c__33245__auto___36968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_33960){
var state_val_33961 = (state_33960[(1)]);
if((state_val_33961 === (7))){
var inst_33956 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33966_37005 = state_33960__$1;
(statearr_33966_37005[(2)] = inst_33956);

(statearr_33966_37005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (1))){
var state_33960__$1 = state_33960;
var statearr_33967_37009 = state_33960__$1;
(statearr_33967_37009[(2)] = null);

(statearr_33967_37009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (4))){
var inst_33937 = (state_33960[(7)]);
var inst_33937__$1 = (state_33960[(2)]);
var inst_33938 = (inst_33937__$1 == null);
var state_33960__$1 = (function (){var statearr_33968 = state_33960;
(statearr_33968[(7)] = inst_33937__$1);

return statearr_33968;
})();
if(cljs.core.truth_(inst_33938)){
var statearr_33969_37011 = state_33960__$1;
(statearr_33969_37011[(1)] = (5));

} else {
var statearr_33971_37012 = state_33960__$1;
(statearr_33971_37012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (6))){
var inst_33942 = (state_33960[(8)]);
var inst_33937 = (state_33960[(7)]);
var inst_33942__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33947 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33948 = [inst_33937,inst_33942__$1];
var inst_33949 = (new cljs.core.PersistentVector(null,2,(5),inst_33947,inst_33948,null));
var state_33960__$1 = (function (){var statearr_33973 = state_33960;
(statearr_33973[(8)] = inst_33942__$1);

return statearr_33973;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33960__$1,(8),jobs,inst_33949);
} else {
if((state_val_33961 === (3))){
var inst_33958 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33960__$1,inst_33958);
} else {
if((state_val_33961 === (2))){
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33960__$1,(4),from);
} else {
if((state_val_33961 === (9))){
var inst_33953 = (state_33960[(2)]);
var state_33960__$1 = (function (){var statearr_33976 = state_33960;
(statearr_33976[(9)] = inst_33953);

return statearr_33976;
})();
var statearr_33977_37027 = state_33960__$1;
(statearr_33977_37027[(2)] = null);

(statearr_33977_37027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (5))){
var inst_33940 = cljs.core.async.close_BANG_(jobs);
var state_33960__$1 = state_33960;
var statearr_33979_37028 = state_33960__$1;
(statearr_33979_37028[(2)] = inst_33940);

(statearr_33979_37028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (8))){
var inst_33942 = (state_33960[(8)]);
var inst_33951 = (state_33960[(2)]);
var state_33960__$1 = (function (){var statearr_33981 = state_33960;
(statearr_33981[(10)] = inst_33951);

return statearr_33981;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33960__$1,(9),results,inst_33942);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0 = (function (){
var statearr_33983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__);

(statearr_33983[(1)] = (1));

return statearr_33983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1 = (function (state_33960){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_33960);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e33985){var ex__33007__auto__ = e33985;
var statearr_33986_37029 = state_33960;
(statearr_33986_37029[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_33960[(4)]))){
var statearr_33987_37031 = state_33960;
(statearr_33987_37031[(1)] = cljs.core.first((state_33960[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37032 = state_33960;
state_33960 = G__37032;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__ = function(state_33960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1.call(this,state_33960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_33988 = f__33246__auto__();
(statearr_33988[(6)] = c__33245__auto___36968);

return statearr_33988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


var c__33245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_34034){
var state_val_34035 = (state_34034[(1)]);
if((state_val_34035 === (7))){
var inst_34030 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
var statearr_34045_37034 = state_34034__$1;
(statearr_34045_37034[(2)] = inst_34030);

(statearr_34045_37034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (20))){
var state_34034__$1 = state_34034;
var statearr_34048_37036 = state_34034__$1;
(statearr_34048_37036[(2)] = null);

(statearr_34048_37036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (1))){
var state_34034__$1 = state_34034;
var statearr_34049_37037 = state_34034__$1;
(statearr_34049_37037[(2)] = null);

(statearr_34049_37037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (4))){
var inst_33993 = (state_34034[(7)]);
var inst_33993__$1 = (state_34034[(2)]);
var inst_33994 = (inst_33993__$1 == null);
var state_34034__$1 = (function (){var statearr_34053 = state_34034;
(statearr_34053[(7)] = inst_33993__$1);

return statearr_34053;
})();
if(cljs.core.truth_(inst_33994)){
var statearr_34054_37038 = state_34034__$1;
(statearr_34054_37038[(1)] = (5));

} else {
var statearr_34061_37039 = state_34034__$1;
(statearr_34061_37039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (15))){
var inst_34009 = (state_34034[(8)]);
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34034__$1,(18),to,inst_34009);
} else {
if((state_val_34035 === (21))){
var inst_34025 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
var statearr_34066_37040 = state_34034__$1;
(statearr_34066_37040[(2)] = inst_34025);

(statearr_34066_37040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (13))){
var inst_34027 = (state_34034[(2)]);
var state_34034__$1 = (function (){var statearr_34071 = state_34034;
(statearr_34071[(9)] = inst_34027);

return statearr_34071;
})();
var statearr_34073_37041 = state_34034__$1;
(statearr_34073_37041[(2)] = null);

(statearr_34073_37041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (6))){
var inst_33993 = (state_34034[(7)]);
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34034__$1,(11),inst_33993);
} else {
if((state_val_34035 === (17))){
var inst_34020 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
if(cljs.core.truth_(inst_34020)){
var statearr_34077_37046 = state_34034__$1;
(statearr_34077_37046[(1)] = (19));

} else {
var statearr_34078_37047 = state_34034__$1;
(statearr_34078_37047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (3))){
var inst_34032 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34034__$1,inst_34032);
} else {
if((state_val_34035 === (12))){
var inst_34006 = (state_34034[(10)]);
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34034__$1,(14),inst_34006);
} else {
if((state_val_34035 === (2))){
var state_34034__$1 = state_34034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34034__$1,(4),results);
} else {
if((state_val_34035 === (19))){
var state_34034__$1 = state_34034;
var statearr_34087_37048 = state_34034__$1;
(statearr_34087_37048[(2)] = null);

(statearr_34087_37048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (11))){
var inst_34006 = (state_34034[(2)]);
var state_34034__$1 = (function (){var statearr_34095 = state_34034;
(statearr_34095[(10)] = inst_34006);

return statearr_34095;
})();
var statearr_34096_37050 = state_34034__$1;
(statearr_34096_37050[(2)] = null);

(statearr_34096_37050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (9))){
var state_34034__$1 = state_34034;
var statearr_34097_37052 = state_34034__$1;
(statearr_34097_37052[(2)] = null);

(statearr_34097_37052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (5))){
var state_34034__$1 = state_34034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34099_37053 = state_34034__$1;
(statearr_34099_37053[(1)] = (8));

} else {
var statearr_34102_37054 = state_34034__$1;
(statearr_34102_37054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (14))){
var inst_34014 = (state_34034[(11)]);
var inst_34009 = (state_34034[(8)]);
var inst_34009__$1 = (state_34034[(2)]);
var inst_34013 = (inst_34009__$1 == null);
var inst_34014__$1 = cljs.core.not(inst_34013);
var state_34034__$1 = (function (){var statearr_34108 = state_34034;
(statearr_34108[(11)] = inst_34014__$1);

(statearr_34108[(8)] = inst_34009__$1);

return statearr_34108;
})();
if(inst_34014__$1){
var statearr_34109_37055 = state_34034__$1;
(statearr_34109_37055[(1)] = (15));

} else {
var statearr_34110_37056 = state_34034__$1;
(statearr_34110_37056[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (16))){
var inst_34014 = (state_34034[(11)]);
var state_34034__$1 = state_34034;
var statearr_34111_37057 = state_34034__$1;
(statearr_34111_37057[(2)] = inst_34014);

(statearr_34111_37057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (10))){
var inst_34003 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
var statearr_34112_37058 = state_34034__$1;
(statearr_34112_37058[(2)] = inst_34003);

(statearr_34112_37058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (18))){
var inst_34017 = (state_34034[(2)]);
var state_34034__$1 = state_34034;
var statearr_34113_37059 = state_34034__$1;
(statearr_34113_37059[(2)] = inst_34017);

(statearr_34113_37059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34035 === (8))){
var inst_34000 = cljs.core.async.close_BANG_(to);
var state_34034__$1 = state_34034;
var statearr_34114_37060 = state_34034__$1;
(statearr_34114_37060[(2)] = inst_34000);

(statearr_34114_37060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0 = (function (){
var statearr_34116 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__);

(statearr_34116[(1)] = (1));

return statearr_34116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1 = (function (state_34034){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_34034);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e34125){var ex__33007__auto__ = e34125;
var statearr_34126_37061 = state_34034;
(statearr_34126_37061[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_34034[(4)]))){
var statearr_34127_37062 = state_34034;
(statearr_34127_37062[(1)] = cljs.core.first((state_34034[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37063 = state_34034;
state_34034 = G__37063;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__ = function(state_34034){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1.call(this,state_34034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_34128 = f__33246__auto__();
(statearr_34128[(6)] = c__33245__auto__);

return statearr_34128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));

return c__33245__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34132 = arguments.length;
switch (G__34132) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34151 = arguments.length;
switch (G__34151) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34165 = arguments.length;
switch (G__34165) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33245__auto___37071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_34218){
var state_val_34219 = (state_34218[(1)]);
if((state_val_34219 === (7))){
var inst_34212 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
var statearr_34230_37072 = state_34218__$1;
(statearr_34230_37072[(2)] = inst_34212);

(statearr_34230_37072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (1))){
var state_34218__$1 = state_34218;
var statearr_34231_37073 = state_34218__$1;
(statearr_34231_37073[(2)] = null);

(statearr_34231_37073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (4))){
var inst_34184 = (state_34218[(7)]);
var inst_34184__$1 = (state_34218[(2)]);
var inst_34185 = (inst_34184__$1 == null);
var state_34218__$1 = (function (){var statearr_34246 = state_34218;
(statearr_34246[(7)] = inst_34184__$1);

return statearr_34246;
})();
if(cljs.core.truth_(inst_34185)){
var statearr_34248_37078 = state_34218__$1;
(statearr_34248_37078[(1)] = (5));

} else {
var statearr_34249_37082 = state_34218__$1;
(statearr_34249_37082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (13))){
var state_34218__$1 = state_34218;
var statearr_34250_37083 = state_34218__$1;
(statearr_34250_37083[(2)] = null);

(statearr_34250_37083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (6))){
var inst_34184 = (state_34218[(7)]);
var inst_34197 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34184) : p.call(null,inst_34184));
var state_34218__$1 = state_34218;
if(cljs.core.truth_(inst_34197)){
var statearr_34251_37084 = state_34218__$1;
(statearr_34251_37084[(1)] = (9));

} else {
var statearr_34252_37085 = state_34218__$1;
(statearr_34252_37085[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (3))){
var inst_34214 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34218__$1,inst_34214);
} else {
if((state_val_34219 === (12))){
var state_34218__$1 = state_34218;
var statearr_34254_37089 = state_34218__$1;
(statearr_34254_37089[(2)] = null);

(statearr_34254_37089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (2))){
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34218__$1,(4),ch);
} else {
if((state_val_34219 === (11))){
var inst_34184 = (state_34218[(7)]);
var inst_34202 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34218__$1,(8),inst_34202,inst_34184);
} else {
if((state_val_34219 === (9))){
var state_34218__$1 = state_34218;
var statearr_34255_37093 = state_34218__$1;
(statearr_34255_37093[(2)] = tc);

(statearr_34255_37093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (5))){
var inst_34188 = cljs.core.async.close_BANG_(tc);
var inst_34189 = cljs.core.async.close_BANG_(fc);
var state_34218__$1 = (function (){var statearr_34256 = state_34218;
(statearr_34256[(8)] = inst_34188);

return statearr_34256;
})();
var statearr_34257_37094 = state_34218__$1;
(statearr_34257_37094[(2)] = inst_34189);

(statearr_34257_37094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (14))){
var inst_34210 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
var statearr_34258_37095 = state_34218__$1;
(statearr_34258_37095[(2)] = inst_34210);

(statearr_34258_37095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (10))){
var state_34218__$1 = state_34218;
var statearr_34260_37096 = state_34218__$1;
(statearr_34260_37096[(2)] = fc);

(statearr_34260_37096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34219 === (8))){
var inst_34204 = (state_34218[(2)]);
var state_34218__$1 = state_34218;
if(cljs.core.truth_(inst_34204)){
var statearr_34261_37100 = state_34218__$1;
(statearr_34261_37100[(1)] = (12));

} else {
var statearr_34262_37101 = state_34218__$1;
(statearr_34262_37101[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_34273 = [null,null,null,null,null,null,null,null,null];
(statearr_34273[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_34273[(1)] = (1));

return statearr_34273;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_34218){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_34218);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e34275){var ex__33007__auto__ = e34275;
var statearr_34276_37103 = state_34218;
(statearr_34276_37103[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_34218[(4)]))){
var statearr_34280_37104 = state_34218;
(statearr_34280_37104[(1)] = cljs.core.first((state_34218[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37105 = state_34218;
state_34218 = G__37105;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_34218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_34218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_34281 = f__33246__auto__();
(statearr_34281[(6)] = c__33245__auto___37071);

return statearr_34281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_34320){
var state_val_34321 = (state_34320[(1)]);
if((state_val_34321 === (7))){
var inst_34315 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34326_37114 = state_34320__$1;
(statearr_34326_37114[(2)] = inst_34315);

(statearr_34326_37114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (1))){
var inst_34285 = init;
var inst_34299 = inst_34285;
var state_34320__$1 = (function (){var statearr_34327 = state_34320;
(statearr_34327[(7)] = inst_34299);

return statearr_34327;
})();
var statearr_34328_37115 = state_34320__$1;
(statearr_34328_37115[(2)] = null);

(statearr_34328_37115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (4))){
var inst_34302 = (state_34320[(8)]);
var inst_34302__$1 = (state_34320[(2)]);
var inst_34303 = (inst_34302__$1 == null);
var state_34320__$1 = (function (){var statearr_34335 = state_34320;
(statearr_34335[(8)] = inst_34302__$1);

return statearr_34335;
})();
if(cljs.core.truth_(inst_34303)){
var statearr_34336_37116 = state_34320__$1;
(statearr_34336_37116[(1)] = (5));

} else {
var statearr_34337_37117 = state_34320__$1;
(statearr_34337_37117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (6))){
var inst_34306 = (state_34320[(9)]);
var inst_34302 = (state_34320[(8)]);
var inst_34299 = (state_34320[(7)]);
var inst_34306__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34299,inst_34302) : f.call(null,inst_34299,inst_34302));
var inst_34307 = cljs.core.reduced_QMARK_(inst_34306__$1);
var state_34320__$1 = (function (){var statearr_34338 = state_34320;
(statearr_34338[(9)] = inst_34306__$1);

return statearr_34338;
})();
if(inst_34307){
var statearr_34339_37121 = state_34320__$1;
(statearr_34339_37121[(1)] = (8));

} else {
var statearr_34340_37122 = state_34320__$1;
(statearr_34340_37122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (3))){
var inst_34317 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34320__$1,inst_34317);
} else {
if((state_val_34321 === (2))){
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34320__$1,(4),ch);
} else {
if((state_val_34321 === (9))){
var inst_34306 = (state_34320[(9)]);
var inst_34299 = inst_34306;
var state_34320__$1 = (function (){var statearr_34342 = state_34320;
(statearr_34342[(7)] = inst_34299);

return statearr_34342;
})();
var statearr_34343_37126 = state_34320__$1;
(statearr_34343_37126[(2)] = null);

(statearr_34343_37126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (5))){
var inst_34299 = (state_34320[(7)]);
var state_34320__$1 = state_34320;
var statearr_34344_37127 = state_34320__$1;
(statearr_34344_37127[(2)] = inst_34299);

(statearr_34344_37127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (10))){
var inst_34313 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34346_37128 = state_34320__$1;
(statearr_34346_37128[(2)] = inst_34313);

(statearr_34346_37128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (8))){
var inst_34306 = (state_34320[(9)]);
var inst_34309 = cljs.core.deref(inst_34306);
var state_34320__$1 = state_34320;
var statearr_34347_37129 = state_34320__$1;
(statearr_34347_37129[(2)] = inst_34309);

(statearr_34347_37129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33004__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33004__auto____0 = (function (){
var statearr_34348 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34348[(0)] = cljs$core$async$reduce_$_state_machine__33004__auto__);

(statearr_34348[(1)] = (1));

return statearr_34348;
});
var cljs$core$async$reduce_$_state_machine__33004__auto____1 = (function (state_34320){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_34320);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e34349){var ex__33007__auto__ = e34349;
var statearr_34350_37133 = state_34320;
(statearr_34350_37133[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_34320[(4)]))){
var statearr_34351_37134 = state_34320;
(statearr_34351_37134[(1)] = cljs.core.first((state_34320[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37135 = state_34320;
state_34320 = G__37135;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33004__auto__ = function(state_34320){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33004__auto____1.call(this,state_34320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33004__auto____0;
cljs$core$async$reduce_$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33004__auto____1;
return cljs$core$async$reduce_$_state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_34354 = f__33246__auto__();
(statearr_34354[(6)] = c__33245__auto__);

return statearr_34354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));

return c__33245__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_34364){
var state_val_34365 = (state_34364[(1)]);
if((state_val_34365 === (1))){
var inst_34359 = cljs.core.async.reduce(f__$1,init,ch);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34364__$1,(2),inst_34359);
} else {
if((state_val_34365 === (2))){
var inst_34361 = (state_34364[(2)]);
var inst_34362 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34361) : f__$1.call(null,inst_34361));
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34364__$1,inst_34362);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33004__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33004__auto____0 = (function (){
var statearr_34391 = [null,null,null,null,null,null,null];
(statearr_34391[(0)] = cljs$core$async$transduce_$_state_machine__33004__auto__);

(statearr_34391[(1)] = (1));

return statearr_34391;
});
var cljs$core$async$transduce_$_state_machine__33004__auto____1 = (function (state_34364){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_34364);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e34395){var ex__33007__auto__ = e34395;
var statearr_34396_37137 = state_34364;
(statearr_34396_37137[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_34364[(4)]))){
var statearr_34397_37138 = state_34364;
(statearr_34397_37138[(1)] = cljs.core.first((state_34364[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37139 = state_34364;
state_34364 = G__37139;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33004__auto__ = function(state_34364){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33004__auto____1.call(this,state_34364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33004__auto____0;
cljs$core$async$transduce_$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33004__auto____1;
return cljs$core$async$transduce_$_state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_34398 = f__33246__auto__();
(statearr_34398[(6)] = c__33245__auto__);

return statearr_34398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));

return c__33245__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34407 = arguments.length;
switch (G__34407) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_34442){
var state_val_34446 = (state_34442[(1)]);
if((state_val_34446 === (7))){
var inst_34419 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
var statearr_34462_37141 = state_34442__$1;
(statearr_34462_37141[(2)] = inst_34419);

(statearr_34462_37141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (1))){
var inst_34408 = cljs.core.seq(coll);
var inst_34409 = inst_34408;
var state_34442__$1 = (function (){var statearr_34463 = state_34442;
(statearr_34463[(7)] = inst_34409);

return statearr_34463;
})();
var statearr_34464_37142 = state_34442__$1;
(statearr_34464_37142[(2)] = null);

(statearr_34464_37142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (4))){
var inst_34409 = (state_34442[(7)]);
var inst_34417 = cljs.core.first(inst_34409);
var state_34442__$1 = state_34442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34442__$1,(7),ch,inst_34417);
} else {
if((state_val_34446 === (13))){
var inst_34435 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
var statearr_34478_37144 = state_34442__$1;
(statearr_34478_37144[(2)] = inst_34435);

(statearr_34478_37144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (6))){
var inst_34422 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
if(cljs.core.truth_(inst_34422)){
var statearr_34485_37145 = state_34442__$1;
(statearr_34485_37145[(1)] = (8));

} else {
var statearr_34487_37146 = state_34442__$1;
(statearr_34487_37146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (3))){
var inst_34439 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34442__$1,inst_34439);
} else {
if((state_val_34446 === (12))){
var state_34442__$1 = state_34442;
var statearr_34498_37150 = state_34442__$1;
(statearr_34498_37150[(2)] = null);

(statearr_34498_37150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (2))){
var inst_34409 = (state_34442[(7)]);
var state_34442__$1 = state_34442;
if(cljs.core.truth_(inst_34409)){
var statearr_34499_37151 = state_34442__$1;
(statearr_34499_37151[(1)] = (4));

} else {
var statearr_34500_37152 = state_34442__$1;
(statearr_34500_37152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (11))){
var inst_34432 = cljs.core.async.close_BANG_(ch);
var state_34442__$1 = state_34442;
var statearr_34506_37153 = state_34442__$1;
(statearr_34506_37153[(2)] = inst_34432);

(statearr_34506_37153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (9))){
var state_34442__$1 = state_34442;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34515_37154 = state_34442__$1;
(statearr_34515_37154[(1)] = (11));

} else {
var statearr_34517_37155 = state_34442__$1;
(statearr_34517_37155[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (5))){
var inst_34409 = (state_34442[(7)]);
var state_34442__$1 = state_34442;
var statearr_34527_37156 = state_34442__$1;
(statearr_34527_37156[(2)] = inst_34409);

(statearr_34527_37156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (10))){
var inst_34437 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
var statearr_34528_37157 = state_34442__$1;
(statearr_34528_37157[(2)] = inst_34437);

(statearr_34528_37157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34446 === (8))){
var inst_34409 = (state_34442[(7)]);
var inst_34424 = cljs.core.next(inst_34409);
var inst_34409__$1 = inst_34424;
var state_34442__$1 = (function (){var statearr_34529 = state_34442;
(statearr_34529[(7)] = inst_34409__$1);

return statearr_34529;
})();
var statearr_34530_37158 = state_34442__$1;
(statearr_34530_37158[(2)] = null);

(statearr_34530_37158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_34533 = [null,null,null,null,null,null,null,null];
(statearr_34533[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_34533[(1)] = (1));

return statearr_34533;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_34442){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_34442);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e34534){var ex__33007__auto__ = e34534;
var statearr_34535_37159 = state_34442;
(statearr_34535_37159[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_34442[(4)]))){
var statearr_34536_37160 = state_34442;
(statearr_34536_37160[(1)] = cljs.core.first((state_34442[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37161 = state_34442;
state_34442 = G__37161;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_34442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_34442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_34541 = f__33246__auto__();
(statearr_34541[(6)] = c__33245__auto__);

return statearr_34541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));

return c__33245__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34560 = arguments.length;
switch (G__34560) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37164 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37164(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37165 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37165(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37167 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37167(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37169 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37169(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34631 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34631 = (function (ch,cs,meta34632){
this.ch = ch;
this.cs = cs;
this.meta34632 = meta34632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34633,meta34632__$1){
var self__ = this;
var _34633__$1 = this;
return (new cljs.core.async.t_cljs$core$async34631(self__.ch,self__.cs,meta34632__$1));
}));

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34633){
var self__ = this;
var _34633__$1 = this;
return self__.meta34632;
}));

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34632","meta34632",769517592,null)], null);
}));

(cljs.core.async.t_cljs$core$async34631.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34631");

(cljs.core.async.t_cljs$core$async34631.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34631");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34631.
 */
cljs.core.async.__GT_t_cljs$core$async34631 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34631(ch__$1,cs__$1,meta34632){
return (new cljs.core.async.t_cljs$core$async34631(ch__$1,cs__$1,meta34632));
});

}

return (new cljs.core.async.t_cljs$core$async34631(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33245__auto___37181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_34822){
var state_val_34823 = (state_34822[(1)]);
if((state_val_34823 === (7))){
var inst_34818 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34836_37182 = state_34822__$1;
(statearr_34836_37182[(2)] = inst_34818);

(statearr_34836_37182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (20))){
var inst_34705 = (state_34822[(7)]);
var inst_34717 = cljs.core.first(inst_34705);
var inst_34720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34717,(0),null);
var inst_34721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34717,(1),null);
var state_34822__$1 = (function (){var statearr_34838 = state_34822;
(statearr_34838[(8)] = inst_34720);

return statearr_34838;
})();
if(cljs.core.truth_(inst_34721)){
var statearr_34839_37184 = state_34822__$1;
(statearr_34839_37184[(1)] = (22));

} else {
var statearr_34840_37185 = state_34822__$1;
(statearr_34840_37185[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (27))){
var inst_34751 = (state_34822[(9)]);
var inst_34767 = (state_34822[(10)]);
var inst_34670 = (state_34822[(11)]);
var inst_34749 = (state_34822[(12)]);
var inst_34767__$1 = cljs.core._nth(inst_34749,inst_34751);
var inst_34768 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34767__$1,inst_34670,done);
var state_34822__$1 = (function (){var statearr_34842 = state_34822;
(statearr_34842[(10)] = inst_34767__$1);

return statearr_34842;
})();
if(cljs.core.truth_(inst_34768)){
var statearr_34843_37187 = state_34822__$1;
(statearr_34843_37187[(1)] = (30));

} else {
var statearr_34844_37188 = state_34822__$1;
(statearr_34844_37188[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (1))){
var state_34822__$1 = state_34822;
var statearr_34846_37189 = state_34822__$1;
(statearr_34846_37189[(2)] = null);

(statearr_34846_37189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (24))){
var inst_34705 = (state_34822[(7)]);
var inst_34726 = (state_34822[(2)]);
var inst_34727 = cljs.core.next(inst_34705);
var inst_34680 = inst_34727;
var inst_34681 = null;
var inst_34682 = (0);
var inst_34683 = (0);
var state_34822__$1 = (function (){var statearr_34857 = state_34822;
(statearr_34857[(13)] = inst_34683);

(statearr_34857[(14)] = inst_34681);

(statearr_34857[(15)] = inst_34726);

(statearr_34857[(16)] = inst_34680);

(statearr_34857[(17)] = inst_34682);

return statearr_34857;
})();
var statearr_34858_37190 = state_34822__$1;
(statearr_34858_37190[(2)] = null);

(statearr_34858_37190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (39))){
var state_34822__$1 = state_34822;
var statearr_34867_37191 = state_34822__$1;
(statearr_34867_37191[(2)] = null);

(statearr_34867_37191[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (4))){
var inst_34670 = (state_34822[(11)]);
var inst_34670__$1 = (state_34822[(2)]);
var inst_34671 = (inst_34670__$1 == null);
var state_34822__$1 = (function (){var statearr_34869 = state_34822;
(statearr_34869[(11)] = inst_34670__$1);

return statearr_34869;
})();
if(cljs.core.truth_(inst_34671)){
var statearr_34870_37192 = state_34822__$1;
(statearr_34870_37192[(1)] = (5));

} else {
var statearr_34871_37193 = state_34822__$1;
(statearr_34871_37193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (15))){
var inst_34683 = (state_34822[(13)]);
var inst_34681 = (state_34822[(14)]);
var inst_34680 = (state_34822[(16)]);
var inst_34682 = (state_34822[(17)]);
var inst_34700 = (state_34822[(2)]);
var inst_34702 = (inst_34683 + (1));
var tmp34863 = inst_34681;
var tmp34864 = inst_34680;
var tmp34865 = inst_34682;
var inst_34680__$1 = tmp34864;
var inst_34681__$1 = tmp34863;
var inst_34682__$1 = tmp34865;
var inst_34683__$1 = inst_34702;
var state_34822__$1 = (function (){var statearr_34875 = state_34822;
(statearr_34875[(13)] = inst_34683__$1);

(statearr_34875[(14)] = inst_34681__$1);

(statearr_34875[(18)] = inst_34700);

(statearr_34875[(16)] = inst_34680__$1);

(statearr_34875[(17)] = inst_34682__$1);

return statearr_34875;
})();
var statearr_34876_37207 = state_34822__$1;
(statearr_34876_37207[(2)] = null);

(statearr_34876_37207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (21))){
var inst_34730 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34880_37208 = state_34822__$1;
(statearr_34880_37208[(2)] = inst_34730);

(statearr_34880_37208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (31))){
var inst_34767 = (state_34822[(10)]);
var inst_34771 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34767);
var state_34822__$1 = state_34822;
var statearr_34881_37209 = state_34822__$1;
(statearr_34881_37209[(2)] = inst_34771);

(statearr_34881_37209[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (32))){
var inst_34751 = (state_34822[(9)]);
var inst_34750 = (state_34822[(19)]);
var inst_34748 = (state_34822[(20)]);
var inst_34749 = (state_34822[(12)]);
var inst_34773 = (state_34822[(2)]);
var inst_34774 = (inst_34751 + (1));
var tmp34877 = inst_34750;
var tmp34878 = inst_34748;
var tmp34879 = inst_34749;
var inst_34748__$1 = tmp34878;
var inst_34749__$1 = tmp34879;
var inst_34750__$1 = tmp34877;
var inst_34751__$1 = inst_34774;
var state_34822__$1 = (function (){var statearr_34882 = state_34822;
(statearr_34882[(21)] = inst_34773);

(statearr_34882[(9)] = inst_34751__$1);

(statearr_34882[(19)] = inst_34750__$1);

(statearr_34882[(20)] = inst_34748__$1);

(statearr_34882[(12)] = inst_34749__$1);

return statearr_34882;
})();
var statearr_34883_37220 = state_34822__$1;
(statearr_34883_37220[(2)] = null);

(statearr_34883_37220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (40))){
var inst_34790 = (state_34822[(22)]);
var inst_34795 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34790);
var state_34822__$1 = state_34822;
var statearr_34892_37221 = state_34822__$1;
(statearr_34892_37221[(2)] = inst_34795);

(statearr_34892_37221[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (33))){
var inst_34777 = (state_34822[(23)]);
var inst_34783 = cljs.core.chunked_seq_QMARK_(inst_34777);
var state_34822__$1 = state_34822;
if(inst_34783){
var statearr_34894_37222 = state_34822__$1;
(statearr_34894_37222[(1)] = (36));

} else {
var statearr_34899_37223 = state_34822__$1;
(statearr_34899_37223[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (13))){
var inst_34693 = (state_34822[(24)]);
var inst_34697 = cljs.core.async.close_BANG_(inst_34693);
var state_34822__$1 = state_34822;
var statearr_34901_37224 = state_34822__$1;
(statearr_34901_37224[(2)] = inst_34697);

(statearr_34901_37224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (22))){
var inst_34720 = (state_34822[(8)]);
var inst_34723 = cljs.core.async.close_BANG_(inst_34720);
var state_34822__$1 = state_34822;
var statearr_34904_37227 = state_34822__$1;
(statearr_34904_37227[(2)] = inst_34723);

(statearr_34904_37227[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (36))){
var inst_34777 = (state_34822[(23)]);
var inst_34785 = cljs.core.chunk_first(inst_34777);
var inst_34786 = cljs.core.chunk_rest(inst_34777);
var inst_34787 = cljs.core.count(inst_34785);
var inst_34748 = inst_34786;
var inst_34749 = inst_34785;
var inst_34750 = inst_34787;
var inst_34751 = (0);
var state_34822__$1 = (function (){var statearr_34906 = state_34822;
(statearr_34906[(9)] = inst_34751);

(statearr_34906[(19)] = inst_34750);

(statearr_34906[(20)] = inst_34748);

(statearr_34906[(12)] = inst_34749);

return statearr_34906;
})();
var statearr_34907_37230 = state_34822__$1;
(statearr_34907_37230[(2)] = null);

(statearr_34907_37230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (41))){
var inst_34777 = (state_34822[(23)]);
var inst_34797 = (state_34822[(2)]);
var inst_34798 = cljs.core.next(inst_34777);
var inst_34748 = inst_34798;
var inst_34749 = null;
var inst_34750 = (0);
var inst_34751 = (0);
var state_34822__$1 = (function (){var statearr_34908 = state_34822;
(statearr_34908[(9)] = inst_34751);

(statearr_34908[(25)] = inst_34797);

(statearr_34908[(19)] = inst_34750);

(statearr_34908[(20)] = inst_34748);

(statearr_34908[(12)] = inst_34749);

return statearr_34908;
})();
var statearr_34912_37231 = state_34822__$1;
(statearr_34912_37231[(2)] = null);

(statearr_34912_37231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (43))){
var state_34822__$1 = state_34822;
var statearr_34913_37236 = state_34822__$1;
(statearr_34913_37236[(2)] = null);

(statearr_34913_37236[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (29))){
var inst_34806 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34915_37243 = state_34822__$1;
(statearr_34915_37243[(2)] = inst_34806);

(statearr_34915_37243[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (44))){
var inst_34815 = (state_34822[(2)]);
var state_34822__$1 = (function (){var statearr_34916 = state_34822;
(statearr_34916[(26)] = inst_34815);

return statearr_34916;
})();
var statearr_34917_37248 = state_34822__$1;
(statearr_34917_37248[(2)] = null);

(statearr_34917_37248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (6))){
var inst_34740 = (state_34822[(27)]);
var inst_34739 = cljs.core.deref(cs);
var inst_34740__$1 = cljs.core.keys(inst_34739);
var inst_34741 = cljs.core.count(inst_34740__$1);
var inst_34742 = cljs.core.reset_BANG_(dctr,inst_34741);
var inst_34747 = cljs.core.seq(inst_34740__$1);
var inst_34748 = inst_34747;
var inst_34749 = null;
var inst_34750 = (0);
var inst_34751 = (0);
var state_34822__$1 = (function (){var statearr_34923 = state_34822;
(statearr_34923[(9)] = inst_34751);

(statearr_34923[(27)] = inst_34740__$1);

(statearr_34923[(19)] = inst_34750);

(statearr_34923[(20)] = inst_34748);

(statearr_34923[(28)] = inst_34742);

(statearr_34923[(12)] = inst_34749);

return statearr_34923;
})();
var statearr_34926_37258 = state_34822__$1;
(statearr_34926_37258[(2)] = null);

(statearr_34926_37258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (28))){
var inst_34748 = (state_34822[(20)]);
var inst_34777 = (state_34822[(23)]);
var inst_34777__$1 = cljs.core.seq(inst_34748);
var state_34822__$1 = (function (){var statearr_34927 = state_34822;
(statearr_34927[(23)] = inst_34777__$1);

return statearr_34927;
})();
if(inst_34777__$1){
var statearr_34928_37259 = state_34822__$1;
(statearr_34928_37259[(1)] = (33));

} else {
var statearr_34929_37260 = state_34822__$1;
(statearr_34929_37260[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (25))){
var inst_34751 = (state_34822[(9)]);
var inst_34750 = (state_34822[(19)]);
var inst_34755 = (inst_34751 < inst_34750);
var inst_34756 = inst_34755;
var state_34822__$1 = state_34822;
if(cljs.core.truth_(inst_34756)){
var statearr_34937_37261 = state_34822__$1;
(statearr_34937_37261[(1)] = (27));

} else {
var statearr_34943_37262 = state_34822__$1;
(statearr_34943_37262[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (34))){
var state_34822__$1 = state_34822;
var statearr_34970_37263 = state_34822__$1;
(statearr_34970_37263[(2)] = null);

(statearr_34970_37263[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (17))){
var state_34822__$1 = state_34822;
var statearr_34984_37264 = state_34822__$1;
(statearr_34984_37264[(2)] = null);

(statearr_34984_37264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (3))){
var inst_34820 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34822__$1,inst_34820);
} else {
if((state_val_34823 === (12))){
var inst_34735 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34985_37265 = state_34822__$1;
(statearr_34985_37265[(2)] = inst_34735);

(statearr_34985_37265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (2))){
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34822__$1,(4),ch);
} else {
if((state_val_34823 === (23))){
var state_34822__$1 = state_34822;
var statearr_34987_37267 = state_34822__$1;
(statearr_34987_37267[(2)] = null);

(statearr_34987_37267[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (35))){
var inst_34804 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34993_37270 = state_34822__$1;
(statearr_34993_37270[(2)] = inst_34804);

(statearr_34993_37270[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (19))){
var inst_34705 = (state_34822[(7)]);
var inst_34709 = cljs.core.chunk_first(inst_34705);
var inst_34710 = cljs.core.chunk_rest(inst_34705);
var inst_34711 = cljs.core.count(inst_34709);
var inst_34680 = inst_34710;
var inst_34681 = inst_34709;
var inst_34682 = inst_34711;
var inst_34683 = (0);
var state_34822__$1 = (function (){var statearr_35001 = state_34822;
(statearr_35001[(13)] = inst_34683);

(statearr_35001[(14)] = inst_34681);

(statearr_35001[(16)] = inst_34680);

(statearr_35001[(17)] = inst_34682);

return statearr_35001;
})();
var statearr_35002_37271 = state_34822__$1;
(statearr_35002_37271[(2)] = null);

(statearr_35002_37271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (11))){
var inst_34680 = (state_34822[(16)]);
var inst_34705 = (state_34822[(7)]);
var inst_34705__$1 = cljs.core.seq(inst_34680);
var state_34822__$1 = (function (){var statearr_35003 = state_34822;
(statearr_35003[(7)] = inst_34705__$1);

return statearr_35003;
})();
if(inst_34705__$1){
var statearr_35004_37272 = state_34822__$1;
(statearr_35004_37272[(1)] = (16));

} else {
var statearr_35005_37273 = state_34822__$1;
(statearr_35005_37273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (9))){
var inst_34737 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_35006_37274 = state_34822__$1;
(statearr_35006_37274[(2)] = inst_34737);

(statearr_35006_37274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (5))){
var inst_34678 = cljs.core.deref(cs);
var inst_34679 = cljs.core.seq(inst_34678);
var inst_34680 = inst_34679;
var inst_34681 = null;
var inst_34682 = (0);
var inst_34683 = (0);
var state_34822__$1 = (function (){var statearr_35007 = state_34822;
(statearr_35007[(13)] = inst_34683);

(statearr_35007[(14)] = inst_34681);

(statearr_35007[(16)] = inst_34680);

(statearr_35007[(17)] = inst_34682);

return statearr_35007;
})();
var statearr_35008_37275 = state_34822__$1;
(statearr_35008_37275[(2)] = null);

(statearr_35008_37275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (14))){
var state_34822__$1 = state_34822;
var statearr_35009_37276 = state_34822__$1;
(statearr_35009_37276[(2)] = null);

(statearr_35009_37276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (45))){
var inst_34812 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_35010_37277 = state_34822__$1;
(statearr_35010_37277[(2)] = inst_34812);

(statearr_35010_37277[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (26))){
var inst_34740 = (state_34822[(27)]);
var inst_34808 = (state_34822[(2)]);
var inst_34809 = cljs.core.seq(inst_34740);
var state_34822__$1 = (function (){var statearr_35017 = state_34822;
(statearr_35017[(29)] = inst_34808);

return statearr_35017;
})();
if(inst_34809){
var statearr_35020_37284 = state_34822__$1;
(statearr_35020_37284[(1)] = (42));

} else {
var statearr_35022_37285 = state_34822__$1;
(statearr_35022_37285[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (16))){
var inst_34705 = (state_34822[(7)]);
var inst_34707 = cljs.core.chunked_seq_QMARK_(inst_34705);
var state_34822__$1 = state_34822;
if(inst_34707){
var statearr_35024_37286 = state_34822__$1;
(statearr_35024_37286[(1)] = (19));

} else {
var statearr_35025_37287 = state_34822__$1;
(statearr_35025_37287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (38))){
var inst_34801 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_35029_37288 = state_34822__$1;
(statearr_35029_37288[(2)] = inst_34801);

(statearr_35029_37288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (30))){
var state_34822__$1 = state_34822;
var statearr_35035_37289 = state_34822__$1;
(statearr_35035_37289[(2)] = null);

(statearr_35035_37289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (10))){
var inst_34683 = (state_34822[(13)]);
var inst_34681 = (state_34822[(14)]);
var inst_34691 = cljs.core._nth(inst_34681,inst_34683);
var inst_34693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34691,(0),null);
var inst_34694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34691,(1),null);
var state_34822__$1 = (function (){var statearr_35037 = state_34822;
(statearr_35037[(24)] = inst_34693);

return statearr_35037;
})();
if(cljs.core.truth_(inst_34694)){
var statearr_35038_37290 = state_34822__$1;
(statearr_35038_37290[(1)] = (13));

} else {
var statearr_35039_37291 = state_34822__$1;
(statearr_35039_37291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (18))){
var inst_34733 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_35041_37292 = state_34822__$1;
(statearr_35041_37292[(2)] = inst_34733);

(statearr_35041_37292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (42))){
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34822__$1,(45),dchan);
} else {
if((state_val_34823 === (37))){
var inst_34790 = (state_34822[(22)]);
var inst_34777 = (state_34822[(23)]);
var inst_34670 = (state_34822[(11)]);
var inst_34790__$1 = cljs.core.first(inst_34777);
var inst_34792 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34790__$1,inst_34670,done);
var state_34822__$1 = (function (){var statearr_35044 = state_34822;
(statearr_35044[(22)] = inst_34790__$1);

return statearr_35044;
})();
if(cljs.core.truth_(inst_34792)){
var statearr_35047_37293 = state_34822__$1;
(statearr_35047_37293[(1)] = (39));

} else {
var statearr_35049_37294 = state_34822__$1;
(statearr_35049_37294[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (8))){
var inst_34683 = (state_34822[(13)]);
var inst_34682 = (state_34822[(17)]);
var inst_34685 = (inst_34683 < inst_34682);
var inst_34686 = inst_34685;
var state_34822__$1 = state_34822;
if(cljs.core.truth_(inst_34686)){
var statearr_35051_37295 = state_34822__$1;
(statearr_35051_37295[(1)] = (10));

} else {
var statearr_35052_37296 = state_34822__$1;
(statearr_35052_37296[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33004__auto__ = null;
var cljs$core$async$mult_$_state_machine__33004__auto____0 = (function (){
var statearr_35059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35059[(0)] = cljs$core$async$mult_$_state_machine__33004__auto__);

(statearr_35059[(1)] = (1));

return statearr_35059;
});
var cljs$core$async$mult_$_state_machine__33004__auto____1 = (function (state_34822){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_34822);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e35061){var ex__33007__auto__ = e35061;
var statearr_35062_37297 = state_34822;
(statearr_35062_37297[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_34822[(4)]))){
var statearr_35063_37298 = state_34822;
(statearr_35063_37298[(1)] = cljs.core.first((state_34822[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37299 = state_34822;
state_34822 = G__37299;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33004__auto__ = function(state_34822){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33004__auto____1.call(this,state_34822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33004__auto____0;
cljs$core$async$mult_$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33004__auto____1;
return cljs$core$async$mult_$_state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_35064 = f__33246__auto__();
(statearr_35064[(6)] = c__33245__auto___37181);

return statearr_35064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35068 = arguments.length;
switch (G__35068) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37311 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37311(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37312 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37312(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37313 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37313(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37314 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37314(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37315 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37315(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37322 = arguments.length;
var i__4819__auto___37323 = (0);
while(true){
if((i__4819__auto___37323 < len__4818__auto___37322)){
args__4824__auto__.push((arguments[i__4819__auto___37323]));

var G__37324 = (i__4819__auto___37323 + (1));
i__4819__auto___37323 = G__37324;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35116){
var map__35117 = p__35116;
var map__35117__$1 = cljs.core.__destructure_map(map__35117);
var opts = map__35117__$1;
var statearr_35119_37325 = state;
(statearr_35119_37325[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35120_37326 = state;
(statearr_35120_37326[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_35121_37328 = state;
(statearr_35121_37328[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35099){
var G__35100 = cljs.core.first(seq35099);
var seq35099__$1 = cljs.core.next(seq35099);
var G__35101 = cljs.core.first(seq35099__$1);
var seq35099__$2 = cljs.core.next(seq35099__$1);
var G__35102 = cljs.core.first(seq35099__$2);
var seq35099__$3 = cljs.core.next(seq35099__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35100,G__35101,G__35102,seq35099__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35124 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35125){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35125 = meta35125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35126,meta35125__$1){
var self__ = this;
var _35126__$1 = this;
return (new cljs.core.async.t_cljs$core$async35124(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35125__$1));
}));

(cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35126){
var self__ = this;
var _35126__$1 = this;
return self__.meta35125;
}));

(cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35124.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35125","meta35125",1751536498,null)], null);
}));

(cljs.core.async.t_cljs$core$async35124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35124");

(cljs.core.async.t_cljs$core$async35124.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35124.
 */
cljs.core.async.__GT_t_cljs$core$async35124 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35124(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35125){
return (new cljs.core.async.t_cljs$core$async35124(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35125));
});

}

return (new cljs.core.async.t_cljs$core$async35124(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33245__auto___37338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_35199){
var state_val_35200 = (state_35199[(1)]);
if((state_val_35200 === (7))){
var inst_35159 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
if(cljs.core.truth_(inst_35159)){
var statearr_35201_37342 = state_35199__$1;
(statearr_35201_37342[(1)] = (8));

} else {
var statearr_35202_37346 = state_35199__$1;
(statearr_35202_37346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (20))){
var inst_35151 = (state_35199[(7)]);
var state_35199__$1 = state_35199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35199__$1,(23),out,inst_35151);
} else {
if((state_val_35200 === (1))){
var inst_35133 = calc_state();
var inst_35134 = cljs.core.__destructure_map(inst_35133);
var inst_35135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35134,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35134,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35134,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35138 = inst_35133;
var state_35199__$1 = (function (){var statearr_35203 = state_35199;
(statearr_35203[(8)] = inst_35135);

(statearr_35203[(9)] = inst_35138);

(statearr_35203[(10)] = inst_35137);

(statearr_35203[(11)] = inst_35136);

return statearr_35203;
})();
var statearr_35204_37347 = state_35199__$1;
(statearr_35204_37347[(2)] = null);

(statearr_35204_37347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (24))){
var inst_35142 = (state_35199[(12)]);
var inst_35138 = inst_35142;
var state_35199__$1 = (function (){var statearr_35205 = state_35199;
(statearr_35205[(9)] = inst_35138);

return statearr_35205;
})();
var statearr_35206_37348 = state_35199__$1;
(statearr_35206_37348[(2)] = null);

(statearr_35206_37348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (4))){
var inst_35151 = (state_35199[(7)]);
var inst_35154 = (state_35199[(13)]);
var inst_35150 = (state_35199[(2)]);
var inst_35151__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35150,(0),null);
var inst_35152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35150,(1),null);
var inst_35154__$1 = (inst_35151__$1 == null);
var state_35199__$1 = (function (){var statearr_35207 = state_35199;
(statearr_35207[(7)] = inst_35151__$1);

(statearr_35207[(14)] = inst_35152);

(statearr_35207[(13)] = inst_35154__$1);

return statearr_35207;
})();
if(cljs.core.truth_(inst_35154__$1)){
var statearr_35208_37349 = state_35199__$1;
(statearr_35208_37349[(1)] = (5));

} else {
var statearr_35209_37350 = state_35199__$1;
(statearr_35209_37350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (15))){
var inst_35143 = (state_35199[(15)]);
var inst_35173 = (state_35199[(16)]);
var inst_35173__$1 = cljs.core.empty_QMARK_(inst_35143);
var state_35199__$1 = (function (){var statearr_35210 = state_35199;
(statearr_35210[(16)] = inst_35173__$1);

return statearr_35210;
})();
if(inst_35173__$1){
var statearr_35211_37351 = state_35199__$1;
(statearr_35211_37351[(1)] = (17));

} else {
var statearr_35212_37352 = state_35199__$1;
(statearr_35212_37352[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (21))){
var inst_35142 = (state_35199[(12)]);
var inst_35138 = inst_35142;
var state_35199__$1 = (function (){var statearr_35217 = state_35199;
(statearr_35217[(9)] = inst_35138);

return statearr_35217;
})();
var statearr_35218_37353 = state_35199__$1;
(statearr_35218_37353[(2)] = null);

(statearr_35218_37353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (13))){
var inst_35166 = (state_35199[(2)]);
var inst_35167 = calc_state();
var inst_35138 = inst_35167;
var state_35199__$1 = (function (){var statearr_35219 = state_35199;
(statearr_35219[(9)] = inst_35138);

(statearr_35219[(17)] = inst_35166);

return statearr_35219;
})();
var statearr_35220_37354 = state_35199__$1;
(statearr_35220_37354[(2)] = null);

(statearr_35220_37354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (22))){
var inst_35193 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
var statearr_35221_37355 = state_35199__$1;
(statearr_35221_37355[(2)] = inst_35193);

(statearr_35221_37355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (6))){
var inst_35152 = (state_35199[(14)]);
var inst_35157 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35152,change);
var state_35199__$1 = state_35199;
var statearr_35222_37356 = state_35199__$1;
(statearr_35222_37356[(2)] = inst_35157);

(statearr_35222_37356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (25))){
var state_35199__$1 = state_35199;
var statearr_35223_37357 = state_35199__$1;
(statearr_35223_37357[(2)] = null);

(statearr_35223_37357[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (17))){
var inst_35144 = (state_35199[(18)]);
var inst_35152 = (state_35199[(14)]);
var inst_35175 = (inst_35144.cljs$core$IFn$_invoke$arity$1 ? inst_35144.cljs$core$IFn$_invoke$arity$1(inst_35152) : inst_35144.call(null,inst_35152));
var inst_35176 = cljs.core.not(inst_35175);
var state_35199__$1 = state_35199;
var statearr_35227_37358 = state_35199__$1;
(statearr_35227_37358[(2)] = inst_35176);

(statearr_35227_37358[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (3))){
var inst_35197 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35199__$1,inst_35197);
} else {
if((state_val_35200 === (12))){
var state_35199__$1 = state_35199;
var statearr_35229_37359 = state_35199__$1;
(statearr_35229_37359[(2)] = null);

(statearr_35229_37359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (2))){
var inst_35142 = (state_35199[(12)]);
var inst_35138 = (state_35199[(9)]);
var inst_35142__$1 = cljs.core.__destructure_map(inst_35138);
var inst_35143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35142__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35142__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35142__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35199__$1 = (function (){var statearr_35233 = state_35199;
(statearr_35233[(12)] = inst_35142__$1);

(statearr_35233[(18)] = inst_35144);

(statearr_35233[(15)] = inst_35143);

return statearr_35233;
})();
return cljs.core.async.ioc_alts_BANG_(state_35199__$1,(4),inst_35145);
} else {
if((state_val_35200 === (23))){
var inst_35184 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
if(cljs.core.truth_(inst_35184)){
var statearr_35234_37360 = state_35199__$1;
(statearr_35234_37360[(1)] = (24));

} else {
var statearr_35235_37361 = state_35199__$1;
(statearr_35235_37361[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (19))){
var inst_35179 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
var statearr_35236_37362 = state_35199__$1;
(statearr_35236_37362[(2)] = inst_35179);

(statearr_35236_37362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (11))){
var inst_35152 = (state_35199[(14)]);
var inst_35163 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35152);
var state_35199__$1 = state_35199;
var statearr_35237_37363 = state_35199__$1;
(statearr_35237_37363[(2)] = inst_35163);

(statearr_35237_37363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (9))){
var inst_35170 = (state_35199[(19)]);
var inst_35143 = (state_35199[(15)]);
var inst_35152 = (state_35199[(14)]);
var inst_35170__$1 = (inst_35143.cljs$core$IFn$_invoke$arity$1 ? inst_35143.cljs$core$IFn$_invoke$arity$1(inst_35152) : inst_35143.call(null,inst_35152));
var state_35199__$1 = (function (){var statearr_35239 = state_35199;
(statearr_35239[(19)] = inst_35170__$1);

return statearr_35239;
})();
if(cljs.core.truth_(inst_35170__$1)){
var statearr_35240_37364 = state_35199__$1;
(statearr_35240_37364[(1)] = (14));

} else {
var statearr_35241_37365 = state_35199__$1;
(statearr_35241_37365[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (5))){
var inst_35154 = (state_35199[(13)]);
var state_35199__$1 = state_35199;
var statearr_35242_37366 = state_35199__$1;
(statearr_35242_37366[(2)] = inst_35154);

(statearr_35242_37366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (14))){
var inst_35170 = (state_35199[(19)]);
var state_35199__$1 = state_35199;
var statearr_35243_37367 = state_35199__$1;
(statearr_35243_37367[(2)] = inst_35170);

(statearr_35243_37367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (26))){
var inst_35189 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
var statearr_35244_37368 = state_35199__$1;
(statearr_35244_37368[(2)] = inst_35189);

(statearr_35244_37368[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (16))){
var inst_35181 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
if(cljs.core.truth_(inst_35181)){
var statearr_35245_37369 = state_35199__$1;
(statearr_35245_37369[(1)] = (20));

} else {
var statearr_35246_37370 = state_35199__$1;
(statearr_35246_37370[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (10))){
var inst_35195 = (state_35199[(2)]);
var state_35199__$1 = state_35199;
var statearr_35247_37371 = state_35199__$1;
(statearr_35247_37371[(2)] = inst_35195);

(statearr_35247_37371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (18))){
var inst_35173 = (state_35199[(16)]);
var state_35199__$1 = state_35199;
var statearr_35248_37372 = state_35199__$1;
(statearr_35248_37372[(2)] = inst_35173);

(statearr_35248_37372[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35200 === (8))){
var inst_35151 = (state_35199[(7)]);
var inst_35161 = (inst_35151 == null);
var state_35199__$1 = state_35199;
if(cljs.core.truth_(inst_35161)){
var statearr_35249_37377 = state_35199__$1;
(statearr_35249_37377[(1)] = (11));

} else {
var statearr_35250_37378 = state_35199__$1;
(statearr_35250_37378[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33004__auto__ = null;
var cljs$core$async$mix_$_state_machine__33004__auto____0 = (function (){
var statearr_35255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35255[(0)] = cljs$core$async$mix_$_state_machine__33004__auto__);

(statearr_35255[(1)] = (1));

return statearr_35255;
});
var cljs$core$async$mix_$_state_machine__33004__auto____1 = (function (state_35199){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_35199);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e35256){var ex__33007__auto__ = e35256;
var statearr_35257_37379 = state_35199;
(statearr_35257_37379[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_35199[(4)]))){
var statearr_35261_37380 = state_35199;
(statearr_35261_37380[(1)] = cljs.core.first((state_35199[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37381 = state_35199;
state_35199 = G__37381;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33004__auto__ = function(state_35199){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33004__auto____1.call(this,state_35199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33004__auto____0;
cljs$core$async$mix_$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33004__auto____1;
return cljs$core$async$mix_$_state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_35262 = f__33246__auto__();
(statearr_35262[(6)] = c__33245__auto___37338);

return statearr_35262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37382 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37382(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37383 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37383(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37384 = (function() {
var G__37385 = null;
var G__37385__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37385__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37385 = function(p,v){
switch(arguments.length){
case 1:
return G__37385__1.call(this,p);
case 2:
return G__37385__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37385.cljs$core$IFn$_invoke$arity$1 = G__37385__1;
G__37385.cljs$core$IFn$_invoke$arity$2 = G__37385__2;
return G__37385;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35272 = arguments.length;
switch (G__35272) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37384(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37384(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35276 = arguments.length;
switch (G__35276) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35274_SHARP_){
if(cljs.core.truth_((p1__35274_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35274_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35274_SHARP_.call(null,topic)))){
return p1__35274_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35274_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35280 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35281){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35281 = meta35281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35282,meta35281__$1){
var self__ = this;
var _35282__$1 = this;
return (new cljs.core.async.t_cljs$core$async35280(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35281__$1));
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35282){
var self__ = this;
var _35282__$1 = this;
return self__.meta35281;
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35280.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35281","meta35281",-125640433,null)], null);
}));

(cljs.core.async.t_cljs$core$async35280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35280");

(cljs.core.async.t_cljs$core$async35280.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35280.
 */
cljs.core.async.__GT_t_cljs$core$async35280 = (function cljs$core$async$__GT_t_cljs$core$async35280(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35281){
return (new cljs.core.async.t_cljs$core$async35280(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35281));
});

}

return (new cljs.core.async.t_cljs$core$async35280(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33245__auto___37406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_35401){
var state_val_35402 = (state_35401[(1)]);
if((state_val_35402 === (7))){
var inst_35397 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35405_37407 = state_35401__$1;
(statearr_35405_37407[(2)] = inst_35397);

(statearr_35405_37407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (20))){
var state_35401__$1 = state_35401;
var statearr_35406_37408 = state_35401__$1;
(statearr_35406_37408[(2)] = null);

(statearr_35406_37408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (1))){
var state_35401__$1 = state_35401;
var statearr_35422_37409 = state_35401__$1;
(statearr_35422_37409[(2)] = null);

(statearr_35422_37409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (24))){
var inst_35370 = (state_35401[(7)]);
var inst_35389 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35370);
var state_35401__$1 = state_35401;
var statearr_35424_37410 = state_35401__$1;
(statearr_35424_37410[(2)] = inst_35389);

(statearr_35424_37410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (4))){
var inst_35309 = (state_35401[(8)]);
var inst_35309__$1 = (state_35401[(2)]);
var inst_35311 = (inst_35309__$1 == null);
var state_35401__$1 = (function (){var statearr_35426 = state_35401;
(statearr_35426[(8)] = inst_35309__$1);

return statearr_35426;
})();
if(cljs.core.truth_(inst_35311)){
var statearr_35428_37411 = state_35401__$1;
(statearr_35428_37411[(1)] = (5));

} else {
var statearr_35429_37412 = state_35401__$1;
(statearr_35429_37412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (15))){
var inst_35364 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35430_37413 = state_35401__$1;
(statearr_35430_37413[(2)] = inst_35364);

(statearr_35430_37413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (21))){
var inst_35394 = (state_35401[(2)]);
var state_35401__$1 = (function (){var statearr_35431 = state_35401;
(statearr_35431[(9)] = inst_35394);

return statearr_35431;
})();
var statearr_35432_37414 = state_35401__$1;
(statearr_35432_37414[(2)] = null);

(statearr_35432_37414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (13))){
var inst_35342 = (state_35401[(10)]);
var inst_35344 = cljs.core.chunked_seq_QMARK_(inst_35342);
var state_35401__$1 = state_35401;
if(inst_35344){
var statearr_35433_37415 = state_35401__$1;
(statearr_35433_37415[(1)] = (16));

} else {
var statearr_35435_37416 = state_35401__$1;
(statearr_35435_37416[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (22))){
var inst_35385 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
if(cljs.core.truth_(inst_35385)){
var statearr_35437_37418 = state_35401__$1;
(statearr_35437_37418[(1)] = (23));

} else {
var statearr_35438_37419 = state_35401__$1;
(statearr_35438_37419[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (6))){
var inst_35370 = (state_35401[(7)]);
var inst_35309 = (state_35401[(8)]);
var inst_35380 = (state_35401[(11)]);
var inst_35370__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35309) : topic_fn.call(null,inst_35309));
var inst_35379 = cljs.core.deref(mults);
var inst_35380__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35379,inst_35370__$1);
var state_35401__$1 = (function (){var statearr_35440 = state_35401;
(statearr_35440[(7)] = inst_35370__$1);

(statearr_35440[(11)] = inst_35380__$1);

return statearr_35440;
})();
if(cljs.core.truth_(inst_35380__$1)){
var statearr_35442_37423 = state_35401__$1;
(statearr_35442_37423[(1)] = (19));

} else {
var statearr_35443_37424 = state_35401__$1;
(statearr_35443_37424[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (25))){
var inst_35391 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35444_37425 = state_35401__$1;
(statearr_35444_37425[(2)] = inst_35391);

(statearr_35444_37425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (17))){
var inst_35342 = (state_35401[(10)]);
var inst_35352 = cljs.core.first(inst_35342);
var inst_35355 = cljs.core.async.muxch_STAR_(inst_35352);
var inst_35356 = cljs.core.async.close_BANG_(inst_35355);
var inst_35357 = cljs.core.next(inst_35342);
var inst_35321 = inst_35357;
var inst_35322 = null;
var inst_35323 = (0);
var inst_35324 = (0);
var state_35401__$1 = (function (){var statearr_35447 = state_35401;
(statearr_35447[(12)] = inst_35356);

(statearr_35447[(13)] = inst_35324);

(statearr_35447[(14)] = inst_35321);

(statearr_35447[(15)] = inst_35323);

(statearr_35447[(16)] = inst_35322);

return statearr_35447;
})();
var statearr_35449_37426 = state_35401__$1;
(statearr_35449_37426[(2)] = null);

(statearr_35449_37426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (3))){
var inst_35399 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35401__$1,inst_35399);
} else {
if((state_val_35402 === (12))){
var inst_35366 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35458_37427 = state_35401__$1;
(statearr_35458_37427[(2)] = inst_35366);

(statearr_35458_37427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (2))){
var state_35401__$1 = state_35401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35401__$1,(4),ch);
} else {
if((state_val_35402 === (23))){
var state_35401__$1 = state_35401;
var statearr_35521_37432 = state_35401__$1;
(statearr_35521_37432[(2)] = null);

(statearr_35521_37432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (19))){
var inst_35309 = (state_35401[(8)]);
var inst_35380 = (state_35401[(11)]);
var inst_35383 = cljs.core.async.muxch_STAR_(inst_35380);
var state_35401__$1 = state_35401;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35401__$1,(22),inst_35383,inst_35309);
} else {
if((state_val_35402 === (11))){
var inst_35342 = (state_35401[(10)]);
var inst_35321 = (state_35401[(14)]);
var inst_35342__$1 = cljs.core.seq(inst_35321);
var state_35401__$1 = (function (){var statearr_35530 = state_35401;
(statearr_35530[(10)] = inst_35342__$1);

return statearr_35530;
})();
if(inst_35342__$1){
var statearr_35532_37434 = state_35401__$1;
(statearr_35532_37434[(1)] = (13));

} else {
var statearr_35533_37435 = state_35401__$1;
(statearr_35533_37435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (9))){
var inst_35368 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35534_37437 = state_35401__$1;
(statearr_35534_37437[(2)] = inst_35368);

(statearr_35534_37437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (5))){
var inst_35317 = cljs.core.deref(mults);
var inst_35318 = cljs.core.vals(inst_35317);
var inst_35319 = cljs.core.seq(inst_35318);
var inst_35321 = inst_35319;
var inst_35322 = null;
var inst_35323 = (0);
var inst_35324 = (0);
var state_35401__$1 = (function (){var statearr_35535 = state_35401;
(statearr_35535[(13)] = inst_35324);

(statearr_35535[(14)] = inst_35321);

(statearr_35535[(15)] = inst_35323);

(statearr_35535[(16)] = inst_35322);

return statearr_35535;
})();
var statearr_35536_37441 = state_35401__$1;
(statearr_35536_37441[(2)] = null);

(statearr_35536_37441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (14))){
var state_35401__$1 = state_35401;
var statearr_35542_37442 = state_35401__$1;
(statearr_35542_37442[(2)] = null);

(statearr_35542_37442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (16))){
var inst_35342 = (state_35401[(10)]);
var inst_35347 = cljs.core.chunk_first(inst_35342);
var inst_35348 = cljs.core.chunk_rest(inst_35342);
var inst_35349 = cljs.core.count(inst_35347);
var inst_35321 = inst_35348;
var inst_35322 = inst_35347;
var inst_35323 = inst_35349;
var inst_35324 = (0);
var state_35401__$1 = (function (){var statearr_35544 = state_35401;
(statearr_35544[(13)] = inst_35324);

(statearr_35544[(14)] = inst_35321);

(statearr_35544[(15)] = inst_35323);

(statearr_35544[(16)] = inst_35322);

return statearr_35544;
})();
var statearr_35551_37453 = state_35401__$1;
(statearr_35551_37453[(2)] = null);

(statearr_35551_37453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (10))){
var inst_35324 = (state_35401[(13)]);
var inst_35321 = (state_35401[(14)]);
var inst_35323 = (state_35401[(15)]);
var inst_35322 = (state_35401[(16)]);
var inst_35336 = cljs.core._nth(inst_35322,inst_35324);
var inst_35337 = cljs.core.async.muxch_STAR_(inst_35336);
var inst_35338 = cljs.core.async.close_BANG_(inst_35337);
var inst_35339 = (inst_35324 + (1));
var tmp35538 = inst_35321;
var tmp35539 = inst_35323;
var tmp35540 = inst_35322;
var inst_35321__$1 = tmp35538;
var inst_35322__$1 = tmp35540;
var inst_35323__$1 = tmp35539;
var inst_35324__$1 = inst_35339;
var state_35401__$1 = (function (){var statearr_35557 = state_35401;
(statearr_35557[(13)] = inst_35324__$1);

(statearr_35557[(14)] = inst_35321__$1);

(statearr_35557[(15)] = inst_35323__$1);

(statearr_35557[(16)] = inst_35322__$1);

(statearr_35557[(17)] = inst_35338);

return statearr_35557;
})();
var statearr_35558_37466 = state_35401__$1;
(statearr_35558_37466[(2)] = null);

(statearr_35558_37466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (18))){
var inst_35361 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35560_37470 = state_35401__$1;
(statearr_35560_37470[(2)] = inst_35361);

(statearr_35560_37470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (8))){
var inst_35324 = (state_35401[(13)]);
var inst_35323 = (state_35401[(15)]);
var inst_35326 = (inst_35324 < inst_35323);
var inst_35328 = inst_35326;
var state_35401__$1 = state_35401;
if(cljs.core.truth_(inst_35328)){
var statearr_35561_37471 = state_35401__$1;
(statearr_35561_37471[(1)] = (10));

} else {
var statearr_35563_37472 = state_35401__$1;
(statearr_35563_37472[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_35567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35567[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_35567[(1)] = (1));

return statearr_35567;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_35401){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_35401);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e35569){var ex__33007__auto__ = e35569;
var statearr_35570_37473 = state_35401;
(statearr_35570_37473[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_35401[(4)]))){
var statearr_35571_37474 = state_35401;
(statearr_35571_37474[(1)] = cljs.core.first((state_35401[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37475 = state_35401;
state_35401 = G__37475;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_35401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_35401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_35572 = f__33246__auto__();
(statearr_35572[(6)] = c__33245__auto___37406);

return statearr_35572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35583 = arguments.length;
switch (G__35583) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35595 = arguments.length;
switch (G__35595) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35600 = arguments.length;
switch (G__35600) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33245__auto___37481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_35676){
var state_val_35677 = (state_35676[(1)]);
if((state_val_35677 === (7))){
var state_35676__$1 = state_35676;
var statearr_35679_37482 = state_35676__$1;
(statearr_35679_37482[(2)] = null);

(statearr_35679_37482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (1))){
var state_35676__$1 = state_35676;
var statearr_35682_37483 = state_35676__$1;
(statearr_35682_37483[(2)] = null);

(statearr_35682_37483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (4))){
var inst_35606 = (state_35676[(7)]);
var inst_35607 = (state_35676[(8)]);
var inst_35628 = (inst_35607 < inst_35606);
var state_35676__$1 = state_35676;
if(cljs.core.truth_(inst_35628)){
var statearr_35685_37484 = state_35676__$1;
(statearr_35685_37484[(1)] = (6));

} else {
var statearr_35686_37485 = state_35676__$1;
(statearr_35686_37485[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (15))){
var inst_35660 = (state_35676[(9)]);
var inst_35666 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35660);
var state_35676__$1 = state_35676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35676__$1,(17),out,inst_35666);
} else {
if((state_val_35677 === (13))){
var inst_35660 = (state_35676[(9)]);
var inst_35660__$1 = (state_35676[(2)]);
var inst_35661 = cljs.core.some(cljs.core.nil_QMARK_,inst_35660__$1);
var state_35676__$1 = (function (){var statearr_35690 = state_35676;
(statearr_35690[(9)] = inst_35660__$1);

return statearr_35690;
})();
if(cljs.core.truth_(inst_35661)){
var statearr_35691_37486 = state_35676__$1;
(statearr_35691_37486[(1)] = (14));

} else {
var statearr_35692_37487 = state_35676__$1;
(statearr_35692_37487[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (6))){
var state_35676__$1 = state_35676;
var statearr_35693_37488 = state_35676__$1;
(statearr_35693_37488[(2)] = null);

(statearr_35693_37488[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (17))){
var inst_35668 = (state_35676[(2)]);
var state_35676__$1 = (function (){var statearr_35724 = state_35676;
(statearr_35724[(10)] = inst_35668);

return statearr_35724;
})();
var statearr_35725_37489 = state_35676__$1;
(statearr_35725_37489[(2)] = null);

(statearr_35725_37489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (3))){
var inst_35673 = (state_35676[(2)]);
var state_35676__$1 = state_35676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35676__$1,inst_35673);
} else {
if((state_val_35677 === (12))){
var _ = (function (){var statearr_35726 = state_35676;
(statearr_35726[(4)] = cljs.core.rest((state_35676[(4)])));

return statearr_35726;
})();
var state_35676__$1 = state_35676;
var ex35711 = (state_35676__$1[(2)]);
var statearr_35735_37490 = state_35676__$1;
(statearr_35735_37490[(5)] = ex35711);


if((ex35711 instanceof Object)){
var statearr_35740_37495 = state_35676__$1;
(statearr_35740_37495[(1)] = (11));

(statearr_35740_37495[(5)] = null);

} else {
throw ex35711;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (2))){
var inst_35605 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35606 = cnt;
var inst_35607 = (0);
var state_35676__$1 = (function (){var statearr_35741 = state_35676;
(statearr_35741[(11)] = inst_35605);

(statearr_35741[(7)] = inst_35606);

(statearr_35741[(8)] = inst_35607);

return statearr_35741;
})();
var statearr_35742_37496 = state_35676__$1;
(statearr_35742_37496[(2)] = null);

(statearr_35742_37496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (11))){
var inst_35637 = (state_35676[(2)]);
var inst_35639 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35676__$1 = (function (){var statearr_35743 = state_35676;
(statearr_35743[(12)] = inst_35637);

return statearr_35743;
})();
var statearr_35744_37497 = state_35676__$1;
(statearr_35744_37497[(2)] = inst_35639);

(statearr_35744_37497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (9))){
var inst_35607 = (state_35676[(8)]);
var _ = (function (){var statearr_35745 = state_35676;
(statearr_35745[(4)] = cljs.core.cons((12),(state_35676[(4)])));

return statearr_35745;
})();
var inst_35646 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35607) : chs__$1.call(null,inst_35607));
var inst_35647 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35607) : done.call(null,inst_35607));
var inst_35648 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35646,inst_35647);
var ___$1 = (function (){var statearr_35752 = state_35676;
(statearr_35752[(4)] = cljs.core.rest((state_35676[(4)])));

return statearr_35752;
})();
var state_35676__$1 = state_35676;
var statearr_35753_37498 = state_35676__$1;
(statearr_35753_37498[(2)] = inst_35648);

(statearr_35753_37498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (5))){
var inst_35658 = (state_35676[(2)]);
var state_35676__$1 = (function (){var statearr_35754 = state_35676;
(statearr_35754[(13)] = inst_35658);

return statearr_35754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35676__$1,(13),dchan);
} else {
if((state_val_35677 === (14))){
var inst_35663 = cljs.core.async.close_BANG_(out);
var state_35676__$1 = state_35676;
var statearr_35755_37499 = state_35676__$1;
(statearr_35755_37499[(2)] = inst_35663);

(statearr_35755_37499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (16))){
var inst_35671 = (state_35676[(2)]);
var state_35676__$1 = state_35676;
var statearr_35756_37500 = state_35676__$1;
(statearr_35756_37500[(2)] = inst_35671);

(statearr_35756_37500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (10))){
var inst_35607 = (state_35676[(8)]);
var inst_35651 = (state_35676[(2)]);
var inst_35652 = (inst_35607 + (1));
var inst_35607__$1 = inst_35652;
var state_35676__$1 = (function (){var statearr_35757 = state_35676;
(statearr_35757[(14)] = inst_35651);

(statearr_35757[(8)] = inst_35607__$1);

return statearr_35757;
})();
var statearr_35758_37501 = state_35676__$1;
(statearr_35758_37501[(2)] = null);

(statearr_35758_37501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35677 === (8))){
var inst_35656 = (state_35676[(2)]);
var state_35676__$1 = state_35676;
var statearr_35759_37502 = state_35676__$1;
(statearr_35759_37502[(2)] = inst_35656);

(statearr_35759_37502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_35760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35760[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_35760[(1)] = (1));

return statearr_35760;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_35676){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_35676);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e35763){var ex__33007__auto__ = e35763;
var statearr_35765_37503 = state_35676;
(statearr_35765_37503[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_35676[(4)]))){
var statearr_35770_37504 = state_35676;
(statearr_35770_37504[(1)] = cljs.core.first((state_35676[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37505 = state_35676;
state_35676 = G__37505;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_35676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_35676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_35771 = f__33246__auto__();
(statearr_35771[(6)] = c__33245__auto___37481);

return statearr_35771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35774 = arguments.length;
switch (G__35774) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33245__auto___37507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_35810){
var state_val_35811 = (state_35810[(1)]);
if((state_val_35811 === (7))){
var inst_35790 = (state_35810[(7)]);
var inst_35789 = (state_35810[(8)]);
var inst_35789__$1 = (state_35810[(2)]);
var inst_35790__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35789__$1,(0),null);
var inst_35791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35789__$1,(1),null);
var inst_35792 = (inst_35790__$1 == null);
var state_35810__$1 = (function (){var statearr_35814 = state_35810;
(statearr_35814[(9)] = inst_35791);

(statearr_35814[(7)] = inst_35790__$1);

(statearr_35814[(8)] = inst_35789__$1);

return statearr_35814;
})();
if(cljs.core.truth_(inst_35792)){
var statearr_35815_37508 = state_35810__$1;
(statearr_35815_37508[(1)] = (8));

} else {
var statearr_35816_37509 = state_35810__$1;
(statearr_35816_37509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (1))){
var inst_35778 = cljs.core.vec(chs);
var inst_35779 = inst_35778;
var state_35810__$1 = (function (){var statearr_35819 = state_35810;
(statearr_35819[(10)] = inst_35779);

return statearr_35819;
})();
var statearr_35820_37510 = state_35810__$1;
(statearr_35820_37510[(2)] = null);

(statearr_35820_37510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (4))){
var inst_35779 = (state_35810[(10)]);
var state_35810__$1 = state_35810;
return cljs.core.async.ioc_alts_BANG_(state_35810__$1,(7),inst_35779);
} else {
if((state_val_35811 === (6))){
var inst_35806 = (state_35810[(2)]);
var state_35810__$1 = state_35810;
var statearr_35826_37515 = state_35810__$1;
(statearr_35826_37515[(2)] = inst_35806);

(statearr_35826_37515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (3))){
var inst_35808 = (state_35810[(2)]);
var state_35810__$1 = state_35810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35810__$1,inst_35808);
} else {
if((state_val_35811 === (2))){
var inst_35779 = (state_35810[(10)]);
var inst_35781 = cljs.core.count(inst_35779);
var inst_35782 = (inst_35781 > (0));
var state_35810__$1 = state_35810;
if(cljs.core.truth_(inst_35782)){
var statearr_35841_37516 = state_35810__$1;
(statearr_35841_37516[(1)] = (4));

} else {
var statearr_35842_37517 = state_35810__$1;
(statearr_35842_37517[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (11))){
var inst_35779 = (state_35810[(10)]);
var inst_35799 = (state_35810[(2)]);
var tmp35827 = inst_35779;
var inst_35779__$1 = tmp35827;
var state_35810__$1 = (function (){var statearr_35847 = state_35810;
(statearr_35847[(10)] = inst_35779__$1);

(statearr_35847[(11)] = inst_35799);

return statearr_35847;
})();
var statearr_35848_37518 = state_35810__$1;
(statearr_35848_37518[(2)] = null);

(statearr_35848_37518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (9))){
var inst_35790 = (state_35810[(7)]);
var state_35810__$1 = state_35810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35810__$1,(11),out,inst_35790);
} else {
if((state_val_35811 === (5))){
var inst_35804 = cljs.core.async.close_BANG_(out);
var state_35810__$1 = state_35810;
var statearr_35850_37520 = state_35810__$1;
(statearr_35850_37520[(2)] = inst_35804);

(statearr_35850_37520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (10))){
var inst_35802 = (state_35810[(2)]);
var state_35810__$1 = state_35810;
var statearr_35851_37521 = state_35810__$1;
(statearr_35851_37521[(2)] = inst_35802);

(statearr_35851_37521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (8))){
var inst_35791 = (state_35810[(9)]);
var inst_35790 = (state_35810[(7)]);
var inst_35779 = (state_35810[(10)]);
var inst_35789 = (state_35810[(8)]);
var inst_35794 = (function (){var cs = inst_35779;
var vec__35784 = inst_35789;
var v = inst_35790;
var c = inst_35791;
return (function (p1__35772_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35772_SHARP_);
});
})();
var inst_35795 = cljs.core.filterv(inst_35794,inst_35779);
var inst_35779__$1 = inst_35795;
var state_35810__$1 = (function (){var statearr_35852 = state_35810;
(statearr_35852[(10)] = inst_35779__$1);

return statearr_35852;
})();
var statearr_35853_37522 = state_35810__$1;
(statearr_35853_37522[(2)] = null);

(statearr_35853_37522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_35854 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35854[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_35854[(1)] = (1));

return statearr_35854;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_35810){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_35810);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e35855){var ex__33007__auto__ = e35855;
var statearr_35856_37524 = state_35810;
(statearr_35856_37524[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_35810[(4)]))){
var statearr_35857_37525 = state_35810;
(statearr_35857_37525[(1)] = cljs.core.first((state_35810[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37526 = state_35810;
state_35810 = G__37526;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_35810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_35810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_35858 = f__33246__auto__();
(statearr_35858[(6)] = c__33245__auto___37507);

return statearr_35858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35861 = arguments.length;
switch (G__35861) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33245__auto___37532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_35888){
var state_val_35889 = (state_35888[(1)]);
if((state_val_35889 === (7))){
var inst_35870 = (state_35888[(7)]);
var inst_35870__$1 = (state_35888[(2)]);
var inst_35871 = (inst_35870__$1 == null);
var inst_35872 = cljs.core.not(inst_35871);
var state_35888__$1 = (function (){var statearr_35895 = state_35888;
(statearr_35895[(7)] = inst_35870__$1);

return statearr_35895;
})();
if(inst_35872){
var statearr_35896_37533 = state_35888__$1;
(statearr_35896_37533[(1)] = (8));

} else {
var statearr_35897_37534 = state_35888__$1;
(statearr_35897_37534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (1))){
var inst_35865 = (0);
var state_35888__$1 = (function (){var statearr_35898 = state_35888;
(statearr_35898[(8)] = inst_35865);

return statearr_35898;
})();
var statearr_35899_37535 = state_35888__$1;
(statearr_35899_37535[(2)] = null);

(statearr_35899_37535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (4))){
var state_35888__$1 = state_35888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35888__$1,(7),ch);
} else {
if((state_val_35889 === (6))){
var inst_35883 = (state_35888[(2)]);
var state_35888__$1 = state_35888;
var statearr_35900_37536 = state_35888__$1;
(statearr_35900_37536[(2)] = inst_35883);

(statearr_35900_37536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (3))){
var inst_35885 = (state_35888[(2)]);
var inst_35886 = cljs.core.async.close_BANG_(out);
var state_35888__$1 = (function (){var statearr_35901 = state_35888;
(statearr_35901[(9)] = inst_35885);

return statearr_35901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35888__$1,inst_35886);
} else {
if((state_val_35889 === (2))){
var inst_35865 = (state_35888[(8)]);
var inst_35867 = (inst_35865 < n);
var state_35888__$1 = state_35888;
if(cljs.core.truth_(inst_35867)){
var statearr_35902_37537 = state_35888__$1;
(statearr_35902_37537[(1)] = (4));

} else {
var statearr_35903_37538 = state_35888__$1;
(statearr_35903_37538[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (11))){
var inst_35865 = (state_35888[(8)]);
var inst_35875 = (state_35888[(2)]);
var inst_35876 = (inst_35865 + (1));
var inst_35865__$1 = inst_35876;
var state_35888__$1 = (function (){var statearr_35905 = state_35888;
(statearr_35905[(10)] = inst_35875);

(statearr_35905[(8)] = inst_35865__$1);

return statearr_35905;
})();
var statearr_35906_37539 = state_35888__$1;
(statearr_35906_37539[(2)] = null);

(statearr_35906_37539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (9))){
var state_35888__$1 = state_35888;
var statearr_35907_37541 = state_35888__$1;
(statearr_35907_37541[(2)] = null);

(statearr_35907_37541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (5))){
var state_35888__$1 = state_35888;
var statearr_35911_37542 = state_35888__$1;
(statearr_35911_37542[(2)] = null);

(statearr_35911_37542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (10))){
var inst_35880 = (state_35888[(2)]);
var state_35888__$1 = state_35888;
var statearr_35913_37543 = state_35888__$1;
(statearr_35913_37543[(2)] = inst_35880);

(statearr_35913_37543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (8))){
var inst_35870 = (state_35888[(7)]);
var state_35888__$1 = state_35888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35888__$1,(11),out,inst_35870);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_35925 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35925[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_35925[(1)] = (1));

return statearr_35925;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_35888){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_35888);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e35930){var ex__33007__auto__ = e35930;
var statearr_35931_37544 = state_35888;
(statearr_35931_37544[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_35888[(4)]))){
var statearr_35932_37545 = state_35888;
(statearr_35932_37545[(1)] = cljs.core.first((state_35888[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37546 = state_35888;
state_35888 = G__37546;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_35888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_35888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_35935 = f__33246__auto__();
(statearr_35935[(6)] = c__33245__auto___37532);

return statearr_35935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35937 = (function (f,ch,meta35938){
this.f = f;
this.ch = ch;
this.meta35938 = meta35938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35939,meta35938__$1){
var self__ = this;
var _35939__$1 = this;
return (new cljs.core.async.t_cljs$core$async35937(self__.f,self__.ch,meta35938__$1));
}));

(cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35939){
var self__ = this;
var _35939__$1 = this;
return self__.meta35938;
}));

(cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35943 = (function (f,ch,meta35938,_,fn1,meta35944){
this.f = f;
this.ch = ch;
this.meta35938 = meta35938;
this._ = _;
this.fn1 = fn1;
this.meta35944 = meta35944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35945,meta35944__$1){
var self__ = this;
var _35945__$1 = this;
return (new cljs.core.async.t_cljs$core$async35943(self__.f,self__.ch,self__.meta35938,self__._,self__.fn1,meta35944__$1));
}));

(cljs.core.async.t_cljs$core$async35943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35945){
var self__ = this;
var _35945__$1 = this;
return self__.meta35944;
}));

(cljs.core.async.t_cljs$core$async35943.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35943.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35936_SHARP_){
var G__35949 = (((p1__35936_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35936_SHARP_) : self__.f.call(null,p1__35936_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35949) : f1.call(null,G__35949));
});
}));

(cljs.core.async.t_cljs$core$async35943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35938","meta35938",-174791934,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35937","cljs.core.async/t_cljs$core$async35937",351846668,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35944","meta35944",-1176532022,null)], null);
}));

(cljs.core.async.t_cljs$core$async35943.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35943");

(cljs.core.async.t_cljs$core$async35943.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35943");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35943.
 */
cljs.core.async.__GT_t_cljs$core$async35943 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35943(f__$1,ch__$1,meta35938__$1,___$2,fn1__$1,meta35944){
return (new cljs.core.async.t_cljs$core$async35943(f__$1,ch__$1,meta35938__$1,___$2,fn1__$1,meta35944));
});

}

return (new cljs.core.async.t_cljs$core$async35943(self__.f,self__.ch,self__.meta35938,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35952 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35952) : self__.f.call(null,G__35952));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35938","meta35938",-174791934,null)], null);
}));

(cljs.core.async.t_cljs$core$async35937.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35937");

(cljs.core.async.t_cljs$core$async35937.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35937");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35937.
 */
cljs.core.async.__GT_t_cljs$core$async35937 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35937(f__$1,ch__$1,meta35938){
return (new cljs.core.async.t_cljs$core$async35937(f__$1,ch__$1,meta35938));
});

}

return (new cljs.core.async.t_cljs$core$async35937(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35954 = (function (f,ch,meta35955){
this.f = f;
this.ch = ch;
this.meta35955 = meta35955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35956,meta35955__$1){
var self__ = this;
var _35956__$1 = this;
return (new cljs.core.async.t_cljs$core$async35954(self__.f,self__.ch,meta35955__$1));
}));

(cljs.core.async.t_cljs$core$async35954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35956){
var self__ = this;
var _35956__$1 = this;
return self__.meta35955;
}));

(cljs.core.async.t_cljs$core$async35954.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35954.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35954.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35955","meta35955",984139158,null)], null);
}));

(cljs.core.async.t_cljs$core$async35954.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35954");

(cljs.core.async.t_cljs$core$async35954.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35954");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35954.
 */
cljs.core.async.__GT_t_cljs$core$async35954 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35954(f__$1,ch__$1,meta35955){
return (new cljs.core.async.t_cljs$core$async35954(f__$1,ch__$1,meta35955));
});

}

return (new cljs.core.async.t_cljs$core$async35954(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35958 = (function (p,ch,meta35959){
this.p = p;
this.ch = ch;
this.meta35959 = meta35959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35960,meta35959__$1){
var self__ = this;
var _35960__$1 = this;
return (new cljs.core.async.t_cljs$core$async35958(self__.p,self__.ch,meta35959__$1));
}));

(cljs.core.async.t_cljs$core$async35958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35960){
var self__ = this;
var _35960__$1 = this;
return self__.meta35959;
}));

(cljs.core.async.t_cljs$core$async35958.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35958.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35958.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35958.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35959","meta35959",1112204091,null)], null);
}));

(cljs.core.async.t_cljs$core$async35958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35958");

(cljs.core.async.t_cljs$core$async35958.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35958.
 */
cljs.core.async.__GT_t_cljs$core$async35958 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35958(p__$1,ch__$1,meta35959){
return (new cljs.core.async.t_cljs$core$async35958(p__$1,ch__$1,meta35959));
});

}

return (new cljs.core.async.t_cljs$core$async35958(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35978 = arguments.length;
switch (G__35978) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33245__auto___37556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_36008){
var state_val_36009 = (state_36008[(1)]);
if((state_val_36009 === (7))){
var inst_36004 = (state_36008[(2)]);
var state_36008__$1 = state_36008;
var statearr_36018_37557 = state_36008__$1;
(statearr_36018_37557[(2)] = inst_36004);

(statearr_36018_37557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (1))){
var state_36008__$1 = state_36008;
var statearr_36019_37558 = state_36008__$1;
(statearr_36019_37558[(2)] = null);

(statearr_36019_37558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (4))){
var inst_35990 = (state_36008[(7)]);
var inst_35990__$1 = (state_36008[(2)]);
var inst_35991 = (inst_35990__$1 == null);
var state_36008__$1 = (function (){var statearr_36020 = state_36008;
(statearr_36020[(7)] = inst_35990__$1);

return statearr_36020;
})();
if(cljs.core.truth_(inst_35991)){
var statearr_36022_37559 = state_36008__$1;
(statearr_36022_37559[(1)] = (5));

} else {
var statearr_36023_37560 = state_36008__$1;
(statearr_36023_37560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (6))){
var inst_35990 = (state_36008[(7)]);
var inst_35995 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35990) : p.call(null,inst_35990));
var state_36008__$1 = state_36008;
if(cljs.core.truth_(inst_35995)){
var statearr_36026_37561 = state_36008__$1;
(statearr_36026_37561[(1)] = (8));

} else {
var statearr_36027_37562 = state_36008__$1;
(statearr_36027_37562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (3))){
var inst_36006 = (state_36008[(2)]);
var state_36008__$1 = state_36008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36008__$1,inst_36006);
} else {
if((state_val_36009 === (2))){
var state_36008__$1 = state_36008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36008__$1,(4),ch);
} else {
if((state_val_36009 === (11))){
var inst_35998 = (state_36008[(2)]);
var state_36008__$1 = state_36008;
var statearr_36028_37563 = state_36008__$1;
(statearr_36028_37563[(2)] = inst_35998);

(statearr_36028_37563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (9))){
var state_36008__$1 = state_36008;
var statearr_36029_37564 = state_36008__$1;
(statearr_36029_37564[(2)] = null);

(statearr_36029_37564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (5))){
var inst_35993 = cljs.core.async.close_BANG_(out);
var state_36008__$1 = state_36008;
var statearr_36030_37565 = state_36008__$1;
(statearr_36030_37565[(2)] = inst_35993);

(statearr_36030_37565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (10))){
var inst_36001 = (state_36008[(2)]);
var state_36008__$1 = (function (){var statearr_36031 = state_36008;
(statearr_36031[(8)] = inst_36001);

return statearr_36031;
})();
var statearr_36032_37566 = state_36008__$1;
(statearr_36032_37566[(2)] = null);

(statearr_36032_37566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (8))){
var inst_35990 = (state_36008[(7)]);
var state_36008__$1 = state_36008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36008__$1,(11),out,inst_35990);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_36034 = [null,null,null,null,null,null,null,null,null];
(statearr_36034[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_36034[(1)] = (1));

return statearr_36034;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_36008){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_36008);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e36036){var ex__33007__auto__ = e36036;
var statearr_36037_37567 = state_36008;
(statearr_36037_37567[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_36008[(4)]))){
var statearr_36038_37568 = state_36008;
(statearr_36038_37568[(1)] = cljs.core.first((state_36008[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37573 = state_36008;
state_36008 = G__37573;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_36008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_36008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_36039 = f__33246__auto__();
(statearr_36039[(6)] = c__33245__auto___37556);

return statearr_36039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36041 = arguments.length;
switch (G__36041) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33245__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_36104){
var state_val_36105 = (state_36104[(1)]);
if((state_val_36105 === (7))){
var inst_36100 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
var statearr_36107_37585 = state_36104__$1;
(statearr_36107_37585[(2)] = inst_36100);

(statearr_36107_37585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (20))){
var inst_36070 = (state_36104[(7)]);
var inst_36081 = (state_36104[(2)]);
var inst_36082 = cljs.core.next(inst_36070);
var inst_36056 = inst_36082;
var inst_36057 = null;
var inst_36058 = (0);
var inst_36059 = (0);
var state_36104__$1 = (function (){var statearr_36108 = state_36104;
(statearr_36108[(8)] = inst_36059);

(statearr_36108[(9)] = inst_36058);

(statearr_36108[(10)] = inst_36057);

(statearr_36108[(11)] = inst_36081);

(statearr_36108[(12)] = inst_36056);

return statearr_36108;
})();
var statearr_36109_37586 = state_36104__$1;
(statearr_36109_37586[(2)] = null);

(statearr_36109_37586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (1))){
var state_36104__$1 = state_36104;
var statearr_36110_37587 = state_36104__$1;
(statearr_36110_37587[(2)] = null);

(statearr_36110_37587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (4))){
var inst_36045 = (state_36104[(13)]);
var inst_36045__$1 = (state_36104[(2)]);
var inst_36046 = (inst_36045__$1 == null);
var state_36104__$1 = (function (){var statearr_36111 = state_36104;
(statearr_36111[(13)] = inst_36045__$1);

return statearr_36111;
})();
if(cljs.core.truth_(inst_36046)){
var statearr_36112_37588 = state_36104__$1;
(statearr_36112_37588[(1)] = (5));

} else {
var statearr_36114_37589 = state_36104__$1;
(statearr_36114_37589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (15))){
var state_36104__$1 = state_36104;
var statearr_36122_37590 = state_36104__$1;
(statearr_36122_37590[(2)] = null);

(statearr_36122_37590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (21))){
var state_36104__$1 = state_36104;
var statearr_36123_37591 = state_36104__$1;
(statearr_36123_37591[(2)] = null);

(statearr_36123_37591[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (13))){
var inst_36059 = (state_36104[(8)]);
var inst_36058 = (state_36104[(9)]);
var inst_36057 = (state_36104[(10)]);
var inst_36056 = (state_36104[(12)]);
var inst_36066 = (state_36104[(2)]);
var inst_36067 = (inst_36059 + (1));
var tmp36119 = inst_36058;
var tmp36120 = inst_36057;
var tmp36121 = inst_36056;
var inst_36056__$1 = tmp36121;
var inst_36057__$1 = tmp36120;
var inst_36058__$1 = tmp36119;
var inst_36059__$1 = inst_36067;
var state_36104__$1 = (function (){var statearr_36124 = state_36104;
(statearr_36124[(8)] = inst_36059__$1);

(statearr_36124[(9)] = inst_36058__$1);

(statearr_36124[(14)] = inst_36066);

(statearr_36124[(10)] = inst_36057__$1);

(statearr_36124[(12)] = inst_36056__$1);

return statearr_36124;
})();
var statearr_36125_37592 = state_36104__$1;
(statearr_36125_37592[(2)] = null);

(statearr_36125_37592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (22))){
var state_36104__$1 = state_36104;
var statearr_36126_37593 = state_36104__$1;
(statearr_36126_37593[(2)] = null);

(statearr_36126_37593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (6))){
var inst_36045 = (state_36104[(13)]);
var inst_36054 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36045) : f.call(null,inst_36045));
var inst_36055 = cljs.core.seq(inst_36054);
var inst_36056 = inst_36055;
var inst_36057 = null;
var inst_36058 = (0);
var inst_36059 = (0);
var state_36104__$1 = (function (){var statearr_36127 = state_36104;
(statearr_36127[(8)] = inst_36059);

(statearr_36127[(9)] = inst_36058);

(statearr_36127[(10)] = inst_36057);

(statearr_36127[(12)] = inst_36056);

return statearr_36127;
})();
var statearr_36128_37594 = state_36104__$1;
(statearr_36128_37594[(2)] = null);

(statearr_36128_37594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (17))){
var inst_36070 = (state_36104[(7)]);
var inst_36074 = cljs.core.chunk_first(inst_36070);
var inst_36075 = cljs.core.chunk_rest(inst_36070);
var inst_36076 = cljs.core.count(inst_36074);
var inst_36056 = inst_36075;
var inst_36057 = inst_36074;
var inst_36058 = inst_36076;
var inst_36059 = (0);
var state_36104__$1 = (function (){var statearr_36157 = state_36104;
(statearr_36157[(8)] = inst_36059);

(statearr_36157[(9)] = inst_36058);

(statearr_36157[(10)] = inst_36057);

(statearr_36157[(12)] = inst_36056);

return statearr_36157;
})();
var statearr_36158_37595 = state_36104__$1;
(statearr_36158_37595[(2)] = null);

(statearr_36158_37595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (3))){
var inst_36102 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36104__$1,inst_36102);
} else {
if((state_val_36105 === (12))){
var inst_36090 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
var statearr_36160_37596 = state_36104__$1;
(statearr_36160_37596[(2)] = inst_36090);

(statearr_36160_37596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (2))){
var state_36104__$1 = state_36104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36104__$1,(4),in$);
} else {
if((state_val_36105 === (23))){
var inst_36098 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
var statearr_36162_37597 = state_36104__$1;
(statearr_36162_37597[(2)] = inst_36098);

(statearr_36162_37597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (19))){
var inst_36085 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
var statearr_36163_37598 = state_36104__$1;
(statearr_36163_37598[(2)] = inst_36085);

(statearr_36163_37598[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (11))){
var inst_36070 = (state_36104[(7)]);
var inst_36056 = (state_36104[(12)]);
var inst_36070__$1 = cljs.core.seq(inst_36056);
var state_36104__$1 = (function (){var statearr_36170 = state_36104;
(statearr_36170[(7)] = inst_36070__$1);

return statearr_36170;
})();
if(inst_36070__$1){
var statearr_36171_37599 = state_36104__$1;
(statearr_36171_37599[(1)] = (14));

} else {
var statearr_36172_37600 = state_36104__$1;
(statearr_36172_37600[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (9))){
var inst_36092 = (state_36104[(2)]);
var inst_36093 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36104__$1 = (function (){var statearr_36173 = state_36104;
(statearr_36173[(15)] = inst_36092);

return statearr_36173;
})();
if(cljs.core.truth_(inst_36093)){
var statearr_36174_37601 = state_36104__$1;
(statearr_36174_37601[(1)] = (21));

} else {
var statearr_36175_37602 = state_36104__$1;
(statearr_36175_37602[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (5))){
var inst_36048 = cljs.core.async.close_BANG_(out);
var state_36104__$1 = state_36104;
var statearr_36176_37603 = state_36104__$1;
(statearr_36176_37603[(2)] = inst_36048);

(statearr_36176_37603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (14))){
var inst_36070 = (state_36104[(7)]);
var inst_36072 = cljs.core.chunked_seq_QMARK_(inst_36070);
var state_36104__$1 = state_36104;
if(inst_36072){
var statearr_36177_37604 = state_36104__$1;
(statearr_36177_37604[(1)] = (17));

} else {
var statearr_36178_37605 = state_36104__$1;
(statearr_36178_37605[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (16))){
var inst_36088 = (state_36104[(2)]);
var state_36104__$1 = state_36104;
var statearr_36179_37606 = state_36104__$1;
(statearr_36179_37606[(2)] = inst_36088);

(statearr_36179_37606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36105 === (10))){
var inst_36059 = (state_36104[(8)]);
var inst_36057 = (state_36104[(10)]);
var inst_36064 = cljs.core._nth(inst_36057,inst_36059);
var state_36104__$1 = state_36104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36104__$1,(13),out,inst_36064);
} else {
if((state_val_36105 === (18))){
var inst_36070 = (state_36104[(7)]);
var inst_36079 = cljs.core.first(inst_36070);
var state_36104__$1 = state_36104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36104__$1,(20),out,inst_36079);
} else {
if((state_val_36105 === (8))){
var inst_36059 = (state_36104[(8)]);
var inst_36058 = (state_36104[(9)]);
var inst_36061 = (inst_36059 < inst_36058);
var inst_36062 = inst_36061;
var state_36104__$1 = state_36104;
if(cljs.core.truth_(inst_36062)){
var statearr_36180_37607 = state_36104__$1;
(statearr_36180_37607[(1)] = (10));

} else {
var statearr_36181_37608 = state_36104__$1;
(statearr_36181_37608[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33004__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33004__auto____0 = (function (){
var statearr_36182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36182[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33004__auto__);

(statearr_36182[(1)] = (1));

return statearr_36182;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33004__auto____1 = (function (state_36104){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_36104);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e36183){var ex__33007__auto__ = e36183;
var statearr_36184_37609 = state_36104;
(statearr_36184_37609[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_36104[(4)]))){
var statearr_36188_37610 = state_36104;
(statearr_36188_37610[(1)] = cljs.core.first((state_36104[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37611 = state_36104;
state_36104 = G__37611;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33004__auto__ = function(state_36104){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33004__auto____1.call(this,state_36104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33004__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33004__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_36191 = f__33246__auto__();
(statearr_36191[(6)] = c__33245__auto__);

return statearr_36191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));

return c__33245__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36196 = arguments.length;
switch (G__36196) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36213 = arguments.length;
switch (G__36213) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36216 = arguments.length;
switch (G__36216) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33245__auto___37615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_36241){
var state_val_36242 = (state_36241[(1)]);
if((state_val_36242 === (7))){
var inst_36236 = (state_36241[(2)]);
var state_36241__$1 = state_36241;
var statearr_36249_37616 = state_36241__$1;
(statearr_36249_37616[(2)] = inst_36236);

(statearr_36249_37616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (1))){
var inst_36218 = null;
var state_36241__$1 = (function (){var statearr_36253 = state_36241;
(statearr_36253[(7)] = inst_36218);

return statearr_36253;
})();
var statearr_36254_37617 = state_36241__$1;
(statearr_36254_37617[(2)] = null);

(statearr_36254_37617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (4))){
var inst_36221 = (state_36241[(8)]);
var inst_36221__$1 = (state_36241[(2)]);
var inst_36222 = (inst_36221__$1 == null);
var inst_36223 = cljs.core.not(inst_36222);
var state_36241__$1 = (function (){var statearr_36255 = state_36241;
(statearr_36255[(8)] = inst_36221__$1);

return statearr_36255;
})();
if(inst_36223){
var statearr_36256_37618 = state_36241__$1;
(statearr_36256_37618[(1)] = (5));

} else {
var statearr_36257_37619 = state_36241__$1;
(statearr_36257_37619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (6))){
var state_36241__$1 = state_36241;
var statearr_36259_37620 = state_36241__$1;
(statearr_36259_37620[(2)] = null);

(statearr_36259_37620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (3))){
var inst_36238 = (state_36241[(2)]);
var inst_36239 = cljs.core.async.close_BANG_(out);
var state_36241__$1 = (function (){var statearr_36272 = state_36241;
(statearr_36272[(9)] = inst_36238);

return statearr_36272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36241__$1,inst_36239);
} else {
if((state_val_36242 === (2))){
var state_36241__$1 = state_36241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36241__$1,(4),ch);
} else {
if((state_val_36242 === (11))){
var inst_36221 = (state_36241[(8)]);
var inst_36230 = (state_36241[(2)]);
var inst_36218 = inst_36221;
var state_36241__$1 = (function (){var statearr_36294 = state_36241;
(statearr_36294[(7)] = inst_36218);

(statearr_36294[(10)] = inst_36230);

return statearr_36294;
})();
var statearr_36299_37629 = state_36241__$1;
(statearr_36299_37629[(2)] = null);

(statearr_36299_37629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (9))){
var inst_36221 = (state_36241[(8)]);
var state_36241__$1 = state_36241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36241__$1,(11),out,inst_36221);
} else {
if((state_val_36242 === (5))){
var inst_36218 = (state_36241[(7)]);
var inst_36221 = (state_36241[(8)]);
var inst_36225 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36221,inst_36218);
var state_36241__$1 = state_36241;
if(inst_36225){
var statearr_36305_37630 = state_36241__$1;
(statearr_36305_37630[(1)] = (8));

} else {
var statearr_36308_37637 = state_36241__$1;
(statearr_36308_37637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (10))){
var inst_36233 = (state_36241[(2)]);
var state_36241__$1 = state_36241;
var statearr_36310_37638 = state_36241__$1;
(statearr_36310_37638[(2)] = inst_36233);

(statearr_36310_37638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (8))){
var inst_36218 = (state_36241[(7)]);
var tmp36303 = inst_36218;
var inst_36218__$1 = tmp36303;
var state_36241__$1 = (function (){var statearr_36312 = state_36241;
(statearr_36312[(7)] = inst_36218__$1);

return statearr_36312;
})();
var statearr_36313_37639 = state_36241__$1;
(statearr_36313_37639[(2)] = null);

(statearr_36313_37639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_36318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36318[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_36318[(1)] = (1));

return statearr_36318;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_36241){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_36241);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e36334){var ex__33007__auto__ = e36334;
var statearr_36335_37641 = state_36241;
(statearr_36335_37641[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_36241[(4)]))){
var statearr_36337_37642 = state_36241;
(statearr_36337_37642[(1)] = cljs.core.first((state_36241[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37643 = state_36241;
state_36241 = G__37643;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_36241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_36241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_36341 = f__33246__auto__();
(statearr_36341[(6)] = c__33245__auto___37615);

return statearr_36341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36344 = arguments.length;
switch (G__36344) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33245__auto___37645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_36386){
var state_val_36387 = (state_36386[(1)]);
if((state_val_36387 === (7))){
var inst_36382 = (state_36386[(2)]);
var state_36386__$1 = state_36386;
var statearr_36393_37646 = state_36386__$1;
(statearr_36393_37646[(2)] = inst_36382);

(statearr_36393_37646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (1))){
var inst_36348 = (new Array(n));
var inst_36349 = inst_36348;
var inst_36350 = (0);
var state_36386__$1 = (function (){var statearr_36398 = state_36386;
(statearr_36398[(7)] = inst_36349);

(statearr_36398[(8)] = inst_36350);

return statearr_36398;
})();
var statearr_36401_37653 = state_36386__$1;
(statearr_36401_37653[(2)] = null);

(statearr_36401_37653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (4))){
var inst_36353 = (state_36386[(9)]);
var inst_36353__$1 = (state_36386[(2)]);
var inst_36354 = (inst_36353__$1 == null);
var inst_36356 = cljs.core.not(inst_36354);
var state_36386__$1 = (function (){var statearr_36408 = state_36386;
(statearr_36408[(9)] = inst_36353__$1);

return statearr_36408;
})();
if(inst_36356){
var statearr_36409_37657 = state_36386__$1;
(statearr_36409_37657[(1)] = (5));

} else {
var statearr_36411_37658 = state_36386__$1;
(statearr_36411_37658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (15))){
var inst_36376 = (state_36386[(2)]);
var state_36386__$1 = state_36386;
var statearr_36413_37659 = state_36386__$1;
(statearr_36413_37659[(2)] = inst_36376);

(statearr_36413_37659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (13))){
var state_36386__$1 = state_36386;
var statearr_36416_37660 = state_36386__$1;
(statearr_36416_37660[(2)] = null);

(statearr_36416_37660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (6))){
var inst_36350 = (state_36386[(8)]);
var inst_36372 = (inst_36350 > (0));
var state_36386__$1 = state_36386;
if(cljs.core.truth_(inst_36372)){
var statearr_36418_37661 = state_36386__$1;
(statearr_36418_37661[(1)] = (12));

} else {
var statearr_36419_37662 = state_36386__$1;
(statearr_36419_37662[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (3))){
var inst_36384 = (state_36386[(2)]);
var state_36386__$1 = state_36386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36386__$1,inst_36384);
} else {
if((state_val_36387 === (12))){
var inst_36349 = (state_36386[(7)]);
var inst_36374 = cljs.core.vec(inst_36349);
var state_36386__$1 = state_36386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36386__$1,(15),out,inst_36374);
} else {
if((state_val_36387 === (2))){
var state_36386__$1 = state_36386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36386__$1,(4),ch);
} else {
if((state_val_36387 === (11))){
var inst_36366 = (state_36386[(2)]);
var inst_36367 = (new Array(n));
var inst_36349 = inst_36367;
var inst_36350 = (0);
var state_36386__$1 = (function (){var statearr_36427 = state_36386;
(statearr_36427[(7)] = inst_36349);

(statearr_36427[(10)] = inst_36366);

(statearr_36427[(8)] = inst_36350);

return statearr_36427;
})();
var statearr_36429_37663 = state_36386__$1;
(statearr_36429_37663[(2)] = null);

(statearr_36429_37663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (9))){
var inst_36349 = (state_36386[(7)]);
var inst_36364 = cljs.core.vec(inst_36349);
var state_36386__$1 = state_36386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36386__$1,(11),out,inst_36364);
} else {
if((state_val_36387 === (5))){
var inst_36349 = (state_36386[(7)]);
var inst_36350 = (state_36386[(8)]);
var inst_36359 = (state_36386[(11)]);
var inst_36353 = (state_36386[(9)]);
var inst_36358 = (inst_36349[inst_36350] = inst_36353);
var inst_36359__$1 = (inst_36350 + (1));
var inst_36360 = (inst_36359__$1 < n);
var state_36386__$1 = (function (){var statearr_36430 = state_36386;
(statearr_36430[(12)] = inst_36358);

(statearr_36430[(11)] = inst_36359__$1);

return statearr_36430;
})();
if(cljs.core.truth_(inst_36360)){
var statearr_36431_37678 = state_36386__$1;
(statearr_36431_37678[(1)] = (8));

} else {
var statearr_36432_37679 = state_36386__$1;
(statearr_36432_37679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (14))){
var inst_36379 = (state_36386[(2)]);
var inst_36380 = cljs.core.async.close_BANG_(out);
var state_36386__$1 = (function (){var statearr_36434 = state_36386;
(statearr_36434[(13)] = inst_36379);

return statearr_36434;
})();
var statearr_36435_37680 = state_36386__$1;
(statearr_36435_37680[(2)] = inst_36380);

(statearr_36435_37680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (10))){
var inst_36370 = (state_36386[(2)]);
var state_36386__$1 = state_36386;
var statearr_36436_37687 = state_36386__$1;
(statearr_36436_37687[(2)] = inst_36370);

(statearr_36436_37687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36387 === (8))){
var inst_36349 = (state_36386[(7)]);
var inst_36359 = (state_36386[(11)]);
var tmp36433 = inst_36349;
var inst_36349__$1 = tmp36433;
var inst_36350 = inst_36359;
var state_36386__$1 = (function (){var statearr_36437 = state_36386;
(statearr_36437[(7)] = inst_36349__$1);

(statearr_36437[(8)] = inst_36350);

return statearr_36437;
})();
var statearr_36442_37688 = state_36386__$1;
(statearr_36442_37688[(2)] = null);

(statearr_36442_37688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_36447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36447[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_36447[(1)] = (1));

return statearr_36447;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_36386){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_36386);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e36448){var ex__33007__auto__ = e36448;
var statearr_36449_37689 = state_36386;
(statearr_36449_37689[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_36386[(4)]))){
var statearr_36450_37690 = state_36386;
(statearr_36450_37690[(1)] = cljs.core.first((state_36386[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37691 = state_36386;
state_36386 = G__37691;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_36386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_36386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_36455 = f__33246__auto__();
(statearr_36455[(6)] = c__33245__auto___37645);

return statearr_36455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36458 = arguments.length;
switch (G__36458) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33245__auto___37696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33246__auto__ = (function (){var switch__33003__auto__ = (function (state_36531){
var state_val_36532 = (state_36531[(1)]);
if((state_val_36532 === (7))){
var inst_36521 = (state_36531[(2)]);
var state_36531__$1 = state_36531;
var statearr_36541_37697 = state_36531__$1;
(statearr_36541_37697[(2)] = inst_36521);

(statearr_36541_37697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (1))){
var inst_36472 = [];
var inst_36473 = inst_36472;
var inst_36474 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36531__$1 = (function (){var statearr_36544 = state_36531;
(statearr_36544[(7)] = inst_36473);

(statearr_36544[(8)] = inst_36474);

return statearr_36544;
})();
var statearr_36545_37698 = state_36531__$1;
(statearr_36545_37698[(2)] = null);

(statearr_36545_37698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (4))){
var inst_36478 = (state_36531[(9)]);
var inst_36478__$1 = (state_36531[(2)]);
var inst_36479 = (inst_36478__$1 == null);
var inst_36480 = cljs.core.not(inst_36479);
var state_36531__$1 = (function (){var statearr_36552 = state_36531;
(statearr_36552[(9)] = inst_36478__$1);

return statearr_36552;
})();
if(inst_36480){
var statearr_36553_37700 = state_36531__$1;
(statearr_36553_37700[(1)] = (5));

} else {
var statearr_36556_37701 = state_36531__$1;
(statearr_36556_37701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (15))){
var inst_36473 = (state_36531[(7)]);
var inst_36513 = cljs.core.vec(inst_36473);
var state_36531__$1 = state_36531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36531__$1,(18),out,inst_36513);
} else {
if((state_val_36532 === (13))){
var inst_36508 = (state_36531[(2)]);
var state_36531__$1 = state_36531;
var statearr_36562_37702 = state_36531__$1;
(statearr_36562_37702[(2)] = inst_36508);

(statearr_36562_37702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (6))){
var inst_36473 = (state_36531[(7)]);
var inst_36510 = inst_36473.length;
var inst_36511 = (inst_36510 > (0));
var state_36531__$1 = state_36531;
if(cljs.core.truth_(inst_36511)){
var statearr_36564_37703 = state_36531__$1;
(statearr_36564_37703[(1)] = (15));

} else {
var statearr_36565_37704 = state_36531__$1;
(statearr_36565_37704[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (17))){
var inst_36518 = (state_36531[(2)]);
var inst_36519 = cljs.core.async.close_BANG_(out);
var state_36531__$1 = (function (){var statearr_36569 = state_36531;
(statearr_36569[(10)] = inst_36518);

return statearr_36569;
})();
var statearr_36571_37705 = state_36531__$1;
(statearr_36571_37705[(2)] = inst_36519);

(statearr_36571_37705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (3))){
var inst_36523 = (state_36531[(2)]);
var state_36531__$1 = state_36531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36531__$1,inst_36523);
} else {
if((state_val_36532 === (12))){
var inst_36473 = (state_36531[(7)]);
var inst_36498 = cljs.core.vec(inst_36473);
var state_36531__$1 = state_36531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36531__$1,(14),out,inst_36498);
} else {
if((state_val_36532 === (2))){
var state_36531__$1 = state_36531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36531__$1,(4),ch);
} else {
if((state_val_36532 === (11))){
var inst_36478 = (state_36531[(9)]);
var inst_36482 = (state_36531[(11)]);
var inst_36473 = (state_36531[(7)]);
var inst_36495 = inst_36473.push(inst_36478);
var tmp36575 = inst_36473;
var inst_36473__$1 = tmp36575;
var inst_36474 = inst_36482;
var state_36531__$1 = (function (){var statearr_36581 = state_36531;
(statearr_36581[(7)] = inst_36473__$1);

(statearr_36581[(12)] = inst_36495);

(statearr_36581[(8)] = inst_36474);

return statearr_36581;
})();
var statearr_36583_37706 = state_36531__$1;
(statearr_36583_37706[(2)] = null);

(statearr_36583_37706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (9))){
var inst_36474 = (state_36531[(8)]);
var inst_36489 = cljs.core.keyword_identical_QMARK_(inst_36474,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36531__$1 = state_36531;
var statearr_36587_37710 = state_36531__$1;
(statearr_36587_37710[(2)] = inst_36489);

(statearr_36587_37710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (5))){
var inst_36486 = (state_36531[(13)]);
var inst_36478 = (state_36531[(9)]);
var inst_36482 = (state_36531[(11)]);
var inst_36474 = (state_36531[(8)]);
var inst_36482__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36478) : f.call(null,inst_36478));
var inst_36486__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36482__$1,inst_36474);
var state_36531__$1 = (function (){var statearr_36591 = state_36531;
(statearr_36591[(13)] = inst_36486__$1);

(statearr_36591[(11)] = inst_36482__$1);

return statearr_36591;
})();
if(inst_36486__$1){
var statearr_36593_37711 = state_36531__$1;
(statearr_36593_37711[(1)] = (8));

} else {
var statearr_36594_37712 = state_36531__$1;
(statearr_36594_37712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (14))){
var inst_36478 = (state_36531[(9)]);
var inst_36482 = (state_36531[(11)]);
var inst_36500 = (state_36531[(2)]);
var inst_36502 = [];
var inst_36504 = inst_36502.push(inst_36478);
var inst_36473 = inst_36502;
var inst_36474 = inst_36482;
var state_36531__$1 = (function (){var statearr_36599 = state_36531;
(statearr_36599[(14)] = inst_36504);

(statearr_36599[(7)] = inst_36473);

(statearr_36599[(15)] = inst_36500);

(statearr_36599[(8)] = inst_36474);

return statearr_36599;
})();
var statearr_36601_37713 = state_36531__$1;
(statearr_36601_37713[(2)] = null);

(statearr_36601_37713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (16))){
var state_36531__$1 = state_36531;
var statearr_36607_37714 = state_36531__$1;
(statearr_36607_37714[(2)] = null);

(statearr_36607_37714[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (10))){
var inst_36492 = (state_36531[(2)]);
var state_36531__$1 = state_36531;
if(cljs.core.truth_(inst_36492)){
var statearr_36609_37715 = state_36531__$1;
(statearr_36609_37715[(1)] = (11));

} else {
var statearr_36610_37716 = state_36531__$1;
(statearr_36610_37716[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (18))){
var inst_36515 = (state_36531[(2)]);
var state_36531__$1 = state_36531;
var statearr_36613_37717 = state_36531__$1;
(statearr_36613_37717[(2)] = inst_36515);

(statearr_36613_37717[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36532 === (8))){
var inst_36486 = (state_36531[(13)]);
var state_36531__$1 = state_36531;
var statearr_36614_37718 = state_36531__$1;
(statearr_36614_37718[(2)] = inst_36486);

(statearr_36614_37718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33004__auto__ = null;
var cljs$core$async$state_machine__33004__auto____0 = (function (){
var statearr_36615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36615[(0)] = cljs$core$async$state_machine__33004__auto__);

(statearr_36615[(1)] = (1));

return statearr_36615;
});
var cljs$core$async$state_machine__33004__auto____1 = (function (state_36531){
while(true){
var ret_value__33005__auto__ = (function (){try{while(true){
var result__33006__auto__ = switch__33003__auto__(state_36531);
if(cljs.core.keyword_identical_QMARK_(result__33006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33006__auto__;
}
break;
}
}catch (e36616){var ex__33007__auto__ = e36616;
var statearr_36617_37719 = state_36531;
(statearr_36617_37719[(2)] = ex__33007__auto__);


if(cljs.core.seq((state_36531[(4)]))){
var statearr_36618_37720 = state_36531;
(statearr_36618_37720[(1)] = cljs.core.first((state_36531[(4)])));

} else {
throw ex__33007__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37721 = state_36531;
state_36531 = G__37721;
continue;
} else {
return ret_value__33005__auto__;
}
break;
}
});
cljs$core$async$state_machine__33004__auto__ = function(state_36531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33004__auto____1.call(this,state_36531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33004__auto____0;
cljs$core$async$state_machine__33004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33004__auto____1;
return cljs$core$async$state_machine__33004__auto__;
})()
})();
var state__33247__auto__ = (function (){var statearr_36619 = f__33246__auto__();
(statearr_36619[(6)] = c__33245__auto___37696);

return statearr_36619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33247__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
