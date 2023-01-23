import { Outlet, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Entry() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

