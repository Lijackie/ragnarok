import ItemListActionTypes from './item.types';

import items from '../../datas/items.data';
import monsters from '../../datas/monsters.data';

export const listItem = (select, search) => async (dispatch) => {
    try {
        dispatch({ type: ItemListActionTypes.ITEM_LIST_REQUEST })

        const selectType = [items, monsters];

        const data = search !== '' ? selectType[select].filter(item => item.name.includes(search)) : [];

        dispatch({
            type: ItemListActionTypes.ITEM_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ItemListActionTypes.ITEM_LIST_FAIL,
            payload: error
        })
    }
}