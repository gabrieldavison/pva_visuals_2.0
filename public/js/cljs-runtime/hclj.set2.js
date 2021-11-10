goog.provide('hclj.set2');
hclj.set2.init = (function hclj$set2$init(){
return console.log("initialize SET 2");
});
hclj.set2.o0 = o0;
hclj.set2.o1 = o1;
hclj.set2.o2 = o2;
hclj.set2.o3 = o3;
hclj.set2.s0 = s0;
hclj.set2.s1 = s1;
hclj.set2.s2 = s2;
hclj.set2.s3 = s3;
hclj.set2.get_fft = (function hclj$set2$get_fft(band,multiplier){
return (multiplier * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a.fft,band));
});
hclj.kb.setup_kb();
hclj.midi.start_midi();
s0.initCam((1));
window.src(hclj.set2.s0).saturate((0)).out(hclj.set2.o3);
hclj.set2.setup_cameras = (function hclj$set2$setup_cameras(){
hclj.midi.set_button((56),(function (){
return window.src(hclj.set2.s0).saturate((0)).out(hclj.set2.o3);
}));

hclj.midi.set_button((57),(function (){
return window.src(hclj.set2.s0).saturate((0)).contrast((3)).out(hclj.set2.o3);
}));

hclj.midi.set_button((58),(function (){
return window.src(hclj.set2.s0).contrast(1.5).saturate((0)).modulate(hclj.set2.o0,0.03).out(hclj.set2.o3);
}));

hclj.midi.set_button((59),(function (){
return window.src(hclj.set2.s0).contrast(1.5).saturate((0)).modulate(hclj.set2.o0,0.07).invert().out(hclj.set2.o3);
}));

hclj.midi.set_button((60),(function (){
return window.src(hclj.set2.s0).saturate((0)).contrast((5)).modulate(hclj.set2.o0,0.01).out(hclj.set2.o3);
}));

hclj.midi.set_button((48),(function (){
return window.src(hclj.set2.s0).saturate(0.6).out(hclj.set2.o3);
}));

hclj.midi.set_button((49),(function (){
return window.src(hclj.set2.s0).contrast((3)).saturate(0.6).out(hclj.set2.o3);
}));

hclj.midi.set_button((50),(function (){
return window.src(hclj.set2.s0).contrast(1.5).saturate(0.8).modulate(hclj.set2.o0,0.03).out(hclj.set2.o3);
}));

hclj.midi.set_button((51),(function (){
return window.src(hclj.set2.s0).contrast(1.5).saturate(0.8).modulate(hclj.set2.o0,0.06).out(hclj.set2.o3);
}));

hclj.midi.set_button((52),(function (){
return window.src(hclj.set2.s0).contrast(1.5).modulate(hclj.set2.o0,0.07).invert().out(hclj.set2.o3);
}));

return window.src(hclj.set2.o1).blend(window.src(hclj.set2.o3),(function (){
return hclj.midi.s(new cljs.core.Keyword(null,"slider1","slider1",-694907059),(0),(1));
})).out(hclj.set2.o0);
});
hclj.set2.clear_sketch = (function hclj$set2$clear_sketch(){
hclj.midi.clear_buttons();

return hclj.set2.setup_cameras();
});
hclj.set2.untethered = (function hclj$set2$untethered(){
hclj.set2.clear_sketch();

hclj.midi.set_button((0),(function (){
return window.osc((60),0.005).mult(window.osc((70),0.01)).contrast(1.5).blend(window.src(hclj.set2.o0)).blend(window.src(hclj.set2.o0)).blend(window.src(hclj.set2.o0)).out(hclj.set2.o1);
}));

hclj.midi.set_button((1),(function (){
return window.osc((60),0.05).mult(window.osc((100),0.01)).contrast((2)).blend(window.src(hclj.set2.o0)).blend(window.src(hclj.set2.o0)).blend(window.src(hclj.set2.o0)).blend(window.src(hclj.set2.o0)).out(hclj.set2.o1);
}));

hclj.midi.set_button((2),(function (){
return window.osc((60),0.5).mult(window.osc((70),0.01)).contrast((5)).blend(window.src(hclj.set2.o0)).blend(window.src(hclj.set2.o0)).out(hclj.set2.o1);
}));

hclj.midi.set_button((3),(function (){
return window.osc((80),(1)).mult(window.osc((70),0.01)).contrast((5)).out(hclj.set2.o1);
}));

return hclj.midi.set_button((4),(function (){
return window.osc((20),(1)).add(window.osc((7),0.01)).contrast((5)).out(hclj.set2.o1);
}));
});
hclj.set2.divine_intervention = (function hclj$set2$divine_intervention(){
var di_mult = (1);
hclj.set2.clear_sketch();

hclj.midi.set_button((0),(function (){
return window.osc((20),0.02,0.9).color((1),0.4,(1)).kaleid([(4),(8),(3),(6)]).rotate((0),0.1).modulate(hclj.set2.o0,(function (){
return hclj.set2.get_fft((0),di_mult);
})).scale(1.01).blend(hclj.set2.o0).contrast((2)).out(hclj.set2.o1);
}));

hclj.midi.set_button((1),(function (){
return window.osc((20),0.02,0.9).color((1),0.4,(1)).kaleid([(4),(8),(3),(6)]).rotate((0),0.1).pixelate((10),(10)).modulate(hclj.set2.o0,(function (){
return hclj.set2.get_fft((0),di_mult);
})).scale(1.01).blend(hclj.set2.o0).contrast((2)).out(hclj.set2.o1);
}));

hclj.midi.set_button((2),(function (){
return window.osc((20),0.02,0.9).color((1),0.4,(1)).kaleid([(4),(8),(3),(6)]).rotate((0),0.7).modulate(hclj.set2.o0,(function (){
return hclj.set2.get_fft((0),di_mult);
})).modulate(window.src(hclj.set2.o0).colorama((10)),0.1).scale(1.01).blend(hclj.set2.o0).out(hclj.set2.o1);
}));

return hclj.midi.set_button((3),(function (){
return window.osc((20),0.02,0.9).color((1),0.4,(1)).kaleid([(4),(8),(3),(6)]).rotate((0),0.7).modulate(hclj.set2.o0,(function (){
return hclj.set2.get_fft((0),di_mult);
})).modulate(window.voronoi((100)),0.5).scale(1.01).blend(hclj.set2.o0).out(hclj.set2.o1);
}));
});
hclj.set2.talks = (function hclj$set2$talks(){
var tlk_mult = (1);
hclj.set2.clear_sketch();

hclj.midi.set_button((0),(function (){
return window.shape([(3),(3),(3),(4),(4),(4),(2),(2),(2)]).scale((function (){
return (1.5 + hclj.set2.get_fft((0),tlk_mult));
})).diff(window.osc((3),0.5,0.1).diff(window.voronoi((2)).pixelate((100),(100)).kaleid((2)))).modulate(hclj.set2.o0,0.1).color(0.9,0.5,0.5).saturate((2)).out();
}));

return hclj.midi.set_button((1),(function (){
return window.shape([(3),(3),(3),(4),(4),(4),(2),(2),(2)]).scale((function (){
return (1.5 + hclj.set2.get_fft((0),tlk_mult));
})).diff(window.osc((3),0.5,0.1).diff(window.voronoi((2)).pixelate((100),(100)).kaleid((2)))).modulate(hclj.set2.o0,0.5).contrast((2)).color(0.7,0.5,0.7).saturate((2)).out();
}));
});
hclj.set2.comfort_eating = (function hclj$set2$comfort_eating(){
var ce_mult = (30);
hclj.set2.clear_sketch();

hclj.midi.set_button((0),(function (){
return window.noise((5)).invert().contrast((10)).mult(window.solid(0.7,0.1,0.15)).blend(window.shape([(2),(5),(100)].fast(0.5)).scale(1.8).repeatX((1)).repeatY((1)).contrast((2)).modulate(window.voronoi((function (){
return hclj.set2.get_fft((0),(30));
})))).out();
}));

hclj.midi.set_button((1),(function (){
return window.noise((5)).invert().contrast((5)).pixelate((50),(50)).mult(window.solid(0.7,0.1,0.15)).blend(window.shape([(2),(5),(100)].fast((4))).scale(1.8).repeatX((3)).repeatY((3)).contrast((2)).modulate(window.voronoi((function (){
return hclj.set2.get_fft((0),(30));
})))).out();
}));

hclj.midi.set_button((2),(function (){
return window.noise((5)).invert().contrast((5)).pixelate((50),(50)).mult(window.solid(0.7,0.1,0.15)).blend(window.shape([(2),(5),(100)].fast((4))).scale(1.8).repeatX((3)).repeatY((3)).modulate(window.voronoi((function (){
return hclj.set2.get_fft((0),(30));
})))).modulate(hclj.set2.o0).out();
}));

return hclj.midi.set_button((3),(function (){
return window.noise((5)).invert().contrast((5)).pixelate((50),(50)).mult(window.solid(0.7,0.1,0.15)).blend(window.shape([(2),(5),(100)].fast((4))).scale(1.8).repeatX((3)).repeatY((3)).modulate(window.voronoi((function (){
return hclj.set2.get_fft((0),(30));
})))).modulate(hclj.set2.o0).diff(window.osc((30),0.2).modulate(window.osc((10),0.01)).pixelate((1),(1)).contrast((4))).out();
}));
});
hclj.set2.project_bunker = (function hclj$set2$project_bunker(){
var pb_mult = 0.05;
hclj.set2.clear_sketch();

hclj.midi.set_button((0),(function (){
return window.src(hclj.set2.o3).contrast(1.2).modulate(window.noise((1000)),(function (){
return hclj.set2.get_fft((0),pb_mult);
})).modulate(hclj.set2.o0,0.01).contrast((2)).out(hclj.set2.o1);
}));

hclj.midi.set_button((1),(function (){
return window.src(hclj.set2.o3).contrast(1.2).modulate(window.noise((1000)),(function (){
return hclj.set2.get_fft((0),pb_mult);
})).modulate(hclj.set2.o0,0.1).contrast((2)).invert().out(hclj.set2.o1);
}));

hclj.midi.set_button((2),(function (){
return window.src(hclj.set2.o3).contrast(1.2).modulate(window.noise((1000)),(function (){
return hclj.set2.get_fft((0),pb_mult);
})).modulate(hclj.set2.o0,0.1).contrast((2)).diff(window.src(hclj.set2.o3).invert()).out(hclj.set2.o1);
}));

hclj.midi.set_button((3),(function (){
return window.src(hclj.set2.o3).contrast(1.2).modulate(window.noise((1000)),(function (){
return hclj.set2.get_fft((0),pb_mult);
})).modulate(hclj.set2.o0,0.5).diff(window.noise((100)).pixelate((1))).contrast((2)).out(hclj.set2.o1);
}));

hclj.midi.set_button((4),(function (){
return window.src(hclj.set2.o3).contrast(1.2).modulate(window.noise((1000)),(function (){
return hclj.set2.get_fft((0),pb_mult);
})).modulate(hclj.set2.o0,0.5).diff(window.noise((100)).pixelate((1))).contrast((2)).blend(window.osc((50),0.5).contrast((2)).pixelate((1),(1))).contrast((2)).out(hclj.set2.o1);
}));

hclj.midi.set_button((5),(function (){
return window.src(hclj.set2.o3).contrast(1.8).diff(window.noise((10)).pixelate((1)).modulate(hclj.set2.o0,0.5)).out(hclj.set2.o1);
}));

hclj.midi.set_button((6),(function (){
return window.src(hclj.set2.o3).contrast(1.8).diff(window.noise((10)).pixelate((1)).modulate(hclj.set2.o0,0.5)).invert().out(hclj.set2.o1);
}));

return hclj.midi.set_button((7),(function (){
return window.src(hclj.set2.o3).contrast(1.8).diff(window.noise((10)).pixelate((1)).modulate(hclj.set2.o0,0.5)).invert().modulate(window.src(hclj.set2.o3)).out(hclj.set2.o1);
}));
});
hclj.set2.soap = (function hclj$set2$soap(){
var sp_mult = 0.5;
hclj.set2.clear_sketch();

hclj.midi.set_button((0),(function (){
return window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).mult(window.noise((5)).pixelate((100),(100))).modulate(hclj.set2.o0,(function (){
return hclj.set2.get_fft((0),sp_mult);
})).saturate((2)).out(hclj.set2.o1);
}));

hclj.midi.set_button((1),(function (){
return window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).mult(window.noise([(1),(5),(2)].fast((2))).pixelate((50),(50))).modulate(hclj.set2.o0,0.5).saturate((2)).out(hclj.set2.o1);
}));

hclj.midi.set_button((2),(function (){
return window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).mult(window.noise([(5),(7),(2)]).pixelate((100),(100))).modulate(hclj.set2.o0,(function (){
return hclj.set2.get_fft((0),sp_mult);
})).saturate((2)).out(hclj.set2.o1);
}));

hclj.midi.set_button((3),(function (){
return window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).diff(window.noise((5)).pixelate((100),(100))).modulate(hclj.set2.o0,(function (){
return hclj.set2.get_fft((0),sp_mult);
})).saturate((2)).out(hclj.set2.o1);
}));

hclj.midi.set_button((4),(function (){
return window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).mult(window.noise((2)).pixelate((100),(100))).modulate(hclj.set2.o0,(function (){
return hclj.set2.get_fft((0),sp_mult);
})).invert().colorama(0.001).out(hclj.set2.o1);
}));

return hclj.midi.set_button((5),(function (){
return window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((2)),0.2).mult(window.noise((4)).pixelate((100),(100))).modulate(hclj.set2.o0,(function (){
return hclj.set2.get_fft((0),sp_mult);
})).invert().colorama(0.001).out(hclj.set2.o1);
}));
});
hclj.set2.sleek_form = (function hclj$set2$sleek_form(){
hclj.set2.clear_sketch();

hclj.midi.set_button((0),(function (){
return window.osc((10),(3),(0)).contrast((2)).out(hclj.set2.o1);
}));

hclj.midi.set_button((1),(function (){
return window.osc((10),(10),(0)).contrast((2)).modulate(window.src(hclj.set2.o3)).invert().out(hclj.set2.o1);
}));

hclj.midi.set_button((2),(function (){
return window.osc((10),(10),(0)).contrast((2)).invert().modulate(window.src(hclj.set2.o3)).diff(hclj.set2.o0).contrast((2)).out(hclj.set2.o1);
}));

return hclj.midi.set_button((3),(function (){
return window.osc((3),(50),(0)).contrast((2)).invert().modulate(window.src(hclj.set2.o3)).diff(hclj.set2.o0).contrast((2)).out(hclj.set2.o1);
}));
});
hclj.set2.exhaust = (function hclj$set2$exhaust(){
hclj.set2.clear_sketch();

hclj.midi.set_button((0),(function (){
return window.osc((10),0.1).modulate(window.noise((6)),0.2).diff(window.src(hclj.set2.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(0.9).contrast(1.5).out(hclj.set2.o1);
}));

hclj.midi.set_button((1),(function (){
return window.osc((10),0.1).modulate(window.noise((function (){
return hclj.set2.get_fft((0),(20));
})),0.2).diff(window.src(hclj.set2.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(0.9).contrast(1.5).out(hclj.set2.o1);
}));

hclj.midi.set_button((2),(function (){
return window.osc((10),0.1).modulate(window.noise((function (){
return hclj.set2.get_fft((0),(20));
})),0.2).diff(window.src(hclj.set2.o0),0.9).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(0.9).blend(window.src(hclj.set2.o0).colorama(0.001).saturate(0.5).pixelate([(20),(10),(50)].fast((10)),[(4),(10),(20)].fast((10))),(function (){
return hclj.set2.get_fft((0),(4));
})).contrast(1.5).out(hclj.set2.o1);
}));

hclj.midi.set_button((3),(function (){
return window.osc((10),0.1,0.4).modulate(window.noise((6)),0.2).diff(window.src(hclj.set2.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(1.2).contrast(1.5).modulate(hclj.set2.o0,0.01).scale((1)).out(hclj.set2.o1);
}));

hclj.midi.set_button((4),(function (){
return window.osc((10),0.1,0.4).modulate(window.noise((6)),0.2).diff(window.src(hclj.set2.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(1.2).contrast(1.5).modulate(hclj.set2.o0,0.001).modulate(window.voronoi((10)).pixelate([(5),(10),(20)],[(15),(30),(2)]).contrast((2)),0.2).out(hclj.set2.o1);
}));

hclj.midi.set_button((5),(function (){
return window.osc((10),0.1,0.4).modulate(window.noise((6)),0.2).diff(window.src(hclj.set2.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(1.2).contrast(1.5).modulate(hclj.set2.o0,0.001).modulate(window.voronoi((10)).pixelate([(5),(10),(20),(80),(1)].fast((10)),[(15),(30),(2),(1)].fast((7))).contrast((2)),0.2).out(hclj.set2.o1);
}));

return hclj.midi.set_button((7),(function (){
return window.osc((10),0.1,0.4).modulate(window.noise((6)),0.2).diff(window.src(hclj.set2.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(1.2).contrast(1.5).modulate(hclj.set2.o0,0.002).modulate(window.voronoi((10)).pixelate((50),(function (){
return ((10) + hclj.set2.get_fft((0),(20)));
})),0.3).add(hclj.set2.o0).out(hclj.set2.o1);
}));
});
hclj.kb.set_k((1),(function (){
return hclj.set2.untethered();
}));
hclj.kb.set_k((2),(function (){
return hclj.set2.divine_intervention();
}));
hclj.kb.set_k((3),(function (){
return hclj.set2.soap();
}));
hclj.kb.set_k((4),(function (){
return hclj.set2.project_bunker();
}));
hclj.kb.set_k((5),(function (){
return hclj.set2.sleek_form();
}));
hclj.kb.set_k((6),(function (){
return hclj.set2.exhaust();
}));
window.solid((0),(0),(0)).out(hclj.set2.o1);
hclj.set2.setup_cameras();

//# sourceMappingURL=hclj.set2.js.map
