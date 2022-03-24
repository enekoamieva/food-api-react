import { useState, useEffect } from 'react';

import { getVeggie } from '../apiGetData';

import Recipes from './RecipesSlider';

import styled from 'styled-components';


function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggieData();
    }, []);


    const getVeggieData = async () => {
        //Check LocalStorage
        const veggieLocalStorage = localStorage.getItem('veggie');

        if (veggieLocalStorage) {
            setVeggie(JSON.parse(veggieLocalStorage));
        } else {
            const recipes = await getVeggie();
            setVeggie(recipes);
            localStorage.setItem('veggie', JSON.stringify(recipes));
        }
    }

    return (
        <Wrapper>
            <h3>Veggie recipes</h3>

            <Recipes recipes={veggie} slides={3} />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

export default Veggie