

const Cookings = ({cookings}) => {
  // console.log(cookings)
  return (
    <tbody>
      <tr>
      <th>1</th>
        <td>{cookings.recipe_name}</td>
        <td>{cookings.preparing_time}</td>
        <td>{cookings.calories}</td>
        <td></td>
      </tr>
    </tbody>
  );
};

export default Cookings;