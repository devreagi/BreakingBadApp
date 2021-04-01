import React from 'react';
import {ListContainer} from './styles/ListDeath.style';
import {ItemDeathComponent, LoaderComponent} from '../components';

export function ListDeathComponent({person, loading}) {

    return loading ? (<LoaderComponent/>)
        : (
            <ListContainer>
                {
                    person.map(item => <ItemDeathComponent key={item.death_id} item={item}/>)
                }
            </ListContainer>
        )
}