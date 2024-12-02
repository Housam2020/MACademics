import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md max-h-full overflow-y-auto relative">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-4xl font-bold text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 shadow-lg"
          style={{ 
            backgroundColor: 'white', 
            borderRadius: '50%', 
            padding: '0.5rem', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;