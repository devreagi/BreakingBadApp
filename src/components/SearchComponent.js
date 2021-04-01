import React from 'react';
import {Input, SearchContainer} from './styles/Search.style';


export function SearchComponent({searchText, setSearchText}) {

    return (
        <SearchContainer>
            <Input
                type="text"
                placeholder="Busqueda por nombre"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}/>
        </SearchContainer>
    )
}