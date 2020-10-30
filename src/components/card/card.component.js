import React from 'react';

import { CardContainer, NameLink, CardHeader } from './card.styles';


const Card = ({ item }) => {
    return (
        <CardContainer>
            <CardHeader>
                <span>{item.id}</span>
                <img src={item.icon} alt="item" />
                <NameLink to={`/${item.type}/${item.id}`}>
                    {item.name}
                </NameLink>
            </CardHeader>
            <p>{item.description} _ 重量: {item.gravity}</p>
            
        </CardContainer>
    );
};

export default Card;