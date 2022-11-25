const serpuloParallel = new JavaAdapter(Planet, {}, "serpulo-parallel", Planet.sun, 3, 1);
serpuloParallel.generator = extend(SerpuloPlanetGenerator, {});
module.exports = {
    serpuloParallel: serpuloParallel
}