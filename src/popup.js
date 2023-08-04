const Modal = ({ children, closeModal }) => {
  return (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-green-500 w-5/12 text-white rounded p-6 m-4 max-h-full text-center">
            <button onClick={closeModal} className="absolute border border-black float-right right-0 top-0">Close</button>
            {children}
            </div>
        </div>
  );
};

export default Modal;
