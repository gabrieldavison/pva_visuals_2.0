goog.provide('hclj.set');
hclj.set.init = (function hclj$set$init(){
return console.log("initialize SET");
});
hclj.set.o0 = o0;
hclj.set.o1 = o1;
hclj.set.o2 = o2;
hclj.set.o3 = o3;
hclj.set.s0 = s0;
hclj.set.s1 = s1;
hclj.set.s2 = s2;
hclj.set.s3 = s3;
hclj.set.get_fft = (function hclj$set$get_fft(band,multiplier){
return (multiplier * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a.fft,band));
});
s0.initCam((1));
window.src(hclj.set.s0).saturate((0)).out(hclj.set.o3);
window.osc((60),0.005).mult(window.osc((70),0.01)).contrast(1.5).blend(window.src(hclj.set.o0)).blend(window.src(hclj.set.o0)).blend(window.src(hclj.set.o0)).out();
window.osc((60),0.05).mult(window.osc((100),0.01)).contrast((2)).blend(window.src(hclj.set.o0)).blend(window.src(hclj.set.o0)).blend(window.src(hclj.set.o0)).blend(window.src(hclj.set.o0)).out();
window.osc((60),0.5).mult(window.osc((70),0.01)).contrast((5)).blend(window.src(hclj.set.o0)).blend(window.src(hclj.set.o0)).out();
window.osc((60),0.5).mult(window.osc((70),0.01)).contrast((5)).blend(window.src(hclj.set.o0)).add(window.src(hclj.set.o0)).blend(window.src(hclj.set.o0)).out();
window.osc((80),(1)).mult(window.osc((70),0.01)).contrast((5)).out();
window.osc((20),(1)).add(window.osc((7),0.01)).contrast((5)).out();
hclj.set.di_mult = (1);
window.osc((20),0.02,0.9).color((1),0.4,(1)).kaleid([(4),(8),(3),(6)]).rotate((0),0.1).modulate(hclj.set.o0,(function (){
return hclj.set.get_fft((0),hclj.set.di_mult);
})).scale(1.01).blend(hclj.set.o0).contrast((2)).out(hclj.set.o0);
window.osc((20),0.02,0.9).color((1),0.4,(1)).kaleid([(4),(8),(3),(6)]).rotate((0),0.1).pixelate((10),(10)).modulate(hclj.set.o0,(function (){
return hclj.set.get_fft((0),hclj.set.di_mult);
})).scale(1.01).blend(hclj.set.o0).contrast((2)).out(hclj.set.o0);
window.osc((20),0.02,0.9).color((1),0.4,(1)).kaleid([(4),(8),(3),(6)]).rotate((0),0.1).pixelate((10),(10)).modulate(hclj.set.o0,(function (){
return hclj.set.get_fft((0),hclj.set.di_mult);
})).scale(1.01).blend(hclj.set.o0).contrast((2)).out(hclj.set.o0);
window.osc((20),0.02,0.9).color((1),0.4,(1)).kaleid([(4),(8),(3),(6)]).rotate((0),0.7).modulate(hclj.set.o0,(function (){
return hclj.set.get_fft((0),hclj.set.di_mult);
})).modulate(window.src(hclj.set.o0).colorama((10)),0.1).scale(1.01).blend(hclj.set.o0).out(hclj.set.o0);
window.osc((20),0.02,0.9).color((1),0.4,(1)).kaleid([(4),(8),(3),(6)]).rotate((0),0.7).modulate(hclj.set.o0,(function (){
return hclj.set.get_fft((0),hclj.set.di_mult);
})).modulate(window.voronoi((100)),0.5).scale(1.01).blend(hclj.set.o0).out(hclj.set.o0);
hclj.set.tlk_mult = (1);
window.shape([(3),(3),(3),(4),(4),(4),(2),(2),(2)]).scale((function (){
return (1.5 + hclj.set.get_fft((0),hclj.set.tlk_mult));
})).diff(window.osc((3),0.5,0.1).diff(window.voronoi((2)).pixelate((100),(100)).kaleid((2)))).modulate(hclj.set.o0,0.1).color(0.9,0.5,0.5).saturate((2)).out();
window.shape([(3),(3),(3),(4),(4),(4),(2),(2),(2)]).scale((function (){
return (1.5 + hclj.set.get_fft((0),hclj.set.tlk_mult));
})).diff(window.osc((3),0.5,0.1).diff(window.voronoi((2)).pixelate((100),(100)).kaleid((2)))).modulate(hclj.set.o0,0.5).contrast((2)).color(0.7,0.5,0.7).saturate((2)).out();
hclj.set.ce_mult = (30);
window.noise((5)).invert().contrast((10)).mult(window.solid(0.7,0.1,0.15)).blend(window.shape([(2),(5),(100)].fast(0.5)).scale(1.8).repeatX((1)).repeatY((1)).contrast((2)).modulate(window.voronoi((function (){
return hclj.set.get_fft((0),(30));
})))).out();
window.noise((5)).invert().contrast((5)).pixelate((50),(50)).mult(window.solid(0.7,0.1,0.15)).blend(window.shape([(2),(5),(100)].fast((4))).scale(1.8).repeatX((3)).repeatY((3)).contrast((2)).modulate(window.voronoi((function (){
return hclj.set.get_fft((0),(30));
})))).out();
window.noise((5)).invert().contrast((5)).pixelate((50),(50)).mult(window.solid(0.7,0.1,0.15)).blend(window.shape([(2),(5),(100)].fast((4))).scale(1.8).repeatX((3)).repeatY((3)).modulate(window.voronoi((function (){
return hclj.set.get_fft((0),(30));
})))).modulate(hclj.set.o0).out();
window.noise((5)).invert().contrast((5)).pixelate((50),(50)).mult(window.solid(0.7,0.1,0.15)).blend(window.shape([(2),(5),(100)].fast((4))).scale(1.8).repeatX((3)).repeatY((3)).modulate(window.voronoi((function (){
return hclj.set.get_fft((0),(30));
})))).modulate(hclj.set.o0).diff(window.osc((30),0.2).modulate(window.osc((10),0.01)).pixelate((1),(1)).contrast((4))).out();
hclj.set.pb_mult = 0.05;
window.src(hclj.set.o3).contrast(1.2).modulate(window.noise((1000)),(function (){
return hclj.set.get_fft((0),hclj.set.pb_mult);
})).modulate(hclj.set.o0,0.01).contrast((2)).out();
window.src(hclj.set.o3).contrast(1.2).modulate(window.noise((1000)),(function (){
return hclj.set.get_fft((0),hclj.set.pb_mult);
})).modulate(hclj.set.o0,0.1).contrast((2)).invert().out();
window.src(hclj.set.o3).contrast(1.2).modulate(window.noise((1000)),(function (){
return hclj.set.get_fft((0),hclj.set.pb_mult);
})).modulate(hclj.set.o0,0.1).contrast((2)).diff(window.src(hclj.set.o3).invert()).out();
window.src(hclj.set.o3).contrast(1.2).modulate(window.noise((1000)),(function (){
return hclj.set.get_fft((0),hclj.set.pb_mult);
})).modulate(hclj.set.o0,0.5).diff(window.noise((100)).pixelate((1))).contrast((2)).out();
window.src(hclj.set.o3).contrast(1.2).modulate(window.noise((1000)),(function (){
return hclj.set.get_fft((0),hclj.set.pb_mult);
})).modulate(hclj.set.o0,0.5).diff(window.noise((100)).pixelate((1))).contrast((2)).blend(window.osc((50),0.5).contrast((2)).pixelate((1),(1))).contrast((2)).out();
window.src(hclj.set.o3).contrast(1.8).diff(window.noise((10)).pixelate((1)).modulate(hclj.set.o0,0.5)).out();
window.src(hclj.set.o3).contrast(1.8).diff(window.noise((10)).pixelate((1)).modulate(hclj.set.o0,0.5)).invert().out();
window.src(hclj.set.o3).contrast(1.8).diff(window.noise((10)).pixelate((1)).modulate(hclj.set.o0,0.5)).invert().modulate(window.src(hclj.set.o3)).out();
hclj.set.sp_mult = 0.5;
window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).mult(window.noise((5)).pixelate((100),(100))).modulate(hclj.set.o0,(function (){
return hclj.set.get_fft((0),hclj.set.sp_mult);
})).saturate((2)).out();
window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).mult(window.noise([(1),(5),(2)].fast((2))).pixelate((50),(50))).modulate(hclj.set.o0,0.5).saturate((2)).out();
window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).mult(window.noise([(5),(7),(2)]).pixelate((100),(100))).modulate(hclj.set.o0,(function (){
return hclj.set.get_fft((0),hclj.set.sp_mult);
})).saturate((2)).out();
window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).mult(window.noise((1)).pixelate((50),(50))).modulate(hclj.set.o0,0.5).saturate((2)).out();
window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).diff(window.noise((5)).pixelate((100),(100))).modulate(hclj.set.o0,(function (){
return hclj.set.get_fft((0),hclj.set.sp_mult);
})).saturate((2)).out();
window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((10))).mult(window.noise((2)).pixelate((100),(100))).modulate(hclj.set.o0,(function (){
return hclj.set.get_fft((0),hclj.set.sp_mult);
})).invert().colorama(0.001).out();
window.osc((10),0.15,0.3).add(window.osc((4),0.2,0.8)).modulate(window.noise((2)),0.2).mult(window.noise((4)).pixelate((100),(100))).modulate(hclj.set.o0,(function (){
return hclj.set.get_fft((0),hclj.set.sp_mult);
})).invert().colorama(0.001).out();
window.osc((10),(3),(0)).contrast((2)).out();
window.osc((10),(10),(0)).contrast((2)).modulate(window.src(hclj.set.o3)).invert().out();
window.osc((10),(10),(0)).contrast((2)).invert().modulate(window.src(hclj.set.o3)).diff(hclj.set.o0).contrast((2)).out();
window.osc((3),(50),(0)).contrast((2)).invert().modulate(window.src(hclj.set.o3)).diff(hclj.set.o0).contrast((2)).out();
window.osc((3),(50),(0)).contrast((2)).invert().modulate(window.src(hclj.set.o3),(function (){
return hclj.set.get_fft((0),(5));
})).diff(hclj.set.o0).contrast((2)).out();
window.osc((20),(2),(0)).contrast((2)).invert().modulate(window.src(hclj.set.o3)).diff(hclj.set.o0).contrast((2)).out();
window.osc((20),(2),(0)).contrast((2)).invert().modulate(window.src(hclj.set.o3)).diff(hclj.set.o0).contrast((2)).invert().out();
window.osc((20),(2),(0)).contrast((2)).invert().modulate(window.src(hclj.set.o3)).diff(hclj.set.o0).contrast((2)).mult(window.osc((10),(10)).pixelate((1),(1))).out();
window.osc((10),0.1).modulate(window.noise((6)),0.2).diff(window.src(hclj.set.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(0.9).contrast(1.5).out();
window.osc((10),0.1).modulate(window.noise((function (){
return hclj.set.get_fft((0),(20));
})),0.2).diff(window.src(hclj.set.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(0.9).contrast(1.5).out();
window.osc((10),0.1).modulate(window.noise((function (){
return hclj.set.get_fft((0),(20));
})),0.2).diff(window.src(hclj.set.o0),0.9).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(0.9).blend(window.src(hclj.set.o0).colorama(0.001).saturate(0.5).pixelate([(20),(10),(50)].fast((10)),[(4),(10),(20)].fast((10))),(function (){
return hclj.set.get_fft((0),(4));
})).contrast(1.5).out();
window.osc((10),0.1,0.4).modulate(window.noise((6)),0.2).diff(window.src(hclj.set.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(1.2).contrast(1.5).modulate(hclj.set.o0,0.01).scale((1)).out();
window.osc((10),0.1,0.4).modulate(window.noise((6)),0.2).diff(window.src(hclj.set.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(1.2).contrast(1.5).modulate(hclj.set.o0,0.001).modulate(window.voronoi((10)).pixelate([(5),(10),(20)],[(15),(30),(2)]).contrast((2)),0.2).out();
window.osc((10),0.1,0.4).modulate(window.noise((6)),0.2).diff(window.src(hclj.set.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(1.2).contrast(1.5).modulate(hclj.set.o0,0.001).modulate(window.voronoi((10)).pixelate([(5),(10),(20),(80),(1)].fast((10)),[(15),(30),(2),(1)].fast((7))).contrast((2)),0.2).out();
window.osc((10),0.1,0.4).modulate(window.noise((6)),0.2).diff(window.src(hclj.set.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(1.2).contrast(1.5).modulate(hclj.set.o0,0.002).modulate(window.voronoi((10)).pixelate((50),(function (){
return ((10) + hclj.set.get_fft((0),(20)));
})),0.3).add(hclj.set.o0).out(hclj.set.o0);
window.osc((10),0.1,0.4).modulate(window.noise((6)),0.2).diff(window.src(hclj.set.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(1.2).contrast(1.5).modulate(hclj.set.o0,0.002).modulate(window.voronoi((10)).pixelate((50),(function (){
return ((10) + hclj.set.get_fft((0),(20)));
})),0.3).add(hclj.set.o0).out(hclj.set.o0);
window.osc((10),0.1,0.8).modulate(window.noise((6)),0.2).diff(window.src(hclj.set.o0)).modulateScrollY(window.osc((2)).modulate(window.osc().rotate(),0.11)).scale(1.2).contrast(1.5).mult(hclj.set.o3).modulate(hclj.set.o0,0.08).modulate(window.voronoi((2))).modulate(window.src(hclj.set.o0).invert()).out();

//# sourceMappingURL=hclj.set.js.map
