// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.types');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.Route = (function (flow,exclusions,post_transformation,action,pred_failure,__meta,__extmap,__hash){
this.flow = flow;
this.exclusions = exclusions;
this.post_transformation = post_transformation;
this.action = action;
this.pred_failure = pred_failure;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62723,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62725 = k62723;
var G__62725__$1 = (((G__62725 instanceof cljs.core.Keyword))?G__62725.fqn:null);
switch (G__62725__$1) {
case "flow":
return self__.flow;

break;
case "exclusions":
return self__.exclusions;

break;
case "post-transformation":
return self__.post_transformation;

break;
case "action":
return self__.action;

break;
case "pred-failure":
return self__.pred_failure;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62723,else__62032__auto__);

}
});

onyx.types.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.Route{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flow","flow",590489032),self__.flow],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"exclusions","exclusions",1098729003),self__.exclusions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-transformation","post-transformation",-2056337867),self__.post_transformation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"action","action",-811238024),self__.action],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-failure","pred-failure",1645344004),self__.pred_failure],null))], null),self__.__extmap));
});

onyx.types.Route.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62722){
var self__ = this;
var G__62722__$1 = this;
return (new cljs.core.RecordIter((0),G__62722__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"exclusions","exclusions",1098729003),new cljs.core.Keyword(null,"post-transformation","post-transformation",-2056337867),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"pred-failure","pred-failure",1645344004)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.Route(self__.flow,self__.exclusions,self__.post_transformation,self__.action,self__.pred_failure,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred-failure","pred-failure",1645344004),null,new cljs.core.Keyword(null,"flow","flow",590489032),null,new cljs.core.Keyword(null,"exclusions","exclusions",1098729003),null,new cljs.core.Keyword(null,"post-transformation","post-transformation",-2056337867),null,new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.Route(self__.flow,self__.exclusions,self__.post_transformation,self__.action,self__.pred_failure,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62722){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62726 = cljs.core.keyword_identical_QMARK_;
var expr__62727 = k__62037__auto__;
if(cljs.core.truth_(pred__62726.call(null,new cljs.core.Keyword(null,"flow","flow",590489032),expr__62727))){
return (new onyx.types.Route(G__62722,self__.exclusions,self__.post_transformation,self__.action,self__.pred_failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62726.call(null,new cljs.core.Keyword(null,"exclusions","exclusions",1098729003),expr__62727))){
return (new onyx.types.Route(self__.flow,G__62722,self__.post_transformation,self__.action,self__.pred_failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62726.call(null,new cljs.core.Keyword(null,"post-transformation","post-transformation",-2056337867),expr__62727))){
return (new onyx.types.Route(self__.flow,self__.exclusions,G__62722,self__.action,self__.pred_failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62726.call(null,new cljs.core.Keyword(null,"action","action",-811238024),expr__62727))){
return (new onyx.types.Route(self__.flow,self__.exclusions,self__.post_transformation,G__62722,self__.pred_failure,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62726.call(null,new cljs.core.Keyword(null,"pred-failure","pred-failure",1645344004),expr__62727))){
return (new onyx.types.Route(self__.flow,self__.exclusions,self__.post_transformation,self__.action,G__62722,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.Route(self__.flow,self__.exclusions,self__.post_transformation,self__.action,self__.pred_failure,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62722),null));
}
}
}
}
}
});

onyx.types.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flow","flow",590489032),self__.flow],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"exclusions","exclusions",1098729003),self__.exclusions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-transformation","post-transformation",-2056337867),self__.post_transformation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"action","action",-811238024),self__.action],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-failure","pred-failure",1645344004),self__.pred_failure],null))], null),self__.__extmap));
});

onyx.types.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62722){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.Route(self__.flow,self__.exclusions,self__.post_transformation,self__.action,self__.pred_failure,G__62722,self__.__extmap,self__.__hash));
});

onyx.types.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flow","flow",-2063946737,null),new cljs.core.Symbol(null,"exclusions","exclusions",-1555706766,null),new cljs.core.Symbol(null,"post-transformation","post-transformation",-415806340,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"pred-failure","pred-failure",-1009091765,null)], null);
});

onyx.types.Route.cljs$lang$type = true;

onyx.types.Route.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/Route");
});

onyx.types.Route.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/Route");
});

onyx.types.__GT_Route = (function onyx$types$__GT_Route(flow,exclusions,post_transformation,action,pred_failure){
return (new onyx.types.Route(flow,exclusions,post_transformation,action,pred_failure,null,null,null));
});

onyx.types.map__GT_Route = (function onyx$types$map__GT_Route(G__62724){
return (new onyx.types.Route(new cljs.core.Keyword(null,"flow","flow",590489032).cljs$core$IFn$_invoke$arity$1(G__62724),new cljs.core.Keyword(null,"exclusions","exclusions",1098729003).cljs$core$IFn$_invoke$arity$1(G__62724),new cljs.core.Keyword(null,"post-transformation","post-transformation",-2056337867).cljs$core$IFn$_invoke$arity$1(G__62724),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__62724),new cljs.core.Keyword(null,"pred-failure","pred-failure",1645344004).cljs$core$IFn$_invoke$arity$1(G__62724),null,cljs.core.dissoc.call(null,G__62724,new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"exclusions","exclusions",1098729003),new cljs.core.Keyword(null,"post-transformation","post-transformation",-2056337867),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"pred-failure","pred-failure",1645344004)),null));
});

onyx.types.message_id = (0);
onyx.types.barrier_id = (1);
onyx.types.heartbeat_id = (2);
onyx.types.ready_id = (3);
onyx.types.ready_reply_id = (4);
onyx.types.max_control_message_size = (500);
onyx.types.message = (function onyx$types$message(replica_version,short_id,payload){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),onyx.types.message_id,new cljs.core.Keyword(null,"replica-version","replica-version",2086317123),replica_version,new cljs.core.Keyword(null,"short-id","short-id",899564922),short_id,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null);
});
onyx.types.barrier = (function onyx$types$barrier(replica_version,epoch,short_id){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),onyx.types.barrier_id,new cljs.core.Keyword(null,"replica-version","replica-version",2086317123),replica_version,new cljs.core.Keyword(null,"epoch","epoch",1435633666),epoch,new cljs.core.Keyword(null,"short-id","short-id",899564922),short_id], null);
});
onyx.types.ready = (function onyx$types$ready(replica_version,src_peer_id,short_id){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),onyx.types.ready_id,new cljs.core.Keyword(null,"replica-version","replica-version",2086317123),replica_version,new cljs.core.Keyword(null,"src-peer-id","src-peer-id",-1346010875),src_peer_id,new cljs.core.Keyword(null,"short-id","short-id",899564922),short_id], null);
});
onyx.types.ready_reply = (function onyx$types$ready_reply(replica_version,src_peer_id,dst_peer_id,session_id,short_id){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),onyx.types.ready_reply_id,new cljs.core.Keyword(null,"replica-version","replica-version",2086317123),replica_version,new cljs.core.Keyword(null,"src-peer-id","src-peer-id",-1346010875),src_peer_id,new cljs.core.Keyword(null,"dst-peer-id","dst-peer-id",1607951576),dst_peer_id,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),session_id,new cljs.core.Keyword(null,"short-id","short-id",899564922),short_id], null);
});
onyx.types.heartbeat = (function onyx$types$heartbeat(replica_version,epoch,src_peer_id,dst_peer_id,session_id,short_id){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),onyx.types.heartbeat_id,new cljs.core.Keyword(null,"replica-version","replica-version",2086317123),replica_version,new cljs.core.Keyword(null,"epoch","epoch",1435633666),epoch,new cljs.core.Keyword(null,"src-peer-id","src-peer-id",-1346010875),src_peer_id,new cljs.core.Keyword(null,"dst-peer-id","dst-peer-id",1607951576),dst_peer_id,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),session_id,new cljs.core.Keyword(null,"short-id","short-id",899564922),short_id], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.Results = (function (tree,segments,retries,__meta,__extmap,__hash){
this.tree = tree;
this.segments = segments;
this.retries = retries;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.Results.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.Results.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62731,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62733 = k62731;
var G__62733__$1 = (((G__62733 instanceof cljs.core.Keyword))?G__62733.fqn:null);
switch (G__62733__$1) {
case "tree":
return self__.tree;

break;
case "segments":
return self__.segments;

break;
case "retries":
return self__.retries;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62731,else__62032__auto__);

}
});

onyx.types.Results.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.Results{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tree","tree",-196312028),self__.tree],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retries","retries",1888092808),self__.retries],null))], null),self__.__extmap));
});

onyx.types.Results.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.Results.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62730){
var self__ = this;
var G__62730__$1 = this;
return (new cljs.core.RecordIter((0),G__62730__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.Keyword(null,"retries","retries",1888092808)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.Results.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.Results.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.Results(self__.tree,self__.segments,self__.retries,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.Results.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.Results.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.Results.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.Results.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tree","tree",-196312028),null,new cljs.core.Keyword(null,"retries","retries",1888092808),null,new cljs.core.Keyword(null,"segments","segments",1937535949),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.Results(self__.tree,self__.segments,self__.retries,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.Results.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62730){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62734 = cljs.core.keyword_identical_QMARK_;
var expr__62735 = k__62037__auto__;
if(cljs.core.truth_(pred__62734.call(null,new cljs.core.Keyword(null,"tree","tree",-196312028),expr__62735))){
return (new onyx.types.Results(G__62730,self__.segments,self__.retries,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62734.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949),expr__62735))){
return (new onyx.types.Results(self__.tree,G__62730,self__.retries,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62734.call(null,new cljs.core.Keyword(null,"retries","retries",1888092808),expr__62735))){
return (new onyx.types.Results(self__.tree,self__.segments,G__62730,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.Results(self__.tree,self__.segments,self__.retries,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62730),null));
}
}
}
});

onyx.types.Results.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tree","tree",-196312028),self__.tree],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retries","retries",1888092808),self__.retries],null))], null),self__.__extmap));
});

onyx.types.Results.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62730){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.Results(self__.tree,self__.segments,self__.retries,G__62730,self__.__extmap,self__.__hash));
});

onyx.types.Results.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.Results.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"segments","segments",-716899820,null),new cljs.core.Symbol(null,"retries","retries",-766342961,null)], null);
});

onyx.types.Results.cljs$lang$type = true;

onyx.types.Results.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/Results");
});

onyx.types.Results.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/Results");
});

onyx.types.__GT_Results = (function onyx$types$__GT_Results(tree,segments,retries){
return (new onyx.types.Results(tree,segments,retries,null,null,null));
});

onyx.types.map__GT_Results = (function onyx$types$map__GT_Results(G__62732){
return (new onyx.types.Results(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(G__62732),new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(G__62732),new cljs.core.Keyword(null,"retries","retries",1888092808).cljs$core$IFn$_invoke$arity$1(G__62732),null,cljs.core.dissoc.call(null,G__62732,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.Keyword(null,"retries","retries",1888092808)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.Result = (function (root,leaves,__meta,__extmap,__hash){
this.root = root;
this.leaves = leaves;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.Result.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.Result.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62739,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62741 = k62739;
var G__62741__$1 = (((G__62741 instanceof cljs.core.Keyword))?G__62741.fqn:null);
switch (G__62741__$1) {
case "root":
return self__.root;

break;
case "leaves":
return self__.leaves;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62739,else__62032__auto__);

}
});

onyx.types.Result.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.Result{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root","root",-448657453),self__.root],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leaves","leaves",-2143630574),self__.leaves],null))], null),self__.__extmap));
});

onyx.types.Result.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.Result.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62738){
var self__ = this;
var G__62738__$1 = this;
return (new cljs.core.RecordIter((0),G__62738__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"leaves","leaves",-2143630574)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.Result.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.Result.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.Result(self__.root,self__.leaves,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.Result.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.Result.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.Result.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.Result.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"leaves","leaves",-2143630574),null,new cljs.core.Keyword(null,"root","root",-448657453),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.Result(self__.root,self__.leaves,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.Result.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62738){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62742 = cljs.core.keyword_identical_QMARK_;
var expr__62743 = k__62037__auto__;
if(cljs.core.truth_(pred__62742.call(null,new cljs.core.Keyword(null,"root","root",-448657453),expr__62743))){
return (new onyx.types.Result(G__62738,self__.leaves,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62742.call(null,new cljs.core.Keyword(null,"leaves","leaves",-2143630574),expr__62743))){
return (new onyx.types.Result(self__.root,G__62738,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.Result(self__.root,self__.leaves,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62738),null));
}
}
});

onyx.types.Result.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root","root",-448657453),self__.root],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leaves","leaves",-2143630574),self__.leaves],null))], null),self__.__extmap));
});

onyx.types.Result.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62738){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.Result(self__.root,self__.leaves,G__62738,self__.__extmap,self__.__hash));
});

onyx.types.Result.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.Result.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"leaves","leaves",-503099047,null)], null);
});

onyx.types.Result.cljs$lang$type = true;

onyx.types.Result.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/Result");
});

onyx.types.Result.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/Result");
});

onyx.types.__GT_Result = (function onyx$types$__GT_Result(root,leaves){
return (new onyx.types.Result(root,leaves,null,null,null));
});

onyx.types.map__GT_Result = (function onyx$types$map__GT_Result(G__62740){
return (new onyx.types.Result(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(G__62740),new cljs.core.Keyword(null,"leaves","leaves",-2143630574).cljs$core$IFn$_invoke$arity$1(G__62740),null,cljs.core.dissoc.call(null,G__62740,new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"leaves","leaves",-2143630574)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.TriggerState = (function (window_id,refinement,on,sync,fire_all_extents_QMARK_,state,pred,watermark_percentage,doc,period,threshold,sync_fn,id,idx,init_state,create_state_update,apply_state_update,pre_evictor,post_evictor,state_context_trigger_QMARK_,state_context_window_QMARK_,__meta,__extmap,__hash){
this.window_id = window_id;
this.refinement = refinement;
this.on = on;
this.sync = sync;
this.fire_all_extents_QMARK_ = fire_all_extents_QMARK_;
this.state = state;
this.pred = pred;
this.watermark_percentage = watermark_percentage;
this.doc = doc;
this.period = period;
this.threshold = threshold;
this.sync_fn = sync_fn;
this.id = id;
this.idx = idx;
this.init_state = init_state;
this.create_state_update = create_state_update;
this.apply_state_update = apply_state_update;
this.pre_evictor = pre_evictor;
this.post_evictor = post_evictor;
this.state_context_trigger_QMARK_ = state_context_trigger_QMARK_;
this.state_context_window_QMARK_ = state_context_window_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.TriggerState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.TriggerState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62747,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62749 = k62747;
var G__62749__$1 = (((G__62749 instanceof cljs.core.Keyword))?G__62749.fqn:null);
switch (G__62749__$1) {
case "pred":
return self__.pred;

break;
case "post-evictor":
return self__.post_evictor;

break;
case "sync-fn":
return self__.sync_fn;

break;
case "create-state-update":
return self__.create_state_update;

break;
case "init-state":
return self__.init_state;

break;
case "state":
return self__.state;

break;
case "sync":
return self__.sync;

break;
case "threshold":
return self__.threshold;

break;
case "pre-evictor":
return self__.pre_evictor;

break;
case "apply-state-update":
return self__.apply_state_update;

break;
case "fire-all-extents?":
return self__.fire_all_extents_QMARK_;

break;
case "state-context-window?":
return self__.state_context_window_QMARK_;

break;
case "refinement":
return self__.refinement;

break;
case "state-context-trigger?":
return self__.state_context_trigger_QMARK_;

break;
case "id":
return self__.id;

break;
case "window-id":
return self__.window_id;

break;
case "on":
return self__.on;

break;
case "idx":
return self__.idx;

break;
case "period":
return self__.period;

break;
case "doc":
return self__.doc;

break;
case "watermark-percentage":
return self__.watermark_percentage;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62747,else__62032__auto__);

}
});

onyx.types.TriggerState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.TriggerState{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-id","window-id",-1562031145),self__.window_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refinement","refinement",-140354413),self__.refinement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on","on",173873944),self__.on],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sync","sync",-624148946),self__.sync],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fire-all-extents?","fire-all-extents?",-1463064911),self__.fire_all_extents_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watermark-percentage","watermark-percentage",155507198),self__.watermark_percentage],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"period","period",-352129191),self__.period],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"threshold","threshold",204221583),self__.threshold],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),self__.sync_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-state","init-state",1450863212),self__.init_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),self__.create_state_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),self__.apply_state_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-evictor","pre-evictor",-1843414736),self__.pre_evictor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-evictor","post-evictor",1538193448),self__.post_evictor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-context-trigger?","state-context-trigger?",-634792685),self__.state_context_trigger_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-context-window?","state-context-window?",-1352172846),self__.state_context_window_QMARK_],null))], null),self__.__extmap));
});

onyx.types.TriggerState.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.TriggerState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62746){
var self__ = this;
var G__62746__$1 = this;
return (new cljs.core.RecordIter((0),G__62746__$1,21,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-id","window-id",-1562031145),new cljs.core.Keyword(null,"refinement","refinement",-140354413),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"sync","sync",-624148946),new cljs.core.Keyword(null,"fire-all-extents?","fire-all-extents?",-1463064911),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"watermark-percentage","watermark-percentage",155507198),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"threshold","threshold",204221583),new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),new cljs.core.Keyword(null,"pre-evictor","pre-evictor",-1843414736),new cljs.core.Keyword(null,"post-evictor","post-evictor",1538193448),new cljs.core.Keyword(null,"state-context-trigger?","state-context-trigger?",-634792685),new cljs.core.Keyword(null,"state-context-window?","state-context-window?",-1352172846)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.TriggerState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.TriggerState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.TriggerState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (21 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.TriggerState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.TriggerState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.TriggerState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"post-evictor","post-evictor",1538193448),null,new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),null,new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"sync","sync",-624148946),null,new cljs.core.Keyword(null,"threshold","threshold",204221583),null,new cljs.core.Keyword(null,"pre-evictor","pre-evictor",-1843414736),null,new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),null,new cljs.core.Keyword(null,"fire-all-extents?","fire-all-extents?",-1463064911),null,new cljs.core.Keyword(null,"state-context-window?","state-context-window?",-1352172846),null,new cljs.core.Keyword(null,"refinement","refinement",-140354413),null,new cljs.core.Keyword(null,"state-context-trigger?","state-context-trigger?",-634792685),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"window-id","window-id",-1562031145),null,new cljs.core.Keyword(null,"on","on",173873944),null,new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"period","period",-352129191),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"watermark-percentage","watermark-percentage",155507198),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.TriggerState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62746){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62750 = cljs.core.keyword_identical_QMARK_;
var expr__62751 = k__62037__auto__;
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"window-id","window-id",-1562031145),expr__62751))){
return (new onyx.types.TriggerState(G__62746,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"refinement","refinement",-140354413),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,G__62746,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"on","on",173873944),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,G__62746,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"sync","sync",-624148946),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,G__62746,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"fire-all-extents?","fire-all-extents?",-1463064911),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,G__62746,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,G__62746,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,G__62746,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"watermark-percentage","watermark-percentage",155507198),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,G__62746,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,G__62746,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"period","period",-352129191),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,G__62746,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"threshold","threshold",204221583),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,G__62746,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,G__62746,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,G__62746,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,G__62746,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,G__62746,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,G__62746,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,G__62746,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"pre-evictor","pre-evictor",-1843414736),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,G__62746,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"post-evictor","post-evictor",1538193448),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,G__62746,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"state-context-trigger?","state-context-trigger?",-634792685),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,G__62746,self__.state_context_window_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62750.call(null,new cljs.core.Keyword(null,"state-context-window?","state-context-window?",-1352172846),expr__62751))){
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,G__62746,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62746),null));
}
}
}
}
}
}
}
}
}
}
}
}
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

onyx.types.TriggerState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-id","window-id",-1562031145),self__.window_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refinement","refinement",-140354413),self__.refinement],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on","on",173873944),self__.on],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sync","sync",-624148946),self__.sync],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fire-all-extents?","fire-all-extents?",-1463064911),self__.fire_all_extents_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watermark-percentage","watermark-percentage",155507198),self__.watermark_percentage],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"period","period",-352129191),self__.period],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"threshold","threshold",204221583),self__.threshold],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),self__.sync_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-state","init-state",1450863212),self__.init_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),self__.create_state_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),self__.apply_state_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre-evictor","pre-evictor",-1843414736),self__.pre_evictor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-evictor","post-evictor",1538193448),self__.post_evictor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-context-trigger?","state-context-trigger?",-634792685),self__.state_context_trigger_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-context-window?","state-context-window?",-1352172846),self__.state_context_window_QMARK_],null))], null),self__.__extmap));
});

onyx.types.TriggerState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62746){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.TriggerState(self__.window_id,self__.refinement,self__.on,self__.sync,self__.fire_all_extents_QMARK_,self__.state,self__.pred,self__.watermark_percentage,self__.doc,self__.period,self__.threshold,self__.sync_fn,self__.id,self__.idx,self__.init_state,self__.create_state_update,self__.apply_state_update,self__.pre_evictor,self__.post_evictor,self__.state_context_trigger_QMARK_,self__.state_context_window_QMARK_,G__62746,self__.__extmap,self__.__hash));
});

onyx.types.TriggerState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.TriggerState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"window-id","window-id",78500382,null),new cljs.core.Symbol(null,"refinement","refinement",1500177114,null),new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Symbol(null,"sync","sync",1016382581,null),new cljs.core.Symbol(null,"fire-all-extents?","fire-all-extents?",177466616,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"watermark-percentage","watermark-percentage",1796038725,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.Symbol(null,"period","period",1288402336,null),new cljs.core.Symbol(null,"threshold","threshold",1844753110,null),new cljs.core.Symbol(null,"sync-fn","sync-fn",-1287931727,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"init-state","init-state",-1203572557,null),new cljs.core.Symbol(null,"create-state-update","create-state-update",1628864114,null),new cljs.core.Symbol(null,"apply-state-update","apply-state-update",14097847,null),new cljs.core.Symbol(null,"pre-evictor","pre-evictor",-202883209,null),new cljs.core.Symbol(null,"post-evictor","post-evictor",-1116242321,null),new cljs.core.Symbol(null,"state-context-trigger?","state-context-trigger?",1005738842,null),new cljs.core.Symbol(null,"state-context-window?","state-context-window?",288358681,null)], null);
});

onyx.types.TriggerState.cljs$lang$type = true;

onyx.types.TriggerState.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/TriggerState");
});

onyx.types.TriggerState.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/TriggerState");
});

onyx.types.__GT_TriggerState = (function onyx$types$__GT_TriggerState(window_id,refinement,on,sync,fire_all_extents_QMARK_,state,pred,watermark_percentage,doc,period,threshold,sync_fn,id,idx,init_state,create_state_update,apply_state_update,pre_evictor,post_evictor,state_context_trigger_QMARK_,state_context_window_QMARK_){
return (new onyx.types.TriggerState(window_id,refinement,on,sync,fire_all_extents_QMARK_,state,pred,watermark_percentage,doc,period,threshold,sync_fn,id,idx,init_state,create_state_update,apply_state_update,pre_evictor,post_evictor,state_context_trigger_QMARK_,state_context_window_QMARK_,null,null,null));
});

onyx.types.map__GT_TriggerState = (function onyx$types$map__GT_TriggerState(G__62748){
return (new onyx.types.TriggerState(new cljs.core.Keyword(null,"window-id","window-id",-1562031145).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"refinement","refinement",-140354413).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"sync","sync",-624148946).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"fire-all-extents?","fire-all-extents?",-1463064911).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"watermark-percentage","watermark-percentage",155507198).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"threshold","threshold",204221583).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"init-state","init-state",1450863212).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"pre-evictor","pre-evictor",-1843414736).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"post-evictor","post-evictor",1538193448).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"state-context-trigger?","state-context-trigger?",-634792685).cljs$core$IFn$_invoke$arity$1(G__62748),new cljs.core.Keyword(null,"state-context-window?","state-context-window?",-1352172846).cljs$core$IFn$_invoke$arity$1(G__62748),null,cljs.core.dissoc.call(null,G__62748,new cljs.core.Keyword(null,"window-id","window-id",-1562031145),new cljs.core.Keyword(null,"refinement","refinement",-140354413),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"sync","sync",-624148946),new cljs.core.Keyword(null,"fire-all-extents?","fire-all-extents?",-1463064911),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"watermark-percentage","watermark-percentage",155507198),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"threshold","threshold",204221583),new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),new cljs.core.Keyword(null,"pre-evictor","pre-evictor",-1843414736),new cljs.core.Keyword(null,"post-evictor","post-evictor",1538193448),new cljs.core.Keyword(null,"state-context-trigger?","state-context-trigger?",-634792685),new cljs.core.Keyword(null,"state-context-window?","state-context-window?",-1352172846)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.StateEvent = (function (event_type,task_event,segment,grouped_QMARK_,group_key,lower_bound,upper_bound,log_type,trigger_update,aggregation_update,window,next_state,__meta,__extmap,__hash){
this.event_type = event_type;
this.task_event = task_event;
this.segment = segment;
this.grouped_QMARK_ = grouped_QMARK_;
this.group_key = group_key;
this.lower_bound = lower_bound;
this.upper_bound = upper_bound;
this.log_type = log_type;
this.trigger_update = trigger_update;
this.aggregation_update = aggregation_update;
this.window = window;
this.next_state = next_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.StateEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.StateEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62755,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62757 = k62755;
var G__62757__$1 = (((G__62757 instanceof cljs.core.Keyword))?G__62757.fqn:null);
switch (G__62757__$1) {
case "trigger-update":
return self__.trigger_update;

break;
case "next-state":
return self__.next_state;

break;
case "lower-bound":
return self__.lower_bound;

break;
case "group-key":
return self__.group_key;

break;
case "aggregation-update":
return self__.aggregation_update;

break;
case "task-event":
return self__.task_event;

break;
case "window":
return self__.window;

break;
case "log-type":
return self__.log_type;

break;
case "upper-bound":
return self__.upper_bound;

break;
case "segment":
return self__.segment;

break;
case "grouped?":
return self__.grouped_QMARK_;

break;
case "event-type":
return self__.event_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62755,else__62032__auto__);

}
});

onyx.types.StateEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.StateEvent{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-type","event-type",319722813),self__.event_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task-event","task-event",1730573741),self__.task_event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grouped?","grouped?",531080948),self__.grouped_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"group-key","group-key",742570475),self__.group_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lower-bound","lower-bound",153632489),self__.lower_bound],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816),self__.upper_bound],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"log-type","log-type",2069757168),self__.log_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trigger-update","trigger-update",-2125461343),self__.trigger_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aggregation-update","aggregation-update",-1473179925),self__.aggregation_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-state","next-state",-1428728252),self__.next_state],null))], null),self__.__extmap));
});

onyx.types.StateEvent.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.StateEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62754){
var self__ = this;
var G__62754__$1 = this;
return (new cljs.core.RecordIter((0),G__62754__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"task-event","task-event",1730573741),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"grouped?","grouped?",531080948),new cljs.core.Keyword(null,"group-key","group-key",742570475),new cljs.core.Keyword(null,"lower-bound","lower-bound",153632489),new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816),new cljs.core.Keyword(null,"log-type","log-type",2069757168),new cljs.core.Keyword(null,"trigger-update","trigger-update",-2125461343),new cljs.core.Keyword(null,"aggregation-update","aggregation-update",-1473179925),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"next-state","next-state",-1428728252)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.StateEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.StateEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.StateEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.StateEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.StateEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.StateEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"trigger-update","trigger-update",-2125461343),null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),null,new cljs.core.Keyword(null,"lower-bound","lower-bound",153632489),null,new cljs.core.Keyword(null,"group-key","group-key",742570475),null,new cljs.core.Keyword(null,"aggregation-update","aggregation-update",-1473179925),null,new cljs.core.Keyword(null,"task-event","task-event",1730573741),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"log-type","log-type",2069757168),null,new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816),null,new cljs.core.Keyword(null,"segment","segment",-964921196),null,new cljs.core.Keyword(null,"grouped?","grouped?",531080948),null,new cljs.core.Keyword(null,"event-type","event-type",319722813),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.StateEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62754){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62758 = cljs.core.keyword_identical_QMARK_;
var expr__62759 = k__62037__auto__;
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"event-type","event-type",319722813),expr__62759))){
return (new onyx.types.StateEvent(G__62754,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"task-event","task-event",1730573741),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,G__62754,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,G__62754,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"grouped?","grouped?",531080948),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,G__62754,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"group-key","group-key",742570475),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,G__62754,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"lower-bound","lower-bound",153632489),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,G__62754,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,G__62754,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"log-type","log-type",2069757168),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,G__62754,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"trigger-update","trigger-update",-2125461343),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,G__62754,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"aggregation-update","aggregation-update",-1473179925),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,G__62754,self__.window,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"window","window",724519534),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,G__62754,self__.next_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62758.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),expr__62759))){
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,G__62754,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62754),null));
}
}
}
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

onyx.types.StateEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-type","event-type",319722813),self__.event_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task-event","task-event",1730573741),self__.task_event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grouped?","grouped?",531080948),self__.grouped_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"group-key","group-key",742570475),self__.group_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lower-bound","lower-bound",153632489),self__.lower_bound],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816),self__.upper_bound],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"log-type","log-type",2069757168),self__.log_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trigger-update","trigger-update",-2125461343),self__.trigger_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aggregation-update","aggregation-update",-1473179925),self__.aggregation_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-state","next-state",-1428728252),self__.next_state],null))], null),self__.__extmap));
});

onyx.types.StateEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62754){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.StateEvent(self__.event_type,self__.task_event,self__.segment,self__.grouped_QMARK_,self__.group_key,self__.lower_bound,self__.upper_bound,self__.log_type,self__.trigger_update,self__.aggregation_update,self__.window,self__.next_state,G__62754,self__.__extmap,self__.__hash));
});

onyx.types.StateEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.StateEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.Symbol(null,"task-event","task-event",-923862028,null),new cljs.core.Symbol(null,"segment","segment",675610331,null),new cljs.core.Symbol(null,"grouped?","grouped?",-2123354821,null),new cljs.core.Symbol(null,"group-key","group-key",-1911865294,null),new cljs.core.Symbol(null,"lower-bound","lower-bound",1794164016,null),new cljs.core.Symbol(null,"upper-bound","upper-bound",-1091542953,null),new cljs.core.Symbol(null,"log-type","log-type",-584678601,null),new cljs.core.Symbol(null,"trigger-update","trigger-update",-484929816,null),new cljs.core.Symbol(null,"aggregation-update","aggregation-update",167351602,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null);
});

onyx.types.StateEvent.cljs$lang$type = true;

onyx.types.StateEvent.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/StateEvent");
});

onyx.types.StateEvent.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/StateEvent");
});

onyx.types.__GT_StateEvent = (function onyx$types$__GT_StateEvent(event_type,task_event,segment,grouped_QMARK_,group_key,lower_bound,upper_bound,log_type,trigger_update,aggregation_update,window,next_state){
return (new onyx.types.StateEvent(event_type,task_event,segment,grouped_QMARK_,group_key,lower_bound,upper_bound,log_type,trigger_update,aggregation_update,window,next_state,null,null,null));
});

onyx.types.map__GT_StateEvent = (function onyx$types$map__GT_StateEvent(G__62756){
return (new onyx.types.StateEvent(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"task-event","task-event",1730573741).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"grouped?","grouped?",531080948).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"group-key","group-key",742570475).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"lower-bound","lower-bound",153632489).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"log-type","log-type",2069757168).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"trigger-update","trigger-update",-2125461343).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"aggregation-update","aggregation-update",-1473179925).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(G__62756),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(G__62756),null,cljs.core.dissoc.call(null,G__62756,new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"task-event","task-event",1730573741),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"grouped?","grouped?",531080948),new cljs.core.Keyword(null,"group-key","group-key",742570475),new cljs.core.Keyword(null,"lower-bound","lower-bound",153632489),new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816),new cljs.core.Keyword(null,"log-type","log-type",2069757168),new cljs.core.Keyword(null,"trigger-update","trigger-update",-2125461343),new cljs.core.Keyword(null,"aggregation-update","aggregation-update",-1473179925),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"next-state","next-state",-1428728252)),null));
});

onyx.types.new_state_event = (function onyx$types$new_state_event(event_type,task_event){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type,new cljs.core.Keyword(null,"task-event","task-event",1730573741),task_event], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.Link = (function (link,timestamp,__meta,__extmap,__hash){
this.link = link;
this.timestamp = timestamp;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.Link.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.Link.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62763,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62765 = k62763;
var G__62765__$1 = (((G__62765 instanceof cljs.core.Keyword))?G__62765.fqn:null);
switch (G__62765__$1) {
case "link":
return self__.link;

break;
case "timestamp":
return self__.timestamp;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62763,else__62032__auto__);

}
});

onyx.types.Link.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.Link{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"link","link",-1769163468),self__.link],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timestamp","timestamp",579478971),self__.timestamp],null))], null),self__.__extmap));
});

onyx.types.Link.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.Link.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62762){
var self__ = this;
var G__62762__$1 = this;
return (new cljs.core.RecordIter((0),G__62762__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.Link.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.Link.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.Link(self__.link,self__.timestamp,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.Link.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.Link.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.Link.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.Link.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"link","link",-1769163468),null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.Link(self__.link,self__.timestamp,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.Link.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62762){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62766 = cljs.core.keyword_identical_QMARK_;
var expr__62767 = k__62037__auto__;
if(cljs.core.truth_(pred__62766.call(null,new cljs.core.Keyword(null,"link","link",-1769163468),expr__62767))){
return (new onyx.types.Link(G__62762,self__.timestamp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62766.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),expr__62767))){
return (new onyx.types.Link(self__.link,G__62762,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.Link(self__.link,self__.timestamp,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62762),null));
}
}
});

onyx.types.Link.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"link","link",-1769163468),self__.link],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timestamp","timestamp",579478971),self__.timestamp],null))], null),self__.__extmap));
});

onyx.types.Link.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62762){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.Link(self__.link,self__.timestamp,G__62762,self__.__extmap,self__.__hash));
});

onyx.types.Link.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.Link.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"link","link",-128631941,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null)], null);
});

onyx.types.Link.cljs$lang$type = true;

onyx.types.Link.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/Link");
});

onyx.types.Link.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/Link");
});

onyx.types.__GT_Link = (function onyx$types$__GT_Link(link,timestamp){
return (new onyx.types.Link(link,timestamp,null,null,null));
});

onyx.types.map__GT_Link = (function onyx$types$map__GT_Link(G__62764){
return (new onyx.types.Link(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(G__62764),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(G__62764),null,cljs.core.dissoc.call(null,G__62764,new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.MonitorEvent = (function (event,__meta,__extmap,__hash){
this.event = event;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.MonitorEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.MonitorEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62771,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62773 = k62771;
var G__62773__$1 = (((G__62773 instanceof cljs.core.Keyword))?G__62773.fqn:null);
switch (G__62773__$1) {
case "event":
return self__.event;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62771,else__62032__auto__);

}
});

onyx.types.MonitorEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.MonitorEvent{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event","event",301435442),self__.event],null))], null),self__.__extmap));
});

onyx.types.MonitorEvent.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.MonitorEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62770){
var self__ = this;
var G__62770__$1 = this;
return (new cljs.core.RecordIter((0),G__62770__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.MonitorEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.MonitorEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.MonitorEvent(self__.event,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.MonitorEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.MonitorEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.MonitorEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.MonitorEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.MonitorEvent(self__.event,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.MonitorEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62770){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62774 = cljs.core.keyword_identical_QMARK_;
var expr__62775 = k__62037__auto__;
if(cljs.core.truth_(pred__62774.call(null,new cljs.core.Keyword(null,"event","event",301435442),expr__62775))){
return (new onyx.types.MonitorEvent(G__62770,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.MonitorEvent(self__.event,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62770),null));
}
});

onyx.types.MonitorEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event","event",301435442),self__.event],null))], null),self__.__extmap));
});

onyx.types.MonitorEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62770){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.MonitorEvent(self__.event,G__62770,self__.__extmap,self__.__hash));
});

onyx.types.MonitorEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.MonitorEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null);
});

onyx.types.MonitorEvent.cljs$lang$type = true;

onyx.types.MonitorEvent.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/MonitorEvent");
});

onyx.types.MonitorEvent.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/MonitorEvent");
});

onyx.types.__GT_MonitorEvent = (function onyx$types$__GT_MonitorEvent(event){
return (new onyx.types.MonitorEvent(event,null,null,null));
});

onyx.types.map__GT_MonitorEvent = (function onyx$types$map__GT_MonitorEvent(G__62772){
return (new onyx.types.MonitorEvent(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(G__62772),null,cljs.core.dissoc.call(null,G__62772,new cljs.core.Keyword(null,"event","event",301435442)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.MonitorEventLatency = (function (event,latency,__meta,__extmap,__hash){
this.event = event;
this.latency = latency;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.MonitorEventLatency.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.MonitorEventLatency.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62779,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62781 = k62779;
var G__62781__$1 = (((G__62781 instanceof cljs.core.Keyword))?G__62781.fqn:null);
switch (G__62781__$1) {
case "event":
return self__.event;

break;
case "latency":
return self__.latency;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62779,else__62032__auto__);

}
});

onyx.types.MonitorEventLatency.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.MonitorEventLatency{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event","event",301435442),self__.event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"latency","latency",1825786229),self__.latency],null))], null),self__.__extmap));
});

onyx.types.MonitorEventLatency.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.MonitorEventLatency.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62778){
var self__ = this;
var G__62778__$1 = this;
return (new cljs.core.RecordIter((0),G__62778__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"latency","latency",1825786229)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.MonitorEventLatency.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.MonitorEventLatency.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.MonitorEventLatency(self__.event,self__.latency,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.MonitorEventLatency.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.MonitorEventLatency.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.MonitorEventLatency.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.MonitorEventLatency.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"latency","latency",1825786229),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.MonitorEventLatency(self__.event,self__.latency,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.MonitorEventLatency.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62778){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62782 = cljs.core.keyword_identical_QMARK_;
var expr__62783 = k__62037__auto__;
if(cljs.core.truth_(pred__62782.call(null,new cljs.core.Keyword(null,"event","event",301435442),expr__62783))){
return (new onyx.types.MonitorEventLatency(G__62778,self__.latency,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62782.call(null,new cljs.core.Keyword(null,"latency","latency",1825786229),expr__62783))){
return (new onyx.types.MonitorEventLatency(self__.event,G__62778,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.MonitorEventLatency(self__.event,self__.latency,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62778),null));
}
}
});

onyx.types.MonitorEventLatency.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event","event",301435442),self__.event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"latency","latency",1825786229),self__.latency],null))], null),self__.__extmap));
});

onyx.types.MonitorEventLatency.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62778){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.MonitorEventLatency(self__.event,self__.latency,G__62778,self__.__extmap,self__.__hash));
});

onyx.types.MonitorEventLatency.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.MonitorEventLatency.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"latency","latency",-828649540,null)], null);
});

onyx.types.MonitorEventLatency.cljs$lang$type = true;

onyx.types.MonitorEventLatency.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/MonitorEventLatency");
});

onyx.types.MonitorEventLatency.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/MonitorEventLatency");
});

onyx.types.__GT_MonitorEventLatency = (function onyx$types$__GT_MonitorEventLatency(event,latency){
return (new onyx.types.MonitorEventLatency(event,latency,null,null,null));
});

onyx.types.map__GT_MonitorEventLatency = (function onyx$types$map__GT_MonitorEventLatency(G__62780){
return (new onyx.types.MonitorEventLatency(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(G__62780),new cljs.core.Keyword(null,"latency","latency",1825786229).cljs$core$IFn$_invoke$arity$1(G__62780),null,cljs.core.dissoc.call(null,G__62780,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"latency","latency",1825786229)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.MonitorEventBytes = (function (event,bytes,__meta,__extmap,__hash){
this.event = event;
this.bytes = bytes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.MonitorEventBytes.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.MonitorEventBytes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62787,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62789 = k62787;
var G__62789__$1 = (((G__62789 instanceof cljs.core.Keyword))?G__62789.fqn:null);
switch (G__62789__$1) {
case "event":
return self__.event;

break;
case "bytes":
return self__.bytes;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62787,else__62032__auto__);

}
});

onyx.types.MonitorEventBytes.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.MonitorEventBytes{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event","event",301435442),self__.event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bytes","bytes",1175866680),self__.bytes],null))], null),self__.__extmap));
});

onyx.types.MonitorEventBytes.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.MonitorEventBytes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62786){
var self__ = this;
var G__62786__$1 = this;
return (new cljs.core.RecordIter((0),G__62786__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"bytes","bytes",1175866680)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.MonitorEventBytes.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.MonitorEventBytes.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.MonitorEventBytes(self__.event,self__.bytes,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.MonitorEventBytes.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.MonitorEventBytes.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.MonitorEventBytes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.MonitorEventBytes.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"bytes","bytes",1175866680),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.MonitorEventBytes(self__.event,self__.bytes,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.MonitorEventBytes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62786){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62790 = cljs.core.keyword_identical_QMARK_;
var expr__62791 = k__62037__auto__;
if(cljs.core.truth_(pred__62790.call(null,new cljs.core.Keyword(null,"event","event",301435442),expr__62791))){
return (new onyx.types.MonitorEventBytes(G__62786,self__.bytes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62790.call(null,new cljs.core.Keyword(null,"bytes","bytes",1175866680),expr__62791))){
return (new onyx.types.MonitorEventBytes(self__.event,G__62786,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.MonitorEventBytes(self__.event,self__.bytes,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62786),null));
}
}
});

onyx.types.MonitorEventBytes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event","event",301435442),self__.event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bytes","bytes",1175866680),self__.bytes],null))], null),self__.__extmap));
});

onyx.types.MonitorEventBytes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62786){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.MonitorEventBytes(self__.event,self__.bytes,G__62786,self__.__extmap,self__.__hash));
});

onyx.types.MonitorEventBytes.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.MonitorEventBytes.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"bytes","bytes",-1478569089,null)], null);
});

onyx.types.MonitorEventBytes.cljs$lang$type = true;

onyx.types.MonitorEventBytes.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/MonitorEventBytes");
});

onyx.types.MonitorEventBytes.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/MonitorEventBytes");
});

onyx.types.__GT_MonitorEventBytes = (function onyx$types$__GT_MonitorEventBytes(event,bytes){
return (new onyx.types.MonitorEventBytes(event,bytes,null,null,null));
});

onyx.types.map__GT_MonitorEventBytes = (function onyx$types$map__GT_MonitorEventBytes(G__62788){
return (new onyx.types.MonitorEventBytes(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(G__62788),new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(G__62788),null,cljs.core.dissoc.call(null,G__62788,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"bytes","bytes",1175866680)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.MonitorTaskEventCount = (function (event,count,__meta,__extmap,__hash){
this.event = event;
this.count = count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.MonitorTaskEventCount.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62795,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62797 = k62795;
var G__62797__$1 = (((G__62797 instanceof cljs.core.Keyword))?G__62797.fqn:null);
switch (G__62797__$1) {
case "event":
return self__.event;

break;
case "count":
return self__.count;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62795,else__62032__auto__);

}
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.MonitorTaskEventCount{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event","event",301435442),self__.event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"count","count",2139924085),self__.count],null))], null),self__.__extmap));
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.MonitorTaskEventCount.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62794){
var self__ = this;
var G__62794__$1 = this;
return (new cljs.core.RecordIter((0),G__62794__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"count","count",2139924085)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.MonitorTaskEventCount(self__.event,self__.count,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"count","count",2139924085),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.MonitorTaskEventCount(self__.event,self__.count,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62794){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62798 = cljs.core.keyword_identical_QMARK_;
var expr__62799 = k__62037__auto__;
if(cljs.core.truth_(pred__62798.call(null,new cljs.core.Keyword(null,"event","event",301435442),expr__62799))){
return (new onyx.types.MonitorTaskEventCount(G__62794,self__.count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62798.call(null,new cljs.core.Keyword(null,"count","count",2139924085),expr__62799))){
return (new onyx.types.MonitorTaskEventCount(self__.event,G__62794,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.MonitorTaskEventCount(self__.event,self__.count,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62794),null));
}
}
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event","event",301435442),self__.event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"count","count",2139924085),self__.count],null))], null),self__.__extmap));
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62794){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.MonitorTaskEventCount(self__.event,self__.count,G__62794,self__.__extmap,self__.__hash));
});

onyx.types.MonitorTaskEventCount.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.MonitorTaskEventCount.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"count","count",-514511684,null)], null);
});

onyx.types.MonitorTaskEventCount.cljs$lang$type = true;

onyx.types.MonitorTaskEventCount.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/MonitorTaskEventCount");
});

onyx.types.MonitorTaskEventCount.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/MonitorTaskEventCount");
});

onyx.types.__GT_MonitorTaskEventCount = (function onyx$types$__GT_MonitorTaskEventCount(event,count){
return (new onyx.types.MonitorTaskEventCount(event,count,null,null,null));
});

onyx.types.map__GT_MonitorTaskEventCount = (function onyx$types$map__GT_MonitorTaskEventCount(G__62796){
return (new onyx.types.MonitorTaskEventCount(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(G__62796),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(G__62796),null,cljs.core.dissoc.call(null,G__62796,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"count","count",2139924085)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
onyx.types.MonitorEventLatencyBytes = (function (event,latency,bytes,__meta,__extmap,__hash){
this.event = event;
this.latency = latency;
this.bytes = bytes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__62029__auto__,k__62030__auto__){
var self__ = this;
var this__62029__auto____$1 = this;
return this__62029__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__62030__auto__,null);
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__62031__auto__,k62803,else__62032__auto__){
var self__ = this;
var this__62031__auto____$1 = this;
var G__62805 = k62803;
var G__62805__$1 = (((G__62805 instanceof cljs.core.Keyword))?G__62805.fqn:null);
switch (G__62805__$1) {
case "event":
return self__.event;

break;
case "latency":
return self__.latency;

break;
case "bytes":
return self__.bytes;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62803,else__62032__auto__);

}
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__62043__auto__,writer__62044__auto__,opts__62045__auto__){
var self__ = this;
var this__62043__auto____$1 = this;
var pr_pair__62046__auto__ = ((function (this__62043__auto____$1){
return (function (keyval__62047__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,cljs.core.pr_writer,""," ","",opts__62045__auto__,keyval__62047__auto__);
});})(this__62043__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__62044__auto__,pr_pair__62046__auto__,"#onyx.types.MonitorEventLatencyBytes{",", ","}",opts__62045__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event","event",301435442),self__.event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"latency","latency",1825786229),self__.latency],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bytes","bytes",1175866680),self__.bytes],null))], null),self__.__extmap));
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62802){
var self__ = this;
var G__62802__$1 = this;
return (new cljs.core.RecordIter((0),G__62802__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"latency","latency",1825786229),new cljs.core.Keyword(null,"bytes","bytes",1175866680)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__62027__auto__){
var self__ = this;
var this__62027__auto____$1 = this;
return self__.__meta;
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__62023__auto__){
var self__ = this;
var this__62023__auto____$1 = this;
return (new onyx.types.MonitorEventLatencyBytes(self__.event,self__.latency,self__.bytes,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__62033__auto__){
var self__ = this;
var this__62033__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__62024__auto__){
var self__ = this;
var this__62024__auto____$1 = this;
var h__61796__auto__ = self__.__hash;
if(!((h__61796__auto__ == null))){
return h__61796__auto__;
} else {
var h__61796__auto____$1 = cljs.core.hash_imap.call(null,this__62024__auto____$1);
self__.__hash = h__61796__auto____$1;

return h__61796__auto____$1;
}
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__62025__auto__,other__62026__auto__){
var self__ = this;
var this__62025__auto____$1 = this;
if(cljs.core.truth_((function (){var and__61229__auto__ = other__62026__auto__;
if(cljs.core.truth_(and__61229__auto__)){
return ((this__62025__auto____$1.constructor === other__62026__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__62025__auto____$1,other__62026__auto__));
} else {
return and__61229__auto__;
}
})())){
return true;
} else {
return false;
}
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__62038__auto__,k__62039__auto__){
var self__ = this;
var this__62038__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"latency","latency",1825786229),null,new cljs.core.Keyword(null,"bytes","bytes",1175866680),null], null), null),k__62039__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__62038__auto____$1),self__.__meta),k__62039__auto__);
} else {
return (new onyx.types.MonitorEventLatencyBytes(self__.event,self__.latency,self__.bytes,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__62039__auto__)),null));
}
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__62036__auto__,k__62037__auto__,G__62802){
var self__ = this;
var this__62036__auto____$1 = this;
var pred__62806 = cljs.core.keyword_identical_QMARK_;
var expr__62807 = k__62037__auto__;
if(cljs.core.truth_(pred__62806.call(null,new cljs.core.Keyword(null,"event","event",301435442),expr__62807))){
return (new onyx.types.MonitorEventLatencyBytes(G__62802,self__.latency,self__.bytes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62806.call(null,new cljs.core.Keyword(null,"latency","latency",1825786229),expr__62807))){
return (new onyx.types.MonitorEventLatencyBytes(self__.event,G__62802,self__.bytes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62806.call(null,new cljs.core.Keyword(null,"bytes","bytes",1175866680),expr__62807))){
return (new onyx.types.MonitorEventLatencyBytes(self__.event,self__.latency,G__62802,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.types.MonitorEventLatencyBytes(self__.event,self__.latency,self__.bytes,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__62037__auto__,G__62802),null));
}
}
}
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__62041__auto__){
var self__ = this;
var this__62041__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event","event",301435442),self__.event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"latency","latency",1825786229),self__.latency],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bytes","bytes",1175866680),self__.bytes],null))], null),self__.__extmap));
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__62028__auto__,G__62802){
var self__ = this;
var this__62028__auto____$1 = this;
return (new onyx.types.MonitorEventLatencyBytes(self__.event,self__.latency,self__.bytes,G__62802,self__.__extmap,self__.__hash));
});

onyx.types.MonitorEventLatencyBytes.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__62034__auto__,entry__62035__auto__){
var self__ = this;
var this__62034__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__62035__auto__)){
return this__62034__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__62035__auto__,(0)),cljs.core._nth.call(null,entry__62035__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__62034__auto____$1,entry__62035__auto__);
}
});

onyx.types.MonitorEventLatencyBytes.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null),new cljs.core.Symbol(null,"latency","latency",-828649540,null),new cljs.core.Symbol(null,"bytes","bytes",-1478569089,null)], null);
});

onyx.types.MonitorEventLatencyBytes.cljs$lang$type = true;

onyx.types.MonitorEventLatencyBytes.cljs$lang$ctorPrSeq = (function (this__62065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.types/MonitorEventLatencyBytes");
});

onyx.types.MonitorEventLatencyBytes.cljs$lang$ctorPrWriter = (function (this__62065__auto__,writer__62066__auto__){
return cljs.core._write.call(null,writer__62066__auto__,"onyx.types/MonitorEventLatencyBytes");
});

onyx.types.__GT_MonitorEventLatencyBytes = (function onyx$types$__GT_MonitorEventLatencyBytes(event,latency,bytes){
return (new onyx.types.MonitorEventLatencyBytes(event,latency,bytes,null,null,null));
});

onyx.types.map__GT_MonitorEventLatencyBytes = (function onyx$types$map__GT_MonitorEventLatencyBytes(G__62804){
return (new onyx.types.MonitorEventLatencyBytes(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(G__62804),new cljs.core.Keyword(null,"latency","latency",1825786229).cljs$core$IFn$_invoke$arity$1(G__62804),new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(G__62804),null,cljs.core.dissoc.call(null,G__62804,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"latency","latency",1825786229),new cljs.core.Keyword(null,"bytes","bytes",1175866680)),null));
});


//# sourceMappingURL=types.js.map?rel=1506234325580