import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React, { useEffect, useState } from "react";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    const getVeggie = async () => {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=9&tags=vegetarian`
        );
        const data = await api.json();
        setVeggie(data.recipes);
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };
    getVeggie();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 mb-12 md:px-12 xl:px-28">
      <h1 className="font-semibold text-3xl mb-6">Our vegetarian Picks</h1>
      

      <Splide options={{ perPage: 3, autoplay: true, type: "loop", pagination: true, rewind: true, gap: 8, arrows:true, drag: "free" }}>
        {veggie.map((recipe) => {
          return (
            <SplideSlide>
              <div key={recipe.id}>
              <div className="relative">
                
                <div className="absolute w-full rounded-md p-5 text-white font-semibold h-full bg-black/50">
                <p className="">{recipe.title}</p>
                </div>
                <img className="rounded-md" src={recipe.image} alt={recipe.title} />
                </div>
                </div>
            </SplideSlide>
          );
        })}
      </Splide>
      
    </div>
  );
};

export default Veggie;
