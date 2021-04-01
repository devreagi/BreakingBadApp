import React from 'react';
import {ListContainer} from './styles/ListCharacter.style';
import {ItemCharacterComponent, LoaderComponent} from '../components';

export function ListCharacterComponent({person, loading}) {

    return loading ? (<LoaderComponent/>)
        : (
            <ListContainer>
                {
                    person.map(item => <ItemCharacterComponent key={item.char_id} item={item}/>)
                }
            </ListContainer>
        )
}