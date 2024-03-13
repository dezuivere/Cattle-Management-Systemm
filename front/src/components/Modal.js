import "../styles/Modal.css";

// Modal.js
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
