import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";
import { useEffect } from "react";

const Header = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    console.log(theme);
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  return (
    <div className="flex justify-between">
      <h1 className="text-white text-3xl font-extrabold">T O D O</h1>
      {theme === "light" ? (
        <img
          src={iconSun}
          alt="sun"
          className="w-8 h-8"
          onClick={handleThemeChange}
        />
      ) : (
        <img
          src={iconMoon}
          alt="moon"
          className="w-8 h-8"
          onClick={handleThemeChange}
        />
      )}
    </div>
  );
};

export default Header;
