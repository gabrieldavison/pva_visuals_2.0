goog.provide('hclj.midi');
var module$node_modules$webmidi$webmidi_min=shadow.js.require("module$node_modules$webmidi$webmidi_min", {});
hclj.midi.sliders = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"slider1","slider1",-694907059),(0),new cljs.core.Keyword(null,"slider2","slider2",-764492370),(0),new cljs.core.Keyword(null,"slider3","slider3",-1768513279),(0),new cljs.core.Keyword(null,"slider4","slider4",-157800450),(0)], null));
hclj.midi.buttons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [(0),(function (){
return console.log((1));
}),(1),(function (){
return console.log((2));
}),(2),false,(3),false,(4),false,(5),false,(6),false,(7),false], null));
hclj.midi.set_button = (function hclj$midi$set_button(key,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hclj.midi.buttons,cljs.core.assoc,key,f);
});
hclj.midi.clear_buttons = (function hclj$midi$clear_buttons(){
return cljs.core.reset_BANG_(hclj.midi.buttons,cljs.core.PersistentArrayMap.EMPTY);
});
hclj.midi.clear_buttons();
hclj.midi.get_val = (function hclj$midi$get_val(atom){
return cljs.core.deref(atom);
});
hclj.midi.get_num = (function hclj$midi$get_num(e){
return e.controller.number;
});
hclj.midi.get_note_num = (function hclj$midi$get_note_num(e){
return e.note.number;
});
hclj.midi.update_slider = (function hclj$midi$update_slider(key,e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hclj.midi.sliders,cljs.core.assoc,key,e.value);
});
hclj.midi.start_midi = (function hclj$midi$start_midi(){
return module$node_modules$webmidi$webmidi_min.enable((function (){
console.log(module$node_modules$webmidi$webmidi_min.inputs);

var quneo_input = module$node_modules$webmidi$webmidi_min.getInputByName("QUNEO");
quneo_input.addListener("controlchange","all",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),hclj.midi.get_num(e))){
return hclj.midi.update_slider(new cljs.core.Keyword(null,"slider1","slider1",-694907059),e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),hclj.midi.get_num(e))){
return hclj.midi.update_slider(new cljs.core.Keyword(null,"slider2","slider2",-764492370),e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),hclj.midi.get_num(e))){
return hclj.midi.update_slider(new cljs.core.Keyword(null,"slider3","slider3",-1768513279),e);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),hclj.midi.get_num(e))){
return hclj.midi.update_slider(new cljs.core.Keyword(null,"slider4","slider4",-157800450),e);
} else {
return null;
}
}
}
}
}));

return quneo_input.addListener("noteon","all",(function (e){
var num = hclj.midi.get_note_num(e);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(hclj.midi.buttons),num);
if(cljs.core.truth_(b)){
return (b.cljs$core$IFn$_invoke$arity$0 ? b.cljs$core$IFn$_invoke$arity$0() : b.call(null));
} else {
return null;
}
}));
}));
});
hclj.midi.s = (function hclj$midi$s(key,min,max){
return hclj.maths.scale((function (){var G__32550 = cljs.core.deref(hclj.midi.sliders);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__32550) : key.call(null,G__32550));
})(),min,max);
});

//# sourceMappingURL=hclj.midi.js.map
