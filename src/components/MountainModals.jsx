import React from 'react';

const MountainModals = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-lg max-h-lg">
        <button
          className=" top-2 right-2 text-white font-semibold border-2 border-black px-2 py-1 bg-red-600 flex    justify-center items-center rounded-lg absolute"
          onClick={onClose}
        >  x
        </button>
        <img src={imageSrc} alt="Full View" className="max-w-full max-h-96 mt-9" />
      </div>
    </div>
  );
};

export default MountainModals;