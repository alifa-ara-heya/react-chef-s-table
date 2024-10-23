import PropTypes from 'prop-types';
import { CiClock1 } from "react-icons/ci";
import { GoFlame } from "react-icons/go";

const Recipe = ({recipe}) => {
    // console.log(recipe);
    const {recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe;

    return (
        <div className='border p-4 space-y-3 rounded-xl'>
            <img className='rounded-lg h-[300px] w-full object-cover' src={recipe_image} alt={`image of ${recipe_name}`} />
            <h4 className='font-semibold text-xl'>{recipe_name}</h4>
            <p className='opacity-70 '>{short_description}</p>
            <hr />
            <ul className='font-medium pl-6'>Ingredients:{ingredients.map((ingredient, idx)=><span key={idx}>
                <li className='text-gray-500 list-disc font-normal space-y-2 list-inside'>{ingredient}</li>
            </span>)
            }
            </ul>
            <hr />
            <div className='flex gap-4 opacity-80'>
                <p className='flex items-center gap-2'><CiClock1/>{preparing_time} min</p>
                <p className='flex items-center gap-2'><GoFlame/>{calories} calories</p>
            </div>
            <button className='btn bg-lime-500'>Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
};

export default Recipe;