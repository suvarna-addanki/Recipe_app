import React, {createContext,useCallback,useState} from "react";
import axios from "axios";

 export const myContext = createContext();

 export const AppContext = ({children}) => {
    const[recipes, setRecipes] = useState([])
    const[categories, setCategories] = useState([])
    const[randomRecipe, setRandomRecipe] = useState([])

    const fetchHomepageMeals = useCallback((searchTerm) =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res =>{
            console.log(res.data.meals)
            setRecipes(res.data.meals)
        })
    },[])

    return (
        <myContext.Provider value={{fetchHomepageMeals, recipes}}>
            {children}
        </myContext.Provider>
    )
 }

