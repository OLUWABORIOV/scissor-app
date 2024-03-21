import * as React from 'react';
import Sline from "../assets/images/Sline.svg";
import Vectorhead from "../assets/images/Vectorhead.svg";
import { auth } from "../config/firebaseConfig";
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

interface IHeaderPgProps {
}

const HeaderPg: React.FunctionComponent<IHeaderPgProps> = () => {
     const navigate = useNavigate()

    const handleLogout = () => {

        try {
          signOut(auth).then(() =>{
              navigate('/Login')
              alert('Logout successful');
          }).catch(() => {
            alert('Logout failed');
          })
          
        } catch (error:any) {
          alert(error.message)
        }
      };
  return(
    <>
     <div className="header w-full fixed  top-0 z-50 ">
        <div className="header flex justify-between px-5  z-auto bg-[#1E3448] ">
          <div className="logo flex  justify-center items-center ">
            <img src={Sline} alt="S-Line" />
            <img src={Vectorhead} alt="line" />
            <h1 className="text-[#0065FE] font-bold text-3xl">SCISSOR</h1>
          </div>
                  {/* ---nav bar */}
          <div className=" nav-bar  flex p-5 ">
            <ul className="flex gap-10 items-center capitalize text-white">
                
              <li>
                <Link to="/signedin">home page</Link>
              </li>
              <li className="my-urls text-[#0065FE]">
                <Link to="/url">my urls</Link>
              </li>
              

              <li>
                <Link to="/feature">features</Link>
              </li>
              <li>
                <Link to="/analysis">analysis</Link>
              </li>
              <li>
              <Link to="/faqs">fAQs</Link>
            </li>
            </ul>
          </div>
                  {/* ----dashboard---- */}
          <div className="dashboard flex justify-center items-center gap-5">
            <p className="message text-[18px] text-white">
              Welcome, ~ {auth.currentUser?.email || "anonymous"}~
            </p>
            <button className="text-slate-700 bg-white hover:bg-slate-500 cursor-pointer py-2 px-5 rounded-md"
            onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  ) ;
};

export default HeaderPg;
