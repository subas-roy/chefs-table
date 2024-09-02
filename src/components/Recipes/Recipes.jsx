import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  // load data
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, [])

  return (
    <section className="container mx-auto my-24">
      <h2 className="text-4xl font-medium text-center">Our Recipes</h2>
      <p className="mx-auto text-center my-8 w-2/3 text-[#150B2B]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      <div className="flex justify-between gap-6">
        <div className="grid gap-6 grid-cols-2">
          {
            recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
          }
        </div>
        
        {/* Tables */}
        <div>
          <div className="border-2 rounded-xl py-4">
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">Want to cook: 01</h2>
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
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 minutes</td>
                    <td>400 calories</td>
                    <td><button className="btn btn-accent rounded-full px-8 bg-[#0BE58A] border-none font-medium text-[#150B2B]">Preparing</button></td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 minutes</td>
                    <td>400 calories</td>
                    <td><button className="btn btn-accent rounded-full px-8 bg-[#0BE58A] border-none font-medium text-[#150B2B]">Preparing</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-4">Currently cooking: 02</h2>
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
                <tbody>
                  {/* row 1 */}
                  <tr>
                  <th>1</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 minutes</td>
                    <td>400 calories</td>
                    <td></td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                  <th>2</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 minutes</td>
                    <td>400 calories</td>
                    <td></td>
                  </tr>
                </tbody>
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