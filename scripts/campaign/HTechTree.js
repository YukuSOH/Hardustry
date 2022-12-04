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
            // ProduceBlocks
            TechTree.node(HBlock("quarry"), ()=>{
                // Drills
                TechTree.node(Blocks.mechanicalDrill);
                // Energy
                TechTree.node(HBlock("wind-turbine"), ()=>{
                    TechTree.node(Blocks.powerNode, ()=>{
                        TechTree.node(Blocks.battery);
                    });
                });
                // Factorys
                TechTree.node(HBlock("trade-center-copper"), ()=>{
                    // TradeCenters
                    // Crushers
                    TechTree.node(HBlock("copper-crusher"), ()=>{
                        TechTree.node(HBlock("teallite-crusher"));
                    });
                    // DustMixers
                    TechTree.node(HBlock("bronze-mixer-teallite"));
                    // Furnaces
                    TechTree.node(HBlock("bronze-furnace"));
                });
            });
            // Turrets
            TechTree.node(Blocks.duo, ()=>{
                TechTree.node(Blocks.copperWall);
            });
            // Materials
            TechTree.node(Items.copper, ()=>{
                // Liquids
                // Misc
                // Metals
                TechTree.nodeProduce(Items.lead, ()=>{
                    TechTree.nodeProduce(HItem("zinc"), ()=>{
                        TechTree.nodeProduce(HItem("brass"), ()=>{});
                    });
                    TechTree.nodeProduce(HItem("tin"), ()=>{
                        TechTree.nodeProduce(HItem("bronze"), ()=>{});
                    });
                });
                // Ores
                TechTree.nodeProduce(HItem("teallite"), ()=>{
                    TechTree.nodeProduce(Items.coal, ()=>{});
                    // MainOres
                    TechTree.nodeProduce(HItem("tetrahedrite"), ()=>{
                    });
                });
                // Products
                TechTree.nodeProduce(HItem("mc"), ()=>{
                    // Dusts
                    TechTree.nodeProduce(HItem("copper-dust"), ()=>{
                        TechTree.nodeProduce(HItem("teallite-dust"), ()=>{
                            TechTree.nodeProduce(HItem("tin-dust"), ()=>{});
                        });
                    });
                });
            });
            // Transfers
            TechTree.node(Blocks.conveyor, ()=>{
                TechTree.node(Blocks.junction, ()=>{
                    TechTree.node(Blocks.router, ()=>{
                        TechTree.node(Blocks.unloader);
                    });
                });
            });
        });
    }
});
Events.on(EventType.ContentInitEvent, cons(() => {
	SerpuloParallelTechTree.load();
}));