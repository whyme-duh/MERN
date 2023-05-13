import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginApi } from "../../api/api";

const Login= () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      loginApi({
        password : pass,
        email:email

      }).then((res) => {
        console.log(res.data);
        // setting token and user in local storage
        localStorage.setItem("token" ,res.data.token);
        localStorage.setItem("user" ,JSON.stringify(res.data.user));
        toast.success("Logged in successfully");
      }).catch((err) => {
        toast.error("User login failed" );
      });
      
    } catch (error) {
      toast.error("Error in frontend");
    }
  };
    return (
        <>
        <div className="container w-25 mt-5">
        <form action="">
        <div className="form-group">
            <h5 className="text-center">Login</h5>

            <label htmlFor="email">Email</label>
            <input
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e)=> setPass(e.target.value)}
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary mt-3 w-100"
          >
            Login
          </button>
        </form>

        <p className='mt-5'>Don't have account? <Link to ='/register'>Register Now.</Link></p>
        </div>
        
        </>
    );
}

export default Login;