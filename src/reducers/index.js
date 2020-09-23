const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED': 
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED': 
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'MENU_ERROR': 
            return {
                ...state,
                menu: state.menu,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const itemIdx = state.items.findIndex(item => item.id === id);    
            let newItem = {}

            if (state.items.find(item => item.id === id)) {
                    //тут стоимость будет равна прайсу, умноженному на количество
                newItem = {   
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    count: state.items.find(item => item.id === id).count + 1
                }
            } else {
                newItem = {   
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    count: 1
                };
            }

            if (state.items.find(item => item.id === id)) {
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIdx),
                        newItem,
                        ...state.items.slice(itemIdx + 1)
                    ],
                    total: state.total + item.price
                }
            };

            console.log(item.price);

            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                total: state.total + item.price
            }
            
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total: state.total - (state.items[itemIndex].price * state.items[itemIndex].count)
            }
        default:
            return state;
    }
}

export default reducer;