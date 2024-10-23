import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header/Header'
import Recipes from './assets/components/Recipes/Recipes'
import SideBar from './assets/components/Sidebar/Sidebar'
import OurRecipes from './assets/components/OurRecipes/OurRecipes'


function App() {

  const [recipesWantToCook, setRecipesWantToCook] = useState([]);

  const handleAddToWantToCook = (recipe) => {
    console.log('recipe adding soon');
    const newRecipesWantToCook = [...recipesWantToCook, recipe];
    setRecipesWantToCook(newRecipesWantToCook)
  }

  return (
    <>

      <Header></Header>
      <div className='w-11/12 mx-auto py-4'>
        <OurRecipes></OurRecipes>
        <div className='flex flex-col md:flex-row gap-4'>
          <Recipes handleAddToWantToCook={handleAddToWantToCook}></Recipes>
          <SideBar></SideBar>
        </div>
      </div>
    </>
  )
}

export default App;
