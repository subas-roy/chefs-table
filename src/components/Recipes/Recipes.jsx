import { IoTimeOutline } from "react-icons/io5";
import { TbFlame } from "react-icons/tb";

const Recipes = () => {
  return (
    <section className="container mx-auto my-24">
      <h2 className="text-4xl font-medium text-center">Our Recipes</h2>
      <p className="mx-auto text-center my-8 w-2/3 text-[#150B2B]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      <div className="flex justify-between gap-6">
        <div className="flex flex-col gap-4 border-2 p-4 rounded-xl">
          <img src="https://i.ibb.co/fNVkDgn/recipe-1.jpg" alt="" />
          <h3 className="text-xl font-semibold">Spaghetti Bolognese</h3>
          <p className="text-[#878787]">Classic Italian pasta dish with savory meat sauce.</p>
          <hr />
          <h4 className="text-lg font-medium">Ingredients: 6</h4>
          <ul className="text-[#878787]">
            <li>500g ground beef</li>
            <li>1 onion, chopped</li>
            <li>2 cloves garlic, minced</li>
          </ul>
          <hr />
          <div className="flex justify-between gap-4 text-[#878787]">
            <div className="flex gap-2 items-center">
              <p className="text-[20px]"><IoTimeOutline/></p>
              <p>30 minutes</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-[20px]"><TbFlame/></p>
              <p>600 calories</p>
            </div>
          </div>
          <button className="btn w-48 btn-accent rounded-full px-8 text-[#150B2B] bg-[#0BE58A] border-none text-lg font-medium">Want to Cook</button>
        </div>
        <div className="flex flex-col gap-4 border-2 p-4 rounded-xl">
          <img src="https://i.ibb.co/fNVkDgn/recipe-1.jpg" alt="" />
          <h3 className="text-xl font-semibold">Spaghetti Bolognese</h3>
          <p className="text-[#878787]">Classic Italian pasta dish with savory meat sauce.</p>
          <hr />
          <h4 className="text-lg font-medium">Ingredients: 6</h4>
          <ul className="text-[#878787]">
            <li>500g ground beef</li>
            <li>1 onion, chopped</li>
            <li>2 cloves garlic, minced</li>
          </ul>
          <hr/>
          <div className="flex justify-between gap-4 text-[#878787]">
            <div className="flex gap-2 items-center">
              <p className="text-[20px]"><IoTimeOutline/></p>
              <p>30 minutes</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-[20px]"><TbFlame/></p>
              <p>600 calories</p>
            </div>
          </div>
          <button className="btn w-48 btn-accent rounded-full px-8 text-[#150B2B] bg-[#0BE58A] border-none text-lg font-medium">Want to Cook</button>
        </div>
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
    </section>

  );
};

export default Recipes;