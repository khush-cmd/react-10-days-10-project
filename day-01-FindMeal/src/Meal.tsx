import { useEffect } from "react";
import { useStore } from "./store";

const Meal = () => {
    const {meals,searchQuery ,setMeals,setSearchQuery} = useStore();

    useEffect(()=> {
        const fetchMeals = async() => {
            try {
                const response = await fetch(
                              "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

                            );
                            console.log( "Found")
                const data = await response.json();
                setMeals(data.meals);
            }
            catch( error){
                console.log("Error in data Fetching", error);
            }
        };
        fetchMeals();

    },[setMeals]);

    const filterMeal = meals.filter((meal) => 
        meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
    <div className="min-h-screen flex flex-col p-5 justify-center items-center bg-gray-50">
        <h1 className="text-4xl font-bold pb-3 text-teal-600">SeaFood Recipes</h1>
        <input type="text"
        placeholder="Seach Sea Food"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-teal-500 rounded-lg mb-5 text-center focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        <div>
            {filterMeal.length > 0 ? (
                filterMeal.map((meal) => (
                    <div
                    key={meal.idMeal}
                    className="bg-white shadow-md rounded-lg flex flex-col items-center"
                    >
                        <h2>{meal.strMeal}</h2>
                        <img 
                        src={meal.strMealThumb} alt="meal.strMeal"
                        className="w-full h-50 object-cover rounded-t-lg mb-4"
                        />
                    </div>
                ))
            ) : (
                <p>No Meal Found</p>
            )}
        </div>

    </div>
  )
}
export default Meal;