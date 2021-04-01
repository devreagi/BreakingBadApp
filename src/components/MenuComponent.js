import React from 'react';
import {Item, MenuItems} from './styles/Menu.style';
import {NavLink} from 'react-router-dom';

export function MenuComponent() {

    const menuItems = [
        {to: "/", name: "Home"},
        {to: "/characters", name: "Personajes"},
        {to: "/episodes", name: "Episodios"},
        {to: "/quotes", name: "Frases"},
        {to: "/deaths", name: "Muertes"}
    ]

    return (
        <nav>
            <MenuItems>
                {menuItems.map(item =>
                    <Item key={item.name}>
                        <NavLink exact to={item.to}>{item.name}</NavLink>
                    </Item>)}
            </MenuItems>
        </nav>
    )
}