import { IoTimeOutline } from "react-icons/io5";
import { TbFlame } from "react-icons/tb";

const Recipe = ({recipe}) => {
  const {recipe_id, recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe
  console.log(ingredients)
  return (
    <div className="flex flex-col gap-4 border-2 p-4 rounded-xl">
      <img className="m-w-[331px]" src={recipe_image} alt="" />
      <h3 className="text-xl font-semibold">{recipe_name}</h3>
      <p className="text-[#878787]">{short_description}</p>
      <hr />
      <h4 className="text-lg font-medium">Ingredients: 6</h4>
      <ul className="text-[#878787]">
        {
          ingredients.map(i => <li>{i}</li>)
        }
      </ul>
      <hr />
      <div className="flex justify-between gap-4 text-[#878787]">
        <div className="flex gap-2 items-center">
          <p className="text-[20px]"><IoTimeOutline/></p>
          <p>{preparing_time}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-[20px]"><TbFlame/></p>
          <p>{calories}</p>
        </div>
      </div>
      <button className="btn w-48 btn-accent rounded-full px-8 text-[#150B2B] bg-[#0BE58A] border-none text-lg font-medium">Want to Cook</button>
    </div>
  );
};

export default Recipe;