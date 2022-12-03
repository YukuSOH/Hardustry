function Furnace(name) {
    var block = extend(HeatCrafter, name, {
        heatRequirement: 6
    });
    block.buildType = prov(()=>{
        return new JavaAdapter(HeatCrafter.HeatCrafterBuild, {
            updateTile(){
                this.heat = this.calculateHeat(this.sideHeat);
                if(this.heat < block.heatRequirement / 2){
                    this.progress = 0;
                }
                this.super$updateTile();
            }
        }, block);
    });
    return block;
}

const bronzeFurnace = Furnace("bronze-furnace");
const tinFurnace = Furnace("tin-furnace");