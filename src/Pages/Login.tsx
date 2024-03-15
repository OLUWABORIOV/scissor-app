import { useState } from "react";
// import Button from "../components/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import google from "../assets/images/google.svg";
import apple from "../assets/images/apple.svg";
import { useAuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { googleSignIn, signInUser } = useAuthContext();

  const handleGoogleSubmit = () => {
    googleSignIn();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const navigate = useNavigate();
  //
  const handleSubmit = async () => {
    try {
      if(validateForm()) {
        await signInUser(email, password);
        console.log("Form submitted with:", email, password);
        navigate("/signedin");
      }
    } catch (error:any) {
      console.log(error)
      alert(error.message);
    }
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className=" flex justify-center items-center ">
      <div className=" container ">
        <div className="flex flex-col mb-24 justify-center p-8 items-center">
          <div className="flex flex-col w-full  items-center  justify-center">
            <div className=" sign-up with apple and google flex items-center flex-col p-8 gap-8 w-1/2">
              <h3>Log in with:</h3>
              <div className=" flex items-center justify-center w-[109px] h-[40px] gap-9">
                <div className="btn-1 flex py-2 px-8 text-center bg-blue-700 hover:bg-blue-800 text-white rounded-sm ">
                  <img src={google} alt="google" />
                  {/* <Button label=" Google" onClick={handleGoogleSubmit} /> */}
                  <button onClick={handleClick}>
                    Google
                  </button>
                </div>
                <div className="btn-2 flex py-2 px-8 text-center bg-blue-700 hover:bg-blue-800 text-white rounded-sm ">
                  <img src={apple} alt="apple" />
                  {/* <Button label="  Apple" onClick={handleClick} /> */}
                  <button onClick={handleClick}>Apple</button>
                </div>
              </div>

              <div className="line flex items-center gap-4">
                <div className="w-[200px] border border-[#98A2B3] "></div>
                <p className="uppercase text-[#5C6F7F]text-[12px] font-semibold tracking-widest">
                  Or
                </p>
                <div className="w-[200px] border border-[#98A2B3] "></div>
              </div>
            </div>
            <div className=" form-section flex justify-center items-center">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex p-6 flex-col gap-6 w-full justify-center"
              >
                <div className="email mx-9">
                  {" "}
                  <input
                    type="text"
                    placeholder="Email address or Username"
                    className={`border  rounded-md p-2 h-[46px] w-[462px] border-blue-600 ${errors.email && "border-red-500"}`}
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
          <div className="w-full">
            <div className="flex flex-col justify-center items-center ml-9 ">
              <div className="w-1/3">
                <Link to="/forgetPassword">
                  <p className="text-[#005AE2] flex justify-end items-end  ">
                    Forgot your password?
                  </p>
                </Link>
              </div>
              <div className="login-btn">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-[460px] h-[48px] px-[12px] py-[24px] m-9 flex items-center justify-center bg-[#005AE2] hover:[#005AE2] text-white text-[14px] rounded-full"
                  >
                    {/* <Button label="Log in" /> */}
                    Login
                  </button>
              </div>

              <p className="mb-5 w-[460px] text-center text-[#A0B1C0] ">
                Don't have an account?
                <span className="text-[#005AE2]">
                  <Link to={"/signup"}> Sign up</Link>
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
export default Login;
