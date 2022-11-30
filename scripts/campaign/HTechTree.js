function nodeRoot(name, content, children){
    return TechTree.nodeRoot(name, content, children);
}

function HBlock(str_name){
    return Vars.content.block("hardustry-" + str_name);
}
function HItem(str_name){
    return Vars.content.item("hardustry-" + str_name);
}
// TechTree
const SerpuloParallelTechTree = extend(SerpuloTechTree, {
    load(){
        Vars.content.planet("serpulo-parallel").techTree =
        nodeRoot("serpulo-parallel", Blocks.coreShard, ()=>{
            TechTree.node(HBlock("quarry"), ()=>{
                TechTree.node(Blocks.mechanicalDrill);
                TechTree.node(HBlock("wind-turbine"), ()=>{
                    TechTree.node(Blocks.powerNode, ()=>{
                        TechTree.node(Blocks.battery);
                    });
                });
            });
            TechTree.node(Blocks.copperWall);
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