function nodeRoot(name, content, children){
    return TechTree.nodeRoot(name, content, children);
}
function node(content, children){
    return TechTree.node(content, children);
}
function node(content, requirements, children){
    return TechTree.node(content, requirements, children);
}
function node(block){
    return TechTree.node(block);
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
        nodeRoot("serpulo-parallel", Blocks.coreShard, ()=> {
            node(HBlock("quarry"), ()=>{
            });
        });
    }
});
Events.on(EventType.ContentInitEvent, cons(() => {
	SerpuloParallelTechTree.load();
}));