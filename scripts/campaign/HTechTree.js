function nodeRoot(name, content, children){
    return TechTree.nodeRoot(name, content, children);
}

function HBlock(str_name){
    return Vars.content.block("hardustry-" + str_name);
}
function HItem(str_name){
    return Vars.content.item("hardustry-" + str_name);
}
function HSector(str_name){
    return Vars.content.sector("hardustry-" + str_name);
}
const SerpuloParallelTechTree = extend(SerpuloTechTree, {
    load(){
        Vars.content.planet("serpulo-parallel").techTree =
        nodeRoot("serpulo-parallel", Blocks.coreShard, ()=>{
            // ProduceBlock
            TechTree.node(HBlock("quarry"), ()=>{
                // Drill
                TechTree.node(Blocks.mechanicalDrill);
                // Energy
                TechTree.node(HBlock("wind-turbine"), ()=>{
                    TechTree.node(Blocks.powerNode, ()=>{
                        TechTree.node(Blocks.battery);
                    });
                });
            });
            // Turret
            TechTree.node(Blocks.duo, ()=>{
                TechTree.node(Blocks.copperWall);
            });
            // Transfer
            TechTree.node(Blocks.conveyor, ()=>{
                TechTree.node(Blocks.junction, ()=>{
                    TechTree.node(Blocks.router, ()=>{
                        TechTree.node(Blocks.unloader);
                    });
                });
            });
            // Material
            TechTree.node(Items.copper, ()=>{
                // Liquids
                // Misc
                // Metals
                TechTree.nodeProduce(Items.lead, ()=>{
                    TechTree.nodeProduce(Items.coal, ()=>{});
                    TechTree.nodeProduce(HItem("zinc"), ()=>{
                        TechTree.nodeProduce(HItem("brass"), ()=>{});
                    });
                    TechTree.nodeProduce(HItem("tin"), ()=>{
                        TechTree.nodeProduce(HItem("bronze"), ()=>{});
                    });
                });
                // Ores
                TechTree.nodeProduce(HItem("teallite"), ()=>{
                    TechTree.nodeProduce(HItem("tetrahedrite"), ()=>{
                    });
                });
                // Products
                TechTree.nodeProduce(HItem("mc"), ()=>{});
            });
        });
    }
});
Events.on(EventType.ContentInitEvent, cons(() => {
	SerpuloParallelTechTree.load();
}));