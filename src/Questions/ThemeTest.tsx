import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUserName } from "../redux/slice/userSlice";

const ThemeTest = () => {
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();
  const { authenticated, toggleAuthentication } = useAuth();
  const [name, setName] = useState("");

  const userData = useSelector((store: any) => store.userData);

  const handleChangeName = () => {
    dispatch(addUserName(name));
  };

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

      <div>
        <h1>redux test</h1>
        <div>Name from redux - {userData.name}</div>

        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => handleChangeName()}>Change Name</button>
        </div>
      </div>
    </>
  );
};

export default ThemeTest;
