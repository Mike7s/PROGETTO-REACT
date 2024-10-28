import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/card";

function App() {
  interface Recipe {
    id: number;
    title: string;
    image: string;
  }

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [inputStorage, setInputStorage] = useState<string>("");
  const apiKey = import.meta.env.VITE_API_KEY;

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=${apiKey}&query=${inputStorage}`
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputStorage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputStorage.length === 0) {
      alert("Insert a recipe");
      return;
    }

    searchRecipes();
  };

  return (
    <div className="min-h-screen bg-custom-image bg-cover bg-center">
      <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Search Vegetarian Recipes
        </h1>
        <form onSubmit={handleSubmit} className="flex mb-4">
          <input
            className="mr-2 h-12 rounded-lg pl-4 text-gray-800 focus:outline-none"
            type="text"
            value={inputStorage}
            onChange={handleInputChange}
            placeholder="Search a recipe"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold h-12 px-6 rounded-lg"
          >
            Search
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {recipes &&
            recipes.length > 0 &&
            recipes.map((recipe) => (
              <Card
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                img={recipe.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
