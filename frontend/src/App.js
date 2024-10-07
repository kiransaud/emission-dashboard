import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Nav";
import Home from "./pages/Home/home";
import Contribute from "./pages/Contribute/contribute";
import Community from "./pages/Community/community";
import APIDocs from "./pages/APIDocs/apidocs";
import Search from "./pages/Search/search";
import Contact from "./pages/Contact/contact";
import Signup from "./pages/Auth/signup";
import Login from "./pages/Auth/login";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [darkMode, setDarkMode] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("isLoggedIn", isLoggedIn)
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "/home":
        return <Home />;
      case "/search":
        return <Search darkMode={darkMode}/>;
      case "/contribute":
        return <Contribute darkMode={darkMode} isLoggedIn={isLoggedIn} onLogin={handleLogin} setCurrentPage={setCurrentPage} />;
      case "/community":
        return <Community darkMode={darkMode}/>;
      case "/api-docs":
        return <APIDocs darkMode={darkMode}/>;
      case "/about-us":
        return <Contact darkMode={darkMode}/>;
        case '/login':
          return <Login darkMode={darkMode} onLogin={handleLogin} setCurrentPage={setCurrentPage} currentPage={currentPage} />;
        case '/signup':
          return <Signup darkMode={darkMode} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {renderPage()}
    </>
  );
}

export default App;