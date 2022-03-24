import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getCuisine } from '../apiGetData';

import styled from 'styled-components';
import { motion } from 'framer-motion';


function Cuisine() {

    const params = useParams();

    const [cuisine, setCuisine] = useState([]);

    useEffect(() => {
        getCuisineData(params.type);
    }, [params])


    const getCuisineData = async (name) => {
        const results = await getCuisine(name);
        setCuisine(results);
    }

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {
                cuisine && (
                    cuisine.map(recipe => (
                        <Card key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}>
                                <img src={recipe.image} alt={recipe.title} />
                                <h4>{recipe.title}</h4>
                            </Link>
                        </Card>
                    ))
                )
            }
        </Grid>
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

export default Cuisine;