import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header/Header'
import Recipes from './assets/components/Recipes/Recipes'
import SideBar from './assets/components/Sidebar/Sidebar'
import OurRecipes from './assets/components/OurRecipes/OurRecipes'


function App() {
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);


  //addRecipeToQueue is a function, recipeQueue is an array which stores the data when 'want to cook' btn is clicked.

  const addRecipeToQueue = (recipe) => {

    const isExisting = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExisting) {
      // const newRecipeQueue = [...recipeQueue, recipe];
      // console.log(newRecipeQueue);
      setRecipeQueue([...recipeQueue, recipe])
    } else {
      alert('recipe already exists in the queue.')
    }
  }
  console.log(recipeQueue);

  const handleRemove = id => {
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);

    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }

  const calculateTimeAndCalories = (time, calorie) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calorie)
  }


  return (
    <>
      <Header></Header>
      <div className='w-11/12 mx-auto py-4'>
        <OurRecipes></OurRecipes>
        <div className='flex flex-col md:flex-row gap-4'>
          <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
          <SideBar
            recipeQueue = {recipeQueue}
            handleRemove = {handleRemove} 
            preparedRecipe = {preparedRecipe}
            calculateTimeAndCalories = {calculateTimeAndCalories}
            totalTime = {totalTime}
            totalCalories = {totalCalories}
          ></SideBar>
        </div>
      </div>
    </>
  )
}

export default App;
