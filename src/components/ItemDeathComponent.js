import React, {useEffect, useRef, useState} from 'react';
import {ItemButton, ItemContainer, ItemContent, ItemText, ItemTitle} from './styles/ItemDeath.style';


export function ItemDeathComponent({item}) {

    const [toggleActive, setToggleActive] = useState(false);
    const itemRef = useRef();

    function isToggle() {
        setToggleActive(!toggleActive)
    }


    useEffect(() => {
        function isTarget(e) {
            if (!itemRef.current?.contains(e.target)) {
                setToggleActive(false)
            }
        }

        document.addEventListener('click', isTarget)
        return () => document.removeEventListener('click', isTarget)
    }, [])


    return (
        <ItemContainer className={toggleActive ? 'active' : ''} ref={itemRef}>

            <img src={process.env.PUBLIC_URL + "/images/lapida.jpg"} alt={item.death}/>

            <ItemButton onClick={isToggle} className={toggleActive ? 'active' : ''}><img
                src={process.env.PUBLIC_URL + "/images/fly.svg"} alt="icono mosca volando"/></ItemButton>

            {toggleActive &&
            <ItemContent>
                <ItemTitle>{item.death}</ItemTitle>
                <hr/>
                <ItemText>
                    <p><span>Causa:</span> {item.cause}</p>
                    <p>
                        <span>Responsable:</span> {item.responsible}
                    </p>
                    <p><span>Ultimas Palabras:</span> {item.last_words}</p>
                    <p><span>Temporada:</span> {item.season}</p>
                    <p><span>Episodio:</span> {item.episode}</p>
                    <p><span>Numero de muertes:</span> {item.number_of_deaths}</p>
                </ItemText>
            </ItemContent>
            }

        </ItemContainer>

    )
}