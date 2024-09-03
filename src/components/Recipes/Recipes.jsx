import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooklist from "../Cooklist/Cooklist";
import Cookings from "../Cookings/Cookings";
import { toast } from "react-toastify";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const [cookList, setCookList] = useState([]);
  const [cookings, setCookings] = useState([]);

  // load data
  useEffect(() => {
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, [])

  const addToCook = (recipe) => {
    if (!cookList.includes(recipe)) {
      
      const newCookList = [... cookList, recipe]
      setCookList(newCookList)
    }
    else {
      toast.warn("Recipe already exists!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }

  const handlePreparing = (recipe, id) => {
    const newCookings = [... cookings, recipe]
    setCookings(newCookings)

    // remove from cooklist
    const remainingCook = cookList.filter(cook => cook.recipe_id !== id);
    setCookList(remainingCook);
  }

  return (
    <section className="container mx-auto my-24">
      <h2 className="text-4xl font-medium text-center">Our Recipes</h2>
      <p className="mx-auto text-center my-8 w-2/3 text-[#150B2B]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      <div className="flex justify-between gap-6">
        <div className="grid gap-6 grid-cols-2">
          {
            recipes.map(recipe => <Recipe recipe={recipe} addToCook={addToCook} ></Recipe>)
          }
        </div>
        
        {/* Tables */}
        <div>
          <div className="border-2 rounded-xl py-4">
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">Want to cook: {cookList.length}</h2>
            <hr />
            <div className="overflow-x-auto">
              <Cooklist cookList={cookList}  handlePreparing={handlePreparing}></Cooklist>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-4">Currently cooking: {cookings.length}</h2>
            <hr />
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                {
                  cookings.map((cookings) => <Cookings cookings={cookings}></Cookings>)
                }
              </table>

              <div className="flex gap-6 mt-4 text-[#282828] font-medium justify-end">
                <p>Total Time = <br />
                45 minutes</p>
                <p>Total Calories = <br />
                1050 calories</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Recipes;