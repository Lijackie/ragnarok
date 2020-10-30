import ItemListActionTypes from './item.types';

const INITIAL_STATE = {
    items: []
}

export const itemListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ItemListActionTypes.ITEM_LIST_REQUEST:
            return {
                loading: true,
                items: []
            }

        case ItemListActionTypes.ITEM_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }

        case ItemListActionTypes.ITEM_DETAILS:
            return {
                ...state,
                loading: false,
                items: state.items.find(item => item.id === action.payload.id)
            }

        case ItemListActionTypes.ITEM_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
};