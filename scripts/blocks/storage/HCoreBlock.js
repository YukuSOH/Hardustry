function HCoreBlock(name) {
    return extend(CoreBlock, name, {
        size: 3,
        canReplace(other){
            return this.super$canReplace(other) ||
                   (other instanceof CoreBlock && this.size >= other.size && other != this) ? true : false;
        },

        canPlaceOn(tile, team, rotation){
            if(tile == null) return false;
            if(Vars.state.isEditor()) return true;
            var core = team.core();
            if(core == null ||
               (!Vars.state.rules.infiniteResources &&
                !core.items.has(requirements, Vars.state.rules.buildCostMultiplier))) return false;
            return tile.block() instanceof CoreBlock && this.size >= tile.block().size ? true : false;
        }
    });
}

const bronzeCore = HCoreBlock("bronze-core");