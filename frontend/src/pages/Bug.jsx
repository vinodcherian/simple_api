import { useState, useEffect } from 'react';
import axios from 'axios';
import BugModal from '../component/BugModal';
import BugList from '../component/BugList';

const Bug = () => {
  const [bugs, setBugs] = useState([]);
  const [modalType, setModalType] = useState(""); // "create", "edit", "delete"
  const [currentBug, setCurrentBug] = useState(null); // Holds the bug being edited or deleted
  const [newBug, setNewBug] = useState({ title: "", priority: "low", status: "open" }); // For creating or editing a bug
  const apiUrl = `http://localhost:8000/api/bug`;

  // Fetch all bugs
  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await axios.get(apiUrl);
        setBugs(response.data);
      } catch (error) {
        console.error("Error fetching bugs:", error);
      }
    };

    fetchBugs();
  }, []);

  // Add a new bug
  const addBug = async () => {
    try {
      const response = await axios.post(apiUrl, newBug);
      setBugs([...bugs, response.data]);
      closeModal();
    } catch (error) {
      console.error("Error adding bug:", error);
    }
  };

  // Update a bug
  const updateBug = async () => {
    try {
      const updatedBug = {
      ...newBug,
    };
      const response = await axios.put(`${apiUrl}/${currentBug.id}`, updatedBug);
      setBugs(bugs.map((bug) => (bug.id === currentBug.id ? response.data : bug)));
      closeModal();
    } catch (error) {
      console.error("Error updating bug:", error);
    }
  };

  // Delete a bug
  const deleteBug = async () => {
    try {
      await axios.delete(`${apiUrl}/${currentBug.id}`);
      setBugs(bugs.filter((bug) => bug.id !== currentBug.id));
      closeModal();
    } catch (error) {
      console.error("Error deleting bug:", error);
    }
  };

  // Open modal
  const openModal = (type, bug = null) => {
    setModalType(type);
    setCurrentBug(bug);
    if (type === "edit" && bug) {
      setNewBug({ title: bug.title, priority: bug.priority, status: bug.status });
    } else if (type === "create") {
      setNewBug({ title: "", priority: "low", status: "open" });
    }
  };

  // Close modal
  const closeModal = () => {
    setModalType("");
    setCurrentBug(null);
    setNewBug({ title: "", priority: "low", status: "open" });
  };

  const handleSubmit = () => {
    if (modalType === "create") addBug();
    if (modalType === "edit") updateBug();
    if (modalType === "delete") deleteBug();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Bug Page</h1>
        <button
          onClick={() => openModal("create")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create New Bug
        </button>
      </div>

      <BugList bugs={bugs} onEdit={(bug) => openModal("edit", bug)} onDelete={(bug) => openModal("delete", bug)} />

      {modalType && (
        <BugModal
          modalType={modalType}
          bug={currentBug}
          newBug={newBug}
          setNewBug={setNewBug}
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Bug;