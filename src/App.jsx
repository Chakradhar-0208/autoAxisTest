import { Toaster } from "sonner";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import DotGrid from "./components/DotGrid";
import { useEffect, useState } from "react";
import ListACar from "./components/ListACar";
import UserCars from "./components/UserCars";
import OptionBar from "./components/OptionBar";
import UpdateCar from "./components/UpdateCar";
import CarDetails from "./components/carDetails";
import ScrollToTop from "./components/ScrollToTop";
import { Skeleton } from "./components/ui/skeleton";
import { ThemeProvider } from "./components/theme-provider";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";

function LoadingSkeleton({ path }) {
  const isAuthPage = path === "/login" || path === "/signup";

  if (!isAuthPage) return null;

  return (
    <div className="flex flex-col justify-center items-center h-[100dvh] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[100dvh] -z-10">
        <iframe
          src="https://gentle-priority-829072.framer.app/"
          style={{
            opacity: 0.8,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "130vh",
            border: "none",
            zIndex: -1,
          }}
          allow="fullscreen"
        />
      </div>

      <div className="w-[90dvw] max-w-sm min-h-[400px] bg-black/25 rounded-xl shadow-md p-6 space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );
}

function AppRouter({ isLogged, setIsLogged, checkLogin }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    checkLogin();
  }, [location.pathname]);
  if (isLogged === null) {
    return <LoadingSkeleton path={location.pathname} />;
  }

  return (
    <>
      <>
        {isLogged && <Header />}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        {isLogged && (
          <OptionBar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}
      </>
      <div
        style={{
          position: "fixed",
          top: "-80px",
          left: "-20px",
          width: "110vw",
          height: "110vh",
          border: "none",
          zIndex: 0,
          pointerEvents: "none",
        }}
        allow="fullscreen"
      >
        {/* <LightRays
    raysOrigin="top-center"
    raysColor="#ffffff"
    raysSpeed={0.8}
    lightSpread={1.3}
    rayLength={3}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.01}
    className="custom-rays"
  /> */}

        <DotGrid
          dotSize={8}
          gap={20}
          baseColor="#000"
          activeColor="#ffffff"
          proximity={150}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            isLogged ? (
              <Home setIsLogged={setIsLogged} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/signup"
          element={isLogged ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={
            isLogged ? <Navigate to="/" /> : <Login setIsLogged={setIsLogged} />
          }
        />
        <Route path="/uploadCar" element={<ListACar />} />
        <Route path="/updateCar/:id" element={<UpdateCar />} />
        <Route path="/getCarById/:id" element={<CarDetails />} />
        <Route path="/userCars" element={<UserCars />} />

        <Route path="/userCars/:userId?" element={<UserCars />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {isLogged && <Footer />}
    </>
  );
}

function App() {
  const [isLogged, setIsLogged] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  const checkLogin = async () => {
    try {
      const res = await fetch(`${API_URL}/check-login`, {
        credentials: "include",
      });
      const data = await res.json();

      setIsLogged(res.status === 200 && data?.message?.includes("true"));
    } catch (err) {
      console.error("Check-login failed:", err);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <ScrollToTop />
        <Toaster position="top-right" />
        <AppRouter
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          checkLogin={checkLogin}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
