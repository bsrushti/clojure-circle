// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24478 = arguments.length;
switch (G__24478) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24479 = (function (f,blockable,meta24480){
this.f = f;
this.blockable = blockable;
this.meta24480 = meta24480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24481,meta24480__$1){
var self__ = this;
var _24481__$1 = this;
return (new cljs.core.async.t_cljs$core$async24479(self__.f,self__.blockable,meta24480__$1));
});

cljs.core.async.t_cljs$core$async24479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24481){
var self__ = this;
var _24481__$1 = this;
return self__.meta24480;
});

cljs.core.async.t_cljs$core$async24479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24480","meta24480",-1336999026,null)], null);
});

cljs.core.async.t_cljs$core$async24479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24479";

cljs.core.async.t_cljs$core$async24479.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24479");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24479.
 */
cljs.core.async.__GT_t_cljs$core$async24479 = (function cljs$core$async$__GT_t_cljs$core$async24479(f__$1,blockable__$1,meta24480){
return (new cljs.core.async.t_cljs$core$async24479(f__$1,blockable__$1,meta24480));
});

}

return (new cljs.core.async.t_cljs$core$async24479(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__24485 = arguments.length;
switch (G__24485) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24488 = arguments.length;
switch (G__24488) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__24491 = arguments.length;
switch (G__24491) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24493 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24493);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24493,ret){
return (function (){
return fn1.call(null,val_24493);
});})(val_24493,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24495 = arguments.length;
switch (G__24495) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___24497 = n;
var x_24498 = (0);
while(true){
if((x_24498 < n__4607__auto___24497)){
(a[x_24498] = (0));

var G__24499 = (x_24498 + (1));
x_24498 = G__24499;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24500 = (i + (1));
i = G__24500;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24501 = (function (flag,meta24502){
this.flag = flag;
this.meta24502 = meta24502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24503,meta24502__$1){
var self__ = this;
var _24503__$1 = this;
return (new cljs.core.async.t_cljs$core$async24501(self__.flag,meta24502__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24503){
var self__ = this;
var _24503__$1 = this;
return self__.meta24502;
});})(flag))
;

cljs.core.async.t_cljs$core$async24501.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24501.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24502","meta24502",-1952116858,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24501";

cljs.core.async.t_cljs$core$async24501.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24501");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24501.
 */
cljs.core.async.__GT_t_cljs$core$async24501 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24501(flag__$1,meta24502){
return (new cljs.core.async.t_cljs$core$async24501(flag__$1,meta24502));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24501(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24504 = (function (flag,cb,meta24505){
this.flag = flag;
this.cb = cb;
this.meta24505 = meta24505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24506,meta24505__$1){
var self__ = this;
var _24506__$1 = this;
return (new cljs.core.async.t_cljs$core$async24504(self__.flag,self__.cb,meta24505__$1));
});

cljs.core.async.t_cljs$core$async24504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24506){
var self__ = this;
var _24506__$1 = this;
return self__.meta24505;
});

cljs.core.async.t_cljs$core$async24504.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24504.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24505","meta24505",1245922158,null)], null);
});

cljs.core.async.t_cljs$core$async24504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24504";

cljs.core.async.t_cljs$core$async24504.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24504");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24504.
 */
cljs.core.async.__GT_t_cljs$core$async24504 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24504(flag__$1,cb__$1,meta24505){
return (new cljs.core.async.t_cljs$core$async24504(flag__$1,cb__$1,meta24505));
});

}

return (new cljs.core.async.t_cljs$core$async24504(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24507_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24507_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24508_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24508_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24509 = (i + (1));
i = G__24509;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4736__auto__ = [];
var len__4730__auto___24515 = arguments.length;
var i__4731__auto___24516 = (0);
while(true){
if((i__4731__auto___24516 < len__4730__auto___24515)){
args__4736__auto__.push((arguments[i__4731__auto___24516]));

var G__24517 = (i__4731__auto___24516 + (1));
i__4731__auto___24516 = G__24517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24512){
var map__24513 = p__24512;
var map__24513__$1 = (((((!((map__24513 == null))))?(((((map__24513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24513):map__24513);
var opts = map__24513__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24510){
var G__24511 = cljs.core.first.call(null,seq24510);
var seq24510__$1 = cljs.core.next.call(null,seq24510);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24511,seq24510__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__24519 = arguments.length;
switch (G__24519) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24418__auto___24565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___24565){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___24565){
return (function (state_24543){
var state_val_24544 = (state_24543[(1)]);
if((state_val_24544 === (7))){
var inst_24539 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24545_24566 = state_24543__$1;
(statearr_24545_24566[(2)] = inst_24539);

(statearr_24545_24566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (1))){
var state_24543__$1 = state_24543;
var statearr_24546_24567 = state_24543__$1;
(statearr_24546_24567[(2)] = null);

(statearr_24546_24567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (4))){
var inst_24522 = (state_24543[(7)]);
var inst_24522__$1 = (state_24543[(2)]);
var inst_24523 = (inst_24522__$1 == null);
var state_24543__$1 = (function (){var statearr_24547 = state_24543;
(statearr_24547[(7)] = inst_24522__$1);

return statearr_24547;
})();
if(cljs.core.truth_(inst_24523)){
var statearr_24548_24568 = state_24543__$1;
(statearr_24548_24568[(1)] = (5));

} else {
var statearr_24549_24569 = state_24543__$1;
(statearr_24549_24569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (13))){
var state_24543__$1 = state_24543;
var statearr_24550_24570 = state_24543__$1;
(statearr_24550_24570[(2)] = null);

(statearr_24550_24570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (6))){
var inst_24522 = (state_24543[(7)]);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24543__$1,(11),to,inst_24522);
} else {
if((state_val_24544 === (3))){
var inst_24541 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24543__$1,inst_24541);
} else {
if((state_val_24544 === (12))){
var state_24543__$1 = state_24543;
var statearr_24551_24571 = state_24543__$1;
(statearr_24551_24571[(2)] = null);

(statearr_24551_24571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (2))){
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24543__$1,(4),from);
} else {
if((state_val_24544 === (11))){
var inst_24532 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
if(cljs.core.truth_(inst_24532)){
var statearr_24552_24572 = state_24543__$1;
(statearr_24552_24572[(1)] = (12));

} else {
var statearr_24553_24573 = state_24543__$1;
(statearr_24553_24573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (9))){
var state_24543__$1 = state_24543;
var statearr_24554_24574 = state_24543__$1;
(statearr_24554_24574[(2)] = null);

(statearr_24554_24574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (5))){
var state_24543__$1 = state_24543;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24555_24575 = state_24543__$1;
(statearr_24555_24575[(1)] = (8));

} else {
var statearr_24556_24576 = state_24543__$1;
(statearr_24556_24576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (14))){
var inst_24537 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24557_24577 = state_24543__$1;
(statearr_24557_24577[(2)] = inst_24537);

(statearr_24557_24577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (10))){
var inst_24529 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24558_24578 = state_24543__$1;
(statearr_24558_24578[(2)] = inst_24529);

(statearr_24558_24578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (8))){
var inst_24526 = cljs.core.async.close_BANG_.call(null,to);
var state_24543__$1 = state_24543;
var statearr_24559_24579 = state_24543__$1;
(statearr_24559_24579[(2)] = inst_24526);

(statearr_24559_24579[(1)] = (10));


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
});})(c__24418__auto___24565))
;
return ((function (switch__24323__auto__,c__24418__auto___24565){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_24560 = [null,null,null,null,null,null,null,null];
(statearr_24560[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_24560[(1)] = (1));

return statearr_24560;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_24543){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_24543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e24561){if((e24561 instanceof Object)){
var ex__24327__auto__ = e24561;
var statearr_24562_24580 = state_24543;
(statearr_24562_24580[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24581 = state_24543;
state_24543 = G__24581;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_24543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_24543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___24565))
})();
var state__24420__auto__ = (function (){var statearr_24563 = f__24419__auto__.call(null);
(statearr_24563[(6)] = c__24418__auto___24565);

return statearr_24563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___24565))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24582){
var vec__24583 = p__24582;
var v = cljs.core.nth.call(null,vec__24583,(0),null);
var p = cljs.core.nth.call(null,vec__24583,(1),null);
var job = vec__24583;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24418__auto___24754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___24754,res,vec__24583,v,p,job,jobs,results){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___24754,res,vec__24583,v,p,job,jobs,results){
return (function (state_24590){
var state_val_24591 = (state_24590[(1)]);
if((state_val_24591 === (1))){
var state_24590__$1 = state_24590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24590__$1,(2),res,v);
} else {
if((state_val_24591 === (2))){
var inst_24587 = (state_24590[(2)]);
var inst_24588 = cljs.core.async.close_BANG_.call(null,res);
var state_24590__$1 = (function (){var statearr_24592 = state_24590;
(statearr_24592[(7)] = inst_24587);

return statearr_24592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24590__$1,inst_24588);
} else {
return null;
}
}
});})(c__24418__auto___24754,res,vec__24583,v,p,job,jobs,results))
;
return ((function (switch__24323__auto__,c__24418__auto___24754,res,vec__24583,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0 = (function (){
var statearr_24593 = [null,null,null,null,null,null,null,null];
(statearr_24593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__);

(statearr_24593[(1)] = (1));

return statearr_24593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1 = (function (state_24590){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_24590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e24594){if((e24594 instanceof Object)){
var ex__24327__auto__ = e24594;
var statearr_24595_24755 = state_24590;
(statearr_24595_24755[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24756 = state_24590;
state_24590 = G__24756;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__ = function(state_24590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1.call(this,state_24590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___24754,res,vec__24583,v,p,job,jobs,results))
})();
var state__24420__auto__ = (function (){var statearr_24596 = f__24419__auto__.call(null);
(statearr_24596[(6)] = c__24418__auto___24754);

return statearr_24596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___24754,res,vec__24583,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24597){
var vec__24598 = p__24597;
var v = cljs.core.nth.call(null,vec__24598,(0),null);
var p = cljs.core.nth.call(null,vec__24598,(1),null);
var job = vec__24598;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___24757 = n;
var __24758 = (0);
while(true){
if((__24758 < n__4607__auto___24757)){
var G__24601_24759 = type;
var G__24601_24760__$1 = (((G__24601_24759 instanceof cljs.core.Keyword))?G__24601_24759.fqn:null);
switch (G__24601_24760__$1) {
case "compute":
var c__24418__auto___24762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24758,c__24418__auto___24762,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (__24758,c__24418__auto___24762,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async){
return (function (state_24614){
var state_val_24615 = (state_24614[(1)]);
if((state_val_24615 === (1))){
var state_24614__$1 = state_24614;
var statearr_24616_24763 = state_24614__$1;
(statearr_24616_24763[(2)] = null);

(statearr_24616_24763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (2))){
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(4),jobs);
} else {
if((state_val_24615 === (3))){
var inst_24612 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24614__$1,inst_24612);
} else {
if((state_val_24615 === (4))){
var inst_24604 = (state_24614[(2)]);
var inst_24605 = process.call(null,inst_24604);
var state_24614__$1 = state_24614;
if(cljs.core.truth_(inst_24605)){
var statearr_24617_24764 = state_24614__$1;
(statearr_24617_24764[(1)] = (5));

} else {
var statearr_24618_24765 = state_24614__$1;
(statearr_24618_24765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (5))){
var state_24614__$1 = state_24614;
var statearr_24619_24766 = state_24614__$1;
(statearr_24619_24766[(2)] = null);

(statearr_24619_24766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (6))){
var state_24614__$1 = state_24614;
var statearr_24620_24767 = state_24614__$1;
(statearr_24620_24767[(2)] = null);

(statearr_24620_24767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (7))){
var inst_24610 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24621_24768 = state_24614__$1;
(statearr_24621_24768[(2)] = inst_24610);

(statearr_24621_24768[(1)] = (3));


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
});})(__24758,c__24418__auto___24762,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async))
;
return ((function (__24758,switch__24323__auto__,c__24418__auto___24762,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0 = (function (){
var statearr_24622 = [null,null,null,null,null,null,null];
(statearr_24622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__);

(statearr_24622[(1)] = (1));

return statearr_24622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1 = (function (state_24614){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_24614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e24623){if((e24623 instanceof Object)){
var ex__24327__auto__ = e24623;
var statearr_24624_24769 = state_24614;
(statearr_24624_24769[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24770 = state_24614;
state_24614 = G__24770;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__ = function(state_24614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1.call(this,state_24614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__;
})()
;})(__24758,switch__24323__auto__,c__24418__auto___24762,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async))
})();
var state__24420__auto__ = (function (){var statearr_24625 = f__24419__auto__.call(null);
(statearr_24625[(6)] = c__24418__auto___24762);

return statearr_24625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(__24758,c__24418__auto___24762,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async))
);


break;
case "async":
var c__24418__auto___24771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24758,c__24418__auto___24771,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (__24758,c__24418__auto___24771,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async){
return (function (state_24638){
var state_val_24639 = (state_24638[(1)]);
if((state_val_24639 === (1))){
var state_24638__$1 = state_24638;
var statearr_24640_24772 = state_24638__$1;
(statearr_24640_24772[(2)] = null);

(statearr_24640_24772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (2))){
var state_24638__$1 = state_24638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24638__$1,(4),jobs);
} else {
if((state_val_24639 === (3))){
var inst_24636 = (state_24638[(2)]);
var state_24638__$1 = state_24638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24638__$1,inst_24636);
} else {
if((state_val_24639 === (4))){
var inst_24628 = (state_24638[(2)]);
var inst_24629 = async.call(null,inst_24628);
var state_24638__$1 = state_24638;
if(cljs.core.truth_(inst_24629)){
var statearr_24641_24773 = state_24638__$1;
(statearr_24641_24773[(1)] = (5));

} else {
var statearr_24642_24774 = state_24638__$1;
(statearr_24642_24774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (5))){
var state_24638__$1 = state_24638;
var statearr_24643_24775 = state_24638__$1;
(statearr_24643_24775[(2)] = null);

(statearr_24643_24775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (6))){
var state_24638__$1 = state_24638;
var statearr_24644_24776 = state_24638__$1;
(statearr_24644_24776[(2)] = null);

(statearr_24644_24776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24639 === (7))){
var inst_24634 = (state_24638[(2)]);
var state_24638__$1 = state_24638;
var statearr_24645_24777 = state_24638__$1;
(statearr_24645_24777[(2)] = inst_24634);

(statearr_24645_24777[(1)] = (3));


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
});})(__24758,c__24418__auto___24771,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async))
;
return ((function (__24758,switch__24323__auto__,c__24418__auto___24771,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0 = (function (){
var statearr_24646 = [null,null,null,null,null,null,null];
(statearr_24646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__);

(statearr_24646[(1)] = (1));

return statearr_24646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1 = (function (state_24638){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_24638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e24647){if((e24647 instanceof Object)){
var ex__24327__auto__ = e24647;
var statearr_24648_24778 = state_24638;
(statearr_24648_24778[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24779 = state_24638;
state_24638 = G__24779;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__ = function(state_24638){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1.call(this,state_24638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__;
})()
;})(__24758,switch__24323__auto__,c__24418__auto___24771,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async))
})();
var state__24420__auto__ = (function (){var statearr_24649 = f__24419__auto__.call(null);
(statearr_24649[(6)] = c__24418__auto___24771);

return statearr_24649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(__24758,c__24418__auto___24771,G__24601_24759,G__24601_24760__$1,n__4607__auto___24757,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24601_24760__$1)].join('')));

}

var G__24780 = (__24758 + (1));
__24758 = G__24780;
continue;
} else {
}
break;
}

var c__24418__auto___24781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___24781,jobs,results,process,async){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___24781,jobs,results,process,async){
return (function (state_24671){
var state_val_24672 = (state_24671[(1)]);
if((state_val_24672 === (7))){
var inst_24667 = (state_24671[(2)]);
var state_24671__$1 = state_24671;
var statearr_24673_24782 = state_24671__$1;
(statearr_24673_24782[(2)] = inst_24667);

(statearr_24673_24782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (1))){
var state_24671__$1 = state_24671;
var statearr_24674_24783 = state_24671__$1;
(statearr_24674_24783[(2)] = null);

(statearr_24674_24783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (4))){
var inst_24652 = (state_24671[(7)]);
var inst_24652__$1 = (state_24671[(2)]);
var inst_24653 = (inst_24652__$1 == null);
var state_24671__$1 = (function (){var statearr_24675 = state_24671;
(statearr_24675[(7)] = inst_24652__$1);

return statearr_24675;
})();
if(cljs.core.truth_(inst_24653)){
var statearr_24676_24784 = state_24671__$1;
(statearr_24676_24784[(1)] = (5));

} else {
var statearr_24677_24785 = state_24671__$1;
(statearr_24677_24785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (6))){
var inst_24657 = (state_24671[(8)]);
var inst_24652 = (state_24671[(7)]);
var inst_24657__$1 = cljs.core.async.chan.call(null,(1));
var inst_24658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24659 = [inst_24652,inst_24657__$1];
var inst_24660 = (new cljs.core.PersistentVector(null,2,(5),inst_24658,inst_24659,null));
var state_24671__$1 = (function (){var statearr_24678 = state_24671;
(statearr_24678[(8)] = inst_24657__$1);

return statearr_24678;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24671__$1,(8),jobs,inst_24660);
} else {
if((state_val_24672 === (3))){
var inst_24669 = (state_24671[(2)]);
var state_24671__$1 = state_24671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24671__$1,inst_24669);
} else {
if((state_val_24672 === (2))){
var state_24671__$1 = state_24671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24671__$1,(4),from);
} else {
if((state_val_24672 === (9))){
var inst_24664 = (state_24671[(2)]);
var state_24671__$1 = (function (){var statearr_24679 = state_24671;
(statearr_24679[(9)] = inst_24664);

return statearr_24679;
})();
var statearr_24680_24786 = state_24671__$1;
(statearr_24680_24786[(2)] = null);

(statearr_24680_24786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (5))){
var inst_24655 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24671__$1 = state_24671;
var statearr_24681_24787 = state_24671__$1;
(statearr_24681_24787[(2)] = inst_24655);

(statearr_24681_24787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24672 === (8))){
var inst_24657 = (state_24671[(8)]);
var inst_24662 = (state_24671[(2)]);
var state_24671__$1 = (function (){var statearr_24682 = state_24671;
(statearr_24682[(10)] = inst_24662);

return statearr_24682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24671__$1,(9),results,inst_24657);
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
});})(c__24418__auto___24781,jobs,results,process,async))
;
return ((function (switch__24323__auto__,c__24418__auto___24781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0 = (function (){
var statearr_24683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__);

(statearr_24683[(1)] = (1));

return statearr_24683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1 = (function (state_24671){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_24671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e24684){if((e24684 instanceof Object)){
var ex__24327__auto__ = e24684;
var statearr_24685_24788 = state_24671;
(statearr_24685_24788[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24789 = state_24671;
state_24671 = G__24789;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__ = function(state_24671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1.call(this,state_24671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___24781,jobs,results,process,async))
})();
var state__24420__auto__ = (function (){var statearr_24686 = f__24419__auto__.call(null);
(statearr_24686[(6)] = c__24418__auto___24781);

return statearr_24686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___24781,jobs,results,process,async))
);


var c__24418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto__,jobs,results,process,async){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto__,jobs,results,process,async){
return (function (state_24724){
var state_val_24725 = (state_24724[(1)]);
if((state_val_24725 === (7))){
var inst_24720 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24726_24790 = state_24724__$1;
(statearr_24726_24790[(2)] = inst_24720);

(statearr_24726_24790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (20))){
var state_24724__$1 = state_24724;
var statearr_24727_24791 = state_24724__$1;
(statearr_24727_24791[(2)] = null);

(statearr_24727_24791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (1))){
var state_24724__$1 = state_24724;
var statearr_24728_24792 = state_24724__$1;
(statearr_24728_24792[(2)] = null);

(statearr_24728_24792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (4))){
var inst_24689 = (state_24724[(7)]);
var inst_24689__$1 = (state_24724[(2)]);
var inst_24690 = (inst_24689__$1 == null);
var state_24724__$1 = (function (){var statearr_24729 = state_24724;
(statearr_24729[(7)] = inst_24689__$1);

return statearr_24729;
})();
if(cljs.core.truth_(inst_24690)){
var statearr_24730_24793 = state_24724__$1;
(statearr_24730_24793[(1)] = (5));

} else {
var statearr_24731_24794 = state_24724__$1;
(statearr_24731_24794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (15))){
var inst_24702 = (state_24724[(8)]);
var state_24724__$1 = state_24724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24724__$1,(18),to,inst_24702);
} else {
if((state_val_24725 === (21))){
var inst_24715 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24732_24795 = state_24724__$1;
(statearr_24732_24795[(2)] = inst_24715);

(statearr_24732_24795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (13))){
var inst_24717 = (state_24724[(2)]);
var state_24724__$1 = (function (){var statearr_24733 = state_24724;
(statearr_24733[(9)] = inst_24717);

return statearr_24733;
})();
var statearr_24734_24796 = state_24724__$1;
(statearr_24734_24796[(2)] = null);

(statearr_24734_24796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (6))){
var inst_24689 = (state_24724[(7)]);
var state_24724__$1 = state_24724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24724__$1,(11),inst_24689);
} else {
if((state_val_24725 === (17))){
var inst_24710 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
if(cljs.core.truth_(inst_24710)){
var statearr_24735_24797 = state_24724__$1;
(statearr_24735_24797[(1)] = (19));

} else {
var statearr_24736_24798 = state_24724__$1;
(statearr_24736_24798[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (3))){
var inst_24722 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24724__$1,inst_24722);
} else {
if((state_val_24725 === (12))){
var inst_24699 = (state_24724[(10)]);
var state_24724__$1 = state_24724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24724__$1,(14),inst_24699);
} else {
if((state_val_24725 === (2))){
var state_24724__$1 = state_24724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24724__$1,(4),results);
} else {
if((state_val_24725 === (19))){
var state_24724__$1 = state_24724;
var statearr_24737_24799 = state_24724__$1;
(statearr_24737_24799[(2)] = null);

(statearr_24737_24799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (11))){
var inst_24699 = (state_24724[(2)]);
var state_24724__$1 = (function (){var statearr_24738 = state_24724;
(statearr_24738[(10)] = inst_24699);

return statearr_24738;
})();
var statearr_24739_24800 = state_24724__$1;
(statearr_24739_24800[(2)] = null);

(statearr_24739_24800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (9))){
var state_24724__$1 = state_24724;
var statearr_24740_24801 = state_24724__$1;
(statearr_24740_24801[(2)] = null);

(statearr_24740_24801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (5))){
var state_24724__$1 = state_24724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24741_24802 = state_24724__$1;
(statearr_24741_24802[(1)] = (8));

} else {
var statearr_24742_24803 = state_24724__$1;
(statearr_24742_24803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (14))){
var inst_24704 = (state_24724[(11)]);
var inst_24702 = (state_24724[(8)]);
var inst_24702__$1 = (state_24724[(2)]);
var inst_24703 = (inst_24702__$1 == null);
var inst_24704__$1 = cljs.core.not.call(null,inst_24703);
var state_24724__$1 = (function (){var statearr_24743 = state_24724;
(statearr_24743[(11)] = inst_24704__$1);

(statearr_24743[(8)] = inst_24702__$1);

return statearr_24743;
})();
if(inst_24704__$1){
var statearr_24744_24804 = state_24724__$1;
(statearr_24744_24804[(1)] = (15));

} else {
var statearr_24745_24805 = state_24724__$1;
(statearr_24745_24805[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (16))){
var inst_24704 = (state_24724[(11)]);
var state_24724__$1 = state_24724;
var statearr_24746_24806 = state_24724__$1;
(statearr_24746_24806[(2)] = inst_24704);

(statearr_24746_24806[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (10))){
var inst_24696 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24747_24807 = state_24724__$1;
(statearr_24747_24807[(2)] = inst_24696);

(statearr_24747_24807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (18))){
var inst_24707 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24748_24808 = state_24724__$1;
(statearr_24748_24808[(2)] = inst_24707);

(statearr_24748_24808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (8))){
var inst_24693 = cljs.core.async.close_BANG_.call(null,to);
var state_24724__$1 = state_24724;
var statearr_24749_24809 = state_24724__$1;
(statearr_24749_24809[(2)] = inst_24693);

(statearr_24749_24809[(1)] = (10));


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
});})(c__24418__auto__,jobs,results,process,async))
;
return ((function (switch__24323__auto__,c__24418__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0 = (function (){
var statearr_24750 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__);

(statearr_24750[(1)] = (1));

return statearr_24750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1 = (function (state_24724){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_24724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e24751){if((e24751 instanceof Object)){
var ex__24327__auto__ = e24751;
var statearr_24752_24810 = state_24724;
(statearr_24752_24810[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24811 = state_24724;
state_24724 = G__24811;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__ = function(state_24724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1.call(this,state_24724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto__,jobs,results,process,async))
})();
var state__24420__auto__ = (function (){var statearr_24753 = f__24419__auto__.call(null);
(statearr_24753[(6)] = c__24418__auto__);

return statearr_24753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto__,jobs,results,process,async))
);

return c__24418__auto__;
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
var G__24813 = arguments.length;
switch (G__24813) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__24816 = arguments.length;
switch (G__24816) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__24819 = arguments.length;
switch (G__24819) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24418__auto___24868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___24868,tc,fc){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___24868,tc,fc){
return (function (state_24845){
var state_val_24846 = (state_24845[(1)]);
if((state_val_24846 === (7))){
var inst_24841 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24847_24869 = state_24845__$1;
(statearr_24847_24869[(2)] = inst_24841);

(statearr_24847_24869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (1))){
var state_24845__$1 = state_24845;
var statearr_24848_24870 = state_24845__$1;
(statearr_24848_24870[(2)] = null);

(statearr_24848_24870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (4))){
var inst_24822 = (state_24845[(7)]);
var inst_24822__$1 = (state_24845[(2)]);
var inst_24823 = (inst_24822__$1 == null);
var state_24845__$1 = (function (){var statearr_24849 = state_24845;
(statearr_24849[(7)] = inst_24822__$1);

return statearr_24849;
})();
if(cljs.core.truth_(inst_24823)){
var statearr_24850_24871 = state_24845__$1;
(statearr_24850_24871[(1)] = (5));

} else {
var statearr_24851_24872 = state_24845__$1;
(statearr_24851_24872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (13))){
var state_24845__$1 = state_24845;
var statearr_24852_24873 = state_24845__$1;
(statearr_24852_24873[(2)] = null);

(statearr_24852_24873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (6))){
var inst_24822 = (state_24845[(7)]);
var inst_24828 = p.call(null,inst_24822);
var state_24845__$1 = state_24845;
if(cljs.core.truth_(inst_24828)){
var statearr_24853_24874 = state_24845__$1;
(statearr_24853_24874[(1)] = (9));

} else {
var statearr_24854_24875 = state_24845__$1;
(statearr_24854_24875[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (3))){
var inst_24843 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24845__$1,inst_24843);
} else {
if((state_val_24846 === (12))){
var state_24845__$1 = state_24845;
var statearr_24855_24876 = state_24845__$1;
(statearr_24855_24876[(2)] = null);

(statearr_24855_24876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (2))){
var state_24845__$1 = state_24845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24845__$1,(4),ch);
} else {
if((state_val_24846 === (11))){
var inst_24822 = (state_24845[(7)]);
var inst_24832 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24845__$1,(8),inst_24832,inst_24822);
} else {
if((state_val_24846 === (9))){
var state_24845__$1 = state_24845;
var statearr_24856_24877 = state_24845__$1;
(statearr_24856_24877[(2)] = tc);

(statearr_24856_24877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (5))){
var inst_24825 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24826 = cljs.core.async.close_BANG_.call(null,fc);
var state_24845__$1 = (function (){var statearr_24857 = state_24845;
(statearr_24857[(8)] = inst_24825);

return statearr_24857;
})();
var statearr_24858_24878 = state_24845__$1;
(statearr_24858_24878[(2)] = inst_24826);

(statearr_24858_24878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (14))){
var inst_24839 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
var statearr_24859_24879 = state_24845__$1;
(statearr_24859_24879[(2)] = inst_24839);

(statearr_24859_24879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (10))){
var state_24845__$1 = state_24845;
var statearr_24860_24880 = state_24845__$1;
(statearr_24860_24880[(2)] = fc);

(statearr_24860_24880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24846 === (8))){
var inst_24834 = (state_24845[(2)]);
var state_24845__$1 = state_24845;
if(cljs.core.truth_(inst_24834)){
var statearr_24861_24881 = state_24845__$1;
(statearr_24861_24881[(1)] = (12));

} else {
var statearr_24862_24882 = state_24845__$1;
(statearr_24862_24882[(1)] = (13));

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
});})(c__24418__auto___24868,tc,fc))
;
return ((function (switch__24323__auto__,c__24418__auto___24868,tc,fc){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_24863 = [null,null,null,null,null,null,null,null,null];
(statearr_24863[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_24863[(1)] = (1));

return statearr_24863;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_24845){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_24845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e24864){if((e24864 instanceof Object)){
var ex__24327__auto__ = e24864;
var statearr_24865_24883 = state_24845;
(statearr_24865_24883[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24884 = state_24845;
state_24845 = G__24884;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_24845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_24845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___24868,tc,fc))
})();
var state__24420__auto__ = (function (){var statearr_24866 = f__24419__auto__.call(null);
(statearr_24866[(6)] = c__24418__auto___24868);

return statearr_24866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___24868,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto__){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto__){
return (function (state_24905){
var state_val_24906 = (state_24905[(1)]);
if((state_val_24906 === (7))){
var inst_24901 = (state_24905[(2)]);
var state_24905__$1 = state_24905;
var statearr_24907_24925 = state_24905__$1;
(statearr_24907_24925[(2)] = inst_24901);

(statearr_24907_24925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (1))){
var inst_24885 = init;
var state_24905__$1 = (function (){var statearr_24908 = state_24905;
(statearr_24908[(7)] = inst_24885);

return statearr_24908;
})();
var statearr_24909_24926 = state_24905__$1;
(statearr_24909_24926[(2)] = null);

(statearr_24909_24926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (4))){
var inst_24888 = (state_24905[(8)]);
var inst_24888__$1 = (state_24905[(2)]);
var inst_24889 = (inst_24888__$1 == null);
var state_24905__$1 = (function (){var statearr_24910 = state_24905;
(statearr_24910[(8)] = inst_24888__$1);

return statearr_24910;
})();
if(cljs.core.truth_(inst_24889)){
var statearr_24911_24927 = state_24905__$1;
(statearr_24911_24927[(1)] = (5));

} else {
var statearr_24912_24928 = state_24905__$1;
(statearr_24912_24928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (6))){
var inst_24888 = (state_24905[(8)]);
var inst_24885 = (state_24905[(7)]);
var inst_24892 = (state_24905[(9)]);
var inst_24892__$1 = f.call(null,inst_24885,inst_24888);
var inst_24893 = cljs.core.reduced_QMARK_.call(null,inst_24892__$1);
var state_24905__$1 = (function (){var statearr_24913 = state_24905;
(statearr_24913[(9)] = inst_24892__$1);

return statearr_24913;
})();
if(inst_24893){
var statearr_24914_24929 = state_24905__$1;
(statearr_24914_24929[(1)] = (8));

} else {
var statearr_24915_24930 = state_24905__$1;
(statearr_24915_24930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (3))){
var inst_24903 = (state_24905[(2)]);
var state_24905__$1 = state_24905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24905__$1,inst_24903);
} else {
if((state_val_24906 === (2))){
var state_24905__$1 = state_24905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24905__$1,(4),ch);
} else {
if((state_val_24906 === (9))){
var inst_24892 = (state_24905[(9)]);
var inst_24885 = inst_24892;
var state_24905__$1 = (function (){var statearr_24916 = state_24905;
(statearr_24916[(7)] = inst_24885);

return statearr_24916;
})();
var statearr_24917_24931 = state_24905__$1;
(statearr_24917_24931[(2)] = null);

(statearr_24917_24931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (5))){
var inst_24885 = (state_24905[(7)]);
var state_24905__$1 = state_24905;
var statearr_24918_24932 = state_24905__$1;
(statearr_24918_24932[(2)] = inst_24885);

(statearr_24918_24932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (10))){
var inst_24899 = (state_24905[(2)]);
var state_24905__$1 = state_24905;
var statearr_24919_24933 = state_24905__$1;
(statearr_24919_24933[(2)] = inst_24899);

(statearr_24919_24933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24906 === (8))){
var inst_24892 = (state_24905[(9)]);
var inst_24895 = cljs.core.deref.call(null,inst_24892);
var state_24905__$1 = state_24905;
var statearr_24920_24934 = state_24905__$1;
(statearr_24920_24934[(2)] = inst_24895);

(statearr_24920_24934[(1)] = (10));


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
});})(c__24418__auto__))
;
return ((function (switch__24323__auto__,c__24418__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24324__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24324__auto____0 = (function (){
var statearr_24921 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24921[(0)] = cljs$core$async$reduce_$_state_machine__24324__auto__);

(statearr_24921[(1)] = (1));

return statearr_24921;
});
var cljs$core$async$reduce_$_state_machine__24324__auto____1 = (function (state_24905){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_24905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e24922){if((e24922 instanceof Object)){
var ex__24327__auto__ = e24922;
var statearr_24923_24935 = state_24905;
(statearr_24923_24935[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24936 = state_24905;
state_24905 = G__24936;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24324__auto__ = function(state_24905){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24324__auto____1.call(this,state_24905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24324__auto____0;
cljs$core$async$reduce_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24324__auto____1;
return cljs$core$async$reduce_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto__))
})();
var state__24420__auto__ = (function (){var statearr_24924 = f__24419__auto__.call(null);
(statearr_24924[(6)] = c__24418__auto__);

return statearr_24924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto__))
);

return c__24418__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto__,f__$1){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto__,f__$1){
return (function (state_24942){
var state_val_24943 = (state_24942[(1)]);
if((state_val_24943 === (1))){
var inst_24937 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24942__$1 = state_24942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24942__$1,(2),inst_24937);
} else {
if((state_val_24943 === (2))){
var inst_24939 = (state_24942[(2)]);
var inst_24940 = f__$1.call(null,inst_24939);
var state_24942__$1 = state_24942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24942__$1,inst_24940);
} else {
return null;
}
}
});})(c__24418__auto__,f__$1))
;
return ((function (switch__24323__auto__,c__24418__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24324__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24324__auto____0 = (function (){
var statearr_24944 = [null,null,null,null,null,null,null];
(statearr_24944[(0)] = cljs$core$async$transduce_$_state_machine__24324__auto__);

(statearr_24944[(1)] = (1));

return statearr_24944;
});
var cljs$core$async$transduce_$_state_machine__24324__auto____1 = (function (state_24942){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_24942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e24945){if((e24945 instanceof Object)){
var ex__24327__auto__ = e24945;
var statearr_24946_24948 = state_24942;
(statearr_24946_24948[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24949 = state_24942;
state_24942 = G__24949;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24324__auto__ = function(state_24942){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24324__auto____1.call(this,state_24942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24324__auto____0;
cljs$core$async$transduce_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24324__auto____1;
return cljs$core$async$transduce_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto__,f__$1))
})();
var state__24420__auto__ = (function (){var statearr_24947 = f__24419__auto__.call(null);
(statearr_24947[(6)] = c__24418__auto__);

return statearr_24947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto__,f__$1))
);

return c__24418__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24951 = arguments.length;
switch (G__24951) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto__){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto__){
return (function (state_24976){
var state_val_24977 = (state_24976[(1)]);
if((state_val_24977 === (7))){
var inst_24958 = (state_24976[(2)]);
var state_24976__$1 = state_24976;
var statearr_24978_24999 = state_24976__$1;
(statearr_24978_24999[(2)] = inst_24958);

(statearr_24978_24999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24977 === (1))){
var inst_24952 = cljs.core.seq.call(null,coll);
var inst_24953 = inst_24952;
var state_24976__$1 = (function (){var statearr_24979 = state_24976;
(statearr_24979[(7)] = inst_24953);

return statearr_24979;
})();
var statearr_24980_25000 = state_24976__$1;
(statearr_24980_25000[(2)] = null);

(statearr_24980_25000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24977 === (4))){
var inst_24953 = (state_24976[(7)]);
var inst_24956 = cljs.core.first.call(null,inst_24953);
var state_24976__$1 = state_24976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24976__$1,(7),ch,inst_24956);
} else {
if((state_val_24977 === (13))){
var inst_24970 = (state_24976[(2)]);
var state_24976__$1 = state_24976;
var statearr_24981_25001 = state_24976__$1;
(statearr_24981_25001[(2)] = inst_24970);

(statearr_24981_25001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24977 === (6))){
var inst_24961 = (state_24976[(2)]);
var state_24976__$1 = state_24976;
if(cljs.core.truth_(inst_24961)){
var statearr_24982_25002 = state_24976__$1;
(statearr_24982_25002[(1)] = (8));

} else {
var statearr_24983_25003 = state_24976__$1;
(statearr_24983_25003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24977 === (3))){
var inst_24974 = (state_24976[(2)]);
var state_24976__$1 = state_24976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24976__$1,inst_24974);
} else {
if((state_val_24977 === (12))){
var state_24976__$1 = state_24976;
var statearr_24984_25004 = state_24976__$1;
(statearr_24984_25004[(2)] = null);

(statearr_24984_25004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24977 === (2))){
var inst_24953 = (state_24976[(7)]);
var state_24976__$1 = state_24976;
if(cljs.core.truth_(inst_24953)){
var statearr_24985_25005 = state_24976__$1;
(statearr_24985_25005[(1)] = (4));

} else {
var statearr_24986_25006 = state_24976__$1;
(statearr_24986_25006[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24977 === (11))){
var inst_24967 = cljs.core.async.close_BANG_.call(null,ch);
var state_24976__$1 = state_24976;
var statearr_24987_25007 = state_24976__$1;
(statearr_24987_25007[(2)] = inst_24967);

(statearr_24987_25007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24977 === (9))){
var state_24976__$1 = state_24976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24988_25008 = state_24976__$1;
(statearr_24988_25008[(1)] = (11));

} else {
var statearr_24989_25009 = state_24976__$1;
(statearr_24989_25009[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24977 === (5))){
var inst_24953 = (state_24976[(7)]);
var state_24976__$1 = state_24976;
var statearr_24990_25010 = state_24976__$1;
(statearr_24990_25010[(2)] = inst_24953);

(statearr_24990_25010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24977 === (10))){
var inst_24972 = (state_24976[(2)]);
var state_24976__$1 = state_24976;
var statearr_24991_25011 = state_24976__$1;
(statearr_24991_25011[(2)] = inst_24972);

(statearr_24991_25011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24977 === (8))){
var inst_24953 = (state_24976[(7)]);
var inst_24963 = cljs.core.next.call(null,inst_24953);
var inst_24953__$1 = inst_24963;
var state_24976__$1 = (function (){var statearr_24992 = state_24976;
(statearr_24992[(7)] = inst_24953__$1);

return statearr_24992;
})();
var statearr_24993_25012 = state_24976__$1;
(statearr_24993_25012[(2)] = null);

(statearr_24993_25012[(1)] = (2));


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
});})(c__24418__auto__))
;
return ((function (switch__24323__auto__,c__24418__auto__){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_24994 = [null,null,null,null,null,null,null,null];
(statearr_24994[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_24994[(1)] = (1));

return statearr_24994;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_24976){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_24976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e24995){if((e24995 instanceof Object)){
var ex__24327__auto__ = e24995;
var statearr_24996_25013 = state_24976;
(statearr_24996_25013[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25014 = state_24976;
state_24976 = G__25014;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_24976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_24976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto__))
})();
var state__24420__auto__ = (function (){var statearr_24997 = f__24419__auto__.call(null);
(statearr_24997[(6)] = c__24418__auto__);

return statearr_24997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto__))
);

return c__24418__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25015 = (function (ch,cs,meta25016){
this.ch = ch;
this.cs = cs;
this.meta25016 = meta25016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25017,meta25016__$1){
var self__ = this;
var _25017__$1 = this;
return (new cljs.core.async.t_cljs$core$async25015(self__.ch,self__.cs,meta25016__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25017){
var self__ = this;
var _25017__$1 = this;
return self__.meta25016;
});})(cs))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25015.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25016","meta25016",-338817739,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25015";

cljs.core.async.t_cljs$core$async25015.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25015");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25015.
 */
cljs.core.async.__GT_t_cljs$core$async25015 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25015(ch__$1,cs__$1,meta25016){
return (new cljs.core.async.t_cljs$core$async25015(ch__$1,cs__$1,meta25016));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25015(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24418__auto___25237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___25237,cs,m,dchan,dctr,done){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___25237,cs,m,dchan,dctr,done){
return (function (state_25152){
var state_val_25153 = (state_25152[(1)]);
if((state_val_25153 === (7))){
var inst_25148 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25154_25238 = state_25152__$1;
(statearr_25154_25238[(2)] = inst_25148);

(statearr_25154_25238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (20))){
var inst_25051 = (state_25152[(7)]);
var inst_25063 = cljs.core.first.call(null,inst_25051);
var inst_25064 = cljs.core.nth.call(null,inst_25063,(0),null);
var inst_25065 = cljs.core.nth.call(null,inst_25063,(1),null);
var state_25152__$1 = (function (){var statearr_25155 = state_25152;
(statearr_25155[(8)] = inst_25064);

return statearr_25155;
})();
if(cljs.core.truth_(inst_25065)){
var statearr_25156_25239 = state_25152__$1;
(statearr_25156_25239[(1)] = (22));

} else {
var statearr_25157_25240 = state_25152__$1;
(statearr_25157_25240[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (27))){
var inst_25020 = (state_25152[(9)]);
var inst_25093 = (state_25152[(10)]);
var inst_25100 = (state_25152[(11)]);
var inst_25095 = (state_25152[(12)]);
var inst_25100__$1 = cljs.core._nth.call(null,inst_25093,inst_25095);
var inst_25101 = cljs.core.async.put_BANG_.call(null,inst_25100__$1,inst_25020,done);
var state_25152__$1 = (function (){var statearr_25158 = state_25152;
(statearr_25158[(11)] = inst_25100__$1);

return statearr_25158;
})();
if(cljs.core.truth_(inst_25101)){
var statearr_25159_25241 = state_25152__$1;
(statearr_25159_25241[(1)] = (30));

} else {
var statearr_25160_25242 = state_25152__$1;
(statearr_25160_25242[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (1))){
var state_25152__$1 = state_25152;
var statearr_25161_25243 = state_25152__$1;
(statearr_25161_25243[(2)] = null);

(statearr_25161_25243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (24))){
var inst_25051 = (state_25152[(7)]);
var inst_25070 = (state_25152[(2)]);
var inst_25071 = cljs.core.next.call(null,inst_25051);
var inst_25029 = inst_25071;
var inst_25030 = null;
var inst_25031 = (0);
var inst_25032 = (0);
var state_25152__$1 = (function (){var statearr_25162 = state_25152;
(statearr_25162[(13)] = inst_25031);

(statearr_25162[(14)] = inst_25030);

(statearr_25162[(15)] = inst_25029);

(statearr_25162[(16)] = inst_25070);

(statearr_25162[(17)] = inst_25032);

return statearr_25162;
})();
var statearr_25163_25244 = state_25152__$1;
(statearr_25163_25244[(2)] = null);

(statearr_25163_25244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (39))){
var state_25152__$1 = state_25152;
var statearr_25167_25245 = state_25152__$1;
(statearr_25167_25245[(2)] = null);

(statearr_25167_25245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (4))){
var inst_25020 = (state_25152[(9)]);
var inst_25020__$1 = (state_25152[(2)]);
var inst_25021 = (inst_25020__$1 == null);
var state_25152__$1 = (function (){var statearr_25168 = state_25152;
(statearr_25168[(9)] = inst_25020__$1);

return statearr_25168;
})();
if(cljs.core.truth_(inst_25021)){
var statearr_25169_25246 = state_25152__$1;
(statearr_25169_25246[(1)] = (5));

} else {
var statearr_25170_25247 = state_25152__$1;
(statearr_25170_25247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (15))){
var inst_25031 = (state_25152[(13)]);
var inst_25030 = (state_25152[(14)]);
var inst_25029 = (state_25152[(15)]);
var inst_25032 = (state_25152[(17)]);
var inst_25047 = (state_25152[(2)]);
var inst_25048 = (inst_25032 + (1));
var tmp25164 = inst_25031;
var tmp25165 = inst_25030;
var tmp25166 = inst_25029;
var inst_25029__$1 = tmp25166;
var inst_25030__$1 = tmp25165;
var inst_25031__$1 = tmp25164;
var inst_25032__$1 = inst_25048;
var state_25152__$1 = (function (){var statearr_25171 = state_25152;
(statearr_25171[(13)] = inst_25031__$1);

(statearr_25171[(14)] = inst_25030__$1);

(statearr_25171[(18)] = inst_25047);

(statearr_25171[(15)] = inst_25029__$1);

(statearr_25171[(17)] = inst_25032__$1);

return statearr_25171;
})();
var statearr_25172_25248 = state_25152__$1;
(statearr_25172_25248[(2)] = null);

(statearr_25172_25248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (21))){
var inst_25074 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25176_25249 = state_25152__$1;
(statearr_25176_25249[(2)] = inst_25074);

(statearr_25176_25249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (31))){
var inst_25100 = (state_25152[(11)]);
var inst_25104 = done.call(null,null);
var inst_25105 = cljs.core.async.untap_STAR_.call(null,m,inst_25100);
var state_25152__$1 = (function (){var statearr_25177 = state_25152;
(statearr_25177[(19)] = inst_25104);

return statearr_25177;
})();
var statearr_25178_25250 = state_25152__$1;
(statearr_25178_25250[(2)] = inst_25105);

(statearr_25178_25250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (32))){
var inst_25092 = (state_25152[(20)]);
var inst_25094 = (state_25152[(21)]);
var inst_25093 = (state_25152[(10)]);
var inst_25095 = (state_25152[(12)]);
var inst_25107 = (state_25152[(2)]);
var inst_25108 = (inst_25095 + (1));
var tmp25173 = inst_25092;
var tmp25174 = inst_25094;
var tmp25175 = inst_25093;
var inst_25092__$1 = tmp25173;
var inst_25093__$1 = tmp25175;
var inst_25094__$1 = tmp25174;
var inst_25095__$1 = inst_25108;
var state_25152__$1 = (function (){var statearr_25179 = state_25152;
(statearr_25179[(20)] = inst_25092__$1);

(statearr_25179[(22)] = inst_25107);

(statearr_25179[(21)] = inst_25094__$1);

(statearr_25179[(10)] = inst_25093__$1);

(statearr_25179[(12)] = inst_25095__$1);

return statearr_25179;
})();
var statearr_25180_25251 = state_25152__$1;
(statearr_25180_25251[(2)] = null);

(statearr_25180_25251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (40))){
var inst_25120 = (state_25152[(23)]);
var inst_25124 = done.call(null,null);
var inst_25125 = cljs.core.async.untap_STAR_.call(null,m,inst_25120);
var state_25152__$1 = (function (){var statearr_25181 = state_25152;
(statearr_25181[(24)] = inst_25124);

return statearr_25181;
})();
var statearr_25182_25252 = state_25152__$1;
(statearr_25182_25252[(2)] = inst_25125);

(statearr_25182_25252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (33))){
var inst_25111 = (state_25152[(25)]);
var inst_25113 = cljs.core.chunked_seq_QMARK_.call(null,inst_25111);
var state_25152__$1 = state_25152;
if(inst_25113){
var statearr_25183_25253 = state_25152__$1;
(statearr_25183_25253[(1)] = (36));

} else {
var statearr_25184_25254 = state_25152__$1;
(statearr_25184_25254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (13))){
var inst_25041 = (state_25152[(26)]);
var inst_25044 = cljs.core.async.close_BANG_.call(null,inst_25041);
var state_25152__$1 = state_25152;
var statearr_25185_25255 = state_25152__$1;
(statearr_25185_25255[(2)] = inst_25044);

(statearr_25185_25255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (22))){
var inst_25064 = (state_25152[(8)]);
var inst_25067 = cljs.core.async.close_BANG_.call(null,inst_25064);
var state_25152__$1 = state_25152;
var statearr_25186_25256 = state_25152__$1;
(statearr_25186_25256[(2)] = inst_25067);

(statearr_25186_25256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (36))){
var inst_25111 = (state_25152[(25)]);
var inst_25115 = cljs.core.chunk_first.call(null,inst_25111);
var inst_25116 = cljs.core.chunk_rest.call(null,inst_25111);
var inst_25117 = cljs.core.count.call(null,inst_25115);
var inst_25092 = inst_25116;
var inst_25093 = inst_25115;
var inst_25094 = inst_25117;
var inst_25095 = (0);
var state_25152__$1 = (function (){var statearr_25187 = state_25152;
(statearr_25187[(20)] = inst_25092);

(statearr_25187[(21)] = inst_25094);

(statearr_25187[(10)] = inst_25093);

(statearr_25187[(12)] = inst_25095);

return statearr_25187;
})();
var statearr_25188_25257 = state_25152__$1;
(statearr_25188_25257[(2)] = null);

(statearr_25188_25257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (41))){
var inst_25111 = (state_25152[(25)]);
var inst_25127 = (state_25152[(2)]);
var inst_25128 = cljs.core.next.call(null,inst_25111);
var inst_25092 = inst_25128;
var inst_25093 = null;
var inst_25094 = (0);
var inst_25095 = (0);
var state_25152__$1 = (function (){var statearr_25189 = state_25152;
(statearr_25189[(20)] = inst_25092);

(statearr_25189[(27)] = inst_25127);

(statearr_25189[(21)] = inst_25094);

(statearr_25189[(10)] = inst_25093);

(statearr_25189[(12)] = inst_25095);

return statearr_25189;
})();
var statearr_25190_25258 = state_25152__$1;
(statearr_25190_25258[(2)] = null);

(statearr_25190_25258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (43))){
var state_25152__$1 = state_25152;
var statearr_25191_25259 = state_25152__$1;
(statearr_25191_25259[(2)] = null);

(statearr_25191_25259[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (29))){
var inst_25136 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25192_25260 = state_25152__$1;
(statearr_25192_25260[(2)] = inst_25136);

(statearr_25192_25260[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (44))){
var inst_25145 = (state_25152[(2)]);
var state_25152__$1 = (function (){var statearr_25193 = state_25152;
(statearr_25193[(28)] = inst_25145);

return statearr_25193;
})();
var statearr_25194_25261 = state_25152__$1;
(statearr_25194_25261[(2)] = null);

(statearr_25194_25261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (6))){
var inst_25084 = (state_25152[(29)]);
var inst_25083 = cljs.core.deref.call(null,cs);
var inst_25084__$1 = cljs.core.keys.call(null,inst_25083);
var inst_25085 = cljs.core.count.call(null,inst_25084__$1);
var inst_25086 = cljs.core.reset_BANG_.call(null,dctr,inst_25085);
var inst_25091 = cljs.core.seq.call(null,inst_25084__$1);
var inst_25092 = inst_25091;
var inst_25093 = null;
var inst_25094 = (0);
var inst_25095 = (0);
var state_25152__$1 = (function (){var statearr_25195 = state_25152;
(statearr_25195[(20)] = inst_25092);

(statearr_25195[(29)] = inst_25084__$1);

(statearr_25195[(21)] = inst_25094);

(statearr_25195[(10)] = inst_25093);

(statearr_25195[(30)] = inst_25086);

(statearr_25195[(12)] = inst_25095);

return statearr_25195;
})();
var statearr_25196_25262 = state_25152__$1;
(statearr_25196_25262[(2)] = null);

(statearr_25196_25262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (28))){
var inst_25092 = (state_25152[(20)]);
var inst_25111 = (state_25152[(25)]);
var inst_25111__$1 = cljs.core.seq.call(null,inst_25092);
var state_25152__$1 = (function (){var statearr_25197 = state_25152;
(statearr_25197[(25)] = inst_25111__$1);

return statearr_25197;
})();
if(inst_25111__$1){
var statearr_25198_25263 = state_25152__$1;
(statearr_25198_25263[(1)] = (33));

} else {
var statearr_25199_25264 = state_25152__$1;
(statearr_25199_25264[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (25))){
var inst_25094 = (state_25152[(21)]);
var inst_25095 = (state_25152[(12)]);
var inst_25097 = (inst_25095 < inst_25094);
var inst_25098 = inst_25097;
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25098)){
var statearr_25200_25265 = state_25152__$1;
(statearr_25200_25265[(1)] = (27));

} else {
var statearr_25201_25266 = state_25152__$1;
(statearr_25201_25266[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (34))){
var state_25152__$1 = state_25152;
var statearr_25202_25267 = state_25152__$1;
(statearr_25202_25267[(2)] = null);

(statearr_25202_25267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (17))){
var state_25152__$1 = state_25152;
var statearr_25203_25268 = state_25152__$1;
(statearr_25203_25268[(2)] = null);

(statearr_25203_25268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (3))){
var inst_25150 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25152__$1,inst_25150);
} else {
if((state_val_25153 === (12))){
var inst_25079 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25204_25269 = state_25152__$1;
(statearr_25204_25269[(2)] = inst_25079);

(statearr_25204_25269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (2))){
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(4),ch);
} else {
if((state_val_25153 === (23))){
var state_25152__$1 = state_25152;
var statearr_25205_25270 = state_25152__$1;
(statearr_25205_25270[(2)] = null);

(statearr_25205_25270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (35))){
var inst_25134 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25206_25271 = state_25152__$1;
(statearr_25206_25271[(2)] = inst_25134);

(statearr_25206_25271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (19))){
var inst_25051 = (state_25152[(7)]);
var inst_25055 = cljs.core.chunk_first.call(null,inst_25051);
var inst_25056 = cljs.core.chunk_rest.call(null,inst_25051);
var inst_25057 = cljs.core.count.call(null,inst_25055);
var inst_25029 = inst_25056;
var inst_25030 = inst_25055;
var inst_25031 = inst_25057;
var inst_25032 = (0);
var state_25152__$1 = (function (){var statearr_25207 = state_25152;
(statearr_25207[(13)] = inst_25031);

(statearr_25207[(14)] = inst_25030);

(statearr_25207[(15)] = inst_25029);

(statearr_25207[(17)] = inst_25032);

return statearr_25207;
})();
var statearr_25208_25272 = state_25152__$1;
(statearr_25208_25272[(2)] = null);

(statearr_25208_25272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (11))){
var inst_25051 = (state_25152[(7)]);
var inst_25029 = (state_25152[(15)]);
var inst_25051__$1 = cljs.core.seq.call(null,inst_25029);
var state_25152__$1 = (function (){var statearr_25209 = state_25152;
(statearr_25209[(7)] = inst_25051__$1);

return statearr_25209;
})();
if(inst_25051__$1){
var statearr_25210_25273 = state_25152__$1;
(statearr_25210_25273[(1)] = (16));

} else {
var statearr_25211_25274 = state_25152__$1;
(statearr_25211_25274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (9))){
var inst_25081 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25212_25275 = state_25152__$1;
(statearr_25212_25275[(2)] = inst_25081);

(statearr_25212_25275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (5))){
var inst_25027 = cljs.core.deref.call(null,cs);
var inst_25028 = cljs.core.seq.call(null,inst_25027);
var inst_25029 = inst_25028;
var inst_25030 = null;
var inst_25031 = (0);
var inst_25032 = (0);
var state_25152__$1 = (function (){var statearr_25213 = state_25152;
(statearr_25213[(13)] = inst_25031);

(statearr_25213[(14)] = inst_25030);

(statearr_25213[(15)] = inst_25029);

(statearr_25213[(17)] = inst_25032);

return statearr_25213;
})();
var statearr_25214_25276 = state_25152__$1;
(statearr_25214_25276[(2)] = null);

(statearr_25214_25276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (14))){
var state_25152__$1 = state_25152;
var statearr_25215_25277 = state_25152__$1;
(statearr_25215_25277[(2)] = null);

(statearr_25215_25277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (45))){
var inst_25142 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25216_25278 = state_25152__$1;
(statearr_25216_25278[(2)] = inst_25142);

(statearr_25216_25278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (26))){
var inst_25084 = (state_25152[(29)]);
var inst_25138 = (state_25152[(2)]);
var inst_25139 = cljs.core.seq.call(null,inst_25084);
var state_25152__$1 = (function (){var statearr_25217 = state_25152;
(statearr_25217[(31)] = inst_25138);

return statearr_25217;
})();
if(inst_25139){
var statearr_25218_25279 = state_25152__$1;
(statearr_25218_25279[(1)] = (42));

} else {
var statearr_25219_25280 = state_25152__$1;
(statearr_25219_25280[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (16))){
var inst_25051 = (state_25152[(7)]);
var inst_25053 = cljs.core.chunked_seq_QMARK_.call(null,inst_25051);
var state_25152__$1 = state_25152;
if(inst_25053){
var statearr_25220_25281 = state_25152__$1;
(statearr_25220_25281[(1)] = (19));

} else {
var statearr_25221_25282 = state_25152__$1;
(statearr_25221_25282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (38))){
var inst_25131 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25222_25283 = state_25152__$1;
(statearr_25222_25283[(2)] = inst_25131);

(statearr_25222_25283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (30))){
var state_25152__$1 = state_25152;
var statearr_25223_25284 = state_25152__$1;
(statearr_25223_25284[(2)] = null);

(statearr_25223_25284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (10))){
var inst_25030 = (state_25152[(14)]);
var inst_25032 = (state_25152[(17)]);
var inst_25040 = cljs.core._nth.call(null,inst_25030,inst_25032);
var inst_25041 = cljs.core.nth.call(null,inst_25040,(0),null);
var inst_25042 = cljs.core.nth.call(null,inst_25040,(1),null);
var state_25152__$1 = (function (){var statearr_25224 = state_25152;
(statearr_25224[(26)] = inst_25041);

return statearr_25224;
})();
if(cljs.core.truth_(inst_25042)){
var statearr_25225_25285 = state_25152__$1;
(statearr_25225_25285[(1)] = (13));

} else {
var statearr_25226_25286 = state_25152__$1;
(statearr_25226_25286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (18))){
var inst_25077 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25227_25287 = state_25152__$1;
(statearr_25227_25287[(2)] = inst_25077);

(statearr_25227_25287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (42))){
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(45),dchan);
} else {
if((state_val_25153 === (37))){
var inst_25020 = (state_25152[(9)]);
var inst_25120 = (state_25152[(23)]);
var inst_25111 = (state_25152[(25)]);
var inst_25120__$1 = cljs.core.first.call(null,inst_25111);
var inst_25121 = cljs.core.async.put_BANG_.call(null,inst_25120__$1,inst_25020,done);
var state_25152__$1 = (function (){var statearr_25228 = state_25152;
(statearr_25228[(23)] = inst_25120__$1);

return statearr_25228;
})();
if(cljs.core.truth_(inst_25121)){
var statearr_25229_25288 = state_25152__$1;
(statearr_25229_25288[(1)] = (39));

} else {
var statearr_25230_25289 = state_25152__$1;
(statearr_25230_25289[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (8))){
var inst_25031 = (state_25152[(13)]);
var inst_25032 = (state_25152[(17)]);
var inst_25034 = (inst_25032 < inst_25031);
var inst_25035 = inst_25034;
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25035)){
var statearr_25231_25290 = state_25152__$1;
(statearr_25231_25290[(1)] = (10));

} else {
var statearr_25232_25291 = state_25152__$1;
(statearr_25232_25291[(1)] = (11));

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
});})(c__24418__auto___25237,cs,m,dchan,dctr,done))
;
return ((function (switch__24323__auto__,c__24418__auto___25237,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24324__auto__ = null;
var cljs$core$async$mult_$_state_machine__24324__auto____0 = (function (){
var statearr_25233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25233[(0)] = cljs$core$async$mult_$_state_machine__24324__auto__);

(statearr_25233[(1)] = (1));

return statearr_25233;
});
var cljs$core$async$mult_$_state_machine__24324__auto____1 = (function (state_25152){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_25152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e25234){if((e25234 instanceof Object)){
var ex__24327__auto__ = e25234;
var statearr_25235_25292 = state_25152;
(statearr_25235_25292[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25293 = state_25152;
state_25152 = G__25293;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24324__auto__ = function(state_25152){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24324__auto____1.call(this,state_25152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24324__auto____0;
cljs$core$async$mult_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24324__auto____1;
return cljs$core$async$mult_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___25237,cs,m,dchan,dctr,done))
})();
var state__24420__auto__ = (function (){var statearr_25236 = f__24419__auto__.call(null);
(statearr_25236[(6)] = c__24418__auto___25237);

return statearr_25236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___25237,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25295 = arguments.length;
switch (G__25295) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25307 = arguments.length;
var i__4731__auto___25308 = (0);
while(true){
if((i__4731__auto___25308 < len__4730__auto___25307)){
args__4736__auto__.push((arguments[i__4731__auto___25308]));

var G__25309 = (i__4731__auto___25308 + (1));
i__4731__auto___25308 = G__25309;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25301){
var map__25302 = p__25301;
var map__25302__$1 = (((((!((map__25302 == null))))?(((((map__25302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25302):map__25302);
var opts = map__25302__$1;
var statearr_25304_25310 = state;
(statearr_25304_25310[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__25302,map__25302__$1,opts){
return (function (val){
var statearr_25305_25311 = state;
(statearr_25305_25311[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25302,map__25302__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_25306_25312 = state;
(statearr_25306_25312[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25297){
var G__25298 = cljs.core.first.call(null,seq25297);
var seq25297__$1 = cljs.core.next.call(null,seq25297);
var G__25299 = cljs.core.first.call(null,seq25297__$1);
var seq25297__$2 = cljs.core.next.call(null,seq25297__$1);
var G__25300 = cljs.core.first.call(null,seq25297__$2);
var seq25297__$3 = cljs.core.next.call(null,seq25297__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25298,G__25299,G__25300,seq25297__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25313 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25314){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25314 = meta25314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25315,meta25314__$1){
var self__ = this;
var _25315__$1 = this;
return (new cljs.core.async.t_cljs$core$async25313(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25314__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25315){
var self__ = this;
var _25315__$1 = this;
return self__.meta25314;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25313.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25314","meta25314",-1858943416,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25313";

cljs.core.async.t_cljs$core$async25313.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25313");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25313.
 */
cljs.core.async.__GT_t_cljs$core$async25313 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25313(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25314){
return (new cljs.core.async.t_cljs$core$async25313(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25314));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25313(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24418__auto___25477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___25477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___25477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25417){
var state_val_25418 = (state_25417[(1)]);
if((state_val_25418 === (7))){
var inst_25332 = (state_25417[(2)]);
var state_25417__$1 = state_25417;
var statearr_25419_25478 = state_25417__$1;
(statearr_25419_25478[(2)] = inst_25332);

(statearr_25419_25478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (20))){
var inst_25344 = (state_25417[(7)]);
var state_25417__$1 = state_25417;
var statearr_25420_25479 = state_25417__$1;
(statearr_25420_25479[(2)] = inst_25344);

(statearr_25420_25479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (27))){
var state_25417__$1 = state_25417;
var statearr_25421_25480 = state_25417__$1;
(statearr_25421_25480[(2)] = null);

(statearr_25421_25480[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (1))){
var inst_25319 = (state_25417[(8)]);
var inst_25319__$1 = calc_state.call(null);
var inst_25321 = (inst_25319__$1 == null);
var inst_25322 = cljs.core.not.call(null,inst_25321);
var state_25417__$1 = (function (){var statearr_25422 = state_25417;
(statearr_25422[(8)] = inst_25319__$1);

return statearr_25422;
})();
if(inst_25322){
var statearr_25423_25481 = state_25417__$1;
(statearr_25423_25481[(1)] = (2));

} else {
var statearr_25424_25482 = state_25417__$1;
(statearr_25424_25482[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (24))){
var inst_25391 = (state_25417[(9)]);
var inst_25368 = (state_25417[(10)]);
var inst_25377 = (state_25417[(11)]);
var inst_25391__$1 = inst_25368.call(null,inst_25377);
var state_25417__$1 = (function (){var statearr_25425 = state_25417;
(statearr_25425[(9)] = inst_25391__$1);

return statearr_25425;
})();
if(cljs.core.truth_(inst_25391__$1)){
var statearr_25426_25483 = state_25417__$1;
(statearr_25426_25483[(1)] = (29));

} else {
var statearr_25427_25484 = state_25417__$1;
(statearr_25427_25484[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (4))){
var inst_25335 = (state_25417[(2)]);
var state_25417__$1 = state_25417;
if(cljs.core.truth_(inst_25335)){
var statearr_25428_25485 = state_25417__$1;
(statearr_25428_25485[(1)] = (8));

} else {
var statearr_25429_25486 = state_25417__$1;
(statearr_25429_25486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (15))){
var inst_25362 = (state_25417[(2)]);
var state_25417__$1 = state_25417;
if(cljs.core.truth_(inst_25362)){
var statearr_25430_25487 = state_25417__$1;
(statearr_25430_25487[(1)] = (19));

} else {
var statearr_25431_25488 = state_25417__$1;
(statearr_25431_25488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (21))){
var inst_25367 = (state_25417[(12)]);
var inst_25367__$1 = (state_25417[(2)]);
var inst_25368 = cljs.core.get.call(null,inst_25367__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25369 = cljs.core.get.call(null,inst_25367__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25370 = cljs.core.get.call(null,inst_25367__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25417__$1 = (function (){var statearr_25432 = state_25417;
(statearr_25432[(13)] = inst_25369);

(statearr_25432[(12)] = inst_25367__$1);

(statearr_25432[(10)] = inst_25368);

return statearr_25432;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25417__$1,(22),inst_25370);
} else {
if((state_val_25418 === (31))){
var inst_25399 = (state_25417[(2)]);
var state_25417__$1 = state_25417;
if(cljs.core.truth_(inst_25399)){
var statearr_25433_25489 = state_25417__$1;
(statearr_25433_25489[(1)] = (32));

} else {
var statearr_25434_25490 = state_25417__$1;
(statearr_25434_25490[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (32))){
var inst_25376 = (state_25417[(14)]);
var state_25417__$1 = state_25417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25417__$1,(35),out,inst_25376);
} else {
if((state_val_25418 === (33))){
var inst_25367 = (state_25417[(12)]);
var inst_25344 = inst_25367;
var state_25417__$1 = (function (){var statearr_25435 = state_25417;
(statearr_25435[(7)] = inst_25344);

return statearr_25435;
})();
var statearr_25436_25491 = state_25417__$1;
(statearr_25436_25491[(2)] = null);

(statearr_25436_25491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (13))){
var inst_25344 = (state_25417[(7)]);
var inst_25351 = inst_25344.cljs$lang$protocol_mask$partition0$;
var inst_25352 = (inst_25351 & (64));
var inst_25353 = inst_25344.cljs$core$ISeq$;
var inst_25354 = (cljs.core.PROTOCOL_SENTINEL === inst_25353);
var inst_25355 = ((inst_25352) || (inst_25354));
var state_25417__$1 = state_25417;
if(cljs.core.truth_(inst_25355)){
var statearr_25437_25492 = state_25417__$1;
(statearr_25437_25492[(1)] = (16));

} else {
var statearr_25438_25493 = state_25417__$1;
(statearr_25438_25493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (22))){
var inst_25376 = (state_25417[(14)]);
var inst_25377 = (state_25417[(11)]);
var inst_25375 = (state_25417[(2)]);
var inst_25376__$1 = cljs.core.nth.call(null,inst_25375,(0),null);
var inst_25377__$1 = cljs.core.nth.call(null,inst_25375,(1),null);
var inst_25378 = (inst_25376__$1 == null);
var inst_25379 = cljs.core._EQ_.call(null,inst_25377__$1,change);
var inst_25380 = ((inst_25378) || (inst_25379));
var state_25417__$1 = (function (){var statearr_25439 = state_25417;
(statearr_25439[(14)] = inst_25376__$1);

(statearr_25439[(11)] = inst_25377__$1);

return statearr_25439;
})();
if(cljs.core.truth_(inst_25380)){
var statearr_25440_25494 = state_25417__$1;
(statearr_25440_25494[(1)] = (23));

} else {
var statearr_25441_25495 = state_25417__$1;
(statearr_25441_25495[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (36))){
var inst_25367 = (state_25417[(12)]);
var inst_25344 = inst_25367;
var state_25417__$1 = (function (){var statearr_25442 = state_25417;
(statearr_25442[(7)] = inst_25344);

return statearr_25442;
})();
var statearr_25443_25496 = state_25417__$1;
(statearr_25443_25496[(2)] = null);

(statearr_25443_25496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (29))){
var inst_25391 = (state_25417[(9)]);
var state_25417__$1 = state_25417;
var statearr_25444_25497 = state_25417__$1;
(statearr_25444_25497[(2)] = inst_25391);

(statearr_25444_25497[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (6))){
var state_25417__$1 = state_25417;
var statearr_25445_25498 = state_25417__$1;
(statearr_25445_25498[(2)] = false);

(statearr_25445_25498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (28))){
var inst_25387 = (state_25417[(2)]);
var inst_25388 = calc_state.call(null);
var inst_25344 = inst_25388;
var state_25417__$1 = (function (){var statearr_25446 = state_25417;
(statearr_25446[(7)] = inst_25344);

(statearr_25446[(15)] = inst_25387);

return statearr_25446;
})();
var statearr_25447_25499 = state_25417__$1;
(statearr_25447_25499[(2)] = null);

(statearr_25447_25499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (25))){
var inst_25413 = (state_25417[(2)]);
var state_25417__$1 = state_25417;
var statearr_25448_25500 = state_25417__$1;
(statearr_25448_25500[(2)] = inst_25413);

(statearr_25448_25500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (34))){
var inst_25411 = (state_25417[(2)]);
var state_25417__$1 = state_25417;
var statearr_25449_25501 = state_25417__$1;
(statearr_25449_25501[(2)] = inst_25411);

(statearr_25449_25501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (17))){
var state_25417__$1 = state_25417;
var statearr_25450_25502 = state_25417__$1;
(statearr_25450_25502[(2)] = false);

(statearr_25450_25502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (3))){
var state_25417__$1 = state_25417;
var statearr_25451_25503 = state_25417__$1;
(statearr_25451_25503[(2)] = false);

(statearr_25451_25503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (12))){
var inst_25415 = (state_25417[(2)]);
var state_25417__$1 = state_25417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25417__$1,inst_25415);
} else {
if((state_val_25418 === (2))){
var inst_25319 = (state_25417[(8)]);
var inst_25324 = inst_25319.cljs$lang$protocol_mask$partition0$;
var inst_25325 = (inst_25324 & (64));
var inst_25326 = inst_25319.cljs$core$ISeq$;
var inst_25327 = (cljs.core.PROTOCOL_SENTINEL === inst_25326);
var inst_25328 = ((inst_25325) || (inst_25327));
var state_25417__$1 = state_25417;
if(cljs.core.truth_(inst_25328)){
var statearr_25452_25504 = state_25417__$1;
(statearr_25452_25504[(1)] = (5));

} else {
var statearr_25453_25505 = state_25417__$1;
(statearr_25453_25505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (23))){
var inst_25376 = (state_25417[(14)]);
var inst_25382 = (inst_25376 == null);
var state_25417__$1 = state_25417;
if(cljs.core.truth_(inst_25382)){
var statearr_25454_25506 = state_25417__$1;
(statearr_25454_25506[(1)] = (26));

} else {
var statearr_25455_25507 = state_25417__$1;
(statearr_25455_25507[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (35))){
var inst_25402 = (state_25417[(2)]);
var state_25417__$1 = state_25417;
if(cljs.core.truth_(inst_25402)){
var statearr_25456_25508 = state_25417__$1;
(statearr_25456_25508[(1)] = (36));

} else {
var statearr_25457_25509 = state_25417__$1;
(statearr_25457_25509[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (19))){
var inst_25344 = (state_25417[(7)]);
var inst_25364 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25344);
var state_25417__$1 = state_25417;
var statearr_25458_25510 = state_25417__$1;
(statearr_25458_25510[(2)] = inst_25364);

(statearr_25458_25510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (11))){
var inst_25344 = (state_25417[(7)]);
var inst_25348 = (inst_25344 == null);
var inst_25349 = cljs.core.not.call(null,inst_25348);
var state_25417__$1 = state_25417;
if(inst_25349){
var statearr_25459_25511 = state_25417__$1;
(statearr_25459_25511[(1)] = (13));

} else {
var statearr_25460_25512 = state_25417__$1;
(statearr_25460_25512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (9))){
var inst_25319 = (state_25417[(8)]);
var state_25417__$1 = state_25417;
var statearr_25461_25513 = state_25417__$1;
(statearr_25461_25513[(2)] = inst_25319);

(statearr_25461_25513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (5))){
var state_25417__$1 = state_25417;
var statearr_25462_25514 = state_25417__$1;
(statearr_25462_25514[(2)] = true);

(statearr_25462_25514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (14))){
var state_25417__$1 = state_25417;
var statearr_25463_25515 = state_25417__$1;
(statearr_25463_25515[(2)] = false);

(statearr_25463_25515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (26))){
var inst_25377 = (state_25417[(11)]);
var inst_25384 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25377);
var state_25417__$1 = state_25417;
var statearr_25464_25516 = state_25417__$1;
(statearr_25464_25516[(2)] = inst_25384);

(statearr_25464_25516[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (16))){
var state_25417__$1 = state_25417;
var statearr_25465_25517 = state_25417__$1;
(statearr_25465_25517[(2)] = true);

(statearr_25465_25517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (38))){
var inst_25407 = (state_25417[(2)]);
var state_25417__$1 = state_25417;
var statearr_25466_25518 = state_25417__$1;
(statearr_25466_25518[(2)] = inst_25407);

(statearr_25466_25518[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (30))){
var inst_25369 = (state_25417[(13)]);
var inst_25368 = (state_25417[(10)]);
var inst_25377 = (state_25417[(11)]);
var inst_25394 = cljs.core.empty_QMARK_.call(null,inst_25368);
var inst_25395 = inst_25369.call(null,inst_25377);
var inst_25396 = cljs.core.not.call(null,inst_25395);
var inst_25397 = ((inst_25394) && (inst_25396));
var state_25417__$1 = state_25417;
var statearr_25467_25519 = state_25417__$1;
(statearr_25467_25519[(2)] = inst_25397);

(statearr_25467_25519[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (10))){
var inst_25319 = (state_25417[(8)]);
var inst_25340 = (state_25417[(2)]);
var inst_25341 = cljs.core.get.call(null,inst_25340,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25342 = cljs.core.get.call(null,inst_25340,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25343 = cljs.core.get.call(null,inst_25340,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25344 = inst_25319;
var state_25417__$1 = (function (){var statearr_25468 = state_25417;
(statearr_25468[(16)] = inst_25343);

(statearr_25468[(17)] = inst_25341);

(statearr_25468[(7)] = inst_25344);

(statearr_25468[(18)] = inst_25342);

return statearr_25468;
})();
var statearr_25469_25520 = state_25417__$1;
(statearr_25469_25520[(2)] = null);

(statearr_25469_25520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (18))){
var inst_25359 = (state_25417[(2)]);
var state_25417__$1 = state_25417;
var statearr_25470_25521 = state_25417__$1;
(statearr_25470_25521[(2)] = inst_25359);

(statearr_25470_25521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (37))){
var state_25417__$1 = state_25417;
var statearr_25471_25522 = state_25417__$1;
(statearr_25471_25522[(2)] = null);

(statearr_25471_25522[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25418 === (8))){
var inst_25319 = (state_25417[(8)]);
var inst_25337 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25319);
var state_25417__$1 = state_25417;
var statearr_25472_25523 = state_25417__$1;
(statearr_25472_25523[(2)] = inst_25337);

(statearr_25472_25523[(1)] = (10));


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
});})(c__24418__auto___25477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24323__auto__,c__24418__auto___25477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24324__auto__ = null;
var cljs$core$async$mix_$_state_machine__24324__auto____0 = (function (){
var statearr_25473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25473[(0)] = cljs$core$async$mix_$_state_machine__24324__auto__);

(statearr_25473[(1)] = (1));

return statearr_25473;
});
var cljs$core$async$mix_$_state_machine__24324__auto____1 = (function (state_25417){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_25417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e25474){if((e25474 instanceof Object)){
var ex__24327__auto__ = e25474;
var statearr_25475_25524 = state_25417;
(statearr_25475_25524[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25525 = state_25417;
state_25417 = G__25525;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24324__auto__ = function(state_25417){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24324__auto____1.call(this,state_25417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24324__auto____0;
cljs$core$async$mix_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24324__auto____1;
return cljs$core$async$mix_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___25477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24420__auto__ = (function (){var statearr_25476 = f__24419__auto__.call(null);
(statearr_25476[(6)] = c__24418__auto___25477);

return statearr_25476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___25477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25527 = arguments.length;
switch (G__25527) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__25531 = arguments.length;
switch (G__25531) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__25529_SHARP_){
if(cljs.core.truth_(p1__25529_SHARP_.call(null,topic))){
return p1__25529_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25529_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25532 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25533){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25533 = meta25533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25534,meta25533__$1){
var self__ = this;
var _25534__$1 = this;
return (new cljs.core.async.t_cljs$core$async25532(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25533__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25534){
var self__ = this;
var _25534__$1 = this;
return self__.meta25533;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25532.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25532.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25532.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25532.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25532.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25533","meta25533",-1075820377,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25532";

cljs.core.async.t_cljs$core$async25532.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25532");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25532.
 */
cljs.core.async.__GT_t_cljs$core$async25532 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25532(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25533){
return (new cljs.core.async.t_cljs$core$async25532(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25533));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25532(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24418__auto___25652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___25652,mults,ensure_mult,p){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___25652,mults,ensure_mult,p){
return (function (state_25606){
var state_val_25607 = (state_25606[(1)]);
if((state_val_25607 === (7))){
var inst_25602 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
var statearr_25608_25653 = state_25606__$1;
(statearr_25608_25653[(2)] = inst_25602);

(statearr_25608_25653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (20))){
var state_25606__$1 = state_25606;
var statearr_25609_25654 = state_25606__$1;
(statearr_25609_25654[(2)] = null);

(statearr_25609_25654[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (1))){
var state_25606__$1 = state_25606;
var statearr_25610_25655 = state_25606__$1;
(statearr_25610_25655[(2)] = null);

(statearr_25610_25655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (24))){
var inst_25585 = (state_25606[(7)]);
var inst_25594 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25585);
var state_25606__$1 = state_25606;
var statearr_25611_25656 = state_25606__$1;
(statearr_25611_25656[(2)] = inst_25594);

(statearr_25611_25656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (4))){
var inst_25537 = (state_25606[(8)]);
var inst_25537__$1 = (state_25606[(2)]);
var inst_25538 = (inst_25537__$1 == null);
var state_25606__$1 = (function (){var statearr_25612 = state_25606;
(statearr_25612[(8)] = inst_25537__$1);

return statearr_25612;
})();
if(cljs.core.truth_(inst_25538)){
var statearr_25613_25657 = state_25606__$1;
(statearr_25613_25657[(1)] = (5));

} else {
var statearr_25614_25658 = state_25606__$1;
(statearr_25614_25658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (15))){
var inst_25579 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
var statearr_25615_25659 = state_25606__$1;
(statearr_25615_25659[(2)] = inst_25579);

(statearr_25615_25659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (21))){
var inst_25599 = (state_25606[(2)]);
var state_25606__$1 = (function (){var statearr_25616 = state_25606;
(statearr_25616[(9)] = inst_25599);

return statearr_25616;
})();
var statearr_25617_25660 = state_25606__$1;
(statearr_25617_25660[(2)] = null);

(statearr_25617_25660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (13))){
var inst_25561 = (state_25606[(10)]);
var inst_25563 = cljs.core.chunked_seq_QMARK_.call(null,inst_25561);
var state_25606__$1 = state_25606;
if(inst_25563){
var statearr_25618_25661 = state_25606__$1;
(statearr_25618_25661[(1)] = (16));

} else {
var statearr_25619_25662 = state_25606__$1;
(statearr_25619_25662[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (22))){
var inst_25591 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
if(cljs.core.truth_(inst_25591)){
var statearr_25620_25663 = state_25606__$1;
(statearr_25620_25663[(1)] = (23));

} else {
var statearr_25621_25664 = state_25606__$1;
(statearr_25621_25664[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (6))){
var inst_25537 = (state_25606[(8)]);
var inst_25587 = (state_25606[(11)]);
var inst_25585 = (state_25606[(7)]);
var inst_25585__$1 = topic_fn.call(null,inst_25537);
var inst_25586 = cljs.core.deref.call(null,mults);
var inst_25587__$1 = cljs.core.get.call(null,inst_25586,inst_25585__$1);
var state_25606__$1 = (function (){var statearr_25622 = state_25606;
(statearr_25622[(11)] = inst_25587__$1);

(statearr_25622[(7)] = inst_25585__$1);

return statearr_25622;
})();
if(cljs.core.truth_(inst_25587__$1)){
var statearr_25623_25665 = state_25606__$1;
(statearr_25623_25665[(1)] = (19));

} else {
var statearr_25624_25666 = state_25606__$1;
(statearr_25624_25666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (25))){
var inst_25596 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
var statearr_25625_25667 = state_25606__$1;
(statearr_25625_25667[(2)] = inst_25596);

(statearr_25625_25667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (17))){
var inst_25561 = (state_25606[(10)]);
var inst_25570 = cljs.core.first.call(null,inst_25561);
var inst_25571 = cljs.core.async.muxch_STAR_.call(null,inst_25570);
var inst_25572 = cljs.core.async.close_BANG_.call(null,inst_25571);
var inst_25573 = cljs.core.next.call(null,inst_25561);
var inst_25547 = inst_25573;
var inst_25548 = null;
var inst_25549 = (0);
var inst_25550 = (0);
var state_25606__$1 = (function (){var statearr_25626 = state_25606;
(statearr_25626[(12)] = inst_25550);

(statearr_25626[(13)] = inst_25549);

(statearr_25626[(14)] = inst_25572);

(statearr_25626[(15)] = inst_25548);

(statearr_25626[(16)] = inst_25547);

return statearr_25626;
})();
var statearr_25627_25668 = state_25606__$1;
(statearr_25627_25668[(2)] = null);

(statearr_25627_25668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (3))){
var inst_25604 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25606__$1,inst_25604);
} else {
if((state_val_25607 === (12))){
var inst_25581 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
var statearr_25628_25669 = state_25606__$1;
(statearr_25628_25669[(2)] = inst_25581);

(statearr_25628_25669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (2))){
var state_25606__$1 = state_25606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25606__$1,(4),ch);
} else {
if((state_val_25607 === (23))){
var state_25606__$1 = state_25606;
var statearr_25629_25670 = state_25606__$1;
(statearr_25629_25670[(2)] = null);

(statearr_25629_25670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (19))){
var inst_25537 = (state_25606[(8)]);
var inst_25587 = (state_25606[(11)]);
var inst_25589 = cljs.core.async.muxch_STAR_.call(null,inst_25587);
var state_25606__$1 = state_25606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25606__$1,(22),inst_25589,inst_25537);
} else {
if((state_val_25607 === (11))){
var inst_25547 = (state_25606[(16)]);
var inst_25561 = (state_25606[(10)]);
var inst_25561__$1 = cljs.core.seq.call(null,inst_25547);
var state_25606__$1 = (function (){var statearr_25630 = state_25606;
(statearr_25630[(10)] = inst_25561__$1);

return statearr_25630;
})();
if(inst_25561__$1){
var statearr_25631_25671 = state_25606__$1;
(statearr_25631_25671[(1)] = (13));

} else {
var statearr_25632_25672 = state_25606__$1;
(statearr_25632_25672[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (9))){
var inst_25583 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
var statearr_25633_25673 = state_25606__$1;
(statearr_25633_25673[(2)] = inst_25583);

(statearr_25633_25673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (5))){
var inst_25544 = cljs.core.deref.call(null,mults);
var inst_25545 = cljs.core.vals.call(null,inst_25544);
var inst_25546 = cljs.core.seq.call(null,inst_25545);
var inst_25547 = inst_25546;
var inst_25548 = null;
var inst_25549 = (0);
var inst_25550 = (0);
var state_25606__$1 = (function (){var statearr_25634 = state_25606;
(statearr_25634[(12)] = inst_25550);

(statearr_25634[(13)] = inst_25549);

(statearr_25634[(15)] = inst_25548);

(statearr_25634[(16)] = inst_25547);

return statearr_25634;
})();
var statearr_25635_25674 = state_25606__$1;
(statearr_25635_25674[(2)] = null);

(statearr_25635_25674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (14))){
var state_25606__$1 = state_25606;
var statearr_25639_25675 = state_25606__$1;
(statearr_25639_25675[(2)] = null);

(statearr_25639_25675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (16))){
var inst_25561 = (state_25606[(10)]);
var inst_25565 = cljs.core.chunk_first.call(null,inst_25561);
var inst_25566 = cljs.core.chunk_rest.call(null,inst_25561);
var inst_25567 = cljs.core.count.call(null,inst_25565);
var inst_25547 = inst_25566;
var inst_25548 = inst_25565;
var inst_25549 = inst_25567;
var inst_25550 = (0);
var state_25606__$1 = (function (){var statearr_25640 = state_25606;
(statearr_25640[(12)] = inst_25550);

(statearr_25640[(13)] = inst_25549);

(statearr_25640[(15)] = inst_25548);

(statearr_25640[(16)] = inst_25547);

return statearr_25640;
})();
var statearr_25641_25676 = state_25606__$1;
(statearr_25641_25676[(2)] = null);

(statearr_25641_25676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (10))){
var inst_25550 = (state_25606[(12)]);
var inst_25549 = (state_25606[(13)]);
var inst_25548 = (state_25606[(15)]);
var inst_25547 = (state_25606[(16)]);
var inst_25555 = cljs.core._nth.call(null,inst_25548,inst_25550);
var inst_25556 = cljs.core.async.muxch_STAR_.call(null,inst_25555);
var inst_25557 = cljs.core.async.close_BANG_.call(null,inst_25556);
var inst_25558 = (inst_25550 + (1));
var tmp25636 = inst_25549;
var tmp25637 = inst_25548;
var tmp25638 = inst_25547;
var inst_25547__$1 = tmp25638;
var inst_25548__$1 = tmp25637;
var inst_25549__$1 = tmp25636;
var inst_25550__$1 = inst_25558;
var state_25606__$1 = (function (){var statearr_25642 = state_25606;
(statearr_25642[(12)] = inst_25550__$1);

(statearr_25642[(13)] = inst_25549__$1);

(statearr_25642[(17)] = inst_25557);

(statearr_25642[(15)] = inst_25548__$1);

(statearr_25642[(16)] = inst_25547__$1);

return statearr_25642;
})();
var statearr_25643_25677 = state_25606__$1;
(statearr_25643_25677[(2)] = null);

(statearr_25643_25677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (18))){
var inst_25576 = (state_25606[(2)]);
var state_25606__$1 = state_25606;
var statearr_25644_25678 = state_25606__$1;
(statearr_25644_25678[(2)] = inst_25576);

(statearr_25644_25678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25607 === (8))){
var inst_25550 = (state_25606[(12)]);
var inst_25549 = (state_25606[(13)]);
var inst_25552 = (inst_25550 < inst_25549);
var inst_25553 = inst_25552;
var state_25606__$1 = state_25606;
if(cljs.core.truth_(inst_25553)){
var statearr_25645_25679 = state_25606__$1;
(statearr_25645_25679[(1)] = (10));

} else {
var statearr_25646_25680 = state_25606__$1;
(statearr_25646_25680[(1)] = (11));

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
});})(c__24418__auto___25652,mults,ensure_mult,p))
;
return ((function (switch__24323__auto__,c__24418__auto___25652,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_25647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25647[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_25647[(1)] = (1));

return statearr_25647;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_25606){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_25606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e25648){if((e25648 instanceof Object)){
var ex__24327__auto__ = e25648;
var statearr_25649_25681 = state_25606;
(statearr_25649_25681[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25682 = state_25606;
state_25606 = G__25682;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_25606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_25606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___25652,mults,ensure_mult,p))
})();
var state__24420__auto__ = (function (){var statearr_25650 = f__24419__auto__.call(null);
(statearr_25650[(6)] = c__24418__auto___25652);

return statearr_25650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___25652,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25684 = arguments.length;
switch (G__25684) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25687 = arguments.length;
switch (G__25687) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__25690 = arguments.length;
switch (G__25690) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24418__auto___25757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___25757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___25757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25729){
var state_val_25730 = (state_25729[(1)]);
if((state_val_25730 === (7))){
var state_25729__$1 = state_25729;
var statearr_25731_25758 = state_25729__$1;
(statearr_25731_25758[(2)] = null);

(statearr_25731_25758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (1))){
var state_25729__$1 = state_25729;
var statearr_25732_25759 = state_25729__$1;
(statearr_25732_25759[(2)] = null);

(statearr_25732_25759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (4))){
var inst_25693 = (state_25729[(7)]);
var inst_25695 = (inst_25693 < cnt);
var state_25729__$1 = state_25729;
if(cljs.core.truth_(inst_25695)){
var statearr_25733_25760 = state_25729__$1;
(statearr_25733_25760[(1)] = (6));

} else {
var statearr_25734_25761 = state_25729__$1;
(statearr_25734_25761[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (15))){
var inst_25725 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25735_25762 = state_25729__$1;
(statearr_25735_25762[(2)] = inst_25725);

(statearr_25735_25762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (13))){
var inst_25718 = cljs.core.async.close_BANG_.call(null,out);
var state_25729__$1 = state_25729;
var statearr_25736_25763 = state_25729__$1;
(statearr_25736_25763[(2)] = inst_25718);

(statearr_25736_25763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (6))){
var state_25729__$1 = state_25729;
var statearr_25737_25764 = state_25729__$1;
(statearr_25737_25764[(2)] = null);

(statearr_25737_25764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (3))){
var inst_25727 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25729__$1,inst_25727);
} else {
if((state_val_25730 === (12))){
var inst_25715 = (state_25729[(8)]);
var inst_25715__$1 = (state_25729[(2)]);
var inst_25716 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25715__$1);
var state_25729__$1 = (function (){var statearr_25738 = state_25729;
(statearr_25738[(8)] = inst_25715__$1);

return statearr_25738;
})();
if(cljs.core.truth_(inst_25716)){
var statearr_25739_25765 = state_25729__$1;
(statearr_25739_25765[(1)] = (13));

} else {
var statearr_25740_25766 = state_25729__$1;
(statearr_25740_25766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (2))){
var inst_25692 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25693 = (0);
var state_25729__$1 = (function (){var statearr_25741 = state_25729;
(statearr_25741[(7)] = inst_25693);

(statearr_25741[(9)] = inst_25692);

return statearr_25741;
})();
var statearr_25742_25767 = state_25729__$1;
(statearr_25742_25767[(2)] = null);

(statearr_25742_25767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (11))){
var inst_25693 = (state_25729[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25729,(10),Object,null,(9));
var inst_25702 = chs__$1.call(null,inst_25693);
var inst_25703 = done.call(null,inst_25693);
var inst_25704 = cljs.core.async.take_BANG_.call(null,inst_25702,inst_25703);
var state_25729__$1 = state_25729;
var statearr_25743_25768 = state_25729__$1;
(statearr_25743_25768[(2)] = inst_25704);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (9))){
var inst_25693 = (state_25729[(7)]);
var inst_25706 = (state_25729[(2)]);
var inst_25707 = (inst_25693 + (1));
var inst_25693__$1 = inst_25707;
var state_25729__$1 = (function (){var statearr_25744 = state_25729;
(statearr_25744[(7)] = inst_25693__$1);

(statearr_25744[(10)] = inst_25706);

return statearr_25744;
})();
var statearr_25745_25769 = state_25729__$1;
(statearr_25745_25769[(2)] = null);

(statearr_25745_25769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (5))){
var inst_25713 = (state_25729[(2)]);
var state_25729__$1 = (function (){var statearr_25746 = state_25729;
(statearr_25746[(11)] = inst_25713);

return statearr_25746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25729__$1,(12),dchan);
} else {
if((state_val_25730 === (14))){
var inst_25715 = (state_25729[(8)]);
var inst_25720 = cljs.core.apply.call(null,f,inst_25715);
var state_25729__$1 = state_25729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25729__$1,(16),out,inst_25720);
} else {
if((state_val_25730 === (16))){
var inst_25722 = (state_25729[(2)]);
var state_25729__$1 = (function (){var statearr_25747 = state_25729;
(statearr_25747[(12)] = inst_25722);

return statearr_25747;
})();
var statearr_25748_25770 = state_25729__$1;
(statearr_25748_25770[(2)] = null);

(statearr_25748_25770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (10))){
var inst_25697 = (state_25729[(2)]);
var inst_25698 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25729__$1 = (function (){var statearr_25749 = state_25729;
(statearr_25749[(13)] = inst_25697);

return statearr_25749;
})();
var statearr_25750_25771 = state_25729__$1;
(statearr_25750_25771[(2)] = inst_25698);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25730 === (8))){
var inst_25711 = (state_25729[(2)]);
var state_25729__$1 = state_25729;
var statearr_25751_25772 = state_25729__$1;
(statearr_25751_25772[(2)] = inst_25711);

(statearr_25751_25772[(1)] = (5));


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
});})(c__24418__auto___25757,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24323__auto__,c__24418__auto___25757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_25752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25752[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_25752[(1)] = (1));

return statearr_25752;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_25729){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_25729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e25753){if((e25753 instanceof Object)){
var ex__24327__auto__ = e25753;
var statearr_25754_25773 = state_25729;
(statearr_25754_25773[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25774 = state_25729;
state_25729 = G__25774;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_25729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_25729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___25757,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24420__auto__ = (function (){var statearr_25755 = f__24419__auto__.call(null);
(statearr_25755[(6)] = c__24418__auto___25757);

return statearr_25755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___25757,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25777 = arguments.length;
switch (G__25777) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24418__auto___25831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___25831,out){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___25831,out){
return (function (state_25809){
var state_val_25810 = (state_25809[(1)]);
if((state_val_25810 === (7))){
var inst_25788 = (state_25809[(7)]);
var inst_25789 = (state_25809[(8)]);
var inst_25788__$1 = (state_25809[(2)]);
var inst_25789__$1 = cljs.core.nth.call(null,inst_25788__$1,(0),null);
var inst_25790 = cljs.core.nth.call(null,inst_25788__$1,(1),null);
var inst_25791 = (inst_25789__$1 == null);
var state_25809__$1 = (function (){var statearr_25811 = state_25809;
(statearr_25811[(7)] = inst_25788__$1);

(statearr_25811[(8)] = inst_25789__$1);

(statearr_25811[(9)] = inst_25790);

return statearr_25811;
})();
if(cljs.core.truth_(inst_25791)){
var statearr_25812_25832 = state_25809__$1;
(statearr_25812_25832[(1)] = (8));

} else {
var statearr_25813_25833 = state_25809__$1;
(statearr_25813_25833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (1))){
var inst_25778 = cljs.core.vec.call(null,chs);
var inst_25779 = inst_25778;
var state_25809__$1 = (function (){var statearr_25814 = state_25809;
(statearr_25814[(10)] = inst_25779);

return statearr_25814;
})();
var statearr_25815_25834 = state_25809__$1;
(statearr_25815_25834[(2)] = null);

(statearr_25815_25834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (4))){
var inst_25779 = (state_25809[(10)]);
var state_25809__$1 = state_25809;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25809__$1,(7),inst_25779);
} else {
if((state_val_25810 === (6))){
var inst_25805 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25816_25835 = state_25809__$1;
(statearr_25816_25835[(2)] = inst_25805);

(statearr_25816_25835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (3))){
var inst_25807 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25809__$1,inst_25807);
} else {
if((state_val_25810 === (2))){
var inst_25779 = (state_25809[(10)]);
var inst_25781 = cljs.core.count.call(null,inst_25779);
var inst_25782 = (inst_25781 > (0));
var state_25809__$1 = state_25809;
if(cljs.core.truth_(inst_25782)){
var statearr_25818_25836 = state_25809__$1;
(statearr_25818_25836[(1)] = (4));

} else {
var statearr_25819_25837 = state_25809__$1;
(statearr_25819_25837[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (11))){
var inst_25779 = (state_25809[(10)]);
var inst_25798 = (state_25809[(2)]);
var tmp25817 = inst_25779;
var inst_25779__$1 = tmp25817;
var state_25809__$1 = (function (){var statearr_25820 = state_25809;
(statearr_25820[(11)] = inst_25798);

(statearr_25820[(10)] = inst_25779__$1);

return statearr_25820;
})();
var statearr_25821_25838 = state_25809__$1;
(statearr_25821_25838[(2)] = null);

(statearr_25821_25838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (9))){
var inst_25789 = (state_25809[(8)]);
var state_25809__$1 = state_25809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25809__$1,(11),out,inst_25789);
} else {
if((state_val_25810 === (5))){
var inst_25803 = cljs.core.async.close_BANG_.call(null,out);
var state_25809__$1 = state_25809;
var statearr_25822_25839 = state_25809__$1;
(statearr_25822_25839[(2)] = inst_25803);

(statearr_25822_25839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (10))){
var inst_25801 = (state_25809[(2)]);
var state_25809__$1 = state_25809;
var statearr_25823_25840 = state_25809__$1;
(statearr_25823_25840[(2)] = inst_25801);

(statearr_25823_25840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25810 === (8))){
var inst_25788 = (state_25809[(7)]);
var inst_25789 = (state_25809[(8)]);
var inst_25790 = (state_25809[(9)]);
var inst_25779 = (state_25809[(10)]);
var inst_25793 = (function (){var cs = inst_25779;
var vec__25784 = inst_25788;
var v = inst_25789;
var c = inst_25790;
return ((function (cs,vec__25784,v,c,inst_25788,inst_25789,inst_25790,inst_25779,state_val_25810,c__24418__auto___25831,out){
return (function (p1__25775_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25775_SHARP_);
});
;})(cs,vec__25784,v,c,inst_25788,inst_25789,inst_25790,inst_25779,state_val_25810,c__24418__auto___25831,out))
})();
var inst_25794 = cljs.core.filterv.call(null,inst_25793,inst_25779);
var inst_25779__$1 = inst_25794;
var state_25809__$1 = (function (){var statearr_25824 = state_25809;
(statearr_25824[(10)] = inst_25779__$1);

return statearr_25824;
})();
var statearr_25825_25841 = state_25809__$1;
(statearr_25825_25841[(2)] = null);

(statearr_25825_25841[(1)] = (2));


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
});})(c__24418__auto___25831,out))
;
return ((function (switch__24323__auto__,c__24418__auto___25831,out){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_25826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25826[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_25826[(1)] = (1));

return statearr_25826;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_25809){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_25809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e25827){if((e25827 instanceof Object)){
var ex__24327__auto__ = e25827;
var statearr_25828_25842 = state_25809;
(statearr_25828_25842[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25843 = state_25809;
state_25809 = G__25843;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_25809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_25809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___25831,out))
})();
var state__24420__auto__ = (function (){var statearr_25829 = f__24419__auto__.call(null);
(statearr_25829[(6)] = c__24418__auto___25831);

return statearr_25829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___25831,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25845 = arguments.length;
switch (G__25845) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24418__auto___25890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___25890,out){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___25890,out){
return (function (state_25869){
var state_val_25870 = (state_25869[(1)]);
if((state_val_25870 === (7))){
var inst_25851 = (state_25869[(7)]);
var inst_25851__$1 = (state_25869[(2)]);
var inst_25852 = (inst_25851__$1 == null);
var inst_25853 = cljs.core.not.call(null,inst_25852);
var state_25869__$1 = (function (){var statearr_25871 = state_25869;
(statearr_25871[(7)] = inst_25851__$1);

return statearr_25871;
})();
if(inst_25853){
var statearr_25872_25891 = state_25869__$1;
(statearr_25872_25891[(1)] = (8));

} else {
var statearr_25873_25892 = state_25869__$1;
(statearr_25873_25892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (1))){
var inst_25846 = (0);
var state_25869__$1 = (function (){var statearr_25874 = state_25869;
(statearr_25874[(8)] = inst_25846);

return statearr_25874;
})();
var statearr_25875_25893 = state_25869__$1;
(statearr_25875_25893[(2)] = null);

(statearr_25875_25893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (4))){
var state_25869__$1 = state_25869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25869__$1,(7),ch);
} else {
if((state_val_25870 === (6))){
var inst_25864 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
var statearr_25876_25894 = state_25869__$1;
(statearr_25876_25894[(2)] = inst_25864);

(statearr_25876_25894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (3))){
var inst_25866 = (state_25869[(2)]);
var inst_25867 = cljs.core.async.close_BANG_.call(null,out);
var state_25869__$1 = (function (){var statearr_25877 = state_25869;
(statearr_25877[(9)] = inst_25866);

return statearr_25877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25869__$1,inst_25867);
} else {
if((state_val_25870 === (2))){
var inst_25846 = (state_25869[(8)]);
var inst_25848 = (inst_25846 < n);
var state_25869__$1 = state_25869;
if(cljs.core.truth_(inst_25848)){
var statearr_25878_25895 = state_25869__$1;
(statearr_25878_25895[(1)] = (4));

} else {
var statearr_25879_25896 = state_25869__$1;
(statearr_25879_25896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (11))){
var inst_25846 = (state_25869[(8)]);
var inst_25856 = (state_25869[(2)]);
var inst_25857 = (inst_25846 + (1));
var inst_25846__$1 = inst_25857;
var state_25869__$1 = (function (){var statearr_25880 = state_25869;
(statearr_25880[(8)] = inst_25846__$1);

(statearr_25880[(10)] = inst_25856);

return statearr_25880;
})();
var statearr_25881_25897 = state_25869__$1;
(statearr_25881_25897[(2)] = null);

(statearr_25881_25897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (9))){
var state_25869__$1 = state_25869;
var statearr_25882_25898 = state_25869__$1;
(statearr_25882_25898[(2)] = null);

(statearr_25882_25898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (5))){
var state_25869__$1 = state_25869;
var statearr_25883_25899 = state_25869__$1;
(statearr_25883_25899[(2)] = null);

(statearr_25883_25899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (10))){
var inst_25861 = (state_25869[(2)]);
var state_25869__$1 = state_25869;
var statearr_25884_25900 = state_25869__$1;
(statearr_25884_25900[(2)] = inst_25861);

(statearr_25884_25900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25870 === (8))){
var inst_25851 = (state_25869[(7)]);
var state_25869__$1 = state_25869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25869__$1,(11),out,inst_25851);
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
});})(c__24418__auto___25890,out))
;
return ((function (switch__24323__auto__,c__24418__auto___25890,out){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_25885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25885[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_25885[(1)] = (1));

return statearr_25885;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_25869){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_25869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e25886){if((e25886 instanceof Object)){
var ex__24327__auto__ = e25886;
var statearr_25887_25901 = state_25869;
(statearr_25887_25901[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25902 = state_25869;
state_25869 = G__25902;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_25869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_25869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___25890,out))
})();
var state__24420__auto__ = (function (){var statearr_25888 = f__24419__auto__.call(null);
(statearr_25888[(6)] = c__24418__auto___25890);

return statearr_25888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___25890,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25904 = (function (f,ch,meta25905){
this.f = f;
this.ch = ch;
this.meta25905 = meta25905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25906,meta25905__$1){
var self__ = this;
var _25906__$1 = this;
return (new cljs.core.async.t_cljs$core$async25904(self__.f,self__.ch,meta25905__$1));
});

cljs.core.async.t_cljs$core$async25904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25906){
var self__ = this;
var _25906__$1 = this;
return self__.meta25905;
});

cljs.core.async.t_cljs$core$async25904.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25904.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25904.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25907 = (function (f,ch,meta25905,_,fn1,meta25908){
this.f = f;
this.ch = ch;
this.meta25905 = meta25905;
this._ = _;
this.fn1 = fn1;
this.meta25908 = meta25908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25909,meta25908__$1){
var self__ = this;
var _25909__$1 = this;
return (new cljs.core.async.t_cljs$core$async25907(self__.f,self__.ch,self__.meta25905,self__._,self__.fn1,meta25908__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25909){
var self__ = this;
var _25909__$1 = this;
return self__.meta25908;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25907.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25907.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25903_SHARP_){
return f1.call(null,(((p1__25903_SHARP_ == null))?null:self__.f.call(null,p1__25903_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25907.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25905","meta25905",986559849,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25904","cljs.core.async/t_cljs$core$async25904",1362000891,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25908","meta25908",1171621590,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25907";

cljs.core.async.t_cljs$core$async25907.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25907");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25907.
 */
cljs.core.async.__GT_t_cljs$core$async25907 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25907(f__$1,ch__$1,meta25905__$1,___$2,fn1__$1,meta25908){
return (new cljs.core.async.t_cljs$core$async25907(f__$1,ch__$1,meta25905__$1,___$2,fn1__$1,meta25908));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25907(self__.f,self__.ch,self__.meta25905,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25904.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25905","meta25905",986559849,null)], null);
});

cljs.core.async.t_cljs$core$async25904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25904";

cljs.core.async.t_cljs$core$async25904.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25904");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25904.
 */
cljs.core.async.__GT_t_cljs$core$async25904 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25904(f__$1,ch__$1,meta25905){
return (new cljs.core.async.t_cljs$core$async25904(f__$1,ch__$1,meta25905));
});

}

return (new cljs.core.async.t_cljs$core$async25904(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25910 = (function (f,ch,meta25911){
this.f = f;
this.ch = ch;
this.meta25911 = meta25911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25912,meta25911__$1){
var self__ = this;
var _25912__$1 = this;
return (new cljs.core.async.t_cljs$core$async25910(self__.f,self__.ch,meta25911__$1));
});

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25912){
var self__ = this;
var _25912__$1 = this;
return self__.meta25911;
});

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25911","meta25911",1928243404,null)], null);
});

cljs.core.async.t_cljs$core$async25910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25910";

cljs.core.async.t_cljs$core$async25910.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25910");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25910.
 */
cljs.core.async.__GT_t_cljs$core$async25910 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25910(f__$1,ch__$1,meta25911){
return (new cljs.core.async.t_cljs$core$async25910(f__$1,ch__$1,meta25911));
});

}

return (new cljs.core.async.t_cljs$core$async25910(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25913 = (function (p,ch,meta25914){
this.p = p;
this.ch = ch;
this.meta25914 = meta25914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25915,meta25914__$1){
var self__ = this;
var _25915__$1 = this;
return (new cljs.core.async.t_cljs$core$async25913(self__.p,self__.ch,meta25914__$1));
});

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25915){
var self__ = this;
var _25915__$1 = this;
return self__.meta25914;
});

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25914","meta25914",69198074,null)], null);
});

cljs.core.async.t_cljs$core$async25913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25913";

cljs.core.async.t_cljs$core$async25913.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25913");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25913.
 */
cljs.core.async.__GT_t_cljs$core$async25913 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25913(p__$1,ch__$1,meta25914){
return (new cljs.core.async.t_cljs$core$async25913(p__$1,ch__$1,meta25914));
});

}

return (new cljs.core.async.t_cljs$core$async25913(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25917 = arguments.length;
switch (G__25917) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24418__auto___25957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___25957,out){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___25957,out){
return (function (state_25938){
var state_val_25939 = (state_25938[(1)]);
if((state_val_25939 === (7))){
var inst_25934 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
var statearr_25940_25958 = state_25938__$1;
(statearr_25940_25958[(2)] = inst_25934);

(statearr_25940_25958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (1))){
var state_25938__$1 = state_25938;
var statearr_25941_25959 = state_25938__$1;
(statearr_25941_25959[(2)] = null);

(statearr_25941_25959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (4))){
var inst_25920 = (state_25938[(7)]);
var inst_25920__$1 = (state_25938[(2)]);
var inst_25921 = (inst_25920__$1 == null);
var state_25938__$1 = (function (){var statearr_25942 = state_25938;
(statearr_25942[(7)] = inst_25920__$1);

return statearr_25942;
})();
if(cljs.core.truth_(inst_25921)){
var statearr_25943_25960 = state_25938__$1;
(statearr_25943_25960[(1)] = (5));

} else {
var statearr_25944_25961 = state_25938__$1;
(statearr_25944_25961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (6))){
var inst_25920 = (state_25938[(7)]);
var inst_25925 = p.call(null,inst_25920);
var state_25938__$1 = state_25938;
if(cljs.core.truth_(inst_25925)){
var statearr_25945_25962 = state_25938__$1;
(statearr_25945_25962[(1)] = (8));

} else {
var statearr_25946_25963 = state_25938__$1;
(statearr_25946_25963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (3))){
var inst_25936 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25938__$1,inst_25936);
} else {
if((state_val_25939 === (2))){
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25938__$1,(4),ch);
} else {
if((state_val_25939 === (11))){
var inst_25928 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
var statearr_25947_25964 = state_25938__$1;
(statearr_25947_25964[(2)] = inst_25928);

(statearr_25947_25964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (9))){
var state_25938__$1 = state_25938;
var statearr_25948_25965 = state_25938__$1;
(statearr_25948_25965[(2)] = null);

(statearr_25948_25965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (5))){
var inst_25923 = cljs.core.async.close_BANG_.call(null,out);
var state_25938__$1 = state_25938;
var statearr_25949_25966 = state_25938__$1;
(statearr_25949_25966[(2)] = inst_25923);

(statearr_25949_25966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (10))){
var inst_25931 = (state_25938[(2)]);
var state_25938__$1 = (function (){var statearr_25950 = state_25938;
(statearr_25950[(8)] = inst_25931);

return statearr_25950;
})();
var statearr_25951_25967 = state_25938__$1;
(statearr_25951_25967[(2)] = null);

(statearr_25951_25967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (8))){
var inst_25920 = (state_25938[(7)]);
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25938__$1,(11),out,inst_25920);
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
});})(c__24418__auto___25957,out))
;
return ((function (switch__24323__auto__,c__24418__auto___25957,out){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_25952 = [null,null,null,null,null,null,null,null,null];
(statearr_25952[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_25952[(1)] = (1));

return statearr_25952;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_25938){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_25938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e25953){if((e25953 instanceof Object)){
var ex__24327__auto__ = e25953;
var statearr_25954_25968 = state_25938;
(statearr_25954_25968[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25969 = state_25938;
state_25938 = G__25969;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_25938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_25938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___25957,out))
})();
var state__24420__auto__ = (function (){var statearr_25955 = f__24419__auto__.call(null);
(statearr_25955[(6)] = c__24418__auto___25957);

return statearr_25955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___25957,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25971 = arguments.length;
switch (G__25971) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto__){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto__){
return (function (state_26034){
var state_val_26035 = (state_26034[(1)]);
if((state_val_26035 === (7))){
var inst_26030 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26036_26074 = state_26034__$1;
(statearr_26036_26074[(2)] = inst_26030);

(statearr_26036_26074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (20))){
var inst_26000 = (state_26034[(7)]);
var inst_26011 = (state_26034[(2)]);
var inst_26012 = cljs.core.next.call(null,inst_26000);
var inst_25986 = inst_26012;
var inst_25987 = null;
var inst_25988 = (0);
var inst_25989 = (0);
var state_26034__$1 = (function (){var statearr_26037 = state_26034;
(statearr_26037[(8)] = inst_25988);

(statearr_26037[(9)] = inst_25989);

(statearr_26037[(10)] = inst_25986);

(statearr_26037[(11)] = inst_25987);

(statearr_26037[(12)] = inst_26011);

return statearr_26037;
})();
var statearr_26038_26075 = state_26034__$1;
(statearr_26038_26075[(2)] = null);

(statearr_26038_26075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (1))){
var state_26034__$1 = state_26034;
var statearr_26039_26076 = state_26034__$1;
(statearr_26039_26076[(2)] = null);

(statearr_26039_26076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (4))){
var inst_25975 = (state_26034[(13)]);
var inst_25975__$1 = (state_26034[(2)]);
var inst_25976 = (inst_25975__$1 == null);
var state_26034__$1 = (function (){var statearr_26040 = state_26034;
(statearr_26040[(13)] = inst_25975__$1);

return statearr_26040;
})();
if(cljs.core.truth_(inst_25976)){
var statearr_26041_26077 = state_26034__$1;
(statearr_26041_26077[(1)] = (5));

} else {
var statearr_26042_26078 = state_26034__$1;
(statearr_26042_26078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (15))){
var state_26034__$1 = state_26034;
var statearr_26046_26079 = state_26034__$1;
(statearr_26046_26079[(2)] = null);

(statearr_26046_26079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (21))){
var state_26034__$1 = state_26034;
var statearr_26047_26080 = state_26034__$1;
(statearr_26047_26080[(2)] = null);

(statearr_26047_26080[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (13))){
var inst_25988 = (state_26034[(8)]);
var inst_25989 = (state_26034[(9)]);
var inst_25986 = (state_26034[(10)]);
var inst_25987 = (state_26034[(11)]);
var inst_25996 = (state_26034[(2)]);
var inst_25997 = (inst_25989 + (1));
var tmp26043 = inst_25988;
var tmp26044 = inst_25986;
var tmp26045 = inst_25987;
var inst_25986__$1 = tmp26044;
var inst_25987__$1 = tmp26045;
var inst_25988__$1 = tmp26043;
var inst_25989__$1 = inst_25997;
var state_26034__$1 = (function (){var statearr_26048 = state_26034;
(statearr_26048[(8)] = inst_25988__$1);

(statearr_26048[(9)] = inst_25989__$1);

(statearr_26048[(14)] = inst_25996);

(statearr_26048[(10)] = inst_25986__$1);

(statearr_26048[(11)] = inst_25987__$1);

return statearr_26048;
})();
var statearr_26049_26081 = state_26034__$1;
(statearr_26049_26081[(2)] = null);

(statearr_26049_26081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (22))){
var state_26034__$1 = state_26034;
var statearr_26050_26082 = state_26034__$1;
(statearr_26050_26082[(2)] = null);

(statearr_26050_26082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (6))){
var inst_25975 = (state_26034[(13)]);
var inst_25984 = f.call(null,inst_25975);
var inst_25985 = cljs.core.seq.call(null,inst_25984);
var inst_25986 = inst_25985;
var inst_25987 = null;
var inst_25988 = (0);
var inst_25989 = (0);
var state_26034__$1 = (function (){var statearr_26051 = state_26034;
(statearr_26051[(8)] = inst_25988);

(statearr_26051[(9)] = inst_25989);

(statearr_26051[(10)] = inst_25986);

(statearr_26051[(11)] = inst_25987);

return statearr_26051;
})();
var statearr_26052_26083 = state_26034__$1;
(statearr_26052_26083[(2)] = null);

(statearr_26052_26083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (17))){
var inst_26000 = (state_26034[(7)]);
var inst_26004 = cljs.core.chunk_first.call(null,inst_26000);
var inst_26005 = cljs.core.chunk_rest.call(null,inst_26000);
var inst_26006 = cljs.core.count.call(null,inst_26004);
var inst_25986 = inst_26005;
var inst_25987 = inst_26004;
var inst_25988 = inst_26006;
var inst_25989 = (0);
var state_26034__$1 = (function (){var statearr_26053 = state_26034;
(statearr_26053[(8)] = inst_25988);

(statearr_26053[(9)] = inst_25989);

(statearr_26053[(10)] = inst_25986);

(statearr_26053[(11)] = inst_25987);

return statearr_26053;
})();
var statearr_26054_26084 = state_26034__$1;
(statearr_26054_26084[(2)] = null);

(statearr_26054_26084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (3))){
var inst_26032 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26034__$1,inst_26032);
} else {
if((state_val_26035 === (12))){
var inst_26020 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26055_26085 = state_26034__$1;
(statearr_26055_26085[(2)] = inst_26020);

(statearr_26055_26085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (2))){
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26034__$1,(4),in$);
} else {
if((state_val_26035 === (23))){
var inst_26028 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26056_26086 = state_26034__$1;
(statearr_26056_26086[(2)] = inst_26028);

(statearr_26056_26086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (19))){
var inst_26015 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26057_26087 = state_26034__$1;
(statearr_26057_26087[(2)] = inst_26015);

(statearr_26057_26087[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (11))){
var inst_26000 = (state_26034[(7)]);
var inst_25986 = (state_26034[(10)]);
var inst_26000__$1 = cljs.core.seq.call(null,inst_25986);
var state_26034__$1 = (function (){var statearr_26058 = state_26034;
(statearr_26058[(7)] = inst_26000__$1);

return statearr_26058;
})();
if(inst_26000__$1){
var statearr_26059_26088 = state_26034__$1;
(statearr_26059_26088[(1)] = (14));

} else {
var statearr_26060_26089 = state_26034__$1;
(statearr_26060_26089[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (9))){
var inst_26022 = (state_26034[(2)]);
var inst_26023 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26034__$1 = (function (){var statearr_26061 = state_26034;
(statearr_26061[(15)] = inst_26022);

return statearr_26061;
})();
if(cljs.core.truth_(inst_26023)){
var statearr_26062_26090 = state_26034__$1;
(statearr_26062_26090[(1)] = (21));

} else {
var statearr_26063_26091 = state_26034__$1;
(statearr_26063_26091[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (5))){
var inst_25978 = cljs.core.async.close_BANG_.call(null,out);
var state_26034__$1 = state_26034;
var statearr_26064_26092 = state_26034__$1;
(statearr_26064_26092[(2)] = inst_25978);

(statearr_26064_26092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (14))){
var inst_26000 = (state_26034[(7)]);
var inst_26002 = cljs.core.chunked_seq_QMARK_.call(null,inst_26000);
var state_26034__$1 = state_26034;
if(inst_26002){
var statearr_26065_26093 = state_26034__$1;
(statearr_26065_26093[(1)] = (17));

} else {
var statearr_26066_26094 = state_26034__$1;
(statearr_26066_26094[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (16))){
var inst_26018 = (state_26034[(2)]);
var state_26034__$1 = state_26034;
var statearr_26067_26095 = state_26034__$1;
(statearr_26067_26095[(2)] = inst_26018);

(statearr_26067_26095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26035 === (10))){
var inst_25989 = (state_26034[(9)]);
var inst_25987 = (state_26034[(11)]);
var inst_25994 = cljs.core._nth.call(null,inst_25987,inst_25989);
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26034__$1,(13),out,inst_25994);
} else {
if((state_val_26035 === (18))){
var inst_26000 = (state_26034[(7)]);
var inst_26009 = cljs.core.first.call(null,inst_26000);
var state_26034__$1 = state_26034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26034__$1,(20),out,inst_26009);
} else {
if((state_val_26035 === (8))){
var inst_25988 = (state_26034[(8)]);
var inst_25989 = (state_26034[(9)]);
var inst_25991 = (inst_25989 < inst_25988);
var inst_25992 = inst_25991;
var state_26034__$1 = state_26034;
if(cljs.core.truth_(inst_25992)){
var statearr_26068_26096 = state_26034__$1;
(statearr_26068_26096[(1)] = (10));

} else {
var statearr_26069_26097 = state_26034__$1;
(statearr_26069_26097[(1)] = (11));

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
});})(c__24418__auto__))
;
return ((function (switch__24323__auto__,c__24418__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24324__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24324__auto____0 = (function (){
var statearr_26070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26070[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24324__auto__);

(statearr_26070[(1)] = (1));

return statearr_26070;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24324__auto____1 = (function (state_26034){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_26034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e26071){if((e26071 instanceof Object)){
var ex__24327__auto__ = e26071;
var statearr_26072_26098 = state_26034;
(statearr_26072_26098[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26099 = state_26034;
state_26034 = G__26099;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24324__auto__ = function(state_26034){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24324__auto____1.call(this,state_26034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24324__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24324__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto__))
})();
var state__24420__auto__ = (function (){var statearr_26073 = f__24419__auto__.call(null);
(statearr_26073[(6)] = c__24418__auto__);

return statearr_26073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto__))
);

return c__24418__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26101 = arguments.length;
switch (G__26101) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26104 = arguments.length;
switch (G__26104) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26107 = arguments.length;
switch (G__26107) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24418__auto___26154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___26154,out){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___26154,out){
return (function (state_26131){
var state_val_26132 = (state_26131[(1)]);
if((state_val_26132 === (7))){
var inst_26126 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
var statearr_26133_26155 = state_26131__$1;
(statearr_26133_26155[(2)] = inst_26126);

(statearr_26133_26155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (1))){
var inst_26108 = null;
var state_26131__$1 = (function (){var statearr_26134 = state_26131;
(statearr_26134[(7)] = inst_26108);

return statearr_26134;
})();
var statearr_26135_26156 = state_26131__$1;
(statearr_26135_26156[(2)] = null);

(statearr_26135_26156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (4))){
var inst_26111 = (state_26131[(8)]);
var inst_26111__$1 = (state_26131[(2)]);
var inst_26112 = (inst_26111__$1 == null);
var inst_26113 = cljs.core.not.call(null,inst_26112);
var state_26131__$1 = (function (){var statearr_26136 = state_26131;
(statearr_26136[(8)] = inst_26111__$1);

return statearr_26136;
})();
if(inst_26113){
var statearr_26137_26157 = state_26131__$1;
(statearr_26137_26157[(1)] = (5));

} else {
var statearr_26138_26158 = state_26131__$1;
(statearr_26138_26158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (6))){
var state_26131__$1 = state_26131;
var statearr_26139_26159 = state_26131__$1;
(statearr_26139_26159[(2)] = null);

(statearr_26139_26159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (3))){
var inst_26128 = (state_26131[(2)]);
var inst_26129 = cljs.core.async.close_BANG_.call(null,out);
var state_26131__$1 = (function (){var statearr_26140 = state_26131;
(statearr_26140[(9)] = inst_26128);

return statearr_26140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26131__$1,inst_26129);
} else {
if((state_val_26132 === (2))){
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26131__$1,(4),ch);
} else {
if((state_val_26132 === (11))){
var inst_26111 = (state_26131[(8)]);
var inst_26120 = (state_26131[(2)]);
var inst_26108 = inst_26111;
var state_26131__$1 = (function (){var statearr_26141 = state_26131;
(statearr_26141[(10)] = inst_26120);

(statearr_26141[(7)] = inst_26108);

return statearr_26141;
})();
var statearr_26142_26160 = state_26131__$1;
(statearr_26142_26160[(2)] = null);

(statearr_26142_26160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (9))){
var inst_26111 = (state_26131[(8)]);
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26131__$1,(11),out,inst_26111);
} else {
if((state_val_26132 === (5))){
var inst_26111 = (state_26131[(8)]);
var inst_26108 = (state_26131[(7)]);
var inst_26115 = cljs.core._EQ_.call(null,inst_26111,inst_26108);
var state_26131__$1 = state_26131;
if(inst_26115){
var statearr_26144_26161 = state_26131__$1;
(statearr_26144_26161[(1)] = (8));

} else {
var statearr_26145_26162 = state_26131__$1;
(statearr_26145_26162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (10))){
var inst_26123 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
var statearr_26146_26163 = state_26131__$1;
(statearr_26146_26163[(2)] = inst_26123);

(statearr_26146_26163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (8))){
var inst_26108 = (state_26131[(7)]);
var tmp26143 = inst_26108;
var inst_26108__$1 = tmp26143;
var state_26131__$1 = (function (){var statearr_26147 = state_26131;
(statearr_26147[(7)] = inst_26108__$1);

return statearr_26147;
})();
var statearr_26148_26164 = state_26131__$1;
(statearr_26148_26164[(2)] = null);

(statearr_26148_26164[(1)] = (2));


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
});})(c__24418__auto___26154,out))
;
return ((function (switch__24323__auto__,c__24418__auto___26154,out){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_26149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26149[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_26149[(1)] = (1));

return statearr_26149;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_26131){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_26131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e26150){if((e26150 instanceof Object)){
var ex__24327__auto__ = e26150;
var statearr_26151_26165 = state_26131;
(statearr_26151_26165[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26166 = state_26131;
state_26131 = G__26166;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_26131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_26131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___26154,out))
})();
var state__24420__auto__ = (function (){var statearr_26152 = f__24419__auto__.call(null);
(statearr_26152[(6)] = c__24418__auto___26154);

return statearr_26152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___26154,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26168 = arguments.length;
switch (G__26168) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24418__auto___26234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___26234,out){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___26234,out){
return (function (state_26206){
var state_val_26207 = (state_26206[(1)]);
if((state_val_26207 === (7))){
var inst_26202 = (state_26206[(2)]);
var state_26206__$1 = state_26206;
var statearr_26208_26235 = state_26206__$1;
(statearr_26208_26235[(2)] = inst_26202);

(statearr_26208_26235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (1))){
var inst_26169 = (new Array(n));
var inst_26170 = inst_26169;
var inst_26171 = (0);
var state_26206__$1 = (function (){var statearr_26209 = state_26206;
(statearr_26209[(7)] = inst_26171);

(statearr_26209[(8)] = inst_26170);

return statearr_26209;
})();
var statearr_26210_26236 = state_26206__$1;
(statearr_26210_26236[(2)] = null);

(statearr_26210_26236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (4))){
var inst_26174 = (state_26206[(9)]);
var inst_26174__$1 = (state_26206[(2)]);
var inst_26175 = (inst_26174__$1 == null);
var inst_26176 = cljs.core.not.call(null,inst_26175);
var state_26206__$1 = (function (){var statearr_26211 = state_26206;
(statearr_26211[(9)] = inst_26174__$1);

return statearr_26211;
})();
if(inst_26176){
var statearr_26212_26237 = state_26206__$1;
(statearr_26212_26237[(1)] = (5));

} else {
var statearr_26213_26238 = state_26206__$1;
(statearr_26213_26238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (15))){
var inst_26196 = (state_26206[(2)]);
var state_26206__$1 = state_26206;
var statearr_26214_26239 = state_26206__$1;
(statearr_26214_26239[(2)] = inst_26196);

(statearr_26214_26239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (13))){
var state_26206__$1 = state_26206;
var statearr_26215_26240 = state_26206__$1;
(statearr_26215_26240[(2)] = null);

(statearr_26215_26240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (6))){
var inst_26171 = (state_26206[(7)]);
var inst_26192 = (inst_26171 > (0));
var state_26206__$1 = state_26206;
if(cljs.core.truth_(inst_26192)){
var statearr_26216_26241 = state_26206__$1;
(statearr_26216_26241[(1)] = (12));

} else {
var statearr_26217_26242 = state_26206__$1;
(statearr_26217_26242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (3))){
var inst_26204 = (state_26206[(2)]);
var state_26206__$1 = state_26206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26206__$1,inst_26204);
} else {
if((state_val_26207 === (12))){
var inst_26170 = (state_26206[(8)]);
var inst_26194 = cljs.core.vec.call(null,inst_26170);
var state_26206__$1 = state_26206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26206__$1,(15),out,inst_26194);
} else {
if((state_val_26207 === (2))){
var state_26206__$1 = state_26206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26206__$1,(4),ch);
} else {
if((state_val_26207 === (11))){
var inst_26186 = (state_26206[(2)]);
var inst_26187 = (new Array(n));
var inst_26170 = inst_26187;
var inst_26171 = (0);
var state_26206__$1 = (function (){var statearr_26218 = state_26206;
(statearr_26218[(7)] = inst_26171);

(statearr_26218[(8)] = inst_26170);

(statearr_26218[(10)] = inst_26186);

return statearr_26218;
})();
var statearr_26219_26243 = state_26206__$1;
(statearr_26219_26243[(2)] = null);

(statearr_26219_26243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (9))){
var inst_26170 = (state_26206[(8)]);
var inst_26184 = cljs.core.vec.call(null,inst_26170);
var state_26206__$1 = state_26206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26206__$1,(11),out,inst_26184);
} else {
if((state_val_26207 === (5))){
var inst_26179 = (state_26206[(11)]);
var inst_26174 = (state_26206[(9)]);
var inst_26171 = (state_26206[(7)]);
var inst_26170 = (state_26206[(8)]);
var inst_26178 = (inst_26170[inst_26171] = inst_26174);
var inst_26179__$1 = (inst_26171 + (1));
var inst_26180 = (inst_26179__$1 < n);
var state_26206__$1 = (function (){var statearr_26220 = state_26206;
(statearr_26220[(11)] = inst_26179__$1);

(statearr_26220[(12)] = inst_26178);

return statearr_26220;
})();
if(cljs.core.truth_(inst_26180)){
var statearr_26221_26244 = state_26206__$1;
(statearr_26221_26244[(1)] = (8));

} else {
var statearr_26222_26245 = state_26206__$1;
(statearr_26222_26245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (14))){
var inst_26199 = (state_26206[(2)]);
var inst_26200 = cljs.core.async.close_BANG_.call(null,out);
var state_26206__$1 = (function (){var statearr_26224 = state_26206;
(statearr_26224[(13)] = inst_26199);

return statearr_26224;
})();
var statearr_26225_26246 = state_26206__$1;
(statearr_26225_26246[(2)] = inst_26200);

(statearr_26225_26246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (10))){
var inst_26190 = (state_26206[(2)]);
var state_26206__$1 = state_26206;
var statearr_26226_26247 = state_26206__$1;
(statearr_26226_26247[(2)] = inst_26190);

(statearr_26226_26247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26207 === (8))){
var inst_26179 = (state_26206[(11)]);
var inst_26170 = (state_26206[(8)]);
var tmp26223 = inst_26170;
var inst_26170__$1 = tmp26223;
var inst_26171 = inst_26179;
var state_26206__$1 = (function (){var statearr_26227 = state_26206;
(statearr_26227[(7)] = inst_26171);

(statearr_26227[(8)] = inst_26170__$1);

return statearr_26227;
})();
var statearr_26228_26248 = state_26206__$1;
(statearr_26228_26248[(2)] = null);

(statearr_26228_26248[(1)] = (2));


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
});})(c__24418__auto___26234,out))
;
return ((function (switch__24323__auto__,c__24418__auto___26234,out){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_26229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26229[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_26229[(1)] = (1));

return statearr_26229;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_26206){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_26206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e26230){if((e26230 instanceof Object)){
var ex__24327__auto__ = e26230;
var statearr_26231_26249 = state_26206;
(statearr_26231_26249[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26250 = state_26206;
state_26206 = G__26250;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_26206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_26206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___26234,out))
})();
var state__24420__auto__ = (function (){var statearr_26232 = f__24419__auto__.call(null);
(statearr_26232[(6)] = c__24418__auto___26234);

return statearr_26232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___26234,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26252 = arguments.length;
switch (G__26252) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24418__auto___26322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___26322,out){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___26322,out){
return (function (state_26294){
var state_val_26295 = (state_26294[(1)]);
if((state_val_26295 === (7))){
var inst_26290 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26296_26323 = state_26294__$1;
(statearr_26296_26323[(2)] = inst_26290);

(statearr_26296_26323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (1))){
var inst_26253 = [];
var inst_26254 = inst_26253;
var inst_26255 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26294__$1 = (function (){var statearr_26297 = state_26294;
(statearr_26297[(7)] = inst_26255);

(statearr_26297[(8)] = inst_26254);

return statearr_26297;
})();
var statearr_26298_26324 = state_26294__$1;
(statearr_26298_26324[(2)] = null);

(statearr_26298_26324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (4))){
var inst_26258 = (state_26294[(9)]);
var inst_26258__$1 = (state_26294[(2)]);
var inst_26259 = (inst_26258__$1 == null);
var inst_26260 = cljs.core.not.call(null,inst_26259);
var state_26294__$1 = (function (){var statearr_26299 = state_26294;
(statearr_26299[(9)] = inst_26258__$1);

return statearr_26299;
})();
if(inst_26260){
var statearr_26300_26325 = state_26294__$1;
(statearr_26300_26325[(1)] = (5));

} else {
var statearr_26301_26326 = state_26294__$1;
(statearr_26301_26326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (15))){
var inst_26284 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26302_26327 = state_26294__$1;
(statearr_26302_26327[(2)] = inst_26284);

(statearr_26302_26327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (13))){
var state_26294__$1 = state_26294;
var statearr_26303_26328 = state_26294__$1;
(statearr_26303_26328[(2)] = null);

(statearr_26303_26328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (6))){
var inst_26254 = (state_26294[(8)]);
var inst_26279 = inst_26254.length;
var inst_26280 = (inst_26279 > (0));
var state_26294__$1 = state_26294;
if(cljs.core.truth_(inst_26280)){
var statearr_26304_26329 = state_26294__$1;
(statearr_26304_26329[(1)] = (12));

} else {
var statearr_26305_26330 = state_26294__$1;
(statearr_26305_26330[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (3))){
var inst_26292 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26294__$1,inst_26292);
} else {
if((state_val_26295 === (12))){
var inst_26254 = (state_26294[(8)]);
var inst_26282 = cljs.core.vec.call(null,inst_26254);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26294__$1,(15),out,inst_26282);
} else {
if((state_val_26295 === (2))){
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26294__$1,(4),ch);
} else {
if((state_val_26295 === (11))){
var inst_26262 = (state_26294[(10)]);
var inst_26258 = (state_26294[(9)]);
var inst_26272 = (state_26294[(2)]);
var inst_26273 = [];
var inst_26274 = inst_26273.push(inst_26258);
var inst_26254 = inst_26273;
var inst_26255 = inst_26262;
var state_26294__$1 = (function (){var statearr_26306 = state_26294;
(statearr_26306[(7)] = inst_26255);

(statearr_26306[(8)] = inst_26254);

(statearr_26306[(11)] = inst_26274);

(statearr_26306[(12)] = inst_26272);

return statearr_26306;
})();
var statearr_26307_26331 = state_26294__$1;
(statearr_26307_26331[(2)] = null);

(statearr_26307_26331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (9))){
var inst_26254 = (state_26294[(8)]);
var inst_26270 = cljs.core.vec.call(null,inst_26254);
var state_26294__$1 = state_26294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26294__$1,(11),out,inst_26270);
} else {
if((state_val_26295 === (5))){
var inst_26262 = (state_26294[(10)]);
var inst_26255 = (state_26294[(7)]);
var inst_26258 = (state_26294[(9)]);
var inst_26262__$1 = f.call(null,inst_26258);
var inst_26263 = cljs.core._EQ_.call(null,inst_26262__$1,inst_26255);
var inst_26264 = cljs.core.keyword_identical_QMARK_.call(null,inst_26255,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26265 = ((inst_26263) || (inst_26264));
var state_26294__$1 = (function (){var statearr_26308 = state_26294;
(statearr_26308[(10)] = inst_26262__$1);

return statearr_26308;
})();
if(cljs.core.truth_(inst_26265)){
var statearr_26309_26332 = state_26294__$1;
(statearr_26309_26332[(1)] = (8));

} else {
var statearr_26310_26333 = state_26294__$1;
(statearr_26310_26333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (14))){
var inst_26287 = (state_26294[(2)]);
var inst_26288 = cljs.core.async.close_BANG_.call(null,out);
var state_26294__$1 = (function (){var statearr_26312 = state_26294;
(statearr_26312[(13)] = inst_26287);

return statearr_26312;
})();
var statearr_26313_26334 = state_26294__$1;
(statearr_26313_26334[(2)] = inst_26288);

(statearr_26313_26334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (10))){
var inst_26277 = (state_26294[(2)]);
var state_26294__$1 = state_26294;
var statearr_26314_26335 = state_26294__$1;
(statearr_26314_26335[(2)] = inst_26277);

(statearr_26314_26335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26295 === (8))){
var inst_26262 = (state_26294[(10)]);
var inst_26254 = (state_26294[(8)]);
var inst_26258 = (state_26294[(9)]);
var inst_26267 = inst_26254.push(inst_26258);
var tmp26311 = inst_26254;
var inst_26254__$1 = tmp26311;
var inst_26255 = inst_26262;
var state_26294__$1 = (function (){var statearr_26315 = state_26294;
(statearr_26315[(7)] = inst_26255);

(statearr_26315[(8)] = inst_26254__$1);

(statearr_26315[(14)] = inst_26267);

return statearr_26315;
})();
var statearr_26316_26336 = state_26294__$1;
(statearr_26316_26336[(2)] = null);

(statearr_26316_26336[(1)] = (2));


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
});})(c__24418__auto___26322,out))
;
return ((function (switch__24323__auto__,c__24418__auto___26322,out){
return (function() {
var cljs$core$async$state_machine__24324__auto__ = null;
var cljs$core$async$state_machine__24324__auto____0 = (function (){
var statearr_26317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26317[(0)] = cljs$core$async$state_machine__24324__auto__);

(statearr_26317[(1)] = (1));

return statearr_26317;
});
var cljs$core$async$state_machine__24324__auto____1 = (function (state_26294){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_26294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e26318){if((e26318 instanceof Object)){
var ex__24327__auto__ = e26318;
var statearr_26319_26337 = state_26294;
(statearr_26319_26337[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26338 = state_26294;
state_26294 = G__26338;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
cljs$core$async$state_machine__24324__auto__ = function(state_26294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24324__auto____1.call(this,state_26294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24324__auto____0;
cljs$core$async$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24324__auto____1;
return cljs$core$async$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___26322,out))
})();
var state__24420__auto__ = (function (){var statearr_26320 = f__24419__auto__.call(null);
(statearr_26320[(6)] = c__24418__auto___26322);

return statearr_26320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___26322,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1625902153062
