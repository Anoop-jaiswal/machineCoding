import { useState, type ReactNode } from "react";
import ReactDOM from "react-dom";
import "./PortalModalTest.css";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

function Modal({ children, onClose }: ModalProps) {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    portalRoot
  );
}

const PortalModalTest = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Hello React Portal</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h2>This is inside the portal!</h2>
          <p>Even though it's rendered outside the root DOM hierarchy.</p>
        </Modal>
      )}
    </div>
  );
};

export default PortalModalTest;



// A React Portal is a way to render children into a DOM node that exists 
// outside the hierarchy of the parent component.

// Normally, React components render inside their parent’s DOM tree.
//  But with portals, you can render them somewhere else in the DOM while keeping 
// them part of React’s virtual DOM tree (so state and context still work).

// This is especially useful for UI elements like:

// Modals / Dialogs
// Tooltips
// Dropdowns
// Popovers