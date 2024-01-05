import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {
    let params = useParams();
    const [details, setDetails] = useState("");
    useEffect(()=>{
        const fetchDetails = async () => {
            try {
                    const api = await fetch(
                        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
                          import.meta.env.VITE_REACT_APP_API_KEY
                        }`
                      );
                      const data = await api.json();
                    //   console.log(data)
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
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8"> */}
    <div className=' md:flex md:justify-between'>
        <div className='mx-auto'>
        <p className='text-2xl font-semibold my-3'>{details.title}</p>
        <img src={details.image} className='' alt={details.title} />
        </div>
        
        <div className='flex justify-evenly gap-4 '>
            <button className='bg-black text-white h-10 px-3'>Instructions</button>
            <button className='bg-black text-white h-10 px-3'>Ingredients</button>
        </div>
      
    </div>
    {/* </div> */}
    </div>
    </div>
  )
}

export default Recipe
