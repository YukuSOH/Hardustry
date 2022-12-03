function RotateCrafter(name) {
    var block = extend(GenericCrafter, name, {
        rotateSpeed: 2,
        rotatorRegion: Core.atlas.find("hardustry-" + this.name + "-rotator"),
        load(){
            this.region = Core.atlas.find(this.name);
            this.rotatorRegion = Core.atlas.find(this.name + "-rotator");
        },
        icons(){
            return [this.region, this.rotatorRegion];
        }
    });
    block.buildType = prov(()=>{
        var x = 0;
        var y = 0;
        var rotated = 0;
        return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
            updateTile(){
                this.super$updateTile();
                rotated = this.progress * block.craftTime * block.rotateSpeed;
            },
            draw(){
                x = this.x;
                y = this.y;
                Draw.rect(block.region, x, y);
                Draw.rect(block.rotatorRegion, x, y, rotated);
            }
        }, block);
    });
    return block;
}

// crusher
const copperCrusher = RotateCrafter("copper-crusher");
const tealliteCrusher = RotateCrafter("teallite-crusher");
const coalCrusher = RotateCrafter("coal-crusher");
const woodCrusher = RotateCrafter("wood-crusher");
const glassCrusher = RotateCrafter("glass-crusher");

// dustMixer
const bronzeMixer = RotateCrafter("bronze-mixer-teallite");