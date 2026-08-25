import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import LoadingScreen from "../components/LoadingScreen";

export default function MainLayout() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
