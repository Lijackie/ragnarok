import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ItemPage = ({ match }) => {

    const itemList = useSelector(state => state.itemList);
    const { items } = itemList;

    const item = items.find(item => item.id === match.params.id);
  
    return (
        <div>
            <Link to="/search">Go Back</Link>
            { item !== undefined ? <img src={item.image} alt={item.id} /> : null}
        </div>
    );
};

export default ItemPage;