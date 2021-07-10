// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e33155){if((e33155 instanceof Error)){
var e = e33155;
return "Error: Unable to stringify";
} else {
throw e33155;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33158 = arguments.length;
switch (G__33158) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33156_SHARP_){
if(typeof p1__33156_SHARP_ === 'string'){
return p1__33156_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33156_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33161 = arguments.length;
var i__4731__auto___33162 = (0);
while(true){
if((i__4731__auto___33162 < len__4730__auto___33161)){
args__4736__auto__.push((arguments[i__4731__auto___33162]));

var G__33163 = (i__4731__auto___33162 + (1));
i__4731__auto___33162 = G__33163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33160){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33160));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33165 = arguments.length;
var i__4731__auto___33166 = (0);
while(true){
if((i__4731__auto___33166 < len__4730__auto___33165)){
args__4736__auto__.push((arguments[i__4731__auto___33166]));

var G__33167 = (i__4731__auto___33166 + (1));
i__4731__auto___33166 = G__33167;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33164){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33164));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33168){
var map__33169 = p__33168;
var map__33169__$1 = (((((!((map__33169 == null))))?(((((map__33169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33169):map__33169);
var message = cljs.core.get.call(null,map__33169__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33169__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24418__auto___33248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___33248,ch){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___33248,ch){
return (function (state_33220){
var state_val_33221 = (state_33220[(1)]);
if((state_val_33221 === (7))){
var inst_33216 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33222_33249 = state_33220__$1;
(statearr_33222_33249[(2)] = inst_33216);

(statearr_33222_33249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (1))){
var state_33220__$1 = state_33220;
var statearr_33223_33250 = state_33220__$1;
(statearr_33223_33250[(2)] = null);

(statearr_33223_33250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (4))){
var inst_33173 = (state_33220[(7)]);
var inst_33173__$1 = (state_33220[(2)]);
var state_33220__$1 = (function (){var statearr_33224 = state_33220;
(statearr_33224[(7)] = inst_33173__$1);

return statearr_33224;
})();
if(cljs.core.truth_(inst_33173__$1)){
var statearr_33225_33251 = state_33220__$1;
(statearr_33225_33251[(1)] = (5));

} else {
var statearr_33226_33252 = state_33220__$1;
(statearr_33226_33252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (15))){
var inst_33180 = (state_33220[(8)]);
var inst_33195 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33180);
var inst_33196 = cljs.core.first.call(null,inst_33195);
var inst_33197 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33196);
var inst_33198 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33197)].join('');
var inst_33199 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33198);
var state_33220__$1 = state_33220;
var statearr_33227_33253 = state_33220__$1;
(statearr_33227_33253[(2)] = inst_33199);

(statearr_33227_33253[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (13))){
var inst_33204 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33228_33254 = state_33220__$1;
(statearr_33228_33254[(2)] = inst_33204);

(statearr_33228_33254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (6))){
var state_33220__$1 = state_33220;
var statearr_33229_33255 = state_33220__$1;
(statearr_33229_33255[(2)] = null);

(statearr_33229_33255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (17))){
var inst_33202 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33230_33256 = state_33220__$1;
(statearr_33230_33256[(2)] = inst_33202);

(statearr_33230_33256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (3))){
var inst_33218 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33220__$1,inst_33218);
} else {
if((state_val_33221 === (12))){
var inst_33179 = (state_33220[(9)]);
var inst_33193 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33179,opts);
var state_33220__$1 = state_33220;
if(inst_33193){
var statearr_33231_33257 = state_33220__$1;
(statearr_33231_33257[(1)] = (15));

} else {
var statearr_33232_33258 = state_33220__$1;
(statearr_33232_33258[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (2))){
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33220__$1,(4),ch);
} else {
if((state_val_33221 === (11))){
var inst_33180 = (state_33220[(8)]);
var inst_33185 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33186 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33180);
var inst_33187 = cljs.core.async.timeout.call(null,(1000));
var inst_33188 = [inst_33186,inst_33187];
var inst_33189 = (new cljs.core.PersistentVector(null,2,(5),inst_33185,inst_33188,null));
var state_33220__$1 = state_33220;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33220__$1,(14),inst_33189);
} else {
if((state_val_33221 === (9))){
var inst_33180 = (state_33220[(8)]);
var inst_33206 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33207 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33180);
var inst_33208 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33207);
var inst_33209 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33208)].join('');
var inst_33210 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33209);
var state_33220__$1 = (function (){var statearr_33233 = state_33220;
(statearr_33233[(10)] = inst_33206);

return statearr_33233;
})();
var statearr_33234_33259 = state_33220__$1;
(statearr_33234_33259[(2)] = inst_33210);

(statearr_33234_33259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (5))){
var inst_33173 = (state_33220[(7)]);
var inst_33175 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33176 = (new cljs.core.PersistentArrayMap(null,2,inst_33175,null));
var inst_33177 = (new cljs.core.PersistentHashSet(null,inst_33176,null));
var inst_33178 = figwheel.client.focus_msgs.call(null,inst_33177,inst_33173);
var inst_33179 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33178);
var inst_33180 = cljs.core.first.call(null,inst_33178);
var inst_33181 = figwheel.client.autoload_QMARK_.call(null);
var state_33220__$1 = (function (){var statearr_33235 = state_33220;
(statearr_33235[(9)] = inst_33179);

(statearr_33235[(8)] = inst_33180);

return statearr_33235;
})();
if(cljs.core.truth_(inst_33181)){
var statearr_33236_33260 = state_33220__$1;
(statearr_33236_33260[(1)] = (8));

} else {
var statearr_33237_33261 = state_33220__$1;
(statearr_33237_33261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (14))){
var inst_33191 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33238_33262 = state_33220__$1;
(statearr_33238_33262[(2)] = inst_33191);

(statearr_33238_33262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (16))){
var state_33220__$1 = state_33220;
var statearr_33239_33263 = state_33220__$1;
(statearr_33239_33263[(2)] = null);

(statearr_33239_33263[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (10))){
var inst_33212 = (state_33220[(2)]);
var state_33220__$1 = (function (){var statearr_33240 = state_33220;
(statearr_33240[(11)] = inst_33212);

return statearr_33240;
})();
var statearr_33241_33264 = state_33220__$1;
(statearr_33241_33264[(2)] = null);

(statearr_33241_33264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (8))){
var inst_33179 = (state_33220[(9)]);
var inst_33183 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33179,opts);
var state_33220__$1 = state_33220;
if(cljs.core.truth_(inst_33183)){
var statearr_33242_33265 = state_33220__$1;
(statearr_33242_33265[(1)] = (11));

} else {
var statearr_33243_33266 = state_33220__$1;
(statearr_33243_33266[(1)] = (12));

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
});})(c__24418__auto___33248,ch))
;
return ((function (switch__24323__auto__,c__24418__auto___33248,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24324__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24324__auto____0 = (function (){
var statearr_33244 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33244[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24324__auto__);

(statearr_33244[(1)] = (1));

return statearr_33244;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24324__auto____1 = (function (state_33220){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_33220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e33245){if((e33245 instanceof Object)){
var ex__24327__auto__ = e33245;
var statearr_33246_33267 = state_33220;
(statearr_33246_33267[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33268 = state_33220;
state_33220 = G__33268;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24324__auto__ = function(state_33220){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24324__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24324__auto____1.call(this,state_33220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24324__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24324__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___33248,ch))
})();
var state__24420__auto__ = (function (){var statearr_33247 = f__24419__auto__.call(null);
(statearr_33247[(6)] = c__24418__auto___33248);

return statearr_33247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___33248,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33269_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33269_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33275 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33275){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33271 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33273 = true;
var _STAR_print_fn_STAR__temp_val__33274 = ((function (_STAR_print_newline_STAR__orig_val__33271,_STAR_print_fn_STAR__orig_val__33272,_STAR_print_newline_STAR__temp_val__33273,sb,base_path_33275){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__33271,_STAR_print_fn_STAR__orig_val__33272,_STAR_print_newline_STAR__temp_val__33273,sb,base_path_33275))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33273;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33274;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33272;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33271;
}}catch (e33270){if((e33270 instanceof Error)){
var e = e33270;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33275], null));
} else {
var e = e33270;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33275))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33276){
var map__33277 = p__33276;
var map__33277__$1 = (((((!((map__33277 == null))))?(((((map__33277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33277):map__33277);
var opts = map__33277__$1;
var build_id = cljs.core.get.call(null,map__33277__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33277,map__33277__$1,opts,build_id){
return (function (p__33279){
var vec__33280 = p__33279;
var seq__33281 = cljs.core.seq.call(null,vec__33280);
var first__33282 = cljs.core.first.call(null,seq__33281);
var seq__33281__$1 = cljs.core.next.call(null,seq__33281);
var map__33283 = first__33282;
var map__33283__$1 = (((((!((map__33283 == null))))?(((((map__33283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33283):map__33283);
var msg = map__33283__$1;
var msg_name = cljs.core.get.call(null,map__33283__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33281__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33280,seq__33281,first__33282,seq__33281__$1,map__33283,map__33283__$1,msg,msg_name,_,map__33277,map__33277__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33280,seq__33281,first__33282,seq__33281__$1,map__33283,map__33283__$1,msg,msg_name,_,map__33277,map__33277__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33277,map__33277__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33285){
var vec__33286 = p__33285;
var seq__33287 = cljs.core.seq.call(null,vec__33286);
var first__33288 = cljs.core.first.call(null,seq__33287);
var seq__33287__$1 = cljs.core.next.call(null,seq__33287);
var map__33289 = first__33288;
var map__33289__$1 = (((((!((map__33289 == null))))?(((((map__33289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33289):map__33289);
var msg = map__33289__$1;
var msg_name = cljs.core.get.call(null,map__33289__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33287__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33291){
var map__33292 = p__33291;
var map__33292__$1 = (((((!((map__33292 == null))))?(((((map__33292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33292):map__33292);
var on_compile_warning = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33292,map__33292__$1,on_compile_warning,on_compile_fail){
return (function (p__33294){
var vec__33295 = p__33294;
var seq__33296 = cljs.core.seq.call(null,vec__33295);
var first__33297 = cljs.core.first.call(null,seq__33296);
var seq__33296__$1 = cljs.core.next.call(null,seq__33296);
var map__33298 = first__33297;
var map__33298__$1 = (((((!((map__33298 == null))))?(((((map__33298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33298):map__33298);
var msg = map__33298__$1;
var msg_name = cljs.core.get.call(null,map__33298__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33296__$1;
var pred__33300 = cljs.core._EQ_;
var expr__33301 = msg_name;
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33301))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33300.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33301))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33292,map__33292__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto__,msg_hist,msg_names,msg){
return (function (state_33390){
var state_val_33391 = (state_33390[(1)]);
if((state_val_33391 === (7))){
var inst_33310 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
if(cljs.core.truth_(inst_33310)){
var statearr_33392_33439 = state_33390__$1;
(statearr_33392_33439[(1)] = (8));

} else {
var statearr_33393_33440 = state_33390__$1;
(statearr_33393_33440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (20))){
var inst_33384 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33394_33441 = state_33390__$1;
(statearr_33394_33441[(2)] = inst_33384);

(statearr_33394_33441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (27))){
var inst_33380 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33395_33442 = state_33390__$1;
(statearr_33395_33442[(2)] = inst_33380);

(statearr_33395_33442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (1))){
var inst_33303 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33390__$1 = state_33390;
if(cljs.core.truth_(inst_33303)){
var statearr_33396_33443 = state_33390__$1;
(statearr_33396_33443[(1)] = (2));

} else {
var statearr_33397_33444 = state_33390__$1;
(statearr_33397_33444[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (24))){
var inst_33382 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33398_33445 = state_33390__$1;
(statearr_33398_33445[(2)] = inst_33382);

(statearr_33398_33445[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (4))){
var inst_33388 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33390__$1,inst_33388);
} else {
if((state_val_33391 === (15))){
var inst_33386 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33399_33446 = state_33390__$1;
(statearr_33399_33446[(2)] = inst_33386);

(statearr_33399_33446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (21))){
var inst_33339 = (state_33390[(2)]);
var inst_33340 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33341 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33340);
var state_33390__$1 = (function (){var statearr_33400 = state_33390;
(statearr_33400[(7)] = inst_33339);

return statearr_33400;
})();
var statearr_33401_33447 = state_33390__$1;
(statearr_33401_33447[(2)] = inst_33341);

(statearr_33401_33447[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (31))){
var inst_33369 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33390__$1 = state_33390;
if(inst_33369){
var statearr_33402_33448 = state_33390__$1;
(statearr_33402_33448[(1)] = (34));

} else {
var statearr_33403_33449 = state_33390__$1;
(statearr_33403_33449[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (32))){
var inst_33378 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33404_33450 = state_33390__$1;
(statearr_33404_33450[(2)] = inst_33378);

(statearr_33404_33450[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (33))){
var inst_33365 = (state_33390[(2)]);
var inst_33366 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33367 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33366);
var state_33390__$1 = (function (){var statearr_33405 = state_33390;
(statearr_33405[(8)] = inst_33365);

return statearr_33405;
})();
var statearr_33406_33451 = state_33390__$1;
(statearr_33406_33451[(2)] = inst_33367);

(statearr_33406_33451[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (13))){
var inst_33324 = figwheel.client.heads_up.clear.call(null);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(16),inst_33324);
} else {
if((state_val_33391 === (22))){
var inst_33345 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33346 = figwheel.client.heads_up.append_warning_message.call(null,inst_33345);
var state_33390__$1 = state_33390;
var statearr_33407_33452 = state_33390__$1;
(statearr_33407_33452[(2)] = inst_33346);

(statearr_33407_33452[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (36))){
var inst_33376 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33408_33453 = state_33390__$1;
(statearr_33408_33453[(2)] = inst_33376);

(statearr_33408_33453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (29))){
var inst_33356 = (state_33390[(2)]);
var inst_33357 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33358 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33357);
var state_33390__$1 = (function (){var statearr_33409 = state_33390;
(statearr_33409[(9)] = inst_33356);

return statearr_33409;
})();
var statearr_33410_33454 = state_33390__$1;
(statearr_33410_33454[(2)] = inst_33358);

(statearr_33410_33454[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (6))){
var inst_33305 = (state_33390[(10)]);
var state_33390__$1 = state_33390;
var statearr_33411_33455 = state_33390__$1;
(statearr_33411_33455[(2)] = inst_33305);

(statearr_33411_33455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (28))){
var inst_33352 = (state_33390[(2)]);
var inst_33353 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33354 = figwheel.client.heads_up.display_warning.call(null,inst_33353);
var state_33390__$1 = (function (){var statearr_33412 = state_33390;
(statearr_33412[(11)] = inst_33352);

return statearr_33412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(29),inst_33354);
} else {
if((state_val_33391 === (25))){
var inst_33350 = figwheel.client.heads_up.clear.call(null);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(28),inst_33350);
} else {
if((state_val_33391 === (34))){
var inst_33371 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(37),inst_33371);
} else {
if((state_val_33391 === (17))){
var inst_33330 = (state_33390[(2)]);
var inst_33331 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33332 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33331);
var state_33390__$1 = (function (){var statearr_33413 = state_33390;
(statearr_33413[(12)] = inst_33330);

return statearr_33413;
})();
var statearr_33414_33456 = state_33390__$1;
(statearr_33414_33456[(2)] = inst_33332);

(statearr_33414_33456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (3))){
var inst_33322 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33390__$1 = state_33390;
if(inst_33322){
var statearr_33415_33457 = state_33390__$1;
(statearr_33415_33457[(1)] = (13));

} else {
var statearr_33416_33458 = state_33390__$1;
(statearr_33416_33458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (12))){
var inst_33318 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33417_33459 = state_33390__$1;
(statearr_33417_33459[(2)] = inst_33318);

(statearr_33417_33459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (2))){
var inst_33305 = (state_33390[(10)]);
var inst_33305__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33390__$1 = (function (){var statearr_33418 = state_33390;
(statearr_33418[(10)] = inst_33305__$1);

return statearr_33418;
})();
if(cljs.core.truth_(inst_33305__$1)){
var statearr_33419_33460 = state_33390__$1;
(statearr_33419_33460[(1)] = (5));

} else {
var statearr_33420_33461 = state_33390__$1;
(statearr_33420_33461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (23))){
var inst_33348 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33390__$1 = state_33390;
if(inst_33348){
var statearr_33421_33462 = state_33390__$1;
(statearr_33421_33462[(1)] = (25));

} else {
var statearr_33422_33463 = state_33390__$1;
(statearr_33422_33463[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (35))){
var state_33390__$1 = state_33390;
var statearr_33423_33464 = state_33390__$1;
(statearr_33423_33464[(2)] = null);

(statearr_33423_33464[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (19))){
var inst_33343 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33390__$1 = state_33390;
if(inst_33343){
var statearr_33424_33465 = state_33390__$1;
(statearr_33424_33465[(1)] = (22));

} else {
var statearr_33425_33466 = state_33390__$1;
(statearr_33425_33466[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (11))){
var inst_33314 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33426_33467 = state_33390__$1;
(statearr_33426_33467[(2)] = inst_33314);

(statearr_33426_33467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (9))){
var inst_33316 = figwheel.client.heads_up.clear.call(null);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(12),inst_33316);
} else {
if((state_val_33391 === (5))){
var inst_33307 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33390__$1 = state_33390;
var statearr_33427_33468 = state_33390__$1;
(statearr_33427_33468[(2)] = inst_33307);

(statearr_33427_33468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (14))){
var inst_33334 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33390__$1 = state_33390;
if(inst_33334){
var statearr_33428_33469 = state_33390__$1;
(statearr_33428_33469[(1)] = (18));

} else {
var statearr_33429_33470 = state_33390__$1;
(statearr_33429_33470[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (26))){
var inst_33360 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33390__$1 = state_33390;
if(inst_33360){
var statearr_33430_33471 = state_33390__$1;
(statearr_33430_33471[(1)] = (30));

} else {
var statearr_33431_33472 = state_33390__$1;
(statearr_33431_33472[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (16))){
var inst_33326 = (state_33390[(2)]);
var inst_33327 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33328 = figwheel.client.heads_up.display_exception.call(null,inst_33327);
var state_33390__$1 = (function (){var statearr_33432 = state_33390;
(statearr_33432[(13)] = inst_33326);

return statearr_33432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(17),inst_33328);
} else {
if((state_val_33391 === (30))){
var inst_33362 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33363 = figwheel.client.heads_up.display_warning.call(null,inst_33362);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(33),inst_33363);
} else {
if((state_val_33391 === (10))){
var inst_33320 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33433_33473 = state_33390__$1;
(statearr_33433_33473[(2)] = inst_33320);

(statearr_33433_33473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (18))){
var inst_33336 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33337 = figwheel.client.heads_up.display_exception.call(null,inst_33336);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(21),inst_33337);
} else {
if((state_val_33391 === (37))){
var inst_33373 = (state_33390[(2)]);
var state_33390__$1 = state_33390;
var statearr_33434_33474 = state_33390__$1;
(statearr_33434_33474[(2)] = inst_33373);

(statearr_33434_33474[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33391 === (8))){
var inst_33312 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33390__$1 = state_33390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33390__$1,(11),inst_33312);
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
});})(c__24418__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24323__auto__,c__24418__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto____0 = (function (){
var statearr_33435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33435[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto__);

(statearr_33435[(1)] = (1));

return statearr_33435;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto____1 = (function (state_33390){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_33390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e33436){if((e33436 instanceof Object)){
var ex__24327__auto__ = e33436;
var statearr_33437_33475 = state_33390;
(statearr_33437_33475[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33476 = state_33390;
state_33390 = G__33476;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto__ = function(state_33390){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto____1.call(this,state_33390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto__,msg_hist,msg_names,msg))
})();
var state__24420__auto__ = (function (){var statearr_33438 = f__24419__auto__.call(null);
(statearr_33438[(6)] = c__24418__auto__);

return statearr_33438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto__,msg_hist,msg_names,msg))
);

return c__24418__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24418__auto___33505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___33505,ch){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___33505,ch){
return (function (state_33491){
var state_val_33492 = (state_33491[(1)]);
if((state_val_33492 === (1))){
var state_33491__$1 = state_33491;
var statearr_33493_33506 = state_33491__$1;
(statearr_33493_33506[(2)] = null);

(statearr_33493_33506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (2))){
var state_33491__$1 = state_33491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33491__$1,(4),ch);
} else {
if((state_val_33492 === (3))){
var inst_33489 = (state_33491[(2)]);
var state_33491__$1 = state_33491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33491__$1,inst_33489);
} else {
if((state_val_33492 === (4))){
var inst_33479 = (state_33491[(7)]);
var inst_33479__$1 = (state_33491[(2)]);
var state_33491__$1 = (function (){var statearr_33494 = state_33491;
(statearr_33494[(7)] = inst_33479__$1);

return statearr_33494;
})();
if(cljs.core.truth_(inst_33479__$1)){
var statearr_33495_33507 = state_33491__$1;
(statearr_33495_33507[(1)] = (5));

} else {
var statearr_33496_33508 = state_33491__$1;
(statearr_33496_33508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (5))){
var inst_33479 = (state_33491[(7)]);
var inst_33481 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33479);
var state_33491__$1 = state_33491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33491__$1,(8),inst_33481);
} else {
if((state_val_33492 === (6))){
var state_33491__$1 = state_33491;
var statearr_33497_33509 = state_33491__$1;
(statearr_33497_33509[(2)] = null);

(statearr_33497_33509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (7))){
var inst_33487 = (state_33491[(2)]);
var state_33491__$1 = state_33491;
var statearr_33498_33510 = state_33491__$1;
(statearr_33498_33510[(2)] = inst_33487);

(statearr_33498_33510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (8))){
var inst_33483 = (state_33491[(2)]);
var state_33491__$1 = (function (){var statearr_33499 = state_33491;
(statearr_33499[(8)] = inst_33483);

return statearr_33499;
})();
var statearr_33500_33511 = state_33491__$1;
(statearr_33500_33511[(2)] = null);

(statearr_33500_33511[(1)] = (2));


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
});})(c__24418__auto___33505,ch))
;
return ((function (switch__24323__auto__,c__24418__auto___33505,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24324__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24324__auto____0 = (function (){
var statearr_33501 = [null,null,null,null,null,null,null,null,null];
(statearr_33501[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24324__auto__);

(statearr_33501[(1)] = (1));

return statearr_33501;
});
var figwheel$client$heads_up_plugin_$_state_machine__24324__auto____1 = (function (state_33491){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_33491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e33502){if((e33502 instanceof Object)){
var ex__24327__auto__ = e33502;
var statearr_33503_33512 = state_33491;
(statearr_33503_33512[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33513 = state_33491;
state_33491 = G__33513;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24324__auto__ = function(state_33491){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24324__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24324__auto____1.call(this,state_33491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24324__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24324__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___33505,ch))
})();
var state__24420__auto__ = (function (){var statearr_33504 = f__24419__auto__.call(null);
(statearr_33504[(6)] = c__24418__auto___33505);

return statearr_33504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___33505,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto__){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto__){
return (function (state_33519){
var state_val_33520 = (state_33519[(1)]);
if((state_val_33520 === (1))){
var inst_33514 = cljs.core.async.timeout.call(null,(3000));
var state_33519__$1 = state_33519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33519__$1,(2),inst_33514);
} else {
if((state_val_33520 === (2))){
var inst_33516 = (state_33519[(2)]);
var inst_33517 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33519__$1 = (function (){var statearr_33521 = state_33519;
(statearr_33521[(7)] = inst_33516);

return statearr_33521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33519__$1,inst_33517);
} else {
return null;
}
}
});})(c__24418__auto__))
;
return ((function (switch__24323__auto__,c__24418__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24324__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24324__auto____0 = (function (){
var statearr_33522 = [null,null,null,null,null,null,null,null];
(statearr_33522[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24324__auto__);

(statearr_33522[(1)] = (1));

return statearr_33522;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24324__auto____1 = (function (state_33519){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_33519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e33523){if((e33523 instanceof Object)){
var ex__24327__auto__ = e33523;
var statearr_33524_33526 = state_33519;
(statearr_33524_33526[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33527 = state_33519;
state_33519 = G__33527;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24324__auto__ = function(state_33519){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24324__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24324__auto____1.call(this,state_33519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24324__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24324__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto__))
})();
var state__24420__auto__ = (function (){var statearr_33525 = f__24419__auto__.call(null);
(statearr_33525[(6)] = c__24418__auto__);

return statearr_33525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto__))
);

return c__24418__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto__,figwheel_version,temp__5735__auto__){
return (function (state_33534){
var state_val_33535 = (state_33534[(1)]);
if((state_val_33535 === (1))){
var inst_33528 = cljs.core.async.timeout.call(null,(2000));
var state_33534__$1 = state_33534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33534__$1,(2),inst_33528);
} else {
if((state_val_33535 === (2))){
var inst_33530 = (state_33534[(2)]);
var inst_33531 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33532 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33531);
var state_33534__$1 = (function (){var statearr_33536 = state_33534;
(statearr_33536[(7)] = inst_33530);

return statearr_33536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33534__$1,inst_33532);
} else {
return null;
}
}
});})(c__24418__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__24323__auto__,c__24418__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto____0 = (function (){
var statearr_33537 = [null,null,null,null,null,null,null,null];
(statearr_33537[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto__);

(statearr_33537[(1)] = (1));

return statearr_33537;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto____1 = (function (state_33534){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_33534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e33538){if((e33538 instanceof Object)){
var ex__24327__auto__ = e33538;
var statearr_33539_33541 = state_33534;
(statearr_33539_33541[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33542 = state_33534;
state_33534 = G__33542;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto__ = function(state_33534){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto____1.call(this,state_33534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto__,figwheel_version,temp__5735__auto__))
})();
var state__24420__auto__ = (function (){var statearr_33540 = f__24419__auto__.call(null);
(statearr_33540[(6)] = c__24418__auto__);

return statearr_33540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto__,figwheel_version,temp__5735__auto__))
);

return c__24418__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33543){
var map__33544 = p__33543;
var map__33544__$1 = (((((!((map__33544 == null))))?(((((map__33544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33544):map__33544);
var file = cljs.core.get.call(null,map__33544__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33544__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33544__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33546 = "";
var G__33546__$1 = (cljs.core.truth_(file)?[G__33546,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33546);
var G__33546__$2 = (cljs.core.truth_(line)?[G__33546__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33546__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__33546__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33546__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33547){
var map__33548 = p__33547;
var map__33548__$1 = (((((!((map__33548 == null))))?(((((map__33548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33548):map__33548);
var ed = map__33548__$1;
var exception_data = cljs.core.get.call(null,map__33548__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33548__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_33551 = (function (){var G__33550 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33550)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__33550;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_33551);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33552){
var map__33553 = p__33552;
var map__33553__$1 = (((((!((map__33553 == null))))?(((((map__33553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33553):map__33553);
var w = map__33553__$1;
var message = cljs.core.get.call(null,map__33553__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33555 = cljs.core.seq.call(null,plugins);
var chunk__33556 = null;
var count__33557 = (0);
var i__33558 = (0);
while(true){
if((i__33558 < count__33557)){
var vec__33565 = cljs.core._nth.call(null,chunk__33556,i__33558);
var k = cljs.core.nth.call(null,vec__33565,(0),null);
var plugin = cljs.core.nth.call(null,vec__33565,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33571 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33555,chunk__33556,count__33557,i__33558,pl_33571,vec__33565,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33571.call(null,msg_hist);
});})(seq__33555,chunk__33556,count__33557,i__33558,pl_33571,vec__33565,k,plugin))
);
} else {
}


var G__33572 = seq__33555;
var G__33573 = chunk__33556;
var G__33574 = count__33557;
var G__33575 = (i__33558 + (1));
seq__33555 = G__33572;
chunk__33556 = G__33573;
count__33557 = G__33574;
i__33558 = G__33575;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33555);
if(temp__5735__auto__){
var seq__33555__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33555__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33555__$1);
var G__33576 = cljs.core.chunk_rest.call(null,seq__33555__$1);
var G__33577 = c__4550__auto__;
var G__33578 = cljs.core.count.call(null,c__4550__auto__);
var G__33579 = (0);
seq__33555 = G__33576;
chunk__33556 = G__33577;
count__33557 = G__33578;
i__33558 = G__33579;
continue;
} else {
var vec__33568 = cljs.core.first.call(null,seq__33555__$1);
var k = cljs.core.nth.call(null,vec__33568,(0),null);
var plugin = cljs.core.nth.call(null,vec__33568,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33580 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33555,chunk__33556,count__33557,i__33558,pl_33580,vec__33568,k,plugin,seq__33555__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33580.call(null,msg_hist);
});})(seq__33555,chunk__33556,count__33557,i__33558,pl_33580,vec__33568,k,plugin,seq__33555__$1,temp__5735__auto__))
);
} else {
}


var G__33581 = cljs.core.next.call(null,seq__33555__$1);
var G__33582 = null;
var G__33583 = (0);
var G__33584 = (0);
seq__33555 = G__33581;
chunk__33556 = G__33582;
count__33557 = G__33583;
i__33558 = G__33584;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33586 = arguments.length;
switch (G__33586) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33587_33592 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33588_33593 = null;
var count__33589_33594 = (0);
var i__33590_33595 = (0);
while(true){
if((i__33590_33595 < count__33589_33594)){
var msg_33596 = cljs.core._nth.call(null,chunk__33588_33593,i__33590_33595);
figwheel.client.socket.handle_incoming_message.call(null,msg_33596);


var G__33597 = seq__33587_33592;
var G__33598 = chunk__33588_33593;
var G__33599 = count__33589_33594;
var G__33600 = (i__33590_33595 + (1));
seq__33587_33592 = G__33597;
chunk__33588_33593 = G__33598;
count__33589_33594 = G__33599;
i__33590_33595 = G__33600;
continue;
} else {
var temp__5735__auto___33601 = cljs.core.seq.call(null,seq__33587_33592);
if(temp__5735__auto___33601){
var seq__33587_33602__$1 = temp__5735__auto___33601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33587_33602__$1)){
var c__4550__auto___33603 = cljs.core.chunk_first.call(null,seq__33587_33602__$1);
var G__33604 = cljs.core.chunk_rest.call(null,seq__33587_33602__$1);
var G__33605 = c__4550__auto___33603;
var G__33606 = cljs.core.count.call(null,c__4550__auto___33603);
var G__33607 = (0);
seq__33587_33592 = G__33604;
chunk__33588_33593 = G__33605;
count__33589_33594 = G__33606;
i__33590_33595 = G__33607;
continue;
} else {
var msg_33608 = cljs.core.first.call(null,seq__33587_33602__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33608);


var G__33609 = cljs.core.next.call(null,seq__33587_33602__$1);
var G__33610 = null;
var G__33611 = (0);
var G__33612 = (0);
seq__33587_33592 = G__33609;
chunk__33588_33593 = G__33610;
count__33589_33594 = G__33611;
i__33590_33595 = G__33612;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33617 = arguments.length;
var i__4731__auto___33618 = (0);
while(true){
if((i__4731__auto___33618 < len__4730__auto___33617)){
args__4736__auto__.push((arguments[i__4731__auto___33618]));

var G__33619 = (i__4731__auto___33618 + (1));
i__4731__auto___33618 = G__33619;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33614){
var map__33615 = p__33614;
var map__33615__$1 = (((((!((map__33615 == null))))?(((((map__33615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33615):map__33615);
var opts = map__33615__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33613){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33613));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33620){if((e33620 instanceof Error)){
var e = e33620;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33620;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33621){
var map__33622 = p__33621;
var map__33622__$1 = (((((!((map__33622 == null))))?(((((map__33622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33622):map__33622);
var msg_name = cljs.core.get.call(null,map__33622__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1625902159522
