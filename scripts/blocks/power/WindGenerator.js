function WindGenerator(name) {
    var content =  extend(PowerGenerator, name, {
        powerProduction: 0.4,
        minEfficiency: 0,
    });
    content.buildType =  prov(()=> {
        const block = content;
        var duration = -1;
        return new JavaAdapter(PowerGenerator.GeneratorBuild, {
            updateTile(){
                if(duration < 0){
                    duration = Mathf.random(10, 300) * Time.toSeconds;
                    this.productionEfficiency = Mathf.random(content.minEfficiency, 1.0);
                }
                duration--;
            }
        }, block);
    });
    return content;
}
const windTurbine = WindGenerator("wind-turbine");
const advancedWindTurbine = WindGenerator("advanced-wind-turbine");