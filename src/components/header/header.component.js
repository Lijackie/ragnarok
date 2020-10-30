import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { HeaderContainer, Div, P, LinkIcon, LinkButton, ButtonSubmit, Form, Input, StyledSelect } from './header.styles';

import { listItem } from '../../redux/item/item.action';


const Header = ({ match, history }) => {
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState(0);

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(listItem(select, search));
    };

    const handleChange = event => {
        const { value } = event.target;

        setSearch(value);
    };

    const handleSelect = event => {
        const { value } = event.target;

        setSelect(value)

    };

    return (
        <HeaderContainer>
            <Div>
                <LinkIcon to="/" onClick={() => setSearch('')}>
                    RO-DB
                </LinkIcon>
                <P>ver.c06ff28</P>
                
                <DropdownButton variant="dark" id="dropdown-basic-button" title="導覽表">
                    <Dropdown.Item as={LinkButton} to="/world">世界地圖</Dropdown.Item>
                </DropdownButton>
            </Div>

            <Form onSubmit={handleSubmit}>
                <Input value={search} onChange={handleChange} type="text" />
                <StyledSelect value={select} onChange={handleSelect}>
                    <option value="0">道具</option>
                    <option value="1">魔物</option>
                </StyledSelect>
                <ButtonSubmit onClick={() => history.push(`${match.url}search`)} type="submit">
                    搜尋
                </ButtonSubmit>
            </Form>
        </HeaderContainer>
    )
};

export default withRouter(Header);