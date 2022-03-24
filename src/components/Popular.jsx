import { useState, useEffect } from 'react';

import { getPopular } from '../apiGetData';

import Recipes from './RecipesSlider';

import styled from 'styled-components';


function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopularData();
    }, []);


    const getPopularData = async () => {
        //Check LocalStorage
        const popularLocalStorage = localStorage.getItem('popular');

        if (popularLocalStorage) {
            setPopular(JSON.parse(popularLocalStorage));
        } else {
            const recipes = await getPopular();
            setPopular(recipes);
            localStorage.setItem('popular', JSON.stringify(recipes));
        }
    }

    return (
        <Wrapper>
            <h3>Popular recipes</h3>

            <Recipes recipes={popular} slides={4} />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;



export default Popular;