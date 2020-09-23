const menuLoaded = (newValue) => {
    return {
        type: 'MENU_LOADED',
        payload: newValue
    }
}
const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
}
const menuError = () => {
    return {
        type: 'MENU_ERROR',
    }
}
const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}
const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart
};