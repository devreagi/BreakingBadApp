import React, {useEffect, useState} from 'react';
import {Inner, Main} from './styles/Death.style';
import {ListDeathComponent, SearchComponent} from '../components';

export function DeathComponent() {
    const [person, setPerson] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        let cleanupFunction = false;

        const getPersonDeath = async () => {
            const response = await fetch('https://www.breakingbadapi.com/api/deaths');

            const result = await response.json();
            if (!cleanupFunction) setPerson(result);
            setLoading(false);
        }

        const searchPersonDeath = () => {
            setPerson(person.filter(item => item.death.toLowerCase().includes(searchText.toLowerCase())))
        }

        searchText !== '' ? searchPersonDeath() : getPersonDeath()

    }, [searchText])

    return (
        <Main>
            <SearchComponent searchText={searchText} setSearchText={setSearchText}/>
            <Inner>
                <ListDeathComponent person={person} loading={loading}/>
            </Inner>
        </Main>

    )
}