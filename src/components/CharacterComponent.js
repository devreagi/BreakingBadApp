import React, {useEffect, useState} from 'react';
import {Inner, Main} from './styles/Character.style';
import {ListCharacterComponent, SearchComponent} from '../components';


export function CharacterComponent() {

    const [person, setPerson] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        let cleanupFunction = false;

        const getPerson = async () => {
            const response = await fetch('https://www.breakingbadapi.com/api/characters');

            const result = await response.json();
            if (!cleanupFunction) setPerson(result);
            setLoading(false);
        }

        const searchPerson = () => {
            setPerson(person.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())))
        }

        searchText !== '' ? searchPerson() : getPerson()

    }, [searchText])

    return (
        <Main>
            <SearchComponent searchText={searchText} setSearchText={setSearchText}/>
            <Inner>
                <ListCharacterComponent person={person} loading={loading}/>
            </Inner>
        </Main>

    )
}