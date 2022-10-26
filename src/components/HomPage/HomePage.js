import React,{useState } from 'react'
import'./HomePage.scss'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("")

  console.log(searchTerm)

  return (
    <div className='home'>
      <div className='home-search'>
        <input type="text" 
         placeholder='Search a recipe here...'
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         />
        <button> Search Recipe</button>
      </div>

      <div classname='home-recipes'>

      </div>
        
    </div>
  )
}

export default HomePage