import PropTypes from 'prop-types';

import Recipe from "../Recipe/Recipe";
import { useEffect } from "react";
import { useState } from "react";


const Recipes = ({handleAddToWantToCook}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data.recipes))
            .catch(error => console.error('The error is',error))
    }, [])


    return (
            
                <div className="md:w-2/3 grid grid-cols-2 gap-6">
                    {
                        recipes.map((recipe) => <Recipe 
                            key={recipe.id} 
                            recipe={recipe}
                            handleAddToWantToCook = {handleAddToWantToCook}
                        >
                        </Recipe>)
                    }
                </div>
               
        
    );
};

Recipes.propTypes = {
    handleAddToWantToCook: PropTypes.func.isRequired
};

export default Recipes;