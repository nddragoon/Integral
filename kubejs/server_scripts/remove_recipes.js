onEvent('recipes', event => {
    const remove_recipes_by_id = [
        'occultism:spirit_fire/otherworld_sapling_natural',
        'occultism:spirit_fire/otherstone'
    ]

    remove_recipes_by_id.forEach(recipe => {
        event.remove({id: recipe})
    })
})
