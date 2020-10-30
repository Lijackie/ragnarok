import React from 'react';
import { useSelector } from 'react-redux';

import { SearchPageContainer } from './searchpage.styles';

import Card from '../../components/card/card.component';

const SearchPage = () => {
    const itemList = useSelector(state => state.itemList);
    const { items } = itemList;

    return (
        <SearchPageContainer>
            { items !== [] ? items.map(item => (<Card key={item.id} item={item} />)) : null }
        </SearchPageContainer>
    );
};

export default SearchPage;