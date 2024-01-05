import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {
    let params = useParams();
    const [details, setDetails] = useState("");
    const [active, setActive] = useState("ingredients");
  
    useEffect(()=>{
        const fetchDetails = async () => {
            try {
                    const api = await fetch(
                        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
                          import.meta.env.VITE_REACT_APP_API_KEY
                        }`
                      );
                      const data = await api.json();
                      console.log(data)
                      setDetails(data);
            
            } catch (error) {
                console.log('error fetching data:', error)
            }
        }
        fetchDetails();
        
    },[params.name])
 
  return (
    <div>
       <div className="max-w-screen-2xl mx-auto px-4 mb-12 md:px-12 xl:px-28">
    <div className='lg:flex lg:justify-between'>
        <div className=''>
        <p className='text-center lg:text-start text-2xl font-semibold my-3'>{details.title}</p>
        <img src={details.image} className='mx-auto' alt={details.title} />
        </div>
        
        <div>
        <div className='flex justify-center gap-4 my-6 '>
        <button className={ active === 'ingredients' ? 'bg-black text-white h-10 px-10':"bg-white text-black h-10 px-10 border border-black"} onClick={() => setActive("ingredients")}>Ingredients</button>
            <button className={ active === 'instructions' ? 'bg-black text-white h-10 px-10':"bg-white text-black h-10 px-10 border border-black"} onClick={() => setActive("instructions")}>Instructions</button>
          
        </div>
        {
            active === "instructions" ?
            <div>
                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p> 
                <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
            </div>
            :
       
            <ul>
                {details.extendedIngredients.map((ingredient)=>{
                    return <li key={ingredient.id}>{ingredient.original}</li>
                })}
            </ul>
        
        }
      
      
        </div>
        
       
        
      
    </div>
    </div>
    </div>
  )
}

export default Recipe
