import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Searched = () => {
    const [searched, setSearched] = useState([]);
    let params = useParams();
    useEffect(()=>{
        const getSearched = async (name) => {
            try {
                const api = await fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
                      import.meta.env.VITE_REACT_APP_API_KEY
                    }&query=${name}`
                  );
                  const data = await api.json();
                  setSearched(data.results);
            } catch (error) {
                console.log('error fetching data:', error);
            }
        }
        getSearched(params.search);
    },[params.search]);
    
  return (
    <div className="max-w-screen-2xl mx-auto px-4 mb-12 md:px-12 xl:px-28">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {
        searched.map((item)=>{
            return(
                <div key={item.id}>
                    <img className="rounded-xl object-cover hover:scale-105 duration-300" src={item.image} alt={item.title} />
                    <p className="text-gray-700">{item.title}</p>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default Searched
