import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom';

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    useEffect(()=>{
       
        const getCuisine = async (name) => {
            try {
                const api = await fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
                      import.meta.env.VITE_REACT_APP_API_KEY
                    }&cuisine=${name}`
                  );
                  const data = await api.json();
                  setCuisine(data.results);
            } catch (error) {
                console.log('error fetching data:', error);
            }
        }
        getCuisine(params.type);
        
    },[params.type]);
    
  return (
    <div className="max-w-screen-2xl mx-auto px-4 mb-12 md:px-12 xl:px-28">
    <h1 className="font-semibold text-3xl mb-6">{params.type}</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {
        cuisine.map((item) => {
            return (
                <div key={item.id}>
                    <NavLink to={"/recipe/" + item.id}>
                    <img className="rounded-xl object-cover hover:scale-105 duration-300" src={item.image} alt={item.title} />
                    <p className="text-gray-700">{item.title}</p>
                    </NavLink>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default Cuisine
