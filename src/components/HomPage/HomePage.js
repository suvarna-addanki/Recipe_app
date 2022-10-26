import React,{useState, useCallback,useContext } from 'react'
import { myContext } from '../context/context'
import'./HomePage.scss'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const {fetchHomepageMeals, recipes} = useContext(myContext)

  const fetchMealHandler = useCallback(() => {
    fetchHomepageMeals(searchTerm)
  },[searchTerm, fetchHomepageMeals])

  //console.log(searchTerm)

  return (
    <div className='home'>
      <div className='home-search'>
        <input type="text" 
         placeholder='Search a recipe here...'
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         />
        <button onClick={fetchMealHandler}> Search Recipe</button>
      </div>

      <div classname='home-recipes'>
        
        {recipes ? (
          recipes.map(recipe => (
          <div className="home-recipes-grid" key={recipe.idMeal}>
            <img src={recipe.strMealThumb} alt= "#" />
            <h4>{recipe.strMeal}</h4>            
          </div>
          ))
        
        ) : ( <h2>No recipes found! Try another word...</h2>

        )}

      </div>
        
    </div>
  )
}

export default HomePage