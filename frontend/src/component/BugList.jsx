const BugList = ({ bugs, onEdit, onDelete }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Title</th>
          <th className="border border-gray-300 px-4 py-2">Priority</th>
          <th className="border border-gray-300 px-4 py-2">Status</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {bugs.map((bug) => (
          <tr key={bug.id}>
            <td className="border border-gray-300 px-4 py-2">{bug.id}</td>
            <td className="border border-gray-300 px-4 py-2">{bug.title}</td>
            <td className="border border-gray-300 px-4 py-2">{bug.priority}</td>
            <td className="border border-gray-300 px-4 py-2">{bug.status}</td>
            <td className="border border-gray-300 px-4 py-2">
              <button
                onClick={() => onEdit(bug)}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(bug)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BugList;