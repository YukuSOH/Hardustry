function TierDrill(name) {
    return extend(Drill, name, {
        getDrillTime(item){
            return this.drillTime * Mathf.pow(1.5, item.hardness);
        },
        buildType: () => extend(this.DrillBuild, this, {
            updateTile(){
                if(timer(timerDump, dumpTime)){
                    dump(dominantItem != null &&
                         items.has(dominantItem) ? dominantItem : null);
                }
                if(dominantItem == null){
                    return;
                }
                timeDrilled += warmup * delta();
                var delay = getDrillTime(dominantItema);
                if(items.total() < itemCapacity && dominantItems > 0 && efficiency > 0){
                    var speed = Mathf.lerp(1, liquidBoostIntensity, optionalEfficiency) * efficiency;
                    lastDrillSpeed = (speed * dominantItems * warmup) / delay;
                    warmup = Mathf.approachDelta(warmup, speed, warmupSpeed);
                    progress += delta() * dominantItems * speed * warmup;
    
                    if(Mathf.chanceDelta(updateEffectChance * warmup))
                        updateEffect.at(x + Mathf.range(size * 2), y + Mathf.range(size * 2));
                }else{
                    lastDrillSpeed = 0;
                    warmup = Mathf.approachDelta(warmup, 0, warmupSpeed);
                    return;
                }
                if(dominantItems > 0 && progress >= delay && items.total() < itemCapacity){
                    offload(dominantItem);
    
                    progress %= delay;
                    if(wasVisible && Mathf.chanceDelta(updateEffectChance * warmup)){
                        drillEffect.at(x + Mathf.range(drillEffectRnd),
                                       y + Mathf.range(drillEffectRnd),
                                       dominantItem.color);
                    }
                }
            } 
        })
    });
}

const quarry = TierDrill("quarry");
const bronzeDrill = TierDrill("bronze-drill");