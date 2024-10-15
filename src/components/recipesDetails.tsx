import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./navBar";

interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

interface RecipeDetailType {
  title: string;
  image: string;
  instructions: string;
  extendedIngredients: Ingredient[];
}

const apiKey = "7bd437c5b57c45baba791bc1baf0608e";

function RecipeDetail() {
  const { recipeId } = useParams<{ recipeId: string }>();
  const [recipeData, setRecipeData] = useState<RecipeDetailType | null>(null);

  async function fetchRecipeDetails() {
    try {
      const response = await axios.get<RecipeDetailType>(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
      );
      setRecipeData(response.data);
    } catch (error) {
      console.error(
        "Error :",
        error
      );
    }
  }

  useEffect(() => {
    if (recipeId) {
      fetchRecipeDetails();
    }
  }, [recipeId]);

  if (!recipeData) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  const ingredients = recipeData.extendedIngredients || [];

  return (
    <>
      <NavBar />
      <div className="h-screen flex items-center justify-center bg-Bright-green p-4">
        <div className=" flex flex-col md:flex-row h-full w-full  rounded-lg shadow-lg bg-Bright-green">
          <div className=" flex-none w-1/2">
            <img
              src={recipeData.image}
              alt={recipeData.title}
              className="w-full   h-64 md:h-full object-cover rounded-l-lg"
            />
          </div>

          <div className="recipe-info flex-grow p-6 flex flex-col justify-center text-white">
            <h1 className="text-3xl font-bold text-center mb-2 text-white">
              {recipeData.title}
            </h1>
            <div className=" mt-4">
              <h2 className="text-lg font-semibold">Istruzioni:</h2>
              <p className="text-white">
                {recipeData.instructions || "Nessuna istruzione disponibile"}
              </p>
            </div>

            <div className="overflow-y-auto max-h-40 border-t-2 border-black pt-4 mt-4">
              <h2 className="text-lg font-semibold">Ingredienti:</h2>
              <ul className="list-none">
                {ingredients.map((ingredient) => (
                  <li key={ingredient.id} className="text-white">
                    {ingredient.name}: {ingredient.amount} {ingredient.unit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
