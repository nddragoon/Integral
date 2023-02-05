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