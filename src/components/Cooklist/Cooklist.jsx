import Cook from "../Cook/Cook";

const Cooklist = ({cookList, handlePreparing}) => {
  return (
    <div>
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
          cookList.map(item => <Cook item={item} handlePreparing={handlePreparing}></Cook>)
        }
      </table>
    </div>
  );
};

export default Cooklist;