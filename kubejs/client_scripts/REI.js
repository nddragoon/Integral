onEvent("rei.remove.categories", event => {
    event.remove("twilightforest:uncrafting");
})

onEvent("rei.hide.items", event => {
    /* Hides all removed items
    (kubejs/startup_scripts/globals.js) */
    global.removed_items.forEach(item => {
        event.hide(item);
    });
})

onEvent("rei.group", event => {
    /* Groups together similar items with different NBT.
    Stolen from KubeJS wiki; not entirely sure how it works,
    but i think it makes an item object and then grabs the
    namespace and id to feed to the function.
    Not used for regular potions because any mod can add their
    own and i dont want them to be in different groups.
    TODO find a way to combine groups */
    const useNbt = [
        "apotheosis:potion_charm",
        "immersiveengineering:potion_bucket",
        "tconstruct:potion_bucket"
    ];
    useNbt.forEach(id => {
        const item = Item.of(id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.name, item)
    })
})