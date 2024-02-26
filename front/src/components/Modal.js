import "../styles/Modal.css"

// Modal.js
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      
      <div className="modal-overlay" onClick={onClose}>
          <div>
            <h2>Cow details</h2>
          </div>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>&times;</span>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  
  export default Modal;
