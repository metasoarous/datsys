// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx_local_rt.impl');
goog.require('cljs.core');
goog.require('com.stuartsierra.dependency');
goog.require('onyx.static$.util');
goog.require('onyx.lifecycles.lifecycle_compile');
goog.require('onyx.flow_conditions.fc_compile');
goog.require('onyx.flow_conditions.fc_routing');
goog.require('onyx.state.memory');
goog.require('onyx.peer.grouping');
goog.require('onyx.state.protocol.db');
goog.require('onyx.windowing.window_compile');
goog.require('onyx.windowing.window_extensions');
goog.require('onyx.peer.window_state');
goog.require('onyx.windowing.aggregation');
goog.require('onyx.refinements');
goog.require('onyx.triggers');
goog.require('onyx.types');
goog.require('onyx.spec');
onyx_local_rt.impl.takev = (function onyx_local_rt$impl$takev(k,xs){
return cljs.core.vec.call(null,cljs.core.take.call(null,k,xs));
});
onyx_local_rt.impl.dropv = (function onyx_local_rt$impl$dropv(k,xs){
return cljs.core.vec.call(null,cljs.core.drop.call(null,k,xs));
});
onyx_local_rt.impl.mapcatv = (function onyx_local_rt$impl$mapcatv(f,xs){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,f,xs));
});
onyx_local_rt.impl.curry_params = (function onyx_local_rt$impl$curry_params(f,params){
return cljs.core.reduce.call(null,cljs.core.partial,f,params);
});
onyx_local_rt.impl.unqualify_map = (function onyx_local_rt$impl$unqualify_map(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__63420){
var vec__63421 = p__63420;
var k = cljs.core.nth.call(null,vec__63421,(0),null);
var v = cljs.core.nth.call(null,vec__63421,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.name.call(null,k)),v], null);
}),m));
});
onyx_local_rt.impl.only = (function onyx_local_rt$impl$only(coll){
if(cljs.core.next.call(null,coll)){
throw cljs.core.ex_info.call(null,"More than one element in collection, expected count of 1",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

var temp__6736__auto__ = cljs.core.first.call(null,coll);
if(cljs.core.truth_(temp__6736__auto__)){
var result = temp__6736__auto__;
return result;
} else {
throw cljs.core.ex_info.call(null,"Downstream tasks are not healthy. Stopping here.",cljs.core.PersistentArrayMap.EMPTY);
}
});
onyx_local_rt.impl.find_task = (function onyx_local_rt$impl$find_task(catalog,task_name){
var matches = cljs.core.filter.call(null,(function (p1__63424_SHARP_){
return cljs.core._EQ_.call(null,task_name,new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(p1__63424_SHARP_));
}),catalog);
return onyx_local_rt.impl.only.call(null,matches);
});
onyx_local_rt.impl.make_uuid = (function onyx_local_rt$impl$make_uuid(){
return cljs.core.random_uuid.call(null);
});
onyx_local_rt.impl.resolve_var = (function onyx_local_rt$impl$resolve_var(v){
return v;
});
onyx_local_rt.impl.compile_before_task_start_functions = (function onyx_local_rt$impl$compile_before_task_start_functions(lifecycles,task_name){
return onyx.lifecycles.lifecycle_compile.compile_lifecycle_functions.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888),lifecycles,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878),task_name], null),new cljs.core.Keyword("lifecycle","before-task-start","lifecycle/before-task-start",85347114));
});
onyx_local_rt.impl.compile_before_batch_task_functions = (function onyx_local_rt$impl$compile_before_batch_task_functions(lifecycles,task_name){
return onyx.lifecycles.lifecycle_compile.compile_lifecycle_functions.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888),lifecycles,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878),task_name], null),new cljs.core.Keyword("lifecycle","before-batch","lifecycle/before-batch",-1874470000));
});
onyx_local_rt.impl.compile_after_read_batch_task_functions = (function onyx_local_rt$impl$compile_after_read_batch_task_functions(lifecycles,task_name){
return onyx.lifecycles.lifecycle_compile.compile_lifecycle_functions.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888),lifecycles,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878),task_name], null),new cljs.core.Keyword("lifecycle","after-read-batch","lifecycle/after-read-batch",886096329));
});
onyx_local_rt.impl.compile_after_apply_fn_task_functions = (function onyx_local_rt$impl$compile_after_apply_fn_task_functions(lifecycles,task_name){
return onyx.lifecycles.lifecycle_compile.compile_lifecycle_functions.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888),lifecycles,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878),task_name], null),new cljs.core.Keyword("lifecycle","after-apply-fn","lifecycle/after-apply-fn",1798612181));
});
onyx_local_rt.impl.compile_after_batch_task_functions = (function onyx_local_rt$impl$compile_after_batch_task_functions(lifecycles,task_name){
return onyx.lifecycles.lifecycle_compile.compile_lifecycle_functions.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888),lifecycles,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878),task_name], null),new cljs.core.Keyword("lifecycle","after-batch","lifecycle/after-batch",-1396955646));
});
onyx_local_rt.impl.compile_after_task_functions = (function onyx_local_rt$impl$compile_after_task_functions(lifecycles,task_name){
return onyx.lifecycles.lifecycle_compile.compile_lifecycle_functions.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888),lifecycles,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878),task_name], null),new cljs.core.Keyword("lifecycle","after-task-stop","lifecycle/after-task-stop",1985614904));
});
onyx_local_rt.impl.compile_handle_exception_functions = (function onyx_local_rt$impl$compile_handle_exception_functions(lifecycles,task_name){
return onyx.lifecycles.lifecycle_compile.compile_lifecycle_handle_exception_functions.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888),lifecycles,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878),task_name], null));
});
onyx_local_rt.impl.lifecycles__GT_event_map = (function onyx_local_rt$impl$lifecycles__GT_event_map(p__63425){
var map__63429 = p__63425;
var map__63429__$1 = ((((!((map__63429 == null)))?((((map__63429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63429):map__63429);
var event = map__63429__$1;
var lifecycles = cljs.core.get.call(null,map__63429__$1,new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888));
var task = cljs.core.get.call(null,map__63429__$1,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878));
try{return cljs.core.update.call(null,event,new cljs.core.Keyword("onyx.core","compiled","onyx.core/compiled",1995915353),((function (map__63429,map__63429__$1,event,lifecycles,task){
return (function (compiled){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,compiled,new cljs.core.Keyword(null,"compiled-start-task-fn","compiled-start-task-fn",-922252172),(function (){var or__61290__auto__ = onyx.lifecycles.lifecycle_compile.compile_start_task_functions.call(null,event);
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.identity;
}
})()),new cljs.core.Keyword(null,"compiled-before-task-start-fn","compiled-before-task-start-fn",118944271),(function (){var or__61290__auto__ = onyx_local_rt.impl.compile_before_task_start_functions.call(null,lifecycles,task);
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.identity;
}
})()),new cljs.core.Keyword(null,"compiled-before-batch-fn","compiled-before-batch-fn",-649659803),(function (){var or__61290__auto__ = onyx_local_rt.impl.compile_before_batch_task_functions.call(null,lifecycles,task);
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.identity;
}
})()),new cljs.core.Keyword(null,"compiled-after-read-batch-fn","compiled-after-read-batch-fn",1457318708),(function (){var or__61290__auto__ = onyx_local_rt.impl.compile_after_read_batch_task_functions.call(null,lifecycles,task);
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.identity;
}
})()),new cljs.core.Keyword(null,"compiled-after-apply-fn","compiled-after-apply-fn",339266308),(function (){var or__61290__auto__ = onyx_local_rt.impl.compile_after_apply_fn_task_functions.call(null,lifecycles,task);
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.identity;
}
})()),new cljs.core.Keyword(null,"compiled-after-batch-fn","compiled-after-batch-fn",1588066673),(function (){var or__61290__auto__ = onyx_local_rt.impl.compile_after_batch_task_functions.call(null,lifecycles,task);
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.identity;
}
})()),new cljs.core.Keyword(null,"compiled-after-task-fn","compiled-after-task-fn",-1300976301),(function (){var or__61290__auto__ = onyx_local_rt.impl.compile_after_task_functions.call(null,lifecycles,task);
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.identity;
}
})()),new cljs.core.Keyword(null,"compiled-handle-exception-fn","compiled-handle-exception-fn",-1690573462),(function (){var or__61290__auto__ = onyx_local_rt.impl.compile_handle_exception_functions.call(null,lifecycles,task);
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.identity;
}
})());
});})(map__63429,map__63429__$1,event,lifecycles,task))
);
}catch (e63431){if((e63431 instanceof Error)){
var e = e63431;
return event;
} else {
throw e63431;

}
}});
onyx_local_rt.impl.flow_conditions__GT_event_map = (function onyx_local_rt$impl$flow_conditions__GT_event_map(p__63432){
var map__63435 = p__63432;
var map__63435__$1 = ((((!((map__63435 == null)))?((((map__63435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63435):map__63435);
var event = map__63435__$1;
var flow_conditions = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword("onyx.core","flow-conditions","onyx.core/flow-conditions",328485226));
var workflow = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword("onyx.core","workflow","onyx.core/workflow",477881410));
var task = cljs.core.get.call(null,map__63435__$1,new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878));
return cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"compiled-norm-fcs","compiled-norm-fcs",1899229878),onyx.flow_conditions.fc_compile.compile_fc_happy_path.call(null,flow_conditions,workflow,task),new cljs.core.Keyword(null,"compiled-ex-fcs","compiled-ex-fcs",-1054783940),onyx.flow_conditions.fc_compile.compile_fc_exception_path.call(null,flow_conditions,workflow,task));
});
onyx_local_rt.impl.state_indices = (function onyx_local_rt$impl$state_indices(windows,triggers){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,new cljs.core.Keyword("window","id","window/id",-62222780),windows))),cljs.core.sort.call(null,cljs.core.map.call(null,(function (p__63440){
var map__63441 = p__63440;
var map__63441__$1 = ((((!((map__63441 == null)))?((((map__63441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63441):map__63441);
var id = cljs.core.get.call(null,map__63441__$1,new cljs.core.Keyword("trigger","id","trigger/id",-326368132));
var window_id = cljs.core.get.call(null,map__63441__$1,new cljs.core.Keyword("trigger","window-id","trigger/window-id",-472875377));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,window_id], null);
}),triggers)))));
});
onyx_local_rt.impl.add_windows_states = (function onyx_local_rt$impl$add_windows_states(p__63443){
var map__63446 = p__63443;
var map__63446__$1 = ((((!((map__63446 == null)))?((((map__63446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63446):map__63446);
var event = map__63446__$1;
var windows = cljs.core.get.call(null,map__63446__$1,new cljs.core.Keyword("onyx.core","windows","onyx.core/windows",-1130597258));
var triggers = cljs.core.get.call(null,map__63446__$1,new cljs.core.Keyword("onyx.core","triggers","onyx.core/triggers",1971263327));
var task_map = cljs.core.get.call(null,map__63446__$1,new cljs.core.Keyword("onyx.core","task-map","onyx.core/task-map",1668186921));
var state_store = cljs.core.get.call(null,map__63446__$1,new cljs.core.Keyword(null,"state-store","state-store",-1000263756));
if(!(cljs.core.empty_QMARK_.call(null,windows))){
return cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"windows-states","windows-states",897106963),(function (){var indices = onyx_local_rt.impl.state_indices.call(null,windows,triggers);
return cljs.core.mapv.call(null,((function (indices,map__63446,map__63446__$1,event,windows,triggers,task_map,state_store){
return (function (window){
return onyx.windowing.window_compile.build_window_executor.call(null,window,triggers,state_store,indices,task_map);
});})(indices,map__63446,map__63446__$1,event,windows,triggers,task_map,state_store))
,windows);
})());
} else {
return cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"windows-states","windows-states",897106963),cljs.core.PersistentVector.EMPTY);
}
});
onyx_local_rt.impl.grouped_window_contents = (function onyx_local_rt$impl$grouped_window_contents(p__63448){
var map__63454 = p__63448;
var map__63454__$1 = ((((!((map__63454 == null)))?((((map__63454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63454):map__63454);
var state_store = cljs.core.get.call(null,map__63454__$1,new cljs.core.Keyword(null,"state-store","state-store",-1000263756));
var windows = cljs.core.get.call(null,map__63454__$1,new cljs.core.Keyword("onyx.core","windows","onyx.core/windows",-1130597258));
return cljs.core.reduce.call(null,((function (map__63454,map__63454__$1,state_store,windows){
return (function (m,p__63456){
var map__63457 = p__63456;
var map__63457__$1 = ((((!((map__63457 == null)))?((((map__63457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63457):map__63457);
var id = cljs.core.get.call(null,map__63457__$1,new cljs.core.Keyword("window","id","window/id",-62222780));
return cljs.core.assoc.call(null,m,id,cljs.core.reduce.call(null,((function (map__63457,map__63457__$1,id,map__63454,map__63454__$1,state_store,windows){
return (function (m__$1,group){
var group_id = onyx.state.protocol.db.group_id.call(null,state_store,group);
return cljs.core.reduce.call(null,((function (group_id,map__63457,map__63457__$1,id,map__63454,map__63454__$1,state_store,windows){
return (function (m__$2,extent){
return cljs.core.update.call(null,m__$2,group,((function (group_id,map__63457,map__63457__$1,id,map__63454,map__63454__$1,state_store,windows){
return (function (g){
return cljs.core.assoc.call(null,(function (){var or__61290__auto__ = g;
if(cljs.core.truth_(or__61290__auto__)){
return or__61290__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),extent,onyx.state.protocol.db.get_extent.call(null,state_store,id,group_id,extent));
});})(group_id,map__63457,map__63457__$1,id,map__63454,map__63454__$1,state_store,windows))
);
});})(group_id,map__63457,map__63457__$1,id,map__63454,map__63454__$1,state_store,windows))
,m__$1,onyx.state.protocol.db.group_extents.call(null,state_store,id,group_id));
});})(map__63457,map__63457__$1,id,map__63454,map__63454__$1,state_store,windows))
,cljs.core.PersistentArrayMap.EMPTY,onyx.state.protocol.db.groups.call(null,state_store)));
});})(map__63454,map__63454__$1,state_store,windows))
,cljs.core.PersistentArrayMap.EMPTY,windows);
});
onyx_local_rt.impl.ungrouped_window_contents = (function onyx_local_rt$impl$ungrouped_window_contents(p__63459){
var map__63465 = p__63459;
var map__63465__$1 = ((((!((map__63465 == null)))?((((map__63465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63465):map__63465);
var state_store = cljs.core.get.call(null,map__63465__$1,new cljs.core.Keyword(null,"state-store","state-store",-1000263756));
var windows = cljs.core.get.call(null,map__63465__$1,new cljs.core.Keyword("onyx.core","windows","onyx.core/windows",-1130597258));
return cljs.core.reduce.call(null,((function (map__63465,map__63465__$1,state_store,windows){
return (function (m,p__63467){
var map__63468 = p__63467;
var map__63468__$1 = ((((!((map__63468 == null)))?((((map__63468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63468):map__63468);
var id = cljs.core.get.call(null,map__63468__$1,new cljs.core.Keyword("window","id","window/id",-62222780));
return cljs.core.assoc.call(null,m,id,(function (){var group = null;
return cljs.core.reduce.call(null,((function (group,map__63468,map__63468__$1,id,map__63465,map__63465__$1,state_store,windows){
return (function (m__$1,extent){
return cljs.core.assoc.call(null,m__$1,extent,onyx.state.protocol.db.get_extent.call(null,state_store,id,group,extent));
});})(group,map__63468,map__63468__$1,id,map__63465,map__63465__$1,state_store,windows))
,cljs.core.PersistentArrayMap.EMPTY,onyx.state.protocol.db.group_extents.call(null,state_store,id,group));
})());
});})(map__63465,map__63465__$1,state_store,windows))
,cljs.core.PersistentArrayMap.EMPTY,windows);
});
onyx_local_rt.impl.get_window_contents = (function onyx_local_rt$impl$get_window_contents(p__63470){
var map__63473 = p__63470;
var map__63473__$1 = ((((!((map__63473 == null)))?((((map__63473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63473):map__63473);
var event = map__63473__$1;
var grouping_fn = cljs.core.get.call(null,map__63473__$1,new cljs.core.Keyword(null,"grouping-fn","grouping-fn",-1152328338));
if(cljs.core.truth_(grouping_fn)){
return onyx_local_rt.impl.grouped_window_contents.call(null,event);
} else {
return onyx_local_rt.impl.ungrouped_window_contents.call(null,event);
}
});
onyx_local_rt.impl.add_state_store = (function onyx_local_rt$impl$add_state_store(event){
return cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"state-store","state-store",-1000263756),onyx.state.protocol.db.create_db.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("onyx.peer","state-store-impl","onyx.peer/state-store-impl",704702434),new cljs.core.Keyword(null,"memory","memory",-1449401430)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentArrayMap.EMPTY));
});
onyx_local_rt.impl.task_params__GT_event_map = (function onyx_local_rt$impl$task_params__GT_event_map(p__63475){
var map__63478 = p__63475;
var map__63478__$1 = ((((!((map__63478 == null)))?((((map__63478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63478):map__63478);
var event = map__63478__$1;
var task_map = cljs.core.get.call(null,map__63478__$1,new cljs.core.Keyword("onyx.core","task-map","onyx.core/task-map",1668186921));
var params = cljs.core.mapv.call(null,((function (map__63478,map__63478__$1,event,task_map){
return (function (param){
return cljs.core.get.call(null,task_map,param);
});})(map__63478,map__63478__$1,event,task_map))
,new cljs.core.Keyword("onyx","params","onyx/params",716013253).cljs$core$IFn$_invoke$arity$1(task_map));
return cljs.core.assoc.call(null,event,new cljs.core.Keyword("onyx.core","params","onyx.core/params",-299516516),params);
});
onyx_local_rt.impl.egress_tasks__GT_event_map = (function onyx_local_rt$impl$egress_tasks__GT_event_map(event,children){
return cljs.core.assoc_in.call(null,event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"egress-tasks","egress-tasks",-609839620)], null),children);
});
onyx_local_rt.impl.action_sequence = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("lifecycle","route-flow-conditions","lifecycle/route-flow-conditions",-847429246),new cljs.core.Keyword("lifecycle","after-batch","lifecycle/after-batch",-1396955646),new cljs.core.Keyword("lifecycle","after-read-batch","lifecycle/after-read-batch",886096329),new cljs.core.Keyword("lifecycle","before-task-start","lifecycle/before-task-start",85347114),new cljs.core.Keyword("lifecycle","start-task?","lifecycle/start-task?",1478637931),new cljs.core.Keyword("lifecycle","write-batch","lifecycle/write-batch",145186028),new cljs.core.Keyword("lifecycle","apply-fn","lifecycle/apply-fn",1540189645),new cljs.core.Keyword("lifecycle","assign-windows","lifecycle/assign-windows",189506448),new cljs.core.Keyword("lifecycle","before-batch","lifecycle/before-batch",-1874470000),new cljs.core.Keyword("lifecycle","read-batch","lifecycle/read-batch",1187153170),new cljs.core.Keyword("lifecycle","after-apply-fn","lifecycle/after-apply-fn",1798612181),new cljs.core.Keyword("lifecycle","after-task-stop","lifecycle/after-task-stop",1985614904)],[new cljs.core.Keyword("lifecycle","write-batch","lifecycle/write-batch",145186028),new cljs.core.Keyword("lifecycle","before-batch","lifecycle/before-batch",-1874470000),new cljs.core.Keyword("lifecycle","apply-fn","lifecycle/apply-fn",1540189645),new cljs.core.Keyword("lifecycle","before-batch","lifecycle/before-batch",-1874470000),new cljs.core.Keyword("lifecycle","before-task-start","lifecycle/before-task-start",85347114),new cljs.core.Keyword("lifecycle","after-batch","lifecycle/after-batch",-1396955646),new cljs.core.Keyword("lifecycle","after-apply-fn","lifecycle/after-apply-fn",1798612181),new cljs.core.Keyword("lifecycle","route-flow-conditions","lifecycle/route-flow-conditions",-847429246),new cljs.core.Keyword("lifecycle","read-batch","lifecycle/read-batch",1187153170),new cljs.core.Keyword("lifecycle","after-read-batch","lifecycle/after-read-batch",886096329),new cljs.core.Keyword("lifecycle","assign-windows","lifecycle/assign-windows",189506448),new cljs.core.Keyword("lifecycle","start-task?","lifecycle/start-task?",1478637931)]);
if(typeof onyx_local_rt.impl.apply_action !== 'undefined'){
} else {
onyx_local_rt.impl.apply_action = (function (){var method_table__62385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__62386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__62387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__62388__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__62389__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"onyx-local-rt.impl","apply-action"),((function (method_table__62385__auto__,prefer_table__62386__auto__,method_cache__62387__auto__,cached_hierarchy__62388__auto__,hierarchy__62389__auto__){
return (function (env,task,action){
return action;
});})(method_table__62385__auto__,prefer_table__62386__auto__,method_cache__62387__auto__,cached_hierarchy__62388__auto__,hierarchy__62389__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__62389__auto__,method_table__62385__auto__,prefer_table__62386__auto__,method_cache__62387__auto__,cached_hierarchy__62388__auto__));
})();
}
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","start-task?","lifecycle/start-task?",1478637931),(function (env,task,action){
var f = cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("onyx.core","compiled","onyx.core/compiled",1995915353),new cljs.core.Keyword(null,"compiled-start-task-fn","compiled-start-task-fn",-922252172)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"start-task?","start-task?",877600977),f.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(task)))], null);
}));
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","before-task-start","lifecycle/before-task-start",85347114),(function (env,task,action){
var f = cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("onyx.core","compiled","onyx.core/compiled",1995915353),new cljs.core.Keyword(null,"compiled-before-task-start-fn","compiled-before-task-start-fn",118944271)], null));
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(task);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.merge.call(null,event,f.call(null,event)))], null);
}));
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","before-batch","lifecycle/before-batch",-1874470000),(function (env,task,action){
var f = cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("onyx.core","compiled","onyx.core/compiled",1995915353),new cljs.core.Keyword(null,"compiled-before-batch-fn","compiled-before-batch-fn",-649659803)], null));
var event = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(task),new cljs.core.Keyword("onyx.core","batch","onyx.core/batch",-1789886143),new cljs.core.Keyword("onyx.core","results","onyx.core/results",-115224142),new cljs.core.Keyword("onyx.core","triggered","onyx.core/triggered",-1326462890));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.merge.call(null,event,f.call(null,event)))], null);
}));
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","read-batch","lifecycle/read-batch",1187153170),(function (env,p__63480,action){
var map__63481 = p__63480;
var map__63481__$1 = ((((!((map__63481 == null)))?((((map__63481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63481):map__63481);
var task = map__63481__$1;
var inbox = cljs.core.get.call(null,map__63481__$1,new cljs.core.Keyword(null,"inbox","inbox",1888669443));
var event = cljs.core.get.call(null,map__63481__$1,new cljs.core.Keyword(null,"event","event",301435442));
var temp__6736__auto__ = new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("onyx.core","task-map","onyx.core/task-map",1668186921).cljs$core$IFn$_invoke$arity$1(event));
if(cljs.core.truth_(temp__6736__auto__)){
var size = temp__6736__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,task,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("onyx.core","batch","onyx.core/batch",-1789886143)], null),onyx_local_rt.impl.takev.call(null,size,inbox)),new cljs.core.Keyword(null,"inbox","inbox",1888669443),onyx_local_rt.impl.dropv.call(null,size,inbox))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,task,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("onyx.core","batch","onyx.core/batch",-1789886143)], null),inbox),new cljs.core.Keyword(null,"inbox","inbox",1888669443),cljs.core.PersistentVector.EMPTY)], null);
}
}));
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","after-apply-fn","lifecycle/after-apply-fn",1798612181),(function (env,task,action){
var f = cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("onyx.core","compiled","onyx.core/compiled",1995915353),new cljs.core.Keyword(null,"compiled-after-apply-fn","compiled-after-apply-fn",339266308)], null));
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(task);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.merge.call(null,event,f.call(null,event)))], null);
}));
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","after-read-batch","lifecycle/after-read-batch",886096329),(function (env,task,action){
var f = cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("onyx.core","compiled","onyx.core/compiled",1995915353),new cljs.core.Keyword(null,"compiled-after-read-batch-fn","compiled-after-read-batch-fn",1457318708)], null));
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(task);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.merge.call(null,event,f.call(null,event)))], null);
}));
onyx_local_rt.impl.collect_next_segments = (function onyx_local_rt$impl$collect_next_segments(f,input){
var segments = (function (){try{return f.call(null,input);
}catch (e63484){if((e63484 instanceof Error)){
var e = e63484;
return cljs.core.ex_info.call(null,"Segment threw exception",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"segment","segment",-964921196),input], null));
} else {
throw e63484;

}
}})();
if(cljs.core.sequential_QMARK_.call(null,segments)){
return segments;
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[segments],null));
}
});
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","apply-fn","lifecycle/apply-fn",1540189645),(function (env,p__63485,action){
var map__63486 = p__63485;
var map__63486__$1 = ((((!((map__63486 == null)))?((((map__63486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63486):map__63486);
var task = map__63486__$1;
var event = cljs.core.get.call(null,map__63486__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__63488 = event;
var map__63488__$1 = ((((!((map__63488 == null)))?((((map__63488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63488):map__63488);
var batch = cljs.core.get.call(null,map__63488__$1,new cljs.core.Keyword("onyx.core","batch","onyx.core/batch",-1789886143));
var params = cljs.core.get.call(null,map__63488__$1,new cljs.core.Keyword("onyx.core","params","onyx.core/params",-299516516));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),((cljs.core.seq.call(null,batch))?(function (){var f = onyx_local_rt.impl.curry_params.call(null,new cljs.core.Keyword("onyx.core","fn","onyx.core/fn",2108604083).cljs$core$IFn$_invoke$arity$1(event),params);
var results = cljs.core.mapv.call(null,((function (f,map__63488,map__63488__$1,batch,params,map__63486,map__63486__$1,task,event){
return (function (old){
var all_new = onyx_local_rt.impl.collect_next_segments.call(null,f,old);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"all-new","all-new",-608321797),all_new], null);
});})(f,map__63488,map__63488__$1,batch,params,map__63486,map__63486__$1,task,event))
,batch);
return cljs.core.assoc_in.call(null,task,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("onyx.core","results","onyx.core/results",-115224142)], null),results);
})():task)], null);
}));
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","route-flow-conditions","lifecycle/route-flow-conditions",-847429246),(function (env,p__63490,action){
var map__63491 = p__63490;
var map__63491__$1 = ((((!((map__63491 == null)))?((((map__63491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63491):map__63491);
var task = map__63491__$1;
var event = cljs.core.get.call(null,map__63491__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__63493 = event;
var map__63493__$1 = ((((!((map__63493 == null)))?((((map__63493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63493):map__63493);
var results = cljs.core.get.call(null,map__63493__$1,new cljs.core.Keyword("onyx.core","results","onyx.core/results",-115224142));
var compiled = cljs.core.get.call(null,map__63493__$1,new cljs.core.Keyword("onyx.core","compiled","onyx.core/compiled",1995915353));
var triggered = cljs.core.get.call(null,map__63493__$1,new cljs.core.Keyword("onyx.core","triggered","onyx.core/triggered",-1326462890));
var reified_results = cljs.core.reduce.call(null,((function (map__63493,map__63493__$1,results,compiled,triggered,map__63491,map__63491__$1,task,event){
return (function (all,p__63495){
var map__63496 = p__63495;
var map__63496__$1 = ((((!((map__63496 == null)))?((((map__63496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63496):map__63496);
var outgoing_message = map__63496__$1;
var old = cljs.core.get.call(null,map__63496__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var all_new = cljs.core.get.call(null,map__63496__$1,new cljs.core.Keyword(null,"all-new","all-new",-608321797));
var leaves = all_new;
var root = old;
return cljs.core.reduce.call(null,((function (leaves,root,map__63496,map__63496__$1,outgoing_message,old,all_new,map__63493,map__63493__$1,results,compiled,triggered,map__63491,map__63491__$1,task,event){
return (function (all_STAR_,new_msg){
var routes = onyx.flow_conditions.fc_routing.route_data.call(null,event,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),root,new cljs.core.Keyword(null,"leaves","leaves",-2143630574),leaves], null),new_msg);
var transformed_msg = onyx.flow_conditions.fc_routing.flow_conditions_transform.call(null,new_msg,routes,event);
if(cljs.core.truth_((function (){var and__61271__auto__ = onyx.static$.util.exception_QMARK_.call(null,new_msg);
if(cljs.core.truth_(and__61271__auto__)){
return cljs.core.not.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"flow","flow",590489032).cljs$core$IFn$_invoke$arity$1(routes)));
} else {
return and__61271__auto__;
}
})())){
throw new_msg;
} else {
}

return cljs.core.conj.call(null,all_STAR_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"segment","segment",-964921196),transformed_msg,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"flow","flow",590489032).cljs$core$IFn$_invoke$arity$1(routes)], null));
});})(leaves,root,map__63496,map__63496__$1,outgoing_message,old,all_new,map__63493,map__63493__$1,results,compiled,triggered,map__63491,map__63491__$1,task,event))
,all,all_new);
});})(map__63493,map__63493__$1,results,compiled,triggered,map__63491,map__63491__$1,task,event))
,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,results,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),null,new cljs.core.Keyword(null,"all-new","all-new",-608321797),triggered], null)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc_in.call(null,task,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("onyx.core","results","onyx.core/results",-115224142)], null),reified_results)], null);
}));
onyx_local_rt.impl.state_transition_fns = (function onyx_local_rt$impl$state_transition_fns(event,state,segment){
var temp__6736__auto__ = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grouping-fn","grouping-fn",-1152328338)], null));
if(cljs.core.truth_(temp__6736__auto__)){
var f = temp__6736__auto__;
var group = f.call(null,segment);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state*","state*",1360534231),cljs.core.get.call(null,state,group),new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"ret-f","ret-f",-365366265),((function (group,f,temp__6736__auto__){
return (function (v){
return cljs.core.assoc.call(null,state,group,v);
});})(group,f,temp__6736__auto__))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state*","state*",1360534231),state,new cljs.core.Keyword(null,"ret-f","ret-f",-365366265),((function (temp__6736__auto__){
return (function (v){
return v;
});})(temp__6736__auto__))
], null);
}
});
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","assign-windows","lifecycle/assign-windows",189506448),(function (env,p__63498,action){
var map__63499 = p__63498;
var map__63499__$1 = ((((!((map__63499 == null)))?((((map__63499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63499):map__63499);
var task = map__63499__$1;
var event = cljs.core.get.call(null,map__63499__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_event = onyx.types.new_state_event.call(null,new cljs.core.Keyword(null,"new-segment","new-segment",-1974816380),event);
var map__63501 = event;
var map__63501__$1 = ((((!((map__63501 == null)))?((((map__63501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63501):map__63501);
var grouping_fn = cljs.core.get.call(null,map__63501__$1,new cljs.core.Keyword(null,"grouping-fn","grouping-fn",-1152328338));
var results = cljs.core.get.call(null,map__63501__$1,new cljs.core.Keyword("onyx.core","results","onyx.core/results",-115224142));
var windows_states = cljs.core.get.call(null,map__63501__$1,new cljs.core.Keyword(null,"windows-states","windows-states",897106963));
var state_store = cljs.core.get.call(null,map__63501__$1,new cljs.core.Keyword(null,"state-store","state-store",-1000263756));
var grouped_QMARK_ = !((grouping_fn == null));
var state_event_STAR_ = cljs.core.assoc.call(null,state_event,new cljs.core.Keyword(null,"grouped?","grouped?",531080948),grouped_QMARK_);
var updated_states = cljs.core.reduce.call(null,((function (state_event,map__63501,map__63501__$1,grouping_fn,results,windows_states,state_store,grouped_QMARK_,state_event_STAR_,map__63499,map__63499__$1,task,event){
return (function (windows_state_STAR_,segment){
if(cljs.core.truth_(onyx.static$.util.exception_QMARK_.call(null,segment))){
return windows_state_STAR_;
} else {
var state_event_STAR__STAR_ = ((grouped_QMARK_)?(function (){var group_key = grouping_fn.call(null,segment);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state_event_STAR_,new cljs.core.Keyword(null,"segment","segment",-964921196),segment),new cljs.core.Keyword(null,"group-id","group-id",-1316082778),onyx.state.protocol.db.group_id.call(null,state_store,group_key)),new cljs.core.Keyword(null,"group-key","group-key",742570475),group_key);
})():cljs.core.assoc.call(null,state_event_STAR_,new cljs.core.Keyword(null,"segment","segment",-964921196),segment));
return onyx.peer.window_state.fire_state_event.call(null,windows_state_STAR_,state_event_STAR__STAR_);
}
});})(state_event,map__63501,map__63501__$1,grouping_fn,results,windows_states,state_store,grouped_QMARK_,state_event_STAR_,map__63499,map__63499__$1,task,event))
,windows_states,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"all-new","all-new",-608321797),results));
var emitted = cljs.core.doall.call(null,cljs.core.mapcat.call(null,cljs.core.comp.call(null,cljs.core.deref,new cljs.core.Keyword(null,"emitted","emitted",-974033604)),updated_states));
cljs.core.run_BANG_.call(null,((function (state_event,map__63501,map__63501__$1,grouping_fn,results,windows_states,state_store,grouped_QMARK_,state_event_STAR_,updated_states,emitted,map__63499,map__63499__$1,task,event){
return (function (w){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"emitted","emitted",-974033604).cljs$core$IFn$_invoke$arity$1(w),cljs.core.PersistentVector.EMPTY);
});})(state_event,map__63501,map__63501__$1,grouping_fn,results,windows_states,state_store,grouped_QMARK_,state_event_STAR_,updated_states,emitted,map__63499,map__63499__$1,task,event))
,updated_states);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc.call(null,cljs.core.update.call(null,task,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),cljs.core.into,emitted),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.update.call(null,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"windows-states","windows-states",897106963),updated_states),new cljs.core.Keyword("onyx.core","triggered","onyx.core/triggered",-1326462890),cljs.core.into,emitted))], null);
}));
onyx_local_rt.impl.route_to_children = (function onyx_local_rt$impl$route_to_children(results){
return cljs.core.reduce.call(null,(function (result,p__63506){
var map__63507 = p__63506;
var map__63507__$1 = ((((!((map__63507 == null)))?((((map__63507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63507):map__63507);
var segment = cljs.core.get.call(null,map__63507__$1,new cljs.core.Keyword(null,"segment","segment",-964921196));
var routes = cljs.core.get.call(null,map__63507__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
return cljs.core.reduce.call(null,((function (map__63507,map__63507__$1,segment,routes){
return (function (result_STAR_,route){
return cljs.core.update_in.call(null,result_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [route], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),segment);
});})(map__63507,map__63507__$1,segment,routes))
,result,routes);
}),cljs.core.PersistentArrayMap.EMPTY,results);
});
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","write-batch","lifecycle/write-batch",145186028),(function (env,p__63509,action){
var map__63510 = p__63509;
var map__63510__$1 = ((((!((map__63510 == null)))?((((map__63510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63510):map__63510);
var task = map__63510__$1;
var event = cljs.core.get.call(null,map__63510__$1,new cljs.core.Keyword(null,"event","event",301435442));
var children = cljs.core.get.call(null,map__63510__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var map__63512 = event;
var map__63512__$1 = ((((!((map__63512 == null)))?((((map__63512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63512):map__63512);
var results = cljs.core.get.call(null,map__63512__$1,new cljs.core.Keyword("onyx.core","results","onyx.core/results",-115224142));
var triggered = cljs.core.get.call(null,map__63512__$1,new cljs.core.Keyword("onyx.core","triggered","onyx.core/triggered",-1326462890));
if(cljs.core.not.call(null,cljs.core.seq.call(null,children))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.update_in.call(null,task,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outputs","outputs",-1896513034)], null),cljs.core.into,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),results)),new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentArrayMap.EMPTY], null);
} else {
if(cljs.core.seq.call(null,results)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task,new cljs.core.Keyword(null,"writes","writes",-102226269),onyx_local_rt.impl.route_to_children.call(null,results)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),task,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentArrayMap.EMPTY], null);

}
}
}));
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","after-batch","lifecycle/after-batch",-1396955646),(function (env,task,action){
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(task);
var f = cljs.core.get_in.call(null,event,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("onyx.core","compiled","onyx.core/compiled",1995915353),new cljs.core.Keyword(null,"compiled-after-batch-fn","compiled-after-batch-fn",1588066673)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.merge.call(null,event,f.call(null,event)))], null);
}));
cljs.core._add_method.call(null,onyx_local_rt.impl.apply_action,new cljs.core.Keyword("lifecycle","after-task-stop","lifecycle/after-task-stop",1985614904),(function (env,task,action){
var f = cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("onyx.core","compiled","onyx.core/compiled",1995915353),new cljs.core.Keyword(null,"compiled-after-task-fn","compiled-after-task-fn",-1300976301)], null));
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(task);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),cljs.core.assoc.call(null,task,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.merge.call(null,event,f.call(null,event)))], null);
}));
onyx_local_rt.impl.workflow__GT_sierra_graph = (function onyx_local_rt$impl$workflow__GT_sierra_graph(workflow){
return cljs.core.reduce.call(null,(function (result,p__63518){
var vec__63519 = p__63518;
var src = cljs.core.nth.call(null,vec__63519,(0),null);
var dst = cljs.core.nth.call(null,vec__63519,(1),null);
return com.stuartsierra.dependency.depend.call(null,result,dst,src);
}),com.stuartsierra.dependency.graph.call(null),workflow);
});
onyx_local_rt.impl.precompile_onyx_fn = (function onyx_local_rt$impl$precompile_onyx_fn(catalog_entry){
var temp__6736__auto__ = new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942).cljs$core$IFn$_invoke$arity$1(catalog_entry);
if(cljs.core.truth_(temp__6736__auto__)){
var f = temp__6736__auto__;
return onyx.static$.util.kw__GT_fn.call(null,f);
} else {
return cljs.core.identity;
}
});
onyx_local_rt.impl.init_task_state = (function onyx_local_rt$impl$init_task_state(p__63523,graph,task_name,catalog_entry){
var map__63526 = p__63523;
var map__63526__$1 = ((((!((map__63526 == null)))?((((map__63526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63526):map__63526);
var job = map__63526__$1;
var workflow = cljs.core.get.call(null,map__63526__$1,new cljs.core.Keyword(null,"workflow","workflow",-640694607));
var catalog = cljs.core.get.call(null,map__63526__$1,new cljs.core.Keyword(null,"catalog","catalog",-439057154));
var flow_conditions = cljs.core.get.call(null,map__63526__$1,new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495));
var lifecycles = cljs.core.get.call(null,map__63526__$1,new cljs.core.Keyword(null,"lifecycles","lifecycles",-839774043));
var windows = cljs.core.get.call(null,map__63526__$1,new cljs.core.Keyword(null,"windows","windows",2068861701));
var triggers = cljs.core.get.call(null,map__63526__$1,new cljs.core.Keyword(null,"triggers","triggers",-1443678770));
var children = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,com.stuartsierra.dependency.immediate_dependents.call(null,graph,task_name));
var base = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"inbox","inbox",1888669443),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"start-task?","start-task?",877600977),false,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"event","event",301435442),onyx_local_rt.impl.egress_tasks__GT_event_map.call(null,onyx_local_rt.impl.task_params__GT_event_map.call(null,onyx_local_rt.impl.add_windows_states.call(null,onyx_local_rt.impl.add_state_store.call(null,onyx_local_rt.impl.flow_conditions__GT_event_map.call(null,onyx_local_rt.impl.lifecycles__GT_event_map.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("onyx.core","workflow","onyx.core/workflow",477881410),new cljs.core.Keyword("onyx.core","task-map","onyx.core/task-map",1668186921),new cljs.core.Keyword("onyx.core","flow-conditions","onyx.core/flow-conditions",328485226),new cljs.core.Keyword("onyx.core","catalog","onyx.core/catalog",-654793619),new cljs.core.Keyword(null,"grouping-fn","grouping-fn",-1152328338),new cljs.core.Keyword("onyx.core","fn","onyx.core/fn",2108604083),new cljs.core.Keyword("onyx.core","windows","onyx.core/windows",-1130597258),new cljs.core.Keyword("onyx.core","task","onyx.core/task",1756945878),new cljs.core.Keyword("onyx.core","task-id","onyx.core/task-id",2120719255),new cljs.core.Keyword("onyx.core","lifecycles","onyx.core/lifecycles",150880888),new cljs.core.Keyword("onyx.core","compiled","onyx.core/compiled",1995915353),new cljs.core.Keyword("onyx.core","triggers","onyx.core/triggers",1971263327)],[workflow,catalog_entry,flow_conditions,catalog,onyx.peer.grouping.task_map__GT_grouping_fn.call(null,catalog_entry),onyx_local_rt.impl.precompile_onyx_fn.call(null,catalog_entry),cljs.core.filterv.call(null,((function (children,map__63526,map__63526__$1,job,workflow,catalog,flow_conditions,lifecycles,windows,triggers){
return (function (p1__63522_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("window","task","window/task",-720839305).cljs$core$IFn$_invoke$arity$1(p1__63522_SHARP_),task_name);
});})(children,map__63526,map__63526__$1,job,workflow,catalog,flow_conditions,lifecycles,windows,triggers))
,windows),task_name,task_name,lifecycles,cljs.core.PersistentArrayMap.EMPTY,triggers])))))),children)], null);
if(cljs.core.seq.call(null,children)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([task_name,base]);
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([task_name,cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),cljs.core.PersistentVector.EMPTY)]);
}
});
onyx_local_rt.impl.init_task_states = (function onyx_local_rt$impl$init_task_states(p__63528,graph){
var map__63531 = p__63528;
var map__63531__$1 = ((((!((map__63531 == null)))?((((map__63531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63531):map__63531);
var job = map__63531__$1;
var workflow = cljs.core.get.call(null,map__63531__$1,new cljs.core.Keyword(null,"workflow","workflow",-640694607));
var catalog = cljs.core.get.call(null,map__63531__$1,new cljs.core.Keyword(null,"catalog","catalog",-439057154));
var tasks = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,workflow);
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (tasks,map__63531,map__63531__$1,job,workflow,catalog){
return (function (task_name){
var catalog_entry = onyx_local_rt.impl.find_task.call(null,catalog,task_name);
return onyx_local_rt.impl.init_task_state.call(null,job,graph,task_name,catalog_entry);
});})(tasks,map__63531,map__63531__$1,job,workflow,catalog))
,tasks));
});
onyx_local_rt.impl.integrate_task_updates = (function onyx_local_rt$impl$integrate_task_updates(env,action){
return cljs.core.reduce.call(null,(function (result,task_name){
var task_state = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_name], null));
var rets = onyx_local_rt.impl.apply_action.call(null,env,task_state,action);
var merge_f = cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.into);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_name], null),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(rets)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending-writes","pending-writes",-275016241)], null),merge_f,new cljs.core.Keyword(null,"writes","writes",-102226269).cljs$core$IFn$_invoke$arity$1(rets));
}),env,new cljs.core.Keyword(null,"sorted-tasks","sorted-tasks",1984680796).cljs$core$IFn$_invoke$arity$1(env));
});
onyx_local_rt.impl.transfer_pending_writes = (function onyx_local_rt$impl$transfer_pending_writes(env){
var writes = new cljs.core.Keyword(null,"pending-writes","pending-writes",-275016241).cljs$core$IFn$_invoke$arity$1(env);
return cljs.core.reduce_kv.call(null,((function (writes){
return (function (result,task_name,segments){
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_name,new cljs.core.Keyword(null,"inbox","inbox",1888669443)], null),cljs.core.into,segments);
});})(writes))
,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"pending-writes","pending-writes",-275016241),cljs.core.PersistentArrayMap.EMPTY),writes);
});
onyx_local_rt.impl.transition_action_sequence = (function onyx_local_rt$impl$transition_action_sequence(env,action){
if((cljs.core._EQ_.call(null,action,new cljs.core.Keyword("lifecycle","start-task?","lifecycle/start-task?",1478637931))) && (!(cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"start-task?","start-task?",877600977),cljs.core.vals.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(env))))))){
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"next-action","next-action",1541348716),new cljs.core.Keyword("lifecycle","start-task?","lifecycle/start-task?",1478637931));
} else {
return cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"next-action","next-action",1541348716),onyx_local_rt.impl.action_sequence.call(null,action));
}
});

//# sourceMappingURL=impl.js.map?rel=1506321311682