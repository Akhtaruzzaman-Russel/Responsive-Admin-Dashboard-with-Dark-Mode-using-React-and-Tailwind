import { useState } from "react";
import Header from "./components/Header/Header";

const App = () => {
  const [darkMode, setdarkMode] = useState(false);

  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  }

  return (
        <div className={`${darkMode && "dark" } font-quickSand`}>
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
  )
}

export default App;