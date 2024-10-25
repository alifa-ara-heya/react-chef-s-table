
import PropTypes from 'prop-types';

const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories  }) => {
    // const {recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (


        <div className="md:w-1/3 border p-6 rounded-lg">


            {/* want to cook table */}

            <div className="overflow-x-auto">
                <h2 className="font-semibold text-2xl mb-3 ">Want to Cook: {recipeQueue.length} </h2>
                <hr />
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            recipeQueue.map((recipe, idx) =>
                                <tr className='text-gray-500 hover' key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                    <th><button onClick={() => {handleRemove(recipe.recipe_id)
                                    calculateTimeAndCalories(Number(recipe.preparing_time), Number(recipe.calories))
                                    }
                                    } className='btn bg-lime-500'>Preparing</button></th>
                                    
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>


            {/* currently cooking table */}


            <div className="overflow-x-auto">
                <h2 className="font-semibold text-2xl mb-3 ">Currently Cooking: {preparedRecipe.length} </h2>
                <hr />
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            preparedRecipe.map((recipe, idx) =>
                                <tr className='text-gray-500 hover' key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                </tr>)
                        }
                        <hr />

                        <tr className='text-gray-500 hover'>
                            <th></th>
                            <td></td>
                            <td>Total time: {totalTime} </td>
                            <td>Total Calories: {totalCalories} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

Sidebar.propTypes = {
    recipeQueue: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    preparedRecipe: PropTypes.array.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired,
    calculateTimeAndCalories: PropTypes.func.isRequired
};

export default Sidebar;