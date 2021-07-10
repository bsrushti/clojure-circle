// Compiled by ClojureScript 1.10.520 {}
goog.provide('three_dimension.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
three_dimension.core.setup = (function three_dimension$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
three_dimension.core.update_state = (function three_dimension$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
three_dimension.core.draw_state = (function three_dimension$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__22241__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__22241__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
three_dimension.core.run_sketch = (function three_dimension$core$run_sketch(){
three_dimension.core.three_dimension = (function three_dimension$core$run_sketch_$_three_dimension(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"three-dimension",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,three_dimension.core.update_state))?(function() { 
var G__22355__delegate = function (args){
return cljs.core.apply.call(null,three_dimension.core.update_state,args);
};
var G__22355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22356__i = 0, G__22356__a = new Array(arguments.length -  0);
while (G__22356__i < G__22356__a.length) {G__22356__a[G__22356__i] = arguments[G__22356__i + 0]; ++G__22356__i;}
  args = new cljs.core.IndexedSeq(G__22356__a,0,null);
} 
return G__22355__delegate.call(this,args);};
G__22355.cljs$lang$maxFixedArity = 0;
G__22355.cljs$lang$applyTo = (function (arglist__22357){
var args = cljs.core.seq(arglist__22357);
return G__22355__delegate(args);
});
G__22355.cljs$core$IFn$_invoke$arity$variadic = G__22355__delegate;
return G__22355;
})()
:three_dimension.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,three_dimension.core.setup))?(function() { 
var G__22358__delegate = function (args){
return cljs.core.apply.call(null,three_dimension.core.setup,args);
};
var G__22358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22359__i = 0, G__22359__a = new Array(arguments.length -  0);
while (G__22359__i < G__22359__a.length) {G__22359__a[G__22359__i] = arguments[G__22359__i + 0]; ++G__22359__i;}
  args = new cljs.core.IndexedSeq(G__22359__a,0,null);
} 
return G__22358__delegate.call(this,args);};
G__22358.cljs$lang$maxFixedArity = 0;
G__22358.cljs$lang$applyTo = (function (arglist__22360){
var args = cljs.core.seq(arglist__22360);
return G__22358__delegate(args);
});
G__22358.cljs$core$IFn$_invoke$arity$variadic = G__22358__delegate;
return G__22358;
})()
:three_dimension.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,three_dimension.core.draw_state))?(function() { 
var G__22361__delegate = function (args){
return cljs.core.apply.call(null,three_dimension.core.draw_state,args);
};
var G__22361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22362__i = 0, G__22362__a = new Array(arguments.length -  0);
while (G__22362__i < G__22362__a.length) {G__22362__a[G__22362__i] = arguments[G__22362__i + 0]; ++G__22362__i;}
  args = new cljs.core.IndexedSeq(G__22362__a,0,null);
} 
return G__22361__delegate.call(this,args);};
G__22361.cljs$lang$maxFixedArity = 0;
G__22361.cljs$lang$applyTo = (function (arglist__22363){
var args = cljs.core.seq(arglist__22363);
return G__22361__delegate(args);
});
G__22361.cljs$core$IFn$_invoke$arity$variadic = G__22361__delegate;
return G__22361;
})()
:three_dimension.core.draw_state));
});
goog.exportSymbol('three_dimension.core.three_dimension', three_dimension.core.three_dimension);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20937__20938__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20937__20938__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),three_dimension.core.three_dimension,new cljs.core.Keyword(null,"host-id","host-id",742376279),"three-dimension"], null));
}
});
goog.exportSymbol('three_dimension.core.run_sketch', three_dimension.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1625902149876
