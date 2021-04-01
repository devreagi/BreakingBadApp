import React from 'react';
import {MainImg, MainSection} from './styles/Home.style'
import SmokeElement from "smoke-effect-react";

export function EpisodeComponent() {
    return (
        <MainSection>
            <MainImg>
                <img src={process.env.PUBLIC_URL + "/images/notfound.png"} alt="404 not found"/>
            </MainImg>
            <SmokeElement
                smokeSrc={process.env.PUBLIC_URL + "/images/smoke.png"}
                smokeOpacity="0.4"
            />
        </MainSection>
    )
}