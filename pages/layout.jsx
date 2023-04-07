import Header from "../components/Header/Header";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div className="py-5 px-2 min-h-screen dark:bg-primary">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
        <Footer />
      </div>
    </>
  );
}
