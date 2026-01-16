const BugCreate = ({ newBug, setNewBug, onClose, onSubmit }) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Create New Bug</h2>
      <input
        type="text"
        value={newBug.title}
        onChange={(e) => setNewBug({ ...newBug, title: e.target.value })}
        placeholder="Bug Title"
        className="border p-2 w-full mb-4"
      />
      <select
        value={newBug.priority}
        onChange={(e) => setNewBug({ ...newBug, priority: e.target.value })}
        className="border p-2 w-full mb-4"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        Create
      </button>
      <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
        Cancel
      </button>
    </>
  );
};

export default BugCreate;