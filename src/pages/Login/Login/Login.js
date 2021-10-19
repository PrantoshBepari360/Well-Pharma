import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import initializeAuthentication from "../Firebase/Firebase.init";
import "./Login.css";

initializeAuthentication();

const Login = () => {
    const { signInWithGoogle } = useAuth();

    const auth = getAuth();
    const [loggedInUser, setLoggedInUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            console.error("password must need to be at leaset 6 characters");
            return;
        } else {
            setPassword(e.target.value);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const { email, name, PhotoURL } = result.user;
                const userInfo = {
                    name: name,
                    email: email,
                    photo: PhotoURL,
                };
                setLoggedInUser(userInfo);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div>
            <h2>{loggedInUser.email}</h2>
            <div className="py-5">
                <h2>Login</h2>
                <p className="text-danger">{error}</p>
                <form onSubmit={handleLogin}>
                    <input
                        onChange={handleEmailChange}
                        type="email"
                        name="email"
                        placeholder="Your email"
                    />
                    <br />
                    <input
                        onChange={handlePasswordChange}
                        type="password"
                        name="password"
                        placeholder="Your password"
                    />
                    <br />
                    <input className="fs-4" type="submit" value="Login" />
                    <p className="mt-3 fs-4">
                        New to well Pharma website?{" "}
                        <Link to="/register">Create account.</Link>{" "}
                    </p>
                    <div> -----------or---------- </div>
                </form>
                <button onClick={signInWithGoogle} className="btn btn-primary">
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default Login;
