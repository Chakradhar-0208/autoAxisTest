// import { ModeToggle } from "./mode-toggle";
// import { Button } from "@/components/ui/button";
// import { FiHeart } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { useTheme } from "./theme-provider";
// const Header = ({ isLogged, setIsLogged, checkLogin }) => {
//   const { theme } = useTheme();

//   return (
//     <div className=" rounded-b-xl bg-white/60 dark:bg-[#000000]/80 backdrop-blur-xl shadow-md sticky top-0 bg-white text-black dark:bg-[#000000] dark:text-white border-b-1 h-[80px] mx-auto w-full flex space-x-3 items-center px-2 md:px-6 lg:px-16 justify-between z-50 ">
//       <a href="/">
//         <img
//           src="https://res.cloudinary.com/dppnjyn8a/image/upload/v1753210118/LOGO_oecgpj.png"
//           alt="logo"
//           className="max-w-[10rem] sm:max-w-[12rem] transition-all  duration-300"
//         />
//       </a>

//       <div className="hidden lg:flex w-full max-w-sm items-center rounded-md h-11">
//       </div>

//       <div className="flex items-center space-x-5 underline font-semibold">
//         <Link to="/userCars">
//           <p>{localStorage.getItem("userName")}</p>
//         </Link>
//         <FiHeart className="w-5 h-5 -mr-0.5 hidden sm:block" />
//       <ModeToggle />
//         <Link to="/uploadCar">
//           <Button className="rounded-full w-20 text-lg h-10 hidden sm:flex">
//             Sell
//           </Button>
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default Header;

import { Button } from "@/components/ui/button";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div
      className="sticky top-0 z-50 w-full h-[80px] mx-auto px-1.5 md:px-6 lg:px-16 flex justify-between items-center rounded-b-xl border-b border-gray-900 border-opacity-25  shadow-md
       bg-clip-padding backdrop-filter backdrop-blur-xl bg-gray-900 bg-opacity-30 backdrop-saturate-100 backdrop-contrast-100  text-white"
    >
      <a href="/">
        <img
          src="https://res.cloudinary.com/dppnjyn8a/image/upload/v1753210118/LOGO_oecgpj.png"
          alt="logo"
          className="max-w-[10rem]  sm:max-w-[12rem] transition-all duration-300"
        />
      </a>

      <div className="hidden lg:flex w-full max-w-sm items-center rounded-md h-11"></div>

      <div className="flex items-center space-x-5 underline font-semibold">
        <Link to="/userCars" className="hidden sm:block">
          <p>{localStorage.getItem("userName")}</p>
        </Link>
        {/* <img
        onClick={()=>{setSidebarOpen(!sidebarOpen)}}
          src="https://res.cloudinary.com/dppnjyn8a/image/upload/v1753432945/a_g7enxw.png"
          alt="logo"
          className="h-[60px] relative top-1 sm:hidden "
        /> */}

        <FiHeart className="w-5 h-5 -mr-0.5 hidden sm:block " />

        {/* <ModeToggle /> */}

        <Link to="/uploadCar">
          <Button className="rounded-full w-20 text-lg h-10 hidden sm:flex">
            Sell
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
