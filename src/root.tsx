import { Outlet } from "react-router-dom";
import Footer from "./components/utils/Footer";
import Header from "./components/utils/Header";

export default function Root() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
