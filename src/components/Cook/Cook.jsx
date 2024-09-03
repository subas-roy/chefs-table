
const Cook = ({item, handlePreparing}) => {
  // console.log(item)
  const {recipe_id, recipe_name, preparing_time, calories} = item;
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button onClick={() => handlePreparing(item, recipe_id)} className="btn btn-accent rounded-full px-8 bg-[#0BE58A] border-none font-medium text-[#150B2B]">Preparing</button></td>
      </tr>
    </tbody>
  );
};

export default Cook;