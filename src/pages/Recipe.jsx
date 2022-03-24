import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getRecipe } from '../apiGetData';

import styled from 'styled-components';


function Recipe() {

    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const params = useParams();

    useEffect(() => {
        getRecipeData(params.id);
    }, [params.id])


    const getRecipeData = async (id) => {
        const data = await getRecipe(id);
        setRecipe(data);
    }

    return (
        <div>
            {
                recipe && (
                    <RecipeCard>

                        <div className="recipeContent">
                            <div>
                                <h1>{recipe.title}</h1>
                                <img src={recipe.image} alt={recipe.title} />
                            </div>

                            <div>
                                <Button
                                    className={activeTab === 'instructions' ? 'active' : ''}
                                    onClick={() => setActiveTab('instructions')}
                                >Instruciones
                                </Button>

                                <Button
                                    className={activeTab === 'ingredients' ? 'active' : ''}
                                    onClick={() => setActiveTab('ingredients')}
                                >Ingredientes
                                </Button>

                                <div className="recipeText">
                                    {
                                        activeTab === 'instructions' && (
                                            <div>
                                                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                                                <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
                                            </div>
                                        )

                                    }
                                    {
                                        activeTab === 'ingredients' && (
                                            <div>
                                                <ul>
                                                    {
                                                        recipe.extendedIngredients.map(ingredient => (
                                                            <li key={ingredient.id}>{ingredient.original}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        )

                                    }
                                </div>

                            </div>
                        </div>

                    </RecipeCard>
                )
            }
        </div >
    )
}

const RecipeCard = styled.div`
    max-width: 960px;
    margin: 50px auto;

    .recipeContent {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-top: 3rem;   
    }

    img {
        width: 100%;
    }

    .recipeText {
        padding-top: 2rem;
    }


`;

const Button = styled.button`
    margin-right: 2rem;
    padding: 1rem 2rem;
    color: #333;
    background: #fff;
    border: 2px solid #333;
    font-weigth: 600;
    cursor: pointer;

    &.active {
        color: #fff;
        background: #333;
    }
`


export default Recipe;