import { useState } from "react";
import { loginUser } from "../lib/auth";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="container">
      <h1>Login</h1>

      <form
        className="container login-form"
        onSubmit={(event) => {
          event.preventDefault();
          const success = loginUser(username, password);
          console.log("success", success);
          if (success) {
            router.push("/products");
          } else {
            alert("Invalid credentials");
          }
        }}
      >
        <input
          placeholder="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
