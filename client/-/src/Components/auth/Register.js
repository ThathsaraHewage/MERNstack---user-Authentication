import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from  "axios";

function Register() {

    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("");
    const [passwordVerify,setPasswordVerify] = useState("");


    async function register(e){
        e.preventDefault();

        try{
            const registerData ={
                email,
                password,
                passwordVerify,
            };

            await axios.post("http://localhost:5000/auth/register",registerData);
        }
        catch(err){
            console.error(err);
        }
    } 



  return (
      <div className="container">
          <br/><br/><h1>Register a new account</h1><br/><br/>

        <form onSubmit={register} class="row g-3">
        <div class="col-md-6">
            <label for="Email" class="form-label">Email</label>
            <input 
                type="email"
                 class="form-control" 
                 id="email"
                    onChange={(e)=>{setEmail(e.target.value)}} 
                    value={email}
             />

        </div><br/>
        <div class="col-md-6">
            <label for="password" class="form-label">Password</label>
            <input 
                type="password" 
                class="form-control" 
                id="password"
                onChange={(e)=>{setPassword(e.target.value)}} 
                value={password}
            />
        </div><br/>
        <div class="col-md-6">
            <label for="passwordVerify" class="form-label">Confirm Password</label>
            <input 
                type="password" 
                class="form-control" 
                id="passwordVerify"
                onChange={(e)=>{setPasswordVerify(e.target.value)}} 
                value={passwordVerify}
            />
        </div>
        
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
            <p>Already have an account? <a href ="/login" class="navbar-brand" >Login</a></p>
        </div>
      
        </form>
        </div>

  );
}

export default Register;
