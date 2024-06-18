import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";

function SignupForm() {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { signup } = useContext(AuthContext);

  const handleChange = (e) => {
    setSignupInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form
      className="center flex-col p-8 border-2 border-stone-300 m-10 rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        signup(signupInfo);
      }}
    >
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        value={signupInfo.email}
        onChange={handleChange}
      />

      <label htmlFor="username">username</label>
      <input
        type="text"
        name="username"
        value={signupInfo.username}
        onChange={handleChange}
      />

      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        value={signupInfo.password}
        onChange={handleChange}
      />
      <button type="submit" className="btn mt-4">
        register now
      </button>
    </form>
  );
}

export default SignupForm;
