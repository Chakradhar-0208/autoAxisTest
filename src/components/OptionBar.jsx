const OptionBar = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <>
      <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-500 rounded-full p-1.5   shadow-md  z-50  fixed bottom-[35px] right-[35px] sm:hidden">
        <img
          src="https://res.cloudinary.com/dppnjyn8a/image/upload/v1753432945/a_g7enxw.png"
          alt="logo"
          className="h-[50px] relative top-1   "
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        />
      </div>
    </>
  );
};

export default OptionBar;
