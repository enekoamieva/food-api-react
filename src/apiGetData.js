const apiKey = process.env.REACT_APP_API_KEY;
const URL = 'https://api.spoonacular.com/recipes';


export const getVeggie = async () => {
    const getApiData = await fetch(`${URL}/random?apiKey=${apiKey}&number=9&tags=vegetarian`);
    const { recipes } = await getApiData.json();
    return recipes
}


export const getPopular = async () => {
    const getApiData = await fetch(`${URL}/random?apiKey=${apiKey}&number=9`);
    const { recipes } = await getApiData.json();
    return recipes;
}


export const searchRecipes = async (text) => {
    const getApiData = await fetch(`${URL}/complexSearch?apiKey=${apiKey}&query=${text}`);
    const { results } = await getApiData.json();
    return results;
}


export const getCuisine = async (name) => {
    const getApiData = await fetch(`${URL}/complexSearch?apiKey=${apiKey}&cuisine=${name}`);
    const { results } = await getApiData.json();
    return results;
}


export const getRecipe = async (id) => {
    const getApiData = await fetch(`${URL}/${id}/information?apiKey=${apiKey}`);
    const data = await getApiData.json();
    return data;
}