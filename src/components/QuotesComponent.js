import React, {useEffect, useState} from 'react';
import QuotesData from '../quotes.json';
import {ItemInner, QuotesBox, QuotesButton, QuotesContainer, QuotesText} from './styles/Quotes.style'
import {MainSection} from "./styles/Home.style";


export function QuotesComponent() {

    const [quote, setQuote] = useState('');

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let randomQuote = Math.floor(Math.random() * QuotesData.length)
        console.log(randomQuote)
        setQuote(QuotesData[randomQuote])
    }

    return (
        <MainSection>
            <QuotesContainer>
                <ItemInner>
                    <QuotesText>
                        <p>&#8220;{quote.text}&#8221;</p>
                        <p>{quote.author}</p>
                    </QuotesText>
                    <QuotesBox>
                        <QuotesButton onClick={getQuote}>Siguiente</QuotesButton>
                    </QuotesBox>
                </ItemInner>
            </QuotesContainer>

        </MainSection>

    )
}