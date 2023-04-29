import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import { useHistory } from "react-router";
import axios from "axios";

export default function Register() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const { isfetching, user, error, dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      // password.current.setCustomValdity("Passwords don't match bro");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialCity</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialCity.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              className="loginInput"
              ref={username}
            />

            <input
              placeholder="Email"
              required
              type="email"
              className="loginInput"
              ref={email}
            />

            <input
              placeholder="Password"
              required
              type="password"
              minLength="6"
              className="loginInput"
              ref={password}
            />

            <input
              placeholder="Password Again"
              required
              type="password"
              minLength="6"
              className="loginInput"
              ref={passwordAgain}
            />
            <button type="submit" className="loginButton">
              {isfetching ? "loading" : "Sign Up"}
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
