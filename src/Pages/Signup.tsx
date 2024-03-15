import { useState } from "react";
// import Button from "../components/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import google from "../assets/images/google.svg";
import apple from "../assets/images/apple.svg";
import { useAuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
// import { auth } from "../config/firebaseConfig";

function Signup() {
  const { googleSignIn, createUser } = useAuthContext();

  const handleGoogleSubmit = () => {
    googleSignIn();
  };

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });
  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", email: "", password: "" };
    //username validation
    if (!username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    }
    // Email validation
    if (!email.trim()) {
      newErrors.email = "This field is required";
      valid = false;
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    try {
      if (validateForm()) {
        console.log("Form submitted with:", username, email, password);
        createUser(email, password);
        navigate("/Login");
      } else {
        console.log("Form validation failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handleClick = () => {
    // Your click event logic
    console.log("Button clicked!");
  };

  return (
    <div className=" flex justify-center items-center ">
      <div className=" container ">
        <div className="flex flex-col mb-24 justify-center p-8 items-center">
          <div className="flex flex-col w-full  items-center  justify-center">
            <div className=" sign-up with apple and google flex items-center flex-col p-8 gap-8 w-1/2">
              <h3>Sign up with:</h3>
              <div className=" flex items-center justify-center w-[109px] h-[40px] gap-9">
                <button
                  className="btn-1 flex py-2 px-8 text-center gap-2 bg-blue-700 hover:bg-blue-800 text-white rounded-sm "
                  onClick={handleGoogleSubmit}
                >
                  <img src={google} alt="google" />
                  Google
                </button>
                <button
                  className="btn-2 flex py-2 px-8 text-center items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white rounded-sm "
                  onClick={handleClick}
                >
                  <img src={apple} alt="apple" />
                  Apple
                </button>
              </div>

              <div className="line flex items-center gap-4">
                <div className="w-[200.5px] border  border-[#98A2B3] "></div>
                <p className="uppercase text-[#5C6F7F]text-[12px] font-semibold tracking-widest">
                  Or
                </p>
                <div className="w-[200.5px] border  border-[#98A2B3] "></div>
              </div>
            </div>
            <div className=" form-section flex justify-center items-center">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex p-6 flex-col gap-6 w-full justify-center"
              >
                <div className=" username mx-9">
                  <input
                    type="username"
                    placeholder="Username"
                    id="username"
                    className={`border p-2 h-[46px] w-[462px] rounded-md border-blue-600 ${errors.username && "border-red-500"}`}
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setErrors({ ...errors, username: "" });
                    }}
                  />
                  {errors.username && (
                    <p className="text-red-500">{errors.username}</p>
                  )}
                </div>
                <div className=" Email mx-9">
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className={`border p-2 h-[46px] w-[462px] rounded-md border-blue-600 ${errors.email && "border-red-500"}`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors({ ...errors, email: "" });
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="password mx-9">
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className={`border p-2 h-[46px] w-[462px] rounded-md border-blue-600 ${errors.password && "border-red-500"}`}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors({ ...errors, password: "" });
                    }}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )}
                </div>
                <div className="retype mx-9">
                  <input
                    type=" retype password"
                    placeholder="Retype Password"
                    id="retype-password"
                    className={`border p-2 h-[46px] w-[462px] rounded-md border-blue-600 ${errors.password && "border-red-500"}`}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors({ ...errors, password: "" });
                    }}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col justify-center items-center ">
              <p className="text-[#A0B1C0] w-[460px] text-xs mx-9 flex justify-start">
                6 or more characters, one number, one uppercase & one lower
                case.
              </p>
              <button
                type="submit"
                className="w-[460px] h-[38px] capitalize px-[12px] py-[24px] m-9 flex items-center justify-center bg-[#005AE2] hover:[#005AE2] text-white text-[14px] rounded-full"
                onClick={handleSubmit}
              >
                sign up with email
              </button>
              <p className="mb-5 w-[460px] text-center text-[#A0B1C0] ">
                Already have an account?{" "}
                <span className="text-[#005AE2]">
                  {" "}
                  <Link to={"/Login"}> Log in</Link>
                </span>
              </p>

              <p className="w-full flex justify-center flex-col text-center text-[#A0B1C0]">
                By signing in with an account, you agree to{" "}
                <span className="flex gap-2 justify-center text-[#A0B1C0]">
                  {" "}
                  Scissor's{" "}
                  <span className=" flex font-bold text-[#5C6F7F] gap-2">
                    {" "}
                    Terms of Service, Privacy Policy,{" "}
                    <span className="text-[#A0B1C0]"> and</span>{" "}
                    <span className="text-[#5C6F7F]">
                      {" "}
                      Acceptable Use Policy.
                    </span>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Signup;
