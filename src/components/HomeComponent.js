import React from 'react';
import {MainImg, MainSection} from './styles/Home.style'
import SmokeElement from "smoke-effect-react";

export function HomeComponent() {
    return (
        <MainSection>
            <MainImg>
                <img src={process.env.PUBLIC_URL + "/images/breakingbad.svg"} alt="logo breaking bad"/>
            </MainImg>
            <SmokeElement
                smokeSrc={process.env.PUBLIC_URL + "/images/smoke.png"}
                smokeOpacity="0.4"
            />
        </MainSection>
    )
}