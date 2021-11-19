import React, { useContext, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../../Firebase/firebase.initialize";

import { Form, Button } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

//firebase call function
initializeAuthentication();
const provider = new GoogleAuthProvider();

function Login() {
  const [name, setName] = useState("");
  // const [user, setuser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const [setloginUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // google sign in handler
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      // setloginUser(user.providerData[0]);
      // location.reload()
      history.replace(from);
    });
  };
  // toggle login
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  // handle name value
  const handleNameChanged = (e) => {
    setName(e.target.value);
  };
  // handle email value
  const handleEmailValue = (e) => {
    setEmail(e.target.value);
  };
  // handle password value
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  // handle handleRegistration
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    }
    // special characters check
    if (!/(?=.*[!#$%&? "])/.test(password)) {
      setError("Password must contain one special character");
      return;
    }
    isLogin ? processLogin(email, password) : createNewUser(email, password);
  };

  // user login
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        history.replace(from);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // create new user
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setloginUser(user);
        console.log("create account: ", user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  // update name
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  // verify email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((res) => {
      console.log(res);
    });
  };
  // reset password
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };
  return (
    <>
      <Navigation />
      <div className="App">
        <div className="container">
          <Form onSubmit={handleRegistration}>
            <h2 className="text-center text-primary my-3 mb-5 fw-bold">
              PLease {isLogin ? "Login" : "Register"}
            </h2>

            {!isLogin && (
              <Form.Group
                className="mb-3 w-50 mx-auto"
                controlId="formBasicName"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onBlur={handleNameChanged}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
            )}

            <Form.Group
              className="mb-3 w-50 mx-auto"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmailValue}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 w-50 mx-auto"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePasswordValue}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 mx-auto w-50"
              controlId="formBasicCheckbox"
            >
              <Form.Check
                onClick={toggleLogin}
                type="checkbox"
                label="Already Registerd?"
              />
            </Form.Group>

            <p className="text-danger">{error}</p>
            <Button variant="primary" type="submit">
              {isLogin ? "Login" : "Register"}
            </Button>
            <Button
              className="btn btn-danger ms-2"
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </Form>
        </div>
        {/* google signin */}
        <div className="my-3">
          <h4 className=" text-center my-3 mt-5">Or Sign in with Google</h4>
          <Button onClick={handleGoogleSignIn}>Google sign in</Button> <br />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
