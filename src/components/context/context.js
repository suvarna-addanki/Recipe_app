import React, {createContext,useCallback,useState} from "react";
import axios from "axios";

 export const myContext = createContext();

 export const AppContext = ({children}) => {
    const[recipes, setRecipes] = useState([])
    const[categories, setCategories] = useState([])
    const[randomRecipe, setRandomRecipe] = useState([])

    const fetchHomepageMeals = useCallback(() =>{
        axios.get(`www.themealdb.com/api/json/v1/1/search.php?s`)
    },[])

    return (
        <myContext.Provider>
            {children}
        </myContext.Provider>
    )
 }

