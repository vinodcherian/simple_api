import BugCreate from './BugCreate';
import BugEdit from './BugEdit';
import BugDelete from './BugDelete';

const BugModal = ({ modalType, bug, newBug, setNewBug, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        {modalType === "create" && (
          <BugCreate newBug={newBug} setNewBug={setNewBug} onClose={onClose} onSubmit={onSubmit} />
        )}
        {modalType === "edit" && (
          <BugEdit newBug={newBug} setNewBug={setNewBug} onClose={onClose} onSubmit={onSubmit} />
        )}
        {modalType === "delete" && (
          <BugDelete onClose={onClose} onSubmit={onSubmit} />
        )}
      </div>
    </div>
  );
};

export default BugModal;