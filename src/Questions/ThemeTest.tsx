import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const ThemeTest = () => {
  const { theme, toggleTheme } = useTheme();
  const { authenticated, toggleAuthentication } = useAuth();

  return (
    <>
      <div>
        <div>current theme = {theme}</div>
        <div>
          <button onClick={() => toggleTheme()}>Change Theme</button>
        </div>
      </div>

      <div>
        <div>
          current Auth = {authenticated ? "Authenticated" : "Not Authenticated"}
        </div>
        <div>
          <button onClick={() => toggleAuthentication()}>
            Change Authentication
          </button>
        </div>
      </div>
    </>
  );
};

export default ThemeTest;
