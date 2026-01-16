const BugDelete = ({ onClose, onSubmit }) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Delete Bug</h2>
      <p>Are you sure you want to delete this bug?</p>
      <button
        onClick={onSubmit}
        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
      >
        Delete
      </button>
      <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
        Cancel
      </button>
    </>
  );
};

export default BugDelete;