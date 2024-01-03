import React, { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const getPopular = async () => {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=9`
        );
        const data = await api.json();
        setPopular(data.recipes);
      } catch (error) {
        console.log("error fetching data :", error);
      }
    };
    getPopular();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 mb-12 md:px-12 xl:px-28">
      <h1 className="font-semibold text-3xl m-6">Popular Picks</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {popular.map((recipe) => {
        return (
          <div  key={recipe.id}>
            <img className="rounded-xl object-cover" src={recipe.image} alt={recipe.title} />
            <p className="text-gray-700">{recipe.title}</p>
            </div>
            
          
        );
      })}
      </div>
    </div>
  );
};

export default Popular;
