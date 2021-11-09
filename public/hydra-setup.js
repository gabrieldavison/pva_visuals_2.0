const hydra = new Hydra({
  canvas: document.getElementById("hydra-canvas"),
});
hydra.setResolution(1920, 1080);
osc(4, 0.1, 1.2).out();
