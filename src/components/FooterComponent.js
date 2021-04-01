import React from 'react';
import {MainImg, MainSection} from './styles/Home.style'

export function FooterComponent() {
    return (
        <MainSection>
            <MainImg>
                <img src={process.env.PUBLIC_URL + "/images/notfound.png"} alt="404 not found"/>
            </MainImg>
        </MainSection>
    )
}
