// import PropTypes from 'prop-types';

import Recipe from "../Recipe/Recipe";
import { useEffect } from "react";
import { useState } from "react";
import WantToCook from "../WantToCook/WantToCook";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data.recipes))
            .catch(error => console.error('The error is',error))
    }, [])


    return (
        <div className="w-11/12 mx-auto py-4">
            <div className="text-center space-y-4">
                <h2 className="font-semibold text-4xl">Our Recipes: {recipes.length} </h2>
                <p className="w-3/4 mx-auto">Join a personalized cooking class designed to suit your taste, skill level, and culinary goals. Learn from expert chefs, elevate your kitchen skills, and create delicious dishes with confidence!</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-2/3 grid grid-cols-2 gap-6 py-4">
                    {
                        recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe}>
                        </Recipe>)
                    }
                </div>
                <div className="md:w-1/3 border rounded-lg p-3">
                    <WantToCook></WantToCook>
                </div>
            </div>
        </div>
    );
};

// Recipes.propTypes = {

// };

export default Recipes;