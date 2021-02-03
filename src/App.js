import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from "react-loading";

function App() {
  const [state, setState] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    dispatch({
      type: "login_request",
      payload: state,
    });
  };
  const { isLoggedIn, loading } = userData;
  return (
    <div className="App">
      <fieldset>
        {loading && (
          <ReactLoading delay={5} type="spinningBubbles" color="red" />
        )}
        {isLoggedIn ? (
          <p>Success login</p>
        ) : (
          <>
            <legend>Login Form </legend>
            <label>Email</label>:
            <input
              value={state.email}
              type="text"
              onChange={handleChange}
              name="email"
            />
            <br />
            <label>Password</label>:
            <input
              value={state.password}
              type="password"
              onChange={handleChange}
              name="password"
            />
            <br />
            <button disabled={loading} onClick={handleLogin}>
              Login{" "}
            </button>
          </>
        )}
      </fieldset>
    </div>
  );
}

export default App;
