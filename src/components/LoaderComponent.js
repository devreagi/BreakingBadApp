import React from 'react';
import {LoaderImage} from '../components/styles/Loader.style';


export function LoaderComponent() {

    return (
        <LoaderImage>
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Heisenberg"/>
        </LoaderImage>
    )
}