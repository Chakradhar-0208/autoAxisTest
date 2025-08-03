import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/30 h-screen  z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed bottom-[120px] right-[10px] h-[200px]   z-40 bg-black/30 backdrop-blur-lg text-white flex justify-center items-center border border-gray-600 shadow-lg transition-all rounded-xl  duration-300 ease-in-out
        ${
          isOpen
            ? "  translate-y-0    w-[120px] opacity-100 "
            : " w-[80px]   mr-[16px] opacity-0  translate-y-[20%] pointer-events-none  "
        }`}
      >
        <ul
          className={`space-y-4 text-lg font-semibold ${
            isOpen ? "opacity-100" : ""
          }`}
        >
          <li>
            {" "}
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link to="/" onClick={onClose}>
              About us
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link to="/uploadCar" onClick={onClose}>
              Sell Car
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link to="/userCars" onClick={onClose}>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
