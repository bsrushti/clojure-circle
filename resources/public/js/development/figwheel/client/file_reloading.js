// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29823_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29823_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29824 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29825 = null;
var count__29826 = (0);
var i__29827 = (0);
while(true){
if((i__29827 < count__29826)){
var n = cljs.core._nth.call(null,chunk__29825,i__29827);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29828 = seq__29824;
var G__29829 = chunk__29825;
var G__29830 = count__29826;
var G__29831 = (i__29827 + (1));
seq__29824 = G__29828;
chunk__29825 = G__29829;
count__29826 = G__29830;
i__29827 = G__29831;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29824);
if(temp__5735__auto__){
var seq__29824__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29824__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29824__$1);
var G__29832 = cljs.core.chunk_rest.call(null,seq__29824__$1);
var G__29833 = c__4550__auto__;
var G__29834 = cljs.core.count.call(null,c__4550__auto__);
var G__29835 = (0);
seq__29824 = G__29832;
chunk__29825 = G__29833;
count__29826 = G__29834;
i__29827 = G__29835;
continue;
} else {
var n = cljs.core.first.call(null,seq__29824__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29836 = cljs.core.next.call(null,seq__29824__$1);
var G__29837 = null;
var G__29838 = (0);
var G__29839 = (0);
seq__29824 = G__29836;
chunk__29825 = G__29837;
count__29826 = G__29838;
i__29827 = G__29839;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29840){
var vec__29841 = p__29840;
var _ = cljs.core.nth.call(null,vec__29841,(0),null);
var v = cljs.core.nth.call(null,vec__29841,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__29844){
var vec__29845 = p__29844;
var k = cljs.core.nth.call(null,vec__29845,(0),null);
var v = cljs.core.nth.call(null,vec__29845,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29857_29865 = cljs.core.seq.call(null,deps);
var chunk__29858_29866 = null;
var count__29859_29867 = (0);
var i__29860_29868 = (0);
while(true){
if((i__29860_29868 < count__29859_29867)){
var dep_29869 = cljs.core._nth.call(null,chunk__29858_29866,i__29860_29868);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_29869;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29869));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29869,(depth + (1)),state);
} else {
}


var G__29870 = seq__29857_29865;
var G__29871 = chunk__29858_29866;
var G__29872 = count__29859_29867;
var G__29873 = (i__29860_29868 + (1));
seq__29857_29865 = G__29870;
chunk__29858_29866 = G__29871;
count__29859_29867 = G__29872;
i__29860_29868 = G__29873;
continue;
} else {
var temp__5735__auto___29874 = cljs.core.seq.call(null,seq__29857_29865);
if(temp__5735__auto___29874){
var seq__29857_29875__$1 = temp__5735__auto___29874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29857_29875__$1)){
var c__4550__auto___29876 = cljs.core.chunk_first.call(null,seq__29857_29875__$1);
var G__29877 = cljs.core.chunk_rest.call(null,seq__29857_29875__$1);
var G__29878 = c__4550__auto___29876;
var G__29879 = cljs.core.count.call(null,c__4550__auto___29876);
var G__29880 = (0);
seq__29857_29865 = G__29877;
chunk__29858_29866 = G__29878;
count__29859_29867 = G__29879;
i__29860_29868 = G__29880;
continue;
} else {
var dep_29881 = cljs.core.first.call(null,seq__29857_29875__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_29881;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29881));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29881,(depth + (1)),state);
} else {
}


var G__29882 = cljs.core.next.call(null,seq__29857_29875__$1);
var G__29883 = null;
var G__29884 = (0);
var G__29885 = (0);
seq__29857_29865 = G__29882;
chunk__29858_29866 = G__29883;
count__29859_29867 = G__29884;
i__29860_29868 = G__29885;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29861){
var vec__29862 = p__29861;
var seq__29863 = cljs.core.seq.call(null,vec__29862);
var first__29864 = cljs.core.first.call(null,seq__29863);
var seq__29863__$1 = cljs.core.next.call(null,seq__29863);
var x = first__29864;
var xs = seq__29863__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29862,seq__29863,first__29864,seq__29863__$1,x,xs,get_deps__$1){
return (function (p1__29848_SHARP_){
return clojure.set.difference.call(null,p1__29848_SHARP_,x);
});})(vec__29862,seq__29863,first__29864,seq__29863__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29886 = cljs.core.seq.call(null,provides);
var chunk__29887 = null;
var count__29888 = (0);
var i__29889 = (0);
while(true){
if((i__29889 < count__29888)){
var prov = cljs.core._nth.call(null,chunk__29887,i__29889);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29898_29906 = cljs.core.seq.call(null,requires);
var chunk__29899_29907 = null;
var count__29900_29908 = (0);
var i__29901_29909 = (0);
while(true){
if((i__29901_29909 < count__29900_29908)){
var req_29910 = cljs.core._nth.call(null,chunk__29899_29907,i__29901_29909);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29910,prov);


var G__29911 = seq__29898_29906;
var G__29912 = chunk__29899_29907;
var G__29913 = count__29900_29908;
var G__29914 = (i__29901_29909 + (1));
seq__29898_29906 = G__29911;
chunk__29899_29907 = G__29912;
count__29900_29908 = G__29913;
i__29901_29909 = G__29914;
continue;
} else {
var temp__5735__auto___29915 = cljs.core.seq.call(null,seq__29898_29906);
if(temp__5735__auto___29915){
var seq__29898_29916__$1 = temp__5735__auto___29915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29898_29916__$1)){
var c__4550__auto___29917 = cljs.core.chunk_first.call(null,seq__29898_29916__$1);
var G__29918 = cljs.core.chunk_rest.call(null,seq__29898_29916__$1);
var G__29919 = c__4550__auto___29917;
var G__29920 = cljs.core.count.call(null,c__4550__auto___29917);
var G__29921 = (0);
seq__29898_29906 = G__29918;
chunk__29899_29907 = G__29919;
count__29900_29908 = G__29920;
i__29901_29909 = G__29921;
continue;
} else {
var req_29922 = cljs.core.first.call(null,seq__29898_29916__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29922,prov);


var G__29923 = cljs.core.next.call(null,seq__29898_29916__$1);
var G__29924 = null;
var G__29925 = (0);
var G__29926 = (0);
seq__29898_29906 = G__29923;
chunk__29899_29907 = G__29924;
count__29900_29908 = G__29925;
i__29901_29909 = G__29926;
continue;
}
} else {
}
}
break;
}


var G__29927 = seq__29886;
var G__29928 = chunk__29887;
var G__29929 = count__29888;
var G__29930 = (i__29889 + (1));
seq__29886 = G__29927;
chunk__29887 = G__29928;
count__29888 = G__29929;
i__29889 = G__29930;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29886);
if(temp__5735__auto__){
var seq__29886__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29886__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29886__$1);
var G__29931 = cljs.core.chunk_rest.call(null,seq__29886__$1);
var G__29932 = c__4550__auto__;
var G__29933 = cljs.core.count.call(null,c__4550__auto__);
var G__29934 = (0);
seq__29886 = G__29931;
chunk__29887 = G__29932;
count__29888 = G__29933;
i__29889 = G__29934;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29886__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29902_29935 = cljs.core.seq.call(null,requires);
var chunk__29903_29936 = null;
var count__29904_29937 = (0);
var i__29905_29938 = (0);
while(true){
if((i__29905_29938 < count__29904_29937)){
var req_29939 = cljs.core._nth.call(null,chunk__29903_29936,i__29905_29938);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29939,prov);


var G__29940 = seq__29902_29935;
var G__29941 = chunk__29903_29936;
var G__29942 = count__29904_29937;
var G__29943 = (i__29905_29938 + (1));
seq__29902_29935 = G__29940;
chunk__29903_29936 = G__29941;
count__29904_29937 = G__29942;
i__29905_29938 = G__29943;
continue;
} else {
var temp__5735__auto___29944__$1 = cljs.core.seq.call(null,seq__29902_29935);
if(temp__5735__auto___29944__$1){
var seq__29902_29945__$1 = temp__5735__auto___29944__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29902_29945__$1)){
var c__4550__auto___29946 = cljs.core.chunk_first.call(null,seq__29902_29945__$1);
var G__29947 = cljs.core.chunk_rest.call(null,seq__29902_29945__$1);
var G__29948 = c__4550__auto___29946;
var G__29949 = cljs.core.count.call(null,c__4550__auto___29946);
var G__29950 = (0);
seq__29902_29935 = G__29947;
chunk__29903_29936 = G__29948;
count__29904_29937 = G__29949;
i__29905_29938 = G__29950;
continue;
} else {
var req_29951 = cljs.core.first.call(null,seq__29902_29945__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29951,prov);


var G__29952 = cljs.core.next.call(null,seq__29902_29945__$1);
var G__29953 = null;
var G__29954 = (0);
var G__29955 = (0);
seq__29902_29935 = G__29952;
chunk__29903_29936 = G__29953;
count__29904_29937 = G__29954;
i__29905_29938 = G__29955;
continue;
}
} else {
}
}
break;
}


var G__29956 = cljs.core.next.call(null,seq__29886__$1);
var G__29957 = null;
var G__29958 = (0);
var G__29959 = (0);
seq__29886 = G__29956;
chunk__29887 = G__29957;
count__29888 = G__29958;
i__29889 = G__29959;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29960_29964 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29961_29965 = null;
var count__29962_29966 = (0);
var i__29963_29967 = (0);
while(true){
if((i__29963_29967 < count__29962_29966)){
var ns_29968 = cljs.core._nth.call(null,chunk__29961_29965,i__29963_29967);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29968);


var G__29969 = seq__29960_29964;
var G__29970 = chunk__29961_29965;
var G__29971 = count__29962_29966;
var G__29972 = (i__29963_29967 + (1));
seq__29960_29964 = G__29969;
chunk__29961_29965 = G__29970;
count__29962_29966 = G__29971;
i__29963_29967 = G__29972;
continue;
} else {
var temp__5735__auto___29973 = cljs.core.seq.call(null,seq__29960_29964);
if(temp__5735__auto___29973){
var seq__29960_29974__$1 = temp__5735__auto___29973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29960_29974__$1)){
var c__4550__auto___29975 = cljs.core.chunk_first.call(null,seq__29960_29974__$1);
var G__29976 = cljs.core.chunk_rest.call(null,seq__29960_29974__$1);
var G__29977 = c__4550__auto___29975;
var G__29978 = cljs.core.count.call(null,c__4550__auto___29975);
var G__29979 = (0);
seq__29960_29964 = G__29976;
chunk__29961_29965 = G__29977;
count__29962_29966 = G__29978;
i__29963_29967 = G__29979;
continue;
} else {
var ns_29980 = cljs.core.first.call(null,seq__29960_29974__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29980);


var G__29981 = cljs.core.next.call(null,seq__29960_29974__$1);
var G__29982 = null;
var G__29983 = (0);
var G__29984 = (0);
seq__29960_29964 = G__29981;
chunk__29961_29965 = G__29982;
count__29962_29966 = G__29983;
i__29963_29967 = G__29984;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29985__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29986__i = 0, G__29986__a = new Array(arguments.length -  0);
while (G__29986__i < G__29986__a.length) {G__29986__a[G__29986__i] = arguments[G__29986__i + 0]; ++G__29986__i;}
  args = new cljs.core.IndexedSeq(G__29986__a,0,null);
} 
return G__29985__delegate.call(this,args);};
G__29985.cljs$lang$maxFixedArity = 0;
G__29985.cljs$lang$applyTo = (function (arglist__29987){
var args = cljs.core.seq(arglist__29987);
return G__29985__delegate(args);
});
G__29985.cljs$core$IFn$_invoke$arity$variadic = G__29985__delegate;
return G__29985;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29988_SHARP_,p2__29989_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29988_SHARP_)),p2__29989_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29990_SHARP_,p2__29991_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29990_SHARP_),p2__29991_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29992 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29992.addCallback(((function (G__29992){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29992))
);

G__29992.addErrback(((function (G__29992){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29992))
);

return G__29992;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29993){if((e29993 instanceof Error)){
var e = e29993;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29993;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29994){if((e29994 instanceof Error)){
var e = e29994;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29994;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29995 = cljs.core._EQ_;
var expr__29996 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29995.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29996))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29995.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29996))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29995.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29996))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29995,expr__29996){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29995,expr__29996))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29998,callback){
var map__29999 = p__29998;
var map__29999__$1 = (((((!((map__29999 == null))))?(((((map__29999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29999):map__29999);
var file_msg = map__29999__$1;
var request_url = cljs.core.get.call(null,map__29999__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29999,map__29999__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29999,map__29999__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto__){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto__){
return (function (state_30037){
var state_val_30038 = (state_30037[(1)]);
if((state_val_30038 === (7))){
var inst_30033 = (state_30037[(2)]);
var state_30037__$1 = state_30037;
var statearr_30039_30065 = state_30037__$1;
(statearr_30039_30065[(2)] = inst_30033);

(statearr_30039_30065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (1))){
var state_30037__$1 = state_30037;
var statearr_30040_30066 = state_30037__$1;
(statearr_30040_30066[(2)] = null);

(statearr_30040_30066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (4))){
var inst_30003 = (state_30037[(7)]);
var inst_30003__$1 = (state_30037[(2)]);
var state_30037__$1 = (function (){var statearr_30041 = state_30037;
(statearr_30041[(7)] = inst_30003__$1);

return statearr_30041;
})();
if(cljs.core.truth_(inst_30003__$1)){
var statearr_30042_30067 = state_30037__$1;
(statearr_30042_30067[(1)] = (5));

} else {
var statearr_30043_30068 = state_30037__$1;
(statearr_30043_30068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (15))){
var inst_30018 = (state_30037[(8)]);
var inst_30016 = (state_30037[(9)]);
var inst_30020 = inst_30018.call(null,inst_30016);
var state_30037__$1 = state_30037;
var statearr_30044_30069 = state_30037__$1;
(statearr_30044_30069[(2)] = inst_30020);

(statearr_30044_30069[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (13))){
var inst_30027 = (state_30037[(2)]);
var state_30037__$1 = state_30037;
var statearr_30045_30070 = state_30037__$1;
(statearr_30045_30070[(2)] = inst_30027);

(statearr_30045_30070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (6))){
var state_30037__$1 = state_30037;
var statearr_30046_30071 = state_30037__$1;
(statearr_30046_30071[(2)] = null);

(statearr_30046_30071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (17))){
var inst_30024 = (state_30037[(2)]);
var state_30037__$1 = state_30037;
var statearr_30047_30072 = state_30037__$1;
(statearr_30047_30072[(2)] = inst_30024);

(statearr_30047_30072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (3))){
var inst_30035 = (state_30037[(2)]);
var state_30037__$1 = state_30037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30037__$1,inst_30035);
} else {
if((state_val_30038 === (12))){
var state_30037__$1 = state_30037;
var statearr_30048_30073 = state_30037__$1;
(statearr_30048_30073[(2)] = null);

(statearr_30048_30073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (2))){
var state_30037__$1 = state_30037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30037__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30038 === (11))){
var inst_30008 = (state_30037[(10)]);
var inst_30014 = figwheel.client.file_reloading.blocking_load.call(null,inst_30008);
var state_30037__$1 = state_30037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30037__$1,(14),inst_30014);
} else {
if((state_val_30038 === (9))){
var inst_30008 = (state_30037[(10)]);
var state_30037__$1 = state_30037;
if(cljs.core.truth_(inst_30008)){
var statearr_30049_30074 = state_30037__$1;
(statearr_30049_30074[(1)] = (11));

} else {
var statearr_30050_30075 = state_30037__$1;
(statearr_30050_30075[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (5))){
var inst_30003 = (state_30037[(7)]);
var inst_30009 = (state_30037[(11)]);
var inst_30008 = cljs.core.nth.call(null,inst_30003,(0),null);
var inst_30009__$1 = cljs.core.nth.call(null,inst_30003,(1),null);
var state_30037__$1 = (function (){var statearr_30051 = state_30037;
(statearr_30051[(10)] = inst_30008);

(statearr_30051[(11)] = inst_30009__$1);

return statearr_30051;
})();
if(cljs.core.truth_(inst_30009__$1)){
var statearr_30052_30076 = state_30037__$1;
(statearr_30052_30076[(1)] = (8));

} else {
var statearr_30053_30077 = state_30037__$1;
(statearr_30053_30077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (14))){
var inst_30018 = (state_30037[(8)]);
var inst_30008 = (state_30037[(10)]);
var inst_30016 = (state_30037[(2)]);
var inst_30017 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30018__$1 = cljs.core.get.call(null,inst_30017,inst_30008);
var state_30037__$1 = (function (){var statearr_30054 = state_30037;
(statearr_30054[(8)] = inst_30018__$1);

(statearr_30054[(9)] = inst_30016);

return statearr_30054;
})();
if(cljs.core.truth_(inst_30018__$1)){
var statearr_30055_30078 = state_30037__$1;
(statearr_30055_30078[(1)] = (15));

} else {
var statearr_30056_30079 = state_30037__$1;
(statearr_30056_30079[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (16))){
var inst_30016 = (state_30037[(9)]);
var inst_30022 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30016);
var state_30037__$1 = state_30037;
var statearr_30057_30080 = state_30037__$1;
(statearr_30057_30080[(2)] = inst_30022);

(statearr_30057_30080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (10))){
var inst_30029 = (state_30037[(2)]);
var state_30037__$1 = (function (){var statearr_30058 = state_30037;
(statearr_30058[(12)] = inst_30029);

return statearr_30058;
})();
var statearr_30059_30081 = state_30037__$1;
(statearr_30059_30081[(2)] = null);

(statearr_30059_30081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30038 === (8))){
var inst_30009 = (state_30037[(11)]);
var inst_30011 = eval(inst_30009);
var state_30037__$1 = state_30037;
var statearr_30060_30082 = state_30037__$1;
(statearr_30060_30082[(2)] = inst_30011);

(statearr_30060_30082[(1)] = (10));


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
});})(c__24418__auto__))
;
return ((function (switch__24323__auto__,c__24418__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24324__auto__ = null;
var figwheel$client$file_reloading$state_machine__24324__auto____0 = (function (){
var statearr_30061 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30061[(0)] = figwheel$client$file_reloading$state_machine__24324__auto__);

(statearr_30061[(1)] = (1));

return statearr_30061;
});
var figwheel$client$file_reloading$state_machine__24324__auto____1 = (function (state_30037){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_30037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e30062){if((e30062 instanceof Object)){
var ex__24327__auto__ = e30062;
var statearr_30063_30083 = state_30037;
(statearr_30063_30083[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30084 = state_30037;
state_30037 = G__30084;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24324__auto__ = function(state_30037){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24324__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24324__auto____1.call(this,state_30037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24324__auto____0;
figwheel$client$file_reloading$state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24324__auto____1;
return figwheel$client$file_reloading$state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto__))
})();
var state__24420__auto__ = (function (){var statearr_30064 = f__24419__auto__.call(null);
(statearr_30064[(6)] = c__24418__auto__);

return statearr_30064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto__))
);

return c__24418__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30086 = arguments.length;
switch (G__30086) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30088,callback){
var map__30089 = p__30088;
var map__30089__$1 = (((((!((map__30089 == null))))?(((((map__30089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30089):map__30089);
var file_msg = map__30089__$1;
var namespace = cljs.core.get.call(null,map__30089__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30089,map__30089__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30089,map__30089__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30091){
var map__30092 = p__30091;
var map__30092__$1 = (((((!((map__30092 == null))))?(((((map__30092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30092):map__30092);
var file_msg = map__30092__$1;
var namespace = cljs.core.get.call(null,map__30092__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30094){
var map__30095 = p__30094;
var map__30095__$1 = (((((!((map__30095 == null))))?(((((map__30095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30095):map__30095);
var file_msg = map__30095__$1;
var namespace = cljs.core.get.call(null,map__30095__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30097,callback){
var map__30098 = p__30097;
var map__30098__$1 = (((((!((map__30098 == null))))?(((((map__30098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30098):map__30098);
var file_msg = map__30098__$1;
var request_url = cljs.core.get.call(null,map__30098__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30098__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24418__auto___30148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto___30148,out){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto___30148,out){
return (function (state_30133){
var state_val_30134 = (state_30133[(1)]);
if((state_val_30134 === (1))){
var inst_30107 = cljs.core.seq.call(null,files);
var inst_30108 = cljs.core.first.call(null,inst_30107);
var inst_30109 = cljs.core.next.call(null,inst_30107);
var inst_30110 = files;
var state_30133__$1 = (function (){var statearr_30135 = state_30133;
(statearr_30135[(7)] = inst_30110);

(statearr_30135[(8)] = inst_30108);

(statearr_30135[(9)] = inst_30109);

return statearr_30135;
})();
var statearr_30136_30149 = state_30133__$1;
(statearr_30136_30149[(2)] = null);

(statearr_30136_30149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (2))){
var inst_30110 = (state_30133[(7)]);
var inst_30116 = (state_30133[(10)]);
var inst_30115 = cljs.core.seq.call(null,inst_30110);
var inst_30116__$1 = cljs.core.first.call(null,inst_30115);
var inst_30117 = cljs.core.next.call(null,inst_30115);
var inst_30118 = (inst_30116__$1 == null);
var inst_30119 = cljs.core.not.call(null,inst_30118);
var state_30133__$1 = (function (){var statearr_30137 = state_30133;
(statearr_30137[(11)] = inst_30117);

(statearr_30137[(10)] = inst_30116__$1);

return statearr_30137;
})();
if(inst_30119){
var statearr_30138_30150 = state_30133__$1;
(statearr_30138_30150[(1)] = (4));

} else {
var statearr_30139_30151 = state_30133__$1;
(statearr_30139_30151[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (3))){
var inst_30131 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30133__$1,inst_30131);
} else {
if((state_val_30134 === (4))){
var inst_30116 = (state_30133[(10)]);
var inst_30121 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30116);
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30133__$1,(7),inst_30121);
} else {
if((state_val_30134 === (5))){
var inst_30127 = cljs.core.async.close_BANG_.call(null,out);
var state_30133__$1 = state_30133;
var statearr_30140_30152 = state_30133__$1;
(statearr_30140_30152[(2)] = inst_30127);

(statearr_30140_30152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (6))){
var inst_30129 = (state_30133[(2)]);
var state_30133__$1 = state_30133;
var statearr_30141_30153 = state_30133__$1;
(statearr_30141_30153[(2)] = inst_30129);

(statearr_30141_30153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30134 === (7))){
var inst_30117 = (state_30133[(11)]);
var inst_30123 = (state_30133[(2)]);
var inst_30124 = cljs.core.async.put_BANG_.call(null,out,inst_30123);
var inst_30110 = inst_30117;
var state_30133__$1 = (function (){var statearr_30142 = state_30133;
(statearr_30142[(7)] = inst_30110);

(statearr_30142[(12)] = inst_30124);

return statearr_30142;
})();
var statearr_30143_30154 = state_30133__$1;
(statearr_30143_30154[(2)] = null);

(statearr_30143_30154[(1)] = (2));


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
});})(c__24418__auto___30148,out))
;
return ((function (switch__24323__auto__,c__24418__auto___30148,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto____0 = (function (){
var statearr_30144 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30144[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto__);

(statearr_30144[(1)] = (1));

return statearr_30144;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto____1 = (function (state_30133){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_30133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e30145){if((e30145 instanceof Object)){
var ex__24327__auto__ = e30145;
var statearr_30146_30155 = state_30133;
(statearr_30146_30155[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30156 = state_30133;
state_30133 = G__30156;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto__ = function(state_30133){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto____1.call(this,state_30133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto___30148,out))
})();
var state__24420__auto__ = (function (){var statearr_30147 = f__24419__auto__.call(null);
(statearr_30147[(6)] = c__24418__auto___30148);

return statearr_30147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto___30148,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30157,opts){
var map__30158 = p__30157;
var map__30158__$1 = (((((!((map__30158 == null))))?(((((map__30158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30158):map__30158);
var eval_body = cljs.core.get.call(null,map__30158__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30158__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30160){var e = e30160;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30161_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30161_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30162){
var vec__30163 = p__30162;
var k = cljs.core.nth.call(null,vec__30163,(0),null);
var v = cljs.core.nth.call(null,vec__30163,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30166){
var vec__30167 = p__30166;
var k = cljs.core.nth.call(null,vec__30167,(0),null);
var v = cljs.core.nth.call(null,vec__30167,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30173,p__30174){
var map__30175 = p__30173;
var map__30175__$1 = (((((!((map__30175 == null))))?(((((map__30175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30175):map__30175);
var opts = map__30175__$1;
var before_jsload = cljs.core.get.call(null,map__30175__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30175__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30175__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30176 = p__30174;
var map__30176__$1 = (((((!((map__30176 == null))))?(((((map__30176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30176):map__30176);
var msg = map__30176__$1;
var files = cljs.core.get.call(null,map__30176__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30176__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30176__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24419__auto__ = (function (){var switch__24323__auto__ = ((function (c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30330){
var state_val_30331 = (state_30330[(1)]);
if((state_val_30331 === (7))){
var inst_30193 = (state_30330[(7)]);
var inst_30192 = (state_30330[(8)]);
var inst_30191 = (state_30330[(9)]);
var inst_30190 = (state_30330[(10)]);
var inst_30198 = cljs.core._nth.call(null,inst_30191,inst_30193);
var inst_30199 = figwheel.client.file_reloading.eval_body.call(null,inst_30198,opts);
var inst_30200 = (inst_30193 + (1));
var tmp30332 = inst_30192;
var tmp30333 = inst_30191;
var tmp30334 = inst_30190;
var inst_30190__$1 = tmp30334;
var inst_30191__$1 = tmp30333;
var inst_30192__$1 = tmp30332;
var inst_30193__$1 = inst_30200;
var state_30330__$1 = (function (){var statearr_30335 = state_30330;
(statearr_30335[(7)] = inst_30193__$1);

(statearr_30335[(8)] = inst_30192__$1);

(statearr_30335[(9)] = inst_30191__$1);

(statearr_30335[(10)] = inst_30190__$1);

(statearr_30335[(11)] = inst_30199);

return statearr_30335;
})();
var statearr_30336_30419 = state_30330__$1;
(statearr_30336_30419[(2)] = null);

(statearr_30336_30419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (20))){
var inst_30233 = (state_30330[(12)]);
var inst_30241 = figwheel.client.file_reloading.sort_files.call(null,inst_30233);
var state_30330__$1 = state_30330;
var statearr_30337_30420 = state_30330__$1;
(statearr_30337_30420[(2)] = inst_30241);

(statearr_30337_30420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (27))){
var state_30330__$1 = state_30330;
var statearr_30338_30421 = state_30330__$1;
(statearr_30338_30421[(2)] = null);

(statearr_30338_30421[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (1))){
var inst_30182 = (state_30330[(13)]);
var inst_30179 = before_jsload.call(null,files);
var inst_30180 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30181 = (function (){return ((function (inst_30182,inst_30179,inst_30180,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30170_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30170_SHARP_);
});
;})(inst_30182,inst_30179,inst_30180,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30182__$1 = cljs.core.filter.call(null,inst_30181,files);
var inst_30183 = cljs.core.not_empty.call(null,inst_30182__$1);
var state_30330__$1 = (function (){var statearr_30339 = state_30330;
(statearr_30339[(14)] = inst_30180);

(statearr_30339[(13)] = inst_30182__$1);

(statearr_30339[(15)] = inst_30179);

return statearr_30339;
})();
if(cljs.core.truth_(inst_30183)){
var statearr_30340_30422 = state_30330__$1;
(statearr_30340_30422[(1)] = (2));

} else {
var statearr_30341_30423 = state_30330__$1;
(statearr_30341_30423[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (24))){
var state_30330__$1 = state_30330;
var statearr_30342_30424 = state_30330__$1;
(statearr_30342_30424[(2)] = null);

(statearr_30342_30424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (39))){
var inst_30283 = (state_30330[(16)]);
var state_30330__$1 = state_30330;
var statearr_30343_30425 = state_30330__$1;
(statearr_30343_30425[(2)] = inst_30283);

(statearr_30343_30425[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (46))){
var inst_30325 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30344_30426 = state_30330__$1;
(statearr_30344_30426[(2)] = inst_30325);

(statearr_30344_30426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (4))){
var inst_30227 = (state_30330[(2)]);
var inst_30228 = cljs.core.List.EMPTY;
var inst_30229 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30228);
var inst_30230 = (function (){return ((function (inst_30227,inst_30228,inst_30229,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30171_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30171_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30171_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30171_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_30227,inst_30228,inst_30229,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30231 = cljs.core.filter.call(null,inst_30230,files);
var inst_30232 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30233 = cljs.core.concat.call(null,inst_30231,inst_30232);
var state_30330__$1 = (function (){var statearr_30345 = state_30330;
(statearr_30345[(17)] = inst_30227);

(statearr_30345[(18)] = inst_30229);

(statearr_30345[(12)] = inst_30233);

return statearr_30345;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30346_30427 = state_30330__$1;
(statearr_30346_30427[(1)] = (16));

} else {
var statearr_30347_30428 = state_30330__$1;
(statearr_30347_30428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (15))){
var inst_30217 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30348_30429 = state_30330__$1;
(statearr_30348_30429[(2)] = inst_30217);

(statearr_30348_30429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (21))){
var inst_30243 = (state_30330[(19)]);
var inst_30243__$1 = (state_30330[(2)]);
var inst_30244 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30243__$1);
var state_30330__$1 = (function (){var statearr_30349 = state_30330;
(statearr_30349[(19)] = inst_30243__$1);

return statearr_30349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30330__$1,(22),inst_30244);
} else {
if((state_val_30331 === (31))){
var inst_30328 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30330__$1,inst_30328);
} else {
if((state_val_30331 === (32))){
var inst_30283 = (state_30330[(16)]);
var inst_30288 = inst_30283.cljs$lang$protocol_mask$partition0$;
var inst_30289 = (inst_30288 & (64));
var inst_30290 = inst_30283.cljs$core$ISeq$;
var inst_30291 = (cljs.core.PROTOCOL_SENTINEL === inst_30290);
var inst_30292 = ((inst_30289) || (inst_30291));
var state_30330__$1 = state_30330;
if(cljs.core.truth_(inst_30292)){
var statearr_30350_30430 = state_30330__$1;
(statearr_30350_30430[(1)] = (35));

} else {
var statearr_30351_30431 = state_30330__$1;
(statearr_30351_30431[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (40))){
var inst_30305 = (state_30330[(20)]);
var inst_30304 = (state_30330[(2)]);
var inst_30305__$1 = cljs.core.get.call(null,inst_30304,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30306 = cljs.core.get.call(null,inst_30304,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30307 = cljs.core.not_empty.call(null,inst_30305__$1);
var state_30330__$1 = (function (){var statearr_30352 = state_30330;
(statearr_30352[(21)] = inst_30306);

(statearr_30352[(20)] = inst_30305__$1);

return statearr_30352;
})();
if(cljs.core.truth_(inst_30307)){
var statearr_30353_30432 = state_30330__$1;
(statearr_30353_30432[(1)] = (41));

} else {
var statearr_30354_30433 = state_30330__$1;
(statearr_30354_30433[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (33))){
var state_30330__$1 = state_30330;
var statearr_30355_30434 = state_30330__$1;
(statearr_30355_30434[(2)] = false);

(statearr_30355_30434[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (13))){
var inst_30203 = (state_30330[(22)]);
var inst_30207 = cljs.core.chunk_first.call(null,inst_30203);
var inst_30208 = cljs.core.chunk_rest.call(null,inst_30203);
var inst_30209 = cljs.core.count.call(null,inst_30207);
var inst_30190 = inst_30208;
var inst_30191 = inst_30207;
var inst_30192 = inst_30209;
var inst_30193 = (0);
var state_30330__$1 = (function (){var statearr_30356 = state_30330;
(statearr_30356[(7)] = inst_30193);

(statearr_30356[(8)] = inst_30192);

(statearr_30356[(9)] = inst_30191);

(statearr_30356[(10)] = inst_30190);

return statearr_30356;
})();
var statearr_30357_30435 = state_30330__$1;
(statearr_30357_30435[(2)] = null);

(statearr_30357_30435[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (22))){
var inst_30243 = (state_30330[(19)]);
var inst_30251 = (state_30330[(23)]);
var inst_30247 = (state_30330[(24)]);
var inst_30246 = (state_30330[(25)]);
var inst_30246__$1 = (state_30330[(2)]);
var inst_30247__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30246__$1);
var inst_30248 = (function (){var all_files = inst_30243;
var res_SINGLEQUOTE_ = inst_30246__$1;
var res = inst_30247__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30243,inst_30251,inst_30247,inst_30246,inst_30246__$1,inst_30247__$1,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30172_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30172_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30243,inst_30251,inst_30247,inst_30246,inst_30246__$1,inst_30247__$1,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30249 = cljs.core.filter.call(null,inst_30248,inst_30246__$1);
var inst_30250 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30251__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30250);
var inst_30252 = cljs.core.not_empty.call(null,inst_30251__$1);
var state_30330__$1 = (function (){var statearr_30358 = state_30330;
(statearr_30358[(26)] = inst_30249);

(statearr_30358[(23)] = inst_30251__$1);

(statearr_30358[(24)] = inst_30247__$1);

(statearr_30358[(25)] = inst_30246__$1);

return statearr_30358;
})();
if(cljs.core.truth_(inst_30252)){
var statearr_30359_30436 = state_30330__$1;
(statearr_30359_30436[(1)] = (23));

} else {
var statearr_30360_30437 = state_30330__$1;
(statearr_30360_30437[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (36))){
var state_30330__$1 = state_30330;
var statearr_30361_30438 = state_30330__$1;
(statearr_30361_30438[(2)] = false);

(statearr_30361_30438[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (41))){
var inst_30305 = (state_30330[(20)]);
var inst_30309 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30310 = cljs.core.map.call(null,inst_30309,inst_30305);
var inst_30311 = cljs.core.pr_str.call(null,inst_30310);
var inst_30312 = ["figwheel-no-load meta-data: ",inst_30311].join('');
var inst_30313 = figwheel.client.utils.log.call(null,inst_30312);
var state_30330__$1 = state_30330;
var statearr_30362_30439 = state_30330__$1;
(statearr_30362_30439[(2)] = inst_30313);

(statearr_30362_30439[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (43))){
var inst_30306 = (state_30330[(21)]);
var inst_30316 = (state_30330[(2)]);
var inst_30317 = cljs.core.not_empty.call(null,inst_30306);
var state_30330__$1 = (function (){var statearr_30363 = state_30330;
(statearr_30363[(27)] = inst_30316);

return statearr_30363;
})();
if(cljs.core.truth_(inst_30317)){
var statearr_30364_30440 = state_30330__$1;
(statearr_30364_30440[(1)] = (44));

} else {
var statearr_30365_30441 = state_30330__$1;
(statearr_30365_30441[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (29))){
var inst_30243 = (state_30330[(19)]);
var inst_30249 = (state_30330[(26)]);
var inst_30251 = (state_30330[(23)]);
var inst_30247 = (state_30330[(24)]);
var inst_30246 = (state_30330[(25)]);
var inst_30283 = (state_30330[(16)]);
var inst_30279 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30282 = (function (){var all_files = inst_30243;
var res_SINGLEQUOTE_ = inst_30246;
var res = inst_30247;
var files_not_loaded = inst_30249;
var dependencies_that_loaded = inst_30251;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30243,inst_30249,inst_30251,inst_30247,inst_30246,inst_30283,inst_30279,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30281){
var map__30366 = p__30281;
var map__30366__$1 = (((((!((map__30366 == null))))?(((((map__30366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30366):map__30366);
var namespace = cljs.core.get.call(null,map__30366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30243,inst_30249,inst_30251,inst_30247,inst_30246,inst_30283,inst_30279,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30283__$1 = cljs.core.group_by.call(null,inst_30282,inst_30249);
var inst_30285 = (inst_30283__$1 == null);
var inst_30286 = cljs.core.not.call(null,inst_30285);
var state_30330__$1 = (function (){var statearr_30368 = state_30330;
(statearr_30368[(28)] = inst_30279);

(statearr_30368[(16)] = inst_30283__$1);

return statearr_30368;
})();
if(inst_30286){
var statearr_30369_30442 = state_30330__$1;
(statearr_30369_30442[(1)] = (32));

} else {
var statearr_30370_30443 = state_30330__$1;
(statearr_30370_30443[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (44))){
var inst_30306 = (state_30330[(21)]);
var inst_30319 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30306);
var inst_30320 = cljs.core.pr_str.call(null,inst_30319);
var inst_30321 = ["not required: ",inst_30320].join('');
var inst_30322 = figwheel.client.utils.log.call(null,inst_30321);
var state_30330__$1 = state_30330;
var statearr_30371_30444 = state_30330__$1;
(statearr_30371_30444[(2)] = inst_30322);

(statearr_30371_30444[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (6))){
var inst_30224 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30372_30445 = state_30330__$1;
(statearr_30372_30445[(2)] = inst_30224);

(statearr_30372_30445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (28))){
var inst_30249 = (state_30330[(26)]);
var inst_30276 = (state_30330[(2)]);
var inst_30277 = cljs.core.not_empty.call(null,inst_30249);
var state_30330__$1 = (function (){var statearr_30373 = state_30330;
(statearr_30373[(29)] = inst_30276);

return statearr_30373;
})();
if(cljs.core.truth_(inst_30277)){
var statearr_30374_30446 = state_30330__$1;
(statearr_30374_30446[(1)] = (29));

} else {
var statearr_30375_30447 = state_30330__$1;
(statearr_30375_30447[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (25))){
var inst_30247 = (state_30330[(24)]);
var inst_30263 = (state_30330[(2)]);
var inst_30264 = cljs.core.not_empty.call(null,inst_30247);
var state_30330__$1 = (function (){var statearr_30376 = state_30330;
(statearr_30376[(30)] = inst_30263);

return statearr_30376;
})();
if(cljs.core.truth_(inst_30264)){
var statearr_30377_30448 = state_30330__$1;
(statearr_30377_30448[(1)] = (26));

} else {
var statearr_30378_30449 = state_30330__$1;
(statearr_30378_30449[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (34))){
var inst_30299 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
if(cljs.core.truth_(inst_30299)){
var statearr_30379_30450 = state_30330__$1;
(statearr_30379_30450[(1)] = (38));

} else {
var statearr_30380_30451 = state_30330__$1;
(statearr_30380_30451[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (17))){
var state_30330__$1 = state_30330;
var statearr_30381_30452 = state_30330__$1;
(statearr_30381_30452[(2)] = recompile_dependents);

(statearr_30381_30452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (3))){
var state_30330__$1 = state_30330;
var statearr_30382_30453 = state_30330__$1;
(statearr_30382_30453[(2)] = null);

(statearr_30382_30453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (12))){
var inst_30220 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30383_30454 = state_30330__$1;
(statearr_30383_30454[(2)] = inst_30220);

(statearr_30383_30454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (2))){
var inst_30182 = (state_30330[(13)]);
var inst_30189 = cljs.core.seq.call(null,inst_30182);
var inst_30190 = inst_30189;
var inst_30191 = null;
var inst_30192 = (0);
var inst_30193 = (0);
var state_30330__$1 = (function (){var statearr_30384 = state_30330;
(statearr_30384[(7)] = inst_30193);

(statearr_30384[(8)] = inst_30192);

(statearr_30384[(9)] = inst_30191);

(statearr_30384[(10)] = inst_30190);

return statearr_30384;
})();
var statearr_30385_30455 = state_30330__$1;
(statearr_30385_30455[(2)] = null);

(statearr_30385_30455[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (23))){
var inst_30243 = (state_30330[(19)]);
var inst_30249 = (state_30330[(26)]);
var inst_30251 = (state_30330[(23)]);
var inst_30247 = (state_30330[(24)]);
var inst_30246 = (state_30330[(25)]);
var inst_30254 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30256 = (function (){var all_files = inst_30243;
var res_SINGLEQUOTE_ = inst_30246;
var res = inst_30247;
var files_not_loaded = inst_30249;
var dependencies_that_loaded = inst_30251;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30243,inst_30249,inst_30251,inst_30247,inst_30246,inst_30254,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30255){
var map__30386 = p__30255;
var map__30386__$1 = (((((!((map__30386 == null))))?(((((map__30386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30386):map__30386);
var request_url = cljs.core.get.call(null,map__30386__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30243,inst_30249,inst_30251,inst_30247,inst_30246,inst_30254,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30257 = cljs.core.reverse.call(null,inst_30251);
var inst_30258 = cljs.core.map.call(null,inst_30256,inst_30257);
var inst_30259 = cljs.core.pr_str.call(null,inst_30258);
var inst_30260 = figwheel.client.utils.log.call(null,inst_30259);
var state_30330__$1 = (function (){var statearr_30388 = state_30330;
(statearr_30388[(31)] = inst_30254);

return statearr_30388;
})();
var statearr_30389_30456 = state_30330__$1;
(statearr_30389_30456[(2)] = inst_30260);

(statearr_30389_30456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (35))){
var state_30330__$1 = state_30330;
var statearr_30390_30457 = state_30330__$1;
(statearr_30390_30457[(2)] = true);

(statearr_30390_30457[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (19))){
var inst_30233 = (state_30330[(12)]);
var inst_30239 = figwheel.client.file_reloading.expand_files.call(null,inst_30233);
var state_30330__$1 = state_30330;
var statearr_30391_30458 = state_30330__$1;
(statearr_30391_30458[(2)] = inst_30239);

(statearr_30391_30458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (11))){
var state_30330__$1 = state_30330;
var statearr_30392_30459 = state_30330__$1;
(statearr_30392_30459[(2)] = null);

(statearr_30392_30459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (9))){
var inst_30222 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30393_30460 = state_30330__$1;
(statearr_30393_30460[(2)] = inst_30222);

(statearr_30393_30460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (5))){
var inst_30193 = (state_30330[(7)]);
var inst_30192 = (state_30330[(8)]);
var inst_30195 = (inst_30193 < inst_30192);
var inst_30196 = inst_30195;
var state_30330__$1 = state_30330;
if(cljs.core.truth_(inst_30196)){
var statearr_30394_30461 = state_30330__$1;
(statearr_30394_30461[(1)] = (7));

} else {
var statearr_30395_30462 = state_30330__$1;
(statearr_30395_30462[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (14))){
var inst_30203 = (state_30330[(22)]);
var inst_30212 = cljs.core.first.call(null,inst_30203);
var inst_30213 = figwheel.client.file_reloading.eval_body.call(null,inst_30212,opts);
var inst_30214 = cljs.core.next.call(null,inst_30203);
var inst_30190 = inst_30214;
var inst_30191 = null;
var inst_30192 = (0);
var inst_30193 = (0);
var state_30330__$1 = (function (){var statearr_30396 = state_30330;
(statearr_30396[(7)] = inst_30193);

(statearr_30396[(8)] = inst_30192);

(statearr_30396[(9)] = inst_30191);

(statearr_30396[(10)] = inst_30190);

(statearr_30396[(32)] = inst_30213);

return statearr_30396;
})();
var statearr_30397_30463 = state_30330__$1;
(statearr_30397_30463[(2)] = null);

(statearr_30397_30463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (45))){
var state_30330__$1 = state_30330;
var statearr_30398_30464 = state_30330__$1;
(statearr_30398_30464[(2)] = null);

(statearr_30398_30464[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (26))){
var inst_30243 = (state_30330[(19)]);
var inst_30249 = (state_30330[(26)]);
var inst_30251 = (state_30330[(23)]);
var inst_30247 = (state_30330[(24)]);
var inst_30246 = (state_30330[(25)]);
var inst_30266 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30268 = (function (){var all_files = inst_30243;
var res_SINGLEQUOTE_ = inst_30246;
var res = inst_30247;
var files_not_loaded = inst_30249;
var dependencies_that_loaded = inst_30251;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30243,inst_30249,inst_30251,inst_30247,inst_30246,inst_30266,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30267){
var map__30399 = p__30267;
var map__30399__$1 = (((((!((map__30399 == null))))?(((((map__30399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30399):map__30399);
var namespace = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30243,inst_30249,inst_30251,inst_30247,inst_30246,inst_30266,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30269 = cljs.core.map.call(null,inst_30268,inst_30247);
var inst_30270 = cljs.core.pr_str.call(null,inst_30269);
var inst_30271 = figwheel.client.utils.log.call(null,inst_30270);
var inst_30272 = (function (){var all_files = inst_30243;
var res_SINGLEQUOTE_ = inst_30246;
var res = inst_30247;
var files_not_loaded = inst_30249;
var dependencies_that_loaded = inst_30251;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30243,inst_30249,inst_30251,inst_30247,inst_30246,inst_30266,inst_30268,inst_30269,inst_30270,inst_30271,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30243,inst_30249,inst_30251,inst_30247,inst_30246,inst_30266,inst_30268,inst_30269,inst_30270,inst_30271,state_val_30331,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30273 = setTimeout(inst_30272,(10));
var state_30330__$1 = (function (){var statearr_30401 = state_30330;
(statearr_30401[(33)] = inst_30266);

(statearr_30401[(34)] = inst_30271);

return statearr_30401;
})();
var statearr_30402_30465 = state_30330__$1;
(statearr_30402_30465[(2)] = inst_30273);

(statearr_30402_30465[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (16))){
var state_30330__$1 = state_30330;
var statearr_30403_30466 = state_30330__$1;
(statearr_30403_30466[(2)] = reload_dependents);

(statearr_30403_30466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (38))){
var inst_30283 = (state_30330[(16)]);
var inst_30301 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30283);
var state_30330__$1 = state_30330;
var statearr_30404_30467 = state_30330__$1;
(statearr_30404_30467[(2)] = inst_30301);

(statearr_30404_30467[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (30))){
var state_30330__$1 = state_30330;
var statearr_30405_30468 = state_30330__$1;
(statearr_30405_30468[(2)] = null);

(statearr_30405_30468[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (10))){
var inst_30203 = (state_30330[(22)]);
var inst_30205 = cljs.core.chunked_seq_QMARK_.call(null,inst_30203);
var state_30330__$1 = state_30330;
if(inst_30205){
var statearr_30406_30469 = state_30330__$1;
(statearr_30406_30469[(1)] = (13));

} else {
var statearr_30407_30470 = state_30330__$1;
(statearr_30407_30470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (18))){
var inst_30237 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
if(cljs.core.truth_(inst_30237)){
var statearr_30408_30471 = state_30330__$1;
(statearr_30408_30471[(1)] = (19));

} else {
var statearr_30409_30472 = state_30330__$1;
(statearr_30409_30472[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (42))){
var state_30330__$1 = state_30330;
var statearr_30410_30473 = state_30330__$1;
(statearr_30410_30473[(2)] = null);

(statearr_30410_30473[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (37))){
var inst_30296 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30411_30474 = state_30330__$1;
(statearr_30411_30474[(2)] = inst_30296);

(statearr_30411_30474[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (8))){
var inst_30190 = (state_30330[(10)]);
var inst_30203 = (state_30330[(22)]);
var inst_30203__$1 = cljs.core.seq.call(null,inst_30190);
var state_30330__$1 = (function (){var statearr_30412 = state_30330;
(statearr_30412[(22)] = inst_30203__$1);

return statearr_30412;
})();
if(inst_30203__$1){
var statearr_30413_30475 = state_30330__$1;
(statearr_30413_30475[(1)] = (10));

} else {
var statearr_30414_30476 = state_30330__$1;
(statearr_30414_30476[(1)] = (11));

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
}
});})(c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24323__auto__,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto____0 = (function (){
var statearr_30415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30415[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto__);

(statearr_30415[(1)] = (1));

return statearr_30415;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto____1 = (function (state_30330){
while(true){
var ret_value__24325__auto__ = (function (){try{while(true){
var result__24326__auto__ = switch__24323__auto__.call(null,state_30330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24326__auto__;
}
break;
}
}catch (e30416){if((e30416 instanceof Object)){
var ex__24327__auto__ = e30416;
var statearr_30417_30477 = state_30330;
(statearr_30417_30477[(5)] = ex__24327__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30478 = state_30330;
state_30330 = G__30478;
continue;
} else {
return ret_value__24325__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto__ = function(state_30330){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto____1.call(this,state_30330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24324__auto__;
})()
;})(switch__24323__auto__,c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24420__auto__ = (function (){var statearr_30418 = f__24419__auto__.call(null);
(statearr_30418[(6)] = c__24418__auto__);

return statearr_30418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24420__auto__);
});})(c__24418__auto__,map__30175,map__30175__$1,opts,before_jsload,on_jsload,reload_dependents,map__30176,map__30176__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24418__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30481,link){
var map__30482 = p__30481;
var map__30482__$1 = (((((!((map__30482 == null))))?(((((map__30482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30482):map__30482);
var file = cljs.core.get.call(null,map__30482__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__30482,map__30482__$1,file){
return (function (p1__30479_SHARP_,p2__30480_SHARP_){
if(cljs.core._EQ_.call(null,p1__30479_SHARP_,p2__30480_SHARP_)){
return p1__30479_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__30482,map__30482__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30485){
var map__30486 = p__30485;
var map__30486__$1 = (((((!((map__30486 == null))))?(((((map__30486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30486):map__30486);
var match_length = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30484_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30484_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30488_SHARP_,p2__30489_SHARP_){
return cljs.core.assoc.call(null,p1__30488_SHARP_,cljs.core.get.call(null,p2__30489_SHARP_,key),p2__30489_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30490 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30490);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30490);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30491,p__30492){
var map__30493 = p__30491;
var map__30493__$1 = (((((!((map__30493 == null))))?(((((map__30493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30493):map__30493);
var on_cssload = cljs.core.get.call(null,map__30493__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30494 = p__30492;
var map__30494__$1 = (((((!((map__30494 == null))))?(((((map__30494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30494):map__30494);
var files_msg = map__30494__$1;
var files = cljs.core.get.call(null,map__30494__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1625902156917
