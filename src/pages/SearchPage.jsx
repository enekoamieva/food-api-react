import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { searchRecipes } from '../apiGetData';

import styled from 'styled-components';
import { motion } from 'framer-motion';


function SearchPage() {

    const [recipes, setRecipes] = useState([]);

    const params = useParams();

    useEffect(() => {
        searchRecipesData(params.text);
    }, [params.text])


    const searchRecipesData = async (text) => {
        const results = await searchRecipes(text);
        setRecipes(results);
    }


    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {
                recipes.length > 0
                    ? recipes.map(recipe => (
                        <Card key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}>
                                <img src={recipe.image} alt={recipe.title} />
                                <h4>{recipe.title}</h4>
                            </Link>
                        </Card>

                    ))
                    : <h3>No se han encontrado resultados</h3>
            }
        </Grid >
    )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default SearchPage;